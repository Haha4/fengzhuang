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
  <el-button @click="openXmodel">弹出框</el-button>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import xFrom from './components/form/xForm.vue'
import xModelHeader from './components/xModel/components/xModelHeader.vue'
import xModel from "./components/xModel/xModel.vue";
import { ref } from "vue";
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
