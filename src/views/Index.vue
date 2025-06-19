<script setup lang="ts">
import { useBEM } from '@vexip-ui/bem-helper'
import { ref } from 'vue'
import RmcTree from '../components/RmcTree.vue'
import useMyFetch from '../hooks/useMyFetch'
const nh = useBEM('index')
const checkbox = ref(false)
const { isFetching, error, data: folders , execute} = 
useMyFetch('api/folder/').get().json();
const content = ref('This is a content area where you can display additional information.');
const open = (data: any) => {
       content.value = data
};
const reload = () => {
  execute(); // 使用useMyFetch提供的execute方法重新获取数据
};
  execute(); // 使用useMyFetch提供的execute方法重新获取数据

</script>
<template>
       <!-- <div>{{ folders }}</div> -->
       <div :class="nh.b()">
              <Row :class="nh.be('row')" :gap="18">
                     <Column :span="10" :md="6">
                            <div class="content">

                                   <RmcTree @reload="reload" @open="open" :isFetching="isFetching" :error="error" :checkbox="checkbox"
                                          :data="folders" />
                            </div>
                     </Column>
                     <Column :span="2" :md="18">
                            <div class="content">
                                   <Button type="info" @click="checkbox = !checkbox">
                                          Info
                                   </Button>
                                   <div v-html="content"></div>
                            </div>
                     </Column>
              </Row>
       </div>

</template>
<style lang="scss">
.index {
       &__row {
              width: 100%;
       }
}
</style>
