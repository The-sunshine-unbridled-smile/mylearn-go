--  1.查询课程"001"比课程"002"成绩高的所有学生的学号

SELECT DISTINCT studentid FROM scores st1
WHERE 
(SELECT mark FROM scores st2 WHERE courseid=1 AND st2.studentid = st1.studentid)
>(SELECT mark FROM scores st2 WHERE courseid=2 AND st2.studentid = st1.studentid)


SELECT studentid,mark 
FROM scores s2 
WHERE courseid=1 
AND mark>(SELECT s1.mark FROM scores s1 WHERE courseid=2 AND s1.studentid = s2.studentid);

--  3.查询所有同学的学号、姓名、选课数、总成绩

SELECT studentid,(SELECT StudentName FROM students WHERE studentid = s.studentid),COUNT(*),SUM(mark) FROM scores s GROUP BY studentid 

--  5.查询没学过"张三"老师课的同学的学号、姓名
-- 从scores表知道学过什么课没有，students得到姓名，
-- courses知道这门课是哪个老师教的，teachers表知道张三的teacherid

-- 先看张三老师教了什么课
SELECT Courseid FROM courses WHERE TeacherID = (SELECT teacherid FROM teachers WHERE teacherName="张三")

-- 看一下哪些学生学了courseid = 12的课
SELECT studentid FROM scores WHERE courseid = 12

-- studentname
SELECT studentid, StudentName 
FROM students 
WHERE studentid 
NOT IN (SELECT studentid 
	FROM scores 
	WHERE courseid = 
	(SELECT Courseid FROM courses 
	WHERE TeacherID = 
	(SELECT teacherid FROM teachers WHERE teacherName="张三")))
	




