sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("treetable.controller.View", {
            onInit: function () {
                debugger

                var oModel = new sap.ui.model.json.JSONModel("../model/Clothing.json")
               
                this.getView().setModel(oModel);

            },
    
            onUpload() {

                if (!this._createFragment) {
                    this._createFragment = sap.ui.xmlfragment(this.getView().getId(),
                        "treetable.view.fragments.upload", this);
                    this.getView().addDependent(this._createFragment)
                }
                this._createFragment.open()
    
            },
    
            onCancel() {
                this._createFragment.close()
            },
    
    
            uploadFile: function(oEvent) {
                //CODE ZA POZIV FUNKCIJE
                },
    
        });
    });
