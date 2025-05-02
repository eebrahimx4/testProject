
// open model for wallet
const modal = document.getElementById("walletModal");

document.querySelectorAll('.open-modal').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

// Data For Carts
const matches = [
  {
    id: 1154787,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "00:00:00",
    league: "Strawberry To Jackson",
    img1:  "image_products/33.jpg",
    team1: "Strawberry",
    img2: "image/usus.png",
    team2: "Jackson",
    bg: "image/ccc.jpg"
  },
  {
    id: 5837294,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Apricot To Alexander",
    img1: "/static/image_products/10.jpg",
    team1: "Apricot",
    img2: "/static/image/usus.png",
    team2: "Alexander",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 1948375,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Banana To Liam",
    img1: "/static/image_products/11.avif",
    team1: "Banana",
    img2: "/static/image/usus.png",
    team2: "Liam",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 7204938,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Pear To Noah",
    img1: "/static/image_products/12.jpg",
    team1: "Pear",
    img2: "/static/image/usus.png",
    team2: "Noah",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 3849201,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Lemon  To Charles",
    img1: "/static/image_products/13.jpg",
    team1: "Lemon ",
    img2: "/static/image/usus.png",
    team2: "Charles",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 9482037,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Kiwi  To James",
    img1: "/static/image_products/14.jpg",
    team1: "Kiwi ",
    img2: "/static/image/usus.png",
    team2: "James",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 1573948,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Cherry Various  To Elijah",
    img1: "/static/image_products/15.jpg",
    team1: "Cherry Various  ",
    img2: "/static/image/usus.png",
    team2: "Elijah",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 5027481,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Avocado  To Mateo",
    img1: "/static/image_products/16.jpg",
    team1: "Avocado ",
    img2: "/static/image/usus.png",
    team2: "Mateo",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 6710283,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Pineapple  To Theodore",
    img1: "/static/image_products/17.avif",
    team1: "Pineapple ",
    img2: "/static/image/usus.png",
    team2: "Theodore",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 8392017,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Dates To Henry",
    img1: "/static/image_products/18.jpg",
    team1: "Dates",
    img2: "/static/image/usus.png",
    team2: "Henry",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 4701839,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Mango  To Lucas",
    img1: "/static/image_products/19.jpg",
    team1: "Mango ",
    img2: "/static/image/usus.png",
    team2: "Lucas",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 2947501,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Pomegranate To William",
    img1: "/static/image_products/20.avif",
    team1: "Pomegranate",
    img2: "/static/image/usus.png",
    team2: "William",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 5839174,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Pears To Levi",
    img1: "/static/image_products/21.jpg",
    team1: "Pears",
    img2: "/static/image/usus.png",
    team2: "Levi",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 7301948,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Orange  To Sebastian",
    img1: "/static/image_products/22.avif",
    team1: "Orange ",
    img2: "/static/image/usus.png",
    team2: "Sebastian",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 4928710,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Tangerine To Jacklin",
    img1: "/static/image_products/23.jpg",
    team1: "Tangerine",
    img2: "/static/image/usus.png",
    team2: "Jacklin",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 6173849,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Coconut  To Ezra",
    img1: "/static/image_products/24.jpg",
    team1: "Coconut ",
    img2: "/static/image/usus.png",
    team2: "Ezra",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 8203741,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Watermelon  To Michael",
    img1: "/static/image_products/25.jpg",
    team1: "Watermelon ",
    img2: "/static/image/usus.png",
    team2: "Michael",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 1947023,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Peach To Daniel",
    img1: "/static/image_products/26.jpg",
    team1: "Peach",
    img2: "/static/image/usus.png",
    team2: "Daniel",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 7039482,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Cactus To Owen",
    img1: "/static/image_products/27.avif",
    team1: "Cactus",
    img2: "/static/image/usus.png",
    team2: "Owen",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 4819207,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Fig To Samuel",
    img1: "/static/image_products/28.jpg",
    team1: "Fig",
    img2: "/static/image/usus.png",
    team2: "Samuel",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 5930172,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Cherry  To Hudson",
    img1: "/static/image_products/29.jpg",
    team1: "Cherry ",
    img2: "/static/image/usus.png",
    team2: "Hudson",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 6714920,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Green Grapes  To Luca",
    img1: "/static/image_products/30.jpg",
    team1: "Green Grapes ",
    img2: "/static/image/usus.png",
    team2: "Luca",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 2483091,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Pineapple pieces To Ethan",
    img1: "/static/image_products/31.jpg",
    team1: "Pineapple pieces",
    img2: "/static/image/usus.png",
    team2: "Ethan",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 7304912,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Red Appel To John",
    img1: "/static/image_products/32.avif",
    team1: "Red Appel",
    img2: "/static/image/usus.png",
    team2: "John",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 9182047,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Strawberry pieces To David",
    img1: "/static/image_products/33.jpg",
    team1: "Strawberry pieces ",
    img2: "/static/image/usus.png",
    team2: "David",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 4057281,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Watermelon pieces To Joseph",
    img1: "/static/image_products/34.jpg",
    team1: "Watermelon pieces ",
    img2: "/static/image/usus.png",
    team2: "Joseph",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 2948013,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "All fruits To Mason",
    img1: "/static/image_products/35.avif",
    team1: "All fruits",
    img2: "/static/image/usus.png",
    team2: "Mason",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 8701294,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Various fruits To Luke",
    img1: "/static/image_products/36.jpg",
    team1: "Various fruits",
    img2: "/static/image/usus.png",
    team2: "Luke",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 5017382,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Fruit salad To Matthew",
    img1: "/static/image_products/37.jpg",
    team1: "Fruit salad",
    img2: "/static/image/usus.png",
    team2: "Matthew",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 6284917,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Dragon Fruit To Thomas",
    img1: "/static/image_products/38.avif",
    team1: "Dragon Fruit",
    img2: "/static/image/usus.png",
    team2: "Thomas",
    bg: "/static/image/ccc.jpg"
  },
  {
    id: 3829174,
    title: "Order it today",
    subtitle: "Today's fruits",
    year: "2025",
    time: "12:30:00",
    league: "Pomegranate To Ezekiel",
    img1: "/static/image_products/39.avif",
    team1: "Pomegranate",
    img2: "/static/image/usus.png",
    team2: "Ezekiel",
    bg: "/static/image/ccc.jpg"
  },
];



