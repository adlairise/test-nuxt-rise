<template>
  <div>
    <div class="post-hero">
      <div class="post-image-wrapper">
        <img :src="project.acf.project_page_top_image" />
        </div>
        <div class="post-info">
          <h1>{{ project.title.rendered }}</h1>
        </div>
      </div>
      <div class="post-text">
        <div class="post-info-not-title">{{ project.acf.project_page_additional_details }}</div>
        <div class="post-body" v-html="project.content.rendered"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {}
  },
  data () {
    console.log('in data')
    console.log(this.project)
    return {
      projectData: this.project
    }
  }
}
</script>
