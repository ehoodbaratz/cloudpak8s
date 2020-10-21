(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),c=a("NmYn"),s=a.n(c),r=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,c=i.baseUrl,s=i.subDirectory,b=c+"/edit/"+i.branch+s+"/src/pages"+t;return c?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0,strict:!0}),c=i===n,b=new RegExp(n+"/?(#.*)?$"),o=a.replace(b,i);return Object(m.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=c,t),j.listItem)},Object(m.b)(r.Link,{className:j.link,to:""+o},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},i))))))},t}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,c=t.frontmatter,l=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,h=l.tabs,O=l.title,j=l.theme,w=l.description,N=l.keywords,v=Object(r.useStaticQuery)("2456312558").site.pathPrefix,D=v?n.pathname.replace(v,""):n.pathname,S=h?D.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(m.b)(o.a,{tabs:h,homepage:!1,theme:j,pageTitle:O,pageDescription:w,pageKeywords:N,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):O,label:"label",tabs:h}),h&&Object(m.b)(A,{slug:D,tabs:h,currentTab:S}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(u,{relativePagePath:p})),Object(m.b)(f.a,{pageContext:t,location:n,slug:D,tabs:h,currentTab:S}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uwWQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));var n=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),{}),b={_frontmatter:r},o=s.a;function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(o,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"OpenShift Day-2 Operation Guide"),Object(c.b)("p",null,"A guide for post deployment operations of Red Hat OpenShift Container Platform"),Object(c.b)("h2",null,"Introduction"),Object(c.b)("p",null,"The purpose of this guide is to assist an organization with the operational aspects of Red Hat OpenShift Container Platform on Day-2. The premise of this document is to describe core principles/processes that should be taken on “day 2” where the journey is defined as:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift Platform")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Day-0: Requirements and design of the platform."),Object(c.b)("li",{parentName:"ul"},"Day-1: Platform installation and initial configuration to a working state."),Object(c.b)("li",{parentName:"ul"},"Day-2: Platform is installed and ready to begin providing services.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift-based Application")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Day-0: Requirements and design of the application and potentially changes to the supporting environment."),Object(c.b)("li",{parentName:"ul"},"Day-1: Deployment and Release of the application, the time where (a new version of) the application is introduced to the production environment. This includes initial configuration of the application itself and of any supporting functionality."),Object(c.b)("li",{parentName:"ul"},"Day-2: Steady state operations of the application, the time where the application is doing its job for the business.")),Object(c.b)("p",null,"The definition of Day-1 and Day-2 is not exact. We will find many times, cases where a task can be considered Day-1 or Day-2. We don’t want to spend a lot of time arguing whether a task is Day-1 or Day-2. It is more important to identify and describe the tasks that need to be performed. For a given project, feel free to move such tasks to either option, and assign it to the right persona."),Object(c.b)("p",null,"The notion of ",Object(c.b)("em",{parentName:"p"},"immutable systems"),", DevSecOps and GitOps is not changing the definition of Day-2 tasks. They simply lead to a different approach of ",Object(c.b)("em",{parentName:"p"},"performing")," these Day-2 activities. Instead of patching, configuring, tuning a live system, the master source - the configuration repo, the infrastructure as a code repo, the operator code - will be updated and then deployed again."),Object(c.b)("h3",null,"Personas"),Object(c.b)("p",null,"Admittedly there may be different personas responsible at these stages of implementation. For example Platform Day-0 would entail personas such as Architects and SREs. Platform Day-1 would be one of the few stages where typically only the traditional sysadmin or the modern role SRE are involved. Platform Day-2 encapsulates all of the application based stages. However you may see some application design discerned at Platform Day-0. The role involved at Platform Day-2 stage is SREs.   "),Object(c.b)("p",null,"As each new applications is added to the environment the OpenShift-based applications Day-0 through Day-2 is executed again. The personas involved in Application Day-0 would be Product Owners, DevOpsEngineer, SREs and Architects. Day-1 and Day-2 personas would include DevOps and SREs."),Object(c.b)("p",null,"As this document is focused on the Day-2 activities, we will primarily focus on the tasks performed by DevOps Engineers and SREs. See the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../Personas"}),"Personas")," topic in this document for more details. "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Application"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Platform"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Day-0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Architect, Product Owner, DevOpsEngineer, SRE"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Architect, SRE")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Day-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DevOpsEngineer, SRE"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SRE")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Day-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DevOpsEngineer, SRE"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SRE")))),Object(c.b)("h3",null,"Reference Architecture"),Object(c.b)("p",null,"The Garage and Solution Engineering team has developed a Reference Architecture for OpenShift, discussing topics like Network, Storage, and Cluster Nodes. This architecture provides good background and context for the operational aspects of the OpenShift solution:\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ncolon/ocp4-refarch"}),"OpenShift 4.x Cloud Reference Architecture")),Object(c.b)("p",null,"The following chart depicts the Day-2 Reference Architecture for OpenShift: in the middle of the charts you see a OpenShift cluster with applications running on top of the standard resources compute, storage, and network. Left and right of the OpenShift cluster, you find the domains of Day-2 activities. On top you see the personas responsible for these activities."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVQoz21Sz2sTURDOTTwIHlQQf6C9Cj148B8RxFNBLbVpmygqKv4PovRQKElraVAQanvQ1tpUSxWttqSggrZiclCSbKJJE7Ob3c1mv895+zbppQOz897Om2++b5iI1wYtBzTFO4bgiCA2bLJukf8k+r7+r6ztg00XtMUVhq4DIwrMqIHVBrhjInjYAfPlY7dUQz8o9n10mymQehOsWfpNF3BsCTwVAwcS4PEhcKuwC+i6Lkslg5XKX5Yl2rbdLdzLAsClL2BsCky+AYcnwcKOBlREW60Wq9UqLcsU0Apdx+kWKlcKHGFXqu2yjEyugL23wWgSPDkCbocMKw3yyjh4fZo8/4C8mSIvjoK5ErszVPb2u7C64HN2PQRMC8O4MEy8BocmwHxVJ37/8dgTa/HsXY/Hom2eu+fxUL/HTNYL8mr25TqYyYH90ngzFwKOL4M9cQETuadlllt5nTCtJhMLBpPiqXSREy8Njj03WCg3gvz7bXB/n89BUXZ0EJzbCAGXv4I3pkElfeSRnodSM/fR4cxqkVOvCnyS/sXH6TyfrhQ5u9YMCnMl8JooS73TdZkOw9FF8MgAgnkdlpg1ZCdt6RoFz9wC9/WRvXcod/LEsKiI6xmv/wQPXPJ5Vbbj4GXw2acQcCMLKtD5TfDhguyjiWCBlSSVW/0mUYo/yH3th3Zlatb3X4CLn3XU60b+B+0qw8ZzB+UYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 1",title:"Figure 1",src:"/static/8a8d1be72d8d43479ddd8f24a38fef35/3cbba/Day2_ReferenceArchitecture.png",srcSet:["/static/8a8d1be72d8d43479ddd8f24a38fef35/7fc1e/Day2_ReferenceArchitecture.png 288w","/static/8a8d1be72d8d43479ddd8f24a38fef35/a5df1/Day2_ReferenceArchitecture.png 576w","/static/8a8d1be72d8d43479ddd8f24a38fef35/3cbba/Day2_ReferenceArchitecture.png 1152w","/static/8a8d1be72d8d43479ddd8f24a38fef35/0b124/Day2_ReferenceArchitecture.png 1728w","/static/8a8d1be72d8d43479ddd8f24a38fef35/e957c/Day2_ReferenceArchitecture.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h3",null,"Bylaws"),Object(c.b)("p",null,"When describing Day-2 activities for OpenShift, it is relevant to define some ",Object(c.b)("em",{parentName:"p"},"precepts")," or ",Object(c.b)("em",{parentName:"p"},"bylaws")," that act as guiding principles for the definition and design of these activities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Immutable / Disposable Infrastructure "),Object(c.b)("li",{parentName:"ul"},"Infrastructure as Code"),Object(c.b)("li",{parentName:"ul"},"Automate as much as possible"),Object(c.b)("li",{parentName:"ul"},"Self-Service")),Object(c.b)("p",null,"We added some design decisions at the end of this documentation."),Object(c.b)("h2",null,"OpenShift Day2 Foundational Operational Aspects"),Object(c.b)("p",null,"In this chapter we describe the foundational operational aspects of a platform and its applications. We start with the personas responsible for Day-1 and Day-2 tasks, and then look into the critical domains of Compute, Storage and Network, as well as Security."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABnklEQVQoz3VSPUsDQRBN5x+wkWAjdoKFhX/ExspGmyhCQEHxTwgWgqggBgXBIiAokkJsNCK2gp+FqLlIErm73PfuPHd2c6cnurA3uzs7b957twX8MYiIv+DgBoDtAY6KUiI7/28UuDidUlWYtUlKtQhighdK+BHnKWtIlF+n+0IYhnAcB77vw7ZtDZqOKIrQbFpot1v4UDEIgh8gyEB+KiskSaIvxnGsI2mWLAz6rNPpwPO6CrSNSDXPW5JXlmPIYK7bhRCG4WcXmN4glHeBiVVgoQJMrhGem8ZH2QNgQlzPUQP+Zih6kl9bCYbmY4wtJyiWBMZXEvTPJLh5MoVCGmZCCFOnogZkn1zX1YfcKWXoKU83jy1sqVmpNbB9YmH9yILVcnPMjDI3z5BlG4bKI5IIVa56FeLwvIGd03fs116wV3vDwVkD1bqPREJ7zfczZb8Zmr/s8GMBkyjOEkYWCX1TwOgSMFACBucIw2V+RgwoYDvfyjKGjMxd+IDB2fBI5S7uCNdPhPNbFR9J7y/vCfUHArtCSgnf5zquT5/bF87g8rxI0zmyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 2",title:"Figure 2",src:"/static/1b73f2f4bdb5ee5061b51ef4863a782b/3cbba/Day2_FoundationalAspects.png",srcSet:["/static/1b73f2f4bdb5ee5061b51ef4863a782b/7fc1e/Day2_FoundationalAspects.png 288w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/a5df1/Day2_FoundationalAspects.png 576w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/3cbba/Day2_FoundationalAspects.png 1152w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/0b124/Day2_FoundationalAspects.png 1728w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/e957c/Day2_FoundationalAspects.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Personas/"}),"Personas")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Network"}),"Network")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Node"}),"Node")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Security"}),"Security")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Storage"}),"Storage")),Object(c.b)("h2",null,"OpenShift Day2 Important Operational Aspects"),Object(c.b)("p",null,"This chapter includes to key operational aspects of a Day-2 operational guide. This includes catalogs, images and registries and in turn builds and deployments. Next we look into observability aspects, for instance monitoring and logging, feeding into event management and alerting. A third dimension are aspects of security, including user and access management as well as the management of credentials. Backups are another aspect covered in this section."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABbUlEQVQoz22RS07DMBRFswpGSHwWwKaQiii0AwasAzFAqlo+Yg8IVAosAIkBTACJUdvABJomTpo2yb34Obj5CEvWtRP7+PjZSVIwjEGlu20ww2JebsD/321zBPblgT8BOFFgmsHAZJ9srncLrY/t3Dnpg+stsNEFV5vgq5sDhbtYLOh5Hn3fNxnHccWybitzp/8Mti7A3j24dwa6k8IwSRIqpRhFkUk5oG4lPcuywvDsAdw6BHd74No++P5nKFcXkFiVUzaX7eRQuYGkAd5qw7Y27N6BzVPwc5IvnGub6XRqFpdzPp8vgQJP05Sz2cykAXYG4GZbw/R1N3Qt39wcqMKI4/GYrutWMgiCipnA5NvScPACHlyCcvXWeWGoVMjRaGQgNofD4RIodlIGqWvF8PgGXGmA2x2dO5l+ZbOcfqAYhqF5DJt2LE0A1rBSw8cPUKBXT+DRNfgd5I+SJKnZJAsly90aSj3lv1jax/oFLmLzvCbmgQgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 3",title:"Figure 3",src:"/static/0b8bf4a6101f7b28fafc664474673a35/3cbba/Day2_ImportantAspects.png",srcSet:["/static/0b8bf4a6101f7b28fafc664474673a35/7fc1e/Day2_ImportantAspects.png 288w","/static/0b8bf4a6101f7b28fafc664474673a35/a5df1/Day2_ImportantAspects.png 576w","/static/0b8bf4a6101f7b28fafc664474673a35/3cbba/Day2_ImportantAspects.png 1152w","/static/0b8bf4a6101f7b28fafc664474673a35/0b124/Day2_ImportantAspects.png 1728w","/static/0b8bf4a6101f7b28fafc664474673a35/e957c/Day2_ImportantAspects.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../EventManagement"}),"Alerting and Event Management")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Backups/"}),"Backups")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../BuildDeploy"}),"Builds and Deployment")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../CatalogManagement"}),"Catalog Management")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Registry"}),"Registry and Image Management")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Logging"}),"Logging")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Monitoring"}),"Monitoring and Performance Management")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../User"}),"User Management/Authentication/Authorization")),Object(c.b)("h2",null,"OpenShift Day2 Additional Operational Aspects"),Object(c.b)("p",null,"This section contains further operational aspects of a successful operations guide. A key elements is patching and upgrades of the platform and its applications. A second aspects covers some of the non-functional characteristics of the solution, such as scalability and capacity management. Metering is another topic covered in this section."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVQoz3WSzUrDQBSFu3Ujbn0xl4Ii2IXgk/gAoiDiWt24cK2gqCi48gfspmmggpBJmv/MPebcdNoptAM3J8md+fJlkh6WDBHRWtXjaKwgKwV5W3Ujs17PLWZZaxdAfm9e2lGIyQRR2kIrD1gUBeI4RpZlMMYo1I2qqhBFkfaZnOtbLrPv1XWNPM91MdMHsjeZTPRhTM6ZmwO2PRSt3TiaW84MCUuSZAbkIoLY97Pblg7GcffRWm1ZXD1PgasMec0t4MP8LIpS+/wYv0bwOhDsHQveBlNgWZZqRhgXOSBtRqMRwjBcyMgk2n/4EqxtW/RPBZt9wfWLZ8jXoRHTAdM0RRAECnE5HA5h4g74MxYcngsu7gUHZ53pgiGNnCH3jx+BUD9ZcZLqb/P4LVjfsdg/EWzsCi6fpsCmadSOpoS7/433WbzvznVu3Sgw+BMc3Qhu37v8DDvgP21W/azdCOR5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 4",title:"Figure 4",src:"/static/5256b18312fc052083da451f2d64b090/3cbba/Day2_AdditionalAspects.png",srcSet:["/static/5256b18312fc052083da451f2d64b090/7fc1e/Day2_AdditionalAspects.png 288w","/static/5256b18312fc052083da451f2d64b090/a5df1/Day2_AdditionalAspects.png 576w","/static/5256b18312fc052083da451f2d64b090/3cbba/Day2_AdditionalAspects.png 1152w","/static/5256b18312fc052083da451f2d64b090/0b124/Day2_AdditionalAspects.png 1728w","/static/5256b18312fc052083da451f2d64b090/e957c/Day2_AdditionalAspects.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Capacity"}),"Capacity Management")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Metering/"}),"Metering")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Misc"}),"Miscellaneous")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../MiscSupport"}),Object(c.b)("strong",{parentName:"a"},"Support")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../MiscWeb"}),Object(c.b)("strong",{parentName:"a"},"Web Console Access")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../MiscPrune"}),Object(c.b)("strong",{parentName:"a"},"Pruning"))))),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Upgrade/"}),"Upgrade")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Scalability"}),"Scalability")),Object(c.b)("h2",null,"Looking at Day-2 from a Horizontal perspective"),Object(c.b)("p",null,"In addition to the functional (",Object(c.b)("em",{parentName:"p"},"vertical"),") view shown above, we could also look at Day-2 activities from a horizontal perspective. For instance showing all Day-2 activities for a given application. Another horizontal perspective would be the implementation of the functional capabilities with a common technology such as a Service Mesh."),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../Application"}),"Application Management")),Object(c.b)("h3",null,Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"../ServiceMesh"}),"Service Mesh")),Object(c.b)("h2",null,"Reference"),Object(c.b)("h3",null,"OpenShift Online Document URL"),Object(c.b)("p",null,"Here is the URL for Red Hat OpenShift official online document",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/welcome/index.html"}),"https://docs.openshift.com/container-platform/4.3/welcome/index.html")),Object(c.b)("h3",null,"Cluster Ready Checklist"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.weave.works/blog/production-ready-checklist-kubernetes"}),"Cluster Ready Checklist for Kubernetes")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-introduction-index-mdx-25eb1256ecd1b8715e31.js.map