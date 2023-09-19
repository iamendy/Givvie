import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../constants/connect";
import { decodeText } from "../../helpers/stringEncoder";
import { client } from "../../constants/walletClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { tx_ref } = req.body;

  if (req.method === "POST") {
    try {
      //decode receiver address and amount
      const receiverAddress = decodeText(tx_ref);

      //prepare txn
      const { request } = await client.simulateContract({
        address: connect?.usdc.address,
        abi: connect?.usdc?.abi,
        functionName: "transfer",
        args: [receiverAddress, 100000000000000000],
      });

      //transfer the amount to receiver
      const transactionHash = await client.writeContract(request);

      res.status(200).json({ tx_hash: transactionHash });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
