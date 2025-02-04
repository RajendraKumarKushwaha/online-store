import AliceCarousel from "react-alice-carousel";
import { HomeSectionCard } from "../homeCarousel/homeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState, useRef } from "react";
import PropTypes from "prop-types";

export function HomeSectionCarousel({ data, sectionName }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null); // Ref to access AliceCarousel instance

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // Function to slide to previous item
    const slidePrev = () => {
        if (carouselRef.current) {
            const newIndex = Math.max(activeIndex - 1, 0);
            carouselRef.current.slideTo(newIndex);
            setActiveIndex(newIndex);
        }
    };

    // Function to slide to next item
    const slideNext = () => {
        if (carouselRef.current) {
            const newIndex = Math.min(activeIndex + 1, data.length - 1);
            carouselRef.current.slideTo(newIndex);
            setActiveIndex(newIndex);
        }
    };

    // Sync active index when user manually swipes
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // Create carousel items
    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return (
        <div>
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    disableButtonsControls
                />

                {activeIndex < data.length - 5 && (
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                        }}
                        color="primary"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(90deg)",
                        }}
                        color="primary"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
                    </Button>
                )}
            </div>
        </div>
    );
}

HomeSectionCarousel.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    sectionName: PropTypes.string.isRequired,
};
