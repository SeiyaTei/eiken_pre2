// ==========================================
// 英検準2級 マジカルクエスト 〜星詠みの魔法学園〜
// ゲーム進行・ロジックファイル (app.js) - 完全修正版
// ==========================================

// ==================== 音声読み上げエンジン ====================
let voiceSpeed = 0.85;
let isDialogueSpeaking = false;
let dialogueNextTimer = null;

function toggleVoiceSpeed() {
  voiceSpeed = (voiceSpeed === 0.85) ? 1.05 : 0.85;
  const el = document.getElementById('btnSpeedToggle');
  if (el) el.innerText = (voiceSpeed === 0.85) ? '🗣️ ゆっくり' : '🗣️ ふつう';
  speakText(voiceSpeed === 0.85 ? 'Slow speed' : 'Normal speed');
}

function speakText(text, onCompleteCallback) {
  if (!('speechSynthesis' in window)) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'en-US';
    uttr.rate = voiceSpeed;
    
    let called = false;
    const completeOnce = () => {
      if (!called) {
        called = true;
        if (onCompleteCallback) onCompleteCallback();
      }
    };

    uttr.onend = completeOnce;
    uttr.onerror = completeOnce;
    setTimeout(completeOnce, 7000);

    window.speechSynthesis.speak(uttr);
  } catch(e) {
    console.error('Speech error', e);
    if (onCompleteCallback) onCompleteCallback();
  }
}

function playDialogueSpeech(dialogueArray, onCompleteCallback) {
  if (!('speechSynthesis' in window) || !dialogueArray || dialogueArray.length === 0) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }
  try {
    window.speechSynthesis.cancel();
    clearTimeout(dialogueNextTimer);
    isDialogueSpeaking = true;
    let index = 0;

    function speakNextSegment() {
      if (!isDialogueSpeaking) return;
      if (index >= dialogueArray.length) {
        isDialogueSpeaking = false;
        if (onCompleteCallback) onCompleteCallback();
        return;
      }
      const segment = dialogueArray[index];
      const uttr = new SpeechSynthesisUtterance(segment.text);
      uttr.lang = 'en-US';
      uttr.rate = voiceSpeed;

      if (segment.speaker === 'female') {
        uttr.pitch = 1.35;
      } else if (segment.speaker === 'male') {
        uttr.pitch = 0.85;
      } else {
        uttr.pitch = 1.05;
      }

      uttr.onend = () => {
        if (!isDialogueSpeaking) return;
        index++;
        dialogueNextTimer = setTimeout(speakNextSegment, 350);
      };
      uttr.onerror = () => {
        if (!isDialogueSpeaking) return;
        index++;
        speakNextSegment();
      };

      window.speechSynthesis.speak(uttr);
    }

    speakNextSegment();
  } catch(e) {
    console.error('Dialogue speech error', e);
    isDialogueSpeaking = false;
    if (onCompleteCallback) onCompleteCallback();
  }
}

// ==================== BGM & SE エンジン ====================
const AudioContext = window.AudioContext || window.webkitAudioContext;
let actx = null;
let isBgmEnabled = false;
let bgmTimer = null;
let currentSequence = [];
let currentStep = 0;

const noteFreq = { 'G3':196, 'A3':220, 'B3':246.9, 'C4':261.6, 'D4':293.7, 'E4':329.6, 'F4':349.2, 'G4':392.0, 'A4':440.0, 'B4':493.9, 'C5':523.3, 'D5':587.3, 'E5':659.3, 'G5':784.0, 'C6':1046.5 };

const BGM_DATA = {
  home: { seq: ['C4',null,'E4',null,'G4',null,'C5',null,'G4',null,'E4',null], speed: 280, type: 'triangle', vol: 0.03 },
  battle: { seq: ['A3','A3','C4','E4','D4','D4','F4','G4'], speed: 170, type: 'square', vol: 0.02 },
  boss: { seq: ['A3','C4','D4','F4','E4','D4','C4','B3'], speed: 140, type: 'sawtooth', vol: 0.025 },
  fever: { seq: ['C5','E5','G5','C6','E5','G5','C6','G5'], speed: 110, type: 'sawtooth', vol: 0.03 },
  result: { seq: ['C5','D5','E5','G5','C6','G5','E5','D5'], speed: 150, type: 'sine', vol: 0.04 },
  ending: { seq: ['C4','E4','G4','C5','E5','G5','C6','G5','E5','C5','G4','E4'], speed: 220, type: 'sine', vol: 0.04 },
  trueEnding: { seq: ['C4','G4','C5','E5','G5','C6','E6','C6','G5','E5','G4','C4'], speed: 160, type: 'triangle', vol: 0.045 }
};

function initAudio() {
  try {
    if(!actx && AudioContext) actx = new AudioContext();
    if(actx && actx.state === 'suspended') actx.resume();
  } catch(e) {}
}

function toggleBGM() {
  initAudio();
  isBgmEnabled = !isBgmEnabled;
  const btn = document.getElementById('btnBgmToggle');
  if (btn) {
    btn.innerHTML = isBgmEnabled ? '🎵 ON' : '🎵 OFF';
    btn.className = isBgmEnabled 
      ? "bg-pink-500 border border-pink-400 px-1.5 py-0.5 rounded-full text-[9.5px] font-black text-purple-950 transition shadow"
      : "bg-[#2a1e54] border border-purple-500/40 px-1.5 py-0.5 rounded-full text-[9.5px] font-bold text-slate-300 transition";
  }
  if(isBgmEnabled) playBGM(isBossMode ? 'boss' : 'home');
  else stopBGM();
}

function playBGM(scene) {
  if(!isBgmEnabled || !actx) return;
  stopBGM();
  const track = BGM_DATA[scene];
  if (!track) return;
  currentSequence = track.seq;
  currentStep = 0;
  
  function schedule() {
    if(isBgmEnabled && currentSequence.length > 0 && actx) {
      try {
        const note = currentSequence[currentStep % currentSequence.length];
        if(note && noteFreq[note]) {
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = track.type;
          osc.frequency.value = noteFreq[note];
          osc.connect(gain);
          gain.connect(actx.destination);
          gain.gain.setValueAtTime(track.vol, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + (track.speed/1000)*0.8);
          osc.start(actx.currentTime);
          osc.stop(actx.currentTime + (track.speed/1000));
        }
      } catch(e) {}
      currentStep++;
      bgmTimer = setTimeout(schedule, track.speed);
    }
  }
  schedule();
}

function stopBGM() {
  clearTimeout(bgmTimer);
  currentSequence = [];
}

function playSE(type) {
  if(!actx) return;
  try {
    const now = actx.currentTime;
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.connect(gain);
    gain.connect(actx.destination);

    if(type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now); osc.stop(now + 0.35);
    } else if(type === 'critical') {
      osc.type = 'sawtooth';
      [523, 783, 1046, 1318, 1567].forEach((f, i) => {
        osc.frequency.setValueAtTime(f, now + i * 0.05);
      });
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
      osc.start(now); osc.stop(now + 0.45);
    } else if(type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(196, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else if(type === 'levelup' || type === 'bonus' || type === 'chest') {
      osc.type = 'triangle';
      [523, 659, 783, 1046, 1318].forEach((freq, idx) => {
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      });
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now); osc.stop(now + 0.6);
    }
  } catch(e) {}
}

// ==================== ユーザーデータ管理 ====================
const STORAGE_KEY = 'eiken_pre2_data_v1';
let userData = {
  level: 1,
  exp: 0,
  gems: 10,
  streak: 1,
  lastLoginDate: getTodayString(),
  weakList: [],
  weakStats: {},
  vocabBook: [],
  bossUnlockedLevel: 1,
  bossClearedLevels: [],
  bossSeenIntros: [],
  hasSeenEnding: false,
  hasSeenTrueEnding: false,
  questRotation: { vocab: false, grammar: false, listening: false },
  dailyDone: { vocab: false, grammar: false, listening: false, allClaimed: false },
  inventory: { hint: 1, potion: 0 },
  equipped: { hat: '', weapon: '', aura: '' },
  unlockedEquips: [],
  totalAnswered: 0,
  totalCorrect: 0
};

