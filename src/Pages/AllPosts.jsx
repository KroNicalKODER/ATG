import React, { useContext, useState, useRef } from 'react'
import { Container,Button } from 'react-bootstrap'
import Card from '../Components/Card'
import {UserContext} from '../UserProvider'

import './AllPosts.css'

const AllPosts = () => {
    let options = ["All Posts(32)","Article","Event","Education","Job"]
    const buttonRefs = Array.from({ length: 5 }).map(() => useRef(null));
    const {username, updateUser} = useContext(UserContext)
    const [optionState, setOptionState] = useState(0)
    const arr = ['','','','','']

    const handleFollowClick = (index) => {
        const btnRef = buttonRefs[index]
        if(btnRef.current.classList.contains('follow-btn-clicked')) {
            btnRef.current.innerHTML = 'Follow'
        } else {
            btnRef.current.innerHTML = 'Followed'
        }
        btnRef.current.classList.toggle('follow-btn-clicked')
        console.log(btnRef)
    }

  return (
    <Container>
        <Container>
            <Container style={{padding: '3rem 3.4rem',height: '50vh', background: 'url("/Static/bg.png")', backgroundSize: 'cover', justifyContent:'flex-end' , flexDirection:'column'}} className='d-flex'>
            <div style={{}} className='text-white fs-2 fw-bold'>Computer Engineering</div>
            <div style={{}} className='text-white'>142,765 Computer Engineers follow this</div>
            </Container>
        </Container>
        <Container className='d-flex' style={{ width:'64rem', marginTop:'1rem'}}>
            <div className='w-100 h-100 d-flex' style={{flex:2}}>
            {
                options.map((option,index)=>(
                    index == optionState ?
                    <span key={index} className={`text-black ${index==0 ? '' : 'px-4'}`} style={{borderBottom:"1.5px solid black", transition:'all 0.2s ease-in',paddingBottom:'0.6rem'}}>{option}</span>
                    :
                    <span key={index} className={`text-black-50 ${index==0 ? '' : 'px-4'}`} style={{cursor:'pointer',borderBottom: '1.5px solid #EDEEF0', transition:'all 0.2s ease-in',paddingBottom:'0.6rem'}} onClick={()=>setOptionState(index)}>{option}</span>
                ))
            }
            </div>
            <div className=' d-flex align-items-center justify-content-end' style={{flex:1}}>
                <Button className='dropdown btn btn-light mx-3' style={{fontSize: '0.7rem', fontWeight:'500', background:'#EDEEF0'}}>
                    Write a Post
                    <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" style={{width: '0.5rem', marginLeft:'0.3rem'}} alt="" />
                </Button>
                <Button className='dropdown btn btn-primary' style={{fontSize: '0.7rem', fontWeight:'500'}}>Join Group</Button>
            </div>
        </Container>
        <Container className='w-100 d-flex' style={{ width:'64rem', marginTop:'1rem', marginBottom: '3rem'}}>
            <div className='d-flex mx-5 flex-column' style={{flex:2}}>
                <Card key={1}/>
                <Card key={2}/>
                <Card key={3}/>
                <Card key={4}/>
            </div>
            <div className='d-flex flex-column mx-5' style={{flex:1}}>
                <div className='d-flex align-items-center w-100 justify-content-between' style={{height:'fit-content', borderBottom:'1px solid #B8B8B8', paddingBottom:'0.5rem'}}>
                    <div style={{fontSize: '0.8rem', fontWeight:'500'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" className="" style={{width:'1rem',height:'1rem'}} alt="" />
                        <span style={{marginLeft:'0.5rem'}}>Noida, India</span>
                    </div>
                    <div>
                        <img src="https://cdn0.iconfinder.com/data/icons/outline-icons/320/Pen_2-512.png" style={{width:'1rem'}} alt="" />
                    </div>
                </div>
                <div className='d-flex' style={{marginTop: '2rem'}}>
                    <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-512.png" style={{opacity:'40%', width:'1rem', height:'1rem', marginTop:'0.1rem'}} alt="" />
                    <span style={{fontSize:'0.7rem', fontWeight: '500', marginLeft: '1rem', opacity: '70%'}}>Your location will help us serve better and extend a personalised experience.</span>
                </div>
        {
            username == '' ? <></> :
            <div className='d-flex flex-column'>
                <div className='d-flex align-items-center' style={{marginTop: '2rem'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1175/1175578.png" style={{width:'1rem', height: '1rem'}} alt="" />
                    <span style={{fontSize:'0.80rem', fontWeight:'650', letterSpacing: '1px', marginLeft: '1rem'}}>RECOMMENDED GROUPS</span>
                </div>
                {
                    arr.map((_,index)=>(
                        <div key={index} className='d-flex justify-content-between align-items-center'  style={{marginTop:'1rem'}}> 
                            <div className='d-flex align-items-center'>
                                <img src="https://www.shareicon.net/data/512x512/2016/05/26/771198_man_512x512.png" style={{width: '1.8rem'}} alt="" />
                                <span style={{marginLeft:'1rem', fontWeight:'500', fontSize:'0.8rem'}}>Leisure</span>
                            </div>
                            <button ref={buttonRefs[index]} className="follow-btn" onClick={()=>handleFollowClick(index)}>Follow</button>
                        </div>
                    ))
                }

                <span style={{fontSize:'0.67rem', fontWeight:'600', alignSelf:'end', marginTop:'2rem', textDecoration:'underline', cursor:'pointer'}} className='text-primary'>See more...</span>
                
            </div>
        }
            </div>
        </Container>
    </Container>
  )
}

export default AllPosts