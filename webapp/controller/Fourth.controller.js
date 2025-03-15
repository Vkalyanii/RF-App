sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Fourth", {
        onInit() {
        },
        onPressBackBtnIn_Fourth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Second");
        },
        onPressNextBtnIn_Fourth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Fifth");
        },
    });
  });