# Photoshop basic

- Hiển thị khung: Ctrl + ;

- Cách lấy 1 layer trong photoshop (phiên bản cũ) :

  - Phim Alt + bấm vào con mắt
  - Nó sẽ hiện ra cái bảng, giờ các bạn click vào phần khoảng trắng đằng sau
  - Sau đó bấm OK
  - Nếu PTS bạn đang sử dụng có quick export as PNG thì bạn có thể sử dụng nó thay vì làm các bước trê

- Cách để lấy 1 ảnh bị gradient chèn lên:

  - Các bạn cũng làm y hệt như trên nhưng lúc này trong panel của layers sẽ có 1 mục nữa là gradient overlay, các bạn tắt nó đi rồi lấy như bình thường

- Cách để export 1 ảnh ra từ photoshop:
  - File -> Export -> Save for Web (Legacy)
  - Tổ hợp phím: Ctrl + Shift + Alt + S

# Kiến thức về SASS

- Sử dụng câu điều kiện trong SASS:
  - @if $variable == "argument"

```scss
@mixin absoluteCenter($direction) {
  position: absolute;
  // @if $variable === "argument"
  @if $direction == "both" {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```

- Còn nếu có nhiều điều kiện hơn thì các bạn chỉ cần viết thêm ở dưới:

```scss
@mixin absoluteCenter($direction) {
  position: absolute;
  // @if $variable === "argument"
  @if $direction == "both" {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @if $direction == "vertical" {
    top: 50%;
    transform: translateY(-50%);
  }
}
```

# Responsive sử dụng scroll-snap và overflow-x: auto

- Giả dụ layout của bạn đang dàn ra thành 3 item khác nhau:

![Layout](https://discloud-storage.herokuapp.com/file/4f36bb84adefa36836b243a1ffa72118/flex.png)

- Và khi xuống màn hình nhỏ hơn, các bạn muốn nó vẫn dàn như vậy nhưng mà sẽ xuất hiện 1 thanh scroll để scroll qua lại thì mình sẽ chỉ cho các bạn 1 phương pháp sau:

- Đầu tiên ở màn hình to ta sẽ có đoạn code sử dụng grid đơn giản như sau:
  <br>

* LƯU Ý: .about-list là cha của 3 thằng .about-item

```scss
.about-list {
  display: grid; // hiển thị dưới dạng grid
  grid-template-columns: repeat(3, 1fr); // 3 item mỗi hàng, mỗi item chiếm 1fr
  column-gap: 3rem; // khoảng cách giữa các item nằm theo hàng là 3rem
  cursor: pointer;
  margin-bottom: 5rem;
}
```

- Giờ ta sẽ code SCSS cho màn hình điện thoại như sau:

```scss
// khi xuống màn hình <= 767px thì thực hiện đoạn code SCSS bên trong
@include maxWidth(767px) {
  .about-list {
    grid-template-columns: unset; // Hủy bỏ đoạn code css của màn hình > 767px, HAY nói cách khác là ta sẽ xóa đi đoạn code:
    // grid-template-columns: repeat(3, 1fr); ở trên
    grid-auto-flow: column; // grid sẽ hiển thị dưới dạng nằm hàng ngang
    grid-auto-columns: 60%; // mỗi item trong grid sẽ chiếm 60% width
    column-gap: unset // Hủy bỏ đoạn code column-gap: 3rem ở trên
    justify-items: center;
    overflow-x: auto; // đoạn code này sẽ quyết định tất cả, khi overflow ra khỏi thằng body sẽ hiển thị 1 thanh scroll
    @include hideScroll(); // đoạn code giấu thanh scroll đi
    padding: 1rem; // padding để cách lề ra cho đỡ xấu
    scroll-snap-type: x mandatory;
    // scroll-snap-type là một css property để set các snap point, hay nói cách khác là để điều khiển hoạt dộng scroll, giới hạn người dùng scroll chỉ đến một phần nào đó
    // x mandatory là gì?
    // x: áp dụng scroll-snap-type này cho chiều scroll ngang
    // mandatory: Khi các bạn scroll thì sẽ không có chuyện dừng lưng chừng ở giữa 2 bức ảnh, VÍ DỤ bạn lật sang trang mới của cuốn sách, không có chuyện bạn lật được 1 nửa rồi giữ nguyên được nó ở đó, tờ giấy sẽ nghiêng về 1 trong 2 bên, nghiêng về bên nào thì sẽ lật về phía đó (xem thêm ở ảnh bên dưới)
    scroll-snap-stop: always; // Dừng scroll khi đạt đến 1 snap point nào đó sau snap point trước đó
  }
  .about-item {
    width: 90%;
    scroll-snap-align: start; // Snap point bắt đầu là thg đầu tiên
  }
}
```

- Ảnh giải thích scroll-snap-type:
  ![scroll-snap-type explanation](https://discloud-storage.herokuapp.com/file/bfaad728fd28882da02502222a3bf2d0/bookturning.png)

# Margin Collapse là gì?

- Margin Collapse là trường hợp khi margin của phần từ này đè lấn lên giá trị margin của phần tử kia. Ví dụ nho nhỏ như sau:

```html
<div class="container">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

```css
.container {
  background: #ccc;
  width: 200px;
  margin-top: 30px;
}
.square {
  margin: 10px;
  height: 50px;
  background: #f0f;
}
```

- Như ở ví dụ trên nhiều bạn sẽ nghĩ rằng khoảng cách giữa các phần tử .square sẽ là _20px_ do ta có margin: _10px_ . Nhưng không phải vậy khoảng cách giữa 2 phần từ đó chỉ là _10px_. Đó chính là margin collapsing.

- Vậy thì vẫn khó hiểu nhỉ? Về cơ bản, khi 2 phần từ gần nhau cùng có margin nó sẽ lấy giá trị margin lớn nhất của 1 trong hai phẩn từ, chứ không phải là tổng margin của 2 phẩn tử. Margin collapsing chỉ xảy ra với margin-top và margin bottom

# CSS cho scrollbar

- Khi thiết kế website, hầu hết các website đẹp đều sẽ có 1 cái custom scrollbar ở bất kì chỗ nào, nên giờ mình sẽ tìm hiểu cách css cho scrollbar:

```scss
.something::-webkit-scrollbar {
  width: 10px; // set width cho scrollbar
}

.something::-webkit-scrollbar-track {
  background: #f1f1f1; // set background cho scrollbar track (các phần có màu ghi chưa được kéo tới)
}

.something::-webkit-scrollbar-thumb {
  background: #888; // setback ground cho chính thanh scrollbar
}
```

- ĐÓ, vậy là chỉ với 3 selector ta đã có thể custom scrollbar theo ý thích của mình

- Ngoài ra bạn cũng có thể làm đẹp hơn bằng thuộc tính `border-radius` cho scrollbar-track và thumb, ngoài ra còn 2 pseudo khác của scrollbar là scrollbar-button và scrollbar-corner nữa, nhưng ta sẽ tìm hiểu sau nhé.
