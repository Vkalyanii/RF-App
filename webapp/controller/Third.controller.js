sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Third", {
        onInit() {
        },
        onPressBackBtnIn_Third:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Second");
        }
    });
  });