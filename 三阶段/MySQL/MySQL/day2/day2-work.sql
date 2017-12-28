CREATE DATABASE practiceam;
USE practiceam;

-- =================================练习1=======================================================
/*

班级表：t_CLASS
编号:c_id 整形 主键 自增
名称：c_name 字符串 不能为空 不允许重复 
*/
CREATE TABLE t_class(
c_id INT PRIMARY KEY AUTO_INCREMENT,
c_name VARCHAR(20) NOT NULL UNIQUE
);
/*
学生表：t_student
编号s_id 整形 主键 自增
姓名：s_name 字符串 不允许重复 
性别：s_sex 字符串 默认值 男 
年龄：s_age 整形 
班级编号: s_class_id 整形 外键 指向班级表的班级编号
*/
CREATE TABLE t_student(
s_id INT PRIMARY KEY AUTO_INCREMENT,
s_name VARCHAR(20) UNIQUE,
s_sex VARCHAR(10) DEFAULT '男',
s_age INT,
s_class_id INT REFERENCES t_class(c_id),
CONSTRAINT FOREIGN KEY(s_class_id) REFERENCES t_class(c_id)
);
-- 建表 并添加数据  
-- 添加班级数据
INSERT INTO t_class VALUES(NULL,'一班'),(NULL,'二班'),(NULL,'三班');
-- 添加学生数据
INSERT INTO t_student VALUES(NULL,'刘基','男',21,1),
(NULL,'小刘','男',7,1),
(NULL,'小伯','男',12,1),
(NULL,'大伯','男',15,1),
(NULL,'刘小花','男',9,1),
(NULL,'唐伯虎','男',25,3);
-- 1.把刘基的名字修改为刘伯温
UPDATE t_student SET s_name='刘伯温' WHERE s_name='刘基';
-- 唐伯虎年龄20，性别男，班级3，添加到表中 
INSERT INTO t_student VALUES (NULL,'唐伯虎','男',25,3);
-- 3.查询出所有姓名包括伯的所有的人员的信息
SELECT * FROM t_student WHERE s_name LIKE "%伯%";
-- 4，查询年龄在10-20之间的所有人员的信息
SELECT * FROM t_student WHERE s_age BETWEEN 10 AND 20;
-- 5，查询年龄在10-20之间的所有人员前5条的信息 并且将查询出的每个人的年龄加
SELECT s_id,s_name,s_sex,s_age+5,s_class_id FROM t_student WHERE s_age BETWEEN 10 AND 20 LIMIT 5;
-- 6,查询年龄在10岁以下或20岁以上的所有人员的姓名和年龄前5条的记录，
SELECT * FROM t_student WHERE s_age<10 OR s_age>20 LIMIT 5;
-- 7.并且将查询出的每个人的年龄加10，并且不能重复 并且给每个字段起一个别名
SELECT DISTINCT s_id AS '学生学号',s_name AS '学生姓名',s_sex '性别',s_age+10 AS '年龄',s_class_id AS '班级' FROM t_student WHERE  s_age<10 OR s_age>20 LIMIT 5;


-- ====================================练习2==========================================================
CREATE TABLE shop_xs(
s_id INT PRIMARY KEY AUTO_INCREMENT,
s_num VARCHAR(20),
s_date DATE,
s_xsnum INT,
s_price FLOAT,
s_money INT,
s_per VARCHAR(20)
);
-- 添加表数据
INSERT INTO shop_xs VALUES(NULL,'xs1001','2013-12-02',124,134.5,16678,'张三'),
(NULL,'xs1002','2013-12-02',50,80,4000,'李四'),
(NULL,'xs1003','2013-12-05',66,55,3630,'张三'),
(NULL,'xs1001','2013/11/20',10,134.5,1345,'张三'),
(NULL,'xs1001','2013/11/02',20,134.5,2690,'王五'),
(NULL,'xs1002','2013/11/5',30,80,2400,'张三'),
(NULL,'xs1002','2013/11/9',23,80,1840,'王五'),
(NULL,'xs1003','2013/12/11',10,55,550,'李四'),
(NULL,'xs1003','2013/12/12',50,55,2750,'王五'),
(NULL,'xs1004','2013/11/30',45,100,4500,'张三');
-- 1.查询张三的所有销售记录
SELECT * FROM shop_xs WHERE s_per='张三';
-- 2.查询张三12月份的销售记录
SELECT * FROM shop_xs WHERE s_per='张三'AND s_date LIKE '%-12-%';
-- 3.查询销售总金额大于2000 的12月份销售记录
SELECT * FROM shop_xs WHERE s_money>2000 AND s_date LIKE '%-12-%';
-- 4.查询前10条销售记录
SELECT *FROM shop_xs LIMIT 10;
-- 5.查询前10条销售记录中商品编号xsl001的记录
SELECT *FROM shop_xs WHERE s_num='xs1001' LIMIT 10;
SELECT * FROM (SELECT * FROM shop_xs LIMIT 10) AS temp WHERE s_num='xs1001';
-- 6.查询销售数量大于20 销售人员为李四的记录
SELECT *FROM shop_xs WHERE s_xsnum>20 AND s_per='李四';
-- 7.查询前5条 销售人员为王五的记录，只显示 商品编号 销售总金额 销售人员 这些列（要求列名用中文别名显出）
SELECT s_num AS '商品编号',s_money AS '销售总金额',s_per AS '销售人员' FROM (SELECT * FROM shop_xs LIMIT 5) AS temp WHERE s_per='王五';
-- 8.查询2013年11月20日之后 2013年12月10日之前的记录
SELECT * FROM shop_xs WHERE s_date BETWEEN '2013-11-20' AND '2013-12-10';
-- 9.查询从第三条数据开始，到第10条数据结束的记录，要求商品单价大于100 或则销售数量大于50
SELECT * FROM shop_xs WHERE s_price>100 OR s_xsnum>50 LIMIT 2,10;


