USE day3;


-- ======================================练习1====================================================
-- -- dept部门表
CREATE TABLE dept(
deptno INT PRIMARY KEY, #部门编号
dname VARCHAR(14),      #部门名称
loc VARCHAR(13)         #地点 新加了东子
);

-- emp员工表
CREATE TABLE emp(
empno INT NOT NULL PRIMARY KEY, #员工号
ename VARCHAR(10),# 员工姓名
job VARCHAR(10),#工作
mgr INT, #上级人员编号
hiredate DATETIME,#受雇日期  
sal DOUBLE, #薪金
comm DOUBLE,#佣金
deptno INT, #部门编号 外键
FOREIGN KEY(deptno) REFERENCES dept(deptno)
);
INSERT INTO dept VALUES(10, 'Accounting', 'New York') ;
INSERT INTO dept VALUES(20, 'Research', 'Dallas') ;
INSERT INTO dept VALUES(30, 'Sales', 'Chicago') ;
INSERT INTO dept VALUES(40, 'Operations', 'Boston') ;
INSERT INTO dept VALUES(50, 'Admin', 'Washing') ;

INSERT INTO emp VALUES(7369, 'Smith', 'Clerk',7902, '1980-12-17',800,0,20) ;
INSERT INTO emp VALUES(7499, 'Allen', 'Salesman',7698,'1981-2-20',1600,300,30) ;
INSERT INTO emp VALUES(7844, 'Turner', 'Salesman',7499, '1981-9-8',1500,0,30) ;
INSERT INTO emp VALUES(7698, 'Tom', 'Manager',0, '1981-9-8',6100,600,40) ;
INSERT INTO emp VALUES(7876, 'Adams', 'Clerk',7900, '1987-5-23',1100,0,20) ;
INSERT INTO emp VALUES(7900, 'James', 'Clerk',7698, '1981-12-3',2400,0,30) ;
INSERT INTO emp VALUES(7902, 'Ford', 'Analyst',7698, '1981-12-3',3000,NULL,20) ;
INSERT INTO emp VALUES(7901, 'Kik', 'Clerk',7900, '1981-12-3',1900,0,30) ;
-- 工资 ＝ 薪金 ＋ 佣金
-- 1．列出至少有一个员工的所有部门。
SELECT deptno,dname FROM dept WHERE deptno IN (SELECT DISTINCT deptno FROM emp);
SELECT dept.deptno,dname FROM dept,emp WHERE dept.deptno=emp.deptno GROUP BY dept.deptno

-- 2．列出薪金比“SMITH”多的所有员工。() 
SELECT a.ename,a.sal FROM emp a JOIN emp b ON a.sal>b.sal AND b.ename='Smith'

-- 先查询出SMITH的薪金sal
SELECT sal FROM emp WHERE ename='Smith';
SELECT ename,sal FROM emp WHERE sal>(SELECT sal FROM emp WHERE ename='Smith');

-- 3．列出所有员工的姓名及其直接上级的姓名。
SELECT a.ename,b.ename FROM emp a JOIN emp b ON a.mgr=b.empno;

SELECT b.ename FROM emp b WHERE a.mgr=b.empno;
SELECT a.ename AS "员工名字",(SELECT b.ename FROM emp b WHERE a.mgr=b.empno) AS "上司姓名" FROM emp a;

-- 4．列出受雇日期早于其直接上级的所有员工。(同上,日期可直接拿来比较) 
SELECT * FROM emp a JOIN emp b ON a.hiredate<b.hiredate WHERE a.mgr=b.empno;
-- 先找到上级的受雇日期
SELECT b.hiredate FROM emp b WHERE a.mgr=b.empno;
SELECT * FROM emp a WHERE a.hiredate<(SELECT b.hiredate FROM emp b WHERE a.mgr=b.empno);

-- 5．列出所有工作为“CLERK”（办事员）的姓名及其部门名称。(域，注意()) 
SELECT emp.ename,dept.dname FROM emp,dept WHERE dept.deptno=emp.deptno AND emp.job='Clerk';

SELECT dname FROM dept WHERE dept.deptno=emp.deptno;
SELECT ename,(SELECT dname FROM dept WHERE dept.deptno=emp.deptno) FROM emp WHERE job='Clerk';

-- 6．列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号。
SELECT emp.ename FROM emp JOIN dept ON dept.dname='Sales'AND emp.deptno=dept.deptno; 

SELECT deptno FROM dept WHERE dname='Sales';
SELECT ename FROM emp WHERE deptno=(SELECT deptno FROM dept WHERE dname='Sales');

-- 7．列出薪金高于公司平均薪金的所有员工。(反复查自己) 
SELECT DISTINCT a.ename,a.sal FROM emp a,(SELECT AVG(sal) AS "平均" FROM emp) AS b WHERE a.sal>b.平均

SELECT AVG(sal) FROM emp;
SELECT ename FROM emp WHERE sal>(SELECT AVG(sal) FROM emp);

