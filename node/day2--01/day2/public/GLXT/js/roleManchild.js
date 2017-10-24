/**
 * Created by admin on 2017/10/6.
 */
// var roleArr=window.top.roleArr;
//获取传过来的值
var roleNum=$.query.get("id");
var Rolename=$.query.get("put");
var Roleder=$.query.get("der");
var Rolebz=$.query.get("ders");
//显示值
  $(".roleNo").val(roleNum);
  $(".put").val(Rolename);
  $("#der").val(Roleder);
  $("#ders").val(Rolebz);
/*点击修改*/
$(".roleBtn").click(function () {
    var put = $(".put").val();
    var roleNo = $(".roleNo").val();
    var der = $("#der").val();
    var ders = $("#ders").val();
    var requset=new XMLHttpRequest();
    requset.open("get","xgrole.do?roleNo="+roleNo+"&&roleName="+put+"&&roleDes="+der+"&&roleBz="+ders,true);
    requset.onreadystatechange=function () {
        if(requset.readyState==4&&requset.status==200){

        }
    };
    requset.send(null);
    window.location.href = "roleMan.html"
});
//新增页面信息开始
$(".roleadd").click(function () {
    var roleNum = $(".roleNo").val();
    var Rolename = $(".put").val();
    var Roleder = $("#der").val();
    var Rolebz = $("#ders").val();
    var request=new XMLHttpRequest();
    request.open("get","addrole.do?roleNo="
        +roleNum+"&&roleName="+Rolename+"&&roleDes="
        +Roleder+"&&roleBz="+Rolebz,true);
    request.send(null);
    window.location.href = "roleMan.html";
});
//新增页面信息结束

