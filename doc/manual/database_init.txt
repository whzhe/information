mysql -u root -p
1234

create database information;

use information;

create table user(id bigint unsigned primary key auto_increment,
    -> userName char(32) not null,
    -> password char(32) not null,
    -> nickyName char(32) not null,
    -> email char(64) not null default 'email@email.com',
    -> phoneNum char(16) not null default '12345678901',
    -> weixinAcc char(64) not null default 'invalid',
    -> qqAcc char(64) not null default 'invalid',
    -> weiboAcc char(64) not null default 'invalid',
    -> isEmailActived boolean default 'false',
    -> isPhoneActived boolean default 'false');
