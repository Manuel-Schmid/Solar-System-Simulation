(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="169",gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,Kc=1,Ou=2,Ah=1,Fu=2,Zn=3,oi=0,nn=1,dn=2,Mi=0,fs=1,fo=2,Zc=3,$c=4,Bu=5,Oi=100,ku=101,zu=102,Hu=103,Vu=104,Gu=200,Wu=201,Xu=202,ju=203,ba=204,Aa=205,Yu=206,qu=207,Ku=208,Zu=209,$u=210,Ju=211,Qu=212,ed=213,td=214,wa=0,Ca=1,Ra=2,_s=3,Pa=4,La=5,Ia=6,Da=7,wh=0,nd=1,id=2,Ti=0,sd=1,rd=2,od=3,ad=4,cd=5,ld=6,hd=7,Jc="attached",ud="detached",Ch=300,xs=301,vs=302,ir=303,Na=304,yo=306,Ss=1e3,Dn=1001,po=1002,$t=1003,Rh=1004,Zs=1005,kt=1006,so=1007,Nn=1008,ai=1009,Ph=1010,Lh=1011,sr=1012,_c=1013,Vi=1014,tn=1015,ni=1016,xc=1017,vc=1018,ys=1020,Ih=35902,Dh=1021,Nh=1022,cn=1023,Uh=1024,Oh=1025,ps=1026,Es=1027,Eo=1028,Sc=1029,Fh=1030,yc=1031,Ec=1033,ro=33776,oo=33777,ao=33778,co=33779,Ua=35840,Oa=35841,Fa=35842,Ba=35843,ka=36196,za=37492,Ha=37496,Va=37808,Ga=37809,Wa=37810,Xa=37811,ja=37812,Ya=37813,qa=37814,Ka=37815,Za=37816,$a=37817,Ja=37818,Qa=37819,ec=37820,tc=37821,lo=36492,nc=36494,ic=36495,Bh=36283,sc=36284,rc=36285,oc=36286,rr=2300,or=2301,Do=2302,Qc=2400,el=2401,tl=2402,dd=2500,fd=0,kh=1,ac=2,pd=3200,md=3201,zh=0,gd=1,Jn="",bt="srgb",Nt="srgb-linear",Mc="display-p3",Mo="display-p3-linear",mo="linear",Et="srgb",go="rec709",_o="p3",qi=7680,nl=519,_d=512,xd=513,vd=514,Hh=515,Sd=516,yd=517,Ed=518,Md=519,cc=35044,il="300 es",ii=2e3,xo=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const Js=Math.PI/180,Ms=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function Tc(i,e){return(i%e+e)%e}function Td(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bd(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function Ad(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function wd(i,e=1){return e-Math.abs(Tc(i,e*2)-e)}function Cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ld(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Dd(i){i!==void 0&&(sl=i);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(i){return i*Js}function Ud(i){return i*Ms}function Od(i){return(i&i-1)===0&&i!==0}function Fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),p=o((e-n)/2),_=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*p,a*h);break;case"YZY":i.set(l*p,a*u,l*d,a*h);break;case"ZXZ":i.set(l*d,l*p,a*u,a*h);break;case"XZX":i.set(a*u,l*v,l*_,a*h);break;case"YXY":i.set(l*_,a*u,l*v,a*h);break;case"ZYZ":i.set(l*v,l*_,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:Js,RAD2DEG:Ms,generateUUID:Pn,clamp:Bt,euclideanModulo:Tc,mapLinear:Td,inverseLerp:bd,lerp:Qs,damp:Ad,pingpong:wd,smoothstep:Cd,smootherstep:Rd,randInt:Pd,randFloat:Ld,randFloatSpread:Id,seededRandom:Dd,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Od,ceilPowerOfTwo:Fd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:kd,normalize:gt,denormalize:bn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,o,a,l,h){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,h)}set(e,t,n,s,r,o,a,l,h){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],d=n[7],p=n[2],_=n[5],v=n[8],E=s[0],g=s[3],m=s[6],R=s[1],b=s[4],C=s[7],z=s[2],N=s[5],I=s[8];return r[0]=o*E+a*R+l*z,r[3]=o*g+a*b+l*N,r[6]=o*m+a*C+l*I,r[1]=h*E+u*R+d*z,r[4]=h*g+u*b+d*N,r[7]=h*m+u*C+d*I,r[2]=p*E+_*R+v*z,r[5]=p*g+_*b+v*N,r[8]=p*m+_*C+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-n*r*u+n*a*l+s*r*h-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=u*o-a*h,p=a*l-u*r,_=h*r-o*l,v=t*d+n*p+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=d*E,e[1]=(s*h-u*n)*E,e[2]=(a*n-s*o)*E,e[3]=p*E,e[4]=(u*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=_*E,e[7]=(n*l-h*t)*E,e[8]=(o*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Ze;function Vh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){const i=ar("canvas");return i.style.display="block",i}const rl={};function ho(i){i in rl||(rl[i]=!0,console.warn(i))}function Hd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Vd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ol=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),al=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[Nt]:{transfer:mo,primaries:go,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[bt]:{transfer:Et,primaries:go,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mo]:{transfer:mo,primaries:_o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(al),fromReference:i=>i.applyMatrix3(ol)},[Mc]:{transfer:Et,primaries:_o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(al),fromReference:i=>i.applyMatrix3(ol).convertLinearToSRGB()}},Wd=new Set([Nt,Mo]),ut={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=zs[e].toReference,s=zs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return zs[i].primaries},getTransfer:function(i){return i===Jn?mo:zs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(zs[e].luminanceCoefficients)}};function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Uo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class Xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=ar("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ms(t[n]/255)*255):t[n]=ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jd=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oo(s[o].image)):r.push(Oo(s[o]))}else r=Oo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class zt extends Wi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Dn,s=Dn,r=kt,o=Nn,a=cn,l=ai,h=zt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Pn(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Ch;zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,h=l[0],u=l[4],d=l[8],p=l[1],_=l[5],v=l[9],E=l[2],g=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+E)<.1&&Math.abs(v+g)<.1&&Math.abs(h+_+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(_+1)/2,z=(m+1)/2,N=(u+p)/4,I=(d+E)/4,H=(v+g)/4;return b>C&&b>z?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=N/n,r=I/n):C>z?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=N/s,r=H/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=I/r,s=H/r),this.set(n,s,r,t),this}let R=Math.sqrt((g-v)*(g-v)+(d-E)*(d-E)+(p-u)*(p-u));return Math.abs(R)<.001&&(R=1),this.x=(g-v)/R,this.y=(d-E)/R,this.z=(p-u)/R,this.w=Math.acos((h+_+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wh extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3];const p=r[o+0],_=r[o+1],v=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=_,e[t+2]=v,e[t+3]=E;return}if(d!==E||l!==p||h!==_||u!==v){let g=1-a;const m=l*p+h*_+u*v+d*E,R=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const z=Math.sqrt(b),N=Math.atan2(z,m*R);g=Math.sin(g*N)/z,a=Math.sin(a*N)/z}const C=a*R;if(l=l*g+p*C,h=h*g+_*C,u=u*g+v*C,d=d*g+E*C,g===1-a){const z=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=z,h*=z,u*=z,d*=z}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o],p=r[o+1],_=r[o+2],v=r[o+3];return e[t]=a*v+u*d+l*_-h*p,e[t+1]=l*v+u*p+h*d-a*_,e[t+2]=h*v+u*_+a*p-l*d,e[t+3]=u*v-a*d-l*p-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(s/2),d=a(r/2),p=l(n/2),_=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*u*d+h*_*v,this._y=h*_*d-p*u*v,this._z=h*u*v+p*_*d,this._w=h*u*d-p*_*v;break;case"YXZ":this._x=p*u*d+h*_*v,this._y=h*_*d-p*u*v,this._z=h*u*v-p*_*d,this._w=h*u*d+p*_*v;break;case"ZXY":this._x=p*u*d-h*_*v,this._y=h*_*d+p*u*v,this._z=h*u*v+p*_*d,this._w=h*u*d-p*_*v;break;case"ZYX":this._x=p*u*d-h*_*v,this._y=h*_*d+p*u*v,this._z=h*u*v-p*_*d,this._w=h*u*d+p*_*v;break;case"YZX":this._x=p*u*d+h*_*v,this._y=h*_*d+p*u*v,this._z=h*u*v-p*_*d,this._w=h*u*d-p*_*v;break;case"XZY":this._x=p*u*d-h*_*v,this._y=h*_*d-p*u*v,this._z=h*u*v+p*_*d,this._w=h*u*d+p*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10],p=n+a+d;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-l)*_,this._y=(r-h)*_,this._z=(o-s)*_}else if(n>a&&n>d){const _=2*Math.sqrt(1+n-a-d);this._w=(u-l)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+h)/_}else if(a>d){const _=2*Math.sqrt(1+a-n-d);this._w=(r-h)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-n-a);this._w=(o-s)/_,this._x=(r+h)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-s*a,this._w=o*u-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),d=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*h+o*d-a*u,this.y=n+l*u+a*h-r*d,this.z=s+l*d+r*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new L,cl=new sn;class li{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Tr.subVectors(this.max,Hs),Zi.subVectors(e.a,Hs),$i.subVectors(e.b,Hs),Ji.subVectors(e.c,Hs),di.subVectors($i,Zi),fi.subVectors(Ji,$i),Ci.subVectors(Zi,Ji);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,fi.z,0,-fi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ci.y,Ci.x,0];return!Bo(t,Zi,$i,Ji,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,Zi,$i,Ji,Tr))?!1:(br.crossVectors(di,fi),t=[br.x,br.y,br.z],Bo(t,Zi,$i,Ji,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,Mr=new li,Zi=new L,$i=new L,Ji=new L,di=new L,fi=new L,Ci=new L,Hs=new L,Tr=new L,br=new L,Ri=new L;function Bo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ri.fromArray(i,r);const a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),h=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const Zd=new li,Vs=new L,ko=new L;class Bn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(ko)),this.expandByPoint(Vs.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new L,zo=new L,Ar=new L,pi=new L,Ho=new L,wr=new L,Vo=new L;class ur{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zo.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=pi.dot(this.direction),l=-pi.dot(Ar),h=pi.lengthSq(),u=Math.abs(1-o*o);let d,p,_,v;if(u>0)if(d=o*l-a,p=o*a-l,v=r*u,d>=0)if(p>=-v)if(p<=v){const E=1/u;d*=E,p*=E,_=d*(d+o*p+2*a)+p*(o*d+p+2*l)+h}else p=r,d=Math.max(0,-(o*p+a)),_=-d*d+p*(p+2*l)+h;else p=-r,d=Math.max(0,-(o*p+a)),_=-d*d+p*(p+2*l)+h;else p<=-v?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+p*(p+2*l)+h):p<=v?(d=0,p=Math.min(Math.max(-r,-l),r),_=p*(p+2*l)+h):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+p*(p+2*l)+h);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),_=-d*d+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zo).addScaledVector(Ar,p),_}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){Ho.subVectors(t,e),wr.subVectors(n,e),Vo.crossVectors(Ho,wr);let o=this.direction.dot(Vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(wr.crossVectors(pi,wr));if(l<0)return null;const h=a*this.direction.dot(Ho.cross(pi));if(h<0||l+h>o)return null;const u=-a*pi.dot(Vo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,o,a,l,h,u,d,p,_,v,E,g){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,h,u,d,p,_,v,E,g)}set(e,t,n,s,r,o,a,l,h,u,d,p,_,v,E,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=d,m[14]=p,m[3]=_,m[7]=v,m[11]=E,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=o*u,_=o*d,v=a*u,E=a*d;t[0]=l*u,t[4]=-l*d,t[8]=h,t[1]=_+v*h,t[5]=p-E*h,t[9]=-a*l,t[2]=E-p*h,t[6]=v+_*h,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,_=l*d,v=h*u,E=h*d;t[0]=p+E*a,t[4]=v*a-_,t[8]=o*h,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=E+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,_=l*d,v=h*u,E=h*d;t[0]=p-E*a,t[4]=-o*d,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=E-p*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,_=o*d,v=a*u,E=a*d;t[0]=l*u,t[4]=v*h-_,t[8]=p*h+E,t[1]=l*d,t[5]=E*h+p,t[9]=_*h-v,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,_=o*h,v=a*l,E=a*h;t[0]=l*u,t[4]=E-p*d,t[8]=v*d+_,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=_*d+v,t[10]=p-E*d}else if(e.order==="XZY"){const p=o*l,_=o*h,v=a*l,E=a*h;t[0]=l*u,t[4]=-d,t[8]=h*u,t[1]=p*d+E,t[5]=o*u,t[9]=_*d-v,t[2]=v*d-_,t[6]=a*u,t[10]=E*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,Jd)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),mi.crossVectors(n,rn),mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),mi.crossVectors(n,rn)),mi.normalize(),Cr.crossVectors(rn,mi),s[0]=mi.x,s[4]=Cr.x,s[8]=rn.x,s[1]=mi.y,s[5]=Cr.y,s[9]=rn.y,s[2]=mi.z,s[6]=Cr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],d=n[5],p=n[9],_=n[13],v=n[2],E=n[6],g=n[10],m=n[14],R=n[3],b=n[7],C=n[11],z=n[15],N=s[0],I=s[4],H=s[8],ne=s[12],y=s[1],w=s[5],j=s[9],K=s[13],Q=s[2],re=s[6],Z=s[10],ae=s[14],J=s[3],_e=s[7],xe=s[11],Ae=s[15];return r[0]=o*N+a*y+l*Q+h*J,r[4]=o*I+a*w+l*re+h*_e,r[8]=o*H+a*j+l*Z+h*xe,r[12]=o*ne+a*K+l*ae+h*Ae,r[1]=u*N+d*y+p*Q+_*J,r[5]=u*I+d*w+p*re+_*_e,r[9]=u*H+d*j+p*Z+_*xe,r[13]=u*ne+d*K+p*ae+_*Ae,r[2]=v*N+E*y+g*Q+m*J,r[6]=v*I+E*w+g*re+m*_e,r[10]=v*H+E*j+g*Z+m*xe,r[14]=v*ne+E*K+g*ae+m*Ae,r[3]=R*N+b*y+C*Q+z*J,r[7]=R*I+b*w+C*re+z*_e,r[11]=R*H+b*j+C*Z+z*xe,r[15]=R*ne+b*K+C*ae+z*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],d=e[6],p=e[10],_=e[14],v=e[3],E=e[7],g=e[11],m=e[15];return v*(+r*l*d-s*h*d-r*a*p+n*h*p+s*a*_-n*l*_)+E*(+t*l*_-t*h*p+r*o*p-s*o*_+s*h*u-r*l*u)+g*(+t*h*d-t*a*_-r*o*d+n*o*_+r*a*u-n*h*u)+m*(-s*a*u-t*l*d+t*a*p+s*o*d-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=e[9],p=e[10],_=e[11],v=e[12],E=e[13],g=e[14],m=e[15],R=d*g*h-E*p*h+E*l*_-a*g*_-d*l*m+a*p*m,b=v*p*h-u*g*h-v*l*_+o*g*_+u*l*m-o*p*m,C=u*E*h-v*d*h+v*a*_-o*E*_-u*a*m+o*d*m,z=v*d*l-u*E*l-v*a*p+o*E*p+u*a*g-o*d*g,N=t*R+n*b+s*C+r*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=R*I,e[1]=(E*p*r-d*g*r-E*s*_+n*g*_+d*s*m-n*p*m)*I,e[2]=(a*g*r-E*l*r+E*s*h-n*g*h-a*s*m+n*l*m)*I,e[3]=(d*l*r-a*p*r-d*s*h+n*p*h+a*s*_-n*l*_)*I,e[4]=b*I,e[5]=(u*g*r-v*p*r+v*s*_-t*g*_-u*s*m+t*p*m)*I,e[6]=(v*l*r-o*g*r-v*s*h+t*g*h+o*s*m-t*l*m)*I,e[7]=(o*p*r-u*l*r+u*s*h-t*p*h-o*s*_+t*l*_)*I,e[8]=C*I,e[9]=(v*d*r-u*E*r-v*n*_+t*E*_+u*n*m-t*d*m)*I,e[10]=(o*E*r-v*a*r+v*n*h-t*E*h-o*n*m+t*a*m)*I,e[11]=(u*a*r-o*d*r-u*n*h+t*d*h+o*n*_-t*a*_)*I,e[12]=z*I,e[13]=(u*E*s-v*d*s+v*n*p-t*E*p-u*n*g+t*d*g)*I,e[14]=(v*a*s-o*E*s-v*n*l+t*E*l+o*n*g-t*a*g)*I,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*p+t*a*p)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+n,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,u=o+o,d=a+a,p=r*h,_=r*u,v=r*d,E=o*u,g=o*d,m=a*d,R=l*h,b=l*u,C=l*d,z=n.x,N=n.y,I=n.z;return s[0]=(1-(E+m))*z,s[1]=(_+C)*z,s[2]=(v-b)*z,s[3]=0,s[4]=(_-C)*N,s[5]=(1-(p+m))*N,s[6]=(g+R)*N,s[7]=0,s[8]=(v+b)*I,s[9]=(g-R)*I,s[10]=(1-(p+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const h=1/r,u=1/o,d=1/a;return yn.elements[0]*=h,yn.elements[1]*=h,yn.elements[2]*=h,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ii){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let _,v;if(a===ii)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===xo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii){const l=this.elements,h=1/(t-e),u=1/(n-s),d=1/(o-r),p=(t+e)*h,_=(n+s)*u;let v,E;if(a===ii)v=(o+r)*d,E=-2*d;else if(a===xo)v=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=E,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new L,yn=new je,$d=new L(0,0,0),Jd=new L(1,1,1),mi=new L,Cr=new L,rn=new L,ll=new je,hl=new sn;class _n{constructor(e=0,t=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],d=s[2],p=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qd=0;const ul=new L,es=new sn,jn=new je,Rr=new L,Gs=new L,ef=new L,tf=new sn,dl=new L(1,0,0),fl=new L(0,1,0),pl=new L(0,0,1),ml={type:"added"},nf={type:"removed"},ts={type:"childadded",child:null},Go={type:"childremoved",child:null};class dt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new L,t=new _n,n=new sn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(fl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(fl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Gs,Rr,this.up):jn.lookAt(Rr,Gs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(jn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ml),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nf),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ml),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new L,Yn=new L,Wo=new L,qn=new L,ns=new L,is=new L,gl=new L,Xo=new L,jo=new L,Yo=new L,qo=new pt,Ko=new pt,Zo=new pt;class An{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Yn.subVectors(n,t),Wo.subVectors(e,t);const o=En.dot(En),a=En.dot(Yn),l=En.dot(Wo),h=Yn.dot(Yn),u=Yn.dot(Wo),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;const p=1/d,_=(h*l-a*u)*p,v=(o*u-a*l)*p;return r.set(1-_-v,v,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return qo.setScalar(0),Ko.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,n),Zo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Ko,r.y),o.addScaledVector(Zo,r.z),o}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Yn.subVectors(e,t),En.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),Xo.subVectors(e,n);const l=ns.dot(Xo),h=is.dot(Xo);if(l<=0&&h<=0)return t.copy(n);jo.subVectors(e,s);const u=ns.dot(jo),d=is.dot(jo);if(u>=0&&d<=u)return t.copy(s);const p=l*d-u*h;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ns,o);Yo.subVectors(e,r);const _=ns.dot(Yo),v=is.dot(Yo);if(v>=0&&_<=v)return t.copy(r);const E=_*h-l*v;if(E<=0&&h>=0&&v<=0)return a=h/(h-v),t.copy(n).addScaledVector(is,a);const g=u*v-_*d;if(g<=0&&d-u>=0&&_-v>=0)return gl.subVectors(r,s),a=(d-u)/(d-u+(_-v)),t.copy(s).addScaledVector(gl,a);const m=1/(g+E+p);return o=E*m,a=p*m,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function $o(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Tc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$o(o,r,e+1/3),this.g=$o(o,r,e),this.b=$o(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ut.fromWorkingColorSpace(jt.copy(this),e),Math.round(Bt(jt.r*255,0,255))*65536+Math.round(Bt(jt.g*255,0,255))*256+Math.round(Bt(jt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=bt){ut.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Pr);const n=Qs(gi.h,Pr.h,t),s=Qs(gi.s,Pr.s,t),r=Qs(gi.l,Pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Oe;Oe.NAMES=jh;let sf=0;class Un extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=fs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Aa,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cn extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qn=rf();function rf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,s[l]=-h-1,s[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,s[l]=13,s[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[l]=h|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function of(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Bt(i,-65504,65504),Qn.floatView[0]=i;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function af(i){const e=i>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(i&1023)]+Qn.exponentTable[e],Qn.floatView[0]}const _l={toHalfFloat:of,fromHalfFloat:af},It=new L,Lr=new Ue;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}}class Yh extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qh extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cf=0;const hn=new je,Jo=new dt,ss=new L,on=new li,Ws=new li,Ft=new L;class yt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?qh:Yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(on.min,Ws.min),on.expandByPoint(Ft),Ft.addVectors(on.max,Ws.max),on.expandByPoint(Ft)):(on.expandByPoint(Ws.min),on.expandByPoint(Ws.max))}on.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ft.fromBufferAttribute(a,h),l&&(ss.fromBufferAttribute(e,h),Ft.add(ss)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<n.count;H++)a[H]=new L,l[H]=new L;const h=new L,u=new L,d=new L,p=new Ue,_=new Ue,v=new Ue,E=new L,g=new L;function m(H,ne,y){h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,ne),d.fromBufferAttribute(n,y),p.fromBufferAttribute(r,H),_.fromBufferAttribute(r,ne),v.fromBufferAttribute(r,y),u.sub(h),d.sub(h),_.sub(p),v.sub(p);const w=1/(_.x*v.y-v.x*_.y);isFinite(w)&&(E.copy(u).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(w),g.copy(d).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(w),a[H].add(E),a[ne].add(E),a[y].add(E),l[H].add(g),l[ne].add(g),l[y].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let H=0,ne=R.length;H<ne;++H){const y=R[H],w=y.start,j=y.count;for(let K=w,Q=w+j;K<Q;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const b=new L,C=new L,z=new L,N=new L;function I(H){z.fromBufferAttribute(s,H),N.copy(z);const ne=a[H];b.copy(ne),b.sub(z.multiplyScalar(z.dot(ne))).normalize(),C.crossVectors(N,ne);const w=C.dot(l[H])<0?-1:1;o.setXYZW(H,b.x,b.y,b.z,w)}for(let H=0,ne=R.length;H<ne;++H){const y=R[H],w=y.start,j=y.count;for(let K=w,Q=w+j;K<Q;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,h=new L,u=new L,d=new L;if(e)for(let p=0,_=e.count;p<_;p+=3){const v=e.getX(p+0),E=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,g),a.add(u),l.add(u),h.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,_=t.count;p<_;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,d=a.normalized,p=new h.constructor(l.length*u);let _=0,v=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?_=l[E]*a.data.stride+a.offset:_=l[E]*u;for(let m=0;m<u;m++)p[v++]=h[_++]}return new At(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=e(l,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,d=h.length;u<d;u++){const p=h[u],_=e(p,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d];u.push(_.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],d=r[h];for(let p=0,_=d.length;p<_;p++)u.push(d[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new je,Pi=new ur,Ir=new Bn,vl=new L,Dr=new L,Nr=new L,Ur=new L,Qo=new L,Or=new L,Sl=new L,Fr=new L;class vt extends dt{constructor(e=new yt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],d=r[l];u!==0&&(Qo.fromBufferAttribute(d,e),o?Or.addScaledVector(Qo,u):Or.addScaledVector(Qo.sub(t),u))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Ir.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Ir,vl)===null||Pi.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(xl.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(xl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=p.length;v<E;v++){const g=p[v],m=o[g.materialIndex],R=Math.max(g.start,_.start),b=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let C=R,z=b;C<z;C+=3){const N=a.getX(C),I=a.getX(C+1),H=a.getX(C+2);s=Br(this,m,e,n,h,u,d,N,I,H),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),E=Math.min(a.count,_.start+_.count);for(let g=v,m=E;g<m;g+=3){const R=a.getX(g),b=a.getX(g+1),C=a.getX(g+2);s=Br(this,o,e,n,h,u,d,R,b,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,E=p.length;v<E;v++){const g=p[v],m=o[g.materialIndex],R=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let C=R,z=b;C<z;C+=3){const N=C,I=C+1,H=C+2;s=Br(this,m,e,n,h,u,d,N,I,H),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let g=v,m=E;g<m;g+=3){const R=g,b=g+1,C=g+2;s=Br(this,o,e,n,h,u,d,R,b,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function lf(i,e,t,n,s,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Fr);return h<t.near||h>t.far?null:{distance:h,point:Fr.clone(),object:i}}function Br(i,e,t,n,s,r,o,a,l,h){i.getVertexPosition(a,Dr),i.getVertexPosition(l,Nr),i.getVertexPosition(h,Ur);const u=lf(i,e,t,n,Dr,Nr,Ur,Sl);if(u){const d=new L;An.getBarycoord(Sl,Dr,Nr,Ur,d),s&&(u.uv=An.getInterpolatedAttribute(s,a,l,h,d,new Ue)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,l,h,d,new Ue)),o&&(u.normal=An.getInterpolatedAttribute(o,a,l,h,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new L,materialIndex:0};An.getNormal(Dr,Nr,Ur,p.normal),u.face=p,u.barycoord=d}return u}class Ls extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],d=[];let p=0,_=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function v(E,g,m,R,b,C,z,N,I,H,ne){const y=C/I,w=z/H,j=C/2,K=z/2,Q=N/2,re=I+1,Z=H+1;let ae=0,J=0;const _e=new L;for(let xe=0;xe<Z;xe++){const Ae=xe*w-K;for(let ke=0;ke<re;ke++){const Ge=ke*y-j;_e[E]=Ge*R,_e[g]=Ae*b,_e[m]=Q,h.push(_e.x,_e.y,_e.z),_e[E]=0,_e[g]=0,_e[m]=N>0?1:-1,u.push(_e.x,_e.y,_e.z),d.push(ke/I),d.push(1-xe/H),ae+=1}}for(let xe=0;xe<H;xe++)for(let Ae=0;Ae<I;Ae++){const ke=p+Ae+re*xe,Ge=p+Ae+re*(xe+1),ee=p+(Ae+1)+re*(xe+1),le=p+(Ae+1)+re*xe;l.push(ke,Ge,le),l.push(Ge,ee,le),J+=6}a.addGroup(_,J,ne),_+=J,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const s in n)e[s]=n[s]}return e}function hf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const uf={clone:Ts,merge:qt};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new L,yl=new Ue,El=new Ue;class Zt extends Zh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,yl,El),t.subVectors(El,yl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class pf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new Zt(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new Zt(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new Zt(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new Zt(rs,os,e,t);l.layers=this.layers,this.add(l);const h=new Zt(rs,os,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const h of t)this.remove(h);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class $h extends zt{constructor(e,t,n,s,r,o,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mf extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $h(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ls(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Mi});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=kt),new pf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ea=new L,gf=new L,_f=new Ze;class yi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ea.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_f.getNormalMatrix(e),s=this.coplanarPoint(ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Bn,kr=new L;class bc{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],_=s[8],v=s[9],E=s[10],g=s[11],m=s[12],R=s[13],b=s[14],C=s[15];if(n[0].setComponents(l-r,p-h,g-_,C-m).normalize(),n[1].setComponents(l+r,p+h,g+_,C+m).normalize(),n[2].setComponents(l+o,p+u,g+v,C+R).normalize(),n[3].setComponents(l-o,p-u,g-v,C-R).normalize(),n[4].setComponents(l-a,p-d,g-E,C-b).normalize(),t===ii)n[5].setComponents(l+a,p+d,g+E,C+b).normalize();else if(t===xo)n[5].setComponents(a,d,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(kr.x=s.normal.x>0?e.max.x:e.min.x,kr.y=s.normal.y>0?e.max.y:e.min.y,kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xf(i){const e=new WeakMap;function t(a,l){const h=a.array,u=a.usage,d=h.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,h,u),a.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,h){const u=l.array,d=l.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,u);else{d.sort((_,v)=>_.start-v.start);let p=0;for(let _=1;_<d.length;_++){const v=d[p],E=d[_];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++p,d[p]=E)}d.length=p+1;for(let _=0,v=d.length;_<v;_++){const E=d[_];i.bufferSubData(h,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class To extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),h=a+1,u=l+1,d=e/a,p=t/l,_=[],v=[],E=[],g=[];for(let m=0;m<u;m++){const R=m*p-o;for(let b=0;b<h;b++){const C=b*d-r;v.push(C,-R,0),E.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<a;R++){const b=R+h*m,C=R+h*(m+1),z=R+1+h*(m+1),N=R+1+h*m;_.push(b,C,N),_.push(C,z,N)}this.setIndex(_),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(E,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}var vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:vf,alphahash_pars_fragment:Sf,alphamap_fragment:yf,alphamap_pars_fragment:Ef,alphatest_fragment:Mf,alphatest_pars_fragment:Tf,aomap_fragment:bf,aomap_pars_fragment:Af,batching_pars_vertex:wf,batching_vertex:Cf,begin_vertex:Rf,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:If,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Ff,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Hf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:jf,emissivemap_fragment:Yf,emissivemap_pars_fragment:qf,colorspace_fragment:Kf,colorspace_pars_fragment:Zf,envmap_fragment:$f,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:ep,envmap_physical_pars_fragment:up,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:op,lightmap_pars_fragment:ap,lights_lambert_fragment:cp,lights_lambert_pars_fragment:lp,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:_p,lights_fragment_begin:xp,lights_fragment_maps:vp,lights_fragment_end:Sp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Tp,map_fragment:bp,map_pars_fragment:Ap,map_particle_fragment:wp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Lp,morphcolor_vertex:Ip,morphnormal_vertex:Dp,morphtarget_pars_vertex:Np,morphtarget_vertex:Up,normal_fragment_begin:Op,normal_fragment_maps:Fp,normal_pars_fragment:Bp,normal_pars_vertex:kp,normal_vertex:zp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:jp,packing:Yp,premultiplied_alpha_fragment:qp,project_vertex:Kp,dithering_fragment:Zp,dithering_pars_fragment:$p,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:om,skinnormal_vertex:am,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:xm,background_frag:vm,backgroundCube_vert:Sm,backgroundCube_frag:ym,cube_vert:Em,cube_frag:Mm,depth_vert:Tm,depth_frag:bm,distanceRGBA_vert:Am,distanceRGBA_frag:wm,equirect_vert:Cm,equirect_frag:Rm,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Im,meshbasic_frag:Dm,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Om,meshmatcap_frag:Fm,meshnormal_vert:Bm,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Hm,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:jm,points_frag:Ym,shadow_vert:qm,shadow_frag:Km,sprite_vert:Zm,sprite_frag:$m},Se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},In={basic:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:qt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:qt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:qt([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:qt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:qt([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:qt([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:qt([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:qt([Se.lights,Se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};In.physical={uniforms:qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const zr={r:0,b:0,g:0},Ii=new _n,Jm=new je;function Qm(i,e,t,n,s,r,o){const a=new Oe(0);let l=r===!0?0:1,h,u,d=null,p=0,_=null;function v(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function E(R){let b=!1;const C=v(R);C===null?m(a,l):C&&C.isColor&&(m(C,1),b=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(R,b){const C=v(b);C&&(C.isCubeTexture||C.mapping===yo)?(u===void 0&&(u=new vt(new Ls(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ts(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ii.copy(b.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Ii)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==Et,(d!==C||p!==C.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,p=C.version,_=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new vt(new To(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ts(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=ut.getTransfer(C.colorSpace)!==Et,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,p=C.version,_=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function m(R,b){R.getRGB(zr,Kh(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,m(a,l)},render:E,addToRenderList:g}}function eg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(y,w,j,K,Q){let re=!1;const Z=d(K,j,w);r!==Z&&(r=Z,h(r.object)),re=_(y,K,j,Q),re&&v(y,K,j,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,C(y,w,j,K),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,w,j){const K=j.wireframe===!0;let Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let re=Q[w.id];re===void 0&&(re={},Q[w.id]=re);let Z=re[K];return Z===void 0&&(Z=p(l()),re[K]=Z),Z}function p(y){const w=[],j=[],K=[];for(let Q=0;Q<t;Q++)w[Q]=0,j[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:j,attributeDivisors:K,object:y,attributes:{},index:null}}function _(y,w,j,K){const Q=r.attributes,re=w.attributes;let Z=0;const ae=j.getAttributes();for(const J in ae)if(ae[J].location>=0){const xe=Q[J];let Ae=re[J];if(Ae===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),xe===void 0||xe.attribute!==Ae||Ae&&xe.data!==Ae.data)return!0;Z++}return r.attributesNum!==Z||r.index!==K}function v(y,w,j,K){const Q={},re=w.attributes;let Z=0;const ae=j.getAttributes();for(const J in ae)if(ae[J].location>=0){let xe=re[J];xe===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ae={};Ae.attribute=xe,xe&&xe.data&&(Ae.data=xe.data),Q[J]=Ae,Z++}r.attributes=Q,r.attributesNum=Z,r.index=K}function E(){const y=r.newAttributes;for(let w=0,j=y.length;w<j;w++)y[w]=0}function g(y){m(y,0)}function m(y,w){const j=r.newAttributes,K=r.enabledAttributes,Q=r.attributeDivisors;j[y]=1,K[y]===0&&(i.enableVertexAttribArray(y),K[y]=1),Q[y]!==w&&(i.vertexAttribDivisor(y,w),Q[y]=w)}function R(){const y=r.newAttributes,w=r.enabledAttributes;for(let j=0,K=w.length;j<K;j++)w[j]!==y[j]&&(i.disableVertexAttribArray(j),w[j]=0)}function b(y,w,j,K,Q,re,Z){Z===!0?i.vertexAttribIPointer(y,w,j,Q,re):i.vertexAttribPointer(y,w,j,K,Q,re)}function C(y,w,j,K){E();const Q=K.attributes,re=j.getAttributes(),Z=w.defaultAttributeValues;for(const ae in re){const J=re[ae];if(J.location>=0){let _e=Q[ae];if(_e===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),_e!==void 0){const xe=_e.normalized,Ae=_e.itemSize,ke=e.get(_e);if(ke===void 0)continue;const Ge=ke.buffer,ee=ke.type,le=ke.bytesPerElement,fe=ee===i.INT||ee===i.UNSIGNED_INT||_e.gpuType===_c;if(_e.isInterleavedBufferAttribute){const D=_e.data,he=D.stride,Ee=_e.offset;if(D.isInstancedInterleavedBuffer){for(let Be=0;Be<J.locationSize;Be++)m(J.location+Be,D.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Be=0;Be<J.locationSize;Be++)g(J.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Be=0;Be<J.locationSize;Be++)b(J.location+Be,Ae/J.locationSize,ee,xe,he*le,(Ee+Ae/J.locationSize*Be)*le,fe)}else{if(_e.isInstancedBufferAttribute){for(let D=0;D<J.locationSize;D++)m(J.location+D,_e.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let D=0;D<J.locationSize;D++)g(J.location+D);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let D=0;D<J.locationSize;D++)b(J.location+D,Ae/J.locationSize,ee,xe,Ae*le,Ae/J.locationSize*D*le,fe)}}else if(Z!==void 0){const xe=Z[ae];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(J.location,xe);break;case 3:i.vertexAttrib3fv(J.location,xe);break;case 4:i.vertexAttrib4fv(J.location,xe);break;default:i.vertexAttrib1fv(J.location,xe)}}}}R()}function z(){H();for(const y in n){const w=n[y];for(const j in w){const K=w[j];for(const Q in K)u(K[Q].object),delete K[Q];delete w[j]}delete n[y]}}function N(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const j in w){const K=w[j];for(const Q in K)u(K[Q].object),delete K[Q];delete w[j]}delete n[y.id]}function I(y){for(const w in n){const j=n[w];if(j[y.id]===void 0)continue;const K=j[y.id];for(const Q in K)u(K[Q].object),delete K[Q];delete j[y.id]}}function H(){ne(),o=!0,r!==s&&(r=s,h(r.object))}function ne(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:ne,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:g,disableUnusedAttributes:R}}function tg(i,e,t){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),t.update(u,n,1)}function o(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),t.update(u,n,d))}function a(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,n,1)}function l(h,u,d,p){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<h.length;v++)o(h[v],u[v],p[v]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,d);let v=0;for(let E=0;E<d;E++)v+=u[E];for(let E=0;E<p.length;E++)t.update(v,n,p[E])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ng(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const H=I===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ai&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==tn&&!H)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=v>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:z,maxSamples:N}}function ig(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new yi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const _=d.length!==0||p||n!==0||s;return s=p,n=d.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,_){const v=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):h();else{const R=r?0:n,b=R*4;let C=m.clippingState||null;l.value=C,C=u(v,p,b,_);for(let z=0;z!==b;++z)C[z]=t[z];m.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,_,v){const E=d!==null?d.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const m=_+E*4,R=p.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,C=_;b!==E;++b,C+=4)o.copy(d[b]).applyMatrix4(R,a),o.normal.toArray(g,C),g[C+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function sg(i){let e=new WeakMap;function t(o,a){return a===ir?o.mapping=xs:a===Na&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ir||a===Na)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new mf(l.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ac extends Zh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,Ml=[.125,.215,.35,.446,.526,.582],Fi=20,ta=new Ac,Tl=new Oe;let na=null,ia=0,sa=0,ra=!1;const Ui=(1+Math.sqrt(5))/2,as=1/Ui,bl=[new L(-Ui,as,0),new L(Ui,as,0),new L(-as,0,Ui),new L(as,0,Ui),new L(0,Ui,-as),new L(0,Ui,as),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:ni,format:cn,colorSpace:Nt,depthBuffer:!1},s=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=og(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,s){const a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Tl),u.toneMapping=Ti,u.autoClear=!1;const _=new Cn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new vt(new Ls,_);let E=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,E=!0):(_.color.copy(Tl),E=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):R===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));const b=this._cubeSize;Hr(s,R*b,m>2?b:0,b,b),u.setRenderTarget(s),E&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bl[(s-r-1)%bl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vt(this._lodPlanes[s],h),p=h.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Fi-1),E=r/v,g=isFinite(r)?1+Math.floor(u*E):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let R=0;for(let I=0;I<Fi;++I){const H=I/E,ne=Math.exp(-H*H/2);m.push(ne),I===0?R+=ne:I<g&&(R+=2*ne)}for(let I=0;I<m.length;I++)m[I]=m[I]/R;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const C=this._sizeLods[s],z=3*C*(s>b-us?s-b+us:0),N=4*(this._cubeSize-C);Hr(t,z,N,3*C,2*C),l.setRenderTarget(t),l.render(d,ta)}}function rg(i){const e=[],t=[],n=[];let s=i;const r=i-us+1+Ml.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-us?l=Ml[o-i+us-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,d=1+h,p=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,v=6,E=3,g=2,m=1,R=new Float32Array(E*v*_),b=new Float32Array(g*v*_),C=new Float32Array(m*v*_);for(let N=0;N<_;N++){const I=N%3*2/3-1,H=N>2?0:-1,ne=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];R.set(ne,E*v*N),b.set(p,g*v*N);const y=[N,N,N,N,N,N];C.set(y,m*v*N)}const z=new yt;z.setAttribute("position",new At(R,E)),z.setAttribute("uv",new At(b,g)),z.setAttribute("faceIndex",new At(C,m)),e.push(z),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(i,e,t){const n=new Gi(i,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function og(i,e,t){const n=new Float32Array(Fi),s=new L(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Cl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Rl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ag(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===ir||l===Na,u=l===xs||l===vs;if(h||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Al(i)),d=h?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const _=a.image;return h&&_&&_.height>0||u&&_&&s(_)?(t===null&&(t=new Al(i)),d=h?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ho("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,e,t,n){const s={},r=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const E=p.morphAttributes[v];for(let g=0,m=E.length;g<m;g++)e.remove(E[g])}p.removeEventListener("dispose",o),delete s[p.id];const _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const E=_[v];for(let g=0,m=E.length;g<m;g++)e.update(E[g],i.ARRAY_BUFFER)}}function h(d){const p=[],_=d.index,v=d.attributes.position;let E=0;if(_!==null){const R=_.array;E=_.version;for(let b=0,C=R.length;b<C;b+=3){const z=R[b+0],N=R[b+1],I=R[b+2];p.push(z,N,N,I,I,z)}}else if(v!==void 0){const R=v.array;E=v.version;for(let b=0,C=R.length/3-1;b<C;b+=3){const z=b+0,N=b+1,I=b+2;p.push(z,N,N,I,I,z)}}else return;const g=new(Vh(p)?qh:Yh)(p,1);g.version=E;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const p=r.get(d);if(p){const _=d.index;_!==null&&p.version<_.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hg(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,_){i.drawElements(n,_,r,p*o),t.update(_,n,1)}function h(p,_,v){v!==0&&(i.drawElementsInstanced(n,_,r,p*o,v),t.update(_,n,v))}function u(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,p,0,v);let g=0;for(let m=0;m<v;m++)g+=_[m];t.update(g,n,1)}function d(p,_,v,E){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)h(p[m]/o,_[m],E[m]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,r,p,0,E,0,v);let m=0;for(let R=0;R<v;R++)m+=_[R];for(let R=0;R<E.length;R++)t.update(m,n,E[R])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ug(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dg(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let y=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var _=y;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let C=0;v===!0&&(C=1),E===!0&&(C=2),g===!0&&(C=3);let z=a.attributes.position.count*C,N=1;z>e.maxTextureSize&&(N=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*N*4*d),H=new Wh(I,z,N,d);H.type=tn,H.needsUpdate=!0;const ne=C*4;for(let w=0;w<d;w++){const j=m[w],K=R[w],Q=b[w],re=z*N*4*w;for(let Z=0;Z<j.count;Z++){const ae=Z*ne;v===!0&&(s.fromBufferAttribute(j,Z),I[re+ae+0]=s.x,I[re+ae+1]=s.y,I[re+ae+2]=s.z,I[re+ae+3]=0),E===!0&&(s.fromBufferAttribute(K,Z),I[re+ae+4]=s.x,I[re+ae+5]=s.y,I[re+ae+6]=s.z,I[re+ae+7]=0),g===!0&&(s.fromBufferAttribute(Q,Z),I[re+ae+8]=s.x,I[re+ae+9]=s.y,I[re+ae+10]=s.z,I[re+ae+11]=Q.itemSize===4?s.w:1)}}p={count:d,texture:H,size:new Ue(z,N)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<h.length;g++)v+=h[g];const E=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function fg(i,e,t,n){let s=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class Qh extends zt{constructor(e,t,n,s,r,o,a,l,h,u=ps){if(u!==ps&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ps&&(n=Vi),n===void 0&&u===Es&&(n=ys),super(null,s,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eu=new zt,Pl=new Qh(1,1),tu=new Wh,nu=new Kd,iu=new $h,Ll=[],Il=[],Dl=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function Is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ll[s];if(r===void 0&&(r=new Float32Array(s),Ll[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bo(i,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),Ot(t,n)}}function vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),Ot(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),Ot(t,n)}}function yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=Hh,r=Pl):r=eu,t.setTexture2D(e||r,s)}function Pg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nu,s)}function Lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||iu,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tu,s)}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return vg;case 35676:return Sg;case 5124:case 35670:return yg;case 35667:case 35671:return Eg;case 35668:case 35672:return Mg;case 35669:case 35673:return Tg;case 5125:return bg;case 36294:return Ag;case 36295:return wg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ng(i,e){i.uniform1fv(this.addr,e)}function Ug(i,e){const t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function Og(i,e){const t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function Fg(i,e){const t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function Bg(i,e){const t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kg(i,e){const t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zg(i,e){const t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hg(i,e){i.uniform1iv(this.addr,e)}function Vg(i,e){i.uniform2iv(this.addr,e)}function Gg(i,e){i.uniform3iv(this.addr,e)}function Wg(i,e){i.uniform4iv(this.addr,e)}function Xg(i,e){i.uniform1uiv(this.addr,e)}function jg(i,e){i.uniform2uiv(this.addr,e)}function Yg(i,e){i.uniform3uiv(this.addr,e)}function qg(i,e){i.uniform4uiv(this.addr,e)}function Kg(i,e,t){const n=this.cache,s=e.length,r=bo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||eu,r[o])}function Zg(i,e,t){const n=this.cache,s=e.length,r=bo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nu,r[o])}function $g(i,e,t){const n=this.cache,s=e.length,r=bo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||iu,r[o])}function Jg(i,e,t){const n=this.cache,s=e.length,r=bo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tu,r[o])}function Qg(i){switch(i){case 5126:return Ng;case 35664:return Ug;case 35665:return Og;case 35666:return Fg;case 35674:return Bg;case 35675:return kg;case 35676:return zg;case 5124:case 35670:return Hg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return jg;case 36295:return Yg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Jg}}class e_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class t_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}}class n_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function i_(i,e,t){const n=i.name,s=n.length;for(oa.lastIndex=0;;){const r=oa.exec(n),o=oa.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Ol(t,h===void 0?new e_(a,i,e):new t_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new n_(a),Ol(t,d)),t=d}}}class uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);i_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const s_=37297;let r_=0;function o_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function a_(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===_o&&t===go?n="LinearDisplayP3ToLinearSRGB":e===go&&t===_o&&(n="LinearSRGBToLinearDisplayP3"),i){case Nt:case Mo:return[n,"LinearTransferOETF"];case bt:case Mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+o_(i.getShaderSource(e),o)}else return s}function c_(i,e){const t=a_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function l_(i,e){let t;switch(e){case sd:t="Linear";break;case rd:t="Reinhard";break;case od:t="Cineon";break;case ad:t="ACESFilmic";break;case ld:t="AgX";break;case hd:t="Neutral";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new L;function h_(){ut.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function d_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $s(i){return i!==""}function kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(p_,g_)}const m_=new Map;function g_(i,e){let t=Ke[e];if(t===void 0){const n=m_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(i){return i.replace(__,x_)}function x_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function E_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case nd:e="ENVMAP_BLENDING_MIX";break;case id:e="ENVMAP_BLENDING_ADD";break}return e}function M_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function T_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=v_(t),h=S_(t),u=y_(t),d=E_(t),p=M_(t),_=u_(t),v=d_(r),E=s.createProgram();let g,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($s).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($s).join(`
`),m.length>0&&(m+=`
`)):(g=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),m=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ti?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=lc(o),o=kl(o,t),o=zl(o,t),a=lc(a),a=kl(a,t),a=zl(a,t),o=Hl(o),a=Hl(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=R+g+o,C=R+m+a,z=Fl(s,s.VERTEX_SHADER,b),N=Fl(s,s.FRAGMENT_SHADER,C);s.attachShader(E,z),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(w){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(E).trim(),K=s.getShaderInfoLog(z).trim(),Q=s.getShaderInfoLog(N).trim();let re=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,z,N);else{const ae=Bl(s,z,"vertex"),J=Bl(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+j+`
`+ae+`
`+J)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(K===""||Q==="")&&(Z=!1);Z&&(w.diagnostics={runnable:re,programLog:j,vertexShader:{log:K,prefix:g},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(z),s.deleteShader(N),H=new uo(s,E),ne=f_(s,E)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let ne;this.getAttributes=function(){return ne===void 0&&I(this),ne};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(E,s_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=N,this}let b_=0;class A_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w_(e),t.set(e,n)),n}}class w_{constructor(e){this.id=b_++,this.code=e,this.usedTimes=0}}function C_(i,e,t,n,s,r,o){const a=new Xh,l=new A_,h=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,_=s.vertexTextures;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,w,j,K,Q){const re=K.fog,Z=Q.geometry,ae=y.isMeshStandardMaterial?K.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||ae),_e=J&&J.mapping===yo?J.image.height:null,xe=E[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const Ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ke=Ae!==void 0?Ae.length:0;let Ge=0;Z.morphAttributes.position!==void 0&&(Ge=1),Z.morphAttributes.normal!==void 0&&(Ge=2),Z.morphAttributes.color!==void 0&&(Ge=3);let ee,le,fe,D;if(xe){const Wt=In[xe];ee=Wt.vertexShader,le=Wt.fragmentShader}else ee=y.vertexShader,le=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),D=l.getFragmentShaderID(y);const he=i.getRenderTarget(),Ee=Q.isInstancedMesh===!0,Be=Q.isBatchedMesh===!0,at=!!y.map,Qe=!!y.matcap,F=!!J,Vt=!!y.aoMap,et=!!y.lightMap,ct=!!y.bumpMap,ze=!!y.normalMap,St=!!y.displacementMap,Ve=!!y.emissiveMap,P=!!y.metalnessMap,T=!!y.roughnessMap,X=y.anisotropy>0,se=y.clearcoat>0,de=y.dispersion>0,ie=y.iridescence>0,De=y.sheen>0,ye=y.transmission>0,we=X&&!!y.anisotropyMap,tt=se&&!!y.clearcoatMap,ge=se&&!!y.clearcoatNormalMap,Re=se&&!!y.clearcoatRoughnessMap,He=ie&&!!y.iridescenceMap,Ne=ie&&!!y.iridescenceThicknessMap,ve=De&&!!y.sheenColorMap,nt=De&&!!y.sheenRoughnessMap,Fe=!!y.specularMap,qe=!!y.specularColorMap,B=!!y.specularIntensityMap,Te=ye&&!!y.transmissionMap,k=ye&&!!y.thicknessMap,oe=!!y.gradientMap,Me=!!y.alphaMap,be=y.alphaTest>0,rt=!!y.alphaHash,wt=!!y.extensions;let Gt=Ti;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const lt={shaderID:xe,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:le,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Be,batchingColor:Be&&Q._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Q.instanceColor!==null,instancingMorph:Ee&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Nt,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:Qe,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:_e,aoMap:Vt,lightMap:et,bumpMap:ct,normalMap:ze,displacementMap:_&&St,emissiveMap:Ve,normalMapObjectSpace:ze&&y.normalMapType===gd,normalMapTangentSpace:ze&&y.normalMapType===zh,metalnessMap:P,roughnessMap:T,anisotropy:X,anisotropyMap:we,clearcoat:se,clearcoatMap:tt,clearcoatNormalMap:ge,clearcoatRoughnessMap:Re,dispersion:de,iridescence:ie,iridescenceMap:He,iridescenceThicknessMap:Ne,sheen:De,sheenColorMap:ve,sheenRoughnessMap:nt,specularMap:Fe,specularColorMap:qe,specularIntensityMap:B,transmission:ye,transmissionMap:Te,thicknessMap:k,gradientMap:oe,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:be,alphaHash:rt,combine:y.combine,mapUv:at&&g(y.map.channel),aoMapUv:Vt&&g(y.aoMap.channel),lightMapUv:et&&g(y.lightMap.channel),bumpMapUv:ct&&g(y.bumpMap.channel),normalMapUv:ze&&g(y.normalMap.channel),displacementMapUv:St&&g(y.displacementMap.channel),emissiveMapUv:Ve&&g(y.emissiveMap.channel),metalnessMapUv:P&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:we&&g(y.anisotropyMap.channel),clearcoatMapUv:tt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:nt&&g(y.sheenRoughnessMap.channel),specularMapUv:Fe&&g(y.specularMap.channel),specularColorMapUv:qe&&g(y.specularColorMap.channel),specularIntensityMapUv:B&&g(y.specularIntensityMap.channel),transmissionMapUv:Te&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:Me&&g(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ze||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Z.attributes.uv&&(at||Me),fog:!!re,useFog:y.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:Q.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=h.has(1),lt.vertexUv2s=h.has(2),lt.vertexUv3s=h.has(3),h.clear(),lt}function R(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)w.push(j),w.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(b(w,y),C(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function C(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function z(y){const w=E[y.type];let j;if(w){const K=In[w];j=uf.clone(K.uniforms)}else j=y.uniforms;return j}function N(y,w){let j;for(let K=0,Q=u.length;K<Q;K++){const re=u[K];if(re.cacheKey===w){j=re,++j.usedTimes;break}}return j===void 0&&(j=new T_(i,w,y,r),u.push(j)),j}function I(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function H(y){l.remove(y)}function ne(){l.dispose()}return{getParameters:m,getProgramCacheKey:R,getUniforms:z,acquireProgram:N,releaseProgram:I,releaseShaderCache:H,programs:u,dispose:ne}}function R_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function P_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,p,_,v,E,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:_,groupOrder:v,renderOrder:d.renderOrder,z:E,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=_,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=E,m.group=g),e++,m}function a(d,p,_,v,E,g){const m=o(d,p,_,v,E,g);_.transmission>0?n.push(m):_.transparent===!0?s.push(m):t.push(m)}function l(d,p,_,v,E,g){const m=o(d,p,_,v,E,g);_.transmission>0?n.unshift(m):_.transparent===!0?s.unshift(m):t.unshift(m)}function h(d,p){t.length>1&&t.sort(d||P_),n.length>1&&n.sort(p||Gl),s.length>1&&s.sort(p||Gl)}function u(){for(let d=e,p=i.length;d<p;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function L_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Wl,i.set(n,[o])):s>=r.length?(o=new Wl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function I_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function D_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let N_=0;function U_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O_(i){const e=new I_,t=D_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const s=new L,r=new je,o=new je;function a(h){let u=0,d=0,p=0;for(let ne=0;ne<9;ne++)n.probe[ne].set(0,0,0);let _=0,v=0,E=0,g=0,m=0,R=0,b=0,C=0,z=0,N=0,I=0;h.sort(U_);for(let ne=0,y=h.length;ne<y;ne++){const w=h[ne],j=w.color,K=w.intensity,Q=w.distance,re=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=j.r*K,d+=j.g*K,p+=j.b*K;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(w.sh.coefficients[Z],K);I++}else if(w.isDirectionalLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ae=w.shadow,J=t.get(w);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,n.directionalShadow[_]=J,n.directionalShadowMap[_]=re,n.directionalShadowMatrix[_]=w.shadow.matrix,R++}n.directional[_]=Z,_++}else if(w.isSpotLight){const Z=e.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(j).multiplyScalar(K),Z.distance=Q,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,n.spot[E]=Z;const ae=w.shadow;if(w.map&&(n.spotLightMap[z]=w.map,z++,ae.updateMatrices(w),w.castShadow&&N++),n.spotLightMatrix[E]=ae.matrix,w.castShadow){const J=t.get(w);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,n.spotShadow[E]=J,n.spotShadowMap[E]=re,C++}E++}else if(w.isRectAreaLight){const Z=e.get(w);Z.color.copy(j).multiplyScalar(K),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=Z,g++}else if(w.isPointLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){const ae=w.shadow,J=t.get(w);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,J.shadowCameraNear=ae.camera.near,J.shadowCameraFar=ae.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=re,n.pointShadowMatrix[v]=w.shadow.matrix,b++}n.point[v]=Z,v++}else if(w.isHemisphereLight){const Z=e.get(w);Z.skyColor.copy(w.color).multiplyScalar(K),Z.groundColor.copy(w.groundColor).multiplyScalar(K),n.hemi[m]=Z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const H=n.hash;(H.directionalLength!==_||H.pointLength!==v||H.spotLength!==E||H.rectAreaLength!==g||H.hemiLength!==m||H.numDirectionalShadows!==R||H.numPointShadows!==b||H.numSpotShadows!==C||H.numSpotMaps!==z||H.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=C+z-N,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,H.directionalLength=_,H.pointLength=v,H.spotLength=E,H.rectAreaLength=g,H.hemiLength=m,H.numDirectionalShadows=R,H.numPointShadows=b,H.numSpotShadows=C,H.numSpotMaps=z,H.numLightProbes=I,n.version=N_++)}function l(h,u){let d=0,p=0,_=0,v=0,E=0;const g=u.matrixWorldInverse;for(let m=0,R=h.length;m<R;m++){const b=h[m];if(b.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(b.isSpotLight){const C=n.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const C=n.rectArea[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const C=n.point[p];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),p++}else if(b.isHemisphereLight){const C=n.hemi[E];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:n}}function Xl(i){const e=new O_(i),t=[],n=[];function s(u){h.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function F_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xl(i),e.set(s,[a])):r>=o.length?(a=new Xl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class B_ extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k_ extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V_(i,e,t){let n=new bc;const s=new Ue,r=new Ue,o=new pt,a=new B_({depthPacking:md}),l=new k_,h={},u=t.maxTextureSize,d={[oi]:nn,[nn]:oi,[dn]:dn},p=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:z_,fragmentShader:H_}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const v=new yt;v.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new vt(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let m=this.type;this.render=function(N,I,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const ne=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Mi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=m!==Zn&&this.type===Zn,Q=m===Zn&&this.type!==Zn;for(let re=0,Z=N.length;re<Z;re++){const ae=N[re],J=ae.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const _e=J.getFrameExtents();if(s.multiply(_e),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,J.mapSize.y=r.y)),J.map===null||K===!0||Q===!0){const Ae=this.type!==Zn?{minFilter:$t,magFilter:$t}:{};J.map!==null&&J.map.dispose(),J.map=new Gi(s.x,s.y,Ae),J.map.texture.name=ae.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const xe=J.getViewportCount();for(let Ae=0;Ae<xe;Ae++){const ke=J.getViewport(Ae);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),j.viewport(o),J.updateMatrices(ae,Ae),n=J.getFrustum(),C(I,H,J.camera,ae,this.type)}J.isPointLightShadow!==!0&&this.type===Zn&&R(J,H),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(ne,y,w)};function R(N,I){const H=e.update(E);p.defines.VSM_SAMPLES!==N.blurSamples&&(p.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Gi(s.x,s.y)),p.uniforms.shadow_pass.value=N.map.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(I,null,H,p,E,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(I,null,H,_,E,null)}function b(N,I,H,ne){let y=null;const w=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(w!==void 0)y=w;else if(y=H.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const j=y.uuid,K=I.uuid;let Q=h[j];Q===void 0&&(Q={},h[j]=Q);let re=Q[K];re===void 0&&(re=y.clone(),Q[K]=re,I.addEventListener("dispose",z)),y=re}if(y.visible=I.visible,y.wireframe=I.wireframe,ne===Zn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:d[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,H.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=i.properties.get(y);j.light=H}return y}function C(N,I,H,ne,y){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&y===Zn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const K=e.update(N),Q=N.material;if(Array.isArray(Q)){const re=K.groups;for(let Z=0,ae=re.length;Z<ae;Z++){const J=re[Z],_e=Q[J.materialIndex];if(_e&&_e.visible){const xe=b(N,_e,ne,y);N.onBeforeShadow(i,N,I,H,K,xe,J),i.renderBufferDirect(H,null,K,xe,N,J),N.onAfterShadow(i,N,I,H,K,xe,J)}}}else if(Q.visible){const re=b(N,Q,ne,y);N.onBeforeShadow(i,N,I,H,K,re,null),i.renderBufferDirect(H,null,K,re,N,null),N.onAfterShadow(i,N,I,H,K,re,null)}}const j=N.children;for(let K=0,Q=j.length;K<Q;K++)C(j[K],I,H,ne,y)}function z(N){N.target.removeEventListener("dispose",z);for(const H in h){const ne=h[H],y=N.target.uuid;y in ne&&(ne[y].dispose(),delete ne[y])}}}const G_={[wa]:Ca,[Ra]:Ia,[Pa]:Da,[_s]:La,[Ca]:wa,[Ia]:Ra,[Da]:Pa,[La]:_s};function W_(i){function e(){let B=!1;const Te=new pt;let k=null;const oe=new pt(0,0,0,0);return{setMask:function(Me){k!==Me&&!B&&(i.colorMask(Me,Me,Me,Me),k=Me)},setLocked:function(Me){B=Me},setClear:function(Me,be,rt,wt,Gt){Gt===!0&&(Me*=wt,be*=wt,rt*=wt),Te.set(Me,be,rt,wt),oe.equals(Te)===!1&&(i.clearColor(Me,be,rt,wt),oe.copy(Te))},reset:function(){B=!1,k=null,oe.set(-1,0,0,0)}}}function t(){let B=!1,Te=!1,k=null,oe=null,Me=null;return{setReversed:function(be){Te=be},setTest:function(be){be?fe(i.DEPTH_TEST):D(i.DEPTH_TEST)},setMask:function(be){k!==be&&!B&&(i.depthMask(be),k=be)},setFunc:function(be){if(Te&&(be=G_[be]),oe!==be){switch(be){case wa:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=be}},setLocked:function(be){B=be},setClear:function(be){Me!==be&&(i.clearDepth(be),Me=be)},reset:function(){B=!1,k=null,oe=null,Me=null}}}function n(){let B=!1,Te=null,k=null,oe=null,Me=null,be=null,rt=null,wt=null,Gt=null;return{setTest:function(lt){B||(lt?fe(i.STENCIL_TEST):D(i.STENCIL_TEST))},setMask:function(lt){Te!==lt&&!B&&(i.stencilMask(lt),Te=lt)},setFunc:function(lt,Wt,xn){(k!==lt||oe!==Wt||Me!==xn)&&(i.stencilFunc(lt,Wt,xn),k=lt,oe=Wt,Me=xn)},setOp:function(lt,Wt,xn){(be!==lt||rt!==Wt||wt!==xn)&&(i.stencilOp(lt,Wt,xn),be=lt,rt=Wt,wt=xn)},setLocked:function(lt){B=lt},setClear:function(lt){Gt!==lt&&(i.clearStencil(lt),Gt=lt)},reset:function(){B=!1,Te=null,k=null,oe=null,Me=null,be=null,rt=null,wt=null,Gt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,v=!1,E=null,g=null,m=null,R=null,b=null,C=null,z=null,N=new Oe(0,0,0),I=0,H=!1,ne=null,y=null,w=null,j=null,K=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Z=0;const ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=Z>=1):ae.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=Z>=2);let J=null,_e={};const xe=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),ke=new pt().fromArray(xe),Ge=new pt().fromArray(Ae);function ee(B,Te,k,oe){const Me=new Uint8Array(4),be=i.createTexture();i.bindTexture(B,be),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<k;rt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Te+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return be}const le={};le[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),r.setFunc(_s),et(!1),ct(Kc),fe(i.CULL_FACE),F(Mi);function fe(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function D(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function he(B,Te){return u[B]!==Te?(i.bindFramebuffer(B,Te),u[B]=Te,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Te),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ee(B,Te){let k=p,oe=!1;if(B){k=d.get(Te),k===void 0&&(k=[],d.set(Te,k));const Me=B.textures;if(k.length!==Me.length||k[0]!==i.COLOR_ATTACHMENT0){for(let be=0,rt=Me.length;be<rt;be++)k[be]=i.COLOR_ATTACHMENT0+be;k.length=Me.length,oe=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,oe=!0);oe&&i.drawBuffers(k)}function Be(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const at={[Oi]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};at[Hu]=i.MIN,at[Vu]=i.MAX;const Qe={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,Te,k,oe,Me,be,rt,wt,Gt,lt){if(B===Mi){v===!0&&(D(i.BLEND),v=!1);return}if(v===!1&&(fe(i.BLEND),v=!0),B!==Bu){if(B!==E||lt!==H){if((g!==Oi||b!==Oi)&&(i.blendEquation(i.FUNC_ADD),g=Oi,b=Oi),lt)switch(B){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,R=null,C=null,z=null,N.set(0,0,0),I=0,E=B,H=lt}return}Me=Me||Te,be=be||k,rt=rt||oe,(Te!==g||Me!==b)&&(i.blendEquationSeparate(at[Te],at[Me]),g=Te,b=Me),(k!==m||oe!==R||be!==C||rt!==z)&&(i.blendFuncSeparate(Qe[k],Qe[oe],Qe[be],Qe[rt]),m=k,R=oe,C=be,z=rt),(wt.equals(N)===!1||Gt!==I)&&(i.blendColor(wt.r,wt.g,wt.b,Gt),N.copy(wt),I=Gt),E=B,H=!1}function Vt(B,Te){B.side===dn?D(i.CULL_FACE):fe(i.CULL_FACE);let k=B.side===nn;Te&&(k=!k),et(k),B.blending===fs&&B.transparent===!1?F(Mi):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const oe=B.stencilWrite;o.setTest(oe),oe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):D(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(B){ne!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),ne=B)}function ct(B){B!==Uu?(fe(i.CULL_FACE),B!==y&&(B===Kc?i.cullFace(i.BACK):B===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):D(i.CULL_FACE),y=B}function ze(B){B!==w&&(re&&i.lineWidth(B),w=B)}function St(B,Te,k){B?(fe(i.POLYGON_OFFSET_FILL),(j!==Te||K!==k)&&(i.polygonOffset(Te,k),j=Te,K=k)):D(i.POLYGON_OFFSET_FILL)}function Ve(B){B?fe(i.SCISSOR_TEST):D(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+Q-1),J!==B&&(i.activeTexture(B),J=B)}function T(B,Te,k){k===void 0&&(J===null?k=i.TEXTURE0+Q-1:k=J);let oe=_e[k];oe===void 0&&(oe={type:void 0,texture:void 0},_e[k]=oe),(oe.type!==B||oe.texture!==Te)&&(J!==k&&(i.activeTexture(k),J=k),i.bindTexture(B,Te||le[B]),oe.type=B,oe.texture=Te)}function X(){const B=_e[J];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(B){ke.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ke.copy(B))}function ve(B){Ge.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ge.copy(B))}function nt(B,Te){let k=l.get(Te);k===void 0&&(k=new WeakMap,l.set(Te,k));let oe=k.get(B);oe===void 0&&(oe=i.getUniformBlockIndex(Te,B.name),k.set(B,oe))}function Fe(B,Te){const oe=l.get(Te).get(B);a.get(Te)!==oe&&(i.uniformBlockBinding(Te,oe,B.__bindingPointIndex),a.set(Te,oe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,_e={},u={},d=new WeakMap,p=[],_=null,v=!1,E=null,g=null,m=null,R=null,b=null,C=null,z=null,N=new Oe(0,0,0),I=0,H=!1,ne=null,y=null,w=null,j=null,K=null,ke.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:fe,disable:D,bindFramebuffer:he,drawBuffers:Ee,useProgram:Be,setBlending:F,setMaterial:Vt,setFlipSided:et,setCullFace:ct,setLineWidth:ze,setPolygonOffset:St,setScissorTest:Ve,activeTexture:P,bindTexture:T,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:de,texImage2D:Re,texImage3D:He,updateUBOMapping:nt,uniformBlockBinding:Fe,texStorage2D:tt,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:De,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:Ne,viewport:ve,reset:qe}}function jl(i,e,t,n){const s=X_(n);switch(t){case Dh:return i*e;case Uh:return i*e;case Oh:return i*e*2;case Eo:return i*e/s.components*s.byteLength;case Sc:return i*e/s.components*s.byteLength;case Fh:return i*e*2/s.components*s.byteLength;case yc:return i*e*2/s.components*s.byteLength;case Nh:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Ec:return i*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(e,8)/2;case ka:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lo:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bh:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rc:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(i){switch(i){case ai:case Ph:return{byteLength:1,components:1};case sr:case Lh:case ni:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Vi:case _c:case tn:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function j_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ue,u=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return _?new OffscreenCanvas(P,T):ar("canvas")}function E(P,T,X){let se=1;const de=Ve(P);if((de.width>X||de.height>X)&&(se=X/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(se*de.width),De=Math.floor(se*de.height);d===void 0&&(d=v(ie,De));const ye=T?v(ie,De):d;return ye.width=ie,ye.height=De,ye.getContext("2d").drawImage(P,0,0,ie,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ie+"x"+De+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==$t&&P.minFilter!==kt}function m(P){i.generateMipmap(P)}function R(P,T,X,se,de=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=T;if(T===i.RED&&(X===i.FLOAT&&(ie=i.R32F),X===i.HALF_FLOAT&&(ie=i.R16F),X===i.UNSIGNED_BYTE&&(ie=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.R8UI),X===i.UNSIGNED_SHORT&&(ie=i.R16UI),X===i.UNSIGNED_INT&&(ie=i.R32UI),X===i.BYTE&&(ie=i.R8I),X===i.SHORT&&(ie=i.R16I),X===i.INT&&(ie=i.R32I)),T===i.RG&&(X===i.FLOAT&&(ie=i.RG32F),X===i.HALF_FLOAT&&(ie=i.RG16F),X===i.UNSIGNED_BYTE&&(ie=i.RG8)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RG8UI),X===i.UNSIGNED_SHORT&&(ie=i.RG16UI),X===i.UNSIGNED_INT&&(ie=i.RG32UI),X===i.BYTE&&(ie=i.RG8I),X===i.SHORT&&(ie=i.RG16I),X===i.INT&&(ie=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),X===i.UNSIGNED_INT&&(ie=i.RGB32UI),X===i.BYTE&&(ie=i.RGB8I),X===i.SHORT&&(ie=i.RGB16I),X===i.INT&&(ie=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),X===i.UNSIGNED_INT&&(ie=i.RGBA32UI),X===i.BYTE&&(ie=i.RGBA8I),X===i.SHORT&&(ie=i.RGBA16I),X===i.INT&&(ie=i.RGBA32I)),T===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),T===i.RGBA){const De=de?mo:ut.getTransfer(se);X===i.FLOAT&&(ie=i.RGBA32F),X===i.HALF_FLOAT&&(ie=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ie=De===Et?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(P,T){let X;return P?T===null||T===Vi||T===ys?X=i.DEPTH24_STENCIL8:T===tn?X=i.DEPTH32F_STENCIL8:T===sr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vi||T===ys?X=i.DEPTH_COMPONENT24:T===tn?X=i.DEPTH_COMPONENT32F:T===sr&&(X=i.DEPTH_COMPONENT16),X}function C(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==$t&&P.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),I(T),T.isVideoTexture&&u.delete(T)}function N(P){const T=P.target;T.removeEventListener("dispose",N),ne(T)}function I(P){const T=n.get(P);if(T.__webglInit===void 0)return;const X=P.source,se=p.get(X);if(se){const de=se[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&H(P),Object.keys(se).length===0&&p.delete(X)}n.remove(P)}function H(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const X=P.source,se=p.get(X);delete se[T.__cacheKey],o.memory.textures--}function ne(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(T.__webglFramebuffer[se]))for(let de=0;de<T.__webglFramebuffer[se].length;de++)i.deleteFramebuffer(T.__webglFramebuffer[se][de]);else i.deleteFramebuffer(T.__webglFramebuffer[se]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[se])}else{if(Array.isArray(T.__webglFramebuffer))for(let se=0;se<T.__webglFramebuffer.length;se++)i.deleteFramebuffer(T.__webglFramebuffer[se]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let se=0;se<T.__webglColorRenderbuffer.length;se++)T.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[se]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=P.textures;for(let se=0,de=X.length;se<de;se++){const ie=n.get(X[se]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(X[se])}n.remove(P)}let y=0;function w(){y=0}function j(){const P=y;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),y+=1,P}function K(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Q(P,T){const X=n.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(X,P,T);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function re(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Ge(X,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function Z(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Ge(X,P,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function ae(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ee(X,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}const J={[Ss]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},_e={[$t]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},xe={[_d]:i.NEVER,[Md]:i.ALWAYS,[xd]:i.LESS,[Hh]:i.LEQUAL,[vd]:i.EQUAL,[Ed]:i.GEQUAL,[Sd]:i.GREATER,[yd]:i.NOTEQUAL};function Ae(P,T){if(T.type===tn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===so||T.magFilter===Zs||T.magFilter===Nn||T.minFilter===kt||T.minFilter===so||T.minFilter===Zs||T.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,J[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,_e[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,_e[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$t||T.minFilter!==Zs&&T.minFilter!==Nn||T.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ke(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const se=T.source;let de=p.get(se);de===void 0&&(de={},p.set(se,de));const ie=K(T);if(ie!==P.__cacheKey){de[ie]===void 0&&(de[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),de[ie].usedTimes++;const De=de[P.__cacheKey];De!==void 0&&(de[P.__cacheKey].usedTimes--,De.usedTimes===0&&H(T)),P.__cacheKey=ie,P.__webglTexture=de[ie].texture}return X}function Ge(P,T,X){let se=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=i.TEXTURE_3D);const de=ke(P,T),ie=T.source;t.bindTexture(se,P.__webglTexture,i.TEXTURE0+X);const De=n.get(ie);if(ie.version!==De.__version||de===!0){t.activeTexture(i.TEXTURE0+X);const ye=ut.getPrimaries(ut.workingColorSpace),we=T.colorSpace===Jn?null:ut.getPrimaries(T.colorSpace),tt=T.colorSpace===Jn||ye===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ge=E(T.image,!1,s.maxTextureSize);ge=St(T,ge);const Re=r.convert(T.format,T.colorSpace),He=r.convert(T.type);let Ne=R(T.internalFormat,Re,He,T.colorSpace,T.isVideoTexture);Ae(se,T);let ve;const nt=T.mipmaps,Fe=T.isVideoTexture!==!0,qe=De.__version===void 0||de===!0,B=ie.dataReady,Te=C(T,ge);if(T.isDepthTexture)Ne=b(T.format===Es,T.type),qe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Ne,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Re,He,null));else if(T.isDataTexture)if(nt.length>0){Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,Te,Ne,nt[0].width,nt[0].height);for(let k=0,oe=nt.length;k<oe;k++)ve=nt[k],Fe?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,ve.width,ve.height,Re,He,ve.data):t.texImage2D(i.TEXTURE_2D,k,Ne,ve.width,ve.height,0,Re,He,ve.data);T.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(i.TEXTURE_2D,Te,Ne,ge.width,ge.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Re,He,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Re,He,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ne,nt[0].width,nt[0].height,ge.depth);for(let k=0,oe=nt.length;k<oe;k++)if(ve=nt[k],T.format!==cn)if(Re!==null)if(Fe){if(B)if(T.layerUpdates.size>0){const Me=jl(ve.width,ve.height,T.format,T.type);for(const be of T.layerUpdates){const rt=ve.data.subarray(be*Me/ve.data.BYTES_PER_ELEMENT,(be+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,be,ve.width,ve.height,1,Re,rt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,ge.depth,Re,ve.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Ne,ve.width,ve.height,ge.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,ge.depth,Re,He,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Ne,ve.width,ve.height,ge.depth,0,Re,He,ve.data)}else{Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,Te,Ne,nt[0].width,nt[0].height);for(let k=0,oe=nt.length;k<oe;k++)ve=nt[k],T.format!==cn?Re!==null?Fe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,ve.width,ve.height,Re,He,ve.data):t.texImage2D(i.TEXTURE_2D,k,Ne,ve.width,ve.height,0,Re,He,ve.data)}else if(T.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ne,ge.width,ge.height,ge.depth),B)if(T.layerUpdates.size>0){const k=jl(ge.width,ge.height,T.format,T.type);for(const oe of T.layerUpdates){const Me=ge.data.subarray(oe*k/ge.data.BYTES_PER_ELEMENT,(oe+1)*k/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ge.width,ge.height,1,Re,He,Me)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,He,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,Re,He,ge.data);else if(T.isData3DTexture)Fe?(qe&&t.texStorage3D(i.TEXTURE_3D,Te,Ne,ge.width,ge.height,ge.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,He,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,Re,He,ge.data);else if(T.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(i.TEXTURE_2D,Te,Ne,ge.width,ge.height);else{let k=ge.width,oe=ge.height;for(let Me=0;Me<Te;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ne,k,oe,0,Re,He,null),k>>=1,oe>>=1}}else if(nt.length>0){if(Fe&&qe){const k=Ve(nt[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ne,k.width,k.height)}for(let k=0,oe=nt.length;k<oe;k++)ve=nt[k],Fe?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Re,He,ve):t.texImage2D(i.TEXTURE_2D,k,Ne,Re,He,ve);T.generateMipmaps=!1}else if(Fe){if(qe){const k=Ve(ge);t.texStorage2D(i.TEXTURE_2D,Te,Ne,k.width,k.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,He,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Re,He,ge);g(T)&&m(se),De.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ee(P,T,X){if(T.image.length!==6)return;const se=ke(P,T),de=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const ie=n.get(de);if(de.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const De=ut.getPrimaries(ut.workingColorSpace),ye=T.colorSpace===Jn?null:ut.getPrimaries(T.colorSpace),we=T.colorSpace===Jn||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const tt=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let oe=0;oe<6;oe++)!tt&&!ge?Re[oe]=E(T.image[oe],!0,s.maxCubemapSize):Re[oe]=ge?T.image[oe].image:T.image[oe],Re[oe]=St(T,Re[oe]);const He=Re[0],Ne=r.convert(T.format,T.colorSpace),ve=r.convert(T.type),nt=R(T.internalFormat,Ne,ve,T.colorSpace),Fe=T.isVideoTexture!==!0,qe=ie.__version===void 0||se===!0,B=de.dataReady;let Te=C(T,He);Ae(i.TEXTURE_CUBE_MAP,T);let k;if(tt){Fe&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,nt,He.width,He.height);for(let oe=0;oe<6;oe++){k=Re[oe].mipmaps;for(let Me=0;Me<k.length;Me++){const be=k[Me];T.format!==cn?Ne!==null?Fe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,be.width,be.height,Ne,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,nt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,be.width,be.height,Ne,ve,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,nt,be.width,be.height,0,Ne,ve,be.data)}}}else{if(k=T.mipmaps,Fe&&qe){k.length>0&&Te++;const oe=Ve(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,nt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ge){Fe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re[oe].width,Re[oe].height,Ne,ve,Re[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Re[oe].width,Re[oe].height,0,Ne,ve,Re[oe].data);for(let Me=0;Me<k.length;Me++){const rt=k[Me].image[oe].image;Fe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,rt.width,rt.height,Ne,ve,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,nt,rt.width,rt.height,0,Ne,ve,rt.data)}}else{Fe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,ve,Re[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Ne,ve,Re[oe]);for(let Me=0;Me<k.length;Me++){const be=k[Me];Fe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ne,ve,be.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,nt,Ne,ve,be.image[oe])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),ie.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function le(P,T,X,se,de,ie){const De=r.convert(X.format,X.colorSpace),ye=r.convert(X.type),we=R(X.internalFormat,De,ye,X.colorSpace);if(!n.get(T).__hasExternalTextures){const ge=Math.max(1,T.width>>ie),Re=Math.max(1,T.height>>ie);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ie,we,ge,Re,T.depth,0,De,ye,null):t.texImage2D(de,ie,we,ge,Re,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,de,n.get(X).__webglTexture,0,et(T)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,de,n.get(X).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(P,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const se=T.depthTexture,de=se&&se.isDepthTexture?se.type:null,ie=b(T.stencilBuffer,de),De=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=et(T);ct(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ie,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,P)}else{const se=T.textures;for(let de=0;de<se.length;de++){const ie=se[de],De=r.convert(ie.format,ie.colorSpace),ye=r.convert(ie.type),we=R(ie.internalFormat,De,ye,ie.colorSpace),tt=et(T);X&&ct(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,we,T.width,T.height):ct(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,we,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,we,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function D(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const se=n.get(T.depthTexture).__webglTexture,de=et(T);if(T.depthTexture.format===ps)ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(T.depthTexture.format===Es)ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function he(P){const T=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=se}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");D(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=i.createRenderbuffer(),fe(T.__webglDepthbuffer[se],P,!1);else{const de=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),fe(T.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(P,T,X){const se=n.get(P);T!==void 0&&le(se.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&he(P)}function Be(P){const T=P.texture,X=n.get(P),se=n.get(T);P.addEventListener("dispose",N);const de=P.textures,ie=P.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=T.version,o.memory.textures++),ie){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let we=0;we<T.mipmaps.length;we++)X.__webglFramebuffer[ye][we]=i.createFramebuffer()}else X.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)X.__webglFramebuffer[ye]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(De)for(let ye=0,we=de.length;ye<we;ye++){const tt=n.get(de[ye]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ct(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ye=0;ye<de.length;ye++){const we=de[ye];X.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ye]);const tt=r.convert(we.format,we.colorSpace),ge=r.convert(we.type),Re=R(we.internalFormat,tt,ge,we.colorSpace,P.isXRRenderTarget===!0),He=et(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Re,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,X.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)le(X.__webglFramebuffer[ye][we],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else le(X.__webglFramebuffer[ye],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ye=0,we=de.length;ye<we;ye++){const tt=de[ye],ge=n.get(tt);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),Ae(i.TEXTURE_2D,tt),le(X.__webglFramebuffer,P,tt,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),g(tt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,se.__webglTexture),Ae(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)le(X.__webglFramebuffer[we],P,T,i.COLOR_ATTACHMENT0,ye,we);else le(X.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,ye,0);g(T)&&m(ye),t.unbindTexture()}P.depthBuffer&&he(P)}function at(P){const T=P.textures;for(let X=0,se=T.length;X<se;X++){const de=T[X];if(g(de)){const ie=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(de).__webglTexture;t.bindTexture(ie,De),m(ie),t.unbindTexture()}}}const Qe=[],F=[];function Vt(P){if(P.samples>0){if(ct(P)===!1){const T=P.textures,X=P.width,se=P.height;let de=i.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(P),ye=T.length>1;if(ye)for(let we=0;we<T.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<T.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const tt=n.get(T[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,X,se,0,0,X,se,de,i.NEAREST),l===!0&&(Qe.length=0,F.length=0,Qe.push(i.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Qe.push(ie),F.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let we=0;we<T.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const tt=n.get(T[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function et(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ze(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function St(P,T){const X=P.colorSpace,se=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Nt&&X!==Jn&&(ut.getTransfer(X)===Et?(se!==cn||de!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=w,this.setTexture2D=Q,this.setTexture2DArray=re,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=Ee,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ct}function Y_(i,e){function t(n,s=Jn){let r;const o=ut.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Lh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===cn)return i.RGBA;if(n===Uh)return i.LUMINANCE;if(n===Oh)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Eo)return i.RED;if(n===Sc)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===co)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Oa||n===Fa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===za)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ga||n===Wa||n===Xa||n===ja||n===Ya||n===qa||n===Ka||n===Za||n===$a||n===Ja||n===Qa||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===nc||n===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===sc||n===rc||n===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class q_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ki extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,n),m=this._getHandJoint(h,E);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=u.position.distanceTo(d.position),_=.02,v=.005;h.inputState.pinching&&p>_+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=_-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fn({vertexShader:Z_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new To(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q_ extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,d=null,p=null,_=null,v=null;const E=new J_,g=t.getContextAttributes();let m=null,R=null;const b=[],C=[],z=new Ue;let N=null;const I=new Zt;I.layers.enable(1),I.viewport=new pt;const H=new Zt;H.layers.enable(2),H.viewport=new pt;const ne=[I,H],y=new q_;y.layers.enable(1),y.layers.enable(2);let w=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=b[ee];return le===void 0&&(le=new aa,b[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=b[ee];return le===void 0&&(le=new aa,b[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=b[ee];return le===void 0&&(le=new aa,b[ee]=le),le.getHandSpace()};function K(ee){const le=C.indexOf(ee.inputSource);if(le===-1)return;const fe=b[le];fe!==void 0&&(fe.update(ee.inputSource,ee.frame,h||o),fe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",re);for(let ee=0;ee<b.length;ee++){const le=C[ee];le!==null&&(C[ee]=null,b[ee].disconnect(le))}w=null,j=null,E.reset(),e.setRenderTarget(m),_=null,p=null,d=null,s=null,R=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Gi(_.framebufferWidth,_.framebufferHeight,{format:cn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,fe=null,D=null;g.depth&&(D=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Es:ps,fe=g.stencil?ys:Vi);const he={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(he),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Gi(p.textureWidth,p.textureHeight,{format:cn,type:ai,depthTexture:new Qh(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function re(ee){for(let le=0;le<ee.removed.length;le++){const fe=ee.removed[le],D=C.indexOf(fe);D>=0&&(C[D]=null,b[D].disconnect(fe))}for(let le=0;le<ee.added.length;le++){const fe=ee.added[le];let D=C.indexOf(fe);if(D===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=C.length){C.push(fe),D=Ee;break}else if(C[Ee]===null){C[Ee]=fe,D=Ee;break}if(D===-1)break}const he=b[D];he&&he.connect(fe)}}const Z=new L,ae=new L;function J(ee,le,fe){Z.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(fe.matrixWorld);const D=Z.distanceTo(ae),he=le.projectionMatrix.elements,Ee=fe.projectionMatrix.elements,Be=he[14]/(he[10]-1),at=he[14]/(he[10]+1),Qe=(he[9]+1)/he[5],F=(he[9]-1)/he[5],Vt=(he[8]-1)/he[0],et=(Ee[8]+1)/Ee[0],ct=Be*Vt,ze=Be*et,St=D/(-Vt+et),Ve=St*-Vt;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ve),ee.translateZ(St),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),he[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const P=Be+St,T=at+St,X=ct-Ve,se=ze+(D-Ve),de=Qe*at/T*P,ie=F*at/T*P;ee.projectionMatrix.makePerspective(X,se,de,ie,P,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function _e(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let le=ee.near,fe=ee.far;E.texture!==null&&(E.depthNear>0&&(le=E.depthNear),E.depthFar>0&&(fe=E.depthFar)),y.near=H.near=I.near=le,y.far=H.far=I.far=fe,(w!==y.near||j!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,j=y.far);const D=ee.parent,he=y.cameras;_e(y,D);for(let Ee=0;Ee<he.length;Ee++)_e(he[Ee],D);he.length===2?J(y,I,H):y.projectionMatrix.copy(I.projectionMatrix),xe(ee,y,D)};function xe(ee,le,fe){fe===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(fe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ms*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&_===null))return l},this.setFoveation=function(ee){l=ee,p!==null&&(p.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(y)};let Ae=null;function ke(ee,le){if(u=le.getViewerPose(h||o),v=le,u!==null){const fe=u.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let D=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let Ee=0;Ee<fe.length;Ee++){const Be=fe[Ee];let at=null;if(_!==null)at=_.getViewport(Be);else{const F=d.getViewSubImage(p,Be);at=F.viewport,Ee===0&&(e.setRenderTargetTextures(R,F.colorTexture,p.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(R))}let Qe=ne[Ee];Qe===void 0&&(Qe=new Zt,Qe.layers.enable(Ee),Qe.viewport=new pt,ne[Ee]=Qe),Qe.matrix.fromArray(Be.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Be.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(at.x,at.y,at.width,at.height),Ee===0&&(y.matrix.copy(Qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(Qe)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){const Ee=d.getDepthInformation(fe[0]);Ee&&Ee.isValid&&Ee.texture&&E.init(e,Ee,s.renderState)}}for(let fe=0;fe<b.length;fe++){const D=C[fe],he=b[fe];D!==null&&he!==void 0&&he.update(D,le,h||o)}Ae&&Ae(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),v=null}const Ge=new Jh;Ge.setAnimationLoop(ke),this.setAnimationLoop=function(ee){Ae=ee},this.dispose=function(){}}}const Di=new _n,e0=new je;function t0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Kh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,R,b,C){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&_(g,m,C)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),E(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,R,b):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const R=e.get(m),b=R.envMap,C=R.envMapRotation;b&&(g.envMap.value=b,Di.copy(C),Di.x*=-1,Di.y*=-1,Di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(e0.makeRotationFromEuler(Di)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,R,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*R,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,R){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function E(g,m){const R=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const C=b.program;n.uniformBlockBinding(R,C)}function h(R,b){let C=s[R.id];C===void 0&&(v(R),C=u(R),s[R.id]=C,R.addEventListener("dispose",g));const z=b.program;n.updateUBOMapping(R,z);const N=e.render.frame;r[R.id]!==N&&(p(R),r[R.id]=N)}function u(R){const b=d();R.__bindingPointIndex=b;const C=i.createBuffer(),z=R.__size,N=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,z,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,C),C}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const b=s[R.id],C=R.uniforms,z=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let N=0,I=C.length;N<I;N++){const H=Array.isArray(C[N])?C[N]:[C[N]];for(let ne=0,y=H.length;ne<y;ne++){const w=H[ne];if(_(w,N,ne,z)===!0){const j=w.__offset,K=Array.isArray(w.value)?w.value:[w.value];let Q=0;for(let re=0;re<K.length;re++){const Z=K[re],ae=E(Z);typeof Z=="number"||typeof Z=="boolean"?(w.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,j+Q,w.__data)):Z.isMatrix3?(w.__data[0]=Z.elements[0],w.__data[1]=Z.elements[1],w.__data[2]=Z.elements[2],w.__data[3]=0,w.__data[4]=Z.elements[3],w.__data[5]=Z.elements[4],w.__data[6]=Z.elements[5],w.__data[7]=0,w.__data[8]=Z.elements[6],w.__data[9]=Z.elements[7],w.__data[10]=Z.elements[8],w.__data[11]=0):(Z.toArray(w.__data,Q),Q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(R,b,C,z){const N=R.value,I=b+"_"+C;if(z[I]===void 0)return typeof N=="number"||typeof N=="boolean"?z[I]=N:z[I]=N.clone(),!0;{const H=z[I];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return z[I]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function v(R){const b=R.uniforms;let C=0;const z=16;for(let I=0,H=b.length;I<H;I++){const ne=Array.isArray(b[I])?b[I]:[b[I]];for(let y=0,w=ne.length;y<w;y++){const j=ne[y],K=Array.isArray(j.value)?j.value:[j.value];for(let Q=0,re=K.length;Q<re;Q++){const Z=K[Q],ae=E(Z),J=C%z,_e=J%ae.boundary,xe=J+_e;C+=_e,xe!==0&&z-xe<ae.storage&&(C+=z-xe),j.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=C,C+=ae.storage}}}const N=C%z;return N>0&&(C+=z-N),R.__size=C,R.__cache={},this}function E(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function g(R){const b=R.target;b.removeEventListener("dispose",g);const C=o.indexOf(b.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:h,dispose:m}}class i0{constructor(e={}){const{canvas:t=zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let E=null,g=null;const m=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=Ti,this.toneMappingExposure=1;const b=this;let C=!1,z=0,N=0,I=null,H=-1,ne=null;const y=new pt,w=new pt;let j=null;const K=new Oe(0);let Q=0,re=t.width,Z=t.height,ae=1,J=null,_e=null;const xe=new pt(0,0,re,Z),Ae=new pt(0,0,re,Z);let ke=!1;const Ge=new bc;let ee=!1,le=!1;const fe=new je,D=new je,he=new L,Ee=new pt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Qe(){return I===null?ae:1}let F=n;function Vt(A,f){return t.getContext(A,f)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){const f="webgl2";if(F=Vt(f,A),F===null)throw Vt(f)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,ct,ze,St,Ve,P,T,X,se,de,ie,De,ye,we,tt,ge,Re,He,Ne,ve,nt,Fe,qe,B;function Te(){et=new cg(F),et.init(),Fe=new Y_(F,et),ct=new ng(F,et,e,Fe),ze=new W_(F),ct.reverseDepthBuffer&&ze.buffers.depth.setReversed(!0),St=new ug(F),Ve=new R_,P=new j_(F,et,ze,Ve,ct,Fe,St),T=new sg(b),X=new ag(b),se=new xf(F),qe=new eg(F,se),de=new lg(F,se,St,qe),ie=new fg(F,de,se,St),Ne=new dg(F,ct,P),ge=new ig(Ve),De=new C_(b,T,X,et,ct,qe,ge),ye=new t0(b,Ve),we=new L_,tt=new F_(et),He=new Qm(b,T,X,ze,ie,p,l),Re=new V_(b,ie,ct),B=new n0(F,St,ct,ze),ve=new tg(F,et,St),nt=new hg(F,et,St),St.programs=De.programs,b.capabilities=ct,b.extensions=et,b.properties=Ve,b.renderLists=we,b.shadowMap=Re,b.state=ze,b.info=St}Te();const k=new Q_(b,F);this.xr=k,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(re,Z,!1))},this.getSize=function(A){return A.set(re,Z)},this.setSize=function(A,f,x=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,Z=f,t.width=Math.floor(A*ae),t.height=Math.floor(f*ae),x===!0&&(t.style.width=A+"px",t.style.height=f+"px"),this.setViewport(0,0,A,f)},this.getDrawingBufferSize=function(A){return A.set(re*ae,Z*ae).floor()},this.setDrawingBufferSize=function(A,f,x){re=A,Z=f,ae=x,t.width=Math.floor(A*x),t.height=Math.floor(f*x),this.setViewport(0,0,A,f)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,f,x,S){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,f,x,S),ze.viewport(y.copy(xe).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,f,x,S){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,f,x,S),ze.scissor(w.copy(Ae).multiplyScalar(ae).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){ze.setScissorTest(ke=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(A=!0,f=!0,x=!0){let S=0;if(A){let M=!1;if(I!==null){const O=I.texture.format;M=O===Ec||O===yc||O===Sc}if(M){const O=I.texture.type,U=O===ai||O===Vi||O===sr||O===ys||O===xc||O===vc,V=He.getClearColor(),$=He.getClearAlpha(),Y=V.r,q=V.g,W=V.b;U?(_[0]=Y,_[1]=q,_[2]=W,_[3]=$,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=Y,v[1]=q,v[2]=W,v[3]=$,F.clearBufferiv(F.COLOR,0,v))}else S|=F.COLOR_BUFFER_BIT}f&&(S|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),x&&(S|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(S)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",be,!1),we.dispose(),tt.dispose(),Ve.dispose(),T.dispose(),X.dispose(),ie.dispose(),qe.dispose(),B.dispose(),De.dispose(),k.dispose(),k.removeEventListener("sessionstart",gr),k.removeEventListener("sessionend",_r),Vn.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=St.autoReset,f=Re.enabled,x=Re.autoUpdate,S=Re.needsUpdate,M=Re.type;Te(),St.autoReset=A,Re.enabled=f,Re.autoUpdate=x,Re.needsUpdate=S,Re.type=M}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const f=A.target;f.removeEventListener("dispose",rt),wt(f)}function wt(A){Gt(A),Ve.remove(A)}function Gt(A){const f=Ve.get(A).programs;f!==void 0&&(f.forEach(function(x){De.releaseProgram(x)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,f,x,S,M,O){f===null&&(f=Be);const U=M.isMesh&&M.matrixWorld.determinant()<0,V=yr(A,f,x,S,M);ze.setMaterial(S,U);let $=x.index,Y=1;if(S.wireframe===!0){if($=de.getWireframeAttribute(x),$===void 0)return;Y=2}const q=x.drawRange,W=x.attributes.position;let ce=q.start*Y,pe=(q.start+q.count)*Y;O!==null&&(ce=Math.max(ce,O.start*Y),pe=Math.min(pe,(O.start+O.count)*Y)),$!==null?(ce=Math.max(ce,0),pe=Math.min(pe,$.count)):W!=null&&(ce=Math.max(ce,0),pe=Math.min(pe,W.count));const me=pe-ce;if(me<0||me===1/0)return;qe.setup(M,S,V,x,$);let Ce,ue=ve;if($!==null&&(Ce=se.get($),ue=nt,ue.setIndex(Ce)),M.isMesh)S.wireframe===!0?(ze.setLineWidth(S.wireframeLinewidth*Qe()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(M.isLine){let te=S.linewidth;te===void 0&&(te=1),ze.setLineWidth(te*Qe()),M.isLineSegments?ue.setMode(F.LINES):M.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else M.isPoints?ue.setMode(F.POINTS):M.isSprite&&ue.setMode(F.TRIANGLES);if(M.isBatchedMesh)if(M._multiDrawInstances!==null)ue.renderMultiDrawInstances(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount,M._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ue.renderMultiDraw(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount);else{const te=M._multiDrawStarts,Pe=M._multiDrawCounts,Le=M._multiDrawCount,ot=$?se.get($).bytesPerElement:1,Lt=Ve.get(S).currentProgram.getUniforms();for(let Je=0;Je<Le;Je++)Lt.setValue(F,"_gl_DrawID",Je),ue.render(te[Je]/ot,Pe[Je])}else if(M.isInstancedMesh)ue.renderInstances(ce,me,M.count);else if(x.isInstancedBufferGeometry){const te=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,Pe=Math.min(x.instanceCount,te);ue.renderInstances(ce,me,Pe)}else ue.render(ce,me)};function lt(A,f,x){A.transparent===!0&&A.side===dn&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,Yi(A,f,x),A.side=oi,A.needsUpdate=!0,Yi(A,f,x),A.side=dn):Yi(A,f,x)}this.compile=function(A,f,x=null){x===null&&(x=A),g=tt.get(x),g.init(f),R.push(g),x.traverseVisible(function(M){M.isLight&&M.layers.test(f.layers)&&(g.pushLight(M),M.castShadow&&g.pushShadow(M))}),A!==x&&A.traverseVisible(function(M){M.isLight&&M.layers.test(f.layers)&&(g.pushLight(M),M.castShadow&&g.pushShadow(M))}),g.setupLights();const S=new Set;return A.traverse(function(M){if(!(M.isMesh||M.isPoints||M.isLine||M.isSprite))return;const O=M.material;if(O)if(Array.isArray(O))for(let U=0;U<O.length;U++){const V=O[U];lt(V,x,M),S.add(V)}else lt(O,x,M),S.add(O)}),R.pop(),g=null,S},this.compileAsync=function(A,f,x=null){const S=this.compile(A,f,x);return new Promise(M=>{function O(){if(S.forEach(function(U){Ve.get(U).currentProgram.isReady()&&S.delete(U)}),S.size===0){M(A);return}setTimeout(O,10)}et.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Wt=null;function xn(A){Wt&&Wt(A)}function gr(){Vn.stop()}function _r(){Vn.start()}const Vn=new Jh;Vn.setAnimationLoop(xn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Wt=A,k.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},k.addEventListener("sessionstart",gr),k.addEventListener("sessionend",_r),this.render=function(A,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(f),f=k.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,f,I),g=tt.get(A,R.length),g.init(f),R.push(g),D.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),Ge.setFromProjectionMatrix(D),le=this.localClippingEnabled,ee=ge.init(this.clippingPlanes,le),E=we.get(A,m.length),E.init(),m.push(E),k.enabled===!0&&k.isPresenting===!0){const O=b.xr.getDepthSensingMesh();O!==null&&Fs(O,f,-1/0,b.sortObjects)}Fs(A,f,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(J,_e),at=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,at&&He.addToRenderList(E,A),this.info.render.frame++,ee===!0&&ge.beginShadows();const x=g.state.shadowsArray;Re.render(x,A,f),ee===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const S=E.opaque,M=E.transmissive;if(g.setupLights(),f.isArrayCamera){const O=f.cameras;if(M.length>0)for(let U=0,V=O.length;U<V;U++){const $=O[U];Bs(S,M,A,$)}at&&He.render(A);for(let U=0,V=O.length;U<V;U++){const $=O[U];xr(E,A,$,$.viewport)}}else M.length>0&&Bs(S,M,A,f),at&&He.render(A),xr(E,A,f);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(b,A,f),qe.resetDefaultState(),H=-1,ne=null,R.pop(),R.length>0?(g=R[R.length-1],ee===!0&&ge.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?E=m[m.length-1]:E=null};function Fs(A,f,x,S){if(A.visible===!1)return;if(A.layers.test(f.layers)){if(A.isGroup)x=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(f);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){S&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(D);const U=ie.update(A),V=A.material;V.visible&&E.push(A,U,V,x,Ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const U=ie.update(A),V=A.material;if(S&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),Ee.copy(U.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(D)),Array.isArray(V)){const $=U.groups;for(let Y=0,q=$.length;Y<q;Y++){const W=$[Y],ce=V[W.materialIndex];ce&&ce.visible&&E.push(A,U,ce,x,Ee.z,W)}}else V.visible&&E.push(A,U,V,x,Ee.z,null)}}const O=A.children;for(let U=0,V=O.length;U<V;U++)Fs(O[U],f,x,S)}function xr(A,f,x,S){const M=A.opaque,O=A.transmissive,U=A.transparent;g.setupLightsView(x),ee===!0&&ge.setGlobalState(b.clippingPlanes,x),S&&ze.viewport(y.copy(S)),M.length>0&&ji(M,f,x),O.length>0&&ji(O,f,x),U.length>0&&ji(U,f,x),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Bs(A,f,x,S){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[S.id]===void 0&&(g.state.transmissionRenderTarget[S.id]=new Gi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ni:ai,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const O=g.state.transmissionRenderTarget[S.id],U=S.viewport||y;O.setSize(U.z,U.w);const V=b.getRenderTarget();b.setRenderTarget(O),b.getClearColor(K),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),at&&He.render(x);const $=b.toneMapping;b.toneMapping=Ti;const Y=S.viewport;if(S.viewport!==void 0&&(S.viewport=void 0),g.setupLightsView(S),ee===!0&&ge.setGlobalState(b.clippingPlanes,S),ji(A,x,S),P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O),et.has("WEBGL_multisampled_render_to_texture")===!1){let q=!1;for(let W=0,ce=f.length;W<ce;W++){const pe=f[W],me=pe.object,Ce=pe.geometry,ue=pe.material,te=pe.group;if(ue.side===dn&&me.layers.test(S.layers)){const Pe=ue.side;ue.side=nn,ue.needsUpdate=!0,vr(me,x,S,Ce,ue,te),ue.side=Pe,ue.needsUpdate=!0,q=!0}}q===!0&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O))}b.setRenderTarget(V),b.setClearColor(K,Q),Y!==void 0&&(S.viewport=Y),b.toneMapping=$}function ji(A,f,x){const S=f.isScene===!0?f.overrideMaterial:null;for(let M=0,O=A.length;M<O;M++){const U=A[M],V=U.object,$=U.geometry,Y=S===null?U.material:S,q=U.group;V.layers.test(x.layers)&&vr(V,f,x,$,Y,q)}}function vr(A,f,x,S,M,O){A.onBeforeRender(b,f,x,S,M,O),A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),M.onBeforeRender(b,f,x,S,A,O),M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,b.renderBufferDirect(x,f,S,M,A,O),M.side=oi,M.needsUpdate=!0,b.renderBufferDirect(x,f,S,M,A,O),M.side=dn):b.renderBufferDirect(x,f,S,M,A,O),A.onAfterRender(b,f,x,S,M,O)}function Yi(A,f,x){f.isScene!==!0&&(f=Be);const S=Ve.get(A),M=g.state.lights,O=g.state.shadowsArray,U=M.state.version,V=De.getParameters(A,M.state,O,f,x),$=De.getProgramCacheKey(V);let Y=S.programs;S.environment=A.isMeshStandardMaterial?f.environment:null,S.fog=f.fog,S.envMap=(A.isMeshStandardMaterial?X:T).get(A.envMap||S.environment),S.envMapRotation=S.environment!==null&&A.envMap===null?f.environmentRotation:A.envMapRotation,Y===void 0&&(A.addEventListener("dispose",rt),Y=new Map,S.programs=Y);let q=Y.get($);if(q!==void 0){if(S.currentProgram===q&&S.lightsStateVersion===U)return ks(A,V),q}else V.uniforms=De.getUniforms(A),A.onBeforeCompile(V,b),q=De.acquireProgram(V,$),Y.set($,q),S.uniforms=V.uniforms;const W=S.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(W.clippingPlanes=ge.uniform),ks(A,V),S.needsLights=Gn(A),S.lightsStateVersion=U,S.needsLights&&(W.ambientLightColor.value=M.state.ambient,W.lightProbe.value=M.state.probe,W.directionalLights.value=M.state.directional,W.directionalLightShadows.value=M.state.directionalShadow,W.spotLights.value=M.state.spot,W.spotLightShadows.value=M.state.spotShadow,W.rectAreaLights.value=M.state.rectArea,W.ltc_1.value=M.state.rectAreaLTC1,W.ltc_2.value=M.state.rectAreaLTC2,W.pointLights.value=M.state.point,W.pointLightShadows.value=M.state.pointShadow,W.hemisphereLights.value=M.state.hemi,W.directionalShadowMap.value=M.state.directionalShadowMap,W.directionalShadowMatrix.value=M.state.directionalShadowMatrix,W.spotShadowMap.value=M.state.spotShadowMap,W.spotLightMatrix.value=M.state.spotLightMatrix,W.spotLightMap.value=M.state.spotLightMap,W.pointShadowMap.value=M.state.pointShadowMap,W.pointShadowMatrix.value=M.state.pointShadowMatrix),S.currentProgram=q,S.uniformsList=null,q}function Sr(A){if(A.uniformsList===null){const f=A.currentProgram.getUniforms();A.uniformsList=uo.seqWithValue(f.seq,A.uniforms)}return A.uniformsList}function ks(A,f){const x=Ve.get(A);x.outputColorSpace=f.outputColorSpace,x.batching=f.batching,x.batchingColor=f.batchingColor,x.instancing=f.instancing,x.instancingColor=f.instancingColor,x.instancingMorph=f.instancingMorph,x.skinning=f.skinning,x.morphTargets=f.morphTargets,x.morphNormals=f.morphNormals,x.morphColors=f.morphColors,x.morphTargetsCount=f.morphTargetsCount,x.numClippingPlanes=f.numClippingPlanes,x.numIntersection=f.numClipIntersection,x.vertexAlphas=f.vertexAlphas,x.vertexTangents=f.vertexTangents,x.toneMapping=f.toneMapping}function yr(A,f,x,S,M){f.isScene!==!0&&(f=Be),P.resetTextureUnits();const O=f.fog,U=S.isMeshStandardMaterial?f.environment:null,V=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Nt,$=(S.isMeshStandardMaterial?X:T).get(S.envMap||U),Y=S.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,q=!!x.attributes.tangent&&(!!S.normalMap||S.anisotropy>0),W=!!x.morphAttributes.position,ce=!!x.morphAttributes.normal,pe=!!x.morphAttributes.color;let me=Ti;S.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(me=b.toneMapping);const Ce=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ue=Ce!==void 0?Ce.length:0,te=Ve.get(S),Pe=g.state.lights;if(ee===!0&&(le===!0||A!==ne)){const We=A===ne&&S.id===H;ge.setState(S,A,We)}let Le=!1;S.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Pe.state.version||te.outputColorSpace!==V||M.isBatchedMesh&&te.batching===!1||!M.isBatchedMesh&&te.batching===!0||M.isBatchedMesh&&te.batchingColor===!0&&M.colorTexture===null||M.isBatchedMesh&&te.batchingColor===!1&&M.colorTexture!==null||M.isInstancedMesh&&te.instancing===!1||!M.isInstancedMesh&&te.instancing===!0||M.isSkinnedMesh&&te.skinning===!1||!M.isSkinnedMesh&&te.skinning===!0||M.isInstancedMesh&&te.instancingColor===!0&&M.instanceColor===null||M.isInstancedMesh&&te.instancingColor===!1&&M.instanceColor!==null||M.isInstancedMesh&&te.instancingMorph===!0&&M.morphTexture===null||M.isInstancedMesh&&te.instancingMorph===!1&&M.morphTexture!==null||te.envMap!==$||S.fog===!0&&te.fog!==O||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==ge.numPlanes||te.numIntersection!==ge.numIntersection)||te.vertexAlphas!==Y||te.vertexTangents!==q||te.morphTargets!==W||te.morphNormals!==ce||te.morphColors!==pe||te.toneMapping!==me||te.morphTargetsCount!==ue)&&(Le=!0):(Le=!0,te.__version=S.version);let ot=te.currentProgram;Le===!0&&(ot=Yi(S,f,M));let Lt=!1,Je=!1,it=!1;const Ye=ot.getUniforms(),Rt=te.uniforms;if(ze.useProgram(ot.program)&&(Lt=!0,Je=!0,it=!0),S.id!==H&&(H=S.id,Je=!0),Lt||ne!==A){ct.reverseDepthBuffer?(fe.copy(A.projectionMatrix),Vd(fe),Gd(fe),Ye.setValue(F,"projectionMatrix",fe)):Ye.setValue(F,"projectionMatrix",A.projectionMatrix),Ye.setValue(F,"viewMatrix",A.matrixWorldInverse);const We=Ye.map.cameraPosition;We!==void 0&&We.setValue(F,he.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,Je=!0,it=!0)}if(M.isSkinnedMesh){Ye.setOptional(F,M,"bindMatrix"),Ye.setOptional(F,M,"bindMatrixInverse");const We=M.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ye.setValue(F,"boneTexture",We.boneTexture,P))}M.isBatchedMesh&&(Ye.setOptional(F,M,"batchingTexture"),Ye.setValue(F,"batchingTexture",M._matricesTexture,P),Ye.setOptional(F,M,"batchingIdTexture"),Ye.setValue(F,"batchingIdTexture",M._indirectTexture,P),Ye.setOptional(F,M,"batchingColorTexture"),M._colorsTexture!==null&&Ye.setValue(F,"batchingColorTexture",M._colorsTexture,P));const Ct=x.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&Ne.update(M,x,ot),(Je||te.receiveShadow!==M.receiveShadow)&&(te.receiveShadow=M.receiveShadow,Ye.setValue(F,"receiveShadow",M.receiveShadow)),S.isMeshGouraudMaterial&&S.envMap!==null&&(Rt.envMap.value=$,Rt.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),S.isMeshStandardMaterial&&S.envMap===null&&f.environment!==null&&(Rt.envMapIntensity.value=f.environmentIntensity),Je&&(Ye.setValue(F,"toneMappingExposure",b.toneMappingExposure),te.needsLights&&Io(Rt,it),O&&S.fog===!0&&ye.refreshFogUniforms(Rt,O),ye.refreshMaterialUniforms(Rt,S,ae,Z,g.state.transmissionRenderTarget[A.id]),uo.upload(F,Sr(te),Rt,P)),S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(uo.upload(F,Sr(te),Rt,P),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&Ye.setValue(F,"center",M.center),Ye.setValue(F,"modelViewMatrix",M.modelViewMatrix),Ye.setValue(F,"normalMatrix",M.normalMatrix),Ye.setValue(F,"modelMatrix",M.matrixWorld),S.isShaderMaterial||S.isRawShaderMaterial){const We=S.uniformsGroups;for(let mt=0,vn=We.length;mt<vn;mt++){const ui=We[mt];B.update(ui,ot),B.bind(ui,ot)}}return ot}function Io(A,f){A.ambientLightColor.needsUpdate=f,A.lightProbe.needsUpdate=f,A.directionalLights.needsUpdate=f,A.directionalLightShadows.needsUpdate=f,A.pointLights.needsUpdate=f,A.pointLightShadows.needsUpdate=f,A.spotLights.needsUpdate=f,A.spotLightShadows.needsUpdate=f,A.rectAreaLights.needsUpdate=f,A.hemisphereLights.needsUpdate=f}function Gn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,f,x){Ve.get(A.texture).__webglTexture=f,Ve.get(A.depthTexture).__webglTexture=x;const S=Ve.get(A);S.__hasExternalTextures=!0,S.__autoAllocateDepthBuffer=x===void 0,S.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),S.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,f){const x=Ve.get(A);x.__webglFramebuffer=f,x.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(A,f=0,x=0){I=A,z=f,N=x;let S=!0,M=null,O=!1,U=!1;if(A){const $=Ve.get(A);if($.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(F.FRAMEBUFFER,null),S=!1;else if($.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if($.__hasExternalTextures)P.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const W=A.depthTexture;if($.__boundDepthTexture!==W){if(W!==null&&Ve.has(W)&&(A.width!==W.image.width||A.height!==W.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Y=A.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(U=!0);const q=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(q[f])?M=q[f][x]:M=q[f],O=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?M=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(q)?M=q[x]:M=q,y.copy(A.viewport),w.copy(A.scissor),j=A.scissorTest}else y.copy(xe).multiplyScalar(ae).floor(),w.copy(Ae).multiplyScalar(ae).floor(),j=ke;if(ze.bindFramebuffer(F.FRAMEBUFFER,M)&&S&&ze.drawBuffers(A,M),ze.viewport(y),ze.scissor(w),ze.setScissorTest(j),O){const $=Ve.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+f,$.__webglTexture,x)}else if(U){const $=Ve.get(A.texture),Y=f||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.__webglTexture,x||0,Y)}H=-1},this.readRenderTargetPixels=function(A,f,x,S,M,O,U){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&U!==void 0&&(V=V[U]),V){ze.bindFramebuffer(F.FRAMEBUFFER,V);try{const $=A.texture,Y=$.format,q=$.type;if(!ct.textureFormatReadable(Y)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}f>=0&&f<=A.width-S&&x>=0&&x<=A.height-M&&F.readPixels(f,x,S,M,Fe.convert(Y),Fe.convert(q),O)}finally{const $=I!==null?Ve.get(I).__webglFramebuffer:null;ze.bindFramebuffer(F.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(A,f,x,S,M,O,U){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&U!==void 0&&(V=V[U]),V){const $=A.texture,Y=$.format,q=$.type;if(!ct.textureFormatReadable(Y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(f>=0&&f<=A.width-S&&x>=0&&x<=A.height-M){ze.bindFramebuffer(F.FRAMEBUFFER,V);const W=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,W),F.bufferData(F.PIXEL_PACK_BUFFER,O.byteLength,F.STREAM_READ),F.readPixels(f,x,S,M,Fe.convert(Y),Fe.convert(q),0);const ce=I!==null?Ve.get(I).__webglFramebuffer:null;ze.bindFramebuffer(F.FRAMEBUFFER,ce);const pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hd(F,pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,W),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,O),F.deleteBuffer(W),F.deleteSync(pe),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,f=null,x=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),f=arguments[0]||null,A=arguments[1]);const S=Math.pow(2,-x),M=Math.floor(A.image.width*S),O=Math.floor(A.image.height*S),U=f!==null?f.x:0,V=f!==null?f.y:0;P.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,x,0,0,U,V,M,O),ze.unbindTexture()},this.copyTextureToTexture=function(A,f,x=null,S=null,M=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture function signature has changed."),S=arguments[0]||null,A=arguments[1],f=arguments[2],M=arguments[3]||0,x=null);let O,U,V,$,Y,q;x!==null?(O=x.max.x-x.min.x,U=x.max.y-x.min.y,V=x.min.x,$=x.min.y):(O=A.image.width,U=A.image.height,V=0,$=0),S!==null?(Y=S.x,q=S.y):(Y=0,q=0);const W=Fe.convert(f.format),ce=Fe.convert(f.type);P.setTexture2D(f,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,f.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,f.unpackAlignment);const pe=F.getParameter(F.UNPACK_ROW_LENGTH),me=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ce=F.getParameter(F.UNPACK_SKIP_PIXELS),ue=F.getParameter(F.UNPACK_SKIP_ROWS),te=F.getParameter(F.UNPACK_SKIP_IMAGES),Pe=A.isCompressedTexture?A.mipmaps[M]:A.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,V),F.pixelStorei(F.UNPACK_SKIP_ROWS,$),A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,M,Y,q,O,U,W,ce,Pe.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,M,Y,q,Pe.width,Pe.height,W,Pe.data):F.texSubImage2D(F.TEXTURE_2D,M,Y,q,O,U,W,ce,Pe),F.pixelStorei(F.UNPACK_ROW_LENGTH,pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,te),M===0&&f.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(A,f,x=null,S=null,M=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,S=arguments[1]||null,A=arguments[2],f=arguments[3],M=arguments[4]||0);let O,U,V,$,Y,q,W,ce,pe;const me=A.isCompressedTexture?A.mipmaps[M]:A.image;x!==null?(O=x.max.x-x.min.x,U=x.max.y-x.min.y,V=x.max.z-x.min.z,$=x.min.x,Y=x.min.y,q=x.min.z):(O=me.width,U=me.height,V=me.depth,$=0,Y=0,q=0),S!==null?(W=S.x,ce=S.y,pe=S.z):(W=0,ce=0,pe=0);const Ce=Fe.convert(f.format),ue=Fe.convert(f.type);let te;if(f.isData3DTexture)P.setTexture3D(f,0),te=F.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)P.setTexture2DArray(f,0),te=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,f.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,f.unpackAlignment);const Pe=F.getParameter(F.UNPACK_ROW_LENGTH),Le=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ot=F.getParameter(F.UNPACK_SKIP_PIXELS),Lt=F.getParameter(F.UNPACK_SKIP_ROWS),Je=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$),F.pixelStorei(F.UNPACK_SKIP_ROWS,Y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,q),A.isDataTexture||A.isData3DTexture?F.texSubImage3D(te,M,W,ce,pe,O,U,V,Ce,ue,me.data):f.isCompressedArrayTexture?F.compressedTexSubImage3D(te,M,W,ce,pe,O,U,V,Ce,me.data):F.texSubImage3D(te,M,W,ce,pe,O,U,V,Ce,ue,me),F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je),M===0&&f.generateMipmaps&&F.generateMipmap(te),ze.unbindTexture()},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ze.unbindTexture()},this.resetState=function(){z=0,N=0,I=null,ze.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Mo?"display-p3":"srgb"}}class s0 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class r0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new L;class Cc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yl=new L,ql=new pt,Kl=new pt,o0=new L,Zl=new je,Gr=new L,ca=new Bn,$l=new je,la=new ur;class a0 extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jc,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gr),this.boundingBox.expandByPoint(Gr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gr),this.boundingSphere.expandByPoint(Gr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(s),e.ray.intersectsSphere(ca)!==!1&&($l.copy(s).invert(),la.copy(e.ray).applyMatrix4($l),!(this.boundingBox!==null&&la.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,la)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ql.fromBufferAttribute(s.attributes.skinIndex,e),Kl.fromBufferAttribute(s.attributes.skinWeight,e),Yl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Kl.getComponent(r);if(o!==0){const a=ql.getComponent(r);Zl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(o0.copy(Yl).applyMatrix4(Zl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class su extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rc extends zt{constructor(e=null,t=1,n=1,s,r,o,a,l,h=$t,u=$t,d,p){super(null,o,a,l,h,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new je,c0=new je;class Pc{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:c0;Jl.multiplyMatrices(a,t[r]),Jl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rc(t,e,e,cn,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new su),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class hc extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new je,Ql=new je,Wr=[],eh=new li,l0=new je,Xs=new vt,js=new Bn;class h0 extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,l0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),eh.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),js.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Ql.multiplyMatrices(n,cs),Xs.matrixWorld=Ql,Xs.raycast(e,Wr);for(let o=0,a=Wr.length;o<a;o++){const l=Wr[o];l.instanceId=r,l.object=this,t.push(l)}Wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rc(new Float32Array(s*this.count),s,this.count,Eo,tn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ln extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new L,So=new L,th=new je,Ys=new ur,Xr=new Bn,ha=new L,nh=new L;class pn extends dt{constructor(e=new yt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)vo.fromBufferAttribute(t,s-1),So.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=vo.distanceTo(So);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;th.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const _=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let E=_,g=v-1;E<g;E+=h){const m=u.getX(E),R=u.getX(E+1),b=jr(this,e,Ys,l,m,R);b&&t.push(b)}if(this.isLineLoop){const E=u.getX(v-1),g=u.getX(_),m=jr(this,e,Ys,l,E,g);m&&t.push(m)}}else{const _=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let E=_,g=v-1;E<g;E+=h){const m=jr(this,e,Ys,l,E,E+1);m&&t.push(m)}if(this.isLineLoop){const E=jr(this,e,Ys,l,v-1,_);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(vo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),t.distanceSqToSegment(vo,So,ha,nh)>n)return;ha.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ha);if(!(l<e.near||l>e.far))return{distance:l,point:nh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ih=new L,sh=new L;class u0 extends pn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ih.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ih.distanceTo(sh);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lc extends pn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ic extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new je,uc=new ur,Yr=new Bn,qr=new L;class ru extends dt{constructor(e=new yt,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;rh.copy(s).invert(),uc.copy(e.ray).applyMatrix4(rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,E=_;v<E;v++){const g=h.getX(v);qr.fromBufferAttribute(d,g),oh(qr,g,l,s,e,t,this)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,E=_;v<E;v++)qr.fromBufferAttribute(d,v),oh(qr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oh(i,e,t,n,s,r,o){const a=uc.distanceSqToPoint(i);if(a<t){const l=new L;uc.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dc extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],h=new L,u=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const _=n+d/t*s;h.x=e*Math.cos(_),h.y=e*Math.sin(_),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ao extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],p=[],_=[];let v=0;const E=[],g=n/2;let m=0;R(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(_,2));function R(){const C=new L,z=new L;let N=0;const I=(t-e)/n;for(let H=0;H<=r;H++){const ne=[],y=H/r,w=y*(t-e)+e;for(let j=0;j<=s;j++){const K=j/s,Q=K*l+a,re=Math.sin(Q),Z=Math.cos(Q);z.x=w*re,z.y=-y*n+g,z.z=w*Z,d.push(z.x,z.y,z.z),C.set(re,I,Z).normalize(),p.push(C.x,C.y,C.z),_.push(K,1-y),ne.push(v++)}E.push(ne)}for(let H=0;H<s;H++)for(let ne=0;ne<r;ne++){const y=E[ne][H],w=E[ne+1][H],j=E[ne+1][H+1],K=E[ne][H+1];e>0&&(u.push(y,w,K),N+=3),t>0&&(u.push(w,j,K),N+=3)}h.addGroup(m,N,0),m+=N}function b(C){const z=v,N=new Ue,I=new L;let H=0;const ne=C===!0?e:t,y=C===!0?1:-1;for(let j=1;j<=s;j++)d.push(0,g*y,0),p.push(0,y,0),_.push(.5,.5),v++;const w=v;for(let j=0;j<=s;j++){const Q=j/s*l+a,re=Math.cos(Q),Z=Math.sin(Q);I.x=ne*Z,I.y=g*y,I.z=ne*re,d.push(I.x,I.y,I.z),p.push(0,y,0),N.x=re*.5+.5,N.y=Z*.5*y+.5,_.push(N.x,N.y),v++}for(let j=0;j<s;j++){const K=z+j,Q=w+j;C===!0?u.push(Q,Q+1,K):u.push(Q+1,Q,K),H+=3}h.addGroup(m,H,C===!0?1:2),m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends Ao{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class en extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const u=[],d=new L,p=new L,_=[],v=[],E=[],g=[];for(let m=0;m<=n;m++){const R=[],b=m/n;let C=0;m===0&&o===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let z=0;z<=t;z++){const N=z/t;d.x=-e*Math.cos(s+N*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+N*r)*Math.sin(o+b*a),v.push(d.x,d.y,d.z),p.copy(d).normalize(),E.push(p.x,p.y,p.z),g.push(N+C,1-b),R.push(h++)}u.push(R)}for(let m=0;m<n;m++)for(let R=0;R<t;R++){const b=u[m][R+1],C=u[m][R],z=u[m+1][R],N=u[m+1][R+1];(m!==0||o>0)&&_.push(b,C,N),(m!==n-1||l<Math.PI)&&_.push(C,z,N)}this.setIndex(_),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(E,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class si extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Kr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function d0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function f0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ah(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ou(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class dr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class p0 extends dr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case el:r=e,a=2*t-n;break;case tl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:o=e,l=2*n-t;break;case tl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,_=this._weightNext,v=(n-t)/(s-t),E=v*v,g=E*v,m=-p*g+2*p*E-p*v,R=(1+p)*g+(-1.5-2*p)*E+(-.5+p)*v+1,b=(-1-_)*g+(1.5+_)*E+.5*v,C=_*g-_*E;for(let z=0;z!==a;++z)r[z]=m*o[u+z]+R*o[h+z]+b*o[l+z]+C*o[d+z];return r}}class m0 extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==a;++p)r[p]=o[h+p]*d+o[l+p]*u;return r}}class g0 extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new g0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new m0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new p0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&d0(s))for(let a=0,l=s.length;a!==l;++a){const h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(s)l=!0;else{const d=a*n,p=d-n,_=d+n;for(let v=0;v!==n;++v){const E=t[d+v];if(E!==t[p+v]||E!==t[_+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,p=o*n;for(let _=0;_!==n;++_)t[p+_]=t[d+_]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=or;class Ds extends zn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=rr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class au extends zn{}au.prototype.ValueTypeName="color";class bs extends zn{}bs.prototype.ValueTypeName="number";class _0 extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let h=e*a;for(let u=h+a;h!==u;h+=4)sn.slerpFlat(r,0,o,h-a,o,h,l);return r}}class As extends zn{InterpolantFactoryMethodLinear(e){return new _0(this.times,this.values,this.getValueSize(),e)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends zn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=rr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends zn{}ws.prototype.ValueTypeName="vector";class x0{constructor(e="",t=-1,n=[],s=dd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(S0(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const u=f0(l);l=ah(l,1,u),h=ah(h,1,u),!s&&l[0]===0&&(l.push(r),h.push(h[0])),o.push(new bs(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],u=h.name.match(r);if(u&&u.length>1){const d=u[1];let p=s[d];p||(s[d]=p=[]),p.push(h)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,p,_,v,E){if(_.length!==0){const g=[],m=[];ou(_,g,m,v),g.length!==0&&E.push(new d(p,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const p=h[d].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const _={};let v;for(v=0;v<p.length;v++)if(p[v].morphTargets)for(let E=0;E<p[v].morphTargets.length;E++)_[p[v].morphTargets[E]]=-1;for(const E in _){const g=[],m=[];for(let R=0;R!==p[v].morphTargets.length;++R){const b=p[v];g.push(b.time),m.push(b.morphTarget===E?1:0)}s.push(new bs(".morphTargetInfluence["+E+"]",g,m))}l=_.length*o}else{const _=".bones["+t[d].name+"]";n(ws,_+".position",p,"pos",s),n(As,_+".quaternion",p,"rot",s),n(ws,_+".scale",p,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function v0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return au;case"quaternion":return As;case"bool":case"boolean":return Ds;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function S0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=v0(i.type);if(i.times===void 0){const t=[],n=[];ou(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cu{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=h.length;d<p;d+=2){const _=h[d],v=h[d+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const y0=new cu;class Xi{constructor(e){this.manager=e!==void 0?e:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class E0 extends Error{constructor(e,t){super(e),this.response=t}}class Uc extends Xi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ei.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Kn[e],d=h.body.getReader(),p=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=p?parseInt(p):0,v=_!==0;let E=0;const g=new ReadableStream({start(m){R();function R(){d.read().then(({done:b,value:C})=>{if(b)m.close();else{E+=C.byteLength;const z=new ProgressEvent("progress",{lengthComputable:v,loaded:E,total:_});for(let N=0,I=u.length;N<I;N++){const H=u[N];H.onProgress&&H.onProgress(z)}m.enqueue(C),R()}},b=>{m.error(b)})}}});return new Response(g)}else throw new E0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),p=d&&d[1]?d[1].toLowerCase():void 0,_=new TextDecoder(p);return h.arrayBuffer().then(v=>_.decode(v))}}}).then(h=>{Ei.add(e,h);const u=Kn[e];delete Kn[e];for(let d=0,p=u.length;d<p;d++){const _=u[d];_.onLoad&&_.onLoad(h)}}).catch(h=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),h;delete Kn[e];for(let d=0,p=u.length;d<p;d++){const _=u[d];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class M0 extends Xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ei.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ar("img");function l(){u(),Ei.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class T0 extends Xi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Rc,a=new Uc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let h;try{h=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:Dn,o.wrapT=h.wrapT!==void 0?h.wrapT:Dn,o.magFilter=h.magFilter!==void 0?h.magFilter:kt,o.minFilter=h.minFilter!==void 0?h.minFilter:kt,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=Nn),h.mipmapCount===1&&(o.minFilter=kt),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,s),o}}class lu extends Xi{constructor(e){super(e)}load(e,t,n,s){const r=new zt,o=new M0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class wo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ua=new je,ch=new L,lh=new L;class Oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b0 extends Oc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class A0 extends wo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new b0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hh=new je,qs=new L,da=new L;class w0 extends Oc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),da.copy(n.position),da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(da),n.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}}class Co extends wo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class C0 extends Oc{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R0 extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new C0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hu extends wo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class er{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class P0 extends Xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ei.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ei.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Ei.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(e,l),r.manager.itemStart(e)}}const Fc="\\[\\]\\.:\\/",L0=new RegExp("["+Fc+"]","g"),Bc="[^"+Fc+"]",I0="[^"+Fc.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",Bc),N0=/(WCOD+)?/.source.replace("WCOD",I0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),F0=new RegExp("^"+D0+N0+U0+O0+"$"),B0=["material","materials","bones","map"];class k0{constructor(e,t,n){const s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){const t=F0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);B0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[s];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=k0;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bi{constructor(e){this.value=e}clone(){return new Bi(this.value.clone===void 0?this.value:this.value.clone())}}class uh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uu extends Wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function dh(i,e){const t=e.x-i.x,n=e.y-i.y,s=e.z-i.z;return Math.sqrt(t**2+n**2+s**2)}function fh(i,e){const t=(i.x-e.x)/DISTANCE_SCALE*1e3,n=(i.y-e.y)/DISTANCE_SCALE*1e3,s=(i.z-e.z)/DISTANCE_SCALE*1e3;return Math.sqrt(t**2+n**2+s**2)}function dc(i,e,t){const n=new L(0,0,0),s=Math.sqrt((e.x-i.x)**2+(e.z-i.z)**2);return n.x=e.x+t*((e.x-i.x)/s),n.z=e.z+t*((e.z-i.z)/s),n}function fa(i){return`#${i.toString(16).padStart(6,"0")}`}function Zr(i){return`0x${i.slice(1)}`}function z0(i){return Math.round(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"'")}function pa(i,e,t,n){if(e==="km")return z0(i)+" "+e;if(e==="au")return(i/t).toPrecision(4)+" "+e;if(e==="lm"){const s=Math.floor(i/n/60),r=Math.floor(i/n%60),o=String(Math.floor(i%n/(n/60))).padStart(2,"0");return s>0?s+":"+String(r).padStart(2,"0")+":"+o+" lh":r+":"+o+" "+e}return 0}class du extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],h=[],u=[];let d=e;const p=(t-e)/s,_=new L;let v=new Ue;for(let E=0;E<=s;E++){for(let g=0;g<=n;g++){const m=r+g/n*o;_.x=d*Math.cos(m),_.y=d*Math.sin(m),l.push(_.x,_.y,_.z),h.push(0,0,1),v=new Ue(E/s,g/n),u.push(v.x,v.y)}d+=p}for(let E=0;E<s;E++){const g=E*(n+1);for(let m=0;m<n;m++){const R=m+g,b=R,C=R+n+1,z=R+n+2,N=R+1;a.push(b,C,N),a.push(C,z,N)}}this.setIndex(a),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2))}}const ph={type:"change"},kc={type:"start"},fu={type:"end"},$r=new ur,mh=new yi,H0=Math.cos(70*Xe.DEG2RAD),Dt=new L,Qt=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class V0 extends uu{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gn.ROTATE,MIDDLE:gn.DOLLY,RIGHT:gn.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new sn,this._lastTargetPosition=new L,this._quat=new sn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new L,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new L,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=W0.bind(this),this._onPointerDown=G0.bind(this),this._onPointerUp=X0.bind(this),this._onContextMenu=J0.bind(this),this._onMouseWheel=q0.bind(this),this._onKeyDown=K0.bind(this),this._onTouchStart=Z0.bind(this),this._onTouchMove=$0.bind(this),this._onMouseDown=j0.bind(this),this._onMouseMove=Y0.bind(this),this._interceptControlDown=Q0.bind(this),this._interceptControlUp=ex.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ph),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new L(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($r.origin.copy(this.object.position),$r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($r.direction))<H0?this.object.lookAt(this.target):(mh.setFromNormalAndCoplanarPoint(this.object.up,this.target),$r.intersectPlane(mh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(ph),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function G0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function W0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function X0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fu),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function j0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case gn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case gn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(kc)}function Y0(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function q0(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(kc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fu))}function K0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Z0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(kc)}function $0(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function J0(i){this.enabled!==!1&&i.preventDefault()}function Q0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ex(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ga={type:"change"},zc={type:"start"},Hc={type:"end"},gh=1e-6,ft={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Jr=new Ue,xi=new Ue,tx=new L,Qr=new L,_a=new L,ls=new sn,_h=new L,eo=new L,xa=new L,to=new L;class nx extends uu{constructor(e,t=null){super(e,t),this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:gn.ROTATE,MIDDLE:gn.DOLLY,RIGHT:gn.PAN},this.state=ft.NONE,this.keyState=ft.NONE,this.target=new L,this._lastPosition=new L,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new L,this._movePrev=new Ue,this._moveCurr=new Ue,this._lastAxis=new L,this._zoomStart=new Ue,this._zoomEnd=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._pointers=[],this._pointerPositions={},this._onPointerMove=sx.bind(this),this._onPointerDown=ix.bind(this),this._onPointerUp=rx.bind(this),this._onPointerCancel=ox.bind(this),this._onContextMenu=fx.bind(this),this._onMouseWheel=dx.bind(this),this._onKeyDown=cx.bind(this),this._onKeyUp=ax.bind(this),this._onTouchStart=px.bind(this),this._onTouchMove=mx.bind(this),this._onTouchEnd=gx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=hx.bind(this),this._onMouseUp=ux.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(),this.handleResize()),this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>gh&&(this.dispatchEvent(ga),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>gh||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(ga),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=ft.NONE,this.keyState=ft.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(ga),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(xi.copy(this._panEnd).sub(this._panStart),xi.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;xi.x*=e,xi.y*=t}xi.multiplyScalar(this._eye.length()*this.panSpeed),Qr.copy(this._eye).cross(this.object.up).setLength(xi.x),Qr.add(tx.copy(this.object.up).setLength(xi.y)),this.object.position.add(Qr),this.target.add(Qr),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(xi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){to.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=to.length();e?(this._eye.copy(this.object.position).sub(this.target),_h.copy(this._eye).normalize(),eo.copy(this.object.up).normalize(),xa.crossVectors(eo,_h).normalize(),eo.setLength(this._moveCurr.y-this._movePrev.y),xa.setLength(this._moveCurr.x-this._movePrev.x),to.copy(eo.add(xa)),_a.crossVectors(to,this._eye).normalize(),e*=this.rotateSpeed,ls.setFromAxisAngle(_a,e),this._eye.applyQuaternion(ls),this.object.up.applyQuaternion(ls),this._lastAxis.copy(_a),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),ls.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(ls),this.object.up.applyQuaternion(ls)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===ft.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Xe.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Xe.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return Jr.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),Jr}_getMouseOnCircle(e,t){return Jr.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),Jr}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function ix(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function sx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function ox(i){this._removePointer(i)}function ax(){this.enabled!==!1&&(this.keyState=ft.NONE,window.addEventListener("keydown",this._onKeyDown))}function cx(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===ft.NONE&&(i.code===this.keys[ft.ROTATE]&&!this.noRotate?this.keyState=ft.ROTATE:i.code===this.keys[ft.ZOOM]&&!this.noZoom?this.keyState=ft.ZOOM:i.code===this.keys[ft.PAN]&&!this.noPan&&(this.keyState=ft.PAN)))}function lx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gn.DOLLY:this.state=ft.ZOOM;break;case gn.ROTATE:this.state=ft.ROTATE;break;case gn.PAN:this.state=ft.PAN;break;default:this.state=ft.NONE}const t=this.keyState!==ft.NONE?this.keyState:this.state;t===ft.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):t===ft.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):t===ft.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(zc)}function hx(i){const e=this.keyState!==ft.NONE?this.keyState:this.state;e===ft.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):e===ft.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):e===ft.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function ux(){this.state=ft.NONE,this.dispatchEvent(Hc)}function dx(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(zc),this.dispatchEvent(Hc)}}function fx(i){this.enabled!==!1&&i.preventDefault()}function px(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=ft.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=ft.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(zc)}function mx(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:const e=this._getSecondPointerPosition(i),t=i.pageX-e.x,n=i.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+n*n);const s=(i.pageX+e.x)/2,r=(i.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function gx(i){switch(this._pointers.length){case 0:this.state=ft.NONE;break;case 1:this.state=ft.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=ft.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==i.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(Hc)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var fn=Uint8Array,ds=Uint16Array,_x=Int32Array,pu=new fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mu=new fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),xx=new fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gu=function(i,e){for(var t=new ds(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new _x(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},_u=gu(pu,2),xu=_u.b,vx=_u.r;xu[28]=258,vx[258]=28;var Sx=gu(mu,0),yx=Sx.b,fc=new ds(32768);for(var Tt=0;Tt<32768;++Tt){var vi=(Tt&43690)>>1|(Tt&21845)<<1;vi=(vi&52428)>>2|(vi&13107)<<2,vi=(vi&61680)>>4|(vi&3855)<<4,fc[Tt]=((vi&65280)>>8|(vi&255)<<8)>>1}var tr=function(i,e,t){for(var n=i.length,s=0,r=new ds(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new ds(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new ds(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var h=s<<4|i[s],u=e-i[s],d=o[i[s]-1]++<<u,p=d|(1<<u)-1;d<=p;++d)a[fc[d]>>l]=h}else for(a=new ds(n),s=0;s<n;++s)i[s]&&(a[s]=fc[o[i[s]-1]++]>>15-i[s]);return a},fr=new fn(288);for(var Tt=0;Tt<144;++Tt)fr[Tt]=8;for(var Tt=144;Tt<256;++Tt)fr[Tt]=9;for(var Tt=256;Tt<280;++Tt)fr[Tt]=7;for(var Tt=280;Tt<288;++Tt)fr[Tt]=8;var vu=new fn(32);for(var Tt=0;Tt<32;++Tt)vu[Tt]=5;var Ex=tr(fr,9,1),Mx=tr(vu,5,1),va=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Mn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Sa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Tx=function(i){return(i+7)/8|0},bx=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new fn(i.subarray(e,t))},Ax=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Tn=function(i,e,t){var n=new Error(e||Ax[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Tn),!t)throw n;return n},wx=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new fn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new fn(s*3));var h=function(at){var Qe=t.length;if(at>Qe){var F=new fn(Math.max(Qe*2,at));F.set(t),t=F}},u=e.f||0,d=e.p||0,p=e.b||0,_=e.l,v=e.d,E=e.m,g=e.n,m=s*8;do{if(!_){u=Mn(i,d,1);var R=Mn(i,d+1,3);if(d+=3,R)if(R==1)_=Ex,v=Mx,E=9,g=5;else if(R==2){var N=Mn(i,d,31)+257,I=Mn(i,d+10,15)+4,H=N+Mn(i,d+5,31)+1;d+=14;for(var ne=new fn(H),y=new fn(19),w=0;w<I;++w)y[xx[w]]=Mn(i,d+w*3,7);d+=I*3;for(var j=va(y),K=(1<<j)-1,Q=tr(y,j,1),w=0;w<H;){var re=Q[Mn(i,d,K)];d+=re&15;var b=re>>4;if(b<16)ne[w++]=b;else{var Z=0,ae=0;for(b==16?(ae=3+Mn(i,d,3),d+=2,Z=ne[w-1]):b==17?(ae=3+Mn(i,d,7),d+=3):b==18&&(ae=11+Mn(i,d,127),d+=7);ae--;)ne[w++]=Z}}var J=ne.subarray(0,N),_e=ne.subarray(N);E=va(J),g=va(_e),_=tr(J,E,1),v=tr(_e,g,1)}else Tn(1);else{var b=Tx(d)+4,C=i[b-4]|i[b-3]<<8,z=b+C;if(z>s){l&&Tn(0);break}a&&h(p+C),t.set(i.subarray(b,z),p),e.b=p+=C,e.p=d=z*8,e.f=u;continue}if(d>m){l&&Tn(0);break}}a&&h(p+131072);for(var xe=(1<<E)-1,Ae=(1<<g)-1,ke=d;;ke=d){var Z=_[Sa(i,d)&xe],Ge=Z>>4;if(d+=Z&15,d>m){l&&Tn(0);break}if(Z||Tn(2),Ge<256)t[p++]=Ge;else if(Ge==256){ke=d,_=null;break}else{var ee=Ge-254;if(Ge>264){var w=Ge-257,le=pu[w];ee=Mn(i,d,(1<<le)-1)+xu[w],d+=le}var fe=v[Sa(i,d)&Ae],D=fe>>4;fe||Tn(3),d+=fe&15;var _e=yx[D];if(D>3){var le=mu[D];_e+=Sa(i,d)&(1<<le)-1,d+=le}if(d>m){l&&Tn(0);break}a&&h(p+131072);var he=p+ee;if(p<_e){var Ee=r-_e,Be=Math.min(_e,he);for(Ee+p<0&&Tn(3);p<Be;++p)t[p]=n[Ee+p]}for(;p<he;++p)t[p]=t[p-_e]}}e.l=_,e.p=ke,e.b=p,e.f=u,_&&(u=1,e.m=E,e.d=v,e.n=g)}while(!u);return p!=t.length&&o?bx(t,0,p):t.subarray(0,p)},Cx=new fn(0),Rx=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Tn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Tn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function no(i,e){return wx(i.subarray(Rx(i,e),-4),{i:2},e,e)}var Px=typeof TextDecoder<"u"&&new TextDecoder,Lx=0;try{Px.decode(Cx,{stream:!0}),Lx=1}catch{}function xh(i,e){if(e===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ac||e===kh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ac)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Ix extends T0{constructor(e){super(e),this.type=ni}parse(e){const ne=Math.pow(2.7182818,2.2);function y(f,x){let S=0;for(let O=0;O<65536;++O)(O==0||f[O>>3]&1<<(O&7))&&(x[S++]=O);const M=S-1;for(;S<65536;)x[S++]=0;return M}function w(f){for(let x=0;x<16384;x++)f[x]={},f[x].len=0,f[x].lit=0,f[x].p=null}const j={l:0,c:0,lc:0};function K(f,x,S,M,O){for(;S<f;)x=x<<8|nt(M,O),S+=8;S-=f,j.l=x>>S&(1<<f)-1,j.c=x,j.lc=S}const Q=new Array(59);function re(f){for(let S=0;S<=58;++S)Q[S]=0;for(let S=0;S<65537;++S)Q[f[S]]+=1;let x=0;for(let S=58;S>0;--S){const M=x+Q[S]>>1;Q[S]=x,x=M}for(let S=0;S<65537;++S){const M=f[S];M>0&&(f[S]=M|Q[M]++<<6)}}function Z(f,x,S,M,O,U){const V=x;let $=0,Y=0;for(;M<=O;M++){if(V.value-x.value>S)return!1;K(6,$,Y,f,V);const q=j.l;if($=j.c,Y=j.lc,U[M]=q,q==63){if(V.value-x.value>S)throw new Error("Something wrong with hufUnpackEncTable");K(8,$,Y,f,V);let W=j.l+6;if($=j.c,Y=j.lc,M+W>O+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)U[M++]=0;M--}else if(q>=59){let W=q-59+2;if(M+W>O+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)U[M++]=0;M--}}re(U)}function ae(f){return f&63}function J(f){return f>>6}function _e(f,x,S,M){for(;x<=S;x++){const O=J(f[x]),U=ae(f[x]);if(O>>U)throw new Error("Invalid table entry");if(U>14){const V=M[O>>U-14];if(V.len)throw new Error("Invalid table entry");if(V.lit++,V.p){const $=V.p;V.p=new Array(V.lit);for(let Y=0;Y<V.lit-1;++Y)V.p[Y]=$[Y]}else V.p=new Array(1);V.p[V.lit-1]=x}else if(U){let V=0;for(let $=1<<14-U;$>0;$--){const Y=M[(O<<14-U)+V];if(Y.len||Y.p)throw new Error("Invalid table entry");Y.len=U,Y.lit=x,V++}}}return!0}const xe={c:0,lc:0};function Ae(f,x,S,M){f=f<<8|nt(S,M),x+=8,xe.c=f,xe.lc=x}const ke={c:0,lc:0};function Ge(f,x,S,M,O,U,V,$,Y){if(f==x){M<8&&(Ae(S,M,O,U),S=xe.c,M=xe.lc),M-=8;let q=S>>M;if(q=new Uint8Array([q])[0],$.value+q>Y)return!1;const W=V[$.value-1];for(;q-- >0;)V[$.value++]=W}else if($.value<Y)V[$.value++]=f;else return!1;ke.c=S,ke.lc=M}function ee(f){return f&65535}function le(f){const x=ee(f);return x>32767?x-65536:x}const fe={a:0,b:0};function D(f,x){const S=le(f),O=le(x),U=S+(O&1)+(O>>1),V=U,$=U-O;fe.a=V,fe.b=$}function he(f,x){const S=ee(f),M=ee(x),O=S-(M>>1)&65535,U=M+O-32768&65535;fe.a=U,fe.b=O}function Ee(f,x,S,M,O,U,V){const $=V<16384,Y=S>O?O:S;let q=1,W,ce;for(;q<=Y;)q<<=1;for(q>>=1,W=q,q>>=1;q>=1;){ce=0;const pe=ce+U*(O-W),me=U*q,Ce=U*W,ue=M*q,te=M*W;let Pe,Le,ot,Lt;for(;ce<=pe;ce+=Ce){let Je=ce;const it=ce+M*(S-W);for(;Je<=it;Je+=te){const Ye=Je+ue,Rt=Je+me,Ct=Rt+ue;$?(D(f[Je+x],f[Rt+x]),Pe=fe.a,ot=fe.b,D(f[Ye+x],f[Ct+x]),Le=fe.a,Lt=fe.b,D(Pe,Le),f[Je+x]=fe.a,f[Ye+x]=fe.b,D(ot,Lt),f[Rt+x]=fe.a,f[Ct+x]=fe.b):(he(f[Je+x],f[Rt+x]),Pe=fe.a,ot=fe.b,he(f[Ye+x],f[Ct+x]),Le=fe.a,Lt=fe.b,he(Pe,Le),f[Je+x]=fe.a,f[Ye+x]=fe.b,he(ot,Lt),f[Rt+x]=fe.a,f[Ct+x]=fe.b)}if(S&q){const Ye=Je+me;$?D(f[Je+x],f[Ye+x]):he(f[Je+x],f[Ye+x]),Pe=fe.a,f[Ye+x]=fe.b,f[Je+x]=Pe}}if(O&q){let Je=ce;const it=ce+M*(S-W);for(;Je<=it;Je+=te){const Ye=Je+ue;$?D(f[Je+x],f[Ye+x]):he(f[Je+x],f[Ye+x]),Pe=fe.a,f[Ye+x]=fe.b,f[Je+x]=Pe}}W=q,q>>=1}return ce}function Be(f,x,S,M,O,U,V,$,Y){let q=0,W=0;const ce=V,pe=Math.trunc(M.value+(O+7)/8);for(;M.value<pe;)for(Ae(q,W,S,M),q=xe.c,W=xe.lc;W>=14;){const Ce=q>>W-14&16383,ue=x[Ce];if(ue.len)W-=ue.len,Ge(ue.lit,U,q,W,S,M,$,Y,ce),q=ke.c,W=ke.lc;else{if(!ue.p)throw new Error("hufDecode issues");let te;for(te=0;te<ue.lit;te++){const Pe=ae(f[ue.p[te]]);for(;W<Pe&&M.value<pe;)Ae(q,W,S,M),q=xe.c,W=xe.lc;if(W>=Pe&&J(f[ue.p[te]])==(q>>W-Pe&(1<<Pe)-1)){W-=Pe,Ge(ue.p[te],U,q,W,S,M,$,Y,ce),q=ke.c,W=ke.lc;break}}if(te==ue.lit)throw new Error("hufDecode issues")}}const me=8-O&7;for(q>>=me,W-=me;W>0;){const Ce=x[q<<14-W&16383];if(Ce.len)W-=Ce.len,Ge(Ce.lit,U,q,W,S,M,$,Y,ce),q=ke.c,W=ke.lc;else throw new Error("hufDecode issues")}return!0}function at(f,x,S,M,O,U){const V={value:0},$=S.value,Y=ve(x,S),q=ve(x,S);S.value+=4;const W=ve(x,S);if(S.value+=4,Y<0||Y>=65537||q<0||q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ce=new Array(65537),pe=new Array(16384);w(pe);const me=M-(S.value-$);if(Z(f,S,me,Y,q,ce),W>8*(M-(S.value-$)))throw new Error("Something wrong with hufUncompress");_e(ce,Y,q,pe),Be(ce,pe,f,S,W,q,U,O,V)}function Qe(f,x,S){for(let M=0;M<S;++M)x[M]=f[x[M]]}function F(f){for(let x=1;x<f.length;x++){const S=f[x-1]+f[x]-128;f[x]=S}}function Vt(f,x){let S=0,M=Math.floor((f.length+1)/2),O=0;const U=f.length-1;for(;!(O>U||(x[O++]=f[S++],O>U));)x[O++]=f[M++]}function et(f){let x=f.byteLength;const S=new Array;let M=0;const O=new DataView(f);for(;x>0;){const U=O.getInt8(M++);if(U<0){const V=-U;x-=V+1;for(let $=0;$<V;$++)S.push(O.getUint8(M++))}else{const V=U;x-=2;const $=O.getUint8(M++);for(let Y=0;Y<V+1;Y++)S.push($)}}return S}function ct(f,x,S,M,O,U){let V=new DataView(U.buffer);const $=S[f.idx[0]].width,Y=S[f.idx[0]].height,q=3,W=Math.floor($/8),ce=Math.ceil($/8),pe=Math.ceil(Y/8),me=$-(ce-1)*8,Ce=Y-(pe-1)*8,ue={value:0},te=new Array(q),Pe=new Array(q),Le=new Array(q),ot=new Array(q),Lt=new Array(q);for(let it=0;it<q;++it)Lt[it]=x[f.idx[it]],te[it]=it<1?0:te[it-1]+ce*pe,Pe[it]=new Float32Array(64),Le[it]=new Uint16Array(64),ot[it]=new Uint16Array(ce*64);for(let it=0;it<pe;++it){let Ye=8;it==pe-1&&(Ye=Ce);let Rt=8;for(let We=0;We<ce;++We){We==ce-1&&(Rt=me);for(let mt=0;mt<q;++mt)Le[mt].fill(0),Le[mt][0]=O[te[mt]++],ze(ue,M,Le[mt]),St(Le[mt],Pe[mt]),Ve(Pe[mt]);P(Pe);for(let mt=0;mt<q;++mt)T(Pe[mt],ot[mt],We*64)}let Ct=0;for(let We=0;We<q;++We){const mt=S[f.idx[We]].type;for(let vn=8*it;vn<8*it+Ye;++vn){Ct=Lt[We][vn];for(let ui=0;ui<W;++ui){const Ln=ui*64+(vn&7)*8;V.setUint16(Ct+0*2*mt,ot[We][Ln+0],!0),V.setUint16(Ct+1*2*mt,ot[We][Ln+1],!0),V.setUint16(Ct+2*2*mt,ot[We][Ln+2],!0),V.setUint16(Ct+3*2*mt,ot[We][Ln+3],!0),V.setUint16(Ct+4*2*mt,ot[We][Ln+4],!0),V.setUint16(Ct+5*2*mt,ot[We][Ln+5],!0),V.setUint16(Ct+6*2*mt,ot[We][Ln+6],!0),V.setUint16(Ct+7*2*mt,ot[We][Ln+7],!0),Ct+=8*2*mt}}if(W!=ce)for(let vn=8*it;vn<8*it+Ye;++vn){const ui=Lt[We][vn]+8*W*2*mt,Ln=W*64+(vn&7)*8;for(let Er=0;Er<Rt;++Er)V.setUint16(ui+Er*2*mt,ot[We][Ln+Er],!0)}}}const Je=new Uint16Array($);V=new DataView(U.buffer);for(let it=0;it<q;++it){S[f.idx[it]].decoded=!0;const Ye=S[f.idx[it]].type;if(S[it].type==2)for(let Rt=0;Rt<Y;++Rt){const Ct=Lt[it][Rt];for(let We=0;We<$;++We)Je[We]=V.getUint16(Ct+We*2*Ye,!0);for(let We=0;We<$;++We)V.setFloat32(Ct+We*2*Ye,k(Je[We]),!0)}}}function ze(f,x,S){let M,O=1;for(;O<64;)M=x[f.value],M==65280?O=64:M>>8==255?O+=M&255:(S[O]=M,O++),f.value++}function St(f,x){x[0]=k(f[0]),x[1]=k(f[1]),x[2]=k(f[5]),x[3]=k(f[6]),x[4]=k(f[14]),x[5]=k(f[15]),x[6]=k(f[27]),x[7]=k(f[28]),x[8]=k(f[2]),x[9]=k(f[4]),x[10]=k(f[7]),x[11]=k(f[13]),x[12]=k(f[16]),x[13]=k(f[26]),x[14]=k(f[29]),x[15]=k(f[42]),x[16]=k(f[3]),x[17]=k(f[8]),x[18]=k(f[12]),x[19]=k(f[17]),x[20]=k(f[25]),x[21]=k(f[30]),x[22]=k(f[41]),x[23]=k(f[43]),x[24]=k(f[9]),x[25]=k(f[11]),x[26]=k(f[18]),x[27]=k(f[24]),x[28]=k(f[31]),x[29]=k(f[40]),x[30]=k(f[44]),x[31]=k(f[53]),x[32]=k(f[10]),x[33]=k(f[19]),x[34]=k(f[23]),x[35]=k(f[32]),x[36]=k(f[39]),x[37]=k(f[45]),x[38]=k(f[52]),x[39]=k(f[54]),x[40]=k(f[20]),x[41]=k(f[22]),x[42]=k(f[33]),x[43]=k(f[38]),x[44]=k(f[46]),x[45]=k(f[51]),x[46]=k(f[55]),x[47]=k(f[60]),x[48]=k(f[21]),x[49]=k(f[34]),x[50]=k(f[37]),x[51]=k(f[47]),x[52]=k(f[50]),x[53]=k(f[56]),x[54]=k(f[59]),x[55]=k(f[61]),x[56]=k(f[35]),x[57]=k(f[36]),x[58]=k(f[48]),x[59]=k(f[49]),x[60]=k(f[57]),x[61]=k(f[58]),x[62]=k(f[62]),x[63]=k(f[63])}function Ve(f){const x=.5*Math.cos(.7853975),S=.5*Math.cos(3.14159/16),M=.5*Math.cos(3.14159/8),O=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),V=.5*Math.cos(3*3.14159/8),$=.5*Math.cos(7*3.14159/16),Y=new Array(4),q=new Array(4),W=new Array(4),ce=new Array(4);for(let pe=0;pe<8;++pe){const me=pe*8;Y[0]=M*f[me+2],Y[1]=V*f[me+2],Y[2]=M*f[me+6],Y[3]=V*f[me+6],q[0]=S*f[me+1]+O*f[me+3]+U*f[me+5]+$*f[me+7],q[1]=O*f[me+1]-$*f[me+3]-S*f[me+5]-U*f[me+7],q[2]=U*f[me+1]-S*f[me+3]+$*f[me+5]+O*f[me+7],q[3]=$*f[me+1]-U*f[me+3]+O*f[me+5]-S*f[me+7],W[0]=x*(f[me+0]+f[me+4]),W[3]=x*(f[me+0]-f[me+4]),W[1]=Y[0]+Y[3],W[2]=Y[1]-Y[2],ce[0]=W[0]+W[1],ce[1]=W[3]+W[2],ce[2]=W[3]-W[2],ce[3]=W[0]-W[1],f[me+0]=ce[0]+q[0],f[me+1]=ce[1]+q[1],f[me+2]=ce[2]+q[2],f[me+3]=ce[3]+q[3],f[me+4]=ce[3]-q[3],f[me+5]=ce[2]-q[2],f[me+6]=ce[1]-q[1],f[me+7]=ce[0]-q[0]}for(let pe=0;pe<8;++pe)Y[0]=M*f[16+pe],Y[1]=V*f[16+pe],Y[2]=M*f[48+pe],Y[3]=V*f[48+pe],q[0]=S*f[8+pe]+O*f[24+pe]+U*f[40+pe]+$*f[56+pe],q[1]=O*f[8+pe]-$*f[24+pe]-S*f[40+pe]-U*f[56+pe],q[2]=U*f[8+pe]-S*f[24+pe]+$*f[40+pe]+O*f[56+pe],q[3]=$*f[8+pe]-U*f[24+pe]+O*f[40+pe]-S*f[56+pe],W[0]=x*(f[pe]+f[32+pe]),W[3]=x*(f[pe]-f[32+pe]),W[1]=Y[0]+Y[3],W[2]=Y[1]-Y[2],ce[0]=W[0]+W[1],ce[1]=W[3]+W[2],ce[2]=W[3]-W[2],ce[3]=W[0]-W[1],f[0+pe]=ce[0]+q[0],f[8+pe]=ce[1]+q[1],f[16+pe]=ce[2]+q[2],f[24+pe]=ce[3]+q[3],f[32+pe]=ce[3]-q[3],f[40+pe]=ce[2]-q[2],f[48+pe]=ce[1]-q[1],f[56+pe]=ce[0]-q[0]}function P(f){for(let x=0;x<64;++x){const S=f[0][x],M=f[1][x],O=f[2][x];f[0][x]=S+1.5747*O,f[1][x]=S-.1873*M-.4682*O,f[2][x]=S+1.8556*M}}function T(f,x,S){for(let M=0;M<64;++M)x[S+M]=_l.toHalfFloat(X(f[M]))}function X(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(ne,Math.abs(f)-1)}function se(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function de(f){const x=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),S=new Uint8Array(et(x)),M=new Uint8Array(S.length);return F(S),Vt(S,M),new DataView(M.buffer)}function ie(f){const x=f.array.slice(f.offset.value,f.offset.value+f.size),S=no(x),M=new Uint8Array(S.length);return F(S),Vt(S,M),new DataView(M.buffer)}function De(f){const x=f.viewer,S={value:f.offset.value},M=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),O=new Uint8Array(8192);let U=0;const V=new Array(f.inputChannels.length);for(let Ce=0,ue=f.inputChannels.length;Ce<ue;Ce++)V[Ce]={},V[Ce].start=U,V[Ce].end=V[Ce].start,V[Ce].nx=f.columns,V[Ce].ny=f.lines,V[Ce].size=f.type,U+=V[Ce].nx*V[Ce].ny*V[Ce].size;const $=oe(x,S),Y=oe(x,S);if(Y>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if($<=Y)for(let Ce=0;Ce<Y-$+1;Ce++)O[Ce+$]=Fe(x,S);const q=new Uint16Array(65536),W=y(O,q),ce=ve(x,S);at(f.array,x,S,ce,M,U);for(let Ce=0;Ce<f.inputChannels.length;++Ce){const ue=V[Ce];for(let te=0;te<V[Ce].size;++te)Ee(M,ue.start+te,ue.nx,ue.size,ue.ny,ue.nx*ue.size,W)}Qe(q,M,U);let pe=0;const me=new Uint8Array(M.buffer.byteLength);for(let Ce=0;Ce<f.lines;Ce++)for(let ue=0;ue<f.inputChannels.length;ue++){const te=V[ue],Pe=te.nx*te.size,Le=new Uint8Array(M.buffer,te.end*2,Pe*2);me.set(Le,pe),pe+=Pe*2,te.end+=Pe}return new DataView(me.buffer)}function ye(f){const x=f.array.slice(f.offset.value,f.offset.value+f.size),S=no(x),M=f.inputChannels.length*f.lines*f.columns*f.totalBytes,O=new ArrayBuffer(M),U=new DataView(O);let V=0,$=0;const Y=new Array(4);for(let q=0;q<f.lines;q++)for(let W=0;W<f.inputChannels.length;W++){let ce=0;switch(f.inputChannels[W].pixelType){case 1:Y[0]=V,Y[1]=Y[0]+f.columns,V=Y[1]+f.columns;for(let me=0;me<f.columns;++me){const Ce=S[Y[0]++]<<8|S[Y[1]++];ce+=Ce,U.setUint16($,ce,!0),$+=2}break;case 2:Y[0]=V,Y[1]=Y[0]+f.columns,Y[2]=Y[1]+f.columns,V=Y[2]+f.columns;for(let me=0;me<f.columns;++me){const Ce=S[Y[0]++]<<24|S[Y[1]++]<<16|S[Y[2]++]<<8;ce+=Ce,U.setUint32($,ce,!0),$+=4}break}}return U}function we(f){const x=f.viewer,S={value:f.offset.value},M=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),O={version:qe(x,S),unknownUncompressedSize:qe(x,S),unknownCompressedSize:qe(x,S),acCompressedSize:qe(x,S),dcCompressedSize:qe(x,S),rleCompressedSize:qe(x,S),rleUncompressedSize:qe(x,S),rleRawSize:qe(x,S),totalAcUncompressedCount:qe(x,S),totalDcUncompressedCount:qe(x,S),acCompression:qe(x,S)};if(O.version<2)throw new Error("EXRLoader.parse: "+Gn.compression+" version "+O.version+" is unsupported");const U=new Array;let V=oe(x,S)-2;for(;V>0;){const ue=tt(x.buffer,S),te=Fe(x,S),Pe=te>>2&3,Le=(te>>4)-1,ot=new Int8Array([Le])[0],Lt=Fe(x,S);U.push({name:ue,index:ot,type:Lt,compression:Pe}),V-=ue.length+3}const $=Gn.channels,Y=new Array(f.inputChannels.length);for(let ue=0;ue<f.inputChannels.length;++ue){const te=Y[ue]={},Pe=$[ue];te.name=Pe.name,te.compression=0,te.decoded=!1,te.type=Pe.pixelType,te.pLinear=Pe.pLinear,te.width=f.columns,te.height=f.lines}const q={idx:new Array(3)};for(let ue=0;ue<f.inputChannels.length;++ue){const te=Y[ue];for(let Pe=0;Pe<U.length;++Pe){const Le=U[Pe];te.name==Le.name&&(te.compression=Le.compression,Le.index>=0&&(q.idx[Le.index]=ue),te.offset=ue)}}let W,ce,pe;if(O.acCompressedSize>0)switch(O.acCompression){case 0:W=new Uint16Array(O.totalAcUncompressedCount),at(f.array,x,S,O.acCompressedSize,W,O.totalAcUncompressedCount);break;case 1:const ue=f.array.slice(S.value,S.value+O.totalAcUncompressedCount),te=no(ue);W=new Uint16Array(te.buffer),S.value+=O.totalAcUncompressedCount;break}if(O.dcCompressedSize>0){const ue={array:f.array,offset:S,size:O.dcCompressedSize};ce=new Uint16Array(ie(ue).buffer),S.value+=O.dcCompressedSize}if(O.rleRawSize>0){const ue=f.array.slice(S.value,S.value+O.rleCompressedSize),te=no(ue);pe=et(te.buffer),S.value+=O.rleCompressedSize}let me=0;const Ce=new Array(Y.length);for(let ue=0;ue<Ce.length;++ue)Ce[ue]=new Array;for(let ue=0;ue<f.lines;++ue)for(let te=0;te<Y.length;++te)Ce[te].push(me),me+=Y[te].width*f.type*2;ct(q,Ce,Y,W,ce,M);for(let ue=0;ue<Y.length;++ue){const te=Y[ue];if(!te.decoded)switch(te.compression){case 2:let Pe=0,Le=0;for(let ot=0;ot<f.lines;++ot){let Lt=Ce[ue][Pe];for(let Je=0;Je<te.width;++Je){for(let it=0;it<2*te.type;++it)M[Lt++]=pe[Le+it*te.width*te.height];Le++}Pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(M.buffer)}function tt(f,x){const S=new Uint8Array(f);let M=0;for(;S[x.value+M]!=0;)M+=1;const O=new TextDecoder().decode(S.slice(x.value,x.value+M));return x.value=x.value+M+1,O}function ge(f,x,S){const M=new TextDecoder().decode(new Uint8Array(f).slice(x.value,x.value+S));return x.value=x.value+S,M}function Re(f,x){const S=Ne(f,x),M=ve(f,x);return[S,M]}function He(f,x){const S=ve(f,x),M=ve(f,x);return[S,M]}function Ne(f,x){const S=f.getInt32(x.value,!0);return x.value=x.value+4,S}function ve(f,x){const S=f.getUint32(x.value,!0);return x.value=x.value+4,S}function nt(f,x){const S=f[x.value];return x.value=x.value+1,S}function Fe(f,x){const S=f.getUint8(x.value);return x.value=x.value+1,S}const qe=function(f,x){let S;return"getBigInt64"in DataView.prototype?S=Number(f.getBigInt64(x.value,!0)):S=f.getUint32(x.value+4,!0)+Number(f.getUint32(x.value,!0)<<32),x.value+=8,S};function B(f,x){const S=f.getFloat32(x.value,!0);return x.value+=4,S}function Te(f,x){return _l.toHalfFloat(B(f,x))}function k(f){const x=(f&31744)>>10,S=f&1023;return(f>>15?-1:1)*(x?x===31?S?NaN:1/0:Math.pow(2,x-15)*(1+S/1024):6103515625e-14*(S/1024))}function oe(f,x){const S=f.getUint16(x.value,!0);return x.value+=2,S}function Me(f,x){return k(oe(f,x))}function be(f,x,S,M){const O=S.value,U=[];for(;S.value<O+M-1;){const V=tt(x,S),$=Ne(f,S),Y=Fe(f,S);S.value+=3;const q=Ne(f,S),W=Ne(f,S);U.push({name:V,pixelType:$,pLinear:Y,xSampling:q,ySampling:W})}return S.value+=1,U}function rt(f,x){const S=B(f,x),M=B(f,x),O=B(f,x),U=B(f,x),V=B(f,x),$=B(f,x),Y=B(f,x),q=B(f,x);return{redX:S,redY:M,greenX:O,greenY:U,blueX:V,blueY:$,whiteX:Y,whiteY:q}}function wt(f,x){const S=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],M=Fe(f,x);return S[M]}function Gt(f,x){const S=Ne(f,x),M=Ne(f,x),O=Ne(f,x),U=Ne(f,x);return{xMin:S,yMin:M,xMax:O,yMax:U}}function lt(f,x){const S=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],M=Fe(f,x);return S[M]}function Wt(f,x){const S=["ENVMAP_LATLONG","ENVMAP_CUBE"],M=Fe(f,x);return S[M]}function xn(f,x){const S=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],M=["ROUND_DOWN","ROUND_UP"],O=ve(f,x),U=ve(f,x),V=Fe(f,x);return{xSize:O,ySize:U,levelMode:S[V&15],roundingMode:M[V>>4]}}function gr(f,x){const S=B(f,x),M=B(f,x);return[S,M]}function _r(f,x){const S=B(f,x),M=B(f,x),O=B(f,x);return[S,M,O]}function Vn(f,x,S,M,O){if(M==="string"||M==="stringvector"||M==="iccProfile")return ge(x,S,O);if(M==="chlist")return be(f,x,S,O);if(M==="chromaticities")return rt(f,S);if(M==="compression")return wt(f,S);if(M==="box2i")return Gt(f,S);if(M==="envmap")return Wt(f,S);if(M==="tiledesc")return xn(f,S);if(M==="lineOrder")return lt(f,S);if(M==="float")return B(f,S);if(M==="v2f")return gr(f,S);if(M==="v3f")return _r(f,S);if(M==="int")return Ne(f,S);if(M==="rational")return Re(f,S);if(M==="timecode")return He(f,S);if(M==="preview")return S.value+=O,"skipped";S.value+=O}function Fs(f,x){const S=Math.log2(f);return x=="ROUND_DOWN"?Math.floor(S):Math.ceil(S)}function xr(f,x,S){let M=0;switch(f.levelMode){case"ONE_LEVEL":M=1;break;case"MIPMAP_LEVELS":M=Fs(Math.max(x,S),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return M}function Bs(f,x,S,M){const O=new Array(f);for(let U=0;U<f;U++){const V=1<<U;let $=x/V|0;M=="ROUND_UP"&&$*V<x&&($+=1);const Y=Math.max($,1);O[U]=(Y+S-1)/S|0}return O}function ji(){const f=this,x=f.offset,S={value:0};for(let M=0;M<f.tileCount;M++){const O=Ne(f.viewer,x),U=Ne(f.viewer,x);x.value+=8,f.size=ve(f.viewer,x);const V=O*f.blockWidth,$=U*f.blockHeight;f.columns=V+f.blockWidth>f.width?f.width-V:f.blockWidth,f.lines=$+f.blockHeight>f.height?f.height-$:f.blockHeight;const Y=f.columns*f.totalBytes,W=f.size<f.lines*Y?f.uncompress(f):se(f);x.value+=f.size;for(let ce=0;ce<f.lines;ce++){const pe=ce*f.columns*f.totalBytes;for(let me=0;me<f.inputChannels.length;me++){const Ce=Gn.channels[me].name,ue=f.channelByteOffsets[Ce]*f.columns,te=f.decodeChannels[Ce];if(te===void 0)continue;S.value=pe+ue;const Pe=(f.height-(1+$+ce))*f.outLineWidth;for(let Le=0;Le<f.columns;Le++){const ot=Pe+(Le+V)*f.outputChannels+te;f.byteArray[ot]=f.getter(W,S)}}}}}function vr(){const f=this,x=f.offset,S={value:0};for(let M=0;M<f.height/f.blockHeight;M++){const O=Ne(f.viewer,x)-Gn.dataWindow.yMin;f.size=ve(f.viewer,x),f.lines=O+f.blockHeight>f.height?f.height-O:f.blockHeight;const U=f.columns*f.totalBytes,$=f.size<f.lines*U?f.uncompress(f):se(f);x.value+=f.size;for(let Y=0;Y<f.blockHeight;Y++){const q=M*f.blockHeight,W=Y+f.scanOrder(q);if(W>=f.height)continue;const ce=Y*U,pe=(f.height-1-W)*f.outLineWidth;for(let me=0;me<f.inputChannels.length;me++){const Ce=Gn.channels[me].name,ue=f.channelByteOffsets[Ce]*f.columns,te=f.decodeChannels[Ce];if(te!==void 0){S.value=ce+ue;for(let Pe=0;Pe<f.columns;Pe++){const Le=pe+Pe*f.outputChannels+te;f.byteArray[Le]=f.getter($,S)}}}}}}function Yi(f,x,S){const M={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");M.version=f.getUint8(4);const O=f.getUint8(5);M.spec={singleTile:!!(O&2),longName:!!(O&4),deepFormat:!!(O&8),multiPart:!!(O&16)},S.value=8;let U=!0;for(;U;){const V=tt(x,S);if(V==0)U=!1;else{const $=tt(x,S),Y=ve(f,S),q=Vn(f,x,S,$,Y);q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${$}'.`):M[V]=q}}if(O&-7)throw console.error("THREE.EXRHeader:",M),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return M}function Sr(f,x,S,M,O){const U={size:0,viewer:x,array:S,offset:M,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Nt};switch(f.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=se;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=de;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=ie;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=ie;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=De;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=ye;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=we;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=we;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const V={};for(const W of f.channels)switch(W.name){case"Y":case"R":case"G":case"B":case"A":V[W.name]=!0,U.type=W.pixelType}let $=!1;if(V.R&&V.G&&V.B)$=!V.A,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3};else if(V.Y)U.outputChannels=1,U.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(U.type==1)switch(O){case tn:U.getter=Me;break;case ni:U.getter=oe;break}else if(U.type==2)switch(O){case tn:U.getter=B;break;case ni:U.getter=Te}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+f.compression+".");U.columns=U.width;const Y=U.width*U.height*U.outputChannels;switch(O){case tn:U.byteArray=new Float32Array(Y),$&&U.byteArray.fill(1,0,Y);break;case ni:U.byteArray=new Uint16Array(Y),$&&U.byteArray.fill(15360,0,Y);break;default:console.error("THREE.EXRLoader: unsupported type: ",O);break}let q=0;for(const W of f.channels)U.decodeChannels[W.name]!==void 0&&(U.channelByteOffsets[W.name]=q),q+=W.pixelType*2;if(U.totalBytes=q,U.outLineWidth=U.width*U.outputChannels,f.lineOrder==="INCREASING_Y"?U.scanOrder=W=>W:U.scanOrder=W=>U.height-1-W,U.outputChannels==4?(U.format=cn,U.colorSpace=Nt):(U.format=Eo,U.colorSpace=Jn),f.spec.singleTile){U.blockHeight=f.tiles.ySize,U.blockWidth=f.tiles.xSize;const W=xr(f.tiles,U.width,U.height),ce=Bs(W,U.width,f.tiles.xSize,f.tiles.roundingMode),pe=Bs(W,U.height,f.tiles.ySize,f.tiles.roundingMode);U.tileCount=ce[0]*pe[0];for(let me=0;me<W;me++)for(let Ce=0;Ce<pe[me];Ce++)for(let ue=0;ue<ce[me];ue++)qe(x,M);U.decode=ji.bind(U)}else{U.blockWidth=U.width;const W=Math.ceil(U.height/U.blockHeight);for(let ce=0;ce<W;ce++)qe(x,M);U.decode=vr.bind(U)}return U}const ks={value:0},yr=new DataView(e),Io=new Uint8Array(e),Gn=Yi(yr,e,ks),A=Sr(Gn,yr,Io,ks,this.type);return A.decode(),{header:Gn,width:A.width,height:A.height,data:A.byteArray,format:A.format,colorSpace:A.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=kt,o.magFilter=kt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}}class Dx extends Xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Jx(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=er.extractUrlBase(e);o=er.resolveURL(h,this.path)}else o=er.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){s?s(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Uc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Su){try{o[st.KHR_BINARY_GLTF]=new Qx(e)}catch(d){s&&s(d);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new dv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],p=r.extensionsRequired||[];switch(d){case st.KHR_MATERIALS_UNLIT:o[d]=new Ox;break;case st.KHR_DRACO_MESH_COMPRESSION:o[d]=new ev(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[d]=new tv;break;case st.KHR_MESH_QUANTIZATION:o[d]=new nv;break;default:p.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Nx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ux{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new R0(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Co(u),h.distance=d;break;case"spot":h=new A0(u),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,$n(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ox{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}}class Fx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Bx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}}class kx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class zx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Hx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Vx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Gx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Xx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}}class jx{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Yx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class qx{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Kx{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zx{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $x{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,h=s.byteLength||0,u=s.count,d=s.byteStride,p=new Uint8Array(a,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,p,s.mode,s.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(_),u,d,p,s.mode,s.filter),_})})}else return null}}class Jx{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const h of s.primitives)if(h.mode!==un.TRIANGLES&&h.mode!==un.TRIANGLE_STRIP&&h.mode!==un.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const u=h.pop(),d=u.isGroup?u.children:[u],p=h[0].count,_=[];for(const v of d){const E=new je,g=new L,m=new sn,R=new L(1,1,1),b=new h0(v.geometry,v.material,p);for(let C=0;C<p;C++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,C),l.SCALE&&R.fromBufferAttribute(l.SCALE,C),b.setMatrixAt(C,E.compose(g,m,R));for(const C in l)if(C==="_COLOR_0"){const z=l[C];b.instanceColor=new hc(z.array,z.itemSize,z.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&v.geometry.setAttribute(C,l[C]);dt.prototype.copy.call(b,v),this.parser.assignFinalMaterial(b),_.push(b)}return u.isGroup?(u.clear(),u.add(..._),u):_[0]}))}}const Su="glTF",Ks=12,vh={JSON:1313821514,BIN:5130562};class Qx{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Su)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ks,r=new DataView(e,Ks);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===vh.JSON){const h=new Uint8Array(e,Ks+o,a);this.content=n.decode(h)}else if(l===vh.BIN){const h=Ks+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ev{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},h={};for(const u in o){const d=pc[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=pc[u]||u.toLowerCase();if(o[u]!==void 0){const p=n.accessors[e.attributes[u]],_=gs[p.componentType];h[d]=_.name,l[d]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,p){s.decodeDracoFile(u,function(_){for(const v in _.attributes){const E=_.attributes[v],g=l[v];g!==void 0&&(E.normalized=g)}d(_)},a,h,Nt,p)})})}}class tv{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nv{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class yu extends dr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=s-t,d=(n-t)/u,p=d*d,_=p*d,v=e*h,E=v-h,g=-2*_+3*p,m=_-p,R=1-g,b=m-p+d;for(let C=0;C!==a;C++){const z=o[E+C+a],N=o[E+C+l]*u,I=o[v+C+a],H=o[v+C]*u;r[C]=R*z+b*N+g*I+m*H}return r}}const iv=new sn;class sv extends yu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return iv.fromArray(r).normalize().toArray(r),r}}const un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sh={9728:$t,9729:kt,9984:Rh,9985:so,9986:Zs,9987:Nn},yh={33071:Dn,33648:po,10497:Ss},ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rv={CUBICSPLINE:void 0,LINEAR:or,STEP:rr},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ov(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $n(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function av(i,e,t){let n=!1,s=!1,r=!1;for(let h=0,u=e.length;h<u;h++){const d=e[h];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let h=0,u=e.length;h<u;h++){const d=e[h];if(n){const p=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(p)}if(s){const p=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(p)}if(r){const p=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(p)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],d=h[1],p=h[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=p),i.morphTargetsRelative=!0,i})}function cv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lv(i){let e;const t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ma(t.attributes):e=i.indices+":"+Ma(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ma(i.targets[n]);return e}function Ma(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function mc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const uv=new je;class dv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new lu(this.options.manager):this.textureLoader=new P0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ni(r,a,s),$n(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[h,u]of o.children.entries())r(u,a.children[h])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(er.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ya[s.type],a=gs[s.componentType],l=s.normalized===!0,h=new a(s.count*o);return Promise.resolve(new At(h,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ya[s.type],h=gs[s.componentType],u=h.BYTES_PER_ELEMENT,d=u*l,p=s.byteOffset||0,_=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let E,g;if(_&&_!==d){const m=Math.floor(p/_),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(R);b||(E=new h(a,m*_,s.count*_/u),b=new r0(E,_/u),t.cache.add(R,b)),g=new Cc(b,l,p%_/u,v)}else a===null?E=new h(s.count*l):E=new h(a,p,s.count*l),g=new At(E,l,v);if(s.sparse!==void 0){const m=ya.SCALAR,R=gs[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,z=new R(o[1],b,s.sparse.count*m),N=new h(o[2],C,s.sparse.count*l);a!==null&&(g=new At(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,H=z.length;I<H;I++){const ne=z[I];if(g.setX(ne,N[I*l]),l>=2&&g.setY(ne,N[I*l+1]),l>=3&&g.setZ(ne,N[I*l+2]),l>=4&&g.setW(ne,N[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const p=(r.samplers||{})[o.sampler]||{};return u.magFilter=Sh[p.magFilter]||kt,u.minFilter=Sh[p.minFilter]||Nn,u.wrapS=yh[p.wrapS]||Ss,u.wrapT=yh[p.wrapT]||Ss,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){h=!0;const p=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(p),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(p,_){let v=p;t.isImageBitmapLoader===!0&&(v=function(E){const g=new zt(E);g.needsUpdate=!0,p(g)}),t.load(er.resolveURL(d,r.path),v,void 0,_)})}).then(function(d){return h===!0&&a.revokeObjectURL(l),$n(d,o),d.userData.mimeType=o.mimeType||hv(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ic,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ln,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return si}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},h=[];if(l[st.KHR_MATERIALS_UNLIT]){const d=s[st.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),h.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const p=d.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],Nt),a.opacity=p[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",d.baseColorTexture,bt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);const u=r.alphaMode||Ea.OPAQUE;if(u===Ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ea.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(h.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Cn&&(h.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const d=r.emissiveFactor;a.emissive=new Oe().setRGB(d[0],d[1],d[2],Nt)}return r.emissiveTexture!==void 0&&o!==Cn&&h.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(h).then(function(){const d=new o(a);return r.name&&(d.name=r.name),$n(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ni(s,d,r),d})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Eh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const h=e[a],u=lv(h),d=s[u];if(d)o.push(d.promise);else{let p;h.extensions&&h.extensions[st.KHR_DRACO_MESH_COMPRESSION]?p=r(h):p=Eh(new yt,h,t),s[u]={primitive:h,promise:p},o.push(p)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,h=o.length;l<h;l++){const u=o[l].material===void 0?ov(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let _=0,v=u.length;_<v;_++){const E=u[_],g=o[_];let m;const R=h[_];if(g.mode===un.TRIANGLES||g.mode===un.TRIANGLE_STRIP||g.mode===un.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new a0(E,R):new vt(E,R),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===un.TRIANGLE_STRIP?m.geometry=xh(m.geometry,kh):g.mode===un.TRIANGLE_FAN&&(m.geometry=xh(m.geometry,ac));else if(g.mode===un.LINES)m=new u0(E,R);else if(g.mode===un.LINE_STRIP)m=new pn(E,R);else if(g.mode===un.LINE_LOOP)m=new Lc(E,R);else if(g.mode===un.POINTS)m=new ru(E,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&cv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),$n(m,r),g.extensions&&Ni(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let _=0,v=d.length;_<v;_++)t.associations.set(d[_],{meshes:e,primitives:_});if(d.length===1)return r.extensions&&Ni(s,d[0],r),d[0];const p=new ki;r.extensions&&Ni(s,p,r),t.associations.set(p,{meshes:e});for(let _=0,v=d.length;_<v;_++)p.add(d[_]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Xe.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ac(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let h=0,u=o.length;h<u;h++){const d=o[h];if(d){a.push(d);const p=new je;r!==null&&p.fromArray(r.array,h*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Pc(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],h=[],u=[];for(let d=0,p=s.channels.length;d<p;d++){const _=s.channels[d],v=s.samplers[_.sampler],E=_.target,g=E.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,R=s.parameters!==void 0?s.parameters[v.output]:v.output;E.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",R)),h.push(v),u.push(E))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(d){const p=d[0],_=d[1],v=d[2],E=d[3],g=d[4],m=[];for(let R=0,b=p.length;R<b;R++){const C=p[R],z=_[R],N=v[R],I=E[R],H=g[R];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const ne=n._createAnimationTracks(C,z,N,I,H);if(ne)for(let y=0;y<ne.length;y++)m.push(ne[y])}return new x0(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,h=s.weights.length;l<h;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let h=0,u=a.length;h<u;h++)o.push(n.getDependency("node",a[h]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(h){const u=h[0],d=h[1],p=h[2];p!==null&&u.traverse(function(_){_.isSkinnedMesh&&_.bind(p,uv)});for(let _=0,v=d.length;_<v;_++)u.add(d[_]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(h){return s._getNodeRef(s.cameraCache,r.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let u;if(r.isBone===!0?u=new su:h.length>1?u=new ki:h.length===1?u=h[0]:u=new dt,u!==h[0])for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(r.name&&(u.userData.name=r.name,u.name=o),$n(u,r),r.extensions&&Ni(n,u,r),r.matrix!==void 0){const d=new je;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ki;n.name&&(r.name=s.createUniqueName(n.name)),$n(r,n),n.extensions&&Ni(t,r,n);const o=n.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const h=u=>{const d=new Map;for(const[p,_]of s.associations)(p instanceof Un||p instanceof zt)&&d.set(p,_);return u.traverse(p=>{const _=s.associations.get(p);_!=null&&d.set(p,_)}),d};return s.associations=h(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Si[r.path]===Si.weights?e.traverse(function(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}):l.push(a);let h;switch(Si[r.path]){case Si.weights:h=bs;break;case Si.rotation:h=As;break;case Si.position:case Si.scale:h=ws;break;default:switch(n.itemSize){case 1:h=bs;break;case 2:case 3:default:h=ws;break}break}const u=s.interpolation!==void 0?rv[s.interpolation]:or,d=this._getArrayFromAccessor(n);for(let p=0,_=l.length;p<_;p++){const v=new h(l[p]+"."+Si[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof As?sv:yu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fv(i,e,t){const n=e.attributes,s=new li;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(h[0],h[1],h[2])),a.normalized){const u=mc(gs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let h=0,u=r.length;h<u;h++){const d=r[h];if(d.POSITION!==void 0){const p=t.json.accessors[d.POSITION],_=p.min,v=p.max;if(_!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(v[2]))),p.normalized){const E=mc(gs[p.componentType]);l.multiplyScalar(E)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Eh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=pc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),$n(i,e),fv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?av(i,e.targets,t):i})}const Ie=new s0,$e=new Zt(STANDARD_FOV,window.innerWidth/window.innerHeight,1e-6,1e3),Us=new i0({antialias:!0}),pr=new cu,wn=new lu(pr),pv=new Ix(pr),Eu=new Dx(pr);Us.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Us.domElement);const cr=new Co(16777215,3,1e3);cr.position.set(0,0,0);cr.decay=0;const Mh=new hu(4210752,.7),Th=new hu(16777215,2.5),Ht=new V0($e,Us.domElement);Ht.enableDamping=!0;Ht.dampingFactor=.1;Ht.screenSpacePanning=!0;Ht.enableZoom=!1;Ht.rotateSpeed=.7;const Rn=new nx($e,Us.domElement);Rn.noRotate=!0;Rn.noPan=!0;Rn.noZoom=!1;Rn.zoomSpeed=1;Rn.dynamicDampingFactor=.15;function zi(i,e=!0){e?$e.fov=Xe.lerp($e.fov,i,.1):$e.fov=i,$e.updateProjectionMatrix()}function mv(){const i=new yt,e=1e4,t=new Float32Array(e*3),n=new Float32Array(e*3),s=[new Oe().setHex(Zr("#ffffff")),new Oe().setHex(Zr("#f3a4a4")),new Oe().setHex(Zr("#cbb9ea")),new Oe().setHex(Zr("#f6c68e"))];for(let o=0;o<e;o++){let a,l,h;do a=(Math.random()-.5)*4e3,l=(Math.random()-.5)*4e3,h=(Math.random()-.5)*4e3;while(Math.abs(a)<500&&Math.abs(l)<200&&Math.abs(h)<500);t[o*3]=a,t[o*3+1]=l,t[o*3+2]=h;const u=s[Math.floor(Math.random()*s.length)];n[o*3]=u.r,n[o*3+1]=u.g,n[o*3+2]=u.b}i.setAttribute("position",new At(t,3)),i.setAttribute("color",new At(n,3));const r=new Ic({size:.5,sizeAttenuation:!0,vertexColors:!0});return new ru(i,r)}function Mu(i,e,t){const n=new Dc(i,t),s=3;return n.setAttribute("position",new At(n.attributes.position.array.slice(s,n.attributes.position.array.length-s),s)),n.index=null,new Lc(n,new ln({color:e}))}function gv(i,e){const t=new Float32Array(i.length*3);for(let n=0;n<i.length;n++)t[n*3]=i[n].x,t[n*3+1]=i[n].y,t[n*3+2]=i[n].z;e.setAttribute("position",new At(t,3))}function ht(i){const e=document.getElementById("action-label-container"),t=document.getElementById("action-label");t.textContent=i,e.style.display="",window.setTimeout(function(){e.classList.remove("center-label-show"),e.style.display="none"},800)}function mn(){const i=document.getElementById("label-container"),e=document.getElementById("target-label"),t=document.getElementById("distance-label"),n=document.getElementById("speed-label"),s=document.getElementById("weight-label");if(!SHOW_LABEL||!targetPlanet&&!spacecraftSelected)i.style.display="none";else{if(targetPlanet&&(e.textContent=targetPlanet.name),targetPlanet&&!spacecraftSelected){e.style.color="",i.style.color=fa(targetPlanet.colorHex),targetPlanet.isSun?t.textContent="":t.textContent=pa(targetPlanet.distanceToSun,distanceUnit,AU,LM);const r=Math.sqrt(targetPlanet.xVel**2+targetPlanet.yVel**2+targetPlanet.zVel**2);n.textContent=r.toPrecision(4)+" km/s",s.textContent=targetPlanet.mass.toPrecision(4)+" kg"}else if(spacecraftSelected){targetPlanet?(e.style.color=fa(targetPlanet.colorHex),t.textContent=pa(spacecraft.distanceToTarget,distanceUnit,AU,LM),spacecraftMatchVelocity?i.style.color=fa(targetPlanet.colorHex):i.style.color="#ffffff"):(i.style.color="#ffffff",e.textContent="",t.textContent=pa(spacecraft.distanceToSun,distanceUnit,AU,LM),s.textContent="");const r=Math.sqrt(spacecraft.xVel**2+spacecraft.yVel**2+spacecraft.zVel**2),o=r/c,a=o>=.001?" | "+o.toPrecision(2)+"c":"";let l=r.toPrecision(4)+" km/s"+a;spacecraftMatchVelocity&&(l="[ "+l+" ]"),n.textContent=l}i.style.display=""}}function Tu(){REALISTIC_LIGHTING?(Ie.add(cr),Ie.add(Mh),Ie.remove(Th)):(Ie.remove(cr),Ie.remove(Mh),Ie.add(Th))}function _v(i){backgroundGrid?(document.getElementById("loading-screen").style.display="",wn.load(backgroundGrid,e=>{e.mapping=ir,e.colorSpace=bt,i.material.map=e,Ie.add(i)})):Ie.remove(i)}function Cs(i){targetPlanet=i,targetPlanet!==null?(document.getElementById("target-planet-label").textContent=targetPlanet.name+": ",document.getElementById("target-planet-settings").classList.remove("hidden"),targetPlanet.isSun?document.getElementById("PLANET_TRANSFORM_ITEM").classList.add("disabled"):document.getElementById("PLANET_TRANSFORM_ITEM").classList.remove("disabled")):document.getElementById("target-planet-settings").classList.add("hidden")}function Ro(i,e){i!==spacecraftSelected&&Vc(e,i,null),spacecraftSelected=i,spacecraftSelected?(spacecraftMatchVelocity=!1,document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent="Leave spacecraft",document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.add("disabled"),document.getElementById("SPACECRAFT_MATCH_VELOCITY_CB").checked=!1,document.getElementById("spacecraft-settings").classList.remove("hidden"),zi(SPACECRAFT_FOV)):(document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent="Enter spacecraft",document.getElementById("spacecraft-settings").classList.add("hidden"),zi(STANDARD_FOV,!1))}function Vc(i,e,t=null){const n=document.getElementById("TARGET_SELECT");let s=0;t&&(s=targets.indexOf(t)),targets.length=0,targets.push(e?"Free flight":"None");for(const r of i)targets.push(r.name);e||targets.push("JWST"),n.innerHTML="",targets.forEach((r,o)=>{const a=document.createElement("option");a.value=o.toString(),a.selected=o===s,a.textContent=r,n.appendChild(a)})}function Kt(i){xv(),isCameraLocked=i,document.getElementById("CAMERA_LOCK_CB").checked=isCameraLocked,targetPlanet&&!PAUSED||jwstSelected&&!PAUSED||spacecraftSelected?document.getElementById("CAMERA_LOCK").classList.remove("disabled"):document.getElementById("CAMERA_LOCK").classList.add("disabled")}function xv(){Ht._sphericalDelta.set(0,0,0),Ht._panOffset.set(0,0,0),Rn._lastAngle=0,Rn._eye.set(0,0,0),Rn._zoomStart.set(1,1),Rn._zoomEnd.set(1,1)}function ei(i){isCameraSunLocked=i,document.getElementById("CAMERA_SUN_LOCK_CB").checked=isCameraSunLocked,(targetPlanet&&targetPlanet.name!=="Sun"||jwstSelected)&&!spacecraftSelected?document.getElementById("CAMERA_SUN_LOCK").classList.remove("disabled"):document.getElementById("CAMERA_SUN_LOCK").classList.add("disabled")}function bu(i){const e=backgroundTextures[i];if(!e)starBackground===null&&(starBackground=mv()),Ie.background=null,Ie.add(starBackground);else{Ie.remove(starBackground);const t=e;t&&(document.getElementById("loading-screen").style.display="",pv.load(t,n=>{n.mapping=ir,Ie.background=n}))}Os("BACKGROUND_SELECT",i)}function vv(){let i=PLANET_SCALE/DISTANCE_SCALE;i>1&&(i=Math.round(i/2)*2),document.getElementById("planet-scale").value=i,document.getElementById("planet-scale-display").textContent=i.toString()}function Os(i,e){const t=document.getElementById(i);t.value=e}function Rs(i){transitionAnimationActive=i,document.activeElement.blur(),cameraSunLockChanged=!1,transitionAnimationActive?document.getElementById("menu-content").classList.add("disabled"):document.getElementById("menu-content").classList.remove("disabled")}function lr(i){return i.isSun?new L((0-i.sphere.position.x)/i.sphere.position.x*(i.radius*1.8),i.radius,(0-i.sphere.position.z)/i.sphere.position.z*(i.radius*1.8)):new L((0-i.sphere.position.x)/i.sphere.position.x*(i.radius*4),i.radius,(0-i.sphere.position.z)/i.sphere.position.z*(i.radius*4))}class Sv extends Fn{constructor(e={}){super(),this.vertexShader=`
      varying vec3 vPosition;
      varying vec3 vNormal;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
        vPosition = modelPosition.xyz;
        vNormal = modelNormal.xyz;

      }
    `,this.fragmentShader=`
      uniform vec3 glowColor;
      uniform float falloffAmount;
      uniform float glowSharpness;
      uniform float glowInternalRadius;
      uniform float opacity;

      varying vec3 vPosition;
      varying vec3 vNormal;

      void main()
      {
        // Normal
        vec3 normal = normalize(vNormal);
        if(!gl_FrontFacing)
            normal *= - 1.0;
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = dot(viewDirection, normal);
        fresnel = pow(fresnel, glowInternalRadius + 0.1);
        float falloff = smoothstep(0., falloffAmount, fresnel);
        float fakeGlow = fresnel;
        fakeGlow += fresnel * glowSharpness;
        fakeGlow *= falloff;
        gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., opacity));

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      } 
      `,this.uniforms={opacity:new Bi(e.opacity!==void 0?e.opacity:1),glowInternalRadius:new Bi(e.glowInternalRadius!==void 0?e.glowInternalRadius:6),glowSharpness:new Bi(e.glowSharpness!==void 0?e.glowSharpness:.5),falloff:new Bi(e.falloff!==void 0?e.falloff:.1),glowColor:new Bi(e.glowColor!==void 0?new Oe(e.glowColor):new Oe("#00d5ff"))},this.setValues(e),this.depthTest=e.depthTest!==void 0?e.depthTest:!1,this.blending=e.blendMode!==void 0?e.blendMode:fo,this.transparent=!1,this.side=e.side!==void 0?e.side:dn}}class yv{constructor(e,t,n,s,r,o,a,l){this.xVel=0,this.yVel=0,this.zVel=0,this.mass=e,this.angularVelocity=r,this.acceleration=o,this.obj=null,this.orbits=[],this.bolts=[],this.scale=a,this.distanceTosun=0,this.distanceToTarget=0,this.tiltAngle=l,this.container=new dt,this.container.scale.set(a,a,a),this.container.position.set(t,n,s),this.flameMaterial=new Fn({uniforms:{time:{value:0},scale:{value:a},originalScale:{value:.001},color1:{value:new Oe(12494)},color2:{value:new Oe(43214)}},vertexShader:`
    varying vec3 vPosition;
    void main() {
        vPosition = position; // Pass position to fragment shader
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,fragmentShader:`
    uniform float time;
    uniform float scale; // Current scale
    uniform float originalScale; // Reference scale (0.001)
    uniform vec3 color1; // Base color
    uniform vec3 color2; // Tip color
    varying vec3 vPosition;

    // 2D noise function
    float noise(vec2 uv) {
        return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
        // Compute the normalized position based on the scale ratio
        float scaleRatio = scale / originalScale;
        float normalizedY = vPosition.y * scaleRatio;

        // Add procedural noise for texture, adjusted for scale ratio
        float flameNoise = noise(vec2(normalizedY * 5.0, time * 0.5)) * 0.5 + 0.5;

        // Blend base color and tip color based on height, adjusted for scale ratio
        float heightFactor = smoothstep(0.0, 1.0, normalizedY + 0.5);
        vec3 flameColor = mix(color1, color2, heightFactor);

        // Combine noise and height factor for final intensity
        float intensity = flameNoise;

        // Normalize intensity for additive blending consistency
        intensity = clamp(intensity, 0.0, 1.0); // Prevent oversaturation

        // Add fading transparency toward the edges
        float alpha = smoothstep(0.0, 1.0, intensity) * 2.8;

        // Output the flame color with transparency
        gl_FragColor = vec4(flameColor * intensity, alpha);
    }
    `,transparent:!0,blending:fo});const h=new Co(16731392,.03,10);h.position.set(0,0,0),h.visible=spacecraftLight;const u=new Nc(500*a,2e3*a,32),d=new vt(u,this.flameMaterial),p=new vt(u,this.flameMaterial),_=new vt(u,this.flameMaterial),v=new vt(u,this.flameMaterial);d.position.set(1.04,-1.2,-2.3),d.scale.set(.001/a,.001/a,7e-4/a),d.rotation.x=Xe.degToRad(-90),p.position.set(-1.04,-1.2,-2.3),p.scale.set(.001/a,.001/a,7e-4/a),p.rotation.x=Xe.degToRad(-90),_.position.set(1.5,-.95,6),_.scale.set(.0011/a,.0044/a,33e-5/a),_.rotation.x=Xe.degToRad(-270),_.rotation.z=Xe.degToRad(-6),v.position.set(-1.5,-.95,6),v.scale.set(.0011/a,.0044/a,33e-5/a),v.rotation.x=Xe.degToRad(-270),v.rotation.z=Xe.degToRad(6);const E=new dt;E.position.set(0,8,-20);const g=new dt;g.position.set(0,3,-10);const m=new dt;m.position.set(0,1,0),Eu.load("/models/spacecraft.glb",y=>{this.obj=y.scene,this.obj.position.set(0,0,0),this.obj.add(h),this.obj.shipLight=h,this.obj.add(d),this.obj.flame1=d,this.obj.add(p),this.obj.flame2=p,this.obj.add(_),this.obj.flame3=_,this.obj.add(v),this.obj.flame4=v,this.obj.flame1.visible=!1,this.obj.flame2.visible=!1,this.obj.flame3.visible=!1,this.obj.flame4.visible=!1,this.obj.add(E),this.obj.cameraHelperFar=E,this.obj.add(g),this.obj.cameraHelperClose=g,this.obj.add(m),this.obj.firstPersonCameraHelper=m,this.container.add(this.obj),Ie.add(this.container)});const R=new ln({color:16515843}),b=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.gVectorLine=new pn(b,R),this.gVectorLine.frustumCulled=!1;const C=new ln({color:1047555}),z=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.yVectorLine=new pn(z,C),this.yVectorLine.frustumCulled=!1;const N=new ln({color:1047555}),I=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.resVectorLine=new pn(I,N),this.resVectorLine.frustumCulled=!1;const H=1e3;this.orbitPositions=new Float32Array(H*3),this.orbitGeometry=new yt,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3));const ne=new ln({color:6423548});this.orbitLine=new pn(this.orbitGeometry,ne),this.currentOrbitPointCount=0,this.orbitLine.frustumCulled=!1,this.orbitLine.renderOrder=-3,this.orbitLine.material.depthTest=!0,this.orbitLine.material.depthWrite=!0,Ie.add(this.orbitLine)}changeMomentum(){const e=this.container.rotation.y,t=this.obj.rotation.x,n=Math.sin(e)*Math.cos(t),s=-Math.sin(t),r=Math.cos(e)*Math.cos(t),o=Math.sin(e+Math.PI/2),a=Math.cos(e+Math.PI/2),l=this.acceleration*.75;let h=1;if(targetPlanet&&!spacecraftMatchVelocity&&!spacecraftGravity){const u=targetPlanet.radius*200/PLANET_SCALE,d=.001,p=this.distanceToTarget;p<u&&(h=Math.max(d,p/u))}forwardPressed&&(this.xVel+=n*this.acceleration*h,ACTIVE_ASCENSION_AXIS&&(this.yVel+=s*this.acceleration*h),this.zVel+=r*this.acceleration*h,this.obj.flame1.visible=!0,this.obj.flame2.visible=!0,zi(Math.min(SPACECRAFT_FOV*1.2,170))),backwardPressed&&(this.xVel-=n*this.acceleration*h,ACTIVE_ASCENSION_AXIS&&(this.yVel-=s*this.acceleration*h),this.zVel-=r*this.acceleration*h,this.obj.flame3.visible=!0,this.obj.flame4.visible=!0,zi(SPACECRAFT_FOV*.85)),portPressed&&(this.xVel+=o*l*h,this.zVel+=a*l*h,this.container.rotation.z=Xe.lerp(this.container.rotation.z,-this.tiltAngle,.08)),starboardPressed&&(this.xVel-=o*l*h,this.zVel-=a*l*h,this.container.rotation.z=Xe.lerp(this.container.rotation.z,this.tiltAngle,.08)),handbrakePressed&&(this.xVel=0,this.yVel=0,this.zVel=0,zi(SPACECRAFT_FOV*.85),mn()),rotatePortPressed&&!targetPlanet&&(this.container.rotation.y+=this.angularVelocity),rotateStarboardPressed&&!targetPlanet&&(this.container.rotation.y-=this.angularVelocity)}rotateSpacecraft(e,t){this.container.rotation.y-=t;const n=new sn,s=new L(1,0,0);n.setFromAxisAngle(s,e),this.obj.quaternion.multiply(n)}updatePosition(e,t){let n=0,s=0,r=0;if(targetPlanet||(spacecraftMatchVelocity=!1),spacecraftMatchVelocity)this.xVel=targetPlanet.xVel,this.yVel=targetPlanet.yVel,this.zVel=targetPlanet.zVel;else if(spacecraftGravity){let o=0,a=0,l=0;for(const h of e){const u=this.attraction(h);o+=u[0].force_x,a+=u[0].force_y,l+=u[0].force_z}n=o/this.mass/1e3*TIME,s=a/this.mass/1e3*TIME,r=l/this.mass/1e3*TIME,this.xVel+=n,this.yVel+=s,this.zVel+=r}this.container.position.x+=this.xVel*DISTANCE_SCALE*TIME,this.container.position.y+=this.yVel*DISTANCE_SCALE*TIME,this.container.position.z+=this.zVel*DISTANCE_SCALE*TIME,spacecraftGravity||(this.distanceToSun=fh(t,this.container.position)/1e3,targetPlanet&&(this.distanceToTarget=fh(targetPlanet.sphere.position,this.container.position)/1e3)),this.updateVectorLines(n,s,r),this.orbits.push(new L(this.container.position.x,this.container.position.y,this.container.position.z)),this.drawOrbits()}attraction(e){const t=(e.sphere.position.x-this.container.position.x)/DISTANCE_SCALE*1e3,n=(e.sphere.position.y-this.container.position.y)/DISTANCE_SCALE*1e3,s=(e.sphere.position.z-this.container.position.z)/DISTANCE_SCALE*1e3,r=Math.sqrt(t**2+n**2+s**2);e.isSun&&(this.distanceToSun=r/1e3),e===targetPlanet&&(this.distanceToTarget=r/1e3);const o=G*this.mass*e.mass/r**2,a=Math.atan2(s,t),l=Math.atan2(n,Math.sqrt(t**2+s**2)),h=Math.cos(l)*Math.cos(a)*o,u=Math.sin(l)*o,d=Math.cos(l)*Math.sin(a)*o;return[{force_x:h,force_y:u,force_z:d}]}updateVectorLines(e,t,n){if(SHOW_VECTORS){if(spacecraftGravity){const r=[new L(this.container.position.x,this.container.position.y,this.container.position.z),new L(this.container.position.x+e,this.container.position.y+t,this.container.position.z+n)];this.gVectorLine.geometry.setFromPoints(r),Ie.add(this.gVectorLine)}else Ie.remove(this.gVectorLine);const s=[new L(this.container.position.x,this.container.position.y,this.container.position.z),new L(this.container.position.x+this.xVel*DISTANCE_SCALE*TIME*10,this.container.position.y+this.yVel*DISTANCE_SCALE*TIME*10,this.container.position.z+this.zVel*DISTANCE_SCALE*TIME*10)];this.resVectorLine.geometry.setFromPoints(s),Ie.add(this.resVectorLine)}else Ie.remove(this.gVectorLine),Ie.remove(this.resVectorLine)}drawOrbits(){if(this.orbits.length<2)return;const e=this.orbits[this.orbits.length-1];this.addOrbitPoint(e)}addOrbitPoint(e){if(this.orbits.push(e),this.currentOrbitPointCount>=this.orbitPositions.length/3){const n=new Float32Array(this.orbitPositions.length*2);n.set(this.orbitPositions),this.orbitPositions=n,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3))}const t=this.currentOrbitPointCount*3;this.orbitPositions[t]=e.x,this.orbitPositions[t+1]=e.y,this.orbitPositions[t+2]=e.z,this.currentOrbitPointCount++,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}toggleOrbitLine(e){e?Ie.add(this.orbitLine):Ie.remove(this.orbitLine)}resetOrbit(){this.currentOrbitPointCount=0,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}shoot(){const e=new Ev(this.scale);this.bolts.push(e)}updateBolts(){for(const e of this.bolts)e.lifetime+=1,e.lifetime<200?(e.boltContainer.position.copy(this.container.position),e.boltContainer.bolt1.position.z+=2,e.boltContainer.bolt2.position.z+=2):(this.bolts.shift(),Ie.remove(e.boltContainer))}}class Ev{constructor(e){this.lifetime=0,this.boltContainer=new dt,this.boltContainerInner=new dt,this.boltContainer.position.copy(spacecraft.container.position),this.boltContainer.rotation.copy(spacecraft.container.rotation),this.boltContainerInner.rotation.copy(spacecraft.obj.rotation),this.boltContainer.scale.set(e,e,e);const t=new Ao(1,1,45,32),n=new Cn({color:3997440});this.bolt1=new vt(t,n),this.bolt2=new vt(t,n),this.bolt1.scale.set(1e-5/e,1e-5/e,1e-5/e),this.bolt2.scale.set(1e-5/e,1e-5/e,1e-5/e),this.bolt1.position.set(4.6,-.5,3.6),this.bolt2.position.set(-4.6,-.5,3.6),this.bolt1.rotation.x=Xe.degToRad(90),this.bolt2.rotation.x=Xe.degToRad(90),this.boltContainerInner.add(this.bolt1),this.boltContainerInner.add(this.bolt2),this.boltContainer.add(this.boltContainerInner),this.boltContainer.bolt1=this.bolt1,this.boltContainer.bolt2=this.bolt2,Ie.add(this.boltContainer)}}class Hn{constructor(e,t,n,s,r,o,a=0,l=0,h=0,u=!1,d=null,p=null){if(this.name=e,this.xVel=0,this.yVel=0,this.zVel=0,this.mass=r,this.radius=t,this.axialTilt=n,this.rotationSpeed=-1*1.57/(s/24),this.distanceToSun=0,this.isSun=u,this.orbits=[],this.colorHex=o,this.lowQMapPath=d,this.highQMapPath=p,this.atmosphere=null,this.glowSphere=null,this.ring=null,this.geometry=new en(t,64,32),this.geometry.rotateY(Xe.degToRad(90)),this.material=new si({color:o,roughness:.8}),d||p){this.material.color=null;const b=wn.load(HIGH_QUALITY_TEXTURES&&p?p:d);if(b.colorSpace=bt,this.material.map=b,u&&(this.material=new Cn({map:b})),this.name==="Earth"){this.material.roughnessMap=wn.load("/planet_textures/2k/Ocean.png"),this.material.metalnessMap=wn.load("/planet_textures/2k/Ocean_og.png"),this.material.roughness=.5,this.material.metalness=.7;const C=wn.load(HIGH_QUALITY_TEXTURES?"/planet_textures/8k/8k_earth_clouds.jpg":"/planet_textures/2k/2k_earth_clouds.jpg");b.colorSpace=bt;let z=new en(this.radius*1.005,64,32),N=new si({alphaMap:C,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.clouds=new vt(z,N),this.clouds.rotation.x=Xe.degToRad(n),this.clouds.position.set(a,l,h),Ie.add(this.clouds);let I=new en(this.radius*1.03,64,64),H=new si({color:new Oe("#003cff"),opacity:.1,transparent:!0,roughness:.7,metalness:.6,visible:!1});this.atmosphere=new vt(I,H),this.atmosphere.position.set(a,l,h),Ie.add(this.atmosphere)}if(this.name==="Venus"){const C=wn.load("/planet_textures/2k/2k_venus_atmosphere.jpg");C.colorSpace=bt;let z=new en(this.radius*1.015,64,64),N=new si({map:C,opacity:.6,transparent:!0,roughness:.7,metalness:.6});this.atmosphere=new vt(z,N),this.atmosphere.rotation.x=Xe.degToRad(n),this.atmosphere.position.set(a,l,h),Ie.add(this.atmosphere)}}if(u){const b=new Sv({falloff:.4,glowColor:new Oe("#ff0000"),glowSharpness:.7});this.glowSphere=new vt(new en(t*2,64,32),b),this.glowSphere.renderOrder=-1,Ie.add(this.glowSphere)}this.sphere=new vt(this.geometry,this.material),this.sphere.rotation.x=Xe.degToRad(n),this.sphere.position.set(a,l,h),this.isSun&&(this.sphere.renderOrder=-2),Ie.add(this.sphere);const _=1e3;this.orbitPositions=new Float32Array(_*3),this.orbitGeometry=new yt,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3));const v=new ln({color:this.colorHex});this.orbitLine=new pn(this.orbitGeometry,v),this.currentOrbitPointCount=0,this.orbitLine.frustumCulled=!1,this.orbitLine.renderOrder=-3,this.orbitLine.material.depthTest=!0,this.orbitLine.material.depthWrite=!1,SHOW_ORBITS&&Ie.add(this.orbitLine);const E=new ln({color:16777215}),g=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.gVectorLine=new pn(g,E),this.gVectorLine.frustumCulled=!1;const m=new ln({color:16777215}),R=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);if(this.vVectorLine=new pn(R,m),this.vVectorLine.frustumCulled=!1,!u){const b=this.radius*2,C=[new L(0,-b,0),new L(0,b,0)],z=new yt().setFromPoints(C),N=new ln({color:65288});this.axisLine=new pn(z,N),this.axisLine.rotation.x=Xe.degToRad(n),this.axisLine.frustumCulled=!1}this.name==="Uranus"&&(this.sphere.rotation.x=Xe.degToRad(0),this.axisLine.rotation.x=Xe.degToRad(0),this.sphere.rotation.z=Xe.degToRad(n),this.axisLine.rotation.z=Xe.degToRad(n))}updatePosition(e,t){let n=0,s=0;for(const a of e){if(a.name===this.name)continue;const l=this.attraction(a);n+=l[0].force_x,s+=l[0].force_z}const r=n/this.mass/1e3*TIME,o=s/this.mass/1e3*TIME;this.xVel+=r,this.zVel+=o,this.sphere.position.x+=this.xVel*DISTANCE_SCALE*TIME,this.sphere.position.z+=this.zVel*DISTANCE_SCALE*TIME,this.updateVectorLines(r,o,t),this.orbits.push(new L(this.sphere.position.x,this.sphere.position.y,this.sphere.position.z)),this.ring&&this.ring.ringObj.position.copy(this.sphere.position),this.glowSphere&&this.glowSphere.position.copy(this.sphere.position),this.clouds&&this.clouds.position.copy(this.sphere.position),this.atmosphere&&this.atmosphere.position.copy(this.sphere.position),this.drawOrbits()}attraction(e){const t=(e.sphere.position.x-this.sphere.position.x)/DISTANCE_SCALE*1e3,n=(e.sphere.position.z-this.sphere.position.z)/DISTANCE_SCALE*1e3,s=Math.sqrt(t**2+n**2);e.isSun&&(this.distanceToSun=s/1e3);const r=G*this.mass*e.mass/s**2,o=Math.atan2(n,t),a=Math.cos(o)*r,l=Math.sin(o)*r;return[{force_x:a,force_z:l}]}drawOrbits(){if(this.orbits.length<2)return;const e=this.orbits[this.orbits.length-1];this.addOrbitPoint(e)}updateVectorLines(e,t,n,s=!1){if(n&&!s){const r=[new L(this.sphere.position.x,0,this.sphere.position.z),new L(this.sphere.position.x+e,0,this.sphere.position.z+t)],o=[new L(this.sphere.position.x,0,this.sphere.position.z),new L(this.sphere.position.x+this.xVel*DISTANCE_SCALE*TIME*10,0,this.sphere.position.z+this.zVel*DISTANCE_SCALE*TIME*10)];this.gVectorLine.geometry.setFromPoints(r),this.vVectorLine.geometry.setFromPoints(o),Ie.add(this.gVectorLine),Ie.add(this.vVectorLine),this.isSun||(Ie.add(this.axisLine),this.axisLine.position.set(this.sphere.position.x,this.sphere.position.y,this.sphere.position.z))}else Ie.remove(this.gVectorLine),Ie.remove(this.vVectorLine),this.isSun||Ie.remove(this.axisLine)}addOrbitPoint(e){if(this.orbits.push(e),this.currentOrbitPointCount>=this.orbitPositions.length/3){const n=new Float32Array(this.orbitPositions.length*2);n.set(this.orbitPositions),this.orbitPositions=n,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3))}const t=this.currentOrbitPointCount*3;this.orbitPositions[t]=e.x,this.orbitPositions[t+1]=e.y,this.orbitPositions[t+2]=e.z,this.currentOrbitPointCount++,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}resetOrbit(){this.currentOrbitPointCount=0,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}changeSpeed(e){ht(e<1?"Decrease planetary speed":"Increase planetary speed"),this.xVel*=e,this.yVel*=e,this.zVel*=e,mn()}changeMass(e){ht(e===2?"Double planetary mass":e===.5?"Halve planetary mass":"Change planetary mass"),this.mass*=e,mn()}}class Po{constructor(e,t,n,s,r,o=null,a=null){this.parentPlanet=e,this.lowQMapPath=o,this.highQMapPath=a,this.innerRadiusFactor=t,this.outerRadiusFactor=n;const l=this.parentPlanet.radius*this.innerRadiusFactor,h=this.parentPlanet.radius*this.outerRadiusFactor,u=new du(l,h,96,96);let d=null;this.lowQMapPath&&(d=wn.load(this.lowQMapPath),d.colorSpace=bt,d.anisotropy=32);const p=new si({color:s,emissive:s,emissiveIntensity:.5,side:dn,transparent:!0,opacity:r,roughness:.5,metalness:.1,map:d,alphaTest:.3,depthTest:!0,depthWrite:!1});d&&(p.color=null),this.ringObj=new vt(u,p),this.ringObj.rotation.x=Xe.degToRad(this.parentPlanet.axialTilt+90),this.ringObj.position.set(this.parentPlanet.sphere.position.x,this.parentPlanet.sphere.position.y,this.parentPlanet.sphere.position.z),this.parentPlanet.name==="Uranus"&&(this.ringObj.rotation.x=Xe.degToRad(90),this.ringObj.rotation.y=Xe.degToRad(this.parentPlanet.axialTilt)),Ie.add(this.ringObj),this.parentPlanet.ring=this}}class Au{constructor(e,t,n){this.rotateWithEarth=n,this.orbitTrailGeometry=new yt,this.maxPoints=e,this.positions=new Float32Array(this.maxPoints*3),this.orbitTrailGeometry.setAttribute("position",new At(this.positions,3)),this.orbitTrailMaterial=new ln({color:t}),this.orbitTrailObj=new pn(this.orbitTrailGeometry,this.orbitTrailMaterial),this.orbitTrailObj.frustumCulled=!1,this.numPoints=0}reset(){this.positions.fill(0),this.numPoints=0,this.orbitTrailGeometry.attributes.position.needsUpdate=!0}updateOrbitTrail(e,t){if(SHOW_ORBITS)Ie.add(this.orbitTrailObj);else{Ie.remove(this.orbitTrailObj),this.reset();return}const n=new L;e.getWorldPosition(n);const s=new L;if(s.subVectors(n,t.position),this.numPoints===this.maxPoints){for(let o=0;o<(this.maxPoints-1)*3;o++)this.positions[o]=this.positions[o+3];this.numPoints--}const r=this.numPoints*3;if(this.positions[r]=s.x,this.positions[r+1]=s.y,this.positions[r+2]=s.z,this.numPoints=Math.min(this.numPoints+1,this.maxPoints),this.rotateWithEarth){const o=new je().makeRotationY(-t.rotation.y),a=new L(this.positions[r],this.positions[r+1],this.positions[r+2]);a.applyMatrix4(o),this.positions[r]=a.x,this.positions[r+1]=a.y,this.positions[r+2]=a.z}this.orbitTrailGeometry.setDrawRange(0,this.numPoints),this.orbitTrailGeometry.attributes.position.needsUpdate=!0,this.orbitTrailObj.position.copy(t.position)}}function Mv({jwstCameraOffset:i,planets:e,discardedPlanets:t,sun:n,earth:s,moon:r,moonOrbitTrail:o,ISS:a,issOrbitTrail:l,jwst:h,jwstPlane:u,constellationSphere:d,connectionOutline:p,moveToPlanet:_,moveToSpacecraft:v,moveToDefault:E,moveToJWST:g,updateEarthSystemVisibility:m,updateEarthSystemScaling:R,setCameraOffset:b,setJwstCameraOffset:C}){window.addEventListener("mousedown",D=>{!spacecraftSelected||D.target.nodeName!=="CANVAS"||(isMouseDown=!0,document.querySelector("canvas").style.cursor="none",lastMousePosition.x=D.clientX,lastMousePosition.y=D.clientY)}),window.addEventListener("mousemove",D=>{if(!spacecraftSelected||!isMouseDown||PAUSED)return;let he=D.clientX-lastMousePosition.x,Ee=D.clientY-lastMousePosition.y;he=100*he/window.innerWidth,Ee=100*Ee/window.innerHeight,(spacecraft.obj.rotation.x>=Xe.degToRad(90)||spacecraft.obj.rotation.x<=Xe.degToRad(-90))&&(he*=-1),spacecraft.rotateSpacecraft(Ee*spacecraft.angularVelocity,he*spacecraft.angularVelocity),lastMousePosition.x=D.clientX,lastMousePosition.y=D.clientY}),window.addEventListener("mouseup",()=>{document.querySelector("canvas").style.cursor="",spacecraftSelected&&(isMouseDown=!1)}),document.addEventListener("keyup",D=>{spacecraftSelected&&(D.key.toLowerCase()==="w"&&(forwardPressed=!1),D.key.toLowerCase()==="a"&&(portPressed=!1),D.key.toLowerCase()==="s"&&(backwardPressed=!1),D.key.toLowerCase()==="d"&&(starboardPressed=!1),D.key==="ArrowLeft"&&(rotatePortPressed=!1),D.key==="ArrowRight"&&(rotateStarboardPressed=!1),D.key==="Shift"&&(handbrakePressed=!1))}),window.addEventListener("keydown",D=>{if(document.activeElement.blur(),!transitionAnimationActive){if(D.code==="Space"&&(D.preventDefault(),z(!PAUSED)),spacecraftSelected){if(D.key.toLowerCase()==="w"&&(forwardPressed=!0),D.key.toLowerCase()==="a"&&(portPressed=!0),D.key.toLowerCase()==="s"&&(backwardPressed=!0),D.key.toLowerCase()==="d"&&(starboardPressed=!0),D.key==="ArrowLeft"&&(rotatePortPressed=!0),D.key==="ArrowRight"&&(rotateStarboardPressed=!0),D.key==="Shift"&&(handbrakePressed=!0),D.key.toLowerCase()==="b"&&ae(!spacecraftFirstPerson),D.key.toLowerCase()==="h"&&xe(!spacecraftLight),D.key.toLowerCase()==="ü"){Q(!ACTIVE_ASCENSION_AXIS);return}if(D.key.toLowerCase()==="g"){J(!spacecraftGravity),_e(!1),ht(spacecraftGravity?"Enable orbital mechanics":"Disable orbital mechanics");return}if(targetPlanet&&D.key.toLowerCase()==="r"){_e(!spacecraftMatchVelocity),J(!1),ht(spacecraftMatchVelocity?"Enable match velocity":"Disable match velocity");return}D.key==="Control"&&spacecraft.shoot()}if(D.key.toLowerCase()==="l"){w(!REALISTIC_LIGHTING);return}if(D.key.toLowerCase()==="k"){const he=backgroundGridTextures.indexOf(backgroundGrid);he<backgroundGridTextures.length-1?Z(backgroundGridTextures[he+1]):Z(backgroundGridTextures[0]);return}if(D.key.toLowerCase()==="z"){K(!TRUE_ROTATION_SPEEDS);return}if(D.key.toLowerCase()==="i"){N(!SHOW_LABEL);return}if(D.key.toLowerCase()==="u"){const he=distanceUnits.indexOf(distanceUnit);he<distanceUnits.length-1?re(distanceUnits[he+1]):re(distanceUnits[0]);return}if(D.key==="Enter"&&(spacecraftSelected?E():v()),D.key.toLowerCase()==="e"&&le(),D.key==="Shift"&&!spacecraftSelected&&(targetPlanet&&targetPlanet.name!=="Sun"||jwstSelected)&&fe(),D.key.toLowerCase()==="s"&&!spacecraftSelected&&targetPlanet&&targetPlanet.changeSpeed(.8),D.key.toLowerCase()==="f"&&!spacecraftSelected&&targetPlanet&&targetPlanet.changeSpeed(1.2),D.key.toLowerCase()==="m"&&targetPlanet&&targetPlanet.changeMass(2),D.key.toLowerCase()==="n"&&targetPlanet&&targetPlanet.changeMass(.5),D.key.toLowerCase()==="c"&&(ht("Move to Sun"),_(n,!0)),D.key.toLowerCase()==="."&&targetPlanet&&!targetPlanet.isSun&&Ge(),D.key.toLowerCase()==="x"&&E(),D.key.toLowerCase()==="o"){if(D.altKey){H();return}I(!SHOW_ORBITS)}if(D.key.toLowerCase()==="q"&&ne(!HIGH_QUALITY_TEXTURES),D.key.toLowerCase()==="p"&&ee(),D.key.toLowerCase()==="v"&&y(!SHOW_VECTORS),D.key.toLowerCase()==="t"&&(SHOW_CONNECTION=!SHOW_CONNECTION,ht(SHOW_CONNECTION?"Show connection":"Hide connection"),SHOW_CONNECTION?Ie.add(p):Ie.remove(p)),D.key>="0"&&D.key<="9"){const he=parseInt(D.key);e[he]&&(!spacecraftSelected&&D.altKey?ke(e[he]):Ae(targets.indexOf(e[he].name)))}D.key.toLowerCase()==="j"&&g()}}),document.getElementById("PAUSED").addEventListener("change",D=>{z(D.target.checked)}),document.getElementById("SHOW_LABEL").addEventListener("change",D=>{N(D.target.checked)}),document.getElementById("SHOW_ORBITS").addEventListener("change",D=>{I(D.target.checked)}),document.getElementById("SHOW_SPACECRAFT_ORBIT").addEventListener("change",D=>{H()}),document.getElementById("HIGH_QUALITY_TEXTURES").addEventListener("change",D=>{ne(D.target.checked)}),document.getElementById("SHOW_VECTORS").addEventListener("change",D=>{y(D.target.checked)}),document.getElementById("REALISTIC_LIGHTING").addEventListener("change",D=>{w(D.target.checked)}),document.getElementById("EARTH_SYSTEM_SCALING").addEventListener("change",D=>{j(D.target.checked)}),document.getElementById("TRUE_ROTATION_SPEEDS").addEventListener("change",D=>{K(D.target.checked)}),document.getElementById("ACTIVE_ASCENSION_AXIS").addEventListener("change",D=>{Q(D.target.checked)}),document.getElementById("DISTANCE_UNIT_SELECT").addEventListener("change",D=>{re(distanceUnits[D.target.value])}),document.getElementById("BACKGROUND_SELECT").addEventListener("change",D=>{bu(D.target.value)}),document.getElementById("BACKGROUND_GRID_SELECT").addEventListener("change",D=>{Z(backgroundGridTextures[D.target.value])}),document.getElementById("SPACECRAFT_FIRST_PERSON").addEventListener("change",D=>{ae(D.target.checked)}),document.getElementById("SPACECRAFT_GRAVITY").addEventListener("change",D=>{J(D.target.checked),ht(spacecraftGravity?"Enable orbital mechanics":"Disable orbital mechanics")}),document.getElementById("SPACECRAFT_MATCH_VELOCITY").addEventListener("change",D=>{_e(D.target.checked),ht(spacecraftMatchVelocity?"Enable match velocity":"Disable match velocity")}),document.getElementById("SPACECRAFT_LIGHT").addEventListener("change",D=>{xe(D.target.checked)}),document.getElementById("TARGET_SELECT").addEventListener("change",D=>{Ae(D.target.value)}),document.getElementById("TRANSFORM_PLANET").addEventListener("click",()=>{Ge()}),document.getElementById("TOGGLE_SPACECRAFT_BTN").addEventListener("click",()=>{spacecraftSelected?E():v()}),document.getElementById("RESET_ORBITS_BTN").addEventListener("click",()=>{ee()}),document.getElementById("CAMERA_LOCK").addEventListener("change",D=>{le()}),document.getElementById("CAMERA_SUN_LOCK").addEventListener("change",D=>{fe()});function z(D){if(PAUSED=D,ht(PAUSED?"Pause":"Unpause"),document.getElementById("PAUSED_CB").checked=PAUSED,birdseye){Kt(!1);return}if(spacecraftSelected)Kt(!0);else if(targetPlanet||jwstSelected)if(Kt(!PAUSED),PAUSED?(cameraSunLockChanged=isCameraSunLocked,isCameraSunLocked=!1):cameraSunLockChanged&&(targetPlanet&&(sunLockedCameraDistance=dh(targetPlanet.sphere.position,$e.position)),isCameraSunLocked=!0),jwstSelected){const he=new L;h.getWorldPosition(he),isCameraLocked&&C(new L().subVectors($e.position,he))}else targetPlanet&&isCameraLocked&&b(new L().subVectors($e.position,targetPlanet.sphere.position))}function N(D){SHOW_LABEL=D,ht(SHOW_LABEL?"Show info label":"Hide info label"),document.getElementById("SHOW_LABEL_CB").checked=SHOW_LABEL,mn()}function I(D){SHOW_ORBITS=D,ht(SHOW_ORBITS?"Show orbits":"Hide orbits"),document.getElementById("SHOW_ORBITS_CB").checked=SHOW_ORBITS;for(const he of[...e,...t])SHOW_ORBITS?Ie.add(he.orbitLine):Ie.remove(he.orbitLine);spacecraft.toggleOrbitLine(SHOW_ORBITS),document.getElementById("SHOW_SPACECRAFT_ORBIT_CB").checked=SHOW_ORBITS,inEarthSystem&&(o.updateOrbitTrail(r,s.sphere),l.updateOrbitTrail(a,s.sphere)),u.children[1].visible=SHOW_ORBITS}function H(){spacecraft.toggleOrbitLine(spacecraft.orbitLine.parent===null),document.getElementById("SHOW_SPACECRAFT_ORBIT_CB").checked=spacecraft.orbitLine.parent!==null,ht(SHOW_ORBITS?"Show spacecraft orbit":"Hide spacecraft orbits")}function ne(D){HIGH_QUALITY_TEXTURES=D,document.getElementById("HIGH_QUALITY_TEXTURES_CB").checked=HIGH_QUALITY_TEXTURES,ht(HIGH_QUALITY_TEXTURES?"Texture quality: 8k":"Texture quality: 2k"),document.getElementById("loading-screen").style.display="";for(const Ee of e){if(Ee.lowQMapPath&&Ee.highQMapPath){const Be=wn.load(HIGH_QUALITY_TEXTURES&&Ee.highQMapPath?Ee.highQMapPath:Ee.lowQMapPath);Be.colorSpace=bt,Ee.sphere.material.map=Be}if(Ee.ring&&Ee.ring.lowQMapPath&&Ee.ring.highQMapPath){const Be=wn.load(HIGH_QUALITY_TEXTURES&&Ee.ring.highQMapPath?Ee.ring.highQMapPath:Ee.ring.lowQMapPath);Be.colorSpace=bt,Be.anisotropy=32,Ee.ring.ringObj.material.map=Be}}const he=wn.load(HIGH_QUALITY_TEXTURES?"/planet_textures/8k/8k_earth_clouds.jpg":"/planet_textures/2k/2k_earth_clouds.jpg");he.colorSpace=bt,s.clouds.material.alphaMap=he}function y(D){SHOW_VECTORS=D,document.getElementById("SHOW_VECTORS_CB").checked=SHOW_VECTORS,ht(SHOW_VECTORS?"Show planetary vectors":"Hide planetary vectors");for(const he of e)he.updateVectorLines(0,0,SHOW_VECTORS);spacecraft.updateVectorLines(0,0,0)}function w(D){REALISTIC_LIGHTING=D,document.getElementById("REALISTIC_LIGHTING_CB").checked=REALISTIC_LIGHTING,ht(REALISTIC_LIGHTING?"Enable realistic lighting":"Disable realistic lighting"),Tu()}function j(D){earthSystemScaling=D?.1:1,document.getElementById("EARTH_SYSTEM_SCALING_CB").checked=D,R(),ht(D?"Switch to scaled down earth system":"Switch to true scale earth system")}function K(D){TRUE_ROTATION_SPEEDS=D,document.getElementById("TRUE_ROTATION_SPEEDS_CB").checked=TRUE_ROTATION_SPEEDS,ht(TRUE_ROTATION_SPEEDS?"Enable accurate rotation speeds":"Disable accurate rotation speeds")}function Q(D){ACTIVE_ASCENSION_AXIS=D,document.getElementById("ACTIVE_ASCENSION_AXIS_CB").checked=ACTIVE_ASCENSION_AXIS,ht(ACTIVE_ASCENSION_AXIS?"Enable ascension axis":"Disable ascension axis"),ACTIVE_ASCENSION_AXIS||(spacecraft.container.position.y=0,spacecraft.obj.rotation.x=0,spacecraft.yVel=0),mn()}function re(D){distanceUnit=D,document.getElementById("DISTANCE_UNIT_SELECT").value=distanceUnits.indexOf(distanceUnit).toString(),ht("Cycle distance unit"),mn()}function Z(D){backgroundGrid=D,document.getElementById("BACKGROUND_GRID_SELECT").value=backgroundGridTextures.indexOf(backgroundGrid).toString(),_v(d)}function ae(D){spacecraftFirstPerson=D,document.getElementById("SPACECRAFT_FIRST_PERSON_CB").checked=spacecraftFirstPerson,ht(spacecraftFirstPerson?"Enable cockpit view":"Disable cockpit view")}function J(D){spacecraftGravity=D,document.getElementById("SPACECRAFT_GRAVITY_CB").checked=spacecraftGravity}function _e(D){spacecraftMatchVelocity=D,document.getElementById("SPACECRAFT_MATCH_VELOCITY_CB").checked=spacecraftMatchVelocity}function xe(D){spacecraftLight=D,document.getElementById("SPACECRAFT_LIGHT_CB").checked=spacecraftLight,spacecraftLight=D,ht(spacecraftLight?"Enable spacecraft light":"Disable spacecraft light"),spacecraft.obj.shipLight.visible=spacecraftLight}function Ae(D){const he=targets[D];if(spacecraftSelected)if(he==="Free flight")ht("Enable free flight"),v();else{let Ee=e.find(Be=>Be.name===he);ke(Ee)}else if(he==="None")E();else if(he==="JWST")g();else{let Ee=e.find(Be=>Be.name===he);_(Ee)}}function ke(D){D!==targetPlanet&&(ht("Target: "+D.name),spacecraftSelected||(birdseye=!0),Cs(D),SHOW_LABEL&&mn(),spacecraftSelected&&document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.remove("disabled"),Os("TARGET_SELECT",targets.indexOf(D.name)))}function Ge(){ht("Turn "+targetPlanet.name+" into a star");const D=new Hn(targetPlanet.name+" (Star)",696340*PLANET_SCALE,0,150*365,1.98892*10**30,targetPlanet.colorHex,targetPlanet.sphere.position.x,0,targetPlanet.sphere.position.z,!0,"/planet_textures/2k/2k_sun.jpg","/planet_textures/8k/8k_sun.jpg");D.xVel=targetPlanet.xVel,D.yVel=targetPlanet.yVel,D.zVel=targetPlanet.zVel,D.orbits.push(targetPlanet.orbits[targetPlanet.orbits.length-2]),D.orbits.push(targetPlanet.orbits[targetPlanet.orbits.length-1]),SHOW_ORBITS&&D.drawOrbits();for(let he=0;he<=e.length-1;he++)if(e[he]===targetPlanet){Ie.remove(e[he].sphere),e[he].ring&&Ie.remove(e[he].ring.ringObj),e[he].atmosphere&&Ie.remove(e[he].atmosphere),e[he].clouds&&Ie.remove(e[he].clouds),targetPlanet.name==="Earth"&&(inEarthSystem=!1,m(!1)),e[he].updateVectorLines(null,null,SHOW_VECTORS,!0),e[he]=D,e[he].updatePosition(e,SHOW_VECTORS),t.push(targetPlanet),Vc(e,spacecraftSelected,targetPlanet.name),Cs(D),spacecraftSelected||(Kt(!1),ei(!1),birdseye||$e.position.copy(targetPlanet.sphere.position).add(lr(targetPlanet)));return}}function ee(){ht("Reset orbits");for(const D of[...e,...t])D.resetOrbit();t.length=0,spacecraft.resetOrbit()}function le(){if(spacecraftSelected){if(ht(isCameraLocked?"Unlock camera":"Lock camera"),isCameraLocked)Kt(!1),ei(!1);else{Kt(!0);const D=new L;spacecraft.obj.getWorldPosition(D)}return}if(jwstSelected&&!PAUSED){if(ht(isCameraLocked?"Unlock camera":"Lock camera"),isCameraLocked)Kt(!1),ei(!1);else{Kt(!0);const D=new L;h.getWorldPosition(D),C(new L().subVectors($e.position,D))}return}targetPlanet&&!PAUSED&&(ht(isCameraLocked?"Unlock camera":"Lock camera"),isCameraLocked?(Kt(!1),ei(!1)):(Kt(!0),b(new L().subVectors($e.position,targetPlanet.sphere.position))))}function fe(){PAUSED?(cameraSunLockChanged=!cameraSunLockChanged,ht(cameraSunLockChanged?"Lock camera to sun":"Unlock camera from sun"),document.getElementById("CAMERA_SUN_LOCK_CB").checked=cameraSunLockChanged):(ei(!isCameraSunLocked),ht(isCameraSunLocked?"Lock camera to sun":"Unlock camera from sun"),isCameraSunLocked&&targetPlanet?sunLockedCameraDistance=dh(targetPlanet.sphere.position,$e.position):isCameraSunLocked||(cameraSunLockChanged=!1,targetPlanet?b(lr(targetPlanet)):jwstSelected&&b(i)))}}let Hi=new L(.001,.01,.001),Ps=new L(jwstScaleFactor*3,jwstScaleFactor*3,jwstScaleFactor*3);const wu=i=>{Hi.copy(i)},Gc=i=>{Ps.copy(i)},ti=new Hn("Sun",696340*PLANET_SCALE,0,150*365,1.98892*10**30,16741391,0,0,0,!0,"/planet_textures/2k/2k_sun.jpg","/planet_textures/8k/8k_sun.jpg"),Cu=new Hn("Mercury",2440*PLANET_SCALE,0,58*24,.3301*10**24,9737364,.387*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_mercury.jpg","/planet_textures/8k/8k_mercury.jpg");Cu.zVel=47.39996051284;const nr=new Hn("Venus",6051.8*PLANET_SCALE,177.4,-243*24,4.867*10**24,16750848,.72*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_venus_surface.jpg","/planet_textures/8k/8k_venus_surface.jpg");nr.zVel=35.019991414096;const Mt=new Hn("Earth",6371*PLANET_SCALE,23.5,24,5.9722*10**24,28415,AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_earth_daymap.jpg","/planet_textures/8k/8k_earth_daymap.jpg");Mt.zVel=29.78299948;const Ru=new Hn("Mars",3389.5*PLANET_SCALE,25.19,24.5,6.39*10**23,16731392,1.524*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_mars.jpg","/planet_textures/8k/8k_mars.jpg");Ru.zVel=24.076988672178;const Wc=new Hn("Jupiter",69911*PLANET_SCALE,3.13,10,1.898*10**27,11770755,5.2*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_jupiter.jpg","/planet_textures/8k/8k_jupiter.jpg");Wc.zVel=13.06000369219;new Po(Wc,1.4,1.7,12628126,.9,"/planet_textures/2k/2k_jupiter_ring.png");const Xc=new Hn("Saturn",58232*PLANET_SCALE,0,10.5,5.683*10**26,14207645,9.538*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_saturn.jpg","/planet_textures/8k/8k_saturn.jpg");Xc.zVel=9.679981775672;new Po(Xc,1.6,2.7,14468253,.9,"/planet_textures/2k/2k_saturn_ring.png");const Lo=new Hn("Uranus",25362*PLANET_SCALE,97.7,17,8.681*10**25,7532013,19.56*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_uranus.jpg");Lo.zVel=6.7999974;new Po(Lo,1.6,2.1,14022647,.9,"/planet_textures/2k/2k_uranus_ring.png");const jc=new Hn("Neptune",24622*PLANET_SCALE,8.32,16,1.024*10**26,2310084,29.9*AU*DISTANCE_SCALE,0,0,!1,"/planet_textures/2k/2k_neptune.jpg");jc.zVel=5.4299794;new Po(jc,1.5,2.3,12765933,.9,"/planet_textures/2k/2k_neptune_ring.png");const On=[ti,Cu,nr,Mt,Ru,Wc,Xc,Lo,jc],Tv=[];spacecraft=new yv(1e3,0,0,-3*AU*DISTANCE_SCALE,.04,.25,1e-4,.2);$e.position.y=40;Ht.update();let bh=!0;pr.onProgress=(i,e,t)=>{document.getElementById("loading-progress").innerHTML=": "+e+"/"+t};pr.onLoad=()=>{document.getElementById("loading-title").textContent="Loading Textures",document.getElementById("loading-screen").style.display="none",bh&&(Mv({jwstCameraOffset:Ps,planets:On,discardedPlanets:Tv,sun:ti,earth:Mt,moon:ci,moonOrbitTrail:hr,ISS:hi,issOrbitTrail:wi,jwst:an,jwstPlane:Jt,constellationSphere:Cv,connectionOutline:Du,moveToPlanet:Uv,moveToSpacecraft:Ov,moveToDefault:Fv,moveToJWST:Bv,updateEarthSystemVisibility:Yc,updateEarthSystemScaling:Pu,setCameraOffset:wu,setJwstCameraOffset:Gc}),Av()),bh=!1};function bv(i){const e=PLANET_SCALE;PLANET_SCALE=DISTANCE_SCALE*i;for(const n of On){let s=n.radius/e*PLANET_SCALE;n.radius=s;const r=new en(s,64,32);if(r.rotateY(Xe.degToRad(90)),n.sphere.geometry.dispose(),n.sphere.geometry=r,n.atmosphere&&(n.atmosphere.geometry.dispose(),n.atmosphere.geometry=new en(s*1.03,64,64)),n.glowSphere&&(n.glowSphere.geometry.dispose(),n.glowSphere.geometry=new en(s*2,64,32)),n.clouds&&(n.clouds.geometry.dispose(),n.clouds.geometry=new en(s*1.005,64,32)),n.axisLine){n.axisLine.geometry.dispose();const o=s*2,a=[new L(0,-o,0),new L(0,o,0)];n.axisLine.geometry=new yt().setFromPoints(a)}if(n.ring){n.ring.ringObj.geometry.dispose();const o=s*n.ring.innerRadiusFactor,a=s*n.ring.outerRadiusFactor;n.ring.ringObj.geometry=new du(o,a,96,96)}}ci.geometry.dispose(),ci.geometry=new en(1737.4*PLANET_SCALE,32,16),wi.reset(),hi.position.set(Mt.radius*1.1,0,0);const t=jwstScaleFactor*PLANET_SCALE/DISTANCE_SCALE/10;an.scale.set(t,t,t),Gc(new L(t*3,t*3,t*3)),Pu(),targetPlanet&&isCameraLocked&&(Hi=lr(targetPlanet),$e.position.copy(targetPlanet.sphere.position).add(Hi),$e.lookAt(targetPlanet.sphere.position))}function Pu(){hr.reset(),ci.position.set(Mt.radius*60.3*earthSystemScaling,0,0);const i=Mt.radius*62.8*earthSystemScaling;if(an.position.set(i,0,0),Jt.remove(ri),ri.geometry.dispose(),ri=Mu(i,10658209,128),Jt.add(ri),jwstSelected){qc();const e=new L;an.getWorldPosition(e),$e.position.copy(e).add(Ps),$e.lookAt(e)}mr(jwstSelected)}function Av(){document.querySelectorAll("input[type='checkbox']").forEach(i=>{i.id==="PAUSED_CB"?i.checked=PAUSED:i.id==="SHOW_LABEL_CB"?i.checked=SHOW_LABEL:i.id==="SHOW_ORBITS_CB"||i.id==="SHOW_SPACECRAFT_ORBIT_CB"?i.checked=SHOW_ORBITS:i.id==="HIGH_QUALITY_TEXTURES_CB"?i.checked=HIGH_QUALITY_TEXTURES:i.id==="SHOW_VECTORS_CB"?i.checked=SHOW_VECTORS:i.id==="REALISTIC_LIGHTING_CB"?i.checked=REALISTIC_LIGHTING:i.id==="EARTH_SYSTEM_SCALING_CB"?i.checked=earthSystemScaling!==1:i.id==="TRUE_ROTATION_SPEEDS_CB"?i.checked=TRUE_ROTATION_SPEEDS:i.id==="ACTIVE_ASCENSION_AXIS_CB"?i.checked=ACTIVE_ASCENSION_AXIS:i.id==="SPACECRAFT_FIRST_PERSON_CB"?i.checked=spacecraftFirstPerson:i.id==="SPACECRAFT_GRAVITY_CB"?i.checked=spacecraftGravity:i.id==="SPACECRAFT_MATCH_VELOCITY_CB"?i.checked=spacecraftMatchVelocity:i.id==="SPACECRAFT_LIGHT_CB"?i.checked=spacecraftLight:i.id==="CAMERA_LOCK_CB"?i.checked=isCameraLocked:i.id==="CAMERA_SUN_LOCK_CB"&&(i.checked=isCameraSunLocked)}),document.querySelectorAll("select").forEach(i=>{i.id==="DISTANCE_UNIT_SELECT"&&(i.value=distanceUnits.indexOf(distanceUnit).toString())}),Vc(On,spacecraftSelected),document.getElementById("simulation-speed").addEventListener("input",i=>{const e=Object.keys(simulationSpeed),t=i.target.value,n=e[t],s=simulationSpeed[n];document.getElementById("simulation-speed-display").textContent=n,TIME=60*60*s}),document.getElementById("spacecraft-fov").addEventListener("input",i=>{const e=i.target.value;document.getElementById("spacecraft-fov-display").textContent=`${e}°`,SPACECRAFT_FOV=e,zi(SPACECRAFT_FOV)}),document.getElementById("planet-scale").addEventListener("input",i=>{let e=parseInt(i.target.value,10);e>1&&(e=Math.round(e/2)*2),i.target.value=e,document.getElementById("planet-scale-display").textContent=e.toString(),bv(e)})}bu(backgroundTextures.indexOf(backgroundTexture).toString());vv();Tu();const Lu=new en(5e3,60,40);Lu.scale(-1,1,1);const wv=new Cn({transparent:!0,opacity:1}),Cv=new vt(Lu,wv),Iu=new yt,Rv=new ln({color:new Oe().setHex(65288)}),Du=new Lc(Iu,Rv);Du.frustumCulled=!1;const Pv=new en(1737.4*PLANET_SCALE,32,16),Lv="/planet_textures/2k/2k_moon.jpg",Nu=wn.load(Lv);Nu.colorSpace=bt;const Iv=new si({map:Nu,roughness:.8}),ci=new vt(Pv,Iv),bi=new dt;bi.add(ci);ci.position.set(Mt.radius*60.3*earthSystemScaling,0,0);ci.rotation.y=Math.PI;bi.position.copy(ci.position);bi.rotation.x=Xe.degToRad(5.14);const hr=new Au(200,10658209,!1),Ai=new dt,Ta=1e-6,Dv=new Ls(50,50,50),Nv=new Cn({color:16711680}),hi=new vt(Dv,Nv);Ai.add(hi);hi.visible=!1;hi.position.set(Mt.radius*1.1,0,0);hi.rotation.y=Xe.degToRad(90);hi.scale.set(Ta,Ta,Ta);Ai.rotation.x=Xe.degToRad(51.6);Ai.position.copy(hi.position);const wi=new Au(3e3,16711846,!0);wi.orbitTrailObj.rotation.x=Xe.degToRad(23.5);let an=null;const Jt=new dt;let ri=Mu(Mt.radius*62.8*earthSystemScaling,10658209,128);Eu.load("/models/jwst.glb",i=>{an=i.scene,an.rotation.x=Xe.degToRad(90),Jt.add(an),Jt.add(ri),an.position.set(Mt.radius*62.8*earthSystemScaling,0,0),an.scale.set(jwstScaleFactor,jwstScaleFactor,jwstScaleFactor),Jt.rotation.y=Xe.degToRad(90);const e=new Co(16777215,.003,1e4*DISTANCE_SCALE);e.position.set(1,4,0),an.add(e)});function mr(i){jwstSelected=i,jwstSelected?(Ie.add(Jt),ri.visible=SHOW_ORBITS):Ie.remove(Jt)}function Yc(i){i?(bi.position.copy(Mt.sphere.position),Ai.position.copy(Mt.sphere.position),Ie.add(Jt),Ie.add(bi),Ie.add(Ai),Ie.add(hr.orbitTrailObj),Ie.add(wi.orbitTrailObj)):(Ie.remove(Jt),Ie.remove(bi),Ie.remove(Ai),Ie.remove(hr.orbitTrailObj),Ie.remove(wi.orbitTrailObj),wi.reset())}function Uv(i,e=!1){if(i===targetPlanet&&!i.isSun&&!spacecraftSelected){Hi=lr(i),Kt(!0);return}Rs(!0),ht("Move to "+i.name),Ro(!1,On),mr(!1),SHOW_ORBITS&&(ri.visible=!1),inEarthSystem=i.name==="Earth",targetPlanet&&!i.isSun&&(targetPlanet.sphere.rotation.y=0);let t=!1;SHOW_LABEL&&(SHOW_LABEL=!1,t=!0),isCameraLocked=!1,isCameraSunLocked=!1,Yc(inEarthSystem);const n=1,s=$e.position.clone(),r=performance.now();function o(){const a=(performance.now()-r)/1e3,l=Math.min(a/n,1),h=i.sphere.position.clone();e&&(h.y+=40),Hi=lr(i),h.add(Hi),$e.position.lerpVectors(s,h,l),Ht.target.copy(i.sphere.position),Ht.update(),l<1?requestAnimationFrame(o):(Cs(i),birdseye=e,Kt(!e&&!PAUSED),ei(!1),t&&(SHOW_LABEL=!0),SHOW_LABEL&&mn(),Os("TARGET_SELECT",targets.indexOf(i.name)),Rs(!1))}o()}function Ov(){birdseye=!1,mr(!1),Cs(null),Ro(!0,On),Kt(!0),ei(!1),mn(),Os("TARGET_SELECT",targets.indexOf("Free flight"))}function Fv(){Rs(!0),isCameraLocked=!1,isCameraSunLocked=!1,mr(!1),Ro(!1,On),ht("Topdown view");const i=1,e=$e.position.clone(),t=performance.now(),n=new L(0,40,0);function s(){const r=(performance.now()-t)/1e3,o=Math.min(r/i,1);$e.position.lerpVectors(e,n,o),Ht.target.copy(new L(0,0,0)),Ht.update(),o<1?requestAnimationFrame(s):(birdseye=!0,Cs(null),Kt(!1),ei(!1),SHOW_LABEL&&mn(),Os("TARGET_SELECT",targets.indexOf("None")),Rs(!1))}s()}function Bv(){Rs(!0),movingToJwst=!0,ri.visible=!1,Ro(!1,On),ht("Move to James Webb Space Telescope"),targetPlanet&&!targetPlanet.isSun&&(targetPlanet.sphere.rotation.y=0);let i=!1;SHOW_LABEL&&(SHOW_LABEL=!1,i=!0),isCameraLocked=!1,isCameraSunLocked=!1,qc();const e=jwstScaleFactor*PLANET_SCALE/DISTANCE_SCALE/10;Gc(new L(e*3,e*3,e*3)),wu(Ps);const t=1,n=$e.position.clone(),s=performance.now();function r(){const o=(performance.now()-s)/1e3,a=Math.min(o/t,1),l=new L;an.getWorldPosition(l);const h=l.clone().add(Ps);$e.position.lerpVectors(n,h,a),Ht.target.copy(l),Ht.update(),a<1?requestAnimationFrame(r):(Cs(null),inEarthSystem=!0,birdseye=!1,Yc(inEarthSystem),mr(!0),Kt(!PAUSED),ei(!1),i&&(SHOW_LABEL=!0),SHOW_LABEL&&mn(),Os("TARGET_SELECT",targets.indexOf("JWST")),movingToJwst=!1,Rs(!1))}r()}function qc(){const i=Mt.radius*235.4*earthSystemScaling,e=new L,t=new L;ti.sphere.getWorldPosition(e),Mt.sphere.getWorldPosition(t);const n=dc(e,t,i);Jt.position.x=n.x,Jt.position.z=n.z;const s=Math.atan2(t.z-e.z,t.x-e.x);Jt.rotation.y=Xe.degToRad(90)-s,Jt.rotation.z+=-.007,an.rotation.y+=.005}function kv(){if(ti.sphere.rotation.y+=-.001,inEarthSystem){Mt.sphere.rotation.y+=TRUE_ROTATION_SPEEDS?Mt.rotationSpeed:-.009,bi.position.copy(Mt.sphere.position),bi.rotation.y+=TRUE_ROTATION_SPEEDS?-.0585:-.027,hr.updateOrbitTrail(ci,Mt.sphere),Ai.position.copy(Mt.sphere.position),Ai.rotation.y+=TRUE_ROTATION_SPEEDS?-.4446:-.2,wi.orbitTrailObj.rotation.y=Mt.sphere.rotation.y,wi.updateOrbitTrail(hi,Mt.sphere),Mt.clouds.rotation.y=Mt.sphere.rotation.y*1.3;return}if(targetPlanet&&!targetPlanet.isSun){if(targetPlanet===Lo){targetPlanet.sphere.rotation.x+=TRUE_ROTATION_SPEEDS?targetPlanet.rotationSpeed:-.009;return}targetPlanet.sphere.rotation.y+=TRUE_ROTATION_SPEEDS?targetPlanet.rotationSpeed:-.009,targetPlanet===nr&&(nr.atmosphere.rotation.y=nr.sphere.rotation.y*1.2)}}function io(i){Ht.target.copy(i),Ht.update(),Rn.target.copy(Ht.target),Rn.update()}function zv(){if(!PAUSED){for(const i of On)i.updatePosition(On,SHOW_VECTORS);kv(),spacecraftSelected&&(spacecraft.updatePosition(On,ti.sphere.position),spacecraft.updateBolts(),!portPressed&&!starboardPressed&&(spacecraft.container.rotation.z=Xe.lerp(spacecraft.container.rotation.z,0,.08)),forwardPressed||(spacecraft.obj.flame1.visible=!1,spacecraft.obj.flame2.visible=!1),backwardPressed||(spacecraft.obj.flame3.visible=!1,spacecraft.obj.flame4.visible=!1),(forwardPressed||backwardPressed)&&(spacecraft.flameMaterial.uniforms.time.value+=2500*spacecraft.scale),!forwardPressed&&!backwardPressed&&!handbrakePressed&&Math.round($e.fov)!==SPACECRAFT_FOV&&zi(SPACECRAFT_FOV),(forwardPressed||backwardPressed||portPressed||starboardPressed||rotatePortPressed||rotateStarboardPressed||handbrakePressed)&&!spacecraftMatchVelocity&&spacecraft.changeMomentum()),(jwstSelected||movingToJwst)&&qc(),REALISTIC_LIGHTING&&cr.position.copy(ti.sphere.position),SHOW_CONNECTION&&gv([ti.sphere.position,Mt.sphere.position,Jt.position],Iu),SHOW_LABEL&&mn()}if(jwstSelected&&!transitionAnimationActive){const i=new L;if(an.getWorldPosition(i),isCameraSunLocked){const e=new L;ri.getWorldPosition(e);const t=.4*Mt.radius*235.4*earthSystemScaling,n=dc(ti.sphere.position,e,t);$e.position.copy(new L(n.x,0,n.z)),$e.lookAt(e)}else isCameraLocked?($e.position.copy(i).add(Ps),$e.lookAt(i)):io(i)}else if(spacecraftSelected)if(isCameraLocked)if(targetPlanet){const i=new L;i.subVectors(targetPlanet.sphere.position,spacecraft.container.position);const e=Math.atan2(i.x,i.z);spacecraft.container.rotation.y=e;const t=new L;spacecraftFirstPerson?spacecraft.obj.firstPersonCameraHelper.getWorldPosition(t):spacecraft.obj.cameraHelperClose.getWorldPosition(t),$e.position.copy(t),$e.lookAt(targetPlanet.sphere.position)}else{const i=new L;spacecraftFirstPerson?spacecraft.obj.firstPersonCameraHelper.getWorldPosition(i):spacecraft.obj.cameraHelperFar.getWorldPosition(i),$e.position.copy(i);const e=new L(0,0,1),t=new sn().setFromEuler(new _n(0,spacecraft.container.rotation.y,0)),n=new sn().setFromEuler(new _n(spacecraft.obj.rotation.x,0,0)),s=e.applyQuaternion(t.multiply(n));$e.lookAt(spacecraft.container.position.clone().add(s.multiplyScalar(10))),spacecraft.obj.rotation.x>=Xe.degToRad(90)?$e.rotation.z+=Xe.degToRad(180):spacecraft.obj.rotation.x<=Xe.degToRad(-90)&&($e.rotation.z-=Xe.degToRad(180))}else io(spacecraft.container.position);else if(targetPlanet&&!transitionAnimationActive)if(isCameraSunLocked||(sunLockedCameraDistance=0),isCameraSunLocked){const i=sunLockedCameraDistance>0?sunLockedCameraDistance:targetPlanet.radius*AU*PLANET_SCALE/10,e=dc(ti.sphere.position,targetPlanet.sphere.position,i);$e.position.copy(new L(e.x,0,e.z)),$e.lookAt(targetPlanet.sphere.position)}else isCameraLocked?($e.position.copy(targetPlanet.sphere.position).add(Hi),$e.lookAt(targetPlanet.sphere.position)):io(targetPlanet.sphere.position);else transitionAnimationActive||io(new L(0,0,0));Us.render(Ie,$e)}Us.setAnimationLoop(zv);
