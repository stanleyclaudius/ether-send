require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9bifoHx05BRFH_FVYLLRnmY91_tMvTfj',
      accounts: [ process.env.ACCOUNT_PRIVATE_KEY ]
    }
  }
}