module.exports = {
    create: async ( data ) => {
        let response = {}
        try {
            await Entity.create(data);
            response.success = true;
            response.message = 'Entidad creada';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return response;
    },
}