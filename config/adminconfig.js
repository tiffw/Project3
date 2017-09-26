//If you make any changes to schemeBeam, make sure you NEVER reference this config file on the front end of your code.

module.exports = {
  //Port on which to deploy app.js
  "port": 8000,
  //Your personal SendGrid API key. 
  "SENDGRID_API_KEY": "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",
  //The id of the list you would like your client emails to (a number, can be found at the end the url path of your list)
  "list_Id": "1984337",
  //Mysql configuration
  "mysql": {
    "host": "localhost",
    "schema": "schemeBeam",
    "username": "root",
    "password": ""
  },
  //Make absolutely sure you change these values before you start your campaign. Used to log into admin UI and gain access to certain API endpoints.
  "admin": {
  	"username": "roomhints",
  	"password": ""
  },
  //secret for authentication process. change to whatever you'd like.
  "passportSecret": "roomhintsSecret"
}