<template>
  <input type="text" v-model="pokemon">
  <button @click="findPokemon(pokemon)">Pesquisar</button>
  <PokeCard :name="pikachu" />
</template>

<script>
	import { getPokemon } from "../service/pokemon-service.js";
  import PokeCard from './PokeCard.vue'

  export default {
    name: 'PokeSearch',
    components: {
      PokeCard,
    },
    data() {
      return {
        pokemon: '',
        pokeName: '',
      }
    },
    methods: {
      findPokemon(pokemon) {
        console.log(pokemon);
        getPokemon(pokemon).then(data => {
            console.log(data);
            return this.pokeName = data.name;
        });
      },
    }
  }
</script>

<style>

</style>