import React, { useRef, useState ,useEffect} from 'react'
import Snap from '../assets/images/logo.svg'
import './Header.css'
import ArrowDown from '../assets/images/icon-arrow-down.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'
import Todo from '../assets/images/icon-todo.svg'
import Calendar from '../assets/images/icon-calendar.svg'
import Reminder from '../assets/images/icon-reminders.svg'
import Planning from '../assets/images/icon-planning.svg'
import Card from './card'
import Card2 from './Card2'



function Header() {

    const [isActive,setIsActive] =useState(false)
    const [isCompany,setIsCompany] =useState(false)
    const company =["History","Our Team","Blog"]
    const images =[Todo,Calendar,Reminder,Planning]
    const features =["Todo","Calendar","Reminder","Planning"]
   
    const activeRef=useRef()

    const companyRef=useRef()
    const menuRef=useRef()
    const menu1Ref=useRef()
    useEffect(() => {
        const handleWindowClick = (e) => {
          if (
            e.target !== menuRef.current &&
            e.target !== activeRef.current &&
            e.target !== companyRef.current &&
            e.target !== menu1Ref.current
          ) {
            setIsActive(false);
            setIsCompany(false);
          }
        };
    
        window.addEventListener('click', handleWindowClick);
    
        return () => {
          window.removeEventListener('click', handleWindowClick);
        };
      }, []); // Empty dependency array ensures that the effect runs once during mount and cleans up on unmount
    
   
  return (
    <>
    <div className='Header'>
        <div className='Header-1'>
            <figure className='h-image'>
                <img src={Snap} alt='snap'
/>
            </figure>
            
            <ul>
                <li ref={activeRef}
                onClick={(e)=>{e.stopPropagation();setIsActive(!isActive)}} >Features <img src={ArrowDown} className='arrowdown' alt="arrow down" />
                <img src={ArrowUp} className='arrowup' alt="arrow up" /></li>
                <li ref={companyRef} onClick={(e)=>{e.stopPropagation();setIsCompany(!isCompany)}}>Company <img src={ArrowDown} className='arrowdown' alt="arrow down" />
                <img src={ArrowUp} className='arrowup' alt="arrow up" /></li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            {isActive && (
            <div  ref={activeRef}  style={{
                position:"relative",
            





            }}>
                <Card  >
                   <ul style={{
                    display:"block",
                    
                    
                   }}>
                   <li className='c-list' onClick={(e)=>{e.stopPropagation();setIsActive(!isActive)}}><img className='icons' src={Todo} alt="" />Todo List</li>
                   <li className='c-list' onClick={(e)=>{e.stopPropagation();setIsActive(!isActive)}}><img className='icons' src={Calendar} alt="" />Calender</li>
                   <li className='c-list' onClick={(e)=>{e.stopPropagation();setIsActive(!isActive)}}><img className='icons' src={Reminder} alt="" />Remainder</li>
                   <li className='c-list'onClick={(e)=>{e.stopPropagation();setIsActive(!isActive)}}><img className='icons' src={Planning} alt="" />Planning</li>
                   </ul>
                </Card>

            </div>
        )}

{isCompany && (
            <div  ref={menu1Ref} style={{
                position:"relative"
            }}>
                <Card2 >
                    <ul style={{display:"block"}}>
                       {
                         company.map((items)=>(
                            <a href="#" key={items}  onClick={(e)=>{e.stopPropagation();setIsCompany(!isCompany)}}>
                                <li>
                                    {items}</li></a>

                         ))
                       }
                       
                    </ul>
                </Card2>

            </div>
        )}

        </div>

        <div >
            <a className='link' href="#">Login</a>
            <button className='register'>Register</button>

        </div>
        

    </div>

    
    
    </>
  )
}

export default Header