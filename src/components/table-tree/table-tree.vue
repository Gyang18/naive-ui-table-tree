<template>
  <div class="table-tree">
    <sub-table-tree v-for="item in permissionsMenus" :key="item.id" :tree-menu="item"></sub-table-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubTableTree from './sub-table-tree.vue';

import { permissionsMenus, PermissionsMenuList } from "../../mock/permissions";

export default defineComponent ({
  name: 'table-tree',
  components: { SubTableTree },
  setup () {

    const hasThreeChild = ( list: PermissionsMenuList ) => {

      return list.some ( item =>  item.children && item.children.length )

    };

    const setShowRow = ( list: PermissionsMenuList ) => {
      list.forEach ( item => {

        // item.showRow = !!( item.children && item.children.length );
        item.showRow = hasThreeChild ( item.children || [] );

        if ( item.children && item.children.length ) {

          setShowRow ( item.children );

        }

      });
    }

    setShowRow ( permissionsMenus );

    return {
      permissionsMenus,
    }

  },

})
</script>