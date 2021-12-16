<template>
  <div class="popup">
    <div class="popup__background" @click="close"></div>
    <div class="popup__body">
      <div class="popup__wrapper">
        <div class="popup__header">
          <h1 class="popup__title">Налоговый вычет</h1>
          <svg
            class="popup__button-close"
            @click="close"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z"
              fill="#EA0029"
            />
          </svg>
        </div>
        <p class="popup__text">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
        <Form class="popup__form" @close="close" />
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import '@/assets/css/media.scss'

export default {
  components: {
    Form,
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.popup {
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #b3b3b3;
  }
  &__body {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 100%;
    max-width: 552px;
    padding: 32px;
    border-radius: 30px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
  }
  &__button {
    &-close {
      position: relative;
      top: -5px;
      left: 5px;
      cursor: pointer;
    }
  }
  &__text {
    color: #808080;
    font-size: 14px;
    margin-bottom: 24px;
  }
  &__payment {
    &-title {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 15px;
    }
    &-button {
      background: transparent;
      color: #ea0029;
      font-size: 14px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-top: 8px;
      &:hover {
        color: #f53a31;
      }
      &:focus {
        color: #ea0029;
      }
    }
    &-buttons {
      margin-top: 30px;
    }
    &-radio {
      display: flex;
      margin: 32px 0;
      &-title {
        margin: 0;
        margin-right: 32px;
      }
      &-buttons {
        display: flex;
      }
      &-button {
        margin-right: 16px;
      }
    }
    &-list {
      max-height: 196px;
      overflow-y: auto;
    }
    &-item {
      &-ckeckbox {
        margin: 23px 0;
        & p {
          padding-left: 30px;
          & span {
            color: #808080;
          }
        }
      }
      &-border {
        width: 100%;
        height: 1px;
        background: #dfe3e6;
      }
    }
  }
}
</style>
