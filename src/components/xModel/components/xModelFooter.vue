<template>
  <div class="x-model-footer">
    <div v-if="leftArr && leftArr.length > 0" class="left-button">
      <el-button
        v-for="item in titleLeftArr"
        :key="item.handle"
        v-bind="item"
        @click="btnHandle(item.handle)"
        class="inline-button"
      >
        {{ item.display }}
      </el-button>
      <el-dropdown v-if="leftArr && leftArr.length > 0"  @command="btnHandle">
        <span class="el-dropdown-link">
          更多
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in leftArr"
              :key="item.display"
              :command="item.hand"
            >
              {{ item.display }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-button
      v-else
      v-for="item in btnArr"
      :key="item.handle"
      v-bind="item"
      @click="btnHandle(item.handle)"
      class="inline-button"
    >
      {{ item.display }}
    </el-button>
  </div>
</template>
<script setup name="x-model-footer">
import { computed } from "vue";
const emits = defineEmits(["btnHandle"]);
const props = defineProps({
  btnArr: {
    type: Array,
    default: () => {
      return [
        {
          display: "取消",
          handle: "cancel",
        },
        {
          display: "确定",
          handle: "confirm",
          type: "primary",
        },
      ];
    },
  },
  leftBtnArr: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
const btnHandle = (data) => {
  debugger
  emits("btnHandle", data);
};
const leftArr = computed(() => {
  return props.leftBtnArr.slice(2);
});
const titleLeftArr = computed(() => {
  return props.leftBtnArr.slice(0, 2);
});
</script>
<style lang="scss">
.left-button{
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  // flex-direction: row-reverse;
  align-items: center;
  text-align: right;
  .el-dropdown-link{
    margin-left: 10px;
  }
}

</style>
