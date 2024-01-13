import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler() {
        // if my index -1 is gonna negative then show me the last element in loop manner
        if(index - 1 < 0) {
            // last index called n-1 so n means the length of an array so the array name.length - 1
            setIndex(reviews.length - 1);
        }
        // if value is not negative then
        else {
            setIndex(index-1);
        }
    }
    function rightShiftHandler() {
        // if the elements are out of the array then set the starting array index 0
        if(index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }

    }
    function surpriseHandler() {
        // surprise me button gives the random values so we can use math.random function
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl roundec-md'>
        <Card review = {reviews[index]} />
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center'>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft />
            </button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight />
            </button>
        </div>
        <div>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials;