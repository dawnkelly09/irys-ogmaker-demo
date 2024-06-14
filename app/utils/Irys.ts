import Irys from "@irys/sdk";

const getIrys = async () => {
	const network = "mainnet";
	const token = "base-eth";
 
	const irys = new Irys({
		network, // "mainnet" or "devnet"
		token, // Token used for payment
		key: process.env.PRIVATE_KEY, // ETH or SOL private key
	});
	return irys;
};

const uploadData = async (dataToUpload: string) => {
    //
    const irys = await getIrys();
    try {
        const tags = [{ name: "Content-Type", value: "text/html" }];
        const receipt = await irys.upload(dataToUpload, { tags });
        const irysUrl = `https://gateway.irys.xyz/${receipt.id}`;
        console.log(`Data uploaded ==> ${irysUrl}`);
        return { url: irysUrl };  // Return the URL instead of just logging it
    } catch (e) {
        console.error("Error uploading data", e);
        throw new Error(`Failed to upload to Irys`); // Throw an error to handle in the API
    }
};

export default uploadData;
