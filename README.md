<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-09-06 09:16:30
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-09-06 09:19:10
 * @FilePath: \marry\README.md
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
### 梦蔷微项目规范：

##### 项目框架：

vue2.0+sass+eslint

------

##### 页面组件（文件夹）存放于views内

------

##### 页面组件对应的子组件存放于页面组件文件夹下的components内

------

##### 公共类组件存放于src下的components内（头部+版权）

------

##### 图片等静态资源存放于src-assets-image内

------

##### css样式、动画特效统一：商定

------

##### git commit提交说明：

add：新增XXX功能或XXX页面

change：改变XXX功能或XXX页面(用于普通的修改)

fix：修改XXX功能或XXX页面（用于bug的修改）

final：完成XXX功能或XXX页面

remove：移除XXX功能或XXX页面

------

##### 命名规范：

class类命名格式：test-class（-）

变量命名格式：testName（小驼峰）

函数命名格式：handleTestFunction（大驼峰）

组件名命名格式：HeaderView（加View后缀）

不出现无意义、无语义命名，如abc，aaa，bbb

------

##### 结构规范：

单个组件内只允许出现一个script标签，可出现多个style标签，style样式按照布局样式、交互效果做大类区分，放于独立的style标签中

------

##### 分支规范：

所有提交都提交于master分支
