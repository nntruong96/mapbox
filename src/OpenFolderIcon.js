import React from 'react';
import IconButton from 'material-ui/IconButton';
import FolderOpen from 'material-ui/svg-icons/file/folder-open';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  button: {
    margin:  5,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const OpenFolderIcon = ({updateData}) => {
  let fileReader;

  const handleFileRead = () => {
    const content = fileReader.result;
    updateData(content);
   // console.log(fileReader.result);
  }

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  return(
    <RaisedButton
      labelPosition="before"
      containerElement="label"
    >
      <input 
      type="file" 
      style={styles.exampleImageInput} 
      onChange={e => handleFileChosen(e.target.files[0])} 
      accept ='.geojson'
      />
       <FolderOpen />
    </RaisedButton>

  )
};

export default OpenFolderIcon;