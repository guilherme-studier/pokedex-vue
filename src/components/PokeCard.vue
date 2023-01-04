<template>

  <div :style="{ background: backgroundType[firstType] }" class="pokemon">
    <div class="img-container">
      <img :src="image" alt="">
    </div>
    <div class="pokemon-info">
      <h1>{{ name }}</h1>
      <div class="pokemon-info-types">
        <div class="pokemon-info-type" v-for="(type, index) in types" :key="index">
          <span :style="{ background: colorType[type.type.name] }">{{ type.type.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPokemon } from "../service/pokemon-service.js";
import { backgroundType, colorType } from "../utilities/constants.js";

export default {
  name: 'PokeCard',
  props: {
    name: {
      type: String,
      default: null
    },
 },
 data() {
  return {
    image: '',
    firstType: '',
    type: '',
    backgroundType: backgroundType,
    colorType: colorType
  }
 },
 mounted() {
  this.fetchPokemon()
 },
 methods: {
  fetchPokemon() {
    getPokemon(this.name).then(data => {
      this.image = data.sprites.other['official-artwork'].front_default;
      this.types = data.types;
      this.firstType = data.types[0].type.name;
    });
  },
 }

}
</script>

<style scoped>
.pokemon {
  display: flex;
	border-radius: 20px;
	box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
	padding: 10px;
	text-align: center;
  width: 29rem;
  cursor: pointer;
}

.pokemon .pokemon-info {
  display: block;
  text-align: left;
  margin-left: 1rem;
}

.pokemon .pokemon-info-types {
  display: flex;
}

.pokemon .pokemon-info-types .pokemon-info-type {
  margin-top: 10px;
  margin-right: 10px;
}

.pokemon .pokemon-info h1 {
  font-size: 2rem;
  font-size: 3rem;
  font-family: 'Roboto Bold', sans-serif;
  font-weight: bold;
  color: #fff;
}

.pokemon .pokemon-info-types .pokemon-info-type span {
  font-size: 1.2rem;
  padding: 0.3rem;
  border-radius: 5px;
  color: white;
}


.pokemon .img-container {
	background-color: rgba(255, 255, 255, 0.6);
	border-radius: 50%;
	width: 120px;
	height: 120px;
	text-align: center;
}

.pokemon .img-container img {
	margin-top: 20px;
	max-width: 90%;

  transition: 0.2s
}

.pokemon .img-container img:hover {
	margin-top: 10px;
	max-width: 100%;
  cursor: pointer;
}

.pokemon .info {
	margin-top: 20px;
}

.pokemon .number {
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	font-size: 0.8em;
	padding: 5px 10px;
}

.pokemon .name {
	margin: 15px 0 7px;
	letter-spacing: 1px;
}
</style>