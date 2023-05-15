const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ighqep',
  reporter: 'cypress-mochawesome-reporter',
  env: {
    baseUrl : '/login',
    products_url: '/products',
  },
  //This is will available video on dashboard execution
  video: true,

  e2e: {
   

   // baseUrl:"/sample"
  
    pageLoadTimeout: 150000,
    excludeSpecPattern: ['../1-getting-started','../2-advanced-examples'],
    //baseUrl="";
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      //Evironment Management and env: is important to setup in cypress.config
      const version = config.env.version || "qa";
      config.env = require("./cypress/config/"+ version +".json");
      //baseUrl = config.env.baseUrl
      return config;
      
    },
  },
});
