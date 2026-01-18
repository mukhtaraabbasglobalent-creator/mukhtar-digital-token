let web3;
let contract;

const contractAddress = "PASTE_CONTRACT_ADDRESS_LATER";
const abi = [];

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await web3.eth.getAccounts();
    document.getElementById("account").innerText = "Connected: " + accounts[0];

    contract = new web3.eth.Contract(abi, contractAddress);

    const balance = await contract.methods.balanceOf(accounts[0]).call();
    document.getElementById("balance").innerText =
      "Balance: " + web3.utils.fromWei(balance);
  } else {
    alert("Install MetaMask");
  }
}

async function transfer() {
  const accounts = await web3.eth.getAccounts();
  const to = document.getElementById("to").value;
  const amount = web3.utils.toWei(document.getElementById("amount").value);

  await contract.methods.transfer(to, amount).send({ from: accounts[0] });
  alert("Transfer successful!");
}
