# ToDoList
[Demo](https://hoyi-23.github.io/ToDoList/index.html)
## Localstorage 運用
**我們可以將網頁中的資料儲存在使用者的localStorage瀏覽器中**
### LocalStorage 特性
1. 可以跨分頁使用
2. 關掉分頁或再打開瀏覽器資料仍不會消失
3. 資料無保存期效限制
### 使用方式
localStorage 主要兩個使用: 存值 / 取值
#### 存值
`localStorage.setItem("key","value");`
#### 取值
`localStorage.getItem("key");`
#### 刪除單項
`localStorage.removeItem("key");`
#### 清除
`localStorage.clear()`

<hr>

> localStorage 只能存取字串的資料，也只能取出字串，若資料是陣列存取需將之轉為字串。

### 陣列轉字串(字串化)
`JSON.stringify(Array)`
### 字串轉陣列
`JSON.parse("string")`
