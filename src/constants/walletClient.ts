import { createWalletClient, http, publicActions } from "viem";
import { celoAlfajores } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const PK = process.env.PRIVATE_KEY as string;
//@ts-ignore
const account = privateKeyToAccount(PK);

const client = createWalletClient({
  account,
  chain: celoAlfajores,
  transport: http(),
}).extend(publicActions);

export { client, account };
