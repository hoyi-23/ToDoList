//指定DOM
var addbtn=document.querySelector('.addbtn');
var list=document.querySelector('.list');
var data= JSON.parse(localStorage.getItem('todo')) || [];
//^^^^若Localstorage內沒有資料就是空陣列
var clear=document.querySelector('.clear');


//點擊addbtn傳送資料至Localstorage並更新陣列
function AddList(){
  var text=document.querySelector('.addtext').value;
  var todo={
    content : text
  };
  if(text == ""){
    alert('請輸入代辦事項');
  }else{
    data.push(todo);
    localStorage.setItem('todo',JSON.stringify(data));
    UpdateList();
    text="";
  }
}
//更新介面
function UpdateList(){
    var str="";
    var len=data.length;
    for(var i=0;i<data.length;i++){
        str+='<li>'+data[i].content+'<a href="#" data-num="'+i+'"class="delete">刪除</a></li>'
    }
    list.innerHTML=str
}
//刪除事項
//VVV全部清除
function ClearList(e){
    e.preventDefault();
    data=[];
    UpdateList();
    localStorage.clear()
};

//單筆刪除
function DelItem(e){
    var target=e.target.nodeName;
    if(target!== "A"){return}
    var num=e.target.dataset.num;
    data.splice(num,1);
    localStorage.setItem('todo',JSON.stringify(data));
    UpdateList();
};

//讓Enter有送出功能
var body=document.body;
body.addEventListener('keydown',function(e){
  if(e.keyCode!==13){return}
  AddList();
},false);

//若沒有輸入文字alert

//---------監聽
addbtn.addEventListener('click',AddList,false);
clear.addEventListener('click',ClearList,false);
list.addEventListener('click',DelItem,false);