<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from '../components/ListItem'
import bus from '../utils/eventbus'


export default {
  components:{
    ListItem,
  },
  created() {
    // 스피너
    bus.$emit('start:spinner');
    setTimeout(()=> {
      this.$store.dispatch('FETCH_NEWS')
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch( e => {
        console.log(e);
      })
    }, 3000);
  }
}
</script>

<style>
</style>