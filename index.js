/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-country-region-selector',

  included: function(app) {
    app.import('bower_components/country-region-selector/dist/crs.min.js');
  }
};
