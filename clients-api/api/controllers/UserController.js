/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req, res) => {
        let response = await UserService.create( req.body );
        return res.json(response);
    },
    newClient: async (req, res) => {
        let response = await UserService.create( req.body );
        return res.json(response);
    },
    update: async (req, res) => {
        let response = await UserService.update( req.body, req.params.id );
        return res.json(response);
    },

};

