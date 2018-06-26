import React from 'react';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/content/send';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

const Create = ({onClick}) => (
    <IconButton  onClick={onClick}>
      <ImageEdit />
    </IconButton>
);

export default Create;