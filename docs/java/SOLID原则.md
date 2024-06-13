# SOLID 原则

SOLID 原则是面向对象编程和面向对象设计的五个基本原则，旨在帮助开发人员创建更可维护、更易扩展的代码。它由 Robert C. Martin 于 2004 年提出，现已成为软件设计领域的基石之一。SOLID 原则的名称来源于其首字母的缩写，分别是：

- `S` ingle Responsibility Principle（单一职责原则：`SRP`）
- `O` pen-Closed Principle（开放封闭原则：`OCP`）
- `L` iskov Substitution Principle（里氏替换原则：`LSP`）
- `I` nterface Segregation Principle（接口隔离原则：`ISP`）
- `D` ependency Inversion Principle（依赖倒置原则：`DIP`）

下面我们将对每个原则进行详细解读。

## 单一职责原则 (Single Responsibility Principle)

### `SRP` 核心思想

一个类应该只拥有一个职责。

优点：

* 提高可维护性：当类只负责一项功能时，更容易理解和修改其代码。

* 降低耦合度：职责单一的类之间耦合度较低，更容易独立开发和测试。

* 提高可复用性：职责单一的代码更容易被其他类复用。

### 违反 `SRP` 示例

为了更好的理解，我们来看一个违反 `SRP` 的例子

```Java
public class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    public void printCircleInfo() {
        System.out.println("圆形半径：" + radius);
        System.out.println("圆形面积：" + calculateArea());
    }
}

```

在这个类中，包含了圆形的半径信息、计算面积的方法和打印信息的方法。但是，这个类违反了单一职责原则，因为它包含了多个职责：

- **存储圆形信息：** 存储圆形的半径信息。
- **计算面积：** 计算圆形的面积。
- **打印信息：** 打印圆形的半径和面积信息。

### 遵循 `SRP` 示例

为了解决上述问题，我们可以将 `Circle` 类拆分成多个更小的类，每个类只负责一项职责。例如，我们可以定义以下类：

- **CircleInfo：** 存储圆形的半径信息
- **AreaCalculator：** 计算圆形的面积
- **CircleInfoPrinter：** 打印圆形的半径和面积信息

```Java
class CircleInfo {
    private double radius;

    public CircleInfo(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }
}

class AreaCalculator {
    public double calculateArea(CircleInfo circleInfo) {
        return Math.PI * circleInfo.getRadius() * circleInfo.getRadius();
    }
}

class CircleInfoPrinter {
    public void printCircleInfo(CircleInfo circleInfo, double area) {
        System.out.println("圆形半径：" + circleInfo.getRadius());
        System.out.println("圆形面积：" + area);
    }
}

public class Main {
    public static void main(String[] args) {
        double radius = 5.0;

        CircleInfo circleInfo = new CircleInfo(radius);
        AreaCalculator areaCalculator = new AreaCalculator();
        double area = areaCalculator.calculateArea(circleInfo);

        CircleInfoPrinter circleInfoPrinter = new CircleInfoPrinter();
        circleInfoPrinter.printCircleInfo(circleInfo, area);
    }
}
```

在这个示例中，`CircleInfo` 类只负责存储圆形的半径信息，`AreaCalculator` 类只负责计算圆形的面积，`CircleInfoPrinter` 类只负责打印圆形的半径和面积信息。这样一来，每个类都只负责一项职责，代码更加简洁易懂，也更容易维护和扩展。

### 总结

单一职责原则是一个重要的面向对象设计原则，它可以帮助我们创建更加优良的代码。在实际开发中，我们应该尽量遵循该原则，以创建更加简洁、易懂、可维护和可扩展的代码。



## 开放封闭原则 (Open-Closed Principle)

### `OCP` 核心思想

对扩展开放，对修改封闭。

优点：

* 提高可维护性：当需要添加新功能时，只需要扩展现有代码，而无需修改现有代码。

* 提高稳定性：由于现有代码无需修改，因此可以降低代码出错的风险。

* 提高可复用性：易于扩展的代码更容易被其他项目复用。

### 违反 `OCP` 示例

```Java
class Shape {
    private double width;
    private double height;

    public Shape(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double calculateArea() {
        return width * height;
    }
}

class Rectangle extends Shape {
    public Rectangle(double width, double height) {
        super(width, height);
    }
}

class Square extends Shape {
    public Square(double sideLength) {
        super(sideLength, sideLength);
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(5.0, 3.0);
        double rectangleArea = rectangle.calculateArea();
        System.out.println("矩形面积：" + rectangleArea);

        Square square = new Square(4.0);
        double squareArea = square.calculateArea();
        System.out.println("正方形面积：" + squareArea);
    }
}
```