let currentShopTab = 'hat';
let isDailyCurrentSession = false;
let isBossMode = false;
let isFeverMode = false;
let currentBossStage = null;
let selectedNormalType = 'vocab';
let selectedNormalDiffLevel = 1;

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function sanitizeUserData() {
  if (typeof userData.level !== 'number' || userData.level < 1 || isNaN(userData.level)) userData.level = 1;
  if (typeof userData.exp !== 'number' || isNaN(userData.exp)) userData.exp = 0;
  if (typeof userData.gems !== 'number' || isNaN(userData.gems)) userData.gems = 10;
  if (typeof userData.streak !== 'number' || isNaN(userData.streak)) userData.streak = 1;
  if (!Array.isArray(userData.weakList)) userData.weakList = [];
  if (!userData.weakStats || typeof userData.weakStats !== 'object') userData.weakStats = {};
  if (!Array.isArray(userData.vocabBook)) userData.vocabBook = [];
  if (!Array.isArray(userData.unlockedEquips)) userData.unlockedEquips = [];
  
  if (typeof userData.bossUnlockedLevel !== 'number' || userData.bossUnlockedLevel < 1 || isNaN(userData.bossUnlockedLevel)) userData.bossUnlockedLevel = 1;
  if (!Array.isArray(userData.bossClearedLevels)) userData.bossClearedLevels = [];
  if (!Array.isArray(userData.bossSeenIntros)) userData.bossSeenIntros = [];
  if (typeof userData.hasSeenEnding !== 'boolean') userData.hasSeenEnding = false;
  if (typeof userData.hasSeenTrueEnding !== 'boolean') userData.hasSeenTrueEnding = false;

  if (!userData.questRotation || typeof userData.questRotation !== 'object') {
    userData.questRotation = { vocab: false, grammar: false, listening: false };
  }

  if (!userData.inventory || typeof userData.inventory !== 'object') userData.inventory = { hint: 1, potion: 0 };
  userData.inventory.hint = Number(userData.inventory.hint) || 0;
  userData.inventory.potion = Number(userData.inventory.potion) || 0;

  if (!userData.equipped || typeof userData.equipped !== 'object') userData.equipped = { hat: '', weapon: '', aura: '' };
  if (typeof userData.equipped.hat !== 'string') userData.equipped.hat = '';
  if (typeof userData.equipped.weapon !== 'string') userData.equipped.weapon = '';
  if (typeof userData.equipped.aura !== 'string') userData.equipped.aura = '';

  if (userData.level < 60) {
    const checkEq = (id) => {
      const found = (typeof SHOP_EQUIP_DATA !== 'undefined') ? SHOP_EQUIP_DATA.find(e => e.id === id) : null;
      return found && found.reqLv && userData.level < found.reqLv;
    };
    if (checkEq(userData.equipped.hat)) userData.equipped.hat = '';
    if (checkEq(userData.equipped.weapon)) userData.equipped.weapon = '';
    if (checkEq(userData.equipped.aura)) userData.equipped.aura = '';
  }

  if (!userData.dailyDone || typeof userData.dailyDone !== 'object') userData.dailyDone = { vocab: false, grammar: false, listening: false, allClaimed: false };
  if (typeof userData.dailyDone.allClaimed !== 'boolean') userData.dailyDone.allClaimed = false;

  if (typeof userData.totalAnswered !== 'number' || isNaN(userData.totalAnswered)) userData.totalAnswered = 0;
  if (typeof userData.totalCorrect !== 'number' || isNaN(userData.totalCorrect)) userData.totalCorrect = 0;
  if (!userData.lastLoginDate) userData.lastLoginDate = getTodayString();
}

function loadData() {
  try {
    let saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      userData = { ...userData, ...parsed };
      if (parsed.questRotation) userData.questRotation = { ...userData.questRotation, ...parsed.questRotation };
      if (parsed.dailyDone) userData.dailyDone = { ...userData.dailyDone, ...parsed.dailyDone };
      if (parsed.inventory) userData.inventory = { ...userData.inventory, ...parsed.inventory };
      if (parsed.equipped) userData.equipped = { ...userData.equipped, ...parsed.equipped };
      if (parsed.weakStats) userData.weakStats = { ...userData.weakStats, ...parsed.weakStats };
    }
  } catch(e) {
    console.error('Data load error:', e);
  }
  sanitizeUserData();
  checkDailyStreak();
  if (typeof BOSS_STAGES !== 'undefined') {
    currentBossStage = BOSS_STAGES[0];
  }
  updateUiState();
}

function saveData() {
  sanitizeUserData();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch(e) {
    console.error('Data save error:', e);
  }
  updateUiState();
}

function checkDailyStreak() {
  try {
    const today = getTodayString();
    if (userData.lastLoginDate !== today) {
      const lastStr = (userData.lastLoginDate || today).replace(/-/g, '/');
      const last = new Date(lastStr);
      const current = new Date(today.replace(/-/g, '/'));
      const diffDays = Math.round((current - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        userData.streak += 1;
      } else if (diffDays > 1) {
        userData.streak = 1;
      }
      userData.lastLoginDate = today;
      userData.dailyDone = { vocab: false, grammar: false, listening: false, allClaimed: false };
    }
  } catch(e) {
    userData.lastLoginDate = getTodayString();
  }
}

function calculatePlayerStats() {
  const baseAtk = 25 + (userData.level * 6);
  const baseHp = 120 + (userData.level * 15);
  const baseSpd = 5 + Math.floor(userData.level * 0.8);

  const eqHat = (typeof SHOP_EQUIP_DATA !== 'undefined') ? SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.hat) : null;
  const eqWp = (typeof SHOP_EQUIP_DATA !== 'undefined') ? SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.weapon) : null;
  const eqAura = (typeof SHOP_EQUIP_DATA !== 'undefined') ? SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.aura) : null;

  const totalHp = Math.round(baseHp + (eqHat ? eqHat.val : 0));
  const totalAtk = Math.round(baseAtk + (eqWp ? eqWp.val : 0));
  const totalSpd = Math.round(baseSpd + (eqAura ? eqAura.val : 0));

  return { hp: totalHp, atk: totalAtk, spd: totalSpd };
}

function addExp(amount) {
  userData.exp += amount;
  let needed = userData.level * 100;
  let leveledUp = false;
  while (userData.exp >= needed) {
    userData.exp -= needed;
    userData.level += 1;
    needed = userData.level * 100;
    leveledUp = true;
  }
  if (leveledUp) {
    playSE('levelup');
    const currentAvatar = (typeof AVATARS !== 'undefined') ? ([...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0]) : { name: "ルナ", rank: "星詠み生" };
    alert(`🎉 レベルアップ！ Lv.${userData.level} に到達しました！\n相棒の姿：【${currentAvatar.rank}】${currentAvatar.name}`);
  }
  saveData();
}

