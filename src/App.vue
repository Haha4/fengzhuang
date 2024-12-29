<template>

  <!-- <xFrom msg="Welcome to Your Vue.js App"/> -->
  <xModel v-model="modelValue" @onconfirm="confirm" @oncancel="cancel"   @update:modelValue="addAddressHideDialog"></xModel>
  <el-button @click="openXmodel">弹出框</el-button>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import xFrom from './components/form/xForm.vue'
import xModel from './components/xModel/xModel.vue';
import {ref} from 'vue';
const modelValue = ref(false)
const openXmodel =()=>{
  debugger
  modelValue.value =true
}
const cancel =()=>{
  modelValue.value = false
}
const confirm =()=>{
  modelValue.value = false
}
const addAddressHideDialog = (data) => {
  // 关闭弹窗
  modelValue.value = false
}
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
