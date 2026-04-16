import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FriendDetails = () => {
    const {id} = useParams();
    const[friend, setFriend] = useState(null);

    useEffect(() => {
        fetch("/friends.json")
        .then(res => res.json())
        .then(data => {
            const singleFriend = data.find(f => f.id == id);
            setFriend(singleFriend);
        });
    }, [id]

    );

    if(!friend) return <p>Loading...</p>;

  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default FriendDetails