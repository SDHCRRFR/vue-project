<template>
  <div class="mon-footer">
    <footer>
      <ul class="social_icon">
        <li>
          <a href="#"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-snapchat" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
        </li>
      </ul>
      <ul class="menu">
        <router-link to="/">
          <li><a href="#">Accueil</a></li>
        </router-link>
        <router-link to="/signup">
          <li><a href="#">Inscription</a></li>
        </router-link>
        <router-link to="/login">
          <li><a href="#">Connexion</a></li>
        </router-link>
        <router-link to="/management">
          <li><a href="#">A propos</a></li>
        </router-link>
        <router-link to="/management/help">
          <li><a href="#">Contact</a></li>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped>
footer {
  position: relative;
  width: 100%;
  background: #1d2125;
  min-height: 200px;
  /* padding: 20px 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

footer .social_icon,
footer .menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

footer .social_icon li,
footer .menu li {
  list-style: none;
}

footer .social_icon li a {
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}

footer .social_icon li a:hover {
  transform: translateY(-10px);
}

footer .menu li a {
  font-size: 1.2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  text-decoration: none;
  opacity: 0.75;
}

footer .menu li a:hover {
  opacity: 1;
}

/* footer p {
  color: #fff;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1.1em;
} */

.mon-footer {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
