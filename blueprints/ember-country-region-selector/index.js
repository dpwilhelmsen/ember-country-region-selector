module.exports = {
  normalizeEntityName: function () {}, // no-op

  afterInstall: function () {
    return this.addBowerPackagesToProject([
      {name: 'country-region-selector', target: '~0.2.2'}
    ]);
  }
};
