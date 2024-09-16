"use strict";function e(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var t=e(require("vscode"));function n(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:t+""}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u=function(e){return e&&e.Math===Math&&e},s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof a&&a)||u("object"==typeof a&&a)||function(){return this}()||Function("return this")(),l={},f=function(e){try{return!!e()}catch(e){return!0}},h=!f((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),d=p,v=Function.prototype.call,g=d?v.bind(v):function(){return v.apply(v,arguments)},m={},y={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,S=b&&!y.call({1:2},1);m.f=S?function(e){var t=b(this,e);return!!t&&t.enumerable}:y;var T,w,O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},E=p,x=Function.prototype,k=x.call,P=E&&x.bind.bind(k,k),M=E?P:function(e){return function(){return k.apply(e,arguments)}},I=M,j=I({}.toString),A=I("".slice),C=function(e){return A(j(e),8,-1)},L=f,R=C,_=Object,F=M("".split),D=L((function(){return!_("z").propertyIsEnumerable(0)}))?function(e){return"String"===R(e)?F(e,""):_(e)}:_,N=function(e){return null==e},V=N,B=TypeError,U=function(e){if(V(e))throw new B("Can't call method on "+e);return e},$=D,H=U,z=function(e){return $(H(e))},W="object"==typeof document&&document.all,G=void 0===W&&void 0!==W?function(e){return"function"==typeof e||e===W}:function(e){return"function"==typeof e},K=G,Y=function(e){return"object"==typeof e?null!==e:K(e)},X=s,q=G,Q=function(e){return q(e)?e:void 0},Z=function(e,t){return arguments.length<2?Q(X[e]):X[e]&&X[e][t]},J=M({}.isPrototypeOf),ee=s,te="undefined"!=typeof navigator&&String(navigator.userAgent)||"",ne=ee.process,re=ee.Deno,oe=ne&&ne.versions||re&&re.version,ie=oe&&oe.v8;ie&&(w=(T=ie.split("."))[0]>0&&T[0]<4?1:+(T[0]+T[1])),!w&&te&&(!(T=te.match(/Edge\/(\d+)/))||T[1]>=74)&&(T=te.match(/Chrome\/(\d+)/))&&(w=+T[1]);var ae=w,ce=ae,ue=f,se=s.String,le=!!Object.getOwnPropertySymbols&&!ue((function(){var e=Symbol("symbol detection");return!se(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ce&&ce<41})),fe=le&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,he=Z,pe=G,de=J,ve=Object,ge=fe?function(e){return"symbol"==typeof e}:function(e){var t=he("Symbol");return pe(t)&&de(t.prototype,ve(e))},me=String,ye=G,be=TypeError,Se=function(e){if(ye(e))return e;throw new be(function(e){try{return me(e)}catch(e){return"Object"}}(e)+" is not a function")},Te=Se,we=N,Oe=function(e,t){var n=e[t];return we(n)?void 0:Te(n)},Ee=g,xe=G,ke=Y,Pe=TypeError,Me={exports:{}},Ie=s,je=Object.defineProperty,Ae=function(e,t){try{je(Ie,e,{value:t,configurable:!0,writable:!0})}catch(n){Ie[e]=t}return t},Ce=s,Le=Ae,Re=Me.exports=Ce["__core-js_shared__"]||Le("__core-js_shared__",{});(Re.versions||(Re.versions=[])).push({version:"3.36.1",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"});var _e=Me.exports,Fe=_e,De=function(e,t){return Fe[e]||(Fe[e]=t||{})},Ne=U,Ve=Object,Be=function(e){return Ve(Ne(e))},Ue=Be,$e=M({}.hasOwnProperty),He=Object.hasOwn||function(e,t){return $e(Ue(e),t)},ze=M,We=0,Ge=Math.random(),Ke=ze(1..toString),Ye=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ke(++We+Ge,36)},Xe=De,qe=He,Qe=Ye,Ze=le,Je=fe,et=s.Symbol,tt=Xe("wks"),nt=Je?et.for||et:et&&et.withoutSetter||Qe,rt=function(e){return qe(tt,e)||(tt[e]=Ze&&qe(et,e)?et[e]:nt("Symbol."+e)),tt[e]},ot=g,it=Y,at=ge,ct=Oe,ut=TypeError,st=rt("toPrimitive"),lt=function(e,t){if(!it(e)||at(e))return e;var n,r=ct(e,st);if(r){if(void 0===t&&(t="default"),n=ot(r,e,t),!it(n)||at(n))return n;throw new ut("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var n,r;if("string"===t&&xe(n=e.toString)&&!ke(r=Ee(n,e)))return r;if(xe(n=e.valueOf)&&!ke(r=Ee(n,e)))return r;if("string"!==t&&xe(n=e.toString)&&!ke(r=Ee(n,e)))return r;throw new Pe("Can't convert object to primitive value")}(e,t)},ft=ge,ht=function(e){var t=lt(e,"string");return ft(t)?t:t+""},pt=Y,dt=s.document,vt=pt(dt)&&pt(dt.createElement),gt=function(e){return vt?dt.createElement(e):{}},mt=gt,yt=!h&&!f((function(){return 7!==Object.defineProperty(mt("div"),"a",{get:function(){return 7}}).a})),bt=h,St=g,Tt=m,wt=O,Ot=z,Et=ht,xt=He,kt=yt,Pt=Object.getOwnPropertyDescriptor;l.f=bt?Pt:function(e,t){if(e=Ot(e),t=Et(t),kt)try{return Pt(e,t)}catch(e){}if(xt(e,t))return wt(!St(Tt.f,e,t),e[t])};var Mt={},It=h&&f((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),jt=Y,At=String,Ct=TypeError,Lt=function(e){if(jt(e))return e;throw new Ct(At(e)+" is not an object")},Rt=h,_t=yt,Ft=It,Dt=Lt,Nt=ht,Vt=TypeError,Bt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor;Mt.f=Rt?Ft?function(e,t,n){if(Dt(e),t=Nt(t),Dt(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ut(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Bt(e,t,n)}:Bt:function(e,t,n){if(Dt(e),t=Nt(t),Dt(n),_t)try{return Bt(e,t,n)}catch(e){}if("get"in n||"set"in n)throw new Vt("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var $t=Mt,Ht=O,zt=h?function(e,t,n){return $t.f(e,t,Ht(1,n))}:function(e,t,n){return e[t]=n,e},Wt={exports:{}},Gt=h,Kt=He,Yt=Function.prototype,Xt=Gt&&Object.getOwnPropertyDescriptor,qt=Kt(Yt,"name"),Qt={EXISTS:qt,PROPER:qt&&"something"===function(){}.name,CONFIGURABLE:qt&&(!Gt||Gt&&Xt(Yt,"name").configurable)},Zt=G,Jt=_e,en=M(Function.toString);Zt(Jt.inspectSource)||(Jt.inspectSource=function(e){return en(e)});var tn,nn,rn,on=Jt.inspectSource,an=G,cn=s.WeakMap,un=an(cn)&&/native code/.test(String(cn)),sn=Ye,ln=De("keys"),fn=function(e){return ln[e]||(ln[e]=sn(e))},hn={},pn=un,dn=s,vn=Y,gn=zt,mn=He,yn=_e,bn=fn,Sn=hn,Tn=dn.TypeError,wn=dn.WeakMap;if(pn||yn.state){var On=yn.state||(yn.state=new wn);On.get=On.get,On.has=On.has,On.set=On.set,tn=function(e,t){if(On.has(e))throw new Tn("Object already initialized");return t.facade=e,On.set(e,t),t},nn=function(e){return On.get(e)||{}},rn=function(e){return On.has(e)}}else{var En=bn("state");Sn[En]=!0,tn=function(e,t){if(mn(e,En))throw new Tn("Object already initialized");return t.facade=e,gn(e,En,t),t},nn=function(e){return mn(e,En)?e[En]:{}},rn=function(e){return mn(e,En)}}var xn={set:tn,get:nn,has:rn,enforce:function(e){return rn(e)?nn(e):tn(e,{})},getterFor:function(e){return function(t){var n;if(!vn(t)||(n=nn(t)).type!==e)throw new Tn("Incompatible receiver, "+e+" required");return n}}},kn=M,Pn=f,Mn=G,In=He,jn=h,An=Qt.CONFIGURABLE,Cn=on,Ln=xn.enforce,Rn=xn.get,_n=String,Fn=Object.defineProperty,Dn=kn("".slice),Nn=kn("".replace),Vn=kn([].join),Bn=jn&&!Pn((function(){return 8!==Fn((function(){}),"length",{value:8}).length})),Un=String(String).split("String"),$n=Wt.exports=function(e,t,n){"Symbol("===Dn(_n(t),0,7)&&(t="["+Nn(_n(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!In(e,"name")||An&&e.name!==t)&&(jn?Fn(e,"name",{value:t,configurable:!0}):e.name=t),Bn&&n&&In(n,"arity")&&e.length!==n.arity&&Fn(e,"length",{value:n.arity});try{n&&In(n,"constructor")&&n.constructor?jn&&Fn(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Ln(e);return In(r,"source")||(r.source=Vn(Un,"string"==typeof t?t:"")),e};Function.prototype.toString=$n((function(){return Mn(this)&&Rn(this).source||Cn(this)}),"toString");var Hn=Wt.exports,zn=G,Wn=Mt,Gn=Hn,Kn=Ae,Yn=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(zn(n)&&Gn(n,i,r),r.global)o?e[t]=n:Kn(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:Wn.f(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},Xn={},qn=Math.ceil,Qn=Math.floor,Zn=Math.trunc||function(e){var t=+e;return(t>0?Qn:qn)(t)},Jn=function(e){var t=+e;return t!=t||0===t?0:Zn(t)},er=Jn,tr=Math.max,nr=Math.min,rr=function(e,t){var n=er(e);return n<0?tr(n+t,0):nr(n,t)},or=Jn,ir=Math.min,ar=function(e){var t=or(e);return t>0?ir(t,9007199254740991):0},cr=ar,ur=function(e){return cr(e.length)},sr=z,lr=rr,fr=ur,hr=function(e){return function(t,n,r){var o=sr(t),i=fr(o);if(0===i)return!e&&-1;var a,c=lr(r,i);if(e&&n!=n){for(;i>c;)if((a=o[c++])!=a)return!0}else for(;i>c;c++)if((e||c in o)&&o[c]===n)return e||c||0;return!e&&-1}},pr={includes:hr(!0),indexOf:hr(!1)},dr=He,vr=z,gr=pr.indexOf,mr=hn,yr=M([].push),br=function(e,t){var n,r=vr(e),o=0,i=[];for(n in r)!dr(mr,n)&&dr(r,n)&&yr(i,n);for(;t.length>o;)dr(r,n=t[o++])&&(~gr(i,n)||yr(i,n));return i},Sr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Tr=br,wr=Sr.concat("length","prototype");Xn.f=Object.getOwnPropertyNames||function(e){return Tr(e,wr)};var Or={};Or.f=Object.getOwnPropertySymbols;var Er=Z,xr=Xn,kr=Or,Pr=Lt,Mr=M([].concat),Ir=Er("Reflect","ownKeys")||function(e){var t=xr.f(Pr(e)),n=kr.f;return n?Mr(t,n(e)):t},jr=He,Ar=Ir,Cr=l,Lr=Mt,Rr=f,_r=G,Fr=/#|\.prototype\./,Dr=function(e,t){var n=Vr[Nr(e)];return n===Ur||n!==Br&&(_r(t)?Rr(t):!!t)},Nr=Dr.normalize=function(e){return String(e).replace(Fr,".").toLowerCase()},Vr=Dr.data={},Br=Dr.NATIVE="N",Ur=Dr.POLYFILL="P",$r=Dr,Hr=s,zr=l.f,Wr=zt,Gr=Yn,Kr=Ae,Yr=function(e,t,n){for(var r=Ar(t),o=Lr.f,i=Cr.f,a=0;a<r.length;a++){var c=r[a];jr(e,c)||n&&jr(n,c)||o(e,c,i(t,c))}},Xr=$r,qr=function(e,t){var n,r,o,i,a,c=e.target,u=e.global,s=e.stat;if(n=u?Hr:s?Hr[c]||Kr(c,{}):Hr[c]&&Hr[c].prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(a=zr(n,r))&&a.value:n[r],!Xr(u?r:c+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Yr(i,o)}(e.sham||o&&o.sham)&&Wr(i,"sham",!0),Gr(n,r,i,e)}},Qr=C,Zr=Array.isArray||function(e){return"Array"===Qr(e)},Jr=TypeError,eo=h,to=Mt,no=O,ro=function(e,t,n){eo?to.f(e,t,no(0,n)):e[t]=n},oo={};oo[rt("toStringTag")]="z";var io="[object z]"===String(oo),ao=io,co=G,uo=C,so=rt("toStringTag"),lo=Object,fo="Arguments"===uo(function(){return arguments}()),ho=ao?uo:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=lo(e),so))?n:fo?uo(t):"Object"===(r=uo(t))&&co(t.callee)?"Arguments":r},po=M,vo=f,go=G,mo=ho,yo=on,bo=function(){},So=Z("Reflect","construct"),To=/^\s*(?:class|function)\b/,wo=po(To.exec),Oo=!To.test(bo),Eo=function(e){if(!go(e))return!1;try{return So(bo,[],e),!0}catch(e){return!1}},xo=function(e){if(!go(e))return!1;switch(mo(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Oo||!!wo(To,yo(e))}catch(e){return!0}};xo.sham=!0;var ko=!So||vo((function(){var e;return Eo(Eo.call)||!Eo(Object)||!Eo((function(){e=!0}))||e}))?xo:Eo,Po=Zr,Mo=ko,Io=Y,jo=rt("species"),Ao=Array,Co=function(e,t){return new(function(e){var t;return Po(e)&&(t=e.constructor,(Mo(t)&&(t===Ao||Po(t.prototype))||Io(t)&&null===(t=t[jo]))&&(t=void 0)),void 0===t?Ao:t}(e))(0===t?0:t)},Lo=f,Ro=ae,_o=rt("species"),Fo=function(e){return Ro>=51||!Lo((function(){var t=[];return(t.constructor={})[_o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Do=qr,No=f,Vo=Zr,Bo=Y,Uo=Be,$o=ur,Ho=function(e){if(e>9007199254740991)throw Jr("Maximum allowed index exceeded");return e},zo=ro,Wo=Co,Go=Fo,Ko=ae,Yo=rt("isConcatSpreadable"),Xo=Ko>=51||!No((function(){var e=[];return e[Yo]=!1,e.concat()[0]!==e})),qo=function(e){if(!Bo(e))return!1;var t=e[Yo];return void 0!==t?!!t:Vo(e)};Do({target:"Array",proto:!0,arity:1,forced:!Xo||!Go("concat")},{concat:function(e){var t,n,r,o,i,a=Uo(this),c=Wo(a,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(qo(i=-1===t?a:arguments[t]))for(o=$o(i),Ho(u+o),n=0;n<o;n++,u++)n in i&&zo(c,u,i[n]);else Ho(u+1),zo(c,u++,i);return c.length=u,c}});var Qo=f,Zo=function(e,t){var n=[][e];return!!n&&Qo((function(){n.call(null,t||function(){return 1},1)}))},Jo=qr,ei=D,ti=z,ni=Zo,ri=M([].join);Jo({target:"Array",proto:!0,forced:ei!==Object||!ni("join",",")},{join:function(e){return ri(ti(this),void 0===e?",":e)}});var oi=C,ii=M,ai=function(e){if("Function"===oi(e))return ii(e)},ci=Se,ui=p,si=ai(ai.bind),li=D,fi=Be,hi=ur,pi=Co,di=M([].push),vi=function(e){var t=1===e,n=2===e,r=3===e,o=4===e,i=6===e,a=7===e,c=5===e||i;return function(u,s,l,f){for(var h,p,d=fi(u),v=li(d),g=hi(v),m=function(e,t){return ci(e),void 0===t?e:ui?si(e,t):function(){return e.apply(t,arguments)}}(s,l),y=0,b=f||pi,S=t?b(u,g):n||a?b(u,0):void 0;g>y;y++)if((c||y in v)&&(p=m(h=v[y],y,d),e))if(t)S[y]=p;else if(p)switch(e){case 3:return!0;case 5:return h;case 6:return y;case 2:di(S,h)}else switch(e){case 4:return!1;case 7:di(S,h)}return i?-1:r||o?o:S}},gi={forEach:vi(0),map:vi(1),filter:vi(2),some:vi(3),every:vi(4),find:vi(5),findIndex:vi(6),filterReject:vi(7)},mi=gi.map;qr({target:"Array",proto:!0,forced:!Fo("map")},{map:function(e){return mi(this,e,arguments.length>1?arguments[1]:void 0)}});var yi=br,bi=Sr,Si=Object.keys||function(e){return yi(e,bi)},Ti=Be,wi=Si;qr({target:"Object",stat:!0,forced:f((function(){wi(1)}))},{keys:function(e){return wi(Ti(e))}});var Oi=ho,Ei=io?{}.toString:function(){return"[object "+Oi(this)+"]"};io||Yn(Object.prototype,"toString",Ei,{unsafe:!0});var xi=ho,ki=String,Pi=function(e){if("Symbol"===xi(e))throw new TypeError("Cannot convert a Symbol value to a string");return ki(e)},Mi=Lt,Ii=f,ji=s.RegExp,Ai=Ii((function(){var e=ji("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),Ci=Ai||Ii((function(){return!ji("a","y").sticky})),Li={BROKEN_CARET:Ai||Ii((function(){var e=ji("^r","gy");return e.lastIndex=2,null!==e.exec("str")})),MISSED_STICKY:Ci,UNSUPPORTED_Y:Ai},Ri={},_i=h,Fi=It,Di=Mt,Ni=Lt,Vi=z,Bi=Si;Ri.f=_i&&!Fi?Object.defineProperties:function(e,t){Ni(e);for(var n,r=Vi(t),o=Bi(t),i=o.length,a=0;i>a;)Di.f(e,n=o[a++],r[n]);return e};var Ui,$i=Z("document","documentElement"),Hi=Lt,zi=Ri,Wi=Sr,Gi=hn,Ki=$i,Yi=gt,Xi=fn("IE_PROTO"),qi=function(){},Qi=function(e){return"<script>"+e+"<\/script>"},Zi=function(e){e.write(Qi("")),e.close();var t=e.parentWindow.Object;return e=null,t},Ji=function(){try{Ui=new ActiveXObject("htmlfile")}catch(e){}var e,t;Ji="undefined"!=typeof document?document.domain&&Ui?Zi(Ui):((t=Yi("iframe")).style.display="none",Ki.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Qi("document.F=Object")),e.close(),e.F):Zi(Ui);for(var n=Wi.length;n--;)delete Ji.prototype[Wi[n]];return Ji()};Gi[Xi]=!0;var ea,ta,na=Object.create||function(e,t){var n;return null!==e?(qi.prototype=Hi(e),n=new qi,qi.prototype=null,n[Xi]=e):n=Ji(),void 0===t?n:zi.f(n,t)},ra=f,oa=s.RegExp,ia=ra((function(){var e=oa(".","s");return!(e.dotAll&&e.test("\n")&&"s"===e.flags)})),aa=f,ca=s.RegExp,ua=aa((function(){var e=ca("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),sa=g,la=M,fa=Pi,ha=function(){var e=Mi(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t},pa=Li,da=na,va=xn.get,ga=ia,ma=ua,ya=De("native-string-replace",String.prototype.replace),ba=RegExp.prototype.exec,Sa=ba,Ta=la("".charAt),wa=la("".indexOf),Oa=la("".replace),Ea=la("".slice),xa=(ta=/b*/g,sa(ba,ea=/a/,"a"),sa(ba,ta,"a"),0!==ea.lastIndex||0!==ta.lastIndex),ka=pa.BROKEN_CARET,Pa=void 0!==/()??/.exec("")[1];(xa||Pa||ka||ga||ma)&&(Sa=function(e){var t,n,r,o,i,a,c,u=this,s=va(u),l=fa(e),f=s.raw;if(f)return f.lastIndex=u.lastIndex,t=sa(Sa,f,l),u.lastIndex=f.lastIndex,t;var h=s.groups,p=ka&&u.sticky,d=sa(ha,u),v=u.source,g=0,m=l;if(p&&(d=Oa(d,"y",""),-1===wa(d,"g")&&(d+="g"),m=Ea(l,u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==Ta(l,u.lastIndex-1))&&(v="(?: "+v+")",m=" "+m,g++),n=new RegExp("^(?:"+v+")",d)),Pa&&(n=new RegExp("^"+v+"$(?!\\s)",d)),xa&&(r=u.lastIndex),o=sa(ba,p?n:u,m),p?o?(o.input=Ea(o.input,g),o[0]=Ea(o[0],g),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:xa&&o&&(u.lastIndex=u.global?o.index+o[0].length:r),Pa&&o&&o.length>1&&sa(ya,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&h)for(o.groups=a=da(null),i=0;i<h.length;i++)a[(c=h[i])[0]]=o[c[1]];return o});var Ma=Sa;qr({target:"RegExp",proto:!0,forced:/./.exec!==Ma},{exec:Ma});var Ia=p,ja=Function.prototype,Aa=ja.apply,Ca=ja.call,La="object"==typeof Reflect&&Reflect.apply||(Ia?Ca.bind(Aa):function(){return Ca.apply(Aa,arguments)}),Ra=g,_a=Yn,Fa=Ma,Da=f,Na=rt,Va=zt,Ba=Na("species"),Ua=RegExp.prototype,$a=function(e,t,n,r){var o=Na(e),i=!Da((function(){var t={};return t[o]=function(){return 7},7!==""[e](t)})),a=i&&!Da((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Ba]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t}));if(!i||!a||n){var c=/./[o],u=t(o,""[e],(function(e,t,n,r,o){var a=t.exec;return a===Fa||a===Ua.exec?i&&!o?{done:!0,value:Ra(c,t,n,r)}:{done:!0,value:Ra(e,n,t,r)}:{done:!1}}));_a(String.prototype,e,u[0]),_a(Ua,o,u[1])}r&&Va(Ua[o],"sham",!0)},Ha=M,za=Jn,Wa=Pi,Ga=U,Ka=Ha("".charAt),Ya=Ha("".charCodeAt),Xa=Ha("".slice),qa=function(e){return function(t,n){var r,o,i=Wa(Ga(t)),a=za(n),c=i.length;return a<0||a>=c?e?"":void 0:(r=Ya(i,a))<55296||r>56319||a+1===c||(o=Ya(i,a+1))<56320||o>57343?e?Ka(i,a):r:e?Xa(i,a,a+2):o-56320+(r-55296<<10)+65536}},Qa=(qa(!1),qa(!0)),Za=function(e,t,n){return t+(n?Qa(e,t).length:1)},Ja=M,ec=Be,tc=Math.floor,nc=Ja("".charAt),rc=Ja("".replace),oc=Ja("".slice),ic=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,ac=/\$([$&'`]|\d{1,2})/g,cc=g,uc=Lt,sc=G,lc=C,fc=Ma,hc=TypeError,pc=function(e,t){var n=e.exec;if(sc(n)){var r=cc(n,e,t);return null!==r&&uc(r),r}if("RegExp"===lc(e))return cc(fc,e,t);throw new hc("RegExp#exec called on incompatible receiver")},dc=La,vc=g,gc=M,mc=$a,yc=f,bc=Lt,Sc=G,Tc=N,wc=Jn,Oc=ar,Ec=Pi,xc=U,kc=Za,Pc=Oe,Mc=function(e,t,n,r,o,i){var a=n+e.length,c=r.length,u=ac;return void 0!==o&&(o=ec(o),u=ic),rc(i,u,(function(i,u){var s;switch(nc(u,0)){case"$":return"$";case"&":return e;case"`":return oc(t,0,n);case"'":return oc(t,a);case"<":s=o[oc(u,1,-1)];break;default:var l=+u;if(0===l)return i;if(l>c){var f=tc(l/10);return 0===f?i:f<=c?void 0===r[f-1]?nc(u,1):r[f-1]+nc(u,1):i}s=r[l-1]}return void 0===s?"":s}))},Ic=pc,jc=rt("replace"),Ac=Math.max,Cc=Math.min,Lc=gc([].concat),Rc=gc([].push),_c=gc("".indexOf),Fc=gc("".slice),Dc="$0"==="a".replace(/./,"$0"),Nc=!!/./[jc]&&""===/./[jc]("a","$0");mc("replace",(function(e,t,n){var r=Nc?"$":"$0";return[function(e,n){var r=xc(this),o=Tc(e)?void 0:Pc(e,jc);return o?vc(o,e,r,n):vc(t,Ec(r),e,n)},function(e,o){var i=bc(this),a=Ec(e);if("string"==typeof o&&-1===_c(o,r)&&-1===_c(o,"$<")){var c=n(t,i,a,o);if(c.done)return c.value}var u=Sc(o);u||(o=Ec(o));var s,l=i.global;l&&(s=i.unicode,i.lastIndex=0);for(var f,h=[];null!==(f=Ic(i,a))&&(Rc(h,f),l);)""===Ec(f[0])&&(i.lastIndex=kc(a,Oc(i.lastIndex),s));for(var p,d="",v=0,g=0;g<h.length;g++){for(var m,y=Ec((f=h[g])[0]),b=Ac(Cc(wc(f.index),a.length),0),S=[],T=1;T<f.length;T++)Rc(S,void 0===(p=f[T])?p:String(p));var w=f.groups;if(u){var O=Lc([y],S,b,a);void 0!==w&&Rc(O,w),m=Ec(dc(o,void 0,O))}else m=Mc(y,a,b,S,w,o);b>=v&&(d+=Fc(a,v,b)+m,v=b+y.length)}return d+Fc(a,v)}]}),!!yc((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!Dc||Nc);var Vc=gt("span").classList,Bc=Vc&&Vc.constructor&&Vc.constructor.prototype,Uc=Bc===Object.prototype?void 0:Bc,$c=gi.forEach,Hc=s,zc={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Wc=Uc,Gc=Zo("forEach")?[].forEach:function(e){return $c(this,e,arguments.length>1?arguments[1]:void 0)},Kc=zt,Yc=function(e){if(e&&e.forEach!==Gc)try{Kc(e,"forEach",Gc)}catch(t){e.forEach=Gc}};for(var Xc in zc)zc[Xc]&&Yc(Hc[Xc]&&Hc[Xc].prototype);Yc(Wc);var qc={APP:{NAME:"ShineGuyPro-VSCode",THEMES:["ShineGuy Pro","ShineGuy Pro (Filter Octagon)","ShineGuy Pro (Filter Ristretto)","ShineGuy Pro (Filter Spectrum)","ShineGuy Pro (Filter Machine)","ShineGuy Classic"],DESCRIPTION:"ShineGuy Pro theme and color scheme for Visual Studio Code",VERSION:"1.3.2",AUTHOR:"ShineGuy",CREATION_DATE:2024,BUILD_DATE:"21-4-2024",UUID:"fd330f6f-3f41-421d-9fe5-de742d0c54c0",SECONDS_TO_EXPIRE:172800,SECONDS_TO_EXPIRE_FAST:86400,SLOW_PERIOD:604800}},Qc=rt,Zc=na,Jc=Mt.f,eu=Qc("unscopables"),tu=Array.prototype;void 0===tu[eu]&&Jc(tu,eu,{configurable:!0,value:Zc(null)});var nu,ru=pr.includes;qr({target:"Array",proto:!0,forced:f((function(){return!Array(1).includes()}))},{includes:function(e){return ru(this,e,arguments.length>1?arguments[1]:void 0)}}),nu="includes",tu[eu][nu]=!0;var ou=M([].slice),iu=qr,au=Zr,cu=ko,uu=Y,su=rr,lu=ur,fu=z,hu=ro,pu=rt,du=ou,vu=Fo("slice"),gu=pu("species"),mu=Array,yu=Math.max;iu({target:"Array",proto:!0,forced:!vu},{slice:function(e,t){var n,r,o,i=fu(this),a=lu(i),c=su(e,a),u=su(void 0===t?a:t,a);if(au(i)&&(n=i.constructor,(cu(n)&&(n===mu||au(n.prototype))||uu(n)&&null===(n=n[gu]))&&(n=void 0),n===mu||void 0===n))return du(i,c,u);for(r=new(void 0===n?mu:n)(yu(u-c,0)),o=0;c<u;c++,o++)c in i&&hu(r,o,i[c]);return r.length=o,r}});var bu=Y,Su=C,Tu=rt("match"),wu=TypeError,Ou=rt("match"),Eu=qr,xu=function(e){if(function(e){var t;return bu(e)&&(void 0!==(t=e[Tu])?!!t:"RegExp"===Su(e))}(e))throw new wu("The method doesn't accept regular expressions");return e},ku=U,Pu=Pi,Mu=M("".indexOf);Eu({target:"String",proto:!0,forced:!function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[Ou]=!1,"/./"[e](t)}catch(e){}}return!1}("includes")},{includes:function(e){return!!~Mu(Pu(ku(this)),Pu(xu(e)),arguments.length>1?arguments[1]:void 0)}});var Iu=g,ju=Lt,Au=N,Cu=ar,Lu=Pi,Ru=U,_u=Oe,Fu=Za,Du=pc;$a("match",(function(e,t,n){return[function(t){var n=Ru(this),r=Au(t)?void 0:_u(t,e);return r?Iu(r,t,n):new RegExp(t)[e](Lu(n))},function(e){var r=ju(this),o=Lu(e),i=n(t,r,o);if(i.done)return i.value;if(!r.global)return Du(r,o);var a=r.unicode;r.lastIndex=0;for(var c,u=[],s=0;null!==(c=Du(r,o));){var l=Lu(c[0]);u[s]=l,""===l&&(r.lastIndex=Fu(o,Cu(r.lastIndex),a)),s++}return 0===s?null:u}]}));var Nu,Vu,Bu={exports:{}},Uu={exports:{}};Nu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vu={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&Vu.rotl(e,8)|4278255360&Vu.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=Vu.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var r=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?t.push(Nu.charAt(r>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,r=0;n<e.length;r=++n%4)0!=r&&t.push((Nu.indexOf(e.charAt(n-1))&Math.pow(2,-2*r+8)-1)<<2*r|Nu.indexOf(e.charAt(n))>>>6-2*r);return t}},Uu.exports=Vu;var $u=Uu.exports,Hu={utf8:{stringToBytes:function(e){return Hu.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(Hu.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}},zu=Hu,Wu=function(e){return null!=e&&(Gu(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&Gu(e.slice(0,0))}(e)||!!e._isBuffer)};function Gu(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}!function(){var e=$u,t=zu.utf8,n=Wu,r=zu.bin,o=function(i,a){i.constructor==String?i=a&&"binary"===a.encoding?r.stringToBytes(i):t.stringToBytes(i):n(i)?i=Array.prototype.slice.call(i,0):Array.isArray(i)||i.constructor===Uint8Array||(i=i.toString());for(var c=e.bytesToWords(i),u=8*i.length,s=1732584193,l=-271733879,f=-1732584194,h=271733878,p=0;p<c.length;p++)c[p]=16711935&(c[p]<<8|c[p]>>>24)|4278255360&(c[p]<<24|c[p]>>>8);c[u>>>5]|=128<<u%32,c[14+(u+64>>>9<<4)]=u;var d=o._ff,v=o._gg,g=o._hh,m=o._ii;for(p=0;p<c.length;p+=16){var y=s,b=l,S=f,T=h;s=d(s,l,f,h,c[p+0],7,-680876936),h=d(h,s,l,f,c[p+1],12,-389564586),f=d(f,h,s,l,c[p+2],17,606105819),l=d(l,f,h,s,c[p+3],22,-1044525330),s=d(s,l,f,h,c[p+4],7,-176418897),h=d(h,s,l,f,c[p+5],12,1200080426),f=d(f,h,s,l,c[p+6],17,-1473231341),l=d(l,f,h,s,c[p+7],22,-45705983),s=d(s,l,f,h,c[p+8],7,1770035416),h=d(h,s,l,f,c[p+9],12,-1958414417),f=d(f,h,s,l,c[p+10],17,-42063),l=d(l,f,h,s,c[p+11],22,-1990404162),s=d(s,l,f,h,c[p+12],7,1804603682),h=d(h,s,l,f,c[p+13],12,-40341101),f=d(f,h,s,l,c[p+14],17,-1502002290),s=v(s,l=d(l,f,h,s,c[p+15],22,1236535329),f,h,c[p+1],5,-165796510),h=v(h,s,l,f,c[p+6],9,-1069501632),f=v(f,h,s,l,c[p+11],14,643717713),l=v(l,f,h,s,c[p+0],20,-373897302),s=v(s,l,f,h,c[p+5],5,-701558691),h=v(h,s,l,f,c[p+10],9,38016083),f=v(f,h,s,l,c[p+15],14,-660478335),l=v(l,f,h,s,c[p+4],20,-405537848),s=v(s,l,f,h,c[p+9],5,568446438),h=v(h,s,l,f,c[p+14],9,-1019803690),f=v(f,h,s,l,c[p+3],14,-187363961),l=v(l,f,h,s,c[p+8],20,1163531501),s=v(s,l,f,h,c[p+13],5,-1444681467),h=v(h,s,l,f,c[p+2],9,-51403784),f=v(f,h,s,l,c[p+7],14,1735328473),s=g(s,l=v(l,f,h,s,c[p+12],20,-1926607734),f,h,c[p+5],4,-378558),h=g(h,s,l,f,c[p+8],11,-2022574463),f=g(f,h,s,l,c[p+11],16,1839030562),l=g(l,f,h,s,c[p+14],23,-35309556),s=g(s,l,f,h,c[p+1],4,-1530992060),h=g(h,s,l,f,c[p+4],11,1272893353),f=g(f,h,s,l,c[p+7],16,-155497632),l=g(l,f,h,s,c[p+10],23,-1094730640),s=g(s,l,f,h,c[p+13],4,681279174),h=g(h,s,l,f,c[p+0],11,-358537222),f=g(f,h,s,l,c[p+3],16,-722521979),l=g(l,f,h,s,c[p+6],23,76029189),s=g(s,l,f,h,c[p+9],4,-640364487),h=g(h,s,l,f,c[p+12],11,-421815835),f=g(f,h,s,l,c[p+15],16,530742520),s=m(s,l=g(l,f,h,s,c[p+2],23,-995338651),f,h,c[p+0],6,-198630844),h=m(h,s,l,f,c[p+7],10,1126891415),f=m(f,h,s,l,c[p+14],15,-1416354905),l=m(l,f,h,s,c[p+5],21,-57434055),s=m(s,l,f,h,c[p+12],6,1700485571),h=m(h,s,l,f,c[p+3],10,-1894986606),f=m(f,h,s,l,c[p+10],15,-1051523),l=m(l,f,h,s,c[p+1],21,-2054922799),s=m(s,l,f,h,c[p+8],6,1873313359),h=m(h,s,l,f,c[p+15],10,-30611744),f=m(f,h,s,l,c[p+6],15,-1560198380),l=m(l,f,h,s,c[p+13],21,1309151649),s=m(s,l,f,h,c[p+4],6,-145523070),h=m(h,s,l,f,c[p+11],10,-1120210379),f=m(f,h,s,l,c[p+2],15,718787259),l=m(l,f,h,s,c[p+9],21,-343485551),s=s+y>>>0,l=l+b>>>0,f=f+S>>>0,h=h+T>>>0}return e.endian([s,l,f,h])};o._ff=function(e,t,n,r,o,i,a){var c=e+(t&n|~t&r)+(o>>>0)+a;return(c<<i|c>>>32-i)+t},o._gg=function(e,t,n,r,o,i,a){var c=e+(t&r|n&~r)+(o>>>0)+a;return(c<<i|c>>>32-i)+t},o._hh=function(e,t,n,r,o,i,a){var c=e+(t^n^r)+(o>>>0)+a;return(c<<i|c>>>32-i)+t},o._ii=function(e,t,n,r,o,i,a){var c=e+(n^(t|~r))+(o>>>0)+a;return(c<<i|c>>>32-i)+t},o._blocksize=16,o._digestsize=16,Bu.exports=function(t,n){if(null==t)throw new Error("Illegal argument "+t);var i=e.wordsToBytes(o(t,n));return n&&n.asBytes?i:n&&n.asString?r.bytesToString(i):e.bytesToHex(i)}}();var Ku=c(Bu.exports),Yu=function(){return i((function e(t,n){r(this,e),this.extensionContext=t,this.vscode=n,this.isFirstTime=!1,this.globalState=this.extensionContext.globalState,this.load()}),[{key:"loadCurrentUserSettings",value:function(){var e=this.vscode.workspace.getConfiguration("workbench");this.version=qc.VERSION,this.colorTheme=e.colorTheme,this.iconTheme=e.iconTheme;var t=this.vscode.workspace.getConfiguration("shineguyPro");this.fileIconsMonochrome=t.get("fileIconsMonochrome",!1)}},{key:"get",value:function(){return{fileIconsMonochrome:this.fileIconsMonochrome,iconTheme:this.iconTheme,colorTheme:this.colorTheme}}},{key:"load",value:function(){return this.loadCurrentUserSettings(),this.firstTimeStamp=this.globalState.get("firstTimeStamp",0),this.lastTimeStamp=this.globalState.get("lastTimeStamp",0),this.firstTimeStamp||(this.isFirstTime=!0,this.firstTimeStamp=this.getCurrentTimeStamp(),this.update("firstTimeStamp",this.firstTimeStamp)),this.lastTimeStamp||(this.lastTimeStamp=this.getCurrentTimeStamp(),this.update("lastTimeStamp",this.lastTimeStamp)),this.thankYouMessageShown=this.globalState.get("thankYouMessageShown",!1),this.email=this.globalState.get("email",""),this.licenseKey=this.globalState.get("licenseKey",""),this.get()}},{key:"updateTheme",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="".concat(e).concat(this.fileIconsMonochrome?" Monochrome ":" ","Icons"),r=this.vscode.workspace.getConfiguration("workbench"),o=r.iconTheme;e!==t.colorTheme&&r.update("colorTheme",e,!0),(this.isValidIconTheme(o)||this.isFirstTime)&&n!==t.iconTheme&&r.update("iconTheme",n,!0),this.load()}},{key:"update",value:function(e,t){this.globalState.update(e,t)}},{key:"getCurrentTimeStamp",value:function(){return Math.floor(Date.now()/1e3)}},{key:"isValidLicense",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e||!t)return!1;var n=Ku("".concat(qc.APP.UUID).concat(e)),r=n.match(/.{1,5}/g),o=r.slice(0,5).join("-");return t===o}},{key:"isValidIconTheme",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&qc.APP.THEMES.includes(e.replace(/ (Monochrome )?Icons$/,""))}},{key:"hasValidLicense",get:function(){return this.isValidLicense(this.email,this.licenseKey)}},{key:"isExpired",get:function(){return this.isUsingForAWhile?this.getCurrentTimeStamp()-this.lastTimeStamp>qc.APP.SECONDS_TO_EXPIRE_FAST:this.getCurrentTimeStamp()-this.lastTimeStamp>qc.APP.SECONDS_TO_EXPIRE}},{key:"isUsingForAWhile",get:function(){return this.lastTimeStamp-this.firstTimeStamp>qc.APP.SLOW_PERIOD}},{key:"hasActiveShineGuyProColorTheme",get:function(){return qc.APP.THEMES.includes(this.colorTheme)}},{key:"hasActiveShineGuyProIconTheme",get:function(){return this.isValidIconTheme(this.iconTheme)}}])}(),Xu=function(){return i((function e(t,n){r(this,e),this.vscode=t,this.open=n,this.state=null,this.timeout=null}),[{key:"activate",value:function(e){var t=this;this.state=new Yu(e,this.vscode);var n={"shineguy_pro.enter_license":function(){return t.enterLicense()},"shineguy_pro.select_theme":function(){return t.selectTheme()},"shineguy_pro.activate_icons":function(){return t.activateIcons()}};Object.keys(n).forEach((function(r){var o=t.vscode.commands.registerCommand(r,n[r]);e.subscriptions.push(o)})),this.vscode.workspace.onDidChangeConfiguration((function(){var e=t.state.get(),n=t.state.load();t.state.hasActiveShineGuyProColorTheme&&t.state.updateTheme(n.colorTheme,e)})),(this.state.hasActiveShineGuyProColorTheme||this.state.hasActiveShineGuyProIconTheme)&&this.checkLicense()}},{key:"enterLicense",value:function(){var e=this;this.vscode.window.showInputBox({ignoreFocusOut:!0,placeHolder:"your email address",prompt:"Please enter the email address you've used to purchase your license (or type 'reset' to reset your license).",validateInput:function(e){return"reset"===e||/.+@.+\..+/i.test(e)?null:"Please enter a valid email address."}}).then((function(t){var n=t.replace(/^\s+|\s+$/g,"");"reset"===n?(e.state.update("email",void 0),e.state.update("licenseKey",void 0),e.showMessageLicenseReset()):n&&e.vscode.window.showInputBox({ignoreFocusOut:!0,placeHolder:"your license key",prompt:"Please enter your ShineGuy Pro license key."}).then((function(t){if(t){var r=t.replace(/^\s+|\s+$/g,"");e.state.update("email",n),e.state.update("licenseKey",r),e.state.isValidLicense(n,r)||e.state.isValidLicense(n.toLowerCase(),r)?e.showMessageValidLicense():e.showMessageInvalidLicense()}}))}))}},{key:"selectTheme",value:function(){var e=this,t=[];qc.APP.THEMES.forEach((function(e){t.push({label:e})})),this.vscode.window.showQuickPick(t,{placeHolder:"ShineGuy Pro theme"}).then((function(t){t&&e.state.updateTheme(t.label)}))}},{key:"activateIcons",value:function(){this.vscode.workspace.getConfiguration("workbench").update("iconTheme","ShineGuy Pro Icons",!0)}},{key:"checkLicense",value:function(){var e=this;this.state.hasValidLicense?(clearTimeout(this.timeout),this.state.thankYouMessageShown||this.showMessageValidLicense()):this.state.isExpired&&(this.state.isUsingForAWhile&&Math.random()<.5?(clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.showMessageEvaluation()}),1e3*Math.floor(60*(120*Math.random()+5)))):this.showMessageEvaluation(),this.state.update("lastTimeStamp",this.state.getCurrentTimeStamp()))}},{key:"deactivate",value:function(){clearTimeout(this.timeout)}},{key:"showMessageLicenseReset",value:function(){this.vscode.window.showInformationMessage("ShineGuy Pro license information is reset")}},{key:"showMessageValidLicense",value:function(){clearTimeout(this.timeout),this.vscode.window.showInformationMessage("Thanks for your purchase of ShineGuy Pro.",{modal:!0}),this.state.update("thankYouMessageShown",!0)}},{key:"showMessageInvalidLicense",value:function(){this.vscode.window.showErrorMessage("Invalid license. Please enter your email and license key exactly as in the email.")}},{key:"showMessageEvaluation",value:function(){var e=this,t={theme:this.state.colorTheme,version:qc.APP.VERSION,name:qc.APP.NAME},n=Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&");this.vscode.window.showInformationMessage("Thank you for evaluating ShineGuy Pro. Please purchase a license for extended use.",{modal:!0},"OK").then((function(t){t&&"OK"===t.toUpperCase()&&(e.open?e.open("https://shineguy.pro?".concat(n)):e.vscode.env.openExternal("https://shineguy.pro?".concat(n)))}))}},{key:"unspace",value:function(e){return e.replace(/ /g,"_")}}])}(),qu=new Xu(t);exports.activate=function(e){qu.activate(e)},exports.deactivate=function(){qu.deactivate()};
