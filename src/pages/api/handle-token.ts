import type { NextApiRequest, NextApiResponse } from "next";
import { createWalletClient, http, parseEther } from "viem";
import { celoAlfajores } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const PK = process.env.PRIVATE_KEY as string;
const account = privateKeyToAccount(PK);

const client = createWalletClient({
  account,
  chain: celoAlfajores,
  transport: http(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const hash = await client.sendTransaction({
        to: "0xCa1604B345ac7001e7F442676d02F0E22797118a",
        value: parseEther("0.1"),
      });
      res.status(200).json({ msg: hash });
    } catch (e) {
      res.status(500).json({ msg: e });
    }
  }
}
