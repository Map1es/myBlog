(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{334:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),t("p",[s._v("作为一个只会用框架写页面的前端，突然意识到自己并不知道经常用的yarn npm命令安装各种包文件，以及打包文件是如何运行的；安装后，框架是如何找到这个文件；后来看到篇文章，讲的是关于"),t("code",[s._v("package.json")]),s._v("中的配置(在下文参考文章里)，才大致了解当我们创建了一个"),t("code",[s._v("Node.js")]),s._v("项目（"),t("code",[s._v("cli")]),s._v("也是基于"),t("code",[s._v("node")]),s._v("开发的），意味着创建了一个模块，这个模块的描述文件，被称为"),t("code",[s._v("package.json")]),s._v("，我们依靠着这个描述文件来找到我们安装的各种包文件以及我们自己配置的一些命令。所以让我们来了解一下"),t("code",[s._v("package.json")]),s._v("各种配置项是用来做什么的。")]),s._v(" "),t("h2",{attrs:{id:"二、bin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、bin","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、bin")]),s._v(" "),t("p",[t("code",[s._v("bin")]),s._v("是一个命令名和本地文件的映射。在包安装的时候，将会使用符号链接把这些文件链接到"),t("code",[s._v("prefix/bin")]),s._v("，如果是本地安装，会链接到"),t("code",[s._v("./node_modules/.bin/")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gynpm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./bin/index.js"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("要注意")]),s._v("：这个index.js文件的头部必须有这个"),t("code",[s._v("#!/usr/bin/env node")]),s._v("节点， 否则脚本将在没有节点可执行文件的情况下启动。")]),s._v(" "),t("p",[s._v("例子：\npackage.json")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mason"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.js"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keywords"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("index.js")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("#"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("env node\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cool'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("我们常用的"),t("code",[s._v("vue-cli")]),s._v("， "),t("code",[s._v("create-react-app")]),s._v("等都是通过"),t("code",[s._v("bin")]),s._v("属性将命令映射到了全局上。")]),s._v(" "),t("h2",{attrs:{id:"三、main"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、main","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、main")]),s._v(" "),t("p",[s._v("main很重要，它是我们项目的主要入口")]),s._v(" "),t("h2",{attrs:{id:"四、scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、scripts","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、scripts")]),s._v(" "),t("p",[t("code",[s._v("npm")]),s._v("允许在"),t("code",[s._v("package.json")]),s._v("文件里面，使用"),t("code",[s._v("scripts")]),s._v("字段定义脚本命令。")]),s._v(" "),t("p",[s._v("优点：项目的相关脚本，可以集中在一个地方。")]),s._v(" "),t("p",[t("code",[s._v("npm")]),s._v(" 脚本的原理非常简单。每当执行"),t("code",[s._v("npm run")]),s._v("（"),t("code",[s._v("yarn")]),s._v("就直接执行"),t("code",[s._v("yarn")]),s._v("），就会自动新建一个"),t("code",[s._v("Shell")]),s._v("，在这个 "),t("code",[s._v("Shell")]),s._v(" 里面执行指定的脚本命令。因此，只要是 "),t("code",[s._v("Shell")]),s._v("（一般是 "),t("code",[s._v("Bash")]),s._v("）可以运行的命令，就可以写在 "),t("code",[s._v("npm")]),s._v(" 脚本里面。")]),s._v(" "),t("p",[s._v("比较特别的是，"),t("code",[s._v("npm run")]),s._v("新建的这个 "),t("code",[s._v("Shell")]),s._v("，会将当前目录的"),t("code",[s._v("node_modules/.bin")]),s._v("子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。")]),s._v(" "),t("p",[s._v("这意味着，当前目录的"),t("code",[s._v("node_modules/.bin")]),s._v("子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 "),t("code",[s._v("Mocha")]),s._v("，只要直接写"),t("code",[s._v("mocha test")]),s._v("就可以了。")]),s._v(" "),t("h3",{attrs:{id:"_4-1-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1 常用命令")]),s._v(" "),t("p",[s._v("脚本传参符号：--")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --mode=development --open --iframe=true "')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("脚本执行顺序")]),s._v(" "),t("p",[s._v("并行执行（即同时的平行执行），可以使用&符号")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("# npm run script1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" npm run script2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("# npm run script1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" npm run script2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("拿到package.json的变量")]),s._v(" "),t("p",[s._v("npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。\n首先，通过npm_package_前缀，npm 脚本可以拿到"),t("code",[s._v("package.json")]),s._v("里面的字段。比如，下面是一个"),t("code",[s._v("package.json")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"view"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node view.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("我们可以在自己的js中这样：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.2.5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"五、dependencies和devdependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、dependencies和devdependencies","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、dependencies和devDependencies")]),s._v(" "),t("p",[s._v("这两个主要就是存放我们项目依赖的库的地方了， "),t("code",[s._v("devDependencies")]),s._v("主要是存放用于本地开发的， "),t("code",[s._v("dependencies")]),s._v("会在我们开发的时候带到线上。\n通过"),t("code",[s._v("npm i xxx -S")]),s._v("或"),t("code",[s._v("yarn xxx")]),s._v("会放在"),t("code",[s._v("dependencies")]),s._v("， "),t("code",[s._v("npm i xxx -D")]),s._v("或"),t("code",[s._v("yarn xxx --dev")]),s._v("会放在"),t("code",[s._v("devDependencies")]),s._v("。所以我们在装包的时候一定要考虑这个包在线上是否用的到， 不要全都放到"),t("code",[s._v("dependencies")]),s._v("中，增加我们打包的体积和效率。")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/c2yV1fn89Sit2CaSwuPbYw",target:"_blank",rel:"noopener noreferrer"}},[t("em",[s._v("一文看清自己是不是真的掌握Package.json")]),s._v(" --Vue中文社区"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);