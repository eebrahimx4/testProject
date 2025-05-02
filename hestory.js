// بيانات تجريبية (مؤقتة حتى توصّل مع Django)
const transactions = [
    { id: 1, type: "deposit", amount: 500, currency: "USD", date: "2023-10-01 14:30" },
    { id: 2, type: "withdrawal", amount: 200, currency: "USD", date: "2023-10-02 10:15" },
    { id: 3, type: "deposit", amount: 1000, currency: "USD", date: "2023-10-03 16:45" },
    { id: 4, type: "withdrawal", amount: 300, currency: "USD", date: "2023-10-04 09:20" },
];

// عرض البيانات في الصفحة
function loadTransactions() {
    const depositsList = document.getElementById("deposits-list");
    const withdrawalsList = document.getElementById("withdrawals-list");
    
    // تفريغ القوائم أولًا
    depositsList.innerHTML = "";
    withdrawalsList.innerHTML = "";
    
    // تصنيف العمليات وعرضها
    transactions.forEach(transaction => {
        const transactionElement = document.createElement("div");
        transactionElement.className = `transaction-card ${transaction.type}`;
        transactionElement.innerHTML = `
            <div class="transaction-amount">${transaction.amount} ${transaction.currency}</div>
            <div class="transaction-date">${transaction.date}</div>
        `;
        
        if (transaction.type === "deposit") {
            depositsList.appendChild(transactionElement);
        } else {
            withdrawalsList.appendChild(transactionElement);
        }
    });
}

// تبديل بين التبويبات
function showTab(tabId) {
    // إخفاء كل المحتويات
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    
    // إلغاء تنشيط كل الأزرار
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    // إظهار التبويب المحدد
    document.getElementById(tabId).classList.add("active");
    
    // تنشيط الزر المحدد
    event.currentTarget.classList.add("active");
}

// تحميل البيانات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadTransactions);