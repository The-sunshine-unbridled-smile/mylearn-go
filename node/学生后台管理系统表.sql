USE studentproject;
CREATE TABLE c_course(
 c_id INT PRIMARY KEY AUTO_INCREMENT,  #班级课程id
 b_id INT,        #表id（课程阶段表id）
 p_id INT,        #人员编号
 c_no INT,        #班级编号 
 c_date VARCHAR(20),#课程开始日期
 c_repeat VARCHAR(20)  #重复周期
 );
 
 CREATE TABLE t_student(
   stu_id               INT AUTO_INCREMENT PRIMARY KEY, -- 学生编号
   class_id  		INT,			-- 班级ID
   stu_name             VARCHAR(20),			-- 学生姓名
   stu_phone            INT,				-- 联系电话
   stuQQ                INT,				-- QQ
   stu_endsch           VARCHAR(20),			-- 毕业学校
   stuendtime           VARCHAR(15),				-- 毕业时间
   stuedu               VARCHAR(20),			-- 学历
   stu_contactsphn      INT,				-- 紧急联系人电话
   stu_sex              CHAR(2),			-- 性别
   stu_email            VARCHAR(20),			-- 邮箱
   stu_bz		VARCHAR(50)			-- 备注
);
