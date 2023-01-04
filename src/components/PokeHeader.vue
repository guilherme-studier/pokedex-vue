<template>
  <header>
    <div>
      <img src="../assets/logo.svg" alt="">
    </div>
  </header>
</template>
<script>
export default {
  name: 'PokeHeader',
}
</script>

<style scoped>
  header {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2rem;
  }

  header h1 {
    font-size: 3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: var(--red-900);
  }
</style>
