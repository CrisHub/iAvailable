/**
* Shop.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		shop:{
  			type:'string',
  			unique:true
  		},
  		accessToken:{
  			type:'string',
  			unique:true
  		},
      loginPassword:{
        type:'string'
      },
      loginAlias:{
        type:'string'
      }
  	},

};

