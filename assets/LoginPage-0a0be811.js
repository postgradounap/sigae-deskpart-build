import{_ as y,b as u,e as w,g as t,a as P,u as V,j as p,k as f,d as b,l as I,m as v,r as C,i as $,w as c,f as n,h as a,n as B,p as k,q as A,s as F,v as L,x as z,y as M,o as O,z as j}from"./index-c8cf5234.js";/* empty css                     *//* empty css                 */import{_ as q}from"./logoCuboWithText-00bd2e85.js";const J="/assets/login-image-4936634a.svg",K={},R={class:"bg-white max-md:hidden flex items-center justify-center"},U=t("img",{src:J,alt:"login-image",class:"object-cover p-14 filter fill-red-500"},null,-1),T=[U];function D(r,s){return u(),w("div",R,T)}const H=y(K,[["render",D]]),G=r=>r.split("@")[1]==="postgradounap.edu.pe",i="blur",Q={email:[{required:!0,message:"Por favor ingrese su correo electrónico",trigger:i},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:i},{validator:(r,s,e)=>{G(s)?e():e(new Error("Por favor ingrese un correo electrónico institucional"))},trigger:i}],password:[{required:!0,message:"Por favor ingrese su contraseña",trigger:i},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:i}]},W=async r=>{try{const{login:s}=P.routes.get().desk,{data:e}=await V.post(s,r),o="deskpart";return localStorage.setItem(`${o}_token`,e.token),localStorage.setItem(`${o}_groups`,JSON.stringify(e.groups)),localStorage.setItem(`${o}_user`,JSON.stringify(e.user)),localStorage.setItem(`${o}_person`,JSON.stringify(e.person)),p.user.set(e.user),p.token.set(e.token),p.person.set(e.person),f.success(`Bienvenido ${e.person.nombres}`),!0}catch{return f.error("No se pudo iniciar sesión"),!1}},X=t("div",{class:"flex flex-col gap-1 mb-10"},[t("h3",{class:"text-[22px] text-start font-medium"},"Iniciar Sesión"),t("p",{class:"text-base text-start"},"para acceder a Tramite Documentario")],-1),Y=t("a",{href:"/",class:"primary-color text-button text-sm hover:underline"}," ¿Olvido la contraseña? ",-1),Z=b({__name:"loginForm",setup(r){const s=I(),e=v(),o=C({}),_=v(!1),g=async()=>{e.value.validate(async x=>{if(!x){f.error("Por favor, rellene los campos correctamente");return}_.value=!0;const l=await W(o);_.value=!1,l&&s.push(A.Home)})};return(x,l)=>{const E=q,h=F,d=L,S=z,N=M;return u(),$(N,{class:"text-center",model:a(o),rules:a(Q),ref_key:"form",ref:e,"label-position":"top"},{default:c(()=>[n(E),X,n(d,{prop:"email",label:"Correo Electrónico Institucional"},{default:c(()=>[n(h,{autocomplete:"off",placeholder:"usuario@postgradounap.edu.pe",size:"large",modelValue:a(o).email,"onUpdate:modelValue":l[0]||(l[0]=m=>a(o).email=m)},null,8,["modelValue"])]),_:1}),n(d,{prop:"password",label:"Contraseña"},{default:c(()=>[n(h,{modelValue:a(o).password,"onUpdate:modelValue":l[1]||(l[1]=m=>a(o).password=m),type:"password",placeholder:"Contraseña",size:"large",onKeyup:B(g,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),n(d,null,{default:c(()=>[n(S,{loading:a(_),type:"primary",color:"#245FA6",size:"large",class:"w-full",onClick:g},{default:c(()=>[k("Iniciar Sesión")]),_:1},8,["loading"])]),_:1}),Y]),_:1},8,["model","rules"])}}});const ee={},oe={class:"container-center"},te={class:"md:w-[890px] md:h-[456px]"},se={class:"bg-white shadow-lg"},ne={class:"flex w-full"},re=t("div",{class:"p-5 flex flex-col gap-2 text-[#555F71] md:text-sm md:text-center max-md:text-center max-md:text-sm"},[t("p",null,[k("¿No tiene acceso a su cuenta? "),t("a",{href:"/",class:"text-button"},"Comunícate con soporte")]),t("p",null,"© 2023, Escuela de Postgrado UNAP. Reservados todos los derechos.")],-1);function ae(r,s){const e=Z,o=H;return u(),w("div",oe,[t("div",te,[t("div",se,[t("div",ne,[n(e,{class:"flex-1 border-r p-12"}),n(o,{class:"flex-1"})])])]),re])}const le=y(ee,[["render",ae]]),de=b({__name:"LoginPage",setup(r){return O(()=>{j()}),(s,e)=>{const o=le;return u(),$(o)}}});export{de as default};
