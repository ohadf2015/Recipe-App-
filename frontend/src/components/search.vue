<template>
    <q-input
        rounded standout v-model.trim="text"
        size="140"
        label="Search"
        bg-color="grey-1"
        class="flex flex-center"
        color="orange"
        focus>
    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="text =''" class="cursor-pointer"/>
     <q-icon class="text-black" name="search"/>
    </template>
    </q-input>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>

</style>
