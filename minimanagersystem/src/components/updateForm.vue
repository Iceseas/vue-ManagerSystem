<template>
    <div class="dialog-body">
        <el-form label-position="left" ref="form" :model="NewDataForm" label-width="80px" size="mini">
        <el-form-item label="问题">
            <el-input v-model="data.Question" style="width: 400px;"></el-input>
        </el-form-item>
        <el-form-item label="选项A">
          <el-input v-model="data.Item1" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="选项B">
          <el-input v-model="data.Item2" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="选项C">
          <el-input v-model="data.Item3" :disabled="this.$store.state.updateItemDisabled" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="选项D">
          <el-input v-model="data.Item4" :disabled="this.$store.state.updateItemDisabled" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="正确答案">
            <el-input v-model="data.Answer" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="章节">
            <el-cascader :options="options" v-model="data.Chapter" clearable></el-cascader>
        </el-form-item>
        <el-form-item label="知识点">
            <el-input v-model="data.KN" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="难度" >
            <el-radio-group style="width:100%" v-model="data.difficulty">
            <el-col :span="3">
            <el-radio-button label="简单"></el-radio-button>
            </el-col>
            <el-col :span="3">
            <el-radio-button label="较难"></el-radio-button>
            </el-col>
            <el-col :span="3">
            <el-radio-button label="困难"></el-radio-button>
            </el-col>
            </el-radio-group>
        </el-form-item>
        <el-form-item size="large">
            <el-button type="primary" v-if="!(this.$store.state.addQuestion)" @click="onSubmit(data)">立即更新</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        NewDataForm: null,
        options: [{
          value: 'Ch1',
          label: '第一章',
        }, {
          value: 'Ch2',
          label: '第二章',
        }, {
          value: 'Ch3',
          label: '第三章',
        },{
          value: 'Ch4',
          label: '第四章',
        },{
          value: 'Ch5',
          label: '第五章',
        },{
          value: 'Ch6',
          label: '第六章',
        },{
          value: 'Ch7',
          label: '第七章',
        },{
          value: 'Ch8',
          label: '第八章',
        },{
          value: 'Ch9',
          label: '第九章',
        },{
          value: 'Ch10',
          label: '第十章',
        },{
          value: 'Ch11',
          label: '第十一章',
        }]
      };
    },
    methods: {
      onSubmit(data) {
        this.NewDataForm = data
        this.$emit('update',this.NewDataForm)
        this.$store.state.isupdataFromShow = false
      },
    },
    props:{
      data:{
        type:Object,
        required:true
      }
    },
    mounted() {
      if(this.$store.state.nowQuestionType == 'decide')
      {
        this.$store.state.updateItemDisabled = true
      }
      else{
        this.$store.state.updateItemDisabled = false
      }
    },
  };
</script>

<style scoped>
.dialog-body{
    width: 100%;
    height: 100%;
}   
</style>