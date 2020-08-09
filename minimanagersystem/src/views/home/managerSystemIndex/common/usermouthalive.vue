<template>
  <div class="usermouthalive_body">
    <ul class="usermouthalive_ul">
      <li class="usermouthalive_li">
        <p class="usermouthalive_p">今日活跃用户</p>
        <span class="usermouthalive_Num">3</span>
        <span class="usermouthalive_Sum">人</span>
      </li>
      <li class="usermouthalive_li">
        <p class="usermouthalive_p">本周活跃用户</p>
        <span class="usermouthalive_Num">3</span>
        <span class="usermouthalive_Sum">人</span>
      </li>
      <li class="usermouthalive_li">
        <p class="usermouthalive_p">本月活跃用户</p>
        <span class="usermouthalive_Num">12</span>
        <span class="usermouthalive_Sum">人</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.usermouthalive_body,
.usermouthalive_ul {
  width: 100%;
  height: 100%;
}
.usermouthalive_ul {
  display: flex;
}
.usermouthalive_li {
  flex-grow: 1;
  line-height: 100px;
  list-style: none;
  text-align: center;
  font-size: 14px;
}
.usermouthalive_Num {
  font-size: 40px;
}
</style>