function updateUiState() {
  sanitizeUserData();

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setText('headerLevel', `Lv.${userData.level}`);
  setText('levelLabel', `Lv.${userData.level}`);
  setText('streakCount', userData.streak);
  setText('gemCount', userData.gems);
  setText('weakBookCountBadge', `${userData.weakList.length}問`);
  setText('hintStockCount', userData.inventory.hint || 0);
  setText('shopHintCount', userData.inventory.hint || 0);
  setText('shopPotionCount', userData.inventory.potion || 0);
  setText('bossCurrentProgressBadge', `Lv.${userData.bossUnlockedLevel} 解放中`);

  const stats = calculatePlayerStats();
  setText('statAtkVal', stats.atk);
  setText('statHpVal', stats.hp);
  setText('statSpdVal', stats.spd);

  const needed = userData.level * 100;
  const pct = Math.min(100, Math.round((userData.exp / needed) * 100));
  const expBar = document.getElementById('expBar');
  if (expBar) expBar.style.width = `${pct}%`;
  setText('expText', `${userData.exp} / ${needed}`);

  if (typeof AVATARS !== 'undefined') {
    const currentAvatar = [...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0];
    setText('heroAvatar', currentAvatar.emoji);
    if (userData.hasSeenTrueEnding) {
      setText('heroRank', '🌌 全次元の星詠み神');
      setText('heroName', `${currentAvatar.name} (完全体)`);
    } else {
      setText('heroRank', currentAvatar.rank);
      setText('heroName', currentAvatar.name);
    }
  }

  if (typeof SHOP_EQUIP_DATA !== 'undefined') {
    const hatEquip = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.hat);
    setText('equipHatIcon', hatEquip ? hatEquip.icon : '');
    const weaponEquip = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.weapon);
    setText('equipWeaponIcon', weaponEquip ? weaponEquip.icon : '');
    const auraEquip = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.aura);
    setText('equipAuraIcon', auraEquip ? auraEquip.icon : '');
  }

  // 🎯 2026年10月4日 試験日カウントダウン
  try {
    const examDate = new Date(2026, 9, 4); // 月は0始まり(9 = 10月)
    const today = new Date();
    today.setHours(0,0,0,0);
    examDate.setHours(0,0,0,0);
    const diffTime = examDate.getTime() - today.getTime();
    const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    setText('countdownDays', `${daysLeft} 日`);
  } catch(e) {
    setText('countdownDays', '49 日');
  }

  let doneCount = 0;
  if (userData.dailyDone.vocab) doneCount++;
  if (userData.dailyDone.grammar) doneCount++;
  if (userData.dailyDone.listening) doneCount++;
  setText('dailyProgressText', `${doneCount} / 3`);

  const actVocab = document.getElementById('questActionVocab');
  if (actVocab) {
    actVocab.innerHTML = userData.dailyDone.vocab
      ? `<span class="bg-[#110a24] text-pink-300 font-bold px-2 py-1 rounded-xl text-[10px] border border-pink-500/40 whitespace-nowrap">✓ 済</span>`
      : `<button onclick="startDailyQuest('vocab', 5)" class="bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white font-black px-3 py-1 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  const actGrammar = document.getElementById('questActionGrammar');
  if (actGrammar) {
    actGrammar.innerHTML = userData.dailyDone.grammar
      ? `<span class="bg-[#110a24] text-pink-300 font-bold px-2 py-1 rounded-xl text-[10px] border border-pink-500/40 whitespace-nowrap">✓ 済</span>`
      : `<button onclick="startDailyQuest('grammar', 3)" class="bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white font-black px-3 py-1 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  const actListening = document.getElementById('questActionListening');
  if (actListening) {
    actListening.innerHTML = userData.dailyDone.listening
      ? `<span class="bg-[#110a24] text-pink-300 font-bold px-2 py-1 rounded-xl text-[10px] border border-pink-500/40 whitespace-nowrap">✓ 済</span>`
      : `<button onclick="startDailyQuest('listening', 3)" class="bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white font-black px-3 py-1 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  const bonusArea = document.getElementById('dailyBonusArea');
  const bonusClaimedArea = document.getElementById('dailyBonusClaimedArea');
  if (bonusArea && bonusClaimedArea) {
    if (doneCount === 3 && !userData.dailyDone.allClaimed) {
      bonusArea.classList.remove('hidden');
      bonusClaimedArea.classList.add('hidden');
    } else if (doneCount === 3 && userData.dailyDone.allClaimed) {
      bonusArea.classList.add('hidden');
      bonusClaimedArea.classList.remove('hidden');
    } else {
      bonusArea.classList.add('hidden');
      bonusClaimedArea.classList.add('hidden');
    }
  }

  let rotCount = 0;
  if (userData.questRotation.vocab) rotCount++;
  if (userData.questRotation.grammar) rotCount++;
  if (userData.questRotation.listening) rotCount++;
  setText('rotationProgressBadge', `${rotCount}/3完了`);

  const updateRotBtn = (btnId, badgeId, isDone) => {
    const btn = document.getElementById(btnId);
    const badge = document.getElementById(badgeId);
    if (!btn || !badge) return;
    if (isDone) {
      badge.innerText = "✓ 済";
      badge.className = "text-[8px] font-bold bg-[#110a24] text-pink-300 px-1 py-0.2 rounded border border-pink-500";
      btn.classList.add('opacity-60');
    } else {
      badge.innerText = "未挑戦";
      badge.className = "text-[8px] font-bold bg-[#110a24] text-purple-300 px-1 py-0.2 rounded border border-purple-600";
      btn.classList.remove('opacity-60');
    }
  };

  updateRotBtn('btnRotVocab', 'badgeRotVocab', userData.questRotation.vocab);
  updateRotBtn('btnRotGrammar', 'badgeRotGrammar', userData.questRotation.grammar);
  updateRotBtn('btnRotListening', 'badgeRotListening', userData.questRotation.listening);

  const btnWeak = document.getElementById('btnRotWeakBattle');
  const badgeWeak = document.getElementById('badgeRotWeak');
  if (btnWeak && badgeWeak) {
    if (rotCount === 3) {
      btnWeak.classList.remove('opacity-60');
      btnWeak.classList.add('glow-red');
      badgeWeak.innerText = "🌸 挑戦可能";
      badgeWeak.className = "text-[8px] font-bold bg-pink-600 text-white px-1.5 py-0.2 rounded animate-pulse";
    } else {
      btnWeak.classList.add('opacity-60');
      btnWeak.classList.remove('glow-red');
      badgeWeak.innerText = `🔒 あと${3 - rotCount}`;
      badgeWeak.className = "text-[8px] font-bold bg-[#110a24] text-pink-300 px-1.5 py-0.2 rounded border border-purple-700";
    }
  }

  setText('statTotalAnswers', `${userData.totalAnswered}問`);
  const acc = userData.totalAnswered > 0 ? Math.round((userData.totalCorrect / userData.totalAnswered) * 100) : 0;
  setText('statAccuracy', `(${acc}%)`);
  
  let passRate = '判定中';
  if (userData.totalAnswered >= 15) {
    if (acc >= 75) passRate = '💮 合格圏内 (A)';
    else if (acc >= 60) passRate = '✨ 合格可能 (B)';
    else passRate = '🌸 基礎強化中 (C)';
  }
  setText('statPassRate', passRate);

  renderShopEquips();
}

function claimDailyAllBonus() {
  initAudio();
  if (userData.dailyDone.allClaimed) return;
  userData.dailyDone.allClaimed = true;
  const bonusGems = 50;
  const bonusExp = 150;
  userData.gems += bonusGems;
  playSE('bonus');
  alert(`🎉 3大デイリークエスト完全制覇！\n\n【コンプリートボーナス】\n💎 ダイヤ +${bonusGems}個\n✨ 経験値 +${bonusExp} EXP\n\n素晴らしい集中力です！明日もこの調子で続けよう！`);
  addExp(bonusExp);
}

function openNormalQuestSelect(type) {
  initAudio();
  stopBattleTimers();
  if (userData.questRotation[type]) {
    alert('この分野は現在のサイクルで既にクリア済みです！他の分野をクリアして「にがて討伐」を突破すると再挑戦できます！');
    return;
  }
  selectedNormalType = type;
  const modal = document.getElementById('modalNormalSelect');
  const titleEl = document.getElementById('normalSelectTitle');
  if (titleEl) {
    if (type === 'vocab') titleEl.innerText = "📚 単語・熟語 難易度選択 (10問)";
    if (type === 'grammar') titleEl.innerText = "🪄 文法・語法 難易度選択 (5問)";
    if (type === 'listening') titleEl.innerText = "🎧 リスニング 難易度選択 (3問)";
  }
  if (modal) modal.classList.remove('hidden');
}

function closeNormalQuestSelect() {
  const modal = document.getElementById('modalNormalSelect');
  if (modal) modal.classList.add('hidden');
}

function startNormalModeWithDiff(diffLevel) {
  closeNormalQuestSelect();
  isBossMode = false;
  isDailyCurrentSession = false;
  isFeverMode = false;
  selectedNormalDiffLevel = diffLevel;
  const count = (selectedNormalType === 'vocab') ? 10 : (selectedNormalType === 'grammar' ? 5 : 3);
  startSessionInternal(selectedNormalType, count);
}

function getQuizDataById(id) {
  if (id.startsWith('v_')) {
    const word = id.replace('v_', '');
    const found = RAW_VOCAB_DATA.find(x => x[0] === word);
    if (found) return generateVocabQuiz(found);
  } else if (id.startsWith('g_')) {
    const idx = parseInt(id.replace('g_', ''));
    if (RAW_GRAMMAR_DATA[idx]) return generateGrammarQuiz(RAW_GRAMMAR_DATA[idx], idx);
  } else if (id.startsWith('l_')) {
    const idx = parseInt(id.replace('l_', ''));
    if (RAW_LISTENING_DATA[idx]) return generateListeningQuiz(RAW_LISTENING_DATA[idx], idx);
  } else if (id.startsWith('past_')) {
    const found = ACTUAL_PAST_EXAM_DATA.find(x => x.id === id);
    if (found) {
      const correctOption = found.options[found.ans];
      const shuffledOptions = shuffleArray(found.options);
      return {
        id: found.id,
        type: found.type,
        q: found.q,
        sub: found.sub,
        options: shuffledOptions,
        ans: shuffledOptions.indexOf(correctOption),
        explain: found.explain,
        dialogue: found.dialogue || null,
        audio_complete: found.audio_complete || null
      };
    }
  }
  return null;
}

function startSingleWeakQuiz(id) {
  initAudio();
  stopBattleTimers();
  const qData = getQuizDataById(id);
  if (!qData) {
    alert('問題データの読み込みに失敗しました。');
    return;
  }

  isBossMode = false;
  isDailyCurrentSession = false;
  isFeverMode = false;
  currentMode = 'weakRetry';
  currentQueue = [qData];
  startSession();
}

function startWeakBattle() {
  initAudio();
  stopBattleTimers();
  let rotCount = 0;
  if (userData.questRotation.vocab) rotCount++;
  if (userData.questRotation.grammar) rotCount++;
  if (userData.questRotation.listening) rotCount++;

  if (rotCount < 3) {
    alert(`単語・文法・リスニングの3分野をすべて1回ずつクリアすると「にがて討伐バトル」に挑戦できます！（残り ${3 - rotCount} 分野）`);
    return;
  }

  isBossMode = false;
  isDailyCurrentSession = false;
  isFeverMode = false;
  currentMode = 'weakBattle';

  currentQueue = [];
  if (userData.weakList.length > 0) {
    const selectedIds = shuffleArray(userData.weakList).slice(0, 5);
    selectedIds.forEach(id => {
      const q = getQuizDataById(id);
      if (q) currentQueue.push(q);
    });
  }
  
  while (currentQueue.length < 5) {
    const randG = Math.floor(Math.random() * RAW_GRAMMAR_DATA.length);
    currentQueue.push(generateGrammarQuiz(RAW_GRAMMAR_DATA[randG], randG));
  }

  currentQueue = shuffleArray(currentQueue);
  startSession();
}

// ==================== ボス専用ダイアログ表示エンジン ====================
function showBossDialogueModal(title, icon, text, onConfirm) {
  const modal = document.getElementById('modalBossDialogue');
  const titleEl = document.getElementById('bossDialogueTitle');
  const iconEl = document.getElementById('bossDialogueIcon');
  const textEl = document.getElementById('bossDialogueText');
  const btn = document.getElementById('btnBossDialogueNext');

  if (titleEl) titleEl.innerText = title;
  if (iconEl) iconEl.innerText = icon;
  if (textEl) textEl.innerText = text;

  if (modal) modal.classList.remove('hidden');

  if (btn) {
    btn.onclick = () => {
      if (modal) modal.classList.add('hidden');
      if (onConfirm) onConfirm();
    };
  }
}

// ==================== ボス選択 & バトル開始（不具合完全修正版） ====================
function openBossSelectModal() {
  initAudio();
  stopBattleTimers();
  const modal = document.getElementById('modalBossSelect');
  const container = document.getElementById('bossStageList');
  if (!modal || !container) return;
  container.innerHTML = '';

  BOSS_STAGES.forEach(stage => {
    if (stage.isSecret && !userData.bossClearedLevels.includes(10)) {
      return;
    }

    const isUnlocked = (stage.lv <= userData.bossUnlockedLevel);
    const isCleared = userData.bossClearedLevels.includes(stage.lv);

    const card = document.createElement('div');
    card.className = `p-2.5 rounded-2xl border flex items-center justify-between gap-2 transition ${
      stage.isSecret 
        ? 'bg-gradient-to-r from-purple-950 via-black to-pink-950 border-pink-500 shadow-xl glow-red'
        : (isUnlocked 
            ? (isCleared ? 'bg-[#1b1238] border-pink-400/80 shadow' : 'bg-gradient-to-r from-[#291745] to-[#180d30] border-pink-500/80 shadow-md')
            : 'bg-[#100a24] border-purple-900/40 opacity-60')
    }`;

    if (isUnlocked) {
      card.innerHTML = `
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="text-2xl flex-shrink-0">${stage.icon}</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1 flex-wrap">
              <span class="text-[11px] font-black ${stage.isSecret ? 'text-pink-300' : 'text-purple-200'} truncate">Lv.${stage.lv} ${stage.name}</span>
              ${isCleared ? `<span class="text-[8px] bg-pink-500 text-white font-black px-1 py-0.2 rounded flex-shrink-0">討伐済</span>` : `<span class="text-[8px] bg-rose-600 text-white font-black px-1 py-0.2 rounded flex-shrink-0">TARGET</span>`}
            </div>
            <div class="text-[8.5px] text-slate-300 leading-tight truncate mt-0.5">${stage.desc}</div>
            <div class="text-[8.5px] font-bold text-pink-300 mt-0.5 leading-none">
              HP: <span class="text-white">${stage.hp.toLocaleString()}</span> / 攻: <span class="text-white">${stage.atk}</span>
              <span class="text-pink-300 ml-1">+${stage.exp}EXP / 💎+${stage.gems}</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <button onclick="startBossBattleWithStage(${stage.lv})" class="bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white font-black px-2.5 py-1.5 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">
            出撃
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="text-2xl flex-shrink-0 opacity-50">❓</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1">
              <span class="text-[11px] font-black text-slate-400 truncate">Lv.${stage.lv} ？？？？</span>
              <span class="text-[8px] bg-[#110a24] text-purple-300 font-bold px-1 py-0.2 rounded flex-shrink-0">未到達</span>
            </div>
            <div class="text-[8.5px] text-purple-400/80 mt-0.5 leading-tight truncate">Lv.${stage.lv - 1} 撃破で正体判明！</div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-[8.5px] bg-[#110a24] border border-purple-800 text-purple-400 font-bold px-2 py-1 rounded-xl whitespace-nowrap">🔒 封印</span>
        </div>
      `;
    }
    container.appendChild(card);
  });
  modal.classList.remove('hidden');
}

function closeBossSelectModal() {
  const modal = document.getElementById('modalBossSelect');
  if (modal) modal.classList.add('hidden');
}

function startBossBattleWithStage(lv) {
  closeBossSelectModal();
  const stage = BOSS_STAGES.find(s => s.lv === lv) || BOSS_STAGES[0];
  currentBossStage = stage;
  
  initAudio();
  stopBattleTimers();
  isBossMode = true;
  isDailyCurrentSession = false;
  isFeverMode = false;
  currentMode = 'boss';

  const shuffledPastExams = shuffleArray(ACTUAL_PAST_EXAM_DATA).slice(0, 10);
  currentQueue = shuffledPastExams.map(item => {
    const correctOption = item.options[item.ans];
    const shuffledOptions = shuffleArray(item.options);
    return {
      id: item.id,
      type: item.type,
      q: item.q,
      sub: item.sub,
      options: shuffledOptions,
      ans: shuffledOptions.indexOf(correctOption),
      explain: item.explain,
      dialogue: item.dialogue || null,
      audio_question: item.audio_question || null,
      audio_complete: item.audio_complete || null
    };
  });

  // 初回エンカウント時の演出ダイアログ
  if (!userData.bossSeenIntros.includes(stage.lv) && stage.introMsg) {
    userData.bossSeenIntros.push(stage.lv);
    saveData();
    showBossDialogueModal(`【Lv.${stage.lv} ${stage.name}】出現！`, stage.icon, stage.introMsg, () => {
      startSession();
    });
  } else {
    startSession();
  }
}

// ==================== にがて帳 画面処理 ====================
function showWeakBook() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewWeakBook').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('weak');
  renderWeakBookList();
}

function renderWeakBookList() {
  const container = document.getElementById('weakBookItemList');
  const badge = document.getElementById('weakBookCountBadge');
  if (!container) return;
  container.innerHTML = '';
  if (badge) badge.innerText = `${userData.weakList.length}問`;

  if (userData.weakList.length === 0) {
    container.innerHTML = `
      <div class="bg-[#110a24] border border-purple-500/30 p-5 rounded-2xl text-center space-y-1.5">
        <span class="text-3xl">✨🌸</span>
        <div class="font-black text-xs text-pink-300">現在、苦手な問題はありません！</div>
        <div class="text-[10px] text-purple-200">間違えた問題がここに自動蓄積されます。</div>
      </div>
    `;
    return;
  }

  userData.weakList.forEach(id => {
    const qData = getQuizDataById(id);
    if (qData) {
      const stats = (userData.weakStats && userData.weakStats[id]) ? userData.weakStats[id] : { cleared: 0, attempts: 0 };
      const card = document.createElement('div');
      card.className = "bg-[#160e33] border border-rose-500/40 p-2.5 rounded-2xl space-y-1.5 shadow";
      const correctText = qData.options[qData.ans];
      card.innerHTML = `
        <div class="flex justify-between items-start gap-1.5">
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1 flex-wrap mb-0.5">
              <span class="text-[8.5px] font-black bg-rose-950 text-rose-300 px-1.5 py-0.2 rounded border border-rose-800">${qData.sub || '要復習'}</span>
              <span class="text-[8.5px] font-bold bg-[#110a24] px-1.5 py-0.2 rounded-full border border-purple-500/30 text-pink-300">
                🎯 ${stats.cleared} / ${stats.attempts} 回クリア
              </span>
            </div>
            <div class="font-black text-[11px] text-white leading-snug whitespace-pre-line break-words">${qData.q}</div>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0">
            <button onclick="startSingleWeakQuiz('${id}')" class="bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white font-black px-2 py-1 rounded-lg text-[9.5px] transition active:scale-95 whitespace-nowrap">
              再挑戦
            </button>
            <button onclick="removeWeakItem('${id}')" class="bg-[#110a24] hover:bg-rose-900 text-rose-300 border border-rose-700/60 font-bold px-2 py-1 rounded-lg text-[9.5px] transition active:scale-95 whitespace-nowrap">
              覚えた
            </button>
          </div>
        </div>
        <div class="bg-[#110a24] p-1.5 rounded-xl border border-purple-500/30 text-[10px] space-y-0.5">
          <div class="font-bold text-pink-300 truncate">【正解】 ${correctText}</div>
          <div class="text-[9px] text-slate-300 leading-relaxed whitespace-pre-line break-words">${qData.explain || ''}</div>
        </div>
      `;
      container.appendChild(card);
    }
  });
}

function removeWeakItem(id) {
  userData.weakList = userData.weakList.filter(item => item !== id);
  if (userData.weakStats && userData.weakStats[id]) {
    delete userData.weakStats[id];
  }
  saveData();
  renderWeakBookList();
}

// ==================== 単語図鑑 画面処理 ====================
function showBook() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewBook').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('book');
  renderVocabBook();
}

function renderVocabBook() {
  const container = document.getElementById('vocabBookList');
  if (!container) return;
  container.innerHTML = '';

  const query = (document.getElementById('bookSearchInput')?.value || '').toLowerCase().trim();
  const totalVocabCount = RAW_VOCAB_DATA.length;
  const collectedCount = userData.vocabBook.length;
  const pct = totalVocabCount > 0 ? Math.round((collectedCount / totalVocabCount) * 100) : 0;

  document.getElementById('bookProgressText').innerText = `${collectedCount} / ${totalVocabCount} 語 (${pct}%)`;
  document.getElementById('bookProgressBar').style.width = `${pct}%`;

  const filtered = RAW_VOCAB_DATA.filter(item => {
    if (!query) return true;
    return item[0].toLowerCase().includes(query) || item[1].includes(query);
  });

  filtered.forEach((item, idx) => {
    const isCollected = userData.vocabBook.includes(item[0]);
    const card = document.createElement('div');
    card.className = `p-2 rounded-xl border flex flex-col justify-between ${isCollected ? 'bg-[#1e1542] border-pink-400/60 shadow' : 'bg-[#110a24] border-purple-900/30 opacity-60'}`;
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-center mb-0.5">
          <span class="text-[8px] font-bold text-purple-300">No.${idx + 1}</span>
          <span class="text-[8.5px]">${isCollected ? '💮 覚えた' : '❓ 未発見'}</span>
        </div>
        <div class="font-black text-white text-[11px] mb-0.5 truncate">${isCollected ? item[0] : '？？？'}</div>
        <div class="text-[9.5px] text-pink-300 truncate leading-tight">${isCollected ? item[1] : '問題に正解で解放'}</div>
      </div>
      ${isCollected ? `
        <button onclick="speakText('${item[0]}')" class="mt-1.5 bg-[#2a1d59] hover:bg-[#382778] py-0.5 rounded text-[8.5px] text-pink-200 font-bold">
          🔊 はつおん
        </button>
      ` : ''}
    `;
    container.appendChild(card);
  });
}

