/**
 * 模拟数据集合
 */
var roleArr;//角色数据
var dateArr;//日历数据
var peopleArr;//人员数据
var depArr;//部门数据
var courseArr;    //课程数据
var stageArr;     //阶段数据
var studentArr;  //学生数据
var workArr;//排课数据
var classArr;//班级基本信息
var classExpArr;//班级详细信息
var classCourseArr;//班级课程设置；
/*roleNo:角色ID,roleName:角色名称,roleDes:角色描述,roleBz:角色备注*/
roleArr=[{"roleNo":1,"roleName":"项目经理","roleDes":"排课","roleBz":"经理"},
    {"roleNo":2,"roleName":"人事经理","roleDes":"学生管理","roleBz":"经理"},
    {"roleNo":3,"roleName":"管理员","roleDes":"系统管理员","roleBz":"管理人员"},
    {"roleNo":4,"roleName":"游客","roleDes":"学生管理","roleBz":"游客"}];
/*data:休假的日期*/
dateArr=[
     {"data":"2017-10-1"},
     {"data":"2017-10-2"},
     {"data":"2017-10-3"},
     {"data":"2017-10-4"},
     {"data":"2017-10-5"},
     {"data":"2017-10-6"},
     {"data":"2017-10-7"}];


/*depNo:部门编号，depName:部门名称，depDect:部门主管,depNum:部门总人数，depBz:部门备注*/
depArr=[
    {"depNo":1,"depName":"Web前端","depDect":"邹杰","depNum":0,"depBz":"前端方向"},
    {"depNo":2,"depName":"UI","depDect":"唐钰伟","depNum":0,"depBz":"UI方向"},
    {"depNo":3,"depName":"人事","depDect":"杨挽岚","depNum":0,"depBz":"人事方向"}
];
/*peopleNo:人员Id,depName:部门名称,peopleName:人员姓名，peopleAcount:登录账号，peoplePhone:联系电话，peopleQQ:联系qq,peopleEmail:联系邮箱。roleName:角色名称*/
peopleArr=[
    {"peopleNo":1,"depName":"Web前端","peopleName":"邹杰","peopleAcount":"zoujie","peoplePhone":12345678,"peopleQQ":123950,"peopleEmail":"zoujie@westec.com","roleName":"项目经理"},
    {"peopleNo":2,"depName":"java","peopleName":"张","peopleAcount":"zoujie","peoplePhone":12345678,"peopleQQ":123950,"peopleEmail":"zoujie@westec.com","roleName":"人事"}
];

/*workClass:排课班级,workName:上课人姓名，workStage:阶段数*/
workArr=[
    {"workClass":"139","workName":"林依娜","workStage":"4阶段"},
    {"workClass":"140","workName":"郭丽娜","workStage":"1阶段"}
];

