import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactMapboxGl, { Layer, Feature,Marker,Cluster,Popup  } from "react-mapbox-gl";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Edit from './EditIcon';
import Create from './SendIcon';
import InputName from './input';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Button  } from 'reactstrap';
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
		coordinates:[], //mảng lưu tọa độ Marker
		status: false, //trạng thái của button tạo Marker
		statusMarker:[],//mảng lưu trạng thái Markers
		statusEditName: [],//mảng lưu trạng thái button Edit và Create 
		value: null,// lưu tên Marker tạm
		nameMarker:[],// Mảng lưu tên Markers
		};
		this._onClickMap= this._onClickMap.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	// lưu tọa độ Marker
	handleclick(cd){
		let coordinates = [...this.state.coordinates];
		let status = this.state.status;
		if(status){
			// nếu status == true thì lưu tọa độ Marker
			coordinates.push(cd);
			this.setState({
				coordinates,
				status
			})
		}
	}
	// Thai đổi trạng thái của nút tạo Marker
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

	// Thai đổi trạng thái của Marker
	markerclick(i){
		let statusMarker = [...this.state.statusMarker];
		statusMarker[i] = !statusMarker[i];
		this.setState({
			statusMarker
		})
	}
	// lưu tạm tên Marker
	handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  // Lưu tên Marker và thai đổi trạng thái button Edit, Create
	editName(i,evt){
		let statusEditName = [...this.state.statusEditName];
		let nameMarker = [...this.state.nameMarker];
		let value = this.state.value;
		statusEditName[i]=!statusEditName[i];
		if(!statusEditName[i] ) {
			
			if(value!=null){
			// nếu tên Marker khác rống thì lưu lại
				nameMarker[i]=value;
				value=null;
				this.setState({nameMarker,value})
			}
			else {
			// nếu tên Marker rỗng thì trả về trạng thái Edit
				statusEditName[i]=!statusEditName[i];
			}
		}
		this.setState({
			statusEditName
		})
		
	}
	render(){
		return(
			<div>
				{/* Nút tạo Marker*/}
				<MuiThemeProvider><div><FlatButton class="btn" onClick={() => this.buttonClick()} class = "btn"><img src={require("./marker.svg")} height = "20"/></FlatButton></div></MuiThemeProvider>
				<div><Map
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
							{/* Xét trạng thái  tạo Popup*/}
							{this.state.statusMarker[i] ? 
								<Popup
								    coordinates={marker}
								    offset={{'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]}}>
								    <div>
								    	{/* xét trạng thái tạo button  */}
									    {this.state.statusEditName[i] ? 		
									  		<div id="main">
									  			{/* Tạo Input và button Create */}									  		
									  			<div><MuiThemeProvider><InputName  type="text"  onChange={this.handleChange}/></MuiThemeProvider></div>
										    	<div><MuiThemeProvider><Create class="bt" onClick={()=> this.editName(i)}/></MuiThemeProvider></div>
										    </div>
										    :
 										    <div id="main">	
 										    	{/*Hiển thị NameMarker và button Edit*/}									   	 	
										   	 	<div><p> {this.state.nameMarker[i]}</p></div>
										    	<div><MuiThemeProvider><Edit class="bt"  onClick={()=> this.editName(i)}></Edit></MuiThemeProvider></div> 	
										    </div>										 									    
										}
									    {/* hiển thị tọa độ Marker*/}
									  	<div><p>{parseFloat(this.state.coordinates[i].lng).toFixed(2)} ; {parseFloat(this.state.coordinates[i].lat).toFixed(2)}</p></div>
								  	</div>
								</Popup> : ''
							}
						</div>
						);
					})}
				</Map>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
