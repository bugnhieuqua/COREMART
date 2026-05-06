# Tóm tắt thay đổi phần Danh mục nổi bật

## File 1: `deals.html`

- Dòng 252-325: sửa cấu trúc HTML của phần `Danh mục nổi bật` trong file `deals.html`.
- Các phần tử này nằm trong khối `<div class="sale"><div class="danhmucnoibat">...</div></div>` và là phần nổi bật của trang khuyến mãi.
- Thay đổi chính:
  - Đổi `div.row g-4` thành `div.row justify-content-center align-items-stretch gx-3 gy-4` để hàng chứa card có khoảng cách ngang/dọc chuẩn và các card xếp ngang.
  - Tạo mỗi card trong một cột riêng `col-6 col-sm-4 col-md-2` thay vì để tất cả card trong cùng một cột dọc. Mỗi `div.col-...` là một ô riêng chứa một sản phẩm danh mục nổi bật.
  - Thêm lớp `h-100` cho mỗi `div.card` để mỗi card chiếm chiều cao đầy đủ của cột và đồng bộ với các card còn lại.
  - Thêm lớp `d-flex align-items-center justify-content-center` cho phần `card-body` để chữ (ví dụ: `RAM`, `SSD`, `PC`, `GPU`, `Laptop`) nằm chính giữa theo cả chiều ngang và chiều dọc.
  - Các thẻ `<img>` là ảnh sản phẩm, mỗi cái đặt trong một card; các nhãn ở trong `<p class="card-text">`.
  - Các tên `RAM`, `SSD`, `PC`, `GPU`, `Laptop` là nội dung trực tiếp của phần `card-body`, nên nếu cần đổi danh mục thì chỉ cần sửa văn bản trong các thẻ `<p class="card-text">`.

- Nguồn gốc các phần tử:
  - `div.row` và các `div.col-...` là cấu trúc lưới Bootstrap, giúp tạo layout ngang/dọc.
  - `div.card` và `card-body` là thành phần Bootstrap chuẩn để đóng khung từng mục.
  - `h-100` là lớp Bootstrap để card cao bằng chiều cao cột, dùng trong tất cả 5 card.
  - `d-flex align-items-center justify-content-center` là lớp Bootstrap dùng để căn giữa nội dung trong card-body.

## File 2: `css/deals.css`

- Dòng 69-92: cập nhật CSS cho class `.danhmucnoibat .card` và các thành phần con.
- Thay đổi chính:
  - `.danhmucnoibat .card`: đặt `width: 100%`, `max-width: 12rem`, xóa bóng đổ, và sử dụng `display: flex; flex-direction: column;` để nội dung card cân bằng và cùng chiều cao.
  - `.danhmucnoibat .card img`: đặt `width: 100%`, `height: 140px`, `object-fit: cover` để ảnh đồng đều.
  - `.danhmucnoibat .card .card-body`: sử dụng `flex: 1`, `display: flex`, `align-items: center`, `justify-content: center`, và `padding: 0.75rem` để phần chữ căn giữa và chiều cao card đồng đều.

## Mục tiêu

- Các card hiển thị ngang đều nhau trên cùng một dòng khi có không gian.
- Ảnh có kích thước nhất quán, không làm méo card.
- Văn bản `RAM`, `SSD`, `PC`, `GPU`, `Laptop` nằm chính giữa mỗi card.
