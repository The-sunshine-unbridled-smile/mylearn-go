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
INSERT INTO shop_jb VALUE(NULL,'苹果','5元/kg', 12,101,2017-01-01),
(NULL,'芒果','12元/kg', 15,191,2017-01-01),
(NULL,'橡胶','5元/kg', 5,81,2017-01-01),
(NULL,'咖啡','5元/kg', 8,91,2017-01-01);

-- 添加业务员数据
INSERT INTO shop_yw VALUE(NULL,'李四','男',25, '1589252545','高新区',2500),
(NULL,'小李','男',12, '1589252545','高新区',2500),
(NULL,'张三','女',22, '5896332565','武侯区',2500),
(NULL,'王铎','男',30, '2589466532','大源区',2500),
(NULL,'小张','女',45, '8695662223','双流区',2500);

 -- 添加商品销售数据
 INSERT INTO shop_xs VALUE(NULL,16,55,52,2017-02-08,1)
 INSERT INTO shop_xs VALUE(NULL,16,55,52,2017-02-08,4),
 (NULL,16,55,52,2017-02-08,4),
 (NULL,16,55,52,2017-02-08,3),
 (NULL,16,55,52,2017-02-08,3);
 
 -- 修改日期
 UPDATE shop_xs SET xs_date='2017-01-01'
UPDATE shop_jb SET jb_date='2017-01-28'
UPDATE shop_yw SET yw_date='2017-01-28'

-- 1.删除业务员表中姓名为‘小张’的数据
DELETE FROM shop_yw WHERE yw_name='小张';
-- 2.将业务员表中年龄18-20的员工薪水更改为1500
UPDATE shop_yw SET yw_salary=1500 WHERE yw_age>18 AND yw_age<25;
-- 3.删除商品销售表中销售日期大于2014-1-9的记录
DELETE FROM shop_xs WHERE xs_date>'2014-01-09'
-- 4.将业务员表中姓名为‘赵六’开头并且电话为13999090980 的薪水改为5000，性别改为女
UPDATE shop_yw SET yw_salary=5000 WHERE yw_name='王铎' AND yw_tel='2589466532';
UPDATE shop_yw SET yw_sex='女' WHERE yw_name='王铎' AND yw_tel='2589466532';
-- 5.修改业务员表中小于18岁的数据，年龄都增加5岁
UPDATE shop_yw SET yw_age=yw_age+5 WHERE yw_age<18;
-- 6.修改商品信息表中库存量为0并且进货价为0的数据 分别改为100  和15.22
UPDATE shop_jb SET jb_stock=100 WHERE jb_stock=5 AND jb_price=81;
UPDATE shop_jb SET jb_price=15.22 WHERE jb_stock=100 AND jb_price=81;
-- 7.修改商品信息表中 商品名称为‘五粮液’开头 的进货日期改2014-1-1
UPDATE shop_jb SET jb_date='2014-01-01' WHERE jb_name='苹果' 
--  8.删除商品销售表中商品编号为3，并且业务员编号为2的所有数据
DELETE FROM shop_xs WHERE xs_jb_id=16 AND xs_ywid=3;
-- 9.用TRUNCATE和delete删除商品销售表中所有信息
TRUNCATE TABLE shop_xs;shop_xs
   
  
  
/*
作业 创建一张学生表，包含以下信息，学号，姓名，年龄，性别，联系电话,学历,出生日期 
*/   
 CREATE TABLE student(
 s_id INT PRIMARY KEY AUTO_INCREMENT,
 s_name VARCHAR(20),
 s_age INT,
 s_sex VARCHAR(10),
 s_phone VARCHAR(50),
 s_stu VARCHAR(10),
 s_date DATE
 ); 
-- 添加学生数据
INSERT INTO student VALUES(NULL,'张三',22,'男','123456','小学','1993-09-09')
INSERT INTO student VALUES(NULL,'李四',21,'男','119','中学','1994-09-01'),
(NULL,'王五',23,'男','150','高中','1992-04-22'),
(NULL,'赵六',18,'女','120','大学','1995-01-28'),
(NULL,'孙七',17,'女','911','大专','1996-01-28'),
(NULL,'郑八',24,'男','12580','中专','1990-01-28');
-- 3) 修改学生表的数据，将电话号码以11开头的学员的学历改为“大专”
UPDATE student SET s_stu='大专' WHERE  s_phone LIKE '11%';
-- 4) 删除学生表的数据，姓名以C开头，性别为‘男'的记录删除 
DELETE FROM student WHERE s_name LIKE '王%' AND s_sex='男'
-- 5) 将所有年龄小于22岁的，学历为“大专”的学生的电话删除 
UPDATE student SET s_phone='' WHERE s_age<22 AND s_stu='大专';
-- 6) 修改C开头，并且学历为高中的学生出生日期为2013-09-18
UPDATE student SET s_date='2013-09-18' WHERE s_name LIKE '张%' AND s_stu='小学';
-- 7) 备份当前修改完成的表到t_student_bak表中
CREATE TABLE t_student_bak SELECT * FROM student;
-- 8) 删除出生日期在（1990年-1992年，包括1990以及1992年）的学生信息
DELETE FROM student WHERE s_date BETWEEN '1990-01-01' AND '1992-12-30';
-- 9) 添加一名未知电话的同学“ccf”
INSERT INTO student VALUES (NULL,'ccf',12,'男','未知','大专','1995-01-02');
-- 10) 修改ccf同学的出生年月为1024-08-08
UPDATE student SET s_date='1024-08-08' WHERE s_name='ccf';

	