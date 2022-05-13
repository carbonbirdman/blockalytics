// Simple interrogation of the Beethoven Vault
const ethers = require("ethers");
const vaultAddress = "0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce​";
const vaultABI = require("../abi/balancerVaultABI.json");
var ftm_main_url = "https://rpc.ftm.tools/";
const provider = new ethers.providers.JsonRpcProvider(ftm_main_url);
const vault_contract = new ethers.Contract(vaultAddress, vaultABI, provider);

console.log("Address:", vaultAddress);
console.log(vault_contract);
