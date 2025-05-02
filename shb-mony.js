// // بيانات المستخدم
// const user = {
//     balance: 1250,
//     transactions: [
//         { 
//             id: 1,
//             amount: -200,
//             type: 'withdrawal',
//             method: 'vodafone',
//             date: '2024-05-10',
//             time: '14:30',
//             tax: 40,
//             netAmount: 160
//         },
//         { 
//             id: 2,
//             amount: -500,
//             type: 'withdrawal',
//             method: 'orange',
//             date: '2024-04-28',
//             time: '10:15',
//             tax: 100,
//             netAmount: 400
//         },
//         { 
//             id: 3,
//             amount: 1000,
//             type: 'deposit',
//             method: 'bank',
//             date: '2024-04-15',
//             time: '09:00',
//             tax: 0,
//             netAmount: 1000
//         }
//     ]
// };

// // عناصر DOM
// const amountInput = document.getElementById('amount');
// const requestedAmountEl = document.getElementById('requested-amount');
// const taxAmountEl = document.getElementById('tax-amount');
// const netAmountEl = document.getElementById('net-amount');
// const currentBalanceEl = document.getElementById('current-balance');
// const transactionsList = document.getElementById('transactions-list');
// const withdrawalForm = document.getElementById('withdrawal-form');

// // تهيئة الصفحة
// function initPage() {
//     // تحديث الرصيد
//     currentBalanceEl.textContent = user.balance.toLocaleString('ar-EG', {
//         style: 'decimal',
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     }) + ' جنيه';
    
//     // عرض العمليات السابقة
//     renderTransactions();
    
//     // إضافة مستمعات الأحداث
//     amountInput.addEventListener('input', updateAmountDetails);
//     withdrawalForm.addEventListener('submit', handleWithdrawal);
// }

// // تحديث تفاصيل المبلغ والضريبة
// function updateAmountDetails() {
//     const amount = parseFloat(amountInput.value) || 0;
//     const tax = amount * 0.2;
//     const netAmount = amount - tax;
    
//     requestedAmountEl.textContent = amount.toLocaleString('ar-EG', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     }) + ' جنيه';
    
//     taxAmountEl.textContent = tax.toLocaleString('ar-EG', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     }) + ' جنيه';
    
//     netAmountEl.textContent = netAmount.toLocaleString('ar-EG', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     }) + ' جنيه';
// }

// // عرض العمليات السابقة
// function renderTransactions() {
//     transactionsList.innerHTML = '';
    
//     user.transactions.forEach(transaction => {
//         const transactionEl = document.createElement('div');
//         transactionEl.className = 'transaction-item';
        
//         const amountClass = transaction.type === 'withdrawal' ? 'withdrawal' : 'deposit';
//         const sign = transaction.type === 'withdrawal' ? '-' : '+';
        
//         transactionEl.innerHTML = `
//             <div class="transaction-amount ${amountClass}">
//                 ${sign}${Math.abs(transaction.amount).toLocaleString('ar-EG')} ج
//             </div>
//             <div class="transaction-details">
//                 <span>${getMethodName(transaction.method)}</span>
//                 <span>${transaction.date} - ${transaction.time}</span>
//             </div>
//         `;
        
//         transactionsList.appendChild(transactionEl);
//     });
// }

// // الحصول على اسم طريقة الدفع
// function getMethodName(method) {
//     const methods = {
//         'vodafone': 'فودافون كاش',
//         'orange': 'أورنج كاش',
//         'etisalat': 'اتصالات كاش',
//         'bank': 'حساب بنكي'
//     };
    
//     return methods[method] || method;
// }

// // معالجة طلب السحب
// function handleWithdrawal(e) {
//     e.preventDefault();
    
//     const amount = parseFloat(amountInput.value);
//     const method = document.querySelector('input[name="method"]:checked').value;
    
//     // التحقق من صحة المبلغ
//     if (!amount || amount < 10) {
//         alert('الحد الأدنى للسحب هو 10 جنيه');
//         return;
//     }
    
//     const tax = amount * 0.2;
//     const netAmount = amount - tax;
    
//     // التحقق من كفاية الرصيد
//     if (netAmount > user.balance) {
//         alert(`رصيدك غير كافي! المبلغ الصافي بعد الضريبة: ${netAmount.toFixed(2)} جنيه`);
//         return;
//     }
    
//     // تأكيد العملية
//     const methodName = getMethodName(method);
//     const confirmationMessage = `
//         هل تريد سحب ${amount.toFixed(2)} جنيه عبر ${methodName}؟
//         \nالضريبة: ${tax.toFixed(2)} جنيه (20%)
//         \nالمبلغ الصافي: ${netAmount.toFixed(2)} جنيه
//     `;
    
//     if (confirm(confirmationMessage)) {
//         // في الواقع، هنا ستقوم بإرسال الطلب إلى الخادم
//         processWithdrawal(amount, method, tax, netAmount);
//     }
// }

// // معالجة السحب (وهمي في هذا المثال)
// function processWithdrawal(amount, method, tax, netAmount) {
//     // تحديث رصيد المستخدم
//     user.balance -= netAmount;
//     currentBalanceEl.textContent = user.balance.toLocaleString('ar-EG', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     }) + ' جنيه';
    
//     // إضافة العملية إلى السجل
//     const newTransaction = {
//         id: user.transactions.length + 1,
//         amount: -amount,
//         type: 'withdrawal',
//         method: method,
//         date: new Date().toISOString().split('T')[0],
//         time: new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'}),
//         tax: tax,
//         netAmount: netAmount
//     };
    
//     user.transactions.unshift(newTransaction);
//     renderTransactions();
    
//     // إعادة تعيين النموذج
//     amountInput.value = '';
//     updateAmountDetails();
    
//     // رسالة نجاح
//     alert(`تمت عملية السحب بنجاح!\nسيصلك المبلغ الصافي ${netAmount.toFixed(2)} جنيه خلال 24 ساعة`);
// }

// // تهيئة الصفحة عند التحميل
// document.addEventListener('DOMContentLoaded', initPage);


































