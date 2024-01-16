import React, { useEffect, useState } from 'react'
import AllPosts from './Pages/AllPosts'
import Navbar from './Components/Navbar'
import UserProvider from './UserProvider'
import AllPostsMobile from './Pages/AllPostsMobile'

const App = () => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 768){
      setMobile(true)
    }
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <UserProvider>
      <Navbar mobile={mobile}/>
      {
        mobile ? <AllPostsMobile /> : <AllPosts/>
      }
      </UserProvider>
    </div>
  )
}

export default App