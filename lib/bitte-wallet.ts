type WalletInfo = {
  address: string
  type: "MetaMask" | "Bitte"
  shortAddress: string
}

export class BitteWallet {
  private static instance: BitteWallet
  private connected = false
  private walletInfo: WalletInfo | null = null

  private constructor() {}

  static getInstance(): BitteWallet {
    if (!BitteWallet.instance) {
      BitteWallet.instance = new BitteWallet()
    }
    return BitteWallet.instance
  }

  async connect(): Promise<WalletInfo> {
    // Simulated wallet connection
    this.connected = true
    this.walletInfo = {
      address: "0Bhv9X0...65Xc",
      type: "Bitte",
      shortAddress: "0Bhv9X0...65Xc",
    }
    return this.walletInfo
  }

  async disconnect(): Promise<void> {
    this.connected = false
    this.walletInfo = null
  }

  isConnected(): boolean {
    return this.connected
  }

  getWalletInfo(): WalletInfo | null {
    return this.walletInfo
  }
}

export const bitteWallet = BitteWallet.getInstance()

