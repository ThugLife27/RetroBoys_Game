// See if Metamask is installed in the browser

//import { getAddress } from 'sats-connect'
function CheckLeatherWalletConnection() {
	console.log("Checking Leather Connection...");
	
	if (typeof window.btc !== 'undefined') {
		console.log("typeof window.btc: "+String(typeof window.btc));
		console.log("Leather Connected!");
		return 1;
	} else {
		console.log("typeof window.btc: "+String(typeof window.btc));
		console.log("Leather Not Connected");
		return 0;
	}
}

// Ask user to connect wallet to site and get address
async function GetLeatherWallet() {
	var map = {};
	map["id"] = "GetWallet";
	map["address"]="0";

	try {
	  const accounts = await window.btc.request('getAddresses', {
	  types: ['p2tr'],
	  });
	  
	  for (let i = 0; i < accounts.result.addresses.length; i++)
	  {
		if(accounts.result.addresses[i].type === "p2tr")
		{map["address"] = accounts.result.addresses[i].address;}
	  }
	} 
	catch(error) {
		console.log("User rejected request");
	}
	GMS_API.send_async_event_social(map);
}

async function GetUnisatWallet() {
	var map = {};
	map["id"] = "GetWallet";
	map["address"]="0";

	try {
	  const accounts = await unisat.requestAccounts();
	  const walletaddress = await unisat.getAccounts();
	  map["address"] = walletaddress[0];
	  console.log(walletaddress);
	} 
	catch(error) {
		console.log("User rejected request");
	}

	GMS_API.send_async_event_social(map);
	console.log("map sent");
}

async function CheckConnectedUnisatWallet() {
	var map = {};
	map["id"] = "GetWallet";
	map["address"]="0";

	try {
	  const walletaddress = await window.unisat.getAccounts();
	  if(walletaddress.length === 0)
	  {map["address"] = "Not Connected";}
	  else
          {map["address"] = walletaddress[0];}
	  console.log(walletaddress);
	} 
	catch(error) {
		console.log("User rejected request");
	}

	GMS_API.send_async_event_social(map);
	console.log("map sent");
}

function CheckUnisatWalletConnection() {
	console.log("Checking Unisat Connection...");	

	if (typeof unisat !== 'undefined') {
		console.log("typeof window.unisat: "+String(typeof unisat));
		console.log("Unisat Connected!");
		return 1;	
	} else {
		console.log("typeof window.unisat: "+String(typeof unisat));
		console.log("Unisat Not Connected");
		return 0;
	}
}















//
