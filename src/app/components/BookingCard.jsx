import React from 'react'
import BuyNow from './BuyNow'
import { Star } from 'lucide-react'


const BookingCard = ({ destination, date, city, bookingId, ratings }) => {
    return (
        <div className='bg-white rounded-lg p-4 flex flex-col gap-4  shadow-md'>
            <div className='grid grid-cols-2 flex-wrap'>
                {/* destination */}
                {destination && <h3 className={'text-black text-xl font-semibold'}>{destination}</h3>}
                {/* date */}
                <span className='text-black text-base font-normal'>18 Oct 2024</span>
                {/* city */}
                <span className='text-black text-base font-normal'>Abu Dhabi</span>
                {/* bookingId */}
                <span className='text-gray-400  text-base font-medium'>Booking Id :02187654879</span>
            </div>
            <div className='border border-y-2 border-y-graycolor border-x-0 py-2'>
                <h3 className={'text-black text-xl font-semibold'}>Your Review</h3>
                <ul className='flex'>
                    <li>
                        <Star className=' fill-yellow-300 text-yellow-300' />
                    </li>
                    <li>
                        <Star className=' fill-yellow-300 text-yellow-300' />
                    </li>
                    <li>
                        <Star className=' fill-yellow-300 text-yellow-300' />
                    </li>
                </ul>
            </div>
            <div className='flex justify-between items-center'>
                <img src={'/assets/Review.png'} className='w-12'  alt='booking_logo'/>
                <BuyNow text={'View booking'} />
            </div>
        </div>
    )
}

export default BookingCard