// app.vue
<style>
/* test*/
  button {
    color: blue;
  }
</style>

<template>
    <div class="hello">
        hello button
        <button type="button" @click="click">{{tips}}</button>      
    </div>
</template>

<script>
import request from 'superagent';
// import { Group, Cell } from 'vux';
export default  {
  name:'hello',
  data () {
    return {
      tips: 'this is a button component'
    }
  },
  methods: {
      click: function () {
          request
            .get('{{getTokenApi}}')
            .query({ action: 'edit', city: 'London' }) // query string
            .end(function(err, res){
                 alert(JSON.stringify(res.body));
            });
      }
  }

}
</script>