import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../constants/connect";
import { decodeText } from "../../helpers/stringEncoder";
import { ethers } from "ethers";

import { createWalletClient, http, publicActions } from "viem";
import { baseGoerli, lineaTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const PK = process.env.PRIVATE_KEY as string;
//@ts-ignore
const account = privateKeyToAccount(PK);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { tx_ref } = req.body;

  //decode receiver address and amount
  const [receiverAddress, amount, chain] = decodeText(tx_ref);

  //dynamically handle multi-contracts
  const client = createWalletClient({
    account,
    chain: chain == "84531" ? baseGoerli : lineaTestnet,
    transport: http(),
  }).extend(publicActions);

  if (req.method === "POST") {
    try {
      //todo: bank-end should call price API

      //prepare txn
      const { request } = await client.simulateContract({
        //@ts-ignore
        address: connect?.[chain]?.usdc.address,
        //@ts-ignore
        abi: connect?.[chain]?.usdc?.abi,
        functionName: "transfer",
        args: [receiverAddress, ethers.parseEther(amount)],
      });

      //@ts-ignore transfer the amount to receiver
      const transactionHash = await client?.writeContract(request);

      res.status(200).json({ tx_hash: transactionHash });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
