// main.js
// ตอนนี้ยังไม่มี logic พิเศษ ใช้สำหรับอนาคต
// เช่น ไฮไลต์แมตช์วันนี้ หรือโหลดข้อมูลจากไฟล์ JSON/API

document.addEventListener("DOMContentLoaded", () => {
  // ตัวอย่าง: ทำให้ลิงก์เมนู active เมื่อคลิก
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
