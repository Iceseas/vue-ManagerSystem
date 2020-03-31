<template>
    <div>
        <el-row class="showquestions_serch_add">
        <el-col :span="8">
            <div class="grid-content bg-purple">
        
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple-light search_box">
                <div class="serach_input">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="题型" value="1"></el-option>
                    <el-option label="章节" value="2"></el-option>
                    <el-option label="难度" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">

            </div>
        </el-col>
        </el-row>
        <el-row>
        <el-col :span="24">
        <el-table border 
                  :data="this.$store.state.tableData" 
                  row-key="index" 
                  stripe 
                  style="width: 100%"
                  v-loading="this.$store.state.loading" >
                <el-table-column
                    :key="col.prop"
                    :label="col.label"
                    :prop="col.prop"
                    v-for="col in this.$store.state.cols"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="160">
                <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-col>
        </el-row>    
        <el-row class="showquestions_serch_add">
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-size="10"
                layout="total, prev, pager, next"
                :total="this.$store.state.total">
                </el-pagination>
            </div>
        </el-col>
        </el-row>
        <div v-if="this.$store.state.isupdataFromShow" id="dialogBodybox" class="dialog-bodybox">
            <div class="dialog_body_header" @mousedown="mousemove">
                <span class="dialog_close_title">编辑数据</span>
                <span class="dialog_close_span" @click="close_doalog">
                    <i class="el-icon-close dialog_close"></i>
                </span>
            </div>
            <div class="updataForm">
                <updataForm v-on:update="getUpdateData" :data = "data" ></updataForm>
            </div>
        </div>
    </div>
</template>

<script>
import updataForm from '../../components/updateForm.vue'
export default {
    data(){
        return{
            data:null,
            currentPage4: 1,
            input3: '',
            select: '',
            loading:false
        }
    },
    created() {
        window.addEventListener('beforeunload', () => this.pagerefresh())
    },
    methods: {
       handleEdit(index, row) {
        console.log(index, row);
        this.$store.state.isupdataFromShow = true
        this.data = row
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$store.commit('changePageInfo',(val)); 
        switch(this.$store.state.nowQuestionType)
        {
            case 'single_C1':
            this.$store.dispatch('get_listData_AJAX')
            break;
            case 'decide':
            this.$store.dispatch('get_listData_AJAX')
            break;
        }
      },
      mousemove(event){
          let dialogBox = document.getElementById('dialogBodybox')
          let leftcha = event.clientX - dialogBox.offsetLeft
          let topcha = event.clientY - dialogBox.offsetTop
          document.onmousemove = function(eventmove){
              let left = eventmove.clientX - leftcha
              let top = eventmove.clientY - topcha
              dialogBox.style.left = left + 'px'
              dialogBox.style.top = top + 'px'
              document.onmouseup = function(){
					document.onmousemove = null;
					document.onmouseup = null;
				}
          }
      },
      close_doalog(){
          this.$store.state.isupdataFromShow = false
      },
      getUpdateData(data){
        console.log('data',data)
        //传递更新的数据
        this.$store.commit('getUpdateData',data);
        this.$store.dispatch('update_listData_AJAX')
      },
      pagerefresh(){
          this.$router.push({
              path: 'showQuestionTab',
          })
      }
    },
    beforeDestroy() {
        this.$store.state.isupdataFromShow = false
    },
    components:{
        updataForm:updataForm
    },
    
}
</script>

<style scoped>
    
</style>