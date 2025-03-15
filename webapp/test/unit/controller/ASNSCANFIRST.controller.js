/*global QUnit*/

sap.ui.define([
	"ns/rfapp/controller/ASNSCANFIRST.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ASNSCANFIRST Controller");

	QUnit.test("I should test the ASNSCANFIRST controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
