<template>
  <div class="game">
    <div class="cj"><img @click='cjShow = true' src="../assets/game_cj.png" height="114" width="108" alt=""></div>
    <div class="gl"><img @click='ruleShow = true' src="../assets/game_gl.png" height="110" width="105" alt=""></div>
    <div class="list">
      <ul>
        <li><img @click='' src="../assets/game_1.png" alt=""></li>
        <li><img @click='taskShow = true' src="../assets/game_2.png" alt=""></li>
        <li><img @click='prizeShow = true' src="../assets/game_3.png" alt=""></li>
        <li><img @click='rankShow = true' src="../assets/game_4.png" alt=""></li>
      </ul>
    </div>
    <div class="head_wrap">
      <div class="board"><img src="../assets/game_board.png" height="119" width="301" alt=""></div>
      <div class="img_wrap">
        <img src="../assets/game_head.png" height="137" width="139" alt="" class="border">
        <img src="../assets/bg.jpg" alt="" class="headimgurl vtc">
      </div>
      <p class="name textoverflow">这是名字</p>
      <p class="score">99999</p>
    </div>
    <div class="dialog">
      <div class="tag">
        <em></em>   
        <span></span>
        <p class="text">
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
          CSS气泡框实现
        </p>
      </div>
    </div>
    <!-- 活动说明/活动奖品 -->
    <div class="rule alert" v-show='ruleShow'>
      <div class="main vtc">
        <p class="close" @click='ruleShow = false'><img src="../assets/close.png" alt=""></p>
        <p class="title tc"><img src="../assets/rule_top.png" height="84" width="265" alt=""></p>
        <div class="tabs tc">
          <p class="tab_item" @click='ruleActive = index' v-for='(item,index) in ruleTabs' :key='index' :class='[index == ruleActive ? "active" : ""]'>{{item}}</p>
        </div>
        <div class="scroll content">
          <img v-show='ruleActive == 0' src="../assets/rule_action.png" height="771" width="524" alt="" class="i1">
          <img v-show='ruleActive == 1' src="../assets/rule_prize.png" height="1078" width="585" alt="" class="i2">
        </div>
      </div>
    </div>
    <!-- 积分兑换 -->
    <div class="ex alert" v-show="exShow">
      <div class="main vtc">
        <p class="close" @click='exShow = false'><img src="../assets/close3.png" alt=""></p>
        <div class="my_score">
          <img src="../assets/duihuan1.png" height="27" width="26" alt="" class="icon">
          <p>我的会员积分：1238</p>
        </div>
        <div class="btn_wrap">
          <div class="score" v-for='(item,index) in exLists' :key='index' @click='onEx(index)'><img src="../assets/duihuan2.png" height="68" width="123" alt=""></div>
        </div>
      </div>
    </div>
    <!-- 解锁称号 -->
    <div class="unlock alert" v-show='lockShow'>
      <div class="main vtc bbox tc">
        <p class="close" @click='lockShow = false'><img src="../assets/close3.png" alt=""></p>
        <p class="flash_wrap">
          <img src="../assets/flash.png" height="257" width="259" alt="" class="flash">
        </p>
        <p class="p1">解锁牧场杂务称号</p>
        <p class="p2">这是您来到牧场的第123天</p>
        <p class="p3">在欧能多牧场累积获得1000积分</p>
        <p class="p3">可以获得牧场杂务称号</p>
        <p class="rank">您是全球第13位</p>
        <div class="share_btn orange" @click='onShare'>炫耀一下</div>
      </div>
    </div>
    <!-- 填写信息 -->
    <div class="form alert" v-show='formShow'>
      <div class="main vtc bbox">
        <div class="input_wrap">
          <van-cell-group>
            <van-field
              v-model="name"
              required
              clearable
              label="姓名"
              placeholder="请输入姓名"
            />
            <van-field
              v-model="phone"
              type="tel"
              label="手机号"
              placeholder="请输入手机号"
              required
            />
            <van-field
              :value="areaData || '请选择省市区'"
              label="选择省市区"
              required
              readonly
              @click='areaShow = true'
            />
            <van-field
              v-model="address"
              type="text"
              label="手机号"
              placeholder="请输入详细地址"
              required
            />
          </van-cell-group>
        </div>
        <div class="btn orange" @click='onSubmit'>确认提交</div>
      </div>
    </div>
    <!-- 排行 -->
    <div class="rank alert" v-show='rankShow'>
      <div class="main vtc bbox">
        <p class="close" @click='rankShow = false'><img src="../assets/close.png" alt=""></p>
        <p class="title tc"><img src="../assets/rank_top.png" height="84" width="265" alt=""></p>
        <div class="tabs tc">
          <p class="tab_item" @click='rankActive = index' v-for='(item,index) in rankTabs' :key='index' :class='[index == rankActive ? "active" : ""]'>{{item}}</p>
        </div>
        <div class="top item">
          <p class="p1 bbox">微信昵称</p>
          <p class="p2 bbox">积分</p>
          <p class="p3 bbox">排名</p>
        </div>
        <div class="scroll content">
          <div class="rank_list">
            <div class="item user bbox">
              <p class="p1 bbox">
                <span class="headimgurl">
                  <img src="../assets/bg.jpg" alt="">
                </span>
                <span class="nickname textoverflow">微信昵称微信昵称微信昵称微信昵称</span>
              </p>
              <p class="p2 bbox">9999999</p>
              <p class="p3 bbox">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的奖品 -->
    <div class="my_prize alert" v-show='prizeShow'>
      <div class="main vtc bbox">
        <!-- <p class="return_home orange" @click='returnHome()'>返回首页</p> -->
        <p class="close" @click='rankShow = false'><img src="../assets/close.png" alt=""></p>
        <p class="title tc"><img src="../assets/my_prize.png"></p>
        <div class="tabs tc">
          <p class="tab_item" @click='prizeActive = index' v-for='(item,index) in prizeTabs' :key='index' :class='[index == prizeActive ? "active" : ""]'>{{item}}</p>
        </div>
        <div class="scroll content">
          <div class="prize_list">
            <div class="item user bbox">
              <div class="left"><img src="../assets/naifen.png" height="174" width="178" alt=""></div>
              <div class="right">
                <div class="t">欧能多有机奶粉400g1罐</div>
                <div class="time">中奖时间：2019年5月30日 19:23:22</div>
                <div class="address">收货地址：湖南省长沙市天心区书院南路乾城大厦1栋A座1301</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 任务管理 -->
    <div class="task alert" v-show='taskShow'>
      <div class="main vtc tc bbox">
        <p class="close" @click='taskShow = false'><img src="../assets/close3.png" alt=""></p>
        <div class="lists">
          <div class="item" v-for='(item,index) in taskLists'>
            <div class="ing" v-if="item == 1">
              <p class="p1">进行中</p>
              <p class="time">1小时20分钟</p>
            </div>
            <div class="btn start" v-if="item == 2"></div>
            <div class="btn end" v-if="item == 3"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 兑换积分 -->
    <div class="d_score alert" v-show='DScoreShow'>
      <div class="main vtc tc bbox">
        <p class="img"><img src="../assets/d_score.png" height="601" width="750" alt=""></p>
        <div class="btn_wrap">
          <div class="again orange">再想一下</div>
          <div class="yes orange">立即兑换</div>
        </div>
        <p class="closes" @click='DScoreShow = false'><img src="../assets/close2.png" height="57" width="57" alt=""></p>
      </div>
    </div>
    <!-- 中奖啦 -->
    <div class="win alert" v-show='winShow'>
      <div class="main vtc bbox tc">
        <p class="t">
          <img src="../assets/flash.png" height="257" width="259" alt="" class="flash">
          <img src="../assets/naifen.png" height="174" width="178" alt="" class="prize vtc">
        </p>
        <div class="p1">恭喜您获得本周排行榜第一名</div>
        <div class="p2">获得欧能多有机奶粉800g 1罐</div>
        <div class="p3 orange">去领取</div>
      </div>
    </div>
    <!-- 成就 -->
    <van-popup v-model="cjShow" position="right" class='cj_page '>
      <div class="content">
        <div class="main vtc tc">
          <div class="head-wrap">
            <p class="head"><img src="../assets/bg.jpg"alt=""></p>
          </div>
          <p class="nickname">撒大声地阿萨德</p>
          <p class="board">牧场包身工</p>
          <div class="lists">
            <div class="item" v-for='(item,index) in cardLists' :key='index'>
              <div class="card" :style="{'backgroundImage':'url('+item.img+')'}"></div>
              <div class="status">
                <p class="lock"></p>
                等待解锁
              </div>
              <div class="text">{{item.label}}</div>
            </div>
          </div>
          <p class="orange returnHome" @click='cjShow = false'>返回首页</p>
        </div>
      </div>
    </van-popup>
    <!-- 省市区选择 -->
    <van-popup class='pop'  position="bottom" v-model="areaShow">
      <van-area :area-list="areaList" :value="areaString" @confirm='onConfirm' @cancel='areaShow = false'/>
    </van-popup>
  </div>
