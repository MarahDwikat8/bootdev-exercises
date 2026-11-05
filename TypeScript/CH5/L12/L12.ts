//"As Const" and Object.freeze

/*
const array = [] as const;
array.push("");  error 

const object ={
pro 1: type 
pro 2 :type 
etc..
}as const ;
object.pro1=" "error 

object.freeze()
يجمد المستو الاول اذا كان داخله متداخل لا يجمده
يعني البروبرتيز المركبه ما بجمدها


const object=object.freeze({
pro1=""
pro2={
}no frezze
etc ..
})
as const
compile خلال كتابة الكود بعطي ايرور

run لما يعمل البرنامج رن 
الفريزينج في الرن بصير 
*/

export const defaultPreferences = Object.freeze({
  name: "Kreese",
  doNotDisturb: false,
  outOfOffice: false,
}as const) ;
