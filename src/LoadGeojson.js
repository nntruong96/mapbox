import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GeojsonLayer from './GeoJSONLayer';
import axios from 'axios';
import MapMarkers from './MapMarkers';

 
class LoadGeojson extends React.Component{
	render(){
		const{
			mapMarkers,
			updateLocationMarkers,
			geojson

		}= this.props;
		console.log(mapMarkers);
		return (
		<div>
			<MapMarkers mapMarkers={mapMarkers}
			 	updateLocationMarkers={updateLocationMarkers}/>
			 <GeojsonLayer data={geojson}/>
		}
		</div>
		);
	}
}
export default LoadGeojson;