async function GetXverseWallet() 
{
	var map = {};
	map["id"] = "GetWallet";
	map["address"]="0";


    const addressesParams = 
    {
        purposes: ['ordinals'],
        message: 'Please select address for Dinos!'
    };
    
    try 
    {
        const result = await window.XverseProviders?.BitcoinProvider.request('getAddresses', addressesParams);
        console.log(result.result.addresses[0].address);
        map["address"] = result.result.addresses[0].address; // Array of Address objects
        GMS_API.send_async_event_social(map);
        console.log("map sent");
    } 
    catch (error) 
    {console.error('Error retrieving addresses:', error);}
}

function CheckXverseWalletConnection() {
	console.log("Checking Xverse Connection...");
	
	if (typeof window.XverseProviders?.BitcoinProvider !== 'undefined') {
		console.log("typeof window.XverseProviders?.BitcoinProvider: "+String(typeof window.XverseProviders?.BitcoinProvider));
		console.log("Xverse Connected!");
		return 1;
	} else {
		console.log("typeof window.XverseProviders?.BitcoinProvider: "+String(typeof window.XverseProviders?.BitcoinProvider));
		console.log("Xverse Not Connected");
		return 0;
	}
}