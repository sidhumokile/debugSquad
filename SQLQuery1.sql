create database Sidhu
use Sidhu

create table emp (id varchar(250),name char(50),age int,salary money);

select * from emp

alter table emp add email varchar(250)

sp_rename 'emp.name','empname'

alter table emp add location varchar(50),phone bigint

alter table emp drop column location

insert into emp values('101','sidhu',22,25000.00,'sidhu@gmail.com',977557899),
('102','ranjith',22,30000.00,'ranjith@gmail.com',96382203383),
('103','tony',22,100000.00,'tony@gmail.com',98678568),
('104','saketh',22,34000.00,'saketh@gmail.com',89383372)

truncate table emp


create table student( name char(50),rollno int,course varchar(50),gender varchar(20))

insert into student values('sidhu',22,'ECE','male'),
('tony',23,'ECE','male'),
('saketh',24,'AIML','male'),
('ranjith',null,'CSE','female')

select * from student

truncate table student

update student set gender='male' where name='ranjith'
 
update student set rollno=25 where name='ranjith'

create table sports(name char(50),sporstid varchar(60),intstsport char(50))
insert into sports (name,intstsport)  values('sidhu','cricket'),
('ranjith','carrom'),
('tony','vollyball'),
('saket','tennis')
select * from sports

update sports set sporstid=case name
when 'sidhu' then '20'
when 'ranjith' then '21'
when 'tony' then '22'
when 'saketh' then '23'
end;

update sports set name= 'saketh' where intstsport='tennis'

create table orders(productid varchar(250),productname char(50),price money)
insert into orders values ('p1','phone',30000),
('p2','laptop',60000.00),
('p3','earbuds',1500.00)
select * from orders

create table insta(username varchar(50),name char(50),followers int)
insert into insta values ('sidhu06','sidhu',1000),
('ranjith07','ranjith',11200)

select *  from insta
