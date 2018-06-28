import React, { Component } from "react";
import * as MapboxGL from "mapbox-gl";
import ReactMapboxGl, { 
  GeoJSONLayer
} from "react-mapbox-gl";

const symbolLayout: MapboxGL.SymbolLayout = {
  "icon-image": "gradient",
  'text-field': '{place}',
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top'
};

const symbolPaint: MapboxGL.SymbolPaint = {
  'text-color': 'white'
};

const circleLayout: MapboxGL.CircleLayout = { visibility: 'visible' };
const circlePaint: MapboxGL.CirclePaint = {
  'circle-color': 'black'
};

const GeojsonLayer = ({data}) =>  (
	<GeoJSONLayer
	  data={data}
	  circleLayout={circleLayout}
	  circlePaint={circlePaint}
	  symbolLayout={symbolLayout}
	  symbolPaint={symbolPaint}              
	/>
);

export default GeojsonLayer;