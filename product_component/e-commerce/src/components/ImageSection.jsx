import PropTypes from 'prop-types';

const ImageSection = ({ images }) => {
    return (
        <div className="image-section">
            <img src={images.mainImage} alt="Product" className="main-image" />
            <div className="thumbnails">
                {images.thumbnailImages.map((image, index) => (
                    <img key={index} src={image} alt={`Thumbnail ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

ImageSection.propTypes = {
    images: PropTypes.shape({
        mainImage: PropTypes.string.isRequired,
        thumbnailImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ImageSection;