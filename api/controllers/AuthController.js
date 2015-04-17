/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
module.exports = {
	
  /**
   * `AuthController.connect()`
   */
  connect: function (req, res) {
  	var config = req.params.all();
  		config = _.merge(sails.config.app, config);
  	ShopifyApiService.authenticate(config, res);
  },
  permaToken: function (req, res) {
  	var config = req.params.all();
  		config = _.merge(sails.config.app, config);
  	var QParams = req.query;
  	ShopifyApiService.exchangeToken(config, QParams, res, req);
  },
  loginView: function(req, res) {
    res.view('login/login');
  },
  login: function(req, res) {
  	passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
        message: 'login failed'
        });
        res.send(err);
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        return res.send({
          message: 'login successful'
        });
      });
    })(req, res);
  }
};

