<template>
  <div>
    <list-item></list-item>
    <!-- <ul class='post-list'>
      <li v-for="item in this.$store.state.ask" v-bind:key="item.id" class='post'>
        <div class='points'>
          {{ item.points }}
        </div>
        <div class='content'>
          <p class='title'>
            <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class='link-text'>
            by
            <router-link v-bind:to="`/user/${item.user}`" class='link-text'>{{ item.user }}</router-link>
            {{ item.time_ago }} 
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
// import bus from '../utils/eventbus'
// import bus from '../utils/eventbus'
import ListMixin from '../mixins/ListMixin'

export default {
  components : {
    ListItem,
  },
  // mounted() {
  //   // 인스턴스가 화면에 불러와졌을 때 실행되는 life-cycle hook
  //   bus.$emit('end:spinner');
  // },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(()=> {
  //   this.$store.dispatch('FETCH_ASK')
  //     .then(() => {
  //       console.log('fetched');
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