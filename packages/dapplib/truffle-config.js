require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million purpose harvest glimpse frame spoon'; 
let testAccounts = [
"0x31df719f3e2b7912aa83ad07c8cd8ded335d8468f7bf0bedd8d366d638ccecdf",
"0xa5e5453e008062318637baec15053d4f370b91101501900b5e56b9a68682d219",
"0x82af58d4ebd42d187d171a9d8b51325bbf3238ef8b03f6497c9f1dcb045dd966",
"0xc6ecb6d2615eedf8f444434347b43363f0f2d67115b2161306e97aa0a87a8a3c",
"0x46f4b4efa981d444e50f4ddfa5c5221c970a1632ead980f50db7dacc004c4fea",
"0x18df6bad1bfae8734cc8595108299b4272dcd6108c7ecc3c10dc2e5c0abcf07d",
"0x6da22bdfabe344f8100050e4f5e898c29b9415e41dc6e218c0a297e866d47f12",
"0xe9a2f307e07c85f06ea5ee8b746cf505df5655e864142ba2e554efb6ffc9ee91",
"0x6fbe452fa6e21a860a66ede42b2e88c75636b4fa45ac75cfa94697713daa167f",
"0xd371d7e1d48696bbeaeb26b505c5c2928a5658443771abb7c550de5d3f93a70a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

