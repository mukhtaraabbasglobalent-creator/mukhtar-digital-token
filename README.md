# Mukhtar Digital Token (MDT) 🚀

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/mukhtar-digital-token)
![License](https://img.shields.io/badge/license-MIT-green)

## Overview

**Mukhtar Digital Token (MDT)** is an advanced ERC-20 token built using Solidity and OpenZeppelin libraries.  
This project demonstrates blockchain development skills suitable for fintech, digital money, and cybersecurity portfolios.

---

## Features

- ✅ **ERC-20 Standard**: Fully compliant token
- ✅ **Minting**: Owner can create new tokens
- ✅ **Burning**: Users can burn their own tokens, or allowed tokens
- ✅ **Ownership control**: Secure contract management
- ✅ **Testnet Ready**: Deployable on Ethereum testnets (Goerli, Sepolia)

---

## Contract Code

The main smart contract file: `MukhtarTokenAdvanced.sol`  

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MukhtarToken is ERC20, Ownable {

    constructor(uint256 initialSupply) ERC20("Mukhtar Digital Token", "MDT") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function burnFrom(address account, uint256 amount) external {
        _spendAllowance(account, msg.sender, amount);
        _burn(account, amount);
    }
}# mukhtar-digital-token
Advanced ERC-20 token with minting, burning, and ownership controls, built for portfolio demonstration.
