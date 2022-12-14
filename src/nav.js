import { useEffect, useState } from 'react';
import './css/App.css';



export default function NavBar(){
    const[btn,setbtn]=useState()
    const[searchd,setSearch]=useState('')
    const[visible,setVisible]=useState('dontShow')

    useEffect(()=>{
        searchd.trim().length<1?setbtn("Shop Now"):setbtn("Search")
    
    },[searchd])

    function showSide(){
        if(visible=="dontShow"){
            setVisible("show")
        }else{
            setVisible("dontShow")
        }
    }
    return(
        <header>
        <h1 id="logo">F</h1>
            <input type="search" name="search" id="search" placeholder="search for products"  onChange={(ev)=>{
              setSearch(ev.target.value)
            }} ></input>

        <nav id={visible}>
                <a className="nav-link" >Blog</a>
                <a className="nav-link" >About</a>
                <a className="nav-link" >Contact Us</a>
                <button id="nav-toggle" onClick={showSide}>+</button>

        </nav>
        <a className="nav-link-btn" >{btn}</a>

        <button id="nav-toggle" onClick={showSide}>+</button>
        

    </header>
    )

}