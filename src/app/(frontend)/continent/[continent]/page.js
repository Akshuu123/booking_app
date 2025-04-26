/** This File will handle Continent Page */
import BannerSection from "@/app/components/Pages/FRONT_END/continent/BannerSection";
import CitySection from "@/app/components/Pages/FRONT_END/Global/CitySection";
import ReviewSection from "@/app/components/Pages/FRONT_END/Global/ReviewSection";
import ShopSection from "@/app/components/Pages/FRONT_END/Global/ShopSection";
import DestinationSliderSection from "@/app/components/Pages/FRONT_END/Global/DestinationSection";
import { citiesImage, whiteCardData, fakeData } from "@/app/Data/ShopData";
import BreakSection from "@/app/components/BreakSection";
import TourSection from "@/app/components/Pages/FRONT_END/Global/TourSection";
import GuideSection from "@/app/components/Pages/FRONT_END/Global/GuideSection";


export default async function Continent({ params }) {
    const { continent } = await params;
    return (
        <>
            <BannerSection title={continent} />
            <CitySection data={whiteCardData} />
            <DestinationSliderSection sliderTitle={"must visit cities"} data={citiesImage} />
            <BreakSection />
            <TourSection />
            <BreakSection />
            <ShopSection />
            <ReviewSection />
            <GuideSection sectionTitle={"Blogs"} data={fakeData} />
        </>
    )
}
