(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),b=a("NmYn"),l=a.n(b),c=a("Wbzz"),o=a("Xrax"),s=a("k4MR"),i=a("TSYQ"),p=a.n(i),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=n.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,b=n.baseUrl,l=n.subDirectory,o=b+"/edit/"+n.branch+l+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),b=n===r,o=new RegExp(r+"/?(#.*)?$"),s=a.replace(o,n);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(u.b)(c.Link,{className:f.link,to:""+s},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},n))))))},t}(n.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,b=t.frontmatter,i=void 0===b?{}:b,p=t.relativePagePath,m=t.titleType,O=i.tabs,h=i.title,f=i.theme,x=i.description,v=i.keywords,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=T?r.pathname.replace(T,""):r.pathname,y=O?k.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:O,homepage:!1,theme:f,pageTitle:h,pageDescription:x,pageKeywords:v,titleType:m},Object(u.b)(d,{title:n?Object(u.b)(n,null):h,label:"label",tabs:O}),O&&Object(u.b)(w,{slug:k,tabs:O,currentTab:y}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:r,slug:k,tabs:O,currentTab:y}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pK4o:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return i}));var r=a("wx14"),n=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),o={_frontmatter:c},s=l.a;function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(s,Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The minimum hardware requirements for the Cloud Pak for Multicloud Management\nhub cluster are simply stated on the\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/hardware_reqs.html"}),"IBM Knowledge Center requirements page"),"."),Object(b.b)("p",null,"These requirements are summarized as follows:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"Master/Worker")),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"Nodes")),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"CPU(Cores/Node)")),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"Memory (GB/Node)")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Master"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"3"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"8"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"24")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Worker"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"4+"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"8"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"32")))),Object(b.b)("p",null,"Also, a persistent volume greater than 161 GB is required."),Object(b.b)("p",null,"Most importantly, ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/mysupport/s/"}),"IBM Support")," is\nprepared to provide specific sizing guidance for your desired set of\ncomponents and environment. The\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/hardware_reqs.html"}),"IBM Knowledge Center requirements page"),"\nprovides the instructions for how to get this guidance."),Object(b.b)("p",null,"The IBM Knowledge Center documentation also provides guidance on:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/storage.html"}),"Storage Options")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/supported_os.html"}),"Supported OpenShift versions and platforms")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/mcm/manage_cluster/cloud_providers.html"}),"Supported cloud providers for Cluster API, hub cluster, and managed clusters"))),Object(b.b)("p",null,"Be sure to check these pages on the IBM Knowledge Center when it is time for\nyour installation, since these requirements could change."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-requirements-index-mdx-8fb1c3217e06a70cb2c2.js.map