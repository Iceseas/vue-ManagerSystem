import {get, post, formData, baseURL } from './http'
export const subjectiveAPI = {
    getlist: params => post('/getQuestion/api/getlist', params), //登录接口
    deleteData: params => post('updatelist', params), //登出接口
    updateData: params => post('DeleteQuestionData', params), //登出接口
}