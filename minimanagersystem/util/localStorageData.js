// 设置缓存
export function localStorageSetData (key, value) {
    window.localStorage.setItem(key, value);
}
// 拿到缓存数据
export function localStorageGetData (key) {
    return window.localStorage.getItem(key)
}
// 删除缓存
export function localStorageRemoveData (key) {
    window.localStorage.removeItem(key)
}