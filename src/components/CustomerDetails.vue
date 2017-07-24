<template>
  <div class="container">
    <div class="starter-template">
      <div class="about">
        <h1>{{ customer.first_name }} {{ customer.last_name }} </h1>

        <p>{{ customer.email }}</p>
        <p>{{ customer.phone }}</p>
        <p>{{ customer.city }}</p>

        <router-link class="btn btn-default" v-bind:to="'/edit-customer/ + customer.id'">Edit</router-link>
        <a v-on:click="deleteCustomer(customer.id)" class="btn btn-default">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'customerdetails',
    data () {
      return {
        customer: ''
      }
    },
    methods:{
      fetchCustomer(id){
        this.$http.get('http://slimcustomerv.dev/api/customer/' + id)
          .then(function(res) {
            this.customer = res.body;
          });
      },
      deleteCustomer(id){
        this.$http.delete('http://slimcustomerv.dev/api/customer/delete/' + id)
          .then(function(res) {
            this.$router.push({
              path:'/',
              query: { alert: 'Customer Deleted'}
            });
          });
      }
    } ,
  created: function() {
    this.fetchCustomer(this.$route.params.id);
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .starter-template {
    padding: 80px 15px;
    text-align: center;
  }
</style>
