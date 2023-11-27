<template>
  <div class="count_contain" id="impact">
    <h1>PLUS D’1/3 DE LA NOURRITURE PRODUITE EST GASPILLÉE</h1>
    <div class="story">
      <div class="block_story">
        <img src="../../../public/HandSprout.cf2becc6.svg" alt="" />
        <h2>Environnemental</h2>
        <p>
          Le gaspillage alimentaire représente 10% des émissions de gaz à effet de serre (plus que
          le secteur de l’aérien).
        </p>
      </div>
      <div class="block_story">
        <img src="../../../public/SadSmiley.0dc15123.svg" alt="" />
        <h2>Social</h2>
        <p>
          2,5 milliards de tonnes de nourriture sont jetées chaque année, alors que 828 millions de
          personnes ont faim chaque jour.
        </p>
      </div>
      <div class="block_story">
        <img src="../../../public/DollarBill.a8705b18.svg" alt="" />
        <h2>Economique</h2>
        <p>Le gaspillage alimentaire coûte 1 200 milliard de $ par an.</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <span class="num" data-val="999">000</span>
        <span class="people">M+</span>
        <p>Personnes vivants sous le seuil de pauvreté en millions</p>
      </div>
      <div class="container">
        <span class="num" data-val="999">000</span>
        <span class="people">M+</span>
        <p>Valeur commerciale estimée en euros par ans en million</p>
      </div>
      <div class="container">
        <span class="num" data-val="999">000</span>
        <span class="people">M+</span>
        <p>10 millions de tonnes de nourriture perdues ou gaspillées.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  component: {
    name: 'MyCount'
  }
}

const increment = () => {
  let valueDisplays = document.querySelectorAll('.num')
  let interval = 4000

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 10
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
      startValue += 1
      valueDisplay.textContent = startValue
      if (startValue == endValue) {
        clearInterval(counter)
      }
    }, duration)
  })
}

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY
  const targetPosition = 1700

  if (scrollPosition >= targetPosition) {
    increment()
  }
})
</script>

<style scoped>
.count_contain {
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
img {
  width: 200px;
}
.impact_txt {
  color: black;
}

video {
  border-radius: 10px;
}
.limit {
  background: black;
}

button {
  width: 50%;
  height: 4vh;
  background: black;
  border-radius: 30px;
  color: white;
}

.people {
  color: white;
  font-weight: bold;
  font-size: 19px;
}

.inline {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 30px;
  gap: 55px;
}

iframe {
  border-radius: 15px;
  margin-left: 33px;
}

h1 {
  text-align: center;
  font-weight: 900 bold;
}
.wrapper {
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  min-height: 50vh;
  width: 100%;
  display: flex;
}

.container {
  width: 58vmin;
  height: 36vmin;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  border-radius: 0.5em;
  background: url(../../../public/login.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  border-bottom: 10px solid black;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
}

.story {
  width: 80%;
  min-height: 30vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 15px;
  justify-content: center;
}

.story > .block_story > p {
  color: black;
}

.block_story {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

span.num {
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 3em;
  box-shadow: 0px 0px 20px -1px rgba(0, 0, 0, 0.75);
}

p {
  color: white;
  font-size: 1em;
  text-align: center;
  font-weight: 400;
}

h3 {
  padding-top: 20px;
}

.my_vid {
  width: 80vw;
  display: flex;
  border-radius: 30px;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
}

@media screen and (max-width: 1024px) {
  .wrapper {
    width: 85vw;
  }

  .container {
    height: 26vmin;
    width: 26vmin;
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    width: 90vw;
    flex-wrap: wrap;
    gap: 35px;
  }

  .container {
    height: 35vmin;
    width: calc(50% - 40px);
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  .wrapper {
    gap: 15px;
  }

  .container {
    width: 100%;
    height: 25vmin;
    font-size: 8px;
  }
}
@media screen and (max-width: 670px) {
  .story {
    width: 85vw;
  }

  .block_story {
    height: 50vmin;
    width: 26vmin;
    font-size: 12px;
  }
}
@media screen and (max-width: 580px) {
  .story {
    width: 90vw;
    flex-wrap: wrap;
    gap: 30px;
  }

  .block_story {
    height: 80vmin;
    width: calc(50% - 40px);
    font-size: 14px;
  }
}

.other {
  width: 90vw;
  border-radius: 10px;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#count {
  color: black;
  font-size: 150px;
}
</style>
