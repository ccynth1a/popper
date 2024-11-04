var mn=Array.isArray,In=Array.from,Rn=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Yt=Object.getOwnPropertyDescriptors,Dn=Object.prototype,Sn=Array.prototype,Ut=Object.getPrototypeOf;const xn=()=>{};function On(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,_t=4,L=8,tt=16,E=32,G=64,S=128,B=256,p=512,R=1024,H=2048,k=4096,j=8192,Vt=16384,ct=32768,gn=65536,Kt=1<<18,vt=1<<19,lt=Symbol("$state");function pt(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!$t(t,this.v)}function Gt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Wt(){throw new Error("effect_update_depth_exceeded")}function kn(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function Cn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Xt(){throw new Error("state_unsafe_local_read")}function Jt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function bn(t){return Qt(nt(t))}function Fn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Qt(t){return u!==null&&u.f&T&&(d===null?pn([t]):d.push(t)),t}function tn(t,n){return u!==null&&st()&&u.f&(T|tt)&&(d===null||!d.includes(t))&&Jt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=Ft(),dt(t,R),st()&&l!==null&&l.f&p&&!(l.f&E)&&(_!==null&&_.includes(t)?(y(l,R),z(l)):I===null?hn([t]):I.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,o=0;o<s;o++){var a=r[o],i=a.f;i&R||!e&&a===l||(y(a,n),i&(p|S)&&(i&T?dt(a,H):z(a)))}}const qn=1,Mn=2,Ln=4,Hn=8,jn=16,Yn=1,Un=2,Bn=4,Vn=8,Kn=16,$n=1,Gn=2,rn="[",en="[!",sn="]",Et={},Zn=Symbol();function yt(t){console.warn("hydration_mismatch")}let N=!1;function zn(t){N=t}let A;function F(t){if(t===null)throw yt(),Et;return A=t}function Wn(){return F(C(A))}function Xn(t){if(N){if(C(A)!==null)throw yt(),Et;A=t}}function Jn(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ut,wt,Tt;function Qn(){if(ut===void 0){ut=window;var t=Element.prototype,n=Node.prototype;wt=at(n,"firstChild").get,Tt=at(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return wt.call(t)}function C(t){return Tt.call(t)}function tr(t,n){if(!N)return X(t);var r=X(A);if(r===null)r=A.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),F(e),e}return F(r),r}function nr(t,n){if(!N){var r=X(t);return r instanceof Comment&&r.data===""?C(r):r}return A}function rr(t,n=1,r=!1){let e=N?A:t;for(;n--;)e=C(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var o=W();return e==null||e.before(o),F(o),o}return F(e),e}function er(t){t.textContent=""}function on(t){var n=T|R;l===null?n|=S:l.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function sr(t){const n=on(t);return n.equals=ht,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?rt(e):b(e)}}}function mt(t){var n,r=l;$(t.parent);try{At(t),n=qt(t)}finally{$(r)}return n}function It(t){var n=mt(t),r=(x||t.f&S)&&t.deps!==null?H:p;y(t,r),t.equals(n)||(t.v=n,t.version=Ft())}function rt(t){At(t),M(t,0),y(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){l===null&&u===null&&zt(),u!==null&&u.f&S&&Zt(),et&&Gt()}function an(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&G)!==0,o=l,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{it(!0),Z(a),a.f|=Vt}catch(c){throw b(a),c}finally{it(i)}}else n!==null&&z(a);var w=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&vt)===0;if(!w&&!s&&e&&(o!==null&&an(a,o),u!==null&&u.f&T)){var m=u;(m.children??(m.children=[])).push(a)}return a}function or(t){const n=P(L,null,!1);return y(n,p),n.teardown=t,n}function ar(t){Rt();var n=l!==null&&(l.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=Dt(t);return e}}function lr(t){return Rt(),ln(t)}function ur(t){const n=P(G,t,!0);return()=>{b(n)}}function Dt(t){return P(_t,t,!1)}function ln(t){return P(L,t,!0)}function ir(t){return un(t)}function un(t,n=0){return P(L|tt|n,t,!0)}function fr(t,n=!0){return P(L|E,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=et,e=u;ft(!0),K(null);try{n.call(null)}finally{ft(r),K(e)}}}function xt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:C(e);e.remove(),e=o}r=!0}xt(t),Ot(t,n&&!r),M(t,0),y(t,j);var a=t.transitions;if(a!==null)for(const w of a)w.stop();St(t);var i=t.parent;i!==null&&i.first!==null&&gt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function gt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function _r(t,n){var r=[];kt(t,r,!0),_n(r,()=>{b(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function kt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&ct)!==0||(e.f&E)!==0;kt(e,n,o?r:!1),e=s}}}function cr(t){Nt(t,!0)}function Nt(t,n){if(t.f&k){t.f^=k,Y(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&E)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}let V=!1,J=[];function Ct(){V=!1;const t=J.slice();J=[],Bt(t)}function vr(t){V||(V=!0,queueMicrotask(Ct)),J.push(t)}function cn(){V&&Ct()}const Pt=0,vn=1;let U=Pt,q=!1,O=!1,et=!1;function it(t){O=t}function ft(t){et=t}let D=[],g=0;let u=null;function K(t){u=t}let l=null;function $(t){l=t}let d=null;function pn(t){d=t}let _=null,h=0,I=null;function hn(t){I=t}let bt=0,x=!1,f=null;function Ft(){return++bt}function st(){return f!==null&&f.l===null}function Y(t){var a,i;var n=t.f;if(n&R)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var o=r[s];if(Y(o)&&It(o),e&&l!==null&&!x&&!((i=o==null?void 0:o.reactions)!=null&&i.includes(t))&&(o.reactions??(o.reactions=[])).push(t),o.version>t.version)return!0}}e||y(t,p)}return!1}function dn(t,n,r){throw t}function qt(t){var ot;var n=_,r=h,e=I,s=u,o=x,a=d,i=f,w=t.f;_=null,h=0,I=null,u=w&(E|G)?null:t,x=!O&&(w&S)!==0,d=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!x)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return m}finally{_=n,h=r,I=e,u=s,x=o,d=a,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,H),n.f&(S|B)||(n.f^=B),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){y(t,p);var r=l;l=t;try{xt(t),n&tt?fn(t):Ot(t),St(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=bt}catch(s){dn(s)}finally{l=r}}}function Mt(){g>1e3&&(g=0,Wt()),g++}function Lt(t){var n=t.length;if(n!==0){Mt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var o=[];Ht(s,o),yn(o)}}finally{O=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|k))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?gt(e):e.fn=null))}}function wn(){if(q=!1,g>1001)return;const t=D;D=[],Lt(t),q||(g=0)}function z(t){U===Pt&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|E)){if(!(r&p))return;n.f^=p}}D.push(n)}function Ht(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&E)!==0,a=o&&(s&p)!==0;if(!a&&!(s&k))if(s&L){o?r.f^=p:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ht(i,n)}function jt(t){var n=U,r=D;try{Mt();const s=[];U=vn,D=s,q=!1,Lt(r);var e=t==null?void 0:t();return cn(),(D.length>0||s.length>0)&&jt(),g=0,e}finally{U=n,D=r}}async function pr(){await Promise.resolve(),jt()}function Tn(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=mt(t);return rt(t),e}if(u!==null){d!==null&&d.includes(t)&&Xt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&l!==null&&l.f&p&&!(l.f&E)&&I.includes(t)&&(y(l,R),z(l))}else if(r&&t.deps===null){var o=t,a=o.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(o))&&(a.deriveds??(a.deriveds=[])).push(o)}return r&&(o=t,Y(o)&&It(o)),t.v}function hr(t){const n=u;try{return u=null,t()}finally{u=n}}const An=~(R|H|p);function y(t,n){t.f=t.f&An|n}function dr(t,n=1){var r=+Tn(t);return tn(t,r+n),r}function Er(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function yr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var o=a[s];$(o.effect),K(o.reaction),Dt(o.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function wr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(lt in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&lt in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Yt(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{Vn as $,nt as A,Cn as B,tn as C,at as D,Pn as E,Ut as F,mn as G,un as H,cr as I,fr as J,_r as K,ct as L,en as M,Jn as N,zn as O,Nn as P,gn as Q,Bn as R,lt as S,$n as T,Zn as U,ht as V,E as W,G as X,$ as Y,Yn as Z,Un as _,ar as a,sr as a0,Fn as a1,u as a2,j as a3,Kn as a4,Rn as a5,K as a6,Qn as a7,rn as a8,C as a9,$t as aA,Et as aa,sn as ab,yt as ac,kn as ad,er as ae,In as af,ur as ag,xn as ah,or as ai,Dt as aj,ln as ak,vr as al,jt as am,pr as an,bn as ao,k as ap,qn as aq,nn as ar,Mn as as,jn as at,kt as au,_n as av,b as aw,Ln as ax,Hn as ay,dr as az,hr as b,f as c,On as d,wr as e,on as f,Tn as g,nr as h,yr as i,tr as j,Xn as k,N as l,Wn as m,W as n,X as o,Er as p,l as q,Bt as r,rr as s,ir as t,lr as u,Gn as v,A as w,F as x,Dn as y,Sn as z};