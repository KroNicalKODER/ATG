import React, { useState } from 'react'
import { Button, Container, NavDropdown } from 'react-bootstrap'
import Back from '/Static/back.png'
import Card from '../Components/Card'
import Pen from '/Static/penic.png'
import './mobile.css'

const AllPostsMobile = () => {
    const [joined,setJoined] = useState(false)
  return (
    <div className='' style={{position:'relative'}}>
        <div className="box" style={{cursor: 'pointer',position:'fixed', transform:'translateX(82vw) translateY(77vh)', zIndex:'2'}}>
            <div className="circle d-flex justify-content-center align-items-center" >
                <img src={Pen} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
            </div>
        </div>
        <div className='d-flex flex-column justify-content-between' style={{padding: '',height: '50vh', background: 'url("/Static/bgm.png")', backgroundSize: 'cover',backgroundRepeat: 'no-repeat' , flexDirection:'column'}} >
            <div className='d-flex w-100 justify-content-between px-4 py-3 align-items-center'> 
                <span><img src={Back} alt="" style={{width: '1rem'}} /></span>
                <Button onClick={()=>setJoined(!joined)} className='d-flex align-items-center justify-content-center' style={{background: 'none', border: '1px solid white', padding:'2px 10px', fontSize:'0.75rem', fontWeight: '500'}}> {joined ? 'Joined' : 'Join Group'}</Button>
            </div>
            <div className='my-4 mx-5'>
                <div style={{}} className='text-white fs-2 fw-bold'>Computer Engineering</div>
                <div style={{}} className='text-white'>142,765 Computer Engineers follow this</div>
            </div>
        </div>
        <Container className='d-flex justify-content-between align-items-center my-3'>
            <div className='d-flex fw-bold'>Posts(268)</div>
            <div className='d-flex align-items-center px-3 py-1' style={{fontSize:'0.85rem', fontWeight:'500', background:'#F1F3F5', borderRadius:'4px'}}>Filter:
            <NavDropdown style={{marginLeft:'1rem'}} title='All' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

            </div>
        </Container>
        <Container>
            <Card mobile={true}/>
            <Card mobile={true}/>
            <Card mobile={true}/>
        </Container>
    </div>
  )
}

export default AllPostsMobile