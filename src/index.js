import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactMapboxGl, { Layer, Feature,Marker,Cluster,Popup  } from "react-mapbox-gl";
import { Button } from 'reactstrap';

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w";
const styles = "mapbox://styles/mapbox/streets-v9";
const mapStyle = {
  height: '97vh',
  width: '100vw'
};


const Map = ReactMapboxGl({
  accessToken
});

class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
		coordinates:[],
		status: false,
		statusMarker:[],
		}
		this._onClickMap= this._onClickMap.bind(this)
	}

	handleclick(cd){
		let coordinates = [...this.state.coordinates];
		let status = this.state.status;
		if(status){
			coordinates.push(cd);
			this.setState({
				coordinates,
				status
			})
		}
	}

	buttonClick(){
		let status =!this.state.status;
		this.setState({
			status
		})
		console.log(status);
	}

	_onClickMap(map, evt) {
		this.handleclick(evt.lngLat);
	}
	markerclick(i){
		let statusMarker = [...this.state.statusMarker];
		statusMarker[i] = !statusMarker[i];
		this.setState({
			statusMarker
		})
	}
	render(){
		return(
			<div>

				<Button onClick={() => this.buttonClick()} class = "btn"><img src={require("./marker.svg")} height = "20"/></Button>
				<Map
				    style={styles}
				    containerStyle={mapStyle}
				 	onClick = {this._onClickMap}>

					{this.state.coordinates.map((marker, i) =>{
						return (
						<div key= {i} >
							<Marker
		  						coordinates={marker}
		  						anchor="bottom"
		  						onClick = {() => this.markerclick(i)}>

		  						<img src={require("./marker.svg")} height = "35"/>
							</Marker>
							{this.state.statusMarker[i] ? 
								<Popup
								    coordinates={marker}
								    offset={{
								    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
								    }}>
								  	<p>{this.state.coordinates[i].lng} ; {this.state.coordinates[i].lat}</p>
								</Popup> : ''
							}
						</div>
						);
						})
					}
				</Map>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
