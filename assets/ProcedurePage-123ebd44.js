import{r as _e,c as E,d as N,b as u,e as k,g as a,p as x,t as h,h as t,F as A,a as R,u as U,G as de,i as V,w as n,f as r,H as j,I as S,J as Y,K as xe,L as he,M as we,k as O,m as T,o as Q,j as Z,s as W,v as se,x as H,y as le,N as ae,O as re,P as pe,Q as Ve,R as $e,B as me,S as ke,T as Ce,U as Te,V as De,W as Pe,C as Me,D as Le,_ as fe,A as Ue,X as J,Y as Ee,n as Re,Z as Ae,$ as Fe}from"./index-2e49323a.js";/* empty css                     *//* empty css                 *//* empty css                     */var q=(o=>(o.started="started",o.in_progress="in_progress",o.finished="finished",o))(q||{});const b=_e({procedureList:[],isModalOpen:!1,isModalDetails:!1,isModalDerivation:!1,isModalFinish:!1,personList:[],currentProcedure:null,procedureTypeList:[],headquarterList:[],procedureTracingList:[],procedureCounter:{started:{total:0,count:0,label:""},in_progress:{total:0,count:0,label:""},finished:{total:0,count:0,label:""}},yearsProcedures:[],tabSelected:q.started,isOpenTimeline:!1,areaList:[],userAreaList:[],filters:{date:"",code_number:"",state:q.started},procedureRequirements:[]}),Se={procedureList:{get:()=>b.procedureList,set:o=>b.procedureList=o},isModalOpen:{get:()=>b.isModalOpen,set:o=>b.isModalOpen=o},isModalDetails:{get:()=>b.isModalDetails,set:o=>b.isModalDetails=o},isModalDerivation:{get:()=>b.isModalDerivation,set:o=>b.isModalDerivation=o},isModalFinish:{get:()=>b.isModalFinish,set:o=>b.isModalFinish=o},personList:{get:()=>b.personList,set:o=>b.personList=o,add:o=>b.personList.push(o)},currentProcedure:{get:()=>b.currentProcedure,set:o=>b.currentProcedure=o},procedureTypeList:{get:()=>b.procedureTypeList,set:o=>b.procedureTypeList=o},headquarterList:{get:()=>b.headquarterList,set:o=>b.headquarterList=o},procedureTracingList:{get:()=>b.procedureTracingList,set:o=>b.procedureTracingList=o},procedureCounter:{get:()=>b.procedureCounter,set:o=>b.procedureCounter=o},yearsProcedures:{get:()=>b.yearsProcedures,set:o=>b.yearsProcedures=o},tabSelected:{get:()=>b.tabSelected,set:o=>b.tabSelected=o},isOpenTimeline:{get:()=>b.isOpenTimeline,set:o=>b.isOpenTimeline=o},areaList:{get:()=>b.areaList,set:o=>b.areaList=o},userAreaList:{get:()=>b.userAreaList,set:o=>b.userAreaList=o,clear:()=>b.userAreaList=[]},filters:{get:()=>b.filters,set:o=>{b.filters=o}},procedureRequirements:{get:()=>b.procedureRequirements,set:o=>b.procedureRequirements=o}},d=E(()=>Se).value,Ne={class:"w-full text-sm p-2 flex flex-col items-center justify-center"},qe=a("i",{class:"fas fa-file-alt text-3xl"},null,-1),je={class:"text-xs"},Oe=a("b",null,"Tramite",-1),Ie=a("div",{class:"w-full h-px bg-gray-300"},null,-1),ze={class:"p-2 flex flex-col gap-2"},Ye=a("div",{class:"text-base text-blue-400 font-light"},"Datos del Tramite",-1),Be={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},Ge=a("i",{class:"fas fa-user"},null,-1),Ze={class:"font-semibold"},He={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},Ke=a("i",{class:"fas fa-calendar"},null,-1),Je={class:"font-semibold"},Qe={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},We=a("i",{class:"fas fa-map-marker-alt"},null,-1),Xe={class:"font-semibold"},et={key:0,class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},tt=a("i",{class:"fa-sharp fa-solid fa-check"},null,-1),ot=a("span",{class:"font-semibold bg-yellow-400 text-white rounded-lg px-2"},"Por confirmar aprobación",-1),st=a("div",{class:"w-full border border-dotted"},null,-1),lt=a("div",{class:"text-base text-blue-400 font-light"},"Datos del Tramitante",-1),at={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},rt=a("i",{class:"fas fa-user"},null,-1),nt={class:"font-semibold"},ct={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},dt=a("i",{class:"fas fa-file"},null,-1),it={class:"font-semibold"},ut={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},_t=a("i",{class:"fas fa-file"},null,-1),pt={class:"font-semibold"},mt={class:"flex items-center text-xs gap-2 bg-gray-50 px-2 py-1"},ft=a("i",{class:"fas fa-file"},null,-1),gt={class:"font-semibold"},bt=N({__name:"leftCard",setup(o){const e=E(()=>d.currentProcedure.get());return(s,l)=>{var c;return u(),k("div",null,[a("div",Ne,[qe,a("div",je,[Oe,x(": "),a("span",null,h((c=t(e))==null?void 0:c.code_number),1)])]),Ie,a("div",ze,[Ye,a("div",Be,[Ge,x("Creado por: "),a("span",Ze,h(t(e).user_name),1)]),a("div",He,[Ke,x("Fecha: "),a("span",Je,h(t(e).created_at),1)]),a("div",Qe,[We,x("Lugar de creación: "),a("span",Xe,h(t(e).headquarter_name),1)]),t(e).state?(u(),k("div",et,[tt,x("Estado: "),ot])):A("",!0),st,lt,a("div",at,[rt,x("Tramitante: "),a("span",nt,h(t(e).person_full_name),1)]),a("div",ct,[dt,x("Nro. Documento: "),a("span",it,h(t(e).person_document),1)]),a("div",ut,[_t,x("Asunto: "),a("span",pt,h(t(e).procedure_type_description),1)]),a("div",mt,[ft,x("Nro. Referencia: "),a("span",gt,h(t(e).reference_doc_number),1)])])])}}}),vt=async o=>{var e;try{const s=(e=R.routes.get().desk.procedures)==null?void 0:e.get_procedure_and_tracing_by_id;if(!s)return;const{data:l}=await U.post(s,{procedure_id:o});d.currentProcedure.set(l.procedure),d.procedureTracingList.set(l.procedure_tracings)}catch(s){console.log(s)}},yt={class:"flex justify-start gap-2 h-full"},xt={class:"items-center rounded-lg shadow-md w-[60%] h-96 p-2 timelineContent"},ht={class:"p-2 shadow rounded text-xs font-[roboto] border flex flex-col gap-2"},wt={class:"break-normal"},Vt={class:"text-[10px]"},$t=N({__name:"procedureTimeline",setup(o){const e=E({get:()=>d.isOpenTimeline.get(),set:l=>d.isOpenTimeline.set(l)});de(()=>e.value,l=>{l&&vt(d.currentProcedure.get().id)});const s=E(()=>d.procedureTracingList.get());return(l,c)=>{const m=bt,g=we,C=xe,f=he;return u(),V(f,{modelValue:t(e),"onUpdate:modelValue":c[0]||(c[0]=i=>Y(e)?e.value=i:null),"align-center":!0,class:"customDialog"},{default:n(()=>[a("div",yt,[r(m,{class:"w-[40%] flex flex-col gap-2"}),a("div",xt,[r(C,null,{default:n(()=>[(u(!0),k(S,null,j(t(s),i=>(u(),V(g,{key:i.id,timestamp:i.date+" "+i.hour,placement:"top",color:"green"},{default:n(()=>[a("div",ht,[a("span",wt,h(i.action_log),1),a("b",Vt,"Por: "+h(i.user),1)])]),_:2},1032,["timestamp"]))),128))]),_:1})])])]),_:1},8,["modelValue"])}}});const ge=async()=>{try{const{get_areas:o}=R.routes.get().desk,{data:e,status:s}=await U.get(o);s==200&&d.areaList.set(e)}catch(o){console.log(o)}},kt=()=>d.filters.get(),X=async()=>{var o;try{const e=(o=R.routes.get().desk.procedures)==null?void 0:o.get_procedures;if(!e)return;const{data:s}=await U.get(e,{params:kt()});d.procedureList.set(s.procedures),d.procedureCounter.set(s.counters)}catch(e){console.log(e)}},Ct=async o=>{try{const e=R.routes.get().desk.finally_trace_procedure,{status:s}=await U.post(e,o);s==200&&(O.success("Se Finalizo el Tramite correctamente"),X())}catch(e){console.log(e)}},Tt=N({__name:"procedureFinish",setup(o){const e=T(!1),s=E(()=>d.currentProcedure.get()),l=T({action:"",assigned_user_id:0});Q(async()=>{await ge()});const c=()=>{d.isModalFinish.set(!1)},m=async()=>{var g;e.value=!0,s.value&&(l.value.procedure_id=s.value.id,Z.user.get()&&(l.value.user_id=(g=Z.user.get())==null?void 0:g.id)),e.value=!1,await Ct(l.value),c()};return(g,C)=>{const f=W,i=se,_=H,y=le;return u(),V(y,{"label-position":"top",model:t(l)},{default:n(()=>[r(i,{label:"Acción"},{default:n(()=>[r(f,{type:"textarea",autosize:{minRows:4,maxRows:6},modelValue:t(l).action,"onUpdate:modelValue":C[0]||(C[0]=P=>t(l).action=P)},null,8,["modelValue"])]),_:1}),r(i,{class:"flex mt-10 items-end"},{default:n(()=>[r(_,{loading:t(e),type:"primary",onClick:m},{default:n(()=>[x(h(t(s)?"Guardar":""),1)]),_:1},8,["loading"]),r(_,{onClick:c},{default:n(()=>[x("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])}}});const Dt=async o=>{try{const{get_user_for_area:e}=R.routes.get().desk,{data:s,status:l}=await U.post(e,{area_id:o});l==200&&d.userAreaList.set(s)}catch(e){console.log(e)}},ee=_e({tracingsForArea:[],tracingsForUser:[]}),oe={get tracingsForArea(){return ee.tracingsForArea},set tracingsForArea(o){ee.tracingsForArea=o},get tracingsForUser(){return ee.tracingsForUser},set tracingsForUser(o){ee.tracingsForUser=o}},ie=async()=>{var o,e;try{const s=(o=R.routes.get().desk.procedure_tracing)==null?void 0:o.get_tracings_to_approved;if(!s){console.log("No se encontró la ruta para obtener los trámites pendientes");return}const l=((e=Z.user.get())==null?void 0:e.id)||0,{data:c}=await U.post(s,{user_id:l});oe.tracingsForArea=c.tracings_for_area,oe.tracingsForUser=c.tracings_for_user}catch(s){console.log(s)}},Pt=async o=>{try{const e=R.routes.get().desk.save_derive_procedure,{status:s,data:l}=await U.post(e,o);return s==200?(O.success("Se derivo el Tramite correctamente"),X(),ie(),!0):(O.error(`${l.message}`),!1)}catch(e){return console.log(e),!1}},Mt=N({__name:"procedureDerivation",setup(o){const e=T(!1),s=E(()=>d.currentProcedure.get()),l=E(()=>d.isModalDerivation.get()),c=T({action:"",assigned_user_id:0});Q(async()=>{var f;c.value.number_of_sheets=(f=s.value)==null?void 0:f.number_of_sheets,await ge()});const m=f=>{c.value.assigned_user_id=0,d.userAreaList.clear(),Dt(f)},g=()=>{d.isModalDerivation.set(!1),d.userAreaList.clear()},C=async()=>{var f;e.value=!0,s.value&&(c.value.procedure_id=s.value.id,Z.user.get()&&(c.value.user_id=(f=Z.user.get())==null?void 0:f.id)),e.value=!1,await Pt(c.value),g()};return de(l,f=>{f||g()}),(f,i)=>{const _=ae,y=re,P=se,F=W,L=pe,v=H,D=le;return u(),V(D,{"label-position":"top",model:t(c)},{default:n(()=>[r(P,{label:"Oficina"},{default:n(()=>[r(y,{class:"w-full",placeholder:"Seleccione una oficina",modelValue:t(c).to_area_id,"onUpdate:modelValue":i[0]||(i[0]=p=>t(c).to_area_id=p),onChange:i[1]||(i[1]=p=>m(t(c).to_area_id))},{default:n(()=>[(u(!0),k(S,null,j(t(d).areaList.get(),p=>(u(),V(_,{key:p.id,label:p.nombre,value:p.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(P,{label:"Acción"},{default:n(()=>[r(F,{type:"textarea",autosize:{minRows:4,maxRows:6},modelValue:t(c).action,"onUpdate:modelValue":i[2]||(i[2]=p=>t(c).action=p)},null,8,["modelValue"])]),_:1}),r(P,{label:"Número de folios"},{default:n(()=>[r(L,{modelValue:t(c).number_of_sheets,"onUpdate:modelValue":i[3]||(i[3]=p=>t(c).number_of_sheets=p),min:0,max:100},null,8,["modelValue"])]),_:1}),r(P,{label:"Asignar Usuario"},{default:n(()=>[r(y,{class:"w-full",placeholder:"Seleccione Usuario",modelValue:t(c).assigned_user_id,"onUpdate:modelValue":i[4]||(i[4]=p=>t(c).assigned_user_id=p)},{default:n(()=>[(u(!0),k(S,null,j(t(d).userAreaList.get(),p=>(u(),V(_,{key:p.id,label:p.full_name,value:p.user_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(P,{class:"flex mt-10 items-end"},{default:n(()=>[r(v,{loading:t(e),type:"primary",onClick:C},{default:n(()=>[x(h(t(s)?"Derivar":""),1)]),_:1},8,["loading"]),r(v,{onClick:g},{default:n(()=>[x("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])}}});const ue={dni:"https://api.perudevs.com/api/v1/dni/simple?document=DOCUMENT_NUMBER&key=cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjQ1Mjg1ZDA1MzAyNzA0ZDZmMmE1Njg2",ruc:"https://api.perudevs.com/api/v1/ruc?document=DOCUMENT_NUMBER&key=cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjQ1Mjg1ZDA1MzAyNzA0ZDZmMmE1Njg2"},Lt=o=>{const e=o.nombres||o.nombre_comercial,s=o.apellido_paterno||o.razon_social,l=o.apellido_materno||"-",c=o.nombre_completo||o.razon_social;return{nombres:e,apellido_paterno:s,apellido_materno:l,full_name:c}},Ut=async(o,e="dni")=>{try{let s=ue.dni;e!=="dni"&&(s=ue.ruc),s=s.replace("DOCUMENT_NUMBER",o);const{data:l,status:c}=await U.get(s);if(c==200)return Lt(l.resultado)}catch(s){return console.log(s),null}},Et=async o=>{try{const e=R.routes.get().person.create,{data:s}=await U.post(e,o);return O.success("El registro se ha creado correctamente"),s}catch(e){return console.log(e),null}},Rt=[{id:1,name:"DNI"},{id:2,name:"RUC"},{id:3,name:"Pasaporte"},{id:4,name:"Carnet de Extranjería"}],z="blur",At=(o,e,s)=>{e?e.length<8?s(new Error("El numero de documento debe tener al menos 8 digitos")):s():s(new Error("El numero de documento es requerido"))},Ft={tipo_documento:[{required:!0,message:"El tipo de documento es requerido",trigger:z}],numero_documento:[{trigger:z,validator:At}],nombres:[{required:!0,message:"El nombre es requerido",trigger:z}],apellido_paterno:[{required:!0,message:"El apellido paterno es requerido",trigger:z}],apellido_materno:[{required:!0,message:"El apellido materno es requerido",trigger:z}],correo:[{required:!0,message:"Por favor ingrese un correo válido",type:"email",trigger:z}],celular:[{required:!0,message:"El celular es requerido",trigger:z}],sexo:[{required:!0,message:"El sexo es requerido",trigger:z}],fecha_nacimiento:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:z}]},St={class:"flex flex-col gap-3 items-start"},Nt=a("i",{class:"fas fa-arrow-left mr-1"},null,-1),qt=a("span",null,"Volver atrás",-1),jt=a("div",{class:"text-xs text-gray-400 text-center"}," Por favor ingrese valores en los campos (*) para registrar una nueva persona. ",-1),Ot={class:"flex gap-2 items-center"},It={key:1},zt={class:"flex flex-col md:flex-row"},Yt=N({__name:"newPersonForm",emits:["create"],setup(o,{emit:e}){const s=T(),l=T({}),c=T(!1),m=T(null),g=async()=>{s.value.validate(async i=>{if(!i)return;if(m.value.name==="RUC"&&l.value.numero_documento.length!=11)return O.error("El tipo de documento RUC debe tener 11 dígitos");c.value=!0;const _=await Et(l.value);c.value=!1,_&&e("create",_)})};de(m,()=>{m.value&&(l.value.tipo_documento=m.value.id)});const C=async()=>{var _;if(!l.value.numero_documento&&l.value.numero_documento.length<8||!m.value)return;const i=await Ut(l.value.numero_documento,(_=m.value)==null?void 0:_.name.toLocaleLowerCase());i&&(l.value.apellido_paterno=i.apellido_paterno,l.value.apellido_materno=i.apellido_materno,l.value.nombres=i.nombres,l.value.full_name=i.full_name)},f=()=>{l.value={},s.value.resetFields()};return(i,_)=>{const y=H,P=ae,F=re,L=se,v=W,D=Ve,p=$e,B=me,I=le;return u(),k("div",St,[r(y,{size:"small",link:"",onClick:_[0]||(_[0]=w=>i.$emit("return"))},{default:n(()=>[Nt,qt]),_:1}),jt,r(I,{ref_key:"formPerson",ref:s,class:"w-full bg-gray-100 rounded-lg p-3","label-position":"top",model:t(l),rules:t(Ft)},{default:n(()=>[a("div",Ot,[r(L,{label:"Tipo de Documento",prop:"tipo_documento",class:"w-full"},{default:n(()=>[r(F,{onChange:f,modelValue:t(m),"onUpdate:modelValue":_[1]||(_[1]=w=>Y(m)?m.value=w:null),"value-key":"name",placeholder:"Seleccione un tipo de documento"},{default:n(()=>[(u(!0),k(S,null,j(t(Rt),(w,K)=>(u(),V(P,{key:K,label:w.name,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(L,{label:"Número de documento",prop:"numero_documento",class:"w-full"},{default:n(()=>[r(v,{type:"number",modelValue:t(l).numero_documento,"onUpdate:modelValue":_[2]||(_[2]=w=>t(l).numero_documento=w),onChange:C},null,8,["modelValue"])]),_:1})]),t(m)&&t(m).name==="RUC"?(u(),V(L,{key:0,label:"Nombre Completo",prop:"full_name"},{default:n(()=>[r(v,{modelValue:t(l).full_name,"onUpdate:modelValue":_[3]||(_[3]=w=>t(l).full_name=w),autocomplete:"off"},null,8,["modelValue"])]),_:1})):(u(),k("div",It,[r(L,{label:"Nombres",prop:"nombres"},{default:n(()=>[r(v,{modelValue:t(l).nombres,"onUpdate:modelValue":_[4]||(_[4]=w=>t(l).nombres=w),autocomplete:"off"},null,8,["modelValue"])]),_:1}),r(L,{label:"Apellido Paterno",prop:"apellido_paterno"},{default:n(()=>[r(v,{modelValue:t(l).apellido_paterno,"onUpdate:modelValue":_[5]||(_[5]=w=>t(l).apellido_paterno=w),autocomplete:"off"},null,8,["modelValue"])]),_:1}),r(L,{label:"Apellido Materno",prop:"apellido_materno"},{default:n(()=>[r(v,{modelValue:t(l).apellido_materno,"onUpdate:modelValue":_[6]||(_[6]=w=>t(l).apellido_materno=w),autocomplete:"off"},null,8,["modelValue"])]),_:1})])),r(L,{label:"Correo Electrónico",prop:"correo"},{default:n(()=>[r(v,{type:"email",modelValue:t(l).correo,"onUpdate:modelValue":_[7]||(_[7]=w=>t(l).correo=w),autocomplete:"off"},null,8,["modelValue"])]),_:1}),r(L,{label:"Celular",prop:"celular",class:"w-1/2"},{default:n(()=>[r(v,{type:"mobile",modelValue:t(l).celular,"onUpdate:modelValue":_[8]||(_[8]=w=>t(l).celular=w),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a("div",zt,[r(L,{label:"Sexo",prop:"sexo",class:"w-full"},{default:n(()=>[r(p,{modelValue:t(l).sexo,"onUpdate:modelValue":_[9]||(_[9]=w=>t(l).sexo=w)},{default:n(()=>[r(D,{label:"M"},{default:n(()=>[x("Masculino")]),_:1}),r(D,{label:"F"},{default:n(()=>[x("Femenino")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(L,{label:"Fecha de nacimiento",prop:"fecha_nacimiento",class:"w-full"},{default:n(()=>[r(B,{modelValue:t(l).fecha_nacimiento,"onUpdate:modelValue":_[10]||(_[10]=w=>t(l).fecha_nacimiento=w),type:"date",placeholder:"año-mes-dia","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),r(L,null,{default:n(()=>[r(y,{onClick:_[11]||(_[11]=w=>i.$emit("return"))},{default:n(()=>[x("Cancelar")]),_:1}),r(y,{loading:t(c),onClick:g,type:"primary"},{default:n(()=>[x("Crear registro")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])}}}),Bt=async o=>{try{const{get_person_list:e}=R.routes.get().person,{data:s,status:l}=await U.post(e,{query:o});l==200&&d.personList.set(s)}catch(e){console.log(e)}},Gt=async()=>{try{const{procedure_type:o}=R.routes.get().desk,{data:e,status:s}=await U.get(o.get);s==200&&d.procedureTypeList.set(e)}catch(o){console.log(o)}},Zt=async o=>{var e;try{const s=(e=R.routes.get().desk.procedures)==null?void 0:e.save_procedure;if(!s)return;const{data:l,status:c}=await U.post(s,o);c==200&&(O.success(`Se creo el Documento con código:  ${l.code_number}`),X())}catch(s){console.log(s)}},Ht=async o=>{try{const{get_procedures_requirements:e}=R.routes.get().desk,{data:s,status:l}=await U.post(e,{procedure_type_id:o});l==200&&d.procedureRequirements.set(s)}catch(e){console.log(e)}},te="blur",Kt={person_id:[{required:!0,message:"Por favor seleccione una persona",trigger:te}],procedure_type_id:[{required:!0,message:"Por favor seleccione un tipo de procedimiento",trigger:te}],subject:[{required:!0,message:"Por favor ingrese el asunto",trigger:te},{min:5,message:"El asunto debe tener al menos 5 caracteres",trigger:te}]},Jt=async o=>{var e;try{const s=(e=R.routes.get().desk.procedures)==null?void 0:e.update_procedure;if(!s)return O.error("No se encontró la ruta para actualizar el Documento"),!1;const l=await U.post(s,o);O.success(`Se actualizo el Documento con código:  ${l.data.code_number}`);let c=d.procedureList.get().find(m=>m.id===o.procedure_id);return c&&(c=Object.assign(c,{id:c.id,code_number:c.code_number,reference_doc_number:l.data.reference_doc_number,subject:l.data.subject,solicitante:c.solicitante,created_at:c.created_at,updated_at:c.updated_at})),!0}catch(s){return console.log(s),!1}},Qt={key:2,class:"w-full flex items-center justify-between pt-1"},Wt=a("div",null,null,-1),Xt=a("i",{class:"fas fa-plus ml-1 rounded-full"},null,-1),eo=N({__name:"procedureForm",setup(o){const e=T({description:"",reference_doc_number:""}),s=T([]),l=T(!1),c=T(),m=T(),g=E(()=>d.currentProcedure.get()),C=T(!1),f=T(!1),i=T(),_=async()=>{c.value.validate(async D=>{if(!D){O.error("Por favor, rellene los campos correctamente");return}e.value.user_id=Z.user.get().id,C.value=!0,g.value?await Jt({procedure_id:g.value.id,subject:g.value.subject,description:g.value.description,reference_doc_number:g.value.reference_doc_number,number_of_sheets:g.value.number_of_sheets}):await Zt(e.value),d.isModalOpen.set(!1),e.value={},C.value=!1})},y=async D=>{l.value=!0,await Bt(D),l.value=!1,s.value=d.personList.get()},P=()=>{d.isModalOpen.set(!1)},F=()=>{if(!g.value)return;e.value=g.value;const D=d.procedureTypeList.get().find(p=>p.id===g.value.procedure_type_id);D&&(e.value.procedure_type_id=D.id)},L=async()=>{e.value.procedure_type_id&&await Ht(e.value.procedure_type_id)},v=async D=>{f.value=!1,await y(D.numero_documento),e.value.person_id=D.id,i.value.focus()};return Q(async()=>{c.value.resetFields(),d.procedureRequirements.set([]),await Gt(),F()}),(D,p)=>{const B=Yt,I=ae,w=H,K=re,G=W,M=se,be=ke,ve=pe,ye=le;return t(f)?(u(),V(B,{key:0,onReturn:p[0]||(p[0]=$=>f.value=!1),onCreate:v})):(u(),V(ye,{key:1,class:"w-full bg-gray-100 rounded-lg p-3","label-position":"top",model:t(e),rules:t(Kt),"label-width":"120px",ref_key:"form",ref:c},{default:n(()=>[r(M,{label:"Solicitante",prop:"person_id"},{default:n(()=>[t(g)?(u(),V(G,{key:1,modelValue:t(e).person_full_name,"onUpdate:modelValue":p[2]||(p[2]=$=>t(e).person_full_name=$),disabled:""},null,8,["modelValue"])):(u(),V(K,{key:0,ref_key:"personIdRef",ref:m,modelValue:t(e).person_id,"onUpdate:modelValue":p[1]||(p[1]=$=>t(e).person_id=$),filterable:"",remote:"","reserve-keyword":"",placeholder:"Ingrese su numero de dni",class:"w-full","remote-method":y,loading:t(l)},{empty:n(()=>[r(I,{value:"",disabled:""},{default:n(()=>[x(" No se encontraron resultados - "),r(w,{link:""},{default:n(()=>[x("crear nuevo registro")]),_:1})]),_:1})]),default:n(()=>[(u(!0),k(S,null,j(t(s),$=>(u(),V(I,{key:$.id,label:$.full_name,value:$.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])),t(g)?A("",!0):(u(),k("div",Qt,[Wt,a("a",{onClick:p[3]||(p[3]=$=>f.value=!0),class:"text-xs text-blue-500 cursor-pointer"},[x(" Crear nuevo registro "),Xt])]))]),_:1}),r(M,{label:"Tramite",prop:"procedure_type_id"},{default:n(()=>[t(g)?(u(),V(G,{key:1,modelValue:t(e).procedure_type_description,"onUpdate:modelValue":p[5]||(p[5]=$=>t(e).procedure_type_description=$),disabled:""},null,8,["modelValue"])):(u(),V(K,{key:0,modelValue:t(e).procedure_type_id,"onUpdate:modelValue":p[4]||(p[4]=$=>t(e).procedure_type_id=$),class:"w-full",onChange:L,placeholder:"Seleccione un tramite",ref_key:"procedureTypeIdRef",ref:i},{default:n(()=>[(u(!0),k(S,null,j(t(d).procedureTypeList.get(),$=>(u(),V(I,{value:$.id,label:$.description},null,8,["value","label"]))),256))]),_:1},8,["modelValue"]))]),_:1}),t(d).procedureRequirements.get()&&t(d).procedureRequirements.get().length>0?(u(),V(M,{key:0,label:"Requisitos del tramite"},{default:n(()=>[(u(!0),k(S,null,j(t(d).procedureRequirements.get(),$=>(u(),V(be,{key:$.id,class:"mx-1",size:"small"},{default:n(()=>[x(h($.description),1)]),_:2},1024))),128))]),_:1})):A("",!0),r(M,{label:"Asunto",prop:"subject"},{default:n(()=>[r(G,{type:"textarea",modelValue:t(e).subject,"onUpdate:modelValue":p[6]||(p[6]=$=>t(e).subject=$)},null,8,["modelValue"])]),_:1}),r(M,{label:"Observación"},{default:n(()=>[r(G,{modelValue:t(e).description,"onUpdate:modelValue":p[7]||(p[7]=$=>t(e).description=$),type:"textarea",autosize:{minRows:2,maxRows:4}},null,8,["modelValue"])]),_:1}),r(M,{label:"Referencia"},{default:n(()=>[r(G,{modelValue:t(e).reference_doc_number,"onUpdate:modelValue":p[8]||(p[8]=$=>t(e).reference_doc_number=$)},null,8,["modelValue"])]),_:1}),r(M,{label:"Número de folios"},{default:n(()=>[r(ve,{modelValue:t(e).number_of_sheets,"onUpdate:modelValue":p[9]||(p[9]=$=>t(e).number_of_sheets=$),min:0,max:100},null,8,["modelValue"])]),_:1}),r(M,{class:"flex items-center mt-10"},{default:n(()=>[r(w,{onClick:P},{default:n(()=>[x("Cancel")]),_:1}),r(w,{loading:t(C),type:"primary",onClick:_},{default:n(()=>[x(h(t(g)?"Actualizar Tramite":"Crear Tramite"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"]))}}}),to={class:"my-header text-center mb-6"},oo={class:"my-header text-center mb-6"},so={class:"my-header text-center mb-6"},lo=N({__name:"procedureDrawer",setup(o){const e=E(()=>d.currentProcedure.get()),s=E({get:()=>d.isModalOpen.get(),set:m=>d.isModalOpen.set(m)}),l=E({get:()=>d.isModalDerivation.get(),set:m=>d.isModalDerivation.set(m)}),c=E({get:()=>d.isModalFinish.get(),set:m=>d.isModalFinish.set(m)});return(m,g)=>{const C=eo,f=Ce,i=Mt,_=Tt;return u(),k(S,null,[r(f,{modelValue:t(s),"onUpdate:modelValue":g[0]||(g[0]=y=>Y(s)?s.value=y:null),class:"rounded-lg overflow-hidden customDrawer"},{header:n(()=>[a("div",to,[a("h1",null,h(t(e)?"Actualizar":"Nuevo")+" Tramite",1)])]),default:n(()=>[t(s)?(u(),V(C,{key:0})):A("",!0)]),_:1},8,["modelValue"]),r(f,{modelValue:t(l),"onUpdate:modelValue":g[1]||(g[1]=y=>Y(l)?l.value=y:null),class:"rounded-lg overflow-hidden"},{header:n(()=>[a("div",oo,[a("h1",null,h(t(e)?"Derivar":"")+" Tramite N° "+h(t(e)?t(e).code_number:""),1)])]),default:n(()=>[t(l)?(u(),V(i,{key:0})):A("",!0)]),_:1},8,["modelValue"]),r(f,{modelValue:t(c),"onUpdate:modelValue":g[2]||(g[2]=y=>Y(c)?c.value=y:null),class:"rounded-lg overflow-hidden"},{header:n(()=>[a("div",so,[a("h1",null,h(t(e)?"Finalizar":"")+" Tramite N° "+h(t(e)?t(e).code_number:""),1)])]),default:n(()=>[t(c)?(u(),V(_,{key:0})):A("",!0)]),_:1},8,["modelValue"])],64)}}});const ce=async o=>{var e;try{const s=(e=R.routes.get().desk.procedures)==null?void 0:e.get_procedure_by_id;if(!s){console.log("No se encontró la ruta para obtener el Documento");return}const l=s.replace("procedure_id",o.toString()),c=await U.get(l);d.currentProcedure.set(c.data)}catch(s){console.log(s)}},ao=async o=>{var e;try{const s=(e=R.routes.get().desk.procedures)==null?void 0:e.get_process_tracking_sheet_pdf;if(!s){console.error("route not found");return}const{data:l}=await U.get(s.replace("{procedure_id}",o.toString())),{path:c}=l;window.open(c,"_blank")}catch(s){console.error(s)}},ne=o=>(Me("data-v-2ed411c5"),o=o(),Le(),o),ro={class:"height-adapter overflow-auto"},no={class:"truncate cursor-pointer underline text-blue-500"},co={class:"truncate"},io={class:"truncate font-semibold"},uo=ne(()=>a("i",{class:"fa-solid fa-pen-to-square text-blue-500"},null,-1)),_o=ne(()=>a("i",{class:"fa-sharp fa-solid fa-share-from-square text-blue-500"},null,-1)),po=ne(()=>a("i",{class:"fa-sharp fa-regular fa-circle-xmark text-blue-500"},null,-1)),mo=ne(()=>a("i",{class:"fa-solid fa-download text-blue-500"},null,-1)),fo=N({__name:"tableList",setup(o){const e=E(()=>d.tabSelected.get()),s=E(()=>d.procedureList.get()),l=i=>{d.currentProcedure.set(i),d.isOpenTimeline.set(!0)},c=async i=>{d.currentProcedure.set(i),await ce(i.id),d.isModalOpen.set(!0)},m=(i,_)=>{d.currentProcedure.set(i);const y=_.getColumnIndex();i&&y==0&&l(i)},g=async i=>{d.currentProcedure.set(i),await ce(i.id),d.isModalDerivation.set(!0)},C=async i=>{d.currentProcedure.set(i),await ce(i.id),d.isModalFinish.set(!0)},f=async i=>{d.currentProcedure.set(i),await ao(i.id)};return(i,_)=>{const y=Te,P=De,F=H,L=Pe;return u(),k("div",ro,[r(L,{data:t(s),onRowClick:m},{default:n(()=>[r(P,{prop:"code_number",label:"N° de tramite"},{default:n(({row:v})=>[r(y,{"popper-class":"text-lg",content:`Ver detalles del tramite ${v.code_number}`,placement:"top"},{default:n(()=>[a("div",no,h(v.code_number),1)]),_:2},1032,["content"])]),_:1}),r(P,{prop:"solicitante",label:"Solicitante"}),r(P,{prop:"created_at",label:"Fecha de creación"}),r(P,{prop:"subject",label:"Asunto"},{default:n(({row:v})=>[a("div",co,h(v.subject),1)]),_:1}),r(P,{prop:"last_action",label:"Ultima acción"},{default:n(({row:v})=>[a("div",io,h(v.last_action),1)]),_:1}),r(P,{label:"Acción",class:"w-full bg-red-500"},{default:n(({row:v})=>[t(e)===t(q).started?(u(),V(F,{key:0,size:"small",text:"",onClick:D=>c(v)},{default:n(()=>[r(y,{"popper-class":"text-lg",content:`Editar tramite ${v.code_number}`,placement:"top"},{default:n(()=>[uo]),_:2},1032,["content"])]),_:2},1032,["onClick"])):A("",!0),t(e)!==t(q).finished?(u(),V(F,{key:1,text:"",size:"small",onClick:D=>g(v),disabled:v.state},{default:n(()=>[r(y,{"popper-class":"text-lg",content:v.state?`Tramite ${v.code_number} pendiente de aprobación`:`Derivar tramite ${v.code_number}`,placement:"top"},{default:n(()=>[_o]),_:2},1032,["content"])]),_:2},1032,["onClick","disabled"])):A("",!0),t(e)===t(q).in_progress?(u(),V(F,{key:2,size:"small",text:"",onClick:D=>C(v),disabled:v.state},{default:n(()=>[r(y,{"popper-class":"text-lg",content:v.state?`Tramite ${v.code_number} pendiente de aprobación`:`Finalizar tramite ${v.code_number}`,placement:"top"},{default:n(()=>[po]),_:2},1032,["content"])]),_:2},1032,["onClick","disabled"])):A("",!0),r(F,{id:`loadingButton[${v}]`,size:"small",text:"",onClick:D=>f(v)},{default:n(()=>[r(y,{"popper-class":"text-lg",content:"Descargar PDF del tramite",placement:"top"},{default:n(()=>[mo]),_:1})]),_:2},1032,["id","onClick"])]),_:1})]),_:1},8,["data"])])}}});const go=fe(fo,[["__scopeId","data-v-2ed411c5"]]);const bo=o=>{var e;return{tracing_id:o,user_id:(e=Z.user.get())==null?void 0:e.id}},vo=async o=>{var e;try{const s=(e=R.routes.get().desk.procedure_tracing)==null?void 0:e.approve_tracing;if(!s)return;await U.post(s,bo(o)),ie(),X(),O.success("Aprobaste la asignación del documento")}catch(s){console.log(s)}},yo={class:"w-full p-2 bg-gray-100 rounded flex flex-col"},xo={class:"flex items-center gap-2"},ho={class:"text-[10px]"},wo={class:"flex"},Vo=a("div",{class:"w-5"},null,-1),$o=N({__name:"pendingCard",props:{cardItem:{type:Object,required:!0}},setup(o){const e=o,s=T(!1),l=E(()=>{const m=e.cardItem.user.split(" ");return`${m[0].charAt(0)}${m[m.length-1].charAt(0)}`}),c=async()=>{s.value=!0,await vo(e.cardItem.id),s.value=!1};return(m,g)=>{const C=Ue,f=H;return u(),k("div",yo,[a("div",xo,[a("div",null,[o.cardItem.image?(u(),V(C,{key:0,size:"small",src:o.cardItem.image},null,8,["src"])):(u(),V(C,{key:1,size:"small"},{default:n(()=>[x(h(t(l)),1)]),_:1}))]),a("div",ho,[a("b",null,h(o.cardItem.user),1),x(" te a asignado un documento el dia "+h(o.cardItem.date)+" a las "+h(o.cardItem.hour),1)])]),a("div",wo,[Vo,a("b",null,[r(f,{onClick:c,loading:t(s),text:"",size:"small",class:"text-blue-500"},{default:n(()=>[x("Aprobar")]),_:1},8,["loading"])])])])}}}),ko={key:0,class:"flex mt-3 bg-yellow-50 p-2 rounded shadow-sm items-center justify-center gap-5 break-normal"},Co=a("i",{class:"fas fa-exclamation-triangle text-2xl text-yellow-500"},null,-1),To=a("div",{class:"flex flex-col gap-2"},[a("h1",{class:"font-semibold"},"¡Estos documentos necesitan de tu atención! 😎"),a("span",{class:"text-xs text-gray-500"}," Aquí se muestran los documentos asignados a ti ó al area donde trabajas, que aún no han sido aprobados o rechazados. ")],-1),Do=[Co,To],Po=a("i",{class:"fas fa-user text-gray-500"},null,-1),Mo={key:0},Lo={key:0,class:"mt-2 w-full cardContent epgScroll"},Uo={class:"flex flex-col"},Eo={class:"flex flex-col mt-5"},Ro=a("i",{class:"fas fa-users text-gray-500"},null,-1),Ao={key:0},Fo={key:0,class:"mt-2 w-full cardContent epgScroll"},So={class:"flex flex-col"},No=N({__name:"pendingComponent",setup(o){const e=E(()=>oe.tracingsForUser),s=E(()=>oe.tracingsForArea),l=T(!0),c=T(!1);return Q(async()=>{await ie(),c.value=!0}),(m,g)=>{const C=$o,f=Ee;return u(),k("div",{class:J(["h-full relative pending",t(l)?"is-open":"is-closed"])},[t(l)?(u(),k("div",ko,Do)):A("",!0),a("div",{class:J(["flex flex-col",t(l)?"mt-4":"mt-10"])},[a("h1",{class:J(["text-xs text-gray-500 flex gap-2 items-center",{"flex flex-col ":!t(l)}])},[Po,t(l)?(u(),k("span",Mo,"Documentos asignados a ti")):A("",!0),a("span",{class:J(["text-xs px-2 bg-yellow-500 text-white rounded-full",{" animate-pulse":!t(l)&&t(e).length>0}])},h(t(e).length),3)],2),t(l)?(u(),k("div",Lo,[a("div",Uo,[(u(!0),k(S,null,j(t(e),(i,_)=>(u(),V(C,{class:"border-b border-white",key:_,"card-item":i},null,8,["card-item"]))),128))])])):A("",!0)],2),r(f),a("div",Eo,[a("h1",{class:J(["text-xs text-gray-500 flex items-center gap-2",{"flex flex-col ":!t(l)}])},[Ro,t(l)?(u(),k("span",Ao,"Documentos asignados a tu área")):A("",!0),a("span",{class:J(["text-xs px-2 bg-yellow-500 text-white rounded-full",{" animate-pulse":!t(l)&&t(e).length>0}])},h(t(s).length),3)],2),t(l)?(u(),k("div",Fo,[a("div",So,[(u(!0),k(S,null,j(t(s),(i,_)=>(u(),V(C,{class:"border-b border-white",key:_,"card-item":i},null,8,["card-item"]))),128))])])):A("",!0)])],2)}}});const qo=async()=>{try{const o=R.routes.get().desk.years_for_procedures,{data:e}=await U.get(o);d.yearsProcedures.set(e)}catch(o){console.log(o)}},jo={class:"flex justify-between gap-2 w-full h-full"},Oo={class:"w-max-[350px]"},Io={class:"w-full bg-white shadow-md rounded-lg p-5 flex flex-col gap-5"},zo=a("section",null,[a("p",{class:"text-3xl font-bold"},"Tramites")],-1),Yo={class:"flex flex-col gap-3"},Bo={class:"flex items-center justify-between"},Go={class:"flex items-center gap-2"},Zo={class:"flex"},Ho=a("div",{class:"flex gap-2"},[a("i",{class:"fa-sharp fa-solid fa-search"}),x(" Buscar")],-1),Ko={class:"flex"},Jo=a("div",{class:"flex gap-2"},[a("i",{class:"fa-sharp fa-solid fa-plus"}),x(" Nuevo tramite")],-1),Qo={class:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"},Wo={class:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"},Xo={class:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"},es=N({__name:"index",setup(o){const e=T(q.started),s=T(""),l=T(""),c=T([]),m=T(""),g=()=>{d.currentProcedure.set(null),d.isModalOpen.set(!0)},C=()=>{f()},f=async()=>{let _=`${l.value}-${m.value}`;l.value||(_=null),d.filters.set({date:s.value,code_number:_||"",state:e.value}),d.tabSelected.set(e.value),await X()},i=()=>{f()};return Q(async()=>{qo(),c.value=d.yearsProcedures.get(),m.value=new Date().getFullYear().toString(),f()}),(_,y)=>{const P=No,F=me,L=ae,v=re,D=W,p=H,B=go,I=Fe,w=Ae,K=lo,G=$t;return u(),k(S,null,[a("div",jo,[a("div",Oo,[r(P,{class:"bg-white rounded-lg shadow-md p-5"})]),a("div",Io,[zo,a("div",Yo,[a("div",Bo,[a("div",Go,[r(F,{modelValue:t(s),"onUpdate:modelValue":y[0]||(y[0]=M=>Y(s)?s.value=M:null),type:"date",placeholder:"Selecciona una fecha",onChange:f,format:"DD/MM/YYYY","value-format":"YYYY-MM-DD"},null,8,["modelValue"]),a("div",Zo,[r(v,{modelValue:t(m),"onUpdate:modelValue":y[1]||(y[1]=M=>Y(m)?m.value=M:null),placeholder:"Periodo",onChange:f},{default:n(()=>[(u(!0),k(S,null,j(t(c),M=>(u(),V(L,{key:M,label:M,value:M},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),r(D,{onInput:i,onKeydown:Re(f,["enter"]),modelValue:t(l),"onUpdate:modelValue":y[2]||(y[2]=M=>Y(l)?l.value=M:null),placeholder:"N° de tramite"},null,8,["onKeydown","modelValue"])]),r(p,{type:"primary",onClick:f},{default:n(()=>[Ho]),_:1})]),a("div",Ko,[r(p,{type:"primary",onClick:g},{default:n(()=>[Jo]),_:1})])]),r(w,{modelValue:t(e),"onUpdate:modelValue":y[3]||(y[3]=M=>Y(e)?e.value=M:null),onTabChange:C},{default:n(()=>[r(I,{name:t(q).started},{label:n(()=>[a("span",null,[x("Iniciados "),a("div",Qo,h(t(d).procedureCounter.get().started.label),1)])]),default:n(()=>[r(B)]),_:1},8,["name"]),r(I,{name:t(q).in_progress},{label:n(()=>[a("span",null,[x("En proceso "),a("div",Wo,h(t(d).procedureCounter.get().in_progress.label),1)])]),default:n(()=>[r(B)]),_:1},8,["name"]),r(I,{name:t(q).finished},{label:n(()=>[a("span",null,[x("Finalizados "),a("div",Xo,h(t(d).procedureCounter.get().finished.label),1)])]),default:n(()=>[r(B)]),_:1},8,["name"])]),_:1},8,["modelValue"])])])]),r(K),r(G)],64)}}}),ts={};function os(o,e){const s=es;return u(),V(s)}const ns=fe(ts,[["render",os]]);export{ns as default};
