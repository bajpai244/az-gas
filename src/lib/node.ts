import { createAztecNodeClient, Tx, type AztecNode } from "@aztec/aztec.js";

export class AztecNodeClient {
  private client: AztecNode;

  constructor(nodeUrl: string) {
    this.client = createAztecNodeClient(nodeUrl);
  }

  async getBlockNumber(): Promise<number> {
    return await this.client.getBlockNumber();
  }

  async getMempoolTxCount(): Promise<number> {
    return await this.client.getPendingTxCount();
  }

  async getMempoolTxs(): Promise<Tx[]> {
    return await this.client.getPendingTxs();
  }
}
