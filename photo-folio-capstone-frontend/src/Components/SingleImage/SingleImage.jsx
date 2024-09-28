import { useEffect, useState } from "react";
import { getImageUrl } from "../../utils/functions";
import "./SingleImage.scss";

function SingleImage() {
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPhoto();
    }, []);

    const fetchPhoto = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/photos/`);
            const data = await response.json();

            if (data.length > 0) {
                setPhoto(data[0]);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            {photo && (
                <div className="maindiv__single">
                    <img id="single-image" src={getImageUrl(photo.filename)} alt={photo.filename} />
                </div>
            )}
        </>
    );
}

export default SingleImage;
