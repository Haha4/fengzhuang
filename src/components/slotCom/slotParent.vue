<template>
   <slot :nameSlot ='name' name="header"></slot>
  <div>header分界线</div>
  <hr>
  <slot name="body"></slot>
  <div>body分界线</div>
  <hr>
  <slot ></slot>
</template>
<script setup name="comfirm" >
import  {ref} from 'vue'
const  name =ref('这个是header的值')
</script>
<style lang="sass">

</style>