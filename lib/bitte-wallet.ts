type WalletInfo = {
  address: string;
  type: "MetaMask" | "Bitte";
  shortAddress: string;
};

type BitteWalletOptions = {
  networkId?: "mainnet" | "testnet";
  walletUrl?: string;
  callbackUrl?: string;
};

export class BitteWallet {
  private static instance: BitteWallet;
  private connected = false;
  private walletInfo: WalletInfo | null = null;
  private networkId: "mainnet" | "testnet";
  private walletUrl: string;
  private callbackUrl: string;

  private constructor(options: BitteWalletOptions) {
    this.networkId = options.networkId || "mainnet";
    this.walletUrl =
      options.walletUrl ||
      (this.networkId === "mainnet"
        ? "https://wallet.bitte.ai"
        : "https://testnet.wallet.bitte.ai");
    this.callbackUrl = options.callbackUrl || window.location.href;
  }

  static getInstance(options?: BitteWalletOptions): BitteWallet {
    if (!BitteWallet.instance) {
      if (!options) {
        options = { networkId: "mainnet" };
      }
      BitteWallet.instance = new BitteWallet(options);
    }
    return BitteWallet.instance;
  }

  async connect(): Promise<WalletInfo> {
    // URLのクエリパラメータに認証情報が含まれているかチェック
    const params = new URLSearchParams(window.location.search);
    if (params.has("account_id") && params.has("public_key")) {
      const accountId = params.get("account_id") as string;
      // 認証完了後、クエリパラメータを除去（クリーンなURLにするため）
      window.history.replaceState({}, document.title, window.location.pathname);
      this.connected = true;
      this.walletInfo = {
        address: accountId,
        type: "Bitte",
        shortAddress: accountId.length > 10 ? accountId.slice(0, 10) + "..." : accountId,
      };
      return this.walletInfo;
    } else {
      // 認証情報がない場合はウォレット接続用URLへリダイレクト
      const connectUrl = `${this.walletUrl}/connect?success_url=${encodeURIComponent(
        this.callbackUrl
      )}`;
      window.location.href = connectUrl;
      return new Promise(() => {}); // リダイレクト後はここで止まる
    }
  }

  async disconnect(): Promise<void> {
    this.connected = false;
    this.walletInfo = null;
  }

  isConnected(): boolean {
    return this.connected;
  }

  getWalletInfo(): WalletInfo | null {
    return this.walletInfo;
  }
}

export const bitteWallet = BitteWallet.getInstance({
  networkId: "testnet",
  walletUrl: "https://testnet.wallet.bitte.ai",
  callbackUrl: "https://nero-kappa.vercel.app/",
});
