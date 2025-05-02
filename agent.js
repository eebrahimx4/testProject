document.addEventListener('DOMContentLoaded', function() {
    // بيانات المستخدم (يمكن استبدالها ببيانات حقيقية من قاعدة البيانات)
    const userData = {
        name: "محمد",
        level: "فضي",
        invited: 5,
        points: 250,
        nextLevel: "ذهبي",
        remainingInvites: 5,
        progress: 50
    };

    // تعبئة بيانات المستخدم
    document.getElementById('userLevel').textContent = userData.level;
    document.getElementById('invitedCount').textContent = userData.invited;
    document.getElementById('pointsCount').textContent = userData.points;
    document.getElementById('remainingInvites').textContent = userData.remainingInvites;

    // تحديث شريط التقدم
    document.querySelector('.progress-fill').style.width = `${userData.progress}%`;

    // نسخ رابط الدعوة
    const copyBtn = document.getElementById('copyBtn');
    const invitationLink = document.getElementById('invitationLink');

    copyBtn.addEventListener('click', function() {
        invitationLink.select();
        document.execCommand('copy');
        
        // تغيير نص الزر مؤقتاً للإشارة إلى النسخ
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
        
        setTimeout(function() {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });

    // مشاركة عبر وسائل التواصل الاجتماعي
    const shareText = "انضم إلى تعاون الوكيل واحصل على مميزات حصرية! استخدم رابط الدعوة الخاص بي:";
    const shareUrl = invitationLink.value;

    document.querySelector('.whatsapp').addEventListener('click', function() {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, '_blank');
    });

    document.querySelector('.telegram').addEventListener('click', function() {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
    });

    document.querySelector('.twitter').addEventListener('click', function() {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    });

    // يمكنك إضافة المزيد من الوظائف هنا مثل:
    // - جلب بيانات المستخدم الحقيقية من قاعدة البيانات
    // - تحديث الشاشة عند دعوة صديق جديد
    // - إرسال إشعارات عند الوصول إلى مستوى جديد
});
