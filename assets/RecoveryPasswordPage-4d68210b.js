import{d as u,r as f,b as d,e as x,g as t,f as s,w as l,E as w,h as a,p as v,s as h,x as g,_ as b,i as V}from"./index-1325d541.js";/* empty css                *//* empty css                 */import{_ as y}from"./logoCuboWithText-674d37ed.js";const P={class:"flex justify-center items-center w-full min-h-screen"},E={class:"flex flex-col gap-1 mb-10"},C=t("div",{class:"text-[22px] text-start font-medium"},"Cambiar la contraseña",-1),B=t("div",{class:"text-[#1A1C1E] text-left text-base"}," Para cambiar la contraseña, por favor ingrese su nueva contraseña en el siguiente campo: ",-1),N=t("div",{class:"mt-5 text-[#555F71] text-center text-sm"}," © 2023, Escuela de Postgrado UNAP. Reservados todos los derechos. ",-1),k=u({__name:"index",setup(_){const e=f({password:"",confirmPassword:""});return(n,o)=>{const i=y,c=h,p=g,m=w;return d(),x("div",P,[t("div",null,[s(m,{class:"flex justify-center items-center max-w-[500px] p-6"},{default:l(()=>[t("div",E,[s(i),C,B]),s(c,{class:"pb-4",size:"large",modelValue:a(e).password,"onUpdate:modelValue":o[0]||(o[0]=r=>a(e).password=r),type:"password",placeholder:"Nueva contraseña","show-password":""},null,8,["modelValue"]),s(c,{class:"pb-4",size:"large",modelValue:a(e).confirmPassword,"onUpdate:modelValue":o[1]||(o[1]=r=>a(e).confirmPassword=r),type:"password",placeholder:"Repetir nueva contraseña","show-password":""},null,8,["modelValue"]),s(p,{size:"large",class:"w-full text-sm",type:"primary",color:"#245FA6"},{default:l(()=>[v("Confirmar")]),_:1})]),_:1}),N])])}}}),z={};function A(_,e){const n=k;return d(),V(n)}const I=b(z,[["render",A]]);export{I as default};