在这个示例中，`Shape` 类是一个抽象类，它定义了 `calculateArea()` 方法来计算面积。`Rectangle` 类和 `Square` 类是 `Shape` 类的子类，它们继承了 `calculateArea()` 方法。

但是，这个代码违反了开放封闭原则，因为它需要修改 `Shape` 类来添加新的形状类型。例如，如果我们要添加一个计算圆形面积的类，就需要修改 `Shape` 类来添加一个新的方法或抽象方法。

### 遵循 `OCP` 示例

为了解决上述问题，我们可以使用接口和抽象类来实现 `OCP`。首先，我们可以定义一个 `Shape` 接口来表示形状，并定义一个 `calculateArea()` 方法来计算面积：

```Java
interface Shape {
    double calculateArea();
}
```

然后，我们可以定义一个 `AbstractShape` 抽象类来实现 `Shape` 接口，并提供默认的 `calculateArea()` 方法：

```Java
abstract class AbstractShape implements Shape {
    @Override
    public abstract double calculateArea();
}
```

最后，我们可以定义 `Rectangle` 和 `Square` 类来继承 `AbstractShape` 抽象类，并实现具体的 `calculateArea()` 方法：

```Java
class Rectangle extends AbstractShape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return width * height;
    }
}

class Square extends AbstractShape {
    private double sideLength;

    public Square(double sideLength) {
        this.sideLength = sideLength;
    }

    @Override
    public double calculateArea() {
        return sideLength * sideLength;
    }
}

class Circle extends AbstractShape {
    private double radius;

    public Square(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * circleInfo.getRadius() * circleInfo.getRadius();
    }
}
```

在这个示例中，`Shape` 接口和 `AbstractShape` 抽象类定义了形状的基本概念和计算面积的方法。`Rectangle` 和 `Square` 类可以继承 `AbstractShape` 抽象类，并实现具体的 `calculateArea()` 方法。这样一来，我们可以通过添加新的子类 `Circle` 来扩展圆形，而无需修改原有的代码。

### 总结

开放封闭原则是一个重要的面向对象设计原则，它可以帮助我们创建更加灵活、可维护和可扩展的代码。在实际开发中，我们应该尽量遵循 `OCP`，以创建更加优良的代码。

另外，开放封闭原则只是一个思想，没有具体实际操作方法。其他原则都是为了实现这个开闭思想的一些方法和工具。



## 里氏替换原则 (Liskov Substitution Principle)

### `LSP` 核心思想

子类必须能够替换其基类而不影响程序的行为。这意味着子类必须完全实现基类的行为，并且不能违反基类的约定。子类应该扩展基类的功能，而不是缩减或改变它。

优点：

* 提高可靠性：当子类替换父类时，程序应该能够正常运行，不会出现意外行为。

* 提高可扩展性：易于扩展的代码更容易被其他项目复用。

* 提高可维护性：遵循 `LSP` 的代码更容易理解和修改。

###  违反 `LSP` 示例

一个经典的违反里氏替换原则的例子是矩形（Rectangle）和正方形（Square）的关系。在数学上，正方形是矩形的一个特例，因此在自然语言中我们可能会认为正方形应该继承自矩形。然而，在代码中这样做会导致问题。

```Java
class Rectangle {
    private int width;
    private int height;

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }
}

class Square extends Rectangle {
    @Override
    public void setWidth(int width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    @Override
    public void setHeight(int height) {
        super.setHeight(height);
        super.setWidth(height);
    }
}
```

在这个例子中，如果我们使用一个 `Rectangle` 对象并调用 `setWidth` 和 `setHeight` 方法，我们期望宽度和高度可以独立设置。然而，如果这个对象实际上是一个 `Square` 对象，那么设置宽度会同时改变高度，反之亦然。这违反了里氏替换原则，因为 `Square` 对象不能完全替代 `Rectangle`。

### 遵循 `LSP` 示例

为了遵循里氏替换原则，我们可以通过引入一个新的基类来解决上述问题。例如，我们可以创建一个 `Shape` 基类，并让 `Rectangle` 和 `Square` 分别继承它。

