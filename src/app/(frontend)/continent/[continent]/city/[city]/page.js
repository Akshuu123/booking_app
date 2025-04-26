/** This File Will Handle City Page */

import BannerSection from "@/app/components/Pages/FRONT_END/city/BannerSection";
import Link from "next/link";
import CitySection from "@/app/components/Pages/FRONT_END/Global/CitySection";
import { whiteCardData, citiesImage, fakeData } from "@/app/Data/ShopData";
import BreakSection from "@/app/components/BreakSection";
import TourSection from "@/app/components/Pages/FRONT_END/Global/TourSection";
import ShopSection from "@/app/components/Pages/FRONT_END/Global/ShopSection";
import ReviewSection from "@/app/components/Pages/FRONT_END/Global/ReviewSection";
import GuideSection from "@/app/components/Pages/FRONT_END/Global/GuideSection";
import ProductSliderSection from "@/app/components/Pages/FRONT_END/Global/ProductSliderSection";


export default async function CityPage({ params }) {
    const { city } = await params;

    return (
        <>
            <BannerSection bannerTitle={city && city}/>
            <CitySection data={whiteCardData} />
            <ProductSliderSection sliderTitle={"top activities"}  />
            <BreakSection />
            <TourSection />
            <BreakSection />
            <ShopSection />
            <ReviewSection />
            <GuideSection sectionTitle={"Blogs"} data={fakeData} />
        </>
    )
}