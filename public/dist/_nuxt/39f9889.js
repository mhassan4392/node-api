(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{812:function(t,e,r){"use strict";r.r(e);r(28);var n=r(8),o={components:{BlogPosts:function(){return r.e(5).then(r.bind(null,800))}},watch:{$route:function(){this.$store.dispatch("post/fetchPosts",{axios:this.$axios,query:"&category="+this.$route.params.slug+"&status=published&limit="+this.$store.state.settings.settings.blog.reading.postLimit})}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.state.post.page=1,e.next=3,t.$store.dispatch("post/fetchPosts",{axios:t.$axios,query:"&category="+t.$route.params.slug+"&status=published&limit="+t.$store.state.settings.settings.blog.reading.postLimit});case 3:case"end":return e.stop()}}),e)})))()}},c=r(37),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("blog-posts")],1)}),[],!1,null,"0cb6ac22",null);e.default=component.exports}}]);