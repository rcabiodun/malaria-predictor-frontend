import { useEffect, useState } from 'react';
import './css/App.css';
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    const [btn, setbtn] = useState()
    const [searchd, setSearch] = useState('')
    const [visible, setVisible] = useState('dontShow')

    useEffect(() => {
        searchd.trim().length < 1 ? setbtn("Take test") : setbtn("Search")

    }, [searchd])

    function showSide() {
        if (visible == "dontShow") {
            setVisible("show")
        } else {
            setVisible("dontShow")
        }
    }
    return (
        <header>
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 id="logo">F</h1>
            </Link>
            <input type="search" name="search" id="search" placeholder="Nothing to search for" onChange={(ev) => {
                setSearch(ev.target.value)
            }} ></input>

            <nav id={visible}>
                <a className="nav-link" >

                </a>
                <Link to="/subscription" style={{ textDecoration: "none" }}>
                <a className="nav-link" >Subscribe</a>

                </Link>
                <Link to="/examine" style={{ textDecoration: "none" }}>

                    <a className="nav-link" >Take test</a>
                </Link>
                <button id="nav-toggle" onClick={showSide}>+</button>

            </nav>
            <Link to="/examine" style={{ textDecoration: "none" }}>
                <h4 className="nav-link-btn" >
                    Take test
                </h4>

            </Link>


            <button id="nav-toggle" onClick={showSide}>+</button>

            <Outlet />
        </header>
    )

}