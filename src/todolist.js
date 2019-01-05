import React from 'react'
import './App.css'

class ToDoList extends React.Component{
    constructor(){
        super();
        this.state = {
            todo : '',
            time : 0,
            notes : [],
            start : 0,
            startTime : '',
            endTime : '',
            end : 0,
            total : false
        }
    }

    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name] : value
        })
    }
    submitNote = () =>{
        console.log("submitting")
        let newNote = {
            todo : this.state.todo,
            estTime : this.state.time
        }
        this.setState((prevState)=>{
            return {
            notes : prevState.notes.concat(newNote)
            }
        })
    }

    start=()=>{
        var d = new Date(); 
        let time =   d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
        console.log("start " + time)
        this.setState({
            start : d.getTime(),
            startTime : time
        })
    }

    end=()=>{
        var d = new Date(); 
        let time =   d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
        console.log("end " + time)
        this.setState({
            end : d.getTime(),
            endTime : time,
            total : true
        })
    }


    render(){

        const todo = this.state.notes.map((element,index)=>{            
            return (
                            <tr key = {index}>
                            <td>{element.todo}</td>
                            <td>{element.estTime}</td> 
                            {this.state.start === 0 ? <td style={{textAlign : "center"}}><div style={{width : "100%"}}><button className="btn btn-primary btn-sm" type = "button" variant="contained" color="primary" onClick={this.start}>Start</button></div></td> : <td>{this.state.startTime}</td>}
                            {this.state.end === 0 ? <td style={{textAlign : "center"}}><div style={{width : "100%"}}><button className="btn btn-primary btn-sm" type = "button" variant="contained" color="primary" onClick={this.end}>End</button></div></td> : <td>{this.state.endTime}</td>}
                            {this.state.total ? <td>{(Number(this.state.end) - Number(this.state.start))/3600}</td> : <td>--:--:--</td>}
                            </tr>
                )
})

    return (
        <div className="container">
            <div className="scores-block1 clearfix">
                <div className="bg-white shadow-sm Assessment_Results">
                <div style={{textAlign : "center"}}>
                <form>
                <div className="form-group row" >
                    <label className= "col-sm-3 col-form-label">Todo :  </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="todo" placeholder="Add Todo" onChange={(e)=>{this.handleInput(e)}}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className = "col-sm-3 col-form-label">Estimated Time : </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="time" placeholder="Estimated time" onChange={(e)=>{this.handleInput(e)}}/>
                    </div>
                </div>
                    <button  onClick = {this.submitNote} className="btn btn-primary btn-lg" type = "button" variant="contained" color="primary">
                    Submit
                    </button>
                </form>
                </div>    
                    <table className="table" style= {{marginTop : "2rem"}}>
                        <thead >
                            <tr >
                                <th> <span className="icon-question-circle1" style={{marginRight : "2px"}}/>ToDo</th>
                                <th> <span className="icon-clock" style={{marginRight : "2px"}}/>Estimated Time(minutes)</th>
                                <th> <span className="icon-clock" style={{marginRight : "2px"}}/>Start Time(HH:MM:SS)</th>
                                <th> <span className="icon-clock" style={{marginRight : "2px"}}/>End Time(HH:MM:SS)</th>
                                <th> <span className="icon-clock" style={{marginRight : "2px"}}/>Total Time(minutes)</th>
                            </tr>
                        </thead>
                        <tbody >
                            {todo}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    }
}

export default ToDoList;