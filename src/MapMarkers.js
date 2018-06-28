import React, { Component } from "react";
import MapMarker from './MapMarker';
import { 
  Popup
} from "react-mapbox-gl";

import MarkerPopup from './MarkerPopup';

class MapMarkers extends Component{
	constructor(props){
		super(props);
		this.state = {
			showPopups: {},
			isNameEditting: {}
		}
		this.handleClickOnMarker = this.handleClickOnMarker.bind(this);
		this.handleChangeMarker = this.handleChangeMarker.bind(this);
	}
	handleClickOnMarker(index){
	    let showPopups = [...this.state.showPopups];
	    showPopups[index] = !showPopups[index];
	    this.setState({
	      showPopups
	    })
	}
	handleChangeMarker(index){
		let isNameEditting = [...this.state.isNameEditting];
		//console.log(this.state.isNameEditting);
	    
	    isNameEditting[index] = !isNameEditting[index];
	    this.setState({
	      isNameEditting
	    });
	    
	}
	render(){
		const {
			mapMarkers, 
			updateLocationMarkers
		} = this.props;
		return (
		<div>
			{mapMarkers.map((marker, index) => (
	            <div key={index}>
		            <MapMarker
		                coordinates={marker.coordinates}
		                onClick={() => this.handleClickOnMarker(index)}
		            />
	              	{this.state.showPopups[index] ? (
	                	<MarkerPopup
	                  		coordinates={marker.coordinates}
	                  		updateLocationMarkers={(name) => {
	                  			updateLocationMarkers(index, 'name', name)
	                  			this.handleChangeMarker(index);
	                  		}}
	                  		handleChangeMarker={() => this.handleChangeMarker(index)}
	                  		isNameEditting={this.state.isNameEditting[index]}
	                  		name={marker.name}
	                  	/>
	                ): null}
	            </div>
	        ))}
		</div>)
	}
}

export default MapMarkers;