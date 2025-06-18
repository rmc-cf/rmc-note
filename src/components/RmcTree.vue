<script setup lang="ts">
import { Contextmenu } from 'vexip-ui';
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
const emit = defineEmits(['open']);
//右键菜单
const contextmenu = async (event: MouseEvent) => {
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
  if (event.target instanceof Element) {
    console.log(event.target.querySelector('[id]')?.id);
  }
  
}
}
const open = (data: any) => {
  if(!data?.content) return
  emit('open', data.content);
};
</script>
<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <Tree @node-click="open" floor-select draggable v-else :checkbox="checkbox" :data="data"  @contextmenu.prevent="contextmenu">
   
    <template #label="{ data }">
      <!-- contenteditable=""  -->
      <span :id="data.id">{{data.label}}</span>
      </template>
    <template #suffix="{data}">
      <Linker type="primary" @click.stop v-if="data.type">
        Suffix
      </Linker>
    </template>
  </Tree>
</template>