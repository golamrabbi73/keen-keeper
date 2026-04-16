import React, { Suspense } from 'react'
import Banner from '../../components/homepage/Banner'
import AllFriends from '../../components/homepage/AllFriends'
import Footer from '../../components/shared/footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        {/* <Friends friendsPromise={friendsPromise}></Friends> */}
        <AllFriends AllFriends={AllFriends}/>
      </Suspense>
      <Footer />
    </div>
  )
}

export default Homepage