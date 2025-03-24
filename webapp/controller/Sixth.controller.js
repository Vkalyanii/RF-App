sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/ui/core/UIComponent",
  ], (BaseController,Device,UIComponent) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Sixth", {
        onInit() {
          if (Device.system.phone) {
            this.getView().byId("idInputQuantityUnitsIn_Sixth1").setWidth("10px");
          
          }
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