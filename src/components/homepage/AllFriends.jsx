import React, { use } from 'react'
import FriendsCard from '../shared/ui/FriendsCard';

const fetchFriends = async () => {
  const res = await fetch("/friends.json");
  return res.json();
}
const friendsPromise = fetchFriends();


const AllFriends = () => {
    const allFriends = use(friendsPromise);
  return (
    <>
        <div className="max-w-6xl mx-auto">
                <h2 className="font-semibold text-2xl mb-4 text-center sm:text-left sm:pl-7 md:pl-3 lg:pl-0.5">Your Friends</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  justify-items-center">

                    {
                        allFriends.map((friend) => {
                          return <FriendsCard key={friend.id} friend={friend}></FriendsCard>
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default AllFriends