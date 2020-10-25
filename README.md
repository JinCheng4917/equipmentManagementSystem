# equipmentManagementSystem
Software engineering experiment --  Equipment management system

### 配置方法
本机配置好MVN、NodeJS、下载IDEA和WebStorm <br>
git clone https://github.com/zhangwenda4917/equipmentManagementSystem.git 到本机

##### 后台
打开IDEA，选择open project, 选择api文件中的pom.xml, 选中后选择open as project <br>
待项目完全打开后运行 mvn install <br>
打开数据库软件，配置数据库 <br>
数据库采用3306端口，数据库名称：equipment_management <br>
依赖安装完成后运行mvn spring-boot:run启动项目 <br>

##### 前台
打开webStorm，选择项目文件中的web文件打开即可 <br>
运行 npm install 安装额外包 <br>

###### 中间件
本系统中间件采用Nginx，具体配置方法见：https://segmentfault.com/a/1190000022013139 <br>

### 备注
如有其他问题请联系QQ: 3300491785 <br>
