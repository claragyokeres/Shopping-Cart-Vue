<template>
  <div id="app">
    <div class="logo">
      <PanagoraLogo />
    </div>
    <div class="cart">
      <Cart />
    </div>
    <div id="nav">
      <router-link to="/">Products</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import PanagoraLogo from "./components/PanagoraLogo";
import Cart from "./components/Cart";
export default {
  components: {
    PanagoraLogo,
    Cart
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
