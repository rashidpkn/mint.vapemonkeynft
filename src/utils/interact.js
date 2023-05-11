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
  window.contract = new web3.eth.Contract(contractABI, contractAddress) //loadContract();//set up your Ethereum transaction

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

const getNFTsOwned = async (address) => {
  const url = alchemyKey + '/getNFTs/?owner=' + address
  var requestOptions = {
    method: 'get',
    redirect: 'follow',
  }

  const nfts = await fetch(url, requestOptions).then((response) =>
    response.json(),
  )

  console.log(nfts.ownedNfts)

  const vmNfts = nfts.ownedNfts
    .filter(
      (e) =>
        e.contract.address === '0x94e0f396cc57bb5614f4fccea2b13b76dc720409',
    )
    .map((e) => {
      const id = parseInt(e.id.tokenId, 16)
      const metadata = e.metadata
      const { name, attributes } = metadata
      const discount = attributes[16].value

      return {
        id,
        name,
        discount,
      }
    })

  console.log(vmNfts)

  return vmNfts
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



export const getCouponCodes = async (address) => {
  console.log('fetching coupon codes')
  const nfts = await getNFTsOwned(address)

  const couponCodes = nfts.map((nft) => {
    const { id, name, discount } = nft

    let prefix

    if (discount === '5%') {
      prefix = 'a'
    } else if (discount === '10%') {
      prefix = 'b'
    } else if (discount === '15%') {
      prefix = 'c'
    } else if (discount === '20%') {
      prefix = 'd'
    }

    const code = prefix + makeid(4) + id.toString()

    return {
      code,
      discount,
    }
  })

  return couponCodes
}
