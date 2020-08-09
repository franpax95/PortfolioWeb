import React from 'react';
import './styles.css';

export const SubTitle = ({
    textAlign = 'center',
    color = '#262626',
    children
}) => <div className="SubTitle" style={{ textAlign, color }}>{children}</div>;

const Title = ({
    textAlign = 'center',
    color = '#262626',
    children
}) => <div className="Title" style={{ textAlign, color }}>{children}</div>;

export default Title;