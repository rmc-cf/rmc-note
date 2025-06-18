<script setup lang="ts">
import { PaperPlaneR } from '@vexip-ui/icons'
import { Contextmenu } from 'vexip-ui'
const props = defineProps({
  isFetching: {
    type: Boolean,
    default: false
  },
  error: {
    type: Object as () => Error | null,
    default: null
  },
  checkbox: {
    type: Boolean,
    default: false
  },
  data: {
    type: Array,
    default: () => []
  }
})

//右键菜单
const contextmenu = async (event: MouseEvent,node) => {
  // 未选择是则返回 null
const selectedKeys = await Contextmenu.open({
  clientX: event.clientX,
  clientY: event.clientY,
  appear: true,
  configs: [
    { key: 'duplicate' ,label:'创建副本'},
    { key: 'new_folder',label:'新建文件夹' },
    { key: 'new_file' ,label:'新建笔记'},
    { key: 'rename' ,label:'重命名'},
    {
      key: 'delete',
      color: 'red',label:'删除'
    },
  ],
})
if (selectedKeys && Array.isArray(selectedKeys)) {
  if (selectedKeys.includes('duplicate')) {
    console.log('创建副本');
  } else if (selectedKeys.includes('new_folder')) {
    console.log('新建文件夹');
  } else if (selectedKeys.includes('new_file')) {
    console.log('新建笔记');
  } else if (selectedKeys.includes('rename')) {
    console.log('重命名');
  } else if (selectedKeys.includes('delete')) {
    console.log('删除');
  }
  console.log(event.target.querySelector('[id]')?.id);
  
}
}
</script>
<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <Tree  draggable v-else :checkbox="checkbox" :data="data"  @contextmenu.prevent="contextmenu">
    <template #prefix>
      <Icon :icon="PaperPlaneR"></Icon>
    </template>
    <template #label="{ node }">
      <!-- contenteditable=""  -->
      <span :id="node.data.id">{{ node.data.label}}</span>
      </template>
    <template #suffix>
      <Linker type="primary" @click.stop>
        Suffix
      </Linker>
    </template>
  </Tree>
</template>