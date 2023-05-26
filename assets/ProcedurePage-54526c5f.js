import{r as pe,c as U,d as O,b as _,e as C,g as a,q as w,t as x,h as t,H as R,a as E,u as L,I as ue,i as h,w as l,f as n,J as I,K as q,L as Y,M as xe,N as he,O as we,l as N,n as T,o as J,k as Z,v as Q,x as oe,y as H,z as se,P as re,Q as ae,R as me,S as Ve,T as $e,D as fe,U as ke,V as Ce,W as De,X as Te,Y as Pe,F as Me,G as Le,_ as ge,C as Ue,Z as K,$ as Ee,p as Re,a0 as Ae,a1 as Fe}from"./index-5b01af3d.js";/* empty css                     *//* empty css                     */var j=(o=>(o.started="started",o.in_progress="in_progress",o.finished="finished",o))(j||{});const f=pe({procedureList:[],isModalOpen:!1,isModalDetails:!1,isModalDerivation:!1,isModalFinish:!1,personList:[],currentProcedure:null,procedureTypeList:[],headquarterList:[],procedureTracingList:[],procedureCounter:{started:{total:0,count:0,label:""},in_progress:{total:0,count:0,label:""},finished:{total:0,count:0,label:""}},yearsProcedures:[],tabSelected:j.started,isOpenTimeline:!1,areaList:[],userAreaList:[],filters:{date:"",code_number:"",state:j.started},procedureRequirements:[]}),Se={procedureList:{get:()=>f.procedureList,set:o=>f.procedureList=o},isModalOpen:{get:()=>f.isModalOpen,set:o=>f.isModalOpen=o},isModalDetails:{get:()=>f.isModalDetails,set:o=>f.isModalDetails=o},isModalDerivation:{get:()=>f.isModalDerivation,set:o=>f.isModalDerivation=o},isModalFinish:{get:()=>f.isModalFinish,set:o=>f.isModalFinish=o},personList:{get:()=>f.personList,set:o=>f.personList=o,add:o=>f.personList.push(o)},currentProcedure:{get:()=>f.currentProcedure,set:o=>f.currentProcedure=o},procedureTypeList:{get:()=>f.procedureTypeList,set:o=>f.procedureTypeList=o},headquarterList:{get:()=>f.headquarterList,set:o=>f.headquarterList=o},procedureTracingList:{get:()=>f.procedureTracingList,set:o=>f.procedureTracingList=o},procedureCounter:{get:()=>f.procedureCounter,set:o=>f.procedureCounter=o},yearsProcedures:{get:()=>f.yearsProcedures,set:o=>f.yearsProcedures=o},tabSelected:{get:()=>f.tabSelected,set:o=>f.tabSelected=o},isOpenTimeline:{get:()=>f.isOpenTimeline,set:o=>f.isOpenTimeline=o},areaList:{get:()=>f.areaList,set:o=>f.areaList=o},userAreaList:{get:()=>f.userAreaList,set:o=>f.userAreaList=o,clear:()=>f.userAreaList=[]},filters:{get:()=>f.filters,set:o=>{f.filters=o}},procedureRequirements:{get:()=>f.procedureRequirements,set:o=>f.procedureRequirements=o}},u=U(()=>Se).value,qe={class:"w-full text-sm p-2 flex flex-col items-center justify-center"},Ne=a("i",{class:"fas fa-file-alt text-3xl"},null,-1),Oe={class:"text-xs"},je=a("b",null,"Tramite",-1),Ie=a("div",{class:"w-full h-px bg-gray-300"},null,-1),ze={class:"p-2 flex flex-col gap-2"},Ye=a("div",{class:"text-base text-blue-400 font-light"},"Datos del Tramite",-1),Be={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},Ge=a("i",{class:"fas fa-user"},null,-1),Ze={class:"font-semibold"},He={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},Ke=a("i",{class:"fas fa-calendar"},null,-1),Je={class:"font-semibold"},Qe={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},We=a("i",{class:"fas fa-map-marker-alt"},null,-1),Xe={class:"font-semibold"},et={key:0,class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},tt=a("i",{class:"fa-sharp fa-solid fa-check"},null,-1),ot=a("span",{class:"font-semibold bg-yellow-400 text-white rounded-lg px-2"},"Por confirmar aprobación",-1),st=a("div",{class:"w-full border border-dotted"},null,-1),rt=a("div",{class:"text-base text-blue-400 font-light"},"Datos del Solicitante",-1),at={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},nt=a("i",{class:"fas fa-user"},null,-1),lt={class:"font-semibold"},ct={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},ut=a("i",{class:"fas fa-file"},null,-1),it={class:"font-semibold"},dt={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},_t=a("i",{class:"fas fa-file"},null,-1),pt={class:"font-semibold"},mt={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},ft=a("i",{class:"fas fa-file"},null,-1),gt={class:"font-semibold"},bt=O({__name:"leftCard",setup(o){const e=U(()=>u.currentProcedure.get());return(s,r)=>{var c;return _(),C("div",null,[a("div",qe,[Ne,a("div",Oe,[je,w(": "),a("span",null,x((c=t(e))==null?void 0:c.code_number),1)])]),Ie,a("div",ze,[Ye,a("div",Be,[Ge,w("Creado por: "),a("span",Ze,x(t(e).user_name),1)]),a("div",He,[Ke,w("Fecha: "),a("span",Je,x(t(e).created_at),1)]),a("div",Qe,[We,w("Lugar de creación: "),a("span",Xe,x(t(e).headquarter_name),1)]),t(e).state?(_(),C("div",et,[tt,w("Estado: "),ot])):R("",!0),st,rt,a("div",at,[nt,w("Solicitante: "),a("span",lt,x(t(e).person_full_name),1)]),a("div",ct,[ut,w("Nro. Documento: "),a("span",it,x(t(e).person_document),1)]),a("div",dt,[_t,w("Asunto: "),a("span",pt,x(t(e).procedure_type_description),1)]),a("div",mt,[ft,w("Nro. Referencia: "),a("span",gt,x(t(e).reference_doc_number),1)])])])}}}),vt=async o=>{var e;try{const s=(e=E.routes.get().desk.procedures)==null?void 0:e.get_procedure_and_tracing_by_id;if(!s)return;const{data:r}=await L.post(s,{procedure_id:o});u.currentProcedure.set(r.procedure),u.procedureTracingList.set(r.procedure_tracings)}catch(s){console.log(s)}},yt={class:"flex justify-start gap-2 h-full"},xt={class:"items-center rounded-lg shadow-md w-[60%] h-96 p-2 timelineContent"},ht={class:"p-2 shadow rounded text-xs font-[roboto] border flex flex-col gap-2"},wt={class:"break-normal"},Vt={class:"text-[10px]"},$t=O({__name:"procedureTimeline",setup(o){const e=U({get:()=>u.isOpenTimeline.get(),set:r=>u.isOpenTimeline.set(r)});ue(()=>e.value,r=>{r&&vt(u.currentProcedure.get().id)});const s=U(()=>u.procedureTracingList.get());return(r,c)=>{const p=bt,V=we,k=xe,g=he;return _(),h(g,{modelValue:t(e),"onUpdate:modelValue":c[0]||(c[0]=i=>Y(e)?e.value=i:null),"align-center":!0,class:"customDialog"},{default:l(()=>[a("div",yt,[n(p,{class:"w-[40%] flex flex-col gap-2"}),a("div",xt,[n(k,null,{default:l(()=>[(_(!0),C(q,null,I(t(s),i=>(_(),h(V,{key:i.id,timestamp:i.date+" "+i.hour,placement:"top",color:"green"},{default:l(()=>[a("div",ht,[a("span",wt,x(i.action_log),1),a("b",Vt,"Por: "+x(i.user),1)])]),_:2},1032,["timestamp"]))),128))]),_:1})])])]),_:1},8,["modelValue"])}}});const be=async()=>{try{const{get_areas:o}=E.routes.get().desk,{data:e,status:s}=await L.get(o);s==200&&u.areaList.set(e)}catch(o){console.log(o)}},kt=()=>u.filters.get(),W=async()=>{var o;try{const e=(o=E.routes.get().desk.procedures)==null?void 0:o.get_procedures;if(!e)return;const{data:s}=await L.get(e,{params:kt()});u.procedureList.set(s.procedures),u.procedureCounter.set(s.counters)}catch(e){console.log(e)}},Ct=async o=>{try{const e=E.routes.get().desk.finally_trace_procedure,{status:s}=await L.post(e,o);s==200&&(N.success("Se Finalizo el Tramite correctamente"),W())}catch(e){console.log(e)}},Dt=O({__name:"procedureFinish",setup(o){const e=T(!1),s=U(()=>u.currentProcedure.get()),r=T({action:"",assigned_user_id:0});J(async()=>{await be()});const c=()=>{u.isModalFinish.set(!1)},p=async()=>{var V;e.value=!0,s.value&&(r.value.procedure_id=s.value.id,Z.user.get()&&(r.value.user_id=(V=Z.user.get())==null?void 0:V.id)),e.value=!1,await Ct(r.value),c()};return(V,k)=>{const g=Q,i=oe,d=H,b=se;return _(),h(b,{"label-position":"top",model:t(r)},{default:l(()=>[n(i,{label:"Acción"},{default:l(()=>[n(g,{type:"textarea",autosize:{minRows:4,maxRows:6},modelValue:t(r).action,"onUpdate:modelValue":k[0]||(k[0]=P=>t(r).action=P)},null,8,["modelValue"])]),_:1}),n(i,{class:"flex mt-10 items-end"},{default:l(()=>[n(d,{loading:t(e),type:"primary",onClick:p},{default:l(()=>[w(x(t(s)?"Guardar":""),1)]),_:1},8,["loading"]),n(d,{onClick:c},{default:l(()=>[w("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])}}});const Tt=async o=>{try{const{get_user_for_area:e}=E.routes.get().desk,{data:s,status:r}=await L.post(e,{area_id:o});r==200&&u.userAreaList.set(s)}catch(e){console.log(e)}},X=pe({tracingsForArea:[],tracingsForUser:[]}),te={get tracingsForArea(){return X.tracingsForArea},set tracingsForArea(o){X.tracingsForArea=o},get tracingsForUser(){return X.tracingsForUser},set tracingsForUser(o){X.tracingsForUser=o}},ie=async()=>{var o,e;try{const s=(o=E.routes.get().desk.procedure_tracing)==null?void 0:o.get_tracings_to_approved;if(!s){console.log("No se encontró la ruta para obtener los trámites pendientes");return}const r=((e=Z.user.get())==null?void 0:e.id)||0,{data:c}=await L.post(s,{user_id:r});te.tracingsForArea=c.tracings_for_area,te.tracingsForUser=c.tracings_for_user}catch(s){console.log(s)}},Pt=async o=>{try{const e=E.routes.get().desk.save_derive_procedure,{status:s,data:r}=await L.post(e,o);return s==200?(N.success("Se derivo el Tramite correctamente"),W(),ie(),!0):(N.error(`${r.message}`),!1)}catch(e){return console.log(e),!1}},Mt=O({__name:"procedureDerivation",setup(o){const e=T(!1),s=U(()=>u.currentProcedure.get()),r=U(()=>u.isModalDerivation.get()),c=T({action:"",assigned_user_id:0,number_of_sheets:1});J(async()=>{var g;c.value.number_of_sheets=(g=s.value)==null?void 0:g.number_of_sheets,await be()});const p=g=>{c.value.assigned_user_id=0,u.userAreaList.clear(),Tt(g)},V=()=>{u.isModalDerivation.set(!1),u.userAreaList.clear()},k=async()=>{var g;e.value=!0,s.value&&(c.value.procedure_id=s.value.id,Z.user.get()&&(c.value.user_id=(g=Z.user.get())==null?void 0:g.id)),e.value=!1,await Pt(c.value),V()};return ue(r,g=>{g||V()}),(g,i)=>{const d=re,b=ae,P=oe,F=Q,M=me,m=H,v=se;return _(),h(v,{"label-position":"top",model:t(c)},{default:l(()=>[n(P,{label:"Oficina"},{default:l(()=>[n(b,{class:"w-full",placeholder:"Seleccione una oficina",modelValue:t(c).to_area_id,"onUpdate:modelValue":i[0]||(i[0]=D=>t(c).to_area_id=D),onChange:i[1]||(i[1]=D=>p(t(c).to_area_id))},{default:l(()=>[(_(!0),C(q,null,I(t(u).areaList.get(),D=>(_(),h(d,{key:D.id,label:D.nombre,value:D.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(P,{label:"Acción"},{default:l(()=>[n(F,{type:"textarea",autosize:{minRows:4,maxRows:6},modelValue:t(c).action,"onUpdate:modelValue":i[2]||(i[2]=D=>t(c).action=D)},null,8,["modelValue"])]),_:1}),n(P,{label:"Número de folios",required:""},{default:l(()=>[n(M,{modelValue:t(c).number_of_sheets,"onUpdate:modelValue":i[3]||(i[3]=D=>t(c).number_of_sheets=D),min:1,max:100},null,8,["modelValue"])]),_:1}),n(P,{label:"Asignar Usuario"},{default:l(()=>[n(b,{class:"w-full",placeholder:"Seleccione Usuario",modelValue:t(c).assigned_user_id,"onUpdate:modelValue":i[4]||(i[4]=D=>t(c).assigned_user_id=D)},{default:l(()=>[(_(!0),C(q,null,I(t(u).userAreaList.get(),D=>(_(),h(d,{key:D.id,label:D.full_name,value:D.user_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(P,{class:"flex mt-10 items-end"},{default:l(()=>[n(m,{loading:t(e),type:"primary",onClick:k},{default:l(()=>[w(x(t(s)?"Derivar":""),1)]),_:1},8,["loading"]),n(m,{onClick:V},{default:l(()=>[w("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])}}});const _e={dni:"https://api.perudevs.com/api/v1/dni/simple?document=DOCUMENT_NUMBER&key=cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjQ1Mjg1ZDA1MzAyNzA0ZDZmMmE1Njg2",ruc:"https://api.perudevs.com/api/v1/ruc?document=DOCUMENT_NUMBER&key=cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjQ1Mjg1ZDA1MzAyNzA0ZDZmMmE1Njg2"},Lt=o=>{const e=o.nombres||o.razon_social,s=o.apellido_paterno||o.razon_social,r=o.apellido_materno||"-",c=o.nombre_completo||o.razon_social;return{nombres:e,apellido_paterno:s,apellido_materno:r,full_name:c}},Ut=async(o,e="dni")=>{try{let s=_e.dni;e!=="dni"&&(s=_e.ruc),s=s.replace("DOCUMENT_NUMBER",o);const{data:r,status:c}=await L.get(s);if(c==200)return Lt(r.resultado)}catch(s){return console.log(s),null}},Et=o=>{const e=[];for(const s in o)if(Object.prototype.hasOwnProperty.call(o,s)){const r=o[s];e.push(r)}N.error(e.join(" "))},Rt=async o=>{try{const e=E.routes.get().person.create,{data:s}=await L.post(e,o);return N.success("El registro se ha creado correctamente"),s}catch(e){return Et(e.response.data),null}},At=[{id:1,name:"DNI"},{id:2,name:"RUC"},{id:3,name:"Pasaporte"},{id:4,name:"Carnet de Extranjería"}],z="blur",Ft=(o,e,s)=>{e?e.length<8?s(new Error("El numero de documento debe tener al menos 8 digitos")):s():s(new Error("El numero de documento es requerido"))},St={tipo_documento:[{required:!0,message:"El tipo de documento es requerido",trigger:z}],numero_documento:[{trigger:z,validator:Ft}],nombres:[{required:!0,message:"El nombre es requerido",trigger:z}],apellido_paterno:[{required:!0,message:"El apellido paterno es requerido",trigger:z}],apellido_materno:[{required:!0,message:"El apellido materno es requerido",trigger:z}],correo:[{required:!0,message:"Por favor ingrese un correo válido",type:"email",trigger:z}],celular:[{required:!0,message:"El celular es requerido",trigger:z}],sexo:[{required:!0,message:"El sexo es requerido",trigger:z}],fecha_nacimiento:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:z}]},ve=async o=>{try{const{get_person_list:e}=E.routes.get().person,{data:s,status:r}=await L.post(e,{query:o});return r==200&&u.personList.set(s),s}catch(e){return console.log(e),[]}},qt={class:"flex flex-col gap-3 items-start"},Nt=a("i",{class:"fas fa-arrow-left mr-1"},null,-1),Ot=a("span",null,"Volver atrás",-1),jt=a("div",{class:"text-xs text-gray-400 text-center"}," Por favor ingrese valores en los campos (*) para registrar una nueva persona. ",-1),It={class:"flex gap-2 items-center"},zt={key:1},Yt={class:"flex flex-col md:flex-row"},Bt=O({__name:"newPersonForm",emits:["create"],setup(o,{emit:e}){const s=T(),r=T({}),c=T(!1),p=T(null),V=async()=>{s.value.validate(async i=>{if(!i)return;if(p.value.name==="RUC"&&r.value.numero_documento.length!=11)return N.error("El tipo de documento RUC debe tener 11 dígitos");c.value=!0;const d=await Rt(r.value);c.value=!1,d&&e("create",d)})};ue(p,()=>{p.value&&(r.value.tipo_documento=p.value.id)});const k=async()=>{var b;if(!r.value.numero_documento&&r.value.numero_documento.length<8||!p.value)return;if((await ve(r.value.numero_documento)).length>0)return N.error(`El número de documento ${r.value.numero_documento} ya existe en la base de datos`);let d=await Ut(r.value.numero_documento,(b=p.value)==null?void 0:b.name.toLocaleLowerCase());d&&(r.value.apellido_paterno=d.apellido_paterno,r.value.apellido_materno=d.apellido_materno,r.value.nombres=d.nombres,r.value.full_name=d.full_name)},g=()=>{r.value={},s.value.resetFields()};return(i,d)=>{const b=H,P=re,F=ae,M=oe,m=Q,v=Ve,D=$e,B=fe,G=se;return _(),C("div",qt,[n(b,{size:"small",link:"",onClick:d[0]||(d[0]=y=>i.$emit("return"))},{default:l(()=>[Nt,Ot]),_:1}),jt,n(G,{ref_key:"formPerson",ref:s,class:"w-full bg-gray-100 rounded-lg p-3","label-position":"top",model:t(r),rules:t(St)},{default:l(()=>[a("div",It,[n(M,{label:"Tipo de Documento",prop:"tipo_documento",class:"w-full"},{default:l(()=>[n(F,{onChange:g,modelValue:t(p),"onUpdate:modelValue":d[1]||(d[1]=y=>Y(p)?p.value=y:null),"value-key":"name",placeholder:"Seleccione un tipo de documento"},{default:l(()=>[(_(!0),C(q,null,I(t(At),(y,S)=>(_(),h(P,{key:S,label:y.name,value:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(M,{label:"Número de documento",prop:"numero_documento",class:"w-full"},{default:l(()=>[n(m,{type:"number",modelValue:t(r).numero_documento,"onUpdate:modelValue":d[2]||(d[2]=y=>t(r).numero_documento=y),onChange:k},null,8,["modelValue"])]),_:1})]),t(p)&&t(p).name==="RUC"?(_(),h(M,{key:0,label:"Nombre Completo",prop:"full_name"},{default:l(()=>[n(m,{modelValue:t(r).full_name,"onUpdate:modelValue":d[3]||(d[3]=y=>t(r).full_name=y),autocomplete:"off"},null,8,["modelValue"])]),_:1})):(_(),C("div",zt,[n(M,{label:"Nombres",prop:"nombres"},{default:l(()=>[n(m,{modelValue:t(r).nombres,"onUpdate:modelValue":d[4]||(d[4]=y=>t(r).nombres=y),autocomplete:"off"},null,8,["modelValue"])]),_:1}),n(M,{label:"Apellido Paterno",prop:"apellido_paterno"},{default:l(()=>[n(m,{modelValue:t(r).apellido_paterno,"onUpdate:modelValue":d[5]||(d[5]=y=>t(r).apellido_paterno=y),autocomplete:"off"},null,8,["modelValue"])]),_:1}),n(M,{label:"Apellido Materno",prop:"apellido_materno"},{default:l(()=>[n(m,{modelValue:t(r).apellido_materno,"onUpdate:modelValue":d[6]||(d[6]=y=>t(r).apellido_materno=y),autocomplete:"off"},null,8,["modelValue"])]),_:1})])),n(M,{label:"Correo Electrónico",prop:"correo"},{default:l(()=>[n(m,{type:"email",modelValue:t(r).correo,"onUpdate:modelValue":d[7]||(d[7]=y=>t(r).correo=y),autocomplete:"off"},null,8,["modelValue"])]),_:1}),n(M,{label:"Celular",prop:"celular",class:"w-1/2"},{default:l(()=>[n(m,{type:"mobile",modelValue:t(r).celular,"onUpdate:modelValue":d[8]||(d[8]=y=>t(r).celular=y),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a("div",Yt,[n(M,{label:"Sexo",prop:"sexo",class:"w-full"},{default:l(()=>[n(D,{modelValue:t(r).sexo,"onUpdate:modelValue":d[9]||(d[9]=y=>t(r).sexo=y)},{default:l(()=>[n(v,{label:"M"},{default:l(()=>[w("Masculino")]),_:1}),n(v,{label:"F"},{default:l(()=>[w("Femenino")]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(M,{label:"Fecha de nacimiento",prop:"fecha_nacimiento",class:"w-full"},{default:l(()=>[n(B,{modelValue:t(r).fecha_nacimiento,"onUpdate:modelValue":d[10]||(d[10]=y=>t(r).fecha_nacimiento=y),type:"date",placeholder:"dia-mes-año",format:"DD-MM-YYYY","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),n(M,null,{default:l(()=>[n(b,{onClick:d[11]||(d[11]=y=>i.$emit("return"))},{default:l(()=>[w("Cancelar")]),_:1}),n(b,{loading:t(c),onClick:V,type:"primary"},{default:l(()=>[w("Crear registro")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])}}}),Gt=async()=>{try{const{procedure_type:o}=E.routes.get().desk,{data:e,status:s}=await L.get(o.get);s==200&&u.procedureTypeList.set(e)}catch(o){console.log(o)}},Zt=async o=>{var e;try{const s=(e=E.routes.get().desk.procedures)==null?void 0:e.save_procedure;if(!s)return;const{data:r,status:c}=await L.post(s,o);c==200&&(N.success(`Se creo el Documento con código:  ${r.code_number}`),W())}catch(s){console.log(s)}},Ht=async o=>{try{const{get_procedures_requirements:e}=E.routes.get().desk,{data:s,status:r}=await L.post(e,{procedure_type_id:o});r==200&&u.procedureRequirements.set(s)}catch(e){console.log(e)}},ee="blur",Kt={person_id:[{required:!0,message:"Por favor seleccione una persona",trigger:ee}],procedure_type_id:[{required:!0,message:"Por favor seleccione un tipo de procedimiento",trigger:ee}],subject:[{required:!0,message:"Por favor ingrese el asunto",trigger:ee},{min:5,message:"El asunto debe tener al menos 5 caracteres",trigger:ee}]},Jt=async o=>{var e;try{const s=(e=E.routes.get().desk.procedures)==null?void 0:e.update_procedure;if(!s)return N.error("No se encontró la ruta para actualizar el Documento"),!1;const r=await L.post(s,o);N.success(`Se actualizo el Documento con código:  ${r.data.code_number}`);let c=u.procedureList.get().find(p=>p.id===o.procedure_id);return c&&(c=Object.assign(c,{id:c.id,code_number:c.code_number,reference_doc_number:r.data.reference_doc_number,subject:r.data.subject,solicitante:c.solicitante,created_at:c.created_at,updated_at:c.updated_at})),!0}catch(s){return console.log(s),!1}},Qt={key:2,class:"w-full flex items-center justify-between pt-1"},Wt=a("div",null,null,-1),Xt=a("i",{class:"fas fa-plus ml-1 rounded-full"},null,-1),eo=O({__name:"procedureForm",setup(o){const e=T({description:"",reference_doc_number:"",number_of_sheets:1}),s=T([]),r=T(),c=T(),p=U(()=>u.currentProcedure.get()),V=T(!1),k=T(!1),g=T(),i=async()=>{r.value.validate(async m=>{if(!m){N.error("Por favor, rellene los campos correctamente");return}e.value.user_id=Z.user.get().id,V.value=!0,p.value?await Jt({procedure_id:p.value.id,subject:p.value.subject,description:p.value.description,reference_doc_number:p.value.reference_doc_number,number_of_sheets:p.value.number_of_sheets}):await Zt(e.value),u.isModalOpen.set(!1),e.value={},V.value=!1})},d=async m=>{await ve(m),s.value=u.personList.get()},b=()=>{u.isModalOpen.set(!1)},P=()=>{if(!p.value)return;e.value=p.value;const m=u.procedureTypeList.get().find(v=>v.id===p.value.procedure_type_id);m&&(e.value.procedure_type_id=m.id)},F=async()=>{e.value.procedure_type_id&&await Ht(e.value.procedure_type_id)},M=async m=>{k.value=!1,await d(m.numero_documento),e.value.person_id=m.id,g.value.focus()};return J(async()=>{r.value.resetFields(),u.procedureRequirements.set([]),await Gt(),P()}),(m,v)=>{const D=Bt,B=re,G=ae,y=Q,S=oe,le=ke,A=me,de=H,ye=se;return t(k)?(_(),h(D,{key:0,onReturn:v[0]||(v[0]=$=>k.value=!1),onCreate:M})):(_(),h(ye,{key:1,class:"w-full bg-gray-100 rounded-lg p-3","label-position":"top",model:t(e),rules:t(Kt),"label-width":"120px",ref_key:"form",ref:r},{default:l(()=>[n(S,{label:"Solicitante",prop:"person_id"},{default:l(()=>[t(p)?(_(),h(y,{key:1,modelValue:t(e).person_full_name,"onUpdate:modelValue":v[2]||(v[2]=$=>t(e).person_full_name=$),disabled:""},null,8,["modelValue"])):(_(),h(G,{key:0,ref_key:"personIdRef",ref:c,modelValue:t(e).person_id,"onUpdate:modelValue":v[1]||(v[1]=$=>t(e).person_id=$),filterable:"",remote:"","reserve-keyword":"",placeholder:"Ingrese su numero de dni",class:"w-full","remote-method":d},{default:l(()=>[(_(!0),C(q,null,I(t(s),$=>(_(),h(B,{key:$.id,label:$.full_name,value:$.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])),t(p)?R("",!0):(_(),C("div",Qt,[Wt,a("a",{onClick:v[3]||(v[3]=$=>k.value=!0),class:"text-xs text-blue-500 cursor-pointer"},[w(" Crear nuevo registro "),Xt])]))]),_:1}),n(S,{label:"Tramite",prop:"procedure_type_id"},{default:l(()=>[t(p)?(_(),h(y,{key:1,modelValue:t(e).procedure_type_description,"onUpdate:modelValue":v[5]||(v[5]=$=>t(e).procedure_type_description=$),disabled:""},null,8,["modelValue"])):(_(),h(G,{key:0,modelValue:t(e).procedure_type_id,"onUpdate:modelValue":v[4]||(v[4]=$=>t(e).procedure_type_id=$),class:"w-full",onChange:F,placeholder:"Seleccione un tramite",ref_key:"procedureTypeIdRef",ref:g},{default:l(()=>[(_(!0),C(q,null,I(t(u).procedureTypeList.get(),$=>(_(),h(B,{value:$.id,label:$.description},null,8,["value","label"]))),256))]),_:1},8,["modelValue"]))]),_:1}),t(u).procedureRequirements.get()&&t(u).procedureRequirements.get().length>0?(_(),h(S,{key:0,label:"Requisitos del tramite"},{default:l(()=>[(_(!0),C(q,null,I(t(u).procedureRequirements.get(),$=>(_(),h(le,{key:$.id,class:"mx-1",size:"small"},{default:l(()=>[w(x($.description),1)]),_:2},1024))),128))]),_:1})):R("",!0),n(S,{label:"Asunto",prop:"subject"},{default:l(()=>[n(y,{type:"textarea",modelValue:t(e).subject,"onUpdate:modelValue":v[6]||(v[6]=$=>t(e).subject=$)},null,8,["modelValue"])]),_:1}),n(S,{label:"Observación"},{default:l(()=>[n(y,{modelValue:t(e).description,"onUpdate:modelValue":v[7]||(v[7]=$=>t(e).description=$),type:"textarea",autosize:{minRows:2,maxRows:4}},null,8,["modelValue"])]),_:1}),n(S,{label:"Referencia"},{default:l(()=>[n(y,{modelValue:t(e).reference_doc_number,"onUpdate:modelValue":v[8]||(v[8]=$=>t(e).reference_doc_number=$)},null,8,["modelValue"])]),_:1}),n(S,{label:"Número de folios"},{default:l(()=>[n(A,{modelValue:t(e).number_of_sheets,"onUpdate:modelValue":v[9]||(v[9]=$=>t(e).number_of_sheets=$),min:1,max:100},null,8,["modelValue"])]),_:1}),n(S,{class:"flex items-center mt-10"},{default:l(()=>[n(de,{onClick:b},{default:l(()=>[w("Cancel")]),_:1}),n(de,{loading:t(V),type:"primary",onClick:i},{default:l(()=>[w(x(t(p)?"Actualizar Tramite":"Crear Tramite"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"]))}}}),to={class:"my-header text-center mb-6"},oo={class:"my-header text-center mb-6"},so={class:"my-header text-center mb-6"},ro=O({__name:"procedureDrawer",setup(o){const e=U(()=>u.currentProcedure.get()),s=U({get:()=>u.isModalOpen.get(),set:p=>u.isModalOpen.set(p)}),r=U({get:()=>u.isModalDerivation.get(),set:p=>u.isModalDerivation.set(p)}),c=U({get:()=>u.isModalFinish.get(),set:p=>u.isModalFinish.set(p)});return(p,V)=>{const k=eo,g=Ce,i=Mt,d=Dt;return _(),C(q,null,[n(g,{modelValue:t(s),"onUpdate:modelValue":V[0]||(V[0]=b=>Y(s)?s.value=b:null),class:"rounded-lg overflow-hidden customDrawer"},{header:l(()=>[a("div",to,[a("h1",null,x(t(e)?"Actualizar":"Nuevo")+" Tramite",1)])]),default:l(()=>[t(s)?(_(),h(k,{key:0})):R("",!0)]),_:1},8,["modelValue"]),n(g,{modelValue:t(r),"onUpdate:modelValue":V[1]||(V[1]=b=>Y(r)?r.value=b:null),class:"rounded-lg overflow-hidden"},{header:l(()=>[a("div",oo,[a("h1",null,x(t(e)?"Derivar":"")+" Tramite N° "+x(t(e)?t(e).code_number:""),1)])]),default:l(()=>[t(r)?(_(),h(i,{key:0})):R("",!0)]),_:1},8,["modelValue"]),n(g,{modelValue:t(c),"onUpdate:modelValue":V[2]||(V[2]=b=>Y(c)?c.value=b:null),class:"rounded-lg overflow-hidden"},{header:l(()=>[a("div",so,[a("h1",null,x(t(e)?"Finalizar":"")+" Tramite N° "+x(t(e)?t(e).code_number:""),1)])]),default:l(()=>[t(c)?(_(),h(d,{key:0})):R("",!0)]),_:1},8,["modelValue"])],64)}}});const ce=async o=>{var e;try{const s=(e=E.routes.get().desk.procedures)==null?void 0:e.get_procedure_by_id;if(!s){console.log("No se encontró la ruta para obtener el Documento");return}const r=s.replace("procedure_id",o.toString()),c=await L.get(r);u.currentProcedure.set(c.data)}catch(s){console.log(s)}},ao=async o=>{var e;try{const s=(e=E.routes.get().desk.procedures)==null?void 0:e.get_process_tracking_sheet_pdf;if(!s){console.error("route not found");return}const{data:r}=await L.get(s.replace("{procedure_id}",o.toString())),{path:c}=r;window.open(c,"_blank")}catch(s){console.error(s)}},ne=o=>(Me("data-v-2ed411c5"),o=o(),Le(),o),no={class:"height-adapter overflow-auto"},lo={class:"truncate cursor-pointer underline text-blue-500"},co={class:"truncate"},uo={class:"truncate font-semibold"},io=ne(()=>a("i",{class:"fa-solid fa-pen-to-square text-blue-500"},null,-1)),_o=ne(()=>a("i",{class:"fa-sharp fa-solid fa-share-from-square text-blue-500"},null,-1)),po=ne(()=>a("i",{class:"fa-sharp fa-regular fa-circle-xmark text-blue-500"},null,-1)),mo=ne(()=>a("i",{class:"fa-solid fa-download text-blue-500"},null,-1)),fo=O({__name:"tableList",setup(o){const e=U(()=>u.tabSelected.get()),s=U(()=>u.procedureList.get()),r=i=>{u.currentProcedure.set(i),u.isOpenTimeline.set(!0)},c=async i=>{u.currentProcedure.set(i),await ce(i.id),u.isModalOpen.set(!0)},p=(i,d)=>{u.currentProcedure.set(i);const b=d.getColumnIndex();i&&b==0&&r(i)},V=async i=>{u.currentProcedure.set(i),await ce(i.id),u.isModalDerivation.set(!0)},k=async i=>{u.currentProcedure.set(i),await ce(i.id),u.isModalFinish.set(!0)},g=async i=>{u.currentProcedure.set(i),await ao(i.id)};return(i,d)=>{const b=De,P=Te,F=H,M=Pe;return _(),C("div",no,[n(M,{data:t(s),onRowClick:p},{default:l(()=>[n(P,{prop:"code_number",label:"N° de tramite"},{default:l(({row:m})=>[n(b,{"popper-class":"text-lg",content:`Ver detalles del tramite ${m.code_number}`,placement:"top"},{default:l(()=>[a("div",lo,x(m.code_number),1)]),_:2},1032,["content"])]),_:1}),n(P,{prop:"solicitante",label:"Solicitante"}),n(P,{prop:"created_at",label:"Fecha de creación"}),n(P,{prop:"subject",label:"Asunto"},{default:l(({row:m})=>[a("div",co,x(m.subject),1)]),_:1}),n(P,{prop:"last_action",label:"Ultima acción"},{default:l(({row:m})=>[a("div",uo,x(m.last_action),1)]),_:1}),n(P,{label:"Acción",class:"w-full bg-red-500"},{default:l(({row:m})=>[t(e)===t(j).started?(_(),h(F,{key:0,size:"small",text:"",onClick:v=>c(m)},{default:l(()=>[n(b,{"popper-class":"text-lg",content:`Editar tramite ${m.code_number}`,placement:"top"},{default:l(()=>[io]),_:2},1032,["content"])]),_:2},1032,["onClick"])):R("",!0),t(e)!==t(j).finished?(_(),h(F,{key:1,text:"",size:"small",onClick:v=>V(m),disabled:m.state},{default:l(()=>[n(b,{"popper-class":"text-lg",content:m.state?`Tramite ${m.code_number} pendiente de aprobación`:`Derivar tramite ${m.code_number}`,placement:"top"},{default:l(()=>[_o]),_:2},1032,["content"])]),_:2},1032,["onClick","disabled"])):R("",!0),t(e)===t(j).in_progress?(_(),h(F,{key:2,size:"small",text:"",onClick:v=>k(m),disabled:m.state},{default:l(()=>[n(b,{"popper-class":"text-lg",content:m.state?`Tramite ${m.code_number} pendiente de aprobación`:`Finalizar tramite ${m.code_number}`,placement:"top"},{default:l(()=>[po]),_:2},1032,["content"])]),_:2},1032,["onClick","disabled"])):R("",!0),n(F,{id:`loadingButton[${m}]`,size:"small",text:"",onClick:v=>g(m)},{default:l(()=>[n(b,{"popper-class":"text-lg",content:"Descargar PDF del tramite",placement:"top"},{default:l(()=>[mo]),_:1})]),_:2},1032,["id","onClick"])]),_:1})]),_:1},8,["data"])])}}});const go=ge(fo,[["__scopeId","data-v-2ed411c5"]]),bo=o=>{var e;return{tracing_id:o,user_id:(e=Z.user.get())==null?void 0:e.id}},vo=async o=>{var e;try{const s=(e=E.routes.get().desk.procedure_tracing)==null?void 0:e.approve_tracing;if(!s)return;await L.post(s,bo(o)),ie(),W(),N.success("Aprobaste la asignación del documento")}catch(s){console.log(s)}},yo={class:"w-full p-2 bg-gray-100 rounded flex flex-col"},xo={class:"flex items-center gap-2"},ho={class:"text-[10px]"},wo={class:"flex"},Vo=a("div",{class:"w-5"},null,-1),$o=O({__name:"pendingCard",props:{cardItem:{type:Object,required:!0}},setup(o){const e=o,s=T(!1),r=U(()=>{const p=e.cardItem.user.split(" ");return`${p[0].charAt(0)}${p[p.length-1].charAt(0)}`}),c=async()=>{s.value=!0,await vo(e.cardItem.id),s.value=!1};return(p,V)=>{const k=Ue,g=H;return _(),C("div",yo,[a("div",xo,[a("div",null,[o.cardItem.image?(_(),h(k,{key:0,size:"small",src:o.cardItem.image},null,8,["src"])):(_(),h(k,{key:1,size:"small"},{default:l(()=>[w(x(t(r)),1)]),_:1}))]),a("div",ho,[a("b",null,x(o.cardItem.user),1),w(" te a asignado un documento el dia "+x(o.cardItem.date)+" a las "+x(o.cardItem.hour),1)])]),a("div",wo,[Vo,a("b",null,[n(g,{onClick:c,loading:t(s),text:"",size:"small",class:"text-blue-500"},{default:l(()=>[w("Aprobar")]),_:1},8,["loading"])])])])}}}),ko={key:0,class:"flex mt-3 bg-yellow-50 p-2 rounded shadow-sm items-center justify-center gap-5 break-normal"},Co=a("i",{class:"fas fa-exclamation-triangle text-2xl text-yellow-500"},null,-1),Do=a("div",{class:"flex flex-col gap-2"},[a("h1",{class:"font-semibold"},"¡Estos documentos necesitan de tu atención! 😎"),a("span",{class:"text-xs text-gray-500"}," Aquí se muestran los documentos asignados a ti ó al area donde trabajas, que aún no han sido aprobados. ")],-1),To=[Co,Do],Po=a("i",{class:"fas fa-user text-gray-500"},null,-1),Mo={key:0},Lo={key:0,class:"mt-2 w-full cardContent epgScroll"},Uo={class:"flex flex-col"},Eo={class:"flex flex-col mt-5"},Ro=a("i",{class:"fas fa-users text-gray-500"},null,-1),Ao={key:0},Fo={key:0,class:"mt-2 w-full cardContent epgScroll"},So={class:"flex flex-col"},qo=O({__name:"pendingComponent",setup(o){const e=U(()=>te.tracingsForUser),s=U(()=>te.tracingsForArea),r=T(!0),c=T(!1);return J(async()=>{await ie(),c.value=!0}),(p,V)=>{const k=$o,g=Ee;return _(),C("div",{class:K(["h-full relative pending",t(r)?"is-open":"is-closed"])},[t(r)?(_(),C("div",ko,To)):R("",!0),a("div",{class:K(["flex flex-col",t(r)?"mt-4":"mt-10"])},[a("h1",{class:K(["text-xs text-gray-500 flex gap-2 items-center",{"flex flex-col ":!t(r)}])},[Po,t(r)?(_(),C("span",Mo,"Documentos asignados a ti")):R("",!0),a("span",{class:K(["text-xs px-2 bg-yellow-500 text-white rounded-full",{" animate-pulse":!t(r)&&t(e).length>0}])},x(t(e).length),3)],2),t(r)?(_(),C("div",Lo,[a("div",Uo,[(_(!0),C(q,null,I(t(e),(i,d)=>(_(),h(k,{class:"border-b border-white",key:d,"card-item":i},null,8,["card-item"]))),128))])])):R("",!0)],2),n(g),a("div",Eo,[a("h1",{class:K(["text-xs text-gray-500 flex items-center gap-2",{"flex flex-col ":!t(r)}])},[Ro,t(r)?(_(),C("span",Ao,"Documentos asignados a tu área")):R("",!0),a("span",{class:K(["text-xs px-2 bg-yellow-500 text-white rounded-full",{" animate-pulse":!t(r)&&t(e).length>0}])},x(t(s).length),3)],2),t(r)?(_(),C("div",Fo,[a("div",So,[(_(!0),C(q,null,I(t(s),(i,d)=>(_(),h(k,{class:"border-b border-white",key:d,"card-item":i},null,8,["card-item"]))),128))])])):R("",!0)])],2)}}});const No=async()=>{try{const o=E.routes.get().desk.years_for_procedures,{data:e}=await L.get(o);u.yearsProcedures.set(e)}catch(o){console.log(o)}},Oo={class:"flex justify-between gap-2 w-full h-full"},jo={class:"w-max-[350px]"},Io={class:"w-full bg-white shadow-md rounded-lg p-5 flex flex-col gap-5"},zo=a("section",null,[a("p",{class:"text-3xl font-bold"},"Tramites")],-1),Yo={class:"flex flex-col gap-3"},Bo={class:"flex items-center justify-between"},Go={class:"flex items-center gap-2"},Zo={class:"flex"},Ho=a("div",{class:"flex gap-2"},[a("i",{class:"fa-sharp fa-solid fa-search"}),w(" Buscar")],-1),Ko={class:"flex"},Jo=a("div",{class:"flex gap-2"},[a("i",{class:"fa-sharp fa-solid fa-plus"}),w(" Nuevo tramite")],-1),Qo={class:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"},Wo={class:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"},Xo={class:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"},es=O({__name:"index",setup(o){const e=T(j.started),s=T(""),r=T(""),c=T([]),p=T(""),V=()=>{u.currentProcedure.set(null),u.isModalOpen.set(!0)},k=()=>{g()},g=async()=>{let d=`${r.value}-${p.value}`;r.value||(d=null),u.filters.set({date:s.value,code_number:d||"",state:e.value}),u.tabSelected.set(e.value),await W()},i=()=>{g()};return J(async()=>{No(),c.value=u.yearsProcedures.get(),p.value=new Date().getFullYear().toString(),g()}),(d,b)=>{const P=qo,F=fe,M=re,m=ae,v=Q,D=H,B=go,G=Fe,y=Ae,S=ro,le=$t;return _(),C(q,null,[a("div",Oo,[a("div",jo,[n(P,{class:"bg-white rounded-lg shadow-md p-5"})]),a("div",Io,[zo,a("div",Yo,[a("div",Bo,[a("div",Go,[n(F,{modelValue:t(s),"onUpdate:modelValue":b[0]||(b[0]=A=>Y(s)?s.value=A:null),type:"date",placeholder:"Selecciona una fecha",onChange:g,format:"DD/MM/YYYY","value-format":"YYYY-MM-DD"},null,8,["modelValue"]),a("div",Zo,[n(m,{modelValue:t(p),"onUpdate:modelValue":b[1]||(b[1]=A=>Y(p)?p.value=A:null),placeholder:"Periodo",onChange:g},{default:l(()=>[(_(!0),C(q,null,I(t(c),A=>(_(),h(M,{key:A,label:A,value:A},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),n(v,{onInput:i,onKeydown:Re(g,["enter"]),modelValue:t(r),"onUpdate:modelValue":b[2]||(b[2]=A=>Y(r)?r.value=A:null),placeholder:"N° de tramite"},null,8,["onKeydown","modelValue"])]),n(D,{type:"primary",onClick:g},{default:l(()=>[Ho]),_:1})]),a("div",Ko,[n(D,{type:"primary",onClick:V},{default:l(()=>[Jo]),_:1})])]),n(y,{modelValue:t(e),"onUpdate:modelValue":b[3]||(b[3]=A=>Y(e)?e.value=A:null),onTabChange:k},{default:l(()=>[n(G,{name:t(j).started},{label:l(()=>[a("span",null,[w("Iniciados "),a("div",Qo,x(t(u).procedureCounter.get().started.label),1)])]),default:l(()=>[n(B)]),_:1},8,["name"]),n(G,{name:t(j).in_progress},{label:l(()=>[a("span",null,[w("En proceso "),a("div",Wo,x(t(u).procedureCounter.get().in_progress.label),1)])]),default:l(()=>[n(B)]),_:1},8,["name"]),n(G,{name:t(j).finished},{label:l(()=>[a("span",null,[w("Finalizados "),a("div",Xo,x(t(u).procedureCounter.get().finished.label),1)])]),default:l(()=>[n(B)]),_:1},8,["name"])]),_:1},8,["modelValue"])])])]),n(S),n(le)],64)}}}),ts={};function os(o,e){const s=es;return _(),h(s)}const ns=ge(ts,[["render",os]]);export{ns as default};
