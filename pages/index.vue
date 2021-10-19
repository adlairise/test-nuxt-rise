<template>
  <div>
    <ul v-for="project in projects" :key="project.id">
      <NuxtLink :to="`projects/${project.id}`">
        <li>{{ project.title.rendered }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const projects = await fetch(
      'https://barbarian-encampment.net/axelwp/wp-json/wp/v2/projects'
    ).then((res) => res.json())


    return { projects }
  }
}
</script>
