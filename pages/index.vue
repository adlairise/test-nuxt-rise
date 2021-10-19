<template>
  <div>
    <ul v-for="project in projects" :key="project.id">
      <ProjectListItem :link="`projects/${project.id}`"
                       :title="project.title.rendered"
                       :id="parseInt(project.id)"/>
    </ul>
  </div>
</template>

<script>
import ProjectListItem from '~/components/ProjectListItem'

export default {
  async asyncData() {
    const projects = await fetch(
      'https://barbarian-encampment.net/axelwp/wp-json/wp/v2/projects'
    ).then((res) => res.json())


    return { projects }
  },

  components: {
    ProjectListItem
  }
}
</script>
