// ==========================================
// 英検準2級 合格クエスト 〜高校英語の覇者〜
// データベースファイル (data.js)
// ==========================================

// ==================== 1. 勇者アバター進化体系 ====================
const AVATARS = [
  { minLv: 1, name: "見習いチャレンジャー", rank: "高校英語初学者", emoji: "🧑‍🎓" },
  { minLv: 10, name: "知識の探求者", rank: "語彙の習得者", emoji: "🧙‍♂️" },
  { minLv: 25, name: "構文の魔導士", rank: "文法マスター", emoji: "🧝" },
  { minLv: 45, name: "神速の言語騎士", rank: "リスニング覇者", emoji: "🤺" },
  { minLv: 70, name: "英知の神官", rank: "準2級マスター", emoji: "👑" },
  { minLv: 100, name: "全次元制覇神", rank: "高校英語の頂点", emoji: "🌌" }
];

// ==================== 2. ギルドショップ 装備データ ====================
const SHOP_EQUIP_DATA = [
  // --- 頭防具 (HP強化) ---
  { id: 'hat_leather', type: 'hat', name: '学徒のベレー帽', icon: '🎓', val: 50, price: 15, rank: '初級', desc: 'HP +50' },
  { id: 'hat_iron', type: 'hat', name: '魔導のサークレット', icon: '👑', val: 120, price: 40, rank: '中級', desc: 'HP +120' },
  { id: 'hat_mithril', type: 'hat', name: '賢者のフード', icon: '🧙', val: 300, price: 90, rank: '上級', desc: 'HP +300' },
  { id: 'hat_dragon', type: 'hat', name: '神龍の兜', icon: '🐲', val: 800, price: 200, rank: '超級', desc: 'HP +800' },
  { id: 'hat_god', type: 'hat', name: '創世神の王冠', icon: '👑✨', val: 35000, price: 99999, rank: '神話', desc: 'HP +35,000 (Lv.10撃破報酬)', isSecret: true },

  // --- 武器 (攻撃力強化) ---
  { id: 'wp_wood', type: 'weapon', name: '初心のペン', icon: '✒️', val: 15, price: 15, rank: '初級', desc: '攻 +15' },
  { id: 'wp_iron', type: 'weapon', name: '知識のレイピア', icon: '🗡️', val: 40, price: 40, rank: '中級', desc: '攻 +40' },
  { id: 'wp_silver', type: 'weapon', name: '魔導の銀杖', icon: '🪄', val: 100, price: 90, rank: '上級', desc: '攻 +100' },
  { id: 'wp_legend', type: 'weapon', name: '覇王の神剣', icon: '⚔️', val: 260, price: 200, rank: '超級', desc: '攻 +260' },
  { id: 'wp_god', type: 'weapon', name: '創世神の聖剣', icon: '🌟🗡️', val: 6000, price: 99999, rank: '神話', desc: '攻 +6,000 (Lv.10撃破報酬)', isSecret: true },

  // --- オーラ (素早さ・会心強化) ---
  { id: 'aura_wind', type: 'aura', name: '疾風の息吹', icon: '🍃', val: 10, price: 20, rank: '初級', desc: '速 +10' },
  { id: 'aura_thunder', type: 'aura', name: '迅雷のオーラ', icon: '⚡', val: 25, price: 50, rank: '中級', desc: '速 +25' },
  { id: 'aura_light', type: 'aura', name: '天光の輝き', icon: '✨', val: 60, price: 100, rank: '上級', desc: '速 +60' },
  { id: 'aura_god', type: 'aura', name: '創世神の極光', icon: '🌌✨', val: 600, price: 99999, rank: '神話', desc: '速 +600 / クリティカル100%確定 (Lv.10撃破報酬)', isSecret: true }
];

