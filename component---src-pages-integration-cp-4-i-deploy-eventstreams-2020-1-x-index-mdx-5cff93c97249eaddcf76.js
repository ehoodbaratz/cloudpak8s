(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NmYn"),i=n.n(o),c=n("Wbzz"),b=n("Xrax"),s=n("k4MR"),l=n("TSYQ"),d=n.n(l),u=n("QH2O"),m=n("qKvR"),p=function(e){var t,n=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(m.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},n)))))},x=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:b},"Edit this page on GitHub"))):null},j=n("FCXl"),O=n("dI71"),h=n("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===a,b=new RegExp(a+"/?(#.*)?$"),s=n.replace(b,r);return Object(m.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(m.b)(c.Link,{className:h.link,to:""+s},e))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:h.list},r))))))},t}(r.a.Component),T=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,x=l.tabs,O=l.title,h=l.theme,v=l.description,w=l.keywords,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=k?a.pathname.replace(k,""):a.pathname,y=x?P.split("/").filter(Boolean).slice(-1)[0]||i()(x[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:x,homepage:!1,theme:h,pageTitle:O,pageDescription:v,pageKeywords:w,titleType:u},Object(m.b)(p,{title:r?Object(m.b)(r,null):O,label:"label",tabs:x}),x&&Object(m.b)(f,{slug:P,tabs:x,currentTab:y}),Object(m.b)(T.a,{padded:!0},n,Object(m.b)(g,{relativePagePath:d})),Object(m.b)(j.a,{pageContext:t,location:a,slug:P,tabs:x,currentTab:y}),Object(m.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},M7Nj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("013z"),c=(n("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=b("InlineNotification"),l=b("AnchorLinks"),d=b("AnchorLink"),u={_frontmatter:c},m=i.a;function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration. This version is the first to feature Operators and has significant changes to the deployment and operations.  For information about installing the Event Streams component, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.2/install/install_event_streams.html"}),"Knowledge Center"),".")),Object(o.b)(l,{mdxType:"AnchorLinks"},Object(o.b)(d,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(d,{mdxType:"AnchorLink"},"Prepare Installation"),Object(o.b)(d,{mdxType:"AnchorLink"},"Begin Installation"),Object(o.b)(d,{mdxType:"AnchorLink"},"Validate Installation")))}p.isMDXComponent=!0},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-eventstreams-2020-1-x-index-mdx-5cff93c97249eaddcf76.js.map