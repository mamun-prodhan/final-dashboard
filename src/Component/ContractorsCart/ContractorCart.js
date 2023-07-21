import React from 'react';
import arrow1 from "../../asset/arrow1.png"
import Cart from './Cart';
import DropDown from '../DropDown/DropDown';

const ContractorCart = () => {
    const datas = [
        {
            id:1,
            name:"Paul Smith",
            date:"(2 feb 2023)",
            designation:"Self employed",
            view:"Unverified"
        },
        {
            id: 2,
            name:"Paul Smith",
            date:"(2 feb 2023)",
            designation:"Self employed",
            view:"Verified"
        },
        {
            id: 3,
            name:"Paul Smith",
            date:"(2 feb 2023)",
            designation:"Self employed",
            view:"Reccomended"
        }
    ]
    return (
        <div className="p-5 lg:p-14 mt-10 bg-[#FFF] rounded-2xl ">
            <div className=''>
                <p className=''>All</p>
                <p className='mt-3'>Unverified </p>
                <p className='mt-3'>verified </p>
                <p className='mt-3'>Reccomended </p>
            </div>

            <div className='mt-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
                <div className='mr-4'>
                    <h1 className='font-bold mb-3'>Status</h1>
                    <DropDown></DropDown>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold mb-3'>Trade</h1>
                    <DropDown></DropDown>
                </div>
                <div className='mr-4'>
                <h1 className='font-bold mb-3'>Type</h1>
                    <DropDown></DropDown>
                </div>
                <div className='mr-4'>
                <h1 className='font-bold mb-3'>Registration date</h1>
                    <DropDown></DropDown>
                </div>
                <div className='mr-4'>
                <h1 className='font-bold mb-3'>Account</h1>
                    <DropDown></DropDown>
                </div>
            </div>
            {/* cart container  */}
            <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    datas?.map(data=> <Cart data={data} key={data.id}></Cart>)
                }
            </div>
        </div>
    );
};

export default ContractorCart;