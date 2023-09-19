import {
  createPublicClient,
  createWalletClient,
  http,
  parseEther,
  publicActions,
} from "viem";
import { celoAlfajores } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const PK = process.env.PRIVATE_KEY as string;

const account = privateKeyToAccount(PK);

const client = createWalletClient({
  account,
  chain: celoAlfajores,
  transport: http(),
}).extend(publicActions);

export { client, account };
