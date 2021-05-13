<template>
  <div class="container">
    <div></div>
  </div>
</template>

<script lang="ts">
import consola from 'consola'
import Vue from 'vue'
require('../static/canvas-plus.js')
consola.info('canvas-plus component loaded')

export default Vue.extend({
  mounted() {
    const canvas = new (window as any).CanvasPlus()

    setTimeout(function () {
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
          function (err: Error, buf: Buffer) {
            if (err) throw err
            const blob = new Blob([buf], { type: 'image/jpeg' })
            const objectUrl = URL.createObjectURL(blob)

            // insert new image into DOM
            const img = new Image()
            img.src = objectUrl
            document.body.appendChild(img)
            // 'buf' will be a binary buffer containing final image...
            /* const curvedFilePath = path.resolve('kaidoteam_curved.png') */
            /* require('fs').writeFileSync(curvedFilePath, buf) */

            /* return res.sendFile(curvedFilePath) */
          }
        )
      })
    }
  },
})
</script>

<style></style>
