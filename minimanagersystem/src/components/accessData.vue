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
export default {
    
}
</script>

<style>
.accessData_body,
.accessData_ul{
    width: 100%;
    height: 100%;
}
.accessData_ul{
    display: flex;
}  
.accessData_li{
    flex-grow: 1;
    list-style: none;
}  
.accessData_Num{
    font-size: 40px;
}

</style>