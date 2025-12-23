# Android进阶

## Android组件

Android应用由四大组件构成，它们是应用的基本构建块：

### 1. Activity

- 代表一个具有用户界面的单个屏幕
- 负责处理用户交互
- 生命周期管理：onCreate()、onStart()、onResume()、onPause()、onStop()、onDestroy()

### 2. Service

- 后台运行的组件，不提供用户界面
- 用于执行长时间运行的操作
- 两种类型：前台服务和后台服务

### 3. BroadcastReceiver

- 用于接收和响应系统或应用发送的广播消息
- 可以在清单中注册或动态注册
- 常见用途：接收系统事件（如开机完成、网络变化）

### 4. ContentProvider

- 用于在应用之间共享数据
- 标准接口，允许其他应用查询或修改数据
- 常用于共享联系人、媒体文件等

## 数据存储

Android提供了多种数据存储方式：

### 1. SharedPreferences

- 用于存储键值对数据
- 适合存储简单的配置信息
- 支持多种数据类型：布尔值、整数、长整型、浮点数、字符串

### 2. 内部存储

- 应用私有的存储空间
- 数据只能被应用自身访问
- 适合存储敏感数据

### 3. 外部存储

- 公共存储空间，可以被其他应用访问
- 适合存储大文件，如图片、视频等
- 需要申请存储权限

### 4. SQLite数据库

- 轻量级的关系型数据库
- 支持SQL查询语言
- 适合存储结构化数据

### 5. Room Persistence Library

- Google推荐的ORM库，简化SQLite操作
- 提供编译时检查、注解支持
- 支持LiveData和RxJava集成

## 网络编程

### 1. HTTP客户端

- **HttpURLConnection**：标准Java API
- **OkHttp**：Square开发的高效HTTP客户端
- **Retrofit**：基于OkHttp的RESTful API客户端，支持注解和多种数据格式

### 2. 网络请求最佳实践

- 在非UI线程执行网络请求
- 处理网络异常
- 实现缓存机制
- 优化网络请求，减少流量消耗

## 多线程编程

### 1. 线程创建方式

- 继承Thread类
- 实现Runnable接口
- 使用AsyncTask（已弃用）
- 使用ExecutorService

### 2. 线程间通信

- Handler + Looper + MessageQueue
- AsyncTask
- LiveData
- RxJava
- Kotlin Coroutines

## 性能优化

### 1. 内存优化

- 避免内存泄漏
- 合理使用缓存
- 优化图片加载
- 使用LeakCanary检测内存泄漏

### 2. UI优化

- 减少布局层级
- 使用ConstraintLayout
- 避免在主线程执行耗时操作
- 使用RecyclerView优化列表性能

### 3. 启动优化

- 减少Application初始化时间
- 延迟加载非关键资源
- 使用SplashScreen API

## 总结

Android进阶开发需要掌握组件通信、数据存储、网络编程、多线程和性能优化等方面的知识。随着Android技术的不断发展，开发者需要持续学习新的API和最佳实践，以构建高质量的Android应用。