<template>
  <div>
    <ul v-for="project in projects" :key="project.id">
      <ProjectListItem
        :id="parseInt(project.id)"
        :link="`projects/${project.id}`"
        :title="project.title.rendered"
      />
    </ul>
  </div>
</template>

<script>
import ProjectListItem from '~/components/ProjectListItem'

export default {
  components: {
    ProjectListItem
  },

  async asyncData () {
    const projects = await fetch(
      `https://barbarian-encampment.net/axelwp/wp-json/wp/v2/projects`
    ).then((res) => res.json())

    return { projects }
  }
}
</script>
