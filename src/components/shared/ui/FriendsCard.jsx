import React from 'react'
import { Link } from 'react-router';

 const statusColor = (status) => {
    if(status === "almost due") return "bg-[#EFAD44]";
    if(status === "overdue") return "bg-[#EF4444]";
    if(status === "on-track") return "bg-[#244D3F]";
    return "bg-gray-400";
}

const FriendsCard = ({friend}) => {
  return (
    <>
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 w-65 shadow-sm p-6">
            <div className='w-24 h-24 mx-auto rounded-full overflow-hidden'>
                    <img src={friend.picture} className='w-full h-full object-cover'/>
                </div>
                <div className="card-body text-center">
                    <h2 className="font-semibold text-2xl">
                    {friend.name}
                    </h2>
                    <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}</p>
                    <div className="card-actions flex flex-col items-center">
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {
                            friend.tags.map((tag, index)=>(
                                <span key={tag} className='badge rounded-full bg-[#CBFADB] text-[12px] font-medium uppercase'>
                                    {tag}
                                </span>
                            )

                            )
                        }
                    </div>
                    <div className={`badge rounded-full text-[12px] text-white font-medium ${statusColor(friend.status)}`}>{friend.status}</div>
                    </div>
                </div>
                
        </Link>
    </>
  )
}

export default FriendsCard