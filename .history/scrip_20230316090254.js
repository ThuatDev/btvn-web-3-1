// Trong JavaScript, đồng bộ và bất đồng bộ đề cập đến cách thức xử lý các tác vụ (tasks) trong quá trình thực thi của chương trình.

// Đồng bộ (synchronous) là khi các tác vụ được thực thi tuần tự, một sau một, theo đúng thứ tự của chúng. Trong khi một tác vụ đang được thực thi, các tác vụ khác phải chờ đợi cho đến khi tác vụ trước đó kết thúc.

// Ví dụ:

console.log("Bắt đầu thực thi");
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("Kết thúc thực thi");

// Trong đoạn mã trên, các câu lệnh được thực thi theo trình tự từ trên xuống dưới. Đầu tiên, câu lệnh "Bắt đầu thực thi" được in ra, sau đó là một vòng lặp, và cuối cùng là câu lệnh "Kết thúc thực thi".

// Bất đồng bộ (asynchronous) là khi các tác vụ được thực thi song song và không cần đợi tác vụ trước đó kết thúc. Thay vào đó, khi một tác vụ được thực thi, chương trình có thể tiếp tục thực thi các tác vụ khác mà không chờ đợi tác vụ đó kết thúc. Khi tác vụ bất đồng bộ hoàn thành, nó sẽ gửi một thông báo đến chương trình để xử lý kết quả.

// Ví dụ:

console.log("Bắt đầu thực thi");
setTimeout(function () {
  console.log("Đợi 2 giây");
}, 2000);
console.log("Kết thúc thực thi");

// Trong đoạn mã trên, hàm setTimeout được sử dụng để tạo ra một tác vụ bất đồng bộ. Sau khi gọi hàm setTimeout, chương trình không đợi tác vụ đó kết thúc mà tiếp tục thực thi câu lệnh tiếp theo, in ra câu "Kết thúc thực thi". Sau khoảng thời gian 2 giây, tác vụ bất đồng bộ được thực thi và in ra câu "Đợi 2 giây".Trong JavaScript, đồng bộ và bất đồng bộ đề cập đến cách thức xử lý các tác vụ (tasks) trong quá trình thực thi của chương trình.

// câu 2:Js là ngôn ngữ lập trình đồng bộ hay bất đồng bộ ?
// JavaScript (JS) là một ngôn ngữ lập trình bất đồng bộ (asynchronous programming language) và được sử dụng chủ yếu để phát triển các ứng dụng web tương tác.

// Việc lập trình bất đồng bộ trong JS cho phép các tác vụ xử lý nặng hoặc thời gian chờ lâu như tải dữ liệu từ server hoặc xử lý sự kiện được thực hiện song song với các tác vụ khác mà không làm gián đoạn chương trình. Điều này đặc biệt hữu ích khi phát triển các ứng dụng web phức tạp mà có thể đòi hỏi xử lý nhiều tác vụ cùng một lúc.

// Tuy nhiên, JS cũng hỗ trợ lập trình đồng bộ thông qua việc sử dụng các hàm đồng bộ (synchronous functions) và việc sử dụng callback function, promise hoặc async/await để đồng bộ hóa các tác vụ.

// Câu 3: Mã trong javascript được hoạt động như thế nào (tìm hiểu về: call stack, event loop)
// Trong JavaScript, khi một tác vụ được thực thi, nó sẽ được đưa vào call stack (ngăn xếp gọi hàm) để thực hiện. Call stack là một cơ chế hoạt động theo kiểu LIFO (Last-In-First-Out), có nghĩa là tác vụ cuối cùng được thêm vào stack sẽ được thực hiện trước. Khi một hàm hoàn thành việc thực thi, nó sẽ bị loại bỏ khỏi call stack và trả về kết quả (nếu có).

// Khi một tác vụ được thực thi, JavaScript có thể thực hiện một số tác vụ bất đồng bộ như gọi API hoặc xử lý sự kiện trong trình duyệt. Để xử lý các tác vụ bất đồng bộ này, JavaScript sử dụng event loop.

// Event loop là một cơ chế hoạt động của JavaScript để xử lý các tác vụ bất đồng bộ. Khi một tác vụ bất đồng bộ được gọi, nó sẽ được đưa vào Web API để xử lý. Sau đó, nó sẽ được đưa vào callback queue (ngăn hàng gọi lại) khi hoàn thành việc thực thi. Callback queue là một danh sách các hàm chờ được thực thi.

// Khi call stack trống, event loop sẽ kiểm tra callback queue để xem nó có các hàm callback nào chờ đợi không. Nếu có, hàm đầu tiên trong queue sẽ được đưa vào call stack để thực thi. Sau khi hàm được thực thi, nó sẽ bị loại bỏ khỏi call stack và event loop sẽ kiểm tra lại callback queue để thực hiện các hàm tiếp theo.

// Tóm lại, trong JavaScript, các tác vụ được thực thi được đưa vào call stack, các tác vụ bất đồng bộ được đưa vào Web API và callback queue và event loop được sử dụng để xử lý các tác vụ bất đồng bộ này.

// Câu 4: Có 3 cách xử lí bất đồng bộ là : dùng callback, promise, async-await. Các e tìm hiểu 3 cách này và trình bày ra + đưa ra ví dụ:

// có ba cách xử lý bất đồng bộ trong JavaScript đó là sử dụng callback, promise và async/await.

// 1:Callback
// Callback là một hàm được truyền vào một hàm khác như là một tham số. Hàm callback sẽ được gọi khi một tác vụ hoàn thành việc thực thi. Callback được sử dụng rộng rãi trong JavaScript để xử lý các tác vụ bất đồng bộ.

// Ví dụ:
function doSomethingAsync(callback) {
  setTimeout(() => {
    callback("Done");
  }, 1000);
}

// doSomethingAsync((result) => {
//   console.log(result);
// });
// 2:Promise
// Promise là một đối tượng trong JavaScript, giúp xử lý các tác vụ bất đồng bộ và trả về kết quả của tác vụ đó. Promise có thể có ba trạng thái: "pending" (chưa thực thi), "fulfilled" (thành công) và "rejected" (thất bại).

// Ví dụ:
// function doSomethingAsync() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 1000);
//   });
// }

// doSomethingAsync()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3:Async/await

// Async/await là một cú pháp mới trong JavaScript giúp xử lý các tác vụ bất đồng bộ một cách dễ dàng và đồng bộ hóa code. Async/await sử dụng Promise và giúp viết code giống với code đồng bộ hơn.

// Ví dụ:
// function doSomethingAsync() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 1000);
//   });
// }

// async function doSomething() {
//   const result = await doSomethingAsync();
//   console.log(result);
// }

// doSomething();
