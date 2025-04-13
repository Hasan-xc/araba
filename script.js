// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      // تبديل فئة 'active' لإظهار/إخفاء القائمة
      mainNav.classList.toggle('active');
    });
    
    // (اختياري) إغلاق القائمة عند النقر على رابط
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
          // التأكد من عدم إغلاقها إذا كان الرابط لا يغير الصفحة (مثل رابط قسم)
          // ويمكن تحسين هذا الشرط لاحقًا إذا لزم الأمر
          if (!link.getAttribute('href').startsWith('#') || link.getAttribute('href').length > 1) {
            mainNav.classList.remove('active');
          }
        }
      });
    });
    
    // (اختياري) إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
      const isClickInsideNav = mainNav.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }
    });
  }
});