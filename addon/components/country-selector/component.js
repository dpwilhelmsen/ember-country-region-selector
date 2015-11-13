import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "select",
  classNames: ["crs-country"],
  attributeBindings: [
    "regionId:data-region-id",
    "defaultOption:data-default-option",
    "showDefaultOption:data-show-default-option",
    "value:data-default-value",
    "valueType:data-value",
    "whitelist:data-whitelist",
    "blacklist:data-blacklist",
    'disabled', 'tabindex', 'form', 'name', 'autofocus', 'required', 'size', 'title', 'id'
  ],

  /**
   * Bound to the `data-region-id` on the <select> tag. This should be set to CSS id of the region select field. The
   * country region selector uses this to know which region select field should be updated when this
   * country select changes.
   *
   * @property regionId
   * @type String
   * @default "region-select"
   */
  regionId: "region-select",

  /**
   * Bound to the `data-default-option` on the <select> tag. The country region selector uses this
   * value to populate the first, default option in the country select field.
   *
   * @property defaultOption
   * @type String
   * @default "Select Region"
   */
  defaultOption: "Select country",

  /**
   * Bound to the `data-show-default-option` attribute on the <select> tag. This determines whether the
   * value in defaultOption is included in the country select menu.
   *
   * @property showDefaultOption
   * @type Boolean
   * @default true
   */
  showDefaultOption: true,

  /**
   * Bound to the `data-default-value` attribute on the <select> tag. The country region selector sets this
   * value as the default selected value.
   *
   * @property value
   * @type String
   * @default null
   */
  value: null,

  /**
   * Bound to the `data-value` attribute on the <select> tag. The country region selector uses this to
   * determine if the select field values are full country names or simply abbreviated country codes. It is a
   * computed property based on the boolean value set in the shortcode property. If shortcode is true,
   * it sets the attribute value to "shortcode"
   *
   * @property valueType
   * @type Mixed
   */
  valueType: Ember.computed('shortcode', function() {
    let shortcode = this.get('shortcode');

    return shortcode ? "shortcode" : false;
  }),

  /**
   * Determines whether the select field values should be the full country names or shortcode versions
   *
   * @property shortcode
   * @type Boolean
   * @default false
   */
  shortcode: false,

  /**
   * Bound to the `data-whitelist` attribute on the <select> tag. It returns either null or a comma
   * separated list of country shortcodes to allow in the country list.
   *
   * @param key
   * @param value
   * @param previousValue
   * @returns String
   */
  whitelist: function(key, value, previousValue) {
    // Setter
    if(arguments.length > 1) {
      if(value.constructor === Array) {
        this.set('whitelistString', value.join(','));
      }
    }

    // Getter
    return this.get('whitelistString');
  }.property(),

  /**
   * Bound to the `data-blacklist` attribute on the <select> tag. It returns either null or a comma
   * separated list of country shortcodes to exclude in the country list.
   *
   * @param key
   * @param value
   * @param previousValue
   * @returns String
   */
  blacklist: function(key, value, previousValue) {
    // Setter
    if(arguments.length > 1) {
      if(value.constructor === Array) {
        this.set('blacklistString', value.join(','));
      }
    }

    // Getter
    return this.get('blacklistString');
  }.property(),

  /**
   * List of countries to include in the <select> tag.'
   *
   * @property whitelistString
   * @type String
   * @default null
   */
  whitelistString: null,

  /**
   * List of countries to exclude in the <select> tag.
   *
   * @property blacklistString
   * @type String
   * @default null
   */
  blacklistString: null,

  /**
   * Bound to the `disabled` attribute on the native <select> tag.
   *
   * @property disabled
   * @type Boolean
   * @default false
   */
  disabled: false,

  /**
   * Bound to the `tabindex` attribute on the native <select> tag.
   *
   * @property tabindex
   * @type Integer
   * @ default 0
   */
  tabindex: 0,

  didInsertElement: function(){
    window.crs.init();
  }
});
