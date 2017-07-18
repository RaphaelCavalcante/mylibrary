'use strict';

module.exports = function(app) {
  // Install a `/` route that returns server status
  //var router = server.loopback.Router();
  //router.get('/', server.loopback.status());
  //server.use(router);
  app.dataSources.mysqlds.automigrate();
  console.log("Performed automigration");
};
