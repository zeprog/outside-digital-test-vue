<template>
  <div>
    <div class="popup__payment">
      <h3 class="popup__payment-title">Ваша зарплата в месяц</h3>
      <Input
        type="text"
        id="salary"
        v-model="salary"
        v-mask="currencyMask"
        required
        :salaryError="isSalaryError"
        @blur="isSalaryTouched = true"
        @focus="isSalaryTouched = false"
      />
      <button class="popup__payment-button" @click="openCheckboxes">Расчитать</button>
      <div
        class="popup__payment-buttons"
        v-if="salary !== '' && active === true"
      >
        <h3 class="popup__payment-title">Итого можете внести в качестве досрочных:</h3>
        <ul class="popup__payment-list">
          <li
            class="popup__payment-item"
            v-for="(returns, idx) of isReturn"
            :key="idx"
          >
            <Input
              class="popup__payment-item-ckeckbox popup__payment-item"
              type="checkbox"
              :id="idx"
              :val="returns.value"
              v-model="checkedReturn"
            >
              <p>{{ returns.yearSalary }} рублей<span> {{ pluralize(idx + 1, ['в', 'во', 'в']) }} {{ idx + 1 }}-{{ pluralize(idx + 1, ['ый', 'ой', 'ий']) }} год</span></p>
            </Input>
            <div class="popup__payment-item-border"></div>
          </li>
        </ul>
      </div>
      <div class="popup__payment-radio">
        <h3 class="popup__payment-title popup__payment-radio-title">Что уменьшаем?</h3>
        <div class="popup__payment-radio-buttons">
          <Input
            class="popup__payment-radio-button"
            type="radio"
            id="payment"
            name="payment"
            checked
          >
            Платёж
          </Input>
          <Input
            class="popup__payment-radio-button"
            type="radio"
            id="time"
            name="payment"
          >
            Срок
          </Input>
        </div>
      </div>
    </div>
    <Button
      class="popup__button-add"
      view="add"
      :checkedReturn="checkedReturn"
    >
      Добавить
    </Button>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { pluralize } from '@/util/pluralize.js'

const currencyMask = createNumberMask({
  prefix: '',
  suffix: ' ₽',
  allowDecimal: true,
  includeThousandsSeparator: true,
  allowNegative: false,
  thousandsSeparatorSymbol: ' ',
})

const salaryReg = /\d+/

export default {
  components: {
    Input,
    Button
  },
  data() {
    return {
      salary: '',
      active: false,
      checkedReturn: [],
      isSalaryTouched: false,
      maxReturn: 260000,
      currencyMask,
      pluralize,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    openCheckboxes() {
      this.active = !this.active
    },
  },
  computed: {
    isSalaryValid() {
      return salaryReg.test(this.salary);
    },
    isSalaryError() {
      return !this.isSalaryValid && this.isSalaryTouched;
    },
    isSalary() {
      return parseInt(this.salary.replace(/\s/g, '').match(/\d+/))
    },
    isYearSalary() {
      const { isSalary } = this
      return isSalary * 12 * 0.13
    },
    isReturn() {
      const { isYearSalary } = this
      let returnsArray = []
      let maxReturn = this.maxReturn
      if (isYearSalary >= maxReturn) {
        returnsArray.forEach((el) => {
          el.yearSalary = maxReturn
          el.value = maxReturn
        })
      } else if (isYearSalary < maxReturn) {
        let remainder = maxReturn % isYearSalary
        let quotient = (maxReturn - (maxReturn % isYearSalary)) / isYearSalary
        console.log(quotient)
        for (let i = 0; i < quotient; i++) {
          returnsArray.push({ yearSalary: isYearSalary, value: maxReturn++ })
        }

        returnsArray.push({ yearSalary: remainder, value: remainder })
      }
      return returnsArray
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid #EA0029;
  border-radius: 3px;
  transition: all .2s;
}
</style>