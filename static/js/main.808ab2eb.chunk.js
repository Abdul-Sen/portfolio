(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){e.exports=a.p+"static/media/Coding.4ef40d95.png"},114:function(e,t,a){e.exports=a.p+"static/media/Coding2.89b1fd79.png"},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(103),a(31)),c=a(23),m=a(44),s=a(45),u=a(48),d=a(38),p=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"About page")}}]),t}(r.a.Component),g=a(10),E=a(36),h=a(49),b=a.n(h),f=a(22),x=a(162),y=a(153),v=a(156),j=a(119),k=a(173),w=a(120),S=a(79),C=a.n(S),O=a(80),I=a.n(O),A=a(81),T=a.n(A),W=a(66),L=a.n(W),B=a(67),H=a.n(B),N=a(68),z=a.n(N),P=a(32),R=a.n(P),D=function(e){return r.a.createElement(R.a,{left:!0},r.a.createElement(y.a,{container:!0,direction:"row",alignItems:"center",spacing:3},r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(j.a,{variant:"h4"},r.a.createElement(k.a,{fontWeight:"fontWeightLight"},"About me"))),r.a.createElement(y.a,{item:!0,md:11},r.a.createElement(j.a,{variant:"body1",gutterBottom:!0},r.a.createElement(k.a,null,"My name is Abdul Rehman, and I am a final semester computer programming student at Seneca College. I am actively searching for a place to work where I can learn and grow as a developer.",r.a.createElement("br",null),r.a.createElement("br",null),"I bring with myself an energetic personality and a love of learning and building modern web applications."))),r.a.createElement(y.a,{item:!0,md:12,sm:12,xs:12},r.a.createElement(j.a,{variant:"h5"},r.a.createElement(k.a,{fontWeight:"fontWeightLight",paddingLeft:"20px"},"Contact"))),r.a.createElement(y.a,{item:!0,md:12,sm:12,xs:12},r.a.createElement(j.a,{variant:"body2",style:{display:"flex",alignItems:"center"}},r.a.createElement(C.a,null)," \u2002 +1 437-928-1996")),r.a.createElement(y.a,{item:!0,md:12,sm:12},r.a.createElement(j.a,{variant:"body2",style:{display:"flex",alignItems:"center"}},r.a.createElement(I.a,null)," \u2002 abdul-rehman@myseneca.ca")),r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(j.a,{variant:"body2",style:{display:"flex",alignItems:"center"}},r.a.createElement(T.a,null)," \u2002 40 Guildcrest Dr, Scarborough, ON M1E 1E4")),r.a.createElement(y.a,{item:!0,md:12,sm:12},r.a.createElement(j.a,{variant:"h5"},r.a.createElement(k.a,{fontWeight:"fontWeightLight",paddingLeft:"20px"},"Online presence"))),r.a.createElement(y.a,{item:!0,md:4,sm:3,xs:12},r.a.createElement(k.a,{textAlign:"center"},r.a.createElement(w.a,{size:"large",style:{textTransform:"lowercase"},href:"https://www.linkedin.com/in/abdul-r/",target:"_blank"},r.a.createElement(L.a,{color:"primary",fontSize:"large"})," Catch me on linkedIn"))),r.a.createElement(y.a,{item:!0,md:4,sm:3,xs:12},r.a.createElement(k.a,{textAlign:"center"},r.a.createElement(w.a,{size:"large",style:{textTransform:"lowercase"},href:"https://github.com/Abdul-Sen",target:"_blank"},r.a.createElement(H.a,{fontSize:"large"}),"\xa0 See how I code"))),r.a.createElement(y.a,{item:!0,md:4,sm:3,xs:12},r.a.createElement(k.a,{textAlign:"center"},r.a.createElement(w.a,{size:"large",style:{textTransform:"lowercase"},href:"https://twitter.com/AbdulRe47817062",target:"_blank"},r.a.createElement(z.a,{fontSize:"large",style:{color:"#00acee"}})," \xa0 Hear my thoughts")))))},F=a(157),G=a(158),M=a(172),_=a(159),J=a(160),q=a(175),U=a(161),K=a(70),$=a.n(K),Q={name:"",email:"",subject:"",message:"",copyEmailStatus:!1},V=Object(v.a)((function(e){return{card:{boxShadow:"0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",backgroundColor:"#fbfbfb"},fab:{marginLeft:"auto"}}}));var Y=function(e){var t=Object(n.useState)(Q),a=Object(f.a)(t,2),l=a[0],o=a[1],i=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;if("checkbox"===e.target.type)console.log("event is a checkbox"),o((function(e){return Object(E.a)({},e,{copyEmailStatus:t})}));else{var a=e.target,n=a.name,r=a.value;o((function(e){return Object(E.a)({},e,Object(g.a)({},n,r))}))}},c=V();return r.a.createElement(R.a,{right:!0,cascade:!0},r.a.createElement(F.a,{className:c.card},r.a.createElement(G.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert("An email has been sent to Abdul Rehman"),console.log(l);var t=Object.assign({},l);!function(){var e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch("https://us-central1-microservices-264117.cloudfunctions.net/sendMessage",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:e=a.sent,console.log(e);case 4:case"end":return a.stop()}}))}(),o(Q)}},r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,sm:12,xs:12,md:12},r.a.createElement(j.a,{variant:"h4",gutterBottom:!0},r.a.createElement(k.a,{fontWeight:"fontWeightLight"},"Don't be a lurker, get in touch!")),r.a.createElement("hr",null)),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(M.a,{value:l.name,fullWidth:!0,id:"name-input","aria-describedby":"name-helper-text",name:"name",label:"Name",onChange:i}),r.a.createElement(_.a,{id:"name-helper-text"},"Your name (Optional)")),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(M.a,{fullWidth:!0,id:"email-input","aria-describedby":"email-helper-text",name:"email",label:"Email",value:l.email,onChange:i}),r.a.createElement(_.a,{id:"email-helper-text"},"Your email (Optional)")),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(M.a,{value:l.subject,id:"subject-input",variant:"outlined","aria-describedby":"my-helper-text",name:"subject",fullWidth:!0,label:"Subject",onChange:i}),r.a.createElement(_.a,{id:"subject-helper-text"},"Email Subject (Required)")),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(M.a,{value:l.message,id:"message-input",rows:"15",multiline:!0,"aria-describedby":"message-helper-text",fullWidth:!0,variant:"outlined",label:"Message",name:"message",onChange:i}),r.a.createElement(_.a,{id:"message-helper-text"},"Required.")),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(J.a,{control:r.a.createElement(q.a,{color:"primary",name:"copyEmailStatus",checked:l.copyEmailStatus,disabled:!0,onChange:i,value:"yes"}),label:"Send me a copy of the email (Temp disabled)"})),r.a.createElement(y.a,{item:!0,className:c.fab,md:4},r.a.createElement(U.a,{variant:"extended",size:"large",color:"primary",type:"submit",value:"submit"},"send message",r.a.createElement($.a,{fontSize:"small"}))))))))},X=a(52),Z=Object(v.a)((function(e){return{container:{minHeight:"100vh",padding:"50px"}}})),ee={name:"",email:"",subject:"",message:"",copyEmailStatus:!1};var te=function(e){var t=Z(),a=Object(n.useState)(ee),l=Object(f.a)(a,2);return l[0],l[1],r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{id:"contactContainer",className:t.container},r.a.createElement(y.a,{container:!0,justify:"center",spacing:5},r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(D,null)),r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(Y,null)))))},ae=(a(112),a(113),a(114),a(83)),ne=a.n(ae),re=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(m.a)(this,Object(s.a)(t).call(this,e)),console.log("updated"),console.log("/portfolio"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement(x.a,{id:"home",disableGutters:!0},r.a.createElement(y.a,{spacing:0,container:!0,wrap:"wrap",justify:"space-evenly",direction:"row"},r.a.createElement(y.a,{item:!0,sm:12,xs:12,md:12,lg:12,xl:12},r.a.createElement("div",{id:"landingOverlay"},r.a.createElement("div",{id:"landing"},r.a.createElement(y.a,{spacing:0,container:!0,justify:"flex-start",direction:"column"},r.a.createElement(y.a,{item:!0,md:3},r.a.createElement("h1",null,"Welcome!")),r.a.createElement(y.a,{item:!0,md:6},r.a.createElement("h4",null,"...Building cool stuff is my passion"))))))))))}}]),t}(r.a.Component),le=a(84),oe=a(163),ie=a(164),ce=a(165),me=a(166),se=Object(v.a)((function(e){return{root:{flexGrow:1},content:{padding:"10px"},listItem:{marginBottom:"70px"},debugStyle:{borderStyle:"solid",padding:"10px"},paper:{borderRadius:"2em",maxHeight:"100%",maxWidth:"100%",textAlign:"center",backgroundColor:"#FFFFFF",boxShadow:"5px 5px 10px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)","&:hover":{boxShadow:"1px 8px 17px grey",transform:" translate(-4px, -4px)",transition:"all .4s ease"}},paperContent:{maxHeight:"300px",maxWidth:"auto",padding:"25px",borderRadius:"2em"},tagButton:{fontSize:"12px",color:"#39739d",backgroundColor:"#e1ecf4",borderColor:"#e1ecf4"},buttonGroup:{flexWrap:"wrap"}}}));var ue=function(e){var t=se(),a=Object(n.useState)(!1),l=Object(f.a)(a,2),o=(l[0],l[1]);return r.a.createElement(n.Fragment,null,r.a.createElement(R.a,{bottom:!0},r.a.createElement(oe.a,{className:t.listItem},r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{container:!0,spacing:10,direction:"row"},r.a.createElement(y.a,{item:!0,md:4,sm:12,xs:12},r.a.createElement("h4",null,e.project.tileTile.title),r.a.createElement("p",null,e.project.tileTile.description),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,className:t.content,md:12},r.a.createElement(y.a,{container:!0,direction:"row",spacing:3},r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(w.a,{variant:"outlined",target:"_blank",href:e.project.tileTile.projectLink},"GitHub")),r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(U.a,{href:e.project.tileTile.demoLink,target:"_blank",variant:"extended",size:"medium",color:"primary"},"Demo",r.a.createElement($.a,{fontSize:"small"}))))))),r.a.createElement(y.a,{item:!0,md:8,sm:12,xs:12},r.a.createElement(F.a,{className:t.paper},r.a.createElement(ie.a,{onClick:function(e){o((function(e){return!e}))}},r.a.createElement(ce.a,{component:"img",alt:"card image failed to load",height:"100%",image:"/portfolio"+e.project.tileTile.gif})))),r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(me.a,{className:t.buttonGroup,size:"small","aria-label":"small outlined button group"},e.project.tileTile.tags.map((function(e,a){return r.a.createElement("div",null,0===a?r.a.createElement("span",null,"Tech tags: "):null,r.a.createElement(w.a,{className:t.tagButton,key:a},e))})))))))),e.renderHR&&r.a.createElement("hr",null))},de=a(4),pe=a(177),ge=a(167),Ee=a(168),he=Object(de.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(pe.a),be=Object(de.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(ge.a),fe=Object(de.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Ee.a);function xe(){var e=r.a.useState("panel1"),t=Object(f.a)(e,2),a=t[0],n=t[1],l=function(e){return function(t,a){n(!!a&&e)}};return r.a.createElement("div",null,r.a.createElement("p",null,"Worked in an agile devops team as a systems developer, hands-on automation experience with PowerShell and C#"),r.a.createElement(he,{square:!0,expanded:"panel1"===a,onChange:l("panel1")},r.a.createElement(be,{"aria-controls":"panel1d-content",id:"panel1d-header"},r.a.createElement(j.a,null,r.a.createElement("li",null,"Researched, built an MVP, and setup production version of the microservices architecture for our team"))),r.a.createElement(fe,null,r.a.createElement(j.a,null,"Worked alongside other teammates to analyze various microservices architectural options. Build a minimum viable product using Azure Automation Runbooks and Azure Cloud Function App to meet the company's hybrid infrastructure requirements. Setup production pipeline from Azure DevOps to automate build and release pipeline for our production setup, including setting up automated Postman API testing."))),r.a.createElement(he,{square:!0,expanded:"panel2"===a,onChange:l("panel2")},r.a.createElement(be,{"aria-controls":"panel2d-content",id:"panel2d-header"},r.a.createElement(j.a,null,r.a.createElement("li",null,"Built an automated service uptime tracking script"))),r.a.createElement(fe,null,r.a.createElement(j.a,null,"Built an automation script using C# and Selenium to track uptime of a company site. Script checks for performance degradation and sends alert via SMTP to team members. Logs each instance to help track potential problems using log4net"))),r.a.createElement(he,{square:!0,expanded:"panel3"===a,onChange:l("panel3")},r.a.createElement(be,{"aria-controls":"panel3d-content",id:"panel3d-header"},r.a.createElement(j.a,null,r.a.createElement("li",null,"Worked with Microsoft Graph API to automate InTune security alerts"))),r.a.createElement(fe,null,r.a.createElement(j.a,null,"Used ",r.a.createElement("a",{target:"_blank",href:"https://github.com/microsoft/Intune-PowerShell-SDK"},"Intune PowerShell SDK")," to work with Intune's Graph API to automate client communications about security alerts. Script filters clients based on provided OS version criteria and automatically alerts users about potential security vulnerabilities"))))}a(115);var ye=Object(v.a)((function(e){return{container:{backgroundColor:"rgba(238,238,238,0.2)"}}}));var ve=function(e){var t=le.project,a=ye();return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{id:"projectsContainer",className:a.container},r.a.createElement(R.a,{left:!0},r.a.createElement(y.a,{justify:"space-around",container:!0,direction:"rows",alignItems:"flex-start"},r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement(j.a,{variant:"h3",gutterBottom:!0},r.a.createElement(k.a,{paddingTop:"50px",fontWeight:"fontWeightLight"},"Work Experience"))),r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement("h3",null,"Systems Developer (co-op) - Healthcare of Ontario Pension Plan")),r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement(xe,null)))),r.a.createElement(y.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(j.a,{variant:"h3",gutterBottom:!0},r.a.createElement(k.a,{paddingTop:"50px",paddingBottom:"20px",fontWeight:"fontWeightLight"},"Cool things that I've built recently..."))),r.a.createElement(y.a,{item:!0,md:10},t.map((function(e,a){return t.length===a?r.a.createElement(ue,{key:a,project:e,renderHR:!1}):r.a.createElement(ue,{key:a,project:e,renderHR:!0})}))))))},je=(a(116),Object(v.a)((function(e){return{icon:{},grid:{backgroundColor:"#8BC6EC",backgroundImage:"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",height:80,padding:10,boxShadow:"0 3px 5px 2px rgba(139, 198, 236, .8)"},gridItem:{textAlign:"center"},footerGrid:{height:"10vh"},para:{backgroundColor:"#8BC6EC"}}})));function ke(){var e=je();return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{container:!0,spacing:0,className:e.grid,justify:"center",alignItems:"baseline",wrap:"wrap"},r.a.createElement(y.a,{item:!0},r.a.createElement("p",null,"follow me on: ")),r.a.createElement(y.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement(U.a,{variant:"round",size:"small",color:"primary",href:"https://github.com/Abdul-Sen",target:"_blank"},r.a.createElement(H.a,null))),r.a.createElement(y.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement(U.a,{variant:"round",size:"small",color:"primary",href:"https://www.linkedin.com/in/abdul-r/",target:"_blank"},r.a.createElement(L.a,null))),r.a.createElement(y.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement(U.a,{variant:"round",size:"small",color:"primary",href:"https://twitter.com/AbdulRe47817062",target:"_blank"},r.a.createElement(z.a,null)))))}var we=a(170),Se=a(171),Ce=a(122),Oe="/#home",Ie="/projects#projectsContainer",Ae="/contact#contactContainer",Te=a(121),We=a(65),Le=Object(v.a)((function(e){return{container:{"& button":Object(g.a)({},e.breakpoints.up("sm"),{color:"#ffffff",fontWeight:"370"})}}}));function Be(){return r.a.createElement(Te.a,{"aria-label":"delete"},r.a.createElement(We.a,null,r.a.createElement("path",{d:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"})))}function He(e){var t=Le();return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2,className:t.container},r.a.createElement(y.a,{item:!0,xs:12,sm:1,md:1},r.a.createElement(X.HashLink,{smooth:!0,to:Oe,style:{textDecoration:"none"}},"desktop"===e.display?r.a.createElement(Be,null):r.a.createElement(X.HashLink,{to:Oe,smooth:!0,style:{textDecoration:"none"}},r.a.createElement(w.a,null,"Home")))),r.a.createElement(y.a,{item:!0,xs:12,sm:3,md:2},r.a.createElement(X.HashLink,{smooth:!0,to:Ie,style:{textDecoration:"none"}},r.a.createElement(w.a,null,"Work/Projects"))),r.a.createElement(y.a,{item:!0,xs:12,sm:3,md:1},r.a.createElement(X.HashLink,{smooth:!0,to:Ae,style:{textDecoration:"none"}},r.a.createElement(w.a,null,"Contact")))))}var Ne=a(176),ze=a(169),Pe=a(85),Re=a.n(Pe),De=Object(v.a)({list:{width:240,paddingTop:"18px"},menuIcon:{padding:"10px"}});function Fe(){var e,t=De(),a=r.a.useState({left:!1}),l=Object(f.a)(a,2),o=l[0],i=l[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(Object(E.a)({},o,Object(g.a)({},e,t)))}};return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{onClick:c("left",!0)},r.a.createElement(Re.a,{className:t.menuIcon})),r.a.createElement(Ne.a,{open:o.left,onClose:c("left",!1)},(e="left",r.a.createElement("div",{className:t.list,role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},r.a.createElement(He,{display:"mobile"}),r.a.createElement(ze.a,null)))))}var Ge=Object(Ce.a)((function(e){return{}}));function Me(){Ge();var e=Object(we.a)("(min-width:600px)");return r.a.createElement(Se.a,null,r.a.createElement(k.a,{display:"flex",justifyContent:"flex-start",m:0,alignItems:"center"},e?r.a.createElement(He,{display:"desktop"}):r.a.createElement(Fe,null)))}r.a.Component;var _e=function(e){return r.a.createElement(x.a,{disableGutters:!0},r.a.createElement(Me,null),r.a.createElement(re,null),r.a.createElement(ve,null),r.a.createElement(te,null),r.a.createElement(ke,null))},Je=a(60);o.a.render(r.a.createElement(Je.BrowserRouter,{basename:"/portfolio"},r.a.createElement(_e,null)),document.getElementById("root"))},84:function(e){e.exports=JSON.parse('{"project":[{"tileTile":{"gif":"/images/profolioSite.gif","projectLink":"https://abdul-sen.github.io/portfolio/","demoLink":"https://abdul-sen.github.io/portfolio/","title":"This site!","description":"So why am I not using any one of the many readily available static profolio templates? To practice react ofcourse! This project allowed me to work with the new Hooks API for react.","tags":["react","material UI","Google Cloud Functions","Github Pages"]}},{"tileTile":{"gif":"/images/recipeApp.gif","title":"Recipe Web App","projectLink":"https://github.com/Abdul-Sen/Recipe-application","demoLink":"https://vast-ravine-81065.herokuapp.com/","description":"Hungry and don\'t know what to cook? Fear not! This app will help you find random recipes and through the power of CRUD, you can add your personal touch to the recipes. This app was build to help me understand good vs bad RESTful API desgin, and to work with cool APIs in the process.","tags":["nodeJs","bootstrap 4.0","handlebars","mongoDB","PostgreSQL"]}},{"tileTile":{"gif":"/images/web322.gif","projectLink":"https://github.com/Abdul-Sen/Employee-Management-System","demoLink":"https://mysterious-fjord-83697.herokuapp.com/","title":"Employee Management CRUD app","description":"Term project for WEB322- Server-side w/ NodeJS. This app is hosted on Heroku free tier so it will take a few seconds to boot up.","tags":["nodeJs","bootstrap 4.0","handlebars","mongoDB","PostgreSQL"]}}]}')},98:function(e,t,a){e.exports=a(117)}},[[98,1,2]]]);
//# sourceMappingURL=main.808ab2eb.chunk.js.map