const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'minimum wisdom present enable sure chat ignore easily grass health gold because',
    `https://rinkeby.infura.io/v3/da4ba765122b4e029ba401cce0d1a748`
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas: '15000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};

deploy();