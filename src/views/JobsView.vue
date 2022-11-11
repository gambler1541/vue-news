<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
// import bus from '../utils/eventbus'
import ListMixin from '../mixins/ListMixin'

export default {
  components : {
      ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(()=> {
  //     this.$store.dispatch('FETCH_JOBS')
  //     .then(() => {
  //       bus.$emit('end:spinner');
  //     })
  //     .catch( e => {
  //       console.log(e);
  //     })
  //   }, 3000);
  // }
}
</script>

<style>

</style>