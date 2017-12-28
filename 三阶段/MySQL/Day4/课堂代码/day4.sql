-- 查询2张表
-- 查询学生姓名，及所在的班级名称
SELECT stuname, (SELECT classname FROM t_class WHERE t_class.id=t_student.classid) FROM t_student 
-- 表连接
-- SELECT 列 FROM 表1 JOIN 表2 ON 条件表1.外键列 = 表2.主键列

SELECT * FROM t_student JOIN t_class ON t_student.classid = t_class.id

-- 查询学生姓名，及所在的班级名称
SELECT stuname,classname FROM t_student AS s JOIN t_class AS c ON s.classid = c.id

-- 表连接的种类
-- 1. 内联接
-- [INNER] JOIN...ON条件
-- 缩写的方法 FROM 表1，表2 WHERE 过滤
SELECT * FROM t_student,t_class WHERE t_student.classid = t_class.id

-- 2.外连接

-- 左外连接 LEFT OUTER JOIN ... ON...
-- 目的: 以显示完整的左表信息为核心，不管右表有没有符合的条件，
-- 如果右表没有符合的信息，就直接以空值NULL 占位

SELECT* FROM t_student s LEFT JOIN t_class c ON s.classid = c.id

-- 查询所有学生姓名及班级名称（包含未分班的学生）
SELECT stuname,classname FROM t_student s LEFT JOIN t_class c ON s.classid = c.id

-- 右联接
SELECT * FROM t_student s RIGHT JOIN t_class c ON s.classid=c.id

-- MySQL 没有全连接

-- 自连接
-- 既可以是inner join 也可以是 outer join, 连接的表示来源于同一张表


-- 3．列出所有员工的姓名及其直接上级的姓名。
SELECT ename AS "员工姓名", (SELECT ename FROM emp m WHERE m.empno = e.mgr ) AS "上级姓名"
FROM emp e

-- >> 通过表连接把员工表及上级表连接起来
SELECT e.ename AS "员工姓名", m.ename AS "上级姓名" FROM emp e JOIN emp m ON e.mgr = m.empno

-- 必须要加表的别名来区分
