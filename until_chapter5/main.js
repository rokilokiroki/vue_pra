// Vue.component('my-component',{
//   template: '<comp-child></comp-child>'
// })

// Vue.component('comp-child', {
//   template: '<li>{{name}} HP.{{hp}}\
//   <button v-on:click="doAttack">攻撃する</button></li>',
//   props: {
//     id: Number,
//     name: String,
//     hp: Number
//   },
//   methods: {
//     doAttack: function() {
//       this.$emit('attack', this.id)
//     }
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     list: [
//       { id: 1, name: 'スライム', hp: 100 },
//       { id: 2, name: 'ゴブリン', hp: 200 },
//       { id: 3, name: 'ドラゴン', hp: 500 }
//     ]
//   },methods:{
//     // parentsMethod: function(){
//     //   alert('イベントをキャッチ')
//     // }
//     handleAttack: function(id) {
//       var item = this.list.find(function(el){
//         return el.id === id
//       })
//       if (item !== undefined && item.hp > 0) item.hp -= 10
//     }
//   }
// })
// Vue.component('my-component', {
//   template: '<comp-child ref="child"></comp-child>'
// })

// Vue.component('comp-child', {
//   template: '<div>...</div>',
//   created: function() {
//     this.$on('open', function() {
//       console.log('a');
//     })
//   }
// })
Vue.component('my-component', {
  template: '<comp-child></comp-child>'
})

Vue.component('comp-child', {
  template: '\
  <section class="comp-child">\
  <header>\
    <slot name="header">デフォルトタイトル</slot>\
  </header>\
  <div class="content">\
    <slot>デフォルトコンテンツ</slot>\
  </div>\
  <slot name="footer">\
    フッター\
  </slot>\
</section>'
})
new Vue({
  el: '#app',
  methods: {
    handleClick: function() {
      this.$refs.child.$emit('open')
    }
  }
})
