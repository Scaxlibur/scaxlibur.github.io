"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5327],{5327:(t,e,s)=>{var i=s(7933),a=s(4259),n=s(1563),r=s(8998),h=s(269),o=s(8154),d=s(940),l=s(4747),c=s(9289);class u extends i.uA{static props={translations:null};static state=new i.Uw({label:null,busy:!1});#t;#e=!1;onSetup(){this.#t=(0,a.$c)()}onAttach(t){t.style.display="contents"}onConnect(t){t.setAttribute("data-media-announcer",""),(0,n.jk)(t,"role","status"),(0,n.jk)(t,"aria-live","polite");const{busy:e}=this.$state;this.setAttributes({"aria-busy":()=>e()?"true":null}),this.#e=!0,(0,i.QZ)(this.#s.bind(this)),(0,i.QZ)(this.#i.bind(this)),(0,i.QZ)(this.#a.bind(this)),(0,i.QZ)(this.#n.bind(this)),(0,i.QZ)(this.#r.bind(this)),(0,i.QZ)(this.#h.bind(this)),(0,i.QZ)(this.#o.bind(this)),(0,i.io)(),this.#e=!1}#s(){const{paused:t}=this.#t.$state;this.#d(t()?"Pause":"Play")}#n(){const{fullscreen:t}=this.#t.$state;this.#d(t()?"Enter Fullscreen":"Exit Fullscreen")}#r(){const{pictureInPicture:t}=this.#t.$state;this.#d(t()?"Enter PiP":"Exit PiP")}#a(){const{textTrack:t}=this.#t.$state;this.#d(t()?"Closed-Captions On":"Closed-Captions Off")}#i(){const{muted:t,volume:e,audioGain:s}=this.#t.$state;this.#d(t()||0===e()?"Mute":`${Math.round(e()*(s()??1)*100)}% ${this.#l("Volume")}`)}#c=-1;#u=-1;#h(){const{seeking:t,currentTime:e}=this.#t.$state,s=t();this.#c>0?(window.clearTimeout(this.#u),this.#u=window.setTimeout((()=>{if(!this.scope)return;const t=(0,i.se)(e),s=Math.abs(t-this.#c);if(s>=1){const e=t>=this.#c,i=(0,r.lA)(s);this.#d(`${this.#l(e?"Seek Forward":"Seek Backward")} ${i}`)}this.#c=-1,this.#u=-1}),300)):s&&(this.#c=(0,i.se)(e))}#l(t){const{translations:e}=this.$props;return e?.()?.[t||""]??t}#o(){const{label:t,busy:e}=this.$state,s=this.#l(t());if(this.#e)return;e.set(!0);const a=window.setTimeout((()=>{e.set(!1)}),150);return this.el&&(0,i.Bq)(this.el,"aria-label",s),(0,i.Kg)(s)&&this.dispatch("change",{detail:s}),()=>window.clearTimeout(a)}#d(t){const{label:e}=this.$state;e.set(t)}}class p extends i.uA{static props={hideDelay:2e3,hideOnMouseLeave:!1};#t;onSetup(){this.#t=(0,a.$c)(),(0,i.QZ)(this.#p.bind(this))}onAttach(t){const{pictureInPicture:e,fullscreen:s}=this.#t.$state;(0,i.eC)(t,"pointer-events","none"),(0,n.jk)(t,"role","group"),this.setAttributes({"data-visible":this.#m.bind(this),"data-fullscreen":s,"data-pip":e}),(0,i.QZ)((()=>{this.dispatch("change",{detail:this.#m()})})),(0,i.QZ)(this.#g.bind(this)),(0,i.QZ)((()=>{const e=s();for(const s of["top","right","bottom","left"])(0,i.eC)(t,`padding-${s}`,e&&`env(safe-area-inset-${s})`)}))}#g(){if(!this.el)return;const{nativeControls:t}=this.#t.$state,e=t();(0,i.Bq)(this.el,"aria-hidden",e?"true":null),(0,i.eC)(this.el,"display",e?"none":null)}#p(){const{controls:t}=this.#t.player,{hideDelay:e,hideOnMouseLeave:s}=this.$props;t.defaultDelay=2e3===e()?this.#t.$props.controlsDelay():e(),t.hideOnMouseLeave=s()}#m(){const{controlsVisible:t}=this.#t.$state;return t()}}class m extends i.uA{onAttach(t){t.style.pointerEvents||(0,i.eC)(t,"pointer-events","auto")}}const g=(0,i.q6)();let b=0;class x extends i.uA{static props={showDelay:700};#b="media-tooltip-"+ ++b;#x=(0,i.O)(null);#T=(0,i.O)(null);#f=(0,i.O)(!1);constructor(){super(),new h.f;const{showDelay:t}=this.$props;new r.ND({trigger:this.#x,content:this.#T,showDelay:t,listen(t,e,s){(0,i.QZ)((()=>{(0,h.O)()&&(0,i.k6)(t,"focus",e),(0,i.k6)(t,"blur",s)})),new i.En(t).add("touchstart",(t=>t.preventDefault()),{passive:!1}).add("mouseenter",e).add("mouseleave",s)},onChange:this.#C.bind(this)})}onAttach(t){t.style.setProperty("display","contents")}onSetup(){(0,i.Pp)(g,{trigger:this.#x,content:this.#T,showing:this.#f,attachTrigger:this.#w.bind(this),detachTrigger:this.#v.bind(this),attachContent:this.#$.bind(this),detachContent:this.#y.bind(this)})}#w(t){this.#x.set(t);let e=t.getAttribute("data-media-tooltip");e&&this.el?.setAttribute(`data-media-${e}-tooltip`,""),(0,i.Bq)(t,"data-describedby",this.#b)}#v(t){t.removeAttribute("data-describedby"),t.removeAttribute("aria-describedby"),this.#x.set(null)}#$(t){t.setAttribute("id",this.#b),t.style.display="none",(0,n.jk)(t,"role","tooltip"),this.#T.set(t)}#y(t){t.removeAttribute("id"),t.removeAttribute("role"),this.#T.set(null)}#C(t){const e=this.#x(),s=this.#T();e&&(0,i.Bq)(e,"aria-describedby",t?this.#b:null);for(const a of[this.el,e,s])a&&(0,i.Bq)(a,"data-visible",t);this.#f.set(t)}}class T extends i.uA{constructor(){super(),new h.f}onConnect(t){(0,i.zp)((0,n.jx)((()=>{if(!this.connectScope)return;this.#A();const t=(0,i.NT)(g);(0,i.zp)((()=>{const e=this.#S();e&&t.detachTrigger(e)}))})))}#A(){const t=this.#S(),e=(0,i.NT)(g);t&&e.attachTrigger(t)}#S(){const t=this.el.firstElementChild;return"button"===t?.localName||"button"===t?.getAttribute("role")?t:this.el}}class f extends i.uA{static props={placement:"top center",offset:0,alignOffset:0};constructor(){super(),new h.f;const{placement:t}=this.$props;this.setAttributes({"data-placement":t})}onAttach(t){this.#A(t),Object.assign(t.style,{position:"absolute",top:0,left:0,width:"max-content"})}onConnect(t){this.#A(t);const e=(0,i.NT)(g);(0,i.zp)((()=>e.detachContent(t))),(0,i.zp)((0,n.jx)((()=>{this.connectScope&&(0,i.QZ)(this.#k.bind(this))})))}#A(t){(0,i.NT)(g).attachContent(t)}#k(){const{showing:t}=(0,i.NT)(g);if(!t())return;const{placement:e,offset:s,alignOffset:a}=this.$props;return(0,n.RK)(this.el,this.#E(),e(),{offsetVarName:"media-tooltip",xOffset:a(),yOffset:s()})}#E(){return(0,i.NT)(g).trigger()}}class C extends i.uA{static props={disabled:!1,defaultPressed:!1};#P=(0,i.O)(!1);get pressed(){return this.#P()}constructor(){super(),new r.Zc({isPresssed:this.#P})}}const w=C.prototype;(0,i._w)(w,"pressed");class v extends i.uA{static props=r.Zc.props;#t;constructor(){super(),new r.Zc({isPresssed:this.#q.bind(this),onPress:this.#M.bind(this)})}onSetup(){this.#t=(0,a.$c)();const{canGoogleCast:t,isGoogleCastConnected:e}=this.#t.$state;this.setAttributes({"data-active":e,"data-supported":t,"data-state":this.#V.bind(this),"aria-hidden":(0,o.M)((()=>!t()))})}onAttach(t){t.setAttribute("data-media-tooltip","google-cast"),(0,n.Y1)(t,this.#Q.bind(this))}#M(t){this.#t.remote.requestGoogleCast(t)}#q(){const{remotePlaybackType:t,remotePlaybackState:e}=this.#t.$state;return"google-cast"===t()&&"disconnected"!==e()}#V(){const{remotePlaybackType:t,remotePlaybackState:e}=this.#t.$state;return"google-cast"===t()&&e()}#Q(){const{remotePlaybackState:t}=this.#t.$state;return`Google Cast ${t()}`}}class $ extends i.uA{static props={src:null,crossOrigin:null};static state=new i.Uw({video:null,src:null,crossOrigin:null,canPlay:!1,error:null,hidden:!1});#t;#L;get video(){return this.$state.video()}onSetup(){this.#t=(0,a.$c)(),this.#L=(0,i.J0)(r.Ap.state),this.#Z(),this.setAttributes({"data-loading":this.#N.bind(this),"data-hidden":this.$state.hidden,"data-error":this.#D.bind(this),"aria-hidden":(0,o.M)(this.$state.hidden)})}onAttach(t){(0,i.QZ)(this.#X.bind(this)),(0,i.QZ)(this.#I.bind(this)),(0,i.QZ)(this.#Z.bind(this)),(0,i.QZ)(this.#O.bind(this)),(0,i.QZ)(this.#R.bind(this)),(0,i.QZ)(this.#H.bind(this))}#X(){const t=this.$state.video();t&&(t.readyState>=2&&this.#B(),new i.En(t).add("canplay",this.#B.bind(this)).add("error",this.#F.bind(this)))}#I(){const{src:t}=this.$state,{canLoad:e}=this.#t.$state;t.set(e()?this.$props.src():null)}#Z(){const{crossOrigin:t}=this.$props,{crossOrigin:e}=this.$state,{crossOrigin:s}=this.#t.$state,i=null!==t()?t():s();e.set(!0===i?"anonymous":i)}#N(){const{canPlay:t,hidden:e}=this.$state;return!t()&&!e()}#D(){const{error:t}=this.$state;return!(0,i.kZ)(t)}#O(){const{src:t,hidden:e}=this.$state,{canLoad:s,duration:i}=this.#t.$state;e.set(s()&&(!t()||this.#D()||!Number.isFinite(i())))}#R(){const{src:t,canPlay:e,error:s}=this.$state;t(),e.set(!1),s.set(null)}#B(t){const{canPlay:e,error:s}=this.$state;e.set(!0),s.set(null),this.dispatch("can-play",{trigger:t})}#F(t){const{canPlay:e,error:s}=this.$state;e.set(!1),s.set(t),this.dispatch("error",{trigger:t})}#H(){const{video:t,canPlay:e}=this.$state,{duration:s}=this.#t.$state,{pointerRate:i}=this.#L,a=t();e()&&a&&Number.isFinite(s())&&Number.isFinite(i())&&(a.currentTime=i()*s())}}const y=$.prototype;(0,i._w)(y,"video");class A extends i.uA{static props={...r.c7.props,step:25,keyStep:25,shiftKeyMultiplier:2,min:0,max:300};static state=r.Dz;#t;onSetup(){this.#t=(0,a.$c)(),(0,i.Pp)(r.Pn,{default:"percent",percent:(t,e)=>(0,d.LI)(this.$state.value(),e)+"%"}),new r.c7({getStep:this.$props.step,getKeyStep:this.$props.keyStep,roundValue:Math.round,isDisabled:this.#z.bind(this),aria:{valueNow:this.#G.bind(this),valueText:this.#_.bind(this)},onDragValueChange:this.#j.bind(this),onValueChange:this.#W.bind(this)}).attach(this),(0,i.QZ)(this.#U.bind(this)),(0,i.QZ)(this.#K.bind(this))}onAttach(t){t.setAttribute("data-media-audio-gain-slider",""),(0,n.jk)(t,"aria-label","Audio Boost");const{canSetAudioGain:e}=this.#t.$state;this.setAttributes({"data-supported":e,"aria-hidden":(0,o.M)((()=>!e()))})}#G(){const{value:t}=this.$state;return Math.round(t())}#_(){const{value:t}=this.$state;return t()+"%"}#U(){const{min:t,max:e}=this.$props;this.$state.min.set(t()),this.$state.max.set(e())}#K(){const{audioGain:t}=this.#t.$state,e=100*((t()??1)-1);this.$state.value.set(e),this.dispatch("value-change",{detail:e})}#z(){const{disabled:t}=this.$props,{canSetAudioGain:e}=this.#t.$state;return t()||!e()}#J(t){if(!t.trigger)return;const e=(0,d.LI)(1+t.detail/100,2);this.#t.remote.changeAudioGain(e,t)}#W(t){this.#J(t)}#j(t){this.#J(t)}}class S extends i.uA{static props={...r.c7.props,step:.25,keyStep:.25,shiftKeyMultiplier:2,min:0,max:2};static state=r.Dz;#t;onSetup(){this.#t=(0,a.$c)(),new r.c7({getStep:this.$props.step,getKeyStep:this.$props.keyStep,roundValue:this.#Y,isDisabled:this.#z.bind(this),aria:{valueNow:this.#G.bind(this),valueText:this.#_.bind(this)},onDragValueChange:this.#j.bind(this),onValueChange:this.#W.bind(this)}).attach(this),(0,i.QZ)(this.#U.bind(this)),(0,i.QZ)(this.#tt.bind(this))}onAttach(t){t.setAttribute("data-media-speed-slider",""),(0,n.jk)(t,"aria-label","Speed");const{canSetPlaybackRate:e}=this.#t.$state;this.setAttributes({"data-supported":e,"aria-hidden":(0,o.M)((()=>!e()))})}#G(){const{value:t}=this.$state;return t()}#_(){const{value:t}=this.$state;return t()+"x"}#U(){const{min:t,max:e}=this.$props;this.$state.min.set(t()),this.$state.max.set(e())}#tt(){const{playbackRate:t}=this.#t.$state,e=t();this.$state.value.set(e),this.dispatch("value-change",{detail:e})}#Y(t){return(0,d.LI)(t,2)}#z(){const{disabled:t}=this.$props,{canSetPlaybackRate:e}=this.#t.$state;return t()||!e()}#et=(0,i.z3)(this.#st.bind(this),25);#st(t){if(!t.trigger)return;const e=t.detail;this.#t.remote.changePlaybackRate(e,t)}#W(t){this.#et(t)}#j(t){this.#et(t)}}class k extends i.uA{static props={...r.c7.props,step:1,keyStep:1,shiftKeyMultiplier:1};static state=r.Dz;#t;#it=(0,i.EW)((()=>{const{qualities:t}=this.#t.$state;return(0,o.F)(t())}));onSetup(){this.#t=(0,a.$c)(),new r.c7({getStep:this.$props.step,getKeyStep:this.$props.keyStep,roundValue:Math.round,isDisabled:this.#z.bind(this),aria:{valueNow:this.#G.bind(this),valueText:this.#_.bind(this)},onDragValueChange:this.#j.bind(this),onValueChange:this.#W.bind(this)}).attach(this),(0,i.QZ)(this.#at.bind(this)),(0,i.QZ)(this.#nt.bind(this))}onAttach(t){t.setAttribute("data-media-quality-slider",""),(0,n.jk)(t,"aria-label","Video Quality");const{qualities:e,canSetQuality:s}=this.#t.$state,a=(0,i.EW)((()=>s()&&e().length>0));this.setAttributes({"data-supported":a,"aria-hidden":(0,o.M)((()=>!a()))})}#G(){const{value:t}=this.$state;return t()}#_(){const{quality:t}=this.#t.$state;if(!t())return"";const{height:e,bitrate:s}=t(),i=s&&s>0?`${(s/1e6).toFixed(2)} Mbps`:null;return e?`${e}p${i?` (${i})`:""}`:"Auto"}#at(){const t=this.#it();this.$state.max.set(Math.max(0,t.length-1))}#nt(){let{quality:t}=this.#t.$state,e=this.#it(),s=Math.max(0,e.indexOf(t()));this.$state.value.set(s),this.dispatch("value-change",{detail:s})}#z(){const{disabled:t}=this.$props,{canSetQuality:e,qualities:s}=this.#t.$state;return t()||s().length<=1||!e()}#rt=(0,i.z3)(this.#ht.bind(this),25);#ht(t){if(!t.trigger)return;const{qualities:e}=this.#t,s=(0,i.se)(this.#it)[t.detail];this.#t.remote.changeQuality(e.indexOf(s),t)}#W(t){this.#rt(t)}#j(t){this.#rt(t)}}class E extends i.uA{static props={disabled:!1};#t;#ot;#dt;#lt=null;#ct=[];#ut=(0,i.O)(null);#pt=(0,i.O)([]);#mt=(0,i.O)(-1);#gt=(0,i.O)(-1);#bt=0;get cues(){return this.#pt()}get activeCue(){return this.#pt()[this.#mt()]||null}get activePointerCue(){return this.#pt()[this.#gt()]||null}onSetup(){this.#t=(0,a.$c)(),this.#ot=(0,i.J0)(r.pU.state)}onAttach(t){(0,l.q)(this.#t.textTracks,"chapters",this.#xt.bind(this)),(0,i.QZ)(this.#Tt.bind(this))}onConnect(){(0,i.zp)((()=>this.#ft.bind(this)))}onDestroy(){this.#xt(null)}setRefs(t){if(this.#ct=t,this.#dt?.dispose(),1===this.#ct.length){const t=this.#ct[0];t.style.width="100%",t.style.setProperty("--chapter-fill","var(--slider-fill)"),t.style.setProperty("--chapter-progress","var(--slider-progress)")}else this.#ct.length>0&&(0,i.P1)((()=>this.#Ct()),this.#dt=(0,i.Ds)())}#xt(t){(0,i.se)(this.#ut)!==t&&(this.#ft(),this.#ut.set(t))}#ft(){this.#ct=[],this.#pt.set([]),this.#mt.set(-1),this.#gt.set(-1),this.#bt=0,this.#dt?.dispose()}#Ct(){this.#ct.length&&(0,i.QZ)(this.#wt.bind(this))}#wt(){const{hidden:t}=this.#ot;t()||((0,i.QZ)(this.#vt.bind(this)),(0,i.QZ)(this.#$t.bind(this)),(0,i.QZ)(this.#yt.bind(this)),(0,i.QZ)(this.#At.bind(this)))}#vt(){const t=this.#pt();if(!t.length)return;let e,{seekableStart:s,seekableEnd:i}=this.#t.$state,a=s(),n=(i()||t[t.length-1].endTime)-a,r=100;for(let s=0;s<t.length;s++)if(e=t[s],this.#ct[s]){const i=s===t.length-1?r:(0,d.LI)((e.endTime-Math.max(a,e.startTime))/n*100,3);this.#ct[s].style.width=i+"%",r-=i}}#$t(){let{liveEdge:t,seekableStart:e,seekableEnd:s}=this.#t.$state,{fillPercent:a,value:n}=this.#ot,r=this.#pt(),h=t(),o=(0,i.se)(this.#mt),d=r[o],l=h?this.#pt.length-1:this.#St(d&&d.startTime/s()*100<=(0,i.se)(n)?o:0,a());h||!d?this.#kt(0,r.length,100):l>o?this.#kt(o,l,100):l<o&&this.#kt(l+1,o+1,0);const c=h?100:this.#Et(r[l],a(),e(),this.#Pt(r));this.#qt(this.#ct[l],c),this.#mt.set(l)}#yt(){let{pointing:t,pointerPercent:e}=this.#ot;if(!t())return void this.#gt.set(-1);const s=this.#St(0,e());this.#gt.set(s)}#kt(t,e,s){for(let i=t;i<e;i++)this.#qt(this.#ct[i],s)}#qt(t,e){t&&(t.style.setProperty("--chapter-fill",e+"%"),(0,i.Bq)(t,"data-active",e>0&&e<100),(0,i.Bq)(t,"data-ended",100===e))}#St(t,e){let s=0,i=this.#pt();if(0===e)return 0;if(100===e)return i.length-1;let{seekableStart:a}=this.#t.$state,n=a(),r=this.#Pt(i);for(let a=t;a<i.length;a++)if(s=this.#Et(i[a],e,n,r),s>=0&&s<100)return a;return 0}#At(){this.#Mt(this.#Vt())}#Mt=(0,i.s_)((t=>{let e,s=this.#pt(),{seekableStart:i}=this.#t.$state,a=i(),n=this.#Pt(s);for(let i=this.#bt;i<this.#ct.length;i++)if(e=this.#Et(s[i],t,a,n),this.#ct[i]?.style.setProperty("--chapter-progress",e+"%"),e<100){this.#bt=i;break}}));#Vt=(0,i.EW)(this.#Qt.bind(this));#Qt(){const{bufferedEnd:t,duration:e}=this.#t.$state;return 100*(0,d.LI)(Math.min(t()/Math.max(e(),1),1),3)}#Pt(t){const{seekableEnd:e}=this.#t.$state,s=e();return Number.isFinite(s)?s:t[t.length-1]?.endTime||0}#Et(t,e,s,i){if(!t)return 0;if(0===this.#pt().length)return 0;const a=i-s,n=Math.max(0,t.startTime-s),r=Math.min(i,t.endTime)-s,h=n/a,o=100*h,l=100*Math.min(1,h+(r-n)/a);return Math.max(0,(0,d.LI)(e>=l?100:(e-o)/(l-o)*100,3))}#Lt(t){let e=[],{seekableStart:s,seekableEnd:i,duration:a}=this.#t.$state,n=s(),r=i();const h=(t=t.filter((t=>t.startTime<=r&&t.endTime>=n)))[0];h&&h.startTime>n&&e.push(new window.VTTCue(n,h.startTime,""));for(let s=0;s<t.length-1;s++){const i=t[s],a=t[s+1];if(e.push(i),a){const t=a.startTime-i.endTime;t>0&&e.push(new window.VTTCue(i.endTime,i.endTime+t,""))}}const o=t[t.length-1];if(o){e.push(o);const t=a();t>=0&&t-o.endTime>1&&e.push(new window.VTTCue(o.endTime,a(),""))}return e}#Tt(){const{source:t}=this.#t.$state;t(),this.#Zt()}#Zt(){if(!this.scope)return;const{disabled:t}=this.$props;if(t())return this.#pt.set([]),this.#mt.set(0),void(this.#bt=0);const e=this.#ut();if(e){const t=this.#Nt.bind(this);t(),new i.En(e).add("add-cue",t).add("remove-cue",t),(0,i.QZ)(this.#Dt.bind(this))}return this.#lt=this.#Xt(),this.#lt&&(0,i.QZ)(this.#It.bind(this)),()=>{this.#lt&&(this.#lt.textContent="",this.#lt=null)}}#Dt(){this.#t.$state.duration(),this.#Nt()}#Nt=(0,i.IO)((()=>{const t=(0,i.se)(this.#ut);this.scope&&t&&t.cues.length&&(this.#pt.set(this.#Lt(t.cues)),this.#mt.set(0),this.#bt=0)}),150,!0);#It(){const t=this.activePointerCue||this.activeCue;this.#lt&&(this.#lt.textContent=t?.text||"")}#Ot(){let t=this.el;for(;t&&"slider"!==t.getAttribute("role");)t=t.parentElement;return t}#Xt(){const t=this.#Ot();return t?t.querySelector('[data-part="chapter-title"]'):null}}const P=E.prototype;(0,i._w)(P,"cues"),(0,i._w)(P,"activeCue"),(0,i._w)(P,"activePointerCue"),(0,i.EJ)(P,"setRefs");class q extends i.uA{static props={value:""};#Rt;get values(){return this.#Rt.values}get value(){return this.#Rt.value}set value(t){this.#Rt.value=t}constructor(){super(),this.#Rt=new r.rW,this.#Rt.onValueChange=this.#W.bind(this)}onSetup(){(0,i.QZ)(this.#Ht.bind(this))}#Ht(){this.#Rt.value=this.$props.value()}#W(t,e){const s=this.createEvent("change",{detail:t,trigger:e});this.dispatch(s)}}const M=q.prototype;(0,i._w)(M,"values"),(0,i._w)(M,"value");var V=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,L=(t,e,s,i)=>{for(var a,n=Q(e,s),r=t.length-1;r>=0;r--)(a=t[r])&&(n=a(e,s,n)||n);return n&&V(e,s,n),n};class Z extends i.uA{static props={thumbnails:null};#t;#Bt;#Rt;#Ft=(0,i.O)(null);#zt=(0,i.O)([]);get value(){return this.#Rt.value}get disabled(){return!this.#zt()?.length}constructor(){super(),this.#Rt=new r.rW,this.#Rt.onValueChange=this.#W.bind(this)}onSetup(){this.#t=(0,a.$c)(),(0,i.TQ)(r.HL)&&(this.#Bt=(0,i.NT)(r.HL));const{thumbnails:t}=this.$props;this.setAttributes({"data-thumbnails":()=>!!t()})}onAttach(t){this.#Bt?.attachObserver({onOpen:this.#Gt.bind(this)})}getOptions(){const{seekableStart:t,seekableEnd:e}=this.#t.$state,s=t(),i=e();return this.#zt().map(((t,e)=>({cue:t,value:e.toString(),label:t.text,startTime:(0,r.fU)(Math.max(0,t.startTime-s)),duration:(0,r.lA)(Math.min(i,t.endTime)-Math.max(s,t.startTime))})))}#Gt(){(0,i.se)((()=>this.#_t()))}onConnect(t){(0,i.QZ)(this.#_t.bind(this)),(0,i.QZ)(this.#jt.bind(this)),(0,i.QZ)(this.#Wt.bind(this)),(0,l.q)(this.#t.textTracks,"chapters",this.#Ft.set)}#Wt(){const t=this.#Ft();if(!t)return;const e=this.#Nt.bind(this,t);return e(),new i.En(t).add("add-cue",e).add("remove-cue",e),()=>{this.#zt.set([])}}#Nt(t){const{seekableStart:e,seekableEnd:s}=this.#t.$state,i=e(),a=s();this.#zt.set([...t.cues].filter((t=>t.startTime<=a&&t.endTime>=i)))}#_t(){if(!this.#Bt?.expanded())return;if(!this.#Ft())return void(this.#Rt.value="-1");const{realCurrentTime:t,seekableStart:e,seekableEnd:s}=this.#t.$state,a=e(),r=s(),h=t(),o=this.#zt().findIndex((t=>(0,l.Yc)(t,h)));this.#Rt.value=o.toString(),o>=0&&(0,n.jx)((()=>{if(!this.connectScope)return;const t=this.#zt()[o],e=this.el.querySelector("[aria-checked='true']"),s=Math.max(a,t.startTime),n=Math.min(r,t.endTime)-s,l=Math.max(0,h-s)/n*100;e&&(0,i.eC)(e,"--progress",(0,d.LI)(l,3)+"%")}))}#jt(){this.#Bt?.disable(this.disabled)}#W(t,e){if(this.disabled||!e)return;const s=+t,a=this.#zt(),{clipStartTime:n}=this.#t.$state;(0,i.Et)(s)&&a?.[s]&&(this.#Rt.value=s.toString(),this.#t.remote.seek(a[s].startTime-n(),e),this.dispatch("change",{detail:a[s],trigger:e}))}}L([i._w],Z.prototype,"value"),L([i._w],Z.prototype,"disabled"),L([i.EJ],Z.prototype,"getOptions");const N=[1,1.25,1.5,1.75,2,2.5,3,4];class D extends i.uA{static props={normalLabel:"Disabled",gains:N};#t;#Bt;#Rt;get value(){return this.#Rt.value}get disabled(){const{gains:t}=this.$props,{canSetAudioGain:e}=this.#t.$state;return!e()||0===t().length}constructor(){super(),this.#Rt=new r.rW,this.#Rt.onValueChange=this.#W.bind(this)}onSetup(){this.#t=(0,a.$c)(),(0,i.TQ)(r.HL)&&(this.#Bt=(0,i.NT)(r.HL))}onConnect(t){(0,i.QZ)(this.#Ht.bind(this)),(0,i.QZ)(this.#Ut.bind(this)),(0,i.QZ)(this.#jt.bind(this))}getOptions(){const{gains:t,normalLabel:e}=this.$props;return t().map((t=>({label:1===t||null===t?e:String(100*t)+"%",value:t.toString()})))}#Ht(){this.#Rt.value=this.#Kt()}#Ut(){const{normalLabel:t}=this.$props,{audioGain:e}=this.#t.$state,s=e();this.#Bt?.hint.set(1===s||null==s?t():String(100*s)+"%")}#jt(){this.#Bt?.disable(this.disabled)}#Kt(){const{audioGain:t}=this.#t.$state;return t()?.toString()??"1"}#W(t,e){if(this.disabled)return;const s=+t;this.#t.remote.changeAudioGain(s,e),this.dispatch("change",{detail:s,trigger:e})}}const X=D.prototype;(0,i._w)(X,"value"),(0,i._w)(X,"disabled"),(0,i.EJ)(X,"getOptions");class I extends i.uA{static props={disabled:!1,event:void 0,action:void 0};#t;#Jt=null;onSetup(){this.#t=(0,a.$c)();const{event:t,action:e}=this.$props;this.setAttributes({event:t,action:e})}onAttach(t){t.setAttribute("data-media-gesture",""),t.style.setProperty("pointer-events","none")}onConnect(t){this.#Jt=this.#t.player.el?.querySelector("[data-media-provider]"),(0,i.QZ)(this.#Yt.bind(this))}#Yt(){let t=this.$props.event(),e=this.$props.disabled();this.#Jt&&t&&!e&&(/^dbl/.test(t)&&(t=t.split(/^dbl/)[1]),("pointerup"===t||"pointerdown"===t)&&"coarse"===this.#t.$state.pointer()&&(t="pointerup"===t?"touchend":"touchstart"),(0,i.k6)(this.#Jt,t,this.#te.bind(this),{passive:!1}))}#ee=0;#se=-1;#te(t){if(this.$props.disabled()||(0,i.EE)(t)&&(0!==t.button||this.#t.activeMenu)||(0,i.kH)(t)&&this.#t.activeMenu||(0,n.Mb)(t)||!this.#ie(t))return;t.MEDIA_GESTURE=!0,t.preventDefault();const e=(0,i.se)(this.$props.event),s=e?.startsWith("dbl");if(s){if(1===this.#ee)return queueMicrotask((()=>this.#ae(t))),clearTimeout(this.#se),void(this.#ee=0)}else 0===this.#ee&&setTimeout((()=>{1===this.#ee&&this.#ae(t)}),250);0===this.#ee&&(this.#se=window.setTimeout((()=>{this.#ee=0}),275)),this.#ee++}#ae(t){this.el.setAttribute("data-triggered",""),requestAnimationFrame((()=>{this.#ne()&&this.#re((0,i.se)(this.$props.action),t),requestAnimationFrame((()=>{this.el.removeAttribute("data-triggered")}))}))}#ie(t){if(!this.el)return!1;if((0,i.EE)(t)||(0,i.Er)(t)||(0,i.kH)(t)){const e=(0,i.kH)(t)?t.changedTouches[0]??t.touches[0]:void 0,s=e?.clientX??t.clientX,a=e?.clientY??t.clientY,n=this.el.getBoundingClientRect(),r=a>=n.top&&a<=n.bottom&&s>=n.left&&s<=n.right;return t.type.includes("leave")?!r:r}return!0}#ne(){const t=this.#t.player.el.querySelectorAll("[data-media-gesture][data-triggered]");return Array.from(t).sort(((t,e)=>+getComputedStyle(e).zIndex-+getComputedStyle(t).zIndex))[0]===this.el}#re(t,e){if(!t)return;const s=new i.vP("will-trigger",{detail:t,cancelable:!0,trigger:e});if(this.dispatchEvent(s),s.defaultPrevented)return;const[a,n]=t.replace(/:([a-z])/,"-$1").split(":");t.includes(":fullscreen")?this.#t.remote.toggleFullscreen("prefer-media",e):t.includes("seek:")?this.#t.remote.seek((0,i.se)(this.#t.$state.currentTime)+(+n||0),e):this.#t.remote[(0,i.zS)(a)](e),this.dispatch("trigger",{detail:t,trigger:e})}}class O{priority=10;#Ft=null;#he;#oe;constructor(t){this.#he=t}attach(){}canRender(){return!0}detach(){this.#oe?.abort(),this.#oe=void 0,this.#he.reset(),this.#Ft=null}changeTrack(t){t&&this.#Ft!==t&&(this.#oe?.abort(),this.#oe=new i.En(t),t.readyState<2?(this.#he.reset(),this.#oe.add("load",(()=>this.#de(t)),{once:!0})):this.#de(t),this.#oe.add("add-cue",(t=>{this.#he.addCue(t.detail)})).add("remove-cue",(t=>{this.#he.removeCue(t.detail)})),this.#Ft=t)}#de(t){this.#he.changeTrack({cues:[...t.cues],regions:[...t.regions]})}}class R extends i.uA{static props={textDir:"ltr",exampleText:"Captions look like this."};#t;static lib=(0,i.O)(null);onSetup(){this.#t=(0,a.$c)(),this.setAttributes({"aria-hidden":(0,o.M)(this.#le.bind(this))})}onAttach(t){t.style.setProperty("pointer-events","none")}onConnect(t){R.lib()||s.e(3463).then(s.bind(s,3463)).then((t=>R.lib.set(t))),(0,i.QZ)(this.#ce.bind(this))}#le(){const{textTrack:t,remotePlaybackState:e,iOSControls:s}=this.#t.$state,i=t();return s()||"connected"===e()||!i||!(0,c._k)(i)}#ce(){if(!R.lib())return;const{viewType:t}=this.#t.$state;return"audio"===t()?this.#ue():this.#pe()}#ue(){return(0,i.QZ)(this.#Zt.bind(this)),this.#me(null),()=>{this.el.textContent=""}}#Zt(){if(this.#le())return;this.#ge();const{textTrack:t}=this.#t.$state;(0,i.k6)(t(),"cue-change",this.#ge.bind(this)),(0,i.QZ)(this.#be.bind(this))}#ge(){this.el.textContent="",this.#xe>=0&&this.#Te();const{realCurrentTime:t,textTrack:e}=this.#t.$state,{renderVTTCueString:s}=R.lib(),a=(0,i.se)(t),n=(0,i.se)(e).activeCues;for(const t of n){const e=this.#fe(),i=this.#Ce();i.innerHTML=s(t,a),e.append(i),this.el.append(i)}}#be(){const{realCurrentTime:t}=this.#t.$state,{updateTimedVTTCueNodes:e}=R.lib();e(this.el,t())}#pe(){const{CaptionsRenderer:t}=R.lib(),e=new t(this.el),s=new O(e);return this.#t.textRenderers.add(s),(0,i.QZ)(this.#we.bind(this,e)),(0,i.QZ)(this.#ve.bind(this,e)),this.#me(e),()=>{this.el.textContent="",this.#t.textRenderers.remove(s),e.destroy()}}#we(t){t.dir=this.$props.textDir()}#ve(t){if(this.#le())return;const{realCurrentTime:e,textTrack:s}=this.#t.$state;t.currentTime=e(),this.#xe>=0&&s()?.activeCues[0]&&this.#Te()}#me(t){const e=this.#t.player;if(!e)return;const s=this.#$e.bind(this,t);(0,i.k6)(e,"vds-font-change",s)}#$e(t){if(this.#xe>=0)return void this.#ye();const{textTrack:e}=this.#t.$state;e()?.activeCues[0]?t?.update(!0):this.#Ae()}#Ae(){const t=this.#fe();(0,i.Bq)(t,"data-example","");const e=this.#Ce();(0,i.Bq)(e,"data-example",""),e.textContent=this.$props.exampleText(),t?.append(e),this.el?.append(t),this.el?.setAttribute("data-example",""),this.#ye()}#xe=-1;#ye(){window.clearTimeout(this.#xe),this.#xe=window.setTimeout(this.#Te.bind(this),2500)}#Te(){this.el?.removeAttribute("data-example"),this.el?.querySelector("[data-example]")&&(this.el.textContent=""),this.#xe=-1}#fe(){const t=document.createElement("div");return(0,i.Bq)(t,"data-part","cue-display"),t}#Ce(){const t=document.createElement("div");return(0,i.Bq)(t,"data-part","cue"),t}}var H=s(4245),B=s(5466),F=s(1172);class z extends((0,i.xr)(HTMLElement,R)){static tagName="media-captions"}class G extends((0,i.xr)(HTMLElement,I)){static tagName="media-gesture"}class _ extends((0,i.xr)(HTMLElement,u)){static tagName="media-announcer"}class j extends((0,i.xr)(HTMLElement,p)){static tagName="media-controls"}class W extends((0,i.xr)(HTMLElement,m)){static tagName="media-controls-group"}class U extends i.uA{}class K extends((0,i.xr)(HTMLElement,U)){static tagName="media-title";#t;onSetup(){this.#t=(0,a.$c)()}onConnect(){(0,i.QZ)(this.#Se.bind(this))}#Se(){const{title:t}=this.#t.$state;this.textContent=t()}}class J extends i.uA{static props={defaultText:""}}class Y extends((0,i.xr)(HTMLElement,J)){static tagName="media-chapter-title";#t;#ke;onSetup(){this.#t=(0,a.$c)(),this.#ke=(0,i.O)("")}onConnect(){const t=this.#t.textTracks;(0,l.oz)(t,"chapters",this.#ke.set),(0,i.QZ)(this.#Ee.bind(this))}#Ee(){const{defaultText:t}=this.$props;this.textContent=this.#ke()||t()}}class tt extends i.uA{static props={size:96,trackWidth:8,fillPercent:50};onConnect(t){(0,n.jx)((()=>{if(!this.connectScope)return;const e=t.querySelector("svg"),s=e.firstElementChild,a=s.nextElementSibling;(0,i.QZ)(this.#Pe.bind(this,e,s,a))}))}#Pe(t,e,s){const{size:a,trackWidth:n,fillPercent:r}=this.$props;(0,i.Bq)(t,"width",a()),(0,i.Bq)(t,"height",a()),(0,i.Bq)(e,"stroke-width",n()),(0,i.Bq)(s,"stroke-width",n()),(0,i.Bq)(s,"stroke-dashoffset",100-r())}}class et extends((0,i.xr)(B.W,tt)){static tagName="media-spinner";render(){return H.qy`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}}class st extends i.uA{static props={when:!1}}class it extends((0,i.xr)(HTMLElement,st)){static tagName="media-layout";#t;onSetup(){this.#t=(0,a.$c)()}onConnect(){(0,i.QZ)(this.#qe.bind(this))}#qe(){const t=this.firstElementChild,e="template"===t?.localName,s=this.$props.when();((0,i.Lm)(s)?s:(0,i.EW)((()=>s(this.#t.player.state)))())?e?this.append(t.content.cloneNode(!0)):(0,n.sb)(t)&&(t.style.display=""):e?(this.textContent="",this.appendChild(t)):(0,n.sb)(t)&&(t.style.display="none")}}class at extends((0,i.xr)(HTMLElement,v)){static tagName="media-google-cast-button"}class nt extends((0,i.xr)(HTMLElement,C)){static tagName="media-toggle-button"}class rt extends((0,i.xr)(HTMLElement,x)){static tagName="media-tooltip"}class ht extends((0,i.xr)(HTMLElement,T)){static tagName="media-tooltip-trigger";onConnect(){this.style.display="contents"}}class ot extends((0,i.xr)(HTMLElement,f)){static tagName="media-tooltip-content"}class dt extends((0,i.xr)(HTMLElement,r.gN)){static tagName="media-menu-portal";static attrs={disabled:{converter:t=>(0,i.Kg)(t)?t:null!==t}}}class lt extends((0,i.xr)(HTMLElement,Z)){static tagName="media-chapters-radio-group";onConnect(){(0,F.gx)(this,((t,e)=>{const{cue:s,startTime:a,duration:n}=e,r=t.querySelector(".vds-thumbnail,media-thumbnail"),h=t.querySelector('[data-part="start-time"]'),o=t.querySelector('[data-part="duration"]');h&&(h.textContent=a),o&&(o.textContent=n),r&&(r.setAttribute("time",s.startTime+""),(0,i.QZ)((()=>{const t=this.$props.thumbnails();"src"in r?r.src=t:(0,i.Kg)(t)&&r.setAttribute("src",t)})))}))}}class ct extends((0,i.xr)(HTMLElement,D)){static tagName="media-audio-gain-radio-group";onConnect(){(0,F.gx)(this)}}class ut extends((0,i.xr)(HTMLElement,q)){static tagName="media-radio-group"}class pt extends((0,i.xr)(HTMLElement,r.Ap)){static tagName="media-slider"}const mt=(0,n.Xu)('<video muted playsinline preload="none" style="max-width: unset;"></video>');class gt extends((0,i.xr)(HTMLElement,$)){static tagName="media-slider-video";#t;#Me=this.#Ve();onSetup(){this.#t=(0,a.$c)(),this.$state.video.set(this.#Me)}onConnect(){const{canLoad:t}=this.#t.$state,{src:e,crossOrigin:s}=this.$state;this.#Me.parentNode!==this&&this.prepend(this.#Me),(0,i.QZ)((()=>{(0,i.Bq)(this.#Me,"crossorigin",s()),(0,i.Bq)(this.#Me,"preload",t()?"auto":"none"),(0,i.Bq)(this.#Me,"src",e())}))}#Ve(){return(0,n.n5)(mt)}}class bt extends((0,i.xr)(HTMLElement,A)){static tagName="media-audio-gain-slider"}class xt extends((0,i.xr)(HTMLElement,S)){static tagName="media-speed-slider"}class Tt extends((0,i.xr)(HTMLElement,k)){static tagName="media-quality-slider"}class ft extends((0,i.xr)(HTMLElement,E)){static tagName="media-slider-chapters";#Qe=null;onConnect(){(0,n.jx)((()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.#Qe=t,(0,i.QZ)(this.#Le.bind(this)))}))}#Le(){if(!this.#Qe)return;const t=(0,n.U1)(this.#Qe,this.cues.length||1);this.setRefs(t)}}class Ct extends i.uA{}class wt extends((0,i.xr)(HTMLElement,Ct)){static tagName="media-slider-steps";#Qe=null;onConnect(t){(0,n.jx)((()=>{this.connectScope&&(this.#Qe=t.querySelector("template"),this.#Qe&&(0,i.QZ)(this.#Ze.bind(this)))}))}#Ze(){if(!this.#Qe)return;const{min:t,max:e,step:s}=(0,i.J0)(r.Dz),a=(e()-t())/s();(0,n.U1)(this.#Qe,Math.floor(a)+1)}}var vt=s(3956);(0,i.Xq)(it),(0,i.Xq)(j),(0,i.Xq)(W),(0,i.Xq)(vt.MediaPosterElement),(0,i.Xq)(_),(0,i.Xq)(rt),(0,i.Xq)(ht),(0,i.Xq)(ot),(0,i.Xq)(F.tV),(0,i.Xq)(F.M0),(0,i.Xq)(F.Th),(0,i.Xq)(F.Ov),(0,i.Xq)(F.yA),(0,i.Xq)(F.Z4),(0,i.Xq)(F.py),(0,i.Xq)(at),(0,i.Xq)(nt),(0,i.Xq)(pt),(0,i.Xq)(bt),(0,i.Xq)(F.cZ),(0,i.Xq)(F.zR),(0,i.Xq)(xt),(0,i.Xq)(Tt),(0,i.Xq)(ft),(0,i.Xq)(wt),(0,i.Xq)(F.MA),(0,i.Xq)(F.xi),(0,i.Xq)(F.cw),(0,i.Xq)(gt),(0,i.Xq)(F.eq),(0,i.Xq)(F.SI),(0,i.Xq)(dt),(0,i.Xq)(F.mo),(0,i.Xq)(F.T$),(0,i.Xq)(F.DW),(0,i.Xq)(F.ES),(0,i.Xq)(F.Yp),(0,i.Xq)(ct),(0,i.Xq)(F.Q_),(0,i.Xq)(lt),(0,i.Xq)(ut),(0,i.Xq)(F.oY),(0,i.Xq)(G),(0,i.Xq)(F.pt),(0,i.Xq)(z),(0,i.Xq)(F.L4),(0,i.Xq)(F.sE),(0,i.Xq)(K),(0,i.Xq)(Y),(0,i.Xq)(et)}}]);