</template>

<script>
import areaList from '../utils/area.js'
export default {
  data () {
    return {
      name:'',
      phone:'',
      province:'',
      city:'',
      area:'',
      address:'',
      cjShow:false,
      DScoreShow:false,
      winShow:false,
      taskShow:false,
      formShow:false,
      shareShow:false,
      lockShow:false,
      exShow:false,
      exLists:[10,20,50,100,100,100],
      ruleShow:false,
      ruleActive:0,
      ruleTabs:['活动说明','活动奖品'],
      rankShow:false,
      rankActive:0,
      rankTabs:['每周排行榜','每月排行榜','总排行榜'],
      prizeShow:false,
      prizeActive:0,
      prizeTabs:['周排行奖品','月排行奖品','总排行奖品'],
      areaList:{},
      taskLists:[3,2,3,1,1,1,1],
      areaShow:false,
      areaString:'',
      cardLists:[{
        img:require('../assets/c1.png'),
        label:'牧场包身工'
      },{
        img:require('../assets/c2.png'),
        label:'牧场杂务'
      },{
        img:require('../assets/c3.png'),
        label:'牧场长工'
      },{
        img:require('../assets/c4.png'),
        label:'牧场管理员'
      },{
        img:require('../assets/c5.png'),
        label:'明星管理员'
      },{
        img:require('../assets/c6.png'),
        label:'超级牧场主'
      },]
    }
  },
  computed:{
    areaData(){
      if (this.province) {
        return `${this.province} ${this.city} ${this.area}`
      }else return false
    }
  },
  mounted(){
  },
  activated(){
    this.areaList = areaList
  },
  methods:{
    async onSubmit(){
      if (!this.name) {
        this.$toast.fail('请填写姓名')
        return
      }
      if (!this.phone && !/^1[3|4|5|7|8][0-9]{9}$/.test(this.phone)) {
        this.$toast.fail('请填写手机号')
        return
      }
      if (!this.areaData) {
        this.$toast.fail('请选择省市区')
        return
      }
      if (!this.address) {
        this.$toast.fail('请填写详细地址')
        return
      }
    },
    onConfirm(value){//地址信息
      console.log(value)
      this.province = value[0]['name']
      this.city = value[1]['name']
      this.area = value[2]['name']
      this.areaShow = false
    },
    onShare(){
      this.lockShow = false
      this.shareShow = true
    },
    onEx(){
      //积分兑换
    }
  },
  components:{

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.cj_page{
  width: 100%;
  height: 100%;
  .returnHome{
    margin: 0 auto;
  }
  .lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 6rem;
    margin: .2rem auto;
  }
  .item{
    width: 1.77rem;
    font-size: .22rem;
    .text{
      color: #fff;
      width: 1.41rem;
      padding: .05rem 0;
      text-align: center;
      background-color: #043cb9;
      border-radius: .1rem;
      margin: .1rem auto;
    }
    .status{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lock{
      margin-right: .1rem;
      width: .26rem;
      height: .27rem;
      background-image: url(../assets/lock.png);
      background-size: .52rem .27rem;
    }
    .card{
      width: 1.77rem;
      height: 1.77rem;
      background-size: 3.54rem 1.77rem;
      background-position: left center;
    }
  }
  .item.active{
    .lock{
      background-position: right center;
    }
    .card{
      background-position: right center;
    }
  }
  .main{
    width: 100%;
    .nickname{
      color: #484848;
      font-size: .24rem;
      margin: .1rem auto;
    }
    .board{
      margin: .15rem auto;
      width: 1.74rem;
      height: .51rem;
      line-height: .41rem;
      color: #6d561f;
      font-size: .24rem;
      background-image: url(../assets/cj_board.png);
      background-size: cover;
    }
  }
  .head-wrap{
    position: relative;
    margin: 0 auto;
    width: 1.25rem;
    height: 1.25rem;
    background-image: url(../assets/cj_head.png);
    background-size: cover;
    .head{
      position: absolute;
      left: .15rem;
      top: .1rem;
      width: .96rem;
      height: .96rem;
      border-radius: .48rem;
      overflow: hidden;
      img{
        width: .96rem;
        height: .96rem;
      }
    }
  }
  .content{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url(../assets/cd_bg.jpg);
    background-size: 7.5rem 12.8rem;
    background-position: bottom center;
  }
}
.win{
  .main{
    width: 6.89rem;
    height: 7.04rem;
    background-image: url(../assets/win.png);
    background-size: cover;
    .p1{
      color: #fff;
      font-size: .32rem;
    }
    .p2{
      color: #ffe39e;
      font-size: .32rem;
    }
    .p3{
      margin: .15rem auto;
    }
    .t{
      margin: 0 auto;
      margin-top: 1.3rem;
      width: 2.59rem;
      height: 2.57rem;
      position: relative;
      .flash{
        width: 2.59rem;
        height: 2.57rem;
        animation: rotate 1s infinite linear both;
      }
      .prize{
        width: 1.78rem;
        height: 1.74rem;
      }
    }
  }
}
.d_score{
  .img{
    img{
      width: 7.5rem;
      height: 6.01rem;
    }
  }
  .closes{
    padding: .2rem;
    margin-top: .4rem;
    img{
      width: .57rem;
      height: .57rem;
    }
  }
  .btn_wrap{
    .orange{
      margin: 0 .2rem;
      display: inline-block;

    }
  }
}
.task{
  .lists{
    position: absolute;
    left: 4rem;
    top: 1.72rem;
    .item{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.02rem;
      width: 1.9rem;
      margin-top: .17rem;
      .p1{
        font-size: .24rem;
        color: #eed188;
      } 
      .time{
        font-size: .22rem;
        color: #fff;
      }
    }
  }
  .btn{
    width: 1.29rem;
    height: .5rem;
    background-image: url(../assets/b.png);
    background-size: 2.58rem .5rem;
  }
  .btn.start{
    background-position: right center;
  }
  .close{
    top: .65rem;
  }
  .main{
    top: 46%;
    width: 6.47rem;
    height: 10.34rem;
    background-image: url(../assets/rask.png);
    background-size: cover;
  }
}
.my_prize{
  .left{
    img{
      width: 1.78rem;
      height: 1.74rem;
    }
  }
  .right{
    font-size: .24rem;
    color: #696969;
    .t{
      color:#043cb9;
      font-weight: bold;
    }
    .time{
      padding: .1rem 0;
    }
    .address{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      flex-direction: column;
    }
  }
  .return_home{
    position: absolute;
    left: 2rem;
    bottom: -.9rem;
  }
  .content{
    margin-top: .2rem;
    height: 6rem;
  }
  .user{
    font-size: .24rem;
    margin-bottom: .22rem;
    .p1{
      width: 49%;
      display: flex;
      padding-left: .1rem;
      .nickname{
        width: 70%;
        display: inline-block;

      }
      .headimgurl{
        display: inline-block;
        width: .36rem;
        height: .36rem;
        border-radius: .2rem;
        border:.02rem solid #ccc;
        overflow: hidden;
        margin-right: .1rem;
        img{
          width: .36rem;
          height: .36rem;
          border-radius: .18rem;
        }
      }
    }
    .p2{
      width: 20%;
      text-align: center;
      margin-right: .4rem;
    }
    .p3{
      text-align: center;
      width: 20%;
    }
  }
  .user:nth-child(even){
    background-color: #f9fbff;
  }
  .item{
    display: flex;
    border-radius: .27rem;
    align-items: center;
    padding: .15rem 0;
    
  }
  .main{
    width: 6.47rem;
    height: 7.92rem;
    background-image: url(../assets/content_bg.png);
    background-size: cover;
    padding: 0 .26rem;
    padding-top: .7rem; 
    .tabs{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .tab_item{
      width: 30%;
      padding: 0;
      margin: 0;
    }
  }
  .title{
    width: 100%;
    position: absolute;
    left: 0;
    top: -.3rem;
    img{
      width: 2.64rem;
      height: .83rem;
    }
  }
}
.rank{
  .content{
    margin-top: .2rem;
    height: 5.3rem;
  }
  .user{
    font-size: .24rem;
    margin-bottom: .22rem;
    .p1{
      width: 49%;
      display: flex;
      padding-left: .1rem;
      .nickname{
        width: 70%;
        display: inline-block;

      }
      .headimgurl{
        display: inline-block;
        width: .36rem;
        height: .36rem;
        border-radius: .2rem;
        border:.02rem solid #ccc;
        overflow: hidden;
        margin-right: .1rem;
        img{
          width: .36rem;
          height: .36rem;
          border-radius: .18rem;
        }
      }
    }
    .p2{
      width: 20%;
      text-align: center;
      margin-right: .4rem;
    }
    .p3{
      text-align: center;
      width: 20%;
    }
  }
  .user:nth-child(even){
    background-color: #f9fbff;
  }
  .item{
    height: .54rem;
    display: flex;
    border-radius: .27rem;
    align-items: center;
    
  }
  .top{
    background-color: #ecf2ff;
    color: #043cb9;
    font-size: .26rem;
    margin-top: .2rem;
    .p1{
      padding-left: .5rem;
      flex-grow: 2;
    }
    .p2{
      flex-grow: 1;
      padding-left: .5rem;

    }
    .p3{
      padding-left: .5rem;
      flex-grow: 1;

    }
  }
  .main{
    width: 6.47rem;
    height: 7.92rem;
    background-image: url(../assets/content_bg.png);
    background-size: cover;
    padding: 0 .26rem;
    padding-top: .7rem; 
    .tabs{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .tab_item{
      width: 30%;
      padding: 0;
      margin: 0;
    }
  }
  .title{
    width: 100%;
    position: absolute;
    left: 0;
    top: -.9rem;
    img{
      width: 2.07rem;
      height: 1.33rem;
    }
  }
}
.form{
  .main{
    width: 6.47rem;
    height: 7.47rem;
    background-image: url(../assets/win_form.png);
    background-size: cover;
    padding-top: 1.8rem;
    .input_wrap{
      margin: 0 auto;
      width: 90%;
    }
    .btn{
      margin: 0 auto;
    }
  }
}
.unlock{
  .main{
    width: 5.99rem;
    height: 7.42rem;
    background-image: url(../assets/jiesuo.png);
    background-size: cover;
    padding-top: .7rem;
    .p1{
      color: #ffe39e;
      font-size: .34rem;
      font-weight: bold;
    }
    .p2{
      font-size: .28rem;
      color: #fff;
      margin-bottom: .3rem;
    }
    .p3{
      font-size: .22rem;
      color: rgba(255,255,255,.5);
    }
    .rank{
      color: #ffe39e;
      font-size: .3rem;
      margin: 0 auto;
      margin-top: .2rem;
      width: 3.6rem;
      height: .62rem;
      line-height: .62rem;
      border-radius: .15rem;
      border: .02rem dashed rgba(255,255,255,.5);
    }
    .share_btn{
      margin: 0 auto;
    }
    .flash_wrap{
      width: 2.59rem;
      margin: 0 auto;
      .flash{
        width: 2.59rem;
        height: 2.57rem;
        animation: rotate 1s infinite linear ;
      }
    }
    .close{
      top:-.1rem; 
    }
  }
}
.ex{
  .main{
    width: 6.47rem;
    height: 9.15rem;
    background-image: url(../assets/duihuan3.png);
    background-size: cover;
    .my_score{
      width: 4rem;
      margin: 1.5rem auto;
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      height: .52rem;
      background-color: #002b89;
      border-radius: .26rem;
      .icon{
        width: .26rem;
        height: .27rem;
        margin-right: .1rem;
      }
      p{
        color: #fff;
        font-size: .26rem;
      }
    }
    .btn_wrap{
      position: absolute;
      left: 4.5rem;
      top: 2.28rem;
      .score{
        margin-bottom: .36rem;
        img{
          width: 1.23rem;
          height: .68rem;
        }
      }
    }
    .close{
      position: absolute;
      top:.4rem; 
    }
  }
}
.rule{
  .content{
    text-align: center;
    position: relative;
    height: 6rem;
    margin-top: .3rem;
    .i1{
      width: 5.24rem;
      height: 7.71rem;
    }
    .i2{
      width: 5.85rem;
      height: 10.78rem;
    }
  }
  .tabs{
    margin-top: .6rem;
  }
  .title{
    width: 100%;
    position: absolute;
    left: 0;
    top: -.45rem;
    img{
      width: 2.65rem;
      height: .84rem;
    }
  }
  .main{
    width: 6.47rem;
    height: 7.92rem;
    background-image: url(../assets/content_bg.png);
    background-size: cover;
  
  }
}
.tab_item{
  display: inline-block;
  margin: 0 .2rem;
  height: .52rem;
  line-height: .52rem;
  color: #043cb9;
  text-align: center;
  padding: 0 .3rem;
  border-radius: .26rem;
  font-size: .26rem;
  border:.02rem solid #043cb9;
}
.tab_item.active{
  background-color: #043cb9;
  color: #fff;
}
.close{
  position: absolute;
  right: -.35rem;
  top: -.35rem;
  padding: .2rem;
  z-index: 50;
  img{
    width: .53rem;
    height: .53rem;
  }
}
.head_wrap{
  position: absolute;
  left: .9rem;
  top: .9rem;
  .name{
    font-size: .22rem;
    color: #fff;
    height: .35rem;
    line-height: .35rem;
    text-align: center;
    width: 1.3rem;
    position: absolute;
    left: 1.25rem;
    top: .16rem;
  }
  .score{
    font-size: .22rem;
    color: #fff;
    height: .32rem;
    line-height: .32rem;
    position: absolute;
    left: 1.65rem;
    top: .65rem;
  }
  .img_wrap{
    width: 1.39rem;
    height: 1.37rem;
    position: absolute;
    left: -.4rem;
    top: -.1rem;
    .border{
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      width: 1.39rem;
      height: 1.37rem;
    } 
    .headimgurl{
      width: 1.1rem;
      height: 1.1rem;
      border-radius: .55rem;
    }
  }
  .board{
    img{
      width: 3.04rem;
      height: 1.19rem;
    }
  }
}
.list{
  position: absolute;
  top: .9rem;
  right: .5rem;
  li{
    animation: scaleX .5s infinite alternate linear;
    margin-bottom: .6rem;
    img{
      width: 1.2rem;
    }
  }
}
.game{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/game_bg.jpg);
  background-size: 7.5rem 12.8rem;
  background-position: bottom center;
  .gl{
    position: absolute;
    left: .5rem;
    bottom: .5rem;
    animation: scaleX .5s infinite alternate linear;
    img{
      width: 1.05rem;
      height: 1.1rem;
    }
  }
  .cj{
    position: absolute;
    left: .5rem;
    bottom: 2rem;
    animation: scaleX .5s infinite alternate linear;
    img{
      width: 1.08rem;
      height: 1.14rem;
    }
  }
}
</style>
