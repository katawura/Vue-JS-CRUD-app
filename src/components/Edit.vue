<template>
  <div class="container">
    <div class="starter-template">
      <div class="about">
        <h1>Update customer</h1>

        <form v-on:submit="updateCustomer">
          <div class="well">
            <h4>Customer Info</h4>
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
            </div>
          </div>
          <div class="well">
            <h4>Customer Contact</h4>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
            </div>
          </div>

          <div class="well">
            <h4>Customer Location</h4>
            <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
            </div>
            <div class="form-group">
              <label>City</label>
              <input type="text" class="form-control" placeholder="City" v-model="customer.city">
            </div>
            <div class="form-group">
              <label>State</label>
              <input type="text" class="form-control" placeholder="State" v-model="customer.state">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'edit',
    data () {
      return {
        customer: {}
      }
    },
    methods: {
      fetchCustomer(id) {
        this.$http.get('http://slimcustomerv.dev/api/customer/' + id)
          .then(function(res) {
            this.customer = res.body;
          });
      },
      updateCustomer: function (e) {

        let newCustomer = {
          first_name:  this.customer.first_name,
          last_name:  this.customer.last_name,
          phone:  this.customer.phone,
          email:  this.customer.email,
          address:  this.customer.address,
          city:  this.customer.city,
          state:  this.customer.state,
        }

        this.$http.put('http://slimcustomerv.dev/api/customer/update/' + this.$route.params.id, newCustomer)
          .then(function(res) {
            this.$router.push({
              path: '/',
              query: {alert: 'Customer updated'}
            });
          });

        e.preventDefault();
      },

      created() {
        this.fetchCustomer(this.$route.param.id);
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
