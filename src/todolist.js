import React from 'react'
import {Button, Grid} from "@material-ui/core";


const ToDoList = () => {
    return (
        <div className="container">
            <div className="scores-block1 clearfix">
                <div className="bg-white shadow-sm Assessment_Results">
                    <h5 style={{ textAlign: "center" }}>Add Item </h5>
                    <Grid container style={{ marginTop: '10%', textAlign: 'center' }}>
                    <Grid item xs={12} md={9} lg={6} style={{ margin: '0 auto' }}>
                        <input type = "text" />
                    <Button variant="contained" color="primary">
                    Submit
                    </Button>
                    </Grid>
                    </Grid>
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