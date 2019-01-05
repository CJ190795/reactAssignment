import React from 'react'


const ToDoList = () => {
    return(
        <div className = "container">
            <div className="scores-block1 clearfix">
<div className="bg-white shadow-sm Assessment_Results">
<h5 style={{textAlign : "center"}}>Page : </h5>
<button type="button" className="page-link" style ={{order : "3", marginLeft:"43%",borderRadius:"3px",right:"5px",padding:"3px 13px",display:"inline"}} name = "left" >Previous</button>
<button type="button" className="page-link" style ={{order : "3", left:"5px",borderRadius:"3px",padding:"3px 13px",display:"inline"}} name="right" >Next</button>

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