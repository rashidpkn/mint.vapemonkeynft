import { contractABI, contractAddress } from './contract'
const alchemyKey =
  'https://eth-mainnet.g.alchemy.com/v2/OxMgQ2cm0PfebhZljLPV9GuTtyNGsHFA'
const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(alchemyKey)

export const connectWallet = async () => {
  if (window.ethereum) {
    console.log('attempting to connect wallet')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      const obj = {
        status: '👆🏽 Write a message in the text-field above.',
        address: addressArray[0],
      }

      return obj
    } catch (err) {
      console.log(err)
      return {
        address: '',
        status: '😥 ' + err.message,
      }
    }
  } else {
    return {
      address: '',
      status: (
        <span>
          <p>
            {' '}
            🦊{' '}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    }
  }
}

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: '👆🏽 Write a message in the text-field above.',
        }
      } else {
        return {
          address: '',
          status: '🦊 Connect to Metamask using the top right button.',
        }
      }
    } catch (err) {
      return {
        address: '',
        status: '😥 ' + err.message,
      }
    }
  } else {
    return {
      address: '',
      status: (
        <span>
          <p>
            {' '}
            🦊{' '}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    }
  }
}

export const mintNFT = async (count) => {
  const { address } = await getCurrentWalletConnected()

  if (address === '') {
    await connectWallet()
  }

  console.log(count)
  window.contract = await new web3.eth.Contract(contractABI, contractAddress) //loadContract();//set up your Ethereum transaction

  let value = null

  if (count === 1) {
    value = '0xb1a2bc2ec50000'
  } else if (count === 2) {
    value = '0x16345785D8A0000'
  } else if (count === 3) {
    value = '0x214E8348C4F0000'
  } else if (count === 4) {
    value = '0x2C68AF0BB140000'
  } else if (count === 5) {
    value = '0x3782DACE9D90000'
  }

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods.mint(count).encodeABI(), //make call to NFT smart contract
    value: value,
  }

  console.log(transactionParameters)

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    })
    return {
      success: true,
      status:
        '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
        txHash,
    }
  } catch (error) {
    return {
      success: false,
      status: '😥 Something went wrong: ' + error.message,
    }
  }
}