function getCurrentDateTime() {
  const now = new Date();
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  return {
    date: now.toLocaleDateString('ar-EG', dateOptions),
    time: now.toLocaleTimeString('ar-EG', timeOptions)
  };
}

// عرض الماتشات
const container = document.getElementById("matchesContainer");

for(let i = 0; i < matches.length; i++) {
  const current = getCurrentDateTime();
  
  let cartona = `
  <div class="open-modal">
        <div class="match-card">
            <div class="card-header">
              <span>ID: ${matches[i].id}</span>
              <span class="copy-icon">📋</span>
            </div>
      
            <div class="player-section">
              <img src="${matches[i].bg}" alt="Cover of matches" class="player-bg">
              <div class="overlay">
                <div class="top-info">
                  <span>${current.date}</span>
                  <span>${current.time} ⏱️</span>
                </div>
                <div class="player-info">
                  <h3>${matches[i].title}</h3>
                  <p>${matches[i].subtitle}</p>
                </div>
              </div>
            </div>
      
            <div class="league-title">${matches[i].league}</div>
      
            <div class="match-teams">
              <div class="team">
                <img src="${matches[i].img1}" alt="Team 1">
                <p>${matches[i].team1}</p>
              </div>
              <div class="vs">VS</div>
              <div class="team">
                <img src="${matches[i].img2}" alt="Team 2">
                <p>${matches[i].team2}</p>
              </div>
            </div>
        </div>
      </div>
  `;
  container.innerHTML += cartona;
}

