import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "select",
  classNames: ["crs-region"],
  attributeBindings: ['id'],

  attributeBindings: [
    "blankOption:data-blank-option",
    "defaultOption:data-default-option",
    "showDefaultOption:data-show-default-option",
    "value:data-default-value",
    "valueType:data-value",
    'disabled', 'tabindex', 'form', 'name', 'autofocus', 'required', 'size', 'title', 'id'
  ],

  /**
   * Bound to the `id` attribute on the <select> tag. This should be overridden when using multiple
   * country and region select fields. The regionId on the country selector shoudl also match this value.
   *
   * @property id
   * @type String
   * @default "region-select"
   */
  id: "region-select",

  /**
   * Bound to the `data-blank-option` attribute on the <select> tag. The country region selector
   * uses this value to populate the default value that is shown prior to a country being selected
   *
   * @property blankOption
   * @type String
   * @default "-"
   */
  blankOption: "-",

  /**
   * Bound to the `data-default-option` on the <select> tag. The country region selector uses this
   * value to populate the first, default option in the region select field.
   *
   * @property defaultOption
   * @type String
   * @default "Select Region"
   */
  defaultOption: "Select Region",

  /**
   * Bound to the `data-show-default-option` attribute on the <select> tag. This determines whether the
   * value in defaultOption is included in the region select menu.
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
   * determine if the select field values are full region names or simply abbreviated region codes. It is a
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
   * Determines whether the select field values should be the full region names or shortcode versions
   *
   * @property shortcode
   * @type Boolean
   * @default false
   */
  shortcode: false,

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

});
