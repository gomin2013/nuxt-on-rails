<template>
  <v-row>
    <v-col>
      <div>
        <v-btn @click="getHello">
          Click!
        </v-btn>
        {{ msg }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      msg: ''
    }),
    methods: {
      getHello () {
        this.$axios.$get('/hello').then(res => (this.msg = res.msg))
      }
    }
  }
</script>
