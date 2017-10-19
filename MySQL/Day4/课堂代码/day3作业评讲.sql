-- 3．列出所有员工的姓名及其直接上级的姓名。
-- 上级姓名 
-- m表: 1.WHERE 根据empno来源，和主查询那条数据的mgr是一样的，查询SELECT投影ename
SELECT ename FROM emp WHERE empno = 7902
-- 员工姓名 
-- e表: 1.员工姓名 2.mgr这一列编号 SELECT所有员工
SELECT ename AS "员工姓名",
(SELECT ename FROM emp AS m WHERE m.empno = e.mgr) AS "上级姓名"  
FROM emp AS e

-- 4．列出受雇日期早于其直接上级的所有员工。(同上,日期可直接拿来比较) 
SELECT * FROM emp e 
WHERE hiredate < (SELECT hiredate FROM emp m WHERE e.mgr = m.empno)


-- 9．列出薪金等于部门30中员工的薪金的所有员工的姓名和薪金。(any的用法，且排挤) 
SELECT ename,sal FROM emp
WHERE sal = ANY(SELECT sal FROM emp WHERE deptno = 30)
AND deptno!=30

-- 10．列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金。(max的用法) 
SELECT ename,sal FROM emp
WHERE sal > (SELECT MAX(sal) FROM emp WHERE deptno = 30)

-- 11．列出在每个部门工作 group by deptno的员工数量count、平均工资AVG(sal+comm)和平均服务年期限AVG(当前日期-hiredate)
SELECT deptno, COUNT(*), AVG(IFNULL(sal,0)+IFNULL(comm,0)),AVG(YEAR(NOW())-YEAR(hiredate)) FROM emp GROUP BY deptno

