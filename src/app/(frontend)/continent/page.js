import React from 'react'
import BannerSection from '@/app/components/Pages/FRONT_END/continent/BannerSection'
import CitySection from '@/app/components/Pages/FRONT_END/Global/CitySection'
import ReviewSection from '@/app/components/Pages/FRONT_END/Global/ReviewSection'
import DestinationSliderSection from '@/app/components/Pages/FRONT_END/Global/DestinationSection'
import ShopSection from '@/app/components/Pages/FRONT_END/Global/ShopSection'
import { citiesImage, fakeData, whiteCardData } from '@/app/Data/ShopData'
import TourSection from '@/app/components/Pages/FRONT_END/Global/TourSection'
import GuideSection from '@/app/components/Pages/FRONT_END/Global/GuideSection'
import BreakSection from '@/app/components/BreakSection'
import { delay } from '@/lib/utils'


const CountryPage = async () => {
  const init = await delay(2000)
  return (
    <>
      <BannerSection title={"Europe"} />
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

export default CountryPage

