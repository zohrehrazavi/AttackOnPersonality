// Quiz questions
const questions = [
    {
        text: "When you're in a new place, what do you prefer?",
        options: [
            { text: "Explore it alone", value: "A" },
            { text: "Join a group tour", value: "B" }
        ]
    },
    {
        text: "Which statement resonates more with you?",
        options: [
            { text: "Facts and logic guide me", value: "A" },
            { text: "Emotions and values guide me", value: "B" }
        ]
    },
    {
        text: "You find yourself more:",
        options: [
            { text: "Focused on present realities", value: "A" },
            { text: "Drawn to possibilities and ideas", value: "B" }
        ]
    },
    {
        text: "You make decisions:",
        options: [
            { text: "After careful planning", value: "A" },
            { text: "On the spot, as things come", value: "B" }
        ]
    },
    {
        text: "At a party, you're usually:",
        options: [
            { text: "Chatting with everyone", value: "A" },
            { text: "With one or two close friends", value: "B" }
        ]
    },
    {
        text: "When solving a problem, you rely on:",
        options: [
            { text: "Experience", value: "A" },
            { text: "Innovation", value: "B" }
        ]
    },
    {
        text: "What is more important in teamwork?",
        options: [
            { text: "Efficiency and structure", value: "A" },
            { text: "Flexibility and openness", value: "B" }
        ]
    },
    {
        text: "You value:",
        options: [
            { text: "Justice over mercy", value: "A" },
            { text: "Compassion over fairness", value: "B" }
        ]
    }
];

// --- One-by-one Question Flow ---
const questionImages = [
  [
    '../image/image 10.png', '../image/image 11.png'
  ],
  [
    '../image/image 11.png', '../image/image 10.png'
  ],
  [
    '../image/image 10.png', '../image/image 11.png'
  ],
  [
    '../image/image 11.png', '../image/image 10.png'
  ],
  [
    '../image/image 10.png', '../image/image 11.png'
  ],
  [
    '../image/image 11.png', '../image/image 10.png'
  ],
  [
    '../image/image 10.png', '../image/image 11.png'
  ],
  [
    '../image/image 11.png', '../image/image 10.png'
  ]
];

let currentQuestion = 0;
let userAnswers = [];

function renderSingleQuestion(index) {
  const q = questions[index];
  const container = document.getElementById('single-question-container');
  if (!q || !container) return;
  // Progress bar
  const progress = `<div class="quiz-progress"><div class="quiz-progress-bar" style="width:${((index+1)/questions.length)*100}%"></div></div>`;
  // Question card
  container.innerHTML = `
    ${progress}
    <div class="single-question">
      <div class="single-question-title">Question ${index + 1}<br><span style='font-family:inherit;font-size:1.1rem;'>${q.text}</span></div>
      <div class="question-img-options">
        <div class="question-img-option" tabindex="0" data-value="A">
          <img class="question-img" src="${questionImages[index][0]}" alt="Option A" />
          <div class="question-img-label">${q.options[0].text}</div>
        </div>
        <div class="question-img-option" tabindex="0" data-value="B">
          <img class="question-img" src="${questionImages[index][1]}" alt="Option B" />
          <div class="question-img-label">${q.options[1].text}</div>
        </div>
      </div>
      <div class="quiz-nav">
        <button type="button" class="quiz-btn" id="prev-btn" ${index === 0 ? 'disabled' : ''}>Previous</button>
        <button type="button" class="quiz-btn" id="next-btn" disabled>Next</button>
      </div>
    </div>
  `;
  // Option selection
  let selected = userAnswers[index] || null;
  container.querySelectorAll('.question-img-option').forEach(opt => {
    if (opt.getAttribute('data-value') === selected) opt.classList.add('selected');
    opt.onclick = () => {
      selected = opt.getAttribute('data-value');
      container.querySelectorAll('.question-img-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      userAnswers[index] = selected;
      container.querySelector('#next-btn').disabled = false;
    };
    opt.onkeydown = (e) => { if ((e.key === 'Enter' || e.key === ' ') && !opt.classList.contains('selected')) opt.onclick(); };
  });
  // Next/Prev navigation
  container.querySelector('#next-btn').onclick = () => {
    if (!selected) return;
    if (index < questions.length - 1) {
      renderSingleQuestion(index + 1);
    } else {
      showResultFromAnswers();
    }
  };
  container.querySelector('#prev-btn').onclick = () => {
    if (index > 0) renderSingleQuestion(index - 1);
  };
}

function handleOptionSelect(value) {
  userAnswers[currentQuestion] = value;
  // Animate selection
  const opts = document.querySelectorAll('.question-img-option');
  opts.forEach(opt => opt.classList.remove('selected'));
  const selected = Array.from(opts).find(opt => opt.getAttribute('data-value') === value);
  if (selected) selected.classList.add('selected');
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      renderSingleQuestion(currentQuestion);
    } else {
      // Show result
      showResultFromAnswers();
    }
  }, 350);
}

function showResultFromAnswers() {
  // Use existing logic to calculate and show result
  const mbtiType = calculateMBTI(userAnswers);
  const character = matchCharacter(mbtiType);
  displayResult(mbtiType, character);
  showView('result-view');
  // Confetti effect
  launchConfetti();
  // Reset for next time
  currentQuestion = 0;
  userAnswers = [];
}

