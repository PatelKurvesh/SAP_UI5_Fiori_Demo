sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("PracticeSAP_UI5_Fiori_Demo.controller.View1", {
		
		onBtnClick : function(){
			var oName = this.getView().byId("uName").getValue();
			var pwd = this.getView().byId("pwd").getValue();
		
			
			if(oName === "admin" && pwd === "admin"){
				// sap.m.MessageToast.show("Success");
				this.frag = new sap.ui.xmlfragment("PracticeSAP_UI5_Fiori_Demo.fragments.success");
				this.getView().addDependent(this.frag);
				this.frag.open();
			
			}
			else{
				sap.m.MessageToast.show("Check your UserName or Password");
			}
			
		},
		onDialogClose : function(){
			this.frag.close();
		}

	});
});