// ==================== 3. 準2級 コア頻出単語 データベース ====================
const RAW_VOCAB_DATA = [
  ["achieve", "〜を達成する・成し遂げる"],
  ["advantage", "有利・利点"],
  ["allow", "〜を許可する・可能にする"],
  ["ancient", "古代の・大昔の"],
  ["appearance", "外見・様子・出現"],
  ["attitude", "態度・心構え"],
  ["attract", "〜を引きつける・魅了する"],
  ["available", "利用できる・手に入る"],
  ["benefit", "利益・恩恵"],
  ["celebrate", "〜を祝う"],
  ["certain", "確信して・一定の"],
  ["challenge", "試練・挑戦・課題"],
  ["comfortable", "心地よい・快適な"],
  ["community", "地域社会・共同体"],
  ["condition", "状態・条件"],
  ["confident", "自信に満ちた・確信して"],
  ["convenient", "便利な・都合の良い"],
  ["culture", "文化・教養"],
  ["decade", "10年間"],
  ["decision", "決断・決定"],
  ["decrease", "減少する・減らす"],
  ["delicious", "とてもおいしい"],
  ["demand", "需要・要求"],
  ["disappoint", "〜を失望させる・がっかりさせる"],
  ["discover", "〜を発見する・見つける"],
  ["effective", "効果的な・有効な"],
  ["effort", "努力・奮闘"],
  ["encourage", "〜を励ます・勇気づける"],
  ["environment", "自然環境・周囲の状況"],
  ["essential", "不可欠な・極めて重要な"],
  ["experience", "経験・体験"],
  ["express", "〜を表現する・述べる"],
  ["familiar", "よく知られた・馴染みのある"],
  ["frequently", "頻繁に・しばしば"],
  ["gradually", "徐々に・だんだんと"],
  ["improve", "〜を向上させる・改善する"],
  ["increase", "増加する・増やす"],
  ["influence", "影響・影響を与える"],
  ["ingredient", "材料・成分"],
  ["opportunity", "機会・チャンス"],
  ["pollution", "汚染・公害"],
  ["population", "人口・住民"],
  ["protect", "〜を保護する・守る"],
  ["provide", "〜を提供する・供給する"],
  ["relationship", "関係・結びつき"],
  ["require", "〜を必要とする・要求する"],
  ["responsible", "責任がある・原因である"],
  ["situation", "状況・立場"],
  ["traditional", "伝統的な・昔ながらの"],
  ["valuable", "貴重な・価値の高い"]
];

// ==================== 4. 準2級 頻出文法・語法 データベース ====================
const RAW_GRAMMAR_DATA = [
  {
    q: "If I ( ) rich, I would buy a house by the sea.",
    sub: "🪄 仮定法過去",
    opt: ["am", "were", "will be", "have been"],
    ans: 1,
    exp: "【解説】現在の事実と異なる願望や仮定を表す「仮定法過去」では、if節の動詞を過去形（be動詞は主に were）にします。\n\n【訳】もし私がお金持ちなら、海辺に家を買うのに。"
  },
  {
    q: "The woman ( ) lives next door is a famous pianist.",
    sub: "🪄 関係代名詞 (主格)",
    opt: ["who", "which", "whose", "whom"],
    ans: 0,
    exp: "【解説】先行詞が「人（The woman）」であり、関係代名詞節内で主語の役割を果たしているため、主格の who が正解です。\n\n【訳】隣に住んでいる女性は有名なピアニストです。"
  },
  {
    q: "He didn't know what ( ) in that difficult situation.",
    sub: "🪄 疑問詞 ＋ 不定詞",
    opt: ["do", "to do", "doing", "did"],
    ans: 1,
    exp: "【解説】〈what to do〉で「何をすべきか」を表す名詞句になります。\n\n【訳】彼はその困難な状況で何をすべきかわかりませんでした。"
  },
  {
    q: "You ( ) better see a doctor if you still have a fever.",
    sub: "🪄 助動詞 (had better)",
    opt: ["had", "would", "should", "did"],
    ans: 0,
    exp: "【解説】〈had better ＋ 動詞の原形〉で「〜したほうがよい（強い忠告）」を表します。\n\n【訳】まだ熱があるなら、医者に診てもらったほうがいいですよ。"
  },
  {
    q: "This problem is too difficult for me ( ).",
    sub: "🪄 too 〜 to 構文",
    opt: ["solve", "solved", "to solve", "solving"],
    ans: 2,
    exp: "【解説】〈too ＋ 形容詞 ＋ for 人 ＋ to ＋ 動詞の原形〉で「人が〜するには…すぎる」を表します。\n\n【訳】この問題は私が解くには難しすぎます。"
  },
  {
    q: "The museum ( ) built more than two hundred years ago.",
    sub: "🪄 受動態 (過去形)",
    opt: ["is", "was", "has", "were"],
    ans: 1,
    exp: "【解説】two hundred years ago（200年前）という過去の時制で、主語が単数（The museum）の受動態なので was built が正解です。\n\n【訳】その博物館は200年以上前に建てられました。"
  },
  {
    q: "I am looking forward to ( ) you at the international festival.",
    sub: "🪄 動名詞の重要慣用表現",
    opt: ["see", "saw", "seeing", "seen"],
    ans: 2,
    exp: "【解説】熟語 look forward to の to は前置詞なので、後ろには名詞または動名詞（seeing）が続きます。\n\n【訳】国際フェスティバルであなたにお会いできるのを楽しみにしています。"
  },
  {
    q: "She asked him ( ) turn down the volume of the TV.",
    sub: "🪄 不定詞 (tell/ask + 人 + to do)",
    opt: ["to", "for", "with", "at"],
    ans: 0,
    exp: "【解説】〈ask ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜するよう頼む」を表します。\n\n【訳】彼女は彼にテレビの音量を下げるよう頼みました。"
  },
  {
    q: "Kyoto is one of the most famous cities ( ) in Japan.",
    sub: "🪄 過去分詞の後置修飾",
    opt: ["visit", "visiting", "visited", "visits"],
    ans: 2,
    exp: "【解説】直前の名詞 cities を後ろから修飾し、「日本で（観光客によって）訪れられる最も有名な都市」となるため過去分詞 visited が正解です。\n\n【訳】京都は日本で最も多くの人が訪れる都市の1つです。"
  },
  {
    q: "I would rather stay at home ( ) go out in the heavy rain.",
    sub: "🪄 would rather 〜 than ...",
    opt: ["than", "to", "from", "as"],
    ans: 0,
    exp: "【解説】〈would rather A than B〉で「BするよりむしろAしたい」を表します。\n\n【訳】大雨の中外出するくらいなら、むしろ家にいたいです。"
  }
];

