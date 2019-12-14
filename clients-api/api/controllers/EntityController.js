/**
 * EntityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req, res) => {
        let response = await EntityService.create( req.body );
        return res.json(response);
    },

};

