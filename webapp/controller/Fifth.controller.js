sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Fifth", {
        onInit() {
        },
        onPressBackBtnIn_Fifth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Fourth");
        },
        
    });
  });