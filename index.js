/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-country-region-selector',

  included: function(app) {
    app.import(app.bowerDirectory + '/country-region-selector/dist/crs.js');
  }
};
