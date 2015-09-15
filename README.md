# CMV_MapRefreshTimer_Widget
# Map Refresh Timer Widget
A widget for CMV (http://cmv.io/). It refreshes the map layers periodically. You can set the preferred map layers and the refresh timer interval.

![alt tag](https://github.com/vojvod/CMV_MapRefreshTimer_Widget/blob/master/img.jpg)

## Widget Configuration
Add the widget configuration object to the widgets object in viewer.js.
```javascript
widgets: {
    ...
    timer: {
        include: true,
        id: 'timer',
        type: 'domNode',
        path: 'gis/dijit/Timer',
        title: 'Timer',
        srcNodeRef: 'timerDijit',
        options: {
            map: true,
            mapRightClickMenu: false,
            mapClickMode: true,
            interval: 10000,
            layerIDsForRefresh: ['layer1_ID','layer2_ID','layer3_ID']
        }
    },
    ...
}
```
Copy Timer folder and Timer.js to folder gis/dijit/ at your CMV installation.

Modify js\viewer\templates\mapOverlay.html file.
```javascript
...
	<div style="position:absolute;top:20px;right:25px;z-index:40;">
		<div id="timerDijit">
    </div>
	</div>
	<div style="position:absolute;top:40px;right:20px;z-index:40;">
		<div id="basemapsDijit">
		</div>
	</div>
...
```
