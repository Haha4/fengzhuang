<template>
  <el-dialog
    :model-value="modelValue"
    width="500"
    v-bind="$attr"
    :before-close="closeDialog"
    @close="closeDialog"
  >
    <!-- <span>This is a message</span> -->
    <template #header v-if="withHeader">
      <slot name="header"> </slot>
    </template>
    <template #header v-if="!withHeader">
      <xModelHeader @btnHandle="btnHandle" :title="title"> </xModelHeader>
    </template>
    <el-scrollbar>
      <slot></slot>
    </el-scrollbar>
    <template #footer v-if="withFooter">
      <slot name="footer"> </slot>
    </template>
    <template #footer v-if="!withFooter">
      <xModelFooter @btnHandle="btnHandle" :leftBtnArr="leftBtnArr" :title="title" > </xModelFooter>
    </template>
  </el-dialog>
</template>
<script name="xModel" setup>
import { defineProps,computed,ref } from "vue";
import xModelHeader from "./components/xModelHeader.vue";
import xModelFooter from "./components/xModelFooter.vue";
// eslint-disable-next-line
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => {},
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
  withFooter: {
    type: Boolean,
    default: true,
  },
  oncancel: {
    type: Function,
  },
  onconfirm: {
    type: Function,
  },
  title: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);
const handleClose = () => {};
const closeDialog = () => {
  emit("update:modelValue");
};
const leftBtnArr =ref([
        {
          display: "取消",
          handle: "cancel",
        },
        {
          display: "待定",
          handle: "confirm",
        },
        {
          display: "确定",
          handle: "confirm",
          type: "primary",
        },
      ])
const btnHandle =(data)=>{
  // props['on'+data] &&  props['on'+data]()
  cancelHandle();
}
const cancelHandle= ()=>{
  emit('update:modelValue',false)
}
</script>
<style lang="scss"></style>