// ==================== バトルセッション管理 ====================
let currentQueue = [];
let currentIndex = 0;
let currentMode = '';
let quizScore = 0;
let answeredQuestionsCount = 0;
let combo = 0;
let maxCombo = 0;
let isAnswered = false;

let playerMaxHp = 100;
let playerCurHp = 100;
let enemyMaxHp = 100;
let enemyCurHp = 100;
let enemyAtk = 20;
let questionStartTime = 0;
let timerGaugeInterval = null;

const MONSTERS = ['🦄', '🧚‍♀️', '🦚', '🐰', '🌟'];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function stopBattleTimers() {
  if (timerGaugeInterval) {
    clearInterval(timerGaugeInterval);
    timerGaugeInterval = null;
  }
  isDialogueSpeaking = false;
  clearTimeout(dialogueNextTimer);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function generateVocabQuiz(item) {
  const correctMeaning = item[1];
  const otherMeanings = RAW_VOCAB_DATA.filter(x => x[1] !== correctMeaning).map(x => x[1]);
  const wrongThree = shuffleArray(otherMeanings).slice(0, 3);
  const options = shuffleArray([correctMeaning, ...wrongThree]);
  return {
    id: 'v_' + item[0],
    rawWord: item[0],
    type: 'vocab',
    q: item[0],
    sub: '📖 正しい日本語の意味を選ぼう',
    options: options,
    ans: options.indexOf(correctMeaning),
    explain: `「${item[0]}」は「${correctMeaning}」という意味です。`,
    audio_question: item[0],
    audio_complete: item[0]
  };
}

function generateGrammarQuiz(item, idx) {
  const correctOption = item.opt[item.ans];
  const shuffledOptions = shuffleArray(item.opt);
  const newAnsIndex = shuffledOptions.indexOf(correctOption);
  const questionAudioText = item.q.replace(/\([^)]*\)/g, ' , ');
  const completeSentence = item.q.replace(/\([^)]*\)/g, correctOption);

  return {
    id: 'g_' + idx,
    type: 'grammar',
    q: item.q,
    sub: item.sub || '🪄 正しい英語を選ぼう',
    options: shuffledOptions,
    ans: newAnsIndex,
    explain: item.exp + `\n\n【正解の英文】\n${completeSentence}`,
    audio_question: questionAudioText,
    audio_complete: completeSentence
  };
}

