(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),o=a.n(c),r=(a(15),a(1)),s=a(2),m=a(4),i=a(3),u=a(5),d=a(8),E=(a(17),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).handleInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(d.a)({},a,n))},e.submitNote=function(){console.log("submitting");var t={todo:e.state.todo,estTime:e.state.time};e.setState(function(e){return{notes:e.notes.concat(t)}})},e.start=function(){var t=new Date,a=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();console.log("start "+a),e.setState({start:t.getTime(),startTime:a})},e.end=function(){var t=new Date,a=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();console.log("end "+a),e.setState({end:t.getTime(),endTime:a,total:!0})},e.state={todo:"",time:0,notes:[],start:0,startTime:"",endTime:"",end:0,total:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.notes.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.todo),l.a.createElement("td",null,t.estTime),0!==e.state.start?l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:e.start},"Start")):l.a.createElement("td",null,e.state.startTime),0!==e.state.end?l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:e.end},"End")):l.a.createElement("td",null,e.state.endTime),e.state.total?l.a.createElement("td",null,(Number(e.state.end)-Number(e.state.start))/3600):l.a.createElement("td",null,"--:--:--"))});return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"scores-block1 clearfix"},l.a.createElement("div",{className:"bg-white shadow-sm Assessment_Results"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("form",{onSubmit:this.sumbitNote},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Todo :  "),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("input",{className:"form-control",type:"text",name:"todo",placeholder:"Add Todo",onChange:function(t){e.handleInput(t)}}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Estimated Time : "),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("input",{className:"form-control",type:"text",name:"time",placeholder:"Estimated time",onChange:function(t){e.handleInput(t)}}))),l.a.createElement("button",{className:"btn btn-primary btn-lg",type:"button",variant:"contained",color:"primary"},"Submit"))),l.a.createElement("table",{className:"table",style:{marginTop:"2rem"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," ",l.a.createElement("span",{className:"icon-question-circle1"}),"Name"),l.a.createElement("th",null," ",l.a.createElement("span",{className:"icon-clock"}),"Estimated Time"),l.a.createElement("th",null," ",l.a.createElement("span",{className:"icon-clock"}),"Start Time"),l.a.createElement("th",null," ",l.a.createElement("span",{className:"icon-clock"}),"End Time"),l.a.createElement("th",null," ",l.a.createElement("span",{className:"icon-clock"}),"Total Time"))),l.a.createElement("tbody",null,t)))))}}]),t}(l.a.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(E,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.68c90418.chunk.js.map