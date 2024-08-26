/* eslint-disable react/prop-types */
const ThumbnailSelector = ({ thumbnails }) => (
    <div className="thumbnail-selector">
        {thumbnails.map((thumb, index) => (
            <div key={index}>{thumb}</div>
        ))}
    </div>
);

export default ThumbnailSelector;