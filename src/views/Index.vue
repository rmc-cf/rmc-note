<script setup lang="ts">
import { useBEM } from '@vexip-ui/bem-helper'
import RmcTree from '../components/RmcTree.vue'
import {ref} from 'vue'
const nh = useBEM('index')
const checkbox = ref(false)
</script>
<template>
       <div :class="nh.b()">
              <Row :class="nh.be('row')" :gap="6">
                     <Column :span="4" :md="5" >
                            <div class="content">
                                   <RmcTree :checkbox="checkbox"/>
                            </div>
                     </Column>
                     <Column :span="6"  :md="19" >
                            <div class="content">
                                    <Button type="info" @click="checkbox=!checkbox">
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
