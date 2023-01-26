<template>
  <footer>
    <div class="footer-parts">
      <div class="About">
        <ul>
          <li>About</li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Careers</a></li>
        </ul>
      </div>
      <div class="Help">
        <ul>
          <li>Help</li>
          <li><a href="">Shipping</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Cancellation&amp; <br> Return</a> </li>
        </ul>
      </div>
      <div class="Social">
        <ul>
          <li>Social</li>
          <li><a href="">Facebook</a> </li>
          <li><a href="">Instagram</a> </li>
          <li><a href="">Twitter</a> </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>&copy;2023 copyright to Something</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent.vue",
  data() {
    return {};
  },
};
</script>

<style scoped>
footer {
  display: flex;
  height: 150px;
  margin-top: 30px;
  flex-direction: column;
}

div {
  
  float: left;
}

.About {
  margin-left: 250px;
}

.Help {
  margin: 0 250px;
}

/* .Social {
  margin-left: 250px;
} */

ul {
  list-style: none;
  font-size: 16px;
}

a {
    text-decoration: none;
    color: none;
}

li {
    margin-bottom: 17px;
}

li:hover {
    color: #1e6ee6;
}

.footer-parts {
    margin-bottom: 30px;
}

.copyright {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
}
</style>
