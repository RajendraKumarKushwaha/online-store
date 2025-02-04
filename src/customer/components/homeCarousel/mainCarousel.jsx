import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './homeCarouselData';





export function MainCarousel(){

    const items = MainCarouselData.map(item=><img key={item.pic} className='cursor-pointer ' role='presentation' src={item.pic} alt=""/>)

    
    return(
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
};
   