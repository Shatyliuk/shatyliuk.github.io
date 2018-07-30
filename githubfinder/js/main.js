!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(7),n(2);const r=document.getElementById("searchUser"),s=new class{constructor(){this.clientId="89bb380308de3c38cdbf",this.clientSecret="f8edc33db4cf2247e6fd32758985f0293a2bff2b",this.repos_count=5,this.repos_sort="created: asc"}getUser(e){return new Promise((t,n)=>{fetch(`https://api.github.com/users/${e}?client_id=${this.clientId}&client_secret=${this.clientSecret}`).then(e=>e.json()).then(e=>t(e)).catch(e=>n(e))})}getRepos(e){return new Promise((t,n)=>{fetch(`https://api.github.com/users/${e}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`).then(e=>e.json()).then(e=>t(e)).catch(e=>n(e))})}},o=new class{constructor(){this.profile=document.getElementById("profile")}showProfile(e){this.profile.innerHTML=`\n        <div class='card mb-3'>\n            <div class='card-body'>\n                <div class='row'>\n                    <div class='col-md-3'>\n                        <img src=${e.avatar_url} alt='user_avatar' class='img-fluid mb-3'>\n                        <a href='${e.html_url}' target='_blank' class='btn btn-primary btn-block'>Show Profile</a>\n                    </div>\n                    <div class='col-md-9'>\n                        <div class="mb-2 pb-2 border-bottom">\n                            <span class='badge badge-primary'>Public repositroies: ${e.public_repos}</span>\n                            <span class='badge badge-primary'>Gists: ${e.public_gists}</span>\n                            <span class='badge badge-primary'>Followers: ${e.followers}</span>\n                            <span class='badge badge-primary'>Following: ${e.following}</span>\n                        </div>\n                        <ul class='list-group'>\n                            <li class='list-group-item'>Company: ${e.company}</li>\n                            <li class='list-group-item'>Blog: ${e.blog}</li>\n                            <li class='list-group-item'>Location: ${e.location}</li>\n                            <li class='list-group-item'>Created at: ${e.created_at}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h3>Latest Repositories:</h3>\n        <div id='repos'></div>\n        `}clearProfile(){this.profile.innerHTML=""}showAlert(e,t){const n=document.querySelector(".searchContainer");if(n.querySelector(".alert"))this.clearAlert();else{const r=document.createElement("div");r.className=t,r.appendChild(document.createTextNode(e));const s=document.getElementById("searchUser");n.insertBefore(r,s)}}clearAlert(){const e=document.querySelector(".alert");setTimeout(()=>{e.style.transition="1s",e.style.opacity=0,setTimeout(()=>{e.remove()},1e3)},1500)}showRepos(e){let t=document.getElementById("repos"),n="";e.forEach(e=>{console.log(e),n+=`\n        <div class='card mb-3'>\n            <div class='card-body'>\n                <div class='row'>\n                    <div class='col-md-6'>\n                        <a href='${e.html_url}' target='_blank'>${e.name}</a>\n                    </div>\n                    <div class='col-md-6'>\n                        <span class='badge badge-primary'>Stars: ${e.stargazers_count}</span>\n                        <span class='badge badge-primary'>Following: ${e.watchers_count}</span>\n                        <span class='badge badge-primary'>Following: ${e.forks_count}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        `}),t.innerHTML=n}};r.addEventListener("keyup",e=>{e.preventDefault();let t=e.target.value;t.length>0?(s.getUser(t).then(e=>{"Not Found"===e.message?o.showAlert("Not found","alert alert-danger"):o.showProfile(e)}),s.getRepos(t).then(e=>{o.showRepos(e)})):o.clearProfile()})},,function(e,t){},,,,,function(e,t){}]);