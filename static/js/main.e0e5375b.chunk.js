(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),s=n.n(l),r=(n(15),n(1)),c=n(2),i=n(4),m=n(3),u=n(5),d=n(8),g=(n(17),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(d.a)({},n,a))},e.submitNote=function(){console.log("submitting");var t={todo:e.state.todo,estTime:e.state.time,startTime:0,endTime:0,total:!1,start:0,end:0};e.setState(function(e){return{notes:e.notes.concat(t),todo:e.todo,time:e.time}})},e.start=function(t){console.log(t.target.name);var n=new Date,a=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log("start "+a),e.setState({notes:e.state.notes.map(function(e,o){return o==t.target.name?Object.assign({},e,{startTime:a},{start:n.getTime()}):e})},function(){console.log("start - "+JSON.stringify(e.state.notes))})},e.end=function(t){console.log(t.target.name);var n=new Date,a=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log("end "+a),0!=e.state.notes[t.target.name].startTime?e.setState({notes:e.state.notes.map(function(e,o){return o==t.target.name?Object.assign({},e,{endTime:a},{end:n.getTime()},{total:!0}):e})},function(){console.log("end - "+JSON.stringify(e.state.notes))}):alert("Please Start the task first")},e.state={todo:"",time:0,notes:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;console.log("render - "+JSON.stringify(this.state.notes));var t=this.state.notes.map(function(t,n){return o.a.createElement("tr",{key:n},o.a.createElement("td",{style:{textAlign:"center"}},t.todo),o.a.createElement("td",{style:{textAlign:"center"}},t.estTime),0===e.state.notes[n].startTime?o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("button",{name:n,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(t){return e.start(t)}},"Start"))):o.a.createElement("td",{style:{textAlign:"center"}},e.state.notes[n].startTime),0===e.state.notes[n].endTime?o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("button",{name:n,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(t){return e.end(t)}},"End"))):o.a.createElement("td",{style:{textAlign:"center"}},e.state.notes[n].endTime),e.state.notes[n].total?o.a.createElement("td",{style:{textAlign:"center"}},10*Math.round((Number(e.state.notes[n].end)-Number(e.state.notes[n].start))/3600)/10):o.a.createElement("td",{style:{textAlign:"center"}},"--:--:--"))});return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"hi"),o.a.createElement("div",{className:"scores-block1 clearfix"},o.a.createElement("div",{className:"bg-white shadow-sm Assessment_Results"},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Todo :  "),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{className:"form-control",type:"text",name:"todo",placeholder:"Add Todo",onChange:function(t){e.handleInput(t)}}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Estimated Time : "),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{className:"form-control",type:"text",name:"time",placeholder:"Estimated time",onChange:function(t){e.handleInput(t)}}))),o.a.createElement("button",{onClick:this.submitNote,className:"btn btn-primary btn-lg",type:"button",variant:"contained",color:"primary"},"Submit"))),o.a.createElement("table",{className:"table",style:{marginTop:"2rem"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," ",o.a.createElement("span",{className:"icon-question-circle1",style:{marginRight:"2px"}}),"ToDo"),o.a.createElement("th",null," ",o.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Estimated Time(minutes)"),o.a.createElement("th",null," ",o.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Start Time(HH:MM:SS)"),o.a.createElement("th",null," ",o.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"End Time(HH:MM:SS)"),o.a.createElement("th",null," ",o.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Total Time(minutes)"))),o.a.createElement("tbody",null,t)))))}}]),t}(o.a.Component)),E=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(g,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.e0e5375b.chunk.js.map