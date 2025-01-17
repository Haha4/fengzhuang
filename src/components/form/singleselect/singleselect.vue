<template>
  <el-select
    :clearable="clearable"
    :multiple="multiple"
    v-bind="$attrs"
    :model-value="renderModelValue"
    :class="renderClass"
    :style="comStyle"
    @change="updateModelValue"
  >
    <template
      v-if="slotName.length > 0"
      v-for="(item, index) in slotName"
      :key="index"
    >
      <slot :name="item"></slot>
    </template>
    <el-option
      v-for="item in renderOption"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script setup name="single-select">
import { computed, defineExpose, ref } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  clearable: { type: Boolean, default: true },
  multiple: { type: Boolean, default: false },
  modelValue: {},
  comStyle: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Array,
    default: () => [],
  },
  slotName: {
    type: Array,
    default: () => [],
  },
});
const renderOption = computed(() => {
  return props.options;
});
const renderModelValue = computed(() => {
  return props.modelValue;
});
const updateModelValue = (e) => {
  emits("update:modelValue", e);
};
</script>
<style scoped lang="scss"></style>
