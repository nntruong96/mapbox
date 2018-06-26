import React from 'react';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

const Edit = ({onClick}) => (
    <IconButton  onClick={onClick}>
      <ImageEdit />
    </IconButton>
);

export default Edit;