define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/dom-attr',
    'dojo/_base/array',
    'dojox/timing',
    'dojo/text!./Timer/templates/Timer.html',
    'dojo/i18n!./Timer/nls/resource'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, domAttr,
             array, timing, TimerTemplate, i18n) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: TimerTemplate,
        i18n: i18n,
        enable: false,
        timerEnableStyle: 'height:20px;color:green;font-weight:bold;font-size:18px;cursor:pointer;',
        timerDisableStyle: 'height:20px;color:red;font-weight:bold;font-size:18px;cursor:pointer;',
        postCreate: function () {

            var t = this;

            var time = new timing.Timer(t.interval);
            time.onTick = function() {
                var now = new Date();
                if(t.enable){
                    t.timerDIV.innerHTML = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                    array.forEach(t.layerIDsForRefresh, function(layerID){
                        var layer = t.map.getLayer(layerID);
                        layer.refresh();
                    });
                }
            },
            time.onStart = function() {
                t.enable = true;
                var now = new Date();
                t.timerDIV.innerHTML = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            },
            time.onStop = function() {
                t.enable = false;
            },
            time.start();

        },
        EnableTimer: function () {
            if(this.enable){
                this.enable = false;
                domAttr.set(this.timerDIV, 'style', this.timerDisableStyle);
            }
            else
            {
                this.enable = true;
                domAttr.set(this.timerDIV, 'style', this.timerEnableStyle);
            }
        }
    });
});
