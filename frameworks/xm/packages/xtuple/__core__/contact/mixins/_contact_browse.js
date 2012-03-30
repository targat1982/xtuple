// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.ContactBrowse
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._ContactBrowse = {
  /** @scope XM.ContactBrowse.prototype */
  
  className: 'XM.ContactBrowse',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": false,
      "read": "ViewAllContacts",
      "update": false,
      "delete": false
    },
    "personal": {
      "create": false,
      "read": true,
      "update": false,
      "delete": false,
      "properties": [
        "owner"
      ]
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type String
  */
  name: SC.Record.attr(String, {
    label: '_name'.loc()
  }),

  /**
    @type Boolean
  */
  isActive: SC.Record.attr(Boolean, {
    label: '_isActive'.loc()
  }),

  /**
    @type String
  */
  jobTitle: SC.Record.attr(String, {
    label: '_jobTitle'.loc()
  }),

  /**
    @type String
  */
  phone: SC.Record.attr(String, {
    label: '_phone'.loc()
  }),

  /**
    @type String
  */
  alternate: SC.Record.attr(String, {
    label: '_alternate'.loc()
  }),

  /**
    @type String
  */
  fax: SC.Record.attr(String, {
    label: '_fax'.loc()
  }),

  /**
    @type String
  */
  primaryEmail: SC.Record.attr(String, {
    label: '_primaryEmail'.loc()
  }),

  /**
    @type String
  */
  webAddress: SC.Record.attr(String, {
    label: '_webAddress'.loc()
  }),

  /**
    @type XM.AddressInfo
  */
  address: SC.Record.toOne('XM.AddressInfo', {
    isNested: true,
    label: '_address'.loc()
  }),

  /**
    @type XM.AccountInfo
  */
  account: SC.Record.toOne('XM.AccountInfo', {
    isNested: true,
    label: '_account'.loc()
  })

};
