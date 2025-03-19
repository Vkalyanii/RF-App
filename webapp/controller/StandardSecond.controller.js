sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.StandardSecond", {
        onInit() {
        },
        onPressBackBtnIn_StandardSecond :function(){
            var oRouter = this.getOwnerComponent().getRouter(this);
              oRouter.navTo("RouteASNSCANFIRST");
        },
        onPressEnterIn_StandardSecond:function(){
            var oRouter = this.getOwnerComponent().getRouter(this);
              oRouter.navTo("Second");
        },
        onSubmit:function(){
            var oRouter = this.getOwnerComponent().getRouter(this);
              oRouter.navTo("Second");
        }
    });
  });