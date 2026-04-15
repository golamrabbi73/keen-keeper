import React from 'react'

const Friend = ({friend}) => {
    console.log(friend)
  return (
    <>
        <div className="card bg-base-100 w-65 shadow-sm p-6">
                <div className='w-24 h-24 mx-auto rounded-full overflow-hidden'>
                    <img src={friend.picture} className='w-full h-full object-cover'/>
                </div>
                <div className="card-body text-center">
                    <h2 className="font-semibold text-2xl">
                    {friend.name}
                    </h2>
                    <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}</p>
                    <div className="card-actions flex flex-col items-center">
                    <div className="badge rounded-full bg-[#CBFADB] text-[12px] font-medium">{friend.tags[1]}</div>
                    <div className="badge">{friend.status}</div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Friend