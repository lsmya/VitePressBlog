# Jetpack Compose

## 什么是Jetpack Compose

Jetpack Compose是Google推出的现代化Android UI工具包，用于构建原生Android应用界面。它采用声明式UI编程模型，允许开发者通过编写简洁、直观的代码来创建交互式UI。

## Compose的核心优势

- **声明式UI**：只需描述UI应该是什么样子，而不用关心如何实现
- **简化的UI代码**：减少样板代码，提高开发效率
- **实时预览**：在Android Studio中实时查看UI效果
- **强大的动画支持**：内置动画API，轻松创建流畅的动画效果
- **与现有代码兼容**：可以与传统View系统共存
- **Kotlin优先**：充分利用Kotlin语言特性，如lambda表达式、扩展函数等

## 核心概念

### 1. Composable函数

Compose使用带有`@Composable`注解的函数来定义UI组件：

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "Hello, $name!")
}
```

### 2. State管理

- **remember**：用于在重组之间保存状态
- **mutableStateOf**：创建可观察的状态
- **State Hoisting**：将状态提升到父组件，实现单一数据源

### 3. 布局系统

- **Column**：垂直排列子组件
- **Row**：水平排列子组件
- **Box**：叠放子组件
- **ConstraintLayout**：基于约束的布局
- **LazyColumn/LazyRow**：高效的滚动列表

### 4. 主题系统

- **Material Design 3**：默认支持最新的Material Design规范
- **自定义主题**：可以自定义颜色、排版、形状等
- **主题切换**：支持深色模式和浅色模式

## 第一个Compose应用

### 创建Compose项目

1. 打开Android Studio
2. 选择"Start a new Android Studio project"
3. 选择"Empty Compose Activity"模板
4. 填写项目信息
5. 确保最低SDK版本为21或以上
6. 点击"Finish"创建项目

### 项目结构

- `MainActivity.kt`：主入口，使用Compose UI
- `ui/`：存放UI相关代码
  - `theme/`：主题定义
  - `components/`：自定义组件
- `composables/`：可组合函数

### 基本示例

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String) {
    Text(text = "Hello, $name!")
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    MyApplicationTheme {
        Greeting("Android")
    }
}
```

## 常用Compose组件

### 1. Text

```kotlin
Text(
    text = "Hello Compose",
    style = MaterialTheme.typography.headlineMedium,
    color = MaterialTheme.colorScheme.primary
)
```

### 2. Button

```kotlin
Button(onClick = { /* 点击事件 */ }) {
    Text(text = "Click Me")
}
```

### 3. TextField

```kotlin
var text by remember { mutableStateOf("") }
TextField(
    value = text,
    onValueChange = { text = it },
    label = { Text("Enter text") }
)
```

### 4. Image

```kotlin
Image(
    painter = painterResource(id = R.drawable.my_image),
    contentDescription = "My Image",
    modifier = Modifier.size(100.dp)
)
```

### 5. LazyColumn

```kotlin
LazyColumn {
    items(100) {
        Text(
            text = "Item $it",
            modifier = Modifier.padding(16.dp)
        )
    }
}
```

## 动画效果

### 基本动画

```kotlin
var size by remember { mutableStateOf(100.dp) }

AnimatedVisibility(visible = isVisible) {
    Box(
        modifier = Modifier
            .size(size)
            .background(Color.Blue)
            .clickable {
                size += 50.dp
            }
    )
}
```

### 过渡动画

```kotlin
val transition = updateTransition(targetState = isExpanded, label = "expanding")
val height by transition.animateDp(
    transitionSpec = { spring(stiffness = 300, dampingRatio = 0.5) },
    label = "height"
) {
    if (it) 200.dp else 100.dp
}
```

## 与传统View互操作

### Compose中使用View

```kotlin
AndroidView(factory = {
    TextView(it).apply {
        text = "This is a TextView"
        textSize = 20f
    }
})
```

### View中使用Compose

```kotlin
val composeView = ComposeView(context)
composeView.setContent {
    Text(text = "This is Compose in a View")
}
```

## Compose最佳实践

1. **单一职责原则**：每个Composable函数只做一件事
2. **状态提升**：将可变状态提升到父组件
3. **避免在Composable函数中创建对象**：使用`remember`或`derivedStateOf`
4. **使用LazyColumn/LazyRow优化列表性能**
5. **合理使用Modifier**：链式调用，避免过多嵌套
6. **利用预览功能**：提高开发效率
7. **遵循Material Design规范**：保持UI一致性

## 总结

Jetpack Compose是Android UI开发的未来方向，它采用声明式编程模型，简化了UI开发流程，提高了开发效率。通过掌握Compose的核心概念和最佳实践，开发者可以构建出更加现代化、高性能的Android应用。

随着Compose生态的不断完善，越来越多的库和工具开始支持Compose，未来它将成为Android开发的主流选择。