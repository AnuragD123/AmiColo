import React from 'react'
import Image from 'next/image'
const TestimonialCard = ({ data }) => {
    return (
        <div className="w-3/5 max-sm:w-full" >
            <div className="">
                <div className=" ">
                    <div className="w-full flex flex-wrap items-center justify-around  gap-4">
                        {data.map((item, index) => (
                            <div key={index} className="max-w-48 max-sm:w-full flex flex-col gap-4 items-center justify-center">
                                <Image
                                    className=''
                                    width={70}
                                    height={70}
                                    src={item.Img}
                                    alt="alternative"
                                />

                                <div className="w-full">
                                    <p className=" mb-3">{item.review}</p>
                                    <p className="">{item.name}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    )
}

export default TestimonialCard
