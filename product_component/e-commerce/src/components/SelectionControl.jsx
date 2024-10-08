import { useState } from 'react';
import PropTypes from 'prop-types';

const SelectionControl = ({ selectionName, selectionData}) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelectionClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <h3>{selectionName}</h3>
            <div className="selection-control">
                {selectionData.map((selection, index) => (
                    <div
                        key={index}
                        className={`selected-item ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleSelectionClick(index)}
                    >
                        {selection}
                    </div>
                ))}
            </div>
        </div>

    );
};

SelectionControl.propTypes = {
    selectionName: PropTypes.string.isRequired,
    selectionData: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default SelectionControl;
