sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.ChangeQty", {
        onInit() {
        },
        onPressBackBtnIn_ChangeQty:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Sixth");
        },
        onPressNextIn_ChangeQty:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Sixth");
        },
        
    });
  });