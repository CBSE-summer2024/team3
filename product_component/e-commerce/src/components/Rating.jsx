import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
    <div className="rating">
        <span>⭐ {rating} / 5.0</span>
    </div>
);

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;