'use strict';
// local imports
const cityCtrl = require('../controllers/city.controller');

module.exports = (app) => {
    // List role (Private API
    app.get('/city/list', cityCtrl.listCity);

    // View city (Private API)
    app.get('/city/view', cityCtrl.viewCity);

    // Create city (Private API)
    app.post('/city/create', cityCtrl.addCity);

    // Update city (Private API)
    app.put('/city/update/:id', cityCtrl.updateCity);

    // Delete city (Private API)
    app.delete('/city/delete/:id', cityCtrl.deleteCity);
}
