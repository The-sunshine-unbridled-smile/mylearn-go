USE nodepractice;
CREATE TABLE t_user(
 username VARCHAR(20), #用户名
 pwd VARCHAR(20),   #密码
 headimg VARCHAR(50)  #头像
);
ALTER TABLE t_user DROP COLUMN headimg;