-- ================================练习3==========================================
-- 创建表
CREATE TABLE t_stu3(
s_name VARCHAR(20),
s_age INT,
s_sex VARCHAR(10),
s_num VARCHAR(20),
s_grade INT,
s_classid VARCHAR(10)
);
-- 添加初始数据
INSERT INTO t_stu3 VALUES('Jacky',20,'男','xh1001',90,'T01'),
('Simth',30,'男','xh1002',75,'T02'),
('Jay',18,'男','xh1003', 80,'T01'),
('Helen',19,'女','xh1004',75,'T02'),
('lily',22,'女','xh1005',90,'T03'),
('Green',23,'男','xh1006',85,'T02'),
('RedChar',18,'男','xh1007',60,'T01'),
('Kevin',17,'女','xh1008',45,'T03')
-- 1.统计每个班的学员的数量
SELECT s_classid,COUNT(*) FROM t_stu3 GROUP BY s_classid;
-- 2.统计每个班的总分
SELECT s_classid,SUM(s_grade) FROM t_stu3 GROUP BY s_classid;
-- 3.统计每个班的平均分
SELECT s_classid,AVG(s_grade) FROM t_stu3 GROUP BY s_classid;
-- 4.统计每个班的最高分
SELECT s_classid,MAX(s_grade) FROM t_stu3 GROUP BY s_classid;
-- 5.统计每个班的最低分
SELECT s_classid,MIN(s_grade) FROM t_stu3 GROUP BY s_classid;
-- 6.统计每个班学员的数量,总分,平均分,最高分,最低分
SELECT s_classid,COUNT(*),SUM(s_grade),AVG(s_grade),MAX(s_grade),MIN(s_grade) FROM t_stu3 GROUP BY s_classid;
-- 8.统计班级ID为T01的学员的数量,总分,平均分,最高分,最低分
SELECT COUNT(*),SUM(s_grade),AVG(s_grade),MAX(s_grade),MIN(s_grade) FROM t_stu3 WHERE s_classid='T01';
-- 9.查询平均分上85的班级有哪些？
SELECT s_classid,AVG(s_grade) FROM t_stu3 HAVING AVG(s_grade)>85;
-- 10.查询有女生的班级是哪些？
SELECT s_sex AS '性别', s_classid FROM t_stu3 WHERE s_sex='女' GROUP BY s_classid;


-- ======================================练习4==================================
-- 创建商品表
CREATE TABLE t_shop(
	s_id INT PRIMARY KEY AUTO_INCREMENT,
	s_shopcode VARCHAR(30),    -- 商品编号
	s_name VARCHAR(40),        -- 商品名称
	s_price INT ,              -- 商品价格
	s_class   VARCHAR(50)      -- 商品类别
);
-- 添加初始数据
INSERT INTO t_shop(s_shopcode,s_name,s_price,s_class) VALUES 
('n11','橙子',9,'水果'),
('x330','血橙',11,'水果'),
('yx673','柚子',7,'水果'),
('n12','白菜',2,'蔬菜'),
('a13','冬瓜',3,'蔬菜'),
('n14','西瓜',4,'水果'),
('n15','丝瓜',5,'蔬菜'),
('c16','苦瓜',6,'蔬菜'),
('m17','南瓜',5,'蔬菜'),
('d18','茄子',6,'蔬菜');
-- 1  查询所有包含瓜的商品名称信息
SELECT * FROM t_shop WHERE s_name LIKE '%瓜%';
-- 2  查询价格在1 到8 的所有商品信息
SELECT * FROM t_shop WHERE s_price  BETWEEN  1 AND 8;
-- 3  查询商品的最高价格的值是多少
SELECT MAX(s_price) FROM t_shop;
-- 4  查询商品价格最高的前三个商品的信息
SELECT * FROM t_shop ORDER BY s_price DESC LIMIT 3;
-- 5  查询所有商品的平均价格
SELECT AVG(s_price) FROM t_shop;
-- 6  查询所有包含瓜的商品的平均价格
SELECT AVG(s_price) FROM t_shop WHERE s_name LIKE '%瓜%';
-- 7  查询最高商品的价格是最低商品的价格的倍数是多少
SELECT MAX(s_price)/MIN(s_price) FROM t_shop;
-- 8  查询商品名称中包含橙字的有多少个商品
SELECT COUNT(*) FROM t_shop WHERE s_name LIKE '%橙%';
-- 9  修改 西瓜的价格为2块
UPDATE t_shop SET s_price=2 WHERE s_name='西瓜';
-- 10  删除id 为，4,9,1 的商品信息
DELETE FROM t_shop WHERE s_id IN(4,9,6);
-- 11  查询蔬菜类别中最高的价格是多少？
SELECT MAX(s_price) FROM t_shop WHERE s_class='蔬菜';


