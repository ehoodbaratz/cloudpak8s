(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),o=a.n(c),l=a("Wbzz"),i=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,o=r.subDirectory,i=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),j=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),c=r===n,i=new RegExp(n+"/?(#.*)?$"),b=a.replace(i,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=c,t),N.listItem)},Object(u.b)(l.Link,{className:N.link,to:""+b},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},t}(r.a.Component),x=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,m=t.titleType,O=s.tabs,j=s.title,N=s.theme,v=s.description,T=s.keywords,y=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=y?n.pathname.replace(y,""):n.pathname,w=O?k.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:O,homepage:!1,theme:N,pageTitle:j,pageDescription:v,pageKeywords:T,titleType:m},Object(u.b)(d,{title:r?Object(u.b)(r,null):j,label:"label",tabs:O}),O&&Object(u.b)(f,{slug:k,tabs:O,currentTab:w}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:n,slug:k,tabs:O,currentTab:w}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},s6Zj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));var n=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},b=i("PageDescription"),s=i("AnchorLinks"),p=i("AnchorLink"),m=i("InlineNotification"),u=i("Tabs"),d=i("Tab"),O={_frontmatter:l},h=o.a;function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(h,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(b,{mdxType:"PageDescription"},"In this section we will walk through the installation of the IBM Edge Computing Manager for Devices version 4."),Object(c.b)(s,{mdxType:"AnchorLinks"},Object(c.b)(p,{mdxType:"AnchorLink"},"Installing IBM Edge Computing Manager for Devices 4.0"),Object(c.b)(p,{mdxType:"AnchorLink"},"Post installation configuration"),Object(c.b)(p,{mdxType:"AnchorLink"},"Uninstalling IBM Edge Computing Manager for Devices 4.0")),Object(c.b)("h2",null,"Prerequisties"),Object(c.b)("ul",null),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Install IBM CP4MCM 1.3"),Object(c.b)("li",{parentName:"ol"},"A macOS or Ubuntu Linux Host"),Object(c.b)("li",{parentName:"ol"},"Openshift Client CLI ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.3/"}),"Download")),Object(c.b)("li",{parentName:"ol"},"Jq ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://stedolan.github.io/jq/download/"}),"Download")),Object(c.b)("li",{parentName:"ol"},"git"),Object(c.b)("li",{parentName:"ol"},"docker 1.13 +"),Object(c.b)("li",{parentName:"ol"},"make"),Object(c.b)("li",{parentName:"ol"},"Download following CLI tools from the ICP console\n",Object(c.b)("inlineCode",{parentName:"li"},"https://<ICP_CLUSTER_URL>/common-nav/cli"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Kubernetes CLI (",Object(c.b)("strong",{parentName:"li"},"kubectl"),")"),Object(c.b)("li",{parentName:"ol"},"Helm CLI(",Object(c.b)("strong",{parentName:"li"},"helm"),")"),Object(c.b)("li",{parentName:"ol"},"IBM Cloud Pak CLI ( ",Object(c.b)("strong",{parentName:"li"},"cloudctl"),")")))),Object(c.b)("h2",null,"Installing IBM Edge Computing Manager for Devices 4.0"),Object(c.b)("ul",null),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Set the ",Object(c.b)("inlineCode",{parentName:"p"},"ICP_CLUSTER_URL")," environment variable. This value can be\nobtained from the output of the Management Hub install:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"export ICP_CLUSTER_URL=https://$(oc get routes -n kube-system icp-console -o jsonpath='{.spec.host}')\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Connect to your cluster with cluster administrator privileges,\nselecting ",Object(c.b)("strong",{parentName:"p"},"kube-system")," as the namespace and\n",Object(c.b)("strong",{parentName:"p"},"fill in the password")," you defined in the ",Object(c.b)("inlineCode",{parentName:"p"},"config.yaml")," file during the\nManagement Hub install:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," cloudctl login -a $ICP_CLUSTER_URL -u admin -p <your-icp-admin-password> -n kube-system --skip-ssl-validation\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Define the image registry host, configure the Docker CLI to trust\nthe self-signed certificate: "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," export REGISTRY_HOST=$(oc get routes -n openshift-image-registry default-route -o jsonpath='{.spec.host}')\n")),Object(c.b)(m,{mdxType:"InlineNotification"},"Note: Please note on some clusters image registry might not have been exposed yet for first time, please run following optional command if you have issue with above command)"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'oc patch configs.imageregistry.operator.openshift.io/cluster --patch \'{"spec":{"defaultRoute":true}}\' --type=merge\n')),Object(c.b)(u,{mdxType:"Tabs"},Object(c.b)(d,{label:"For MacOS",mdxType:"Tab"},Object(c.b)("p",{parentName:"li"},"   ",Object(c.b)("strong",{parentName:"p"},"Trust the certificate")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"mkdir -p ~/.docker/certs.d/$REGISTRY_HOST && \\\necho | openssl s_client -showcerts -connect $REGISTRY_HOST:443 2>/dev/null | openssl x509 -outform PEM > ~/.docker/certs.d/$REGISTRY_HOST/ca.crt && \\\nsudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/.docker/certs.d/$REGISTRY_HOST/ca.crt\n")),Object(c.b)("p",{parentName:"li"},"   ",Object(c.b)("strong",{parentName:"p"},"Restart the Docker service from the menu bar"))),Object(c.b)(d,{label:"For Ubuntu",mdxType:"Tab"},Object(c.b)("p",{parentName:"li"},"   ",Object(c.b)("strong",{parentName:"p"},"Trust the certificate")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"mkdir /etc/docker/certs.d/$REGISTRY_HOST && \\\necho | openssl s_client -showcerts -connect $REGISTRY_HOST:443 2>/dev/null | openssl x509 -outform PEM > /etc/docker/certs.d/$REGISTRY_HOST/ca.crt && \\\nsudo service docker restart\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Login to the OpenShift Container Platform 4.3.x image registry:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker login $REGISTRY_HOST -u $(oc whoami) -p $(oc whoami -t)\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Unpack the IBM Edge Computing Manager for Devices installation\ncompressed file that was downloaded from IBM Passport Advantage:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," tar -zxvf ibm-ecm-4.0.0-x86_64.tar.gz && \\\n cd ibm-ecm-4.0.0-x86_64\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create a new namespace ",Object(c.b)("inlineCode",{parentName:"p"},"ibmcom"),"."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc new-project ibmcom\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Load the archive content into the catalog, and the images into\nthe registry’s ",Object(c.b)("inlineCode",{parentName:"p"},"ibmcom")," namespace:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cloudctl catalog load-archive --archive ibm-ecm-prod-catalog-archive-4.0.0.tgz --registry $REGISTRY_HOST/ibmcom\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Extract the chart compressed file content to the current directory\nand move into the directory created:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"tar -O -zxvf ibm-ecm-prod-catalog-archive-4.0.0.tgz charts/ibm-ecm-prod-4.0.0.tgz | tar -zxvf - && \\\ncd ibm-ecm-prod\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install the Chart."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./ibm_cloud_pak/pak_extensions/full-install/install-edge-computing.sh\n")),Object(c.b)(m,{mdxType:"InlineNotification"},"Depending on your network speeds, it will take a  few minutes for the images to download, for pods to transition into  RUNNING state, and all of the services to become active."),Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Verifying the Chart")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"The script above verifies that the pods are running and the  agbot and exchange are responding. Look for a “RUNNING” and “PASSED”  message towards the end of the installation."),Object(c.b)("li",{parentName:"ul"},"If “FAILED”, the output will ask you to look at specific logs for more information"),Object(c.b)("li",{parentName:"ul"},"If “PASSED”, the output will show details of tests that were run, and two more items to verify          ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Browse to the IBM Edge Computing Manager UI console at the\nURL given at the end of the log. ",Object(c.b)("inlineCode",{parentName:"li"},"https://<ICP_CLUSTER_URL>/edge"))))))),Object(c.b)("h2",null,"Post installation configuration"),Object(c.b)(m,{mdxType:"InlineNotification"},"Note: Run the following commands from the same host where you ran the initial installation)"),Object(c.b)("ul",null),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Set the ICP_CLUSTER_URL environment variable. This value can be\nobtained from the output of the Management Hub install:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"export ICP_CLUSTER_URL=https://$(oc get routes -n kube-system icp-console -o jsonpath='{.spec.host}')\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Connect to your cluster with cluster administrator privileges,\nselecting ",Object(c.b)("strong",{parentName:"p"},"kube-system")," as the namespace and\n",Object(c.b)("strong",{parentName:"p"},"fill in the password")," you defined in the ",Object(c.b)("inlineCode",{parentName:"p"},"config.yaml")," file during the\nManagement Hub install:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cloudctl login -a $CLUSTER_URL -u admin -p <your-icp-admin-password> -n kube-system --skip-ssl-validation\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install the ",Object(c.b)("strong",{parentName:"p"},"hzn")," CLI with either the Ubuntu Linux or macOS package installers that are found under ",Object(c.b)("strong",{parentName:"p"},"horizon-edge-packages")," in the appropriate OS/ARCH directory from the compressed content extracted in step 5 of the Installation process above:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Ubuntu Linux example:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo dpkg -i horizon-edge-packages/linux/ubuntu/bionic/amd64/horizon-cli*.deb\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"macOS example:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo installer -pkg horizon-edge-packages/macos/horizon-cli-*.pkg -target /\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Export the following variables that are needed for the next steps:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'export EXCHANGE_ROOT_PASS=$(oc -n kube-system get secret edge-computing -o jsonpath="{.data.exchange-config}" | base64 --decode | jq -r .api.root.password)\nexport HZN_EXCHANGE_URL=https://$(oc get routes -n kube-system icp-console -o jsonpath=\'{.spec.host}\')/ec-exchange/v1\nexport HZN_EXCHANGE_USER_AUTH="root/root:$EXCHANGE_ROOT_PASS"\nexport HZN_ORG_ID=IBM\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the following command to trust the OpenShift Container Platform 4.3 Certificate Authority:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," oc --namespace kube-system get secret cluster-ca-cert -o jsonpath=\"{.data['tls\\.crt']}\" | base64 --decode > /tmp/icp-ca.crt\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Ubuntu Linux example:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo cp /tmp/icp-ca.crt /usr/local/share/ca-certificates && sudo update-ca-certificates\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"macOS example:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /tmp/icp-ca.crt\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the following command to create a signing key pair."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"hzn key create <company-name> <owner@email>\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the following command to confirm that the setup can communicate with the IBM Edge Computing Manager for Devices exchange API:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," hzn exchange status\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Populate sample edge services by running the following command:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," curl https://raw.githubusercontent.com/open-horizon/examples/v4.0/tools/exchangePublishScript.sh | bash\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the following commands to view some of the services and policies  that were created in the IBM Edge Computing Manager for Devices  exchange:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," hzn exchange service list IBM/\n hzn exchange pattern list IBM/\n hzn exchange service listpolicy IBM/ibm.helloworld_1.0.0_amd64\n hzn exchange service listpolicy IBM/ibm.cpu2evtstreams_1.4.3_amd64\n")))),Object(c.b)("h2",null,"Uninstalling IBM Edge Computing Manager for Devices 4.0"),Object(c.b)("p",null,"Return to the location of the chart unpacked as part of installation",Object(c.b)("br",{parentName:"p"}),"\n","and run the provided uninstall \tscript. This script will uninstall\nthe  helm release and all associated resources. First, login to the\ncluster  as a cluster administrator by using ",Object(c.b)("strong",{parentName:"p"},"cloudctl"),", and then\nrun:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./ibm_cloud_pak/pak_extensions/uninstall/uninstall-edge-computing.sh <cluster-name>\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-edge-index-mdx-7c6be07323a2b5134bd3.js.map