module.exports = {
    
    create: async ( data ) => {
        let response = {}
        let auxData = JSON.parse(JSON.stringify(data));
        console.log(auxData);
        
        try {
            let newUser = await User.create(data).fetch();
            await User.addToCollection(newUser.id, 'roles', auxData.userRoles);
            await CreditCardService.newCreditCards( auxData.creditCardsInfo, newUser.id );
            response.success = true;
            response.message = 'Usuario creado';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return response;
    },
    update: async ( data, userId ) => {
        let response = {}
        try {
            await User.update( userId ).set({
                document: data.document,
                name: data.name,
                email: data.email,
                phone: data.phone,
            });
            response.success = true;
            response.message = 'Usuario editado';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return response;
    },
    userByParam: async (param ) => {
        let response = {};
        param = param.toLowerCase();
        let data = await User.find(
            { or: 
                [
                    { username:  {'startsWith': param }  },
                    { document: (isNaN(parseInt(param,10)))?-1:parseInt(param,10) },
                    { email: param }
                ]
            }
        ).populate('creditCards');
        if( data.length > 0 ){
            for (let user of data) {
                for (let card of user.creditCards) {
                    card.entity = await Entity.findOne({id: parseInt(card.entity,10)});
                }
            }
            response = { 
                success: true,
                data: data,
                message: "Consulta exitosa"
            };
        }else{
            response = { 
                success: false, 
                message: 'No hay coincidencia con ningun usuario'
            };
        }
        return response;
    },
}