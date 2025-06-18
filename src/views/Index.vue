<script setup lang="ts">
import { useBEM } from '@vexip-ui/bem-helper'
import { ref } from 'vue'
import RmcTree from '../components/RmcTree.vue'
import useMyFetch from '../hooks/useMyFetch'
const nh = useBEM('index')
const checkbox = ref(false)
const { isFetching, error, data: folders } = useMyFetch('api/folder/').get()
       .json();

</script>
<template>
       <div :class="nh.b()">
              <Row :class="nh.be('row')" :gap="18">
                     <Column :span="10" :md="6">
                            <div class="content">
                                 
                                   <RmcTree   :isFetching="isFetching" 
                                  
    :error="error"  :checkbox="checkbox" :data="folders" />
                            </div>
                     </Column>
                     <Column :span="2" :md="18">
                            <div class="content">
                                   <Button type="info" @click="checkbox = !checkbox">
                                          Info
                                   </Button>
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
