// ShopifyApiService.js - in api/services
var shopifyAPI = require('shopify-node-api');
 

module.exports = {

    authenticate: function(config, res) {
    	var Shopify = new shopifyAPI(config);
    	// Building the authentication url
		var auth_url = Shopify.buildAuthURL();
		// you can redirect the user automatically like so
		res.redirect(auth_url);
    },
    exchangeToken: function(config, QParams ,res, req) {
    	var Shopify = new shopifyAPI(config);
    	Shopify.exchange_temporary_token(QParams, function(err, data){
	    	// This will return successful if the request was authentic from Shopify
	    	// Otherwise err will be non-null.
	    	// The module will automatically update your config with the new access token
	    	// It is also available here as data['access_token']
	    	Shop.findByShop(config.shop).exec(function(err, shop){
	    		if (err) {
	    			Shop.create({shop:config.shop, accessToken:data['access_token']}, function(err, shop) {
			    		if (err) {
			    			console.log('fuck off');
			    		} else {
			    			req.session.shop = shop;
			    			res.redirect("/login");
			    		}
			    	});
	    		} else {
	    			req.session.shop = shop;
	    			res.redirect('/login');
	    		}
	    		
	    	});
	    	

	  	});
    }
};