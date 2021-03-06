<template>
    <q-input
        v-model.trim="search"
        size="140"
        label="Search"
        @keyup="setSearch(search)"
        color="warning"
        class="flex flex-center"
        focus>
    <template v-slot:append>
      <q-icon v-if="search !== ''" name="close" @click="search ='';setSearch(search)" class="cursor-pointer"/>
     <q-icon class="text-yellow" name="search"/>
    </template>
    </q-input>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data () {
    return {
      search: ''
    }
  },

  methods:{
   ...mapMutations(["setSearch"]),
  }
  
}
</script>

<style scoped>

.q-input{
  margin-left:3%;
  color: black;
  width: 60%;
}
</style>
