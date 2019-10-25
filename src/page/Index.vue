<template>
  <div class="home page">
    <img src="../assets/logo.png" height="25" width="225" class='logo' alt="">
    <div class="step1" @click='step1Click()' v-show='status==1'>
      <div class="title">
        <img src="../assets/t1.png" height="242" width="750" alt="" class="i1">
        <img src="../assets/t2.png" height="209" width="143" alt="" class="i2">
      </div>
      <div class="main">
        <p class="p1 tc"><img src="../assets/t3.png" height="34" width="342" alt=""></p>
        <p class="p2 tc"><img src="../assets/t4.png" height="166" width="134" alt=""></p>
        <p class="p3 tc"><img src="../assets/t5.png" height="22" width="249" alt=""></p>
      </div>
      <p class="cow"><img src="../assets/home_cow.png" height="160" width="113" alt=""></p>
    </div>
    <div class="step2" v-show='status==2'>
      <div class="content">
        <p class="p1 tc"><img src="../assets/step2_title.png" height="196" width="365" alt=""></p>
        <div class="p2 tc">
          <img src="../assets/step2_main.png" height="536" width="526" class="img">
          <p class="regist orange" @click='step2Click()'>去认证</p>
        </div>
      </div>
    </div>
    <div class="step3" v-show='status==3'>
      <div class="content tc">
        <p class="p1"><img src="../assets/step3_1.png" height="245" width="269" alt=""></p>
        <p class="p2">恭喜您拿到了<strong>有机牧场证书</strong></p>
        <p class="p2">现在您可以开始养奶牛了</p>
        <p class="p2">给您的奶牛取一个可爱的名字吧</p>
        <p class="input bbox">
          <input type="text" v-model='name' placeholder="请输入奶牛的名字">
        </p>
        <p class="submit orange" @click='submit()'>就这个啦</p>
        <p class="p2">确认后不可以更改哦</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from '../api/api.js'
import keyword from '../utils/keyword.js'
export default {
  data () {
    return {
      name:'',
      status:3,//1,2,3
      canClick:false,
    }
  },
  methods:{
    step1Click(){
      if (this.status == 1 && this.canClick) {
        this.status = 2
      }
    },
    step2Click(){
      this.status = 3
    },
    submit(){
      if (!this.name) {
        this.$dialog.alert({message:'请输入奶牛的名字哦'})
      }
    }
  },
  computed:{},
  async mounted(){
    setTimeout(()=>{
      this.canClick = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .step3{
    .submit{
      margin: 0 auto;
    }
    .input{
      margin: .2rem auto;
      text-align: left;
      border-radius: .1rem;
      border: .02rem solid #0e03a2;
      width: 5.5rem;
      padding: .25rem 0;
      background-color: #fff;
      padding-left: .2rem;
      input{
        border: none;
        width: 80%;
      }
    }
    .p1{
      margin-top: 1.1rem;
      img{
        width: 2.69rem;
        height: 2.45rem;
      }
    }
    .p2{
      font-size: .24rem;
      line-height: .5rem;
      strong{
        color: #0e03a2;
      }
    }
  }
  .step2{
    .content{
      position: relative;
      margin-top: .8rem;
      .p1{
        animation:1s bounceInDown both;
      }
      .p2{

      }
      .orange{
        position: absolute;
        left: 2.5rem;
        top: 5.8rem;
      }
    }
    .p1{
      img{
        width: 3.65rem;
        height: 1.96rem;
      }
    }
    .p2{
      img{
        width: 5.26rem;
        height: 5.36rem;
      }
    }
  }
  .step1{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .cow{
      position: absolute;
      right: 0;
      top: 5rem;
      animation: fadeInRight 1s 1.5s both;
      img{
        width: 1.13rem;
        height: 1.6rem;
      }
    }
    .main{
      .p1{
        margin-top: .3rem;
        animation: fadeInUp 1s .5s both;
        img{
          width: 3.42rem;
          height: .34rem;
        }
      }
      .p2{
        padding: .3rem 0;
        animation: fadeInUp 1s 1s both;
        img{
          width: 1.34rem;
          height: 1.66rem;
        }
      }
      .p3{
        animation: fadeInUp 1s 1.5s both;
        img{
          width: 2.49rem;
          height: .22rem;
        }
      }
    }
    .title{
      margin-top: 2.3rem;
      position: relative;
      z-index: 2;
      animation:1s bounceInDown both;
      .i1{
        width: 7.5rem;
        height: 2.42rem;
        position: relative;
        z-index: 2;
      }
      .i2{
        position: absolute;
        left: 3rem;
        top: -.75rem;
        width: 1.43rem;
        height: 2.09rem;
        /*animation:1s fadeInUp 1s both;*/
      }
    }
  }
  
  .logo{
    width: 2.25rem;
    height: .25rem;
    position: absolute;
    left: .5rem;
    top: .5rem;
  }

  .home{
    background-image: url(../assets/bg.jpg);
    background-size: 7.5rem 12.8rem;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
</style>