function generateListeningQuiz(item, idx) {
  const correctOption = item.opt[item.ans];
  const shuffledOptions = shuffleArray(item.opt);
  const newAnsIndex = shuffledOptions.indexOf(correctOption);
  return {
    id: 'l_' + idx,
    type: 'listening',
    q: item.q,
    sub: item.sub || '🎧 音声を聞いて答えよう',
    options: shuffledOptions,
    ans: newAnsIndex,
    explain: item.exp,
    dialogue: item.dialogue,
    audio_complete: item.aud_complete
  };
}

function startDailyQuest(type, count) {
  if (userData.dailyDone[type]) {
    alert('本日のこのデイリー修練は既にクリア済みです！通常特訓コースやボスバトルに挑戦しよう！');
    return;
  }
  isBossMode = false;
  isDailyCurrentSession = true;
  isFeverMode = false;
  startSessionInternal(type, count);
}

function startSessionInternal(type, count) {
  initAudio();
  stopBattleTimers();
  currentMode = type;
  if (type === 'vocab') {
    const selectedItems = shuffleArray(RAW_VOCAB_DATA).slice(0, count);
    currentQueue = selectedItems.map(item => generateVocabQuiz(item));
  } else if (type === 'grammar') {
    const selected = shuffleArray(RAW_GRAMMAR_DATA).slice(0, count);
    currentQueue = selected.map((item, i) => generateGrammarQuiz(item, i));
  } else if (type === 'listening') {
    const selected = shuffleArray(RAW_LISTENING_DATA).slice(0, count);
    currentQueue = selected.map((item, i) => generateListeningQuiz(item, i));
  }
  startSession();
}

function startSession() {
  currentIndex = 0;
  quizScore = 0;
  answeredQuestionsCount = 0;
  combo = 0;
  maxCombo = 0;
  isFeverMode = false;
  
  const pStats = calculatePlayerStats();
  playerMaxHp = pStats.hp;
  playerCurHp = pStats.hp;

  if (isBossMode) {
    enemyMaxHp = currentBossStage.hp;
    enemyCurHp = currentBossStage.hp;
    enemyAtk = currentBossStage.atk;
  } else if (isDailyCurrentSession) {
    if (currentMode === 'vocab') { enemyMaxHp = 600; enemyAtk = 18; }
    else if (currentMode === 'grammar') { enemyMaxHp = 400; enemyAtk = 22; }
    else if (currentMode === 'listening') { enemyMaxHp = 350; enemyAtk = 22; }
    else { enemyMaxHp = 500; enemyAtk = 20; }
    enemyCurHp = enemyMaxHp;
  } else if (currentMode === 'weakBattle') {
    enemyMaxHp = 800;
    enemyCurHp = 800;
    enemyAtk = 25;
  } else if (currentMode === 'weakRetry') {
    enemyMaxHp = 100;
    enemyCurHp = 100;
    enemyAtk = playerMaxHp;
  } else {
    if (selectedNormalDiffLevel === 1) {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 600 : ((selectedNormalType === 'grammar') ? 350 : 250);
      enemyAtk = 15;
    } else if (selectedNormalDiffLevel === 2) {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 4500 : ((selectedNormalType === 'grammar') ? 2300 : 1400);
      enemyAtk = 60;
    } else if (selectedNormalDiffLevel === 3) {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 15000 : ((selectedNormalType === 'grammar') ? 8000 : 5000);
      enemyAtk = 150;
    } else {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 45000 : ((selectedNormalType === 'grammar') ? 24000 : 15000);
      enemyAtk = 350;
    }
    enemyCurHp = enemyMaxHp;
  }

  // 画面の確実な切り替え（ホーム画面を確実に隠す）
  hideAllViews();
  document.getElementById('viewQuiz').classList.remove('hidden');

  if (isBossMode) {
    playBGM('boss');
    document.getElementById('enemyCardBox').className = currentBossStage.isSecret
      ? "bg-gradient-to-b from-purple-950 via-black to-pink-950 border-2 border-pink-400 rounded-3xl p-3 shadow-2xl relative glow-red overflow-hidden"
      : "bg-gradient-to-b from-[#26174a] to-[#140c2b] border border-pink-500 rounded-3xl p-3 shadow-2xl relative glow-red overflow-hidden";
    document.getElementById('battleEnemyName').innerText = `Lv.${currentBossStage.lv} ${currentBossStage.name}`;
  } else if (currentMode === 'weakBattle' || currentMode === 'weakRetry') {
    playBGM('battle');
    document.getElementById('enemyCardBox').className = "bg-gradient-to-b from-rose-950 via-purple-950 to-[#120a28] border border-rose-500 rounded-3xl p-3 shadow-2xl relative overflow-hidden";
    document.getElementById('battleEnemyName').innerText = (currentMode === 'weakRetry') ? "👾 にがてモンスター" : "👾 にがてマスター";
  } else {
    playBGM('battle');
    document.getElementById('enemyCardBox').className = "bg-gradient-to-b from-[#221747] to-[#160f30] border border-purple-500 rounded-3xl p-3 shadow-2xl relative overflow-hidden";
    document.getElementById('battleEnemyName').innerText = "英語モンスター";
  }

  const avatarObj = [...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0];
  document.getElementById('battleHeroName').innerText = avatarObj.name;
  updateBattleHpUi();
  renderQuestion();
}

function updateBattleHpUi() {
  const heroPct = Math.max(0, Math.min(100, Math.round((playerCurHp / playerMaxHp) * 100)));
  const enemyPct = Math.max(0, Math.min(100, Math.round((enemyCurHp / enemyMaxHp) * 100)));
  document.getElementById('battleHeroHpBar').style.width = `${heroPct}%`;
  document.getElementById('battleHeroHpText').innerText = `${playerCurHp}/${playerMaxHp}`;
  document.getElementById('battleEnemyHpBar').style.width = `${enemyPct}%`;
  document.getElementById('battleEnemyHpText').innerText = `${enemyCurHp}/${enemyMaxHp}`;
}

function startCriticalTimer() {
  questionStartTime = Date.now();
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');
  if (gauge) gauge.style.width = '100%';
  if (timerText) timerText.innerText = (currentMode === 'weakRetry') ? '⚡ 正解で一撃撃破！' : '⚡ 3秒即答でクリティカル！';

  if (timerGaugeInterval) clearInterval(timerGaugeInterval);
  timerGaugeInterval = setInterval(() => {
    const elapsed = Date.now() - questionStartTime;
    const remainPct = Math.max(0, 100 - (elapsed / 3000) * 100);
    if (gauge) gauge.style.width = `${remainPct}%`;
    if (remainPct <= 0) {
      clearInterval(timerGaugeInterval);
      timerGaugeInterval = null;
      if (timerText) timerText.innerText = '⏱️ 通常解答時間';
    }
  }, 50);
}

function renderQuestion() {
  isAnswered = false;
  stopBattleTimers();

  const q = currentQueue[currentIndex];
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('quizProgress').innerText = `第 ${currentIndex + 1} / ${currentQueue.length} 問`;
  document.getElementById('comboCounter').innerText = `🔥 ${combo} 連続`;

  const feverBanner = document.getElementById('feverBanner');
  if (isFeverMode) {
    feverBanner.classList.remove('hidden');
    document.getElementById('enemyCardBox').classList.add('fever-active');
  } else {
    feverBanner.classList.add('hidden');
    document.getElementById('enemyCardBox').classList.remove('fever-active');
  }
  
  if (isBossMode) {
    document.getElementById('enemyAvatar').innerText = currentBossStage.icon;
  } else if (currentMode === 'weakBattle' || currentMode === 'weakRetry') {
    document.getElementById('enemyAvatar').innerText = '👾';
  } else {
    document.getElementById('enemyAvatar').innerText = MONSTERS[currentIndex % MONSTERS.length];
  }

  document.getElementById('quizQuestion').innerText = q.q;
  document.getElementById('quizSubText').innerText = q.sub || '';

  const audioBtnContainer = document.getElementById('audioBtnContainer');
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');
  if (gauge) gauge.style.width = '100%';

  if (isBossMode) {
    if (q.type === 'listening') {
      audioBtnContainer.classList.remove('hidden');
      if (timerText) timerText.innerText = '🎧 音声を再生中...';
      if (q.dialogue) playDialogueSpeech(q.dialogue, () => startCriticalTimer());
      else startCriticalTimer();
    } else {
      audioBtnContainer.classList.add('hidden');
      startCriticalTimer();
    }
  } else {
    audioBtnContainer.classList.remove('hidden');
    if (q.type === 'listening' && q.dialogue) {
      if (timerText) timerText.innerText = '🎧 音声を再生中...';
      playDialogueSpeech(q.dialogue, () => startCriticalTimer());
    } else if (q.audio_question) {
      if (timerText) timerText.innerText = '🗣️ 音声を再生中...';
      speakText(q.audio_question, () => startCriticalTimer());
    } else {
      startCriticalTimer();
    }
  }

  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full bg-[#1e143d]/90 hover:bg-[#2c1d54] border-2 border-purple-500/40 hover:border-pink-400 p-2 rounded-2xl text-xs font-bold text-slate-100 text-left transition active:scale-98 flex items-center justify-between gap-1 shadow";
    btn.innerHTML = `<span class="flex-1 min-w-0 break-words leading-tight"><strong class="text-pink-300 mr-1.5">${idx + 1}.</strong>${opt}</span> <span class="text-[11px] opacity-40 flex-shrink-0">✨</span>`;
    btn.onclick = () => handleAnswer(idx);
    optContainer.appendChild(btn);
  });
}

