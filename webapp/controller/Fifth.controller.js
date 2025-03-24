sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/ui/core/UIComponent",
  ], (BaseController,Device,UIComponent) => {
    "use strict";
  
    return BaseController.extend("ns.rfapp.controller.Fifth", {
        onInit() {
          if (Device.system.phone) {
            this.getView().byId("idInputQuantityUnitsIn_Fifth1").setWidth("1rem");
            this.getView().byId("id1InputQuantityUnitsIn_Fifth1").setWidth("1rem");
          }
        },
        onPressBackBtnIn_Fifth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Fourth");
        },
       
        OnPressNextIn_Fifth:function(){
          var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("Sixth");
        },

      
    });
  });