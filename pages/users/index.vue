<script setup>
const { data } = await useFetch("/api/users");
const getRoute = computed(() => (id) => {
  return `/users/${id}`;
});
</script>
<template>
  <main>
    <header>
      <h1>Users</h1>
    </header>
    <div>
      <ul>
        <li v-for="user in data.users" :key="user.id">
          <NuxtLink :to="getRoute(user.id)">
            <h3>{{ user.firstName }}{{ user.lastName }}</h3>
            <p>{{ user.email }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