```Java
abstract class Shape {
    public abstract int getArea();
}

class Rectangle extends Shape {
    private int width;
    private int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    @Override
    public int getArea() {
        return width * height;
    }
}

class Square extends Shape {
    private int side;

    public Square(int side) {
        this.side = side;
    }

    public int getSide() {
        return side;
    }

    public void setSide(int side) {
        this.side = side;
    }

    @Override
    public int getArea() {
        return side * side;
    }
}
```

在这个例子中，`Rectangle` 和 `Square` 都继承自 `Shape`，并且各自实现了 `getArea` 方法。这样，`Square` 和 `Rectangle` 都可以独立存在，并且不会违反里氏替换原则。



### 常见的违反场景

#### 强化前置条件

如果子类的方法对输入参数的要求比基类更严格，就会违反 `LSP`。例如，基类的方法接受任何整数作为参数，而子类的方法只接受正整数。

```Java
class Super {
    public void setNumber(int number) {
        // 可以接受任何整数
    }
}

class Sub extends Super {
    @Override
    public void setNumber(int number) {
        if (number <= 0) {
            throw new IllegalArgumentException("必须是正整数");
        }
        super.setNumber(number);
    }
}
```

#### 弱化后置条件

如果子类的方法对返回值的保证比基类更弱，也会违反 `LSP`。例如，基类的方法保证返回一个非空字符串，而子类的方法可能返回空字符串，`Sub` 类的方法对返回值的保证比 `Super` 类更弱。

```Java
class Super {
    public String getString() {
        return "non-null string";
    }
}

class Sub extends Super {
    @Override
    public String getString() {
        return null; // 可能返回空字符串
    }
}
```

又比如 `返回类型不兼容`，如果子类的方法返回一个与基类方法签名不兼容的类型，这也会违反 LSP。例如，基类的方法返回一个可变集合，而子类的方法返回一个只读集合。

```Java
interface CollectionProvider {
    Collection<String> getItems();
}

class MutableCollectionProvider implements CollectionProvider {
    @Override
    public Collection<String> getItems() {
        return new ArrayList<>();
    }
}

class ReadOnlyCollectionProvider implements CollectionProvider {
    @Override
    public Collection<String> getItems() {
        return Collections.unmodifiableList(new ArrayList<>());
    }
}
```

#### 破坏对象的不变性

如果子类的方法改变了基类的状态约定，也会违反 LSP。例如，基类保证某个计数器是递增的，而子类却可能使其递减。

```Java
class Super {
    protected int counter = 0;

    public void increment() {
        counter++;
    }

    public int getCounter() {
        return counter;
    }
}

class Sub extends Super {
    @Override
    public void increment() {
        counter--; // 使计数器递减
    }
}
```

#### 违反历史约束

如果子类的方法允许改变基类的状态，而这种改变在基类中是不允许的，也会违反 LSP。例如，基类的对象是不可变的，而子类的对象是可变的。

```Java
class ImmutablePoint {
    private final int x;
    private final int y;

    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}

class MutablePoint extends ImmutablePoint {
    private int x;
    private int y;

    public MutablePoint(int x, int y) {
        super(x, y);
        this.x = x;
        this.y = y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }
}
```

#### 抛出未实现异常

如果子类的方法抛出一个未实现异常（如 `NotImplementedException`），这表明子类并没有完全实现基类的行为，从而违反了 LSP。

```Java
interface Bird {
    void fly();
}

class Sparrow implements Bird {
    @Override
    public void fly() {
        // 实现飞行行为
    }
}

class Ostrich implements Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("鸵鸟不会飞");
    }
}
```

### 总结

里氏替换原则是面向对象设计中的一个重要原则，确保子类可以替换基类而不会影响程序的正确性。通过合理的设计和抽象，我们可以避免违反这一原则，从而创建更健壮和可维护的代码。



## 接口隔离原则 (Interface Segregation Principle)

### 核心思想

`客户端不应该被迫依赖于它们不使用的方法`。换句话说，一个类不应该实现它不需要的方法。这个原则的目的是通过将大接口拆分成更小、更专注的接口来减少接口污染和不必要的依赖。

### 违反 `ISP` 示例

假设我们有一个文档管理系统，其中定义了一个包含多个方法的接口：

```Java
public interface Document {
    void open();
    void save();
    void print();
    void sendViaEmail();
}
```

然后我们有两个实现这个接口的类：`PDFDocument` 和 `WordDocument`：

