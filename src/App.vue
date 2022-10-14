<template>
  <nav style="display: flex; gap: 12px">
    <router-link to="/">home</router-link>
    <router-link to="/sign-in">login</router-link>
    <router-link to="/sign-up">registrar</router-link>
    <router-link to="/all-courses">cursos</router-link>
    <router-link to="/profile">profile</router-link>
    <router-link to="/add-course">add</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
