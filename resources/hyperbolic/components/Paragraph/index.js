import React from 'react';
import './styles.css';

const Paragraph = ({
    color = '#262626',
    children
}) => <p className="Paragraph" style={{ color }}>{children}</p>;

export default Paragraph;