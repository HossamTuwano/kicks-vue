<script setup></script>

<template>
  <div class="col-1-of-2">
    <div class="product-details">
      <div class="product-details__container">
        <h3 class="product__brand">Nike</h3>
        <div class="product__name u-margin-bottom-small">vans</div>
        <div class="product__info u-margin-bottom-small">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur corrupti aperiam
          quia unde perferendis corporis porro modi eum sapiente.
        </div>
        <div class="product__price-box">
          <div class="product__price-now">
            <span class="product__price-value u-margin-right-small" id="product-price"
              >$125.00</span
            >
            <span class="product__price-discount">50%</span>
          </div>
          <p class="product__price-then u-margin-bottom-small">$250.00</p>
        </div>

        <div class="product__details-cart">
          <div class="product-quantity u-margin-right-small">
            <button class="product-quantity-minus button" id="minus">-</button>
            <input type="text" class="product-quantity-value" value="1" />
            <button class="product-quantity-add button" id="add">+</button>
          </div>

          <button class="add-to-cart">
            <span class="cart-icon u-margin-right-small"
              ><img class="cart-icon" src="massets/images/icon-cart.svg" alt="cart-icon"
            /></span>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
