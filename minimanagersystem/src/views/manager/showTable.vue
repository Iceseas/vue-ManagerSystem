<template>
  <div class="showTable_box">
    <el-row class="showquestions_serch_add">
      <el-col :span="8">
        <div class="grid-content  addData_box">
          <el-button type="primary" @click="addNewQuestion()"
            >{{ addButtonValue }}<i class="el-icon-upload el-icon--right"></i
          ></el-button>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light search_box">
          <div class="serach_input">
            <el-input
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
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
        <div class="grid-content addData_box" style="text-align:right">
          <el-button type="primary" @click="freshTableData()"
            >刷新数据<i class="el-icon-refresh-left el-icon--right"></i
          ></el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          border
          :data="this.$store.state.tableData"
          row-key="index"
          :height="tableHeight"
          stripe
          style="width: 100%"
          v-loading="this.$store.state.loading"
        >
          <el-table-column
            align="center"
            :key="col.prop"
            :label="col.label"
            :prop="col.prop"
            v-for="col in this.$store.state.cols"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
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
            :total="this.$store.state.total"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <div class="masking_out" v-if="this.$store.state.isFromShow">
      <div id="dialogBodybox" class="dialog-bodybox">
        <div class="dialog_body_header" @mousedown="mousemove">
          <span class="dialog_close_title">{{ FormTitle }}</span>
          <span class="dialog_close_span" @click="close_doalog">
            <i class="el-icon-close dialog_close"></i>
          </span>
        </div>
        <div class="updataForm">
          <addNewQuestion
            v-if="this.$store.state.addNewQuestionFromShow"
            v-on:getAddData="getAddData"
          ></addNewQuestion>
          <updataForm
            v-if="this.$store.state.updateQuestionFormShow"
            v-on:update="getUpdateData"
            :data="data"
          ></updataForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import updataForm from "../../components/updateForm.vue";
import addNewQuestion from "../../components/addNewQuestion.vue";
export default {
  data() {
    return {
      tableHeight: 0,
      data: null,
      currentPage4: 1,
      input3: "",
      select: "",
      loading: false,
      addButtonValue: "",
      FormTitle: "",
    };
  },
  mounted() {
    window.onresize = () => {
      this.$nextTick(() => {
        this.tableHeight = document.body.clientHeight - 240 + 'px';
      });
    };
    this.$nextTick(() => {
      this.tableHeight = document.body.clientHeight - 240 + 'px';
    });
    let nowQuestionType = window.localStorage.getItem("questionType");
    if (nowQuestionType.substring(0, 6) == "single") {
      this.FormTitle = "添加选择题";
      this.addButtonValue = "添加选择题";
    } else if (nowQuestionType == "applicationQuestion") {
      this.FormTitle = "添加大题";
      this.addButtonValue = "添加大题";
    } else if (nowQuestionType.substring(0, 7) == "vacancy") {
      this.FormTitle = "添加填空题";
      this.addButtonValue = "添加填空题";
    } else if (nowQuestionType == "decide") {
      this.FormTitle = "添加判断题";
      this.addButtonValue = "添加判断题";
    }
    this.freshTableData();
  },
  methods: {
    handleEdit(index, row) {
      this.FormTitle = "更新数据";
      this.$store.state.isFromShow = true;
      this.$store.state.addNewQuestionFromShow = false;
      this.$store.state.updateQuestionFormShow = true;
      this.data = row;
    },
    freshTableData() {
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
    },
    handleDelete(index, row) {
      this.$store.commit("changeNowDeleteDataId", row.Id);
      this.$store.dispatch("Delete_listData_AJAX");
    },
    handleCurrentChange(val) {
      this.$store.commit("changePageInfo", val);
      switch (this.$store.state.nowQuestionType) {
        case "single_C1":
          this.$store.dispatch("get_PageInfo_AJAX");
          this.$store.dispatch("get_listData_AJAX");
          break;
        case "decide":
          this.$store.dispatch("get_PageInfo_AJAX");
          this.$store.dispatch("get_listData_AJAX");
          break;
        case "single_C2":
          this.$store.dispatch("get_PageInfo_AJAX");
          this.$store.dispatch("get_listData_AJAX");
          break;
        case "vacancy_C1":
          this.$store.dispatch("get_PageInfo_AJAX");
          this.$store.dispatch("get_listData_AJAX");
          break;
        case "single_models":
          this.$store.dispatch("get_PageInfo_AJAX");
          this.$store.dispatch("get_listData_AJAX");
          break;
      }
    },
    mousemove(event) {
      let dialogBox = document.getElementById("dialogBodybox");
      let leftcha = event.clientX - dialogBox.offsetLeft;
      let topcha = event.clientY - dialogBox.offsetTop;
      document.onmousemove = function(eventmove) {
        let left = eventmove.clientX - leftcha;
        let top = eventmove.clientY - topcha;
        dialogBox.style.left = left + "px";
        dialogBox.style.top = top + "px";
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
    close_doalog() {
      this.$store.state.isFromShow = false;
    },
    getUpdateData(data) {
      //传递更新的数据
      this.$store.commit("getUpdateData", data);
      this.$store.dispatch("update_listData_AJAX");
    },
    getAddData(data) {
      this.$store.commit("getAddData", data);
      this.$store.dispatch("add_listData_AJAX");
    },
    addNewQuestion() {
      this.$store.state.isFromShow = true;
      this.$store.state.updateQuestionFormShow = false;
      this.$store.state.addNewQuestionFromShow = true;
    },
  },
  beforeDestroy() {
    this.$store.state.isFromShow = false;
  },
  components: {
    updataForm: updataForm,
    addNewQuestion: addNewQuestion,
  },
};
</script>

<style scoped>
.updataForm {
  height: auto;
  text-align: left;
  box-sizing: border-box;
  padding: 20px;
  z-index: 6;
}
.masking_out {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
</style>
