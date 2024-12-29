<template >
  <el-dialog
  :model-value="modelValue"
    title="Tips"
    width="500"
    :before-close="closeDialog"
    @close="closeDialog"
  >
    <span>This is a message</span>
  </el-dialog>
</template>
<script name="xModel" setup>
 import {defineProps} from 'vue'
  // eslint-disable-next-line
 const props = defineProps({
  modelValue:{
    type:Boolean,
    default:()=>{}
  },
  oncancel:{
    type:Function,
  },
  onconfirm:{
    type:Function,
  }
 })
 const emit = defineEmits(['update:modelValue'])
const handleClose =()=>{

}
const closeDialog =()=>{
  debugger
  emit('update:modelValue')
}
</script>
<style lang="scss">
</style>