(this.webpackJsonpfunnumberfacts=this.webpackJsonpfunnumberfacts||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),i=n.n(a),r=(n(12),n(4)),j=n(5),o=n(7),l=n(6),u=(n(13),n(0)),b=function(e){var t=e.onInputChange,n=e.onClickButton;return Object(u.jsxs)("div",{className:"wrapperInput",children:[Object(u.jsx)("input",{onChange:t,type:"search",placeholder:"number/type"}),Object(u.jsx)("button",{onClick:n,type:"submit",children:"Get Fact"})]})},h=(n(15),function(e){var t=e.fact;return Object(u.jsxs)("div",{className:"wrapperOutput",children:[Object(u.jsx)("h2",{children:"Fact:"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:t})]})}),d=(n(16),function(){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"Fun Number Facts"}),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsxs)("p",{children:["Get a fact by entering a number and a type in the form ",Object(u.jsx)("strong",{children:"number/type"}),"."]}),Object(u.jsx)("p",{className:"removeSpace",children:"A number can be"}),Object(u.jsxs)("ul",{className:"list",children:[Object(u.jsx)("li",{children:"integer,"}),Object(u.jsx)("li",{children:"random, or"}),Object(u.jsx)("li",{children:"a day of year (form: month/day)."})]}),Object(u.jsxs)("p",{className:"removeSpace",children:["Type is optional and can be omitted.",Object(u.jsx)("br",{}),"Possible values are"]}),Object(u.jsxs)("ul",{className:"list2",children:[Object(u.jsx)("li",{children:"trivia,"}),Object(u.jsx)("li",{children:"math,"}),Object(u.jsx)("li",{children:"date, or"}),Object(u.jsx)("li",{children:"year."})]}),Object(u.jsx)("p",{className:"removeSpaceTop",children:"Trivia is chosen if type is omitted."}),Object(u.jsx)("p",{className:"removeSpaceTop",children:"Examples: 5/math or random/date"})]})]})}),p=(n(17),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.onClickButton=function(t){var n="http://numbersapi.com/"+e.state.input.trim()+"?json";fetch(n).then((function(e){return e.json()})).then((function(t){return e.setState({fact:t.text})})).catch((function(){return e.setState({fact:"Please enter a valid form."})}))},e.state={input:"",fact:""},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(d,{}),Object(u.jsx)(b,{onInputChange:this.onInputChange,onClickButton:this.onClickButton})]}),Object(u.jsx)("p",{}),Object(u.jsx)(h,{fact:this.state.fact})]})}}]),n}(c.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.9113d913.chunk.js.map