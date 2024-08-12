import React from 'react';
import './styles/SassComponent.scss';

export default function SassComponent() {
    return (
        <>
            <div className="container">
                <div className="box red">1</div>
                <div className="box orange">2</div>
                <div className="box yellow">3</div>
            </div>
            <div className="box yellow"></div>
            <button className="btn">Button</button>
            <button className="btn-primary">Button Primary</button>
        </>
    );
}