<template>
    <tool-bar></tool-bar>
    <!-- url이 /news 면 <NewsView></NewsView> -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner-event :loading="this.loadingStatus"></spinner-event>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import SpinnerEvent from './components/SpinnerEvent.vue'
import bus from './utils/eventbus'

export default{
  components: {
    ToolBar,
    SpinnerEvent,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },

  beforeDestory() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);    
  }
}

</script>  

<style>
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: #34495e;
    text-decoration: none;
  }

  a:hover {
    color: #42b883;
    text-decoration: underline;
  }

  a.router-link-exact-active {
    text-decoration: underline;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
