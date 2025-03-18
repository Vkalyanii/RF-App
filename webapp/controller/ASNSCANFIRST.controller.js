sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ns.rfapp.controller.ASNSCANFIRST", {
        onInit() {
        },
         // Setup router to handle navigation
         
 
        OnPressBackIn_ASNSCANFirst:function (){

            var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("InitialScreen"); 

        },
        onPressSubmitIn_ASNSCANFirst:function (){

            var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("StandardSecond"); 

        },
        onASNScannedInFirstScreen:function(){
            var olength = this.getView().byId("idASNInputIn_ASNSCANFIRST").getValue().length;
           if(olength){
            var oRouter = this.getOwnerComponent().getRouter(this);
            oRouter.navTo("StandardSecond"); 
           }
        }

    });
});