sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Seventh", {
        onInit() {
        },
        onPressBackBtnIn_Seventh:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Sixth");
        },
        onPressNextBtnIn_Sixth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Seventh");
        },
        
    });
  });