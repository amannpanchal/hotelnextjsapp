'use client'
import React, { useState } from 'react';
import { Button, Card, Checkbox, Slider } from 'antd';

const FilterCard = ({ hotels, setFac, fac, setMaxPrice, setMinPrice, handleFilter }) => {

    const handleFacilityChange = (facility) => {
        const index = fac.indexOf(facility);
        if (index === -1) {
            setFac([...fac, facility]);
        } else {
            setFac(fac.filter((item) => item !== facility));
        }

    };

    const handlePriceChange = (value) => {

        setMaxPrice(value[1])
        setMinPrice(value[0])
    };

    return (
        <div title="Filter">
            <div className='w-[93%] bg-[white] dataCard rounded-[20px] py-[30px]  m-auto mt-[70px] flex  items-center justify-around ' >
                <div className='w-full px-[10vw]' >

                    <div  >
                        <div
                            className='text-[15px]  text-[black] md:text-[20px] '
                        >
                           Facilities : 
                        </div>
                        {hotels?.facilities?.map((facility) => (
                            <Checkbox
                                className='text-black'
                                key={facility?._id}
                                checked={fac.includes(facility)}
                                onChange={() => handleFacilityChange(facility)}
                            >
                                <span className='text-black'>{facility}</span>
                            </Checkbox>
                        ))}
                    </div>
                    <div>
                        <div
                            className='text-[15px]  text-[black] md:text-[20px] '

                        >
                            Price Range :
                        </div>
                        <Slider range min={0} max={1000} defaultValue={[0, 10000]} onChange={handlePriceChange} />
                    </div>
                    <div
                        className=' flex justify-end'
                    >
                        <Button
                            onClick={handleFilter}
                            className='
                            rounded-[22px]
                            bg-[blue]
                            px-[30px]
                            text-[15px]
                            text-[white]
                            h-[38px]'
                       
                        >

                            Apply Filter</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FilterCard;
