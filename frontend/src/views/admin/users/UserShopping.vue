<template>
  <div class="user_shop">
    <!-- <div class="house" id="house" data-rooms="6">
      <div class="house-wings" data-flip-key="wings">
        <div class="house-left-wing">
          <div class="house-window"></div>
          <div class="house-window"></div>
          <div class="house-sparkle">
            <div class="house-sparkle-dots"></div>
          </div>
        </div>
        <div class="house-right-wing">
          <div class="house-window"></div>
          <div class="house-window"></div>
          <div class="house-sparkle">
            <div class="house-sparkle-dots"></div>
          </div>
        </div>
        <div class="house-roof">
          <div class="house-ledge"></div>
        </div>
      </div>
      <div class="house-front" data-flip-key="front">
        <div class="house-chimney"></div>
        <div class="house-facade"></div>
        <div class="house-window">
          <div class="house-sparkle">
            <div class="house-sparkle-dots"></div>
          </div>
        </div>
        <div class="house-doorway">
          <div class="house-stairs"></div>
          <div class="house-door"></div>
        </div>
        <div class="house-gable">
          <div class="house-roof">
            <div class="house-ledge"></div>
          </div>
        </div>
      </div>
    </div>

    <label class="house-label" for="range" id="label">Rooms</label>
    <input type="range" min="3" max="6" step="1" value="6" id="range" />
    <h1>scss mon pote</h1> -->
  </div>
</template>

<script>
// import { fromEvent } from 'rxjs'
// const { fromEvent } = rxjs
// import {map, startWith} from 'rxjs.operators'
// const { map, startWith } = rxjs.operators

// const house = document.querySelector('#house')
// const range = document.querySelector('#range')
// const label = document.querySelector('#label')

// const f = new Flipping()
// const update = f.wrap((rooms) => {
//   const prevRooms = house.getAttribute('data-rooms')
//   house.setAttribute('data-prev-rooms', prevRooms)
//   house.setAttribute('data-rooms', rooms)

//   label.setAttribute('data-prev-rooms', prevRooms)
//   label.setAttribute('data-rooms', rooms)
//   label.setAttribute('data-rooms-delta', rooms - prevRooms)
// })

// const range$ = fromEvent(range, 'input').pipe(
//   map((e) => e.target.value),
//   startWith(6)
// )

// range$.subscribe(update)
</script>

<style scoped lang="scss">
@import './house.scss';

.user_shop {
  width: 100%;
  height: 90vh;
}
h1 {
  color: $blue;
}
</style>
