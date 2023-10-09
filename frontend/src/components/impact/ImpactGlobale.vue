<template>
  <div class="impact">
    <div class="vid_impact">
      <h2>Impact du gaspillage alimentaires</h2>
      <iframe
        width="500"
        height="315"
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

      <h3>
        <i class="fa-solid fa-fish fa-beat" style="color: #ff0000"></i> lorem ipsum dolor, sit amet
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  component: {
    name: 'impact'
  }
}

// const increment = () => {
//   let valueDisplays = document.querySelectorAll('.num')
//   let interval = 1000

//   valueDisplays.forEach((valueDisplay) => {
//     let startValue = 10
//     let dataVal = valueDisplay.getAttribute('data-val')
//     if (dataVal !== null) {
//       let endValue = parseInt('data-val')
//       let duration = Math.floor(interval / endValue)
//       let counter = setInterval(function () {
//         startValue += 1
//         valueDisplay.textContent = '' + startValue
//         if (startValue == endValue) {
//           clearInterval(counter)
//         }
//       }, duration)
//     }
//   })
// }

// window.addEventListener('scroll', function () {
//   const scrollPosition = window.scrollY
//   const targetPosition = 1700

//   if (scrollPosition >= targetPosition) {
//     increment()
//   }
// })
</script>

<style lang="css" scoped>
.impact {
  width: 80%;
  height: 50vh;
  align-items: center;
  text-align: center;
  flex-direction: row;
  display: flex;
  /* padding: 60px; */
  justify-content: center;
  margin-bottom: -30px;
}

iframe {
  border-radius: 20px;
}

.vid_impact {
  background: url(../../public/resto-v.webp);
  height: 315px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid pink;
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
