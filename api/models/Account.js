/**
* Account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
      appName:{
          type:'string',
          defaultTo:sails.config.app.appName,
      },
  		apiKey:{
          type:'string',
          defaultTo:sails.config.app.apiKey,
          unique:true
      },
      sharedSecret:{
          type:'string',
          defaultTo:sails.config.app.sharedSecret,
          unique:true
      }
  	}
};

