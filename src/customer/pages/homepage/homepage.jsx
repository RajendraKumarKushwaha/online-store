import { mens_kurta } from "../../../Data/mensKurta";
import { MainCarousel } from "../../components/homeCarousel/mainCarousel";
import { HomeSectionCarousel } from "../../components/homeSectionCarousel/homeSectionCarousel";

export function HomePage() {
    return (
        
            <div>
                <MainCarousel />
                <div className="space-y-10 py-20 flex flex-col justify-center lg:px-10 px-5">
                   <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                   <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
                   <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
                   <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
                   <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
                 
                </div>
            </div>
            
    )
}