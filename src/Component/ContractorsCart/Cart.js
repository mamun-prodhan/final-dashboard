import React from 'react';
import profile from "../../asset/profile.png"
import { useNavigate } from "react-router-dom";

const Cart = ({data}) => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate("/contractorCart-details")
    }
    return (
        <div className='border-2 border-[#F6B501] rounded-xl '>
            <div className='p-5'>
            <div className='flex justify-center '>
                <img className='' src={profile} alt="" />
            </div>
            <hr className='mt-4' />
            <div className=' mt-3 '>
                <h1 className='text-center'>{data.name}</h1>
                <p className='text-center'><small>{data.date}</small></p>
                <p className='text-center'>{data.designation}</p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4 mt-3'>
                <button className='bg-[#E6EBE3] p-1 rounded mt-2 w-28 '>Building</button>
                <button className='bg-[#E6EBE3] p-1 rounded mt-2 w-28'>Building</button>
                <button className='bg-[#E6EBE3] p-1 rounded mt-2 w-28'>Building</button>
            </div>
            <div className='mt-3'>
                <h1 className='text-center text-[#F6B501]'>-- {data.view}</h1>
            </div>
            </div>
            <button  onClick={handleNavigate} className='w-full bg-[#F6B501] p-3 rounded' >view</button>
        </div>
    );
};

export default Cart;