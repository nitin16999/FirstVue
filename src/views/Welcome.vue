<script>
export default {
  name: 'Welcome',
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ $route.query.FName }}</h1>
    <h3>You’ve successfully registered to our application</h3>
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
