import{a as m,u as v,j as _,k as I,d as Y,m as p,c as f,o as $,b as x,e as A,g as e,f as r,h as a,w as g,A as E,x as M,s as N,B as S,p as y,C as B,D as R,_ as V,i as z}from"./index-0c5ecf9a.js";/* empty css                     *//* empty css                 */const k=async()=>{try{const s=m.routes.get().desk.get_user_profile,{data:t}=await v.get(s);_.user.set(t.user),_.person.set(t.person)}catch(s){console.log(s)}},F=async s=>{try{const t=new FormData;t.append("foto",s);const i=m.routes.get().person.change_profile_image;await v.post(i,t,{headers:{"Content-Type":"multipart/form-data"}})}catch(t){console.log(t)}},L=s=>{const t=s.split("/");return t.length===3?`${t[0]}-${t[1]}-${t[2]}`:s},T=async(s,t)=>{try{s.fecha_nacimiento=L(s.fecha_nacimiento);const i={...s};delete i.foto;const d=m.routes.get().person.update.replace("id",s.id.toString());await v.put(d,i),t&&await F(t),k(),I.success("Registro actualizado correctamente")}catch(i){console.log(i)}},c=s=>(B("data-v-7a0d1813"),s=s(),R(),s),G={class:"w-full h-full bg-white rounded-lg overflow-y-auto epgScroll"},O={class:"w-1/2 m-auto"},q={class:"relative w-full h-52 rounded-lg px-5 flex items-center bg-gradient-to-b from-white via-gray-50 to-gray-100"},H={class:"absolute botom-0 -mb-64 bg-white ml-5 rounded-full opacity-90"},J={class:"bg-transparent flex rounded-full"},K=c(()=>e("div",null,[e("i",{class:"fas fa-camera"}),y(" Cambiar foto ")],-1)),Q={class:"w-full flex pt-5 justify-between"},W=c(()=>e("div",null,null,-1)),X={class:"mt-10 w-[90%] h-72 p-3 rounded flex flex-col gap-10"},Z={class:"flex w-full items-center text-sm justify-between text-black"},ee=c(()=>e("span",{class:"profile_label"},"Número de documento ",-1)),te={class:"profile_input"},oe={class:"flex w-full items-center text-sm justify-between text-black"},le=c(()=>e("span",{class:"profile_label"},"Nombres ",-1)),se={class:"profile_input"},ae={class:"flex w-full items-center text-sm justify-between text-black"},ne=c(()=>e("span",{class:"profile_label"},"Apellido Paterno ",-1)),ie={class:"profile_input"},re={class:"flex w-full items-center text-sm justify-between text-black"},ce=c(()=>e("span",{class:"profile_label"},"Apellido Materno ",-1)),de={class:"profile_input"},ue={class:"flex w-full items-center text-sm justify-between text-black"},_e=c(()=>e("span",{class:"profile_label"},"Fecha de Nacimiento ",-1)),pe={class:"profile_input"},fe={class:"flex w-full items-center text-sm justify-between text-black"},me=c(()=>e("span",{class:"profile_label"},"Correo Electrónico",-1)),ve={class:"profile_input"},be={class:"flex w-full items-center text-sm justify-between text-black pb-5"},he=c(()=>e("span",{class:"profile_label"},"Celular",-1)),we={class:"profile_input"},ge=Y({__name:"index",setup(s){const t=p(!1),i=p(""),d=p(),o=f(()=>_.person.get()),b=f(()=>_.user.get()),j=f(()=>{if(o.value.nombres&&o.value.apellido_paterno&&o.value.apellido_materno)return`${o.value.nombres[0]}${o.value.apellido_paterno[0]}${o.value.apellido_materno[0]}`}),C=()=>{t.value=!0,T(o.value,d.value.files[0]),t.value=!1},D=()=>{if(!d.value.files[0])return;const h=d.value.files[0],l=new FileReader;l.readAsDataURL(h),l.onload=()=>{i.value=l.result}};return $(async()=>{await k(),i.value=o.value.foto||""}),(h,l)=>{const P=E,w=M,u=N,U=S;return x(),A("div",G,[e("div",O,[e("div",q,[r(P,{class:"absolute border-white border-4 bottom-0 -mb-16",size:150,src:a(i),text:a(j)},null,8,["src","text"]),e("div",H,[e("div",J,[r(w,{size:"small",text:"",onClick:l[0]||(l[0]=n=>a(d).click())},{default:g(()=>[K]),_:1})]),e("input",{type:"file",class:"hidden",accept:".png, .jpg, .jpeg, .jfif",ref_key:"fotoRef",ref:d,onChange:D},null,544)])]),e("div",Q,[W,e("div",null,[r(w,{loading:a(t),type:"primary",onClick:C},{default:g(()=>[y(" Guardar cambios ")]),_:1},8,["loading"])])]),e("div",X,[e("div",Z,[ee,e("div",te,[r(u,{class:"w-full",disabled:"",modelValue:a(o).numero_documento,"onUpdate:modelValue":l[1]||(l[1]=n=>a(o).numero_documento=n)},null,8,["modelValue"])])]),e("div",oe,[le,e("div",se,[r(u,{class:"w-full",modelValue:a(o).nombres,"onUpdate:modelValue":l[2]||(l[2]=n=>a(o).nombres=n)},null,8,["modelValue"])])]),e("div",ae,[ne,e("div",ie,[r(u,{class:"w-full",modelValue:a(o).apellido_paterno,"onUpdate:modelValue":l[3]||(l[3]=n=>a(o).apellido_paterno=n)},null,8,["modelValue"])])]),e("div",re,[ce,e("div",de,[r(u,{class:"w-full",modelValue:a(o).apellido_materno,"onUpdate:modelValue":l[4]||(l[4]=n=>a(o).apellido_materno=n)},null,8,["modelValue"])])]),e("div",ue,[_e,e("div",pe,[r(U,{modelValue:a(o).fecha_nacimiento,"onUpdate:modelValue":l[5]||(l[5]=n=>a(o).fecha_nacimiento=n),type:"date",style:{width:"100%"},placeholder:"año-mes-dia","value-format":"YYYY-MM-DD",format:"DD-MM-YYYY"},null,8,["modelValue"])])]),e("div",fe,[me,e("div",ve,[r(u,{class:"w-full",modelValue:a(b).email,"onUpdate:modelValue":l[6]||(l[6]=n=>a(b).email=n),disabled:""},null,8,["modelValue"])])]),e("div",be,[he,e("div",we,[r(u,{class:"w-full",modelValue:a(o).celular,"onUpdate:modelValue":l[7]||(l[7]=n=>a(o).celular=n)},null,8,["modelValue"])])])])])])}}});const xe=V(ge,[["__scopeId","data-v-7a0d1813"]]),ye={};function Ve(s,t){const i=xe;return x(),z(i)}const De=V(ye,[["render",Ve]]);export{De as default};
