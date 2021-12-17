var lt=Object.defineProperty;var it=(e,t,o)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var C=(e,t,o)=>(it(e,typeof t!="symbol"?t+"":t,o),o),Ve=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var ge=(e,t,o)=>(Ve(e,t,"read from private field"),o?o.call(e):t.get(e)),he=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},Ee=(e,t,o,r)=>(Ve(e,t,"write to private field"),r?r.call(e,o):t.set(e,o),o);import{X as Ke,m as ct,y as ut,$ as dt,I as mt,S as ee,i as te,s as oe,c as ft,e as c,a as g,b as l,d as v,f as s,l as P,g as pt,u as _t,h as gt,j as ht,t as j,k as Y,n as H,r as Ye,o as We,p as ze,q as S,v as I,w as De,x as Ie,z as W,A as Qe,B as $e,C as be,D as Et,E as bt,F as Oe,G as Tt,H as Xe,J as F,K as At,L as yt,R as Nt,M as St,N as kt}from"./vendor.87120491.js";const wt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};wt();const Rt="modulepreload",Ze={},Dt="/beta/",Je=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${Dt}${r}`,r in Ze)return;Ze[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":Rt,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((p,m)=>{i.addEventListener("load",p),i.addEventListener("error",m)})})).then(()=>t())};var Ce;(function(e){e.AUDIO_INPUT_STATE_CHANGE="conference.audio_input_state_changed",e.AUTH_STATUS_CHANGED="conference.auth_status_changed",e.BEFORE_STATISTICS_DISPOSED="conference.beforeStatisticsDisposed",e.CONFERENCE_ERROR="conference.error",e.CONFERENCE_FAILED="conference.failed",e.CONFERENCE_JOINED="conference.joined",e.CONFERENCE_LEFT="conference.left",e.CONFERENCE_UNIQUE_ID_SET="conference.unique_id_set",e.CONNECTION_ESTABLISHED="conference.connectionEstablished",e.CONNECTION_INTERRUPTED="conference.connectionInterrupted",e.CONNECTION_RESTORED="conference.connectionRestored",e.DATA_CHANNEL_OPENED="conference.dataChannelOpened",e.DISPLAY_NAME_CHANGED="conference.displayNameChanged",e.DOMINANT_SPEAKER_CHANGED="conference.dominantSpeaker",e.CONFERENCE_CREATED_TIMESTAMP="conference.createdTimestamp",e.DTMF_SUPPORT_CHANGED="conference.dtmfSupportChanged",e.ENDPOINT_MESSAGE_RECEIVED="conference.endpoint_message_received",e.ENDPOINT_STATS_RECEIVED="conference.endpoint_stats_received",e.JVB121_STATUS="conference.jvb121Status",e.KICKED="conference.kicked",e.PARTICIPANT_KICKED="conference.participant_kicked",e.LAST_N_ENDPOINTS_CHANGED="conference.lastNEndpointsChanged",e.LOCK_STATE_CHANGED="conference.lock_state_changed",e.SERVER_REGION_CHANGED="conference.server_region_changed",e._MEDIA_SESSION_STARTED="conference.media_session.started",e._MEDIA_SESSION_ACTIVE_CHANGED="conference.media_session.active_changed",e.MEMBERS_ONLY_CHANGED="conference.membersOnlyChanged",e.MESSAGE_RECEIVED="conference.messageReceived",e.NO_AUDIO_INPUT="conference.no_audio_input",e.NOISY_MIC="conference.noisy_mic",e.NON_PARTICIPANT_MESSAGE_RECEIVED="conference.non_participant_message_received",e.PRIVATE_MESSAGE_RECEIVED="conference.privateMessageReceived",e.PARTICIPANT_CONN_STATUS_CHANGED="conference.participant_conn_status_changed",e.PARTCIPANT_FEATURES_CHANGED="conference.partcipant_features_changed",e.PARTICIPANT_PROPERTY_CHANGED="conference.participant_property_changed",e.P2P_STATUS="conference.p2pStatus",e.PHONE_NUMBER_CHANGED="conference.phoneNumberChanged",e.PROPERTIES_CHANGED="conference.propertiesChanged",e.RECORDER_STATE_CHANGED="conference.recorderStateChanged",e.VIDEO_SIP_GW_AVAILABILITY_CHANGED="conference.videoSIPGWAvailabilityChanged",e.VIDEO_SIP_GW_SESSION_STATE_CHANGED="conference.videoSIPGWSessionStateChanged",e.START_MUTED_POLICY_CHANGED="conference.start_muted_policy_changed",e.STARTED_MUTED="conference.started_muted",e.SUBJECT_CHANGED="conference.subjectChanged",e.SUSPEND_DETECTED="conference.suspendDetected",e.TALK_WHILE_MUTED="conference.talk_while_muted",e.TRACK_ADDED="conference.trackAdded",e.TRACK_AUDIO_LEVEL_CHANGED="conference.audioLevelsChanged",e.TRACK_MUTE_CHANGED="conference.trackMuteChanged",e.TRACK_REMOVED="conference.trackRemoved",e.TRANSCRIPTION_STATUS_CHANGED="conference.transcriptionStatusChanged",e.USER_JOINED="conference.userJoined",e.USER_LEFT="conference.userLeft",e.USER_ROLE_CHANGED="conference.roleChanged",e.USER_STATUS_CHANGED="conference.statusChanged",e.BOT_TYPE_CHANGED="conference.bot_type_changed",e.LOBBY_USER_JOINED="conference.lobby.userJoined",e.LOBBY_USER_UPDATED="conference.lobby.userUpdated",e.LOBBY_USER_LEFT="conference.lobby.userLeft"})(Ce||(Ce={}));class et{constructor(t){C(this,"translator");this.api=t,Ke.subscribe(o=>this.translator=o)}$t(t,o){return this.translator?this.translator(`plugins.${this.meta.id}.${t}`,o):""}}class It extends et{constructor(){super(...arguments);C(this,"meta",{id:"xyz.jimmi.moderator",name:"Moderator",version:"1.0.0"});C(this,"commands");C(this,"events",{[Ce.USER_JOINED]:this.onUserJoined});C(this,"translations")}onUserJoined(t){const{conference:o}=this.api;o.isModerator()&&o.grantOwner(t)}}var re,ne,ae;class $t{constructor(t){he(this,re,void 0);he(this,ne,void 0);he(this,ae,void 0);Ee(this,re,t.videoThumbnails[0].url),Ee(this,ne,t.title),Ee(this,ae,t.adaptiveFormats.filter(o=>o.encoding==="opus")[0].url)}get thumbnailUrl(){return ge(this,re)}get title(){return ge(this,ne)}get source(){return ge(this,ae)}}re=new WeakMap,ne=new WeakMap,ae=new WeakMap;class Ot extends et{constructor(){super(...arguments);C(this,"meta",{id:"xyz.jimmi.music",name:"Music",version:"0.2.0"});C(this,"commands",{play:this.play,queue:this.queue,cue:this.queue,track:this.track});C(this,"events");C(this,"translations",{en:{description:"A music plugin that allows for audio playback of youtube videos",commands:{play:{usage:"!play <url|searchTerm> - Play a youtube video by url or search term",playingTrack:"Playing {title}"},queue:{usage:`!queue - Show the current queue.
!queue <url|searchTerm> - Add a YouTube video to the queue.`,isEmpty:"The queue is currently empty",content:"Queue content",addedTrack:"Added {title} to queue"},cue:{usage:"!cue - Alias for !queue"},track:{usage:`!track - Display current track
!track skip - Skip the current track
!track ++ or !track -- - Fast forward or rewind. Add more + or - signs to increase duration
!track +10, !track +20, !track -15 - Fast forward or rewind with specific duration in seconds`,currentlyPlaying:"Currently playing {title}"}},general:{invalidArgs:"Invalid arguments. Usage:",noVideo:"Sorry, I cannot find any video at the moment"}}});C(this,"baseUrl","https://invidious.snopyta.org")}async fetch(t){return await(await fetch(`${this.baseUrl}/api/v1/${t}`,{referrerPolicy:"no-referrer"})).json()}async searchYtVideo(t){if(new RegExp("https?://").test(t)){const o=new URLSearchParams(t.split("?")[1]).get("v");if(o)return o;const r=t.split("/");return r[r.length-1].split("?")[0]}else{const o=await this.fetch(`search/?q=${encodeURIComponent(t)}`);if(o.length>0)return o[0].videoId}return null}async getTrack(t){const o=await this.fetch(`videos/${t}`);return o.error?null:new $t(o)}async query(t){const o=t.join(" "),r=await this.searchYtVideo(o);return r?this.getTrack(r):null}async play(t){if(t.params.length===0)t.respond(`:warning: ${this.$t("general.invalidArgs")}
${this.$t("commands.play.usage")}`);else{const o=await this.query(t.params);if(!o){t.respond(`${this.$t("general.noVideo")} :worried:`);return}this.api.currentTrack=o,this.api.conference.sendMessage(`:notes: ${this.$t("commands.play.playingTrack",{values:{title:o.title}})}`)}}async queue(t){if(t.params.length===0)if(this.api.queue.length===0)t.respond(`:notes: ${this.$t("commands.queue.isEmpty")}`);else{let o=0;const r=new RegExp(/(\d)/ig);t.respond(this.api.queue.reduce((a,n)=>`${a}
${(++o).toString().replaceAll(r,":$1:")} ${n.title}`,`:notes: ${this.$t("commands.queue.content")}`))}else{const o=await this.query(t.params);if(!o){t.respond(`${this.$t("general.noVideo")} :worried:`);return}this.api.currentTrack?this.api.addToQueue(o):this.api.currentTrack=o,t.respond(`:notes: ${this.$t("commands.queue.addedTrack",{values:{title:o.title}})}`)}}async track(t){var o,r;switch(t.params.length){case 0:t.respond(`:notes: ${this.$t("commands.track.currentlyPlaying",{values:{title:(r=(o=this.api.currentTrack)==null?void 0:o.title)!=null?r:"nothing"}})}`);break;case 1:const a=t.params[0];if(a==="skip"){this.api.currentTrack=void 0;return}let n=0;const i=p=>2*Math.E^p-1;/^\+\++$/.test(a)?n=i(a.length):/^--+$/.test(a)?n=-i(a.length):n=parseInt(a,10),n?this.api.forward(n):t.respond(`:warning: ${this.$t("general.invalidArgs")}
${this.$t("commands.track.usage")}`);break;default:t.respond(`:warning: ${this.$t("general.invalidArgs")}
${this.$t("commands.track.usage")}`)}}}const Pe={default:{jitsiDisplayName:"DJ Jim",initialVolume:20},repoUrl:"https://github.com/p-fruck/Jimmi",url:"https://jimmi.xyz",logo:"/jimmi.svg",plugins:[Ot,It]};function tt(e,t){if(e.length===0)return t;let o={};return o[e.pop()]=t,tt(e,o)}Pe.plugins.forEach(e=>{const t=new e({});t.translations&&Object.keys(t.translations).forEach(o=>{const r=tt(t.meta.id.split("."),t.translations[o]);ct(o,{plugins:r})})});ut("en",()=>Je(()=>import("./en.3f1a4bac.js"),[]));function Ct(){dt({fallbackLocale:"en",initialLocale:mt()})}function Pt(e){let t,o,r,a,n,i,p,m,k,T,h,A;const y=e[3].default,E=ft(y,e,e[2],null);return{c(){t=c("label"),o=c("div"),r=c("input"),a=g(),n=c("div"),i=g(),p=c("div"),m=g(),k=c("div"),E&&E.c(),l(r,"id","toogleButton"),l(r,"type","checkbox"),l(r,"class","hidden svelte-4l3tce"),l(n,"class","toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner svelte-4l3tce"),l(p,"class","toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0 svelte-4l3tce"),l(o,"class","relative"),l(k,"class","ml-3 text-gray-700 font-medium"),l(t,"class","flex items-center cursor-pointer")},m(b,f){v(b,t,f),s(t,o),s(o,r),r.checked=e[0],s(o,a),s(o,n),s(o,i),s(o,p),s(t,m),s(t,k),E&&E.m(k,null),T=!0,h||(A=[P(r,"click",function(){pt(e[1])&&e[1].apply(this,arguments)}),P(r,"change",e[4])],h=!0)},p(b,[f]){e=b,f&1&&(r.checked=e[0]),E&&E.p&&(!T||f&4)&&_t(E,y,e,e[2],T?ht(y,e[2],f,null):gt(e[2]),null)},i(b){T||(j(E,b),T=!0)},o(b){Y(E,b),T=!1},d(b){b&&H(t),E&&E.d(b),h=!1,Ye(A)}}}function Ut(e,t,o){let{$$slots:r={},$$scope:a}=t,{checked:n=!1}=t,{onClick:i=()=>{}}=t;function p(){n=this.checked,o(0,n)}return e.$$set=m=>{"checked"in m&&o(0,n=m.checked),"onClick"in m&&o(1,i=m.onClick),"$$scope"in m&&o(2,a=m.$$scope)},[n,i,a,r,p]}class Lt extends ee{constructor(t){super();te(this,t,Ut,Pt,oe,{checked:0,onClick:1})}}function Gt(e){let t=e[4]("routes.home.toggleBetaMode")+"",o;return{c(){o=S(t)},m(r,a){v(r,o,a)},p(r,a){a&16&&t!==(t=r[4]("routes.home.toggleBetaMode")+"")&&I(o,t)},d(r){r&&H(o)}}}function ot(e){let t,o=e[4]("routes.home.domainError")+"",r;return{c(){t=c("p"),r=S(o),l(t,"class","text-xs text-red-500 mt-3")},m(a,n){v(a,t,n),s(t,r)},p(a,n){n&16&&o!==(o=a[4]("routes.home.domainError")+"")&&I(r,o)},d(a){a&&H(t)}}}function rt(e){let t,o=e[4]("routes.home.roomError")+"",r;return{c(){t=c("p"),r=S(o),l(t,"class","text-xs text-red-500 mt-3")},m(a,n){v(a,t,n),s(t,r)},p(a,n){n&16&&o!==(o=a[4]("routes.home.roomError")+"")&&I(r,o)},d(a){a&&H(t)}}}function vt(e){let t,o,r,a,n=e[4]("routes.home.mainContent.heading")+"",i,p,m,k=e[4]("routes.home.mainContent.description")+"",T,h,A,y,E,b,f,x,B=e[4]("routes.home.joinRoomHeading")+"",z,se,d,U,M=e[4]("routes.home.domainLabel")+"",G,Q,N,Ue,Le,L,X,le=e[4]("routes.home.roomLabel")+"",Te,Ge,$,ve,He,ie,q,ce,ue=e[4]("general.advancedConfiguration")+"",Ae,Me,Z,de=e[4]("general.password")+"",ye,qe,O,je,J,me=e[4]("routes.home.joinButtonText")+"",Ne,Fe,V,fe=e[4]("routes.home.joinRoomFootnote")+"",Se,xe,K,ke,pe,w,we,Be;function at(u){e[11](u)}function st(u){e[12](u)}let Re={$$slots:{default:[Gt]},$$scope:{ctx:e}};e[1]!==void 0&&(Re.onClick=e[1]),e[3]!==void 0&&(Re.checked=e[3]),A=new Lt({props:Re}),We.push(()=>ze(A,"onClick",at)),We.push(()=>ze(A,"checked",st));let R=e[5].domain&&ot(e),D=e[5].room&&rt(e);return{c(){t=c("section"),o=c("div"),r=c("div"),a=c("h1"),i=S(n),p=g(),m=c("p"),T=S(k),h=g(),De(A.$$.fragment),b=g(),f=c("form"),x=c("h2"),z=S(B),se=g(),d=c("div"),U=c("label"),G=S(M),Q=g(),N=c("input"),Ue=g(),R&&R.c(),Le=g(),L=c("div"),X=c("label"),Te=S(le),Ge=g(),$=c("input"),ve=g(),D&&D.c(),He=g(),ie=c("div"),q=c("details"),ce=c("summary"),Ae=S(ue),Me=g(),Z=c("label"),ye=S(de),qe=g(),O=c("input"),je=g(),J=c("button"),Ne=S(me),Fe=g(),V=c("p"),Se=S(fe),xe=g(),K=c("a"),ke=S(e[2]),l(a,"class","title-font font-medium text-3xl text-gray-900"),l(m,"class","leading-relaxed mt-4 mb-4"),l(r,"class","lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"),l(x,"class","text-gray-900 text-lg font-medium title-font mb-5"),l(U,"for","domain"),l(U,"class","leading-7 text-sm text-gray-600"),l(N,"type","text"),l(N,"id","domain"),l(N,"name","domain"),l(N,"placeholder","meet.jit.si"),l(N,"class","w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"),l(d,"class","relative mb-4"),l(X,"for","room"),l(X,"class","leading-7 text-sm text-gray-600"),l($,"type","text"),l($,"id","room"),l($,"name","room"),l($,"class","w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"),l(L,"class","relative mb-4"),l(ce,"class","cursor-pointer"),l(Z,"for","domain"),l(Z,"class","leading-7 text-sm text-gray-600"),l(O,"type","password"),l(O,"id","password"),l(O,"name","password"),l(O,"class","w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"),l(ie,"class","relative mb-4"),l(J,"class","disabled:opacity-50 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"),l(J,"type","submit"),l(K,"class","text-indigo-500 break-words"),l(K,"href",pe=`https://${e[2]}`),l(V,"class","text-xs text-gray-500 mt-3"),l(f,"class","lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"),l(o,"class","container px-5 py-24 mx-auto flex flex-wrap items-center"),l(t,"class","text-gray-600 body-font")},m(u,_){v(u,t,_),s(t,o),s(o,r),s(r,a),s(a,i),s(r,p),s(r,m),s(m,T),s(r,h),Ie(A,r,null),s(o,b),s(o,f),s(f,x),s(x,z),s(f,se),s(f,d),s(d,U),s(U,G),s(d,Q),s(d,N),W(N,e[0].domain),s(d,Ue),R&&R.m(d,null),s(f,Le),s(f,L),s(L,X),s(X,Te),s(L,Ge),s(L,$),W($,e[0].room),s(L,ve),D&&D.m(L,null),s(f,He),s(f,ie),s(ie,q),s(q,ce),s(ce,Ae),s(q,Me),s(q,Z),s(Z,ye),s(q,qe),s(q,O),W(O,e[0].password),s(f,je),s(f,J),s(J,Ne),s(f,Fe),s(f,V),s(V,Se),s(V,xe),s(V,K),s(K,ke),w=!0,we||(Be=[P(N,"beforeinput",e[10]),P(N,"change",e[8]),P(N,"input",e[13]),P($,"beforeinput",e[10]),P($,"change",e[8]),P($,"input",e[14]),P(O,"change",e[8]),P(O,"input",e[15]),P(f,"submit",e[9])],we=!0)},p(u,[_]){(!w||_&16)&&n!==(n=u[4]("routes.home.mainContent.heading")+"")&&I(i,n),(!w||_&16)&&k!==(k=u[4]("routes.home.mainContent.description")+"")&&I(T,k);const _e={};_&262160&&(_e.$$scope={dirty:_,ctx:u}),!y&&_&2&&(y=!0,_e.onClick=u[1],Qe(()=>y=!1)),!E&&_&8&&(E=!0,_e.checked=u[3],Qe(()=>E=!1)),A.$set(_e),(!w||_&16)&&B!==(B=u[4]("routes.home.joinRoomHeading")+"")&&I(z,B),(!w||_&16)&&M!==(M=u[4]("routes.home.domainLabel")+"")&&I(G,M),_&1&&N.value!==u[0].domain&&W(N,u[0].domain),u[5].domain?R?R.p(u,_):(R=ot(u),R.c(),R.m(d,null)):R&&(R.d(1),R=null),(!w||_&16)&&le!==(le=u[4]("routes.home.roomLabel")+"")&&I(Te,le),_&1&&$.value!==u[0].room&&W($,u[0].room),u[5].room?D?D.p(u,_):(D=rt(u),D.c(),D.m(L,null)):D&&(D.d(1),D=null),(!w||_&16)&&ue!==(ue=u[4]("general.advancedConfiguration")+"")&&I(Ae,ue),(!w||_&16)&&de!==(de=u[4]("general.password")+"")&&I(ye,de),_&1&&O.value!==u[0].password&&W(O,u[0].password),(!w||_&16)&&me!==(me=u[4]("routes.home.joinButtonText")+"")&&I(Ne,me),(!w||_&16)&&fe!==(fe=u[4]("routes.home.joinRoomFootnote")+"")&&I(Se,fe),(!w||_&4)&&I(ke,u[2]),(!w||_&4&&pe!==(pe=`https://${u[2]}`))&&l(K,"href",pe)},i(u){w||(j(A.$$.fragment,u),w=!0)},o(u){Y(A.$$.fragment,u),w=!1},d(u){u&&H(t),$e(A),R&&R.d(),D&&D.d(),we=!1,Ye(Be)}}}function Ht(e,t,o){let r,a,n,i,p;be(e,Ke,d=>o(4,i=d));let m=()=>{window.location.href=r?"/":"/beta"};const k=new RegExp(/^$|^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/),T=new RegExp(/^[^?&:"'%#]+$/),{form:h,errors:A,handleChange:y,handleSubmit:E}=Et({initialValues:{domain:"",room:"",password:""},validationSchema:bt().shape({domain:Oe().trim().matches(k),room:Oe().trim().min(1).matches(T).required(),password:Oe().optional()}),onSubmit:d=>{const U=d.password?`?password=${d.password}`:"";Tt(`/bot/${a}${U}`)}});be(e,h,d=>o(0,n=d)),be(e,A,d=>o(5,p=d));function b(d){if(d instanceof InputEvent&&d.data&&d.inputType==="insertFromPaste"){const{data:U}=d,M=new RegExp("^http(s?)://(.*)/(.*)$");if(!M.test(U))return;const G=M.exec(U);if(!(G&&G.length>=4))return;const Q=G[2],N=G[3];k.test(Q)&&T.test(N)&&(d.preventDefault(),Xe(h,n.domain=Q,n),Xe(h,n.room=N,n))}}function f(d){m=d,o(1,m)}function x(d){r=d,o(3,r)}function B(){n.domain=this.value,h.set(n)}function z(){n.room=this.value,h.set(n)}function se(){n.password=this.value,h.set(n)}return e.$$.update=()=>{e.$$.dirty&1&&o(2,a=`${n.domain||"meet.jit.si"}/${n.room}`)},o(3,r=window.location.href.split("/")[3].startsWith("beta")),[n,m,a,r,i,p,h,A,y,E,b,f,x,B,z,se]}class Mt extends ee{constructor(t){super();te(this,t,Ht,vt,oe,{})}}function qt(e){let t;return{c(){t=c("p"),t.textContent="404 - Not found"},m(o,r){v(o,t,r)},p:F,i:F,o:F,d(o){o&&H(t)}}}class jt extends ee{constructor(t){super();te(this,t,null,qt,oe,{})}}function Ft(e){let t,o,r,a,n,i,p,m,k,T,h,A,y,E;return{c(){t=c("footer"),o=c("div"),r=c("div"),a=c("div"),n=c("a"),i=S("JIMMI"),p=g(),m=c("p"),m.textContent="Still under heavy development",k=g(),T=c("div"),h=c("p"),A=S(`Fork me on
          `),y=c("a"),E=S("GitHub"),l(n,"href",Pe.url),l(n,"class","ml-3 text-xl"),l(m,"class","text-sm text-gray-500 ml-4 pl-4 border-l-2 border-gray-200 sm:py-2 sm:mt-0"),l(a,"class","flex items-center md:justify-start justify-center text-gray-900"),l(y,"href",Pe.repoUrl),l(y,"class","text-indigo-500 ml-1"),l(y,"target","_blank"),l(y,"rel","noopener noreferrer"),l(h,"class","text-sm text-gray-500"),l(T,"class","sm:ml-auto sm:py-2 sm:mt-0 mt-4 sm:text-left text-center text-gray-500 text-sm"),l(r,"class","container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"),l(o,"class","bg-gray-100 "),l(t,"class","text-gray-600 body-font absolute bottom-0 w-screen")},m(b,f){v(b,t,f),s(t,o),s(o,r),s(r,a),s(a,n),s(n,i),s(a,p),s(a,m),s(r,k),s(r,T),s(T,h),s(h,A),s(h,y),s(y,E)},p:F,i:F,o:F,d(b){b&&H(t)}}}class xt extends ee{constructor(t){super();te(this,t,null,Ft,oe,{})}}function nt(e){let t,o;return t=new Nt({props:{routes:e[1]}}),{c(){De(t.$$.fragment)},m(r,a){Ie(t,r,a),o=!0},p:F,i(r){o||(j(t.$$.fragment,r),o=!0)},o(r){Y(t.$$.fragment,r),o=!1},d(r){$e(t,r)}}}function Bt(e){let t,o,r,a,n=!e[0]&&nt(e);return r=new xt({}),{c(){t=c("main"),n&&n.c(),o=g(),De(r.$$.fragment),l(t,"class","h-screen")},m(i,p){v(i,t,p),n&&n.m(t,null),s(t,o),Ie(r,t,null),a=!0},p(i,[p]){i[0]?n&&(St(),Y(n,1,1,()=>{n=null}),At()):n?(n.p(i,p),p&1&&j(n,1)):(n=nt(i),n.c(),j(n,1),n.m(t,o))},i(i){a||(j(n),j(r.$$.fragment,i),a=!0)},o(i){Y(n),Y(r.$$.fragment,i),a=!1},d(i){i&&H(t),n&&n.d(),$e(r)}}}function Vt(e,t,o){let r;be(e,kt,n=>o(0,r=n)),Ct();const a={"/":Mt,"/bot/:instance/:room":yt({asyncComponent:()=>Je(()=>import("./Bot.9cc28719.js"),["assets/Bot.9cc28719.js","assets/Bot.7961fba8.css","assets/vendor.87120491.js"])}),"*":jt};return[r,a]}class Kt extends ee{constructor(t){super();te(this,t,Vt,Bt,oe,{})}}new Kt({target:document.getElementById("app")});export{Ce as J,Pe as c};
