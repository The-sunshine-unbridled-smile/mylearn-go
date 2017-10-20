/**
 * Created by admin on 2017/10/6.
 */
var roleArr=window.top.roleArr;
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
    for (var i = 0; i < roleArr.length; i++) {
        $.each(roleArr[i], function (e) {
            if (roleNo == roleArr[i][e]) {
                roleArr[i].roleNo = roleNo;
                roleArr[i].roleName = put;
                roleArr[i].roleDes = der;
                roleArr[i].roleBz = ders;
            }
        })
    }
    window.location.href = "roleMan.html"
});
//新增页面信息开始
$(".roleadd").click(function () {
    var roleNum = $(".roleNo").val();
    var Rolename = $(".put").val();
    var Roleder = $("#der").val();
    var Rolebz = $("#ders").val();
    var arrManchild = {"roleNo": roleNum, "roleName": Rolename, "roleDes": Roleder, "roleBz": Rolebz};
    for (var i = 0; i < roleArr.length; i++) {
        if (roleNum == roleArr[i].roleNo) {
            alert("已经存在此id，请重新输入");
            return;
        }
    }
    roleArr.push(arrManchild);
    window.location.href = "roleMan.html";
});
//新增页面信息结束

