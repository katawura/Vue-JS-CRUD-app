import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetails from '@/components/CustomerDetails'
import Edit from '@/components/Edit'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'customerdetails',
      component: CustomerDetails
    },
    {
      path: '/edit-customer/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
