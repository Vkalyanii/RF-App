sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("ns.rfapp.controller.ASNSCANFIRST", {
        onInit() {
        },
        // ASn Scanned
        onASNScannedInFirstScreen:async function (){
            var oModel = this.getOwnerComponent().getModel(); // Get the OData model for making requests
            var that = this; // Preserve the controller context for the success handler
            let oASN = this.getView().byId("idASNInputIn_ASNSCANFIRST").getValue();
           
          
            if (oASN.length === 10) { // Proceed if the ASN value is not empty
              
     
                // Call OData service to validate if the ASN exists in the system
             
                   await oModel.read(`/ZEWM_S_RHUBYASN_setSet('${oASN}')`, {
                        success: function (odata) {
                            console.log(odata)
                            if (odata.ASN === oASN) {
     
                                MessageToast.show("Succesfully Scanned");
                                var oRouter = that.getOwnerComponent().getRouter();
                               oRouter.navTo("StandardSecond");
                                // If HU exists, toggle screens and populate input fields with the retrieved data
               
                // if (oEvent === this.getView().byId("idASNInputIn_ASNSCANFIRST").getValue()) {
                //     var oASNValue = oEvent
                            }    
                        },
                        error: function (oError) {
                            // Handle error if ASN not found
                            MessageToast.show("Please Enter correct ASN")
                        }
                       
               
                })
            }
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
        // onASNScannedInFirstScreen:function(){
        //     var olength = this.getView().byId("idASNInputIn_ASNSCANFIRST").getValue().length;
        //    if(olength){
        //     var oRouter = this.getOwnerComponent().getRouter(this);
        //     oRouter.navTo("StandardSecond"); 
        //    }
        // }

    });
});