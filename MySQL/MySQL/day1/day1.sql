-- 创建数据库
CREATE DATABASE demo140a;

-- 使用数据库
USE demo140a;

-- 删除数据库
DROP DATABASE demo140a;

-- ==============表=================
/*
1.数字 INT FLOAT
2.字符串
CHAR(10) --- 长度10 大小为10字节
VARCHAR(10) --- 长度10 大小根据实际字符来计算 ab  2字节
3.日期类
DATE 日期 2017-01-01 YYYY-MM-DD
DATETIME 日期+时间 YYYY-MM-DD HH:MM:SS 2017-01-01 15:00:00
4.长文本、段落文本 text longtext
*/

-- 创建表
-- CREATE TABLE 表名(列名1 列1的数据类型, 列名2 列2的数据类型....);
CREATE TABLE t_student(
stuid INT,
stuname VARCHAR(10)
);

CREATE TABLE t_student(
id INT PRIMARY KEY AUTO_INCREMENT,
stuid INT UNIQUE,
stuname VARCHAR(10)
);
-- 创建数据库的时候不能创建两张同名的表 t_student already exists

-- 删除表
DROP TABLE t_student;

-- 添加约束
-- 1. 实体完整性 Primary Key, Unique
-- Primary Key 唯一，并且不能为空 主键
-- Unique 唯一不能重复，但是可以为空
CREATE TABLE t_student(
id INT PRIMARY KEY AUTO_INCREMENT,
stuid INT UNIQUE,
stuname VARCHAR(10)
);
-- 2.域完整性
-- 非空NOT NULL 默认 DEFAULT
CREATE TABLE t_student(
id INT PRIMARY KEY AUTO_INCREMENT,
stuid INT UNIQUE,
stuname VARCHAR(10) NOT NULL,
sex VARCHAR(5) DEFAULT '男'
);


-- 3.引用完整性
-- 创建主表
CREATE TABLE t_class(
id INT PRIMARY KEY AUTO_INCREMENT,
classid INT NOT NULL UNIQUE,
classname VARCHAR(50) NOT NULL
)

-- 创建从表 （有依赖关系）
CREATE TABLE t_student(
id INT PRIMARY KEY AUTO_INCREMENT,
stuid INT UNIQUE,
stuname VARCHAR(10),
classid INT REFERENCES t_class(id)
);

-- 添加外键约束
CREATE TABLE t_student(
id INT PRIMARY KEY AUTO_INCREMENT,
stuid INT UNIQUE,
stuname VARCHAR(10),
classid INT REFERENCES t_class(id),	-- 添加了外键，没有约束
CONSTRAINT FOREIGN KEY(classid) REFERENCES t_class(id) -- 数据只能从主表中获取
);

-- 数据应该先从主表开始添加，再去添加从表
-- 从表连的是主表的主键

DROP TABLE t_class;	-- 如果有外键约束，删除表必须从从表开始，没有约束后才能删除主表

-- 修改表操作
-- 添加列
-- alter table 表名 add 列名 数据类型 约束
ALTER TABLE t_student ADD grade FLOAT;
-- 添加到指定位置
ALTER TABLE t_student ADD grade FLOAT AFTER stuname;

-- 修改列
-- ALTER TABLE 表名 CHANGE 旧的列名 新的列名 新的数据类型 新的列约束
ALTER TABLE t_student CHANGE grade grades INT;

-- 删除列
-- ALTER TABLE 表名 DROP COLUMN 列名
ALTER TABLE t_student DROP COLUMN grades;

-- 修改自增长数字
ALTER TABLE t_student AUTO_INCREMENT=500;

-- ========================数据操作====================
-- 添加新数据
-- INSERT INTO 表名 (指定列，如果不写就是所有列) VALUES (值必须对应列的位置)

INSERT INTO t_student(stuid,stuname) VALUES (104,'赵六')

INSERT INTO t_student(stuid) VALUES (106)

ALTER TABLE t_student CHANGE stuname stuname VARCHAR(10) NOT NULL; 

-- 主键是自增长，写NULL
INSERT INTO t_student VALUES (NULL,109,'陈明',100,1);
-- Column count doesn't match value count at row 1

ALTER TABLE t_student ADD sex VARCHAR(5) DEFAULT '男'

-- 使用默认值 DEFAULT
INSERT INTO t_student VALUES (NULL,110,'王尼玛',50,1,DEFAULT);
-- 不用默认值，直接传值
INSERT INTO t_student VALUES (NULL,111,'王尼美',50,1,'女');

-- 同时添加多行数据
INSERT INTO t_student VALUES 
(NULL,112,'宋丹玲',80,1,'女'),
(NULL,113,'伍梦',90,1,'女');

-- 更新数据
-- UPDATE 表名 SET 列名='新值'
UPDATE t_student SET sex='女' -- 更新整列到所有的数据

-- 添加条件
-- 把王五的性别改成男
UPDATE t_student SET sex='男' WHERE stuname='王五'

-- 删除数据
-- 删除某一行数据: 
-- DELETE FROM 表名 WHERE 条件
DELETE FROM t_student WHERE stuid = 105; 

-- 删除所有的数据
DELETE FROM t_student; 

-- 直接清空所有数据
-- TRUNCATE TABLE 表名
TRUNCATE TABLE t_student;

