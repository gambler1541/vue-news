<template>
  <div>
    <list-item></list-item>
      <!-- <ul class='post-list'>
        <li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class='post'>
          <div class='points'>
            {{ job.points || 0 }}
          </div>
          <div class='content'>
            <p class='title'>
              <a v-bind:href="job.url">{{ job.title }}</a>
            </p>
            <small class='link-text'>
              {{ job.time_ago }} 
              by
              <a v-bind:href="job.url">{{ job.domain }}</a>
            </small>
          </div>
        </li>
      </ul> -->
    <!-- <p v-for="item in this.$store.state.jobs" v-bind:key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago}}{{ item.domain }}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import bus from '../utils/eventbus'

export default {
  components : {
      ListItem,
  },
  
  created() {
    bus.$emit('start:spinner');
    setTimeout(()=> {
      this.$store.dispatch('FETCH_JOBS')
      .then(() => {
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