function playCurrentAudio() {
  const q = currentQueue[currentIndex];
  if (!q) return;
  if (isAnswered && q.audio_complete) speakText(q.audio_complete);
  else if (q.type === 'listening' && q.dialogue) playDialogueSpeech(q.dialogue);
  else if (!isBossMode && q.audio_question) speakText(q.audio_question);
}

function showDamagePopup(text, isCritical, isEnemyDamage) {
  const area = document.getElementById('damageEffectArea');
  if (!area) return;
  const el = document.createElement('div');
  el.className = `damage-popup text-sm font-black px-2.5 py-0.5 rounded-2xl shadow-xl ${
    isEnemyDamage 
      ? (isCritical ? 'bg-gradient-to-r from-pink-400 to-amber-300 text-purple-950 border-2 border-white scale-110' : 'bg-pink-600 text-white')
      : 'bg-rose-900 text-white border border-rose-500'
  }`;
  el.innerText = text;
  area.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function use5050Hint() {
  if (isAnswered) return;
  if (userData.inventory.hint <= 0) {
    alert('ヒントの書がありません！ショップで購入できます。');
    return;
  }
  userData.inventory.hint--;
  updateUiState();
  
  const q = currentQueue[currentIndex];
  const buttons = Array.from(document.getElementById('quizOptions').children);
  const wrongIndices = [];
  buttons.forEach((btn, idx) => {
    if (idx !== q.ans && !btn.disabled) wrongIndices.push(idx);
  });

  const toDisable = shuffleArray(wrongIndices).slice(0, 2);
  toDisable.forEach(idx => {
    buttons[idx].disabled = true;
    buttons[idx].classList.add('opacity-30');
  });
  playSE('chest');
}

function handleAnswer(selectedIdx) {
  if (isAnswered) return;
  isAnswered = true;
  stopBattleTimers();

  const q = currentQueue[currentIndex];
  const isCorrect = (selectedIdx === q.ans);
  const answerDuration = Date.now() - questionStartTime;
  const isQuickAnswer = (answerDuration <= 3000);
  
  answeredQuestionsCount += 1;
  userData.totalAnswered += 1;
  const feedbackModal = document.getElementById('quizFeedback');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackExplain = document.getElementById('feedbackExplain');

  Array.from(document.getElementById('quizOptions').children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.ans) btn.classList.add('!bg-pink-700', '!border-pink-400');
    if (idx === selectedIdx && !isCorrect) btn.classList.add('!bg-rose-900', '!border-rose-500');
  });

  const pStats = calculatePlayerStats();

  if (isCorrect) {
    quizScore += 1;
    combo += 1;
    if (combo > maxCombo) maxCombo = combo;
    userData.totalCorrect += 1;

    if (combo >= 5 && !isFeverMode) {
      isFeverMode = true;
      playBGM('fever');
    }

    let dmg = 0;
    let isCrit = false;

    if (currentMode === 'weakRetry') {
      dmg = enemyCurHp;
      enemyCurHp = 0;
      isCrit = true;
    } else {
      dmg = Math.round(pStats.atk * (0.9 + Math.random() * 0.3));
      const critRate = Math.min(1.0, pStats.spd / 600);
      isCrit = isQuickAnswer || (Math.random() < critRate);
      if (isCrit) dmg = Math.round(dmg * 2.0);
      if (isFeverMode) dmg = Math.round(dmg * 1.5);
      enemyCurHp = Math.max(0, enemyCurHp - dmg);
    }
    updateBattleHpUi();

    if (currentMode === 'weakRetry' || isCrit) {
      playSE('critical');
      showDamagePopup(`💥 ${currentMode === 'weakRetry' ? '一撃粉砕!' : 'CRITICAL!'} -${dmg} HP`, true, true);
    } else {
      playSE('correct');
      showDamagePopup(`🪄 -${dmg} HP`, false, true);
    }

    if (q.rawWord && !userData.vocabBook.includes(q.rawWord)) {
      userData.vocabBook.push(q.rawWord);
    }

    feedbackIcon.innerText = '🌸';
    feedbackTitle.innerText = (currentMode === 'weakRetry') 
      ? `🎯 苦手克服撃破！ Excellent!` 
      : (isCrit ? `⚡ クリティカル正解！ Excellent! (${combo}連続)` : `正解！ Great! (${combo}連続)`);
    feedbackTitle.className = "text-xs font-black text-pink-300";

    if (q.audio_complete) {
      setTimeout(() => speakText(q.audio_complete), 300);
    }
  } else {
    playSE('wrong');
    combo = 0;
    if (isFeverMode) {
      isFeverMode = false;
      playBGM(isBossMode ? 'boss' : 'battle');
    }

    let enemyDmg = 0;
    if (currentMode === 'weakRetry') {
      enemyDmg = playerCurHp;
      playerCurHp = 0;
    } else {
      enemyDmg = Math.round(enemyAtk * (0.8 + Math.random() * 0.4));
      playerCurHp = Math.max(0, playerCurHp - enemyDmg);
    }
    updateBattleHpUi();
    showDamagePopup(`⚠️ 反撃被弾! -${enemyDmg} HP`, false, false);

    if (!userData.weakList.includes(q.id)) {
      userData.weakList.push(q.id);
    }

    feedbackIcon.innerText = '❌';
    feedbackTitle.innerText = 'おしい！ Review';
    feedbackTitle.className = "text-xs font-black text-rose-400";
  }

  feedbackExplain.innerText = q.explain;
  feedbackModal.classList.remove('hidden');
  saveData();
}

function nextQuestion() {
  document.getElementById('quizFeedback').classList.add('hidden');
  currentIndex += 1;
  if (currentIndex < currentQueue.length && playerCurHp > 0 && enemyCurHp > 0) {
    renderQuestion();
  } else {
    finishSession();
  }
}

// ==================== リザルト ＆ ボス撃破セリフ・エンディング分岐 ====================
function finishSession() {
  stopBattleTimers();

  const isPlayerDead = (playerCurHp <= 0);
  const isEnemyDefeated = (enemyCurHp <= 0);

  if (isBossMode && isEnemyDefeated && !userData.bossClearedLevels.includes(currentBossStage.lv) && currentBossStage.defeatMsg) {
    showBossDialogueModal(`【Lv.${currentBossStage.lv} ${currentBossStage.name}】撃破！`, currentBossStage.icon, currentBossStage.defeatMsg, () => {
      proceedFinishSession();
    });
  } else {
    proceedFinishSession();
  }
}

