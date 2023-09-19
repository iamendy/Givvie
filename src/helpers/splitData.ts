import { ethers } from "ethers";

function splitData(data: any) {
  const x = [];
  const y = [];

  for (let i = 0; i < data.length; i++) {
    x.push(ethers.formatEther(data[i].amount || 0));
    y.push(parseInt(data[i].duration));
  }

  return [x, y];
}

// const [amounts, durations] = splitData(data);

// console.log(amounts); // [10, 15, 20]
// console.log(durations); // ["30mins", "1hr", "2hrs"]

export default splitData;
