webpackJsonp([6],{BRgg:function(t,n,e){"use strict";n.b=function(){var t=s()({},o.b,{uin:0,needNewCode:1,platform:"h5"});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,o.c)},n.a=function(t){var n=s()({},o.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,o.c)};var i=e("woOf"),s=e.n(i),c=e("Gak4"),o=e("T452")},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),c=e("kvay"),o=e("NYxO"),a=e("BRgg"),r=e("T452"),u=e("PvFA"),f={data:function(){return{songs:[],rank:!0}},computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(o.c)(["topList"])),created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(a.a)(this.topList.id).then(function(n){n.code===r.a&&Object(u.d)(t._normalizeSongs(n.songlist)).then(function(n){t.songs=n})}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.data;Object(u.c)(e)&&n.push(Object(u.a)(e))}),n}},components:{MusicList:c.a}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs,rank:this.rank}})],1)},staticRenderFns:[]};var p=e("VU/8")(f,g,!1,function(t){e("wpBS")},"data-v-120bcb8f",null);n.default=p.exports},wpBS:function(t,n){}});
//# sourceMappingURL=6.064405cc10b31478fa5a.js.map