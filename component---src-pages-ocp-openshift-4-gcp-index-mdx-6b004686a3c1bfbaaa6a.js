(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),o=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,l=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),x=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),i=r===n,l=new RegExp(n+"/?(#.*)?$"),s=a.replace(l,r);return Object(m.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(m.b)(o.Link,{className:j.link,to:""+s},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},r))))))},t}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,g=b.tabs,x=b.title,j=b.theme,T=b.description,P=b.keywords,N=Object(o.useStaticQuery)("2456312558").site.pathPrefix,w=N?n.pathname.replace(N,""):n.pathname,k=g?w.split("/").filter(Boolean).slice(-1)[0]||c()(g[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:g,homepage:!1,theme:j,pageTitle:x,pageDescription:T,pageKeywords:P,titleType:p},Object(m.b)(d,{title:r?Object(m.b)(r,null):x,label:"label",tabs:g}),g&&Object(m.b)(O,{slug:w,tabs:g,currentTab:k}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:u})),Object(m.b)(f.a,{pageContext:t,location:n,slug:w,tabs:g,currentTab:k}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Ker2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},s=c.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Documentation on installing Openshift 4 on Google Cloud Platform can be found\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_gcp/installing-gcp-account.html"}),"here"),"."),Object(i.b)("p",null,"If possible, using the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_gcp/installing-gcp-default.html"}),"installer-provisioned infrastructure"),"\n(IPI) method is preferred."),Object(i.b)("p",null,"For custom requirements, the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_gcp/installing-gcp-customizations.html"}),"user-provisioned infrastructure"),"\n(UPI) method can be used."),Object(i.b)("p",null,"If the UPI method must be used, a terraform automation configuration may be\nhelpful. A sample configuration can be found here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-gcp/"}),"https://github.com/ibm-cloud-architecture/terraform-openshift4-gcp/"))))}b.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-ocp-openshift-4-gcp-index-mdx-6b004686a3c1bfbaaa6a.js.map