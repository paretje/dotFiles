// ==UserScript==
// @name            Old School Github
// @match           https://github.com/*
// @grant           GM_addStyle
// @run-at          document-body
// ==/UserScript==


(function () {
  // Source: https://raw.githubusercontent.com/daattali/oldschool-github-extension/master/css/osgh.css
  GM_addStyle("@media(min-width:1280px){main>div.bg-gray-light{box-shadow:inset 0 -1px 0 #e1e4e8}main>div.bg-gray-light>div,main>div.bg-gray-light>nav{max-width:1280px;margin-left:auto;margin-right:auto}main>div.bg-gray-light>nav>ul>li>a{visibility:visible !important}main>div.bg-gray-light>nav .js-responsive-underlinenav-overflow{display:none}}body:not(.page-profile) .UnderlineNav-body .UnderlineNav-item{padding:5px 14px 3px}body:not(.page-profile) .UnderlineNav-item.selected{border-radius:3px 3px 0 0;background:#fff;border-left:1px solid #e1e4e8;border-right:1px solid #e1e4e8;border-bottom:0;border-top:3px solid #e36209;padding-top:0}.js-active-navigation-container .Box-row+.Box-row{border-top:1px solid #eaecef !important}.js-active-navigation-container .Box-row{padding-top:6px !important;padding-bottom:6px !important}.js-active-navigation-container .Box-row.p-0{padding-top:0 !important;padding-bottom:0 !important}.repository-content .gutter-condensed .Box .Box-header{padding-top:10px;padding-bottom:10px}body .Box{border-radius:3px}body .Box .Box-header,body .Box-row:first-of-type{border-top-left-radius:3px;border-top-right-radius:3px}:not(.input-group-button)>:not(.BtnGroup):not(.subnav-search-context):not(.input-group-button)>.btn:not(.BtnGroup-item):not(.btn-with-count):not(.get-repo-btn){border-radius:3px}body .BtnGroup-item:first-child,body .BtnGroup-parent:first-child .BtnGroup-item,.input-group .input-group-button:first-child .btn,body .subnav-item:first-child,.subnav-search-context .btn,body .btn.btn-with-count{border-radius:3px 0 0 3px}body .BtnGroup-item:last-child,body .BtnGroup-parent:last-child .BtnGroup-item,.input-group .input-group-button:last-child .btn,body .subnav-item:last-child,.subnav-search-context+.subnav-search .subnav-search-input,body .social-count{border-radius:0 3px 3px 0}body .IssueLabel{border-radius:2px}body .IssueLabel--big.lh-condensed,body .State{border-radius:3px}body .avatar-user{border-radius:3px !important}body .Box:not(.Box--danger),body .Box-header{border-color:#d1d5da}body .Box--danger .Box-row:first-of-type{border-top-color:transparent}body .form-control{border-color:#d1d5da}#readme .Box-header{background:#f6f8fa !important;border:1px solid #d1d5da !important}main>div.bg-gray-light>nav .Counter,body .IssueLabel--big.lh-condensed,.IssueLabel{font-weight:600}.js-issue-row.Box-row{padding-top:0 !important;padding-bottom:0 !important}body .btn{transition:none !important;font-weight:600;background-image:linear-gradient(-180deg,#fafbfc 0,#eff3f6 90%);border-color:rgba(27,31,35,0.2);background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;box-shadow:none}body .btn:hover{background-image:linear-gradient(-180deg,#f0f3f6 0,#e6ebf1 90%);border-color:rgba(27,31,35,0.35)}body [open]>.btn,body [open]>summary>.btn,body .btn:active{background:#e9ecef;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,0.15)}html>body.intent-mouse [open]>.btn,html>body.intent-mouse .btn:active{box-shadow:inset 0 .15em .3em rgba(27,31,35,0.15)}body .btn[disabled]{cursor:not-allowed;color:#959da5;background:#fafbfc;border-color:rgba(27,31,35,.15)}body .btn .octicon{color:#24292e}body .btn .dropdown-caret{opacity:1}body .btn-primary .octicon{color:#fff}body .social-count{border-color:rgba(27,31,35,0.2);box-shadow:none}body .btn-primary{background-image:linear-gradient(-180deg,#34d058 0,#28a745 90%)}body .btn-primary:hover{background-image:linear-gradient(-180deg,#2fcb53 0,#269f42 90%);border-color:rgba(27,31,35,0.5)}body [open]>.btn-primary,body .btn-primary:active{background:#279f43;border-color:rgba(27,31,35,0.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,0.15)}body .btn-primary[disabled]{color:hsla(0,0,100%,.8);background:#94d3a2;border-color:rgba(27,31,35,.1);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0,100%,.03)}body .btn-danger{color:#cb2431}body .btn-danger:hover{color:#fff;background:#cb2431;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0,100%,.03)}body [open]>.btn-danger,body .btn-danger:active{color:#fff;background:#be222e;border-color:rgba(27,31,35,.15);box-shadow:inset 0 1px 0 rgba(134,24,29,.2)}body .btn-danger[disabled]{color:rgba(203,36,49,.5);background:#fafbfc;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.04),inset 0 1px 0 hsla(0,0,100%,.25)}body .btn-outline{color:#0366d6;background:#fff}body .btn-outline:hover,body .full-commit .btn-outline:not(:disabled):hover{color:#fff;background:#0366d6;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0,100%,.03)}body [open]>.btn-outline,body .btn-outline:active{color:#fff;background:#035fc7;border-color:rgba(27,31,35,.15);box-shadow:inset 0 1px 0 rgba(5,38,76,.2)}body .btn-outline[disabled]{color:rgba(3,102,214,.5);background:#fafbfc;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.04),inset 0 1px 0 hsla(0,0,100%,.25)}.user-status-container .user-status-circle-badge-container{position:unset;width:auto;height:auto;margin:4px 0 0}.user-status-circle-badge-container .user-status-circle-badge{border-radius:3px;width:100%}body .user-status-circle-badge .user-status-message-wrapper{width:100%;opacity:1}body .user-status-circle-badge-container .user-status-emoji-container{margin-right:8px !important}body .user-status-circle-badge-container .user-status-circle-badge,body .user-status-circle-badge-container:hover .user-status-circle-badge{box-shadow:none}.user-status-message-wrapper .css-truncate.css-truncate-target{white-space:auto}");
})();
