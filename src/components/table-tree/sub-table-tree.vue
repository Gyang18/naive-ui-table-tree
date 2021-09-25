<template>
  <div class="permission-sub-tree-row">
    <div v-if="!treeMenu.showRow" class="row-tree-content-item">
      <div class="row-tree-cell">
<!--        <span class="table-expand">-->
<!--          <i  class="el-icon-minus table-expand" />-->
<!--          <i class="el-icon-plus table-expand" />-->
<!--        </span>-->
        <n-checkbox v-model:checked="treeMenu.checked" class="hasEllipsis" :indeterminate="treeMenu.indeterminate">
          {{ treeMenu.title }}
        </n-checkbox>
      </div>
      <div class="row-tree-last-wrapper" v-if="treeMenu.children && treeMenu.children.length">
        <div v-for="child in treeMenu.children" :key="child.id" class="last-child-item">
          <n-checkbox v-model:checked="child.checked" class="hasEllipsis" :indeterminate="child.indeterminate">
            {{ child.title }}
          </n-checkbox>
        </div>
      </div>
    </div>
    <div v-else class="row-tree-table">
      <div class="row-tree-title">
        <n-checkbox v-model:checked="treeMenu.checked" class="hasEllipsis" :indeterminate="treeMenu.indeterminate">
          {{ treeMenu.title }}
        </n-checkbox>
      </div>
      <div class="row-tree-content">
       <sub-table-tree v-for="item in treeMenu.children" :key="item.id" :tree-menu="item"></sub-table-tree>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { NCheckbox } from 'naive-ui';

import { PermissionsMenu } from "../../mock/permissions";

export default defineComponent({
  name: 'sub-table-tree',
  props: {
    treeMenu: {
      type: Object as PropType<PermissionsMenu>,
      default: () => ( { } ),
    }
  },
  components: { NCheckbox },
});

</script>


<style scoped lang="scss">
.row-tree-table {
  display: flex;
  overflow: auto;
}
.row-tree-title {
  width: 168px;
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  padding: 0 28px;
}
.row-tree-content {
  flex: auto;
  border: 1px solid #dcdfe6;
}
.item-content {
  display: flex;
}
.row-tree-cell {
  width: 168px;
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid #dcdfe6;
  padding: 0 28px;
  .table-expand {
    cursor: pointer;
    margin-right: 2px;
  }
}

.row-tree-last-wrapper {
  display: flex;
  flex: 1;
  max-height: 200px;
  overflow: auto;
  padding: 20px;
  border: 1px solid #dcdfe6;
}
.last-child-item {
}
.row-tree-content-item {
  display: flex;
}
</style>
<style lang="scss">
</style>