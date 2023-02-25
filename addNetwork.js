
var button = document.getElementById("addNetwork");
button.addEventListener("click",function(e){
     if(window.ethereum) {
               
        window.ethereum.request({method: 'eth_requestAccounts'})
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{chainId: '0x22', //chainid in hex
                chainName: "Dithereum Testnet", // chain name
                nativeCurrency: {
                name: "Dithereum", // coin name
                symbol: "DTH", // coin symbol
                decimals: 18 // coin decimals
                },
                rpcUrls: ['https://node-testnet.dithereum.io'],     blockExplorerUrls: ['https://testnet.dthscan.io/']                    
            }]
        })
            
      }
},false);

    
