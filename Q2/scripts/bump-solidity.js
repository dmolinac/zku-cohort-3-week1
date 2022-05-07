const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// Multiplier3 verifier contract
const fs_m = require("fs");

let content_m = fs_m.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped_m = content_m.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_m = bumped_m.replace(verifierRegex, 'contract Multiplier3Verifier');

fs_m.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_m);
