import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { TimelineContext } from '../context/timeline/TimlineContext'
import toast from 'react-hot-toast'
const alarmImg = "/images/alarm.png"
const archiveImg = "/images/archive.png"
const deleteImg = "/images/delete.png"
const callImg = "/images/call.png"
const textImg = "/images/text.png"
const videoImg = "/images/video.png"

 const statusColor = (status) => {
    if(status === "almost due") return "bg-[#EFAD44]";
    if(status === "overdue") return "bg-[#EF4444]";
    if(status === "on-track") return "bg-[#244D3F]";
    return "bg-gray-400";
}

const FriendDetails = () => {
    const {id} = useParams();
    // const[friend, setFriend] = useState(null);

    // useEffect(() => {
    //     fetch("/friends.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         const singleFriend = data.find(f => f.id == id);
    //         setFriend(singleFriend);
    //     });
    // }, [id]

    // );

    // if(!friend) return <p>Loading...</p>;
    const friends = useLoaderData();
    console.log(friends)
    const expectedFriend = friends.find(friend => friend.id == id)
    console.log(expectedFriend);

    const {handleAction} = useContext(TimelineContext);
    const navigate = useNavigate();

    const handleClick = (type) => {
      handleAction(type, expectedFriend.name);
      toast.success(`${type} added to timeline`);
      // navigate("/timeline")
    }

  return (
    <>
      <div className='max-w-6xl mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>

        {/* left side */}
        <div className='col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4'>

          {/* profile card */}
          <div className="card bg-base-100 w-full shadow-sm p-2">
              <div className='w-24 h-24 mx-auto rounded-full overflow-hidden mt-4'>
                <img src={expectedFriend.picture} className='w-full h-full object-cover'/>
              </div>
              <div className="my-4 text-center">
                  <h2 className="font-semibold text-2xl">{expectedFriend.name}</h2>
                  <div className="card-actions flex flex-col items-center mt-2">
                    <div className={`badge rounded-full text-[12px] text-white font-medium ${statusColor(expectedFriend.status)}`}>{expectedFriend.status}</div>
                    <div className='flex flex-wrap gap-2 justify-center mt-2'>
                          {
                              expectedFriend.tags.map((tag, index)=>(
                                  <span key={tag} className='badge rounded-full bg-[#CBFADB] text-[12px] font-medium uppercase'>
                                      {tag}
                                  </span>
                              )

                              )
                          }
                      </div>
                  </div>
                  <div>
                    <h3 className='my-3 text-[#64748B] text-[16px] font-medium'>{expectedFriend.bio}</h3>
                    <p className='text-[#64748B] text-[14px]'>Preferred: {expectedFriend.email}</p>
                  </div>
              </div>
          </div>

          {/* Action cards */}
          <div className='grid gap-3'>

            {/* soonze card */}
            <div className="card w-full bg-base-100 card-lg shadow-sm">
              <button className='btn border-none font-medium'><img src={alarmImg} alt="" />Snooze 2 weeks</button>
            </div>

            {/* Archive card */}
            <div className="card w-full bg-base-100 card-lg shadow-sm">
              <button className='btn border-none font-medium'><img src={archiveImg} alt="" />Archive</button>
            </div>

            {/* delete card */}
            <div className="card w-full bg-base-100 card-lg shadow-sm">
              <button className='btn border-none font-medium'><img src={deleteImg} alt="" />Delete</button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-4'>
          {/* Top stats cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {/* days card */}
            <div className="card w-full bg-base-100 card-lg shadow-sm flex flex-col items-center justify-center text-center p-8">
                <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{expectedFriend.days_since_contact}</h2>
                <p className='text-[#64748B]'>Days Since Contact</p>
            </div>

            {/* Goal card */}
            <div className="card w-full bg-base-100 card-lg shadow-sm flex flex-col items-center justify-center text-center p-8">
                  <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{expectedFriend.goal}</h2>
                  <p className='text-[#64748B]'>Goal (Days)</p>
            </div>

            {/* Next due card */}
            <div className="card w-full bg-base-100 card-lg shadow-sm flex flex-col items-center justify-center text-center p-8">
                  <h2 className="card-title text-[#244D3F] font-semibold text-3xl">{expectedFriend.next_due_date}</h2>
                  <p className='text-[#64748B]'>Next Due</p>
            </div>
          </div>
          {/* Relationship Goal */}
          <div className="card w-full bg-base-100 card-lg shadow-sm p-8">
              <div className='flex justify-between mb-5'>
                <h2 className="card-title text-[#244D3F] font-medium text-3xl">Relationship Goal</h2>
                <button>Edit</button>
              </div>
                <p>
                  <span className='text-[#64748B]'>Connect every </span>
                  <span className='font-bold'>{expectedFriend.goal} days</span>
                </p>
          </div>

          {/* check in card */}
          <div className="card w-full bg-base-100 card-lg shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="card-title text-[#244D3F] font-medium text-3xl mb-4">Quick Check-In</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {/* call */}
              <div>
                <button onClick={() => handleClick("Call")} className='btn w-full flex flex-col items-center justify-center border-none font-medium bg-[#E9E9E9] rounded-xl p-10'>
                  <img className='w-8' src={callImg} alt="" />
                  <span>Call</span>
                </button>
              </div>
              {/* text */}
              <div>
                <button onClick={() => handleClick("Text")} className='btn w-full flex flex-col items-center justify-center border-none font-medium bg-[#E9E9E9] rounded-xl p-10'>
                  <img className='w-8' src={textImg} alt="" />
                  <span>Text</span>
                </button>
              </div>
              {/* video */}
              <div>
                <button onClick={() => handleClick("Video")} className='btn w-full flex flex-col items-center justify-center border-none font-medium bg-[#E9E9E9] rounded-xl p-10'>
                  <img className='w-8' src={videoImg} alt="" />
                  <span>Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FriendDetails