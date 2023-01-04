<template>
  <header :style="{ background: backgroundType[type] }">
    <div class="pokemon">
      <div class="img-container">
        <img :src="image" alt="">
      </div>
      <div class="poke-info">
        <h1>{{ name }}</h1>
        <div class="poke-info-types">
          <div class="poke-info-type" v-for="(type, index) in types" :key="index">
            <span :style="{ background: colorType[type.type.name] }">{{ type.type.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pokemon-abilities">
    <div class="pokemon-abilities__title">
      <h1>Ataques</h1>
    </div>
    <div class="pokemon-abilities__ability">
      <div v-for="(abilitie, index) in abilities" :key="index">
        <h3 :style="{ color: colorType[type] }">{{ abilitie.ability.name }}</h3>
      </div>
    </div>
  </div>
  <div class="pokemon-stats">
    <div class="pokemon-stats__title">
      <h1>Habilidades</h1>
    </div>
    <div class="pokemon-stats__stat">
      <div class="pokemon-stats__stat__name" v-for="(stat, index) in stats" :key="index">
        <h3>{{ stat.stat.name }}</h3>
        <div :style="{ width: `${stat.base_stat}px`, backgroundColor: colorType[type] }" class="pokemon-stats__progress-bar"></div>
      </div>
    </div>
  </div>
  <div class="pokemon-sprites">
    <div v-for="(sprite, index) in sprites" :key="index">
      <img :src="sprite" alt="">
    </div>
  </div>
</template>
<script>
import { getPokemon } from "../service/pokemon-service.js";
import { backgroundType, colorType } from "../utilities/constants.js";

export default {
  name: 'PokeDetail',
  components: {
  },
  data() {
    return {
      pokemon: '',
      name: '',
      image: '',
      abilities: '',
      type: '',
      types: '',
      stats: '',
      backgroundType: backgroundType,
      colorType: colorType
    }
  },
  mounted() {
    this.fetchPokemon(this.$route.params.name)
  },
  methods: {
    fetchPokemon(pokemon) {
      getPokemon(pokemon).then(data => {
        console.log(data);
        this.pokemon = data;
        this.name = this.pokemon.name;
        this.image = this.pokemon.sprites.other['official-artwork'].front_default;
        this.type = this.pokemon.types[0].type.name;
        this.types = this.pokemon.types;
        this.abilities = this.pokemon.abilities;
        this.stats = this.pokemon.stats;
        this.sprites = this.pokemon.sprites;
        delete this.sprites.other;
        delete this.sprites.versions;
      })
    },
  }
}
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
header .pokemon {
  display: flex;
	padding: 10px;
  align-items: center;
}

header .pokemon .img-container img {
	margin-top: 20px;
  width: 10rem;
}

header .pokemon .poke-info {
  display: block;
  text-align: left;
  margin-left: 1rem;
}

header .pokemon .poke-info h1 {
  font-size: 2rem;
  font-size: 3rem;
  font-family: 'Roboto Bold', sans-serif;
  font-weight: bold;
  color: #fff;
}

header .pokemon .poke-info .poke-info-types {
  display: flex;
}

header .pokemon .poke-info .poke-info-types .poke-info-type {
  margin-top: 10px;
  margin-right: 10px;
}

header .pokemon .poke-info .poke-info-types .poke-info-type span {
  font-size: 1.2rem;
  padding: 0.3rem;
  border-radius: 5px;
  color: white;
}

.pokemon-abilities {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.pokemon-abilities .pokemon-abilities__title {
  width: 100%;
  text-align: right;
  padding: 1rem;
} 

.pokemon-abilities .pokemon-abilities__title h1 {
  font-size: 2rem;
  font-weight: bold;
} 

.pokemon-abilities .pokemon-abilities__ability {
  display: block;
  width: 100%;
  padding: 1rem;
}

.pokemon-abilities .pokemon-abilities__ability h3 {
  font-size: 1.2rem;
}

.pokemon-stats {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.pokemon-stats .pokemon-stats__title {
  width: 100%;
  text-align: right;
  padding: 1rem;
}

.pokemon-stats .pokemon-stats__title h1 {
  font-size: 2rem;
  font-weight: bold;
}

.pokemon-stats .pokemon-stats__stat {
  display: block;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

.pokemon-stats .pokemon-stats__stat h3 {
  font-size: 1rem;
  font-weight: 600;
}
.pokemon-stats .pokemon-stats__stat .pokemon-stats__stat__name {
  display: flex;
  align-items: center;
}

.pokemon-stats__stat .pokemon-stats__progress-bar {
  height: 5px;
  background: #ccc;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}

.pokemon-sprites {
  display: flex;
  margin-top: 5rem;
  justify-content: space-evenly;
}

</style>
