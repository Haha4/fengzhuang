import { tplUrl } from "./form.js";
const modules = import.meta.glob(['../../form/**/**.vue'], {
    eager: true,
});
// const modules = {}
export  default ({ selectValue, attrs, right, name, showType = '0', type, fieldsData })=>{
  let showTypeStr, typeStr, attr;
    // return modules
    if (name === 'x-form') {
      attr = attrs;
      showTypeStr = showType.toString();
      typeStr = type;
      if (typeStr === 'switch') {
          typeStr = 'oursSwitch';
      }
  }
  //添加浏览态
  if (right === 'readOnly') {
    typeStr += 'ReadOnly';
}
    return modules[`../${tplUrl[typeStr](showTypeStr, typeStr, attr)}.vue`].default
}