-- 8．列出与“Kik”从事相同工作的所有员工。(排除自己) 
SELECT a.ename FROM emp a JOIN emp b ON b.ename='Kik' AND a.job=b.job AND a.ename!='KiK';

-- 先找出Kik从事的工作
SELECT job FROM emp WHERE ename='KiK';
SELECT ename FROM emp WHERE job=(SELECT job FROM emp WHERE ename='KiK') AND ename !='KiK';

-- 9．列出薪金等于部门30中员工的薪金的所有员工的姓名和薪金。(any的用法，且排挤) 
SELECT a.ename,a.sal FROM emp a JOIN emp b ON b.deptno=30 AND a.sal=b.sal AND a.deptno!=30; 

-- 先找出部门30中的薪金
SELECT sal FROM emp WHERE deptno=30
SELECT ename,sal FROM emp WHERE sal=ANY(SELECT sal FROM emp WHERE deptno=30) AND deptno!=30;

-- 10．列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金。(max的用法)
SELECT DISTINCT a.ename,a.sal FROM emp a,(SELECT MAX(sal) AS "最大" FROM emp WHERE emp.deptno=30) AS b 
WHERE a.sal>b.最大 AND a.deptno!=30

SELECT ename,sal FROM emp WHERE sal>(SELECT MAX(sal) FROM emp WHERE deptno=30)

