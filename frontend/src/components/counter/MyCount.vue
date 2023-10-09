<template>
  <div class="wrapper" id="impact">
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
  background: #21242b;
  border-bottom: 10px solid pink;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
}

span.num {
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 3em;
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
    gap: 30px;
  }

  .container {
    height: 30vmin;
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
