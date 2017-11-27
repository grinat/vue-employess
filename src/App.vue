<template>
  <div id="app">

    <nav class="navbar navbar-expand-sm bg-light">
      <router-link :to="{ path: '/' }" class="navbar-brand">
        <img src="./assets/logo.png" class="navbar-brand-logo">
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'employees' }" class="nav-link">Сотрудники</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'message' }" class="nav-link">Послать сообщение</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'jqueryTest' }" class="nav-link">JQuery test</router-link>
        </li>
      </ul>
    </nav>

    <div class="container mt-4">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app .navbar-brand-logo{
  max-height: 20px;
}
</style>
