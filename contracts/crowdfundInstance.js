/* eslint-disable */
import web3 from './web3';

const address = '0xf2cA0d9D3340e30a31761a500cb17d647f00eAa2'; // Your deployed contract's address goes here
// Example:
// const address = '0x09r80cnasjfaks93m9v2';

const abi = 
	[
    {
      "constant": false,
      "inputs": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "durationInDays",
          "type": "uint256"
        },
        {
          "name": "amountToRaise",
          "type": "uint256"
        }
      ],
      "name": "startProject",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "contractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "projectStarter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "projectTitle",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "projectDesc",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "deadline",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "goalAmount",
          "type": "uint256"
        }
      ],
      "name": "ProjectStarted",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "returnAllProjects",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]; // Your ABI goes here (Crowdfunding contract)
// Example:
// const abi = [
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "name": "contractAddress",
//                 "type": "address"
//             }
//         ],
//         "name": "ProjectStarted",
//         "type": "event"
//     }
// ];

const instance = new web3.eth.Contract(abi, address);

export default instance;
