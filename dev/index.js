var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/a95ba6ceca554ea4a8b1d564da15c430'));

web3.eth.subscribe('newBlockHeaders', (error, result) => {
	if (!error) {
		console.log(result);
	} else {
		console.log('error', error);
	}
}).on('data', function (transaction) {
	console.log('block: ', transaction);
})