使用sequelize-cli工具实现Migrations，来管理数据结构的变更。
ps：主要是对表及表结构的增删改查操作添加记录。

在当前目录下打开命令行，并执行一下指令可以对数据库进行变更同步
npx sequelize db:migrate --env="development"