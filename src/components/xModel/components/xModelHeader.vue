<template>
  <div class="header-close">
    <span> {{ title }}</span>
    <span v-if="showClose" @click="emits('btnHandle','cancel')" 
           ><el-icon><CloseBold /></el-icon
    ></span>
  </div>
</template>
<script setup name="x-model-header">
const emits =defineEmits(['btnHandle'])
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  showClose:{
   type:Boolean,
   default:true
  },
});
</script>
<style lang="scss">
.header-close{
  display: flex;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
  text-align: center;
}
</style>
