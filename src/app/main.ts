import { AztecNodeClient } from "../lib/index";

const main = async () => {
  const NODE_URL = process.env.NODE_URL;
  if (!NODE_URL) {
    throw new Error("NODE_URL environment variable is not set");
  }

  const client = new AztecNodeClient(NODE_URL);

  const blockNumber = await client.getBlockNumber();
  console.log(`Current block number: ${blockNumber}`);

  const mempoolTxCount = await client.getMempoolTxCount();
  console.log(`Current mempool transaction count: ${mempoolTxCount}`);

  const mempoolTxs = await client.getMempoolTxs();
  console.log("mempool transactions:", mempoolTxs);
};

main();
