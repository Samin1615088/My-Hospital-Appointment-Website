import React from 'react';
import chairImg from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row align-items-center gap-3">
            <div className="col-md-4 offset-md-1">
                <h1 className="fw-bold">Your New Smile</h1>
                <br />
                <h1 className="fw-bold">Starts Here</h1>
                <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chairImg} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;