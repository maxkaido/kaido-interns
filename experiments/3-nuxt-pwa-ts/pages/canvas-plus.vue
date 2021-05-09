<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Canvas Plus</h1>
    </div>
  </div>
</template>

<script lang="ts">
import consola from 'consola'
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    consola.info('canvas-plus component loaded')

    const canvas = new (window as any).CanvasPlus() // eslint-disable-line

    canvas.load('waterfall.jpg', function (err: any) {
      if (err) throw err

      canvas.resize({
        width: 640,
        height: 480,
        mode: 'fit',
      })

      canvas.adjust({
        brightness: -20,
        contrast: 20,
      })

      canvas.write(
        { format: 'jpeg', quality: 90 },
        function (err: any, buf: any) {
          if (err) throw err

          // 'buf' will be a binary buffer containing final image...
          const blob = new Blob([buf], { type: 'image/jpeg' })
          const objectUrl = URL.createObjectURL(blob)

          // insert new image into DOM
          const img = new Image()
          img.src = objectUrl
          document.body.appendChild(img)
        }
      )
    })
  },
})
</script>

<style></style>
