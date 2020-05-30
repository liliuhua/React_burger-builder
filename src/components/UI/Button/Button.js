import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')} //join this with a whitespace to have a list of classes
        onClick={props.clicked}>{props.children}</button>
);

export default button
