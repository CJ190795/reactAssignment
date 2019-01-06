import React from 'react'
import '../Styles/App.css'
import TodoHead from '../Components/todohead'
import TodoInput from '../Components/todoInput'
import TodoRows from '../Components/todoRows'

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }

    //Onclicking Submit Button
    submitNote = (e,todo,time) => {
        let newNote = {
            todo: todo,
            estTime: time,
            startTime: 0,
            endTime: 0
        }
        this.setState({
            notes : [...this.state.notes, newNote]
        })
    }

    //Getting current time in milliseconds
    getTimeMilli = () => {
        var d = new Date();
        return d.getTime();
    }


    //Onclick Of starting a ToDO
    start = (e) => {
        let time = this.getTimeMilli();
        this.setState({
            notes: this.state.notes.map((el, i) => (i == e.target.name ? Object.assign({}, el, { startTime: time }) : el))
        })
    }

    //Onclick of ending the ToDO
    end = (e) => {
        let time = this.getTimeMilli();
        if (this.state.notes[e.target.name].startTime != 0) {
            this.setState({
                notes: this.state.notes.map((el, i) => (i == e.target.name ? Object.assign({}, el, { endTime: time }) : el))
            })
        }
        else {
            alert("Please Start the task first")
        }
    }


    render() {
        const todo = this.state.notes.map((element, index) => {
            return (
                <TodoRows key = {index} 
                element = {element} 
                index={index} 
                notes={this.state.notes} 
                start={(e)=>{this.start(e)}} 
                end ={(e)=>{this.end(e)}}
                />
            )
        })

        return (
            <div className="container">
                <div className="scores-block1 clearfix">
                    <div className="bg-white shadow-sm Assessment_Results">
                        <TodoInput submitNote = {(e,todo,time)=>this.submitNote(e,todo,time)}/>
                        {
                        this.state.notes.length !== 0 && 
                        <table className="table" style={{ marginTop: "2rem" }}>
                           <TodoHead />
                            <tbody >
                                {todo}
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;