<template>
  <div class="footer_default">
    <footer>
     <p>Fait par Said Houdjadji en vuejs & nodejs + sql </p>
    </footer>
  </div>
</template>

<script>
export default {
    name: "FooterDefault",

}
</script>

<style scoped>
.footer_default {
    width: 100%;
    height: 10vh;
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}

footer {
    width: 70vw;
    display: flex;
    text-align: center;
    justify-content: center;

}

p {
 font-size: 15px, bold;
 color: black;
 font-family: Arial, Helvetica, sans-serif;

}
</style>