(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+LHu":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},s=o.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",null,"Create the Playback Engine database"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"su - db2inst1\ndb2 create database aaedb automatic storage yes using codeset UTF-8 territory US pagesize 32768\ndb2 connect to aaedb\n\n## The following grant is used for databases without enhanced security.\n## aaedbuser is the username that App Engine uses to connect to the database\ndb2 grant dbadm on database to user aaedbuser\n\ndb2 connect reset\nexit\n")),Object(b.b)("h3",null,"Create the BAS database"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"su - db2inst1\ndb2 create database basdb automatic storage yes using codeset UTF-8 territory US pagesize 32768\ndb2 connect to basdb\n\n## A user temporary tablespace is required to support stored procedures in BPM.\n$ db2 CREATE USER TEMPORARY TABLESPACE USRTMPSPC1\n$ db2 UPDATE DB CFG FOR basdb USING LOGFILSIZ 16384 DEFERRED\n$ db2 UPDATE DB CFG FOR basdb USING LOGSECOND 64 IMMEDIATE\n$ db2 grant dbadm on database to user basuser\n$ db2 connect reset\n$ exit\n")),Object(b.b)("h3",null,"Create the BAS secrets"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Copy this ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/assets/automation/bas/rr-secret.yaml"}),Object(b.b)("inlineCode",{parentName:"a"},"rr-secret.yaml"))," template file in your working directory and update it as needed.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Copy this ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/assets/automation/bas/playback-ae-server.yaml"}),Object(b.b)("inlineCode",{parentName:"a"},"playback-ae-server.yaml"))," template file in your working directory and update it as needed.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Copy this ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/assets/automation/bas/bas-secret.yaml"}),Object(b.b)("inlineCode",{parentName:"a"},"bas-secret.yaml"))," template file in your working directory and update it as needed. Make sure that you use a different ",Object(b.b)("inlineCode",{parentName:"p"},"oidcClientId")," for Business Automation Studio from the one you use for the App Engine playback server. There is only one UMS server and it needs to know which component to connect to.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Create the secrets:"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"oc create -f rr-secret.yaml\noc create -f playback-ae-server.yaml\noc create -f bas-secret.yaml\n")),Object(b.b)("h3",null,"Deploy BAS"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"To update the operator configuration, copy this ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/assets/automation/bas/my_ibm_cp4a_cr_2.yaml"}),Object(b.b)("inlineCode",{parentName:"a"},"my_ibm_cp4a_cr_2.yaml"))," template file in your working directory and update it as needed. You can highlight the BAS configuration sections that need your attention by doing a diff with the template file found in ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/assets/automation/ums/my_ibm_cp4a_cr_1.yaml"}),Object(b.b)("inlineCode",{parentName:"a"},"my_ibm_cp4a_cr_1.yaml")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Apply the updated custom resource definition file:"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"oc apply -f my_ibm_icp4a_cr_2.yaml\n")),Object(b.b)("p",null,"You should see the following new pods deployed:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"NAME                                              READY   STATUS        RESTARTS   AGE\ncp4a-prod-bastudio-authoring-jms-0                1/1     Running       0          17h\ncp4a-prod-bastudio-bootstrap-cpwwq                0/1     Completed     0          17h\ncp4a-prod-bastudio-deployment-667477d695-97f4q    1/1     Running       0          17h\ncp4a-prod-bastudio-ltpa-drgp2                     0/1     Completed     0          17h\ncp4a-prod-bastudio-oidc-2f54b                     0/1     Completed     0          17h\ncp4a-prod-dba-rr-83f45a5d0c                       1/1     Running       0          87m\ncp4a-prod-dba-rr-b29d156915                       1/1     Running       0          87m\ncp4a-prod-dba-rr-ef1b17dabf                       1/1     Running       0          87m\ncp4a-prod-pbk-ae-db-job-vzct7                     0/1     Completed     0          17h\ncp4a-prod-pbk-ae-deployment-c8d5458fb-9zltp       1/1     Terminating   0          17h\ncp4a-prod-pbk-ae-deployment-c8d5458fb-m8cqq       1/1     Running       0          10h\ncp4a-prod-pbk-ae-oidc-job-wq8sg                   0/1     Completed     0          17h\ncp4a-prod-rr-setup-pod                            0/1     Completed     0          87m\n")),Object(b.b)("h3",null,"Test that BAS is up"),Object(b.b)("p",null,"Connect to ",Object(b.b)("inlineCode",{parentName:"p"},"https://<bas-route>/BAStudio")," with the administrator login you have defined in the ",Object(b.b)("inlineCode",{parentName:"p"},"bas-secret.yaml")," file. You should also be able to login with the credentials for any user defined in the LDAP directory."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"<bas-route>")," is the hostname that you have provided under the ",Object(b.b)("inlineCode",{parentName:"p"},"bastudio_configuration")," in the ",Object(b.b)("inlineCode",{parentName:"p"},"my_ibm_cp4a_cr_2.yaml")," configuration file."))}l.isMDXComponent=!0},"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,c=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),y=a("dI71"),g=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),b=r===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,r);return Object(u.b)("li",{key:e,className:d()((t={},t[g.selectedItem]=b,t),g.listItem)},Object(u.b)(i.Link,{className:g.link,to:""+s},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:g.list},r))))))},t}(r.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,l=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,O=l.tabs,y=l.title,g=l.theme,x=l.description,T=l.keywords,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,w=C?n.pathname.replace(C,""):n.pathname,v=O?w.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:O,homepage:!1,theme:g,pageTitle:y,pageDescription:x,pageKeywords:T,titleType:p},Object(u.b)(m,{title:r?Object(u.b)(r,null):y,label:"label",tabs:O}),O&&Object(u.b)(f,{slug:w,tabs:O,currentTab:v}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d})),Object(u.b)(h.a,{pageContext:t,location:n,slug:w,tabs:O,currentTab:v}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-automation-install-bas-index-mdx-9b680af26ace0ff0e892.js.map