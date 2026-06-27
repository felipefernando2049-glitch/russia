(() => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const phrases = {
    kind: {
      badge: 'kind mood',
      title: 'Ты очень милая.',
      ru: 'Ты очень милая, тёплая и приятная в общении.',
      en: 'You are very sweet, warm, and lovely to talk to.'
    },
    stylish: {
      badge: 'style mood',
      title: 'Ты очень стильная.',
      ru: 'У тебя красивый, современный и очень элегантный стиль.',
      en: 'You have a beautiful, modern, and very elegant style.'
    },
    eyes: {
      badge: 'eyes mood',
      title: 'У тебя красивые глаза.',
      ru: 'Твои глаза яркие, выразительные и по-настоящему запоминающиеся.',
      en: 'Your eyes are bright, expressive, and truly unforgettable.'
    },
    learn: {
      badge: 'learning mood',
      title: 'С тобой учиться легче.',
      ru: 'С тобой английский и русский кажутся легче и интереснее.',
      en: 'With you, English and Russian feel easier and more interesting.'
    },
    fun: {
      badge: 'fun mood',
      title: 'Ты делаешь всё веселее.',
      ru: 'С тобой даже маленькие ошибки становятся смешными и милыми.',
      en: 'With you, even small mistakes become funny and cute.'
    },
    special: {
      badge: 'special mood',
      title: 'Ты особенная.',
      ru: 'В тебе есть что-то редкое: красота, шарм и очень приятная энергия.',
      en: 'There is something rare about you: beauty, charm, and a very lovely energy.'
    }
  };

  const personalities = {
    elegant: {
      title: 'Elegant by nature',
      text: 'You have the kind of beauty that feels refined, graceful, and naturally classy. It does not look forced — it simply feels like part of who you are.',
      ru: 'У тебя такая красота, которая кажется утончённой, изящной и естественно элегантной. Это не выглядит наигранно — это просто часть тебя.'
    },
    bright: {
      title: 'Eyes that stay in the memory',
      text: 'Your eyes deserve extra praise. They feel bright, expressive, and full of life — the kind of eyes that catch attention immediately and stay in the mind for a long time.',
      ru: 'Твои глаза заслуживают особой похвалы. Они яркие, выразительные и полные жизни — такие глаза сразу привлекают внимание и долго остаются в памяти.'
    },
    smart: {
      title: 'Clever and genuinely interesting',
      text: 'You feel smart in the most attractive way: curious, quick, and lovely to learn with. You make a conversation feel alive.',
      ru: 'Ты умная в самом привлекательном смысле: любознательная, быстрая и очень приятная в общении. С тобой разговор всегда живой.'
    },
    warm: {
      title: 'Warm energy',
      text: 'There is a softness in your energy that makes everything easier. You seem like the kind of person who makes moments feel more comfortable and bright.',
      ru: 'В твоей энергии есть мягкость, которая делает всё легче. Ты кажешься тем человеком, рядом с которым моменты становятся уютнее и светлее.'
    },
    stylish: {
      title: 'Stylish without trying too hard',
      text: 'Your style feels effortless and confident. Feminine, modern, and beautiful — exactly the kind of style that feels memorable.',
      ru: 'Твой стиль кажется естественным и уверенным. Женственный, современный и красивый — именно такой стиль запоминается.'
    },
    magnetic: {
      title: 'Magnetic presence',
      text: 'Some people are simply hard to ignore. You have that. A presence that feels charming, graceful, and very easy to admire.',
      ru: 'Некоторых людей просто невозможно не заметить. У тебя именно это качество — очаровательное, изящное и очень притягательное присутствие.'
    },
    gentle: {
      title: 'Gentle, sweet, and soft',
      text: 'There is something very sweet about the way you seem to be. A gentle kind of beauty that feels calm, lovely, and comforting.',
      ru: 'В тебе есть что-то очень нежное и милое. Такая мягкая красота, которая кажется спокойной, приятной и тёплой.'
    },
    special: {
      title: 'Truly special',
      text: 'You do not feel ordinary at all. You feel like a rare mix of beauty, style, charm, and personality — the kind of person who naturally stands out.',
      ru: 'Ты совсем не кажешься обычной. Ты — редкое сочетание красоты, стиля, обаяния и характера — именно такой человек естественно выделяется.'
    }
  };

  const starNotes = {
    friendship: {
      title: 'Friendship star',
      text: 'Our little language exchange already feels brighter because of you.',
      ru: 'Наш маленький языковой обмен уже кажется ярче благодаря тебе.'
    },
    style: {
      title: 'Style star',
      text: 'You are the kind of girl who makes style look graceful and natural at the same time.',
      ru: 'Ты из тех девушек, у которых стиль выглядит одновременно изящно и естественно.'
    },
    eyes: {
      title: 'Eyes star',
      text: 'Your eyes are one of your superpowers: beautiful, expressive, and impossible not to notice.',
      ru: 'Твои глаза — одно из твоих суперкачеств: красивые, выразительные и такие, что их невозможно не заметить.'
    },
    language: {
      title: 'Language star',
      text: 'English and Russian feel more fun when there is a beautiful person on the other side of the chat.',
      ru: 'Английский и русский кажутся веселее, когда по ту сторону чата такая красивая девушка.'
    },
    future: {
      title: 'Future star',
      text: 'One word, one laugh, one lesson at a time — and a beautiful bridge appears.',
      ru: 'Одно слово, один смех, один урок за раз — и появляется красивый мост.'
    }
  };

  const compliments = [
    {
      title: 'Her beauty feels luminous',
      text: 'You have the kind of beauty that feels soft, bright, and naturally elegant. The more someone looks, the more lovely details they notice.'
    },
    {
      title: 'Her eyes deserve poetry',
      text: 'Your eyes are beautiful in a way that feels alive — expressive, warm, and impossible to forget. They truly deserve a whole poem.'
    },
    {
      title: 'She is stylish in the best way',
      text: 'You do not just look fashionable. You look refined, feminine, and effortlessly cool.'
    },
    {
      title: 'She makes language learning sweeter',
      text: 'A difficult word feels less difficult when it appears in a conversation with someone as charming and interesting as you.'
    },
    {
      title: 'She is genuinely special',
      text: 'Some people are attractive, but some people feel truly special. You feel memorable — beautiful outside and lovely in personality too.'
    },
    {
      title: 'She is very easy to admire',
      text: 'Your mix of style, beauty, warmth, and intelligence makes admiration feel automatic.'
    }
  ];

  const quiz = [
    {
      q: 'How do you say “nice to meet you” in Russian?',
      options: ['Приятно познакомиться', 'Доброе утро', 'До свидания'],
      answer: 0
    },
    {
      q: 'What does “глаза” mean?',
      options: ['stars', 'eyes', 'words'],
      answer: 1
    },
    {
      q: 'Choose the Russian phrase for “Let’s learn together.”',
      options: ['Давай учиться вместе', 'Я люблю чай', 'Где моё солнце?'],
      answer: 0
    },
    {
      q: 'What does “Ты великолепна” mean?',
      options: ['You are magnificent', 'You are reading', 'You are cold'],
      answer: 0
    },
    {
      q: 'Choose a soft way to say “thank you”.',
      options: ['Спасибо', 'Пока', 'Нет'],
      answer: 0
    }
  ];

  let audioCtx;
  let quizIndex = 0;
  let quizScore = 0;
  let melodyTimer = null;
  let gameTimer = null;
  let starSpawner = null;
  let starsCaught = 0;
  let timeLeft = 25;
  let complimentIndex = 0;

  const toast = $('#toast');

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function ensureAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      audioCtx = new AudioContext();
    }
    return audioCtx;
  }

  function playTone(freq, duration = 0.22) {
    const ctx = ensureAudio();
    if (!ctx) {
      showToast('Melody is not available in this browser.');
      return;
    }
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  }

  function playMelody() {
    const notes = [329.63, 392, 493.88, 587.33, 493.88, 392, 659.25, 587.33];
    let i = 0;
    window.clearInterval(melodyTimer);
    melodyTimer = window.setInterval(() => {
      playTone(notes[i % notes.length], 0.28);
      i += 1;
      if (i > 15) window.clearInterval(melodyTimer);
    }, 260);
  }

  function toggleNav() {
    const nav = $('#mainNav');
    const btn = $('.nav-toggle');
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }

  function setupNav() {
    $('.nav-toggle')?.addEventListener('click', toggleNav);
    $$('#mainNav a').forEach((link) => {
      link.addEventListener('click', () => {
        $('#mainNav').classList.remove('open');
        $('.nav-toggle').setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setupReveal() {
    $('#openGift')?.addEventListener('click', () => {
      $('#revealPanel').classList.add('show');
      sparkleRain(20);
      playTone(493.88);
      window.setTimeout(() => playTone(659.25), 160);
    });
    $('#closeReveal')?.addEventListener('click', () => $('#revealPanel').classList.remove('show'));
    $('#revealPanel')?.addEventListener('click', (event) => {
      if (event.target.id === 'revealPanel') $('#revealPanel').classList.remove('show');
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') $('#revealPanel')?.classList.remove('show');
    });
  }

  function setupPhrases() {
    const card = $('#phraseCard');
    $$('.mood-buttons button').forEach((button) => {
      button.addEventListener('click', () => {
        $$('.mood-buttons button').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        const item = phrases[button.dataset.mood];
        card.innerHTML = `
          <span class="badge">${item.badge}</span>
          <h3>${item.title}</h3>
          <p>${item.ru}</p>
          <p class="muted-line">${item.en}</p>
        `;
        playTone(392 + Math.random() * 120, 0.18);
      });
    });
  }

  function setupPersonalities() {
    const box = $('#featuredCompliment');
    $$('.personality-card').forEach((button) => {
      button.addEventListener('click', () => {
        $$('.personality-card').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        const item = personalities[button.dataset.personality];
        box.innerHTML = `
          <span class="badge">featured compliment</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <p class="ru-line">${item.ru}</p>
        `;
        sparkleAt(button);
        playTone(540 + Math.random() * 90, 0.2);
      });
    });
  }

  function speakRussian(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Voice is not available in this browser.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.86;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  function setupSpeech() {
    $$('.speak').forEach((button) => {
      button.addEventListener('click', () => speakRussian(button.dataset.say));
    });
  }

  function setupPiano() {
    $$('.piano button').forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.add('playing');
        playTone(Number(button.dataset.note), 0.28);
        window.setTimeout(() => button.classList.remove('playing'), 230);
      });
    });
    $('#playMusic')?.addEventListener('click', () => {
      playMelody();
      sparkleRain(12);
    });
  }

  function renderQuiz() {
    const question = quiz[quizIndex];
    $('#quizQuestion').textContent = question.q;
    const options = $('#quizOptions');
    options.innerHTML = '';
    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = option;
      btn.addEventListener('click', () => chooseQuiz(index, btn));
      options.appendChild(btn);
    });
  }

  function chooseQuiz(index, button) {
    const question = quiz[quizIndex];
    const buttons = $$('#quizOptions button');
    buttons.forEach((btn) => { btn.disabled = true; });
    if (index === question.answer) {
      quizScore += 1;
      button.classList.add('correct');
      showToast('Correct ✨ Правильно!');
      playTone(659.25, 0.24);
    } else {
      button.classList.add('wrong');
      buttons[question.answer]?.classList.add('correct');
      showToast('Almost! Почти!');
      playTone(246.94, 0.18);
    }
    $('#quizScore').textContent = `Score: ${quizScore}`;
    window.setTimeout(() => {
      quizIndex += 1;
      if (quizIndex >= quiz.length) {
        $('#quizQuestion').textContent = `Finished! Final score: ${quizScore}/${quiz.length}. Ты молодец!`;
        $('#quizOptions').innerHTML = '';
        $('#startQuiz').textContent = 'Restart quiz';
        sparkleRain(quizScore >= 4 ? 24 : 10);
      } else {
        renderQuiz();
      }
    }, 900);
  }

  function setupQuiz() {
    $('#startQuiz')?.addEventListener('click', () => {
      quizIndex = 0;
      quizScore = 0;
      $('#quizScore').textContent = 'Score: 0';
      $('#startQuiz').textContent = 'Restart quiz';
      renderQuiz();
    });
  }

  function setupMachine() {
    const output = $('#machineOutput');
    $('#machineBtn')?.addEventListener('click', () => {
      const item = compliments[complimentIndex % compliments.length];
      complimentIndex += 1;
      output.innerHTML = `
        <span class="badge">compliment delivered</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      sparkleRain(14);
      playTone(610 + Math.random() * 60, 0.2);
    });
  }

  function setupStars() {
    $$('.star-point').forEach((button) => {
      button.addEventListener('click', () => {
        const note = starNotes[button.dataset.star];
        $('#starMessage').innerHTML = `
          <span class="badge">${note.title}</span>
          <h3>${note.text}</h3>
          <p>${note.ru}</p>
        `;
        sparkleAt(button);
        playTone(523.25 + Math.random() * 150, 0.2);
      });
    });
  }

  function sparkleAt(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 8; i += 1) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.textContent = ['✨', '✦', '♡'][i % 3];
      s.style.left = `${rect.left + rect.width / 2 + (Math.random() * 60 - 30)}px`;
      s.style.top = `${rect.top + rect.height / 2}px`;
      s.style.animationDuration = `${1.2 + Math.random()}s`;
      document.body.appendChild(s);
      window.setTimeout(() => s.remove(), 2400);
    }
  }

  function sparkleRain(count = 28) {
    for (let i = 0; i < count; i += 1) {
      window.setTimeout(() => {
        const s = document.createElement('span');
        s.className = 'sparkle';
        s.textContent = ['✨', '✦', '♡', '❄'][Math.floor(Math.random() * 4)];
        s.style.left = `${Math.random() * 100}vw`;
        s.style.fontSize = `${18 + Math.random() * 16}px`;
        s.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;
        document.body.appendChild(s);
        window.setTimeout(() => s.remove(), 3600);
      }, i * 45);
    }
  }

  function setupConfetti() {
    $('#confettiBtn')?.addEventListener('click', () => {
      sparkleRain(46);
      playMelody();
      showToast('Sparkles sent ✨ Искры отправлены!');
    });
  }

  function startGame() {
    const playfield = $('#playfield');
    starsCaught = 0;
    timeLeft = 25;
    $('#starsCaught').textContent = '0';
    $('#timeLeft').textContent = String(timeLeft);
    $('#gameHint').textContent = 'Catch them! Лови звёзды!';
    $$('.falling-star').forEach((star) => star.remove());
    window.clearInterval(gameTimer);
    window.clearInterval(starSpawner);

    gameTimer = window.setInterval(() => {
      timeLeft -= 1;
      $('#timeLeft').textContent = String(timeLeft);
      if (timeLeft <= 0) finishGame(false);
    }, 1000);

    starSpawner = window.setInterval(() => spawnStar(playfield), 520);
    spawnStar(playfield);
  }

  function spawnStar(playfield) {
    if (starsCaught >= 12 || timeLeft <= 0) return;
    const star = document.createElement('button');
    star.type = 'button';
    star.className = 'falling-star';
    star.textContent = '✨';
    const fieldWidth = playfield.clientWidth;
    star.style.left = `${Math.max(8, Math.random() * (fieldWidth - 58))}px`;
    star.style.top = `${-40 - Math.random() * 70}px`;
    star.style.animationDuration = `${2.7 + Math.random() * 1.7}s`;
    star.addEventListener('click', () => {
      starsCaught += 1;
      $('#starsCaught').textContent = String(starsCaught);
      playTone(587.33 + starsCaught * 8, 0.12);
      star.remove();
      if (starsCaught >= 12) finishGame(true);
    });
    star.addEventListener('animationend', () => star.remove());
    playfield.appendChild(star);
  }

  function finishGame(won) {
    window.clearInterval(gameTimer);
    window.clearInterval(starSpawner);
    $$('.falling-star').forEach((star) => star.remove());
    const hint = $('#gameHint');
    if (won) {
      hint.textContent = 'You caught the aurora! Ты поймала северное сияние!';
      sparkleRain(32);
      showToast('Perfect catch!');
    } else {
      hint.textContent = `You caught ${starsCaught} stars. Try again for 12 ✨`;
      showToast('Try again — ещё раз!');
    }
  }

  function setupGame() {
    $('#startGame')?.addEventListener('click', startGame);
  }

  function updateLiveNote() {
    const friend = $('#friendName').value.trim() || 'my beautiful Russian friend';
    const sender = $('#senderName').value.trim() || 'your language friend';
    const memory = $('#memoryText').value.trim() || 'our first funny language mistake';
    $('#liveNote').innerHTML = `
      <span class="badge">final note</span>
      <h3>For ${escapeHTML(friend)},</h3>
      <p>I hope this little gift makes you smile very, very widely. You are beautiful, stylish, bright, and genuinely special. Your eyes are lovely, your presence is memorable, and spending time learning English and Russian with you feels like something warm and lucky.</p>
      <p class="ru-line">Я очень рад, что мы познакомились. Ты красивая, стильная, яркая и по-настоящему особенная. Твои глаза прекрасны, а твоя энергия очень приятная и запоминающаяся.</p>
      <p>Memory unlocked: <strong>${escapeHTML(memory)}</strong>.</p>
      <p class="signature">— ${escapeHTML(sender)}</p>
    `;
  }

  function escapeHTML(value) {
    return value.replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[char]));
  }

  function setupLiveNote() {
    ['friendName', 'senderName', 'memoryText'].forEach((id) => {
      $(`#${id}`)?.addEventListener('input', updateLiveNote);
    });
    updateLiveNote();
  }

  function initFromURL() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const from = params.get('from');
    const memory = params.get('memory');
    if (name) $('#friendName').value = name;
    if (from) $('#senderName').value = from;
    if (memory) $('#memoryText').value = memory;
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupNav();
    setupReveal();
    setupPhrases();
    setupPersonalities();
    setupSpeech();
    setupPiano();
    setupQuiz();
    setupMachine();
    setupStars();
    setupGame();
    setupConfetti();
    initFromURL();
    setupLiveNote();
  });
})();
