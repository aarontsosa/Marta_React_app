import React, { Component } from 'react';

const DropdownDir = ({direction, update}) => (
    <div className="form-group">
        <select className="form-control" value={direction} onChange={update}> 
            <option value="N">N</option>
            <option value="E">E</option>
            <option value="S">S</option>
            <option value="W">W</option>
        </select>
    </div>
)

export default DropdownDir;

