/* 
Bài 1: Xuất 3 só nguyên theo thứ tự tăng dần

* Đầu vào:
- 3 số nguyên
* Xử lí:
- Khai báo 3 biến số nguyên 
- Gán giá trị cho 3 biến số
- Khai báo biến số tạm
- Sử dụng câu điều kiện if: 
+ So sánh giá trị biến số ở vị trí thứ nhất với giá trị biến số ở vị trí thứ hai, số nào nhỏ hơn thì xếp lên đầu bằng cách hoán đổi giá trị cho biến số tạm
+ Sau đó so sánh giá trị biến số ở vị trí thứ nhất với giá trị biến số ở vị trí thứ ba, số nào nhỏ hơn thì xếp lên đầu bằng cách hoán đổi giá trị cho biến số tạm
+ Sau đó so sánh giá trị biến số ở vị trí thứ hai với giá trị biến số ở vị trí thứ ba, số nào nhỏ hơn thì xếp vào vị trí thứ hai bằng cách hoán đổi giá trị cho biến số tạm
* Đầu ra:
- In 3 số ra màn hình theo thứ tự tăng dần
*/

var soThuNhat, soThuHai, soThuBa, tam;
soThuNhat = 4;
soThuHai = 3;
soThuBa = 2;
if (soThuNhat > soThuHai) {
  tam = soThuNhat;
  soThuNhat = soThuHai;
  soThuHai = tam;
}

if (soThuNhat > soThuBa) {
  tam = soThuNhat;
  soThuNhat = soThuBa;
  soThuBa = tam;
}

if (soThuHai > soThuBa) {
  tam = soThuHai;
  soThuHai = soThuBa;
  soThuBa = tam;
}

console.log("Ba số theo thứ tự tăng dần là: " + soThuNhat + " " + soThuHai + " " + soThuBa);

/*
Bài 2: Chào hỏi các thành viên trong gia đình

* Đầu vào: 
- Xác định người sử dụng máy
* Xử lí:
- Khai báo biến người dùng
- Sử dụng cấu trúc switc case, so sánh giá trị của biến người dùng với các case
- Thực hiện hành động tại case tương ứng
* Đầu ra:
- In ra màn hình câu chào phù hợp
*/

var nguoiDung;
nguoiDung = "B";
switch (nguoiDung) {
  case "B":
    console.log("Xin chào Bố");
    break;

  case "M":
    console.log("Xin chào Mẹ");
    break;

  case "A":
    console.log("Xin chào Anh Trai");
    break;

  case "E":
    console.log("Xin chào Em Gái");
    break;

  default:
    break;
}

/* 
Bài 3: Xuất ra bao nhiêu số lẻ, bao nhiêu số chẵn

* Đầu vào:
- 3 số nguyên
* Xử lí:
- Khởi tạo 3 biến số nguyễn
- Khởi tạo biến đếm số lẻ và biến đếm số chẵn với giá trị = 0
- Sử dụng câu điều kiện if else:
+ Nếu số chia lấy dư cho 2 = 0 thì biến đếm số chẵn tăng lên 1
+ Nếu số chia lấy dư cho 2 != 0 thì biến đếm số lẻ tăng lên 1
* Đầu ra:
- In ra mà hình bao nhiêu số chẵn, bao nhiêu số lẻ
*/

var soThuNhat = 6;
var soThuHai = 7;
var soThuBa = 8;
var soChan = 0;
var soLe = 0;

if (soThuNhat % 2 == 0) {
  soChan++;
} else {
  soLe++;
}

if (soThuHai % 2 == 0) {
  soChan++;
} else {
  soLe++;
}

if (soThuBa % 2 == 0) {
  soChan++;
} else {
  soLe++;
}

console.log("Có " + soChan + " số chẵn và " + soLe + " số lẻ");

/* 
Bài 4: Xác định loại tam giác

* Đầu vào:
- Chiều dài 3 cạnh của tam giác
* Xử lí:
- Khai báo 3 biến chiều dài của 3 cạnh tam giác
- Gán kích thước cho 3 biến trên
- Xử dụng câu điều kiện if else if:
+ Kiểm tra các cạnh của tam giác bằng các tính chất hoặc định lý để xác định loại tam giác
+ Nếu tổng 2 cạnh không lớn hơn cạnh còn lại thì kết luận đây không phải 3 cạnh của 1 tam giác
* Đầu ra:
- In ra màn hình loại tam giác
*/

var canhThuNhat, canhThuHai, canhThuBa;
canhThuNhat = 3;
canhThuHai = 4;
canhThuBa = 5;

if (canhThuNhat + canhThuHai > canhThuBa && canhThuNhat + canhThuBa > canhThuHai && canhThuHai + canhThuBa > canhThuNhat) {
  if (canhThuNhat == canhThuHai && canhThuHai == canhThuBa) {
    console.log("Đây là tam giác đều");
  } else if (canhThuNhat == canhThuHai || canhThuNhat == canhThuBa || canhThuHai == canhThuBa) {
    console.log("Đây là tam giác cân");
  } else if (
    canhThuNhat * canhThuNhat == canhThuHai * canhThuHai + canhThuBa * canhThuBa ||
    canhThuHai * canhThuHai == canhThuNhat * canhThuNhat + canhThuBa * canhThuBa ||
    canhThuBa * canhThuBa == canhThuNhat * canhThuNhat + canhThuHai * canhThuHai
  ) {
    console.log("Đây là tam giác vuông");
  } else {
    console.log("Đây là tam giác thường");
  }
} else {
  console.log("Đây không phải là kích thước 3 cạnh của 1 tam giác");
}
