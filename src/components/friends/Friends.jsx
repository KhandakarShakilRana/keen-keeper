"use client"
import { useFriends } from '@/context/FriendsContext';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Friends = () => {
    const { friends } = useFriends();
  return (
    <div>
        <div className='text-[#244D3F] text-[24px] font-semibold mb-4'>Your Friends</div>
            <div className='grid grid-cols-4 gap-4'>
            {
                friends.map(d=> {
                    return <Link href={`userdetail/${d.id}`}  className='shadow-xl py-4 text-center' key={d.id}>
                        <img src={d.picture} alt="" className='mx-auto rounded-full mb-4' />
                        <h1 className='text-[#244D3F] text-[20px] font-bold mb-2'>{d.name}</h1>
                        <p className='text-[#64748B] text-[12px] mb-4'>{d.days_since_contact}d ago</p>
                        <div className='text-[#244D3F] text-[12px] mb-6'>
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
                    </Link>
                })
            }
        </div>
        </div>

  )
}

export default Friends