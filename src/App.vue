<template>
  <a-layout id="control">
    <a-layout>
      <a-layout-sider>
        <a-menu>
          <a-menu-item>
            <span>测试</span>
          </a-menu-item>
        </a-menu>   
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'
import b from '@request/api';
export default {
  name: 'App',
  components: {
  },
  async mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
