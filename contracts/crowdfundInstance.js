/* eslint-disable */
import web3 from './web3';

const address = '0x712a0A96700f7b3E26A893F629Fcd93c887BCF19';

const abi = 
[
	{
		"constant": true,
		"inputs": [],
		"name": "returnAllCampaigns",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
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
		"name": "startCampaign",
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
				"name": "coAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ownerAdress",
				"type": "address"
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
			},
			{
				"indexed": false,
				"name": "campaignTitle",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "campaignDesc",
				"type": "string"
			}
		],
		"name": "CampaignStarted",
		"type": "event"
	}
]

const instance = new web3.eth.Contract(abi, address);

export default instance;