// Confetti effect
function launchConfetti() {
  const confetti = document.querySelector('.confetti');
  if (!confetti) return;
  confetti.innerHTML = '';
  for (let i = 0; i < 32; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = `hsl(${Math.random()*360},90%,70%)`;
    piece.style.animationDelay = (Math.random() * 0.7) + 's';
    confetti.appendChild(piece);
  }
  setTimeout(() => { if (confetti) confetti.innerHTML = ''; }, 2000);
}

// --- SPA Navigation ---
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo(0, 0);
  if (viewId === 'quiz-view') {
    currentQuestion = 0;
    userAnswers = [];
    renderSingleQuestion(0);
  }
}

// --- Main Art Slider ---
const sliderImages = [
  '../image/Main Art Placeholde.png',
  '../image/image 10.png',
  '../image/image 11.png',
  '../image/image 12.png',
  '../image/image 13.png',
];
let sliderIndex = 0;

// --- Carousel scroll-snap and highlight ---
const thumbsRow = document.getElementById('slider-thumbs');
if (thumbsRow) {
  thumbsRow.addEventListener('scroll', () => {
    // Snap to closest thumb
    const thumbs = thumbsRow.querySelectorAll('.thumb-img');
    let minDist = Infinity, activeIdx = 0;
    thumbs.forEach((thumb, i) => {
      const rect = thumb.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width/2 - window.innerWidth/2);
      if (dist < minDist) { minDist = dist; activeIdx = i; }
    });
    thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === activeIdx));
  });
}

// --- Main image transition ---
function updateSlider(index) {
  const mainImg = document.getElementById('main-slider-img');
  const thumbs = document.querySelectorAll('#slider-thumbs .thumb-img');
  sliderIndex = (index + sliderImages.length) % sliderImages.length;
  mainImg.style.transition = 'none';
  mainImg.style.opacity = '0.2';
  setTimeout(() => {
    mainImg.src = sliderImages[sliderIndex];
    mainImg.style.transition = 'opacity 0.4s cubic-bezier(.4,2,.6,1)';
    mainImg.style.opacity = '1';
  }, 120);
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === sliderIndex);
  });
  // Scroll selected thumb into view
  if (thumbs[sliderIndex]) thumbs[sliderIndex].scrollIntoView({behavior:'smooth',inline:'center'});
}

function setupSlider() {
  const leftBtn = document.getElementById('slider-arrow-left');
  const rightBtn = document.getElementById('slider-arrow-right');
  const thumbs = document.querySelectorAll('#slider-thumbs .thumb-img');

  leftBtn.addEventListener('click', () => updateSlider(sliderIndex - 1));
  rightBtn.addEventListener('click', () => updateSlider(sliderIndex + 1));
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => updateSlider(i));
  });

  // Touch swipe support
  let startX = null;
  const mainImg = document.getElementById('main-slider-img');
  mainImg.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  mainImg.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 40) updateSlider(sliderIndex - 1); // swipe right
    else if (startX - endX > 40) updateSlider(sliderIndex + 1); // swipe left
    startX = null;
  });

  updateSlider(0);
}

// --- Button sound and shatter animation ---
const sfxBtn = document.getElementById('sfx-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    if (sfxBtn) { sfxBtn.currentTime = 0; sfxBtn.play(); }
    startQuizBtn.classList.add('shatter', 'btn-bounce');
    setTimeout(() => startQuizBtn.classList.remove('shatter', 'btn-bounce'), 400);
  });
}

// Add shatter animation CSS
const style = document.createElement('style');
style.innerHTML = `.shatter { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
@keyframes shake { 10%, 90% { transform: translateX(-1px); } 20%, 80% { transform: translateX(2px); } 30%, 50%, 70% { transform: translateX(-4px); } 40%, 60% { transform: translateX(4px); } }`;
document.head.appendChild(style);

// Display the result (updated for new layout)
function displayResult(mbtiType, character) {
  // Set character name and description
  const characterName = document.getElementById('character-name');
  const characterDesc = document.getElementById('character-desc');
  characterName.textContent = character.name ? `You are ${character.name}.` : '';
  characterDesc.textContent = character.desc || '';
  // Set character image (placeholder for now)
  const charImg = document.getElementById('result-character-img');
  if (charImg) charImg.src = '../image/image 10.png';
}

// Retake button logic
const retakeBtn = document.getElementById('retake-btn');
if (retakeBtn) {
  retakeBtn.onclick = () => showView('home-view');
}

// --- Animated embers for homepage ---
function createEmbers(num = 32) {
  const emberAnim = document.querySelector('.ember-anim');
  if (!emberAnim) return;
  for (let i = 0; i < num; i++) {
    const ember = document.createElement('div');
    ember.className = 'ember';
    ember.style.left = Math.random() * 100 + 'vw';
    ember.style.animationDelay = (Math.random() * 6) + 's';
    ember.style.animationDuration = (4 + Math.random() * 4) + 's';
    emberAnim.appendChild(ember);
  }
}

document.addEventListener('DOMContentLoaded', () => {
    createEmbers();
    setupSlider();
    // Navigation: Take the Test button
    const startBtn = document.getElementById('start-quiz-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => showView('quiz-view'));
    }
    // Show home view by default
    showView('home-view');
}); 