function proceedFinishSession() {
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('viewQuiz').classList.add('hidden');
  document.getElementById('viewResult').classList.remove('hidden');
  playBGM('result');

  let earnedExp = 0;
  let earnedGems = 0;
  const rareDropArea = document.getElementById('rareDropArea');
  rareDropArea.classList.add('hidden');

  const isPlayerDead = (playerCurHp <= 0);
  const isEnemyDefeated = (enemyCurHp <= 0);

  if (isPlayerDead) {
    document.getElementById('resultModeBadge').innerText = '💀 クエスト失敗...';
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-rose-700 text-white px-2 py-0.5 rounded-full inline-block mb-1';
    document.getElementById('resultEmoji').innerText = '🪦';
    document.getElementById('resultTitle').innerText = (currentMode === 'weakRetry') ? '一撃でやられてしまった！' : '力尽きてしまった！';
    document.getElementById('resultComment').innerText = (currentMode === 'weakRetry') ? '解説をよく読んで、もう一度にがて帳から再挑戦しよう！' : 'HPや装備を強化してリベンジしよう！';
    
    earnedExp = Math.max(5, Math.round(quizScore * 2));
    earnedGems = 1;

    if (currentMode === 'weakRetry') {
      const targetId = currentQueue[0]?.id;
      if (targetId) {
        if (!userData.weakStats) userData.weakStats = {};
        if (!userData.weakStats[targetId]) userData.weakStats[targetId] = { cleared: 0, attempts: 0 };
        userData.weakStats[targetId].attempts += 1;
      }
    }
  } else if (!isEnemyDefeated) {
    document.getElementById('resultModeBadge').innerText = '💨 討伐失敗 (時間切れ)';
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-slate-700 text-slate-200 px-2 py-0.5 rounded-full inline-block mb-1';
    document.getElementById('resultEmoji').innerText = '💨';
    document.getElementById('resultTitle').innerText = '敵が逃げてしまった！';
    document.getElementById('resultComment').innerText = '出題数内にHPを削りきれなかった！3秒即答クリティカルを狙おう！';

    if (isBossMode) {
      earnedExp = Math.round(currentBossStage.exp * 0.25);
      earnedGems = 2;
    } else {
      earnedExp = Math.max(10, Math.round((quizScore * 5) * 0.5));
      earnedGems = 1;
    }
  } else if (isBossMode && isEnemyDefeated) {
    earnedExp = currentBossStage.exp + (quizScore * 5);
    earnedGems = currentBossStage.gems;

    if (!userData.bossClearedLevels.includes(currentBossStage.lv)) {
      userData.bossClearedLevels.push(currentBossStage.lv);
    }
    if (currentBossStage.lv >= userData.bossUnlockedLevel && userData.bossUnlockedLevel < 11) {
      userData.bossUnlockedLevel = currentBossStage.lv + 1;
    }

    if (currentBossStage.lv === 11 && !userData.hasSeenTrueEnding) {
      userData.hasSeenTrueEnding = true;
      earnedGems = 500;
      earnedExp = 5000;
      if (userData.inventory.potion > 0) {
        earnedExp *= 2;
        userData.inventory.potion--;
      }
      userData.gems += earnedGems;
      addExp(earnedExp);
      showTrueEndingModal();
      return;
    }

    if (currentBossStage.lv === 10 && !userData.hasSeenEnding) {
      const secretDrops = ['hat_genesis_crown', 'wp_genesis_blade', 'aura_genesis_light'];
      secretDrops.forEach(id => {
        if (!userData.unlockedEquips.includes(id)) userData.unlockedEquips.push(id);
      });
      userData.hasSeenEnding = true;
      userData.bossUnlockedLevel = 11;
      if (userData.inventory.potion > 0) {
        earnedExp *= 2;
        userData.inventory.potion--;
      }
      userData.gems += earnedGems;
      addExp(earnedExp);
      showEndingModal();
      return;
    }

    document.getElementById('resultModeBadge').innerText = `👑 Lv.${currentBossStage.lv} BOSS 討伐完全勝利！`;
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-pink-600 text-white px-2 py-0.5 rounded-full inline-block mb-1 shadow';
    document.getElementById('resultEmoji').innerText = currentBossStage.icon;
    document.getElementById('resultTitle').innerText = `【${currentBossStage.name}】を撃破！`;
    document.getElementById('resultComment').innerText = (currentBossStage.lv === 11) 
      ? '信じられない快挙！真・裏ボスを討伐し全次元を制覇しました！'
      : '見事な英語力と攻撃力です！次のボスレベルが解放されました！';

    const dropChance = 0.3 + (currentBossStage.lv * 0.07);
    const bossDrops = ['hat_dragon_crown', 'wp_dark_blade', 'aura_dragon_light'];
    const availableDrops = bossDrops.filter(id => !userData.unlockedEquips.includes(id));
    if (availableDrops.length > 0 && Math.random() < dropChance) {
      const dropId = availableDrops[Math.floor(Math.random() * availableDrops.length)];
      userData.unlockedEquips.push(dropId);
      const dropEquip = SHOP_EQUIP_DATA.find(e => e.id === dropId);
      document.getElementById('rareDropItemText').innerText = `【${dropEquip.name}】(${dropEquip.desc}) を獲得！`;
      rareDropArea.classList.remove('hidden');
      playSE('chest');
    }
  } else if (isDailyCurrentSession && isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🏆🌸';
    document.getElementById('resultTitle').innerText = 'デイリー修練クリア！';
    document.getElementById('resultModeBadge').innerText = '🌸 デイリー限定ボーナス獲得！';
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2.5 py-0.5 rounded-full inline-block mb-1 shadow';

    if (currentMode === 'vocab') {
      userData.dailyDone.vocab = true;
      earnedExp = 50 + (quizScore * 5);
      earnedGems = 15;
    } else if (currentMode === 'grammar') {
      userData.dailyDone.grammar = true;
      earnedExp = 60 + (quizScore * 10);
      earnedGems = 20;
    } else if (currentMode === 'listening') {
      userData.dailyDone.listening = true;
      earnedExp = 80 + (quizScore * 10);
      earnedGems = 25;
    }
  } else if (currentMode === 'weakRetry' && isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🎯✨';
    document.getElementById('resultTitle').innerText = '一撃粉砕！特訓クリア！';
    document.getElementById('resultModeBadge').innerText = '✨ 苦手特訓 討伐成功！';
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-pink-500 text-white px-2.5 py-0.5 rounded-full inline-block mb-1 shadow';
    document.getElementById('resultComment').innerText = '見事に一撃で正解！完全に覚えたら「覚えた」ボタンで削除できます。';
    
    const targetId = currentQueue[0]?.id;
    if (targetId) {
      if (!userData.weakStats) userData.weakStats = {};
      if (!userData.weakStats[targetId]) userData.weakStats[targetId] = { cleared: 0, attempts: 0 };
      userData.weakStats[targetId].attempts += 1;
      userData.weakStats[targetId].cleared += 1;
    }

    earnedExp = 30;
    earnedGems = 5;
  } else if (currentMode === 'weakBattle' && isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🎉🌸';
    document.getElementById('resultTitle').innerText = 'にがて討伐完了！';
    document.getElementById('resultModeBadge').innerText = '🔄 通常特訓サイクルがリセット！';
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-pink-500 text-white px-2.5 py-0.5 rounded-full inline-block mb-1 shadow';
    document.getElementById('resultComment').innerText = '見事に苦手を克服しました！通常特訓に再び挑戦できます！';
    userData.questRotation = { vocab: false, grammar: false, listening: false };
    earnedExp = 100;
    earnedGems = 20;
  } else if (isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🏆✨';
    document.getElementById('resultTitle').innerText = 'モンスター討伐完了！';
    document.getElementById('resultModeBadge').innerText = '⚔️ 通常特訓クリア';
    document.getElementById('resultModeBadge').className = 'text-[9px] font-black bg-purple-700 text-purple-200 px-2 py-0.5 rounded-full inline-block mb-1';
    
    if (selectedNormalType) {
      userData.questRotation[selectedNormalType] = true;
    }

    const diffMulti = [1.0, 1.5, 2.3, 3.8][selectedNormalDiffLevel - 1] || 1.0;
    const baseExp = (quizScore * 8 + (maxCombo * 2));
    earnedExp = Math.round(baseExp * diffMulti);
    earnedGems = Math.max(1, Math.round((quizScore / 2) * (diffMulti * 0.8)));
  }

  let potionUsed = false;
  if (userData.inventory.potion > 0 && earnedExp > 0) {
    earnedExp *= 2;
    userData.inventory.potion--;
    potionUsed = true;
  }

  const totalDone = Math.max(1, answeredQuestionsCount);
  document.getElementById('resultScore').innerText = `${quizScore} / ${totalDone}`;
  document.getElementById('resultExp').innerText = potionUsed ? `+${earnedExp} (🧪2倍!)` : `+${earnedExp}`;
  document.getElementById('resultGems').innerText = `💎+${earnedGems}`;

  userData.gems += earnedGems;
  addExp(earnedExp);
}

function confirmExitQuiz() {
  if (confirm('修練をとちゅうで終了してホームにもどりますか？')) {
    stopBattleTimers();
    showHome();
  }
}

// ==================== 🎬 フルスクリーン表エンディング ====================
function showEndingModal() {
  hideAllViews();
  playBGM('ending');

  const avatarObj = [...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0];
  const heroEmojiEl = document.getElementById('endingHeroEmoji');
  const heroNameEl = document.getElementById('endingHeroName');
  if (heroEmojiEl) heroEmojiEl.innerText = avatarObj.emoji;
  if (heroNameEl) heroNameEl.innerText = avatarObj.name;

  const phase1 = document.getElementById('endingPhase1');
  const phase2 = document.getElementById('endingPhase2');
  if (phase1) phase1.classList.remove('hidden');
  if (phase2) phase2.classList.add('hidden');

  const modal = document.getElementById('modalEnding');
  if (modal) modal.classList.remove('hidden');
}

function triggerEndingTeaser() {
  const phase1 = document.getElementById('endingPhase1');
  const phase2 = document.getElementById('endingPhase2');
  const container = document.getElementById('endingContainer');
  
  if (container) container.classList.add('animate-shake');
  playSE('wrong');
  
  setTimeout(() => {
    if (container) container.classList.remove('animate-shake');
    if (phase1) phase1.classList.add('hidden');
    if (phase2) phase2.classList.remove('hidden');
  }, 1000);
}

function finishEndingSequence() {
  const modal = document.getElementById('modalEnding');
  if (modal) modal.classList.add('hidden');
  saveData();
  showHome();
}

