SELECT * FROM t_student;
SELECT classname FROM t_class;

-- 查询学生姓名，分数，班级名称
-- 发生在投影列
-- 1. 相关子查询 - SELECT嵌套
-- 子查询是依赖着主查询
-- 当主查询执行1次，子查询也会执行一次
-- 子查询无法单独执行
SELECT stuname,grade,classid,(SELECT classname FROM t_class WHERE t_class.id=s.classid) FROM t_student AS s;
-- 返回的数据必须是单行单列


-- 查询web里面的学生有哪些
-- 首先要知道的是web id -- 1
SELECT id FROM t_class WHERE classname = "web"
-- WHERE嵌套
-- 2.非相关子查询
-- 子查询独立于主查询，只需要执行1次，不依赖主查询，单独给主查询提供条件值
SELECT * 
FROM t_student 
WHERE classid = (SELECT id FROM t_class WHERE classname = "web");

-- 同一张表也可以实现子查询
-- 和隔壁老王一个班的同学有哪些
-- 1.隔壁老王哪个班
SELECT classid FROM t_student WHERE stuname = "隔壁老王"
-- 查询classid为2的学生
SELECT * 
FROM t_student 
WHERE classid = (SELECT classid FROM t_student WHERE stuname = "隔壁老王") 
AND stuname != "隔壁老王" 

-- WHERE: 单行单列， 多行单列
-- IN
-- 查询至少有一名学生的班级名称
SELECT classname FROM t_class WHERE id IN (SELECT DISTINCT classid FROM t_student)

-- ALL运算符
-- 子查询可以是多行单列的结果
-- 把值进行逐一比较，全部返回true才满足条件 （并且关系）
-- 查询分数比班上所有男生高的女生
-- 条件: 女生，分数>所有男生的分数

SELECT grade FROM t_student WHERE sex = "男";

SELECT * FROM t_student
WHERE sex="女" AND grade>ALL(SELECT grade FROM t_student WHERE sex = "男")

-- 另一种做法:
SELECT MAX(grade) FROM t_student WHERE sex = "男"


-- ANY 运算符
-- 只要满足其中一个就行了

-- 查询比任意一个男生分数高的女生
SELECT * FROM t_student
WHERE sex="女" AND grade>ANY(SELECT grade FROM t_student WHERE sex = "男")

-- 另一种做法:
SELECT MIN(grade) FROM t_student WHERE sex="男"

-- FROM 嵌套
SELECT * 
FROM
(SELECT stuid,stuname,grade FROM t_student) AS s
WHERE grade>60
-- FROM 嵌套可以多行多列

SELECT * FROM t_student t1
WHERE 
grade>(SELECT avggrade FROM 
(SELECT classid, AVG(grade) AS avggrade FROM t_student GROUP BY classid) t2
WHERE t1.classid = t2.classid
)

SELECT * FROM t_student AS p WHERE grade > 
(
   SELECT AVG(grade) FROM t_student AS c WHERE classid = p.classid
)


SELECT * 
FROM t_student,(SELECT classid,AVG(grade) AS avgg FROM t_student GROUP BY classid) AS zz 
WHERE t_student.classid = zz.classid AND t_student.grade>zz.avgg;

