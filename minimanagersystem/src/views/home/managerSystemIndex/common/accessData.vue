<template>
  <div class="accessData_body">
    <ul class="accessData_ul">
      <li class="accessData_li">
        <p class="accessData_p">数据库容量</p>
        <span class="accessData_Num">6</span>
        <span class="accessData_Sum">MB/2GB</span>
      </li>
      <span class="cut_off_line"></span>
      <li class="accessData_li">
        <p class="accessData_p">本日数据库读请求数</p>
        <span class="accessData_Num">246</span>
        <span class="accessData_Sum">次/5万次</span>
      </li>
      <span class="cut_off_line"></span>
      <li class="accessData_li">
        <p class="accessData_p">存储容量</p>
        <span class="accessData_Num">0</span>
        <span class="accessData_Sum">MB/5GB</span>
      </li>
      <span class="cut_off_line"></span>
      <li class="accessData_li">
        <p class="accessData_p">本月CDN流量</p>
        <span class="accessData_Num">0</span>
        <span class="accessData_Sum">Byte/5GB</span>
      </li>
      <span class="cut_off_line"></span>
      <li class="accessData_li">
        <p class="accessData_p">本月云函数资源使用量</p>
        <span class="accessData_Num">0</span>
        <span class="accessData_Sum">GBs/4万GBs</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.accessData_body,
.accessData_ul {
  width: 100%;
  height: 100%;
}
.accessData_ul {
  display: flex;
  box-sizing: border-box;
}
.accessData_li {
  flex-grow: 1;
  list-style: none;
  text-align: center;
  font-size: 14px;
  background: #19be6b;
  color: #fff;
  margin-right: 20px;
  border-radius: 10px;
  padding: 10px 0;
  box-sizing: border-box;
  font-weight: 600;
  box-shadow: 0 2px 7px rgba(0,0,0,.35);
}
.accessData_li:nth-of-type(5){
  margin-right: 0;
}
.accessData_Num {
  font-size: 40px;
}
</style>
