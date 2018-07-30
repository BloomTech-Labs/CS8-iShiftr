import React from 'react';
import '../css/ShiftSchedule.css';
import Schedule from './TestCal';


class ShiftSchedule extends React.Component {
    render() {
        return (                        
                <div className = 'row justify-content-center'>
                    <h3><strong>Weekly Schedule</strong></h3>
                    
                    <div className = 'col col-12 mt-3 editShift'>
                        <div>
                            <p>Navigation</p>
                        </div>
                        <button className='border'>
                            <span>Edit Shift</span>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                    </div>
                    <div className ='row col-12 mt-3'>            
                            <Schedule />
                    </div>    
                </div>                                    
        );
    }
}

export default ShiftSchedule;