/*
    课程管理
    courseNo:课程ID  courseName:课程名称   courseNum：阶段数   courseDay：课程天数   courseDate：修改日期
*/
courseArr=[
    {"courseNo":1,"courseName":"web前端","courseNum":4,"courseDay":140,"courseDate":"2017-09-27"},
    {"courseNo":2,"courseName":"JAVA","courseNum":4,"courseDay":140,"courseDate":"2017-09-27"},
    {"courseNo":3,"courseName":"职业素养课","courseNum":2,"courseDay":140,"courseDate":"2017-09-27"},
    {"courseNo":4,"courseName":"UI预科班","courseNum":4,"courseDay":140,"courseDate":"2017-09-27"}
];
/*
   课程对应的不同阶段
   courseNo:课程ID stageName：阶段名称   name:学习内容   day:阶段学习天数
*/
stageArr=[
    {"courseNo":1,"stageName":"1阶段","name":"axure","day":10},
    {"courseNo":1,"stageName":"1阶段","name":"ps","day":3},
    {"courseNo":1,"stageName":"2阶段","name":"HTML","day":5},
    {"courseNo":1,"stageName":"2阶段","name":"CSS","day":5},
    {"courseNo":1,"stageName":"2阶段","name":"JS","day":15},
    {"courseNo":1,"stageName":"3阶段","name":"MySQL","day":7},
    {"courseNo":1,"stageName":"3阶段","name":"nodeJs","day":8},
    {"courseNo":1,"stageName":"3阶段","name":"PHP","day":3},
    {"courseNo":1,"stageName":"4阶段","name":"vue","day":15},
    {"courseNo":1,"stageName":"4阶段","name":"ajax","day":15},
    {"courseNo":1,"stageName":"4阶段","name":"angular","day":15},
    {"courseNo":1,"stageName":"4阶段","name":"react","day":15},

    {"courseNo":2,"stageName":"1阶段","name":"HTML ","day":4},
    {"courseNo":2,"stageName":"1阶段","name":"网页设计项目实战应用","day":4},
    {"courseNo":2,"stageName":"2阶段","name":"Oracle11g","day":10},
    {"courseNo":2,"stageName":"2阶段","name":"JavaSE 7.0面向对象","day":16},
    {"courseNo":2,"stageName":"2阶段","name":"XML/SAX 技术开发","day":3},
    {"courseNo":2,"stageName":"2阶段","name":"JavaSE项目设计","day":6},
    {"courseNo":2,"stageName":"3阶段","name":"JavaSript&Ajax","day":5},
    {"courseNo":2,"stageName":"3阶段","name":"Servlet/JSP Web服务器端 程序开发应用","day":16},
    {"courseNo":2,"stageName":"3阶段","name":"WEB应用项目 实战开发","day":6},
    {"courseNo":2,"stageName":"4阶段","name":"Struts2框架技术","day":8},
    {"courseNo":2,"stageName":"4阶段","name":"Hibernate3/4完成 数据库ORM映射 复杂数据请求构建","day":7},
    {"courseNo":2,"stageName":"4阶段","name":"Hibernate3/4完成 数据库ORM映射 复杂数据请求构建","day":8},
    {"courseNo":2,"stageName":"4阶段","name":"WebServices","day":5},
    {"courseNo":2,"stageName":"4阶段","name":"SSH企业级项目设计","day":6},

    {"courseNo":3,"stageName":"1阶段","name":"职业素养","day":0.5},
    {"courseNo":3,"stageName":"1阶段","name":"职业素养","day":0.5},
    {"courseNo":3,"stageName":"2阶段","name":"职业素养","day":0.5},
    {"courseNo":3,"stageName":"2阶段","name":"职业素养","day":0.5},

    {"courseNo":4,"stageName":"1阶段","name":"素描速写","day":10},
    {"courseNo":4,"stageName":"1阶段","name":"平面设计","day":3},
    {"courseNo":4,"stageName":"2阶段","name":"WEB界面设计","day":5},
    {"courseNo":4,"stageName":"2阶段","name":"学习Axure","day":5},
    {"courseNo":4,"stageName":"2阶段","name":"设计构图","day":15},
    {"courseNo":4,"stageName":"3阶段","name":"艺术设计","day":7},
    {"courseNo":4,"stageName":"3阶段","name":"ICON设计","day":8},
    {"courseNo":4,"stageName":"3阶段","name":"客户端界面设计","day":3},
    {"courseNo":4,"stageName":"4阶段","name":"APP界面设计","day":15},
    {"courseNo":4,"stageName":"4阶段","name":"静态页面制作","day":15},
    {"courseNo":4,"stageName":"4阶段","name":"JAVASCRIPT","day":15},
    {"courseNo":4,"stageName":"4阶段","name":"开发工具应用","day":15}
];
/**
 *classNo:班级编号,No:学号,name：姓名,sex：性别，phone:联系电话，QQ：联系qq，gradTime:毕业时间，edu:学历,gradSchool:毕业学校，conNum:紧急联系电话，fiPre:添加人，fiTime:添加时间
 */
