let eventBus = new Vue();

Vue.component('product-one', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
     <div class="product">
        <div class="product-image">
          <img :src="image" />
        </div>
  
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            
            <info-tabs :shipping="shipping" :details="details"></info-tabs>

            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Add to cart
            </button>

            <button @click="removeFromCart" 
              >
            Remove from cart
            </button>
         </div>  

         <product-tabs :reviews="reviews"></product-tabs>

         
      </div>
     `,
  data() {
    return {
      product: 'Skateboard Decks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['Maple wood', 'Concave Deck', '7.5"'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'purple',
          variantImage: './assets/skate-00.png',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'green',
          variantImage: './assets/skate-01.png',
          variantQuantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    removeFromCart: function () {
      this.$emit(
        'remove-from-cart',
        this.variants[this.selectedVariant].variantId
      );
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return '$' + 4.95;
    },
  },
  //   added on
  mounted() {
    eventBus.$on('review-submitted', (productReview) => {
      this.reviews.push(productReview);
    });
  },
});
//
//
//
// product-two
Vue.component('product-two', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
     <div class="product">
        <div class="product-image">
          <img :src="image" />
        </div>
  
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            
            <info-tabs :shipping="shipping" :details="details"></info-tabs>

            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Add to cart
            </button>

            <button @click="removeFromCart" 
              >
            Remove from cart
            </button>
         </div>  

         <product-tabs :reviews="reviews"></product-tabs>

         
      </div>
     `,
  data() {
    return {
      product: 'Skateboard Decks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['Bamboo wood', 'Mellow Deck', '7.3"'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'yellow',
          variantImage: './assets/skate-02.png',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'beige',
          variantImage: './assets/skate-03.png',
          variantQuantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    removeFromCart: function () {
      this.$emit(
        'remove-from-cart',
        this.variants[this.selectedVariant].variantId
      );
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return '$' + 4.95;
    },
  },
  //   added on
  mounted() {
    eventBus.$on('review-submitted', (productReview) => {
      this.reviews.push(productReview);
    });
  },
});
//
//
//
// product-three
Vue.component('product-three', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
     <div class="product">
        <div class="product-image">
          <img :src="image" />
        </div>
  
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            
            <info-tabs :shipping="shipping" :details="details"></info-tabs>

            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Add to cart
            </button>

            <button @click="removeFromCart" 
              >
            Remove from cart
            </button>
         </div>  

         <product-tabs :reviews="reviews"></product-tabs>

         
      </div>
     `,
  data() {
    return {
      product: 'Skate Shoes',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'todler skaters'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'pink',
          variantImage: './assets/todler-01.png',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/todler-00.png',
          variantQuantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    removeFromCart: function () {
      this.$emit(
        'remove-from-cart',
        this.variants[this.selectedVariant].variantId
      );
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return '$' + 4.95;
    },
  },
  //   added on
  mounted() {
    eventBus.$on('review-submitted', (productReview) => {
      this.reviews.push(productReview);
    });
  },
});

// product-review
Vue.component('product-review', {
  template: `
      <form class="review-form" @submit.prevent="onSubmit">
      
        <p class="error" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name" >Name:</label>
          <input id="name" v-model="name">
        </p>
        
        <p>
          <label for="review">Review:</label>      
          <textarea id="review" v-model="review" ></textarea>
        </p>
        
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>

        <p>Would you recommend this product?</p>
        <label>
          Yes
          <input type="radio" value="Yes" v-model="recommend"/>
        </label>
        <label>
          No
          <input type="radio" value="No" v-model="recommend"/>
        </label>
            
        <p>
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
    `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.name && this.review && this.rating && this.recommend) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend,
        };
        // add on
        eventBus.$emit('review-submitted', productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
        this.recommend = null;
      } else {
        if (!this.name) this.errors.push('Please Enter Name.');
        if (!this.review) this.errors.push('Please Enter Review.');
        if (!this.rating) this.errors.push('Please Enter Rating.');
        if (!this.recommend) this.errors.push('Recommendation Required.');
      }
    },
  },
});

Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: false,
    },
  },
  template: `
      <div>
      
        <ul>
          <span class="tabs" 
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                @click="selectedTab = tab"
                :key="tab"
          >{{ tab }}</span>
        </ul>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
                <li v-for="(review, index) in reviews" :key="index">
                  <p>{{ review.name }}</p>
                  <p>Rating:{{ review.rating }}</p>
                  <p>{{ review.review }}</p>
                </li>
            </ul>
        </div>

        <div v-show="selectedTab === 'Make a Review'">
          <product-review></product-review>
        </div>
    
      </div>
    `,
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews',
    };
  },
});

Vue.component('info-tabs', {
  props: {
    shipping: {
      required: true,
    },
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
      <div>
      
        <ul>
          <span class="tabs" 
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                @click="selectedTab = tab"
                :key="tab"
          >{{ tab }}</span>
        </ul>

        <div v-show="selectedTab === 'Shipping'">
          <p>{{ shipping }}</p>
        </div>

        <div v-show="selectedTab === 'Details'">
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
        </div>
    
      </div>
    `,
  data() {
    return {
      tabs: ['Shipping', 'Details'],
      selectedTab: 'Shipping',
    };
  },
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      const varOne = 1;
      let i = this.cart.length - varOne;
      if (this.cart[i] === id) {
        this.cart.splice(i, varOne);
        i = i--;
      }
    },
  },
});
