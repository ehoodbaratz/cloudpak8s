(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),c=a.n(i),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),r=a("TSYQ"),p=a.n(r),u=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,c=o.subDirectory,s=i+"/edit/"+o.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),g=a("dI71"),j=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0,strict:!0}),i=o===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,o);return Object(m.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(m.b)(l.Link,{className:j.link,to:""+b},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},o))))))},t}(o.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,r=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,h=r.tabs,g=r.title,j=r.theme,v=r.description,C=r.keywords,N=Object(l.useStaticQuery)("2456312558").site.pathPrefix,A=N?n.pathname.replace(N,""):n.pathname,x=h?A.split("/").filter(Boolean).slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:h,homepage:!1,theme:j,pageTitle:g,pageDescription:v,pageKeywords:C,titleType:u},Object(m.b)(d,{title:o?Object(m.b)(o,null):g,label:"label",tabs:h}),h&&Object(m.b)(w,{slug:A,tabs:h,currentTab:x}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:p})),Object(m.b)(O.a,{pageContext:t,location:n,slug:A,tabs:h,currentTab:x}),Object(m.b)(s.a,null))}},"1KnB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return r}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},b=c.a;function r(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Web Console Access Overview"),Object(i.b)("p",null,"The OpenShift Container Platform Web Console is a user interface accessible from a web browser. Developers can use the Web Console to visualize, browse, and manage the contents of projects.",Object(i.b)("br",{parentName:"p"}),"\n","After your OpenShift installation is completed then you can immediately access the Web Console.  In fact, the OpenShift installation script will display how access the webconsole as part of the installation complete message.  "),Object(i.b)("p",null,"To see more information please see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web-console/web-console.html"}),"Online documentation of the Web Console")),Object(i.b)("h2",null,"Day 1 Platform"),Object(i.b)("p",null,"As Day 1 tasks (or a preparation of the Day 2 tasks), you need to prepare the certificate for the URL of Web Console. During the installation, the self-singed certificate for the URL of Web Console access will be generated."),Object(i.b)("h2",null,"Day 2 Platform"),Object(i.b)("p",null,"We can modify and customize the OpenShift Web Console.  We can also disable it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#configuring-the-web-console"}),"Configuring the Web Console"),": You can modify the OpenShift Container Platform Web Console"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#Customizing-the-web-console"}),"Customizing the Web Console"),": You can customize the OpenShift Container Platform Web Console"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#Managing-Developer-access"}),"Managing Developer access (user permissions)"),": Based on the RBAC rules, you can disable/enable capabilities on the Web Console"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#Disabling-the-web-console"}),"Disabling the Web Console"),": You can disable the OpenShift Container Platform Web Console"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#Updating-the-cert-for-the-web-console"}),"Updating the certificate for the Web Console URL"),": You can replace the default certificate of the Web Console URL.")),Object(i.b)("h2",null,"Day 1 Application"),Object(i.b)("p",null,"N/A "),Object(i.b)("h2",null,"Day 2 Application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#The-Developer-perspective"}),"Developer Console"),": The Developer perspective provides workflows specific to developer use cases")),Object(i.b)("h2",null,"Mapping to Personas"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Persona"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Day 2 Tasks"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuring the Web Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customizing the Web Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updating the certificate for the Web Console URL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disabling the Web Console")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevOps/SRE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Developer perspective")))),Object(i.b)("a",{name:"Configuring-the-web-console"}),Object(i.b)("h2",null,"Configuring the Web Console"),Object(i.b)("p",null,"You can modify the OpenShift Container Platform Web Console to set a logout redirect URL or disable the console by editing the console.config.openshift.io resource.  "),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/configuring-web-console.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/configuring-web-console.html"),"  "),Object(i.b)("a",{name:"Customizing-the-web-console"}),Object(i.b)("h2",null,"Customizing the Web Console"),Object(i.b)("p",null,"You can customize the OpenShift Container Platform Web Console including the followings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding a custom logo and product name"),Object(i.b)("li",{parentName:"ul"},"Creating custom links in the Web Console"),Object(i.b)("li",{parentName:"ul"},"Defining a template for an external log link"),Object(i.b)("li",{parentName:"ul"},"Creating custom notification banners"),Object(i.b)("li",{parentName:"ul"},"Customizing CLI downloads"),Object(i.b)("li",{parentName:"ul"},"Adding YAML examples to Kubernetes resources")),Object(i.b)("p",null,"It is especially helpful if you need to tailor the Web Console to meet specific corporate or government requirements."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/customizing-the-web-console.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/customizing-the-web-console.html"),"  "),Object(i.b)("a",{name:"The-Developer-perspective"}),Object(i.b)("h2",null,"The Developer perspective"),Object(i.b)("p",null,"The OpenShift Container Platform Web Console provides two perspectives; the Administrator perspective and the Developer perspective.\nThe Developer perspective provides workflows specific to developer use cases, such as the ability to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create and deploy applications on OpenShift Container Platform by importing existing codebases, images, and dockerfiles."),Object(i.b)("li",{parentName:"ul"},"Visually interact with applications, components, and services associated with them within a project and monitor their deployment and build status."),Object(i.b)("li",{parentName:"ul"},"Group components within an application and connect the components within and across applications."),Object(i.b)("li",{parentName:"ul"},"Integrate serverless capabilities (Technology Preview)."),Object(i.b)("li",{parentName:"ul"},"Create workspaces to edit your application code using Eclipse Che.")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/odc-about-developer-perspective.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/odc-about-developer-perspective.html"),"  "),Object(i.b)("a",{name:"Managing-Developer-access"}),Object(i.b)("h2",null,"Managing Developer access (User permissions)"),Object(i.b)("p",null,"You can manage what capabilities are enabled/disabled on the Web Console for the DevOps engineer based on the RBAC rules.\nFor example, with the no-privileged user’s default settings, there is no “Monitoring” and “Compute” menu in the Administrator view.\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"761px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.59722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACsUlEQVQ4y41US2+SURBlq9EEpZTyLFAo78fHQwoUkErSxB9lTKO1hb6rBayCLtSoiX3opnGh/oJSU9qmiy7tpklNumkl5HhnCp+E+rrJzUcyhzNnZs5cxenpKY6Pv2N/fx87OzvY2vrK32+Hhzg5OQHF6TSbTRwcHHCsVquhXq9jd3cX29t17O3tYXOzhqOjIyiKpTIcbh+GkilEYwm4fUHYHW54AyEYLTaUliton3xhGrZBF0LRGF+3LwC70w2nxwej2YqV1TUo5hYWodWbIIVvICBFmLzfaseA+OO1Hg2Kpccy4WR+CnqTGVJEYENRQeaBSSS12p3QGc3nhJXqM8TTOeRGb2MokUIydROpzAgy2RwnefHylUy4JKpJZnLI3hpFPJnGcDorY2PxYWxsfITi4aMibN4wEukReES5Lm+AL5dsHsCTp1WZcHp2Hs5QAnGRlLDu1vUJLKldf/8Bitm5BajUGu6HeWCQy6VLZShVVHJZJhyfyEOt0V7AWmwOaHQmvFtZPe+hzmhBKBLjvhGQADYxmB6NDqXyskw4kS/A0G9FULSCEhKujdWbLK2hzC+iV2vggZDsTsLrvVoUy7+G8mCyIJQY4e/CkhB5KESoNfQzIQU7CVWCsNRFSAr9UlhW1ya8oNDl8ctkskJ1t8I8KyRrEbZTIYmSfUjsHn/wAmF3D9sKnSL5PxVSyUTytx5Oik2hXtGW0GA8folxpJgMvrq2Lmwzv8BlBIXzO8v4XQ/v3B3D5atKjpMispVS1cu4S1eUeP3m7XnJ6j4DfMEwT46IrHYH/+4u+dPnLxi7N44ZYfDC1Iyw0RSvI+34/fEJbIsHQ0FBdZ8efkHoDUhMRBtCSin7UsvYZ2c/8D+HX5tBlxfDmSzvIykln0nC6GTeSvU5AxuNBj9h9P3TpfhPk57KxxaymUQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"webconsole_diff_1",title:"webconsole_diff_1",src:"/static/a812791fd217cf27edc4204cedd8acc1/05d44/webconsole_diff_1.png",srcSet:["/static/a812791fd217cf27edc4204cedd8acc1/7fc1e/webconsole_diff_1.png 288w","/static/a812791fd217cf27edc4204cedd8acc1/a5df1/webconsole_diff_1.png 576w","/static/a812791fd217cf27edc4204cedd8acc1/05d44/webconsole_diff_1.png 761w"],sizes:"(max-width: 761px) 100vw, 761px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"You can find the default user permissions in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.ibm.com/CASE/OCP-Day2-operations/blob/master/UserManagement/rbac/default_user_permissions.md"}),"here"),". "),Object(i.b)("p",null,"You can find out the information about the RBAC in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../User/"}),"here"),".  "),Object(i.b)("a",{name:"Updating-the-cert-for-the-web-console"}),Object(i.b)("h2",null,"Updating the certificate for the Web Console URL"),Object(i.b)("p",null,"When you build an OpenShift 4 cluster, a self-signed certificate is applied to HTTPS endpoints such as the Web Console and API server by default.",Object(i.b)("br",{parentName:"p"}),"\n","Therefore, a certificate verification error occurs when accessing with a browser or the oc command, and it is necessary to perform an operation of “permit access to potentially insecure endpoints”, so in operations such as a production environment, it is not a good idea to keep using as it is.",Object(i.b)("br",{parentName:"p"}),"\n","In other words, you would replace it with a formal certificate if necessary.",Object(i.b)("br",{parentName:"p"}),"\n","In addition to the certificate corresponding to the API server (api. <OpenShift 4 cluster domain>), the certificate requires a wildcard certificate (* .apps. <OpenShift 4 cluster domain>) corresponding to Router.",Object(i.b)("br",{parentName:"p"}),"\n","Replacing a certificate is a very simple task. You will login to the cluster as a user with the cluster-admin role and applying the prepared formal certificate with the oc command.  "),Object(i.b)("p",null,"See the OpenShift official document for detailed instructions.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/networking/ingress-operator.html#nw-ingress-setting-a-custom-default-certificate_configuring-ingress"}),"https://docs.openshift.com/container-platform/4.3/networking/ingress-operator.html#nw-ingress-setting-a-custom-default-certificate_configuring-ingress")),Object(i.b)("a",{name:"Disabling-the-web-console"}),Object(i.b)("h2",null,"Disabling the Web Console"),Object(i.b)("p",null,"If you have any reason that you are not allow to use the Web Console of your OpenShift cluster, you can disable the OpenShift Container Platform Web Console by editing the console.operator.openshift.io resource."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/disabling-web-console.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/disabling-web-console.html"),"  "),Object(i.b)("h2",null,"Implementing Web Console"),Object(i.b)("p",null,"Since Web Console in OpenShift is the feature comes with OpenShift.  Which means that the information we mentioned above are for OpenShift only."),Object(i.b)("h2",null,"Kubernetes"),Object(i.b)("p",null,"Kubernetes provides the Web Console but it is not included in OpenShift.  In other words, OpenShift Web Console contains most of features which Kubernetes Web Console provides and therefore we don’t need to use Kubernetes Web Console feature to manage OpenShift.  "),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"}),"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"),"  "),Object(i.b)("h2",null,"OpenShift"),Object(i.b)("p",null,"Information described in the previous sections are applicable only for OpenShift."),Object(i.b)("h2",null,"On IBM Cloud"),Object(i.b)("p",null,"OpenShift ",Object(i.b)("strong",{parentName:"p"},"managed service")," which is provided by ",Object(i.b)("strong",{parentName:"p"},"IBM Cloud")," provides its unique dashboard as well as OpenShift Web Console which we described in this document above."),Object(i.b)("h2",null,"With IBM Cloud Pak for MCM"),Object(i.b)("p",null,"N/A"),Object(i.b)("h2",null,"Others"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"KUI"),"\nKUI does not come with OpenShift.  KUI is an open source kubernetes application.  KUI is a Visual Web Terminal that allows you to interact with multiple command line tools in order to minimize context switching and get more done in a single place."),Object(i.b)("p",null,"The following is a sample of running a kubectl get pods.  It displays the output in a nice graphical format, and it provides context senstive next action."),Object(i.b)("p",null,"If you click on the name of the pods then it will display the output of the kubectl desc podsname."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVQoz32RS0/jMBRG+ytom4basYudNonzwHES5+GmCQoTGIk9m5FYsIb/v+AGFQkNodKxJT+O/eneRVzdBdU9lx3yc+RlJD4CTmSQaGCeCA1N2p8w1S+CYqBRhYV2hMZBgf0ccKUJyo5G2lOng2otFl9h78rxv7OkYnGT90wPvBycpEF+gQKNhKah6V6f/LYlombyaLvpioQrGn1nvYsWODFEnmjabYPS4unGVcC1m+vngenKYmrrFRa7XdHwPyZ5l9/xeuTNiMNqw+WGp/ZeYU//eX/yT8ZmGZ32QRYzMrk97rKeqg5HNQBLFJTbfd78G/dVDbIjSpvLFZmV5WmSsx4iAPAKkS3ydPl8z3Vlc4X9S7F7t33kZnTbv6wcIPM59ts5NgmrX2UHYudTbPgWx2bjptcHhQ6FeXnY143NM+jipzwXG+qEgGgCx9MM5bGZjEZDkmy9S6BP65t4/mdr7gBYOuKzt78yycsfZfw6u2SeZRiXL12QPwAeToI3Jlyn5AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Kui Sample Output",title:"Kui Sample Output",src:"/static/c113d2b1d2ebc0c6b9cef444b0812325/3cbba/sample-kui-output.png",srcSet:["/static/c113d2b1d2ebc0c6b9cef444b0812325/7fc1e/sample-kui-output.png 288w","/static/c113d2b1d2ebc0c6b9cef444b0812325/a5df1/sample-kui-output.png 576w","/static/c113d2b1d2ebc0c6b9cef444b0812325/3cbba/sample-kui-output.png 1152w","/static/c113d2b1d2ebc0c6b9cef444b0812325/fcdc7/sample-kui-output.png 1487w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"More information about KUI can be found in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kui.tools/"}),"KUI webpage")),Object(i.b)("h2",null,"Other consideration"),Object(i.b)("p",null,"n/a"))}r.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-misc-web-console-index-mdx-7298d577d6edcf597595.js.map