require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift response remain clump install bag army gauge'; 
let testAccounts = [
"0xd8450bce84d2134b531739485ba16c7db8c49622171d80a6e987494f92ac471c",
"0x2d20eed85acd0ca2bdf097ea1d61f28d4cfbb1a85b9a7e9443187a96459c98d0",
"0xde1a278a0cbfc916a160617d4eaf0838945bdcb784c66ecc342836b94a3b225e",
"0x801d15a4a47b3f9b938dc2ab8405a9da86287279718a405691b849b60b6ae7ae",
"0xc948d1b4f0b4c2ed1c03b4e859af1402e3dda4c7ef6a8852d1293bc42bd855fc",
"0x7162c241fb2a28ec61d02ce280b528e7d8dc9b27c0f200d82446eabf1287f8a1",
"0xb66cc667ea20635e4f342fe875eafa4fc4f3175d45f30db120991ac2e97e4d54",
"0xcd8ef2ab937f1880612dfdb7eed8cf27c6537a843120fffc55fe6631649cb725",
"0xd121ab83ac753921fd75440b198875dae37648eb1f9eb05def8ff887bdedbe79",
"0x572e08f204df6092df59289d2b5fcc0f54baf0826ab471e9ea2acc3a8b4fab8b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

