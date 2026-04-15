import { use } from "react";
import Friend from "./Friend";

export default function Friends({friendsPromise}){
    const friendsData = use(friendsPromise);

    return(
        <>
            <div className="max-w-6xl mx-auto">
                <h2 className="font-semibold text-2xl mb-4 pl-0.5">Your Friends</h2>
                <div className="grid grid-cols-4 gap-6  justify-items-center">
                    {
                        friendsData.map(friend => <Friend friend={friend}></Friend>)
                    }
                </div>
            </div>
        </>
    )
}