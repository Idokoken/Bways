import React from 'react'
import Currency_Ex from "../assets/currency_exchange2.png"
import Support_Icon from "../assets/support_agent.png"
import check_icon from "../assets/check.png"

function OurPolicy() {
    return (
        <div className='flex flex-col sm:flex-row justify-center gap-12 sm:gap-2 text-center py-20 
        text-xs sm:text-sm md:text-base text-gray-700'>
            <div className="">
                <img src={Currency_Ex} className='w-12 m-auto mb-5 ' alt="exchange icon" />
                <p className="font-semibold">Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer hassle free Exchange Policy</p>
            </div>

            <div className="">
                <img src={check_icon} className='w-12 m-auto mb-5 ' alt="quality icon" />
                <p className="font-semibold">7 Days Retrurn Policy</p>
                <p className='text-gray-400'>We Provide & Days Free Return Policy</p>
            </div>
            <div className="">
                <img src={Support_Icon} className='w-12 m-auto mb-5 ' alt="suppport icon" />
                <p className="font-semibold">Best Customer Support</p>
                <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
            </div>
        </div>
    )
}

export default OurPolicy