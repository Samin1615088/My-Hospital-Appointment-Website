import React from 'react';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <a className="nav-link me-5" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link me-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link me-5" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link me-5" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link me-5" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link me-5" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>




        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div class="container-fluid">
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>

        //         <div class="collapse navbar-collapse " id="navbarSupportedContent">
        //             <ul class="navbar-nav ml-auto">
        //                 <li class="nav-item active">
        //                     <a className="nav-link" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link" href="#">About</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link" href="#">Dental Services</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link" href="#">Reviews</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link" href="#">Blog</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link" href="#">Contact Us</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    );
};

export default Navbar;

