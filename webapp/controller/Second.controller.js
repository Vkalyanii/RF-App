sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Second", {
        onInit() {
        },
        onPressHuListIn_Second:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Third");
        },
        OnPressNewHUIn_Second:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Fourth");
        },
        onPressBackBtnIn_Second:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("RouteASNSCANFIRST");
        },
    });
  });