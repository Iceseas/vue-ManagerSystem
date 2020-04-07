<template>
    <el-form :model="shortAnswerQuestion" ref="shortAnswerQuestion" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="fatherQuestion"
    label="主问题"
  >
    <el-input v-model="shortAnswerQuestion.fatherQuestion" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(childQuestion, index) in shortAnswerQuestion.childQuestions"
    :label="'(' + (index+1) +')'"
    :key="childQuestion.key"
    :prop="'childQuestions.' + index + '.value'"
  >
    <el-input v-model="childQuestion.value" style="width:400px"></el-input><el-button @click.prevent="removeChildQuestion(childQuestion)" style="margin-left:10px">删除</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('shortAnswerQuestion')">提交</el-button>
    <el-button @click="addChildQuestion">新增子问题</el-button>
  </el-form-item>
</el-form>
</template>

<script>
 export default {
    data() {
      return {
        shortAnswerQuestion:{
          fatherQuestion:'',
          childQuestions:[
            {
              value:''
            }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      removeChildQuestion(item) {
        var index = this.shortAnswerQuestion.childQuestions.indexOf(item)
        if (index !== -1) {
          this.shortAnswerQuestion.childQuestions.splice(index, 1)
        }
      },
      addChildQuestion(){
        this.shortAnswerQuestion.childQuestions.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style scoped>

</style>