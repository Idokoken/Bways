import React from 'react'
import { assets } from './../assets/assets';

function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={assets.brand}
                            alt="brand"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top me-2"
                            style={{ borderRadius: "50%" }}
                        />
                        Bways
                    </Link>
                    <button className=''>Logout</button>
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar