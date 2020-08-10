<template>
  <Modal v-model="modalData.modalBoolean" width="660">
    <div slot="header">
      <Icon type="ios-information-circle"></Icon>
      <span style="font-size:20px">{{modalData.title}}</span>
      <p style="color:#ff9900">填空题的空位如果有候选词，请用(),()的形式填写，并且使用英文逗号！</p>
    </div>
    <div>
      <Form :label-colon="true" :model="FormData.data" ref="formList" :rules="FormData.rules" :label-width="80">
        <FormItem label="问题" prop="Question">
          <Input :disabled="isDisabled" style="width:95%" type="textarea" autosize v-model="FormData.data.Question" placeholder="请输入问题"></Input>
        </FormItem>
        <FormItem label="空位1答案" prop="Space1Answer">
          <Input :disabled="isDisabled" style="width:95%" v-model="FormData.data.Space1Answer" placeholder="请输入空位1内容"></Input>
        </FormItem>
        <FormItem label="空位2答案" prop="Space2Answer">
          <Input :disabled="isDisabled" style="width:95%" v-model="FormData.data.Space2Answer" placeholder="请输入空位2内容"></Input>
        </FormItem>
        <FormItem label="空位3答案" prop="Space3Answer">
          <Input :disabled="isDisabled" style="width:95%" v-model="FormData.data.Space3Answer" placeholder="请输入空位3内容"></Input>
        </FormItem>
        <FormItem label="空位4答案" prop="Space4Answer">
          <Input :disabled="isDisabled" style="width:95%" v-model="FormData.data.Space4Answer" placeholder="请输入空位4内容"></Input>
        </FormItem>
        <FormItem label="知识点" prop="KN">
          <Input :disabled="isDisabled" style="width:95%" v-model="FormData.data.KN" placeholder="请输入涉及知识点"></Input>
        </FormItem>
        <FormItem label="遵循顺序" prop="Issequence">
          <RadioGroup v-model="FormData.data.Issequence">
            <Radio :disabled="isDisabled" label="true">是</Radio>
            <Radio :disabled="isDisabled" label="false">否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="难度" prop="difficulty">
          <RadioGroup v-model="FormData.data.difficulty">
            <Radio :disabled="isDisabled" label="简单">简单</Radio>
            <Radio :disabled="isDisabled" label="较难">较难</Radio>
            <Radio :disabled="isDisabled" label="困难">困难</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="涉及章节" prop="Chapter">
          <Select :disabled="isDisabled" v-model="FormData.data.Chapter" placeholder="请选择" style="width:95%">
            <Option value="Ch1">第一章</Option>
            <Option value="Ch2">第二章</Option>
            <Option value="Ch3">第三章</Option>
            <Option value="Ch4">第四章</Option>
            <Option value="Ch5">第五章</Option>
            <Option value="Ch6">第六章</Option>
            <Option value="Ch7">第七章</Option>
            <Option value="Ch8">第八章</Option>
            <Option value="Ch9">第九章</Option>
            <Option value="Ch10">第十章</Option>
            <Option value="Ch11">第十一章</Option>
          </Select>
        </FormItem>
      </Form>
    </div>
    <div slot="footer">
      <Button size="large" @click="closeModal">取消</Button>
      <Button type="primary" size="large" @click="addNewQS">确定</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  data() {
    return{
      modalData:{
        title:'添加填空题',
        modalBoolean: false
      },
      nowType: '',
      isDisabled: false,
      FormData:{
        rules:{},
        data:{
          Question: "",
          Space1Answer: "",
          Space2Answer: "",
          Space3Answer: "",
          Space4Answer: "",
          KN: "",
          Chapter: "",
          difficulty: "",
          Issequence: "",
        }
      }
    }
  },
  methods:{
    init(type, data) {
      this.nowType = type;
      if(type === 'update') {
        this.modalData.title = '更新填空题'
        this.FormData.data = data;
      } else if (type === 'add') {
        this.$refs.formList.resetFields() 
        this.modalData.title = '添加填空题'
      } else if(type === 'show') {
        this.isDisabled = true;
        this.FormData.data = data;
        this.modalData.title = '查看填空题'
      }
      this.modalData.modalBoolean = true
    },
    closeModal() {
      this.modalData.modalBoolean = false
      this.isDisabled = false;
    },
    addNewQS() {
      this.$emit('callBack', this.FormData.data,this.nowType)
      this.modalData.modalBoolean = false
      this.isDisabled = false;
    }
  }
}
</script>
