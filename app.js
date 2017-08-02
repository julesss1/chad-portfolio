!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},a={},r={},n={}.hasOwnProperty,l=/^\.\.?(\/|$)/,i=function(e,t){for(var a,r=[],n=(l.test(t)?e+"/"+t:t).split("/"),i=0,o=n.length;i<o;i++)a=n[i],".."===a?r.pop():"."!==a&&""!==a&&r.push(a);return r.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},m=function(t){return function(a){var r=i(o(t),a);return e.require(r,t)}},c=function(e,t){var r=g&&g.createHot(e),n={id:e,exports:{},hot:r};return a[e]=n,t(n.exports,m(e),n),n.exports},s=function(e){return r[e]?s(r[e]):e},u=function(e,t){return s(i(o(e),t))},f=function(e,r){null==r&&(r="/");var l=s(e);if(n.call(a,l))return a[l].exports;if(n.call(t,l))return c(l,t[l]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};f.alias=function(e,t){r[t]=e};var d=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,_=function(e){if(d.test(e)){var t=e.replace(d,"");n.call(r,t)&&r[t].replace(d,"")!==t+"/index"||(r[t]=e)}if(p.test(e)){var a=e.replace(p,"");n.call(r,a)||(r[a]=e)}};f.register=f.define=function(e,r){if(e&&"object"==typeof e)for(var l in e)n.call(e,l)&&f.register(l,e[l]);else t[e]=r,delete a[e],_(e)},f.list=function(){var e=[];for(var a in t)n.call(t,a)&&e.push(a);return e};var g=e._hmr&&new e._hmr(u,f,t,a);f._cache=a,f.hmr=g&&g.wrap,f.brunch=!0,e.require=f}}(),function(){var e;"undefined"==typeof window?this:window;require.register("app.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),m=t("react"),c=r(m),s=t("react-dom"),u=r(s),f=t("react-transition-group/CSSTransitionGroup"),d=(r(f),t("react-router-dom")),p=t("./src/Framework/ReactRoutes/Home"),_=r(p),g=t("./src/Framework/ReactRoutes/About"),E=r(g),h=t("./src/Framework/ReactRoutes/Contact"),v=r(h),y=t("./src/Framework/ReactRoutes/Home/project.js"),b=r(y),N=t("./src/Framework/Components/Navigation"),j=r(N),w=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement(d.BrowserRouter,null,c["default"].createElement("div",{className:"page"},c["default"].createElement(d.Link,{to:""},c["default"].createElement("div",{className:"logo"},"logo")),c["default"].createElement(j["default"],null),c["default"].createElement(d.Route,{key:"home",exact:!0,path:"/",component:_["default"]}),c["default"].createElement(d.Route,{key:"about",exact:!0,path:"/About",component:E["default"]}),c["default"].createElement(d.Route,{key:"contact",exact:!0,path:"/Contact",component:v["default"]}),c["default"].createElement(d.Route,{key:"project",exact:!0,path:"/project/:id",component:b["default"]})))}}]),t}(m.Component);u["default"].render(c["default"].createElement(w,null),document.getElementById("root"))}),require.register("src/Framework/Components/Hero/hero.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(){return i["default"].createElement("div",{className:"hero"},i["default"].createElement("img",{className:"hero__image",src:"http://unsplash.it/2000/2000?image=902"}),i["default"].createElement("h1",{className:"hero__title"},"Hero title goes here"))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n;var l=t("react"),i=r(l)}),require.register("src/Framework/Components/Image-Gallery/imagegallery.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){return l["default"].createElement("div",{className:"image-gallery"},l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})),l["default"].createElement("div",{className:"image-gallery__item"},l["default"].createElement("img",{className:"minimal-info__image",src:"http://unsplash.it/800/800?image=777"})))};var n=t("react"),l=r(n)}),require.register("src/Framework/Components/Navigation/index.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),m=t("react"),c=r(m),s=t("react-router-dom"),u=t("deepcopy"),f=r(u),d=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.toggleActive=function(e){var t=(0,f["default"])(a.state);t.active=e===!0||e===!1?e:!a.state.active,t.menuClasses=["navigation__menu",t.active?"navigation__menu--active":""],a.setState(t)},a.state={active:!1,menuClasses:[]},a.toggleActive=a.toggleActive.bind(a),a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){this.toggleActive(!1)}},{key:"render",value:function(){return c["default"].createElement("header",{className:"navigation"},c["default"].createElement("div",{className:"navigation__hamburger",onClick:this.toggleActive},c["default"].createElement("div",{className:"hamburger"},c["default"].createElement("div",{className:"hamburger__bar"}))),c["default"].createElement("div",{className:this.state.menuClasses.join(" ")},c["default"].createElement("ul",{className:"menu"},c["default"].createElement("li",{className:"menu__item"},c["default"].createElement(s.Link,{className:"menu__link",to:"/"},"Projects")),c["default"].createElement("li",{className:"menu__item"},c["default"].createElement(s.Link,{className:"menu__link",to:"/about"},"About")),c["default"].createElement("li",{className:"menu__item"},c["default"].createElement(s.Link,{className:"menu__link",to:"/contact"},"Contact")))))}}]),t}(m.Component);e["default"]=d}),require.register("src/Framework/ReactRoutes/About/index.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var n=t("react"),l=r(n),i=t("react-transition-group/CSSTransitionGroup"),o=r(i),m=function(){return l["default"].createElement("div",null,l["default"].createElement(o["default"],{transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300},l["default"].createElement("div",null,"ABout Page")))};e["default"]=m}),require.register("src/Framework/ReactRoutes/Contact/index.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var n=t("react"),l=r(n),i=t("react-transition-group/CSSTransitionGroup"),o=r(i),m=function(){return l["default"].createElement("div",null,l["default"].createElement(o["default"],{transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300},l["default"].createElement("div",null,"Contact Page")))};e["default"]=m}),require.register("src/Framework/ReactRoutes/Home/index.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),m=t("react"),c=r(m),s=t("react-transition-group/CSSTransitionGroup"),u=r(s),f=t("react-router-dom"),d=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={work:[{title:"Barrio Viejo",description:"The best food places in Barcelona were in Borne",client:"Kapacucca",image:"https://8kueag.dm2301.livefilestore.com/y4mHUoTDVS4H9kf3kkbq0x13vqmuGxH1v_C5fqx4LfUAD_1ZWKgupMMd5TNHEbj7OhjcimM263tcPFbmjyViXi5NZqKdSwSAI4507RdawYVbJ99FfjTDY1az0UOMnLCXvQzWWkE9hBWYubmJiDKkko9l6JLe_hf02xZ8dLVgx_18CJ8vbNGlJAQCYt5TY3gEOBeHJiJHeJJbtzYO-N9j_b-2Q?width=1024&height=683&cropmode=none"},{title:"The End of Year Convention",description:"A little mini description describing the project",client:"Client name",image:"https://kcqzgq.dm2301.livefilestore.com/y4m8AT1Mc-IHtm5iUVPHMcChcfn0RgeIdj3JLAUEfrkK8wLYY3dr105XbM309D06MmLJUyj2HGHtDeqTcja8wo7LhA77JxLfSyjzGpz-jpuvcAjag-itw0b7F6fsaM1B3gjSmkJt0vbwYK4KyFrYDPWcrzV7n_uJg-0Kjy2gRqe1RHMduAuVrfh4KLeMX9q0byokxb-wZ4ibsHkKuOrMdMk4A?width=1024&height=684&cropmode=none"},{title:"Work Item",description:"A little mini description describing the project",client:"Client name",image:"https://6v6pmg.dm2301.livefilestore.com/y4mto6Pt5AseMQjB3H8S6HzSNeFJMg1URIutbUnay5dvsGZT4LP2as8zRdi-qQUTtrHaT9GV7v1-nismiT6-5Gf5aREFoTO4-7McFG3kMUJUPMh3-bXwPArEk5n73MabmMJiekQG7IFe3tXGzcPfu15vgLBVtfkBeVvEEQmpK27_S4T6AKI1rtw7Gd9gRBVhQkr0AXXJhg_RxIxQs6e43PMUw?width=4576&height=3056&cropmode=none"}]},a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement(u["default"],{transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300},c["default"].createElement("div",{className:"projects"},this.state.work.map(function(e,t){return c["default"].createElement("div",{key:t,className:"projects__item"},c["default"].createElement("div",{className:"project"},c["default"].createElement("img",{className:"project__image",src:e.image}),c["default"].createElement("h2",{className:"project__title"},e.title),c["default"].createElement("p",{className:"project__blurb"},e.description," ",t),c["default"].createElement("span",{className:"project__subtitle"},e.client),c["default"].createElement(f.Link,{to:"/project/"+t,className:"project__link"})))}))))}}]),t}(m.Component);e["default"]=d}),require.register("src/Framework/ReactRoutes/Home/project.js",function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var n=t("react"),l=r(n),i=t("../../Components/Hero/hero.js"),o=r(i),m=t("../../Components/Image-Gallery/imagegallery.js"),c=r(m),s=function(){return l["default"].createElement("div",null,l["default"].createElement(o["default"],null),l["default"].createElement("div",{className:"prj-summary"},l["default"].createElement("div",{className:"prj-summary__lead"},l["default"].createElement("span",{className:"prj-summary__lead-text"},"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur")),l["default"].createElement("ul",{className:"prj-summary__meta"},l["default"].createElement("li",{className:"prj-summary__meta-item"},l["default"].createElement("h2",{className:"prj-summary__meta-title"},"Awards & Titles"),l["default"].createElement("p",{className:"prj-summary__meta-text"},"ABC, EFG, LMNOP")),l["default"].createElement("li",{className:"prj-summary__meta-item"},l["default"].createElement("h2",{className:"prj-summary__meta-title"},"Shoutouts"),l["default"].createElement("p",{className:"prj-summary__meta-text"},"Tom, John and Luke")),l["default"].createElement("li",{className:"prj-summary__meta-item"},l["default"].createElement("h2",{className:"prj-summary__meta-title"},"Visit Client"),l["default"].createElement("p",{className:"prj-summary__meta-text"},"www.abc.com")))),l["default"].createElement("div",{className:"prj-minimal-info"},l["default"].createElement("div",{className:"prj-minimal-info__text"},l["default"].createElement("div",{className:"prj-minimal-info__text-title"},"Contextual"),l["default"].createElement("div",{className:"prj-minimal-info__text-content"},"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur")),l["default"].createElement("div",{className:"prj-minimal-info__main-image-wrapper"},l["default"].createElement("img",{className:"prj-minimal-info__image",src:"http://unsplash.it/800/800?image=937"})),l["default"].createElement("div",{className:"prj-minimal-info__small-image-wrapper"},l["default"].createElement("img",{className:"prj-minimal-info__image",src:"http://unsplash.it/800/800?image=237"}))),l["default"].createElement("div",{className:"prj-typography"},l["default"].createElement("div",{className:"prj-typography__item"},l["default"].createElement("h3",{className:"prj-typography__item-header"},"Heading"),l["default"].createElement("span",{className:"prj-typography__item-sub-header"},"Roboto"),l["default"].createElement("div",{className:"prj-typography__item-example"},"Image goes here")),l["default"].createElement("div",{className:"prj-typography__item"},l["default"].createElement("h3",{className:"prj-typography__item-header"},"Heading"),l["default"].createElement("span",{className:"prj-typography__item-sub-header"},"Roboto"),l["default"].createElement("div",{className:"prj-typography__item-example"},"Image goes here")),l["default"].createElement("div",{className:"prj-typography__item"},l["default"].createElement("h3",{className:"prj-typography__item-header"},"Heading"),l["default"].createElement("span",{className:"prj-typography__item-sub-header"},"Roboto"),l["default"].createElement("div",{className:"prj-typography__item-example"},"Image goes here"))),l["default"].createElement("div",{className:"palette-section"},l["default"].createElement("div",{className:"palette-section__blurb"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),l["default"].createElement("div",{className:"palette-section__color-board"},l["default"].createElement("ul",{className:"color-board"},l["default"].createElement("li",{className:"color-board__item"},l["default"].createElement("span",{className:"color-board__item-name"},"Super green"),l["default"].createElement("span",{className:"color-board__item-color"},"#123131")),l["default"].createElement("li",{className:"color-board__item"},l["default"].createElement("span",{className:"color-board__item-name"},"Super green"),l["default"].createElement("span",{className:"color-board__item-color"},"#123131")),l["default"].createElement("li",{className:"color-board__item"},l["default"].createElement("span",{className:"color-board__item-name"},"Super green"),l["default"].createElement("span",{className:"color-board__item-color"},"#123131")),l["default"].createElement("li",{className:"color-board__item"},l["default"].createElement("span",{className:"color-board__item-name"},"Super green"),l["default"].createElement("span",{className:"color-board__item-color"},"#123131")),l["default"].createElement("li",{className:"color-board__item"},l["default"].createElement("span",{className:"color-board__item-name"},"Super green"),l["default"].createElement("span",{className:"color-board__item-color"},"#123131")),l["default"].createElement("li",{className:"color-board__item"},l["default"].createElement("span",{className:"color-board__item-name"},"Super green"),l["default"].createElement("span",{className:"color-board__item-color"},"#123131"))))),l["default"].createElement(o["default"],null),l["default"].createElement("div",{className:"prj-minimal-info"},l["default"].createElement("div",{className:"prj-minimal-info__text"},"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"),l["default"].createElement("div",{className:"prj-minimal-info__main-image-wrapper"},l["default"].createElement("img",{className:"prj-minimal-info__image",src:"http://unsplash.it/800/800?image=937"})),l["default"].createElement("div",{className:"prj-minimal-info__small-image-wrapper"},l["default"].createElement("img",{className:"prj-minimal-info__image",src:"http://unsplash.it/800/800?image=937"}))),l["default"].createElement(c["default"],null),l["default"].createElement(o["default"],null))};e["default"]=s}),require.alias("buffer/index.js","buffer"),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,a){})}(),require("___globals___");