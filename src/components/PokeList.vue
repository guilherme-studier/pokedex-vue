<template>
    <div class="ct-pokemon">
        <div class="ct-pokemon--container">
            <PokeCard 
                v-for="(pokemon, index) in pokemons" 
                :key="index" 
                :name=pokemon.name 
                @click="selectPokemon(pokemon.name)"
            />
        </div>
    <div class="see-more">
        <button type="submit" @click="triggerSeeMorePokemons">Ver mais</button>
    </div>
    </div>
</template>

<script>
	import { getPokemonList } from "../service/pokemon-service.js";
    import PokeCard from './PokeCard.vue'

	export default {
        components:{
           PokeCard,
        },
        data() {
            return {
                pokemons: '',
                limit: 6,
                url: '',
            };
        },
        mounted() {
            this.fetchPokemon()
        },
        methods: {
            selectPokemon(name) {
                this.$router.push({name: "pokemon", params:{name}})
            },
            triggerSeeMorePokemons() {
                this.limit = this.limit + 6;
                return this.fetchPokemon(this.limit);
            },
            fetchPokemon(limit) {
                getPokemonList(limit).then(data => {
                    this.pokemons = data.results;
                })
            },
        }

	};
</script>
<style scoped>
.ct-pokemon {
    width: 100%;
}

.ct-pokemon--container {
    max-width: 1000px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
}

.see-more {
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.see-more button {
    text-align: center;
    background: var(--red-500);
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}
</style>