import React, { Component } from "react";
import { 
  Popup
} from "react-mapbox-gl";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import ImageEdit from 'material-ui/svg-icons/image/edit';

class Editting extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name || ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.name !== this.state.name){
      this.setState({
        name: nextProps.name || this.state.name
      })
    }
  }
  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }
  render(){
    return(
      <div className='popup-row'>
        <TextField
          hintText="Marker's Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <IconButton 
          onClick={() => this.props.submit(this.state.name)}
          disabled={!this.state.name}
        >
          <ContentSend />
        </IconButton>
      </div>
    );
  }
}

const Edited = ({name, onClick}) => (
  <div className="popup-row"> 
    <div><p> {name}</p></div>
    <div>
      <IconButton onClick={onClick}>
        <ImageEdit />
      </IconButton>
    </div>   
  </div>  
);

const MarkerPopup = ({coordinates, name, isNameEditting, updateLocationMarkers, handleChangeMarker}) => (
  	<Popup
    		coordinates={coordinates}
    		offset={{
      	'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
    	}}>
    	<div>
        {isNameEditting ?     
          <Editting 
            submit={updateLocationMarkers}
            name={name}
          /> : <Edited onClick={handleChangeMarker} name={name}/>                                       
      }
        {/* hiển thị tọa độ Marker*/}
        <div>
          <p className='text-center'> { `${coordinates[0].toFixed(2)}; ${coordinates[1].toFixed(2)}` }</p>
        </div>
      </div>
    </Popup>
);

export default MarkerPopup;