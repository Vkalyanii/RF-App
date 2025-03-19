sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.ChangePackagingMaterial", {
        onInit() {
        },
        onPressBackBtnIn_ChangePackagingMaterial:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Sixth");
        },
        onPressNextBtnIn_ChangePackagingMaterial:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Sixth");
        },
        
    });
  });