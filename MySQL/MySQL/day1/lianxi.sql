CREATE DATABASE lianxi;
/*
--  创建一张巴士表 t_bus 具有下列属性
--  b_id[巴士编号]
--  b_name[巴士名称]
--  b_busNo[巴士车牌号(varchar类型)]
--  b_reDate[巴士出厂日期(年-月-日)]
--  b_maxNo[限载人数]
*/
USE lianxi;


/*
-- 创建一张人员表 t_person 具有下列属性
--  p_id[编号]
--  p_name[游客姓名]
--  p_nationalId [游客国籍id]
--  p_sex [游客性别]
--  p_age [游客年龄]
--  p_birthday [游客生日(年-月-日)]
*/
CREATE TABLE t_person(
p_id INT PRIMARY KEY AUTO_INCREMENT,
p_name VARCHAR(4),
p_nationalId INT,
p_sex VARCHAR(5) DEFAULT '男',
p_age INT,
p_birthday DATE
);
DROP TABLE t_person;
CREATE TABLE t_person(
p_id INT PRIMARY KEY AUTO_INCREMENT,
p_name VARCHAR(4),
p_nationalId INT,
p_sex VARCHAR(5) DEFAULT '男',
p_age INT,
p_birthday DATE
);
DROP TABLE t_person;

CREATE TABLE t_person(
p_id INT PRIMARY KEY AUTO_INCREMENT,
p_name VARCHAR(10),
p_nationalId INT,
p_sex VARCHAR(10),
p_age INT,
p_birthday DATE
);

/*

-- 创建一张国籍表 t_national 具有下列属性
--  n_id [编号]
--  n_nationalName [国籍名称]
*/
CREATE TABLE t_national(
n_id INT PRIMARY KEY AUTO_INCREMENT,
n_nationalName VARCHAR(10)
);

/*
创建四张表，学生表（student） 班级表（class）成绩表（sorce）课程表（course
）
学生表的属性：
	学号 类型 int
	学生名字 类型 varchar 长度20;
	年龄 类型 int
	性别 类型 char 长度4
	出生日期 类型 date
	入学日期 类型 datetime
	所属班级编号 类型 varchar 长度20
*/
CREATE TABLE t_stu(
s_id INT,
s_name VARCHAR(20),
s_age INT,
s_sex CHAR(4),
s_date DATE,
s_time DATETIME,
class_id VARCHAR(20)
);

/*
班级表的属性:
	班级编号 类型 varchar 长度20
	班级名字 类型 varchar 长度50
	班主任 	 类型 varchar 长度20
	开班时间 类型 date   
*/
CREATE TABLE t_class(
c_id VARCHAR(20),
c_name VARCHAR(50),
c_teacher VARCHAR(20),
c_time DATE
);

/*

成绩表的属性:
	id   类型 int
	学生学号 类型 int
	课程编号 类型 varchar 长度40
	课程成绩 类型 int
	考试时间 类型 date
*/
CREATE TABLE t_sourse(
s_id INT,
stu_id INT,
s_num VARCHAR(40),
s_score INT,
s_time DATE
);


/*
课程表的属性：
	课程编号 类型 varchar 长度40
	课程名称 类型 varchar 长度40
*/
CREATE TABLE t_course(
c_num VARCHAR(40),
c_namr VARCHAR(40)
);



CREATE DATABASE lianxi3;
USE lianxi3;

/*
部门表：
	部门id    主键 自增长
	部门名称  不能为空
	部门成立时间  不能为空
*/
CREATE TABLE t_department(
d_id INT PRIMARY KEY AUTO_INCREMENT,
d_name VARCHAR(50) NOT NULL,
d_time DATE NOT NULL
);


/*

职位表：
	职位id	主键 自增长
	职位名称 不能为空
*/
CREATE TABLE t_job(
j_id INT PRIMARY KEY AUTO_INCREMENT,
j_name VARCHAR(40) NOT NULL
);

/*
员工表：属性如下：
	员工id     主键 自增长
	员工姓名   不能为空
	员工性别   默认‘男’
	员工地址
	员工电话   不能为空，并且唯一
	员工入职时间 不能为空
	员工所属部门id 不能为空 外键约束
	员工职位id     不能为空	外键约束
*/
CREATE TABLE t_staff(
s_id INT PRIMARY KEY AUTO_INCREMENT,
s_name VARCHAR(20) NOT NULL,
s_sex VARCHAR(20) DEFAULT 'male',
s_address VARCHAR(50),
s_phone INT NOT NULL,
s_d_id INT REFERENCES t_department(d_id),
CONSTRAINT FOREIGN KEY(s_d_id) REFERENCES t_department(d_id),
s_s_id INT REFERENCES t_job(j_id),
CONSTRAINT FOREIGN KEY(s_s_id) REFERENCES t_job(j_id)
);


-- 练习4
CREATE DATABASE lianxi4;
USE lianxi4;
/*
一，商品基本信息表(shop_jb)
商品编号（jb_id） 主键 自增长、
商品名称（jb_name）字符串型 不为空 不能重复、
规格（jb_spec）字符串型 不能为空、
库存量（jb_stock）整型 不能为空 默认为0、
进货价（jb_price）浮点型 不能为空、
进货日期（jb_date）；
*/
CREATE TABLE shop_jb(
jb_id INT PRIMARY KEY AUTO_INCREMENT,
jb_name VARCHAR(50) NOT NULL UNIQUE,
jb_spec VARCHAR(100) NOT NULL,
jb_stock INT NOT NULL DEFAULT '0',
jb_price FLOAT NOT NULL,
jb_date DATE
);

/*
三，业务员表（shop_yw）
业务员编号（yw_id）主键 自增长、
姓名（yw_name）字符串型 不为空、
性别（yw_sex）默认‘男’、
年龄（yw_age）不能为空、
电话（yw_tel）字符串型 不能为空、
住址（yw_address）不能为空、
薪水（yw_salary
）浮点型
*/
CREATE TABLE shop_yw(
yw_id INT PRIMARY KEY AUTO_INCREMENT,
yw_name VARCHAR(20) NOT NULL,
yw_sex VARCHAR(20) DEFAULT 'male',
yw_age INT NOT NULL,
yw_tel VARCHAR(20) NOT NULL,
yw_address VARCHAR(100) NOT NULL,
yw_salary FLOAT
);

/*
二，商品销售表（shop_xs）
商品销售表id（xs_id） 主键 自增长、
商品编号(xs_jb_id) 外键 不能为空、
销售单价（xs_sale）默认是0 不能为空、
销售量（xs_quantity）默认是0 不能为空、
销售日期（xs_date）、
业务员编号（xs_ywid） 外键 不能为空
*/
CREATE TABLE shop_xs(
xs_id INT PRIMARY KEY AUTO_INCREMENT,
xs_jb_id INT NOT NULL REFERENCES shop_jb(jb_id),
CONSTRAINT FOREIGN KEY(xs_jb_id) REFERENCES shop_jb(jb_id),
xs_sale FLOAT NOT NULL DEFAULT '0',
xs_quantity FLOAT NOT NULL DEFAULT '0',
xs_date DATE,
xs_ywid INT NOT NULL REFERENCES shop_yw(yw_id),
CONSTRAINT FOREIGN KEY(xs_ywid) REFERENCES shop_yw(yw_id)
);
-- 添加商品基本数据
INSERT INTO shop_jb VALUE(NULL,'饼干','1KG/袋', 100,21,2017-01-01)




