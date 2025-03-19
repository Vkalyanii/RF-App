sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Sixth", {
        onInit() {
        },
        onPressBackBtnIn_Sixth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Fifth");
        },
        onPressNextBtnIn_Sixth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Seventh");
        },
        onPressChangeQtyIn_Sixth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("ChangeQty");
        },
        onPressChangePackagingMaterialIn_Sixth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("ChangePackagingMaterial");
        },
        
    });
  });