USE day3zonghe4;
-- ===========================================综合练习2=====================================================

CREATE TABLE student(
SNO VARCHAR(3) NOT NULL,
SNAME VARCHAR(4) NOT NULL,
SSEX VARCHAR(2) NOT NULL,
SBIRTHDAY DATETIME,
CLASS VARCHAR(5)
);

CREATE TABLE course(
CNO VARCHAR(5) NOT NULL,
CNAME VARCHAR(10) NOT NULL,
TNO VARCHAR(10) NOT NULL
);

CREATE TABLE score(
SNO VARCHAR(3) NOT NULL,
CNO VARCHAR(5) NOT NULL,
DEGREE NUMERIC(10, 1) NOT NULL
);

CREATE TABLE teacher(
TNO VARCHAR(3) NOT NULL,
TNAME VARCHAR(4) NOT NULL, TSEX VARCHAR(2) NOT NULL,
TBIRTHDAY DATETIME NOT NULL, PROF VARCHAR(6),
DEPART VARCHAR(10) NOT NULL
);

INSERT INTO STUDENT (SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES (108 ,'曾华'
,'男' ,1977-09-01,95033);
INSERT INTO STUDENT (SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES (105 ,'匡明'
,'男' ,1975-10-02,95031);
INSERT INTO STUDENT (SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES (107 ,'王丽'
,'女' ,1976-01-23,95033);
INSERT INTO STUDENT (SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES (101 ,'李军'
,'男' ,1976-02-20,95033);
INSERT INTO STUDENT (SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES (109 ,'王芳'
,'女' ,1975-02-10,95031);
INSERT INTO STUDENT (SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES (103 ,'陆君'
,'男' ,1974-06-03,95031);

INSERT INTO COURSE(CNO,CNAME,TNO)VALUES ('3-105' ,'计算机导论',825)
INSERT INTO COURSE(CNO,CNAME,TNO)VALUES ('3-245' ,'操作系统' ,804);
INSERT INTO COURSE(CNO,CNAME,TNO)VALUES ('6-166' ,'数据电路' ,856);
INSERT INTO COURSE(CNO,CNAME,TNO)VALUES ('9-888' ,'高等数学' ,100);

INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (103,'3-245',86);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (105,'3-245',75);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (109,'3-245',68);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (103,'3-105',92);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (105,'3-105',88);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (109,'3-105',76);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (101,'3-105',64);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (107,'3-105',91);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (108,'3-105',78);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (101,'6-166',85);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (107,'6-106',79);
INSERT INTO SCORE(SNO,CNO,DEGREE)VALUES (108,'6-166',81);

INSERT INTO TEACHER(TNO,TNAME,TSEX,TBIRTHDAY,PROF,DEPART)
VALUES (804,'李诚','男','1958-12-02','副教授','计算机系');
INSERT INTO TEACHER(TNO,TNAME,TSEX,TBIRTHDAY,PROF,DEPART)
VALUES (856,'张旭','男','1969-03-12','讲师','电子工程系');
INSERT INTO TEACHER(TNO,TNAME,TSEX,TBIRTHDAY,PROF,DEPART)
VALUES (825,'王萍','女','1972-05-05','助教','计算机系');
INSERT INTO TEACHER(TNO,TNAME,TSEX,TBIRTHDAY,PROF,DEPART)
VALUES (831,'刘冰','女','1977-08-14','助教','电子工程系');
-- 1、 查询Student表中的所有记录的Sname、Ssex和Class列。
SELECT SNAME,SSEX,CLASS FROM student;
-- 2、 查询教师所有的单位即不重复的Depart列。
SELECT DEPART FROM teacher GROUP BY DEPART;
-- 3、 查询Student表的所有记录。
SELECT * FROM student;
-- 4、 查询Score表中成绩在60到80之间的所有记录。
SELECT * FROM score WHERE DEGREE BETWEEN 60 AND 80;
-- 5、 查询Score表中成绩为85，86或88的记录。
SELECT * FROM score WHERE DEGREE IN(85,86,88);
-- 6、 查询Student表中“95031”班或性别为“女”的同学记录。
SELECT * FROM student WHERE CLASS=95031 OR SSEX='女';
-- 7、 以Class降序查询Student表的所有记录。
SELECT * FROM student ORDER BY CLASS DESC;
-- 8、 以Cno升序、Degree降序查询Score表的所有记录。
SELECT * FROM score ORDER BY CNO,DEGREE DESC;
-- 9、 查询“95031”班的学生人数。
SELECT COUNT(*) FROM student WHERE CLASS=95031;
-- 10、查询Score表中的最高分的学生学号和课程号。
SELECT SNAME FROM student WHERE SNO=score.SNO  -- 学生的学号对应的名字
SELECT CNAME FROM student WHERE CNO=score.CNO  -- 课程编号对应的课程名字

SELECT SNO,CNO,MAX(DEGREE) FROM score;
-- 11、查询‘3-105’号课程的平均分。
SELECT AVG(DEGREE) FROM score WHERE CNO='3-105';
-- 12、查询Score表中至少有5名学生选修的并以3开头的课程的平均分数。
SELECT AVG(Degree) FROM Score WHERE cno LIKE "3%" GROUP BY Cno HAVING COUNT(Cno)>4;
-- 13、查询最低分大于70，最高分小于90的Sno列。
SELECT sno FROM Score WHERE Degree BETWEEN 70 AND 90;
-- 14、查询所有学生的Sname、Cno和Degree列。
SELECT Sname,Cno,Degree FROM student JOIN Score ON student.Sno=Score.Sno
-- 15、查询所有学生的Sno、Cname和Degree列。
SELECT Sno,Cname,degree FROM Score JOIN Course ON Course.Cno=Score.Cno;
-- 16、查询所有学生的Sname、Cname和Degree列。
SELECT student.Sname,Cname,degree FROM student JOIN Score ON student.Sno=Score.Sno JOIN Course ON Course.Cno=Score.Cno;
-- 17、查询“95033”班所选课程的平均分。
SELECT AVG(Degree) FROM Score,student WHERE student.Sno=Score.Sno AND Class='95033';
-- 19、查询选修“3-105”课程的成绩高于“109”号同学成绩的所有同学的记录。
SELECT * FROM student,Score WHERE Score.Cno='3-105' AND student.Sno=Score.Sno AND Score.Degree>(SELECT Degree FROM Score WHERE Cno='3-105' AND Sno='109');
-- 20、查询score中选学一门以上课程的同学中分数为非最高分成绩的记录。
SELECT * FROM Score a WHERE Degree <(SELECT MAX(degree) FROM Score b WHERE a.Cno=b.Cno) AND Sno IN(SELECT Sno FROM Score GROUP BY Sno HAVING COUNT(*)>1);
-- 21、查询成绩高于学号为“109”、课程号为“3-105”的成绩的所有记录。
SELECT * FROM student,Score WHERE student.Sno=Score.Sno AND Score.Degree>(SELECT Degree FROM Score WHERE Cno='3-105' AND Sno='109');
-- 22、查询和学号为108的同学同年出生的所有学生的Sno、Sname和Sbirthday列。
SELECT Sno,Sname,Sbirthday FROM student WHERE YEAR(student.Sbirthday)=(SELECT YEAR(Sbirthday) FROM student WHERE Sno='107');
-- 23、查询“张旭“教师任课的学生成绩。
SELECT Degree FROM Score,Teacher,Course WHERE Teacher.Tname='张旭' AND Teacher.Tno=Course.Tno AND Course.Cno=Score.Cno
-- 24、查询选修某课程的同学人数多于5人的教师姓名。
SELECT Tname FROM Teacher WHERE Tno IN (SELECT Tno FROM Course WHERE Cno IN (SELECT Cno FROM Score GROUP BY Cno HAVING COUNT(*)>5) );
-- 25、查询95033班和95031班全体学生的记录。
SELECT * FROM student WHERE Class='95033' OR Class='95031'
-- 26、查询存在有85分以上成绩的课程Cno.
SELECT DISTINCT cno FROM Score WHERE Degree>85;
-- 27、查询出“计算机系“教师所教课程的成绩表。
SELECT sno,Cno ,Degree FROM Score WHERE Cno IN (SELECT Cno FROM Course WHERE Tno IN (SELECT tno FROM Teacher WHERE Depart='计算机系'));
-- 28、查询“计算机系”与“电子工程系“不同职称的教师的Tname和Prof。
SELECT Tname,Prof FROM Teacher a WHERE Prof NOT IN(SELECT Prof FROM Teacher b WHERE a.Depart!=b.Depart);
-- 29、查询选修编号为“3-105“课程且成绩至少高于选修编号为“3-245”的同学的Cno、Sno和Degree,并按Degree从高到低次序排序。
SELECT * FROM Score WHERE Cno='3-105' AND Degree >ANY(SELECT Degree FROM Score WHERE Cno='3-245')
-- 30、查询选修编号为“3-105”且成绩高于选修编号为“3-245”课程的同学的Cno、Sno和Degree.
SELECT Cno,Sno,Degree FROM Score a WHERE (SELECT Degree FROM Score b WHERE Cno='3-105' AND b.Sno=a.Sno)>(SELECT Degree FROM Score c WHERE Cno='3-245' AND c.Sno=a.Sno)
-- 31、查询所有教师和同学的name、sex和birthday.
SELECT DISTINCT Sname AS "名字",Ssex AS sex,Sbirthday AS birthday FROM student 
UNION
SELECT DISTINCT Tname AS "名字",Tsex AS sex,Tbirthday AS birthday FROM Teacher;
-- 32、查询所有“女”教师和“女”同学的name、sex和birthday.
SELECT DISTINCT Sname AS NAME,Ssex AS sex,Sbirthday AS birthday FROM student WHERE Ssex='女'
UNION
SELECT DISTINCT Tname AS NAME,Tsex AS sex,Tbirthday AS birthday FROM Teacher WHERE Tsex='女'
-- 33、查询成绩比该课程平均成绩低的同学的成绩表。
SELECT Sno,Cno,Degree FROM Score a WHERE a.Degree<(SELECT AVG(Degree) FROM Score b WHERE a.Cno=b.Cno)
-- 34、查询所有任课教师的Tname和Depart.
SELECT Tname,Depart FROM Teacher WHERE tno IN (SELECT tno FROM course WHERE Cno IN (SELECT DISTINCT Cno FROM Score))
-- 35? 查询所有未讲课的教师的Tname和Depart. 
SELECT Tname,Depart FROM Teacher WHERE Tname NOT IN (SELECT DISTINCT Tname FROM Teacher,Course,Score WHERE Teacher.Tno=Course.Tno AND Course.Cno=Score.Cno)
-- 36、查询至少有2名男生的班号。
SELECT Class FROM	student WHERE Ssex='男' GROUP BY Class HAVING COUNT(*)>1;
-- 37、查询Student表中不姓“王”的同学记录。
SELECT * FROM student WHERE Sname NOT LIKE ('王%')
-- 38、查询Student表中每个学生的姓名和年龄。
SELECT Sname,YEAR(GETDATE())-YEAR(Sbirthday) FROM student;
-- 39、查询Student表中最大和最小的Sbirthday日期值。
SELECT MAX(Sbirthday) AS 最大,MIN(Sbirthday) AS 最小 FROM student;
-- 40、以班号和年龄从大到小的顺序查询Student表中的全部记录。
SELECT * FROM student ORDER BY Class DESC,Sbirthday ASC;
-- 41、查询“男”教师及其所上的课程。
SELECT Tname,Cname FROM Teacher,Course WHERE Tsex='男' AND Teacher.Tno=Course.Tno;
-- 42、查询最高分同学的Sno、Cno和Degree列。
SELECT Sno,Cno,Degree FROM Score WHERE degree=(SELECT MAX(Degree)FROM Score);
-- 43、查询和“李军”同性别的所有同学的Sname.
SELECT Sname FROM student WHERE Ssex=(SELECT Ssex FROM student WHERE Sname='李军') AND Sname NOT IN ('李军');
-- 44、查询和“李军”同性别并同班的同学Sname
SELECT Sname FROM student WHERE Ssex=(SELECT Ssex FROM student WHERE Sname='李军') AND Sname NOT IN ('李军') AND Class=(SELECT Class FROM student WHERE Sname='李军');
-- 45、查询所有选修“计算机导论”课程的“男”同学的成绩表参考答案：
SELECT Sno,Degree FROM Score WHERE Sno IN (SELECT Sno FROM student WHERE Ssex='男') AND Cno IN (SELECT Cno FROM Course WHERE Cname='计算机导论')