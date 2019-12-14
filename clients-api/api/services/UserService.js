module.exports = {
    
    create: async ( data ) => {
        let response = {}
        let auxData = JSON.parse(JSON.stringify(data));
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
}