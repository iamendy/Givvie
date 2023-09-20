# Givvie x ETHSAFARIDAO [TAKAI]

Live Demo - [Youtube](https://youtu.be/LLQAl4Kr0RA) <br />
Live Link - [Givvie](https://givviedapp.vercel.app) <br />
Slides - [Slides](https://givviedapp.vercel.app/GivvieSlides.pdf)

## ✨ Inspiration

Hyperinflation in Africa is on the rise. As of 2022, the overall inflation rate in Sub-Saharan Africa is expected to grow to 12.2 percent. The surge follows a global tendency, as consumer prices soar all over the world, impacting advanced as well as emerging and developing economies

In Nigeria, where most youths are tech savvy, they're converting their Naira to USD through the banks, to hedge against hyperinflation. This comes with extra overhead of account maintenace costs, service charges and other charges by the bank. This approach tend to create more problem than it solves.

Just like planting a seed that grows into a mighty tree, [Givvie](https://givviedapp.vercel.app) empowers you to start small and watch your savings flourish over time. With Flutterwave and Fonbnk integration, users can easily purchase USDC through their phone airtime, mobile money and debit cards and save their USDC on the blockchain. Every savings you make is recorded on the blockchain, ensuring the utmost security and transparency. No more hidden fees or surprises – everything is clear and accessible at your fingertips.

## 🍰 What Givvie does

[Givvie](https://givviedapp.vercel.app) is not just an onchain savings app; we're your financial companion, your motivator, and your partner in achieving your financial goals.

Our features which includes :

- Setting savings duration,
- Visualizing your progress
- Early retrieval penalty, which inspire and guide you on your journey to financial well-being.

You also earn GIVV tokens when you meet your savings target which allows you to access future features like utility bills payments, onchain loan services and so much more.

![Givvie Dashboard](/public/img/preview.png)

## 💻 How we built Givvie

We created 3 smart contracts in Solidity, [**Givvie.sol**](https://github.com/iamendy/Givvie/blob/main/contract/Givvie.sol) and [**GivvieToken.sol**](https://github.com/iamendy/Givvie/blob/main/contract/GivvieToken.sol). In order to simulate USDC without the extra delay, we created a fake USDC contract [**USDCToken.sol**](https://github.com/iamendy/Givvie/blob/main/contract/USDCToken.sol)

- The Givvie contract handles the piggy bank creation, management and breaking after duration. All contracts are deployed on Linea Goerli and Base Goerli chains.

1. USDC transfer txn - [View on Linear Goerli](https://explorer.goerli.linea.build/tx/0x5084abc18954b66bbeb4052045cc083930370a28b3428b43cfe619d7c71a014f) | [View on Base Goerli](https://goerli.basescan.org/tx/0x2c836016bf10b8817ba06324c8472ed2a7ba934f73506244c6abbc413ca36274)

2. Successful saving txn - - [View on Linear Goerli](https://explorer.goerli.linea.build/tx/0x4f6bb72d9aec6cf78233d5d5f77a63eb7eb92aec950c50778af97178f60728b6) | [View on Base Goerli](https://goerli.basescan.org/tx/0x5649b24a64d943e9c755cfcfacd35f9bc3f53d5a234ab8c6cfb737b0ae11e4ce)

3. Break Piggy txn - [View on Linear Goerli](https://explorer.goerli.linea.build/tx/0xa5e1ddffe04c8f30f4d0ff5a60314c6f70809b453b789883f451b245184577f1) | [View on Base Goerli](https://goerli.basescan.org/tx/0x8b24d613c8fe641328d8b3f96ffcfb4ce3f3d9d107d3555a5ef73ef3996db4ef)

4. Mint GivvieToken txn - [View on Linear Goerli](https://explorer.goerli.linea.build/tx/0xa5e1ddffe04c8f30f4d0ff5a60314c6f70809b453b789883f451b245184577f1) | [View on Base Goerli](https://goerli.basescan.org/tx/0x8b24d613c8fe641328d8b3f96ffcfb4ce3f3d9d107d3555a5ef73ef3996db4ef)

- The GivvieToken is used for rewarding users who meet their savings goal and also serves as a dApp utility token on Givvie.
  - [View on Linea Goerli](https://explorer.goerli.linea.build/token/0xb4F4D59a4dA438bb2a61FEE40afefF76dAFCf566/token-transfers)
  - [View on Base Goerli](https://goerli.basescan.org/token/0xb4F4D59a4dA438bb2a61FEE40afefF76dAFCf566)

For dapp development, We used **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Viem`** **`nodejs`** and **`TailwindCSS`** .

Givvie integrates with **`Flutterwave`** and **`FonBnk`** which allows easy Naira onRamp, thereby allowing users greater flexibility to onboard.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Built a multichain dApp on Base Goerli and Linea Goerli which means our users will have the best of speed, security and scalability for our users. <br />
🍥 Had fun, and learnt a whole lot participating in this hackathon. <br />

## 📈 What's next for Givvie

We're excited to have built Givvie to enable more users build better financial habits and hedge against inflation by leveraging on the blockchain technology. We plan to:

- Add support for more African currencies.
- Introduce more personal finance usecases for Givvie token as incentives for users to save more.
- Implement access to services like decentralized loan protocols, utility bills settlement with digital assets and offRamp integration.
- Add a liquidity pool that users can easily exchange GIVV Token for USDC.
- Implement smart wallet accounts for our users to enable easier onboarding.

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
