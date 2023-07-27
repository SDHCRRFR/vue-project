<template>
  <div class="subscribe">
    <div class="subscribe_container">
      <h1>Êtes-vous un restaurateur ?</h1>
      <div class="subscribe_block">
        <div class="subscribe_img">
          <img src="../../public/resto-I.jpeg" alt="" />
        </div>
        <div class="subscribe_txt">
          <h2>Inscrivez votre restaurant</h2>
          <p>Donnez-nous plus de détails, et nous vous contacterons le plus rapidement possible.</p>
          <button type="button">Voir plus d'information</button>
        </div>
      </div>
      <p class="credential">
        Table de Coeur SAS et le restaurant réalisent des traitements de données personnelles pour
        la gestion et le suivi des réservations et pour la gestion de leurs relations clients.
        Conformément à la réglementation, vous bénéficiez d’un droit d’accès, de rectification,
        d’effacement, de portabilité de vos données et d’un droit d’opposition au traitement de vos
        données, notamment à des fins de marketing. Ces droits s’exercent ici ou auprès du
        restaurant. Vous pouvez faire une réclamation auprès d’une autorité de protection des
        données personnelles (en France, la Cnil) si vous estimez que le traitement de vos données
        n’est pas effectué conformément à la réglementation. Pour en savoir plus, consultez la
        déclaration relative à la confidentialité et aux cookies de Table de coeur.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.subscribe {
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

h1 {
  font-size: 28px;
  padding-right: 64%;
}

.subscribe_container {
  height: 80vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 520px;
  height: 100%;
}

.subscribe_block {
  display: flex;
  flex-direction: row;
  width: 95%;
  min-height: 30vh;
  border: 1px solid rgb(233, 233, 233);
}

.subscribe_txt {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  justify-content: center;
}

button {
  background: white;
  border: 1px solid black;
  width: 200px;
  height: 5vh;
}
.credential {
  padding-top: 100px;
  font-size: 12px;
  font-weight: 300;
  width: 95%;
}
</style>
