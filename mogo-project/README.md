# About this project

- Trong folder styles sẽ gồm 6 folder khác:

  - base: Dùng để chứa styles của thẻ html, thường là set font-size cho html để sử dụng rem
  - components: Dùng để chứa styles của từng component
  - helper: Dùng để chứa các biến và các functions trong SASS để tái sử dụng
  - layout: Dùng để style cho các layout bao ngoài
  - pages:
  - theme: Dùng để style cho theme (light/dark)
  - vendors: Dùng để chứa code styles của các bên thứ 3 (font awesome, bootstrap, ...)

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
    // mandatory: Khi các bạn scroll thì sẽ không có chuyện dừng lưng chừng ở giữa 2 bức ảnh, VÍ DỤ bạn lật sang trang mới của cuốn sách, không có chuyện bạn lật được 1 nửa rồi giữ nguyên được nó ở đó, tờ giấy sẽ nghiêng về 1 trong 2 bên, nghiêng về bên nào thì sẽ lật về phía ngược lại
    scroll-snap-stop: always;
  }
  .about-item {
    width: 90%;
    scroll-snap-align: start;
  }
}
```
