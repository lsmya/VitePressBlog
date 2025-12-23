# Android基础

## 什么是Android

Android是一种基于Linux内核的开源移动操作系统，主要用于智能手机和平板电脑等移动设备。由Google主导开发，是目前全球市场份额最大的移动操作系统。

## Android系统架构

Android系统采用分层架构设计，主要包括以下几个层次：

1. **Linux内核层**：提供底层硬件驱动和核心系统服务
2. **硬件抽象层（HAL）**：抽象化硬件接口，方便上层调用
3. **系统运行库层**：包含C/C++库和Android运行时（ART）
4. **应用框架层**：提供各种系统服务和API
5. **应用层**：用户安装的各种应用程序

## Android开发环境搭建

### 1. 安装JDK

Android开发需要Java开发环境，建议安装JDK 11或以上版本。

### 2. 安装Android Studio

Android Studio是官方推荐的集成开发环境（IDE），包含了Android SDK、模拟器等开发工具。

### 3. 配置Android SDK

在Android Studio中配置所需的Android SDK版本，通常建议安装最新稳定版。

## 第一个Android应用

### 创建项目

1. 打开Android Studio
2. 选择"Start a new Android Studio project"
3. 选择"Empty Activity"模板
4. 填写项目名称、包名和保存位置
5. 选择最低SDK版本
6. 点击"Finish"创建项目

### 项目结构

- `app/src/main/java`：Java/Kotlin源代码目录
- `app/src/main/res`：资源文件目录（布局、字符串、图片等）
- `app/build.gradle`：模块级构建配置
- `settings.gradle`：项目级构建配置

### 运行应用

1. 连接Android设备或启动模拟器
2. 点击"Run"按钮或使用快捷键Shift+F10
3. 等待应用安装并运行

## 常用开发语言

Android开发支持多种编程语言：

- **Java**：传统的Android开发语言
- **Kotlin**：Google推荐的官方开发语言，更简洁、安全
- **C/C++**：用于性能敏感的代码或跨平台开发

## 总结

Android基础开发需要掌握系统架构、开发环境搭建、项目创建和基本的应用开发流程。后续将深入学习Android组件、UI设计、数据存储等高级 topics。