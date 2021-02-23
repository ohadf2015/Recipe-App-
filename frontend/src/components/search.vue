<template>
    <q-input
        rounded standout v-model.trim="textSearch"
        size="140"
        label="Search"
        bg-color="grey-1"
        color="orange"
        class="flex flex-center"
        focus>
    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="textSearch =''" class="cursor-pointer"/>
     <q-icon class="text-black" name="search"/>
    </template>
    </q-input>
</template>
<script>
export default {
  data () {
    return {
      textSearch: ''
    }
  },
}
</script>

<style scoped>
.q-input{
  color: black;
}
</style>
