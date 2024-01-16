import React from 'react'
import bgCard from '/Static/bg-card.png'

const Card = ({mobile}) => {
  return (
    <div className="card" style={{width: '100%', marginBottom: '1rem'}}>
    <img className="card-img-top" src={bgCard} alt="Card image cap" />
    <div className="card-body">
        <div className='text-black' style={{fontWeight:500, fontSize:'1rem'}}>Article</div>
        <div className='text-black' style={{fontWeight:700, fontSize:'1.2rem'}}>What if famous brands had regular fonts? Meet </div>
        <div className='text-black' style={{fontWeight:700, fontSize:'1.2rem'}}>RegulaBrands!</div>
        <div className='text-black' style={{fontWeight:400, fontSize:'0.8rem', marginTop:'1rem'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
    </div>
    <div className='d-flex justify-content-between w-100'>
        <div style={{marginLeft:'1rem', marginBottom:'1.2rem'}}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" className='' style={{width:'2rem'}} alt="" />
            <span className='' style={{fontSize:'0.85rem', fontWeight:'700', marginLeft:'1rem'}}>Sarthak Kamra</span>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{marginRight:'1rem', marginBottom:'1.2rem'}}>
            <img src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png" style={{width:'1rem', height:'1rem', opacity:'50%'}} alt="" />
            <span style={{fontSize: '0.7rem', fontWeight: 600, marginLeft:'0.8rem'}} className='text-black-50'>1.4k views</span>
            <div className='d-flex p-2' style={{padding:'3px 8px', background:'#EDEEF0', cursor:'pointer' , borderRadius:'7px', marginLeft:'0.8rem'}}>
                <img src="https://www.svgrepo.com//show/13662/share.svg" style={{width:'0.8rem'}} alt="" />
                {mobile?<span style={{fontSize:'0.7rem', fontWeight:'500', marginLeft:'0.4rem' }}>Share</span>:''}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card