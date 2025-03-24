sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/ui/core/UIComponent",
  ], (BaseController,Device,UIComponent) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.ChangePackagingMaterial", {
        onInit() {
          if (Device.system.phone) {
            this.getView().byId("id1InputQuantityUnitsIn_ChangePackagingMaterial1").setWidth("1rem");
                                   
            this.getView().byId("idInputQuantityUnitsIn_ChangePackagingMaterial1").setWidth("1rem");
          }
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