// دالة التحديث التلقائي
function updateAllTimes() {
  const current = getCurrentDateTime();
  const dateElements = document.querySelectorAll('.top-info span:first-child');
  const timeElements = document.querySelectorAll('.top-info span:last-child');
  
  dateElements.forEach(el => el.textContent = current.date);
  timeElements.forEach(el => {
    el.innerHTML = current.time + ' <span class="clock-icon">⏱️</span>';
    el.style.color = '#4CAF50';
    setTimeout(() => el.style.color = '', 500);
  });
}

// تحديث كل ثانية
setInterval(updateAllTimes, 1000);
updateAllTimes();






// searchInput
const searchInput = document.getElementById("searchInput");

function renderMatches(data) {
  container.innerHTML = ''; 

  for (let i = 0; i < data.length; i++) {
    let cartona = `
    <div class="open-modal">
      <div class="match-card">
        <div class="card-header">
          <span>ID: ${data[i].id}</span>
          <span class="copy-icon">📋</span>
        </div>

        <div class="player-section">
          <img src="${data[i].bg}" alt="Cover of matches" class="player-bg">
          <div class="overlay">
            <div class="top-info">
              <span>${data[i].year}</span>
              <span>${data[i].time} ⏱️</span>
            </div>
            <div class="player-info">
              <h3>${data[i].title}</h3>
              <p>${data[i].subtitle}</p>
            </div>
          </div>
        </div>

        <div class="league-title">${data[i].league}</div>

        <div class="match-teams">
          <div class="team">
            <img src="${data[i].img1}" alt="Team 1">
            <p>${data[i].team1}</p>
          </div>
          <div class="vs">To</div>
          <div class="team">
            <img src="${data[i].img2}" alt="Team 2">
            <p>${data[i].team2}</p>
          </div>
        </div>
      </div>
    </div>
    `;
    container.innerHTML += cartona;
  }
}
renderMatches(matches);
searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim();
  if (value === "") {
    renderMatches(matches); 
  } else {
    const filtered = matches.filter(item => item.id == value);
    renderMatches(filtered); 
  }
});




// تمييز العنصر النشط في الفوتر
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index';
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
      if (item.getAttribute('href').includes(currentPage)) {
          item.classList.add('active');
      }
  });
});




// Rel Code ........
function updateProfit() {
  const amountInput = document.getElementById('amountInput').value;
  const amount = parseFloat(amountInput) || 0;
  const profit = amount * 0.03;
  document.getElementById('estimatedProfit').textContent = profit.toFixed(2);
  document.getElementById('transactionAmount').textContent = amount.toFixed(2);
}

function setMaxAmount() {
  const walletBalance = parseFloat(document.getElementById('walletBalance').textContent);
  document.getElementById('amountInput').value = walletBalance.toFixed(2);
  updateProfit();
}

function closeModal() {
  document.getElementById('walletModal').style.display = 'none';
}

function openRecharge() {
  // أضف منطق إعادة الشحن إذا لزم الأمر
  alert('إعادة الشحن: تحت التنفيذ');
}

async function handleConfirm() {
  const amount = parseFloat(document.getElementById('amountInput').value) || 0;
  if (amount <= 0) {
    alert('الرجاء إدخال مبلغ صالح');
    return;
  }

  try {
    const response = await fetch('/process_profit/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(), // تأكد من إضافة CSRF token
      },
      body: JSON.stringify({ amount: amount }),
    });

    const data = await response.json();
    if (data.success) {
      document.getElementById('walletBalance').textContent = data.new_balance;
      alert('تمت العملية بنجاح!');
      closeModal();
    } else {
      alert('خطأ: ' + data.error);
    }
  } catch (error) {
    alert('حدث خطأ أثناء معالجة الطلب');
  }
}

// دالة للحصول على CSRF token (يجب أن تكون متوفرة في مشروعك)
function getCsrfToken() {
  return document.querySelector('[name=csrfmiddlewaretoken]').value;
}