// ==================== 5. 準2級 実戦リスニング データベース ====================
const RAW_LISTENING_DATA = [
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["To borrow some books.", "To submit an assignment.", "To meet her professor.", "To attend a seminar."],
    ans: 1,
    exp: "【会話】\nMan: Are you going to the library, Sarah?\nWoman: No, I'm heading to Professor Clark's office to turn in my term paper before three o'clock.\n\n【質問】Why is the woman going to the professor's office?\n（女性はなぜ教授の研究室へ行くのですか？）\n\n【正解の訳】\n2. 課題を提出するため。\n\n【解説】turn in my term paper（レポートを提出する）が目的です。",
    dialogue: [
      { speaker: 'male', text: "Are you going to the library, Sarah?" },
      { speaker: 'female', text: "No, I'm heading to Professor Clark's office to turn in my term paper before three o'clock." },
      { speaker: 'narrator', text: "Question. Why is the woman going to the professor's office?" }
    ],
    aud_complete: "Why is the woman going to the professor's office? To submit an assignment."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["By bus.", "By subway.", "By taxi.", "On foot."],
    ans: 1,
    exp: "【会話】\nWoman: Excuse me, what's the fastest way to get to the city art gallery from here?\nMan: Taking the subway line 3 will take only ten minutes without any traffic delays.\n\n【質問】Which transportation does the man recommend?\n（男性はどの交通機関を勧めていますか？）\n\n【正解の訳】\n2. 地下鉄で。\n\n【解説】Taking the subway line 3 を勧めています。",
    dialogue: [
      { speaker: 'female', text: "Excuse me, what's the fastest way to get to the city art gallery from here?" },
      { speaker: 'male', text: "Taking the subway line 3 will take only ten minutes without any traffic delays." },
      { speaker: 'narrator', text: "Question. Which transportation does the man recommend?" }
    ],
    aud_complete: "Which transportation does the man recommend? By subway."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["To protect marine animals.", "To build new hotels.", "To clean the beaches.", "To reduce energy use."],
    ans: 0,
    exp: "【英文】\nThe local government started a new project to protect rare sea turtles living along the coast from plastic waste.\n\n【質問】What is the main goal of the new project?\n（新しいプロジェクトの主な目的は何ですか？）\n\n【正解の訳】\n1. 海洋生物を保護するため。\n\n【解説】protect rare sea turtles（ウミガメを保護する）と述べています。",
    dialogue: [
      { speaker: 'female', text: "The local government started a new project to protect rare sea turtles living along the coast from plastic waste." },
      { speaker: 'narrator', text: "Question. What is the main goal of the new project?" }
    ],
    aud_complete: "What is the main goal of the new project? To protect marine animals."
  }
];

