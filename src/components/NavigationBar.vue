<script setup>
import { useShowCartStore } from '@/stores/cart'
const showCart = useShowCartStore()
</script>
<template>
  <header>
    <div class="header">
      <div class="header__menu">
        <ul class="header__menu--left">
          <li class="u-margin-right-medium header__item header__logo">
            <a href="#" class="header__link">kicks</a>
          </li>
          <li class="u-margin-right-small header__item active">
            <a href="#" class="header__link">collections</a>
          </li>
          <li class="u-margin-right-small header__item">
            <a href=" #" class="header__link active__link">men</a>
          </li>
          <li class="u-margin-right-small header__item">
            <a href="#" class="header__link active__link">women</a>
          </li>
          <li class="u-margin-right-small header__item">
            <a href="#" class="header__link active__link">about</a>
          </li>
          <li class="u-margin-right-small header__item">
            <a href="#" class="header__link active__link">contact</a>
          </li>
        </ul>
        <ul class="header__menu--right">
          <li class="u-margin-right-small header__menu--cart">
            <i class="cart__icon"
              ><img src="../assets/images/icon-cart.svg" alt="" @click="showCart.showCart"
            /></i>
          </li>
          <li class="header__menu__shape">
            <img
              src="../assets/images/image-avatar.png"
              class="header__menu__avatar"
              alt="user profile"
            />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/styles/abstracts/_variable.scss';

.header {
  height: 2043m;
  &__menu {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    height: 10rem;
    justify-self: center;
    padding-top: 3rem;
    border-bottom: 1px solid $color-grey-light;

    &--left,
    &--right {
      display: inherit;
      justify-items: center;
      list-style: none;
    }

    &__shape {
      width: 3.5rem;
      height: 3.5rem;
      overflow: hidden;
      border-radius: 50%;
    }

    &__shape:hover {
      border: 2px solid $color-primary-dark;
    }

    &__avatar {
      height: 100%;
    }

    &--cart {
      position: relative;
    }

    &--cart,
    &__shape {
      cursor: pointer;
    }
  }

  .cart__icon::after {
    content: '3';
    font-size: 8px;
    position: absolute;
    top: 6px;
    right: -1.2rem;
    background-color: #f67a20;
    padding: 0 1rem;
    border-radius: 45%;
    color: #fff;
  }

  .active {
    border-bottom: 4px solid $color-primary-dark;
    height: 100%;
    color: $text-color-dark;
    transition: all 0.3s ease-out;
    backface-visibility: hidden;
  }
}
</style>
