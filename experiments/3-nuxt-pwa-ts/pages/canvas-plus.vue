<template>
  <div>
    <div
      class="min-h-screen flex justify-center items-center text-center mx-auto"
    >
      <div class="row">
        <div class="max-w-sm mx-auto p-4 bg-white rounded-lg">
          <div id="logo">
            <img
              src="/kaidoteam.png"
              alt=""
              style="position: relative; width: 100%"
            />
            <img
              alt=""
              v-bind:src="imgUrl"
              v-bind:class="{ fadeIn: fadeIn, fadeOut: !fadeIn }"
            />
          </div>
        </div>
        <div class="text-6xl font-light">kaido.team</div>
        <div class="links">
          <a
            href="https://t.me/kaidoteambot"
            target="_blank"
            rel="noopener noreferrer"
            class="button--blue"
          >
            Start the bot
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import consola from 'consola'
import Vue from 'vue'
require('../static/canvas-plus.js')
consola.info('canvas-plus component loaded')

export default Vue.extend({
  data() {
    return {
      imgUrl: '/kaidoteam.png',
      fadeIn: true,
    }
  },
  mounted() {
    const canvas = new (window as any).CanvasPlus()

    setInterval(function () {
      kaido()
    }, 10000)
    const kaido = () => {
      canvas.load('/kaidoteam.png', (err: Error) => {
        if (err) throw err
        canvas.resize({
          width: 640,
          height: 640,
          mode: 'fit',
        })

        const randomNumber = (number: number) => {
          return Math.round(Math.random() * number)
        }
        const rnd255 = function () {
          const n = randomNumber(255)
          // console.log(n);
          return n
        }

        canvas.curves({
          red: [0, rnd255(), rnd255(), rnd255(), rnd255(), rnd255(), 255],
          green: [0, rnd255(), rnd255(), rnd255(), rnd255(), rnd255(), 255],
          blue: [0, rnd255(), rnd255(), rnd255(), rnd255(), rnd255(), 255],
          alpha: [0, rnd255(), rnd255(), rnd255(), rnd255(), rnd255(), 255],
        })

        canvas.write(
          { format: 'png', quality: 90 },
          (err: Error, buf: Buffer) => {
            if (err) throw err
            const blob = new Blob([buf], { type: 'image/jpeg' })
            const objectUrl = URL.createObjectURL(blob)
            this.imgUrl = objectUrl
            this.fadeIn = !this.fadeIn
          }
        )
      })
    }
  },
})
</script>

<style>
#logo {
  position: relative;
}

img.fadeOut {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: -1;
}

img.fadeIn {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 10s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.button--blue {
  display: inline-block;
  /* font-size: 150%; */
  border-radius: 4px;
  border: 1px solid #1fa3b7;
  color: #1fa3b7;
  text-decoration: none;
  padding: 10px 30px;
}

.button--blue:hover {
  color: #fff;
  background-color: #1fa3b7;
}
</style>
