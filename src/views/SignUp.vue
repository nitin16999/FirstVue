<script>
import router from '../router/index';
export default {
  data() {
    return {
      data: { FName: '', LName: '', email: '' },
    };
  },
  methods: {
    login: function (e) {
      e.preventDefault();
      const msg = `Hii ${this.data.FName} ${this.data.LName} you are registered with ${this.data.email} email ID`;
      console.log(msg);
      this.$router.push({
        name: 'Welcome',
        query: this.data
      });
    },
  },
};
</script>
<template>
  <div>
    <h2>Sign Up</h2>
    <div class="container">
      <form v-on:submit="login">
        <input
          type="text"
          v-model="data.FName"
          placeholder="Enter Your First Name"
        /><br />
        <input
          type="text"
          v-model="data.LName"
          placeholder="Enter Your Last Name"
        /><br />
        <input
          type="text"
          v-model="data.email"
          placeholder="Enter Your email"
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter Your password"
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style>
input {
  margin: 5 px;
}
</style>