studentArr=[
    [
        {"classNo":"126","No":1,"name":"雷云凯","phone":"1234","gradTime":"2017","edu":"本科","gradSchool":"四川大学","conNum":"1234","fiPre":"娜姐","fiTime":"2017-7-17"},
        {"classNo":"126","No":2,"name":"袁铭","phone":"25134","gradTime":"2017","edu":"本科","gradSchool":"农业大学","conNum":"4567","fiPre":"娜姐","fiTime":"2017-7-17"},
        {"classNo":"126","No":3,"name":"岳勇静","phone":"1364","gradTime":"2017","edu":"专科","gradSchool":"四川大学","conNum":"5678","fiPre":"娜姐","fiTime":"2017-7-17"},
        {"classNo":"126","No":4,"name":"李红燕","phone":"22534","gradTime":"2017","edu":"专科","gradSchool":"农业大学","conNum":"2013","fiPre":"娜姐","fiTime":"2017-7-17"},
        {"classNo":"126","No":5,"name":"武文斌","phone":"1452","gradTime":"2017","edu":"本科","gradSchool":"四川大学","conNum":"1234","fiPre":"娜姐","fiTime":"2017-7-17"},
        {"classNo":"126","No":6,"name":"杨胜","phone":"85663","gradTime":"2017","edu":"本科","gradSchool":"农业大学","conNum":"1234","fiPre":"娜姐","fiTime":"2017-7-17"},
    ]
];


//班级编号：classNo 班级名字：className 班级开班日期：classStartDay  班级总人数:classStuUs 班级qq群名字：classQQ 班级备注：classBz
classArr = [
    {"classNo": "125", "className": "百杰125", "classStartDay": "2017/9/27","classStuAll": 0, "classQQ": 1234567, "classBz": "这是百杰125班"},
    {"classNo": "126", "className": "百杰126", "classStartDay": "2017/9/27","classStuAll": 0, "classQQ": 54545457, "classBz": "这是百杰126班"},
    ];
//班级总人数：classStuAll 班级男生人数：classStumale 班级女生人数：classStuFamale 班级专科学历人数：classStuColl 班级本科人数学历：classStuUs 班级高中及以下人数:classStuHigh
classExpArr = [
    {"classStuAll": 0, "classStuMale": 0, "classStuFamale": 0, "classStuColl": 0, "classStuUs": 0, "classStuHigh": 0}
];
//班级编号：classNo 班级课程名称：courseName 班级课程开始时间:classCourseTime 班级阶段：stageName 班级授课人：peopleName 班级授课人重复周期：classRepeat
classCourseArr = [
    [
        {"classNo": "126", "courseName": "web前端", "classCourseTime": "2017/9/27", "stageName": "1阶段", "peopleName": "邹杰", "classRepeat": "星期五"},
        {"classNo": "125", "courseName": "JAVA", "classCourseTime": "2017/9/28", "stageName": "1阶段", "peopleName": "邹杰", "classRepeat": "每天"},
    ],
    [
        {"classNo": "126", "courseName": "web前端", "classCourseTime": "2017/9/27", "stageName": "2阶段", "peopleName": "王芳", "classRepeat": "每天"},
        {"classNo": "125", "courseName": "JAVA", "classCourseTime": "2017/9/28", "stageName": "2阶段", "peopleName": "王芳", "classRepeat": "每天"},
    ],
    [
        {"classNo": "126", "courseName": "web前端", "classCourseTime": "2017/9/27", "stageName": "3阶段", "peopleName": "林毅娜", "classRepeat": "每天"},
        {"classNo": "125", "courseName": "JAVA", "classCourseTime": "2017/9/26", "stageName": "3阶段", "peopleName": "林毅娜", "classRepeat": "每天"},
    ],
    [
        {"classNo": "126", "courseName": "web前端", "classCourseTime": "2017/9/27", "stageName": "4阶段", "peopleName": "唐钰伟", "classRepeat": "每天"},
        {"classNo": "125", "courseName": "JAVA", "classCourseTime": "2017/9/26", "stageName": "4阶段", "peopleName": "杨阳", "classRepeat": "每天"},
    ]
];
