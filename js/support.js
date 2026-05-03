// js/support.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 👇 DÁN CẤU HÌNH FIREBASE CỦA BẠN VÀO ĐÂY
const firebaseConfig = {
  apiKey: "AIzaSyCAbCX7Mfok5jK25LjiKtt1PMP40fqgbJ4",
  authDomain: "support-73128.firebaseapp.com",
  projectId: "support-73128",
  storageBucket: "support-73128.firebasestorage.app",
  messagingSenderId: "338563544320",
  appId: "1:338563544320:web:8563d19140943b50206fe5"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ support.js đã load thành công!');
  
  const form = document.getElementById('supportForm');
  if (!form) {
    console.error('❌ Không tìm thấy form có id="supportForm"');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('🔥 Form đã được submit');

    // Lấy giá trị từ các trường
    const name = document.getElementById('inputName')?.value.trim();
    const email = document.getElementById('inputEmail')?.value.trim();
    const department = document.getElementById('inputDepartment')?.value;
    const priority = document.querySelector('input[name="priority"]:checked')?.value;
    const message = document.getElementById('inputMessage')?.value.trim();

    // Kiểm tra dữ liệu bắt buộc
    if (!name || !email || !message) {
      alert('⚠️ Vui lòng điền đầy đủ Họ tên, Email và Nội dung yêu cầu.');
      return;
    }

    // Validate email đơn giản
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('⚠️ Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Đang gửi...';

    try {
      // Gửi lên Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        department: department || 'HỖ TRỢ KỸ THUẬT',
        priority: priority || 'TIÊU CHUẨN',
        message,
        createdAt: new Date()
      });

      console.log('✅ Đã lưu vào Firestore, ID:', docRef.id);
      alert('✅ Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu hỗ trợ.');
      form.reset();
      
    } catch (error) {
      console.error('❌ Lỗi khi gửi:', error);
      alert('❌ Có lỗi xảy ra: ' + error.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
});