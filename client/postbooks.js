/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, enyo:true, console:true */

(function () {
  "use strict";

  XT.extensions.jscommunicator.initPostbooks = function () {

    var jscommunicatorModule = {
      name: "jscommunicator",
      label: "_jscommunicator".loc(),
      panels: [
        {
          name: "jscommunicatorPage",
          label: "_jscommunicator".loc(),
          tag: "iframe",
          classes: "jscommunicator-page",
          src: "npm/xtuple-jscommunicator/client/assets/jscommunicator.html"
        },
        {  
          name: "explanatoryIframe",
          kind: "XV.JscommunicatorPage",
          label: "_explanation".loc(),
          classes: "jscommunicator-page"
        }
      ]
    };

    XT.app.$.postbooks.insertModule(jscommunicatorModule, 0);

  };
}());
