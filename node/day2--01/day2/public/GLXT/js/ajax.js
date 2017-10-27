var xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest()
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
function myAjax(method,url,params,callback,async){
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            callback()
        }
    };
    if(method=="get"){
        xhr.open(method,url+"?"+params,async);
        xhr.send(null)
    }else if(method=="post"){
        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params)
    }
}

