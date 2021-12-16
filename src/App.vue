<template>
  <div id="app">
    <Button view="main" @open="openModal" v-if="!open">Налоговый вычет</Button>
    <Popup 
      @close="closeModal"
      v-if="open"
    />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Popup from '@/components/Popup.vue'
import '@/assets/css/style.scss'
import '@/assets/css/media.scss'
import '@/assets/css/fonts.scss'

export default {
  name: 'App',
  components: {
    Button,
    Popup
  },
  data() {
    return {
      view: 'main',
      open: false
    }
  },
  methods: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    }
  }
}
</script>

<style lang="scss">


#app {
  font-family: 'Lab Grotesque';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
