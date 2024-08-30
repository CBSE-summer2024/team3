import { useState } from 'react';
import PropTypes from 'prop-types';

const SelectionControl = ({ selections }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelectionClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <h3>Size</h3>
            <div className="thumbnail-selector">
                {selections.map((thumb, index) => (
                    <div
                        key={index}
                        className={`thumbnail-item ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleSelectionClick(index)}
                    >
                        {thumb}
                    </div>
                ))}
            </div>
        </div>

    );
};

SelectionControl.propTypes = {
    selections: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default SelectionControl;
