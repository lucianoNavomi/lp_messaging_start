var app = new Vue({
  el: '#app',
  data: {
    title_base: 'LP Messaging Starter + Plasma',
    firstn: 'John',
    lastn: 'Doe',
    email: 'example@example.com',
    phone: '999999999',
    company_name: 'Example Co',
    fields: 'Testing VUE'
  },
  methods: {
    refreshForm(){
      this.firstn = '',
      this.lastn = '',
      this.email = '',
      this.phone = '',
      this.company_name = ''
    }
  },
  computed: {
    title() {
      return this.title_base + '\n ' + this.firstn + '\n ' + this.lastn + '\n ' + this.email + '\n ' + this.phone + '\n ' + this.company_name
    }
  }
})
