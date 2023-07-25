<template>
  <div class="impact">
    <div class="vid_impact">
      <h2>Impact du gaspillage alimentaires</h2>
      <iframe
        width="560"
        height="325"
        src="https://www.youtube.com/embed/QLUewSJQ3l8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="txt_impact">
      <h1 class="num" data-val="999">000</h1>
      <p>Par ans</p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed harum asperiores totam quasi
        voluptatem eveniet recusandae officiis. Veniam, illo omnis corrupti dolores magnam.
      </p>

      <h3><i class="fa-solid fa-fish fa-beat" style="color: #ff0000"></i> eweeeee mon pote</h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  component: {
    name: 'impact'
  },
  data: () => {
    return {}
  }
}

const increment = () => {
  console.log('salut in est a 1700px')
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
  // console.log(window.scrollY)
  const scrollPosition = window.scrollY
  const targetPosition = 1700

  if (scrollPosition >= targetPosition) {
    increment()
  }
})
</script>

<style lang="css" scoped>
.impact {
  width: 80%;
  height: 50vh;
  align-items: center;
  text-align: center;
  flex-direction: row;
  display: flex;
  padding: 10px;
  /* border: 1px solid black; */
  justify-content: center;
  /* background: #21242b; */
  /* border-bottom: 20px solid pink; */
  border-radius: 20px;
  margin-bottom: 100px;
}

iframe {
  border-radius: 20px;
}

.vid_impact {
  background: url(../../public/resto-v.webp);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  display: flex;
  /* min-height: 60vh; */
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.txt_impact {
  width: 65%;
}

video {
  border-radius: 20px;
}

h2 {
  color: white;
}

h1 {
  font-size: 75px;
}
</style>
