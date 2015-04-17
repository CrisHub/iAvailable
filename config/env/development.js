/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
  	models: {
		connection: 'iAvailable'
	},
	port: 80,
  explicitHost:'dev.i-available.local',
  app:{
    appName:'iAvailable',
    shopify_api_key:'c2d4091748b8a8a4fa6a68a047e2b1b8',
    shopify_shared_secret:'7ae87c20a13732a2130ff294ae0086ce',
    shopify_scope:'write_products',
    redirect_uri:'http://dev.i-available.local/finish-auth'
  }
};
