(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),c=a.n(o),r=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),p=a("TSYQ"),l=a.n(p),m=a("QH2O"),g=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(g.b)("div",{className:l()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.text},a)))))},C=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,c=i.subDirectory,b=o+"/edit/"+i.branch+c+"/src/pages"+t;return o?Object(g.b)("div",{className:"bx--row "+C.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:C.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),u=a("dI71"),j=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0,strict:!0}),o=i===n,b=new RegExp(n+"/?(#.*)?$"),s=a.replace(b,i);return Object(g.b)("li",{key:e,className:l()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(g.b)(r.Link,{className:j.link,to:""+s},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:j.list},i))))))},t}(i.a.Component),B=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,p=void 0===o?{}:o,l=t.relativePagePath,m=t.titleType,C=p.tabs,u=p.title,j=p.theme,f=p.description,E=p.keywords,N=Object(r.useStaticQuery)("2456312558").site.pathPrefix,w=N?n.pathname.replace(N,""):n.pathname,F=C?w.split("/").filter(Boolean).slice(-1)[0]||c()(C[0],{lower:!0}):"";return Object(g.b)(s.a,{tabs:C,homepage:!1,theme:j,pageTitle:u,pageDescription:f,pageKeywords:E,titleType:m},Object(g.b)(d,{title:i?Object(g.b)(i,null):u,label:"label",tabs:C}),C&&Object(g.b)(h,{slug:w,tabs:C,currentTab:F}),Object(g.b)(B.a,{padded:!0},a,Object(g.b)(A,{relativePagePath:l})),Object(g.b)(O.a,{pageContext:t,location:n,slug:w,tabs:C,currentTab:F}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},U8uq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),r=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=b("PageDescription"),p=b("AnchorLinks"),l=b("AnchorLink"),m={_frontmatter:r},g=c.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(g,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"In this section we will walk through the ",Object(o.b)("strong",{parentName:"p"},"Online")," installation of\nIBM Common Services, used to support IBM Cloud Paks. This\ndocument is specifically written for installations on Red Hat\nOpenShift 4.x running on an x86 architecture. ")),Object(o.b)(p,{mdxType:"AnchorLinks"},Object(o.b)(l,{mdxType:"AnchorLink"},"Adding Operator Source to OpenShift Catalog"),Object(o.b)(l,{mdxType:"AnchorLink"},"Customizing the installation"),Object(o.b)(l,{mdxType:"AnchorLink"},"Login to common services"),Object(o.b)(l,{mdxType:"AnchorLink"},"Uninstall")),Object(o.b)("h2",null,"Prerequisites"),Object(o.b)("p",null,"This document does not describe how to install or configure the\nunderlying OpenShift platform. Prior to installing, make sure you have\na working OpenShift cluster with the required capacity."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check the requirements documentation in the\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSHKN6/installer/3.x.x/preparation.html"}),"IBM Knowledge Center"),"\nto make sure you have sized your cluster\nappropriately and have sufficient capacity.")),Object(o.b)("ul",null),Object(o.b)("h2",null,"Adding CatalogSource to OpenShift Catalog"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Login to your OpenShift cluster console.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Apply the YAML below by clicking on the ",Object(o.b)("strong",{parentName:"p"},"+")," icon in the upper-right\ncorner."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: operators.coreos.com/v1alpha1\nkind: CatalogSource\nmetadata:\n  name: opencloud-operators\n  namespace: openshift-marketplace\nspec:\n  displayName: IBMCS Operators\n  publisher: IBM\n  sourceType: grpc\n  image: docker.io/ibmcom/ibm-common-service-catalog:latest\nupdateStrategy:\n  registryPoll:\n    interval: 45m\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the YAML, paste it into the editor and click ",Object(o.b)("strong",{parentName:"p"},"Create"),". "),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABXUlEQVQoz6WRS0sCURzFL8yMSFAZzNNXOqMiPkvxkdMHcEZQsWUPone0cNGmjbZuNWNpkJsWES0j+mJ+g5NzFWlRJnThx7mLw7nn/v8kpqpIJpLQIhGYpgnDMKiaYzXm4HgazSYajQbq9Tp2Wi16J6nMJsJaDLl8EaPRCP89JJHKIrCuIl8o4f3jE4NBH0+PNvoPNizLmmHb9q/0ej1YY315fQOJJ9I0sFiuYO/wFB5egE9wY8nNgeNYsOwEhmF+hGWZqYeBrlcmXw6GNJTKOi6u2ghF49DUAPw+GQG/Aq9XgSzLc1EUBZIkoVargSTTGzSwXNnG0ck5lldWIYoSeJ6fIkAQ5iOKIvVWq9XJDP3BMA08PruEx7M2buWlryp/NPve0FHaMJPN0S07gbv7ByCEwOVyzWa3CBzH0Xnquu4sJYWQGkWhuIW7+2e0r29w2+2i0+ksTHfqHw6H+AJnu1F/noCsnQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228030050 image",title:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228030050 image",src:"/static/165ef4d421fe417734d0e4abf427d5bb/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png",srcSet:["/static/165ef4d421fe417734d0e4abf427d5bb/7fc1e/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png 288w","/static/165ef4d421fe417734d0e4abf427d5bb/a5df1/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png 576w","/static/165ef4d421fe417734d0e4abf427d5bb/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png 1152w","/static/165ef4d421fe417734d0e4abf427d5bb/0b124/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png 1728w","/static/165ef4d421fe417734d0e4abf427d5bb/4ea69/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png 2304w","/static/165ef4d421fe417734d0e4abf427d5bb/da579/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228030050_image.png 3810w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next create a new project for the ",Object(o.b)("inlineCode",{parentName:"p"},"common-services")," operator."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc new-project common-services\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the navigation pane, click ",Object(o.b)("strong",{parentName:"p"},"Operators")," > ",Object(o.b)("strong",{parentName:"p"},"OperatorHub"),".\nThe ",Object(o.b)("strong",{parentName:"p"},"OperatorHub")," page is displayed.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"All Items")," field, enter ",Object(o.b)("inlineCode",{parentName:"p"},"IBM Common Service Operator"),".\nThe ",Object(o.b)("strong",{parentName:"p"},"IBM Common Service Operator")," is displayed.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("strong",{parentName:"p"},"IBM Common Service Operator")," tile.\nThe ",Object(o.b)("strong",{parentName:"p"},"IBM Common Service Operator")," window is displayed."),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAC00lEQVQ4y5WUW08TURSF5xUIDyLVlsYIpdArpSA3KZEQC0bE1iL1gWjAGH+JSik8aHwQ4p8DC61Neqe36XU5a+tUK5DoSXbO9Mycb699qzJsscAxZITP7cKCzwez2QyTyQSDwYD+/n709vair6+va+/p6bnWFMuoFXeGzHDY7Jidm4fd7sCI5sTvX8Xr3V0EAgEEg8GOhUIhbG1tIRwOX2mK0+XB3IIPs/OLGLM5MTI6jhuDtxHZj4KrVCqhXC6jUqkgl8uhWCyi3W7juqU43R64PVMCs447xG4ajIgeHKLRaODk5ARnZ2c4Pz/Hvyxl3O7CxOQ0LFabqCN4YNCISCSKer0uQMJo6XQaqVRK9kwm0/lNy2azsgvQ4713CfhhLyIe81qYFxcXyOfzEjIvci8UCshoz5lMVsA8oyl254QACSOUQIb87v2eAMtq61JYqlpFpVy6OmSbwy3AYcuYQJnDAa0oOrCkFYShM596MdK5Mr7F0/ieKiCWyKJUqcs532tFmYR3ekaU0aj4ltGMaPQQzWYDp6c/i8JQf91CoaQilS1q4CKS6QLKlZp23BKnypPQC2zvvMX6RgDLK6vwrz3WWsiHL0fHoiyZTKJWq3VC4qVaTRUAHbZbTUkB86yqKpTgZhivdt9g++UOnj57jo3gJh6s+HF0/BVN7XIikUC1Wv0LWJN+1Bcds0iicHFpGauP1rHycA18nr+/BJsW9sdPnwXIdmFj66vZbEqTUznTwOoTxgGgI8WhXfZOz0ox7o5YO429Hz0QQCwWQzwel0u6QoZGEIFUSoc8p9JOlVkMvQ8JjOwT2BaFhPFjHcgU0AnfcadaOqF6UTg5NdPV2LrCVqulVflUPv4zhwyZyvRQ6YxGR4prwquN3pT04e/GNgmQfcWicMz0wtCJ3pe66UAJ2aH92zCHHMGrFHI+/2fJLLs9XilGdw6jXQppzJE+EdfZD7pjH57/9Tq5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228775679 image",title:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228775679 image",src:"/static/c2b4c05e5c8c44a2fe84e2d66081a77f/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228775679_image.png",srcSet:["/static/c2b4c05e5c8c44a2fe84e2d66081a77f/7fc1e/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228775679_image.png 288w","/static/c2b4c05e5c8c44a2fe84e2d66081a77f/a5df1/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228775679_image.png 576w","/static/c2b4c05e5c8c44a2fe84e2d66081a77f/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228775679_image.png 1152w","/static/c2b4c05e5c8c44a2fe84e2d66081a77f/4f804/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228775679_image.png 1696w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Install"),". You see the ",Object(o.b)("strong",{parentName:"p"},"Create Operator Subscription")," page.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("strong",{parentName:"p"},"Installation Mode")," to the specific namespace that you created\nfor the ",Object(o.b)("inlineCode",{parentName:"p"},"IBM Common Service Operator"),". For example, ",Object(o.b)("inlineCode",{parentName:"p"},"common-service"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("strong",{parentName:"p"},"Update Channel")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"stable-v1")," version.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("strong",{parentName:"p"},"Approval Strategy")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Automatic"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Subscribe"),". "),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABj0lEQVQoz5WSy07CQBiF+xaiUJEYS6HloiRujAkxmrhwIXd5AE1caOLL+Qpu3Iu4wRBTmnJraSltoceZQQwQTOqfnMyknfn+M3OG2+N55CQJcTGBaDQKQRAQi8VWRL8HFSelMkhljxCORFEolvDZ/kLj/QONRgPNZhOtVgvdbhe9Xm+j6L9lcXI6CzEpI7TDo1iuwvM8WJYF0zSZ6Nz3fSKwkdbyfL04OZWFIEoIhXeJwwoDGIbBwNPpFLPZjI2b5LoeBoMhc6rrOiaTCbh4QsL+gYit7QiuC2WMTAuqqjL7mqaRTS7+KgrsDw24jvPbnDu/vEL+7ALZ3DFu7+5hjEYMZpHjUpcUSBfOj72q6cxHW9HQ6SiwbZtBuVKljnK1jpPTPB4en6BqHSiKAod0pZsobJMWjjzPZY2pmEM5fQiaNA2lRELRDRPjsf1z+T7+W5wkZ+ahMGAN/YHOjuyTbgtoUM1TJg4XQPpsHMeFS+wHha2vYw9bTKZIyjxuajW8vA3x/EpCmdA7ohuCARf1DTQjzuC2wG8oAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228836685 image",title:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228836685 image",src:"/static/42b41571ce2bff6595a6620894583eb1/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png",srcSet:["/static/42b41571ce2bff6595a6620894583eb1/7fc1e/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png 288w","/static/42b41571ce2bff6595a6620894583eb1/a5df1/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png 576w","/static/42b41571ce2bff6595a6620894583eb1/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png 1152w","/static/42b41571ce2bff6595a6620894583eb1/0b124/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png 1728w","/static/42b41571ce2bff6595a6620894583eb1/4ea69/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png 2304w","/static/42b41571ce2bff6595a6620894583eb1/ee212/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228836685_image.png 2876w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After a few minutes, the ",Object(o.b)("strong",{parentName:"p"},"IBM Common Service Operator")," and the\n",Object(o.b)("strong",{parentName:"p"},"Operand Deployment Lifecycle Manager Operator")," are installed,\nand you can see these operators on the ",Object(o.b)("strong",{parentName:"p"},"Installed Operators")," page."),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQY021QXUvDMBTt/1DHnCDaOSY+iqAgWsdgrdrO+qT49+vs+pWvJj1L0lT3YODkniQ35957vNPJBP65jzONKIqwWq0QhuG/iBws17nr9RuSJEEcx0jTd8u92fwKo/EJgqcl8jxHlmVomgZmdV3XAy522EMHpdRvzsC96cUcB0djPAQLlGUFQggawtC2UqOFlLLnOvJW9RDS3g8QQkA5UW86u8Th6BjBYom6YSgbgYpK/BQFiqrvlHOGuq4sNwKbbQXKTRGl/1D9Lsw8veBLkuLu/hEfn1+gjON7S61oqccmzFQGRMtt52YkaUSIANGCTHe6KQVq2v4JXt/cwtdjh8+vtnVnHoY1eLfvqTvZ3YgKbQOczzvDTIz7uJL73wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228923197 image",title:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594228923197 image",src:"/static/2e0f659b9ca45cc58eac00c80597d385/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png",srcSet:["/static/2e0f659b9ca45cc58eac00c80597d385/7fc1e/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png 288w","/static/2e0f659b9ca45cc58eac00c80597d385/a5df1/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png 576w","/static/2e0f659b9ca45cc58eac00c80597d385/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png 1152w","/static/2e0f659b9ca45cc58eac00c80597d385/0b124/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png 1728w","/static/2e0f659b9ca45cc58eac00c80597d385/4ea69/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png 2304w","/static/2e0f659b9ca45cc58eac00c80597d385/88575/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594228923197_image.png 3802w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(o.b)("ul",null),Object(o.b)("h2",null,"Customizing the installation"),Object(o.b)("p",null,"Here we walk through an example of how you can customize the installation configuration. This is just an example. A complete list of\ncustomizations can be found at this\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSHKN6/installer/1.x.x/config_operand.html"}),"IBM Knowledge Center"),"\nlink."),Object(o.b)("p",null,"In this section we customize the installation by modifying the\n",Object(o.b)("inlineCode",{parentName:"p"},"OperandConfig")," to add the ROKS installation config. We also remove the\n",Object(o.b)("inlineCode",{parentName:"p"},"elasticsearch")," component from the ",Object(o.b)("inlineCode",{parentName:"p"},"OperandRequest")," to prevent it from\nbeing installed. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the Admin console open Operators->Installed Operators->Operand Deployment Lifecycle Manager")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("strong",{parentName:"p"},"OperandConfig")," and then select the existing\n",Object(o.b)("inlineCode",{parentName:"p"},"common-services")," OperandConfig.\nSelect the ",Object(o.b)("strong",{parentName:"p"},"YAML")," Tab.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the following parameters to the\n",Object(o.b)("inlineCode",{parentName:"p"},"ibm-iam-operator.spec.authentication.config")," section."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"  authentication:\n  replicas: 3\n  config:\n    roksEnabled: true\n    roksURL: 'https://c100-e.containers.test.cloud.ibm.com:31099'\n    roksUserPrefix: 'IAM#'\n")),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAB1UlEQVQoz42SS2sTURTH5yOYZPKYTDO988xjknQaU62i5GmxNLhQkH4ZwVqxVXDhym8hQnXhzi/gRgtimuahC7sIZCFk4SI/70y6bMALP/4Xzrl/zjn3KH5Qp+BXELaHISzef/rMn78wnU6ZzWbM53P+9ywWCxTP38D2CpFhTth8ODnh98UF336MGJwPGQ6HjEajSFcRxr/3zxmMf6GUgy1ZYTUyLJarHDw/on7zNqbjUfYdhKGhaRrZbPZKwpixLhCmoNPtovQe7vPo8T53mx12dvc4evUavxKgCQ9v8xa6rhOPx0kkElcSxtIZjbWcTrPZQGl277O794A7jTatzk5kWA1q6KaHG2yjZdfkwySquiRxqcnkElVVZY5OztBpt1oopWpNtrqBbph4xTIHhy+ob22T0Q3cah0/v4YrVOz1ZIQrkohcmlQqTTodaipqO7y3222UQjmQRj6G5Ua//eTpIaVKLTJ0XIEtDTKpa7LKGOol4T0Wi8l2lxpWGWqjIVsuVTbJlyoYphNVeHz8kntyuAU5xxvXS1SKAssy5dBNzBU4joNtWfR6PZS8/OHI0PIo5D2evX3Hm49nnPbHfO3/5EyuzmQ8jlZjFZPJmC+nA5k/4R8PWXGdSmYmzwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cs-roks-cfg",title:"cs-roks-cfg",src:"/static/0bd2d36d65df229258fbd1aea5975814/3cbba/cs-config-roks.png",srcSet:["/static/0bd2d36d65df229258fbd1aea5975814/7fc1e/cs-config-roks.png 288w","/static/0bd2d36d65df229258fbd1aea5975814/a5df1/cs-config-roks.png 576w","/static/0bd2d36d65df229258fbd1aea5975814/3cbba/cs-config-roks.png 1152w","/static/0bd2d36d65df229258fbd1aea5975814/8cf7d/cs-config-roks.png 1397w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Save"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"OperandRequest")," tab and click ",Object(o.b)("strong",{parentName:"p"},"Create Operand Request"),". Paste the following content in the YAML editor (overwrite the existing content):"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: operator.ibm.com/v1alpha1\nkind: OperandRequest\nmetadata:\n  name: common-service\n  namespace: ibm-common-services\nspec:\n  requests:\n    - operands:\n        - name: ibm-cert-manager-operator\n        - name: ibm-mongodb-operator\n        - name: ibm-iam-operator\n        - name: ibm-monitoring-exporters-operator\n        - name: ibm-monitoring-prometheusext-operator\n        - name: ibm-monitoring-grafana-operator\n        - name: ibm-healthcheck-operator\n        - name: ibm-management-ingress-operator\n        - name: ibm-licensing-operator\n        - name: ibm-metering-operator\n        - name: ibm-commonui-operator\n        - name: ibm-elastic-stack-operator\n        - name: ibm-ingress-nginx-operator\n        - name: ibm-auditlogging-operator\n        - name: ibm-platform-api-operator\n        - name: ibm-helm-api-operator\n        - name: ibm-helm-repo-operator\n        - name: ibm-catalog-ui-operator\n      registry: common-service\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"![](s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594230335199_image.png)\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Create")," to start the installaton.")),Object(o.b)("p",null,"Note: If you see pods in the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-common-services")," namespaces stuck in ",Object(o.b)("inlineCode",{parentName:"p"},"CreateContainerConfigError")," status and are running OpenShift Container Platfrom 4.4.x check the workaround here:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSHKN6/installer/3.x.x/troubleshoot/op_pending.html"}),"https://www.ibm.com/support/knowledgecenter/SSHKN6/installer/3.x.x/troubleshoot/op_pending.html")),Object(o.b)("ul",null),Object(o.b)("h2",null,"Login to common services"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To verify the installation, check whether all the pods in the\n",Object(o.b)("inlineCode",{parentName:"p"},"ibm-common-services")," namespace are running. Use the following\ncommand:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get pods -n ibm-common-services\n")),Object(o.b)("p",{parentName:"li"},"   You can also use the following command to verify whether the common services are successfully installed:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc -n ibm-common-services get csv\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the following command to get the URL to access the console:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get route -n ibm-common-services cp-console -o jsonpath=‘{.spec.host}’\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can get the password for the ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," username by running the\nfollowing command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_password}' | base64 -d\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the route in a web browser and login using ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," and the password from the previous step."),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABRElEQVQoz3WS607CQBCF+/4v4wPIL0BFETRqNKQSuRhoSwT23u22Pe5sKRcTN5lMttv5ds6cjaSUaEOINkTIl2cCRVHgv1XXdchRU3wKrYQHnPa8zbwBUmGe52CMhUz7qqqO0IhzDqVUAAnB8Z0J7PYc9J32RotwToAWyA8KtNYhnHMnIMlJ1isskx0WCcfXWuHl9Q2bTQYhFSbzLdI0C11akuyLSuu7tQbG5OGyc9mRtRbDh3v0Bs9ItzkKw9DpXCOOYy/J4m48RbfbA/1HUXp1w4lB8mNQV8537Y7zC0Bqne23eP9c+y4FlqlAf/CEm34XSucYfWSYzxfBGFdYFCVwdeswSw+QADozpZkVzURBCobpSiGepRiPHiG9nD3jxxnaC5fJjID722HraAM2WoKznZ/h5vBcGnPo4vbZlNUl5Hz9AixuZwJWdZ2wAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594232899596 image",title:"s 86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F 1594232899596 image",src:"/static/dff40abea0cdf23dc9650f566da11bd0/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png",srcSet:["/static/dff40abea0cdf23dc9650f566da11bd0/7fc1e/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png 288w","/static/dff40abea0cdf23dc9650f566da11bd0/a5df1/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png 576w","/static/dff40abea0cdf23dc9650f566da11bd0/3cbba/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png 1152w","/static/dff40abea0cdf23dc9650f566da11bd0/0b124/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png 1728w","/static/dff40abea0cdf23dc9650f566da11bd0/4ea69/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png 2304w","/static/dff40abea0cdf23dc9650f566da11bd0/dacbf/s_86E1C612A8E4034D60635859136C69E365CCD6AF40EB763B06F97C01BB20953F_1594232899596_image.png 3672w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("h2",null,"Uninstall"),Object(o.b)("p",null,"To uninstall the Common Services, follow the instructions for ",Object(o.b)("strong",{parentName:"p"},"Uninstalling all services")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSHKN6/installer/3.x.x/uninstallation.html"}),"here"),".  Skip the step for deleting the CRDs (will be covered later)."),Object(o.b)("p",null,"To complete the process simply run this script:  "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bash <(curl -s https://raw.githubusercontent.com/IBM/ibm-common-service-operator/master/common/scripts/force-uninstall.sh)")),Object(o.b)("h2",null,"Additional Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSHKN6/kc_welcome_cs.html"},"Knowledge Center - IBM Cloud Platform Common Services documentation"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-services-cs-install-index-mdx-ca0e1a64ad00ed29cc89.js.map