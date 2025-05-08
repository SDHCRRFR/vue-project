<template>
  <div class="animated fadeInLeft">
    <h2>Table coup de coeur sur Instagram !</h2>
    <div class="container">
      <div v-for="item in items" :key="item.id" class="my_media">
        <div class="media-wrapper">
          <iframe
            :src="item.video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <button type="submit">
      <a href="https://www.instagram.com/" target="_blank">Instagram</a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data: () => {
    return {
      items: [
        {
          id: 1,
          video: 'https://www.youtube.com/embed/EthT1wgI4UI?si=-yea7A_x9tvOlHMX', // Remplace par une vraie URL
          caption: 'Vidéo 1'
        },
        {
          id: 2,
          video: 'https://www.youtube.com/embed/EthT1wgI4UI?si=-yea7A_x9tvOlHMX', // Remplace par une vraie URL
          caption: 'Vidéo 2'
        },
        {
          id: 3,
          video: 'https://www.youtube.com/embed/EthT1wgI4UI?si=-yea7A_x9tvOlHMX', // Remplace par une vraie URL
          caption: 'Vidéo 3'
        },
        {
          id: 4,
          video: 'https://www.youtube.com/embed/EthT1wgI4UI?si=-yea7A_x9tvOlHMX', // Remplace par une vraie URL
          caption: 'Vidéo 3'
        },
        {
          id: 5,
          video: 'https://www.youtube.com/embed/EthT1wgI4UI?si=-yea7A_x9tvOlHMX', // Remplace par une vraie URL
          caption: 'Vidéo 3'
        },
        {
          id: 6,
          video: 'https://www.youtube.com/embed/EthT1wgI4UI?si=-yea7A_x9tvOlHMX', // Remplace par une vraie URL
          caption: 'Vidéo 4'
        }
      ]
    }
  }
}
</script>

<style scoped>
.animated {
  background: rgba(247, 227, 227, 0.911);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  width: 100vw;
  padding: 20px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1250px;
  padding: 20px;
}

h2 {
  color: black;
  text-align: center;
}

.my_media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.media-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

button a {
  color: white;
  text-decoration: none;
}

button:hover {
  background: white;
  color: black;
}
</style>
