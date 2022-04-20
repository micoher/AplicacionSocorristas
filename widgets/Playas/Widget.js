
define(["esri/tasks/QueryTask", "esri/tasks/query", "dojo/_base/lang", "esri/SpatialReference", "esri/symbols/SimpleLineSymbol", "esri/Color", "esri/symbols/SimpleMarkerSymbol", "esri/graphic", "esri/symbols/SimpleFillSymbol", "esri/toolbars/edit", "esri/dijit/editing/Editor", "esri/dijit/editing/Update", "esri/layers/FeatureLayer", "esri/graphic",

'dojo/_base/declare', 'jimu/BaseWidget'],
  function(QueryTask, Query, lang, SpatialReference, SimpleLineSymbol, Color, SimpleMarkerSymbol, Graphic, SimpleFillSymbol, Edit, Editor, Update, FeatureLayer, Graphic,

    declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-playas',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      // postCreate: function() {
      //   this.inherited(arguments);
      //   console.log('postCreate');
      // },

      // startup: function() {
       
      // },

      // onOpen: function(){
        
      // },

    
      banderaVerde: function(){
        var codigoPlaya = this.playas.value;
        if(codigoPlaya == -1) return;
        
        var outFields= ["*"];
        var capaPlayas = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/ArcGIS/rest/services/Servicios_editables/FeatureServer/2", outFields);

        const queryTask = new QueryTask(this.config.playasService);
        const query = new Query();
        query.returnGeometry = false;
        query.outFields = ["objectid", "bandera"];
        query.where = `objectid=${this.playas.value}`

        console.log("query", query)

        queryTask.execute(query, lang.hitch(this, function(results){
          console.log("resultados",results)
          console.log(results.features[0].attributes)

          capaPlayas.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this,function(seleccionadas) {
            if (seleccionadas.length > 0) {
              console.log("seleccionadas",seleccionadas)
              console.log("seleccionadas.length",seleccionadas.length)

          
              var updateFeature = seleccionadas[0]
              console.log("updateFeature", updateFeature )
              console.log("Prueba", this.map)

              var attributes = {"objectid":codigoPlaya,"bandera": 0};

              var nuevaBandera = new Graphic(null, null, attributes, null)
              updateFeature.getLayer().applyEdits(null, [nuevaBandera], null);
            }
            else {
              console.log("Error")
            }  
          }))         
        }));  
      },

      banderaAmarilla: function(){
        // console.log("map", this.map)
        // console.log("capa", this.map.itemInfo.itemData.operationalLayers[1])
        // console.log("Subtipos", this.map.itemInfo.itemData.operationalLayers[1].layerDefinition.types)
        // console.log("bandera",this.map.itemInfo.itemData.operationalLayers[1].layerObject._graphicsVal[0].attributes.bandera)
 
        var codigoPlaya = this.playas.value;
        if(codigoPlaya == -1) return;
        
        var outFields= ["*"];
        var capaPlayas = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/ArcGIS/rest/services/Servicios_editables/FeatureServer/2", outFields);

        const queryTask = new QueryTask(this.config.playasService);
        const query = new Query();
        query.returnGeometry = false;
        query.outFields = ["objectid", "bandera"];
        query.where = `objectid=${this.playas.value}`

        console.log("query", query)

        queryTask.execute(query, lang.hitch(this, function(results){
          console.log("resultados",results)
          console.log(results.features[0].attributes)

          capaPlayas.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this,function(seleccionadas) {
            if (seleccionadas.length > 0) {
              console.log("seleccionadas",seleccionadas)
              console.log("seleccionadas.length",seleccionadas.length)

          
              var updateFeature = seleccionadas[0]
              console.log("updateFeature", updateFeature )
              console.log("Prueba", this.map)

              var attributes = {"objectid":codigoPlaya,"bandera": 1};

              var nuevaBandera = new Graphic(null, null, attributes, null)
              updateFeature.getLayer().applyEdits(null, [nuevaBandera], null);
            }
            else {
              console.log("Error")
            }  
          }))         
        }));  
      },
      banderaRoja: function(){
        var codigoPlaya = this.playas.value;
        if(codigoPlaya == -1) return;
        
        var outFields= ["*"];
        var capaPlayas = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/ArcGIS/rest/services/Servicios_editables/FeatureServer/2", outFields);

        const queryTask = new QueryTask(this.config.playasService);
        const query = new Query();
        query.returnGeometry = false;
        query.outFields = ["objectid", "bandera"];
        query.where = `objectid=${this.playas.value}`

        console.log("query", query)

        queryTask.execute(query, lang.hitch(this, function(results){
          console.log("resultados",results)
          console.log(results.features[0].attributes)

          capaPlayas.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this,function(seleccionadas) {
            if (seleccionadas.length > 0) {
              console.log("seleccionadas",seleccionadas)
              console.log("seleccionadas.length",seleccionadas.length)

          
              var updateFeature = seleccionadas[0]
              console.log("updateFeature", updateFeature )
              console.log("Prueba", this.map)

              var attributes = {"objectid":codigoPlaya,"bandera": 2};

              var nuevaBandera = new Graphic(null, null, attributes, null)
              updateFeature.getLayer().applyEdits(null, [nuevaBandera], null);
            }
            else {
              console.log("Error")
            }  
          }))         
        }));   
      },
      banderaPeligro: function(){
        
        var codigoPlaya = this.playas.value;
        if(codigoPlaya == -1) return;
        
        var outFields= ["*"];
        var capaPlayas = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/ArcGIS/rest/services/Servicios_editables/FeatureServer/2", outFields);

        const queryTask = new QueryTask(this.config.playasService);
        const query = new Query();
        query.returnGeometry = false;
        query.outFields = ["objectid", "bandera"];
        query.where = `objectid=${this.playas.value}`

        console.log("query", query)

        queryTask.execute(query, lang.hitch(this, function(results){
          console.log("resultados",results)
          console.log(results.features[0].attributes)

          capaPlayas.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this,function(seleccionadas) {
            if (seleccionadas.length > 0) {
              console.log("seleccionadas",seleccionadas)
              console.log("seleccionadas.length",seleccionadas.length)

          
              var updateFeature = seleccionadas[0]
              console.log("updateFeature", updateFeature )
              console.log("Prueba", this.map)

              var attributes = {"objectid":codigoPlaya,"bandera": 3};

              var nuevaBandera = new Graphic(null, null, attributes, null)
              updateFeature.getLayer().applyEdits(null, [nuevaBandera], null);
            }
            else {
              console.log("Error")
            }  
          }))         
        }));  
      },


      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });