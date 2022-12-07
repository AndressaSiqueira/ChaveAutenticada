const servicesAdm = require('../services/ServicosAdm');

module.exports = {
    async nodehot(req, res) {

        var corpo = req.body;
        let result;
        res.send(corpo)    
        var bodyName = corpo.data.resourceName;
        console.log("Nome do objecto adicionado:" + bodyName);

        result = await servicesAdm.gerarChaves(bodyName);


    },

};
