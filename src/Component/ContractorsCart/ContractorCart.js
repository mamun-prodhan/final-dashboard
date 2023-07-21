import React from 'react';
import arrow1 from "../../asset/arrow1.png"
import Cart from './Cart';

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
                    <h1 className='font-bold'>Status</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Unverified</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Trade</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Bu</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Type</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Limited company     </button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Registration date </h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>00/00/00</button>
                        <img src={arrow1} alt="" />
                    </div>
                </div>
                <div className='mr-4'>
                    <h1 className='font-bold'>Account</h1>
                    <div className='bg-[#E5EBE4] flex w-42 p-3 rounded  justify-between mt-3'>
                        <button>Active</button>
                        <img src={arrow1} alt="" />
                    </div>
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