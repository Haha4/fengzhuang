<template>
  <!-- <xFrom msg="Welcome to Your Vue.js App"/> -->
  <xModel
    v-model="modelValue"
    @onconfirm="confirm"
    @oncancel="cancel"
    :withHeader="withHeader"
    :show-close="false"
    title="我的弹窗"
    :withFooter="withFooter"
    @update:modelValue="addAddressHideDialog"
  >
    <template #header>
      <!-- <xModelHeader></xModelHeader> -->
    </template>
    <div>555
   <div>11{{0 && '1122'  }}</div>

    </div>
    <template #footer>
      <div>
        <el-button type="primary">111</el-button>
        <el-button type="primary">222</el-button>
      </div>
    </template>
  </xModel>
  <el-button @click="openXmodel">弹出1框</el-button>
  <div>{{ singleselectValue }}</div>
<!--  <comfirm></comfirm>-->
  <x-form label="测试表单"
  v-model="singleselectValue"
  :options="options" 
  :slotName="slotName"
  type="singleselect"
   :tooltipConfig="{
    content:'我是测试表单的提示',
   placement:'top',

  }">
    <template v-slot:footer >
      <span>1213132123</span>
    </template>
  </x-form>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import xFrom from './components/form/xForm.vue'
// import  {h} from 'vue'
import {getCurrentInstance} from 'vue'
import xModelHeader from './components/xModel/components/xModelHeader.vue'
// import slotParent from './components/slotCom/slotParent.vue'
import XForm from "./components/form/xForm.vue";
import xModel from "./components/xModel/xModel.vue";
import { ref,useTemplateRef } from "vue";
// import tplRender from "./components/form/js/tplRender";
// const  newFnc = new  Function("a","b","return a*b")
const singleselectValue =ref('Option2')
// console.log(newFnc(1,5))
function myFunction(a, b) {
  return a * b;
}
const slotName = ref([
  'header','footer','prefix','empty'
])
const options =ref([
{
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])
var txt = myFunction.toString();
console.log(txt)
const modelValue = ref(false);
const openXmodel = () => {
  modelValue.value = true;
};
const cancel = () => {
  modelValue.value = false;
};
const confirm = () => {
  modelValue.value = false;
};
const hand =()=>{
  return true
}
const withHeader = ref(false);
const withFooter = ref(false);
const addAddressHideDialog = (data) => {
  // 关闭弹窗
  modelValue.value = false;
};
class Runoob{
  constructor(name,year) {
    this.name = name +'1111'
    this.year= year
  }
  age(y){
    return `我已经${y}岁了`
  }
}
console.log('12341241231312312312312312')
// const newRun = new Runoob('lzx','5')
class  dog extends Runoob {
  constructor(name,sex) {
    super(name);
    this.sex =sex
  }
  show(){
    return this.age+`还有几个月就${this.sex}`
  }
}
const newRun = new dog('lzx','nan')
console.log(newRun.name)
console.log(newRun.age(8))
console.log(newRun.show())
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
