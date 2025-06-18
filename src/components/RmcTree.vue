<script setup lang="ts">
import { PaperPlaneR } from '@vexip-ui/icons'
import { Contextmenu } from 'vexip-ui'
const props = defineProps({
  checkbox: {
    type: Boolean,
    default: false
  }
})
const data = [
  {
    id: 1,
    label: '动物',
    parent: 0,
    expanded: true,
  },
  {
    id: 2,
    label: '鸟类',
    parent: 5,
  },
  {
    id: 3,
    label: '无脊椎动物',
    parent: 1,
  },
  {
    id: 4,
    label: '哺乳动物',
    parent: 5,
  },
  {
    id: 5,
    label: '脊椎动物',
    parent: 1,
  },
  {
    id: 6,
    label: '喜鹊',
    parent: 2,
  },
  {
    id: 7,
    label: '蚯蚓',
    parent: 3,
  },
  {
    id: 8,
    label: '水母',
    parent: 3,
  },
  {
    id: 9,
    label: '穿山甲',
    parent: 4,
  },
  {
    id: 10,
    label: '红隼',
    parent: 2,
  },
]
//右键菜单
const contextmenu = async (event: MouseEvent) => {
  // 未选择是则返回 null
  const selectedKeys = await Contextmenu.open({
    clientX: event.clientX,
    clientY: event.clientY,
    appear: true,
    configs: [
      { key: '创建副本' },
      { key: '新建文件夹' },
      { key: '新建笔记' },
      { key: '重命名' },
      {
        key: '删除',
        color: 'red',
      },
    ],
  })

  console.info(selectedKeys)
}
</script>
<template>
  <Tree :checkbox="checkbox" :data="data" @contextmenu.prevent="contextmenu">
    <template #prefix>
      <Icon :icon="PaperPlaneR"></Icon>
    </template>
    <template #suffix>
      <Linker type="primary" @click.stop>
        Suffix
      </Linker>
    </template>
  </Tree>
</template>