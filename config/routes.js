/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'post /entity/create': 'EntityController.create',
  'post /login': 'UserController.login',
  'post /user/sign-up': 'UserController.create',
  'post /client/create': 'UserController.newClient',
  'put /client/:id/update': 'UserController.update',
  'put /credit-card/:id/update': 'CreditCardController.update',
  'get /entity/all-entities': 'EntityController.getAll',
  'get /user/search': 'UserController.getUserByParam',
  'post /client/:id/new-card': 'CreditCardController.new',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
