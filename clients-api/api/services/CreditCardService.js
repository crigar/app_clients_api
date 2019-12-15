module.exports = {
    create: async ( data, userId ) => {
        let response = {}
        data.user = userId;
        console.log(data);
        
        try {
            let creditCard = await CreditCard.create(data).fetch();
            await User.addToCollection(userId, 'creditCards', creditCard.id);
            response.success = true;
            response.message = 'Tarjeta de credito creada';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return response;
    },
    newCreditCards: async ( creditCards, userId ) => {
        if (creditCards == undefined) return undefined; 
        for (let creditCard of creditCards) {
            await CreditCardService.create( creditCard, userId );
        }
        return true;
    },
    update: async ( data, creditCardId ) => {
        let response = {}
        try {
            await CreditCard.update( creditCardId ).set({
                pan: data.pan,
                expirationDate: data.expirationDate,
                cvv: data.cvv,
                brand: data.brand,
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