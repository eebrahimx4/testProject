function copyLink() {
    const link = document.getElementById('referralLink').textContent;
    navigator.clipboard.writeText(link).then(() => {
      const msg = document.getElementById('copySuccess');
      msg.style.display = 'block';
      setTimeout(() => msg.style.display = 'none', 2000);
    });
  }
  
  function shareLink() {
    const link = document.getElementById('referralLink').textContent;
    if (navigator.share) {
      navigator.share({
        title: 'انضم إلى الموقع',
        text: 'سجل من خلال الرابط ده وخد بونص 🔥',
        url: link,
      });
    } else {
      alert("المتصفح لا يدعم المشاركة التلقائية، انسخ الرابط يدويًا.");
    }
  }
  





  document.addEventListener("DOMContentLoaded", () => {
    // هنا بتحط الأعداد حسب الداتا اللي جاية من الباك إند لاحقًا
    document.getElementById("level1Count").textContent = 3;
    document.getElementById("level2Count").textContent = 5;
    document.getElementById("level3Count").textContent = 2;
  });




// نسخ رابط الدعوة
function copyLink() {
  const referralLink = document.getElementById('referralLink');
  referralLink.select();
  document.execCommand('copy');
  
  const copySuccess = document.getElementById('copySuccess');
  copySuccess.style.display = 'block';
  
  setTimeout(() => {
      copySuccess.style.display = 'none';
  }, 3000);
}

// مشاركة عبر واتساب
function shareOnWhatsApp() {
  const referralLink = document.getElementById('referralLink').value;
  const message = `انضم إلي عبر هذا الرابط واحصل على مكافأة: ${referralLink}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// مشاركة عبر تيليجرام
function shareOnTelegram() {
  const referralLink = document.getElementById('referralLink').value;
  const message = `انضم إلي عبر هذا الرابط واحصل على مكافأة: ${referralLink}`;
  const url = `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}




// عرض الاصدقاء من الاحالات
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-friends");

  buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
          const level = btn.dataset.level;
          const list = document.getElementById("friends-level-" + level);

          if (list.style.display === "none") {
              list.style.display = "block";
              btn.textContent = "إخفاء الأصدقاء";
          } else {
              list.style.display = "none";
              btn.textContent = "عرض الأصدقاء";
          }
      });
  });
});
