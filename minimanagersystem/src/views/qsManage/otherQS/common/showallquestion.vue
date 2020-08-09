<template>
  <div :style="`height:${listHeight}`" class="showQuestions">
    <div class="questionTab">
      <el-row :gutter="20">
        <el-col :span="3">
          <div @click="showSingle('single_C1')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第一单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C2')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第二单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C3')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第三单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C4_5')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第四-五单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C6')" class="cardBody"> 
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第六单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C7')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第七单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C10')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第十单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showSingle('single_C11')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>第十一单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C1')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第一单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C2')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第二单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C3')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第三单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C4_5')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第四-五单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C6')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第六单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C7')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第七单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C10')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第十单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showvacancy('vacancy_C11')" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>填空</span>
              </div>
              <div class="cardChapter">
                <span>第十一单元</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3">
          <div @click="showdecide()" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>判断</span>
              </div>
              <div class="cardChapter">
                <span>综合</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showApplicationQuestion()" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>应用</span>
              </div>
              <div class="cardChapter">
                <span>大题</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="showAllsingleQuestion()" class="cardBody">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="always">
              <div class="cardtitle">
                <span>单选</span>
              </div>
              <div class="cardChapter">
                <span>题库</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listHeight: 0,
      showQuestionData: false,
    };
  },
  methods: {
    showSingle(questionType) {
      window.localStorage.setItem('questionType',questionType)
      this.$store.commit("changeNowQuestionType", questionType);
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
      this.showQuestionData = true;
      this.$router.push("showTable");
    },
    showdecide() {
      window.localStorage.setItem('questionType','decide')
      this.$store.commit("changeNowQuestionType", "decide");
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
      this.showQuestionData = true;
      this.$router.push("showTable");
    },
    showvacancy(questionType) {
      window.localStorage.setItem('questionType',questionType)
      this.$store.commit("changeNowQuestionType", questionType);
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
      this.showQuestionData = true;
      this.$router.push("showTable");
    },
    showApplicationQuestion() {
      window.localStorage.setItem('questionType','applicationQuestion')
      this.$store.commit("changeNowQuestionType", "applicationQuestion");
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
      this.showQuestionData = true;
      this.$router.push("showTable");
    },
    showAllsingleQuestion() {
      window.localStorage.setItem('questionType','single_models')
      this.$store.commit("changeNowQuestionType", "single_models");
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
      this.showQuestionData = true;
      this.$router.push("showTable");
    },
  },
  mounted() {
    window.onresize = () => {
      this.$nextTick(() => {
        this.listHeight = document.body.clientHeight - 155 + "px";
      });
    };
    this.$nextTick(() => {
      this.listHeight = document.body.clientHeight - 155 + "px";
    });
  },
  destroyed() {
    this.tableData = [];
  },
};
</script>

<style scoped>
.showQuestions {
  height: 100%;
  box-shadow: 0 1px 8px #ebeef5;
  background: #d3dce6;
  border-radius: 20px;
  width: 100%;
}
.el-input-group {
  float: left;
}
.serach_input {
  width: 100%;
  height: 40px;
}
.questionTab {
  box-sizing: border-box;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 1px;
}
.cardtitle,
.cardChapter {
  width: 100%;
  height: 80px;
  line-height: 80px;
}
.cardBody{
  margin-bottom: 20px;
}
>>>.el-card{
  background: #F5F7FA;
  border-radius: 20px;
  font-weight: 600;
}
>>>.el-card:hover{
  transform: scale(1.1);
}
</style>