// ==================== 6. ボス戦用 過去問模試 データベース ====================
const ACTUAL_PAST_EXAM_DATA = [
  {
    id: "pre2_p1",
    type: "grammar",
    q: "Although he was exhausted, he managed ( ) the marathon.",
    sub: "⚔️ 準2級過去問 (短文補充)",
    options: ["finish", "to finish", "finishing", "finished"],
    ans: 1,
    explain: "【解説】〈manage to ＋ 動詞の原形〉で「どうにか〜し遂げる」を表します。正解は to finish です。\n\n【訳】極度に疲れていましたが、彼はどうにかマラソンを完走しました。",
    audio_question: "Although he was exhausted, he managed ... the marathon.",
    audio_complete: "Although he was exhausted, he managed to finish the marathon."
  },
  {
    id: "pre2_p2",
    type: "grammar",
    q: "The manager insisted that everyone ( ) on time for the meeting.",
    sub: "⚔️ 準2級過去問 (短文補充)",
    options: ["be", "is", "was", "are"],
    ans: 0,
    exp: "【解説】提案・要求・主張（insist）を表す動詞に続く that 節内では、動詞は原形（仮定法現在）になります。\n\n【訳】部長は全員が会議に時間通り出席するよう強く主張しました。",
    audio_question: "The manager insisted that everyone ... on time for the meeting.",
    audio_complete: "The manager insisted that everyone be on time for the meeting."
  },
  {
    id: "pre2_p3",
    type: "grammar",
    q: "She has lived in London ( ) she graduated from university.",
    sub: "⚔️ 準2級過去問 (短文補充)",
    options: ["since", "for", "during", "while"],
    ans: 0,
    explain: "【解説】「大学を卒業して以来ずっと（起点の過去）」を表す接続詞 since が正解です。\n\n【訳】彼女は大学を卒業して以来、ロンドンに住んでいます。",
    audio_question: "She has lived in London ... she graduated from university.",
    audio_complete: "She has lived in London since she graduated from university."
  },
  {
    id: "pre2_p4",
    type: "grammar",
    q: "He is capable ( ) speaking four different languages fluently.",
    sub: "⚔️ 準2級過去問 (短文補充)",
    options: ["of", "to", "for", "with"],
    ans: 0,
    explain: "【解説】「〜する能力がある・〜できる」は熟語 be capable of 〜 で表します。\n\n【訳】彼は4つの異なる言語を流暢に話すことができます。",
    audio_question: "He is capable ... speaking four different languages fluently.",
    audio_complete: "He is capable of speaking four different languages fluently."
  },
  {
    id: "pre2_p5",
    type: "grammar",
    q: "Hardly had I arrived at the airport ( ) the plane took off.",
    sub: "⚔️ 準2級過去問 (短文補充)",
    options: ["when", "than", "after", "then"],
    ans: 0,
    explain: "【解説】〈Hardly had ＋ 主語 ＋ 過去分詞 when ＋ 過去形〉で「〜するとすぐに…した」を表します。\n\n【訳】私が空港に着くとすぐに飛行機は離陸しました。",
    audio_question: "Hardly had I arrived at the airport ... the plane took off.",
    audio_complete: "Hardly had I arrived at the airport when the plane took off."
  }
];

// ==================== 7. ボスステージ (全11段階) ====================
const BOSS_STAGES = [
  { lv: 1, name: "古代樹の歩行獣", icon: "🐗", hp: 3500, atk: 40, exp: 120, gems: 20, desc: "高校英語の森に潜む獣。まずは基本単語で撃破！" },
  { lv: 2, name: "青銅の重装ゴーレム", icon: "🗿", hp: 9000, atk: 75, exp: 180, gems: 30, desc: "硬い装甲を持つ。助動詞や不定詞の知識で砕け！" },
  { lv: 3, name: "烈風のグリフォン", icon: "🦅", hp: 18000, atk: 120, exp: 260, gems: 45, desc: "素早い飛翔獣。3秒以内のクリティカルで仕留めよう。" },
  { lv: 4, name: "深海のクラーケン", icon: "🐙", hp: 32000, atk: 180, exp: 360, gems: 60, desc: "長い触手を操る。動名詞や分詞構文が弱点！" },
  { lv: 5, name: "冥界のケルベロス", icon: "🐺🔥", hp: 50000, atk: 250, exp: 500, gems: 80, desc: "【中ボス】強力な反撃を放つ。ミスを減らそう！" },
  { lv: 6, name: "双頭のキマイラ", icon: "🦁🐉", hp: 72000, atk: 330, exp: 680, gems: 100, desc: "猛毒と炎を吐く強敵。装備を強化して挑もう。" },
  { lv: 7, name: "古代雷神・トール", icon: "⚡🔨", hp: 100000, atk: 420, exp: 900, gems: 130, desc: "轟く雷を操る巨人。関係詞の完璧な理解が必要！" },
  { lv: 8, name: "混沌の黒竜・ティアマト", icon: "🐲🖤", hp: 140000, atk: 520, exp: 1200, gems: 170, desc: "暗黒を纏う巨竜。最高峰の攻撃力で圧倒せよ！" },
  { lv: 9, name: "終焉のフェニックス", icon: "🔥🦅✨", hp: 190000, atk: 640, exp: 1600, gems: 220, desc: "不滅の炎鳥。全問正解に近いスピードが求められる。" },
  { lv: 10, name: "創世神龍・エターナル・バハムート", icon: "👑🐉🌌", hp: 260000, atk: 800, exp: 2200, gems: 300, desc: "【表ラスボス】準2級の頂点に君臨する創世の神龍！" },
  { lv: 11, name: "虚空の創造主・クロノスオメガ", icon: "🌌👁️⌛", hp: 500000, atk: 9999, exp: 5000, gems: 500, desc: "【真・隠し裏ボス】Lv.100＆創世神装備でのみ討伐可能な究極神！", isSecret: true }
];