// ==================== 🌌 真・完結エンディング ====================
function showTrueEndingModal() {
  hideAllViews();
  playBGM('trueEnding');

  let modal = document.getElementById('modalTrueEndingScene');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalTrueEndingScene';
    modal.className = "fixed inset-0 bg-black/95 z-50 overflow-y-auto p-3 flex items-center justify-center";
    document.body.appendChild(modal);
  }

  const acc = userData.totalAnswered > 0 ? Math.round((userData.totalCorrect / userData.totalAnswered) * 100) : 100;

  modal.innerHTML = `
    <div class="max-w-sm w-full bg-gradient-to-b from-[#2e154f] via-[#1c0f33] to-[#0f071f] border-2 border-pink-400 rounded-3xl p-5 shadow-2xl text-center space-y-3.5 glow-gold">
      <div class="text-5xl animate-bounce">🌌👑🌸✨</div>
      <div>
        <span class="text-[8.5px] font-black bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow">TRUE GRAND ENDING</span>
        <h2 class="text-lg font-black text-pink-300 mt-1 tracking-wider">全次元・星詠みの完全制覇</h2>
      </div>
      
      <div class="bg-[#110a24]/90 p-3 rounded-2xl border border-purple-500/40 text-[10.5px] text-purple-100 leading-relaxed text-left space-y-1.5 break-words">
        <p>虚無の創造主【クロノス】は満たされ、宇宙の全てに永遠の美しい光が灯りました。</p>
        <p class="text-pink-300 font-bold">ルナ：「信じられないよ……！あなたは全700語、全高校英文法、リスニングの全てを極めた、本物の【英語の女神】になったんだね！！」</p>
      </div>

      <div class="bg-gradient-to-r from-pink-950 via-purple-950 to-indigo-950 border-2 border-pink-400 p-2.5 rounded-2xl text-center space-y-1 shadow-2xl">
        <div class="text-[10px] font-black text-pink-300">📜 殿堂入りマスタープレート</div>
        <div class="grid grid-cols-3 gap-1 text-[8.5px] bg-black/60 p-1.5 rounded-xl border border-pink-500/40 text-purple-200">
          <div>総解答: <strong class="text-white block text-[11px]">${userData.totalAnswered}問</strong></div>
          <div>正解率: <strong class="text-pink-300 block text-[11px]">${acc}%</strong></div>
          <div>討伐数: <strong class="text-amber-300 block text-[11px]">全11体</strong></div>
        </div>
        <div class="text-[9.5px] text-pink-300 font-black pt-0.5">
          称号【🌌 全次元の星詠み神】授与！
        </div>
      </div>

      <div class="bg-[#110a24]/90 border border-purple-500/40 p-2.5 rounded-2xl text-[9px] space-y-0.5 text-center font-bold">
        <div class="text-pink-400 tracking-widest text-[8px] uppercase border-b border-purple-800 pb-0.5">★ SPECIAL STAFF CREDITS ★</div>
        <div class="text-purple-200">エグゼクティブ・プロデューサー：<span class="text-white font-black">鄭 聖也（パパ）</span></div>
        <div class="text-purple-200">ゲームデザイン・プログラム：<span class="text-white font-black">鄭 聖也（パパ）</span></div>
        <div class="text-purple-200">愛と情熱の応援サポーター：<span class="text-pink-400 font-black">鄭 聖也（パパ）</span></div>
      </div>

      <button onclick="closeTrueEndingModal()" class="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 hover:brightness-110 text-white font-black py-2.5 rounded-xl text-xs shadow-2xl transition active:scale-95">
        栄光を胸にホームへ 🏠
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeTrueEndingModal() {
  const modal = document.getElementById('modalTrueEndingScene');
  if (modal) modal.classList.add('hidden');
  saveData();
  showHome();
}

// ==================== ショップ ＆ 装備 ====================
function switchEquipTab(tab) {
  currentShopTab = tab;
  const tHat = document.getElementById('tabEquipHat');
  const tWp = document.getElementById('tabEquipWeapon');
  const tAu = document.getElementById('tabEquipAura');
  [tHat, tWp, tAu].forEach(el => {
    if (el) el.className = "flex-1 py-1 rounded-lg text-purple-300/70 hover:text-white transition";
  });
  if (tab === 'hat' && tHat) tHat.className = "flex-1 py-1 rounded-lg bg-[#2b1b59] text-pink-300 shadow transition";
  if (tab === 'weapon' && tWp) tWp.className = "flex-1 py-1 rounded-lg bg-[#2b1b59] text-pink-300 shadow transition";
  if (tab === 'aura' && tAu) tAu.className = "flex-1 py-1 rounded-lg bg-[#2b1b59] text-pink-300 shadow transition";
  renderShopEquips();
}

function renderShopEquips() {
  const container = document.getElementById('equipShopList');
  if (!container) return;
  container.innerHTML = '';

  const items = SHOP_EQUIP_DATA.filter(e => e.type === currentShopTab);
  items.forEach(eq => {
    const isUnlocked = userData.unlockedEquips.includes(eq.id);
    const isEquipped = (userData.equipped[eq.type] === eq.id);
    const isLevelLocked = Boolean(eq.reqLv && userData.level < eq.reqLv);

    if (eq.isSecret && !isUnlocked) {
      return;
    }

    const card = document.createElement('div');
    card.className = `p-2 rounded-2xl border flex flex-col justify-between ${
      eq.isSecret 
        ? (isEquipped ? 'bg-purple-900 border-pink-400 shadow-xl glow-gold' : 'bg-gradient-to-br from-purple-950 to-pink-950 border-pink-500')
        : (isEquipped ? 'bg-[#2b1b59] border-pink-400 shadow-md' : 'bg-[#110a24]/90 border-purple-500/30')
    }`;

    card.innerHTML = `
      <div>
        <div class="flex justify-between items-center mb-0.5">
          <span class="text-[8px] font-bold ${eq.isSecret ? 'text-pink-300' : 'text-purple-300'} truncate">${eq.rank}</span>
          <span class="text-base flex-shrink-0">${eq.icon}</span>
        </div>
        <div class="font-black text-[11px] text-white truncate">${eq.name}</div>
        <div class="text-[8.5px] text-pink-300 mt-0.5 leading-tight truncate">${eq.desc}</div>
      </div>
      <div class="mt-2 pt-1 border-t border-purple-500/30 flex justify-between items-center">
        ${isEquipped ? `
          <button onclick="unequipItem('${eq.type}')" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-1 rounded-lg text-[9.5px] transition">
            はずす
          </button>
        ` : (isUnlocked ? (
          isLevelLocked ? `
            <button onclick="equipItem('${eq.id}', '${eq.type}')" class="w-full bg-[#110a24] border border-rose-600/70 text-rose-300 font-bold py-0.5 rounded-lg text-[8.5px] transition active:scale-95 leading-tight truncate">
              🔒 Lv.${eq.reqLv}〜
            </button>
          ` : `
            <button onclick="equipItem('${eq.id}', '${eq.type}')" class="w-full ${eq.isSecret ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black' : 'bg-pink-500 hover:bg-pink-400 text-purple-950 font-black'} py-1 rounded-lg text-[9.5px] transition active:scale-95 shadow">
              そうび
            </button>
          `
        ) : (eq.price > 9000 ? `
          <span class="w-full text-center text-[8.5px] text-rose-300 font-bold bg-rose-950/80 border border-rose-800/60 py-0.5 rounded-lg truncate">
            ボス限定
          </span>
        ` : `
          <button onclick="buyEquip('${eq.id}', ${eq.price})" class="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white font-black py-1 rounded-lg text-[9.5px] flex items-center justify-center gap-1 transition active:scale-95 shadow">
            <span>💎 ${eq.price}</span> <span>購入</span>
          </button>
        `))}
      </div>
    `;
    container.appendChild(card);
  });
}

function equipItem(id, type) {
  const eq = SHOP_EQUIP_DATA.find(e => e.id === id);
  if (eq && eq.reqLv && userData.level < eq.reqLv) {
    alert(`⚠️ この装備は【Lv.${eq.reqLv}】以上で装備可能です！（現在のLv: ${userData.level}）\nレベルを上げて解放しよう！`);
    return;
  }
  userData.equipped[type] = id;
  playSE('levelup');
  saveData();
}

function unequipItem(type) {
  userData.equipped[type] = '';
  playSE('wrong');
  saveData();
}

function buyEquip(id, price) {
  if (userData.gems < price) {
    alert('ダイヤが足りません！クエストをクリアしてダイヤを集めよう！');
    return;
  }
  userData.gems -= price;
  userData.unlockedEquips.push(id);
  playSE('chest');
  saveData();
}

function buyItem(type, price) {
  if (userData.gems < price) {
    alert('ダイヤが足りません！');
    return;
  }
  userData.gems -= price;
  if (type === 'hint') userData.inventory.hint += 1;
  if (type === 'potion') userData.inventory.potion += 1;
  playSE('chest');
  saveData();
}

// ==================== 画面表示切替 ＆ ナビゲーション ====================
function hideAllViews() {
  ['viewHome', 'viewQuiz', 'viewResult', 'viewShop', 'viewParent', 'viewBook', 'viewWeakBook', 'modalBossSelect', 'modalNormalSelect', 'modalBossDialogue', 'quizFeedback'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

function showHome() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewHome').classList.remove('hidden');
  playBGM('home');
  updateNavHighlight('home');
}

function showShop() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewShop').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('shop');
  renderShopEquips();
}

function showParent() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewParent').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('parent');
}

function updateNavHighlight(active) {
  ['Home', 'Book', 'Weak', 'Shop', 'Parent'].forEach(name => {
    const btn = document.getElementById('nav' + name);
    if (btn) btn.className = "flex flex-col items-center gap-0.5 text-purple-300/70 hover:text-purple-200";
  });
  const keyMap = { home: 'navHome', book: 'navBook', weak: 'navWeak', shop: 'navShop', parent: 'navParent' };
  const target = document.getElementById(keyMap[active]);
  if (target) target.className = "flex flex-col items-center gap-0.5 text-pink-300 font-black";
}

// ==================== バックアップ・復元・リセット ====================
function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userData));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `eiken_pre2_backup_${getTodayString()}.json`);
  dlAnchor.click();
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let imported = null;
    try {
      imported = JSON.parse(e.target.result);
    } catch (parseErr) {
      alert('ファイルの読み込みに失敗しました（有効なJSONバックアップファイルではありません）。');
      return;
    }
    try {
      userData = { ...userData, ...imported };
      sanitizeUserData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      updateUiState();
      alert('準2級データの復元が完了しました！');
      location.reload();
    } catch (err) {
      console.error(err);
      alert('データの反映中にエラーが発生しました。');
    }
  };
  reader.readAsText(file);
}

function resetAllProgress() {
  if (confirm('準2級のすべての学習記録、レベル、獲得ダイヤを初期化しますか？')) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch(e) {}
    location.reload();
  }
}

// ==================== 初期起動リスナー ====================
window.addEventListener('DOMContentLoaded', () => {
  loadData();
});
document.body.addEventListener('click', initAudio, { once: true });
