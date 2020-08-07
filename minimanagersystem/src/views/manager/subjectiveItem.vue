<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
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
      <el-col :span="16">
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
          :stripe="true"
          :height="subjectiveHeight"
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
          <el-table-column align="center" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >评分</el-button
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
        <div class="showSubForm">
          <showsubjectiveFrom
            v-if="this.$store.state.SubjectiveFormShow"
            v-on:showSubjective="getSubjectiveData"
            :data="data"
          ></showsubjectiveFrom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showsubjectiveFrom from "../../components/showSubjective_problem.vue";
export default {
  data() {
    return {
      data: null,
      currentPage4: 1,
      input3: "",
      subjectiveHeight: 0,
      select: "",
      loading: false,
      FormTitle: "",
      visible: false,
    };
  },
  components: {
    showsubjectiveFrom: showsubjectiveFrom,
  },
  mounted() {
    this.freshTableData();
    window.onresize = () => {
      this.$nextTick(() => {
        this.subjectiveHeight = document.body.clientHeight - 220 + "px";
      });
    };
    this.$nextTick(() => {
      this.subjectiveHeight = document.body.clientHeight - 220 + "px";
    });
  },
  methods: {
    handleEdit(index, row) {
      this.FormTitle = "查看主观题";
      this.$store.state.isFromShow = true;
      this.$store.state.SubjectiveFormShow = true;
      this.data = row;
    },
    freshTableData() {
      this.$store.commit("changeNowQuestionType", "subjective_publish");
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
    },
    handleCurrentChange(val) {
      this.$store.commit("changePageInfo", val);
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
    },
    mousemove(event) {
      let event1 = event.currentTarget;
      let event2 = event.target;
      let dialogBox = document.getElementById("dialogBodybox");
      let leftcha = event.clientX - dialogBox.offsetLeft;
      let topcha = event.clientY - dialogBox.offsetTop;
      if (event1 == event2) {
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
      }
    },
    close_doalog() {
      this.$store.state.isFromShow = false;
    },
    getSubjectiveData(data) {
      this.$store.commit("getUpdateData", data);
      this.$store.dispatch("update_listData_AJAX");
    },
  },
  beforeDestroy() {
    this.$store.state.isFromShow = false;
  },
};
</script>

<style scoped>
.masking_out {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
.dialog-bodybox {
  width: 800px;
  height: 600px;
  background: #eee;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eee;
  border-radius: 6px;
  box-sizing: border-box;
  z-index: 99;
  overflow: hidden;
}
.dialog_change_btn {
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
}
.showSubForm {
  height: 550px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;
}
</style>
