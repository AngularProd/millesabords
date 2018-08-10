webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preloader{\r\n  position: fixed;\r\n  margin: 0 auto;\r\n}\r\n.preloader:before{\r\n    content: '';\r\n    display: block;\r\n    padding-top: 100%;\r\n}\r\n.circular {\r\n  -webkit-animation: rotate 2s linear infinite;\r\n          animation: rotate 2s linear infinite;\r\n  height: 50px;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  width: 50px;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.path {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n  stroke-linecap: round;\r\n}\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@-webkit-keyframes color {\r\n  100%,\r\n  0% {\r\n    stroke: #d62d20;\r\n  }\r\n  40% {\r\n    stroke: #0057e7;\r\n  }\r\n  66% {\r\n    stroke: #008744;\r\n  }\r\n  80%,\r\n  90% {\r\n    stroke: #ffa700;\r\n  }\r\n}\r\n@keyframes color {\r\n  100%,\r\n  0% {\r\n    stroke: #d62d20;\r\n  }\r\n  40% {\r\n    stroke: #0057e7;\r\n  }\r\n  66% {\r\n    stroke: #008744;\r\n  }\r\n  80%,\r\n  90% {\r\n    stroke: #ffa700;\r\n  }\r\n}\r\nul.paginate-ul {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\nli.paginate-li {\r\n    list-style: none;\r\n    padding: 5px 9px;\r\n    background: #ffffff;\r\n    margin: 0 5px;\r\n    cursor: pointer;\r\n    -ms-flex-preferred-size: 5%;\r\n        flex-basis: 5%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 0 2px 1px #29425a;\r\n            box-shadow: 0 0 2px 1px #29425a;\r\n    border-radius: 5px;\r\n}\r\nli.paginate-li.current {\r\n    background: #f07f0a;\r\n}\r\n.bd-booticon{display:block;width:9rem;height:9rem;font-size:6.5rem;line-height:9rem;color:#fff;text-align:center;cursor:default;background-color:#563d7c;border-radius:15%}\r\n.bd-booticon.inverse{color:#563d7c;background-color:#fff}\r\n.bd-booticon.outline{background-color:transparent;border:1px solid #cdbfe3}\r\n.bd-navbar .navbar-nav .nav-link{color:#8e869d}\r\n.bd-navbar .navbar-nav .nav-link.active,.bd-navbar .navbar-nav .nav-link:focus,.bd-navbar .navbar-nav .nav-link:hover{color:#292b2c;background-color:transparent}\r\n.bd-navbar .navbar-nav .nav-link.active{font-weight:500;color:#040404}\r\n.bd-navbar .dropdown-menu{font-size:inherit}\r\n.bd-masthead{position:relative;padding:3rem 15px 2rem;color:#cdbfe3;text-align:center;background-image:linear-gradient(135deg,#271b38,#563d7c,#7952b3)}\r\n.bd-masthead .bd-booticon{margin:0 auto 2rem;color:#cdbfe3;border-color:#cdbfe3}\r\n.bd-masthead h1{font-weight:300;line-height:1}\r\n.bd-masthead .lead{margin-right:auto;margin-bottom:2rem;margin-left:auto;font-size:1.25rem;color:#fff}\r\n.bd-masthead .version{margin-top:-1rem;margin-bottom:2rem}\r\n.bd-masthead .btn{width:100%;padding:1rem 2rem;font-size:1.25rem;font-weight:500;color:#ffe484;border-color:#ffe484}\r\n.bd-masthead .btn:hover{color:#2a2730;background-color:#ffe484;border-color:#ffe484}\r\n.bd-masthead .carbonad{margin-bottom:-2rem!important}\r\n@media (min-width:576px){.bd-masthead{padding-top:8rem;padding-bottom:2rem}.bd-masthead .btn{width:auto}.bd-masthead .carbonad{margin-bottom:0!important}}\r\n@media (min-width:768px){.bd-masthead{padding-bottom:4rem}.bd-masthead .bd-header{margin-bottom:4rem}.bd-masthead h1{font-size:4rem}.bd-masthead .lead{font-size:1.5rem}.bd-masthead .carbonad{margin-top:3rem!important}}\r\n@media (min-width:992px){.bd-masthead .lead{width:85%;font-size:2rem}}\r\n.bd-featurette{padding-top:3rem;padding-bottom:3rem;font-size:1rem;line-height:1.5;color:#555;text-align:center;background-color:#fff;border-top:1px solid #eee}\r\n.bd-featurette .highlight{text-align:left}\r\n.bd-featurette .lead{margin-right:auto;margin-bottom:2rem;margin-left:auto;font-size:1rem;text-align:center}\r\n@media (min-width:576px){.bd-featurette{text-align:left}}\r\n@media (min-width:768px){.bd-featurette .col-sm-6:first-child{padding-right:45px}.bd-featurette .col-sm-6:last-child{padding-left:45px}}\r\n.bd-featurette-title{margin-bottom:.5rem;font-size:2rem;font-weight:400;color:#333;text-align:center}\r\n.half-rule{width:6rem;margin:2.5rem auto}\r\n@media (min-width:576px){.half-rule{margin-right:0;margin-left:0}}\r\n.bd-featurette h4{margin-top:1rem;margin-bottom:.5rem;font-weight:400;color:#333}\r\n.bd-featurette-img{display:block;margin-bottom:1.25rem;color:#333}\r\n.bd-featurette-img:hover{color:#0275d8;text-decoration:none}\r\n.bd-featurette-img img{display:block;margin-bottom:1rem}\r\n@media (min-width:480px){.bd-featurette .img-fluid{margin-top:2rem}}\r\n@media (min-width:768px){.bd-featurette{padding-top:6rem;padding-bottom:6rem}.bd-featurette-title{font-size:2.5rem}.bd-featurette-title+.lead{font-size:1.5rem}.bd-featurette .lead{max-width:80%}.bd-featurette .img-fluid{margin-top:0}}\r\n.bd-featured-sites{margin-right:-1px;margin-left:-1px}\r\n.bd-featured-sites .col-6{padding:1px}\r\n.bd-featured-sites .img-fluid{margin-top:0}\r\n@media (min-width:768px){.bd-featured-sites .col-sm-3:first-child img{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.bd-featured-sites .col-sm-3:last-child img{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}}\r\n#carbonads{display:block;padding:15px 15px 15px 160px;margin:50px -15px 0;overflow:hidden;font-size:13px;line-height:1.5;text-align:left;border:solid #866ab3;border-width:1px 0 0}\r\n#carbonads a{color:#fff;text-decoration:none}\r\n@media (min-width:576px){#carbonads{max-width:330px;margin:50px auto 0;border-width:1px;border-radius:4px}}\r\n@media (min-width:992px){#carbonads{position:absolute;top:0;right:15px;margin-top:0}.bd-masthead #carbonads{position:static}}\r\n.carbon-img{float:left;margin-left:-145px}\r\n.carbon-poweredby{display:block;color:#cdbfe3!important}\r\n.bd-content>table{display:block;width:100%;max-width:100%;margin-bottom:1rem;overflow-y:auto}\r\n.bd-content>table>tbody>tr>td,.bd-content>table>tbody>tr>th,.bd-content>table>tfoot>tr>td,.bd-content>table>tfoot>tr>th,.bd-content>table>thead>tr>td,.bd-content>table>thead>tr>th{padding:.75rem;vertical-align:top;border:1px solid #eceeef}\r\n.bd-content>table>tbody>tr>td>p:last-child,.bd-content>table>tbody>tr>th>p:last-child,.bd-content>table>tfoot>tr>td>p:last-child,.bd-content>table>tfoot>tr>th>p:last-child,.bd-content>table>thead>tr>td>p:last-child,.bd-content>table>thead>tr>th>p:last-child{margin-bottom:0}\r\n.bd-content>table td:first-child>code{white-space:nowrap}\r\n.bd-content>h2:not(:first-child){margin-top:3rem}\r\n.bd-content>h3{margin-top:1.5rem}\r\n.bd-content>ol li,.bd-content>ul li{margin-bottom:.25rem}\r\n@media (min-width:576px){.bd-title{font-size:3rem}.bd-title+p{font-size:1.25rem;font-weight:300}}\r\n#markdown-toc>li:first-child{display:none}\r\n#markdown-toc ul{padding-left:2rem;margin-top:.25rem;margin-bottom:.25rem}\r\n.bd-pageheader{padding:2rem 15px;margin-bottom:1.5rem;color:#cdbfe3;text-align:center;background-color:#563d7c}\r\n.bd-pageheader .container{position:relative}\r\n.bd-pageheader h1{font-size:3rem;font-weight:400;color:#fff}\r\n.bd-pageheader p{margin-bottom:0;font-size:1.25rem;font-weight:300}\r\n@media (min-width:576px){.bd-pageheader{padding-top:4rem;padding-bottom:4rem;margin-bottom:3rem;text-align:left}.bd-pageheader .carbonad{margin:2rem 0 0!important}}\r\n@media (min-width:768px){.bd-pageheader h1{font-size:4rem}.bd-pageheader p{font-size:1.5rem}}\r\n@media (min-width:992px){.bd-pageheader h1,.bd-pageheader p{margin-right:380px}.bd-pageheader .carbonad{position:absolute;top:0;right:.75rem;margin:0!important}}\r\n#skippy{display:block;padding:1em;color:#fff;background-color:#563d7c;outline:0}\r\n#skippy .skiplink-text{padding:.5em;outline:1px dotted}\r\n@media (min-width:768px){.bd-sidebar{padding-left:1rem}}\r\n.bd-search{position:relative;margin-bottom:1.5rem}\r\n.bd-search .form-control{height:2.45rem;padding-top:.4rem;padding-bottom:.4rem;background-color:#fafafa}\r\n.bd-search .form-control:focus{background-color:#fff}\r\n.bd-search-results{right:0;display:block;padding:0;overflow:hidden;font-size:.9rem}\r\n.bd-search-results:empty{display:none}\r\n.bd-search-results .dropdown-item{padding-right:.75rem;padding-left:.75rem}\r\n.bd-search-results .dropdown-item:first-child{margin-top:.25rem}\r\n.bd-search-results .dropdown-item:last-child{margin-bottom:.25rem}\r\n.bd-search-results .no-results{padding:.75rem 1rem;color:#7a7a7a;text-align:center;white-space:normal}\r\n.bd-sidenav{display:none}\r\n.bd-toc-link{display:block;padding:.25rem .75rem;color:#464a4c}\r\n.bd-toc-link:focus,.bd-toc-link:hover{color:#0275d8;text-decoration:none}\r\n.active>.bd-toc-link{font-weight:500;color:#292b2c}\r\n.active>.bd-sidenav{display:block}\r\n.bd-toc-item.active{margin-top:1rem;margin-bottom:1rem}\r\n.bd-toc-item:first-child{margin-top:0}\r\n.bd-toc-item:last-child{margin-bottom:2rem}\r\n.bd-sidebar .nav>li>a{display:block;padding:.25rem .75rem;font-size:90%;color:#99979c}\r\n.bd-sidebar .nav>li>a:focus,.bd-sidebar .nav>li>a:hover{color:#0275d8;text-decoration:none;background-color:transparent}\r\n.bd-sidebar .nav>.active:focus>a,.bd-sidebar .nav>.active:hover>a,.bd-sidebar .nav>.active>a{font-weight:500;color:#292b2c;background-color:transparent}\r\n.bd-footer{padding:4rem 0;margin-top:4rem;font-size:85%;text-align:center;background-color:#f7f7f7}\r\n.bd-footer a{font-weight:500;color:#464a4c}\r\n.bd-footer a:hover{color:#0275d8}\r\n.bd-footer p{margin-bottom:0}\r\n@media (min-width:576px){.bd-footer{text-align:left}}\r\n.bd-footer-links{padding-left:0;margin-bottom:1rem}\r\n.bd-footer-links li{display:inline-block}\r\n.bd-footer-links li+li{margin-left:1rem}\r\n.bd-example-row .row+.row{margin-top:1rem}\r\n.bd-example-row .row>.col,.bd-example-row .row>[class^=col-]{padding-top:.75rem;padding-bottom:.75rem;background-color:rgba(86,61,124,.15);border:1px solid rgba(86,61,124,.2)}\r\n.bd-example-row .flex-items-bottom,.bd-example-row .flex-items-middle,.bd-example-row .flex-items-top{min-height:6rem;background-color:rgba(255,0,0,.1)}\r\n.bd-example-row-flex-cols .row{min-height:10rem;background-color:rgba(255,0,0,.1)}\r\n.bd-highlight{background-color:rgba(86,61,124,.15);border:1px solid rgba(86,61,124,.15)}\r\n.bd-example-container{min-width:16rem;max-width:25rem;margin-right:auto;margin-left:auto}\r\n.bd-example-container-header{height:3rem;margin-bottom:.5rem;background-color:#daeeff;border-radius:.25rem}\r\n.bd-example-container-sidebar{float:right;width:4rem;height:8rem;background-color:#fae3c4;border-radius:.25rem}\r\n.bd-example-container-body{height:8rem;margin-right:4.5rem;background-color:#957bbe;border-radius:.25rem}\r\n.bd-example-container-fluid{max-width:none}\r\n.bd-example{position:relative;padding:1rem;margin:1rem -1rem;border:solid #f7f7f9;border-width:.2rem 0 0}\r\n.bd-example::after{display:block;content:\"\";clear:both}\r\n@media (min-width:576px){.bd-example{padding:1.5rem;margin-right:0;margin-bottom:0;margin-left:0;border-width:.2rem}}\r\n.bd-example+.clipboard+.highlight,.bd-example+.highlight{margin-top:0}\r\n.bd-example+p{margin-top:2rem}\r\n.bd-example .pos-f-t{position:relative;margin:-1rem}\r\n@media (min-width:576px){.bd-example .pos-f-t{margin:-1.5rem}}\r\n.bd-example>.form-control+.form-control{margin-top:.5rem}\r\n.bd-example>.alert+.alert,.bd-example>.nav+.nav,.bd-example>.navbar+.navbar,.bd-example>.progress+.btn,.bd-example>.progress+.progress{margin-top:1rem}\r\n.bd-example>.dropdown-menu:first-child{position:static;display:block}\r\n.bd-example>.form-group:last-child{margin-bottom:0}\r\n.bd-example>.close{float:none}\r\n.bd-example-type .table .type-info{color:#999;vertical-align:middle}\r\n.bd-example-type .table td{padding:1rem 0;border-color:#eee}\r\n.bd-example-type .table tr:first-child td{border-top:0}\r\n.bd-example-type h1,.bd-example-type h2,.bd-example-type h3,.bd-example-type h4,.bd-example-type h5,.bd-example-type h6{margin:0}\r\n.bd-example-bg-classes p{padding:1rem}\r\n.bd-example>img+img{margin-left:.5rem}\r\n.bd-example>.btn-group{margin-top:.25rem;margin-bottom:.25rem}\r\n.bd-example>.btn-toolbar+.btn-toolbar{margin-top:.5rem}\r\n.bd-example-control-sizing input[type=text]+input[type=text],.bd-example-control-sizing select{margin-top:.5rem}\r\n.bd-example-form .input-group{margin-bottom:.5rem}\r\n.bd-example>textarea.form-control{resize:vertical}\r\n.bd-example>.list-group{max-width:400px}\r\n.bd-example .fixed-top,.bd-example .sticky-top{position:static;margin:-1rem -1rem 1rem}\r\n.bd-example .fixed-bottom{position:static;margin:1rem -1rem -1rem}\r\n@media (min-width:576px){.bd-example .fixed-top,.bd-example .sticky-top{margin:-1.5rem -1.5rem 1rem}.bd-example .fixed-bottom{margin:1rem -1.5rem -1.5rem}}\r\n.bd-example .pagination{margin-top:.5rem;margin-bottom:.5rem}\r\n.bd-example-modal{background-color:#fafafa}\r\n.bd-example-modal .modal{position:relative;top:auto;right:auto;bottom:auto;left:auto;z-index:1;display:block}\r\n.bd-example-modal .modal-dialog{left:auto;margin-right:auto;margin-left:auto}\r\n.bd-example-tabs .nav-tabs{margin-bottom:1rem}\r\n.bd-example-tooltips{text-align:center}\r\n.bd-example-tooltips>.btn{margin-top:.25rem;margin-bottom:.25rem}\r\n.bd-example-popover-static{padding-bottom:1.5rem;background-color:#f9f9f9}\r\n.bd-example-popover-static .popover{position:relative;display:block;float:left;width:260px;margin:1.25rem}\r\n.tooltip-demo a{white-space:nowrap}\r\n.bd-example-tooltip-static .tooltip{position:relative;display:inline-block;margin:10px 20px;opacity:1}\r\n.scrollspy-example{position:relative;height:200px;margin-top:.5rem;overflow:auto}\r\n.bd-example>.bg-danger:not(.navbar),.bd-example>.bg-faded:not(.navbar),.bd-example>.bg-info:not(.navbar),.bd-example>.bg-inverse:not(.navbar),.bd-example>.bg-primary:not(.navbar),.bd-example>.bg-success:not(.navbar),.bd-example>.bg-warning:not(.navbar){padding:.5rem;margin-top:.5rem;margin-bottom:.5rem}\r\n.bd-example-border-utils [class^=border-]{display:inline-block;width:6rem;height:6rem;margin:.25rem;background-color:#f5f5f5;border:1px solid}\r\n.highlight{padding:1rem;margin:1rem -15px;background-color:#f7f7f9;-ms-overflow-style:-ms-autohiding-scrollbar}\r\n@media (min-width:576px){.highlight{padding:1.5rem;margin-right:0;margin-left:0}}\r\n.highlight pre{padding:0;margin-top:0;margin-bottom:0;background-color:transparent;border:0}\r\n.highlight pre code{font-size:inherit;color:#292b2c}\r\n.table-responsive .highlight pre{white-space:normal}\r\n.bd-table th small,.responsive-utilities th small{display:block;font-weight:400;color:#999}\r\n.responsive-utilities tbody th{font-weight:400}\r\n.responsive-utilities td{text-align:center}\r\n.responsive-utilities .is-visible{color:#468847;background-color:#dff0d8!important}\r\n.responsive-utilities .is-hidden{color:#ccc;background-color:#f9f9f9!important}\r\n.responsive-utilities-test{margin-top:.25rem}\r\n.responsive-utilities-test .col-6{margin-top:.5rem;margin-bottom:.5rem}\r\n.responsive-utilities-test span{display:block;padding:1rem .5rem;font-size:1rem;font-weight:700;line-height:1.1;text-align:center;border-radius:.25rem}\r\n.hidden-on .col-6>.not-visible,.visible-on .col-6>.not-visible{color:#999;border:1px solid #ddd}\r\n.hidden-on .col-6 .visible,.visible-on .col-6 .visible{color:#468847;background-color:#dff0d8;border:1px solid #d6e9c6}\r\n@media (max-width:575px){.hidden-xs-only{display:none!important}}\r\n@media (min-width:576px) and (max-width:767px){.hidden-sm-only{display:none!important}}\r\n@media (min-width:768px) and (max-width:991px){.hidden-md-only{display:none!important}}\r\n@media (min-width:992px) and (max-width:1199px){.hidden-lg-only{display:none!important}}\r\n@media (min-width:1200px){.hidden-xl-only{display:none!important}}\r\n.btn-bs{font-weight:500;color:#7952b3;border-color:#7952b3}\r\n.btn-bs:active,.btn-bs:focus,.btn-bs:hover{color:#fff;background-color:#7952b3;border-color:#7952b3}\r\n.bd-callout{padding:1.25rem;margin-top:1.25rem;margin-bottom:1.25rem;border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem}\r\n.bd-callout h4{margin-top:0;margin-bottom:.25rem}\r\n.bd-callout p:last-child{margin-bottom:0}\r\n.bd-callout code{border-radius:.25rem}\r\n.bd-callout+.bd-callout{margin-top:-.25rem}\r\n.bd-callout-info{border-left-color:#5bc0de}\r\n.bd-callout-info h4{color:#5bc0de}\r\n.bd-callout-warning{border-left-color:#f0ad4e}\r\n.bd-callout-warning h4{color:#f0ad4e}\r\n.bd-callout-danger{border-left-color:#d9534f}\r\n.bd-callout-danger h4{color:#d9534f}\r\n.bd-examples .img-thumbnail{margin-bottom:.75rem}\r\n.bd-examples h4{margin-bottom:.25rem}\r\n.bd-examples p{margin-bottom:1.25rem}\r\n@media (max-width:480px){.bd-examples{margin-right:-.75rem;margin-left:-.75rem}.bd-examples>[class^=col-]{padding-right:.75rem;padding-left:.75rem}}\r\n.bd-team{margin-bottom:1.5rem}\r\n.bd-team .team-member{line-height:2rem;color:#555}\r\n.bd-team .team-member:hover{color:#333;text-decoration:none}\r\n.bd-team .github-btn{float:right;width:180px;height:1.25rem;margin-top:.25rem;border:0}\r\n.bd-team img{float:left;width:2rem;margin-right:.5rem;border-radius:.25rem}\r\n.bd-browser-bugs td p{margin-bottom:0}\r\n.bd-browser-bugs th:first-child{width:18%}\r\n.bd-brand-logos{display:table;width:100%;margin-bottom:1rem;overflow:hidden;color:#563d7c;background-color:#f9f9f9;border-radius:.25rem}\r\n.bd-brand-item{padding:4rem 0;text-align:center}\r\n.bd-brand-item+.bd-brand-item{border-top:1px solid #fff}\r\n.bd-brand-logos .inverse{color:#fff;background-color:#563d7c}\r\n.bd-brand-item h1,.bd-brand-item h3{margin-top:0;margin-bottom:0}\r\n.bd-brand-item .bd-booticon{margin-right:auto;margin-left:auto}\r\n@media (min-width:768px){.bd-brand-item{display:table-cell;width:1%}.bd-brand-item+.bd-brand-item{border-top:0;border-left:1px solid #fff}.bd-brand-item h1{font-size:4rem}}\r\n.color-swatches{margin:0 -5px;overflow:hidden}\r\n.color-swatch{float:left;width:4rem;height:4rem;margin-right:.25rem;margin-left:.25rem;border-radius:.25rem}\r\n@media (min-width:768px){.color-swatch{width:6rem;height:6rem}}\r\n.color-swatches .bd-purple{background-color:#563d7c}\r\n.color-swatches .bd-purple-light{background-color:#cdbfe3}\r\n.color-swatches .bd-purple-lighter{background-color:#e5e1ea}\r\n.color-swatches .bd-gray{background-color:#f9f9f9}\r\n.bd-clipboard{position:relative;display:none;float:right}\r\n.bd-clipboard+.highlight{margin-top:0}\r\n.btn-clipboard{position:absolute;top:.5rem;right:.5rem;z-index:10;display:block;padding:.25rem .5rem;font-size:75%;color:#818a91;cursor:pointer;background-color:transparent;border-radius:.25rem}\r\n.btn-clipboard:hover{color:#fff;background-color:#027de7}\r\n@media (min-width:768px){.bd-clipboard{display:block}}\r\n.hll{background-color:#ffc}\r\n.c{color:#999}\r\n.k{color:#069}\r\n.o{color:#555}\r\n.cm{color:#999}\r\n.cp{color:#099}\r\n.c1{color:#999}\r\n.cs{color:#999}\r\n.gd{background-color:#fcc;border:1px solid #c00}\r\n.ge{font-style:italic}\r\n.gr{color:red}\r\n.gh{color:#030}\r\n.gi{background-color:#cfc;border:1px solid #0c0}\r\n.go{color:#aaa}\r\n.gp{color:#009}\r\n.gu{color:#030}\r\n.gt{color:#9c6}\r\n.kc{color:#069}\r\n.kd{color:#069}\r\n.kn{color:#069}\r\n.kp{color:#069}\r\n.kr{color:#069}\r\n.kt{color:#078}\r\n.m{color:#f60}\r\n.s{color:#d44950}\r\n.na{color:#4f9fcf}\r\n.nb{color:#366}\r\n.nc{color:#0a8}\r\n.no{color:#360}\r\n.nd{color:#99f}\r\n.ni{color:#999}\r\n.ne{color:#c00}\r\n.nf{color:#c0f}\r\n.nl{color:#99f}\r\n.nn{color:#0cf}\r\n.nt{color:#2f6f9f}\r\n.nv{color:#033}\r\n.ow{color:#000}\r\n.w{color:#bbb}\r\n.mf{color:#f60}\r\n.mh{color:#f60}\r\n.mi{color:#f60}\r\n.mo{color:#f60}\r\n.sb{color:#c30}\r\n.sc{color:#c30}\r\n.sd{font-style:italic;color:#c30}\r\n.s2{color:#c30}\r\n.se{color:#c30}\r\n.sh{color:#c30}\r\n.si{color:#a00}\r\n.sx{color:#c30}\r\n.sr{color:#3aa}\r\n.s1{color:#c30}\r\n.ss{color:#fc3}\r\n.bp{color:#366}\r\n.vc{color:#033}\r\n.vg{color:#033}\r\n.vi{color:#033}\r\n.il{color:#f60}\r\n.css .nt+.nt,.css .o,.css .o+.nt{color:#999}\r\n.language-bash::before{color:#009;content:\"$ \";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.language-powershell::before{color:#009;content:\"PM> \";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.anchorjs-link{color:inherit}\r\n@media (max-width:480px){.anchorjs-link{display:none}}\r\n:hover>.anchorjs-link{opacity:.75;-webkit-transition:color .16s linear;transition:color .16s linear}\r\n.anchorjs-link:focus,:hover>.anchorjs-link:hover{text-decoration:none;opacity:1}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map