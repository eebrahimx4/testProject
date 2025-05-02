document.addEventListener('DOMContentLoaded', function() {
    // تحديث الربح عند تغيير المبلغ
    document.getElementById('investmentAmount').addEventListener('input', calculateProfit);
});

async function startInvestment() {
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    const balance = parseFloat("{{ profile.wallet }}");
    
    if (amount <= 0) {
        showAlert('error', 'الرجاء إدخال مبلغ صالح للاستثمار');
        return;
    }

    if (amount > balance) {
        showAlert('error', 'رصيدك غير كافي لهذا الاستثمار');
        return;
    }

    try {
        showLoader(true, 'جاري معالجة طلب الاستثمار...');
        
        const response = await fetch("{% url 'invest' %}", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': '{{ csrf_token }}'
            },
            body: JSON.stringify({ amount: amount })
        });

        const data = await response.json();

        if (data.status === 'success') {
            updateWallet(data.new_balance);
            showAlert('success', `تم استثمار ${amount.toFixed(2)} جنيه بنجاح!`);
            
            // إكمال الاستثمار بعد 5 ثواني
            setTimeout(() => completeInvestment(data.investment_id), 5000);
        } else {
            showAlert('error', data.message || 'حدث خطأ أثناء الاستثمار');
        }
    } catch (error) {
        showAlert('error', 'حدث خطأ في الاتصال بالخادم');
    } finally {
        showLoader(false);
    }
}

async function completeInvestment(investmentId) {
    try {
        showLoader(true, 'جاري إضافة الأرباح إلى رصيدك...');
        
        const response = await fetch("{% url 'complete_investment' %}", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': '{{ csrf_token }}'
            },
            body: JSON.stringify({ investment_id: investmentId })
        });

        const data = await response.json();

        if (data.status === 'success') {
            updateWallet(data.new_balance);
            showAlert('success', `تم إضافة ${data.profit} جنيه أرباح إلى رصيدك!`);
            setTimeout(() => location.reload(), 2000); // إعادة تحميل الصفحة
        } else {
            showAlert('error', data.message || 'حدث خطأ أثناء إضافة الأرباح');
        }
    } catch (error) {
        showAlert('error', 'حدث خطأ في الاتصال بالخادم');
    } finally {
        showLoader(false);
    }
}

// وظائف مساعدة
function calculateProfit() {
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    const vipBonus = parseFloat("{{ profile.vip_level }}") / 100;
    const profit = amount * (0.03 + vipBonus);
    document.getElementById('expectedProfit').textContent = profit.toFixed(2);
}

function allocateAll() {
    document.getElementById('investmentAmount').value = parseFloat("{{ profile.wallet }}").toFixed(2);
    calculateProfit();
}

function updateWallet(newBalance) {
    document.querySelector('.balance').textContent = parseFloat(newBalance).toFixed(2) + ' جنيه';
}

function showLoader(show, message = '') {
    // تنفيذ عرض/إخفاء رسالة التحميل
}

function showAlert(type, message) {
    // تنفيذ عرض رسائل التنبيه
}