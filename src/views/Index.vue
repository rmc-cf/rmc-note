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
              <Row :class="nh.be('row')" :gap="6">
                     <Column :span="4" :md="5">
                            <div class="content">
                                 
                                   <RmcTree   :isFetching="isFetching" 
    :error="error"  :checkbox="checkbox" :data="folders" />
                            </div>
                     </Column>
                     <Column :span="6" :md="19">
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
       min-width: 90vw;
       min-height: 90vh;

       &__row {
              width: 100%;

       }
}
</style>
