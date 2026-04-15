import './App.css'
import "@fontsource/geist";
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Friends from './components/Friends'
import { Suspense } from 'react';

const fetchFriends = async () => {
  const res = await fetch("/friends.json");
  return res.json();
}
const friendsPromise = fetchFriends();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  )
}

export default App
