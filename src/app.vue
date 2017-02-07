<template>
    <div id="app">
        <router-view></router-view>
        <div class="test">111111</div>
        {{msg}}
        <mt-button @click.native="startHacking">Let's do it</mt-button>
    </div>
</template>
<script>
    import { Indicator } from 'mint-ui';
    export default {
        name: 'App',
        data() {
            return {
                msg: 'Hello App!'
            }
        },
        methods: {
            startHacking() {
                Indicator.open();
            }
        }
    }
</script>

<style>
/* test*/
  button {
    color: blue;
  }
</style>