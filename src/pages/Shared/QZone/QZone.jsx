import React from 'react';
import qZone1 from "../../../img/qZone1.png"
import qZone2 from "../../../img/qZone2.png"
import qZone3 from "../../../img/qZone3.png"
const QZone = () => {
    return (
        <div className='bg-bg-secondary border border-1 '>
            <h4 className='ps-3 pt-3'>Q-Zone</h4>
            <div className='p-5'>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default QZone;