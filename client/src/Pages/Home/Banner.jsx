import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img className="h-[450px] object-fill" src="https://i.ibb.co/C6B54xt/pixlr-image-generator-1ea8d673-4b8c-4ec5-a1ca-20d89f5299e2.png" />
                <p className="legend">Legend 1</p>

            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;