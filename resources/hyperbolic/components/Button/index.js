import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Button = ({
    to = '',
    onClick = undefined,
    children
}) => ((to.length)
    ? <Link className="Button" to={to}>{children}</Link>
    : <button className="Button" onClick={onClick}>{children}</button>
);

export default Button;