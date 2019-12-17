/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async (req, res) => {
        let user = await User.findOne({username: req.body.username} );
        if (user == undefined) return res.json({ success: false, message: 'Usuario incorrecto' });
        console.log(user);        
        let response = await AuthService.validate( user, req.body.pass );
        if (response) {
            return res.json({ success: true, message: 'Bienvenido' });
        }else{
            return res.json({ success: false, message: 'Contraseña incorrecta' });
        }
    },
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
    getUserByParam: async (req, res) => {
        let param = req.param('param');
        let response = await UserService.userByParam(param);
        return res.json(response);
    },
};

