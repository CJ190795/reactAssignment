(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),l=n.n(s),i=n(1),c=n(2),o=n(4),m=n(3),u=n(5),d=n(9),p=(n(16),function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-question-circle1",style:{marginRight:"2px"}}),"ToDo"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Estimated Time(minutes)"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Start Time(HH:MM:SS)"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"End Time(HH:MM:SS)"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Total Time(HH:MM:SS)")))}),b=n(8),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(b.a)({},n,a))},e.resetState=function(){e.setState({todo:"",time:""})},e.state={todo:"",time:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},"Todo :  "),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{className:"form-control",type:"text",name:"todo",placeholder:"Add Todo",onChange:function(t){e.handleInput(t)},value:this.state.todo}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},"Estimated Time (minutes) : "),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{className:"form-control",type:"number",min:"0",name:"time",placeholder:"Estimated time",onChange:function(t){e.handleInput(t)},value:this.state.time}))),""===this.state.todo.trim()||""===this.state.time.trim()||Number(this.state.time.trim())<=0?r.a.createElement("button",{title:"Please add todo and valid estimated time",disabled:!0,className:"btn btn-lg",type:"button",variant:"contained"},"Submit"):r.a.createElement("button",{onClick:function(t){e.props.submitNote(t,e.state.todo,e.state.time),e.resetState()},className:"btn btn-primary btn-lg",type:"button",variant:"contained",color:"primary"},"Submit"))}}]),t}(r.a.Component),h=void 0,g=function(e){return new Date(e).toISOString().substr(11,8)},f=function(e){return r.a.createElement("tr",null,r.a.createElement("td",{style:{textAlign:"center"}},e.element.todo),r.a.createElement("td",{style:{textAlign:"center"}},e.element.estTime),0===h.props.notes[e.index].startTime?r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("button",{name:e.index,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(e){return h.props.start(e)}},"Start"))):r.a.createElement("td",{style:{textAlign:"center"}},g(h.props.notes[e.index].startTime)),0===h.props.notes[e.index].endTime?r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("button",{name:e.index,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(e){return h.props.end(e)}},"End"))):r.a.createElement("td",{style:{textAlign:"center"}},g(h.props.notes[e.index].endTime)),0!==h.props.notes[e.index].endTime?r.a.createElement("td",{style:{textAlign:"center"}},g(h.props.notes[e.index].endTime-h.props.notes[e.index].startTime)):r.a.createElement("td",{style:{textAlign:"center"}},"--:--:--"))},y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).submitNote=function(t,n,a){var r={todo:n,estTime:a,startTime:0,endTime:0};e.setState({notes:[].concat(Object(d.a)(e.state.notes),[r])})},e.getTimeMilli=function(){return(new Date).getTime()},e.start=function(t){var n=e.getTimeMilli();e.setState({notes:e.state.notes.map(function(e,a){return a==t.target.name?Object.assign({},e,{startTime:n}):e})})},e.end=function(t){var n=e.getTimeMilli();0!=e.state.notes[t.target.name].startTime?e.setState({notes:e.state.notes.map(function(e,a){return a==t.target.name?Object.assign({},e,{endTime:n}):e})}):alert("Please Start the task first")},e.state={notes:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.notes.map(function(t,n){return r.a.createElement(f,{key:n,element:t,index:n,notes:e.state.notes,start:function(t){e.start(t)},end:function(t){e.end(t)}})});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"scores-block1 clearfix"},r.a.createElement("div",{className:"bg-white shadow-sm Assessment_Results"},r.a.createElement(E,{submitNote:function(t,n,a){return e.submitNote(t,n,a)}}),0!==this.state.notes.length&&r.a.createElement("table",{className:"table",style:{marginTop:"2rem"}},r.a.createElement(p,null),r.a.createElement("tbody",null,t)))))}}]),t}(r.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null)}}]),t}(a.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.883ec712.chunk.js.map