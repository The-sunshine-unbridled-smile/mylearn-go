////ajax显示数据
var request = new XMLHttpRequest();
request.open("get", "class.do", true);
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        var data = JSON.parse(request.responseText);
        arr(data);
    }
};
request.send(null);
//页面显示数据
function arr(data) {
    var role = -1;
    for (var i = 0; i < data.length; i++) {
        var str = '<tr class="interline">' +
            '<td class="line">' + data[i].t_no + "</td>" +
            '<td class="line">' + data[i].t_name + "</td>" +
            '<td class="line">' + data[i].t_c_no + '</td>' +
            '<td class="line">' + data[i].t_classroom + '</td>' +
            '<td class="line">' + data[i].t_startdate + '</td>' +
            '<td class="line">' + data[i].t_create + '</td>' +
            '<td class="line">' + data[i].t_des + '</td>' +
            '<td class="line">' + data[i].t_qq + '</td>' +
            '<td class="line">' + data[i].t_bz + '</td>' +
            '<td><button type="button" class="revise">修改</button>' +
            '</td>' +
            '</tr>';

        $("tbody").append(str);
    }
}

//删除班级信息
/*$(document).on("click", ".del", function () {
 if (confirm("确认删除吗?")) {
 $(this).parent().parent().remove();
 var putClasss = $(this).parent().parent().children(":eq(0)").text();
 console.log(putClasss);
 var request = new XMLHttpRequest();
 request.open("get", "deleteclass.do?putClasss=" + putClasss, true);
 request.send(null);
 }
 });*/

//点击获取修改数据的值
$(document).on("click", ".revise", function () {
    var classNo = $(this).parent().parent().children(":eq(0)").text();
    var className = $(this).parent().parent().children(":eq(1)").text();
    var classcourseNo = $(this).parent().parent().children(":eq(2)").text();
    var classRoom = $(this).parent().parent().children(":eq(3)").text();
    var calssStart = $(this).parent().parent().children(":eq(4)").text();
    var classCreate = $(this).parent().parent().children(":eq(5)").text();
    var calssdes = $(this).parent().parent().children(":eq(6)").text();
    var calssQQ = $(this).parent().parent().children(":eq(7)").text();
    var classBz = $(this).parent().parent().children(":eq(8)").text();
    window.location.href = "classXz.html?classNo=" + classNo + "&&=className" + className + "&&classcourseNo=" + classcourseNo +
        "&&classRoom=" + classRoom + "&&calssStart=" + calssStart + "&&classCreate=" + classCreate
        + "&&calssdes=" + calssdes + "&&calssQQ=" + calssQQ + "&&classBz=" + classBz;
});
////给查询按钮设置单击事件
$(".Search").click(function () {
    $("tbody").html("");
    var num = $(".claNo").val(),
        name = $(".claName").val();
    var request = new XMLHttpRequest();
    request.open("get", "seachclass.do?claNo=" + num + "&&claName=" + name);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(request.responseText);
            arr(data);
        }
    };
    request.send(null);
});
