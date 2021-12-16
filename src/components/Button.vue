<template>
  <button 
    @click="open" 
    class="button" 
    :class="{main: view === 'main', 
      add: view === 'add' && checkedReturn.length, 
      disabled: view === 'add' && !checkedReturn.length
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    view: {
      type: String
    },
    checkedReturn: {
      type: Array
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    open() {
      this.$emit('open')
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

.main {
  color: #fff;
  border: 1px solid #fff;
  padding: 20px 32px;
  background: transparent;
  transition: all .2s;
  &:hover {
    color: #000;
    font-weight: bold;
    background: #fff;
  }
}

.add {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border: none;
  color: #fff;
  width: 100%;
  padding: 20px 0;
  transition: all .2s;
  &:hover {
    background: #EA0029;
  }
}

.disabled {
  background: #BEC5CC;
  box-shadow: none;
  border: none;
  color: #fff;
  width: 100%;
  padding: 20px 0;
  transition: all .2s;
  cursor: not-allowed;
}
</style>
