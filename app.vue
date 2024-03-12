<script setup>
const { data } = await useFetch("/api/disney");
</script>
<template>
  <div>
    <h1>{{ data[1].name }}</h1>
  </div>
</template>