-- 11．列出在每个部门工作的员工数量、平均工资和平均服务年期限。(
SELECT DISTINCT deptno,COUNT(*),AVG(IFNULL(sal,0)+IFNULL(comm,0)),AVG(YEAR(NOW())-YEAR(hiredate)) FROM emp GROUP BY deptno;

-- 12．列出所有员工的姓名、部门名称和工资. 


-- 先通过部门编号相同找出对应的部门名称
SELECT dname FROM dept WHERE dept.deptno=emp.deptno;
SELECT ename,(SELECT dname FROM dept WHERE dept.deptno=emp.deptno),sal FROM emp;


-- ==========================================综合练习=============================================
CREATE TABLE students(              --  学生信息表
 studentid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,  --  学号
 StudentName VARCHAR(20) NOT NULL,   --  学生姓名
 gender CHAR(2),              -- 学生性别
 birthday DATE
)ENGINE=INNODB;

-- 测试数据
INSERT INTO students(studentname,gender,birthday) VALUES
('张三','男','1987-02-01'),
('李斯','女','1990-12-01'),
('王二','男','1988-09-01'),
('黎明','男','1991-08-01');

CREATE TABLE teachers(   --  老师信息表
  teacherid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,  --  老师编号
  teacherName VARCHAR(20) NOT NULL            --  老师姓名
)ENGINE=INNODB;

-- 测试数据
INSERT INTO teachers(teacherName) 
VALUES('张三'),('李四'),('王五'),('Jacky'),('Helen'),('Kevin');


CREATE TABLE courses(                --  课程表
  Courseid INT AUTO_INCREMENT NOT NULL,  --  课程号
  courseName VARCHAR(20) NOT NULL UNIQUE,     --  课程名
  TeacherID INT NOT NULL ,                   --  教师编号
  FOREIGN KEY (teacherID) REFERENCES teachers(teacherId),
  PRIMARY KEY (courseid,teacherid)
)ENGINE=INNODB;
-- 测试数据
INSERT INTO courses(coursename, teacherID) VALUES
('pre',4),('c',4),('sql',5),('java oo',3),('oracle',5),
('ooad',3),('Web前端',5),('Java web',4),('Java EE',3),('Android',2),('毕业项目',5),
('就业课',1);

CREATE TABLE scores(                --  成绩表
   studentid INT NOT NULL,         --  学号
   courseid INT NOT NULL,          --  课程号
   mark INT,                       --  成绩
   PRIMARY KEY (studentid,courseid),
   FOREIGN KEY (studentid) REFERENCES students(studentid),
   FOREIGN KEY (courseid) REFERENCES Courses(CourseID)
)ENGINE=INNODB;

-- 测试数据

INSERT INTO scores(studentid,courseid,mark) VALUES
(1,1,60),(1,2,70),(1,3,80),(1,4,55),(1,5,100),(1,6,90),
(2,1,50),(2,2,70),(2,3,80),(2,4,55),(2,5,100),(2,6,90),(2,7,50),(2,8,70),(2,9,50),(2,10,55),(2,11,100),(2,12,30),
(3,1,90),(3,2,70),(3,3,80),(3,4,55),(3,5,100),(3,6,90),(3,7,90),(3,8,80),(3,9,90),(3,10,55),(3,11,100),(3,12,100),
(4,1,100),(4,2,70),(4,3,80),(4,4,55),(4,5,100),(4,6,90),(4,9,100),(4,10,90);


-- 请编写SQL语句，完成如下任务: 
--  1.查询课程"1"比课程"2"成绩高的所有学生的学号
-- 找出每个学生课程2 的成绩
-- 方法1
SELECT a.studentid AS "学号",students.StudentName AS "姓名" FROM students,(SELECT * FROM scores WHERE courseid=1) a LEFT JOIN
(SELECT * FROM scores WHERE courseid=2) b 
ON a.studentid=b.studentid
WHERE a.mark>b.mark AND a.studentid=students.studentid; 
-- 方法2
SELECT DISTINCT studentid FROM scores st1 
WHERE (SELECT mark FROM scores st2 WHERE courseid=1 AND st2.studentid=st1.studentid)>
(SELECT mark FROM scores st2 WHERE courseid=2 AND st2.studentid=st1.studentid)
-- 方法3

     
--  2.查询平均成绩大于60分的同学的学号和平均成绩
SELECT studentid,AVG(mark) FROM scores GROUP BY studentid HAVING AVG(mark)>60;
--  3.查询所有同学的学号、姓名、选课数、总成绩
-- 选课数,总成绩
SELECT studentid,(SELECT StudentName FROM students WHERE students.studentid=scores.studentid),COUNT(courseid),SUM(mark) FROM scores GROUP BY studentid;

--  4.查询姓“王”的老师的个数
SELECT COUNT(teacherName) FROM teachers WHERE teacherName LIKE "王%"
--  5.查询没学过"张三"老师课的同学的学号、姓名
-- 张三老师教的课程
SELECT teacherid FROM teachers WHERE teacherName='张三';    -- 1
SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三') -- 12
-- 找到在学课程12的学生id
SELECT studentid FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三'))

SELECT studentid,StudentName FROM students WHERE studentid NOT IN(SELECT studentid FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三')))

--  6.查询学过“001”并且也学过编号“002”课程的同学的学号、姓名；
-- 学过编号“1””并且也学过编号“2”课程的同学的学号
SELECT studentid FROM scores WHERE courseid=1 AND courseid=2
SELECT studentid,StudentName FROM students WHERE studentid IN(SELECT DISTINCT studentid FROM scores WHERE courseid IN(1,2));

-- 方法2
SELECT scores.studentid AS "学号",StudentName AS "姓名" 
FROM scores,students 
WHERE scores.courseid=1  AND scores.studentid=students.studentid 
AND EXISTS(SELECT students.studentid FROM scores a WHERE a.studentid=students.studentid AND a.courseid=2)

--  7.查询学过“张三”老师所教的所有课的同学的学号、姓名
SELECT teacherid FROM teachers WHERE teacherName='张三';    -- 张三的id 1
SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三') -- 12张三教的课程
SELECT studentid FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三'))

SELECT studentid,StudentName FROM students WHERE studentid IN(SELECT studentid FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三')))
--  8.查询课程编号“2”的成绩比课程编号“1”课程低的所有同学的学号、姓名

--  9.查询所有课程的成绩小于60分的同学的学号、姓名
-- 找出所有课程的成绩小于60分的同学的学号
SELECT studentid FROM scores HAVING MAX(mark)<60;
SELECT studentid,StudentName FROM students WHERE studentid=(SELECT studentid FROM scores HAVING MAX(mark)<60);
-- 10.列出sql成绩大于等于 所有学生sql平均成绩的学生
-- 找到spl的课程id  3
SELECT Courseid FROM courses WHERE courseName='sql';  -- 3
-- 平均成绩
SELECT AVG(mark) FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE courseName='sql');
-- 大于等于平均成绩的学生的id
SELECT studentid FROM scores WHERE mark>=(SELECT AVG(mark) FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE courseName='sql')) GROUP BY studentid

SELECT studentid,StudentName FROM students WHERE studentid IN(SELECT studentid FROM scores WHERE mark>=(SELECT AVG(mark) FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE courseName='sql')) GROUP BY studentid)
-- 11.列出没有上过“就业课”的同学
-- 就业的id
SELECT Courseid FROM courses WHERE courseName='就业课';  -- 12
-- 上过就业课的学生id
SELECT studentid FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE courseName='就业课');

SELECT studentid,StudentName FROM students WHERE studentid NOT IN(SELECT studentid FROM scores WHERE courseid=(SELECT Courseid FROM courses WHERE courseName='就业课'));
-- 12.列出“王五”老师 所教授的课程有哪些？（列出课程名字，和老）师名字
-- 找到王五老师的id
SELECT teacherid FROM teachers WHERE teacherName='王五';  -- 3
SELECT courseName,(SELECT teacherName FROM teachers WHERE teacherName='王五') FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='王五')

-- 13.列出被学生得到100分的课程有哪些？
SELECT DISTINCT courseid FROM scores WHERE mark=100;
SELECT courseName,Courseid FROM courses WHERE Courseid IN(SELECT DISTINCT courseid FROM scores WHERE mark=100)

-- 14.列出所有学生每门课程的考试成绩
SELECT StudentName FROM students WHERE studentid=scores.studentid  -- 学生姓名
SELECT courseName FROM courses WHERE Courseid=scores.courseid   -- 课程名字

SELECT (SELECT StudentName FROM students WHERE studentid=scores.studentid),(SELECT courseName FROM courses WHERE Courseid=scores.courseid),mark FROM scores







