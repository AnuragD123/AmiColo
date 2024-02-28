import React from 'react'
import Image from 'next/image'
const Card = ({ data, dir }) => {
    return (
        <div className="w-full pt-12 pb-16 max-sm:py-3 lg:pt-16 flex items-center justify-center">
            {data.map((item, index) => (
                <div key={index} className={`w-11/12 px-4 flex max-md:flex-col-reverse items-center gap-4 ${dir == "right" ? "" : "flex-row-reverse"} justify-around`}>
                    <div className="">
                        <div className="mb-16 lg:mb-0 xl:mt-16">
                            <h2 className="mb-4 text-xl font-semibold">{item.heading}</h2>
                            <p className="mb-4 text-lg font-medium">{item.subheading}</p>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around  gap-4'>
                                {item.feature.map((field, index) => (
                                    <li key={index}>{field}</li>
                                ))}
                            </ul>
                        </div>


                    </div>
                    <div className="">
                        <Image
                            className="inline rounded-xl"
                            width={500}
                            height={500}
                            src={item.Img}
                            alt="alternative"
                        />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Card
