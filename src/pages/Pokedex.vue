<template>
  <PokeHeader />
  <PokeList />
</template>

<script>
import PokeHeader from '../components/PokeHeader.vue';
import PokeList from '../components/PokeList.vue';

export default {
  name: 'HomePokedex',
  components: {
    PokeHeader,
    PokeList,
  }
}
</script>

<style>

</style>