<template>
  <div class="home">
    <p>
      <router-link to="/article">ARTICLE</router-link>
    </p>
    <p>
      <router-link to="/tag">TAG</router-link>
    </p>
    <p>
      <router-link to="/note">NOTE</router-link>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
  }
};
</script>
