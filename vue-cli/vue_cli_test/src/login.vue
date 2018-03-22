<template>
    <div>
        <cmpHead/>
        <h2>登录</h2>
        <form action="http://localhost:8081/reg" method="POST">
        用户: <input type="text"><br>
        密码: <input type="password"><br>
        <input type="submit" value="登录">
        </form>
        <a href="#/reg">我要注册</a>
        <cmpFoot/>
    </div>
</template>

<script>
import cmpHead from '@/components/cmp-head'
import cmpFoot from '@/components/cmp-foot'

export default {
  components: {cmpHead, cmpFoot}
}
</script>

<style>

</style>
