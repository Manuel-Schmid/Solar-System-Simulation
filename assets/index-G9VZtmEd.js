(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="169",_n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,il=1,ju=2,Uh=1,Yu=2,$n=3,ai=0,sn=1,fn=2,bi=0,_s=1,xo=2,sl=3,rl=4,qu=5,zi=100,Ku=101,Zu=102,$u=103,Ju=104,Qu=200,ed=201,td=202,nd=203,Ia=204,Da=205,id=206,sd=207,rd=208,od=209,ad=210,cd=211,ld=212,hd=213,ud=214,Na=0,Ua=1,Oa=2,ys=3,Fa=4,Ba=5,ka=6,za=7,Oh=0,dd=1,fd=2,Ai=0,pd=1,md=2,gd=3,_d=4,xd=5,vd=6,Sd=7,ol="attached",yd="detached",Fh=300,Es=301,Ms=302,ar=303,Ha=304,Ao=306,Ts=1e3,Nn=1001,vo=1002,$t=1003,Bh=1004,er=1005,kt=1006,lo=1007,Un=1008,ci=1009,kh=1010,zh=1011,cr=1012,bc=1013,ji=1014,nn=1015,ii=1016,Ac=1017,wc=1018,bs=1020,Hh=35902,Vh=1021,Gh=1022,cn=1023,Wh=1024,Xh=1025,xs=1026,As=1027,wo=1028,Rc=1029,jh=1030,Cc=1031,Pc=1033,ho=33776,uo=33777,fo=33778,po=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,ja=36196,Ya=37492,qa=37496,Ka=37808,Za=37809,$a=37810,Ja=37811,Qa=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,cc=37821,mo=36492,lc=36494,hc=36495,Yh=36283,uc=36284,dc=36285,fc=36286,lr=2300,hr=2301,Bo=2302,al=2400,cl=2401,ll=2402,Ed=2500,Md=0,qh=1,pc=2,Td=3200,bd=3201,Kh=0,Ad=1,Qn="",bt="srgb",Nt="srgb-linear",Lc="display-p3",Ro="display-p3-linear",So="linear",Et="srgb",yo="rec709",Eo="p3",Ji=7680,hl=519,wd=512,Rd=513,Cd=514,Zh=515,Pd=516,Ld=517,Id=518,Dd=519,mc=35044,ul="300 es",si=2e3,Mo=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const nr=Math.PI/180,ws=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function Ic(i,e){return(i%e+e)%e}function Nd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ud(i,e,t){return i!==e?(t-i)/(e-i):0}function ir(i,e,t){return(1-t)*i+t*e}function Od(i,e,t,n){return ir(i,e,1-Math.exp(-t*n))}function Fd(i,e=1){return e-Math.abs(Ic(i,e*2)-e)}function Bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function Vd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(dl=i);let e=dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wd(i){return i*nr}function Xd(i){return i*ws}function jd(i){return(i&i-1)===0&&i!==0}function Yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),_=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*_,a*l);break;case"YXY":i.set(c*_,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*_,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const We={DEG2RAD:nr,RAD2DEG:ws,generateUUID:Ln,clamp:Bt,euclideanModulo:Ic,mapLinear:Nd,inverseLerp:Ud,lerp:ir,damp:Od,pingpong:Fd,smoothstep:Bd,smootherstep:kd,randInt:zd,randFloat:Hd,randFloatSpread:Vd,seededRandom:Gd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:jd,ceilPowerOfTwo:Yd,floorPowerOfTwo:qd,setQuaternionFromProperEuler:Kd,normalize:gt,denormalize:An};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],_=n[5],v=n[8],E=s[0],g=s[3],m=s[6],C=s[1],b=s[4],R=s[7],z=s[2],N=s[5],I=s[8];return r[0]=o*E+a*C+c*z,r[3]=o*g+a*b+c*N,r[6]=o*m+a*R+c*I,r[1]=l*E+h*C+u*z,r[4]=l*g+h*b+u*N,r[7]=l*m+h*R+u*I,r[2]=f*E+_*C+v*z,r[5]=f*g+_*b+v*N,r[8]=f*m+_*R+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,_=l*r-o*c,v=t*u+n*f+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=u*E,e[1]=(s*l-h*n)*E,e[2]=(a*n-s*o)*E,e[3]=f*E,e[4]=(h*t-s*c)*E,e[5]=(s*r-a*t)*E,e[6]=_*E,e[7]=(n*c-l*t)*E,e[8]=(o*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Ke;function $h(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){const i=ur("canvas");return i.style.display="block",i}const fl={};function go(i){i in fl||(fl[i]=!0,console.warn(i))}function $d(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Jd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pl=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ml=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[Nt]:{transfer:So,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[bt]:{transfer:Et,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ro]:{transfer:So,primaries:Eo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ml),fromReference:i=>i.applyMatrix3(pl)},[Lc]:{transfer:Et,primaries:Eo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ml),fromReference:i=>i.applyMatrix3(pl).convertLinearToSRGB()}},ef=new Set([Nt,Ro]),ut={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ef.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ws[e].toReference,s=Ws[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ws[i].primaries},getTransfer:function(i){return i===Qn?So:Ws[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ws[e].luminanceCoefficients)}};function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class tf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ur("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nf=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ho(s[o].image)):r.push(Ho(s[o]))}else r=Ho(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class zt extends qi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Nn,s=Nn,r=kt,o=Un,a=cn,c=ci,l=zt.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ln(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Fh;zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],_=c[5],v=c[9],E=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+E)<.1&&Math.abs(v+g)<.1&&Math.abs(l+_+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,R=(_+1)/2,z=(m+1)/2,N=(h+f)/4,I=(u+E)/4,H=(v+g)/4;return b>R&&b>z?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=N/n,r=I/n):R>z?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=N/s,r=H/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=I/r,s=H/r),this.set(n,s,r,t),this}let C=Math.sqrt((g-v)*(g-v)+(u-E)*(u-E)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(u-E)/C,this.z=(f-h)/C,this.w=Math.acos((l+_+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends rf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qh extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],_=r[o+1],v=r[o+2],E=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=E;return}if(u!==E||c!==f||l!==_||h!==v){let g=1-a;const m=c*f+l*_+h*v+u*E,C=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const z=Math.sqrt(b),N=Math.atan2(z,m*C);g=Math.sin(g*N)/z,a=Math.sin(a*N)/z}const R=a*C;if(c=c*g+f*R,l=l*g+_*R,h=h*g+v*R,u=u*g+E*R,g===1-a){const z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=z,l*=z,h*=z,u*=z}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],_=r[o+2],v=r[o+3];return e[t]=a*v+h*u+c*_-l*f,e[t+1]=c*v+h*f+l*u-a*_,e[t+2]=l*v+h*_+a*f-c*u,e[t+3]=h*v-a*u-c*f-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),_=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*_*v,this._y=l*_*u-f*h*v,this._z=l*h*v+f*_*u,this._w=l*h*u-f*_*v;break;case"YXZ":this._x=f*h*u+l*_*v,this._y=l*_*u-f*h*v,this._z=l*h*v-f*_*u,this._w=l*h*u+f*_*v;break;case"ZXY":this._x=f*h*u-l*_*v,this._y=l*_*u+f*h*v,this._z=l*h*v+f*_*u,this._w=l*h*u-f*_*v;break;case"ZYX":this._x=f*h*u-l*_*v,this._y=l*_*u+f*h*v,this._z=l*h*v-f*_*u,this._w=l*h*u+f*_*v;break;case"YZX":this._x=f*h*u+l*_*v,this._y=l*_*u+f*h*v,this._z=l*h*v-f*_*u,this._w=l*h*u-f*_*v;break;case"XZY":this._x=f*h*u-l*_*v,this._y=l*_*u-f*h*v,this._z=l*h*v+f*_*u,this._w=l*h*u+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-c)*_,this._y=(r-l)*_,this._z=(o-s)*_}else if(n>a&&n>u){const _=2*Math.sqrt(1+n-a-u);this._w=(h-c)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+l)/_}else if(a>u){const _=2*Math.sqrt(1+a-n-u);this._w=(r-l)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(c+h)/_}else{const _=2*Math.sqrt(1+u-n-a);this._w=(o-s)/_,this._x=(r+l)/_,this._y=(c+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new L,gl=new rn;class hi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Cr.subVectors(this.max,Xs),es.subVectors(e.a,Xs),ts.subVectors(e.b,Xs),ns.subVectors(e.c,Xs),fi.subVectors(ts,es),pi.subVectors(ns,ts),Li.subVectors(es,ns);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Li.z,Li.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Li.z,0,-Li.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Li.y,Li.x,0];return!Go(t,es,ts,ns,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,es,ts,ns,Cr))?!1:(Pr.crossVectors(fi,pi),t=[Pr.x,Pr.y,Pr.z],Go(t,es,ts,ns,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,Rr=new hi,es=new L,ts=new L,ns=new L,fi=new L,pi=new L,Li=new L,Xs=new L,Cr=new L,Pr=new L,Ii=new L;function Go(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const af=new hi,js=new L,Wo=new L;class kn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):af.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Wo)),this.expandByPoint(js.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new L,Xo=new L,Lr=new L,mi=new L,jo=new L,Ir=new L,Yo=new L;class gr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xo.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=mi.dot(this.direction),c=-mi.dot(Lr),l=mi.lengthSq(),h=Math.abs(1-o*o);let u,f,_,v;if(h>0)if(u=o*c-a,f=o*a-c,v=r*h,u>=0)if(f>=-v)if(f<=v){const E=1/h;u*=E,f*=E,_=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),_=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),_=-u*u+f*(f+2*c)+l;else f<=-v?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),_=-u*u+f*(f+2*c)+l):f<=v?(u=0,f=Math.min(Math.max(-r,-c),r),_=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),_=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),_=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xo).addScaledVector(Lr,f),_}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){jo.subVectors(t,e),Ir.subVectors(n,e),Yo.crossVectors(jo,Ir);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(mi,Ir));if(c<0)return null;const l=a*this.direction.dot(jo.cross(mi));if(l<0||c+l>o)return null;const h=-a*mi.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,s,r,o,a,c,l,h,u,f,_,v,E,g){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,_,v,E,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,_,v,E,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=_,m[7]=v,m[11]=E,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,_=o*u,v=a*h,E=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=_+v*l,t[5]=f-E*l,t[9]=-a*c,t[2]=E-f*l,t[6]=v+_*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,_=c*u,v=l*h,E=l*u;t[0]=f+E*a,t[4]=v*a-_,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=_*a-v,t[6]=E+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,_=c*u,v=l*h,E=l*u;t[0]=f-E*a,t[4]=-o*u,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*h,t[9]=E-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,_=o*u,v=a*h,E=a*u;t[0]=c*h,t[4]=v*l-_,t[8]=f*l+E,t[1]=c*u,t[5]=E*l+f,t[9]=_*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,_=o*l,v=a*c,E=a*l;t[0]=c*h,t[4]=E-f*u,t[8]=v*u+_,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=_*u+v,t[10]=f-E*u}else if(e.order==="XZY"){const f=o*c,_=o*l,v=a*c,E=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+E,t[5]=o*h,t[9]=_*u-v,t[2]=v*u-_,t[6]=a*h,t[10]=E*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,lf)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),gi.crossVectors(n,on),gi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),gi.crossVectors(n,on)),gi.normalize(),Dr.crossVectors(on,gi),s[0]=gi.x,s[4]=Dr.x,s[8]=on.x,s[1]=gi.y,s[5]=Dr.y,s[9]=on.y,s[2]=gi.z,s[6]=Dr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],_=n[13],v=n[2],E=n[6],g=n[10],m=n[14],C=n[3],b=n[7],R=n[11],z=n[15],N=s[0],I=s[4],H=s[8],te=s[12],y=s[1],w=s[5],X=s[9],q=s[13],J=s[2],se=s[6],K=s[10],oe=s[14],$=s[3],ge=s[7],_e=s[11],be=s[15];return r[0]=o*N+a*y+c*J+l*$,r[4]=o*I+a*w+c*se+l*ge,r[8]=o*H+a*X+c*K+l*_e,r[12]=o*te+a*q+c*oe+l*be,r[1]=h*N+u*y+f*J+_*$,r[5]=h*I+u*w+f*se+_*ge,r[9]=h*H+u*X+f*K+_*_e,r[13]=h*te+u*q+f*oe+_*be,r[2]=v*N+E*y+g*J+m*$,r[6]=v*I+E*w+g*se+m*ge,r[10]=v*H+E*X+g*K+m*_e,r[14]=v*te+E*q+g*oe+m*be,r[3]=C*N+b*y+R*J+z*$,r[7]=C*I+b*w+R*se+z*ge,r[11]=C*H+b*X+R*K+z*_e,r[15]=C*te+b*q+R*oe+z*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],_=e[14],v=e[3],E=e[7],g=e[11],m=e[15];return v*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*_-n*c*_)+E*(+t*c*_-t*l*f+r*o*f-s*o*_+s*l*h-r*c*h)+g*(+t*l*u-t*a*_-r*o*u+n*o*_+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],_=e[11],v=e[12],E=e[13],g=e[14],m=e[15],C=u*g*l-E*f*l+E*c*_-a*g*_-u*c*m+a*f*m,b=v*f*l-h*g*l-v*c*_+o*g*_+h*c*m-o*f*m,R=h*E*l-v*u*l+v*a*_-o*E*_-h*a*m+o*u*m,z=v*u*c-h*E*c-v*a*f+o*E*f+h*a*g-o*u*g,N=t*C+n*b+s*R+r*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=C*I,e[1]=(E*f*r-u*g*r-E*s*_+n*g*_+u*s*m-n*f*m)*I,e[2]=(a*g*r-E*c*r+E*s*l-n*g*l-a*s*m+n*c*m)*I,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*_-n*c*_)*I,e[4]=b*I,e[5]=(h*g*r-v*f*r+v*s*_-t*g*_-h*s*m+t*f*m)*I,e[6]=(v*c*r-o*g*r-v*s*l+t*g*l+o*s*m-t*c*m)*I,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*_+t*c*_)*I,e[8]=R*I,e[9]=(v*u*r-h*E*r-v*n*_+t*E*_+h*n*m-t*u*m)*I,e[10]=(o*E*r-v*a*r+v*n*l-t*E*l-o*n*m+t*a*m)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*_-t*a*_)*I,e[12]=z*I,e[13]=(h*E*s-v*u*s+v*n*f-t*E*f-h*n*g+t*u*g)*I,e[14]=(v*a*s-o*E*s-v*n*c+t*E*c+o*n*g-t*a*g)*I,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,_=r*h,v=r*u,E=o*h,g=o*u,m=a*u,C=c*l,b=c*h,R=c*u,z=n.x,N=n.y,I=n.z;return s[0]=(1-(E+m))*z,s[1]=(_+R)*z,s[2]=(v-b)*z,s[3]=0,s[4]=(_-R)*N,s[5]=(1-(f+m))*N,s[6]=(g+C)*N,s[7]=0,s[8]=(v+b)*I,s[9]=(g-C)*I,s[10]=(1-(f+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=si){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let _,v;if(a===si)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Mo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=si){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,_=(n+s)*h;let v,E;if(a===si)v=(o+r)*u,E=-2*u;else if(a===Mo)v=r*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=E,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new L,En=new Xe,cf=new L(0,0,0),lf=new L(1,1,1),gi=new L,Dr=new L,on=new L,_l=new Xe,xl=new rn;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const vl=new L,ss=new rn,Yn=new Xe,Nr=new L,Ys=new L,uf=new L,df=new rn,Sl=new L(1,0,0),yl=new L(0,1,0),El=new L(0,0,1),Ml={type:"added"},ff={type:"removed"},rs={type:"childadded",child:null},qo={type:"childremoved",child:null};class dt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new L,t=new xn,n=new rn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ke}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(El,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(El,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ys,Nr,this.up):Yn.lookAt(Nr,Ys,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Yn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new L,qn=new L,Ko=new L,Kn=new L,os=new L,as=new L,Tl=new L,Zo=new L,$o=new L,Jo=new L,Qo=new pt,ea=new pt,ta=new pt;class wn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),qn.subVectors(n,t),Ko.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(qn),c=Mn.dot(Ko),l=qn.dot(qn),h=qn.dot(Ko),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,_=(l*c-a*h)*f,v=(o*h-a*c)*f;return r.set(1-_-v,v,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Qo.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qo.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,n),ta.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Qo,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),qn.subVectors(e,t),Mn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),Zo.subVectors(e,n);const c=os.dot(Zo),l=as.dot(Zo);if(c<=0&&l<=0)return t.copy(n);$o.subVectors(e,s);const h=os.dot($o),u=as.dot($o);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(os,o);Jo.subVectors(e,r);const _=os.dot(Jo),v=as.dot(Jo);if(v>=0&&_<=v)return t.copy(r);const E=_*l-c*v;if(E<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(as,a);const g=h*v-_*u;if(g<=0&&u-h>=0&&_-v>=0)return Tl.subVectors(r,s),a=(u-h)/(u-h+(_-v)),t.copy(s).addScaledVector(Tl,a);const m=1/(g+E+f);return o=E*m,a=f*m,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Ic(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=na(o,r,e+1/3),this.g=na(o,r,e),this.b=na(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ut.fromWorkingColorSpace(jt.copy(this),e),Math.round(Bt(jt.r*255,0,255))*65536+Math.round(Bt(jt.g*255,0,255))*256+Math.round(Bt(jt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=bt){ut.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ur);const n=ir(_i.h,Ur.h,t),s=ir(_i.s,Ur.s,t),r=ir(_i.l,Ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ue;Ue.NAMES=tu;let pf=0;class On extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=_s,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Da,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cn extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ei=mf();function mf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function gf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Bt(i,-65504,65504),ei.floatView[0]=i;const e=ei.uint32View[0],t=e>>23&511;return ei.baseTable[t]+((e&8388607)>>ei.shiftTable[t])}function _f(i){const e=i>>10;return ei.uint32View[0]=ei.mantissaTable[ei.offsetTable[e]+(i&1023)]+ei.exponentTable[e],ei.floatView[0]}const bl={toHalfFloat:gf,fromHalfFloat:_f},It=new L,Or=new Ne;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class nu extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class iu extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xf=0;const un=new Xe,ia=new dt,cs=new L,an=new hi,qs=new hi,Ft=new L;class yt extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?iu:nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(an.min,qs.min),an.expandByPoint(Ft),Ft.addVectors(an.max,qs.max),an.expandByPoint(Ft)):(an.expandByPoint(qs.min),an.expandByPoint(qs.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ft.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(e,l),Ft.add(cs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let H=0;H<n.count;H++)a[H]=new L,c[H]=new L;const l=new L,h=new L,u=new L,f=new Ne,_=new Ne,v=new Ne,E=new L,g=new L;function m(H,te,y){l.fromBufferAttribute(n,H),h.fromBufferAttribute(n,te),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,H),_.fromBufferAttribute(r,te),v.fromBufferAttribute(r,y),h.sub(l),u.sub(l),_.sub(f),v.sub(f);const w=1/(_.x*v.y-v.x*_.y);isFinite(w)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(u,-_.y).multiplyScalar(w),g.copy(u).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(w),a[H].add(E),a[te].add(E),a[y].add(E),c[H].add(g),c[te].add(g),c[y].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let H=0,te=C.length;H<te;++H){const y=C[H],w=y.start,X=y.count;for(let q=w,J=w+X;q<J;q+=3)m(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new L,R=new L,z=new L,N=new L;function I(H){z.fromBufferAttribute(s,H),N.copy(z);const te=a[H];b.copy(te),b.sub(z.multiplyScalar(z.dot(te))).normalize(),R.crossVectors(N,te);const w=R.dot(c[H])<0?-1:1;o.setXYZW(H,b.x,b.y,b.z,w)}for(let H=0,te=C.length;H<te;++H){const y=C[H],w=y.start,X=y.count;for(let q=w,J=w+X;q<J;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,_=t.count;f<_;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let _=0,v=0;for(let E=0,g=c.length;E<g;E++){a.isInterleavedBufferAttribute?_=c[E]*a.data.stride+a.offset:_=c[E]*h;for(let m=0;m<h;m++)f[v++]=l[_++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],_=e(f,n);c.push(_)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const _=l[u];h.push(_.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,_=u.length;f<_;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new Xe,Di=new gr,Fr=new kn,wl=new L,Br=new L,kr=new L,zr=new L,sa=new L,Hr=new L,Rl=new L,Vr=new L;class vt extends dt{constructor(e=new yt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(sa.fromBufferAttribute(u,e),o?Hr.addScaledVector(sa,h):Hr.addScaledVector(sa.sub(t),h))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Fr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Fr,wl)===null||Di.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(Al.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=f.length;v<E;v++){const g=f[v],m=o[g.materialIndex],C=Math.max(g.start,_.start),b=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let R=C,z=b;R<z;R+=3){const N=a.getX(R),I=a.getX(R+1),H=a.getX(R+2);s=Gr(this,m,e,n,l,h,u,N,I,H),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),E=Math.min(a.count,_.start+_.count);for(let g=v,m=E;g<m;g+=3){const C=a.getX(g),b=a.getX(g+1),R=a.getX(g+2);s=Gr(this,o,e,n,l,h,u,C,b,R),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,E=f.length;v<E;v++){const g=f[v],m=o[g.materialIndex],C=Math.max(g.start,_.start),b=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let R=C,z=b;R<z;R+=3){const N=R,I=R+1,H=R+2;s=Gr(this,m,e,n,l,h,u,N,I,H),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let g=v,m=E;g<m;g+=3){const C=g,b=g+1,R=g+2;s=Gr(this,o,e,n,l,h,u,C,b,R),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function vf(i,e,t,n,s,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ai,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:i}}function Gr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Br),i.getVertexPosition(c,kr),i.getVertexPosition(l,zr);const h=vf(i,e,t,n,Br,kr,zr,Rl);if(h){const u=new L;wn.getBarycoord(Rl,Br,kr,zr,u),s&&(h.uv=wn.getInterpolatedAttribute(s,a,c,l,u,new Ne)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,c,l,u,new Ne)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};wn.getNormal(Br,kr,zr,f.normal),h.face=f,h.barycoord=u}return h}class Us extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,_=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function v(E,g,m,C,b,R,z,N,I,H,te){const y=R/I,w=z/H,X=R/2,q=z/2,J=N/2,se=I+1,K=H+1;let oe=0,$=0;const ge=new L;for(let _e=0;_e<K;_e++){const be=_e*w-q;for(let Be=0;Be<se;Be++){const Ve=Be*y-X;ge[E]=Ve*C,ge[g]=be*b,ge[m]=J,l.push(ge.x,ge.y,ge.z),ge[E]=0,ge[g]=0,ge[m]=N>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Be/I),u.push(1-_e/H),oe+=1}}for(let _e=0;_e<H;_e++)for(let be=0;be<I;be++){const Be=f+be+se*_e,Ve=f+be+se*(_e+1),Q=f+(be+1)+se*(_e+1),ce=f+(be+1)+se*_e;c.push(Be,Ve,ce),c.push(Ve,Q,ce),$+=6}a.addGroup(_,$,te),_+=$,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function Sf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function su(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const yf={clone:Rs,merge:qt};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ru extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new L,Cl=new Ne,Pl=new Ne;class Zt extends ru{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Pl),t.subVectors(Pl,Cl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,hs=1;class Tf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(ls,hs,e,t);s.layers=this.layers,this.add(s);const r=new Zt(ls,hs,e,t);r.layers=this.layers,this.add(r);const o=new Zt(ls,hs,e,t);o.layers=this.layers,this.add(o);const a=new Zt(ls,hs,e,t);a.layers=this.layers,this.add(a);const c=new Zt(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new Zt(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ou extends zt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ou(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:bi});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===Un&&(t.minFilter=kt),new Tf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ra=new L,Af=new L,wf=new Ke;class Ei{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ra.subVectors(n,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wf.getNormalMatrix(e),s=this.coplanarPoint(ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new kn,Wr=new L;class Dc{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],_=s[8],v=s[9],E=s[10],g=s[11],m=s[12],C=s[13],b=s[14],R=s[15];if(n[0].setComponents(c-r,f-l,g-_,R-m).normalize(),n[1].setComponents(c+r,f+l,g+_,R+m).normalize(),n[2].setComponents(c+o,f+h,g+v,R+C).normalize(),n[3].setComponents(c-o,f-h,g-v,R-C).normalize(),n[4].setComponents(c-a,f-u,g-E,R-b).normalize(),t===si)n[5].setComponents(c+a,f+u,g+E,R+b).normalize();else if(t===Mo)n[5].setComponents(a,u,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rf(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((_,v)=>_.start-v.start);let f=0;for(let _=1;_<u.length;_++){const v=u[f],E=u[_];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,u[f]=E)}u.length=f+1;for(let _=0,v=u.length;_<v;_++){const E=u[_];i.bufferSubData(l,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Co extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,_=[],v=[],E=[],g=[];for(let m=0;m<h;m++){const C=m*f-o;for(let b=0;b<l;b++){const R=b*u-r;v.push(R,-C,0),E.push(0,0,1),g.push(b/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<a;C++){const b=C+l*m,R=C+l*(m+1),z=C+1+l*(m+1),N=C+1+l*m;_.push(b,R,N),_.push(R,z,N)}this.setIndex(_),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(E,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jf=`#define PI 3.141592653589793
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`
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
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,tg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:If,alphatest_fragment:Df,alphatest_pars_fragment:Nf,aomap_fragment:Uf,aomap_pars_fragment:Of,batching_pars_vertex:Ff,batching_vertex:Bf,begin_vertex:kf,beginnormal_vertex:zf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Yf,color_fragment:qf,color_pars_fragment:Kf,color_pars_vertex:Zf,color_vertex:$f,common:Jf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:op,envmap_fragment:ap,envmap_common_pars_fragment:cp,envmap_pars_fragment:lp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:yp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:_p,lights_lambert_fragment:xp,lights_lambert_pars_fragment:vp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Mp,lights_phong_fragment:Tp,lights_phong_pars_fragment:bp,lights_physical_fragment:Ap,lights_physical_pars_fragment:wp,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Np,map_fragment:Up,map_pars_fragment:Op,map_particle_fragment:Fp,map_particle_pars_fragment:Bp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:jp,normal_fragment_maps:Yp,normal_pars_fragment:qp,normal_pars_vertex:Kp,normal_vertex:Zp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:em,iridescence_pars_fragment:tm,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:om,dithering_pars_fragment:am,roughnessmap_fragment:cm,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:um,shadowmap_vertex:dm,shadowmask_pars_fragment:fm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:_m,specularmap_fragment:xm,specularmap_pars_fragment:vm,tonemapping_fragment:Sm,tonemapping_pars_fragment:ym,transmission_fragment:Em,transmission_pars_fragment:Mm,uv_pars_fragment:Tm,uv_pars_vertex:bm,uv_vertex:Am,worldpos_vertex:wm,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Lm,cube_vert:Im,cube_frag:Dm,depth_vert:Nm,depth_frag:Um,distanceRGBA_vert:Om,distanceRGBA_frag:Fm,equirect_vert:Bm,equirect_frag:km,linedashed_vert:zm,linedashed_frag:Hm,meshbasic_vert:Vm,meshbasic_frag:Gm,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:jm,meshmatcap_frag:Ym,meshnormal_vert:qm,meshnormal_frag:Km,meshphong_vert:Zm,meshphong_frag:$m,meshphysical_vert:Jm,meshphysical_frag:Qm,meshtoon_vert:eg,meshtoon_frag:tg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:og,sprite_frag:ag},ve={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Dn={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Dn.physical={uniforms:qt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Xr={r:0,b:0,g:0},Ui=new xn,cg=new Xe;function lg(i,e,t,n,s,r,o){const a=new Ue(0);let c=r===!0?0:1,l,h,u=null,f=0,_=null;function v(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function E(C){let b=!1;const R=v(C);R===null?m(a,c):R&&R.isColor&&(m(R,1),b=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,b){const R=v(b);R&&(R.isCubeTexture||R.mapping===Ao)?(h===void 0&&(h=new vt(new Us(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Rs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(b.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Ui)),h.material.toneMapped=ut.getTransfer(R.colorSpace)!==Et,(u!==R||f!==R.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,_=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new vt(new Co(2,2),new Bn({name:"BackgroundMaterial",uniforms:Rs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ut.getTransfer(R.colorSpace)!==Et,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,_=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,b){C.getRGB(Xr,su(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(C,b=1){a.set(C),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,m(a,c)},render:E,addToRenderList:g}}function hg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,w,X,q,J){let se=!1;const K=u(q,X,w);r!==K&&(r=K,l(r.object)),se=_(y,q,X,J),se&&v(y,q,X,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,R(y,w,X,q),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,w,X){const q=X.wireframe===!0;let J=n[y.id];J===void 0&&(J={},n[y.id]=J);let se=J[w.id];se===void 0&&(se={},J[w.id]=se);let K=se[q];return K===void 0&&(K=f(c()),se[q]=K),K}function f(y){const w=[],X=[],q=[];for(let J=0;J<t;J++)w[J]=0,X[J]=0,q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:X,attributeDivisors:q,object:y,attributes:{},index:null}}function _(y,w,X,q){const J=r.attributes,se=w.attributes;let K=0;const oe=X.getAttributes();for(const $ in oe)if(oe[$].location>=0){const _e=J[$];let be=se[$];if(be===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;K++}return r.attributesNum!==K||r.index!==q}function v(y,w,X,q){const J={},se=w.attributes;let K=0;const oe=X.getAttributes();for(const $ in oe)if(oe[$].location>=0){let _e=se[$];_e===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),J[$]=be,K++}r.attributes=J,r.attributesNum=K,r.index=q}function E(){const y=r.newAttributes;for(let w=0,X=y.length;w<X;w++)y[w]=0}function g(y){m(y,0)}function m(y,w){const X=r.newAttributes,q=r.enabledAttributes,J=r.attributeDivisors;X[y]=1,q[y]===0&&(i.enableVertexAttribArray(y),q[y]=1),J[y]!==w&&(i.vertexAttribDivisor(y,w),J[y]=w)}function C(){const y=r.newAttributes,w=r.enabledAttributes;for(let X=0,q=w.length;X<q;X++)w[X]!==y[X]&&(i.disableVertexAttribArray(X),w[X]=0)}function b(y,w,X,q,J,se,K){K===!0?i.vertexAttribIPointer(y,w,X,J,se):i.vertexAttribPointer(y,w,X,q,J,se)}function R(y,w,X,q){E();const J=q.attributes,se=X.getAttributes(),K=w.defaultAttributeValues;for(const oe in se){const $=se[oe];if($.location>=0){let ge=J[oe];if(ge===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const _e=ge.normalized,be=ge.itemSize,Be=e.get(ge);if(Be===void 0)continue;const Ve=Be.buffer,Q=Be.type,ce=Be.bytesPerElement,de=Q===i.INT||Q===i.UNSIGNED_INT||ge.gpuType===bc;if(ge.isInterleavedBufferAttribute){const D=ge.data,le=D.stride,ye=ge.offset;if(D.isInstancedInterleavedBuffer){for(let Fe=0;Fe<$.locationSize;Fe++)m($.location+Fe,D.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Fe=0;Fe<$.locationSize;Fe++)g($.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Fe=0;Fe<$.locationSize;Fe++)b($.location+Fe,be/$.locationSize,Q,_e,le*ce,(ye+be/$.locationSize*Fe)*ce,de)}else{if(ge.isInstancedBufferAttribute){for(let D=0;D<$.locationSize;D++)m($.location+D,ge.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let D=0;D<$.locationSize;D++)g($.location+D);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let D=0;D<$.locationSize;D++)b($.location+D,be/$.locationSize,Q,_e,be*ce,be/$.locationSize*D*ce,de)}}else if(K!==void 0){const _e=K[oe];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv($.location,_e);break;case 3:i.vertexAttrib3fv($.location,_e);break;case 4:i.vertexAttrib4fv($.location,_e);break;default:i.vertexAttrib1fv($.location,_e)}}}}C()}function z(){H();for(const y in n){const w=n[y];for(const X in w){const q=w[X];for(const J in q)h(q[J].object),delete q[J];delete w[X]}delete n[y]}}function N(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const X in w){const q=w[X];for(const J in q)h(q[J].object),delete q[J];delete w[X]}delete n[y.id]}function I(y){for(const w in n){const X=n[w];if(X[y.id]===void 0)continue;const q=X[y.id];for(const J in q)h(q[J].object),delete q[J];delete X[y.id]}}function H(){te(),o=!0,r!==s&&(r=s,l(r.object))}function te(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:te,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:g,disableUnusedAttributes:C}}function ug(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v];t.update(_,n,1)}function c(l,h,u,f){if(u===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<l.length;v++)o(l[v],h[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let v=0;for(let E=0;E<u;E++)v+=h[E];for(let E=0;E<f.length;E++)t.update(v,n,f[E])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const H=I===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ci&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==nn&&!H)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=v>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:z,maxSamples:N}}function fg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ei,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const _=u.length!==0||f||n!==0||s;return s=f,n=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,_){const v=u.clippingPlanes,E=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):l();else{const C=r?0:n,b=C*4;let R=m.clippingState||null;c.value=R,R=h(v,f,b,_);for(let z=0;z!==b;++z)R[z]=t[z];m.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,_,v){const E=u!==null?u.length:0;let g=null;if(E!==0){if(g=c.value,v!==!0||g===null){const m=_+E*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,R=_;b!==E;++b,R+=4)o.copy(u[b]).applyMatrix4(C,a),o.normal.toArray(g,R),g[R+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function pg(i){let e=new WeakMap;function t(o,a){return a===ar?o.mapping=Es:a===Ha&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ar||a===Ha)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Nc extends ru{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ms=4,Ll=[.125,.215,.35,.446,.526,.582],Hi=20,oa=new Nc,Il=new Ue;let aa=null,ca=0,la=0,ha=!1;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,Dl=[new L(-Bi,us,0),new L(Bi,us,0),new L(-us,0,Bi),new L(us,0,Bi),new L(0,Bi,-us),new L(0,Bi,us),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,ca,la),this._renderer.xr.enabled=ha,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:ii,format:cn,colorSpace:Nt,depthBuffer:!1},s=Ul(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(r)),this._blurMaterial=gg(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,s){const a=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Il),h.toneMapping=Ai,h.autoClear=!1;const _=new Cn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new vt(new Us,_);let E=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,E=!0):(_.color.copy(Il),E=!0);for(let m=0;m<6;m++){const C=m%3;C===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):C===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const b=this._cubeSize;jr(s,C*b,m>2?b:0,b,b),h.setRenderTarget(s),E&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Es||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dl[(s-r-1)%Dl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[s],l),f=l.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Hi-1),E=r/v,g=isFinite(r)?1+Math.floor(h*E):Hi;g>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const m=[];let C=0;for(let I=0;I<Hi;++I){const H=I/E,te=Math.exp(-H*H/2);m.push(te),I===0?C+=te:I<g&&(C+=2*te)}for(let I=0;I<m.length;I++)m[I]=m[I]/C;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=v,f.mipInt.value=b-n;const R=this._sizeLods[s],z=3*R*(s>b-ms?s-b+ms:0),N=4*(this._cubeSize-R);jr(t,z,N,3*R,2*R),c.setRenderTarget(t),c.render(u,oa)}}function mg(i){const e=[],t=[],n=[];let s=i;const r=i-ms+1+Ll.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ms?c=Ll[o-i+ms-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],_=6,v=6,E=3,g=2,m=1,C=new Float32Array(E*v*_),b=new Float32Array(g*v*_),R=new Float32Array(m*v*_);for(let N=0;N<_;N++){const I=N%3*2/3-1,H=N>2?0:-1,te=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];C.set(te,E*v*N),b.set(f,g*v*N);const y=[N,N,N,N,N,N];R.set(y,m*v*N)}const z=new yt;z.setAttribute("position",new At(C,E)),z.setAttribute("uv",new At(b,g)),z.setAttribute("faceIndex",new At(R,m)),e.push(z),s>ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ul(i,e,t){const n=new Yi(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gg(i,e,t){const n=new Float32Array(Hi),s=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ol(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Fl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function _g(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ar||c===Ha,h=c===Es||c===Ms;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Nl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const _=a.image;return l&&_&&_.height>0||h&&_&&s(_)?(t===null&&(t=new Nl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&go("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vg(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const E=f.morphAttributes[v];for(let g=0,m=E.length;g<m;g++)e.remove(E[g])}f.removeEventListener("dispose",o),delete s[f.id];const _=r.get(f);_&&(e.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const _=u.morphAttributes;for(const v in _){const E=_[v];for(let g=0,m=E.length;g<m;g++)e.update(E[g],i.ARRAY_BUFFER)}}function l(u){const f=[],_=u.index,v=u.attributes.position;let E=0;if(_!==null){const C=_.array;E=_.version;for(let b=0,R=C.length;b<R;b+=3){const z=C[b+0],N=C[b+1],I=C[b+2];f.push(z,N,N,I,I,z)}}else if(v!==void 0){const C=v.array;E=v.version;for(let b=0,R=C.length/3-1;b<R;b+=3){const z=b+0,N=b+1,I=b+2;f.push(z,N,N,I,I,z)}}else return;const g=new($h(f)?iu:nu)(f,1);g.version=E;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const f=r.get(u);if(f){const _=u.index;_!==null&&f.version<_.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Sg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,_){i.drawElements(n,_,r,f*o),t.update(_,n,1)}function l(f,_,v){v!==0&&(i.drawElementsInstanced(n,_,r,f*o,v),t.update(_,n,v))}function h(f,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,f,0,v);let g=0;for(let m=0;m<v;m++)g+=_[m];t.update(g,n,1)}function u(f,_,v,E){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,_[m],E[m]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,r,f,0,E,0,v);let m=0;for(let C=0;C<v;C++)m+=_[C];for(let C=0;C<E.length;C++)t.update(m,n,E[C])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Eg(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var _=y;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let R=0;v===!0&&(R=1),E===!0&&(R=2),g===!0&&(R=3);let z=a.attributes.position.count*R,N=1;z>e.maxTextureSize&&(N=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*N*4*u),H=new Qh(I,z,N,u);H.type=nn,H.needsUpdate=!0;const te=R*4;for(let w=0;w<u;w++){const X=m[w],q=C[w],J=b[w],se=z*N*4*w;for(let K=0;K<X.count;K++){const oe=K*te;v===!0&&(s.fromBufferAttribute(X,K),I[se+oe+0]=s.x,I[se+oe+1]=s.y,I[se+oe+2]=s.z,I[se+oe+3]=0),E===!0&&(s.fromBufferAttribute(q,K),I[se+oe+4]=s.x,I[se+oe+5]=s.y,I[se+oe+6]=s.z,I[se+oe+7]=0),g===!0&&(s.fromBufferAttribute(J,K),I[se+oe+8]=s.x,I[se+oe+9]=s.y,I[se+oe+10]=s.z,I[se+oe+11]=J.itemSize===4?s.w:1)}}f={count:u,texture:H,size:new Ne(z,N)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<l.length;g++)v+=l[g];const E=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Mg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class cu extends zt{constructor(e,t,n,s,r,o,a,c,l,h=xs){if(h!==xs&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=ji),n===void 0&&h===As&&(n=bs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lu=new zt,Bl=new cu(1,1),hu=new Qh,uu=new of,du=new ou,kl=[],zl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function Os(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=kl[s];if(r===void 0&&(r=new Float32Array(s),kl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Po(i,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),Ot(t,n)}}function Cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),Ot(t,n)}}function Pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Ot(t,n)}}function Lg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=Zh,r=Bl):r=lu,t.setTexture2D(e||r,s)}function zg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uu,s)}function Hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||du,s)}function Vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hu,s)}function Gg(i){switch(i){case 5126:return Tg;case 35664:return bg;case 35665:return Ag;case 35666:return wg;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(i,e){i.uniform1fv(this.addr,e)}function Xg(i,e){const t=Os(e,this.size,2);i.uniform2fv(this.addr,t)}function jg(i,e){const t=Os(e,this.size,3);i.uniform3fv(this.addr,t)}function Yg(i,e){const t=Os(e,this.size,4);i.uniform4fv(this.addr,t)}function qg(i,e){const t=Os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kg(i,e){const t=Os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zg(i,e){const t=Os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $g(i,e){i.uniform1iv(this.addr,e)}function Jg(i,e){i.uniform2iv(this.addr,e)}function Qg(i,e){i.uniform3iv(this.addr,e)}function e_(i,e){i.uniform4iv(this.addr,e)}function t_(i,e){i.uniform1uiv(this.addr,e)}function n_(i,e){i.uniform2uiv(this.addr,e)}function i_(i,e){i.uniform3uiv(this.addr,e)}function s_(i,e){i.uniform4uiv(this.addr,e)}function r_(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||lu,r[o])}function o_(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||uu,r[o])}function a_(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||du,r[o])}function c_(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hu,r[o])}function l_(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return jg;case 35666:return Yg;case 35674:return qg;case 35675:return Kg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return c_}}class h_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}}class u_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l_(t.type)}}class d_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Wl(i,e){i.seq.push(e),i.map[e.id]=e}function f_(i,e,t){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wl(t,l===void 0?new h_(a,i,e):new u_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new d_(a),Wl(t,u)),t=u}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);f_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const p_=37297;let m_=0;function g_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function __(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===Eo&&t===yo?n="LinearDisplayP3ToLinearSRGB":e===yo&&t===Eo&&(n="LinearSRGBToLinearDisplayP3"),i){case Nt:case Ro:return[n,"LinearTransferOETF"];case bt:case Lc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+g_(i.getShaderSource(e),o)}else return s}function x_(i,e){const t=__(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function v_(i,e){let t;switch(e){case pd:t="Linear";break;case md:t="Reinhard";break;case gd:t="Cineon";break;case _d:t="ACESFilmic";break;case vd:t="AgX";break;case Sd:t="Neutral";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new L;function S_(){ut.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function E_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function tr(i){return i!==""}function Yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(T_,A_)}const b_=new Map;function A_(i,e){let t=qe[e];if(t===void 0){const n=b_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(w_,R_)}function R_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function C_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ms:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function I_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case dd:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function D_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=C_(t),l=P_(t),h=L_(t),u=I_(t),f=D_(t),_=y_(t),v=E_(r),E=s.createProgram();let g,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(tr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(tr).join(`
`),m.length>0&&(m+=`
`)):(g=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ai?v_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=gc(o),o=Yl(o,t),o=ql(o,t),a=gc(a),a=Yl(a,t),a=ql(a,t),o=Kl(o),a=Kl(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=C+g+o,R=C+m+a,z=Xl(s,s.VERTEX_SHADER,b),N=Xl(s,s.FRAGMENT_SHADER,R);s.attachShader(E,z),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(w){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(E).trim(),q=s.getShaderInfoLog(z).trim(),J=s.getShaderInfoLog(N).trim();let se=!0,K=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,z,N);else{const oe=jl(s,z,"vertex"),$=jl(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+oe+`
`+$)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(q===""||J==="")&&(K=!1);K&&(w.diagnostics={runnable:se,programLog:X,vertexShader:{log:q,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(z),s.deleteShader(N),H=new _o(s,E),te=M_(s,E)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let te;this.getAttributes=function(){return te===void 0&&I(this),te};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(E,p_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=N,this}let U_=0;class O_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new F_(e),t.set(e,n)),n}}class F_{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function B_(i,e,t,n,s,r,o){const a=new eu,c=new O_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,_=s.vertexTextures;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,X,q,J){const se=q.fog,K=J.geometry,oe=y.isMeshStandardMaterial?q.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||oe),ge=$&&$.mapping===Ao?$.image.height:null,_e=E[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Be=be!==void 0?be.length:0;let Ve=0;K.morphAttributes.position!==void 0&&(Ve=1),K.morphAttributes.normal!==void 0&&(Ve=2),K.morphAttributes.color!==void 0&&(Ve=3);let Q,ce,de,D;if(_e){const Wt=Dn[_e];Q=Wt.vertexShader,ce=Wt.fragmentShader}else Q=y.vertexShader,ce=y.fragmentShader,c.update(y),de=c.getVertexShaderID(y),D=c.getFragmentShaderID(y);const le=i.getRenderTarget(),ye=J.isInstancedMesh===!0,Fe=J.isBatchedMesh===!0,at=!!y.map,Je=!!y.matcap,F=!!$,Vt=!!y.aoMap,Qe=!!y.lightMap,ct=!!y.bumpMap,ke=!!y.normalMap,St=!!y.displacementMap,He=!!y.emissiveMap,P=!!y.metalnessMap,T=!!y.roughnessMap,W=y.anisotropy>0,ie=y.clearcoat>0,ue=y.dispersion>0,ne=y.iridescence>0,Ie=y.sheen>0,Se=y.transmission>0,Ae=W&&!!y.anisotropyMap,et=ie&&!!y.clearcoatMap,me=ie&&!!y.clearcoatNormalMap,Re=ie&&!!y.clearcoatRoughnessMap,ze=ne&&!!y.iridescenceMap,De=ne&&!!y.iridescenceThicknessMap,xe=Ie&&!!y.sheenColorMap,tt=Ie&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,Ye=!!y.specularColorMap,B=!!y.specularIntensityMap,Me=Se&&!!y.transmissionMap,k=Se&&!!y.thicknessMap,re=!!y.gradientMap,Ee=!!y.alphaMap,Te=y.alphaTest>0,st=!!y.alphaHash,wt=!!y.extensions;let Gt=Ai;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const lt={shaderID:_e,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:ce,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Fe,batchingColor:Fe&&J._colorsTexture!==null,instancing:ye,instancingColor:ye&&J.instanceColor!==null,instancingMorph:ye&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Nt,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:Je,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:ge,aoMap:Vt,lightMap:Qe,bumpMap:ct,normalMap:ke,displacementMap:_&&St,emissiveMap:He,normalMapObjectSpace:ke&&y.normalMapType===Ad,normalMapTangentSpace:ke&&y.normalMapType===Kh,metalnessMap:P,roughnessMap:T,anisotropy:W,anisotropyMap:Ae,clearcoat:ie,clearcoatMap:et,clearcoatNormalMap:me,clearcoatRoughnessMap:Re,dispersion:ue,iridescence:ne,iridescenceMap:ze,iridescenceThicknessMap:De,sheen:Ie,sheenColorMap:xe,sheenRoughnessMap:tt,specularMap:Oe,specularColorMap:Ye,specularIntensityMap:B,transmission:Se,transmissionMap:Me,thicknessMap:k,gradientMap:re,opaque:y.transparent===!1&&y.blending===_s&&y.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Te,alphaHash:st,combine:y.combine,mapUv:at&&g(y.map.channel),aoMapUv:Vt&&g(y.aoMap.channel),lightMapUv:Qe&&g(y.lightMap.channel),bumpMapUv:ct&&g(y.bumpMap.channel),normalMapUv:ke&&g(y.normalMap.channel),displacementMapUv:St&&g(y.displacementMap.channel),emissiveMapUv:He&&g(y.emissiveMap.channel),metalnessMapUv:P&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:Ae&&g(y.anisotropyMap.channel),clearcoatMapUv:et&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:tt&&g(y.sheenRoughnessMap.channel),specularMapUv:Oe&&g(y.specularMap.channel),specularColorMapUv:Ye&&g(y.specularColorMap.channel),specularIntensityMapUv:B&&g(y.specularIntensityMap.channel),transmissionMapUv:Me&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:Ee&&g(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ke||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(at||Ee),fog:!!se,useFog:y.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function C(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const X in y.defines)w.push(X),w.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(b(w,y),R(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function R(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function z(y){const w=E[y.type];let X;if(w){const q=Dn[w];X=yf.clone(q.uniforms)}else X=y.uniforms;return X}function N(y,w){let X;for(let q=0,J=h.length;q<J;q++){const se=h[q];if(se.cacheKey===w){X=se,++X.usedTimes;break}}return X===void 0&&(X=new N_(i,w,y,r),h.push(X)),X}function I(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function H(y){c.remove(y)}function te(){c.dispose()}return{getParameters:m,getProgramCacheKey:C,getUniforms:z,acquireProgram:N,releaseProgram:I,releaseShaderCache:H,programs:h,dispose:te}}function k_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function z_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $l(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,_,v,E,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:_,groupOrder:v,renderOrder:u.renderOrder,z:E,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=_,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=E,m.group=g),e++,m}function a(u,f,_,v,E,g){const m=o(u,f,_,v,E,g);_.transmission>0?n.push(m):_.transparent===!0?s.push(m):t.push(m)}function c(u,f,_,v,E,g){const m=o(u,f,_,v,E,g);_.transmission>0?n.unshift(m):_.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||z_),n.length>1&&n.sort(f||$l),s.length>1&&s.sort(f||$l)}function h(){for(let u=e,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function H_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jl,i.set(n,[o])):s>=r.length?(o=new Jl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function V_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ue};break;case"SpotLight":t={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function G_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let W_=0;function X_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j_(i){const e=new V_,t=G_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Xe,o=new Xe;function a(l){let h=0,u=0,f=0;for(let te=0;te<9;te++)n.probe[te].set(0,0,0);let _=0,v=0,E=0,g=0,m=0,C=0,b=0,R=0,z=0,N=0,I=0;l.sort(X_);for(let te=0,y=l.length;te<y;te++){const w=l[te],X=w.color,q=w.intensity,J=w.distance,se=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=X.r*q,u+=X.g*q,f+=X.b*q;else if(w.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(w.sh.coefficients[K],q);I++}else if(w.isDirectionalLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const oe=w.shadow,$=t.get(w);$.shadowIntensity=oe.intensity,$.shadowBias=oe.bias,$.shadowNormalBias=oe.normalBias,$.shadowRadius=oe.radius,$.shadowMapSize=oe.mapSize,n.directionalShadow[_]=$,n.directionalShadowMap[_]=se,n.directionalShadowMatrix[_]=w.shadow.matrix,C++}n.directional[_]=K,_++}else if(w.isSpotLight){const K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(X).multiplyScalar(q),K.distance=J,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,n.spot[E]=K;const oe=w.shadow;if(w.map&&(n.spotLightMap[z]=w.map,z++,oe.updateMatrices(w),w.castShadow&&N++),n.spotLightMatrix[E]=oe.matrix,w.castShadow){const $=t.get(w);$.shadowIntensity=oe.intensity,$.shadowBias=oe.bias,$.shadowNormalBias=oe.normalBias,$.shadowRadius=oe.radius,$.shadowMapSize=oe.mapSize,n.spotShadow[E]=$,n.spotShadowMap[E]=se,R++}E++}else if(w.isRectAreaLight){const K=e.get(w);K.color.copy(X).multiplyScalar(q),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=K,g++}else if(w.isPointLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),K.distance=w.distance,K.decay=w.decay,w.castShadow){const oe=w.shadow,$=t.get(w);$.shadowIntensity=oe.intensity,$.shadowBias=oe.bias,$.shadowNormalBias=oe.normalBias,$.shadowRadius=oe.radius,$.shadowMapSize=oe.mapSize,$.shadowCameraNear=oe.camera.near,$.shadowCameraFar=oe.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=se,n.pointShadowMatrix[v]=w.shadow.matrix,b++}n.point[v]=K,v++}else if(w.isHemisphereLight){const K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(q),K.groundColor.copy(w.groundColor).multiplyScalar(q),n.hemi[m]=K,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const H=n.hash;(H.directionalLength!==_||H.pointLength!==v||H.spotLength!==E||H.rectAreaLength!==g||H.hemiLength!==m||H.numDirectionalShadows!==C||H.numPointShadows!==b||H.numSpotShadows!==R||H.numSpotMaps!==z||H.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=R+z-N,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,H.directionalLength=_,H.pointLength=v,H.spotLength=E,H.rectAreaLength=g,H.hemiLength=m,H.numDirectionalShadows=C,H.numPointShadows=b,H.numSpotShadows=R,H.numSpotMaps=z,H.numLightProbes=I,n.version=W_++)}function c(l,h){let u=0,f=0,_=0,v=0,E=0;const g=h.matrixWorldInverse;for(let m=0,C=l.length;m<C;m++){const b=l[m];if(b.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),u++}else if(b.isSpotLight){const R=n.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const R=n.rectArea[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const R=n.hemi[E];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(g),E++}}}return{setup:a,setupView:c,state:n}}function Ql(i){const e=new j_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Y_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ql(i),e.set(s,[a])):r>=o.length?(a=new Ql(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class q_ extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K_ extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`;function J_(i,e,t){let n=new Dc;const s=new Ne,r=new Ne,o=new pt,a=new q_({depthPacking:bd}),c=new K_,l={},h=t.maxTextureSize,u={[ai]:sn,[sn]:ai,[fn]:fn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Z_,fragmentShader:$_}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new yt;v.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new vt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let m=this.type;this.render=function(N,I,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const te=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),X=i.state;X.setBlending(bi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const q=m!==$n&&this.type===$n,J=m===$n&&this.type!==$n;for(let se=0,K=N.length;se<K;se++){const oe=N[se],$=oe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ge=$.getFrameExtents();if(s.multiply(ge),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,$.mapSize.y=r.y)),$.map===null||q===!0||J===!0){const be=this.type!==$n?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new Yi(s.x,s.y,be),$.map.texture.name=oe.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const _e=$.getViewportCount();for(let be=0;be<_e;be++){const Be=$.getViewport(be);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),X.viewport(o),$.updateMatrices(oe,be),n=$.getFrustum(),R(I,H,$.camera,oe,this.type)}$.isPointLightShadow!==!0&&this.type===$n&&C($,H),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(te,y,w)};function C(N,I){const H=e.update(E);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Yi(s.x,s.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(I,null,H,f,E,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(I,null,H,_,E,null)}function b(N,I,H,te){let y=null;const w=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(w!==void 0)y=w;else if(y=H.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=y.uuid,q=I.uuid;let J=l[X];J===void 0&&(J={},l[X]=J);let se=J[q];se===void 0&&(se=y.clone(),J[q]=se,I.addEventListener("dispose",z)),y=se}if(y.visible=I.visible,y.wireframe=I.wireframe,te===$n?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:u[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,H.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=i.properties.get(y);X.light=H}return y}function R(N,I,H,te,y){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&y===$n)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const q=e.update(N),J=N.material;if(Array.isArray(J)){const se=q.groups;for(let K=0,oe=se.length;K<oe;K++){const $=se[K],ge=J[$.materialIndex];if(ge&&ge.visible){const _e=b(N,ge,te,y);N.onBeforeShadow(i,N,I,H,q,_e,$),i.renderBufferDirect(H,null,q,_e,N,$),N.onAfterShadow(i,N,I,H,q,_e,$)}}}else if(J.visible){const se=b(N,J,te,y);N.onBeforeShadow(i,N,I,H,q,se,null),i.renderBufferDirect(H,null,q,se,N,null),N.onAfterShadow(i,N,I,H,q,se,null)}}const X=N.children;for(let q=0,J=X.length;q<J;q++)R(X[q],I,H,te,y)}function z(N){N.target.removeEventListener("dispose",z);for(const H in l){const te=l[H],y=N.target.uuid;y in te&&(te[y].dispose(),delete te[y])}}}const Q_={[Na]:Ua,[Oa]:ka,[Fa]:za,[ys]:Ba,[Ua]:Na,[ka]:Oa,[za]:Fa,[Ba]:ys};function e0(i){function e(){let B=!1;const Me=new pt;let k=null;const re=new pt(0,0,0,0);return{setMask:function(Ee){k!==Ee&&!B&&(i.colorMask(Ee,Ee,Ee,Ee),k=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,Te,st,wt,Gt){Gt===!0&&(Ee*=wt,Te*=wt,st*=wt),Me.set(Ee,Te,st,wt),re.equals(Me)===!1&&(i.clearColor(Ee,Te,st,wt),re.copy(Me))},reset:function(){B=!1,k=null,re.set(-1,0,0,0)}}}function t(){let B=!1,Me=!1,k=null,re=null,Ee=null;return{setReversed:function(Te){Me=Te},setTest:function(Te){Te?de(i.DEPTH_TEST):D(i.DEPTH_TEST)},setMask:function(Te){k!==Te&&!B&&(i.depthMask(Te),k=Te)},setFunc:function(Te){if(Me&&(Te=Q_[Te]),re!==Te){switch(Te){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Te}},setLocked:function(Te){B=Te},setClear:function(Te){Ee!==Te&&(i.clearDepth(Te),Ee=Te)},reset:function(){B=!1,k=null,re=null,Ee=null}}}function n(){let B=!1,Me=null,k=null,re=null,Ee=null,Te=null,st=null,wt=null,Gt=null;return{setTest:function(lt){B||(lt?de(i.STENCIL_TEST):D(i.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!B&&(i.stencilMask(lt),Me=lt)},setFunc:function(lt,Wt,vn){(k!==lt||re!==Wt||Ee!==vn)&&(i.stencilFunc(lt,Wt,vn),k=lt,re=Wt,Ee=vn)},setOp:function(lt,Wt,vn){(Te!==lt||st!==Wt||wt!==vn)&&(i.stencilOp(lt,Wt,vn),Te=lt,st=Wt,wt=vn)},setLocked:function(lt){B=lt},setClear:function(lt){Gt!==lt&&(i.clearStencil(lt),Gt=lt)},reset:function(){B=!1,Me=null,k=null,re=null,Ee=null,Te=null,st=null,wt=null,Gt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],_=null,v=!1,E=null,g=null,m=null,C=null,b=null,R=null,z=null,N=new Ue(0,0,0),I=0,H=!1,te=null,y=null,w=null,X=null,q=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,K=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(oe)[1]),se=K>=1):oe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),se=K>=2);let $=null,ge={};const _e=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Be=new pt().fromArray(_e),Ve=new pt().fromArray(be);function Q(B,Me,k,re){const Ee=new Uint8Array(4),Te=i.createTexture();i.bindTexture(B,Te),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<k;st++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Me+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Te}const ce={};ce[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),de(i.DEPTH_TEST),r.setFunc(ys),Qe(!1),ct(il),de(i.CULL_FACE),F(bi);function de(B){l[B]!==!0&&(i.enable(B),l[B]=!0)}function D(B){l[B]!==!1&&(i.disable(B),l[B]=!1)}function le(B,Me){return h[B]!==Me?(i.bindFramebuffer(B,Me),h[B]=Me,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function ye(B,Me){let k=f,re=!1;if(B){k=u.get(Me),k===void 0&&(k=[],u.set(Me,k));const Ee=B.textures;if(k.length!==Ee.length||k[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,st=Ee.length;Te<st;Te++)k[Te]=i.COLOR_ATTACHMENT0+Te;k.length=Ee.length,re=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,re=!0);re&&i.drawBuffers(k)}function Fe(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const at={[zi]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};at[$u]=i.MIN,at[Ju]=i.MAX;const Je={[Qu]:i.ZERO,[ed]:i.ONE,[td]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[rd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,Me,k,re,Ee,Te,st,wt,Gt,lt){if(B===bi){v===!0&&(D(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),B!==qu){if(B!==E||lt!==H){if((g!==zi||b!==zi)&&(i.blendEquation(i.FUNC_ADD),g=zi,b=zi),lt)switch(B){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,C=null,R=null,z=null,N.set(0,0,0),I=0,E=B,H=lt}return}Ee=Ee||Me,Te=Te||k,st=st||re,(Me!==g||Ee!==b)&&(i.blendEquationSeparate(at[Me],at[Ee]),g=Me,b=Ee),(k!==m||re!==C||Te!==R||st!==z)&&(i.blendFuncSeparate(Je[k],Je[re],Je[Te],Je[st]),m=k,C=re,R=Te,z=st),(wt.equals(N)===!1||Gt!==I)&&(i.blendColor(wt.r,wt.g,wt.b,Gt),N.copy(wt),I=Gt),E=B,H=!1}function Vt(B,Me){B.side===fn?D(i.CULL_FACE):de(i.CULL_FACE);let k=B.side===sn;Me&&(k=!k),Qe(k),B.blending===_s&&B.transparent===!1?F(bi):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const re=B.stencilWrite;o.setTest(re),re&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):D(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(B){te!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),te=B)}function ct(B){B!==Xu?(de(i.CULL_FACE),B!==y&&(B===il?i.cullFace(i.BACK):B===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):D(i.CULL_FACE),y=B}function ke(B){B!==w&&(se&&i.lineWidth(B),w=B)}function St(B,Me,k){B?(de(i.POLYGON_OFFSET_FILL),(X!==Me||q!==k)&&(i.polygonOffset(Me,k),X=Me,q=k)):D(i.POLYGON_OFFSET_FILL)}function He(B){B?de(i.SCISSOR_TEST):D(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+J-1),$!==B&&(i.activeTexture(B),$=B)}function T(B,Me,k){k===void 0&&($===null?k=i.TEXTURE0+J-1:k=$);let re=ge[k];re===void 0&&(re={type:void 0,texture:void 0},ge[k]=re),(re.type!==B||re.texture!==Me)&&($!==k&&(i.activeTexture(k),$=k),i.bindTexture(B,Me||ce[B]),re.type=B,re.texture=Me)}function W(){const B=ge[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(B){Be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Be.copy(B))}function xe(B){Ve.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ve.copy(B))}function tt(B,Me){let k=c.get(Me);k===void 0&&(k=new WeakMap,c.set(Me,k));let re=k.get(B);re===void 0&&(re=i.getUniformBlockIndex(Me,B.name),k.set(B,re))}function Oe(B,Me){const re=c.get(Me).get(B);a.get(Me)!==re&&(i.uniformBlockBinding(Me,re,B.__bindingPointIndex),a.set(Me,re))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},$=null,ge={},h={},u=new WeakMap,f=[],_=null,v=!1,E=null,g=null,m=null,C=null,b=null,R=null,z=null,N=new Ue(0,0,0),I=0,H=!1,te=null,y=null,w=null,X=null,q=null,Be.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:de,disable:D,bindFramebuffer:le,drawBuffers:ye,useProgram:Fe,setBlending:F,setMaterial:Vt,setFlipSided:Qe,setCullFace:ct,setLineWidth:ke,setPolygonOffset:St,setScissorTest:He,activeTexture:P,bindTexture:T,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:ue,texImage2D:Re,texImage3D:ze,updateUBOMapping:tt,uniformBlockBinding:Oe,texStorage2D:et,texStorage3D:me,texSubImage2D:ne,texSubImage3D:Ie,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ae,scissor:De,viewport:xe,reset:Ye}}function eh(i,e,t,n){const s=t0(n);switch(t){case Vh:return i*e;case Wh:return i*e;case Xh:return i*e*2;case wo:return i*e/s.components*s.byteLength;case Rc:return i*e/s.components*s.byteLength;case jh:return i*e*2/s.components*s.byteLength;case Cc:return i*e*2/s.components*s.byteLength;case Gh:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Pc:return i*e*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(e,8)/4;case Va:case Wa:return Math.max(i,8)*Math.max(e,8)/2;case ja:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case lc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yh:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case ci:case kh:return{byteLength:1,components:1};case cr:case zh:case ii:return{byteLength:2,components:1};case Ac:case wc:return{byteLength:2,components:4};case ji:case bc:case nn:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return _?new OffscreenCanvas(P,T):ur("canvas")}function E(P,T,W){let ie=1;const ue=He(P);if((ue.width>W||ue.height>W)&&(ie=W/Math.max(ue.width,ue.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(ie*ue.width),Ie=Math.floor(ie*ue.height);u===void 0&&(u=v(ne,Ie));const Se=T?v(ne,Ie):u;return Se.width=ne,Se.height=Ie,Se.getContext("2d").drawImage(P,0,0,ne,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ne+"x"+Ie+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==$t&&P.minFilter!==kt}function m(P){i.generateMipmap(P)}function C(P,T,W,ie,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=T;if(T===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),T===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),T===i.RGBA){const Ie=ue?So:ut.getTransfer(ie);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=Ie===Et?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(P,T){let W;return P?T===null||T===ji||T===bs?W=i.DEPTH24_STENCIL8:T===nn?W=i.DEPTH32F_STENCIL8:T===cr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===bs?W=i.DEPTH_COMPONENT24:T===nn?W=i.DEPTH_COMPONENT32F:T===cr&&(W=i.DEPTH_COMPONENT16),W}function R(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==$t&&P.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),I(T),T.isVideoTexture&&h.delete(T)}function N(P){const T=P.target;T.removeEventListener("dispose",N),te(T)}function I(P){const T=n.get(P);if(T.__webglInit===void 0)return;const W=P.source,ie=f.get(W);if(ie){const ue=ie[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&H(P),Object.keys(ie).length===0&&f.delete(W)}n.remove(P)}function H(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const W=P.source,ie=f.get(W);delete ie[T.__cacheKey],o.memory.textures--}function te(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ue=0;ue<T.__webglFramebuffer[ie].length;ue++)i.deleteFramebuffer(T.__webglFramebuffer[ie][ue]);else i.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)i.deleteFramebuffer(T.__webglFramebuffer[ie]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let ie=0,ue=W.length;ie<ue;ie++){const ne=n.get(W[ie]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(W[ie])}n.remove(P)}let y=0;function w(){y=0}function X(){const P=y;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),y+=1,P}function q(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){const W=n.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(W,P,T);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function se(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Ve(W,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function K(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Ve(W,P,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function oe(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Q(W,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const $={[Ts]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},ge={[$t]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},_e={[wd]:i.NEVER,[Dd]:i.ALWAYS,[Rd]:i.LESS,[Zh]:i.LEQUAL,[Cd]:i.EQUAL,[Id]:i.GEQUAL,[Pd]:i.GREATER,[Ld]:i.NOTEQUAL};function be(P,T){if(T.type===nn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===lo||T.magFilter===er||T.magFilter===Un||T.minFilter===kt||T.minFilter===lo||T.minFilter===er||T.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,$[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,$[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,$[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ge[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ge[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$t||T.minFilter!==er&&T.minFilter!==Un||T.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Be(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const ie=T.source;let ue=f.get(ie);ue===void 0&&(ue={},f.set(ie,ue));const ne=q(T);if(ne!==P.__cacheKey){ue[ne]===void 0&&(ue[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ue[ne].usedTimes++;const Ie=ue[P.__cacheKey];Ie!==void 0&&(ue[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&H(T)),P.__cacheKey=ne,P.__webglTexture=ue[ne].texture}return W}function Ve(P,T,W){let ie=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=i.TEXTURE_3D);const ue=Be(P,T),ne=T.source;t.bindTexture(ie,P.__webglTexture,i.TEXTURE0+W);const Ie=n.get(ne);if(ne.version!==Ie.__version||ue===!0){t.activeTexture(i.TEXTURE0+W);const Se=ut.getPrimaries(ut.workingColorSpace),Ae=T.colorSpace===Qn?null:ut.getPrimaries(T.colorSpace),et=T.colorSpace===Qn||Se===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let me=E(T.image,!1,s.maxTextureSize);me=St(T,me);const Re=r.convert(T.format,T.colorSpace),ze=r.convert(T.type);let De=C(T.internalFormat,Re,ze,T.colorSpace,T.isVideoTexture);be(ie,T);let xe;const tt=T.mipmaps,Oe=T.isVideoTexture!==!0,Ye=Ie.__version===void 0||ue===!0,B=ne.dataReady,Me=R(T,me);if(T.isDepthTexture)De=b(T.format===As,T.type),Ye&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,De,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,De,me.width,me.height,0,Re,ze,null));else if(T.isDataTexture)if(tt.length>0){Oe&&Ye&&t.texStorage2D(i.TEXTURE_2D,Me,De,tt[0].width,tt[0].height);for(let k=0,re=tt.length;k<re;k++)xe=tt[k],Oe?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,xe.width,xe.height,Re,ze,xe.data):t.texImage2D(i.TEXTURE_2D,k,De,xe.width,xe.height,0,Re,ze,xe.data);T.generateMipmaps=!1}else Oe?(Ye&&t.texStorage2D(i.TEXTURE_2D,Me,De,me.width,me.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Re,ze,me.data)):t.texImage2D(i.TEXTURE_2D,0,De,me.width,me.height,0,Re,ze,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Oe&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,De,tt[0].width,tt[0].height,me.depth);for(let k=0,re=tt.length;k<re;k++)if(xe=tt[k],T.format!==cn)if(Re!==null)if(Oe){if(B)if(T.layerUpdates.size>0){const Ee=eh(xe.width,xe.height,T.format,T.type);for(const Te of T.layerUpdates){const st=xe.data.subarray(Te*Ee/xe.data.BYTES_PER_ELEMENT,(Te+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,Te,xe.width,xe.height,1,Re,st,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,xe.width,xe.height,me.depth,Re,xe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,De,xe.width,xe.height,me.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,xe.width,xe.height,me.depth,Re,ze,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,De,xe.width,xe.height,me.depth,0,Re,ze,xe.data)}else{Oe&&Ye&&t.texStorage2D(i.TEXTURE_2D,Me,De,tt[0].width,tt[0].height);for(let k=0,re=tt.length;k<re;k++)xe=tt[k],T.format!==cn?Re!==null?Oe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,xe.width,xe.height,Re,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,k,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,xe.width,xe.height,Re,ze,xe.data):t.texImage2D(i.TEXTURE_2D,k,De,xe.width,xe.height,0,Re,ze,xe.data)}else if(T.isDataArrayTexture)if(Oe){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,De,me.width,me.height,me.depth),B)if(T.layerUpdates.size>0){const k=eh(me.width,me.height,T.format,T.type);for(const re of T.layerUpdates){const Ee=me.data.subarray(re*k/me.data.BYTES_PER_ELEMENT,(re+1)*k/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,me.width,me.height,1,Re,ze,Ee)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,ze,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,me.width,me.height,me.depth,0,Re,ze,me.data);else if(T.isData3DTexture)Oe?(Ye&&t.texStorage3D(i.TEXTURE_3D,Me,De,me.width,me.height,me.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,ze,me.data)):t.texImage3D(i.TEXTURE_3D,0,De,me.width,me.height,me.depth,0,Re,ze,me.data);else if(T.isFramebufferTexture){if(Ye)if(Oe)t.texStorage2D(i.TEXTURE_2D,Me,De,me.width,me.height);else{let k=me.width,re=me.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,De,k,re,0,Re,ze,null),k>>=1,re>>=1}}else if(tt.length>0){if(Oe&&Ye){const k=He(tt[0]);t.texStorage2D(i.TEXTURE_2D,Me,De,k.width,k.height)}for(let k=0,re=tt.length;k<re;k++)xe=tt[k],Oe?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Re,ze,xe):t.texImage2D(i.TEXTURE_2D,k,De,Re,ze,xe);T.generateMipmaps=!1}else if(Oe){if(Ye){const k=He(me);t.texStorage2D(i.TEXTURE_2D,Me,De,k.width,k.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,ze,me)}else t.texImage2D(i.TEXTURE_2D,0,De,Re,ze,me);g(T)&&m(ie),Ie.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Q(P,T,W){if(T.image.length!==6)return;const ie=Be(P,T),ue=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const ne=n.get(ue);if(ue.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);const Ie=ut.getPrimaries(ut.workingColorSpace),Se=T.colorSpace===Qn?null:ut.getPrimaries(T.colorSpace),Ae=T.colorSpace===Qn||Ie===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const et=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let re=0;re<6;re++)!et&&!me?Re[re]=E(T.image[re],!0,s.maxCubemapSize):Re[re]=me?T.image[re].image:T.image[re],Re[re]=St(T,Re[re]);const ze=Re[0],De=r.convert(T.format,T.colorSpace),xe=r.convert(T.type),tt=C(T.internalFormat,De,xe,T.colorSpace),Oe=T.isVideoTexture!==!0,Ye=ne.__version===void 0||ie===!0,B=ue.dataReady;let Me=R(T,ze);be(i.TEXTURE_CUBE_MAP,T);let k;if(et){Oe&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,tt,ze.width,ze.height);for(let re=0;re<6;re++){k=Re[re].mipmaps;for(let Ee=0;Ee<k.length;Ee++){const Te=k[Ee];T.format!==cn?De!==null?Oe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,tt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,Te.width,Te.height,De,xe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,tt,Te.width,Te.height,0,De,xe,Te.data)}}}else{if(k=T.mipmaps,Oe&&Ye){k.length>0&&Me++;const re=He(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,tt,re.width,re.height)}for(let re=0;re<6;re++)if(me){Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re[re].width,Re[re].height,De,xe,Re[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,Re[re].width,Re[re].height,0,De,xe,Re[re].data);for(let Ee=0;Ee<k.length;Ee++){const st=k[Ee].image[re].image;Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,st.width,st.height,De,xe,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,tt,st.width,st.height,0,De,xe,st.data)}}else{Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,xe,Re[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,De,xe,Re[re]);for(let Ee=0;Ee<k.length;Ee++){const Te=k[Ee];Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,De,xe,Te.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,tt,De,xe,Te.image[re])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),ne.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,W,ie,ue,ne){const Ie=r.convert(W.format,W.colorSpace),Se=r.convert(W.type),Ae=C(W.internalFormat,Ie,Se,W.colorSpace);if(!n.get(T).__hasExternalTextures){const me=Math.max(1,T.width>>ne),Re=Math.max(1,T.height>>ne);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ne,Ae,me,Re,T.depth,0,Ie,Se,null):t.texImage2D(ue,ne,Ae,me,Re,0,Ie,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ue,n.get(W).__webglTexture,0,Qe(T)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ue,n.get(W).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(P,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const ie=T.depthTexture,ue=ie&&ie.isDepthTexture?ie.type:null,ne=b(T.stencilBuffer,ue),Ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=Qe(T);ct(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ne,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ne,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ne,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,P)}else{const ie=T.textures;for(let ue=0;ue<ie.length;ue++){const ne=ie[ue],Ie=r.convert(ne.format,ne.colorSpace),Se=r.convert(ne.type),Ae=C(ne.internalFormat,Ie,Se,ne.colorSpace),et=Qe(T);W&&ct(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ae,T.width,T.height):ct(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ae,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function D(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,ue=Qe(T);if(T.depthTexture.format===xs)ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(T.depthTexture.format===As)ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function le(P){const T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ie=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",ue)};ie.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=ie}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");D(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=i.createRenderbuffer(),de(T.__webglDepthbuffer[ie],P,!1);else{const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),de(T.__webglDepthbuffer,P,!1);else{const ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(P,T,W){const ie=n.get(P);T!==void 0&&ce(ie.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&le(P)}function Fe(P){const T=P.texture,W=n.get(P),ie=n.get(T);P.addEventListener("dispose",N);const ue=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Ie=ue.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=T.version,o.memory.textures++),ne){W.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Se]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)W.__webglFramebuffer[Se][Ae]=i.createFramebuffer()}else W.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)W.__webglFramebuffer[Se]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Se=0,Ae=ue.length;Se<Ae;Se++){const et=n.get(ue[Se]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ct(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Se=0;Se<ue.length;Se++){const Ae=ue[Se];W.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Se]);const et=r.convert(Ae.format,Ae.colorSpace),me=r.convert(Ae.type),Re=C(Ae.internalFormat,et,me,Ae.colorSpace,P.isXRRenderTarget===!0),ze=Qe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Re,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,W.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),de(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),be(i.TEXTURE_CUBE_MAP,T);for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)ce(W.__webglFramebuffer[Se][Ae],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ae);else ce(W.__webglFramebuffer[Se],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Se=0,Ae=ue.length;Se<Ae;Se++){const et=ue[Se],me=n.get(et);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),be(i.TEXTURE_2D,et),ce(W.__webglFramebuffer,P,et,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),g(et)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ie.__webglTexture),be(Se,T),T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)ce(W.__webglFramebuffer[Ae],P,T,i.COLOR_ATTACHMENT0,Se,Ae);else ce(W.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,Se,0);g(T)&&m(Se),t.unbindTexture()}P.depthBuffer&&le(P)}function at(P){const T=P.textures;for(let W=0,ie=T.length;W<ie;W++){const ue=T[W];if(g(ue)){const ne=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ue).__webglTexture;t.bindTexture(ne,Ie),m(ne),t.unbindTexture()}}}const Je=[],F=[];function Vt(P){if(P.samples>0){if(ct(P)===!1){const T=P.textures,W=P.width,ie=P.height;let ue=i.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(P),Se=T.length>1;if(Se)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);const et=n.get(T[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,ue,i.NEAREST),c===!0&&(Je.length=0,F.length=0,Je.push(i.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(ne),F.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);const et=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qe(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function St(P,T){const W=P.colorSpace,ie=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Nt&&W!==Qn&&(ut.getTransfer(W)===Et?(ie!==cn||ue!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=w,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=ye,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ct}function i0(i,e){function t(n,s=Qn){let r;const o=ut.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.BYTE;if(n===zh)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===cn)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===wo)return i.RED;if(n===Rc)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===Cc)return i.RG_INTEGER;if(n===Pc)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Ya||n===qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Ya)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===Za||n===$a||n===Ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===lc||n===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yh||n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class s0 extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,n),m=this._getHandJoint(l,E);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),_=.02,v=.005;l.inputState.pinching&&f>_+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=_-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
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

}`;class c0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:o0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Co(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l0 extends qi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,_=null,v=null;const E=new c0,g=t.getContextAttributes();let m=null,C=null;const b=[],R=[],z=new Ne;let N=null;const I=new Zt;I.layers.enable(1),I.viewport=new pt;const H=new Zt;H.layers.enable(2),H.viewport=new pt;const te=[I,H],y=new s0;y.layers.enable(1),y.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=b[Q];return ce===void 0&&(ce=new da,b[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=b[Q];return ce===void 0&&(ce=new da,b[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=b[Q];return ce===void 0&&(ce=new da,b[Q]=ce),ce.getHandSpace()};function q(Q){const ce=R.indexOf(Q.inputSource);if(ce===-1)return;const de=b[ce];de!==void 0&&(de.update(Q.inputSource,Q.frame,l||o),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",se);for(let Q=0;Q<b.length;Q++){const ce=R[Q];ce!==null&&(R[Q]=null,b[Q].disconnect(ce))}w=null,X=null,E.reset(),e.setRenderTarget(m),_=null,f=null,u=null,s=null,C=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),C=new Yi(_.framebufferWidth,_.framebufferHeight,{format:cn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,de=null,D=null;g.depth&&(D=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?As:xs,de=g.stencil?bs:ji);const le={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Yi(f.textureWidth,f.textureHeight,{format:cn,type:ci,depthTexture:new cu(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function se(Q){for(let ce=0;ce<Q.removed.length;ce++){const de=Q.removed[ce],D=R.indexOf(de);D>=0&&(R[D]=null,b[D].disconnect(de))}for(let ce=0;ce<Q.added.length;ce++){const de=Q.added[ce];let D=R.indexOf(de);if(D===-1){for(let ye=0;ye<b.length;ye++)if(ye>=R.length){R.push(de),D=ye;break}else if(R[ye]===null){R[ye]=de,D=ye;break}if(D===-1)break}const le=b[D];le&&le.connect(de)}}const K=new L,oe=new L;function $(Q,ce,de){K.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(de.matrixWorld);const D=K.distanceTo(oe),le=ce.projectionMatrix.elements,ye=de.projectionMatrix.elements,Fe=le[14]/(le[10]-1),at=le[14]/(le[10]+1),Je=(le[9]+1)/le[5],F=(le[9]-1)/le[5],Vt=(le[8]-1)/le[0],Qe=(ye[8]+1)/ye[0],ct=Fe*Vt,ke=Fe*Qe,St=D/(-Vt+Qe),He=St*-Vt;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(He),Q.translateZ(St),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),le[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const P=Fe+St,T=at+St,W=ct-He,ie=ke+(D-He),ue=Je*at/T*P,ne=F*at/T*P;Q.projectionMatrix.makePerspective(W,ie,ue,ne,P,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ce=Q.near,de=Q.far;E.texture!==null&&(E.depthNear>0&&(ce=E.depthNear),E.depthFar>0&&(de=E.depthFar)),y.near=H.near=I.near=ce,y.far=H.far=I.far=de,(w!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,X=y.far);const D=Q.parent,le=y.cameras;ge(y,D);for(let ye=0;ye<le.length;ye++)ge(le[ye],D);le.length===2?$(y,I,H):y.projectionMatrix.copy(I.projectionMatrix),_e(Q,y,D)};function _e(Q,ce,de){de===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ws*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&_===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(y)};let be=null;function Be(Q,ce){if(h=ce.getViewerPose(l||o),v=ce,h!==null){const de=h.views;_!==null&&(e.setRenderTargetFramebuffer(C,_.framebuffer),e.setRenderTarget(C));let D=!1;de.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let ye=0;ye<de.length;ye++){const Fe=de[ye];let at=null;if(_!==null)at=_.getViewport(Fe);else{const F=u.getViewSubImage(f,Fe);at=F.viewport,ye===0&&(e.setRenderTargetTextures(C,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(C))}let Je=te[ye];Je===void 0&&(Je=new Zt,Je.layers.enable(ye),Je.viewport=new pt,te[ye]=Je),Je.matrix.fromArray(Fe.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Fe.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(at.x,at.y,at.width,at.height),ye===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(Je)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const ye=u.getDepthInformation(de[0]);ye&&ye.isValid&&ye.texture&&E.init(e,ye,s.renderState)}}for(let de=0;de<b.length;de++){const D=R[de],le=b[de];D!==null&&le!==void 0&&le.update(D,ce,l||o)}be&&be(Q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Ve=new au;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(Q){be=Q},this.dispose=function(){}}}const Oi=new xn,h0=new Xe;function u0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,su(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,C,b,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&_(g,m,R)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),E(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,C,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const C=e.get(m),b=C.envMap,R=C.envMapRotation;b&&(g.envMap.value=b,Oi.copy(R),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Oi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,C,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function E(g,m){const C=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){const R=b.program;n.uniformBlockBinding(C,R)}function l(C,b){let R=s[C.id];R===void 0&&(v(C),R=h(C),s[C.id]=R,C.addEventListener("dispose",g));const z=b.program;n.updateUBOMapping(C,z);const N=e.render.frame;r[C.id]!==N&&(f(C),r[C.id]=N)}function h(C){const b=u();C.__bindingPointIndex=b;const R=i.createBuffer(),z=C.__size,N=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,z,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,R),R}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const b=s[C.id],R=C.uniforms,z=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let N=0,I=R.length;N<I;N++){const H=Array.isArray(R[N])?R[N]:[R[N]];for(let te=0,y=H.length;te<y;te++){const w=H[te];if(_(w,N,te,z)===!0){const X=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let J=0;for(let se=0;se<q.length;se++){const K=q[se],oe=E(K);typeof K=="number"||typeof K=="boolean"?(w.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,X+J,w.__data)):K.isMatrix3?(w.__data[0]=K.elements[0],w.__data[1]=K.elements[1],w.__data[2]=K.elements[2],w.__data[3]=0,w.__data[4]=K.elements[3],w.__data[5]=K.elements[4],w.__data[6]=K.elements[5],w.__data[7]=0,w.__data[8]=K.elements[6],w.__data[9]=K.elements[7],w.__data[10]=K.elements[8],w.__data[11]=0):(K.toArray(w.__data,J),J+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(C,b,R,z){const N=C.value,I=b+"_"+R;if(z[I]===void 0)return typeof N=="number"||typeof N=="boolean"?z[I]=N:z[I]=N.clone(),!0;{const H=z[I];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return z[I]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function v(C){const b=C.uniforms;let R=0;const z=16;for(let I=0,H=b.length;I<H;I++){const te=Array.isArray(b[I])?b[I]:[b[I]];for(let y=0,w=te.length;y<w;y++){const X=te[y],q=Array.isArray(X.value)?X.value:[X.value];for(let J=0,se=q.length;J<se;J++){const K=q[J],oe=E(K),$=R%z,ge=$%oe.boundary,_e=$+ge;R+=ge,_e!==0&&z-_e<oe.storage&&(R+=z-_e),X.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=oe.storage}}}const N=R%z;return N>0&&(R+=z-N),C.__size=R,C.__cache={},this}function E(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function g(C){const b=C.target;b.removeEventListener("dispose",g);const R=o.indexOf(b.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class f0{constructor(e={}){const{canvas:t=Zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),v=new Int32Array(4);let E=null,g=null;const m=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=Ai,this.toneMappingExposure=1;const b=this;let R=!1,z=0,N=0,I=null,H=-1,te=null;const y=new pt,w=new pt;let X=null;const q=new Ue(0);let J=0,se=t.width,K=t.height,oe=1,$=null,ge=null;const _e=new pt(0,0,se,K),be=new pt(0,0,se,K);let Be=!1;const Ve=new Dc;let Q=!1,ce=!1;const de=new Xe,D=new Xe,le=new L,ye=new pt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Je(){return I===null?oe:1}let F=n;function Vt(A,d){return t.getContext(A,d)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){const d="webgl2";if(F=Vt(d,A),F===null)throw Vt(d)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qe,ct,ke,St,He,P,T,W,ie,ue,ne,Ie,Se,Ae,et,me,Re,ze,De,xe,tt,Oe,Ye,B;function Me(){Qe=new xg(F),Qe.init(),Oe=new i0(F,Qe),ct=new dg(F,Qe,e,Oe),ke=new e0(F),ct.reverseDepthBuffer&&ke.buffers.depth.setReversed(!0),St=new yg(F),He=new k_,P=new n0(F,Qe,ke,He,ct,Oe,St),T=new pg(b),W=new _g(b),ie=new Rf(F),Ye=new hg(F,ie),ue=new vg(F,ie,St,Ye),ne=new Mg(F,ue,ie,St),De=new Eg(F,ct,P),me=new fg(He),Ie=new B_(b,T,W,Qe,ct,Ye,me),Se=new u0(b,He),Ae=new H_,et=new Y_(Qe),ze=new lg(b,T,W,ke,ne,f,c),Re=new J_(b,ne,ct),B=new d0(F,St,ct,ke),xe=new ug(F,Qe,St),tt=new Sg(F,Qe,St),St.programs=Ie.programs,b.capabilities=ct,b.extensions=Qe,b.properties=He,b.renderLists=Ae,b.shadowMap=Re,b.state=ke,b.info=St}Me();const k=new l0(b,F);this.xr=k,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(se,K,!1))},this.getSize=function(A){return A.set(se,K)},this.setSize=function(A,d,x=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,K=d,t.width=Math.floor(A*oe),t.height=Math.floor(d*oe),x===!0&&(t.style.width=A+"px",t.style.height=d+"px"),this.setViewport(0,0,A,d)},this.getDrawingBufferSize=function(A){return A.set(se*oe,K*oe).floor()},this.setDrawingBufferSize=function(A,d,x){se=A,K=d,oe=x,t.width=Math.floor(A*x),t.height=Math.floor(d*x),this.setViewport(0,0,A,d)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,d,x,S){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,d,x,S),ke.viewport(y.copy(_e).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,d,x,S){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,d,x,S),ke.scissor(w.copy(be).multiplyScalar(oe).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){ke.setScissorTest(Be=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,d=!0,x=!0){let S=0;if(A){let M=!1;if(I!==null){const O=I.texture.format;M=O===Pc||O===Cc||O===Rc}if(M){const O=I.texture.type,U=O===ci||O===ji||O===cr||O===bs||O===Ac||O===wc,V=ze.getClearColor(),Z=ze.getClearAlpha(),j=V.r,Y=V.g,G=V.b;U?(_[0]=j,_[1]=Y,_[2]=G,_[3]=Z,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=j,v[1]=Y,v[2]=G,v[3]=Z,F.clearBufferiv(F.COLOR,0,v))}else S|=F.COLOR_BUFFER_BIT}d&&(S|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),x&&(S|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(S)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ae.dispose(),et.dispose(),He.dispose(),T.dispose(),W.dispose(),ne.dispose(),Ye.dispose(),B.dispose(),Ie.dispose(),k.dispose(),k.removeEventListener("sessionstart",yr),k.removeEventListener("sessionend",Er),Gn.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=St.autoReset,d=Re.enabled,x=Re.autoUpdate,S=Re.needsUpdate,M=Re.type;Me(),St.autoReset=A,Re.enabled=d,Re.autoUpdate=x,Re.needsUpdate=S,Re.type=M}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const d=A.target;d.removeEventListener("dispose",st),wt(d)}function wt(A){Gt(A),He.remove(A)}function Gt(A){const d=He.get(A).programs;d!==void 0&&(d.forEach(function(x){Ie.releaseProgram(x)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,d,x,S,M,O){d===null&&(d=Fe);const U=M.isMesh&&M.matrixWorld.determinant()<0,V=Ar(A,d,x,S,M);ke.setMaterial(S,U);let Z=x.index,j=1;if(S.wireframe===!0){if(Z=ue.getWireframeAttribute(x),Z===void 0)return;j=2}const Y=x.drawRange,G=x.attributes.position;let ae=Y.start*j,fe=(Y.start+Y.count)*j;O!==null&&(ae=Math.max(ae,O.start*j),fe=Math.min(fe,(O.start+O.count)*j)),Z!==null?(ae=Math.max(ae,0),fe=Math.min(fe,Z.count)):G!=null&&(ae=Math.max(ae,0),fe=Math.min(fe,G.count));const pe=fe-ae;if(pe<0||pe===1/0)return;Ye.setup(M,S,V,x,Z);let we,he=xe;if(Z!==null&&(we=ie.get(Z),he=tt,he.setIndex(we)),M.isMesh)S.wireframe===!0?(ke.setLineWidth(S.wireframeLinewidth*Je()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(M.isLine){let ee=S.linewidth;ee===void 0&&(ee=1),ke.setLineWidth(ee*Je()),M.isLineSegments?he.setMode(F.LINES):M.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else M.isPoints?he.setMode(F.POINTS):M.isSprite&&he.setMode(F.TRIANGLES);if(M.isBatchedMesh)if(M._multiDrawInstances!==null)he.renderMultiDrawInstances(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount,M._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))he.renderMultiDraw(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount);else{const ee=M._multiDrawStarts,Ce=M._multiDrawCounts,Pe=M._multiDrawCount,rt=Z?ie.get(Z).bytesPerElement:1,Lt=He.get(S).currentProgram.getUniforms();for(let $e=0;$e<Pe;$e++)Lt.setValue(F,"_gl_DrawID",$e),he.render(ee[$e]/rt,Ce[$e])}else if(M.isInstancedMesh)he.renderInstances(ae,pe,M.count);else if(x.isInstancedBufferGeometry){const ee=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,Ce=Math.min(x.instanceCount,ee);he.renderInstances(ae,pe,Ce)}else he.render(ae,pe)};function lt(A,d,x){A.transparent===!0&&A.side===fn&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,$i(A,d,x),A.side=ai,A.needsUpdate=!0,$i(A,d,x),A.side=fn):$i(A,d,x)}this.compile=function(A,d,x=null){x===null&&(x=A),g=et.get(x),g.init(d),C.push(g),x.traverseVisible(function(M){M.isLight&&M.layers.test(d.layers)&&(g.pushLight(M),M.castShadow&&g.pushShadow(M))}),A!==x&&A.traverseVisible(function(M){M.isLight&&M.layers.test(d.layers)&&(g.pushLight(M),M.castShadow&&g.pushShadow(M))}),g.setupLights();const S=new Set;return A.traverse(function(M){if(!(M.isMesh||M.isPoints||M.isLine||M.isSprite))return;const O=M.material;if(O)if(Array.isArray(O))for(let U=0;U<O.length;U++){const V=O[U];lt(V,x,M),S.add(V)}else lt(O,x,M),S.add(O)}),C.pop(),g=null,S},this.compileAsync=function(A,d,x=null){const S=this.compile(A,d,x);return new Promise(M=>{function O(){if(S.forEach(function(U){He.get(U).currentProgram.isReady()&&S.delete(U)}),S.size===0){M(A);return}setTimeout(O,10)}Qe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Wt=null;function vn(A){Wt&&Wt(A)}function yr(){Gn.stop()}function Er(){Gn.start()}const Gn=new au;Gn.setAnimationLoop(vn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){Wt=A,k.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},k.addEventListener("sessionstart",yr),k.addEventListener("sessionend",Er),this.render=function(A,d){if(d!==void 0&&d.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(d),d=k.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,d,I),g=et.get(A,C.length),g.init(d),C.push(g),D.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),Ve.setFromProjectionMatrix(D),ce=this.localClippingEnabled,Q=me.init(this.clippingPlanes,ce),E=Ae.get(A,m.length),E.init(),m.push(E),k.enabled===!0&&k.isPresenting===!0){const O=b.xr.getDepthSensingMesh();O!==null&&Hs(O,d,-1/0,b.sortObjects)}Hs(A,d,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort($,ge),at=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,at&&ze.addToRenderList(E,A),this.info.render.frame++,Q===!0&&me.beginShadows();const x=g.state.shadowsArray;Re.render(x,A,d),Q===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const S=E.opaque,M=E.transmissive;if(g.setupLights(),d.isArrayCamera){const O=d.cameras;if(M.length>0)for(let U=0,V=O.length;U<V;U++){const Z=O[U];Vs(S,M,A,Z)}at&&ze.render(A);for(let U=0,V=O.length;U<V;U++){const Z=O[U];Mr(E,A,Z,Z.viewport)}}else M.length>0&&Vs(S,M,A,d),at&&ze.render(A),Mr(E,A,d);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(b,A,d),Ye.resetDefaultState(),H=-1,te=null,C.pop(),C.length>0?(g=C[C.length-1],Q===!0&&me.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?E=m[m.length-1]:E=null};function Hs(A,d,x,S){if(A.visible===!1)return;if(A.layers.test(d.layers)){if(A.isGroup)x=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(d);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){S&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(D);const U=ne.update(A),V=A.material;V.visible&&E.push(A,U,V,x,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const U=ne.update(A),V=A.material;if(S&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),ye.copy(U.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(D)),Array.isArray(V)){const Z=U.groups;for(let j=0,Y=Z.length;j<Y;j++){const G=Z[j],ae=V[G.materialIndex];ae&&ae.visible&&E.push(A,U,ae,x,ye.z,G)}}else V.visible&&E.push(A,U,V,x,ye.z,null)}}const O=A.children;for(let U=0,V=O.length;U<V;U++)Hs(O[U],d,x,S)}function Mr(A,d,x,S){const M=A.opaque,O=A.transmissive,U=A.transparent;g.setupLightsView(x),Q===!0&&me.setGlobalState(b.clippingPlanes,x),S&&ke.viewport(y.copy(S)),M.length>0&&Zi(M,d,x),O.length>0&&Zi(O,d,x),U.length>0&&Zi(U,d,x),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Vs(A,d,x,S){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[S.id]===void 0&&(g.state.transmissionRenderTarget[S.id]=new Yi(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?ii:ci,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const O=g.state.transmissionRenderTarget[S.id],U=S.viewport||y;O.setSize(U.z,U.w);const V=b.getRenderTarget();b.setRenderTarget(O),b.getClearColor(q),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),at&&ze.render(x);const Z=b.toneMapping;b.toneMapping=Ai;const j=S.viewport;if(S.viewport!==void 0&&(S.viewport=void 0),g.setupLightsView(S),Q===!0&&me.setGlobalState(b.clippingPlanes,S),Zi(A,x,S),P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Y=!1;for(let G=0,ae=d.length;G<ae;G++){const fe=d[G],pe=fe.object,we=fe.geometry,he=fe.material,ee=fe.group;if(he.side===fn&&pe.layers.test(S.layers)){const Ce=he.side;he.side=sn,he.needsUpdate=!0,Tr(pe,x,S,we,he,ee),he.side=Ce,he.needsUpdate=!0,Y=!0}}Y===!0&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O))}b.setRenderTarget(V),b.setClearColor(q,J),j!==void 0&&(S.viewport=j),b.toneMapping=Z}function Zi(A,d,x){const S=d.isScene===!0?d.overrideMaterial:null;for(let M=0,O=A.length;M<O;M++){const U=A[M],V=U.object,Z=U.geometry,j=S===null?U.material:S,Y=U.group;V.layers.test(x.layers)&&Tr(V,d,x,Z,j,Y)}}function Tr(A,d,x,S,M,O){A.onBeforeRender(b,d,x,S,M,O),A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),M.onBeforeRender(b,d,x,S,A,O),M.transparent===!0&&M.side===fn&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,b.renderBufferDirect(x,d,S,M,A,O),M.side=ai,M.needsUpdate=!0,b.renderBufferDirect(x,d,S,M,A,O),M.side=fn):b.renderBufferDirect(x,d,S,M,A,O),A.onAfterRender(b,d,x,S,M,O)}function $i(A,d,x){d.isScene!==!0&&(d=Fe);const S=He.get(A),M=g.state.lights,O=g.state.shadowsArray,U=M.state.version,V=Ie.getParameters(A,M.state,O,d,x),Z=Ie.getProgramCacheKey(V);let j=S.programs;S.environment=A.isMeshStandardMaterial?d.environment:null,S.fog=d.fog,S.envMap=(A.isMeshStandardMaterial?W:T).get(A.envMap||S.environment),S.envMapRotation=S.environment!==null&&A.envMap===null?d.environmentRotation:A.envMapRotation,j===void 0&&(A.addEventListener("dispose",st),j=new Map,S.programs=j);let Y=j.get(Z);if(Y!==void 0){if(S.currentProgram===Y&&S.lightsStateVersion===U)return Gs(A,V),Y}else V.uniforms=Ie.getUniforms(A),A.onBeforeCompile(V,b),Y=Ie.acquireProgram(V,Z),j.set(Z,Y),S.uniforms=V.uniforms;const G=S.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(G.clippingPlanes=me.uniform),Gs(A,V),S.needsLights=Wn(A),S.lightsStateVersion=U,S.needsLights&&(G.ambientLightColor.value=M.state.ambient,G.lightProbe.value=M.state.probe,G.directionalLights.value=M.state.directional,G.directionalLightShadows.value=M.state.directionalShadow,G.spotLights.value=M.state.spot,G.spotLightShadows.value=M.state.spotShadow,G.rectAreaLights.value=M.state.rectArea,G.ltc_1.value=M.state.rectAreaLTC1,G.ltc_2.value=M.state.rectAreaLTC2,G.pointLights.value=M.state.point,G.pointLightShadows.value=M.state.pointShadow,G.hemisphereLights.value=M.state.hemi,G.directionalShadowMap.value=M.state.directionalShadowMap,G.directionalShadowMatrix.value=M.state.directionalShadowMatrix,G.spotShadowMap.value=M.state.spotShadowMap,G.spotLightMatrix.value=M.state.spotLightMatrix,G.spotLightMap.value=M.state.spotLightMap,G.pointShadowMap.value=M.state.pointShadowMap,G.pointShadowMatrix.value=M.state.pointShadowMatrix),S.currentProgram=Y,S.uniformsList=null,Y}function br(A){if(A.uniformsList===null){const d=A.currentProgram.getUniforms();A.uniformsList=_o.seqWithValue(d.seq,A.uniforms)}return A.uniformsList}function Gs(A,d){const x=He.get(A);x.outputColorSpace=d.outputColorSpace,x.batching=d.batching,x.batchingColor=d.batchingColor,x.instancing=d.instancing,x.instancingColor=d.instancingColor,x.instancingMorph=d.instancingMorph,x.skinning=d.skinning,x.morphTargets=d.morphTargets,x.morphNormals=d.morphNormals,x.morphColors=d.morphColors,x.morphTargetsCount=d.morphTargetsCount,x.numClippingPlanes=d.numClippingPlanes,x.numIntersection=d.numClipIntersection,x.vertexAlphas=d.vertexAlphas,x.vertexTangents=d.vertexTangents,x.toneMapping=d.toneMapping}function Ar(A,d,x,S,M){d.isScene!==!0&&(d=Fe),P.resetTextureUnits();const O=d.fog,U=S.isMeshStandardMaterial?d.environment:null,V=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Nt,Z=(S.isMeshStandardMaterial?W:T).get(S.envMap||U),j=S.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,Y=!!x.attributes.tangent&&(!!S.normalMap||S.anisotropy>0),G=!!x.morphAttributes.position,ae=!!x.morphAttributes.normal,fe=!!x.morphAttributes.color;let pe=Ai;S.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pe=b.toneMapping);const we=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,he=we!==void 0?we.length:0,ee=He.get(S),Ce=g.state.lights;if(Q===!0&&(ce===!0||A!==te)){const Ge=A===te&&S.id===H;me.setState(S,A,Ge)}let Pe=!1;S.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ce.state.version||ee.outputColorSpace!==V||M.isBatchedMesh&&ee.batching===!1||!M.isBatchedMesh&&ee.batching===!0||M.isBatchedMesh&&ee.batchingColor===!0&&M.colorTexture===null||M.isBatchedMesh&&ee.batchingColor===!1&&M.colorTexture!==null||M.isInstancedMesh&&ee.instancing===!1||!M.isInstancedMesh&&ee.instancing===!0||M.isSkinnedMesh&&ee.skinning===!1||!M.isSkinnedMesh&&ee.skinning===!0||M.isInstancedMesh&&ee.instancingColor===!0&&M.instanceColor===null||M.isInstancedMesh&&ee.instancingColor===!1&&M.instanceColor!==null||M.isInstancedMesh&&ee.instancingMorph===!0&&M.morphTexture===null||M.isInstancedMesh&&ee.instancingMorph===!1&&M.morphTexture!==null||ee.envMap!==Z||S.fog===!0&&ee.fog!==O||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==me.numPlanes||ee.numIntersection!==me.numIntersection)||ee.vertexAlphas!==j||ee.vertexTangents!==Y||ee.morphTargets!==G||ee.morphNormals!==ae||ee.morphColors!==fe||ee.toneMapping!==pe||ee.morphTargetsCount!==he)&&(Pe=!0):(Pe=!0,ee.__version=S.version);let rt=ee.currentProgram;Pe===!0&&(rt=$i(S,d,M));let Lt=!1,$e=!1,nt=!1;const je=rt.getUniforms(),Ct=ee.uniforms;if(ke.useProgram(rt.program)&&(Lt=!0,$e=!0,nt=!0),S.id!==H&&(H=S.id,$e=!0),Lt||te!==A){ct.reverseDepthBuffer?(de.copy(A.projectionMatrix),Jd(de),Qd(de),je.setValue(F,"projectionMatrix",de)):je.setValue(F,"projectionMatrix",A.projectionMatrix),je.setValue(F,"viewMatrix",A.matrixWorldInverse);const Ge=je.map.cameraPosition;Ge!==void 0&&Ge.setValue(F,le.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&je.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,$e=!0,nt=!0)}if(M.isSkinnedMesh){je.setOptional(F,M,"bindMatrix"),je.setOptional(F,M,"bindMatrixInverse");const Ge=M.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),je.setValue(F,"boneTexture",Ge.boneTexture,P))}M.isBatchedMesh&&(je.setOptional(F,M,"batchingTexture"),je.setValue(F,"batchingTexture",M._matricesTexture,P),je.setOptional(F,M,"batchingIdTexture"),je.setValue(F,"batchingIdTexture",M._indirectTexture,P),je.setOptional(F,M,"batchingColorTexture"),M._colorsTexture!==null&&je.setValue(F,"batchingColorTexture",M._colorsTexture,P));const Rt=x.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&De.update(M,x,rt),($e||ee.receiveShadow!==M.receiveShadow)&&(ee.receiveShadow=M.receiveShadow,je.setValue(F,"receiveShadow",M.receiveShadow)),S.isMeshGouraudMaterial&&S.envMap!==null&&(Ct.envMap.value=Z,Ct.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),S.isMeshStandardMaterial&&S.envMap===null&&d.environment!==null&&(Ct.envMapIntensity.value=d.environmentIntensity),$e&&(je.setValue(F,"toneMappingExposure",b.toneMappingExposure),ee.needsLights&&Fo(Ct,nt),O&&S.fog===!0&&Se.refreshFogUniforms(Ct,O),Se.refreshMaterialUniforms(Ct,S,oe,K,g.state.transmissionRenderTarget[A.id]),_o.upload(F,br(ee),Ct,P)),S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(_o.upload(F,br(ee),Ct,P),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&je.setValue(F,"center",M.center),je.setValue(F,"modelViewMatrix",M.modelViewMatrix),je.setValue(F,"normalMatrix",M.normalMatrix),je.setValue(F,"modelMatrix",M.matrixWorld),S.isShaderMaterial||S.isRawShaderMaterial){const Ge=S.uniformsGroups;for(let mt=0,Sn=Ge.length;mt<Sn;mt++){const di=Ge[mt];B.update(di,rt),B.bind(di,rt)}}return rt}function Fo(A,d){A.ambientLightColor.needsUpdate=d,A.lightProbe.needsUpdate=d,A.directionalLights.needsUpdate=d,A.directionalLightShadows.needsUpdate=d,A.pointLights.needsUpdate=d,A.pointLightShadows.needsUpdate=d,A.spotLights.needsUpdate=d,A.spotLightShadows.needsUpdate=d,A.rectAreaLights.needsUpdate=d,A.hemisphereLights.needsUpdate=d}function Wn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,d,x){He.get(A.texture).__webglTexture=d,He.get(A.depthTexture).__webglTexture=x;const S=He.get(A);S.__hasExternalTextures=!0,S.__autoAllocateDepthBuffer=x===void 0,S.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),S.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,d){const x=He.get(A);x.__webglFramebuffer=d,x.__useDefaultFramebuffer=d===void 0},this.setRenderTarget=function(A,d=0,x=0){I=A,z=d,N=x;let S=!0,M=null,O=!1,U=!1;if(A){const Z=He.get(A);if(Z.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(F.FRAMEBUFFER,null),S=!1;else if(Z.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Z.__hasExternalTextures)P.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const G=A.depthTexture;if(Z.__boundDepthTexture!==G){if(G!==null&&He.has(G)&&(A.width!==G.image.width||A.height!==G.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const j=A.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(U=!0);const Y=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Y[d])?M=Y[d][x]:M=Y[d],O=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?M=He.get(A).__webglMultisampledFramebuffer:Array.isArray(Y)?M=Y[x]:M=Y,y.copy(A.viewport),w.copy(A.scissor),X=A.scissorTest}else y.copy(_e).multiplyScalar(oe).floor(),w.copy(be).multiplyScalar(oe).floor(),X=Be;if(ke.bindFramebuffer(F.FRAMEBUFFER,M)&&S&&ke.drawBuffers(A,M),ke.viewport(y),ke.scissor(w),ke.setScissorTest(X),O){const Z=He.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+d,Z.__webglTexture,x)}else if(U){const Z=He.get(A.texture),j=d||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.__webglTexture,x||0,j)}H=-1},this.readRenderTargetPixels=function(A,d,x,S,M,O,U){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&U!==void 0&&(V=V[U]),V){ke.bindFramebuffer(F.FRAMEBUFFER,V);try{const Z=A.texture,j=Z.format,Y=Z.type;if(!ct.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Y)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}d>=0&&d<=A.width-S&&x>=0&&x<=A.height-M&&F.readPixels(d,x,S,M,Oe.convert(j),Oe.convert(Y),O)}finally{const Z=I!==null?He.get(I).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(A,d,x,S,M,O,U){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&U!==void 0&&(V=V[U]),V){const Z=A.texture,j=Z.format,Y=Z.type;if(!ct.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(d>=0&&d<=A.width-S&&x>=0&&x<=A.height-M){ke.bindFramebuffer(F.FRAMEBUFFER,V);const G=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,G),F.bufferData(F.PIXEL_PACK_BUFFER,O.byteLength,F.STREAM_READ),F.readPixels(d,x,S,M,Oe.convert(j),Oe.convert(Y),0);const ae=I!==null?He.get(I).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,ae);const fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $d(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,G),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,O),F.deleteBuffer(G),F.deleteSync(fe),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,d=null,x=0){A.isTexture!==!0&&(go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),d=arguments[0]||null,A=arguments[1]);const S=Math.pow(2,-x),M=Math.floor(A.image.width*S),O=Math.floor(A.image.height*S),U=d!==null?d.x:0,V=d!==null?d.y:0;P.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,x,0,0,U,V,M,O),ke.unbindTexture()},this.copyTextureToTexture=function(A,d,x=null,S=null,M=0){A.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture function signature has changed."),S=arguments[0]||null,A=arguments[1],d=arguments[2],M=arguments[3]||0,x=null);let O,U,V,Z,j,Y;x!==null?(O=x.max.x-x.min.x,U=x.max.y-x.min.y,V=x.min.x,Z=x.min.y):(O=A.image.width,U=A.image.height,V=0,Z=0),S!==null?(j=S.x,Y=S.y):(j=0,Y=0);const G=Oe.convert(d.format),ae=Oe.convert(d.type);P.setTexture2D(d,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,d.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,d.unpackAlignment);const fe=F.getParameter(F.UNPACK_ROW_LENGTH),pe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),we=F.getParameter(F.UNPACK_SKIP_PIXELS),he=F.getParameter(F.UNPACK_SKIP_ROWS),ee=F.getParameter(F.UNPACK_SKIP_IMAGES),Ce=A.isCompressedTexture?A.mipmaps[M]:A.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ce.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ce.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,V),F.pixelStorei(F.UNPACK_SKIP_ROWS,Z),A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,M,j,Y,O,U,G,ae,Ce.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,M,j,Y,Ce.width,Ce.height,G,Ce.data):F.texSubImage2D(F.TEXTURE_2D,M,j,Y,O,U,G,ae,Ce),F.pixelStorei(F.UNPACK_ROW_LENGTH,fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,he),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ee),M===0&&d.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(A,d,x=null,S=null,M=0){A.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,S=arguments[1]||null,A=arguments[2],d=arguments[3],M=arguments[4]||0);let O,U,V,Z,j,Y,G,ae,fe;const pe=A.isCompressedTexture?A.mipmaps[M]:A.image;x!==null?(O=x.max.x-x.min.x,U=x.max.y-x.min.y,V=x.max.z-x.min.z,Z=x.min.x,j=x.min.y,Y=x.min.z):(O=pe.width,U=pe.height,V=pe.depth,Z=0,j=0,Y=0),S!==null?(G=S.x,ae=S.y,fe=S.z):(G=0,ae=0,fe=0);const we=Oe.convert(d.format),he=Oe.convert(d.type);let ee;if(d.isData3DTexture)P.setTexture3D(d,0),ee=F.TEXTURE_3D;else if(d.isDataArrayTexture||d.isCompressedArrayTexture)P.setTexture2DArray(d,0),ee=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,d.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,d.unpackAlignment);const Ce=F.getParameter(F.UNPACK_ROW_LENGTH),Pe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rt=F.getParameter(F.UNPACK_SKIP_PIXELS),Lt=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Z),F.pixelStorei(F.UNPACK_SKIP_ROWS,j),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Y),A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ee,M,G,ae,fe,O,U,V,we,he,pe.data):d.isCompressedArrayTexture?F.compressedTexSubImage3D(ee,M,G,ae,fe,O,U,V,we,pe.data):F.texSubImage3D(ee,M,G,ae,fe,O,U,V,we,he,pe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ce),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),M===0&&d.generateMipmaps&&F.generateMipmap(ee),ke.unbindTexture()},this.initRenderTarget=function(A){He.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ke.unbindTexture()},this.resetState=function(){z=0,N=0,I=null,ke.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Ro?"display-p3":"srgb"}}class p0 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class m0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new L;class Oc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const th=new L,nh=new pt,ih=new pt,g0=new L,sh=new Xe,qr=new L,fa=new kn,rh=new Xe,pa=new gr;class _0 extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ol,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(s),e.ray.intersectsSphere(fa)!==!1&&(rh.copy(s).invert(),pa.copy(e.ray).applyMatrix4(rh),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;nh.fromBufferAttribute(s.attributes.skinIndex,e),ih.fromBufferAttribute(s.attributes.skinWeight,e),th.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ih.getComponent(r);if(o!==0){const a=nh.getComponent(r);sh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(g0.copy(th).applyMatrix4(sh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fc extends zt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=$t,h=$t,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new Xe,x0=new Xe;class Bc{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:x0;oh.multiplyMatrices(a,t[r]),oh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Bc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fc(t,e,e,cn,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fu),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class _c extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Xe,ah=new Xe,Kr=[],ch=new hi,v0=new Xe,Ks=new vt,Zs=new kn;class S0 extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,v0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),ch.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Zs.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),e.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),ah.multiplyMatrices(n,ds),Ks.matrixWorld=ah,Ks.raycast(e,Kr);for(let o=0,a=Kr.length;o<a;o++){const c=Kr[o];c.instanceId=r,c.object=this,t.push(c)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(s*this.count),s,this.count,wo,nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ln extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const To=new L,bo=new L,lh=new Xe,$s=new gr,Zr=new kn,ma=new L,hh=new L;class mn extends dt{constructor(e=new yt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)To.fromBufferAttribute(t,s-1),bo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=To.distanceTo(bo);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;lh.copy(s).invert(),$s.copy(e.ray).applyMatrix4(lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const _=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let E=_,g=v-1;E<g;E+=l){const m=h.getX(E),C=h.getX(E+1),b=$r(this,e,$s,c,m,C);b&&t.push(b)}if(this.isLineLoop){const E=h.getX(v-1),g=h.getX(_),m=$r(this,e,$s,c,E,g);m&&t.push(m)}}else{const _=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let E=_,g=v-1;E<g;E+=l){const m=$r(this,e,$s,c,E,E+1);m&&t.push(m)}if(this.isLineLoop){const E=$r(this,e,$s,c,v-1,_);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(To.fromBufferAttribute(o,s),bo.fromBufferAttribute(o,r),t.distanceSqToSegment(To,bo,ma,hh)>n)return;ma.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ma);if(!(c<e.near||c>e.far))return{distance:c,point:hh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const uh=new L,dh=new L;class y0 extends mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uh.distanceTo(dh);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kc extends mn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zc extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fh=new Xe,xc=new gr,Jr=new kn,Qr=new L;class pu extends dt{constructor(e=new yt,t=new zc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;fh.copy(s).invert(),xc.copy(e.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),_=Math.min(l.count,o.start+o.count);for(let v=f,E=_;v<E;v++){const g=l.getX(v);Qr.fromBufferAttribute(u,g),ph(Qr,g,c,s,e,t,this)}}else{const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,E=_;v<E;v++)Qr.fromBufferAttribute(u,v),ph(Qr,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ph(i,e,t,n,s,r,o){const a=xc.distanceSqToPoint(i);if(a<t){const c=new L;xc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hc extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const _=n+u/t*s;l.x=e*Math.cos(_),l.y=e*Math.sin(_),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lo extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],_=[];let v=0;const E=[],g=n/2;let m=0;C(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(_,2));function C(){const R=new L,z=new L;let N=0;const I=(t-e)/n;for(let H=0;H<=r;H++){const te=[],y=H/r,w=y*(t-e)+e;for(let X=0;X<=s;X++){const q=X/s,J=q*c+a,se=Math.sin(J),K=Math.cos(J);z.x=w*se,z.y=-y*n+g,z.z=w*K,u.push(z.x,z.y,z.z),R.set(se,I,K).normalize(),f.push(R.x,R.y,R.z),_.push(q,1-y),te.push(v++)}E.push(te)}for(let H=0;H<s;H++)for(let te=0;te<r;te++){const y=E[te][H],w=E[te+1][H],X=E[te+1][H+1],q=E[te][H+1];e>0&&(h.push(y,w,q),N+=3),t>0&&(h.push(w,X,q),N+=3)}l.addGroup(m,N,0),m+=N}function b(R){const z=v,N=new Ne,I=new L;let H=0;const te=R===!0?e:t,y=R===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,g*y,0),f.push(0,y,0),_.push(.5,.5),v++;const w=v;for(let X=0;X<=s;X++){const J=X/s*c+a,se=Math.cos(J),K=Math.sin(J);I.x=te*K,I.y=g*y,I.z=te*se,u.push(I.x,I.y,I.z),f.push(0,y,0),N.x=se*.5+.5,N.y=K*.5*y+.5,_.push(N.x,N.y),v++}for(let X=0;X<s;X++){const q=z+X,J=w+X;R===!0?h.push(J,J+1,q):h.push(J+1,J,q),H+=3}l.addGroup(m,H,R===!0?1:2),m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vc extends Lo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Vc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tn extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,f=new L,_=[],v=[],E=[],g=[];for(let m=0;m<=n;m++){const C=[],b=m/n;let R=0;m===0&&o===0?R=.5/t:m===n&&c===Math.PI&&(R=-.5/t);for(let z=0;z<=t;z++){const N=z/t;u.x=-e*Math.cos(s+N*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+N*r)*Math.sin(o+b*a),v.push(u.x,u.y,u.z),f.copy(u).normalize(),E.push(f.x,f.y,f.z),g.push(N+R,1-b),C.push(l++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){const b=h[m][C+1],R=h[m][C],z=h[m+1][C],N=h[m+1][C+1];(m!==0||o>0)&&_.push(b,R,N),(m!==n-1||c<Math.PI)&&_.push(R,z,N)}this.setIndex(_),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(E,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ri extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends ri{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function E0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function M0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function mh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function mu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class _r{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class T0 extends _r{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cl:r=e,a=2*t-n;break;case ll:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cl:o=e,c=2*n-t;break;case ll:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,_=this._weightNext,v=(n-t)/(s-t),E=v*v,g=E*v,m=-f*g+2*f*E-f*v,C=(1+f)*g+(-1.5-2*f)*E+(-.5+f)*v+1,b=(-1-_)*g+(1.5+_)*E+.5*v,R=_*g-_*E;for(let z=0;z!==a;++z)r[z]=m*o[h+z]+C*o[l+z]+b*o[c+z]+R*o[u+z];return r}}class b0 extends _r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class A0 extends _r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new b0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&E0(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,f=u-n,_=u+n;for(let v=0;v!==n;++v){const E=t[u+v];if(E!==t[f+v]||E!==t[_+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let _=0;_!==n;++_)t[f+_]=t[u+_]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=hr;class Fs extends Hn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=lr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class gu extends Hn{}gu.prototype.ValueTypeName="color";class Cs extends Hn{}Cs.prototype.ValueTypeName="number";class w0 extends _r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)rn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ps extends Hn{InterpolantFactoryMethodLinear(e){return new w0(this.times,this.values,this.getValueSize(),e)}}Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Hn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=lr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Hn{}Ls.prototype.ValueTypeName="vector";class R0{constructor(e="",t=-1,n=[],s=Ed){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(P0(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=M0(c);c=mh(c,1,h),l=mh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,_,v,E){if(_.length!==0){const g=[],m=[];mu(_,g,m,v),g.length!==0&&E.push(new u(f,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const _={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let E=0;E<f[v].morphTargets.length;E++)_[f[v].morphTargets[E]]=-1;for(const E in _){const g=[],m=[];for(let C=0;C!==f[v].morphTargets.length;++C){const b=f[v];g.push(b.time),m.push(b.morphTarget===E?1:0)}s.push(new Cs(".morphTargetInfluence["+E+"]",g,m))}c=_.length*o}else{const _=".bones["+t[u].name+"]";n(Ls,_+".position",f,"pos",s),n(Ps,_+".quaternion",f,"rot",s),n(Ls,_+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function C0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return gu;case"quaternion":return Ps;case"bool":case"boolean":return Fs;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function P0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C0(i.type);if(i.times===void 0){const t=[],n=[];mu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _u{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const _=l[u],v=l[u+1];if(_.global&&(_.lastIndex=0),_.test(h))return v}return null}}}const L0=new _u;class Ki{constructor(e){this.manager=e!==void 0?e:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class I0 extends Error{constructor(e,t){super(e),this.response=t}}class Gc extends Ki{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:s});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),_=f?parseInt(f):0,v=_!==0;let E=0;const g=new ReadableStream({start(m){C();function C(){u.read().then(({done:b,value:R})=>{if(b)m.close();else{E+=R.byteLength;const z=new ProgressEvent("progress",{lengthComputable:v,loaded:E,total:_});for(let N=0,I=h.length;N<I;N++){const H=h[N];H.onProgress&&H.onProgress(z)}m.enqueue(R),C()}},b=>{m.error(b)})}}});return new Response(g)}else throw new I0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,_=new TextDecoder(f);return l.arrayBuffer().then(v=>_.decode(v))}}}).then(l=>{Ti.add(e,l);const h=Zn[e];delete Zn[e];for(let u=0,f=h.length;u<f;u++){const _=h[u];_.onLoad&&_.onLoad(l)}}).catch(l=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let u=0,f=h.length;u<f;u++){const _=h[u];_.onError&&_.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class D0 extends Ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function c(){h(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class N0 extends Ki{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Fc,a=new Gc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Nn,o.wrapT=l.wrapT!==void 0?l.wrapT:Nn,o.magFilter=l.magFilter!==void 0?l.magFilter:kt,o.minFilter=l.minFilter!==void 0?l.minFilter:kt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Un),l.mipmapCount===1&&(o.minFilter=kt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}}class xu extends Ki{constructor(e){super(e)}load(e,t,n,s){const r=new zt,o=new D0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Io extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ga=new Xe,gh=new L,_h=new L;class Wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U0 extends Wc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class O0 extends Io{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new U0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xh=new Xe,Js=new L,_a=new L;class F0 extends Wc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),_a.copy(n.position),_a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_a),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}}class Do extends Io{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new F0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class B0 extends Wc{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k0 extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new B0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vu extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class z0 extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,c),r.manager.itemStart(e)}}const Xc="\\[\\]\\.:\\/",H0=new RegExp("["+Xc+"]","g"),jc="[^"+Xc+"]",V0="[^"+Xc.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",jc),W0=/(WCOD+)?/.source.replace("WCOD",V0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),j0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),Y0=new RegExp("^"+G0+W0+X0+j0+"$"),q0=["material","materials","bones","map"];class K0{constructor(e,t,n){const s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(e){const t=Y0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=K0;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vi{constructor(e){this.value=e}clone(){return new Vi(this.value.clone===void 0?this.value:this.value.clone())}}class vh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Su extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);const yu=667428e-16,hn=1496e5,xa=1799e4,Z0=299792,ot=1e-7,$0=4.56621*10**-6,vc={"3s/Ey":48,"6s/Ey":24,"12s/Ey":12,"24s/Ey":6,"48s/Ey":3,"72s/Ey":2,"144s/Ey":1,Realtime:$0},Sh=["recommended","realistic","cinematic"];let Mi=["km","au","lm"],ki=[!1,"./starmaps/celestial_grid_16k.png","./starmaps/constellation_bounds_8k.png","./starmaps/constellation_figures_8k.png"];const dr=[!1,"./starmaps/starmap_2020_4k_gal.exr","./starmaps/starmap_2020_8k_gal.exr","./starmaps/starmap_2020_8k.exr"],wi=1e-4,p={TIME:60*60*vc["24s/Ey"],PAUSED:!1,SHOW_VECTORS:!1,REALISTIC_LIGHTING:!0,TRUE_ROTATION_SPEEDS:!1,ACTIVE_ASCENSION_AXIS:!0,spacecraftFirstPerson:!1,spacecraftGravity:!1,spacecraftMatchVelocity:!1,spacecraftLight:!1,distanceUnit:Mi[0],starBackground:null,backgroundGrid:ki[0],backgroundTexture:dr[0],SHOW_LABEL:!0,SHOW_ORBITS:!0,HIGH_QUALITY_TEXTURES:!1,PLANET_SCALE:ot*10,earthSystemScaling:.1,isCameraLocked:!1,isCameraSunLocked:!1,cameraSunLockChanged:!1,STANDARD_FOV:75,SPACECRAFT_FOV:75,targets:[],targetPlanet:null,spacecraft:null,spacecraftSelected:!1,jwstSelected:!1,transitionAnimationActive:!1,movingToJwst:!1,SHOW_CONNECTION:!1,inEarthSystem:!1,sunLockedCameraDistance:0,birdseye:!0,forwardPressed:!1,backwardPressed:!1,portPressed:!1,starboardPressed:!1,rotatePortPressed:!1,rotateStarboardPressed:!1,handbrakePressed:!1,isMouseDown:!1,lastMousePosition:{x:0,y:0}},va=J0();va==="recommended"||(va==="realistic"?(p.SHOW_LABEL=!0,p.SHOW_ORBITS=!0,p.HIGH_QUALITY_TEXTURES=!1,p.backgroundTexture=dr[3],p.PLANET_SCALE=ot,p.earthSystemScaling=1):va==="cinematic"&&(p.SHOW_LABEL=!0,p.SHOW_ORBITS=!0,p.HIGH_QUALITY_TEXTURES=!0,p.backgroundTexture=dr[3],p.PLANET_SCALE=ot*10,p.earthSystemScaling=.1));function J0(){const e=window.location.pathname.replace("/","");return Sh.includes(e)?e:Sh[0]}function yh(i,e){const t=e.x-i.x,n=e.y-i.y,s=e.z-i.z;return Math.sqrt(t**2+n**2+s**2)}function Eh(i,e){const t=(i.x-e.x)/ot*1e3,n=(i.y-e.y)/ot*1e3,s=(i.z-e.z)/ot*1e3;return Math.sqrt(t**2+n**2+s**2)}function Sc(i,e,t){const n=new L(0,0,0),s=Math.sqrt((e.x-i.x)**2+(e.z-i.z)**2);return n.x=e.x+t*((e.x-i.x)/s),n.z=e.z+t*((e.z-i.z)/s),n}function Sa(i){return`#${i.toString(16).padStart(6,"0")}`}function to(i){return`0x${i.slice(1)}`}function Q0(i){return Math.round(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"'")}function ya(i,e,t,n){if(e==="km")return Q0(i)+" "+e;if(e==="au")return(i/t).toPrecision(4)+" "+e;if(e==="lm"){const s=Math.floor(i/n/60),r=Math.floor(i/n%60),o=String(Math.floor(i%n/(n/60))).padStart(2,"0");return s>0?s+":"+String(r).padStart(2,"0")+":"+o+" lh":r+":"+o+" "+e}return 0}class Eu extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,_=new L;let v=new Ne;for(let E=0;E<=s;E++){for(let g=0;g<=n;g++){const m=r+g/n*o;_.x=u*Math.cos(m),_.y=u*Math.sin(m),c.push(_.x,_.y,_.z),l.push(0,0,1),v=new Ne(E/s,g/n),h.push(v.x,v.y)}u+=f}for(let E=0;E<s;E++){const g=E*(n+1);for(let m=0;m<n;m++){const C=m+g,b=C,R=C+n+1,z=C+n+2,N=C+1;a.push(b,R,N),a.push(R,z,N)}}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(h,2))}}const Mh={type:"change"},Yc={type:"start"},Mu={type:"end"},no=new gr,Th=new Ei,ex=Math.cos(70*We.DEG2RAD),Dt=new L,Qt=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ea=1e-6;class tx extends Su{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new rn,this._lastTargetPosition=new L,this._quat=new rn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vh,this._sphericalDelta=new vh,this._scale=1,this._panOffset=new L,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new L,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ix.bind(this),this._onPointerDown=nx.bind(this),this._onPointerUp=sx.bind(this),this._onContextMenu=ux.bind(this),this._onMouseWheel=ax.bind(this),this._onKeyDown=cx.bind(this),this._onTouchStart=lx.bind(this),this._onTouchMove=hx.bind(this),this._onMouseDown=rx.bind(this),this._onMouseMove=ox.bind(this),this._interceptControlDown=dx.bind(this),this._interceptControlUp=fx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mh),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(no.origin.copy(this.object.position),no.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(no.direction))<ex?this.object.lookAt(this.target):(Th.setFromNormalAndCoplanarPoint(this.object.up,this.target),no.intersectPlane(Th,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ea||this._lastTargetPosition.distanceToSquared(this.target)>Ea?(this.dispatchEvent(Mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mu),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case _n.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case _n.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Yc)}function ox(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ax(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(Yc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mu))}function cx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function lx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Yc)}function hx(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function ux(i){this.enabled!==!1&&i.preventDefault()}function dx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ma={type:"change"},qc={type:"start"},Kc={type:"end"},bh=1e-6,ft={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},io=new Ne,vi=new Ne,px=new L,so=new L,Ta=new L,fs=new rn,Ah=new L,ro=new L,ba=new L,oo=new L;class mx extends Su{constructor(e,t=null){super(e,t),this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.state=ft.NONE,this.keyState=ft.NONE,this.target=new L,this._lastPosition=new L,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new L,this._movePrev=new Ne,this._moveCurr=new Ne,this._lastAxis=new L,this._zoomStart=new Ne,this._zoomEnd=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._pointers=[],this._pointerPositions={},this._onPointerMove=_x.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onPointerCancel=vx.bind(this),this._onContextMenu=Ax.bind(this),this._onMouseWheel=bx.bind(this),this._onKeyDown=yx.bind(this),this._onKeyUp=Sx.bind(this),this._onTouchStart=wx.bind(this),this._onTouchMove=Rx.bind(this),this._onTouchEnd=Cx.bind(this),this._onMouseDown=Ex.bind(this),this._onMouseMove=Mx.bind(this),this._onMouseUp=Tx.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(),this.handleResize()),this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>bh&&(this.dispatchEvent(Ma),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>bh||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Ma),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=ft.NONE,this.keyState=ft.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Ma),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(vi.copy(this._panEnd).sub(this._panStart),vi.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;vi.x*=e,vi.y*=t}vi.multiplyScalar(this._eye.length()*this.panSpeed),so.copy(this._eye).cross(this.object.up).setLength(vi.x),so.add(px.copy(this.object.up).setLength(vi.y)),this.object.position.add(so),this.target.add(so),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(vi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){oo.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=oo.length();e?(this._eye.copy(this.object.position).sub(this.target),Ah.copy(this._eye).normalize(),ro.copy(this.object.up).normalize(),ba.crossVectors(ro,Ah).normalize(),ro.setLength(this._moveCurr.y-this._movePrev.y),ba.setLength(this._moveCurr.x-this._movePrev.x),oo.copy(ro.add(ba)),Ta.crossVectors(oo,this._eye).normalize(),e*=this.rotateSpeed,fs.setFromAxisAngle(Ta,e),this._eye.applyQuaternion(fs),this.object.up.applyQuaternion(fs),this._lastAxis.copy(Ta),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),fs.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(fs),this.object.up.applyQuaternion(fs)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===ft.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=We.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=We.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return io.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),io}_getMouseOnCircle(e,t){return io.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),io}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function gx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function _x(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function vx(i){this._removePointer(i)}function Sx(){this.enabled!==!1&&(this.keyState=ft.NONE,window.addEventListener("keydown",this._onKeyDown))}function yx(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===ft.NONE&&(i.code===this.keys[ft.ROTATE]&&!this.noRotate?this.keyState=ft.ROTATE:i.code===this.keys[ft.ZOOM]&&!this.noZoom?this.keyState=ft.ZOOM:i.code===this.keys[ft.PAN]&&!this.noPan&&(this.keyState=ft.PAN)))}function Ex(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _n.DOLLY:this.state=ft.ZOOM;break;case _n.ROTATE:this.state=ft.ROTATE;break;case _n.PAN:this.state=ft.PAN;break;default:this.state=ft.NONE}const t=this.keyState!==ft.NONE?this.keyState:this.state;t===ft.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):t===ft.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):t===ft.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(qc)}function Mx(i){const e=this.keyState!==ft.NONE?this.keyState:this.state;e===ft.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):e===ft.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):e===ft.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function Tx(){this.state=ft.NONE,this.dispatchEvent(Kc)}function bx(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(qc),this.dispatchEvent(Kc)}}function Ax(i){this.enabled!==!1&&i.preventDefault()}function wx(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=ft.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=ft.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(qc)}function Rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:const e=this._getSecondPointerPosition(i),t=i.pageX-e.x,n=i.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+n*n);const s=(i.pageX+e.x)/2,r=(i.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function Cx(i){switch(this._pointers.length){case 0:this.state=ft.NONE;break;case 1:this.state=ft.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=ft.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==i.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(Kc)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var pn=Uint8Array,gs=Uint16Array,Px=Int32Array,Tu=new pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bu=new pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lx=new pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Au=function(i,e){for(var t=new gs(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Px(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},wu=Au(Tu,2),Ru=wu.b,Ix=wu.r;Ru[28]=258,Ix[258]=28;var Dx=Au(bu,0),Nx=Dx.b,yc=new gs(32768);for(var Tt=0;Tt<32768;++Tt){var Si=(Tt&43690)>>1|(Tt&21845)<<1;Si=(Si&52428)>>2|(Si&13107)<<2,Si=(Si&61680)>>4|(Si&3855)<<4,yc[Tt]=((Si&65280)>>8|(Si&255)<<8)>>1}var rr=function(i,e,t){for(var n=i.length,s=0,r=new gs(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new gs(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new gs(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[yc[u]>>c]=l}else for(a=new gs(n),s=0;s<n;++s)i[s]&&(a[s]=yc[o[i[s]-1]++]>>15-i[s]);return a},xr=new pn(288);for(var Tt=0;Tt<144;++Tt)xr[Tt]=8;for(var Tt=144;Tt<256;++Tt)xr[Tt]=9;for(var Tt=256;Tt<280;++Tt)xr[Tt]=7;for(var Tt=280;Tt<288;++Tt)xr[Tt]=8;var Cu=new pn(32);for(var Tt=0;Tt<32;++Tt)Cu[Tt]=5;var Ux=rr(xr,9,1),Ox=rr(Cu,5,1),Aa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Tn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},wa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Fx=function(i){return(i+7)/8|0},Bx=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new pn(i.subarray(e,t))},kx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],bn=function(i,e,t){var n=new Error(e||kx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,bn),!t)throw n;return n},zx=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new pn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new pn(s*3));var l=function(at){var Je=t.length;if(at>Je){var F=new pn(Math.max(Je*2,at));F.set(t),t=F}},h=e.f||0,u=e.p||0,f=e.b||0,_=e.l,v=e.d,E=e.m,g=e.n,m=s*8;do{if(!_){h=Tn(i,u,1);var C=Tn(i,u+1,3);if(u+=3,C)if(C==1)_=Ux,v=Ox,E=9,g=5;else if(C==2){var N=Tn(i,u,31)+257,I=Tn(i,u+10,15)+4,H=N+Tn(i,u+5,31)+1;u+=14;for(var te=new pn(H),y=new pn(19),w=0;w<I;++w)y[Lx[w]]=Tn(i,u+w*3,7);u+=I*3;for(var X=Aa(y),q=(1<<X)-1,J=rr(y,X,1),w=0;w<H;){var se=J[Tn(i,u,q)];u+=se&15;var b=se>>4;if(b<16)te[w++]=b;else{var K=0,oe=0;for(b==16?(oe=3+Tn(i,u,3),u+=2,K=te[w-1]):b==17?(oe=3+Tn(i,u,7),u+=3):b==18&&(oe=11+Tn(i,u,127),u+=7);oe--;)te[w++]=K}}var $=te.subarray(0,N),ge=te.subarray(N);E=Aa($),g=Aa(ge),_=rr($,E,1),v=rr(ge,g,1)}else bn(1);else{var b=Fx(u)+4,R=i[b-4]|i[b-3]<<8,z=b+R;if(z>s){c&&bn(0);break}a&&l(f+R),t.set(i.subarray(b,z),f),e.b=f+=R,e.p=u=z*8,e.f=h;continue}if(u>m){c&&bn(0);break}}a&&l(f+131072);for(var _e=(1<<E)-1,be=(1<<g)-1,Be=u;;Be=u){var K=_[wa(i,u)&_e],Ve=K>>4;if(u+=K&15,u>m){c&&bn(0);break}if(K||bn(2),Ve<256)t[f++]=Ve;else if(Ve==256){Be=u,_=null;break}else{var Q=Ve-254;if(Ve>264){var w=Ve-257,ce=Tu[w];Q=Tn(i,u,(1<<ce)-1)+Ru[w],u+=ce}var de=v[wa(i,u)&be],D=de>>4;de||bn(3),u+=de&15;var ge=Nx[D];if(D>3){var ce=bu[D];ge+=wa(i,u)&(1<<ce)-1,u+=ce}if(u>m){c&&bn(0);break}a&&l(f+131072);var le=f+Q;if(f<ge){var ye=r-ge,Fe=Math.min(ge,le);for(ye+f<0&&bn(3);f<Fe;++f)t[f]=n[ye+f]}for(;f<le;++f)t[f]=t[f-ge]}}e.l=_,e.p=Be,e.b=f,e.f=h,_&&(h=1,e.m=E,e.d=v,e.n=g)}while(!h);return f!=t.length&&o?Bx(t,0,f):t.subarray(0,f)},Hx=new pn(0),Vx=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&bn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&bn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ao(i,e){return zx(i.subarray(Vx(i,e),-4),{i:2},e,e)}var Gx=typeof TextDecoder<"u"&&new TextDecoder,Wx=0;try{Gx.decode(Hx,{stream:!0}),Wx=1}catch{}function wh(i,e){if(e===Md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pc||e===qh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===pc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Xx extends N0{constructor(e){super(e),this.type=ii}parse(e){const te=Math.pow(2.7182818,2.2);function y(d,x){let S=0;for(let O=0;O<65536;++O)(O==0||d[O>>3]&1<<(O&7))&&(x[S++]=O);const M=S-1;for(;S<65536;)x[S++]=0;return M}function w(d){for(let x=0;x<16384;x++)d[x]={},d[x].len=0,d[x].lit=0,d[x].p=null}const X={l:0,c:0,lc:0};function q(d,x,S,M,O){for(;S<d;)x=x<<8|tt(M,O),S+=8;S-=d,X.l=x>>S&(1<<d)-1,X.c=x,X.lc=S}const J=new Array(59);function se(d){for(let S=0;S<=58;++S)J[S]=0;for(let S=0;S<65537;++S)J[d[S]]+=1;let x=0;for(let S=58;S>0;--S){const M=x+J[S]>>1;J[S]=x,x=M}for(let S=0;S<65537;++S){const M=d[S];M>0&&(d[S]=M|J[M]++<<6)}}function K(d,x,S,M,O,U){const V=x;let Z=0,j=0;for(;M<=O;M++){if(V.value-x.value>S)return!1;q(6,Z,j,d,V);const Y=X.l;if(Z=X.c,j=X.lc,U[M]=Y,Y==63){if(V.value-x.value>S)throw new Error("Something wrong with hufUnpackEncTable");q(8,Z,j,d,V);let G=X.l+6;if(Z=X.c,j=X.lc,M+G>O+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)U[M++]=0;M--}else if(Y>=59){let G=Y-59+2;if(M+G>O+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)U[M++]=0;M--}}se(U)}function oe(d){return d&63}function $(d){return d>>6}function ge(d,x,S,M){for(;x<=S;x++){const O=$(d[x]),U=oe(d[x]);if(O>>U)throw new Error("Invalid table entry");if(U>14){const V=M[O>>U-14];if(V.len)throw new Error("Invalid table entry");if(V.lit++,V.p){const Z=V.p;V.p=new Array(V.lit);for(let j=0;j<V.lit-1;++j)V.p[j]=Z[j]}else V.p=new Array(1);V.p[V.lit-1]=x}else if(U){let V=0;for(let Z=1<<14-U;Z>0;Z--){const j=M[(O<<14-U)+V];if(j.len||j.p)throw new Error("Invalid table entry");j.len=U,j.lit=x,V++}}}return!0}const _e={c:0,lc:0};function be(d,x,S,M){d=d<<8|tt(S,M),x+=8,_e.c=d,_e.lc=x}const Be={c:0,lc:0};function Ve(d,x,S,M,O,U,V,Z,j){if(d==x){M<8&&(be(S,M,O,U),S=_e.c,M=_e.lc),M-=8;let Y=S>>M;if(Y=new Uint8Array([Y])[0],Z.value+Y>j)return!1;const G=V[Z.value-1];for(;Y-- >0;)V[Z.value++]=G}else if(Z.value<j)V[Z.value++]=d;else return!1;Be.c=S,Be.lc=M}function Q(d){return d&65535}function ce(d){const x=Q(d);return x>32767?x-65536:x}const de={a:0,b:0};function D(d,x){const S=ce(d),O=ce(x),U=S+(O&1)+(O>>1),V=U,Z=U-O;de.a=V,de.b=Z}function le(d,x){const S=Q(d),M=Q(x),O=S-(M>>1)&65535,U=M+O-32768&65535;de.a=U,de.b=O}function ye(d,x,S,M,O,U,V){const Z=V<16384,j=S>O?O:S;let Y=1,G,ae;for(;Y<=j;)Y<<=1;for(Y>>=1,G=Y,Y>>=1;Y>=1;){ae=0;const fe=ae+U*(O-G),pe=U*Y,we=U*G,he=M*Y,ee=M*G;let Ce,Pe,rt,Lt;for(;ae<=fe;ae+=we){let $e=ae;const nt=ae+M*(S-G);for(;$e<=nt;$e+=ee){const je=$e+he,Ct=$e+pe,Rt=Ct+he;Z?(D(d[$e+x],d[Ct+x]),Ce=de.a,rt=de.b,D(d[je+x],d[Rt+x]),Pe=de.a,Lt=de.b,D(Ce,Pe),d[$e+x]=de.a,d[je+x]=de.b,D(rt,Lt),d[Ct+x]=de.a,d[Rt+x]=de.b):(le(d[$e+x],d[Ct+x]),Ce=de.a,rt=de.b,le(d[je+x],d[Rt+x]),Pe=de.a,Lt=de.b,le(Ce,Pe),d[$e+x]=de.a,d[je+x]=de.b,le(rt,Lt),d[Ct+x]=de.a,d[Rt+x]=de.b)}if(S&Y){const je=$e+pe;Z?D(d[$e+x],d[je+x]):le(d[$e+x],d[je+x]),Ce=de.a,d[je+x]=de.b,d[$e+x]=Ce}}if(O&Y){let $e=ae;const nt=ae+M*(S-G);for(;$e<=nt;$e+=ee){const je=$e+he;Z?D(d[$e+x],d[je+x]):le(d[$e+x],d[je+x]),Ce=de.a,d[je+x]=de.b,d[$e+x]=Ce}}G=Y,Y>>=1}return ae}function Fe(d,x,S,M,O,U,V,Z,j){let Y=0,G=0;const ae=V,fe=Math.trunc(M.value+(O+7)/8);for(;M.value<fe;)for(be(Y,G,S,M),Y=_e.c,G=_e.lc;G>=14;){const we=Y>>G-14&16383,he=x[we];if(he.len)G-=he.len,Ve(he.lit,U,Y,G,S,M,Z,j,ae),Y=Be.c,G=Be.lc;else{if(!he.p)throw new Error("hufDecode issues");let ee;for(ee=0;ee<he.lit;ee++){const Ce=oe(d[he.p[ee]]);for(;G<Ce&&M.value<fe;)be(Y,G,S,M),Y=_e.c,G=_e.lc;if(G>=Ce&&$(d[he.p[ee]])==(Y>>G-Ce&(1<<Ce)-1)){G-=Ce,Ve(he.p[ee],U,Y,G,S,M,Z,j,ae),Y=Be.c,G=Be.lc;break}}if(ee==he.lit)throw new Error("hufDecode issues")}}const pe=8-O&7;for(Y>>=pe,G-=pe;G>0;){const we=x[Y<<14-G&16383];if(we.len)G-=we.len,Ve(we.lit,U,Y,G,S,M,Z,j,ae),Y=Be.c,G=Be.lc;else throw new Error("hufDecode issues")}return!0}function at(d,x,S,M,O,U){const V={value:0},Z=S.value,j=xe(x,S),Y=xe(x,S);S.value+=4;const G=xe(x,S);if(S.value+=4,j<0||j>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ae=new Array(65537),fe=new Array(16384);w(fe);const pe=M-(S.value-Z);if(K(d,S,pe,j,Y,ae),G>8*(M-(S.value-Z)))throw new Error("Something wrong with hufUncompress");ge(ae,j,Y,fe),Fe(ae,fe,d,S,G,Y,U,O,V)}function Je(d,x,S){for(let M=0;M<S;++M)x[M]=d[x[M]]}function F(d){for(let x=1;x<d.length;x++){const S=d[x-1]+d[x]-128;d[x]=S}}function Vt(d,x){let S=0,M=Math.floor((d.length+1)/2),O=0;const U=d.length-1;for(;!(O>U||(x[O++]=d[S++],O>U));)x[O++]=d[M++]}function Qe(d){let x=d.byteLength;const S=new Array;let M=0;const O=new DataView(d);for(;x>0;){const U=O.getInt8(M++);if(U<0){const V=-U;x-=V+1;for(let Z=0;Z<V;Z++)S.push(O.getUint8(M++))}else{const V=U;x-=2;const Z=O.getUint8(M++);for(let j=0;j<V+1;j++)S.push(Z)}}return S}function ct(d,x,S,M,O,U){let V=new DataView(U.buffer);const Z=S[d.idx[0]].width,j=S[d.idx[0]].height,Y=3,G=Math.floor(Z/8),ae=Math.ceil(Z/8),fe=Math.ceil(j/8),pe=Z-(ae-1)*8,we=j-(fe-1)*8,he={value:0},ee=new Array(Y),Ce=new Array(Y),Pe=new Array(Y),rt=new Array(Y),Lt=new Array(Y);for(let nt=0;nt<Y;++nt)Lt[nt]=x[d.idx[nt]],ee[nt]=nt<1?0:ee[nt-1]+ae*fe,Ce[nt]=new Float32Array(64),Pe[nt]=new Uint16Array(64),rt[nt]=new Uint16Array(ae*64);for(let nt=0;nt<fe;++nt){let je=8;nt==fe-1&&(je=we);let Ct=8;for(let Ge=0;Ge<ae;++Ge){Ge==ae-1&&(Ct=pe);for(let mt=0;mt<Y;++mt)Pe[mt].fill(0),Pe[mt][0]=O[ee[mt]++],ke(he,M,Pe[mt]),St(Pe[mt],Ce[mt]),He(Ce[mt]);P(Ce);for(let mt=0;mt<Y;++mt)T(Ce[mt],rt[mt],Ge*64)}let Rt=0;for(let Ge=0;Ge<Y;++Ge){const mt=S[d.idx[Ge]].type;for(let Sn=8*nt;Sn<8*nt+je;++Sn){Rt=Lt[Ge][Sn];for(let di=0;di<G;++di){const In=di*64+(Sn&7)*8;V.setUint16(Rt+0*2*mt,rt[Ge][In+0],!0),V.setUint16(Rt+1*2*mt,rt[Ge][In+1],!0),V.setUint16(Rt+2*2*mt,rt[Ge][In+2],!0),V.setUint16(Rt+3*2*mt,rt[Ge][In+3],!0),V.setUint16(Rt+4*2*mt,rt[Ge][In+4],!0),V.setUint16(Rt+5*2*mt,rt[Ge][In+5],!0),V.setUint16(Rt+6*2*mt,rt[Ge][In+6],!0),V.setUint16(Rt+7*2*mt,rt[Ge][In+7],!0),Rt+=8*2*mt}}if(G!=ae)for(let Sn=8*nt;Sn<8*nt+je;++Sn){const di=Lt[Ge][Sn]+8*G*2*mt,In=G*64+(Sn&7)*8;for(let wr=0;wr<Ct;++wr)V.setUint16(di+wr*2*mt,rt[Ge][In+wr],!0)}}}const $e=new Uint16Array(Z);V=new DataView(U.buffer);for(let nt=0;nt<Y;++nt){S[d.idx[nt]].decoded=!0;const je=S[d.idx[nt]].type;if(S[nt].type==2)for(let Ct=0;Ct<j;++Ct){const Rt=Lt[nt][Ct];for(let Ge=0;Ge<Z;++Ge)$e[Ge]=V.getUint16(Rt+Ge*2*je,!0);for(let Ge=0;Ge<Z;++Ge)V.setFloat32(Rt+Ge*2*je,k($e[Ge]),!0)}}}function ke(d,x,S){let M,O=1;for(;O<64;)M=x[d.value],M==65280?O=64:M>>8==255?O+=M&255:(S[O]=M,O++),d.value++}function St(d,x){x[0]=k(d[0]),x[1]=k(d[1]),x[2]=k(d[5]),x[3]=k(d[6]),x[4]=k(d[14]),x[5]=k(d[15]),x[6]=k(d[27]),x[7]=k(d[28]),x[8]=k(d[2]),x[9]=k(d[4]),x[10]=k(d[7]),x[11]=k(d[13]),x[12]=k(d[16]),x[13]=k(d[26]),x[14]=k(d[29]),x[15]=k(d[42]),x[16]=k(d[3]),x[17]=k(d[8]),x[18]=k(d[12]),x[19]=k(d[17]),x[20]=k(d[25]),x[21]=k(d[30]),x[22]=k(d[41]),x[23]=k(d[43]),x[24]=k(d[9]),x[25]=k(d[11]),x[26]=k(d[18]),x[27]=k(d[24]),x[28]=k(d[31]),x[29]=k(d[40]),x[30]=k(d[44]),x[31]=k(d[53]),x[32]=k(d[10]),x[33]=k(d[19]),x[34]=k(d[23]),x[35]=k(d[32]),x[36]=k(d[39]),x[37]=k(d[45]),x[38]=k(d[52]),x[39]=k(d[54]),x[40]=k(d[20]),x[41]=k(d[22]),x[42]=k(d[33]),x[43]=k(d[38]),x[44]=k(d[46]),x[45]=k(d[51]),x[46]=k(d[55]),x[47]=k(d[60]),x[48]=k(d[21]),x[49]=k(d[34]),x[50]=k(d[37]),x[51]=k(d[47]),x[52]=k(d[50]),x[53]=k(d[56]),x[54]=k(d[59]),x[55]=k(d[61]),x[56]=k(d[35]),x[57]=k(d[36]),x[58]=k(d[48]),x[59]=k(d[49]),x[60]=k(d[57]),x[61]=k(d[58]),x[62]=k(d[62]),x[63]=k(d[63])}function He(d){const x=.5*Math.cos(.7853975),S=.5*Math.cos(3.14159/16),M=.5*Math.cos(3.14159/8),O=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),V=.5*Math.cos(3*3.14159/8),Z=.5*Math.cos(7*3.14159/16),j=new Array(4),Y=new Array(4),G=new Array(4),ae=new Array(4);for(let fe=0;fe<8;++fe){const pe=fe*8;j[0]=M*d[pe+2],j[1]=V*d[pe+2],j[2]=M*d[pe+6],j[3]=V*d[pe+6],Y[0]=S*d[pe+1]+O*d[pe+3]+U*d[pe+5]+Z*d[pe+7],Y[1]=O*d[pe+1]-Z*d[pe+3]-S*d[pe+5]-U*d[pe+7],Y[2]=U*d[pe+1]-S*d[pe+3]+Z*d[pe+5]+O*d[pe+7],Y[3]=Z*d[pe+1]-U*d[pe+3]+O*d[pe+5]-S*d[pe+7],G[0]=x*(d[pe+0]+d[pe+4]),G[3]=x*(d[pe+0]-d[pe+4]),G[1]=j[0]+j[3],G[2]=j[1]-j[2],ae[0]=G[0]+G[1],ae[1]=G[3]+G[2],ae[2]=G[3]-G[2],ae[3]=G[0]-G[1],d[pe+0]=ae[0]+Y[0],d[pe+1]=ae[1]+Y[1],d[pe+2]=ae[2]+Y[2],d[pe+3]=ae[3]+Y[3],d[pe+4]=ae[3]-Y[3],d[pe+5]=ae[2]-Y[2],d[pe+6]=ae[1]-Y[1],d[pe+7]=ae[0]-Y[0]}for(let fe=0;fe<8;++fe)j[0]=M*d[16+fe],j[1]=V*d[16+fe],j[2]=M*d[48+fe],j[3]=V*d[48+fe],Y[0]=S*d[8+fe]+O*d[24+fe]+U*d[40+fe]+Z*d[56+fe],Y[1]=O*d[8+fe]-Z*d[24+fe]-S*d[40+fe]-U*d[56+fe],Y[2]=U*d[8+fe]-S*d[24+fe]+Z*d[40+fe]+O*d[56+fe],Y[3]=Z*d[8+fe]-U*d[24+fe]+O*d[40+fe]-S*d[56+fe],G[0]=x*(d[fe]+d[32+fe]),G[3]=x*(d[fe]-d[32+fe]),G[1]=j[0]+j[3],G[2]=j[1]-j[2],ae[0]=G[0]+G[1],ae[1]=G[3]+G[2],ae[2]=G[3]-G[2],ae[3]=G[0]-G[1],d[0+fe]=ae[0]+Y[0],d[8+fe]=ae[1]+Y[1],d[16+fe]=ae[2]+Y[2],d[24+fe]=ae[3]+Y[3],d[32+fe]=ae[3]-Y[3],d[40+fe]=ae[2]-Y[2],d[48+fe]=ae[1]-Y[1],d[56+fe]=ae[0]-Y[0]}function P(d){for(let x=0;x<64;++x){const S=d[0][x],M=d[1][x],O=d[2][x];d[0][x]=S+1.5747*O,d[1][x]=S-.1873*M-.4682*O,d[2][x]=S+1.8556*M}}function T(d,x,S){for(let M=0;M<64;++M)x[S+M]=bl.toHalfFloat(W(d[M]))}function W(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(te,Math.abs(d)-1)}function ie(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ue(d){const x=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),S=new Uint8Array(Qe(x)),M=new Uint8Array(S.length);return F(S),Vt(S,M),new DataView(M.buffer)}function ne(d){const x=d.array.slice(d.offset.value,d.offset.value+d.size),S=ao(x),M=new Uint8Array(S.length);return F(S),Vt(S,M),new DataView(M.buffer)}function Ie(d){const x=d.viewer,S={value:d.offset.value},M=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),O=new Uint8Array(8192);let U=0;const V=new Array(d.inputChannels.length);for(let we=0,he=d.inputChannels.length;we<he;we++)V[we]={},V[we].start=U,V[we].end=V[we].start,V[we].nx=d.columns,V[we].ny=d.lines,V[we].size=d.type,U+=V[we].nx*V[we].ny*V[we].size;const Z=re(x,S),j=re(x,S);if(j>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(Z<=j)for(let we=0;we<j-Z+1;we++)O[we+Z]=Oe(x,S);const Y=new Uint16Array(65536),G=y(O,Y),ae=xe(x,S);at(d.array,x,S,ae,M,U);for(let we=0;we<d.inputChannels.length;++we){const he=V[we];for(let ee=0;ee<V[we].size;++ee)ye(M,he.start+ee,he.nx,he.size,he.ny,he.nx*he.size,G)}Je(Y,M,U);let fe=0;const pe=new Uint8Array(M.buffer.byteLength);for(let we=0;we<d.lines;we++)for(let he=0;he<d.inputChannels.length;he++){const ee=V[he],Ce=ee.nx*ee.size,Pe=new Uint8Array(M.buffer,ee.end*2,Ce*2);pe.set(Pe,fe),fe+=Ce*2,ee.end+=Ce}return new DataView(pe.buffer)}function Se(d){const x=d.array.slice(d.offset.value,d.offset.value+d.size),S=ao(x),M=d.inputChannels.length*d.lines*d.columns*d.totalBytes,O=new ArrayBuffer(M),U=new DataView(O);let V=0,Z=0;const j=new Array(4);for(let Y=0;Y<d.lines;Y++)for(let G=0;G<d.inputChannels.length;G++){let ae=0;switch(d.inputChannels[G].pixelType){case 1:j[0]=V,j[1]=j[0]+d.columns,V=j[1]+d.columns;for(let pe=0;pe<d.columns;++pe){const we=S[j[0]++]<<8|S[j[1]++];ae+=we,U.setUint16(Z,ae,!0),Z+=2}break;case 2:j[0]=V,j[1]=j[0]+d.columns,j[2]=j[1]+d.columns,V=j[2]+d.columns;for(let pe=0;pe<d.columns;++pe){const we=S[j[0]++]<<24|S[j[1]++]<<16|S[j[2]++]<<8;ae+=we,U.setUint32(Z,ae,!0),Z+=4}break}}return U}function Ae(d){const x=d.viewer,S={value:d.offset.value},M=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),O={version:Ye(x,S),unknownUncompressedSize:Ye(x,S),unknownCompressedSize:Ye(x,S),acCompressedSize:Ye(x,S),dcCompressedSize:Ye(x,S),rleCompressedSize:Ye(x,S),rleUncompressedSize:Ye(x,S),rleRawSize:Ye(x,S),totalAcUncompressedCount:Ye(x,S),totalDcUncompressedCount:Ye(x,S),acCompression:Ye(x,S)};if(O.version<2)throw new Error("EXRLoader.parse: "+Wn.compression+" version "+O.version+" is unsupported");const U=new Array;let V=re(x,S)-2;for(;V>0;){const he=et(x.buffer,S),ee=Oe(x,S),Ce=ee>>2&3,Pe=(ee>>4)-1,rt=new Int8Array([Pe])[0],Lt=Oe(x,S);U.push({name:he,index:rt,type:Lt,compression:Ce}),V-=he.length+3}const Z=Wn.channels,j=new Array(d.inputChannels.length);for(let he=0;he<d.inputChannels.length;++he){const ee=j[he]={},Ce=Z[he];ee.name=Ce.name,ee.compression=0,ee.decoded=!1,ee.type=Ce.pixelType,ee.pLinear=Ce.pLinear,ee.width=d.columns,ee.height=d.lines}const Y={idx:new Array(3)};for(let he=0;he<d.inputChannels.length;++he){const ee=j[he];for(let Ce=0;Ce<U.length;++Ce){const Pe=U[Ce];ee.name==Pe.name&&(ee.compression=Pe.compression,Pe.index>=0&&(Y.idx[Pe.index]=he),ee.offset=he)}}let G,ae,fe;if(O.acCompressedSize>0)switch(O.acCompression){case 0:G=new Uint16Array(O.totalAcUncompressedCount),at(d.array,x,S,O.acCompressedSize,G,O.totalAcUncompressedCount);break;case 1:const he=d.array.slice(S.value,S.value+O.totalAcUncompressedCount),ee=ao(he);G=new Uint16Array(ee.buffer),S.value+=O.totalAcUncompressedCount;break}if(O.dcCompressedSize>0){const he={array:d.array,offset:S,size:O.dcCompressedSize};ae=new Uint16Array(ne(he).buffer),S.value+=O.dcCompressedSize}if(O.rleRawSize>0){const he=d.array.slice(S.value,S.value+O.rleCompressedSize),ee=ao(he);fe=Qe(ee.buffer),S.value+=O.rleCompressedSize}let pe=0;const we=new Array(j.length);for(let he=0;he<we.length;++he)we[he]=new Array;for(let he=0;he<d.lines;++he)for(let ee=0;ee<j.length;++ee)we[ee].push(pe),pe+=j[ee].width*d.type*2;ct(Y,we,j,G,ae,M);for(let he=0;he<j.length;++he){const ee=j[he];if(!ee.decoded)switch(ee.compression){case 2:let Ce=0,Pe=0;for(let rt=0;rt<d.lines;++rt){let Lt=we[he][Ce];for(let $e=0;$e<ee.width;++$e){for(let nt=0;nt<2*ee.type;++nt)M[Lt++]=fe[Pe+nt*ee.width*ee.height];Pe++}Ce++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(M.buffer)}function et(d,x){const S=new Uint8Array(d);let M=0;for(;S[x.value+M]!=0;)M+=1;const O=new TextDecoder().decode(S.slice(x.value,x.value+M));return x.value=x.value+M+1,O}function me(d,x,S){const M=new TextDecoder().decode(new Uint8Array(d).slice(x.value,x.value+S));return x.value=x.value+S,M}function Re(d,x){const S=De(d,x),M=xe(d,x);return[S,M]}function ze(d,x){const S=xe(d,x),M=xe(d,x);return[S,M]}function De(d,x){const S=d.getInt32(x.value,!0);return x.value=x.value+4,S}function xe(d,x){const S=d.getUint32(x.value,!0);return x.value=x.value+4,S}function tt(d,x){const S=d[x.value];return x.value=x.value+1,S}function Oe(d,x){const S=d.getUint8(x.value);return x.value=x.value+1,S}const Ye=function(d,x){let S;return"getBigInt64"in DataView.prototype?S=Number(d.getBigInt64(x.value,!0)):S=d.getUint32(x.value+4,!0)+Number(d.getUint32(x.value,!0)<<32),x.value+=8,S};function B(d,x){const S=d.getFloat32(x.value,!0);return x.value+=4,S}function Me(d,x){return bl.toHalfFloat(B(d,x))}function k(d){const x=(d&31744)>>10,S=d&1023;return(d>>15?-1:1)*(x?x===31?S?NaN:1/0:Math.pow(2,x-15)*(1+S/1024):6103515625e-14*(S/1024))}function re(d,x){const S=d.getUint16(x.value,!0);return x.value+=2,S}function Ee(d,x){return k(re(d,x))}function Te(d,x,S,M){const O=S.value,U=[];for(;S.value<O+M-1;){const V=et(x,S),Z=De(d,S),j=Oe(d,S);S.value+=3;const Y=De(d,S),G=De(d,S);U.push({name:V,pixelType:Z,pLinear:j,xSampling:Y,ySampling:G})}return S.value+=1,U}function st(d,x){const S=B(d,x),M=B(d,x),O=B(d,x),U=B(d,x),V=B(d,x),Z=B(d,x),j=B(d,x),Y=B(d,x);return{redX:S,redY:M,greenX:O,greenY:U,blueX:V,blueY:Z,whiteX:j,whiteY:Y}}function wt(d,x){const S=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],M=Oe(d,x);return S[M]}function Gt(d,x){const S=De(d,x),M=De(d,x),O=De(d,x),U=De(d,x);return{xMin:S,yMin:M,xMax:O,yMax:U}}function lt(d,x){const S=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],M=Oe(d,x);return S[M]}function Wt(d,x){const S=["ENVMAP_LATLONG","ENVMAP_CUBE"],M=Oe(d,x);return S[M]}function vn(d,x){const S=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],M=["ROUND_DOWN","ROUND_UP"],O=xe(d,x),U=xe(d,x),V=Oe(d,x);return{xSize:O,ySize:U,levelMode:S[V&15],roundingMode:M[V>>4]}}function yr(d,x){const S=B(d,x),M=B(d,x);return[S,M]}function Er(d,x){const S=B(d,x),M=B(d,x),O=B(d,x);return[S,M,O]}function Gn(d,x,S,M,O){if(M==="string"||M==="stringvector"||M==="iccProfile")return me(x,S,O);if(M==="chlist")return Te(d,x,S,O);if(M==="chromaticities")return st(d,S);if(M==="compression")return wt(d,S);if(M==="box2i")return Gt(d,S);if(M==="envmap")return Wt(d,S);if(M==="tiledesc")return vn(d,S);if(M==="lineOrder")return lt(d,S);if(M==="float")return B(d,S);if(M==="v2f")return yr(d,S);if(M==="v3f")return Er(d,S);if(M==="int")return De(d,S);if(M==="rational")return Re(d,S);if(M==="timecode")return ze(d,S);if(M==="preview")return S.value+=O,"skipped";S.value+=O}function Hs(d,x){const S=Math.log2(d);return x=="ROUND_DOWN"?Math.floor(S):Math.ceil(S)}function Mr(d,x,S){let M=0;switch(d.levelMode){case"ONE_LEVEL":M=1;break;case"MIPMAP_LEVELS":M=Hs(Math.max(x,S),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return M}function Vs(d,x,S,M){const O=new Array(d);for(let U=0;U<d;U++){const V=1<<U;let Z=x/V|0;M=="ROUND_UP"&&Z*V<x&&(Z+=1);const j=Math.max(Z,1);O[U]=(j+S-1)/S|0}return O}function Zi(){const d=this,x=d.offset,S={value:0};for(let M=0;M<d.tileCount;M++){const O=De(d.viewer,x),U=De(d.viewer,x);x.value+=8,d.size=xe(d.viewer,x);const V=O*d.blockWidth,Z=U*d.blockHeight;d.columns=V+d.blockWidth>d.width?d.width-V:d.blockWidth,d.lines=Z+d.blockHeight>d.height?d.height-Z:d.blockHeight;const j=d.columns*d.totalBytes,G=d.size<d.lines*j?d.uncompress(d):ie(d);x.value+=d.size;for(let ae=0;ae<d.lines;ae++){const fe=ae*d.columns*d.totalBytes;for(let pe=0;pe<d.inputChannels.length;pe++){const we=Wn.channels[pe].name,he=d.channelByteOffsets[we]*d.columns,ee=d.decodeChannels[we];if(ee===void 0)continue;S.value=fe+he;const Ce=(d.height-(1+Z+ae))*d.outLineWidth;for(let Pe=0;Pe<d.columns;Pe++){const rt=Ce+(Pe+V)*d.outputChannels+ee;d.byteArray[rt]=d.getter(G,S)}}}}}function Tr(){const d=this,x=d.offset,S={value:0};for(let M=0;M<d.height/d.blockHeight;M++){const O=De(d.viewer,x)-Wn.dataWindow.yMin;d.size=xe(d.viewer,x),d.lines=O+d.blockHeight>d.height?d.height-O:d.blockHeight;const U=d.columns*d.totalBytes,Z=d.size<d.lines*U?d.uncompress(d):ie(d);x.value+=d.size;for(let j=0;j<d.blockHeight;j++){const Y=M*d.blockHeight,G=j+d.scanOrder(Y);if(G>=d.height)continue;const ae=j*U,fe=(d.height-1-G)*d.outLineWidth;for(let pe=0;pe<d.inputChannels.length;pe++){const we=Wn.channels[pe].name,he=d.channelByteOffsets[we]*d.columns,ee=d.decodeChannels[we];if(ee!==void 0){S.value=ae+he;for(let Ce=0;Ce<d.columns;Ce++){const Pe=fe+Ce*d.outputChannels+ee;d.byteArray[Pe]=d.getter(Z,S)}}}}}}function $i(d,x,S){const M={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");M.version=d.getUint8(4);const O=d.getUint8(5);M.spec={singleTile:!!(O&2),longName:!!(O&4),deepFormat:!!(O&8),multiPart:!!(O&16)},S.value=8;let U=!0;for(;U;){const V=et(x,S);if(V==0)U=!1;else{const Z=et(x,S),j=xe(d,S),Y=Gn(d,x,S,Z,j);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${Z}'.`):M[V]=Y}}if(O&-7)throw console.error("THREE.EXRHeader:",M),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return M}function br(d,x,S,M,O){const U={size:0,viewer:x,array:S,offset:M,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Nt};switch(d.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=ie;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=ue;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=ne;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=ne;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=Ie;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=Se;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=Ae;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=Ae;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}const V={};for(const G of d.channels)switch(G.name){case"Y":case"R":case"G":case"B":case"A":V[G.name]=!0,U.type=G.pixelType}let Z=!1;if(V.R&&V.G&&V.B)Z=!V.A,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3};else if(V.Y)U.outputChannels=1,U.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(U.type==1)switch(O){case nn:U.getter=Ee;break;case ii:U.getter=re;break}else if(U.type==2)switch(O){case nn:U.getter=B;break;case ii:U.getter=Me}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+d.compression+".");U.columns=U.width;const j=U.width*U.height*U.outputChannels;switch(O){case nn:U.byteArray=new Float32Array(j),Z&&U.byteArray.fill(1,0,j);break;case ii:U.byteArray=new Uint16Array(j),Z&&U.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",O);break}let Y=0;for(const G of d.channels)U.decodeChannels[G.name]!==void 0&&(U.channelByteOffsets[G.name]=Y),Y+=G.pixelType*2;if(U.totalBytes=Y,U.outLineWidth=U.width*U.outputChannels,d.lineOrder==="INCREASING_Y"?U.scanOrder=G=>G:U.scanOrder=G=>U.height-1-G,U.outputChannels==4?(U.format=cn,U.colorSpace=Nt):(U.format=wo,U.colorSpace=Qn),d.spec.singleTile){U.blockHeight=d.tiles.ySize,U.blockWidth=d.tiles.xSize;const G=Mr(d.tiles,U.width,U.height),ae=Vs(G,U.width,d.tiles.xSize,d.tiles.roundingMode),fe=Vs(G,U.height,d.tiles.ySize,d.tiles.roundingMode);U.tileCount=ae[0]*fe[0];for(let pe=0;pe<G;pe++)for(let we=0;we<fe[pe];we++)for(let he=0;he<ae[pe];he++)Ye(x,M);U.decode=Zi.bind(U)}else{U.blockWidth=U.width;const G=Math.ceil(U.height/U.blockHeight);for(let ae=0;ae<G;ae++)Ye(x,M);U.decode=Tr.bind(U)}return U}const Gs={value:0},Ar=new DataView(e),Fo=new Uint8Array(e),Wn=$i(Ar,e,Gs),A=br(Wn,Ar,Fo,Gs,this.type);return A.decode(),{header:Wn,width:A.width,height:A.height,data:A.byteArray,format:A.format,colorSpace:A.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=kt,o.magFilter=kt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}}class jx extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $x(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new uv(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=sr.extractUrlBase(e);o=sr.resolveURL(l,this.path)}else o=sr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pu){try{o[it.KHR_BINARY_GLTF]=new dv(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new bv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new Kx;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new fv(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new pv;break;case it.KHR_MESH_QUANTIZATION:o[u]=new mv;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Yx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qx{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new k0(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Do(h),l.distance=u;break;case"spot":l=new O0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Kx{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const s=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}}class Zx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class $x{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}}class Jx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Qx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ev{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class tv{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class nv{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}}class iv{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class sv{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}}class rv{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ov{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class av{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class cv{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lv{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hv{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(_),h,u,f,s.mode,s.filter),_})})}else return null}}class uv{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,_=[];for(const v of u){const E=new Xe,g=new L,m=new rn,C=new L(1,1,1),b=new S0(v.geometry,v.material,f);for(let R=0;R<f;R++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,R),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,R),c.SCALE&&C.fromBufferAttribute(c.SCALE,R),b.setMatrixAt(R,E.compose(g,m,C));for(const R in c)if(R==="_COLOR_0"){const z=c[R];b.instanceColor=new _c(z.array,z.itemSize,z.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&v.geometry.setAttribute(R,c[R]);dt.prototype.copy.call(b,v),this.parser.assignFinalMaterial(b),_.push(b)}return h.isGroup?(h.clear(),h.add(..._),h):_[0]}))}}const Pu="glTF",Qs=12,Rh={JSON:1313821514,BIN:5130562};class dv{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qs,r=new DataView(e,Qs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Rh.JSON){const l=new Uint8Array(e,Qs+o,a);this.content=n.decode(l)}else if(c===Rh.BIN){const l=Qs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ec[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ec[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],_=Ss[f.componentType];l[u]=_.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(_){for(const v in _.attributes){const E=_.attributes[v],g=c[v];g!==void 0&&(E.normalized=g)}u(_)},a,l,Nt,f)})})}}class pv{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mv{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Lu extends _r{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,_=f*u,v=e*l,E=v-l,g=-2*_+3*f,m=_-f,C=1-g,b=m-f+u;for(let R=0;R!==a;R++){const z=o[E+R+a],N=o[E+R+c]*h,I=o[v+R+a],H=o[v+R]*h;r[R]=C*z+b*N+g*I+m*H}return r}}const gv=new rn;class _v extends Lu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return gv.fromArray(r).normalize().toArray(r),r}}const dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ch={9728:$t,9729:kt,9984:Bh,9985:lo,9986:er,9987:Un},Ph={33071:Nn,33648:vo,10497:Ts},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xv={CUBICSPLINE:void 0,LINEAR:hr,STEP:lr},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ri({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function Fi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function yv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ev(i){let e;const t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pa(t.attributes):e=i.indices+":"+Pa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pa(i.targets[n]);return e}function Pa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Mc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Tv=new Xe;class bv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new xu(this.options.manager):this.textureLoader=new z0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Fi(r,a,s),Jn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(sr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ra[s.type],a=Ss[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new At(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ra[s.type],l=Ss[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,_=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let E,g;if(_&&_!==u){const m=Math.floor(f/_),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(C);b||(E=new l(a,m*_,s.count*_/h),b=new m0(E,_/h),t.cache.add(C,b)),g=new Oc(b,c,f%_/h,v)}else a===null?E=new l(s.count*c):E=new l(a,f,s.count*c),g=new At(E,c,v);if(s.sparse!==void 0){const m=Ra.SCALAR,C=Ss[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,R=s.sparse.values.byteOffset||0,z=new C(o[1],b,s.sparse.count*m),N=new l(o[2],R,s.sparse.count*c);a!==null&&(g=new At(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,H=z.length;I<H;I++){const te=z[I];if(g.setX(te,N[I*c]),c>=2&&g.setY(te,N[I*c+1]),c>=3&&g.setZ(te,N[I*c+2]),c>=4&&g.setW(te,N[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ch[f.magFilter]||kt,h.minFilter=Ch[f.minFilter]||Un,h.wrapS=Ph[f.wrapS]||Ts,h.wrapT=Ph[f.wrapT]||Ts,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,_){let v=f;t.isImageBitmapLoader===!0&&(v=function(E){const g=new zt(E);g.needsUpdate=!0,f(g)}),t.load(sr.resolveURL(u,r.path),v,void 0,_)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Jn(u,o),u.userData.mimeType=o.mimeType||Mv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new zc,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ln,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ri}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){const u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Nt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=fn);const h=r.alphaMode||Ca.OPAQUE;if(h===Ca.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ca.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Cn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&o!==Cn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Fi(s,u,r),u})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Lh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Ev(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Lh(new yt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?vv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let _=0,v=h.length;_<v;_++){const E=h[_],g=o[_];let m;const C=l[_];if(g.mode===dn.TRIANGLES||g.mode===dn.TRIANGLE_STRIP||g.mode===dn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new _0(E,C):new vt(E,C),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===dn.TRIANGLE_STRIP?m.geometry=wh(m.geometry,qh):g.mode===dn.TRIANGLE_FAN&&(m.geometry=wh(m.geometry,pc));else if(g.mode===dn.LINES)m=new y0(E,C);else if(g.mode===dn.LINE_STRIP)m=new mn(E,C);else if(g.mode===dn.LINE_LOOP)m=new kc(E,C);else if(g.mode===dn.POINTS)m=new pu(E,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&yv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Jn(m,r),g.extensions&&Fi(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let _=0,v=u.length;_<v;_++)t.associations.set(u[_],{meshes:e,primitives:_});if(u.length===1)return r.extensions&&Fi(s,u[0],r),u[0];const f=new Gi;r.extensions&&Fi(s,f,r),t.associations.set(f,{meshes:e});for(let _=0,v=u.length;_<v;_++)f.add(u[_]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(We.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Nc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Xe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bc(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const _=s.channels[u],v=s.samplers[_.sampler],E=_.target,g=E.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,C=s.parameters!==void 0?s.parameters[v.output]:v.output;E.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",C)),l.push(v),h.push(E))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],_=u[1],v=u[2],E=u[3],g=u[4],m=[];for(let C=0,b=f.length;C<b;C++){const R=f[C],z=_[C],N=v[C],I=E[C],H=g[C];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const te=n._createAnimationTracks(R,z,N,I,H);if(te)for(let y=0;y<te.length;y++)m.push(te[y])}return new R0(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(_){_.isSkinnedMesh&&_.bind(f,Tv)});for(let _=0,v=u.length;_<v;_++)h.add(u[_]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new fu:l.length>1?h=new Gi:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Jn(h,r),r.extensions&&Fi(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Gi;n.name&&(r.name=s.createUniqueName(n.name)),Jn(r,n),n.extensions&&Fi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,_]of s.associations)(f instanceof On||f instanceof zt)&&u.set(f,_);return h.traverse(f=>{const _=s.associations.get(f);_!=null&&u.set(f,_)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];yi[r.path]===yi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(yi[r.path]){case yi.weights:l=Cs;break;case yi.rotation:l=Ps;break;case yi.position:case yi.scale:l=Ls;break;default:switch(n.itemSize){case 1:l=Cs;break;case 2:case 3:default:l=Ls;break}break}const h=s.interpolation!==void 0?xv[s.interpolation]:hr,u=this._getArrayFromAccessor(n);for(let f=0,_=c.length;f<_;f++){const v=new l(c[f]+"."+yi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ps?_v:Lu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Av(i,e,t){const n=e.attributes,s=new hi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=Mc(Ss[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],_=f.min,v=f.max;if(_!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(_[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(_[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(_[2]),Math.abs(v[2]))),f.normalized){const E=Mc(Ss[f.componentType]);c.multiplyScalar(E)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Lh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Ec[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Jn(i,e),Av(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sv(i,e.targets,t):i})}const Le=new p0,Ze=new Zt(p.STANDARD_FOV,window.innerWidth/window.innerHeight,1e-6,1e3),ks=new f0({antialias:!0}),vr=new _u,Rn=new xu(vr),wv=new Xx(vr),Iu=new jx(vr);ks.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ks.domElement);const fr=new Do(16777215,3,1e3);fr.position.set(0,0,0);fr.decay=0;const Ih=new vu(4210752,.7),Dh=new vu(16777215,2.5),Ht=new tx(Ze,ks.domElement);Ht.enableDamping=!0;Ht.dampingFactor=.1;Ht.screenSpacePanning=!0;Ht.enableZoom=!1;Ht.rotateSpeed=.7;const Pn=new mx(Ze,ks.domElement);Pn.noRotate=!0;Pn.noPan=!0;Pn.noZoom=!1;Pn.zoomSpeed=1;Pn.dynamicDampingFactor=.15;function Wi(i,e=!0){e?Ze.fov=We.lerp(Ze.fov,i,.1):Ze.fov=i,Ze.updateProjectionMatrix()}function Rv(){const i=new yt,e=1e4,t=new Float32Array(e*3),n=new Float32Array(e*3),s=[new Ue().setHex(to("#ffffff")),new Ue().setHex(to("#f3a4a4")),new Ue().setHex(to("#cbb9ea")),new Ue().setHex(to("#f6c68e"))];for(let o=0;o<e;o++){let a,c,l;do a=(Math.random()-.5)*4e3,c=(Math.random()-.5)*4e3,l=(Math.random()-.5)*4e3;while(Math.abs(a)<500&&Math.abs(c)<200&&Math.abs(l)<500);t[o*3]=a,t[o*3+1]=c,t[o*3+2]=l;const h=s[Math.floor(Math.random()*s.length)];n[o*3]=h.r,n[o*3+1]=h.g,n[o*3+2]=h.b}i.setAttribute("position",new At(t,3)),i.setAttribute("color",new At(n,3));const r=new zc({size:.5,sizeAttenuation:!0,vertexColors:!0});return new pu(i,r)}function Du(i,e,t){const n=new Hc(i,t),s=3;return n.setAttribute("position",new At(n.attributes.position.array.slice(s,n.attributes.position.array.length-s),s)),n.index=null,new kc(n,new ln({color:e}))}function Cv(i,e){const t=new Float32Array(i.length*3);for(let n=0;n<i.length;n++)t[n*3]=i[n].x,t[n*3+1]=i[n].y,t[n*3+2]=i[n].z;e.setAttribute("position",new At(t,3))}function ht(i){const e=document.getElementById("action-label-container"),t=document.getElementById("action-label");t.textContent=i,e.style.display="",window.setTimeout(function(){e.classList.remove("center-label-show"),e.style.display="none"},800)}function gn(){const i=document.getElementById("label-container"),e=document.getElementById("target-label"),t=document.getElementById("distance-label"),n=document.getElementById("speed-label"),s=document.getElementById("weight-label");if(!p.SHOW_LABEL||!p.targetPlanet&&!p.spacecraftSelected)i.style.display="none";else{if(p.targetPlanet&&(e.textContent=p.targetPlanet.name),p.targetPlanet&&!p.spacecraftSelected){e.style.color="",i.style.color=Sa(p.targetPlanet.colorHex),p.targetPlanet.isSun?t.textContent="":t.textContent=ya(p.targetPlanet.distanceToSun,p.distanceUnit,hn,xa);const r=Math.sqrt(p.targetPlanet.xVel**2+p.targetPlanet.yVel**2+p.targetPlanet.zVel**2);n.textContent=r.toPrecision(4)+" km/s",s.textContent=p.targetPlanet.mass.toPrecision(4)+" kg"}else if(p.spacecraftSelected){p.targetPlanet?(e.style.color=Sa(p.targetPlanet.colorHex),t.textContent=ya(p.spacecraft.distanceToTarget,p.distanceUnit,hn,xa),p.spacecraftMatchVelocity?i.style.color=Sa(p.targetPlanet.colorHex):i.style.color="#ffffff"):(i.style.color="#ffffff",e.textContent="",t.textContent=ya(p.spacecraft.distanceToSun,p.distanceUnit,hn,xa),s.textContent="");const r=Math.sqrt(p.spacecraft.xVel**2+p.spacecraft.yVel**2+p.spacecraft.zVel**2),o=r/Z0,a=o>=.001?" | "+o.toPrecision(2)+"c":"";let c=r.toPrecision(4)+" km/s"+a;p.spacecraftMatchVelocity&&(c="[ "+c+" ]"),n.textContent=c}i.style.display=""}}function Nu(){p.REALISTIC_LIGHTING?(Le.add(fr),Le.add(Ih),Le.remove(Dh)):(Le.remove(fr),Le.remove(Ih),Le.add(Dh))}function Pv(i){p.backgroundGrid?(document.getElementById("loading-screen").style.display="",Rn.load(p.backgroundGrid,e=>{e.mapping=ar,e.colorSpace=bt,i.material.map=e,Le.add(i)})):Le.remove(i)}function Is(i){p.targetPlanet=i,p.targetPlanet!==null?(document.getElementById("target-planet-label").textContent=p.targetPlanet.name+": ",document.getElementById("target-planet-settings").classList.remove("hidden"),p.targetPlanet.isSun?document.getElementById("PLANET_TRANSFORM_ITEM").classList.add("disabled"):document.getElementById("PLANET_TRANSFORM_ITEM").classList.remove("disabled")):document.getElementById("target-planet-settings").classList.add("hidden")}function No(i,e){i!==p.spacecraftSelected&&Zc(e,i,null),p.spacecraftSelected=i,p.spacecraftSelected?(p.spacecraftMatchVelocity=!1,document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent="Leave spacecraft",document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.add("disabled"),document.getElementById("SPACECRAFT_MATCH_VELOCITY_CB").checked=!1,document.getElementById("spacecraft-settings").classList.remove("hidden"),Wi(p.SPACECRAFT_FOV)):(document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent="Enter spacecraft",document.getElementById("spacecraft-settings").classList.add("hidden"),Wi(p.STANDARD_FOV,!1))}function Zc(i,e,t=null){const n=document.getElementById("TARGET_SELECT");let s=0;t&&(s=p.targets.indexOf(t)),p.targets.length=0,p.targets.push(p.spacecraftSelected?"Free flight":"None");for(const r of i)p.targets.push(r.name);p.spacecraftSelected||p.targets.push("JWST"),n.innerHTML="",p.targets.forEach((r,o)=>{const a=document.createElement("option");a.value=o.toString(),a.selected=o===s,a.textContent=r,n.appendChild(a)})}function Kt(i){Lv(),p.isCameraLocked=i,document.getElementById("CAMERA_LOCK_CB").checked=p.isCameraLocked,p.targetPlanet&&!p.PAUSED||p.jwstSelected&&!p.PAUSED||p.spacecraftSelected?document.getElementById("CAMERA_LOCK").classList.remove("disabled"):document.getElementById("CAMERA_LOCK").classList.add("disabled")}function Lv(){Ht._sphericalDelta.set(0,0,0),Ht._panOffset.set(0,0,0),Pn._lastAngle=0,Pn._eye.set(0,0,0),Pn._zoomStart.set(1,1),Pn._zoomEnd.set(1,1)}function ti(i){p.isCameraSunLocked=i,document.getElementById("CAMERA_SUN_LOCK_CB").checked=p.isCameraSunLocked,(p.targetPlanet&&p.targetPlanet.name!=="Sun"||p.jwstSelected)&&!p.spacecraftSelected?document.getElementById("CAMERA_SUN_LOCK").classList.remove("disabled"):document.getElementById("CAMERA_SUN_LOCK").classList.add("disabled")}function Uu(i){const e=dr[i];if(!e)p.starBackground===null&&(p.starBackground=Rv()),Le.background=null,Le.add(p.starBackground);else{Le.remove(p.starBackground);const t=e;t&&(document.getElementById("loading-screen").style.display="",wv.load(t,n=>{n.mapping=ar,Le.background=n}))}zs("BACKGROUND_SELECT",i)}function Iv(){let i=p.PLANET_SCALE/ot;i>1&&(i=Math.round(i/2)*2),document.getElementById("planet-scale").value=i,document.getElementById("planet-scale-display").textContent=i.toString()}function zs(i,e){const t=document.getElementById(i);t.value=e}function Ds(i){p.transitionAnimationActive=i,document.activeElement.blur(),p.cameraSunLockChanged=!1,p.transitionAnimationActive?document.getElementById("menu-content").classList.add("disabled"):document.getElementById("menu-content").classList.remove("disabled")}function pr(i){return i.isSun?new L((0-i.sphere.position.x)/i.sphere.position.x*(i.radius*1.8),i.radius,(0-i.sphere.position.z)/i.sphere.position.z*(i.radius*1.8)):new L((0-i.sphere.position.x)/i.sphere.position.x*(i.radius*4),i.radius,(0-i.sphere.position.z)/i.sphere.position.z*(i.radius*4))}class Dv extends Bn{constructor(e={}){super(),this.vertexShader=`
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
      `,this.uniforms={opacity:new Vi(e.opacity!==void 0?e.opacity:1),glowInternalRadius:new Vi(e.glowInternalRadius!==void 0?e.glowInternalRadius:6),glowSharpness:new Vi(e.glowSharpness!==void 0?e.glowSharpness:.5),falloff:new Vi(e.falloff!==void 0?e.falloff:.1),glowColor:new Vi(e.glowColor!==void 0?new Ue(e.glowColor):new Ue("#00d5ff"))},this.setValues(e),this.depthTest=e.depthTest!==void 0?e.depthTest:!1,this.blending=e.blendMode!==void 0?e.blendMode:xo,this.transparent=!1,this.side=e.side!==void 0?e.side:fn}}class Nv{constructor(e,t,n,s,r,o,a,c){this.xVel=0,this.yVel=0,this.zVel=0,this.mass=e,this.angularVelocity=r,this.acceleration=o,this.obj=null,this.orbits=[],this.bolts=[],this.scale=a,this.distanceTosun=0,this.distanceToTarget=0,this.tiltAngle=c,this.container=new dt,this.container.scale.set(a,a,a),this.container.position.set(t,n,s),this.flameMaterial=new Bn({uniforms:{time:{value:0},scale:{value:a},originalScale:{value:.001},color1:{value:new Ue(12494)},color2:{value:new Ue(43214)}},vertexShader:`
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
            `,transparent:!0,blending:xo});const l=new Do(16731392,.03,10);l.position.set(0,0,0),l.visible=p.spacecraftLight;const h=new Vc(500*a,2e3*a,32),u=new vt(h,this.flameMaterial),f=new vt(h,this.flameMaterial),_=new vt(h,this.flameMaterial),v=new vt(h,this.flameMaterial);u.position.set(1.04,-1.2,-2.3),u.scale.set(.001/a,.001/a,7e-4/a),u.rotation.x=We.degToRad(-90),f.position.set(-1.04,-1.2,-2.3),f.scale.set(.001/a,.001/a,7e-4/a),f.rotation.x=We.degToRad(-90),_.position.set(1.5,-.95,6),_.scale.set(.0011/a,.0044/a,33e-5/a),_.rotation.x=We.degToRad(-270),_.rotation.z=We.degToRad(-6),v.position.set(-1.5,-.95,6),v.scale.set(.0011/a,.0044/a,33e-5/a),v.rotation.x=We.degToRad(-270),v.rotation.z=We.degToRad(6);const E=new dt;E.position.set(0,8,-20);const g=new dt;g.position.set(0,3,-10);const m=new dt;m.position.set(0,1,0),Iu.load("./models/spacecraft.glb",y=>{this.obj=y.scene,this.obj.position.set(0,0,0),this.obj.add(l),this.obj.shipLight=l,this.obj.add(u),this.obj.flame1=u,this.obj.add(f),this.obj.flame2=f,this.obj.add(_),this.obj.flame3=_,this.obj.add(v),this.obj.flame4=v,this.obj.flame1.visible=!1,this.obj.flame2.visible=!1,this.obj.flame3.visible=!1,this.obj.flame4.visible=!1,this.obj.add(E),this.obj.cameraHelperFar=E,this.obj.add(g),this.obj.cameraHelperClose=g,this.obj.add(m),this.obj.firstPersonCameraHelper=m,this.container.add(this.obj),Le.add(this.container)});const C=new ln({color:16515843}),b=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.gVectorLine=new mn(b,C),this.gVectorLine.frustumCulled=!1;const R=new ln({color:1047555}),z=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.yVectorLine=new mn(z,R),this.yVectorLine.frustumCulled=!1;const N=new ln({color:1047555}),I=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.resVectorLine=new mn(I,N),this.resVectorLine.frustumCulled=!1;const H=1e3;this.orbitPositions=new Float32Array(H*3),this.orbitGeometry=new yt,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3));const te=new ln({color:6423548});this.orbitLine=new mn(this.orbitGeometry,te),this.currentOrbitPointCount=0,this.orbitLine.frustumCulled=!1,this.orbitLine.renderOrder=-3,this.orbitLine.material.depthTest=!0,this.orbitLine.material.depthWrite=!0,Le.add(this.orbitLine)}changeMomentum(){const e=this.container.rotation.y,t=this.obj.rotation.x,n=Math.sin(e)*Math.cos(t),s=-Math.sin(t),r=Math.cos(e)*Math.cos(t),o=Math.sin(e+Math.PI/2),a=Math.cos(e+Math.PI/2),c=this.acceleration*.75;let l=1;if(p.targetPlanet&&!p.spacecraftMatchVelocity&&!p.spacecraftGravity){const h=p.targetPlanet.radius*200/p.PLANET_SCALE,u=.001,f=this.distanceToTarget;f<h&&(l=Math.max(u,f/h))}p.forwardPressed&&(this.xVel+=n*this.acceleration*l,p.ACTIVE_ASCENSION_AXIS&&(this.yVel+=s*this.acceleration*l),this.zVel+=r*this.acceleration*l,this.obj.flame1.visible=!0,this.obj.flame2.visible=!0,Wi(Math.min(p.SPACECRAFT_FOV*1.2,170))),p.backwardPressed&&(this.xVel-=n*this.acceleration*l,p.ACTIVE_ASCENSION_AXIS&&(this.yVel-=s*this.acceleration*l),this.zVel-=r*this.acceleration*l,this.obj.flame3.visible=!0,this.obj.flame4.visible=!0,Wi(p.SPACECRAFT_FOV*.85)),p.portPressed&&(this.xVel+=o*c*l,this.zVel+=a*c*l,this.container.rotation.z=We.lerp(this.container.rotation.z,-this.tiltAngle,.08)),p.starboardPressed&&(this.xVel-=o*c*l,this.zVel-=a*c*l,this.container.rotation.z=We.lerp(this.container.rotation.z,this.tiltAngle,.08)),p.handbrakePressed&&(this.xVel=0,this.yVel=0,this.zVel=0,Wi(p.SPACECRAFT_FOV*.85),gn()),p.rotatePortPressed&&!p.targetPlanet&&(this.container.rotation.y+=this.angularVelocity),p.rotateStarboardPressed&&!p.targetPlanet&&(this.container.rotation.y-=this.angularVelocity)}rotateSpacecraft(e,t){this.container.rotation.y-=t;const n=new rn,s=new L(1,0,0);n.setFromAxisAngle(s,e),this.obj.quaternion.multiply(n)}updatePosition(e,t){let n=0,s=0,r=0;if(p.targetPlanet||(p.spacecraftMatchVelocity=!1),p.spacecraftMatchVelocity)this.xVel=p.targetPlanet.xVel,this.yVel=p.targetPlanet.yVel,this.zVel=p.targetPlanet.zVel;else if(p.spacecraftGravity){let o=0,a=0,c=0;for(const l of e){const h=this.attraction(l);o+=h[0].force_x,a+=h[0].force_y,c+=h[0].force_z}n=o/this.mass/1e3*p.TIME,s=a/this.mass/1e3*p.TIME,r=c/this.mass/1e3*p.TIME,this.xVel+=n,this.yVel+=s,this.zVel+=r}this.container.position.x+=this.xVel*ot*p.TIME,this.container.position.y+=this.yVel*ot*p.TIME,this.container.position.z+=this.zVel*ot*p.TIME,p.spacecraftGravity||(this.distanceToSun=Eh(t,this.container.position)/1e3,p.targetPlanet&&(this.distanceToTarget=Eh(p.targetPlanet.sphere.position,this.container.position)/1e3)),this.updateVectorLines(n,s,r),this.orbits.push(new L(this.container.position.x,this.container.position.y,this.container.position.z)),this.drawOrbits()}attraction(e){const t=(e.sphere.position.x-this.container.position.x)/ot*1e3,n=(e.sphere.position.y-this.container.position.y)/ot*1e3,s=(e.sphere.position.z-this.container.position.z)/ot*1e3,r=Math.sqrt(t**2+n**2+s**2);e.isSun&&(this.distanceToSun=r/1e3),e===p.targetPlanet&&(this.distanceToTarget=r/1e3);const o=yu*this.mass*e.mass/r**2,a=Math.atan2(s,t),c=Math.atan2(n,Math.sqrt(t**2+s**2)),l=Math.cos(c)*Math.cos(a)*o,h=Math.sin(c)*o,u=Math.cos(c)*Math.sin(a)*o;return[{force_x:l,force_y:h,force_z:u}]}updateVectorLines(e,t,n){if(p.SHOW_VECTORS){if(p.spacecraftGravity){const r=[new L(this.container.position.x,this.container.position.y,this.container.position.z),new L(this.container.position.x+e,this.container.position.y+t,this.container.position.z+n)];this.gVectorLine.geometry.setFromPoints(r),Le.add(this.gVectorLine)}else Le.remove(this.gVectorLine);const s=[new L(this.container.position.x,this.container.position.y,this.container.position.z),new L(this.container.position.x+this.xVel*ot*p.TIME*10,this.container.position.y+this.yVel*ot*p.TIME*10,this.container.position.z+this.zVel*ot*p.TIME*10)];this.resVectorLine.geometry.setFromPoints(s),Le.add(this.resVectorLine)}else Le.remove(this.gVectorLine),Le.remove(this.resVectorLine)}drawOrbits(){if(this.orbits.length<2)return;const e=this.orbits[this.orbits.length-1];this.addOrbitPoint(e)}addOrbitPoint(e){if(this.orbits.push(e),this.currentOrbitPointCount>=this.orbitPositions.length/3){const n=new Float32Array(this.orbitPositions.length*2);n.set(this.orbitPositions),this.orbitPositions=n,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3))}const t=this.currentOrbitPointCount*3;this.orbitPositions[t]=e.x,this.orbitPositions[t+1]=e.y,this.orbitPositions[t+2]=e.z,this.currentOrbitPointCount++,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}toggleOrbitLine(e){e?Le.add(this.orbitLine):Le.remove(this.orbitLine)}resetOrbit(){this.currentOrbitPointCount=0,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}shoot(){const e=new Uv(this.scale);this.bolts.push(e)}updateBolts(){for(const e of this.bolts)e.lifetime+=1,e.lifetime<200?(e.boltContainer.position.copy(this.container.position),e.boltContainer.bolt1.position.z+=2,e.boltContainer.bolt2.position.z+=2):(this.bolts.shift(),Le.remove(e.boltContainer))}}class Uv{constructor(e){this.lifetime=0,this.boltContainer=new dt,this.boltContainerInner=new dt,this.boltContainer.position.copy(p.spacecraft.container.position),this.boltContainer.rotation.copy(p.spacecraft.container.rotation),this.boltContainerInner.rotation.copy(p.spacecraft.obj.rotation),this.boltContainer.scale.set(e,e,e);const t=new Lo(1,1,45,32),n=new Cn({color:3997440});this.bolt1=new vt(t,n),this.bolt2=new vt(t,n),this.bolt1.scale.set(1e-5/e,1e-5/e,1e-5/e),this.bolt2.scale.set(1e-5/e,1e-5/e,1e-5/e),this.bolt1.position.set(4.6,-.5,3.6),this.bolt2.position.set(-4.6,-.5,3.6),this.bolt1.rotation.x=We.degToRad(90),this.bolt2.rotation.x=We.degToRad(90),this.boltContainerInner.add(this.bolt1),this.boltContainerInner.add(this.bolt2),this.boltContainer.add(this.boltContainerInner),this.boltContainer.bolt1=this.bolt1,this.boltContainer.bolt2=this.bolt2,Le.add(this.boltContainer)}}class Vn{constructor(e,t,n,s,r,o,a=0,c=0,l=0,h=!1,u=null,f=null){if(this.name=e,this.xVel=0,this.yVel=0,this.zVel=0,this.mass=r,this.radius=t,this.axialTilt=n,this.rotationSpeed=-1*1.57/(s/24),this.distanceToSun=0,this.isSun=h,this.orbits=[],this.colorHex=o,this.lowQMapPath=u,this.highQMapPath=f,this.atmosphere=null,this.glowSphere=null,this.ring=null,this.geometry=new tn(t,64,32),this.geometry.rotateY(We.degToRad(90)),this.material=new ri({color:o,roughness:.8}),u||f){this.material.color=null;const b=Rn.load(p.HIGH_QUALITY_TEXTURES&&f?f:u);if(b.colorSpace=bt,this.material.map=b,h&&(this.material=new Cn({map:b})),this.name==="Earth"){this.material.roughnessMap=Rn.load("./planet_textures/2k/Ocean.png"),this.material.metalnessMap=Rn.load("./planet_textures/2k/Ocean_og.png"),this.material.roughness=.5,this.material.metalness=.7;const R=Rn.load(p.HIGH_QUALITY_TEXTURES?"./planet_textures/8k/8k_earth_clouds.jpg":"./planet_textures/2k/2k_earth_clouds.jpg");b.colorSpace=bt;let z=new tn(this.radius*1.005,64,32),N=new ri({alphaMap:R,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.clouds=new vt(z,N),this.clouds.rotation.x=We.degToRad(n),this.clouds.position.set(a,c,l),Le.add(this.clouds);let I=new tn(this.radius*1.03,64,64),H=new ri({color:new Ue("#003cff"),opacity:.1,transparent:!0,roughness:.7,metalness:.6,visible:!1});this.atmosphere=new vt(I,H),this.atmosphere.position.set(a,c,l),Le.add(this.atmosphere)}if(this.name==="Venus"){const R=Rn.load("./planet_textures/2k/2k_venus_atmosphere.jpg");R.colorSpace=bt;let z=new tn(this.radius*1.015,64,64),N=new ri({map:R,opacity:.6,transparent:!0,roughness:.7,metalness:.6});this.atmosphere=new vt(z,N),this.atmosphere.rotation.x=We.degToRad(n),this.atmosphere.position.set(a,c,l),Le.add(this.atmosphere)}}if(h){const b=new Dv({falloff:.4,glowColor:new Ue("#ff0000"),glowSharpness:.7});this.glowSphere=new vt(new tn(t*2,64,32),b),this.glowSphere.renderOrder=-1,Le.add(this.glowSphere)}this.sphere=new vt(this.geometry,this.material),this.sphere.rotation.x=We.degToRad(n),this.sphere.position.set(a,c,l),this.isSun&&(this.sphere.renderOrder=-2),Le.add(this.sphere);const _=1e3;this.orbitPositions=new Float32Array(_*3),this.orbitGeometry=new yt,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3));const v=new ln({color:this.colorHex});this.orbitLine=new mn(this.orbitGeometry,v),this.currentOrbitPointCount=0,this.orbitLine.frustumCulled=!1,this.orbitLine.renderOrder=-3,this.orbitLine.material.depthTest=!0,this.orbitLine.material.depthWrite=!1,p.SHOW_ORBITS&&Le.add(this.orbitLine);const E=new ln({color:16777215}),g=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);this.gVectorLine=new mn(g,E),this.gVectorLine.frustumCulled=!1,this.gVectorLine.renderOrder=-1;const m=new ln({color:16777215}),C=new yt().setFromPoints([new L(0,0,0),new L(0,0,0)]);if(this.vVectorLine=new mn(C,m),this.vVectorLine.frustumCulled=!1,this.vVectorLine.renderOrder=-1,!h){const b=this.radius*2,R=[new L(0,-b,0),new L(0,b,0)],z=new yt().setFromPoints(R),N=new ln({color:65288});this.axisLine=new mn(z,N),this.axisLine.rotation.x=We.degToRad(n),this.axisLine.frustumCulled=!1,this.axisLine.renderOrder=-1}this.name==="Uranus"&&(this.sphere.rotation.x=We.degToRad(0),this.axisLine.rotation.x=We.degToRad(0),this.sphere.rotation.z=We.degToRad(n),this.axisLine.rotation.z=We.degToRad(n))}updatePosition(e){let t=0,n=0;for(const o of e){if(o.name===this.name)continue;const a=this.attraction(o);t+=a[0].force_x,n+=a[0].force_z}const s=t/this.mass/1e3*p.TIME,r=n/this.mass/1e3*p.TIME;this.xVel+=s,this.zVel+=r,this.sphere.position.x+=this.xVel*ot*p.TIME,this.sphere.position.z+=this.zVel*ot*p.TIME,this.updateVectorLines(s,r,p.SHOW_VECTORS),this.orbits.push(new L(this.sphere.position.x,this.sphere.position.y,this.sphere.position.z)),this.ring&&this.ring.ringObj.position.copy(this.sphere.position),this.glowSphere&&this.glowSphere.position.copy(this.sphere.position),this.clouds&&this.clouds.position.copy(this.sphere.position),this.atmosphere&&this.atmosphere.position.copy(this.sphere.position),this.drawOrbits()}attraction(e){const t=(e.sphere.position.x-this.sphere.position.x)/ot*1e3,n=(e.sphere.position.z-this.sphere.position.z)/ot*1e3,s=Math.sqrt(t**2+n**2);e.isSun&&(this.distanceToSun=s/1e3);const r=yu*this.mass*e.mass/s**2,o=Math.atan2(n,t),a=Math.cos(o)*r,c=Math.sin(o)*r;return[{force_x:a,force_z:c}]}drawOrbits(){if(this.orbits.length<2)return;const e=this.orbits[this.orbits.length-1];this.addOrbitPoint(e)}updateVectorLines(e,t,n,s=!1){if(n&&!s){const r=[new L(this.sphere.position.x,0,this.sphere.position.z),new L(this.sphere.position.x+e,0,this.sphere.position.z+t)],o=[new L(this.sphere.position.x,0,this.sphere.position.z),new L(this.sphere.position.x+this.xVel*ot*p.TIME*10,0,this.sphere.position.z+this.zVel*ot*p.TIME*10)];this.gVectorLine.geometry.setFromPoints(r),this.vVectorLine.geometry.setFromPoints(o),Le.add(this.gVectorLine),Le.add(this.vVectorLine),this.isSun||(Le.add(this.axisLine),this.axisLine.position.set(this.sphere.position.x,this.sphere.position.y,this.sphere.position.z))}else Le.remove(this.gVectorLine),Le.remove(this.vVectorLine),this.isSun||Le.remove(this.axisLine)}addOrbitPoint(e){if(this.orbits.push(e),this.currentOrbitPointCount>=this.orbitPositions.length/3){const n=new Float32Array(this.orbitPositions.length*2);n.set(this.orbitPositions),this.orbitPositions=n,this.orbitGeometry.setAttribute("position",new At(this.orbitPositions,3))}const t=this.currentOrbitPointCount*3;this.orbitPositions[t]=e.x,this.orbitPositions[t+1]=e.y,this.orbitPositions[t+2]=e.z,this.currentOrbitPointCount++,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}resetOrbit(){this.currentOrbitPointCount=0,this.orbitGeometry.setDrawRange(0,this.currentOrbitPointCount),this.orbitGeometry.attributes.position.needsUpdate=!0}changeSpeed(e){ht(e<1?"Decrease planetary speed":"Increase planetary speed"),this.xVel*=e,this.yVel*=e,this.zVel*=e,gn()}changeMass(e){ht(e===2?"Double planetary mass":e===.5?"Halve planetary mass":"Change planetary mass"),this.mass*=e,gn()}}class Uo{constructor(e,t,n,s,r,o=null,a=null){this.parentPlanet=e,this.lowQMapPath=o,this.highQMapPath=a,this.innerRadiusFactor=t,this.outerRadiusFactor=n;const c=this.parentPlanet.radius*this.innerRadiusFactor,l=this.parentPlanet.radius*this.outerRadiusFactor,h=new Eu(c,l,96,96);let u=null;this.lowQMapPath&&(u=Rn.load(this.lowQMapPath),u.colorSpace=bt,u.anisotropy=32);const f=new ri({color:s,emissive:s,emissiveIntensity:.5,side:fn,transparent:!0,opacity:r,roughness:.5,metalness:.1,map:u,alphaTest:.3,depthTest:!0,depthWrite:!1});u&&(f.color=null),this.ringObj=new vt(h,f),this.ringObj.rotation.x=We.degToRad(this.parentPlanet.axialTilt+90),this.ringObj.position.set(this.parentPlanet.sphere.position.x,this.parentPlanet.sphere.position.y,this.parentPlanet.sphere.position.z),this.parentPlanet.name==="Uranus"&&(this.ringObj.rotation.x=We.degToRad(90),this.ringObj.rotation.y=We.degToRad(this.parentPlanet.axialTilt)),Le.add(this.ringObj),this.parentPlanet.ring=this}}class Ou{constructor(e,t,n){this.rotateWithEarth=n,this.orbitTrailGeometry=new yt,this.maxPoints=e,this.positions=new Float32Array(this.maxPoints*3),this.orbitTrailGeometry.setAttribute("position",new At(this.positions,3)),this.orbitTrailMaterial=new ln({color:t}),this.orbitTrailObj=new mn(this.orbitTrailGeometry,this.orbitTrailMaterial),this.orbitTrailObj.frustumCulled=!1,this.numPoints=0}reset(){this.positions.fill(0),this.numPoints=0,this.orbitTrailGeometry.attributes.position.needsUpdate=!0}updateOrbitTrail(e,t){if(p.SHOW_ORBITS)Le.add(this.orbitTrailObj);else{Le.remove(this.orbitTrailObj),this.reset();return}const n=new L;e.getWorldPosition(n);const s=new L;if(s.subVectors(n,t.position),this.numPoints===this.maxPoints){for(let o=0;o<(this.maxPoints-1)*3;o++)this.positions[o]=this.positions[o+3];this.numPoints--}const r=this.numPoints*3;if(this.positions[r]=s.x,this.positions[r+1]=s.y,this.positions[r+2]=s.z,this.numPoints=Math.min(this.numPoints+1,this.maxPoints),this.rotateWithEarth){const o=new Xe().makeRotationY(-t.rotation.y),a=new L(this.positions[r],this.positions[r+1],this.positions[r+2]);a.applyMatrix4(o),this.positions[r]=a.x,this.positions[r+1]=a.y,this.positions[r+2]=a.z}this.orbitTrailGeometry.setDrawRange(0,this.numPoints),this.orbitTrailGeometry.attributes.position.needsUpdate=!0,this.orbitTrailObj.position.copy(t.position)}}function Ov({jwstCameraOffset:i,planets:e,discardedPlanets:t,sun:n,earth:s,moon:r,moonOrbitTrail:o,ISS:a,issOrbitTrail:c,jwst:l,jwstPlane:h,constellationSphere:u,connectionOutline:f,moveToPlanet:_,moveToSpacecraft:v,moveToDefault:E,moveToJWST:g,updateEarthSystemVisibility:m,updateEarthSystemScaling:C,setCameraOffset:b,setJwstCameraOffset:R}){window.addEventListener("mousedown",D=>{!p.spacecraftSelected||D.target.nodeName!=="CANVAS"||(p.isMouseDown=!0,document.querySelector("canvas").style.cursor="none",p.lastMousePosition.x=D.clientX,p.lastMousePosition.y=D.clientY)}),window.addEventListener("mousemove",D=>{if(!p.spacecraftSelected||!p.isMouseDown||p.PAUSED)return;let le=D.clientX-p.lastMousePosition.x,ye=D.clientY-p.lastMousePosition.y;le=100*le/window.innerWidth,ye=100*ye/window.innerHeight,(p.spacecraft.obj.rotation.x>=We.degToRad(90)||p.spacecraft.obj.rotation.x<=We.degToRad(-90))&&(le*=-1),p.spacecraft.rotateSpacecraft(ye*p.spacecraft.angularVelocity,le*p.spacecraft.angularVelocity),p.lastMousePosition.x=D.clientX,p.lastMousePosition.y=D.clientY}),window.addEventListener("mouseup",()=>{document.querySelector("canvas").style.cursor="",p.spacecraftSelected&&(p.isMouseDown=!1)}),document.addEventListener("keyup",D=>{p.spacecraftSelected&&(D.key.toLowerCase()==="w"&&(p.forwardPressed=!1),D.key.toLowerCase()==="a"&&(p.portPressed=!1),D.key.toLowerCase()==="s"&&(p.backwardPressed=!1),D.key.toLowerCase()==="d"&&(p.starboardPressed=!1),D.key==="ArrowLeft"&&(p.rotatePortPressed=!1),D.key==="ArrowRight"&&(p.rotateStarboardPressed=!1),D.key==="Shift"&&(p.handbrakePressed=!1))}),window.addEventListener("keydown",D=>{if(document.activeElement.blur(),!p.transitionAnimationActive){if(D.code==="Space"&&(D.preventDefault(),z(!p.PAUSED)),p.spacecraftSelected){if(D.key.toLowerCase()==="w"&&(p.forwardPressed=!0),D.key.toLowerCase()==="a"&&(p.portPressed=!0),D.key.toLowerCase()==="s"&&(p.backwardPressed=!0),D.key.toLowerCase()==="d"&&(p.starboardPressed=!0),D.key==="ArrowLeft"&&(p.rotatePortPressed=!0),D.key==="ArrowRight"&&(p.rotateStarboardPressed=!0),D.key==="Shift"&&(p.handbrakePressed=!0),D.key.toLowerCase()==="b"&&oe(!p.spacecraftFirstPerson),D.key.toLowerCase()==="h"&&_e(!p.spacecraftLight),D.key.toLowerCase()==="ü"){J(!p.ACTIVE_ASCENSION_AXIS);return}if(D.key.toLowerCase()==="g"){$(!p.spacecraftGravity),ge(!1),ht(p.spacecraftGravity?"Enable orbital mechanics":"Disable orbital mechanics");return}if(p.targetPlanet&&D.key.toLowerCase()==="r"){ge(!p.spacecraftMatchVelocity),$(!1),ht(p.spacecraftMatchVelocity?"Enable match velocity":"Disable match velocity");return}D.key==="Control"&&p.spacecraft.shoot()}if(D.key.toLowerCase()==="l"){w(!p.REALISTIC_LIGHTING);return}if(D.key.toLowerCase()==="k"){const le=ki.indexOf(p.backgroundGrid);le<ki.length-1?K(ki[le+1]):K(ki[0]);return}if(D.key.toLowerCase()==="z"){q(!p.TRUE_ROTATION_SPEEDS);return}if(D.key.toLowerCase()==="i"){N(!p.SHOW_LABEL);return}if(D.key.toLowerCase()==="u"){const le=Mi.indexOf(p.distanceUnit);le<Mi.length-1?se(Mi[le+1]):se(Mi[0]);return}if(D.key==="Enter"&&(p.spacecraftSelected?E():v()),D.key.toLowerCase()==="e"&&ce(),D.key==="Shift"&&!p.spacecraftSelected&&(p.targetPlanet&&p.targetPlanet.name!=="Sun"||p.jwstSelected)&&de(),D.key.toLowerCase()==="s"&&!p.spacecraftSelected&&p.targetPlanet&&p.targetPlanet.changeSpeed(.8),D.key.toLowerCase()==="f"&&!p.spacecraftSelected&&p.targetPlanet&&p.targetPlanet.changeSpeed(1.2),D.key.toLowerCase()==="m"&&p.targetPlanet&&p.targetPlanet.changeMass(2),D.key.toLowerCase()==="n"&&p.targetPlanet&&p.targetPlanet.changeMass(.5),D.key.toLowerCase()==="c"&&(ht("Move to Sun"),_(n,!0)),D.key.toLowerCase()==="."&&p.targetPlanet&&!p.targetPlanet.isSun&&Ve(),D.key.toLowerCase()==="x"&&E(),D.key.toLowerCase()==="o"){if(D.altKey){H();return}I(!p.SHOW_ORBITS)}if(D.key.toLowerCase()==="q"&&te(!p.HIGH_QUALITY_TEXTURES),D.key.toLowerCase()==="p"&&Q(),D.key.toLowerCase()==="v"&&y(!p.SHOW_VECTORS),D.key.toLowerCase()==="t"&&(p.SHOW_CONNECTION=!p.SHOW_CONNECTION,ht(p.SHOW_CONNECTION?"Show connection":"Hide connection"),p.SHOW_CONNECTION?Le.add(f):Le.remove(f)),D.key>="0"&&D.key<="9"){const le=parseInt(D.key);e[le]&&(!p.spacecraftSelected&&D.altKey?Be(e[le]):be(p.targets.indexOf(e[le].name)))}D.key.toLowerCase()==="j"&&g()}}),document.getElementById("PAUSED").addEventListener("change",D=>{z(D.target.checked)}),document.getElementById("SHOW_LABEL").addEventListener("change",D=>{N(D.target.checked)}),document.getElementById("SHOW_ORBITS").addEventListener("change",D=>{I(D.target.checked)}),document.getElementById("SHOW_SPACECRAFT_ORBIT").addEventListener("change",D=>{H()}),document.getElementById("HIGH_QUALITY_TEXTURES").addEventListener("change",D=>{te(D.target.checked)}),document.getElementById("SHOW_VECTORS").addEventListener("change",D=>{y(D.target.checked)}),document.getElementById("REALISTIC_LIGHTING").addEventListener("change",D=>{w(D.target.checked)}),document.getElementById("EARTH_SYSTEM_SCALING").addEventListener("change",D=>{X(D.target.checked)}),document.getElementById("TRUE_ROTATION_SPEEDS").addEventListener("change",D=>{q(D.target.checked)}),document.getElementById("ACTIVE_ASCENSION_AXIS").addEventListener("change",D=>{J(D.target.checked)}),document.getElementById("DISTANCE_UNIT_SELECT").addEventListener("change",D=>{se(Mi[D.target.value])}),document.getElementById("BACKGROUND_SELECT").addEventListener("change",D=>{Uu(D.target.value)}),document.getElementById("BACKGROUND_GRID_SELECT").addEventListener("change",D=>{K(ki[D.target.value])}),document.getElementById("SPACECRAFT_FIRST_PERSON").addEventListener("change",D=>{oe(D.target.checked)}),document.getElementById("SPACECRAFT_GRAVITY").addEventListener("change",D=>{$(D.target.checked),ht(p.spacecraftGravity?"Enable orbital mechanics":"Disable orbital mechanics")}),document.getElementById("SPACECRAFT_MATCH_VELOCITY").addEventListener("change",D=>{ge(D.target.checked),ht(p.spacecraftMatchVelocity?"Enable match velocity":"Disable match velocity")}),document.getElementById("SPACECRAFT_LIGHT").addEventListener("change",D=>{_e(D.target.checked)}),document.getElementById("TARGET_SELECT").addEventListener("change",D=>{be(D.target.value)}),document.getElementById("decrease-speed").addEventListener("click",()=>{p.targetPlanet.changeSpeed(.8)}),document.getElementById("increase-speed").addEventListener("click",()=>{p.targetPlanet.changeSpeed(1.2)}),document.getElementById("decrease-mass").addEventListener("click",()=>{p.targetPlanet.changeMass(.5)}),document.getElementById("increase-mass").addEventListener("click",()=>{p.targetPlanet.changeMass(2)}),document.getElementById("TRANSFORM_PLANET").addEventListener("click",()=>{Ve()}),document.getElementById("TOGGLE_SPACECRAFT_BTN").addEventListener("click",()=>{p.spacecraftSelected?E():v()}),document.getElementById("RESET_ORBITS_BTN").addEventListener("click",()=>{Q()}),document.getElementById("CAMERA_LOCK").addEventListener("change",D=>{ce()}),document.getElementById("CAMERA_SUN_LOCK").addEventListener("change",D=>{de()});function z(D){if(p.PAUSED=D,ht(p.PAUSED?"Pause":"Unpause"),document.getElementById("PAUSED_CB").checked=p.PAUSED,p.birdseye){Kt(!1);return}if(p.spacecraftSelected)Kt(!0);else if(p.targetPlanet||p.jwstSelected)if(Kt(!p.PAUSED),p.PAUSED?(p.cameraSunLockChanged=p.isCameraSunLocked,p.isCameraSunLocked=!1):p.cameraSunLockChanged&&(p.targetPlanet&&(p.sunLockedCameraDistance=yh(p.targetPlanet.sphere.position,Ze.position)),p.isCameraSunLocked=!0),p.jwstSelected){const le=new L;l.getWorldPosition(le),p.isCameraLocked&&R(new L().subVectors(Ze.position,le))}else p.targetPlanet&&p.isCameraLocked&&b(new L().subVectors(Ze.position,p.targetPlanet.sphere.position))}function N(D){p.SHOW_LABEL=D,ht(p.SHOW_LABEL?"Show info label":"Hide info label"),document.getElementById("SHOW_LABEL_CB").checked=p.SHOW_LABEL,gn()}function I(D){p.SHOW_ORBITS=D,ht(p.SHOW_ORBITS?"Show orbits":"Hide orbits"),document.getElementById("SHOW_ORBITS_CB").checked=p.SHOW_ORBITS;for(const le of[...e,...t])p.SHOW_ORBITS?Le.add(le.orbitLine):Le.remove(le.orbitLine);p.spacecraft.toggleOrbitLine(p.SHOW_ORBITS),document.getElementById("SHOW_SPACECRAFT_ORBIT_CB").checked=p.SHOW_ORBITS,p.inEarthSystem&&(o.updateOrbitTrail(r,s.sphere),c.updateOrbitTrail(a,s.sphere)),h.children[1].visible=p.SHOW_ORBITS}function H(){p.spacecraft.toggleOrbitLine(p.spacecraft.orbitLine.parent===null),document.getElementById("SHOW_SPACECRAFT_ORBIT_CB").checked=p.spacecraft.orbitLine.parent!==null,ht(p.SHOW_ORBITS?"Show spacecraft orbit":"Hide spacecraft orbits")}function te(D){p.HIGH_QUALITY_TEXTURES=D,document.getElementById("HIGH_QUALITY_TEXTURES_CB").checked=p.HIGH_QUALITY_TEXTURES,ht(p.HIGH_QUALITY_TEXTURES?"Texture quality: 8k":"Texture quality: 2k"),document.getElementById("loading-screen").style.display="";for(const ye of e){if(ye.lowQMapPath&&ye.highQMapPath){const Fe=Rn.load(p.HIGH_QUALITY_TEXTURES&&ye.highQMapPath?ye.highQMapPath:ye.lowQMapPath);Fe.colorSpace=bt,ye.sphere.material.map=Fe}if(ye.ring&&ye.ring.lowQMapPath&&ye.ring.highQMapPath){const Fe=Rn.load(p.HIGH_QUALITY_TEXTURES&&ye.ring.highQMapPath?ye.ring.highQMapPath:ye.ring.lowQMapPath);Fe.colorSpace=bt,Fe.anisotropy=32,ye.ring.ringObj.material.map=Fe}}const le=Rn.load(p.HIGH_QUALITY_TEXTURES?"./planet_textures/8k/8k_earth_clouds.jpg":"./planet_textures/2k/2k_earth_clouds.jpg");le.colorSpace=bt,s.clouds.material.alphaMap=le}function y(D){p.SHOW_VECTORS=D,document.getElementById("SHOW_VECTORS_CB").checked=p.SHOW_VECTORS,ht(p.SHOW_VECTORS?"Show planetary vectors":"Hide planetary vectors");for(const le of e)le.updateVectorLines(0,0,p.SHOW_VECTORS);p.spacecraft.updateVectorLines(0,0,0)}function w(D){p.REALISTIC_LIGHTING=D,document.getElementById("REALISTIC_LIGHTING_CB").checked=p.REALISTIC_LIGHTING,ht(p.REALISTIC_LIGHTING?"Enable realistic lighting":"Disable realistic lighting"),Nu()}function X(D){p.earthSystemScaling=D?.1:1,document.getElementById("EARTH_SYSTEM_SCALING_CB").checked=D,C(),ht(D?"Switch to scaled down earth system":"Switch to true scale earth system")}function q(D){p.TRUE_ROTATION_SPEEDS=D,document.getElementById("TRUE_ROTATION_SPEEDS_CB").checked=p.TRUE_ROTATION_SPEEDS,ht(p.TRUE_ROTATION_SPEEDS?"Enable accurate rotation speeds":"Disable accurate rotation speeds")}function J(D){p.ACTIVE_ASCENSION_AXIS=D,document.getElementById("ACTIVE_ASCENSION_AXIS_CB").checked=p.ACTIVE_ASCENSION_AXIS,ht(p.ACTIVE_ASCENSION_AXIS?"Enable ascension axis":"Disable ascension axis"),p.ACTIVE_ASCENSION_AXIS||(p.spacecraft.container.position.y=0,p.spacecraft.obj.rotation.x=0,p.spacecraft.yVel=0),gn()}function se(D){p.distanceUnit=D,document.getElementById("DISTANCE_UNIT_SELECT").value=Mi.indexOf(p.distanceUnit).toString(),ht("Cycle distance unit"),gn()}function K(D){p.backgroundGrid=D,document.getElementById("BACKGROUND_GRID_SELECT").value=ki.indexOf(p.backgroundGrid).toString(),Pv(u)}function oe(D){p.spacecraftFirstPerson=D,document.getElementById("SPACECRAFT_FIRST_PERSON_CB").checked=p.spacecraftFirstPerson,ht(p.spacecraftFirstPerson?"Enable cockpit view":"Disable cockpit view")}function $(D){p.spacecraftGravity=D,document.getElementById("SPACECRAFT_GRAVITY_CB").checked=p.spacecraftGravity}function ge(D){p.spacecraftMatchVelocity=D,document.getElementById("SPACECRAFT_MATCH_VELOCITY_CB").checked=p.spacecraftMatchVelocity}function _e(D){p.spacecraftLight=D,document.getElementById("SPACECRAFT_LIGHT_CB").checked=p.spacecraftLight,p.spacecraftLight=D,ht(p.spacecraftLight?"Enable spacecraft light":"Disable spacecraft light"),p.spacecraft.obj.shipLight.visible=p.spacecraftLight}function be(D){const le=p.targets[D];if(p.spacecraftSelected)if(le==="Free flight")ht("Enable free flight"),v();else{let ye=e.find(Fe=>Fe.name===le);Be(ye)}else if(le==="None")E();else if(le==="JWST")g();else{let ye=e.find(Fe=>Fe.name===le);_(ye)}}function Be(D){D!==p.targetPlanet&&(ht("Target: "+D.name),p.spacecraftSelected||(p.birdseye=!0),Is(D),p.SHOW_LABEL&&gn(),p.spacecraftSelected&&document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.remove("disabled"),zs("TARGET_SELECT",p.targets.indexOf(D.name)))}function Ve(){ht("Turn "+p.targetPlanet.name+" into a star");const D=new Vn(p.targetPlanet.name+" (Star)",696340*p.PLANET_SCALE,0,150*365,1.98892*10**30,p.targetPlanet.colorHex,p.targetPlanet.sphere.position.x,0,p.targetPlanet.sphere.position.z,!0,"./planet_textures/2k/2k_sun.jpg","./planet_textures/8k/8k_sun.jpg");D.xVel=p.targetPlanet.xVel,D.yVel=p.targetPlanet.yVel,D.zVel=p.targetPlanet.zVel,D.orbits.push(p.targetPlanet.orbits[p.targetPlanet.orbits.length-2]),D.orbits.push(p.targetPlanet.orbits[p.targetPlanet.orbits.length-1]),p.SHOW_ORBITS&&D.drawOrbits();for(let le=0;le<=e.length-1;le++)if(e[le]===p.targetPlanet){Le.remove(e[le].sphere),e[le].ring&&Le.remove(e[le].ring.ringObj),e[le].atmosphere&&Le.remove(e[le].atmosphere),e[le].clouds&&Le.remove(e[le].clouds),p.targetPlanet.name==="Earth"&&(p.inEarthSystem=!1,m(!1)),e[le].updateVectorLines(null,null,p.SHOW_VECTORS,!0),e[le]=D,e[le].updatePosition(e),t.push(p.targetPlanet),Zc(e,p.spacecraftSelected,p.targetPlanet.name),Is(D),p.spacecraftSelected||(Kt(!1),ti(!1),p.birdseye||Ze.position.copy(p.targetPlanet.sphere.position).add(pr(p.targetPlanet)));return}}function Q(){ht("Reset orbits");for(const D of[...e,...t])D.resetOrbit();t.length=0,p.spacecraft.resetOrbit()}function ce(){if(p.spacecraftSelected){if(ht(p.isCameraLocked?"Unlock camera":"Lock camera"),p.isCameraLocked)Kt(!1),ti(!1);else{Kt(!0);const D=new L;p.spacecraft.obj.getWorldPosition(D)}return}if(p.jwstSelected&&!p.PAUSED){if(ht(p.isCameraLocked?"Unlock camera":"Lock camera"),p.isCameraLocked)Kt(!1),ti(!1);else{Kt(!0);const D=new L;l.getWorldPosition(D),R(new L().subVectors(Ze.position,D))}return}p.targetPlanet&&!p.PAUSED&&(ht(p.isCameraLocked?"Unlock camera":"Lock camera"),p.isCameraLocked?(Kt(!1),ti(!1)):(Kt(!0),b(new L().subVectors(Ze.position,p.targetPlanet.sphere.position))))}function de(){p.PAUSED?(p.cameraSunLockChanged=!p.cameraSunLockChanged,ht(p.cameraSunLockChanged?"Lock camera to sun":"Unlock camera from sun"),document.getElementById("CAMERA_SUN_LOCK_CB").checked=p.cameraSunLockChanged):(ti(!p.isCameraSunLocked),ht(p.isCameraSunLocked?"Lock camera to sun":"Unlock camera from sun"),p.isCameraSunLocked&&p.targetPlanet?p.sunLockedCameraDistance=yh(p.targetPlanet.sphere.position,Ze.position):p.isCameraSunLocked||(p.cameraSunLockChanged=!1,p.targetPlanet?b(pr(p.targetPlanet)):p.jwstSelected&&b(i)))}}let Xi=new L(.001,.01,.001),Ns=new L(wi*3,wi*3,wi*3);const Fu=i=>{Xi.copy(i)},$c=i=>{Ns.copy(i)},ni=new Vn("Sun",696340*p.PLANET_SCALE,0,150*365,1.98892*10**30,16741391,0,0,0,!0,"./planet_textures/2k/2k_sun.jpg","./planet_textures/8k/8k_sun.jpg"),Bu=new Vn("Mercury",2440*p.PLANET_SCALE,0,58*24,.3301*10**24,9737364,.387*hn*ot,0,0,!1,"./planet_textures/2k/2k_mercury.jpg","./planet_textures/8k/8k_mercury.jpg");Bu.zVel=47.39996051284;const or=new Vn("Venus",6051.8*p.PLANET_SCALE,177.4,-243*24,4.867*10**24,16750848,.72*hn*ot,0,0,!1,"./planet_textures/2k/2k_venus_surface.jpg","./planet_textures/8k/8k_venus_surface.jpg");or.zVel=35.019991414096;const Mt=new Vn("Earth",6371*p.PLANET_SCALE,23.5,24,5.9722*10**24,28415,hn*ot,0,0,!1,"./planet_textures/2k/2k_earth_daymap.jpg","./planet_textures/8k/8k_earth_daymap.jpg");Mt.zVel=29.78299948;const ku=new Vn("Mars",3389.5*p.PLANET_SCALE,25.19,24.5,6.39*10**23,16731392,1.524*hn*ot,0,0,!1,"./planet_textures/2k/2k_mars.jpg","./planet_textures/8k/8k_mars.jpg");ku.zVel=24.076988672178;const Jc=new Vn("Jupiter",69911*p.PLANET_SCALE,3.13,10,1.898*10**27,11770755,5.2*hn*ot,0,0,!1,"./planet_textures/2k/2k_jupiter.jpg","./planet_textures/8k/8k_jupiter.jpg");Jc.zVel=13.06000369219;new Uo(Jc,1.4,1.7,12628126,.9,"./planet_textures/2k/2k_jupiter_ring.png");const Qc=new Vn("Saturn",58232*p.PLANET_SCALE,0,10.5,5.683*10**26,14207645,9.538*hn*ot,0,0,!1,"./planet_textures/2k/2k_saturn.jpg","./planet_textures/8k/8k_saturn.jpg");Qc.zVel=9.679981775672;new Uo(Qc,1.6,2.7,14468253,.9,"./planet_textures/2k/2k_saturn_ring.png");const Oo=new Vn("Uranus",25362*p.PLANET_SCALE,97.7,17,8.681*10**25,7532013,19.56*hn*ot,0,0,!1,"./planet_textures/2k/2k_uranus.jpg");Oo.zVel=6.7999974;new Uo(Oo,1.6,2.1,14022647,.9,"./planet_textures/2k/2k_uranus_ring.png");const el=new Vn("Neptune",24622*p.PLANET_SCALE,8.32,16,1.024*10**26,2310084,29.9*hn*ot,0,0,!1,"./planet_textures/2k/2k_neptune.jpg");el.zVel=5.4299794;new Uo(el,1.5,2.3,12765933,.9,"./planet_textures/2k/2k_neptune_ring.png");const Fn=[ni,Bu,or,Mt,ku,Jc,Qc,Oo,el],Fv=[];p.spacecraft=new Nv(1e3,0,0,-3*hn*ot,.04,.25,1e-4,.2);Ze.position.y=40;Ht.update();let Nh=!0;vr.onProgress=(i,e,t)=>{document.getElementById("loading-progress").innerHTML=": "+e+"/"+t};vr.onLoad=()=>{document.getElementById("loading-title").textContent="Loading Textures",document.getElementById("loading-screen").style.display="none",Nh&&(Ov({jwstCameraOffset:Ns,planets:Fn,discardedPlanets:Fv,sun:ni,earth:Mt,moon:li,moonOrbitTrail:mr,ISS:ui,issOrbitTrail:Pi,jwst:en,jwstPlane:Jt,constellationSphere:Hv,connectionOutline:Gu,moveToPlanet:Zv,moveToSpacecraft:$v,moveToDefault:Jv,moveToJWST:Qv,updateEarthSystemVisibility:tl,updateEarthSystemScaling:zu,setCameraOffset:Fu,setJwstCameraOffset:$c}),kv()),Nh=!1};function Bv(i){const e=p.PLANET_SCALE;p.PLANET_SCALE=ot*i;for(const n of Fn){let s=n.radius/e*p.PLANET_SCALE;n.radius=s;const r=new tn(s,64,32);if(r.rotateY(We.degToRad(90)),n.sphere.geometry.dispose(),n.sphere.geometry=r,n.atmosphere&&(n.atmosphere.geometry.dispose(),n.atmosphere.geometry=new tn(s*1.03,64,64)),n.glowSphere&&(n.glowSphere.geometry.dispose(),n.glowSphere.geometry=new tn(s*2,64,32)),n.clouds&&(n.clouds.geometry.dispose(),n.clouds.geometry=new tn(s*1.005,64,32)),n.axisLine){n.axisLine.geometry.dispose();const o=s*2,a=[new L(0,-o,0),new L(0,o,0)];n.axisLine.geometry=new yt().setFromPoints(a)}if(n.ring){n.ring.ringObj.geometry.dispose();const o=s*n.ring.innerRadiusFactor,a=s*n.ring.outerRadiusFactor;n.ring.ringObj.geometry=new Eu(o,a,96,96)}}li.geometry.dispose(),li.geometry=new tn(1737.4*p.PLANET_SCALE,32,16),Pi.reset(),ui.position.set(Mt.radius*1.1,0,0);const t=wi*p.PLANET_SCALE/ot/10;en.scale.set(t,t,t),$c(new L(t*3,t*3,t*3)),zu(),p.targetPlanet&&p.isCameraLocked&&(Xi=pr(p.targetPlanet),Ze.position.copy(p.targetPlanet.sphere.position).add(Xi),Ze.lookAt(p.targetPlanet.sphere.position))}function zu(){mr.reset(),li.position.set(Mt.radius*60.3*p.earthSystemScaling,0,0);const i=Mt.radius*62.8*p.earthSystemScaling;if(en.position.set(i,0,0),Jt.remove(oi),oi.geometry.dispose(),oi=Du(i,10658209,128),Jt.add(oi),p.jwstSelected){nl();const e=new L;en.getWorldPosition(e),Ze.position.copy(e).add(Ns),Ze.lookAt(e)}Sr(p.jwstSelected)}function kv(){document.querySelectorAll("input[type='checkbox']").forEach(i=>{i.id==="PAUSED_CB"?i.checked=p.PAUSED:i.id==="SHOW_LABEL_CB"?i.checked=p.SHOW_LABEL:i.id==="SHOW_ORBITS_CB"||i.id==="SHOW_SPACECRAFT_ORBIT_CB"?i.checked=p.SHOW_ORBITS:i.id==="HIGH_QUALITY_TEXTURES_CB"?i.checked=p.HIGH_QUALITY_TEXTURES:i.id==="SHOW_VECTORS_CB"?i.checked=p.SHOW_VECTORS:i.id==="REALISTIC_LIGHTING_CB"?i.checked=p.REALISTIC_LIGHTING:i.id==="EARTH_SYSTEM_SCALING_CB"?i.checked=p.earthSystemScaling!==1:i.id==="TRUE_ROTATION_SPEEDS_CB"?i.checked=p.TRUE_ROTATION_SPEEDS:i.id==="ACTIVE_ASCENSION_AXIS_CB"?i.checked=p.ACTIVE_ASCENSION_AXIS:i.id==="SPACECRAFT_FIRST_PERSON_CB"?i.checked=p.spacecraftFirstPerson:i.id==="SPACECRAFT_GRAVITY_CB"?i.checked=p.spacecraftGravity:i.id==="SPACECRAFT_MATCH_VELOCITY_CB"?i.checked=p.spacecraftMatchVelocity:i.id==="SPACECRAFT_LIGHT_CB"?i.checked=p.spacecraftLight:i.id==="CAMERA_LOCK_CB"?i.checked=p.isCameraLocked:i.id==="CAMERA_SUN_LOCK_CB"&&(i.checked=p.isCameraSunLocked)}),document.querySelectorAll("select").forEach(i=>{i.id==="DISTANCE_UNIT_SELECT"&&(i.value=Mi.indexOf(p.distanceUnit).toString())}),Zc(Fn),document.getElementById("simulation-speed").addEventListener("input",i=>{const e=Object.keys(vc),t=i.target.value,n=e[t],s=vc[n];document.getElementById("simulation-speed-display").textContent=n,p.TIME=60*60*s}),document.getElementById("spacecraft-fov").addEventListener("input",i=>{const e=i.target.value;document.getElementById("spacecraft-fov-display").textContent=`${e}°`,p.SPACECRAFT_FOV=e,Wi(p.SPACECRAFT_FOV)}),document.getElementById("planet-scale").addEventListener("input",i=>{let e=parseInt(i.target.value,10);e>1&&(e=Math.round(e/2)*2),i.target.value=e,document.getElementById("planet-scale-display").textContent=e.toString(),Bv(e)})}Uu(dr.indexOf(p.backgroundTexture).toString());Iv();Nu();const Hu=new tn(5e3,60,40);Hu.scale(-1,1,1);const zv=new Cn({transparent:!0,opacity:1}),Hv=new vt(Hu,zv),Vu=new yt,Vv=new ln({color:new Ue().setHex(65288)}),Gu=new kc(Vu,Vv);Gu.frustumCulled=!1;const Gv=new tn(1737.4*p.PLANET_SCALE,32,16),Wv="./planet_textures/2k/2k_moon.jpg",Wu=Rn.load(Wv);Wu.colorSpace=bt;const Xv=new ri({map:Wu,roughness:.8}),li=new vt(Gv,Xv),Ri=new dt;Ri.add(li);li.position.set(Mt.radius*60.3*p.earthSystemScaling,0,0);li.rotation.y=Math.PI;Ri.position.copy(li.position);Ri.rotation.x=We.degToRad(5.14);const mr=new Ou(200,10658209,!1),Ci=new dt,La=1e-6,jv=new Us(50,50,50),Yv=new Cn({color:16711680}),ui=new vt(jv,Yv);Ci.add(ui);ui.visible=!1;ui.position.set(Mt.radius*1.1,0,0);ui.rotation.y=We.degToRad(90);ui.scale.set(La,La,La);Ci.rotation.x=We.degToRad(51.6);Ci.position.copy(ui.position);const Pi=new Ou(3e3,16711846,!0);Pi.orbitTrailObj.rotation.x=We.degToRad(23.5);let en=null;const Jt=new dt;let oi=Du(Mt.radius*62.8*p.earthSystemScaling,10658209,128);const qv="prod/jwst.glb",Kv=`https://Manuel-Schmid.github.io/Solar-System-Simulation/fetch-release.js?file=${qv}`;Iu.load(Kv,i=>{en=i.scene,en=i.scene,en.rotation.x=We.degToRad(90),Jt.add(en),Jt.add(oi),en.position.set(Mt.radius*62.8*p.earthSystemScaling,0,0),en.scale.set(wi,wi,wi),Jt.rotation.y=We.degToRad(90);const e=new Do(16777215,.003,1e4*ot);e.position.set(1,4,0),en.add(e)});function Sr(i){p.jwstSelected=i,p.jwstSelected?(Le.add(Jt),oi.visible=p.SHOW_ORBITS):Le.remove(Jt)}function tl(i){i?(Ri.position.copy(Mt.sphere.position),Ci.position.copy(Mt.sphere.position),Le.add(Jt),Le.add(Ri),Le.add(Ci),Le.add(mr.orbitTrailObj),Le.add(Pi.orbitTrailObj)):(Le.remove(Jt),Le.remove(Ri),Le.remove(Ci),Le.remove(mr.orbitTrailObj),Le.remove(Pi.orbitTrailObj),Pi.reset())}function Zv(i,e=!1){if(i===p.targetPlanet&&!i.isSun&&!p.spacecraftSelected){Xi=pr(i),Kt(!0);return}Ds(!0),ht("Move to "+i.name),No(!1,Fn),Sr(!1),p.SHOW_ORBITS&&(oi.visible=!1),p.inEarthSystem=i.name==="Earth",p.targetPlanet&&!i.isSun&&(p.targetPlanet.sphere.rotation.y=0);let t=!1;p.SHOW_LABEL&&(p.SHOW_LABEL=!1,t=!0),p.isCameraLocked=!1,p.isCameraSunLocked=!1,tl(p.inEarthSystem);const n=1,s=Ze.position.clone(),r=performance.now();function o(){const a=(performance.now()-r)/1e3,c=Math.min(a/n,1),l=i.sphere.position.clone();e&&(l.y+=40),Xi=pr(i),l.add(Xi),Ze.position.lerpVectors(s,l,c),Ht.target.copy(i.sphere.position),Ht.update(),c<1?requestAnimationFrame(o):(Is(i),p.birdseye=e,Kt(!e&&!p.PAUSED),ti(!1),t&&(p.SHOW_LABEL=!0),p.SHOW_LABEL&&gn(),zs("TARGET_SELECT",p.targets.indexOf(i.name)),Ds(!1))}o()}function $v(){p.birdseye=!1,Sr(!1),Is(null),No(!0,Fn),Kt(!0),ti(!1),gn(),zs("TARGET_SELECT",p.targets.indexOf("Free flight"))}function Jv(){Ds(!0),p.isCameraLocked=!1,p.isCameraSunLocked=!1,Sr(!1),No(!1,Fn),ht("Topdown view");const i=1,e=Ze.position.clone(),t=performance.now(),n=new L(0,40,0);function s(){const r=(performance.now()-t)/1e3,o=Math.min(r/i,1);Ze.position.lerpVectors(e,n,o),Ht.target.copy(new L(0,0,0)),Ht.update(),o<1?requestAnimationFrame(s):(p.birdseye=!0,Is(null),Kt(!1),ti(!1),p.SHOW_LABEL&&gn(),zs("TARGET_SELECT",p.targets.indexOf("None")),Ds(!1))}s()}function Qv(){Ds(!0),p.movingToJwst=!0,oi.visible=!1,No(!1,Fn),ht("Move to James Webb Space Telescope"),p.targetPlanet&&!p.targetPlanet.isSun&&(p.targetPlanet.sphere.rotation.y=0);let i=!1;p.SHOW_LABEL&&(p.SHOW_LABEL=!1,i=!0),p.isCameraLocked=!1,p.isCameraSunLocked=!1,nl();const e=wi*p.PLANET_SCALE/ot/10;$c(new L(e*3,e*3,e*3)),Fu(Ns);const t=1,n=Ze.position.clone(),s=performance.now();function r(){const o=(performance.now()-s)/1e3,a=Math.min(o/t,1),c=new L;en.getWorldPosition(c);const l=c.clone().add(Ns);Ze.position.lerpVectors(n,l,a),Ht.target.copy(c),Ht.update(),a<1?requestAnimationFrame(r):(Is(null),p.inEarthSystem=!0,p.birdseye=!1,tl(p.inEarthSystem),Sr(!0),Kt(!p.PAUSED),ti(!1),i&&(p.SHOW_LABEL=!0),p.SHOW_LABEL&&gn(),zs("TARGET_SELECT",p.targets.indexOf("JWST")),p.movingToJwst=!1,Ds(!1))}r()}function nl(){const i=Mt.radius*235.4*p.earthSystemScaling,e=new L,t=new L;ni.sphere.getWorldPosition(e),Mt.sphere.getWorldPosition(t);const n=Sc(e,t,i);Jt.position.x=n.x,Jt.position.z=n.z;const s=Math.atan2(t.z-e.z,t.x-e.x);Jt.rotation.y=We.degToRad(90)-s,Jt.rotation.z+=-.007,en.rotation.y+=.005}function eS(){if(ni.sphere.rotation.y+=-.001,p.inEarthSystem){Mt.sphere.rotation.y+=p.TRUE_ROTATION_SPEEDS?Mt.rotationSpeed:-.009,Ri.position.copy(Mt.sphere.position),Ri.rotation.y+=p.TRUE_ROTATION_SPEEDS?-.0585:-.027,mr.updateOrbitTrail(li,Mt.sphere),Ci.position.copy(Mt.sphere.position),Ci.rotation.y+=p.TRUE_ROTATION_SPEEDS?-.4446:-.2,Pi.orbitTrailObj.rotation.y=Mt.sphere.rotation.y,Pi.updateOrbitTrail(ui,Mt.sphere),Mt.clouds.rotation.y=Mt.sphere.rotation.y*1.3;return}if(p.targetPlanet&&!p.targetPlanet.isSun){if(p.targetPlanet===Oo){p.targetPlanet.sphere.rotation.x+=p.TRUE_ROTATION_SPEEDS?p.targetPlanet.rotationSpeed:-.009;return}p.targetPlanet.sphere.rotation.y+=p.TRUE_ROTATION_SPEEDS?p.targetPlanet.rotationSpeed:-.009,p.targetPlanet===or&&(or.atmosphere.rotation.y=or.sphere.rotation.y*1.2)}}function co(i){Ht.target.copy(i),Ht.update(),Pn.target.copy(Ht.target),Pn.update()}function tS(){if(!p.PAUSED){for(const i of Fn)i.updatePosition(Fn);eS(),p.spacecraftSelected&&(p.spacecraft.updatePosition(Fn,ni.sphere.position),p.spacecraft.updateBolts(),!p.portPressed&&!p.starboardPressed&&(p.spacecraft.container.rotation.z=We.lerp(p.spacecraft.container.rotation.z,0,.08)),p.forwardPressed||(p.spacecraft.obj.flame1.visible=!1,p.spacecraft.obj.flame2.visible=!1),p.backwardPressed||(p.spacecraft.obj.flame3.visible=!1,p.spacecraft.obj.flame4.visible=!1),(p.forwardPressed||p.backwardPressed)&&(p.spacecraft.flameMaterial.uniforms.time.value+=2500*p.spacecraft.scale),!p.forwardPressed&&!p.backwardPressed&&!p.handbrakePressed&&Math.round(Ze.fov)!==p.SPACECRAFT_FOV&&Wi(p.SPACECRAFT_FOV),(p.forwardPressed||p.backwardPressed||p.portPressed||p.starboardPressed||p.rotatePortPressed||p.rotateStarboardPressed||p.handbrakePressed)&&!p.spacecraftMatchVelocity&&p.spacecraft.changeMomentum()),(p.jwstSelected||p.movingToJwst)&&nl(),p.REALISTIC_LIGHTING&&fr.position.copy(ni.sphere.position),p.SHOW_CONNECTION&&Cv([ni.sphere.position,Mt.sphere.position,Jt.position],Vu),p.SHOW_LABEL&&gn()}if(p.jwstSelected&&!p.transitionAnimationActive){const i=new L;if(en.getWorldPosition(i),p.isCameraSunLocked){const e=new L;oi.getWorldPosition(e);const t=.4*Mt.radius*235.4*p.earthSystemScaling,n=Sc(ni.sphere.position,e,t);Ze.position.copy(new L(n.x,0,n.z)),Ze.lookAt(e)}else p.isCameraLocked?(Ze.position.copy(i).add(Ns),Ze.lookAt(i)):co(i)}else if(p.spacecraftSelected)if(p.isCameraLocked)if(p.targetPlanet){const i=new L;i.subVectors(p.targetPlanet.sphere.position,p.spacecraft.container.position);const e=Math.atan2(i.x,i.z);p.spacecraft.container.rotation.y=e;const t=new L;p.spacecraftFirstPerson?p.spacecraft.obj.firstPersonCameraHelper.getWorldPosition(t):p.spacecraft.obj.cameraHelperClose.getWorldPosition(t),Ze.position.copy(t),Ze.lookAt(p.targetPlanet.sphere.position)}else{const i=new L;p.spacecraftFirstPerson?p.spacecraft.obj.firstPersonCameraHelper.getWorldPosition(i):p.spacecraft.obj.cameraHelperFar.getWorldPosition(i),Ze.position.copy(i);const e=new L(0,0,1),t=new rn().setFromEuler(new xn(0,p.spacecraft.container.rotation.y,0)),n=new rn().setFromEuler(new xn(p.spacecraft.obj.rotation.x,0,0)),s=e.applyQuaternion(t.multiply(n));Ze.lookAt(p.spacecraft.container.position.clone().add(s.multiplyScalar(10))),p.spacecraft.obj.rotation.x>=We.degToRad(90)?Ze.rotation.z+=We.degToRad(180):p.spacecraft.obj.rotation.x<=We.degToRad(-90)&&(Ze.rotation.z-=We.degToRad(180))}else co(p.spacecraft.container.position);else if(p.targetPlanet&&!p.transitionAnimationActive)if(p.isCameraSunLocked||(p.sunLockedCameraDistance=0),p.isCameraSunLocked){const i=p.sunLockedCameraDistance>0?p.sunLockedCameraDistance:p.targetPlanet.radius*hn*p.PLANET_SCALE/10,e=Sc(ni.sphere.position,p.targetPlanet.sphere.position,i);Ze.position.copy(new L(e.x,0,e.z)),Ze.lookAt(p.targetPlanet.sphere.position)}else p.isCameraLocked?(Ze.position.copy(p.targetPlanet.sphere.position).add(Xi),Ze.lookAt(p.targetPlanet.sphere.position)):co(p.targetPlanet.sphere.position);else p.transitionAnimationActive||co(new L(0,0,0));ks.render(Le,Ze)}ks.setAnimationLoop(tS);
