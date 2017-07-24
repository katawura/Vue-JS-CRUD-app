<template>
  <div class="container">
    <div class="starter-template">
      <Alert v-if="alert" v-bind:msg="alert"></Alert>
      <div class="customers">
        <h1>hello world</h1>

          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>view</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="customer in customers" >
                <td>{{ customer.first_name }}</td>
                <td>{{ customer.last_name }}</td>
                <td>{{ customer.email }}</td>
                <td><router-link v-bind:to="'/customer/' + customer.id" class="btn btn-default">View</router-link></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Alert from './Alert';

export default {
  name: 'Customers',
  data () {
    return {
      customers: [],
      alert: ''
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get('http://slimcustomerv.dev/api/customers')
          .then(function(res) {
             this.customers = res.body;
          });
    }
  },
  created: function () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  update: function () {
    this.fetchCustomers();
  },
  components: {
    Alert
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
