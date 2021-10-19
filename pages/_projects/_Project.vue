<template>
    <div>
        <ProjectContent :project="project" />
    </div>
</template>
<script>
import ProjectContent from '~/components/ProjectContent'

export default {

  components: {
    ProjectContent
  },

  async asyncData ({ params, redirect }) {
    const projects = await fetch(
      'https://barbarian-encampment.net/axelwp/wp-json/wp/v2/projects'
    ).then((res) => { res.json() })

    const filteredProject = projects.find(
      (el) => {
        return (el.id).toString() === params.Project
      }
    )
    if (filteredProject) {
      return {
        project: filteredProject
      }
    } else {
      redirect('/')
    }
  }
}
</script>
