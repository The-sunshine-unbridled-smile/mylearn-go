-- 2.查询张三12月份的销售记录
SELECT * FROM t_shop_xs WHERE g_person = "张三" AND g_date LIKE "____-12%";
-- 月份函数 MONTH()
SELECT * FROM t_shop_xs WHERE g_person = "张三" AND MONTH(g_date)=2013;

-- 商品类别表 --
CREATE TABLE category(
   cat_id INT PRIMARY KEY AUTO_INCREMENT,#类别编号
   cat_name VARCHAR(30) NOT NULL#类别名称
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

-- 5查询积压货款(goods_price*goods_number)超过20万元的栏目(每个类别 group by cat_id)，以及该栏目积压的货款(sum)
-- 1.查询每个栏目的积压货款 2.做二次筛选
SELECT cat_id, SUM(goods_price*goods_number) AS "total" FROM goods GROUP BY cat_id HAVING total>200000;

-- 9取出每个类别下最新的产品(goods_id唯一)
-- 思考：把goods_name也要显示出来
SELECT cat_id, MAX(goods_id),goods_name FROM goods GROUP BY cat_id;

-- 10.查询没有商品的商品类别
-- 1.从goods知道有商品的商品id是哪些 
SELECT DISTINCT cat_id FROM goods;

-- 2.把1.结果和category cat_id做比较
-- ==》category里面cat_id没有出现在1结果 --> 这个类别是没有商品
SELECT cat_id,cat_name FROM category WHERE cat_id NOT IN(1,2,3);

-- 11.查询超过最高卖价航模的商品有哪些商品？
-- 1.先从category得到航模的cat_id
SELECT cat_id FROM category WHERE cat_name = "航模"; -- 1
-- 2.航模最高卖价
SELECT MAX(shop_price) FROM goods WHERE cat_id=1 -- 1200
-- 3. 把价格超过1200的商品列出来
SELECT goods_name FROM goods WHERE shop_price > 1200;

-- 12.查询每个商品类别的商品总数超过500个的商品类别有哪些？
-- 1.先按类别分类，得到每个类别下的商品总数
-- 2. 二次筛选 总数>500
SELECT cat_id, SUM(goods_number) FROM goods GROUP BY cat_id HAVING SUM(goods_number)>500;
-- 得到了2,3
-- 3.从category表查到2,3的商品类别名称
SELECT cat_name FROM category WHERE cat_id IN(2,3);

-- 13.查询商品进价低于100的商品类别有哪些？
-- 先找出商品进价<100的所有的cat_id
SELECT DISTINCT cat_id FROM goods WHERE goods_price<100; -- 1,3
-- 从category 找到1,3的商品类别名称
SELECT * FROM category WHERE cat_id IN (1,3);


SELECT * FROM category 
WHERE cat_id 
IN (SELECT DISTINCT cat_id FROM goods WHERE goods_price<100);


