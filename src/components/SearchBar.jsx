'use client'
import { DatePicker, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import FilterCard from './FilterCard';
import HotelList from './HotelList';
import Offers from './Offers';

const { RangePicker } = DatePicker;

const SearchContainer = () => {
  const [city, setCity] = useState('Delhi');
  const [on, setOn] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [datesRange, setDatesRange] = useState([]);
  const [hotels, setHotels] = useState({})
  const [selectedHotels, setSelectedHotels] = useState([])
  const [warning, setWarning] = useState(false);
  const [maxPrice, setMaxPrice] = useState();
  const [minPrice, setMinPrice] = useState();
  const [fac, setFac] = useState([]);
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  const handleDatesChange = (dates) => {
    const diff = dates[0] - dates[1];
    const differenceInDays = diff / (1000 * 60 * 60 * 24);
    setDatesRange(dates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
    message.error('Enter City name')
      return;
    }
    else {
      const { data } = await axios.get(`/api/hotels?city=${city}`)
      if (data?.hotels) {
        setHotels(data.hotels)
        setSelectedHotels(data?.hotels?.hotels)
        if (data?.hotels?.hotels?.length > 0) {
          
          setOn(true)
        }
      } else {
        setOn(false);
      }
    }
  };
  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/hotels/facilities`, {
        city, facilities: fac, minPrice, maxPrice

      })
      if (data?.hotels) {
        setSelectedHotels(data?.hotels)
      } else {
        message.error('Something went wrong')
      }

    } catch (e) {

    }
  }


  return (
    <div  >
      <div>


        <form  onSubmit={handleSubmit} className="flex mt-[15vh] ">
          <div
            className='searchBar  w-[98%]   flex  items-center  lg:w-[60%]  '
          >
            <input
              placeHolder="Enter City Name..." type="text" value={city} onChange={handleCityChange} className="border-0  outline-0 py-[16px] pl-[30px] radius-[30px] w-[99%] sm:w-[95%]" />
            <div
              className='flex w-[15%]  sm:w-[7%]'>
            <button  type="submit" className=" bg-[blue] p-[12px] rounded-[50%] m-auto  ">
              <CiSearch />
            </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {
          on ? <>
            <FilterCard

              setFac={setFac}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              hotels={hotels}
              fac={fac}
              handleFilter={handleFilter}
            />
            <HotelList
              hotels={selectedHotels}
              setHotels={setHotels}
            />

          </> : <>
            <Offers />
          </>
        }

      </div>
    </div>
  );
};

export default SearchContainer;
