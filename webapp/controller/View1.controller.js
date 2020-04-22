sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"

], function (Controller) {
	"use strict";

	return Controller.extend("PR.Project.controller.View1", {
		onInit: function () {

		},
		 onClick: function(){
		 	this.getView().byId("panelreport").setExpanded(!this.getView().byId("panelreport").getExpanded());
		 },
		 handleValueHelp : function (oEvent) {
			var sInputValue = oEvent.getSource().getValue();

			this.inputId = oEvent.getSource().getId();
			// create value help dialog
			if (!this._valueHelpDialog) {
				this._valueHelpDialog = sap.ui.xmlfragment(
					"sap.m.sample.InputKeyValue.Dialog",
					this
				);
				this.getView().addDependent(this._valueHelpDialog);
			}

			// create a filter for the binding
			this._valueHelpDialog.getBinding("items").filter([new Filter(
				"Name",
				sap.ui.model.FilterOperator.Contains, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialog.open(sInputValue);
		}
	});
});