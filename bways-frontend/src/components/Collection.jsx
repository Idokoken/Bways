import React, { useContext, useState } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { ShopContext } from '../context/ShopContext'
import drop_down from "../assets/drop_down.png"

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);
  
`

function Collection() {
    const { products } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <Header />
            <Wrapper>
                <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
                    {/* filter option */}
                    <div className="min-w-60">
                        <p onClick={() => setShowFilter(!showFilter)} on className="text-xl my-2 flex items-center cursor-pointer gap-2 ">FILTERS
                            <img src={drop_down} alt="dropdown icon" className={`h-3 sm:hidden 
                            ${showFilter ? 'rotate-90' : ""} `} />
                        </p>
                        {/* Category Filter */}
                        <div className={`border border-geay-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                                <p className="flex gap-2">
                                    <input className='w-3 ' type="checkbox" name="" value={`Men`} />Men
                                </p>
                                <p className="flex gap-2">
                                    <input className='w-3 ' type="checkbox" name="" value={`Women`} />Women
                                </p>
                                <p className="flex gap-2">
                                    <input className='w-3 ' type="checkbox" name="" value={`Kids`} />Kids
                                </p>
                            </div>
                        </div>
                        {/* Subcategory filter */}
                        <div className={`border border-geay-300 pl-5 py-3 mt-6 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                            <p className='mb-3 text-sm font-medium'>TYPE</p>
                            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                                <p className="flex gap-2">
                                    <input className='w-3 ' type="checkbox" name="" value={`Topwear`} />Topwear
                                </p>
                                <p className="flex gap-2">
                                    <input className='w-3 ' type="checkbox" name="" value={`Bottomwear`} />Bottomwear
                                </p>
                                <p className="flex gap-2">
                                    <input className='w-3 ' type="checkbox" name="" value={`Winterwear`} />Winterwear
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Collection