<script setup>
const { data } = await useFetch("/api/hello");
</script>
<template>
  <div>
    <h1>{{ data.intro }}</h1>
    <p>{{ data.welcomeMessage }}</p>
  </div>
</template>
