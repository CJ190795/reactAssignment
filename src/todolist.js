import React from 'react'
import './App.css'

const ToDoList = () => {

    
    return (
        <div className="container">
            <div className="scores-block1 clearfix">
                <div className="bg-white shadow-sm Assessment_Results">
                <div style={{textAlign : "center"}}>
                <div className="form-group row" >
                    <label className= "col-sm-3 col-form-label">Todo :  </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="todo" placeholder="Add Todo" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className = "col-sm-3 col-form-label">Estimated Time : </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="time" placeholder="Estimated time" />
                    </div>
                </div>
                    <button className="btn btn-primary btn-lg" type = "button" variant="contained" color="primary">
                    Submit
                    </button>
                </div>    
                    <table className="table" style= {{marginTop : "2rem"}}>
                        <thead >
                            <tr >
                                <th> <span className="icon-question-circle1" />Name</th>
                                <th> <span className="icon-clock" />Estimated Time</th>
                                <th> <span className="icon-clock" />Start Time</th>
                                <th> <span className="icon-clock" />End Time</th>
                                <th> <span className="icon-clock" />Total Time</th>
                            </tr>
                        </thead>
                        <tbody >
                        <tr>
                            <td>
                            <div>
                                <p>
                                Clean Dishes
                                </p>
                                </div>
                            </td>
                            <td>20</td> 
                            <td>12:10:05</td>
                            <td>12:17:00</td>
                            <td>00:06:55</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    
}

export default ToDoList;