-- =======================================作业===================================
-- 商品类别表 --
CREATE TABLE category(
   cat_id INT PRIMARY KEY AUTO_INCREMENT,  #类别编号
   cat_name VARCHAR(30) NOT NULL           #类别名称
);
-- 商品表 --
CREATE TABLE goods(
    goods_id INT PRIMARY KEY AUTO_INCREMENT,#商品编号
    goods_name VARCHAR(30) NOT NULL,#商品名称
    goods_price DOUBLE,#商品进价
    shop_price DOUBLE,#商品卖价
    market_price DOUBLE,#市场价
    cat_id INT,#商品类别
    goods_number INT,#商品数量
   FOREIGN KEY(cat_id) REFERENCES category(cat_id)
);
INSERT INTO category(cat_name) VALUES('航模'),('车模'),('船模
');
INSERT INTO category(cat_name) VALUES('动物模型');
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F16战斗机',300,1000,900,1,120);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F35战斗机',400,1200,1000,1,210);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F117隐形轰炸机',290,800,600,1,99);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('牧马人',120,600,500,2,1200);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('宝马Z4',130,560,510,2,231);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('地中海帆船',90,300,180,3,68);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('密西西比号蒸汽明轮',100,560,520,3,114);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('德鲁伊号16门炮护卫舰',1322,2322,2600,3,100);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('皇家理查德号 74门炮战舰',350,800,769,3,312);
-- 1求每个类别下商品种类数
SELECT cat_id,COUNT(*) FROM goods GROUP BY cat_id;
-- 2查询本店每个商品价格比市场价低多少；
SELECT goods_name,(market_price-goods_price) AS "价格差" FROM goods;
-- 3查询每个类别下面积压的货款
SELECT goods_name,(goods_number*goods_price) AS '积压的货款' FROM goods;
-- 4查询本店商品价格比市场价低多少钱，输出低200元以上的商品
SELECT goods_name,(market_price-goods_price) AS "价格差" FROM goods WHERE (market_price-goods_price)>200;
-- 5查询积压货款超过2万元的栏目，以及该栏目积压的货款
SELECT goods_name,(goods_number*goods_price) AS '积压的货款' FROM goods WHERE (goods_number*goods_price)>20000;
-- 6按类别号升序排列，每个类别下的商品进价降序排列
SELECT * FROM goods ORDER BY cat_id,goods_price DESC;
-- 7取价格第1-6高的商品
SELECT * FROM goods ORDER BY shop_price DESC LIMIT 6;
-- 8查询每个类别下进价最高的商品
SELECT cat_id,MAX(goods_price) FROM goods GROUP BY cat_id;
-- 9取出每个类别下最新的产品(goods_id唯一)
SELECT cat_id,MAX(goods_id) FROM goods GROUP BY cat_id;

-- 10.查询没有商品的商品类别
SELECT * FROM category WHERE NOT EXISTS(SELECT * FROM goods WHERE category.cat_id=goods.cat_id); 
-- 11.查询超过最高卖价(max shop_price)航模(cat_id 1)的商品有哪些商品？
-- 先找出航模的最高卖价,再在所有的商品中筛选高于这个卖价的商品
SELECT * FROM goods WHERE shop_price>(SELECT MAX(shop_price) FROM goods WHERE cat_id=1)

-- 12.查询每个商品类别的商品总数超过500个的商品类别有哪些？
-- 先查询出goods表中商品总数超过500个的商品id
SELECT cat_id FROM goods GROUP BY cat_id HAVING SUM(goods_number)>500;
-- 再在category查出cat_id对应的cat_name
SELECT * FROM category WHERE cat_id IN(SELECT cat_id FROM goods GROUP BY cat_id HAVING SUM(goods_number)>500);



SELECT goods.cat_id,cat_name,SUM(goods_number) FROM goods,category WHERE goods.cat_id=category.cat_id GROUP BY cat_id HAVING SUM(goods_number)>500;

SELECT goods.cat_id,cat_name,SUM(goods_number) 
FROM goods,category 
WHERE goods.cat_id=category.cat_id 
GROUP BY cat_id 
HAVING SUM(goods_number)>500;
-- 13.查询商品进价低于100的商品类别有哪些？
SELECT cat_id FROM goods WHERE goods_price<100;
SELECT * FROM category WHERE cat_id=(SELECT cat_id FROM goods WHERE goods_price<100);
SELECT cat_name,goods_price FROM goods,category WHERE goods_price<100 AND goods.cat_id=category.cat_id;
