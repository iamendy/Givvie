# Givvie x ETHSAFARIDAO [TAKAI]

Live Demo - [Loom](https://www.loom.com) <br />
Live Link - [Chainwise](https://rainfy.vercel.app) <br />
Slides - [Slides](https://givvie.vercel.app)

## ✨ Inspiration

Inflation in Africa is on the rise. As of 2022, the overall inflation rate in Sub-Saharan Africa is expected to grow to 12.2 percent. The surge follows a global tendency, as consumer prices soar all over the world, impacting advanced as well as emerging and developing economies

In Nigeria, where most youths are tech savvy, they're converting their Naira to USD through the banks, to hedge against hyperinflation. This comes with extra overhead of account maintenace costs, service charges and other charges by the bank. This approach tend to create more problem than it solves.

Just like planting a seed that grows into a mighty tree, [Givvie](https://givvie.vercel.app) empowers you to start small and watch your savings flourish over time. With Flutterwave and Fonbnk integration, users can easily purchase USDC through their phone airtime, mobile money and debit cards and save their USDC on the blockchain. Every savings you make is recorded on the blockchain, ensuring the utmost security and transparency. No more hidden fees or surprises – everything is clear and accessible at your fingertips.

## 🍰 What Rainfy does

[Givvie](https://givvie.vercel.app) is not just an onchain savings app; we're your financial companion, your motivator, and your partner in achieving your financial goals.

Our features which includes :

- 1. setting savings duration,
- 2. visualizing your progress
- 3. early retrieval penalty, which inspire and guide you on your journey to financial well-being.

You also earn GIVV tokens when you meet your savings target which allows you to access future features like utility bills payments, onchain loan services and so much more.

![Givvie Dashboard](/public/img/preview.png)

## 💻 How we built Givvie

We created 2 smart contracts in Solidity, [**Givvie.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/Rainfy.sol) and [**GivvieToken.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/RainfyToken.sol). In order to simulate USDC without the extra delay, we created a fake USDC contract [**USDCToken.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/USDCToken.sol)

- The Givvie contract handles the piggy bank creation, management and breaking after duration. This contract is deployed on Linea Goerli and Base Goerli chains.

1. Transfer USDC
   [View on Linear Goerli](https://)

   [View on Base Goerli](https://)

2. Successful saving
   [View on Linea Goerli](https://)

   [View on Base Goerli](https://)

3. Break Piggy
   [View on Linear Goerli](https://)

   [View on Base Goerli](https://)

4. Mint GivvieToken
   [View on Linear Goerli](https://)

   [View on Base Goerli](https://)

- The GivvieToken is used for rewarding users who successfully save and also serves as a dApp utility token. It is an ERC20 token that users earn when they successfully achieve their savings goal
  - [View on Linea Goerli](https://)
  - [View on Base Chiado](https://)

For dapp development, We used **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Viem`** **`nodejs`** and **`TailwindCSS`** .

Rainfy integrates with Flutterwave and FonBnk which allows easy Naira onRamp, thereby allowing users greater flexibility to onboard.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Built a multichain dApp on Base Goerli and Linea Goerli which means our users will have the best of speed, security and scalability for our users. <br />
🍥 Had fun, and learnt a whole lot participating in this hackathon. <br />

## 📈 What's next for Givvie

We're excited to have built Givvie to enable more users build better financial habits and hedge against inflation by leveraging on the blockchain technology. We plan to:

- Introduce more usecases for Givvie token as incentives for users to save more.
- Implement services like decentralized loan protocols, utility bills settlement with digital assets and offRamp integration.
- Add a liquidity pool that users can easily exchange GIVV Token for USDC.

Thank you!

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Remix](https://remix.ethereum.org) for quick smart contract deployment, or alternatively Hardhat:

1. Deploy fake `USDCToken` on Linea Goerli and Base Goerli.

1. Deploy `Givvie` on Linea Goerli and Base Goerli by passing the deployed `USDCToken` address

1. Deploy `GivvieToken` on Linea Goerli and Base Goerli by passing the deployed `Givvie` address.

\***\* Frontend \*\***

3. Update your deployed contract addresses on the `src/connect.ts file.

4. Run `npm run dev` to start the DApp on your development environment.

5. Connect your wallet and enjoy a world of limitless possibilities.
