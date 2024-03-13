<script setup>
const { id } = useRoute().params;
const { data } = await useFetch(`/api/users/${id}`);
</script>
<template>
  <main>
    <h1>User: {{ data.firstName }} {{ data.lastName }}</h1>
    <ul>
      <li>{{ data.email }}</li>
      <li>{{ data.phone }}</li>
      <li>{{ data.username }}</li>
    </ul>
  </main>
</template>
