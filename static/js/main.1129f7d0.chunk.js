(this["webpackJsonpconditional-rendering"]=this["webpackJsonpconditional-rendering"]||[]).push([[0],{35:function(e,t,n){e.exports=n(54)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a,i=n(1),r=n.n(i),s=n(23),o=n.n(s),c=n(22),l=n(7),u=(n(43),function(){var e=Object(l.f)();return r.a.createElement("div",{className:"landing-page"},r.a.createElement("h1",null,"Welcome to Achieve!"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){e("/game2")}},"Let's begin"))}),d=(n(44),n(5)),m=n(6),p=n(9),h=n(10),f=(n(45),[{id:1,question:"This is a long yellow fruit. Monkeys love to eat it. Which fruit is it?",options:["Orange","Apple","Pear","Banana"],answer:"Banana"},{id:2,question:"This red fruit is often mistaken for a vegetable. It is quite popular as soup. Which fruit is it?",options:["Papaya","Tomato","Apple","Kiwi"],answer:"Tomato"},{id:3,question:"One a day keeps the doctor away. Which fruit is it?",options:["Grapefruit","Guava","Apple","Coconut"],answer:"Apple"},{id:4,question:"Some people don't like it on a pizza. It has a prickly outside and is yellow inside. Which fruit is it?",options:["Pineapple","Apricots","Mango","Clementine"],answer:"Pineapple"},{id:5,question:"This fruit is green on the outside and red on the inside. Which fruit is it?",options:["Apple","Strawberry","Avacado","Watermelon"],answer:"Watermelon"}]),b=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).loadQuiz=function(){var e=a.state.currentIndex;a.setState((function(){return{question:f[e].question,options:f[e].options,answer:f[e].answer}}))},a.checkAnswer=function(e){a.setState({userAnswer:e,disabled:!1})},a.nextQuestionHander=function(){var e=a.state,t=e.userAnswer,n=e.answer,i=e.score;a.setState({currentIndex:a.state.currentIndex+1}),t===n&&a.setState({score:i+1})},a.finishHandler=function(){var e=a.state.score;a.state.currentIndex===f.length-1&&a.setState({quizEnd:!0,score:e+1})},a.state={userAnswer:null,currentIndex:0,options:[],quizEnd:!1,score:0,disabled:!0},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentIndex;this.state.currentIndex!==t.currentIndex&&this.setState((function(){return{question:f[n].question,options:f[n].options,answer:f[n].answer}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.question,a=t.options,i=t.currentIndex,s=t.userAnswer;return t.quizEnd?r.a.createElement("div",{className:"centered"},r.a.createElement("h2",null,"Game Over. Final score is ",this.state.score," points"),r.a.createElement("h3",null,"The correct Answers for the quiz are"),r.a.createElement("ul",null,f.map((function(e,t){return r.a.createElement("li",{className:"options",key:t},"Question: ",e.question,r.a.createElement("br",null),"Answer: ",e.answer)})))):r.a.createElement("div",{className:"centered"},r.a.createElement("span",{className:"question"},"Question ".concat(i+1," of ").concat(f.length)),r.a.createElement("h2",null,n),a.map((function(t){return r.a.createElement("p",{key:t.id,className:" options\n                ".concat(s===t?"selected":null,"\n                "),onClick:function(){return e.checkAnswer(t)}},t)})),i<f.length-1&&r.a.createElement("button",{className:"button btn btn-primary",disabled:this.state.disabled,onClick:this.nextQuestionHander},"Next Question"),i===f.length-1&&r.a.createElement("button",{className:"button btn btn-primary",disabled:this.state.disabled,onClick:this.finishHandler},"Finish"))}}]),n}(i.Component),E=(n(15),n(8),n(13),n(2)),v=(n(28),n(18)),w=n.n(v),g=(n(48),[{id:w()(),content:"Apple"},{id:w()(),content:"Banana"},{id:w()(),content:"Brocolli"},{id:w()(),content:"Cauliflower"},{id:w()(),content:"Grapes"},{id:w()(),content:"Spinach"}]);a={},Object(E.a)(a,w()(),{name:"Items",items:g}),Object(E.a)(a,w()(),{name:"Fruits",items:[]}),Object(E.a)(a,w()(),{name:"Vegetables",items:[]});function k(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},"Copyright \xa9 ",(new Date).getFullYear()))}n(0),n(3);var y=n(21),I=(n(53),n(32)),q=Object(I.a)({apiKey:"AIzaSyDYqbUJZgwFv4-ukiBhMLlU2aKnIFmSl5U",authDomain:"achieve-auth.firebaseapp.com",projectId:"achieve-auth",storageBucket:"achieve-auth.appspot.com",messagingSenderId:"545413071682",appId:"1:545413071682:web:903bfb16fd3e0fcc98bedb",measurementID:"G-BVKR37891Z"});Object(y.b)(q);var A=n(33);function O(){var e=Object(l.f)();return r.a.createElement("div",{class:"header"},r.a.createElement("h3",null,r.a.createElement(A.a,{size:"1.5rem",onClick:function(){e("/")}})))}var x=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(O,null)),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",element:r.a.createElement(u,null)}),r.a.createElement(l.a,{path:"/game2",element:r.a.createElement(b,null)})),r.a.createElement("div",null,r.a.createElement(k,null)))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1129f7d0.chunk.js.map