/**
 * CreditCardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    update: async (req, res) => {
        let response = await CreditCardService.update( req.body, req.params.id );
        return res.json(response);
    },
    new: async (req, res) => {
        let response = await CreditCardService.create( req.body, req.params.id );
        return res.json(response);
    },
};