```Java
public class PDFDocument implements Document {
    public void open() { /* 打开PDF文档的逻辑 */ }
    public void save() { /* 保存PDF文档的逻辑 */ }
    public void print() { /* 打印PDF文档的逻辑 */ }
    public void sendViaEmail() { /* 发送PDF文档的逻辑 */ }
}

public class WordDocument implements Document {
    public void open() { /* 打开Word文档的逻辑 */ }
    public void save() { /* 保存Word文档的逻辑 */ }
    public void print() { /* 打印Word文档的逻辑 */ }
    public void sendViaEmail() { /* 发送Word文档的逻辑 */ }
}
```

在这个例子中，`PDFDocument` 和 `WordDocument` 都被迫实现了所有的方法，即使有些方法可能对某些文档类型并不适用。这违反了接口隔离原则。

### 遵循 `ISP` 示例

为了遵循接口隔离原则，我们可以将 `Document` 接口拆分成更小、更专注的接口：

```Java
public interface OpenSave {
    void open();
    void save();
}

public interface Print {
    void print();
}

public interface SendViaEmail {
    void sendViaEmail();
}
```

现在，每个类只实现了它们实际需要的方法，避免了不必要的依赖和方法实现。

```Java
public class PDFDocument implements OpenSave, Print {
    public void open() { /* 打开PDF文档的逻辑 */ }
    public void save() { /* 保存PDF文档的逻辑 */ }
    public void print() { /* 打印PDF文档的逻辑 */ }
}

public class WordDocument implements OpenSave, SendViaEmail {
    public void open() { /* 打开Word文档的逻辑 */ }
    public void save() { /* 保存Word文档的逻辑 */ }
    public void sendViaEmail() { /* 发送Word文档的逻辑 */ }
}
```

### 常见的违反场景

* 大而全的接口：一个接口包含了所有可能的方法，导致实现类必须实现所有方法，即使有些方法对它们并不适用。

* 接口污染：随着需求的增加，不断向接口中添加新方法，导致接口变得臃肿和难以维护。

### 总结

接口隔离原则通过将大接口拆分成更小、更专注的接口，减少了类之间的耦合，使代码更易于维护和扩展。然而，过度应用这个原则可能会导致系统中接口数量过多，增加设计和维护的复杂性。因此，在应用接口隔离原则时，需要根据具体项目的需求和复杂度进行权衡。


## 依赖倒置原则(Dependency Inversion Principle)

### 核心思想

依赖倒置原则的核心思想是高层模块不应该依赖于低层模块，二者都应该依赖于抽象。通过引入抽象层来解耦高层模块和低层模块，从而提高系统的灵活性、可测试性和可维护性。具体来说，依赖倒置原则包含以下两部分：

* 高层模块不应该依赖于低层模块，二者都应该依赖于抽象。
* 抽象不应该依赖于细节，细节应该依赖于抽象。

### 违反 `DIP` 示例

在一个支付系统中，我们可能需要支持多种支付方式（如信用卡、PayPal、银行转账等）。如果直接在高层模块中依赖具体的支付实现，会导致代码耦合度高，不易扩展和维护。

```Java
class CreditCardPayment {
    public void pay(double amount) {
        // 信用卡支付逻辑
    }
}

class PaymentService {
    private CreditCardPayment payment = new CreditCardPayment();

    public void processPayment(double amount) {
        payment.pay(amount);
    }
}
```

在这个设计中，`PaymentService` 类直接依赖于具体的 `CreditCardPayment` 实现，违反了依赖倒置原则。

### 遵循 `DIP` 示例

通过引入 `PaymentMethod` 接口，`PaymentService` 类依赖于抽象而不是具体实现，从而可以轻松替换支付方式的实现。

```Java
interface PaymentMethod {
    void pay(double amount);
}

class CreditCardPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        // 信用卡支付逻辑
    }
}

class PayPalPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        // PayPal支付逻辑
    }
}

class PaymentService {
    private PaymentMethod paymentMethod;

    public PaymentService(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void processPayment(double amount) {
        paymentMethod.pay(amount);
    }
}
```

### 常见的违反场景

* **直接依赖具体实现**：如上例所示，直接在高层模块中实例化低层模块的具体实现。
* **缺乏抽象层**：没有定义接口或抽象类来隔离高层模块和低层模块。
* **硬编码依赖**：在代码中硬编码依赖关系，而不是通过依赖注入等方式动态注入依赖。

### 总结
   
依赖倒置原则通过引入抽象层来解耦高层模块和低层模块，从而提高系统的灵活性、可测试性和可维护性。遵循这一原则可以使系统更容易扩展和维护，同时也能提高代码的可测试性。通过引入接口或抽象类，我们可以轻松替换具体实现，而不需要修改高层模块的代码。
