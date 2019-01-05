import React from 'react'
import {Button, Grid} from "@material-ui/core";


const ToDoList = () => {
    return (
        <div className="container">
            <div className="scores-block1 clearfix">
                <div className="bg-white shadow-sm Assessment_Results">
                <div>
                <h5 style={{ textAlign: "center" }}>Add Todos </h5>
                <div >
                    <label>Todo :  </label>
                    <div >
                        <input type="text" name="todo" placeholder="Add Todo" />
                    </div>
                </div>
                <div >
                    <label>Estimated Time : </label>
                    <div>
                        <input type="text" name="time" placeholder="Estimated time" />
                    </div>
                </div>
                    <Button variant="contained" color="primary">
                    Submit
                    </Button>
                </div>    
                    <table className="table">
                        <thead >
                            <tr >
                                <th> <span className="icon-question-circle1" />Name</th>
                                <th> <span className="icon-clock" />Estimated Time</th>
                                <th> <span className="icon-clock" />Start Time</th>
                                <th> <span className="icon-clock" />End Time</th>
                                <th> <span className="icon-clock" />Total Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;