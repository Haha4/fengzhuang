<template>
  <component
    :is="formTplName"
    :class="props.class"
    class="x-form"
    :label="label"
    v-bind="formItemAttrs"
    :prop="prop"
  >
    <template v-if="label" #label>
      <span>{{ label }}{{ labelSuffix }}</span>
      <el-tooltip
        v-if="tooltipConfig.content || $slots.tooltipConfig"
        :placement="
          tooltipConfig.placement ? tooltipConfig.placement : 'top-start'
        "
        :effect="tooltipConfig.effect ? tooltipConfig.effect : 'dark'"
      >
        <template #content>
          <div
            v-if="tooltipConfig.content"
            :style="tooltipConfig.contentStyle"
            v-html="tooltipConfig.content"
          ></div>
          <slot v-if="$slots.tooltipConfig" name="tooltipConfig"></slot>
        </template>
        <el-icon class="el-icon-question" color="rgb(185, 185, 185)" size="16">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
    </template>
    <slot name="left"></slot>
    <!-- <slot name="footer"></slot> -->
    {{slotName}}
    <component v-bind="attrs" ref="formCom" :is="tplName" :slotName="slotName"> 
      <!-- <template v-for="(item,index) in slotName" v-slot:item>
        <slot :name="item"></slot>
      </template> -->
      <template v-slot:footer >
        <slot name="footer"></slot>
    </template>
 
    </component>
  </component>
  <!-- <div></div> -->
</template>

<script setup name="x-form">
import { ElFormItem } from "element-plus";
import { computed, defineProps, useAttrs } from "vue";
import tplRender from "./js/tplRender.js";
const attrs = useAttrs();
const props = defineProps({
  type:{
    type: String,
  },
  label: {
    type: String,
  },
  class: {
    type: String,
  },
  labelSuffix: {
    type: String,
  },
  formItemAttrs: {
    type: Object,
    default: () => {
      return {};
    },
  },
  right:{
    type: String,
  },
  slotName:{
    type:Array,
    default: () => {
      return [];
    },
  },
  tooltipConfig: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const formTplName = computed(() => {
  return props.type || props.label ? ElFormItem : "div";
});
const tplName = computed(() => {
  return tplRender({
    name: "x-form",
    attrs,
    right: props.right,
    showType: props.showType,
    type: props.type,
  });
});
</script>
<style scoped>
.el-icon-question {
  position: relative;
  top: 6px;
  left: 3px;
}
</style>
