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
        <div class="post-info">
        </div>
        <div class="post-body" v-html="project.content.rendered"></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, redirect }) {
      const projects = await fetch(
      'https://barbarian-encampment.net/axelwp/wp-json/wp/v2/projects'
    ).then((res) => res.json())

    const filteredProject = projects.find(
      (el) => {
          return (el.id).toString() === params.Project

      }
    )
    console.log(`filered project is`)
    console.log(filteredProject)
    if (filteredProject) {
      return {
        project: filteredProject,
      }
    } else {
      redirect("/")
    }
  },
}
</script>
