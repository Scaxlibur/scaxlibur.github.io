"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8491],{8491:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var s=l(3111),a=l(9650),r=l(6526),u=l(9483),i=l(4691),o=l(7591),n=l(4870),c=l(7741);const h=["/","/blog.html","/intro.html","/ESP32/2024-10-22-ESP32%E8%AE%A1%E6%97%B6%E5%99%A8.html","/ESP32/2024-10-23-%E6%80%BB%E7%BA%BF%E8%88%B5%E6%9C%BA.html","/posts/2024-10-22-ESP32%E8%AE%A1%E6%97%B6%E5%99%A8.html","/posts/2024-10-23-%E6%80%BB%E7%BA%BF%E8%88%B5%E6%9C%BA.html","/posts/2024-11-03-C__%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.html","/apps/Applist.html","/apps/Chrome.html","/apps/design.html","/apps/toolbox.html","/code/AutoHotkey.html","/code/Electron.html","/code/HTML.html","/code/Javascript.html","/code/Markdown.html","/code/Python.html","/code/","/code/Regex.html","/code/Vue.html","/deploy/CloudServices.html","/deploy/Cloudflare.html","/deploy/DNS.html","/deploy/GitHub.html","/deploy/MySQL.html","/deploy/Static.html","/deploy/VPS.html","/family/Coupon.html","/family/Diet.html","/family/Life.html","/web/Comments.html","/web/VuePress.html","/web/docsify.html","/apps/topic/","/apps/topic/topic01.html","/apps/topic/topic02anytitle.html","/404.html","/ESP32/","/posts/","/apps/","/deploy/","/family/","/web/","/category/","/category/esp32/","/category/%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%BC%80%E5%8F%91/","/category/%E7%89%A9%E8%81%94%E7%BD%91/","/category/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/","/tag/","/tag/esp32/","/tag/%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%BC%80%E5%8F%91/","/tag/%E7%89%A9%E8%81%94%E7%BD%91/","/tag/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/","/article/","/star/","/timeline/"];l(3182);const p=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),v=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var E=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:t}){const l=(0,o.rd)(),h=(0,o.Zv)(),E=(0,s.s5)(c.a),{enabled:m,addQueryHistory:A,queryHistory:g,removeQueryHistory:B}=(()=>{const{queryHistoryCount:e}=c.s,t=e>0;return{enabled:t,queryHistory:p,addQueryHistory:l=>{t&&(p.value=Array.from(new Set([l,...p.value.slice(0,e-1)])))},removeQueryHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),{enabled:C,resultHistory:f,addResultHistory:H,removeResultHistory:k}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:t=>{if(e){const e={link:v(t),display:t.display};"header"in t&&(e.header=t.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),S=m||C,w=(0,u.lW)(e,"queries"),{results:Q,isSearching:R}=(e=>{const t=(0,c.u)(),l=(0,o.Zv)(),s=(0,o.BV)(),a=(0,u.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:o,suggestionsFilter:n,...c}=t.value;r?(a.value+=1,u(e.join(" "),l.value,c).then((e=>i(e,r,l.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,l],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{isSearching:n,results:h}})(w),b=(0,u.Kh)({isQuery:!0,index:0}),F=(0,u.KR)(0),x=(0,u.KR)(0),D=(0,i.EW)((()=>S&&(g.value.length>0||f.value.length>0))),q=(0,i.EW)((()=>Q.value.length>0)),P=(0,i.EW)((()=>Q.value[F.value]||null)),_=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),M=e=>{if("customField"===e.type){const t=c.b[e.index]||"$content",[l,a=""]=(0,s.Qd)(t)?t[h.value].split("$content"):t.split("$content");return e.display.map((e=>(0,i.h)("div",_([l,...e,a]))))}return e.display.map((e=>(0,i.h)("div",_(e))))},T=()=>{F.value=0,x.value=0,t("updateQuery",""),t("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(q.value){if("ArrowUp"===s.key)x.value>0?x.value-=1:(F.value=F.value>0?F.value-1:Q.value.length-1,x.value=P.value.contents.length-1);else if("ArrowDown"===s.key)x.value<P.value.contents.length-1?x.value+=1:(F.value=F.value<Q.value.length-1?F.value+1:0,x.value=0);else if("Enter"===s.key){const t=P.value.contents[x.value];A(e.queries.join(" ")),H(t),l.push(v(t)),T()}}else if(C)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:t}=b;0===t?(b.isQuery=!e,b.index=e?f.value.length-1:g.value.length-1):b.index=t-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:t}=b;t===(e?g.value.length-1:f.value.length-1)?(b.isQuery=!e,b.index=0):b.index=t+1})();else if("Enter"===s.key){const{index:e}=b;b.isQuery?(t("updateQuery",g.value[e]),s.preventDefault()):(l.push(f.value[e].link),T())}})),(0,i.wB)([F,x],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!q.value:!D.value}],id:"search-pro-results"},e.queries.length?R.value?(0,i.h)(n.S,{hint:E.value.searching}):q.value?(0,i.h)("ul",{class:"search-pro-result-list"},Q.value.map((({title:t,contents:l},s)=>{const a=F.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},t||E.value.defaultTitle),l.map(((t,l)=>{const s=a&&x.value===l;return(0,i.h)(o.Wt,{to:v(t),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{A(e.queries.join(" ")),H(t),T()}},(()=>["text"===t.type?null:(0,i.h)("title"===t.type?n.T:"heading"===t.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===t.type&&t.header?(0,i.h)("div",{class:"content-header"},t.header):null,(0,i.h)("div",M(t))])]))}))])}))):E.value.emptyResult:S?D.value?[m?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},E.value.queryHistory),g.value.map(((e,l)=>(0,i.h)("div",{class:["search-pro-result-item",{active:b.isQuery&&b.index===l}],onClick:()=>{t("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),B(l)}})])))])):null,C?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},E.value.resultHistory),f.value.map(((e,t)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!b.isQuery&&b.index===t}],onClick:()=>{T()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>_(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(t)}})]))))])):null]:E.value.emptyHistory:E.value.emptyResult)}})}}]);