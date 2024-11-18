import React from 'react';
import mani from './man.jpg'; // Correct image import

const Phot = () => {
    return (
        <div className='mani'>
            <img src={mani} alt="Man" style={{ borderRadius: "50%", width: "250px", height: "250px" }} />
        </div>
    );
};

export default Phot;