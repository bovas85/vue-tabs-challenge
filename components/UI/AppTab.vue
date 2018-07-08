<template>
  <div class="app-tab">
      <MediaBox class='media-box' v-for='(image, index) in content.images' :key='index'>
        <img width="200" height="200" :src='image.src' :alt='image.alt' />
        <h2>{{image.alt}}</h2>
        <p>{{image.caption}}</p>
        <Link class='link' v-if='image && image.link' :href='image.link.href'>
          {{image.link.title}}
        </Link>
      </MediaBox>
    </div>
</template>

<script>
import MediaBox from '@/components/Styled/MediaBox'
import Link from '@/components/Styled/Link'

export default {
  name: 'AppTab',
  props: {
    content: {
      type: Object
    }
  },
  components: {
    MediaBox,
    Link
  }
}
</script>
