import React, { useState, useEffect } from 'react'
import './Task.css';
import data from '../data';
// import "../data.json";

const Task = () => {
    const [marks, setMarks] = useState(data);
    const [enterId, setEnterId] = useState();
    const [totalMark, setTotal] = useState(Number);
    const [changed, setChanged] = useState("");

    useEffect(() => {
        setMarks(data);
    }, [enterId,changed])


  

    const getData = () => {
        const id = parseInt(enterId);
        const matchId = marks.find((items) => {
            return (
                items.id === id
            )

        })
        setEnterId("");
        setMarks(matchId);
        
        setTotal(matchId.biology / 5 + matchId.chemistry / 5 + matchId.english / 5 + matchId.physics / 5 + matchId.maths / 5);
        
        switch(totalMark){
            case totalMark>=90 :
                setChanged("bg-success");
                break;
            case totalMark >=70 && totalMark <=89 :
                setChanged("bg-primary");
                break;
            case totalMark >=30 && totalMark <=69 :
                setChanged("bg-warning");
                break;
            case totalMark <30 :
                setChanged("bg-danger")
                break;
                default:
                setChanged("");
        }
    }
    console.log(changed);

    return (
        <div>
            <div className="main_container">
                <div className="sub_container">
                    <h1>Calculate the percentage level of a Person's mark</h1>
                    <div className="mt-8 first_box">
                        <h3 for="exampleFormControlInput1" className="form-label">Student Id</h3>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="EnterID between 1 to 14" value={enterId} onChange={(e) => setEnterId(e.target.value)} />
                        <button type="button" class="btn btn-secondary" onClick={getData}>Get Data From Server</button>
                    </div>
                    <div className="percentage_box">
                        <h3>Subject Percentage</h3>
                        <input type="text" className="form-control" value={marks.biology} placeholder="marks in Biology" />
                        <input type="text" className="form-control" value={marks.maths} placeholder="marks in Maths" />
                        <input type="text" className="form-control" value={marks.physics} placeholder="marks in Physics" />
                        <input type="text" className="form-control" value={marks.chemistry} placeholder="marks in Chemistry" />
                        <input type="text" className="form-control" value={marks.english} placeholder="marks in English" />
                        {/* <input type="text" className="form-control" value={marks.computer} placeholder="marks in English" /> */}

                    </div>
                    <div className="total_percentage">
                        <h3>Total Percentage</h3>
                        <h4>{totalMark} {`%`}</h4>

                        <div className="progress">
                            <div className={`progress-bar ${changed}`} style={{ width: totalMark + '%' }}>
                                {totalMark} 
                            </div>
                        </div>

                        {/* { totalMark >= 90 ?
                        <div className="progress">
                        <div className="progress-bar bg-success" style={{width:totalMark + '%'}}>
                        {totalMark} {`success`}
                        </div>
                        </div>
                        : totalMark >= 70 && totalMark <= 89 ? <div className="progress">
                        <div className="progress-bar " style={{width:totalMark + '%'}}>
                        {totalMark} {`Average`}
                        </div>
                        </div> 
                        :totalMark >= 30 && totalMark <= 69 ? 
                        <div className="progress">
                        <div className="progress-bar bg-warning" style={{width:totalMark + '%'}}>
                        {totalMark} {`Pass`}
                        </div>
                        </div> 
                        : totalMark < 30 ? <div className="progress">
                        <div className="progress-bar bg-danger" style={{width:totalMark + '%'}}>
                        {totalMark} {`fail`}
                        </div>
                        </div>  
                        : null
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
