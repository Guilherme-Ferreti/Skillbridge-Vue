<script setup lang="ts">
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';

const props = withDefaults(
  defineProps<{
    src: string;
    poster: string;
    controls?: boolean;
    aspectRatio?: string;
    loop?: boolean;
  }>(),
  {
    controls: true,
    aspectRatio: '16:9',
    loop: false,
  },
);

const videoEl = useTemplateRef<HTMLVideoElement>('video-player');

let player: Player | null = null;

onMounted(() => {
  if (videoEl.value) {
    player = videojs(videoEl.value, {
      controls: props.controls,
      loop: props.loop,
      poster: props.poster,
      sources: [
        {
          src: props.src,
          type: 'video/mp4',
        },
      ],
      aspectRatio: props.aspectRatio,
    });
  }
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
    player = null;
  }
});
</script>

<template>
  <div class="video-player">
    <video
      ref="video-player"
      class="video-js"
    ></video>
  </div>
</template>

<style lang="scss">
.video-player {
  border-radius: $radius--xl;
  width: 100%;
  max-width: 65rem;
  overflow: hidden;

  .video-js .vjs-big-play-button {
    margin-left: -1em;
    border: 0.18em solid rgba($color-white, 0.3);
    border-radius: $radius--full;
    background-color: rgba($color-white, 0.2);
    width: 2em;
    height: 2em;
    line-height: 1.7em;
  }

  .video-js:hover .vjs-big-play-button,
  .video-js .vjs-big-play-button:focus {
    border: 0.18em solid rgba($color-white, 0.5);
    background-color: rgba($color-white, 0.4);
  }
}
</style>
