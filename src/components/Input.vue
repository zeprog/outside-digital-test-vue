<template>
  <div :class="{
    radio: type === 'radio',
    checkbox: type === 'checkbox'
  }">
    <input v-if="type === 'checkbox'" 
      type="checkbox"
      class="input-checkbox"
      :id="id"
      :value="val"
      v-model="checkedCheckbox"
      @change="onChange"
    />
    <input v-else
      :type="type"
      class="" 
      placeholder="Введите данные"
      :class="{
        'input-text': type === 'text' || type === 'number',
        'input-radio': type === 'radio',
        'input-checkbox': type === 'checkbox',
        error: salaryError
      }"
      :id="id"
      :name="name"
      :checked="checked"
      :required="required"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @input="$emit('input', $event.target.value)"
    />
    <label :for="id"
    :class="{
      'input-radio-label': type === 'radio',
      'input-checkbox-label': type === 'checkbox'
      }">
      <slot />
    </label>
    <p v-if="salaryError" class="error-text">Поле обязательно для заполнения</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    id: {
      type: [String, Number]
    },
    name: {
      type: String
    },
    val: {
      type: [Number, String, Array]
    },
    value: {
      type: [Number, String, Array]
    },
    checked: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    salaryError: {
      type: Boolean
    },
    salaryTouched: {
      type: Boolean
    }
  },
  data() {
    return {
      checkedProxy: false,
    }
  },
  computed: {
    checkedCheckbox: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    },
  },
  methods: {
    onChange() {
      this.$emit('input', this.checkedProxy)
    }
  }
}
</script>

<style lang="scss" scoped>
.radio, .checkbox {
  position: relative;
}

.input {
  
  &-text {
    width: 100%;
    border: 1px solid #DFE3E6;
    border-radius: 3px;
    outline: none;
    padding: 7px 10px;
    transition: all .2s;
    &::placeholder {
      color: #BEC5CC;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }
    &:hover {
      border: 1px solid #000;
    }
    &:focus {
      border: 1px solid #DFE3E6;
    }
  }
  &-radio {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    &-label {
      padding: 11px;
      cursor: pointer;
      background: #EEF0F2;
      border-radius: 50px;
      transition: all .2s;
      &:hover {
        background: #DFE3E6;
      }
    }
    &:checked + .input-radio-label {
      background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
      color: #fff;
    }
  }
  &-checkbox {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    &-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all .2s;
      &::before {
        content: '';
        display: block;
        background: transparent;
        border: 1px solid #DFE3E6;
        border-radius: 6px;
        width: 20px;
        height: 20px;
        position: absolute;
        z-index: 1;
      }
      &:hover {
        &::before {
          border: 1px solid #000;
        }
      }
      &::after {
        content: '';
        display: block;
        background: url('../assets/img/check.svg') no-repeat;
        width: 20px;
        height: 20px;
        border: 1px solid linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
        border-radius: 6px;
        position: absolute;
        top: 25%;
        left: 4px;
        z-index: 2;
        opacity: 0;
      }
    }
    &:checked + .input-checkbox-label::before {
      background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
      border: none;
      width: 21px;
      height: 21px;
    }

    &:checked + .input-checkbox-label::after {
      opacity: 1;
    }
  }
}

.error {
  border: 1px solid #EA0029;
  border-radius: 3px;
  transition: all .2s;
  &-text {
    color: #EA0029;
    font-size: 12px;
    font-weight: 400;
  }
}
</style>