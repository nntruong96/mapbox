import React from 'react';
import TextField from 'material-ui/TextField';


const InputName = ({onChange}) => (
  <div>
    <TextField
   	  fullWidth = "false"
   	  hintText="Marker's Name"
      onChange={onChange}
    />
  </div>
);export default InputName;