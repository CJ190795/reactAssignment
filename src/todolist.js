import React from 'react'
import './App.css'

class ToDoList extends React.Component{
    constructor(){
        super();
        this.state = {
            todo : '',
            time : 0,
            notes : [],
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
        let newNote = {
            todo : this.state.todo,
            estTime : this.state.time,
            startTime : 0,
            endTime : 0,
            total : false,
            start : 0,
            end : 0
        }
        this.setState((prevState)=>{
            return {
            notes : prevState.notes.concat(newNote),
            todo : '',
            time : 0
            }
        })
    }

    start=(e)=>{
        var d = new Date(); 
        let time =   d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
        this.setState({
            notes :  this.state.notes.map((el,i) => (i == e.target.name ? Object.assign({}, el, { startTime : time }, {start : d.getTime()}) : el))          
        })
    }

    end=(e)=>{
        var d = new Date(); 
        let time =   d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
        if(this.state.notes[e.target.name].startTime != 0){
            this.setState({
                notes :  this.state.notes.map((el,i) => (i == e.target.name ? Object.assign({}, el, { endTime : time }, {end : d.getTime()}, {total : true}) : el))
            })
        }
        else{
            alert("Please Start the task first")
        }
    }


    render(){
        const todo = this.state.notes.map((element,index)=>{            
            return (
                            <tr key = {index}>
                            <td style={{textAlign : "center"}}>{element.todo}</td>
                            <td style={{textAlign : "center"}}>{element.estTime}</td> 
                            {this.state.notes[index].startTime === 0 ? <td style={{textAlign : "center"}}><div style={{width : "100%"}}><button name={index}  className="btn btn-primary btn-sm" type = "button" variant="contained" color="primary" onClick={(e) => this.start(e)}>Start</button></div></td> : <td style={{textAlign : "center"}}>{this.state.notes[index].startTime}</td>}
                            {this.state.notes[index].endTime === 0 ? <td style={{textAlign : "center"}}><div style={{width : "100%"}}><button name={index}  className="btn btn-primary btn-sm" type = "button" variant="contained" color="primary" onClick={(e) => this.end(e)}>End</button></div></td> : <td style={{textAlign : "center"}}>{this.state.notes[index].endTime}</td>}
                            {this.state.notes[index].total ? <td style={{textAlign : "center"}}>{new Date((Number(this.state.notes[index].end) - Number(this.state.notes[index].start))).toISOString().substr(11, 8)}</td> : <td style={{textAlign : "center"}}>--:--:--</td>}
                            </tr>
                )
})

    return (
        <div className="container">
        <h1>hi</h1>
            <div className="scores-block1 clearfix">
                <div className="bg-white shadow-sm Assessment_Results">
                <div style={{textAlign : "center"}}>
                <form>
                <div className="form-group row" >
                    <label className= "col-sm-3 col-form-label">Todo :  </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="todo" placeholder="Add Todo" onChange={(e)=>{this.handleInput(e)}} value={this.state.todo}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className = "col-sm-3 col-form-label">Estimated Time (minutes) : </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="time" placeholder="Estimated time" onChange={(e)=>{this.handleInput(e)}} value={this.state.time}/>
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