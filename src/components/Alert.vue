<template>
  <div class="alert alert-success alert-dismissable"">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>{{ msg }}</strong></div>
</template>

<script>
  export default {
    name: 'alert',
    props: ['msg'],
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .starter-template {
    padding: 80px 15px;
    text-align: center;
  }
</style>
