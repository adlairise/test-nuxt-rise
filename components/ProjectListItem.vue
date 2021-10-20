<template>
  <NuxtLink :to="`${itemLink}`">
    <li>
      <ProjectListItemStyle>
        {{ itemTitle }}
      </ProjectListItemStyle>
    </li>
  </NuxtLink>
</template>
<script>
import ProjectListItemStyle from '~/styles/components/ProjectListItem'

export default {
  components: {
    ProjectListItemStyle
  },
  props: {
    link: {},
    title: {},
    id: {}
  },
  data () {
    return {
      itemLink: this.link,
      itemTitle: this.title
    }
  }
}
</script>
