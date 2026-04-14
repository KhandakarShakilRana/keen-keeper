
import Image from 'next/image';
import React from 'react'

const Friends = async() => {
    const res = await fetch("http://localhost:3000/friends.json");
    const data = await res.json();
  return (
    <div>
        <div className='text-[#244D3F] text-[24px] font-semibold mb-4'>Your Friends</div>
            <div className='grid grid-cols-4 gap-4'>
            {
                data.map(d=> {
                    return <div className='shadow-xl py-4 border-2 text-center' key={d.id}>
                        
                        <h1 className='text-[#244D3F] text-[20px] font-bold'>{d.name}</h1>
                        <p className='text-[#64748B] text-[12px]'>{d.days_since_contact}d ago</p>
                        <div className='text-[#244D3F] text-[12px] mb-4'>
                           {
                            d.tags.map((t,i)=> <div className='text-[#244D3F] inline gap-2' key={i}>
                                <div className='m-1 uppercase font-semibold bg-[#CBFADB] inline text-[#244D3F] py-1 px-2 rounded-2xl'>{t}</div>
                            </div>)
                           }
                        </div>
                        <div className={
                            `inline py-1 px-3 rounded-2xl text-white capitalize  ${
                                d.status == "overdue" ? "bg-[#EF4444]" : d.status == "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"
                                
                            }`
                        }>{d.status}</div>
                    </div>
                })
            }
        </div>
        </div>

  )
}

export default Friends