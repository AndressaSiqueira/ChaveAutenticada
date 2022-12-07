const os = require("oci-objectstorage");
const common = require("oci-common");
const { readdir } = require("fs");

const configurationFilePath = "/home/opc/.oci/config";
const profile = "DEFAULT";
const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  profile
);

const client = new os.ObjectStorageClient({
  authenticationDetailsProvider: provider
});


module.exports = {

    async gerarChaves(name) {
      return new Promise(async (resolve) => {
        try {
        
            const today = new Date();
            const neverExpires = new Date(today);
            neverExpires.setDate(neverExpires.getDate() + 25);
        
            // use date for generating a random unique id which can be used as a par id
            const parUniqueId = Date.now();
            const createPreauthenticatedRequestDetails = {
              name: parUniqueId.toString(),
              objectName: name, 
              accessType: os.models.CreatePreauthenticatedRequestDetails.AccessType.ObjectRead,
              timeExpires: neverExpires
            };
            const createPreauthenticatedRequest = {
              bucketName: 'DemoHotBucket',
              namespaceName: 'id3kyspkytmr',
              createPreauthenticatedRequestDetails: createPreauthenticatedRequestDetails
            };
            // create pre authenticated request to generate the url
            const resp = await client.createPreauthenticatedRequest(createPreauthenticatedRequest);
            const baseUrl = `https://.sa-saopaulo-1.oraclecloud.com`;
            const downloadUrl = resp.preauthenticatedRequest.accessUri;
            console.log("download url for the file is " + baseUrl + downloadUrl);

            resolve({ "Resultado": "Sucesso", "Status": true, "Response": "Sucesso na execução" });
        
          } catch (error) {
            console.log("Error executing example " + error);
            resolve({ "Resultado": "Erro ao executar", "Status": false, "Response": error });
         }
        })
    },
}
