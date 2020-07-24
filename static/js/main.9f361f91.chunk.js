(this["webpackJsonpanime-con-countdown"]=this["webpackJsonpanime-con-countdown"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),c=(n(14),n(8)),s=n(1),l=n(2),u=n(3),p=n(5),m=n(4),v=(n(15),n(16),n(17),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={date:"",website:null,name:"Null",timeLeft:""},o.updateTimeLeft=o.updateTimeLeft.bind(Object(u.a)(o)),o.props.registerForAppTick(o.props.convention.name,o.updateTimeLeft),o}return Object(l.a)(n,[{key:"updateTimeLeft",value:function(){if(null!=this.state){var e=this.state.date,t=new Date(e)-new Date,n=this.convertMillisecondsToTimeSpan(t),o=n.days+" days, "+n.hours+" hours, "+n.minutes+" minutes, "+n.seconds+" seconds.";this.setState({timeLeft:o})}}},{key:"convertMillisecondsToTimeSpan",value:function(e){var t=e,n=Math.floor(t/864e5);t-=864e5*n;var o=Math.floor(t/36e5);t-=36e5*o;var a=Math.floor(t/6e4);t-=6e4*a;var i=Math.floor(t/1e3);return t-=1e3*i,{days:n,hours:o,minutes:a,seconds:i}}},{key:"componentDidMount",value:function(e){this.setState({date:this.props.convention.date,website:this.props.convention.website,name:this.props.convention.name,timeLeft:""})}},{key:"render",value:function(e){return a.a.createElement("div",{"convention-date":this.props.convention.date,class:"convention-item"},a.a.createElement("h3",null,a.a.createElement("a",{href:this.props.convention.website},this.props.convention.name)),a.a.createElement("p",{class:"convention-timeleft"},this.state.timeLeft))}}]),n}(a.a.Component)),h=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(e){var t=this;return null==this.props.conventions?a.a.createElement("p",null,"There aren't any conventions available at this time."):a.a.createElement("div",{class:"conventions-grid"},this.props.conventions.map((function(e,n){return a.a.createElement(v,{convention:e,registerForAppTick:t.props.apptick})})))}}]),n}(a.a.Component),d=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={conventions:null,tickHandlers:{}},o.registerForAppTick=o.registerForAppTick.bind(Object(u.a)(o)),setInterval((function(){for(var e=0,t=Object.entries(o.state.tickHandlers);e<t.length;e++){var n=Object(c.a)(t[e],2);n[0];(0,n[1])()}}),1e3),o}return Object(l.a)(n,[{key:"registerForAppTick",value:function(e,t){var n=this.state.tickHandlers;n[e]=t,this.setState({tickHandlers:n})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/AzureKitsune/AnimeConCountdown/master/data/conventions.json").then((function(e){return e.json()})).then((function(t){e.setState({conventions:t.conventions})}),(function(e){alert(e)}))}},{key:"render",value:function(e){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Anime Convention Countdown (2020-2021)"),a.a.createElement("p",null,"Countdown to late 2020 & early 2021 anime conventions.")),a.a.createElement("div",{id:"main-content"},a.a.createElement(h,{conventions:this.state.conventions,apptick:this.registerForAppTick})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.9f361f91.chunk.js.map