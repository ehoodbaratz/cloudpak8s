(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),s=a.n(r),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,c=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),y=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0,strict:!0}),r=i===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,i);return Object(m.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(m.b)(o.Link,{className:y.link,to:""+l},e))}));return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},i))))))},t}(i.a.Component),A=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,d=t.titleType,g=b.tabs,O=b.title,y=b.theme,w=b.description,v=b.keywords,x=Object(o.useStaticQuery)("2456312558").site.pathPrefix,N=x?n.pathname.replace(x,""):n.pathname,E=g?N.split("/").filter(Boolean).slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:g,homepage:!1,theme:y,pageTitle:O,pageDescription:w,pageKeywords:v,titleType:d},Object(m.b)(u,{title:i?Object(m.b)(i,null):O,label:"label",tabs:g}),g&&Object(m.b)(j,{slug:N,tabs:g,currentTab:E}),Object(m.b)(A.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:p})),Object(m.b)(f.a,{pageContext:t,location:n,slug:N,tabs:g,currentTab:E}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},iptf:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),c={_frontmatter:o},l=s.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Personas"),Object(r.b)("p",null,"Day-2 activities are typically performed by different personas. Here are the key personas we envision to have an active role in these activities."),Object(r.b)("h2",null,"Background"),Object(r.b)("p",null,"There are various personas that contribute to the development of a system. The roles and responsibilities for each of these personas can vary significantly by organization, sometimes even within the organization. The same is true to the definition of Day-0, Day-1 and Day-2: where one ends and the other stands depends on multiple factors."),Object(r.b)("p",null,"When we define the Personas of OpenShift operations, we strongly felt that the target audience of this documentation will not be focussing on traditional roles of the Software Development Lifecycle, depicted by the following picture:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.013888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAiUlEQVQI10WMMQ4CMQwEU/IEvoB4DyUSHT3iH5R8844kd4lje0lsIixZXs3uOmxVEXdfVd85jQcfSrFuwE6uB5OeIwZydTYn3N6K411wfkovuVErQUTsOXMzNq4Iu26ddW9kpt86Y2aEy0txuApOj//DZVlRSrHCJ0ZjKSVjrrN5RIT483POlvkC6QrkiHbSjbQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 1",title:"Figure 1",src:"/static/d24e21017ee2f06124e374125346d6ed/3cbba/Persona1.png",srcSet:["/static/d24e21017ee2f06124e374125346d6ed/7fc1e/Persona1.png 288w","/static/d24e21017ee2f06124e374125346d6ed/a5df1/Persona1.png 576w","/static/d24e21017ee2f06124e374125346d6ed/3cbba/Persona1.png 1152w","/static/d24e21017ee2f06124e374125346d6ed/0b124/Persona1.png 1728w","/static/d24e21017ee2f06124e374125346d6ed/fa7b7/Persona1.png 2154w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"We expect our target audience to rather target the new personas of ",Object(r.b)("strong",{parentName:"p"},"DevOpsEngineer")," and ",Object(r.b)("strong",{parentName:"p"},"Site Reliability Engineer")," (SRE), evolving from the traditional roles of Developer and SysAdmin. The DevOpsEngineer handles an increasing spectrum of the SDLC, including (parts of) architecture work, as well as testing and release. Likewise, the SRE is not just looking at the infrastructure aspects, but increasingly also at the application workload on top of the infrastructure."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVQoz11RO04FMQzMFaDiDJyADomOAiQqJFqKxwGoEA2ioIECUXIBeg7G2918dpPYg+3s2316kaxYM/bEnrhKDA2SYG6xO4r7pBmjj0DKLfcjQFJXKhCnhu2Oe/phXLwybj5YyEYUqVRhbcqFDNO71sbnPPO08kRk4c5fGO6KcHxPGFJr6LpemjKoVsQQDEsxCGbjIEqugqUUw41PEUFq3eabcfpIuHzjZfyURmku9mKIo0wKuSf4WGzNPmSbdpwqetlfsSFm6Zvg3n8Zt58MFU559eLwdOKheqcP0lymFv15hVbMqX/umnC0t/J22yFPOkWF996wQe5xNMXl43SLGOOCabi7L8bJA+HsWdabJ9Ai81BWVhEtVOxQUHn1cV/wH5UMEm5qY86NAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 2",title:"Figure 2",src:"/static/5509dec8c884af15fc8f1f907c70b379/3cbba/Persona2.png",srcSet:["/static/5509dec8c884af15fc8f1f907c70b379/7fc1e/Persona2.png 288w","/static/5509dec8c884af15fc8f1f907c70b379/a5df1/Persona2.png 576w","/static/5509dec8c884af15fc8f1f907c70b379/3cbba/Persona2.png 1152w","/static/5509dec8c884af15fc8f1f907c70b379/0b124/Persona2.png 1728w","/static/5509dec8c884af15fc8f1f907c70b379/1192c/Persona2.png 2150w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"The scope of this document is Day-2 operations. As discussed before, the definition of Day-2 opposed to Day-1 is not sharp, we decided to include Day-1 activities as well. This is to delineate the work, but also to allow the reader to make their own decision on the roles and responsibilities of the personas and tasks to be performed.\nAs a guiding principles, we believe that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the DevOpsEngineer will predominantly focus on Application Day-1"),Object(r.b)("li",{parentName:"ul"},"Application Day-2 will be handled by the DevOpsEngineer and the SRE"),Object(r.b)("li",{parentName:"ul"},"the SRE will predominantly focus on Platform Day-1 and Day-2")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Application"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Day-1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DevOpsEngineer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SRE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Day-2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DevOpsEngineer and SRE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SRE")))),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxUlEQVQoz1VSPc4TQQydK1DABei5AAf4ChoKGlqEKD9RUSDECZCQaJAoEHRwBgrOQfStks2vEqT9n9359cPj2URhJGc9zx77+Tmq0YRjQzi1hBgJFCPyIVgPaMMYERoNiYeQsBxPX+ej+IJwnrr9Rrj/KuLRG8IwcTYijLESJIqw1ogfvLtgIXgp4BnzzolvbX6jnn3knycRD7joaHKnqqo52XOSg9ZasLZthX1kO2PDMOSCXKiua24UoD7/Ijz/RHj9nUd0JPQzk2w+MLuY2BMmm2QgGM6LHOvG5DNTntqHLJR6+4Pw8Dbi8fsoD9JxzucxuaNjBkm7qnP8ODMMM9O696hbjYrZVVWFruugnn7gkW8i7r2IsoB0mqadR7Z5PC7edy3r6C/ii25m5IZW8HO++vqb8PIL4d1Ppm9ZRz2INilojME0TeL3/YCJ74lxuqfvNFnROenoZlN55TRvzeN4PDLDRphd2+l04qLdFTbgb9WhaXu5D4PGOI5Q+b+VFgBhs1qtsNvtsN/vL7bdbrFcLrHZbHDYH2Z8h7uixKpk7JDzEhl13mY6qcNisUBRFCjL8j9br9di19ifRcG5S8bzPRH5B03W8z6f7u+HAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 3",title:"Figure 3",src:"/static/b7492279cee8fe8913305f1a038fcbce/3cbba/Persona4.png",srcSet:["/static/b7492279cee8fe8913305f1a038fcbce/7fc1e/Persona4.png 288w","/static/b7492279cee8fe8913305f1a038fcbce/a5df1/Persona4.png 576w","/static/b7492279cee8fe8913305f1a038fcbce/3cbba/Persona4.png 1152w","/static/b7492279cee8fe8913305f1a038fcbce/0b124/Persona4.png 1728w","/static/b7492279cee8fe8913305f1a038fcbce/54e5a/Persona4.png 2226w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Personas in Day-2 scenarios"),Object(r.b)("h2",null,"DevOps Engineer (aka. Developer)"),Object(r.b)("p",null,"As a ",Object(r.b)("strong",{parentName:"p"},"DevOps Engineer"),", you need to ensure your application(s) and services are tested, deployed properly, and operationally ready. While the operational Day-2 activities are typically performed by the SRE (or Operator / SysAdmin), the DevOps Engineer still has a responsibility to provide proper manageability, and documentation that enables the SRE to do his job. The same is true during incidents where the SRE may need to reach out to the DevOps Engineer for assistance."),Object(r.b)("p",null,"See more about DevOps on the IBM Garage method: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/culture/practice_building_culture/"}),"Build a DevOps culture and squads")),Object(r.b)("h2",null,"Site Reliability Engineer (SRE)"),Object(r.b)("p",null,"As a ",Object(r.b)("strong",{parentName:"p"},"Site Reliability Engineer (SRE)"),", you need to ensure that the Infrastructure and applications are performing at an acceptable level (expressed typically through an SLO). This includes availability, latency, security and other aspects of reliable service. Incident Management and Root-Cause Analysis (RCA) must be performed, and the resulting actions must be implemented. SREs contribute actively to release engineering, to define - and ideally automate - all the steps required to release software."),Object(r.b)("p",null,"Depending on the scope and maturity of the SRE practice, you may introduce different SRE roles. Examples are a ",Object(r.b)("strong",{parentName:"p"},"Platform SRE"),", who is focussing on infrastructure and platform, or an ",Object(r.b)("strong",{parentName:"p"},"Application SRE")," who focuses more on the application side, working hand in hand with the DevOps engineer when implementing the non.functional requirements of the application."),Object(r.b)("p",null,"See more about SRE on the IBM Garage method: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/site-reliability-engineering"}),"Implement Site Reliability Engineering")),Object(r.b)("h2",null,"Product Owner (PO)"),Object(r.b)("p",null,"With traditional, non-agile approaches, leaders tend to focus more on project execution than business outcome. However, now with cloud, it is possible to put new digital features into production every day. This faster pace of change leads successful agile organizations to place a much greater emphasis on the quality and business effectiveness of new digital capabilities. Effective and empowered product ownership allows for sound business strategy that can be executed in an agile way. ",Object(r.b)("strong",{parentName:"p"},"Product Owners")," are the organizational glue between business leaders and the agile teams that deliver on strategic goals."),Object(r.b)("p",null,"See more about Product Owners on the IBM Garage method: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/culture/empower-product-owners/"}),"Empower product owners")),Object(r.b)("h2",null,"Architect"),Object(r.b)("p",null,"The key capability and contribution that ",Object(r.b)("strong",{parentName:"p"},"Architects")," bring to their pursuits is the creation of architectures that address business problems. To do that effectively, Architects must possess and exhibit characteristics such as architectural capabilities and experience, a disciplined, method-driven execution, and a good understanding of implementation impact. "),Object(r.b)("p",null,"However, many of these activities cannot be delegated as the sole responsibility of an Architect. Every member of the DevOps squad needs to embody these characteristics and take full accountability of their doing. At the same time, a key principle of DevOps and Lean is to embody ",Object(r.b)("em",{parentName:"p"},"just enough architecture"),". While the role of an Architect will never disappear completely, many of the tasks that were performed by the Architect in the past are now assumed by the DevOps members."),Object(r.b)("h2",null,"Remarks"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"There can be many more personas, and the roles & responsibilities for a given persona varies by client. We try to take a minimalistic approach to personas. As such, we position the assignment of tasks by persona to be a suggested approach. We do expect these assignments to be reviewed specific to a given roles & responsibilities definition"),Object(r.b)("li",{parentName:"ul"},"Sometimes, application management is performed directly by the DevOps Engineer (following an “I built it - I run it” methodology) and not by the SRE. "),Object(r.b)("li",{parentName:"ul"},"If the SRE methodology is not (fully) adopted, additional roles may exist, such as SysAdmin, Operations, First Responder, and Incident Commander."),Object(r.b)("li",{parentName:"ul"},"There will be a series of additional roles (like Test Admin, DevOps Admin, Monitoring Admin, Backup Admin, etc.). We see these to be different roles, performed potentially by the same persona (such as the DevOps Engineer or SRE). We don’t want to create too many different roles to keep  the document consumable.")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-personas-index-mdx-d5b508f8e64225f7b272.js.map