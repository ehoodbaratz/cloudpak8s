(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("NmYn"),l=n.n(r),s=n("Wbzz"),b=n("Xrax"),o=n("k4MR"),c=n("TSYQ"),d=n.n(c),p=n("QH2O"),u=n("qKvR"),m=function(e){var t,n=e.title,a=e.tabs,i=void 0===a?[]:a;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=i.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},n)))))},j=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,r=i.baseUrl,l=i.subDirectory,b=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=n("FCXl"),f=n("dI71"),g=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),r=i===a,b=new RegExp(a+"/?(#.*)?$"),o=n.replace(b,i);return Object(u.b)("li",{key:e,className:d()((t={},t[g.selectedItem]=r,t),g.listItem)},Object(u.b)(s.Link,{className:g.link,to:""+o},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:g.list},i))))))},t}(i.a.Component),v=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,j=c.tabs,f=c.title,g=c.theme,w=c.description,N=c.keywords,y=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=y?a.pathname.replace(y,""):a.pathname,k=j?I.split("/").filter(Boolean).slice(-1)[0]||l()(j[0],{lower:!0}):"";return Object(u.b)(o.a,{tabs:j,homepage:!1,theme:g,pageTitle:f,pageDescription:w,pageKeywords:N,titleType:p},Object(u.b)(m,{title:i?Object(u.b)(i,null):f,label:"label",tabs:j}),j&&Object(u.b)(x,{slug:I,tabs:j,currentTab:k}),Object(u.b)(v.a,{padded:!0},n,Object(u.b)(O,{relativePagePath:d})),Object(u.b)(h.a,{pageContext:t,location:a,slug:I,tabs:j,currentTab:k}),Object(u.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},bEJB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n("wx14"),i=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("013z"),s=(n("qKvR"),{}),b={_frontmatter:s},o=l.a;function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(o,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Most components from the IBM Cloud Pak for Automation need access to a database server and a directory service.\nBACA and ECM specifically need access to a non-containerized DB2 database service."),Object(r.b)("p",null,"The following sections provide instructions on how to install DB2 and the LDAP service provided by the IBM Security Directory Server."),Object(r.b)("h2",null,"Install DB2"),Object(r.b)("h3",null,"Download the software archives"),Object(r.b)("p",null,"Download the following IBM DB2 v11.1 archives and fixpack in your working directory:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"IBM DB2 Advanced Workgroup Server Edition Restricted Use Activation V11.1 for Linux, UNIX and Windows Multilingual")," (CNB21ML)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"IBM DB2 Advanced Workgroup Server Edition Server Restricted Use V11.1 for Linux on AMD64 and Intel EM64T systems (x64) Multilingual")," (CNB8FML)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ibm.com/support/pages/download-db2-fix-packs-version-db2-linux-unix-and-windows"}),"IBM DB2 11.1.x Universal Fixpack"))),Object(r.b)("h3",null,"Install the base DB2 version"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install unzip if not present:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"yum install unzip\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download the DB2 response file ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/assets/automation/shared/db2dba.rsp"}),Object(r.b)("inlineCode",{parentName:"a"},"db2dba.rsp"))," and edit the file to provide your password in the ",Object(r.b)("inlineCode",{parentName:"p"},"<you-password>")," placeholders.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Expand the archive and start the install:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"tar xzvf DB2_AWSE_REST_Svr_11.1_Lnx_86-64.tar.gz\nunzip DB2_AWSE_Restricted_Activation_11.1.zip\n./server_awse_o/db2setup -r db2dba.rsp\n")),Object(r.b)("p",null,"You will see the following warnings, which you can ignore."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Summary of prerequisites that are not met on the current system: \nDBT3514W  The db2prereqcheck utility failed to find the following 32-bit library file: "/lib/libpam.so*". \nDBT3514W  The db2prereqcheck utility failed to find the following 32-bit library file: "libstdc++.so.6". \n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the license")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"/opt/ibm/db2/V11.1/adm/db2licm -a awse_o/db2/license/db2awse_o.lic\n")),Object(r.b)("h3",null,"Install the fixpack"),Object(r.b)("p",null,"For more information, see for example ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSBNJ7_1.4.3/db2/ttnpm_db2_FP1.html"}),"this page")," of the IBM Knowledge Center."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"## Expend the archive of the fixpack\ntar xvf v11.1.4fp4a_linuxx64_universal_fixpack.tar.gz\n## precheck before upgrade\ncd universal\n./db2prereqcheck -v 11.1.1.1 -i -s\n\n## list all db2 instances\n/opt/ibm/db2/V11.1/instance/db2ilist\ndb2inst1\n\n## Stop the instance db2inst1\nsu - db2inst1\ndb2 list application\ndb2 force applications all\ndb2 terminate\ndb2stop force\ndb2licd -end\nexit\n\nps -ef |grep db2fm\n/opt/ibm/db2/V11.1/bin/db2fmcu -d\n/opt/ibm/db2/V11.1/bin/db2fm -i db2inst1 -D\n\n/opt/ibm/db2/V11.1/instance/db2iset -i db2inst1 -all\nDB2_DEFERRED_PREPARE_SEMANTICS=YES\nDB2_COMPATIBILITY_VECTOR=ORA\nDB2COMM=TCPIP\nDB2AUTOSTART=YES\n\n/opt/ibm/db2/V11.1/instance/db2iauto -off db2inst1\n\nsu - db2inst1\nipclean\nexit\n\nsu - dasusr1\n/opt/ibm/db2/V11.1/das/bin/db2admin stop\nexit\n\n## Upgrade DB2\n## In case go to the fixpack universal directory\ncd /data/downloads/db2/fixpack11.1.1/universal\n./installFixPack -b /opt/ibm/db2/V11.1\n\n## Upgrade DB2 instance\n/opt/ibm/db2/V11.1/instance/db2iupdt db2inst1\n/opt/ibm/db2/V11.1/instance/db2iauto -on db2inst1\nsu - db2inst1\ndb2start\ndb2level\nexit\n\n#yum install libstdc++.so.6\n#yum install libstdc++.so.5\n#yum install compat-libstdc++-33\n")),Object(r.b)("h3",null,"Connection information"),Object(r.b)("p",null,"Upon install completion, you can test the install using the following connection information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"URL: ",Object(r.b)("inlineCode",{parentName:"li"},"<host>:50000")),Object(r.b)("li",{parentName:"ul"},"User: ",Object(r.b)("inlineCode",{parentName:"li"},"db2inst1")),Object(r.b)("li",{parentName:"ul"},"Password: ",Object(r.b)("inlineCode",{parentName:"li"},"<your-password>"))),Object(r.b)("h2",null,"Install LDAP"),Object(r.b)("h3",null,"Download the software archives"),Object(r.b)("p",null,"Download the following IBM Security Directory Server V6.4 archives and fixpack in your working directory:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"IBM Security Directory Server Premium Feature Activation Package v6.4 Multiplatform Multilingual eAssembly (CRV3IML)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"IBM Security Directory Server V6.4 Client-Server ISO without entitlement for Linux x86-64 Multilingual (CN487ML)"))),Object(r.b)("h3",null,"Mount the SDS ISO"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir /mnt/iso\nmount -t iso9660 -o loop /data/downloads/sds/sds64-linux-x86-64.iso /mnt/iso/\n")),Object(r.b)("h3",null,"Install SDS"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"yum install ksh\n\n## Setup ldap user and group\ngroupadd idsldap\nuseradd -g idsldap -d /home/idsldap -m -s /bin/ksh idsldap\npasswd idsldap\n## enter '<your-password>'\n\nusermod -a -G idsldap root\ngroups root\n\n## Skip db2 installation\nmkdir -p /opt/ibm/ldap/V6.4/install\ntouch /opt/ibm/ldap/V6.4/install/IBMLDAP_INSTALL_SKIPDB2REQ\n\n## Install gskit\ncd /mnt/iso/ibm_gskit\nrpm -Uhv gsk*linux.x86_64.rpm\n\n## Install sds rpms\ncd /mnt/iso/license\n./idsLicense\n## Enter 1 to accept the license agreement\n\ncd /mnt/iso/images\nrpm --force -ihv idsldap*rpm\n\ncd /data/downloads/sds\nunzip sds64-premium-feature-act-pkg.zip\ncd sdsV6.4/entitlement\nrpm --force -ihv idsldap-ent64-6.4.0-0.x86_64.rpm\n\n## Install ibm jdk\ncd /mnt/iso/ibm_jdk\ntar -xf 6.0.16.2-ISS-JAVA-LinuxX64-FP0002.tar -C /opt/ibm/ldap/V6.4/\n\n## Setup db2 path\nvi /opt/ibm/ldap/V6.4/etc/ldapdb.properties\ncurrentDB2InstallPath=/opt/ibm/db2/V11.1\ncurrentDB2Version=11.1.0.0\n\n## Create and configure instance\ncd /opt/ibm/ldap/V6.4/sbin\n./idsadduser -u dsinst1 -g grinst1 -w <your-password>\n## Enter 1 to continue\n\n## Create instance\n./idsicrt -I dsinst1 -p 389 -s 636 -e mysecretkey! -l /home/dsinst1 -G grinst1 -w <your-password>\n## Enter 1 to continue\n\n## Configure a database for a directory server instance.\n./idscfgdb -I dsinst1 -a dsinst1 -w <your-password> -t dsinst1 -l /home/dsinst1\n\n## Set the administration DN and administrative password for an instance\n./idsdnpw -I dsinst1 –u cn=root –p <your-password>\n\n## Add suffix\n./idscfgsuf -I dsinst1 -s o=IBM,c=US\n")),Object(r.b)("h3",null,"Operating the SDS Server"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'## Start the directory server\n./ibmslapd -I dsinst1\n\n## Stop the directory server\n./ibmslapd -I dsinst1 -k\n\n## Start or stop the administration server\n./ibmdiradm -I dsinst1\n\n## Stop the administration server\n./ibmdiradm -I dsinst1 -k\n\n## Verify the server\ncd /opt/ibm/ldap/V6.4/bin\n./ldapsearch -h ldap://169.47.178.137:389 -s base -b " " objectclass=* ibm-slapdisconfigurationmode\n')),Object(r.b)("h3",null,"Import LDAP users and groups"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install a tool such as ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://sourceforge.net/projects/jxplorer/files/jxplorer/version%203.3.1.2/jxplorer-3.3.1.2-windows-installer.exe/download"}),"JXplorer")," to browse your LDAP directory."),Object(r.b)("li",{parentName:"ul"},"Import the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/assets/automation/shared/cp4a.ldif"}),Object(r.b)("inlineCode",{parentName:"a"},"cp4a.ldif"))," LDAP Data Interchange Format file using this tool.")),Object(r.b)("h3",null,"Uninstall SDS"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"# Remove existing GSK\nrpm -qa | grep -i gsk\nrpm -e `rpm -qa | grep -i gsk`\n\n# Remove all the other rpm\nrpm -ev idsldap-srv64bit64-6.4.0-0.x86_64.rpm\nrpm -qa | grep -i idsldap\nrpm -ev `rpm -qa | grep -i idsldap`\n")),Object(r.b)("h3",null,"Connection information"),Object(r.b)("p",null,"Upon install completion, you can test the install using the following connection information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"URL: ",Object(r.b)("inlineCode",{parentName:"li"},"ldap://<host>:389")),Object(r.b)("li",{parentName:"ul"},"User: ",Object(r.b)("inlineCode",{parentName:"li"},"cn=root")),Object(r.b)("li",{parentName:"ul"},"Password: ",Object(r.b)("inlineCode",{parentName:"li"},"<your-password>"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-shared-services-index-mdx-d9445fd9cc1532e413b1.js.map