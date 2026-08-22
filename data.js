// ==========================================
// 英検準2級 マジカルクエスト 〜星詠みの魔法学園〜
// マスターデータベースファイル (data.js) - パート1
// ==========================================

// ==================== 1. レベル10ごとの相棒進化ツリー ====================
const AVATARS = [
  { minLv: 1, emoji: '🐱✨', rank: '星詠みの見習い生', name: 'ルナ・ステラ' },
  { minLv: 10, emoji: '🐰🌸', rank: '魔法学園の初等生', name: 'リリィ・メイプル' },
  { minLv: 20, emoji: '🦉🔮', rank: '星詠みの案内役', name: 'コレット・ノワール' },
  { minLv: 30, emoji: '🦊🪄', rank: '魔導の探求者', name: 'ミルフィー・フォックス' },
  { minLv: 40, emoji: '🦄✨', rank: '天星のユニコーン', name: 'ステラ・ペガサス' },
  { minLv: 50, emoji: '🧝‍♀️🌿', rank: '精霊の聖乙女', name: 'エルフィ・フローラ' },
  { minLv: 60, emoji: '🧚‍♀️💖', rank: '星華の妖精姫', name: 'ティターニア' },
  { minLv: 70, emoji: '👸💫', rank: '星穹の魔導姫', name: 'プリンセス・アストラ' },
  { minLv: 80, emoji: '👑🦚', rank: '天光の聖大公', name: 'セレスティア' },
  { minLv: 90, emoji: '🌌🕊️', rank: '銀河の守護女神', name: 'ルミナス・アイリス' },
  { minLv: 100, emoji: '👑🌌✨', rank: '全次元の星詠み神', name: 'ステラ・マリス' }
];

// ==================== 2. マジカルブティック 装備データベース ====================
const SHOP_EQUIP_DATA = [
  // --- 頭防具・ティアラ (HP強化) ---
  { id: 'hat_ribbon_pink', name: 'ピンクリボン', type: 'hat', icon: '🎀', price: 25, rank: '🌟 ノーマル', val: 50, desc: 'HP +50 / かわいい魔法の第一歩' },
  { id: 'hat_cat_ears', name: 'にゃんこカチューシャ', type: 'hat', icon: '🐱', price: 45, rank: '🌟 ノーマル', val: 120, desc: 'HP +120 / 直感力UP' },
  { id: 'hat_witch_hat', name: '見習い魔女のハット', type: 'hat', icon: '🧙‍♀️', price: 80, rank: '🔵 レア', val: 300, desc: 'HP +300 / 魔法の集中力UP' },
  { id: 'hat_star_barrette', name: '星屑のバレッタ', type: 'hat', icon: '⭐', price: 130, rank: '🔵 レア', val: 600, desc: 'HP +600 / きらめく知性' },
  { id: 'hat_flower_crown', name: '妖精の花冠', type: 'hat', icon: '🌸', price: 220, rank: '🟣 スーパーレア', val: 1200, desc: 'HP +1200 / 自然の祝福' },
  { id: 'hat_moon_tiara', name: '月影のティアラ', type: 'hat', icon: '🌙', price: 320, rank: '🟣 スーパーレア', val: 2000, desc: 'HP +2000 / 静かな精神集中' },
  { id: 'hat_starlight_crown', name: '星詠みのプリンセス冠', type: 'hat', icon: '👑', price: 550, rank: '🟡 レジェンド', val: 3500, desc: 'HP +3500 / 学園の優等生' },
  { id: 'hat_aurora_veil', name: '極光のヴェール', type: 'hat', icon: '🧕', price: 800, rank: '🟡 レジェンド', val: 5000, desc: 'HP +5000 / 天空の守護' },
  { id: 'hat_crystal_tiara', name: '神話のダイヤティアラ', type: 'hat', icon: '💎', price: 1200, rank: '🌈 ゴッド', val: 8000, desc: 'HP +8000 / 準2級完全制覇' },
  { id: ''hat_dragon_crown', name: '星光の聖冠', type: 'hat', icon: '🦄👑', price: 9999, rank: '🎁 ボス限定ドロップ', val: 12000, desc: 'HP +12000 / 神獣の加護 (Lv.60以上)', reqLv: 60 },
  // 👑 完全隠し最強頭装備
  { id: 'hat_genesis_crown', name: '創世神の王冠', type: 'hat', icon: '👑✨🌌', price: 99999, rank: '🌌 創世神話級', val: 25000, desc: 'HP +25000 / 全次元を統べる神の王冠 (Lv.60以上)', reqLv: 60, isSecret: true },

  // --- 武器・ロッド (攻撃力強化) ---
  { id: 'wp_quill', name: '星のフェザーペン', type: 'weapon', icon: '✒️', price: 20, rank: '🌟 ノーマル', val: 20, desc: '攻撃 +20 / 単語を記すペン' },
  { id: 'wp_wand_apprentice', name: '見習いのマジカルワンド', type: 'weapon', icon: '🪄', price: 50, rank: '🌟 ノーマル', val: 45, desc: '攻撃 +45 / 小さな魔法弾' },
  { id: 'wp_ribbon_wand', name: 'リボンステッキ', type: 'weapon', icon: '🎀🪄', price: 90, rank: '🔵 レア', val: 100, desc: '攻撃 +100 / 正解を華麗に射抜く' },
  { id: 'wp_moon_rod', name: 'ムーンライトロッド', type: 'weapon', icon: '🌙杖', price: 150, rank: '🔵 レア', val: 180, desc: '攻撃 +180 / 月光の魔力' },
  { id: 'wp_starlight_wand', name: '星屑のステッキ', type: 'weapon', icon: '⭐🪄', price: 240, rank: '🟣 スーパーレア', val: 300, desc: '攻撃 +300 / リズムよく詠唱' },
  { id: 'wp_crystal_sword', name: '水晶のレイピア', type: 'weapon', icon: '🗡️✨', price: 350, rank: '🟣 スーパーレア', val: 480, desc: '攻撃 +480 / 難問を一閃' },
  { id: 'wp_pegasus_bow', name: '天馬のルミナスボウ', type: 'weapon', icon: '🏹', price: 600, rank: '🟡 レジェンド', val: 750, desc: '攻撃 +750 / 光の矢で射抜く' },
  { id: 'wp_galaxy_rod', name: '銀河のセレスティアルロッド', type: 'weapon', icon: '🌌杖', price: 850, rank: '🟡 レジェンド', val: 1100, desc: '攻撃 +1100 / 星々の輝き' },
  { id: 'wp_holy_wand', name: '聖女のスターライトロッド', type: 'weapon', icon: '⚜️✨', price: 1500, rank: '🌈 ゴッド', val: 1700, desc: '攻撃 +1700 / 絶対合格の聖杖' },
  { id: 'wp_dark_blade', name: '宵闇の魔導杖', type: 'weapon', icon: '🔮🖤', price: 9999, rank: '🎁 ボス限定ドロップ', val: 2400, desc: '攻撃 +2400 / ボス討伐の覇気 (Lv.60以上)', reqLv: 60 },
  // 👑 完全隠し最強武器
  { id: 'wp_genesis_blade', name: '創世神の聖剣', type: 'weapon', icon: '⚔️🌟🔥', price: 99999, rank: '🌌 創世神話級', val: 4000, desc: '攻撃 +4000 / 万物を創造し消滅させる究極剣 (Lv.60以上)', reqLv: 60, isSecret: true },

  // --- オーラ (すばやさ・会心強化) ---
  { id: 'aura_sparkle', name: 'きらめく星屑', type: 'aura', icon: '✨', price: 30, rank: '🌟 ノーマル', val: 5, desc: '速さ +5 / ささやかな輝き' },
  { id: 'aura_sakura', name: '桜の花吹雪', type: 'aura', icon: '🌸', price: 80, rank: '🔵 レア', val: 15, desc: '速さ +15 / 合格の桜吹雪' },
  { id: 'aura_fairy_wings', name: '妖精の羽', type: 'aura', icon: '🧚‍♀️', price: 180, rank: '🔵 レア', val: 30, desc: '速さ +30 / 軽やかに舞う' },
  { id: 'aura_butterfly', name: '幻光のパピヨン', type: 'aura', icon: '🦋', price: 280, rank: '🟣 スーパーレア', val: 55, desc: '速さ +55 / 華麗な直感' },
  { id: 'aura_rainbow', name: '虹色の星雲', type: 'aura', icon: '🌈', price: 450, rank: '🟣 スーパーレア', val: 85, desc: '速さ +85 / 電光石火の閃き' },
  { id: 'aura_starlight', name: '星詠みのオーラ', type: 'aura', icon: '💫', price: 700, rank: '🟡 レジェンド', val: 120, desc: '速さ +120 / 純粋な情熱' },
  { id: 'aura_aurora', name: '奇跡のオーロラ', type: 'aura', icon: '🌌', price: 950, rank: '🟡 レジェンド', val: 180, desc: '速さ +180 / 満点の架け橋' },
  { id: 'aura_cosmic', name: 'コズミックステラ', type: 'aura', icon: '🌟', price: 1500, rank: '🌈 ゴッド', val: 260, desc: '速さ +260 / 宇宙の叡智' },
  { id: 'aura_dragon_light', name: '神龍の天光', type: 'aura', icon: '🦄✨', price: 9999, rank: '🎁 ボス限定ドロップ', val: 365, desc: '速さ +365 / 神獣の加護。極限の素早さを宿す光 (Lv.60以上)', reqLv: 60 },
  // 👑 完全隠し最強オーラ
  { id: 'aura_genesis_light', name: '創世神の神光', type: 'aura', icon: '🌌✨👑', price: 99999, rank: '🌌 創世神話級', val: 515, desc: '速さ +515 / 時空を超越する絶対神の輝き (Lv.60以上)', reqLv: 60, isSecret: true }
];

// ==================== 3. 過去問ボスステージ (全11段階) ====================
const BOSS_STAGES = [
  { 
    lv: 1, 
    name: "森の案内妖精・ピピ", 
    icon: "🧚‍♀️", 
    hp: 1200, 
    atk: 25, 
    exp: 60, 
    gems: 15, 
    desc: "魔法の森で迷い人を試す妖精。基礎単語で突破しよう！",
    introMsg: "Welcome to the magic forest! (魔法の森へようこそ！あなたの英語の力、見せてみてね！)",
    defeatMsg: "You did it! (すごい！次の試練は月夜の白狐が待っているわ...！)"
  },
  { 
    lv: 2, 
    name: "月光の白狐・ツクヨミ", 
    icon: "🦊🌙", 
    hp: 3500, 
    atk: 50, 
    exp: 90, 
    gems: 20, 
    desc: "月明かりに舞う幻影の狐。3秒以内クリティカルで仕留めよう！",
    introMsg: "Can you see through my illusion? (月夜の幻影を見破れるかしら？)",
    defeatMsg: "My moonlight faded... (月光が晴れていく...！次は天を駆けるペガサスよ！)"
  },
  { 
    lv: 3, 
    name: "星屑のペガサス", 
    icon: "🦄⭐", 
    hp: 7000, 
    atk: 85, 
    exp: 130, 
    gems: 28, 
    desc: "星の海を駆ける聖獣。Lv.20以上＆上位ロッドを装備して挑もう。",
    introMsg: "Ride on the starlight! (星屑のスピードについてこられるかな！)",
    defeatMsg: "Splendid light... (美しい光だ...！だが虹の彼方のグリフォンは手強いぞ！)"
  },
  { 
    lv: 4, 
    name: "虹彩のグリフォン", 
    icon: "🦅🌈", 
    hp: 12000, 
    atk: 120, 
    exp: 180, 
    gems: 35, 
    desc: "七色の翼を持つ怪鳥。高校文法の知識で風を切り裂こう！",
    introMsg: "Feel the colorful storm! (虹色の嵐に耐えられるかな！)",
    defeatMsg: "The sky cleared... (嵐が晴れた...！次は冷気漂う氷龍の神殿だ！)"
  },
  { 
    lv: 5, 
    name: "水晶の氷龍・グラシア", 
    icon: "🐲❄️", 
    hp: 18000, 
    atk: 165, 
    exp: 240, 
    gems: 45, 
    desc: "【中ボス】美しく凍てつく氷龍。ミスを減らして挑もう！",
    introMsg: "Freeze in my crystal sanctuary! (水晶の冷気に耐えきれるかしら！)",
    defeatMsg: "My ice is melting... (氷が溶けていく...！だが宵闇の魔導姫はお前を惑わすぞ！)"
  },
  { 
    lv: 6, 
    name: "宵闇の魔導姫・リリス", 
    icon: "🧝‍♀️🔮", 
    hp: 26000, 
    atk: 210, 
    exp: 310, 
    gems: 55, 
    desc: "夜を司る妖艶な魔導士。装備を整えて挑もう。",
    introMsg: "Welcome to the eternal night. (永遠の夜へようこそ。あなたの魔法を見せてちょうだい。)",
    defeatMsg: "Such bright light... (なんて眩しい光...！鳳凰の炎がお前を試すわ！)"
  },
  { 
    lv: 7, 
    name: "烈火の鳳凰・フェニックス", 
    icon: "🔥🦅", 
    hp: 36000, 
    atk: 265, 
    exp: 400, 
    gems: 68, 
    desc: "不滅の炎を纏う神鳥。素早さと会心が勝利の鍵！",
    introMsg: "My flame burns forever! (我が不滅の炎、知識の力で鎮めてみせよ！)",
    defeatMsg: "Extinguished... (炎が鎮まった...！妖精王タイタニアが待っているぞ！)"
  },
  { 
    lv: 8, 
    name: "聖霊王・タイタニア", 
    icon: "👑🌸✨", 
    hp: 48000, 
    atk: 330, 
    exp: 500, 
    gems: 80, 
    desc: "妖精界の支配者。上級ティアラとロッドが必須！",
    introMsg: "Show me the true harmony of words! (言葉の真なる調和を示してみせなさい！)",
    defeatMsg: "Truly magnificent... (見事です...！天星龍の試練を超えてゆきなさい！)"
  },
  { 
    lv: 9, 
    name: "銀河の天星龍・アストライア", 
    icon: "🐉🌌", 
    hp: 62000, 
    atk: 400, 
    exp: 650, 
    gems: 100, 
    desc: "星穹を支配する巨大龍。最高峰のステータスが必要！",
    introMsg: "Gaze upon the galaxy! (銀河の星々を統べる我が力を超えられるか！)",
    defeatMsg: "The stars align for you... (星々がお前を導いている...！エターナル・ユニコーン様の元へ！)"
  },
  { 
    lv: 10, 
    name: "創世神獣・エターナル・ユニコーン", 
    icon: "👑🦄💖✨", 
    hp: 80000, 
    atk: 500, 
    exp: 850, 
    gems: 150, 
    desc: "【表ラスボス】準2級の頂点に君臨する純白の創世神獣！",
    introMsg: "I am the light of all dreams! (我が名はエターナル・ユニコーン！あなたの全知全能の英語力を解き放ちなさい！)",
    defeatMsg: "Incredible... You are the true grand master! (素晴らしい...！あなたこそが真の英語の覇者です！)"
  },
  { 
    lv: 11, 
    name: "虚空の創造主・クロノス・ステラ", 
    icon: "🌌👁️⌛✨", 
    hp: 160000, 
    atk: 9999, 
    exp: 2000, 
    gems: 300, 
    desc: "【真・隠し裏ボス】Lv.100＆創世神装備＆全問クリティカルでのみ勝てる究極神！", 
    isSecret: true,
    introMsg: "Time and space bow before me... (時空の果てへようこそ。神話の装備を纏いし乙女よ、限界を超えてみせよ！)",
    defeatMsg: "Eternal starlight shines forever... (永遠の星光が満ちた...。全次元の覇者よ、その栄光は不滅なり...！)"
  }
];

// ==================== 4. 準2級 必須単語・熟語 (厳選700語 Part 1) ====================
const RAW_VOCAB_DATA = [
  // --- 準2級 頻出重要熟語・連語 (70語) ---
  ["according to ~", "〜によれば・〜に従って"], ["as a result", "結果として"], ["as well as ~", "〜だけでなく…も"],
  ["at the same time", "同時に"], ["be based on ~", "〜に基づいている"], ["be capable of ~", "〜する能力がある"],
  ["be familiar with ~", "〜をよく知っている"], ["be likely to ~", "〜しそうである"], ["be responsible for ~", "〜に対して責任がある"],
  ["by accident", "偶然に・誤って"], ["by chance", "偶然に"], ["catch up with ~", "〜に追いつく"],
  ["come up with ~", "（アイデアなどを）思いつく"], ["deal with ~", "〜を扱う・処理する"], ["depend on ~", "〜に頼る・〜次第である"],
  ["due to ~", "〜が原因で・〜のために"], ["feel like ~ing", "〜したい気がする"], ["figure out ~", "〜を理解する・解決する"],
  ["for instance", "たとえば"], ["from time to time", "時々"], ["get along with ~", "〜と仲良くやっていく"],
  ["get rid of ~", "〜を取り除く・処分する"], ["get used to ~", "〜に慣れる"], ["give up ~ing", "〜するのをあきらめる"],
  ["have ~ in common", "〜を共通点として持つ"], ["in addition to ~", "〜に加えて・おまけに"], ["in case of ~", "〜の場合には・万一〜なら"],
  ["in order to ~", "〜するために"], ["in terms of ~", "〜の観点から・〜に関して"], ["instead of ~", "〜の代わりに"],
  ["keep in touch with ~", "〜と連絡を取り合う"], ["look after ~", "〜の世話をする"], ["look forward to ~", "〜を楽しみに待つ"],
  ["look up to ~", "〜を尊敬する"], ["make an effort", "努力する"], ["make sure that ~", "〜を確かめる・確実に〜する"],
  ["make use of ~", "〜を利用する・活用する"], ["no longer", "もはや〜ない"], ["not only A but also B", "AだけでなくBも"],
  ["on purpose", "わざと・故意に"], ["out of order", "故障して"], ["participate in ~", "〜に参加する"],
  ["pay attention to ~", "〜に注意を払う"], ["point out ~", "〜を指摘する"], ["put off ~", "〜を延期する"],
  ["rely on ~", "〜を信頼する・〜に頼る"], ["run out of ~", "〜を使い果たす・切らす"], ["set up ~", "〜を設立する・準備する"],
  ["so that ~", "〜するために・とても…なので〜"], ["spend A on B", "A（お金や時間）をBに費やす"], ["stand for ~", "〜を表す・象徴する"],
  ["take advantage of ~", "〜を利用する"], ["take part in ~", "〜に参加する"], ["take place", "（行事などが）行われる・開催される"],
  ["turn out to be ~", "〜であることが判明する"], ["used to ~", "かつては〜だった"], ["with regard to ~", "〜に関して"],
  ["without doubt", "疑いなく・確かに"], ["work out", "うまくいく・運動する"], ["as long as ~", "〜である限り・〜の間は"],
  ["as soon as ~", "〜するとすぐに"], ["be aware of ~", "〜に気づいている・知っている"], ["be proud of ~", "〜を誇りに思っている"],
  ["by the way", "ところで"], ["carry out ~", "〜を実行する・果たす"], ["in public", "人前で・公の場で"],
  ["in the end", "結局・最後には"], ["on the other hand", "一方で・他方では"], ["up to ~", "〜に至るまで・〜次第で"],
  ["upside down", "上下逆さまに"],

  // --- 準2級 頻出動詞 (50語) ---
  ["accept", "〜を受け入れる・承諾する"], ["achieve", "〜を達成する・成し遂げる"], ["admire", "〜を称賛する・感心する"],
  ["admit", "〜を認める・入場を許可する"], ["affect", "〜に影響を及ぼす"], ["afford", "〜する余裕がある"],
  ["agree", "同意する・賛成する"], ["allow", "〜を許可する・可能にする"], ["announce", "〜を発表する・告知する"],
  ["apologize", "謝罪する・お詫びする"], ["appear", "現れる・〜のように見える"], ["apply", "申し込む・適用する"],
  ["appreciate", "〜に感謝する・正しく評価する"], ["approach", "〜に近づく・接近する"], ["argue", "議論する・主張する"],
  ["arrange", "〜を手配する・整える"], ["attract", "〜を引きつける・魅了する"], ["avoid", "〜を避ける・回避する"],
  ["belong", "所属している"], ["blame", "〜を責める・非難する"], ["bother", "〜を困らせる・気にする"],
  ["cancel", "〜を取り消す・中止する"], ["cause", "〜を引き起こす・原因となる"], ["celebrate", "〜を祝う"],
  ["charge", "〜を請求する・充電する"], ["claim", "〜を主張する・要求する"], ["combine", "〜を組み合わせる・結合する"],
  ["communicate", "意思疎通する・伝える"], ["compare", "〜を比較する"], ["compete", "競争する・競い合う"],
  ["complain", "不平を言う・文句を言う"], ["confirm", "〜を確認する・確証する"], ["connect", "〜を接続する・繋ぐ"],
  ["consider", "〜をじっくり考える・検討する"], ["contain", "〜を含んでいる・収容する"], ["continue", "続く・続ける"],
  ["convince", "〜を納得させる・確信させる"], ["create", "〜を創造する・作り出す"], ["damage", "〜に損害を与える"],
  ["decide", "〜を決める・決心する"], ["decrease", "減少する・減らす"], ["deliver", "〜を配達する・届ける"],
  ["demand", "〜を要求する"], ["deny", "〜を否定する・拒む"], ["describe", "〜を描写する・説明する"],
  ["destroy", "〜を破壊する"], ["develop", "発展する・開発する"], ["disappear", "消える・見えなくなる"],
  ["discover", "〜を発見する"], ["discuss", "〜について話し合う"],
  // --- 準2級 頻出動詞 Part 2 (No.121 〜 No.180) ---
  ["encourage", "〜を励ます・勇気づける"], ["entertain", "〜を楽しませる・もてなす"], ["establish", "〜を設立する・確立する"],
  ["estimate", "〜を見積もる・推定する"], ["exist", "存在する・実在する"], ["expand", "拡大する・広げる"],
  ["expect", "〜を予期する・期待する"], ["explain", "〜を説明する"], ["explore", "〜を探検する・探求する"],
  ["express", "〜を表現する"], ["extend", "〜を延長する・伸ばす"], ["fail", "失敗する・落ちる"],
  ["feature", "〜を呼び物にする・特徴とする"], ["feed", "〜に餌をやる・養う"], ["figure", "考える・計算する"],
  ["focus", "集中する・焦点を合わせる"], ["forbid", "〜を禁止する"], ["force", "〜を強制する・強いる"],
  ["forgive", "〜を許す"], ["freeze", "凍る・凍らせる"], ["frighten", "〜を怖がらせる"],
  ["gather", "集まる・集める"], ["generate", "〜を生み出す・発生させる"], ["graduate", "卒業する"],
  ["greet", "〜に挨拶する・出迎える"], ["guarantee", "〜を保証する"], ["guard", "〜を守る・警備する"],
  ["guide", "〜を案内する・指導する"], ["handle", "〜を扱う・処理する"], ["hesitate", "ためらう・躊躇する"],
  ["hire", "〜を雇う"], ["hurt", "〜を傷つける・痛む"], ["ignore", "〜を無視する"],
  ["imagine", "〜を想像する"], ["impress", "〜に感銘を与える"], ["improve", "〜を向上させる・改善する"],
  ["include", "〜を含む"], ["increase", "増加する・増やす"], ["indicate", "〜を示す・指し示す"],
  ["influence", "〜に影響を与える"], ["inform", "〜に知らせる・通知する"], ["injure", "〜を傷つける・怪我をさせる"],
  ["insist", "〜を強く主張する・要求する"], ["inspire", "〜を鼓舞する・インスピレーションを与える"], ["install", "〜を設置する・導入する"],
  ["intend", "〜する意図がある・つもりである"], ["interrupt", "〜を中断させる・邪魔する"], ["introduce", "〜を紹介する・導入する"],
  ["invent", "〜を発明する"], ["invest", "〜を投資する"], ["invite", "〜を招待する"],
  ["judge", "〜を判断する・裁判する"], ["lack", "〜を欠いている・不足している"], ["locate", "〜の場所を突き止める・位置する"],
  ["maintain", "〜を維持する・主張する"], ["manage", "どうにか〜し遂げる・管理する"], ["measure", "〜を測定する・測る"],
  ["mention", "〜について言及する・口にする"], ["misunderstand", "〜を誤解する"], ["notice", "〜に気づく"],

  // --- 準2級 頻出名詞 (No.181 〜 No.240) ---
  ["ability", "能力・才能"], ["achievement", "達成・業績"], ["activity", "活動"],
  ["advantage", "有利・利点"], ["advice", "助言・アドバイス"], ["amount", "量・総額"],
  ["announcement", "発表・告知"], ["appearance", "外見・様子・出現"], ["appointment", "（面会の）約束・予約"],
  ["arrangement", "手配・配置・準備"], ["attitude", "態度・心構え"], ["audience", "聴衆・観客"],
  ["author", "著者・作家"], ["background", "背景・経歴"], ["behavior", "行動・振る舞い"],
  ["benefit", "利益・恩恵"], ["boundary", "境界・限界"], ["budget", "予算"],
  ["career", "経歴・職業"], ["cause", "原因・理由"], ["celebrity", "有名人・著名人"],
  ["ceremony", "儀式・式典"], ["challenge", "挑戦・試練・課題"], ["characteristic", "特徴・特質"],
  ["charity", "慈善団体・思いやり"], ["citizen", "市民・国民"], ["climate", "気候"],
  ["community", "地域社会・共同体"], ["companion", "仲間・同行者"], ["condition", "状態・条件"],
  ["confidence", "自信・信頼"], ["consequence", "結果・影響"], ["consumer", "消費者"],
  ["continent", "大陸"], ["convenience", "便利さ・都合"], ["costume", "衣装・コスチューム"],
  ["creature", "生き物・動物"], ["crime", "犯罪"], ["crowd", "群衆・人混み"],
  ["culture", "文化・教養"], ["customer", "客・顧客"], ["decade", "10年間"],
  ["decision", "決断・決定"], ["degree", "程度・学位・度"], ["demand", "需要・要求"],
  ["destination", "目的地・行先"], ["detail", "詳細・細部"], ["device", "装置・機器"],
  ["direction", "方角・方向・指示"], ["disaster", "災害・惨事"], ["discount", "割引"],
  ["disease", "病気・疾患"], ["distance", "距離"], ["duty", "義務・職務"],
  ["economy", "経済・節約"], ["education", "教育"], ["effect", "効果・影響"],
  ["effort", "努力・奮闘"], ["electricity", "電気・電力"], ["emergency", "緊急事態・非常時"],

  // --- 準2級 頻出形容詞・副詞 (No.241 〜 No.280) ---
  ["accurate", "正確な・精密な"], ["active", "活発な・積極的な"], ["additional", "追加の・付加的な"],
  ["adequate", "十分な・適切な"], ["advanced", "進歩した・上級の"], ["ancient", "古代の・大昔の"],
  ["anxious", "心配して・切望して"], ["apparent", "明白な・一見〜らしい"], ["appropriate", "適切な・ふさわしい"],
  ["artificial", "人工の・不自然な"], ["attractive", "魅力的な"], ["automatic", "自動の"],
  ["available", "利用できる・入手可能な"], ["aware", "気づいている・知っている"], ["basic", "基本的な・初歩的な"],
  ["beneficial", "有益な・ためになる"], ["brilliant", "輝かしい・極めて優秀な"], ["calm", "穏やかな・落ち着いた"],
  ["casual", "気楽な・形式ばらない"], ["cautious", "用心深い・慎重な"], ["central", "中心の・主要な"],
  ["chemical", "化学の・化学物質"], ["classic", "古典的な・傑作の"], ["comfortable", "心地よい・快適な"],
  ["commercial", "商業の・営利目的の"], ["common", "共通の・一般的な"], ["competitive", "競争の激しい・競争力のある"],
  ["complex", "複雑な・複合の"], ["confident", "自信に満ちた・確信して"], ["conscious", "意識している・自覚して"],
  ["convenient", "便利な・都合の良い"], ["creative", "創造的な・独創的な"], ["critical", "極めて重要な・批判的な"],
  ["crucial", "決定的な・極めて重要な"], ["cultural", "文化的な"], ["curious", "好奇心の強い・奇妙な"],
  ["current", "現在の・流行の"], ["delicate", "繊細な・壊れやすい"], ["demanding", "過酷な・要求の厳しい"],
  ["desirable", "望ましい・魅力的な"],
  // --- 準2級 頻出動詞 Part 3 (No.281 〜 No.330) ---
  ["disappoint", "〜を失望させる・がっかりさせる"], ["distribute", "〜を分配する・配る"], ["disturb", "〜を邪魔する・妨げる"],
  ["dominate", "〜を支配する・優位に立つ"], ["earn", "〜を稼ぐ・獲得する"], ["educate", "〜を教育する"],
  ["employ", "〜を雇う・用いる"], ["enable", "〜を可能にする"], ["encounter", "〜に遭遇する・出くわす"],
  ["entertain", "〜を楽しませる・もてなす"], ["envy", "〜をうらやむ・嫉妬する"], ["escape", "逃げる・脱出する"],
  ["evaluate", "〜を評価する・査定する"], ["examine", "〜を調査する・診察する"], ["exhibit", "〜を展示する・示す"],
  ["expand", "拡大する・広げる"], ["experience", "〜を経験する・体験する"], ["expose", "〜をさらす・暴露する"],
  ["express", "〜を表現する・述べる"], ["fascinate", "〜を魅了する・夢中にさせる"], ["flee", "逃げる・避難する"],
  ["forgive", "〜を許す・勘弁する"], ["gain", "〜を得る・増やす"], ["govern", "〜を統治する・支配する"],
  ["guarantee", "〜を保証する・請け合う"], ["hesitate", "ためらう・躊躇する"], ["highlight", "〜を強調する・目立たせる"],
  ["illustrate", "〜を説明する・挿絵を入れる"], ["imitate", "〜の真似をする・模倣する"], ["implement", "〜を実行する・導入する"],
  ["imply", "〜をほのめかす・暗示する"], ["impress", "〜に感銘を与える・印象づける"], ["influence", "〜に影響を与える"],
  ["inform", "〜に知らせる・通知する"], ["inherit", "〜を受け継ぐ・相続する"], ["injure", "〜を傷つける・怪我をさせる"],
  ["insist", "〜を強く主張する・要求する"], ["inspire", "〜を鼓舞する・やる気にさせる"], ["interact", "交流する・相互に作用する"],
  ["investigate", "〜を調査する・究明する"], ["involve", "〜を巻き込む・含む"], ["judge", "〜を判断する・裁く"],
  ["justify", "〜を正当化する"], ["launch", "〜を開始する・発射する"], ["limit", "〜を制限する・限定する"],
  ["maintain", "〜を維持する・主張する"], ["manage", "どうにか〜し遂げる・管理する"], ["manufacture", "〜を製造する・生産する"],
  ["measure", "〜を測定する・測る"], ["motivate", "〜に動機を与える・やる気にさせる"],

  // --- 準2級 頻出名詞 Part 2 (No.331 〜 No.380) ---
  ["employee", "従業員・社員"], ["employer", "雇用者・雇い主"], ["employment", "雇用・職"],
  ["energy", "活力・エネルギー"], ["enterprise", "企業・事業"], ["enthusiasm", "熱意・情熱"],
  ["environment", "自然環境・周囲の状況"], ["equipment", "設備・用具・備品"], ["era", "時代・年代"],
  ["essential", "必須のもの・不可欠な要素"], ["establishment", "設立・施設・機関"], ["evidence", "証拠・根拠"],
  ["evolution", "進化・発展"], ["exception", "例外・除外"], ["excess", "過剰・超過"],
  ["exchange", "交換・為替・両替"], ["exhibition", "展示会・展覧会"], ["existence", "存在・生存"],
  ["expansion", "拡大・進出"], ["expectation", "期待・予想"], ["expense", "費用・出費・経費"],
  ["experience", "経験・体験"], ["expert", "専門家・熟練者"], ["explanation", "説明・解釈"],
  ["explosion", "爆発・急増"], ["facility", "施設・設備・機能"], ["factor", "要因・要素"],
  ["failure", "失敗・不作"], ["faith", "信頼・信用・信仰"], ["feature", "特徴・呼び物・顔立ち"],
  ["fee", "料金・謝礼・手数料"], ["figure", "数字・人物・体型・図"], ["finance", "財政・金融・資金"],
  ["flavor", "風味・味・味わい"], ["flight", "飛行・航空便・フライト"], ["flu", "インフルエンザ・流感"],
  ["focus", "焦点・重点"], ["folk", "人々・民族・民謡"], ["forecast", "予報・予測"],
  ["form", "形態・用紙・形式"], ["foundation", "基礎・土台・財団"], ["fraction", "わずか・断片・分数"],
  ["freedom", "自由・解放"], ["frequency", "頻度・周波数"], ["function", "機能・働き・役割"],
  ["furniture", "家具"], ["gap", "すき間・格差・隔たり"], ["gardener", "庭師・園芸家"],
  ["generation", "世代・同世代の人々"], ["gesture", "身振り・ジェスチャー・意思表示"],

  // --- 準2級 頻出形容詞・副詞 Part 2 (No.381 〜 No.440) ---
  ["disappointed", "失望した・がっかりした"], ["distinct", "明確な・独特の・はっきりした"], ["diverse", "多様な・種々の"],
  ["dramatic", "劇的な・めざましい・演劇の"], ["durable", "耐久性のある・丈夫な"], ["eager", "熱望して・しきりに〜したがる"],
  ["economic", "経済の・経済に関する"], ["effective", "効果的な・有効な"], ["efficient", "効率的な・能率的な"],
  ["elderly", "年配の・高齢の"], ["electronic", "電子の・電子機器の"], ["elementary", "初歩の・基本的な・小学校の"],
  ["eligible", "資格がある・適格な"], ["emotional", "感情的な・感情に関する"], ["endless", "終わりのない・無限の"],
  ["energetic", "精力的な・活気にあふれた"], ["enormous", "巨大な・莫大な"], ["entire", "全体の・すべての"],
  ["environmental", "環境の・環境保護の"], ["equal", "平等な・等しい"], ["essential", "不可欠な・極めて重要な"],
  ["eventual", "最終的な・結果としての"], ["evident", "明白な・明らかな"], ["exact", "正確な・ぴったりの"],
  ["exceptional", "並外れた・極めて優秀な"], ["excessive", "過度の・極端な"], ["exclusive", "独占的な・専用の・高級な"],
  ["exotic", "異国風の・魅力的な"], ["expensive", "高価な・費用のかかる"], ["experienced", "経験豊富な・熟練した"],
  ["explicit", "明確な・率直な"], ["expressive", "表現豊かな・感情を表す"], ["extensive", "広範囲に及ぶ・大規模な"],
  ["extra", "余分の・追加の"], ["extraordinary", "並外れた・異常な"], ["extreme", "極端な・過激な"],
  ["fair", "公平な・妥当な・かなりの"], ["familiar", "よく知られた・馴染みのある"], ["famous", "有名な・名高い"],
  ["fantastic", "素晴らしい・空想的な"], ["fascinating", "魅力的な・興味深い"], ["fatal", "致命的な・破滅的な"],
  ["favorable", "好意的な・有利な・好都合な"], ["fearful", "恐れている・心配して"], ["federal", "連邦の・連邦政府の"],
  ["female", "女性の・雌の"], ["fierce", "獰猛な・激しい・猛烈な"], ["financial", "財政の・金融の"],
  ["flexible", "柔軟な・融通の利く"], ["fluent", "流暢な・すらすら話せる"], ["formal", "公式の・正式な・形式ばった"],
  ["fortunate", "幸運な・幸せな"], ["frequent", "頻繁な・しばしば起きる"], ["frequently", "頻繁に・しばしば"],
  ["friendly", "親しみやすい・友好的な"], ["frightened", "怖がった・怯えた"], ["fundamental", "根本的な・基本的な"],
  ["furious", "激怒した・猛烈な"], ["general", "一般的な・全般的な"],
  // --- 準2級 頻出動詞・名詞・形容詞 Part 4 (No.441 〜 No.570) ---
  ["global", "世界的な・地球全体の"], ["gradual", "徐々の・緩やかな"], ["guilty", "有罪の・罪悪感のある"],
  ["harmful", "有害な・害を及ぼす"], ["harsh", "厳しい・過酷な"], ["healthy", "健康的な・健全な"],
  ["historic", "歴史的に重要な・歴史的な"], ["historical", "歴史に関する・史実の"], ["hollow", "空洞の・中空の"],
  ["hostile", "敵対的な・反感を持った"], ["huge", "巨大な・莫大な"], ["ideal", "理想的な・申し分のない"],
  ["identical", "同一の・まったく同じ"], ["ignorant", "無知な・知らない"], ["illegal", "違法の・不法な"],
  ["immediate", "即座の・直接の"], ["immense", "巨大な・計り知れない"], ["immune", "免疫のある・免除された"],
  ["impatient", "我慢できない・短気な"], ["impressive", "印象的な・感動的な"], ["incredible", "信じられない・素晴らしい"],
  ["independent", "独立した・自立した"], ["indifferent", "無関心な・冷淡な"], ["inevitable", "避けられない・必然的な"],
  ["infectious", "伝染性の・感染性の"], ["inferior", "劣っている・下位の"], ["infinite", "無限の・無数の"],
  ["influential", "影響力のある・有力な"], ["informal", "非公式の・略式の・気さくな"], ["initial", "最初の・初期の"],
  ["innocent", "無罪の・無邪気な"], ["innovative", "革新的な・刷新的な"], ["instant", "即時の・瞬時の"],
  ["intellectual", "知的な・知識人の"], ["intelligent", "知能の高い・賢い"], ["intense", "強烈な・激しい"],
  ["internal", "内部の・国内の"], ["international", "国際的な・世界的な"], ["invisible", "目に見えない・不可視の"],
  ["isolate", "〜を孤立させる・分離する"], ["keen", "熱心な・鋭い・鋭利な"], ["latest", "最新の・最近の"],
  ["legendary", "伝説の・名高い"], ["logical", "論理的な・筋の通った"], ["loyal", "忠実な・誠実な"],
  ["magnificent", "壮大な・素晴らしい"], ["major", "主要な・重大な"], ["mandatory", "義務的な・強制の"],
  ["marvelous", "驚くべき・素晴らしい"], ["massive", "巨大な・大量の"], ["mature", "成熟した・大人の"],
  ["maximum", "最大の・最高限度の"], ["mental", "精神の・知能の"], ["mere", "単なる・ほんの"],
  ["minimum", "最小の・最低限度の"], ["minor", "少数の・重要でない"], ["miserable", "惨めな・不幸な"],
  ["modest", "謙虚な・控えめな"], ["moist", "湿った・潤いのある"], ["moral", "道徳的な・倫理の"],
  ["multiple", "多様な・多数の"], ["mutual", "相互の・共通の"], ["mysterious", "神秘的な・不可解な"],
  ["native", "母国の・出身の・自生の"], ["natural", "自然の・当然の"], ["neat", "きちんとした・小奇麗な"],
  ["negative", "否定的な・消極的な"], ["neutral", "中立の・公平な"], ["noble", "高潔な・貴族の"],
  ["normal", "標準の・通常の"], ["notable", "注目すべき・著名な"], ["noticeable", "目立つ・顕著な"],
  ["novel", "斬新な・新奇な"], ["nuclear", "核の・原子力の"], ["numerous", "多数の・無数の"],
  ["objective", "客観的な・公平な"], ["obvious", "明白な・明らかな"], ["occasional", "時折の・たまの"],
  ["official", "公式の・公の"], ["ongoing", "進行中の・継続している"], ["optimistic", "楽観的な・前向きな"],
  ["ordinary", "普通の・平凡な"], ["original", "独創的な・元の・最初の"], ["outstanding", "傑出した・目立った"],
  ["overall", "全体的な・総合的な"], ["overseas", "海外の・外国への"], ["painful", "痛みを伴う・つらい"],
  ["partial", "部分的な・不完全な"], ["particular", "特定の・こだわりのある"], ["passion", "情熱・熱中"],
  ["patient", "忍耐強い・我慢強い"], ["peculiar", "独特の・風変わりな"], ["permanent", "永続的な・恒久の"],
  ["personal", "個人の・個人的な"], ["physical", "身体の・物質的な・物理の"], ["pleasant", "心地よい・楽しい"],
  ["plentiful", "豊富な・十分な"], ["polite", "礼儀正しい・丁寧な"], ["political", "政治の・政治的な"],
  ["popular", "人気のある・大衆的な"], ["positive", "前向きな・肯定的な"], ["potential", "潜在的な・可能性のある"],
  ["practical", "実用的な・現実的な"], ["precious", "貴重な・高価な"], ["precise", "正確な・精密な"],
  ["predictable", "予測可能な"], ["preferable", "好ましい・より望ましい"], ["pregnant", "妊娠している"],
  ["preliminary", "予備の・事前の"], ["premium", "高級な・割増の"], ["present", "現在の・出席している"],
  ["presidential", "大統領の"], ["previous", "以前の・前の"], ["primary", "主要な・初等の"],
  ["primitive", "原始的な・初期の"], ["principal", "主要な・第一の"], ["prior", "事前の・先の"],
  ["private", "私的な・個人の・秘密の"], ["probable", "十分にありそうな・確実な"], ["productive", "生産的な・実り多い"],
  ["professional", "専門職の・プロの"], ["profitable", "利益になる・有益な"], ["profound", "深い・深遠な"],
  ["prominent", "卓越した・目立つ"], ["promising", "前途有望な・見込みのある"], ["prompt", "迅速な・即座の"],
  ["proper", "適切な・ふさわしい"], ["protective", "保護する・防御の"], ["proud", "誇りに思う・高慢な"],
  ["pure", "純粋な・清潔な"], ["qualified", "資格のある・適任の"], ["rapid", "急速な・速い"],
  ["rare", "珍しい・まれな"], ["rational", "合理的な・理性的な"], ["raw", "生の・加工されていない"],
  ["realistic", "現実的な・実際的な"], ["reasonable", "妥当な・手頃な・道理にかなった"], ["recent", "最近の・近頃の"],

  // --- 準2級 頻出名詞・社会・自然・科学 Part 5 (No.571 〜 No.700) ---
  ["growth", "成長・発展・増加"], ["habitat", "生息地・生息環境"], ["habit", "習慣・癖"],
  ["heritage", "遺産・継承物"], ["hierarchy", "階層制・ヒエラルキー"], ["horizon", "地平線・視野"],
  ["household", "家庭・世帯"], ["humanity", "人類・人間性・慈悲"], ["hygiene", "衛生・清潔"],
  ["identity", "身元・個性・アイデンティティ"], ["illness", "病気・疾患"], ["illusion", "幻想・錯覚"],
  ["immigration", "移住・入国審査"], ["impact", "影響・衝撃"], ["import", "輸入・輸入品"],
  ["impression", "印象・感想"], ["improvement", "改善・向上"], ["incident", "出来事・事件"],
  ["income", "収入・所得"], ["independence", "独立・自立"], ["industry", "産業・工業・勤勉"],
  ["infection", "感染・伝染病"], ["inflation", "インフレ・物価高騰"], ["ingredient", "材料・成分"],
  ["initiative", "主導権・構想・自発性"], ["injustice", "不正・不当・不公平"], ["injury", "負傷・怪我"],
  ["insight", "洞察力・見識"], ["instance", "例・実例"], ["instinct", "本能・直感"],
  ["institution", "機関・施設・制度"], ["instruction", "指示・教育・説明書"], ["instrument", "器具・楽器・道具"],
  ["insurance", "保険・保護"], ["intellect", "知性・知力"], ["intelligence", "知能・情報"],
  ["intention", "意図・意向・目的"], ["interaction", "相互作用・交流"], ["interior", "内部・室内・内陸"],
  ["interpretation", "通訳・解釈・説明"], ["interruption", "中断・邪魔・妨害"], ["interview", "面接・取材"],
  ["introduction", "導入・紹介・序文"], ["invention", "発明・発明品"], ["investigation", "調査・研究・捜査"],
  ["invitation", "招待・招待状"], ["issue", "問題・論点・発行物"], ["item", "品目・項目・記事"],
  ["journey", "旅行・旅程・道程"], ["judgment", "判断・裁判・判決"], ["justice", "正義・公正・裁判"],
  ["knowledge", "知識・理解"], ["laboratory", "研究所・実験室"], ["landscape", "風景・景観"],
  ["language", "言語・言葉"], ["lawyer", "弁護士・法律家"], ["leadership", "指導力・統率力"],
  ["lecture", "講義・講演"], ["legend", "伝説・偉人"], ["legislation", "法律・立法"],
  ["liberty", "自由・解放"], ["lifestyle", "生き方・生活様式"], ["limitation", "制限・限度"],
  ["literature", "文学・文献"], ["location", "位置・場所・立地"], ["luggage", "手荷物・スーツケース"],
  ["luxury", "贅沢・豪華さ・贅沢品"], ["majority", "大多数・過半数"], ["management", "経営・管理・経営陣"],
  ["manner", "方法・態度・礼儀作法"], ["manufacture", "製造・生産・製品"], ["manuscript", "原稿・手書き文書"],
  ["material", "原料・材料・資料"], ["mayor", "市長・町長"], ["measurement", "測定・寸法・測量"],
  ["media", "報道機関・メディア"], ["melody", "旋律・メロディー"], ["membership", "会員資格・メンバー数"],
  ["memory", "記憶・思い出"], ["merchant", "商人・貿易商"], ["mercy", "慈悲・情け・恩恵"],
  ["merit", "長所・利点・功績"], ["method", "方法・方式・手順"], ["migration", "移住・渡り・移動"],
  ["minority", "少数派・少数民族"], ["miracle", "奇跡・驚異"], ["mission", "使命・任務・使節団"],
  ["mixture", "混合物・調合物"], ["moisture", "湿気・水分・水蒸気"], ["monument", "記念碑・遺跡"],
  ["motivation", "動機づけ・やる気"], ["movement", "運動・動き・活動"], ["muscle", "筋肉・腕力"],
  ["museum", "博物館・美術館"], ["mystery", "謎・神秘・不可解なこと"], ["nation", "国家・国民"],
  ["navigation", "航海・航空・ナビゲーション"], ["necessity", "必需品・必要性"], ["neighborhood", "近所・地域・界隈"],
  ["network", "網・ネットワーク・人脈"], ["novel", "小説"], ["nutrition", "栄養・栄養摂取"],
  ["obstacle", "障害・邪魔・障害物"], ["occasion", "機会・場合・行事"], ["occupation", "職業・占領"],
  ["odor", "におい・香り・悪臭"], ["officer", "将校・役員・警察官"], ["opportunity", "機会・好機・チャンス"],
  ["opposition", "反対・対立・野党"], ["option", "選択肢・選択権"], ["organism", "生物・有機体"],
  ["origin", "起源・生まれ・発祥"], ["outcome", "結果・成果"], ["output", "生産高・出力・排出量"],
  ["ownership", "所有権・所有者であること"], ["package", "小包・包装・パッケージ"], ["palace", "宮殿・大邸宅"],
  ["panic", "パニック・大混乱"], ["paragraph", "段落・パラグラフ"], ["parliament", "議会・国会"],
  ["participant", "参加者・関係者"], ["passage", "通路・一節・経過"], ["passenger", "乗客・旅客"],
  ["passion", "情熱・激しい感情"], ["patient", "患者・病人"], ["pattern", "模様・型・パターン"],
  ["pavement", "舗道・歩道"], ["penalty", "罰則・ペナルティー・刑罰"], ["perception", "知覚・認識・見解"],
  ["performance", "公演・実績・性能"], ["permission", "許可・認可・同意"], ["personality", "個性・性格・人柄"],
  ["perspective", "観点・展望・遠近法"], ["phenomenon", "現象・驚異的な人物"], ["philosophy", "哲学・人生観"],
  ["pollution", "汚染・公害"], ["population", "人口・全住民"], ["portion", "一部分・分け前・一人前"],
  ["position", "位置・立場・職位"], ["possibility", "可能性・見込み"], ["poverty", "貧困・欠乏"],
  ["practice", "練習・実行・慣習"], ["precaution", "予防策・用心・警戒"], ["predator", "捕食動物・略奪者"],
  ["prejudice", "偏見・先入観"], ["presence", "存在・出席・影響力"], ["preservation", "保存・保護・維持"],
  ["pressure", "圧力・重圧・プレッシャー"], ["prestige", "名声・威信・名誉"], ["prevention", "予防・防止・阻止"],
  ["principle", "原理・原則・信条"], ["priority", "優先事項・優先権"], ["privacy", "プライバシー・私生活"],
  ["procedure", "手続き・手順・処置"], ["profession", "専門職・職業"], ["professor", "教授"],
  ["project", "計画・事業・プロジェクト"], ["promotion", "昇進・促進・販売促進"], ["property", "財産・所有物・特性"],
  ["proportion", "割合・比率・均整"], ["proposal", "提案・企画・プロポーズ"], ["prospect", "見通し・展望・可能性"],
  ["protection", "保護・防御・保護貿易"], ["protein", "タンパク質"], ["psychology", "心理学・心理状態"],
  ["publication", "出版・発行・刊行物"], ["purpose", "目的・意図・用途"], ["qualification", "資格・条件・適性"],
  ["quantity", "量・分量・数量"], ["questionnaire", "アンケート調査・質問票"], ["radiation", "放射線・放射・発散"],
  ["range", "範囲・限界・山脈"], ["reaction", "反応・反発・反射"], ["reality", "現実・真実・実態"],
  ["recession", "不況・景気後退"], ["recipe", "調理法・レシピ・秘訣"], ["recognition", "認識・承認・表彰"],
  ["recommendation", "推薦・推薦状・忠告"], ["recovery", "回復・復旧・回収"], ["reduction", "削減・減少・割引"],
  ["reference", "言及・参照・推薦人"], ["reflection", "反射・反映・熟考"], ["reform", "改革・改善・改正"],
  ["refund", "払い戻し・返金"], ["region", "地域・地方・行政区"], ["regulation", "規則・規制・調整"],
  ["relationship", "関係・関連・結びつき"], ["relative", "親戚・親類"], ["religion", "宗教・信仰"],
  ["requirement", "必要条件・要件"], ["rescue", "救助・救出・救援"], ["research", "研究・調査"],
  ["resident", "居住者・住民"], ["resource", "資源・財源・資質"], ["respect", "尊敬・敬意・尊重"],
  ["response", "応答・反応・返答"], ["responsibility", "責任・責務"], ["restriction", "制限・制約・規制"],
  ["reward", "報酬・報奨金・ご褒美"], ["ritual", "儀式・習慣的行為"], ["routine", "決まり切った仕事・日課"],
  ["ruin", "破滅・廃墟・荒廃"], ["rumor", "噂・風聞"], ["sacrifice", "犠牲・いけにえ"],
  ["safety", "安全・無事・安全装置"], ["salary", "給料・月給"], ["sample", "見本・標本・サンプル"],
  ["satisfaction", "満足・充足・達成感"], ["scale", "規模・尺度・体重計"], ["scenario", "筋書き・想定シナリオ"],
  ["scent", "香り・におい・気配"], ["schedule", "予定表・スケジュール"], ["scholar", "学者・知識人"],
  ["scholarship", "奨学金・学識"], ["score", "得点・スコア・楽譜"], ["security", "安全・警備・防犯"],
  ["sensation", "感覚・知覚・大評判"], ["sentiment", "感情・心情・意見"], ["session", "会期・会議・期間"],
  ["shelter", "避難所・保護施設"], ["shortage", "不足・欠乏"], ["signature", "署名・サイン"],
  ["significance", "重要性・意義・重大さ"], ["similarity", "類似・似ている点"], ["site", "敷地・場所・遺跡"],
  ["situation", "状況・事態・立場"], ["skeleton", "骨格・骨・概略"], ["skyscraper", "超高層ビル・摩天楼"],
  ["society", "社会・共同体・社交界"], ["solution", "解決策・解答・溶解液"], ["species", "生物の種・種類"],
  ["specification", "仕様書・明細・規格"], ["specimen", "標本・見本・検体"], ["sphere", "球体・天体・活動分野"],
  ["spirit", "精神・魂・意気込み"], ["stability", "安定・安定性・堅実さ"], ["stadium", "競技場・スタジアム"],
  ["standard", "基準・標準・水準"], ["status", "地位・身分・状況"], ["stimulus", "刺激・動機・励み"],
  ["strategy", "戦略・方策・策略"], ["stress", "緊張・ストレス・強調"], ["structure", "構造・建造物・組織"],
  ["struggle", "闘争・苦闘・もがき"], ["substance", "物質・実体・中身"], ["substitute", "代用品・代理人"],
  ["suburb", "郊外・住宅街"], ["success", "成功・成果・成功者"], ["summary", "要約・概要・総括"],
  ["surface", "表面・外見・水面"], ["surgery", "手術・外科"], ["surplus", "余剰・黒字・過剰分"],
  ["survey", "調査・見渡し・測量"], ["survival", "生存・生き残ること"], ["suspect", "容疑者・被疑者"],
  ["symptom", "症状・兆候・兆し"], ["system", "組織・体系・制度・システム"], ["target", "目標・標的・ターゲット"],
  ["task", "任務・職務・課題"], ["technician", "専門技術者・技師"], ["technique", "技術・技巧・手法"],
  ["technology", "科学技術・テクノロジー"], ["tendency", "傾向・偏り・風潮"], ["tension", "緊張・張り・緊迫感"],
  ["terminal", "終着駅・ターミナル"], ["territory", "領土・縄張り・分野"], ["theater", "劇場・映画館"],
  ["theme", "主題・テーマ・題目"], ["theory", "理論・学説・原理"], ["thermometer", "温度計・体温計"],
  ["threat", "脅威・脅迫・兆候"], ["tide", "潮・潮の満ち引き・潮流"], ["tissue", "ティッシュ・生体組織"],
  ["tolerance", "寛容・忍耐・耐性"], ["tomb", "墓・墓碑"], ["topic", "話題・トピック・論点"],
  ["tourism", "観光事業・旅行業"], ["tournament", "勝ち抜き試合・大会"], ["trace", "痕跡・形跡・わずかな量"],
  ["track", "小道・走路・線路・足跡"], ["tradition", "伝統・慣習・しきたり"], ["tragedy", "悲劇・惨事・悲惨な出来事"],
  ["trail", "小道・山道・足跡"], ["trait", "特徴・特質・習性"], ["transition", "移り変わり・過渡期・移行"],
  ["transmission", "送信・伝達・伝染"], ["transport", "輸送・交通機関・運送"], ["treatment", "治療・手当て・待遇"],
  ["treaty", "条約・協定"], ["trend", "傾向・流行・トレンド"], ["trial", "試み・裁判・試練"],
  ["trigger", "引き金・誘因・きっかけ"], ["troop", "軍隊・部隊・群れ"], ["trophy", "優勝記念品・トロフィー"],
  ["twilight", "薄明かり・黄昏・夕暮れ"], ["uncertainty", "不確実さ・不安定・半信半疑"], ["universe", "全宇宙・森羅万象"],
  ["update", "最新情報・更新・アップデート"], ["utility", "公共料金・公益事業・実用性"], ["vaccine", "ワクチン"],
  ["validity", "妥当性・有効性・正当さ"], ["valley", "谷・渓谷・盆地"], ["variety", "多様性・変化・種類"],
  ["vegetation", "植生・植物群落"], ["vehicle", "乗り物・車両・手段"], ["vendor", "露天商・販売業者"],
  ["venture", "冒険的事業・ベンチャー"], ["venue", "開催地・会場"], ["verdict", "評決・判断・決定"],
  ["version", "版・バージョン・説明"], ["vessel", "船舶・容器・血管"], ["victim", "犠牲者・被害者・被災者"],
  ["victory", "勝利・克服・大成功"], ["village", "村・村落"], ["violence", "暴力・猛威・激しさ"],
  ["virtue", "美徳・長所・効能"], ["virus", "ウイルス・病原体"], ["visibility", "視界・可視性・目に見えること"],
  ["vision", "視力・先見の明・幻影"], ["visitor", "訪問者・来客・観光客"], ["volunteer", "志願者・ボランティア"],
  ["voyage", "航海・船旅・宇宙旅行"], ["wage", "賃金・時給・給料"], ["warning", "警告・警報・前兆"],
  ["waste", "浪費・ごみ・廃棄物"], ["wealth", "富・財産・豊富さ"], ["weapon", "武器・兵器・手段"],
  ["welfare", "福祉・幸福・生活保護"], ["wildlife", "野生生物・野生動物"], ["wisdom", "知恵・賢さ・名言"],
  ["witness", "目撃者・証人・証拠"], ["wound", "傷・負傷・心の傷"], ["yield", "産出量・収穫・利回り"],
  ["zone", "区域・地帯・ゾーン"]
];
// ==================== 5. 準2級 頻出文法・語法 (No.1 〜 No.50) ====================
const RAW_GRAMMAR_DATA = [
  // --- 仮定法・助動詞の発展 (No.1 〜 No.10) ---
  {
    q: "If I ( ) enough money, I would travel around the world.",
    sub: "【訳】もし十分なお金があれば、世界中を旅するのに。",
    opt: ["have", "had", "will have", "having"],
    ans: 1,
    exp: "現在の事実と異なる仮定を表す「仮定法過去」です。if節の動詞は過去形 had にします。"
  },
  {
    q: "If she ( ) here now, she could help us with this project.",
    sub: "【訳】もし彼女が今ここにいれば、この課題を手伝ってくれるのに。",
    opt: ["is", "were", "will be", "has been"],
    ans: 1,
    exp: "仮定法過去の be動詞は、主語が三人称単数であっても原則 were を用います。"
  },
  {
    q: "I wish I ( ) speak French as fluently as my teacher.",
    sub: "【訳】先生と同じくらい流暢にフランス語が話せたらいいのに。",
    opt: ["can", "could", "will", "may"],
    ans: 1,
    exp: "〈I wish ＋ 仮定法過去〉で「〜できたらいいのに（現在の願望）」を表します。can の過去形 could が正解です。"
  },
  {
    q: "You ( ) better see a doctor before your cold gets worse.",
    sub: "【訳】風邪が悪化する前に、医者に診てもらったほうがいいですよ。",
    opt: ["had", "would", "should", "did"],
    ans: 0,
    exp: "〈had better ＋ 動詞の原形〉で「〜したほうがよい（強い忠告）」を表します。"
  },
  {
    q: "I would rather ( ) at home than go out in this stormy weather.",
    sub: "【訳】この嵐の中外出するくらいなら、むしろ家にいたいです。",
    opt: ["stay", "stayed", "staying", "to stay"],
    ans: 0,
    exp: "〈would rather ＋ 動詞の原形 than ...〉で「…するよりむしろ〜したい」を表します。"
  },
  {
    q: "You ( ) have checked the train schedule before leaving the house.",
    sub: "【訳】家を出る前に電車の時刻表を確認しておくべきでしたね。",
    opt: ["should", "must", "may", "will"],
    ans: 0,
    exp: "〈should have ＋ 過去分詞〉で「〜すべきだったのに（過去の不履行への後悔・非難）」を表します。"
  },
  {
    q: "She ( ) have forgotten about our meeting because she is always punctual.",
    sub: "【訳】彼女はいつも時間に正確なので、約束を忘れてしまったに違いありません。",
    opt: ["must", "should", "can", "would"],
    ans: 0,
    exp: "〈must have ＋ 過去分詞〉で「〜したに違いない（過去の確信）」を表します。"
  },
  {
    q: "He ( ) have missed the last bus; otherwise, he would be here by now.",
    sub: "【訳】彼は最終バスに乗り遅れたのかもしれません。そうでなければ今頃ここに着いているはずです。",
    opt: ["may", "must", "should", "shall"],
    ans: 0,
    exp: "〈may [might] have ＋ 過去分詞〉で「〜したかもしれない（過去の推量）」を表します。"
  },
  {
    q: "My grandfather ( ) to take a walk along the river every morning.",
    sub: "【訳】私の祖父はかつて毎朝川沿いを散歩したものでした。",
    opt: ["used", "is used", "was using", "uses"],
    ans: 0,
    exp: "〈used to ＋ 動詞の原形〉で「かつては〜したものだった（過去の習慣）」を表します。"
  },
  {
    q: "You don't ( ) to finish all the tasks today.",
    sub: "【訳】今日すべての課題を終わらせる必要はありません。",
    opt: ["need", "have", "must", "should"],
    ans: 1,
    exp: "〈don't have to ＋ 動詞の原形〉で「〜する必要はない（不必要）」を表します。"
  },

  // --- 不定詞・動名詞・分詞の発展 (No.11 〜 No.25) ---
  {
    q: "This luggage is ( ) heavy for the little girl to carry alone.",
    sub: "【訳】この荷物は小さなお弁当少女が一人で運ぶには重すぎます。",
    opt: ["so", "too", "very", "much"],
    ans: 1,
    exp: "〈too ＋ 形容詞 ＋ for 人 ＋ to ＋ 原形〉で「人が〜するには…すぎる」を表します。"
  },
  {
    q: "He was kind ( ) to show me the way to the city hall.",
    sub: "【訳】彼は親切にも市役所への道を教えてくれました。",
    opt: ["enough", "too", "so", "as"],
    ans: 0,
    exp: "〈形容詞 ＋ enough ＋ to ＋ 原形〉で「〜するほど十分に…」を表します。"
  },
  {
    q: "She turned on the subtitles in ( ) to understand the English film better.",
    sub: "【訳】彼女はその英語映画をよりよく理解するために字幕をつけました。",
    opt: ["case", "order", "fact", "terms"],
    ans: 1,
    exp: "〈in order to ＋ 動詞の原形〉で「〜するために（目的）」を表します。"
  },
  {
    q: "My teacher encouraged me ( ) apply for the speech contest.",
    sub: "【訳】先生は私にスピーチコンテストに応募するよう励ましてくれました。",
    opt: ["to", "for", "with", "at"],
    ans: 0,
    exp: "〈encourage ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜するよう促す・励ます」を表します。"
  },
  {
    q: "The doctor advised him ( ) eat too much fast food.",
    sub: "【訳】医師は彼にファストフードを食べ過ぎないよう忠告しました。",
    opt: ["not to", "to not", "don't", "no to"],
    ans: 0,
    exp: "不定詞の否定形は to の直前に not を置き、〈not to ＋ 動詞の原形〉にします。"
  },
  {
    q: "We are all looking forward to ( ) you at the cultural festival.",
    sub: "【訳】私たちは文化祭であなたにお会いできるのをみんな楽しみにしています。",
    opt: ["see", "saw", "seeing", "seen"],
    ans: 2,
    exp: "熟語 look forward to の to は前置詞なので、後ろには動名詞 seeing が続きます。"
  },
  {
    q: "She is not used to ( ) in front of such a large audience.",
    sub: "【訳】彼女はそれほど大勢の聴衆の前で話すことに慣れていません。",
    opt: ["speak", "spoke", "speaking", "spoken"],
    ans: 2,
    exp: "〈be used to ＋ 動名詞〉で「〜することに慣れている」を表します。"
  },
  {
    q: "He spent three hours ( ) for the math examination yesterday.",
    sub: "【訳】彼は昨日、数学の試験勉強に3時間を費やしました。",
    opt: ["study", "studied", "studying", "to study"],
    ans: 2,
    exp: "〈spend ＋ 時間 ＋ 動名詞（〜ing）〉で「〜して時間を過ごす」を表します。"
  },
  {
    q: "I cannot help ( ) sorry for the lost kitten.",
    sub: "【訳】私はその迷子の子猫を気の毒に思わずにはいられません。",
    opt: ["feel", "felt", "feeling", "to feel"],
    ans: 2,
    exp: "〈cannot help ＋ 動名詞（〜ing）〉で「〜せずにはいられない」を表す重要構文です。"
  },
  {
    q: "It is no use ( ) over what has already happened.",
    sub: "【訳】すでに起きてしまったことを悔やんでも無駄です。",
    opt: ["cry", "cried", "crying", "to cry"],
    ans: 2,
    exp: "〈It is no use ＋ 動名詞（〜ing）〉で「〜しても無駄である」を表します。"
  },
  {
    q: "The girl ( ) over there near the library entrance is my cousin.",
    sub: "【訳】あそこの図書館の入り口近くに立っている女の子は私のいとこです。",
    opt: ["stand", "stands", "standing", "stood"],
    ans: 2,
    exp: "名詞 The girl を後ろから能動の意味で修飾するため、現在分詞 standing が正解です。"
  },
  {
    q: "Most of the products ( ) in this factory are exported to Asian countries.",
    sub: "【訳】この工場で製造されている製品のほとんどはアジア諸国へ輸出されます。",
    opt: ["make", "making", "made", "makes"],
    ans: 2,
    exp: "名詞 the products を後ろから受動の意味で修飾するため、過去分詞 made が正解です。"
  },
  {
    q: "( ) from the top of the mountain, the lake looked like a blue sapphire.",
    sub: "【訳】山頂から見ると、その湖は青いサファイアのように見えました。",
    opt: ["See", "Seeing", "Seen", "Saw"],
    ans: 2,
    exp: "湖が「見られる」という受動の関係を表す分詞構文のため、過去分詞 Seen が正解です。"
  },
  {
    q: "( ) all his homework, Ken went out to play tennis.",
    sub: "【訳】宿題をすべて終えたので、ケンはテニスをしに外出しました。",
    opt: ["Finish", "Finishing", "Finished", "Having finished"],
    ans: 3,
    exp: "主節の時制（went out）よりも前に完了したことを表す完了分詞構文 Having finished です。"
  },
  {
    q: "She sat on the sofa with her eyes ( ).",
    sub: "【訳】彼女は目を閉じたままソファに座っていました。",
    opt: ["close", "closed", "closing", "to close"],
    ans: 1,
    exp: "〈with ＋ 名詞 ＋ 過去分詞〉で「名詞を〜された状態で（付帯状況）」を表します。"
  },

  // --- 関係詞・接続詞の発展 (No.26 〜 No.40) ---
  {
    q: "The scientist ( ) discovered the new medicine won an international prize.",
    sub: "【訳】その新薬を発見した科学者は国際的な賞を受賞しました。",
    opt: ["who", "which", "whose", "whom"],
    ans: 0,
    exp: "先行詞が「人（The scientist）」で関係代名詞節の主語となるため、主格の who が正解です。"
  },
  {
    q: "I met a woman ( ) daughter is a professional violinist.",
    sub: "【訳】私は娘さんがプロのバイオリニストである女性に出会いました。",
    opt: ["who", "which", "whose", "whom"],
    ans: 2,
    exp: "「その女性の娘」という所有の関係を表すため、所有格の関係代名詞 whose が正解です。"
  },
  {
    q: "This is the laboratory ( ) my brother conducts his chemical experiments.",
    sub: "【訳】ここは私の兄（弟）が化学実験を行っている研究所です。",
    opt: ["which", "where", "when", "why"],
    ans: 1,
    exp: "先行詞が場所（the laboratory）で、後ろに完全な文が続いているため、関係副詞 where が正解です。"
  },
  {
    q: "I will never forget the day ( ) we first met at the airport.",
    sub: "【訳】私は私たちが初めて空港で出会った日を決して忘れません。",
    opt: ["which", "where", "when", "why"],
    ans: 2,
    exp: "先行詞が時（the day）を表しているため、関係副詞 when が正解です。"
  },
  {
    q: "Do you know the reason ( ) he was absent from the meeting?",
    sub: "【訳】彼がなぜ会議を欠席したのか、その理由を知っていますか？",
    opt: ["which", "where", "when", "why"],
    ans: 3,
    exp: "先行詞 the reason（理由）に対応する関係副詞 why が正解です。"
  },
  {
    q: "The hotel at ( ) we stayed during the trip was very clean and comfortable.",
    sub: "【訳】私たちが旅行中に滞在したホテルはとても清潔で快適でした。",
    opt: ["which", "that", "where", "what"],
    ans: 0,
    exp: "前置詞（at）の直後には that は置けないため、which を用いて at which とします。"
  },
  {
    q: "( ) it rained heavily throughout the day, the sports event was held as planned.",
    sub: "【訳】一日中激しい雨が降ったにもかかわらず、スポーツ大会は予定通り開催されました。",
    opt: ["Although", "Because", "Unless", "Since"],
    ans: 0,
    exp: "逆接の接続詞 Although（〜だけれども）が文意に合致します。"
  },
  {
    q: "You will not improve your English skills ( ) you practice speaking regularly.",
    sub: "【訳】定期的に話す練習をしなければ、英語力は上達しないでしょう。",
    opt: ["if", "unless", "since", "while"],
    ans: 1,
    exp: "〈unless 〜〉で「〜しない限りは（条件の否定）」を表します。"
  },
  {
    q: "Please keep quiet ( ) the professor is giving the lecture.",
    sub: "【訳】教授が講義をしている間は静かにしていてください。",
    opt: ["during", "while", "since", "until"],
    ans: 1,
    exp: "後ろに節（主語＋動詞）が続いているため、接続詞 while（〜する間）を用います。"
  },
  {
    q: "( ) the bad weather condition, the airplane arrived exactly on schedule.",
    sub: "【訳】悪天候にもかかわらず、その飛行機は時間通りぴったりに到着しました。",
    opt: ["Despite", "Although", "Because", "Unless"],
    ans: 0,
    exp: "後ろに名詞句（the bad weather condition）が続いているため、前置詞 Despite（〜にもかかわらず）を用います。"
  },
  {
    q: "He spoke clearly ( ) that everyone in the large hall could understand him.",
    sub: "【訳】大ホールの全員が理解できるように、彼ははっきりと話しました。",
    opt: ["so", "such", "in", "as"],
    ans: 0,
    exp: "〈so that ＋ 主語 ＋ 助動詞〉で「〜できるように（目的）」を表します。"
  },
  {
    q: "The story was ( ) exciting that I couldn't put the book down until midnight.",
    sub: "【訳】その物語はとてもワクワクするものだったので、私は真夜中まで本を置けませんでした。",
    opt: ["so", "such", "too", "very"],
    ans: 0,
    exp: "〈so ＋ 形容詞 ＋ that 節〉で「とても〜なので…だ」を表します。"
  },
  {
    q: "It was ( ) a lovely day that we decided to go for a picnic in the park.",
    sub: "【訳】とても素晴らしい日だったので、私たちは公園にピクニックに行くことにしました。",
    opt: ["so", "such", "too", "quite"],
    ans: 1,
    exp: "〈such ＋ a ＋ 形容詞 ＋ 名詞 ＋ that 節〉で「非常に…な〜なので」を表します。"
  },
  {
    q: "You can choose ( ) coffee or tea after the meal.",
    sub: "【訳】食後にコーヒーか紅茶のどちらかをお選びいただけます。",
    opt: ["both", "either", "neither", "not"],
    ans: 1,
    exp: "〈either A or B〉で「AかBのどちらか一方」を表します。"
  },
  {
    q: "( ) Tom nor Jerry was able to solve the difficult math problem.",
    sub: "【訳】トムもジェリーもその難しい数学の問題を解くことができませんでした。",
    opt: ["Either", "Neither", "Both", "Not"],
    ans: 1,
    exp: "〈Neither A nor B〉で「AもBも〜ない（両者否定）」を表します。"
  },

  // --- 使役・知覚・時制の一致・受動態 (No.41 〜 No.50) ---
  {
    q: "The funny comedian made all the audience ( ) loudly.",
    sub: "【訳】その面白いコメディアンは観客全員を大声で笑わせました。",
    opt: ["laugh", "laughed", "laughing", "to laugh"],
    ans: 0,
    exp: "使役動詞 make の後は〈人 ＋ 動詞の原形〉で「人に〜させる（強制・自然発生）」を表します。"
  },
  {
    q: "My mother let me ( ) video games after I finished my homework.",
    sub: "【訳】宿題を終わらせた後、母は私にテレビゲームをさせてくれました。",
    opt: ["play", "played", "playing", "to play"],
    ans: 0,
    exp: "使役動詞 let の後は〈人 ＋ 動詞の原形〉で「人に〜することを許す」を表します。"
  },
  {
    q: "I had the technician ( ) my broken computer yesterday.",
    sub: "【訳】昨日、専門の技術者に壊れたパソコンを修理してもらいました。",
    opt: ["repair", "repaired", "repairing", "to repair"],
    ans: 0,
    exp: "使役動詞 have の後は〈人（技術者）＋ 動詞の原形〉で「人に〜してもらう」を表します。"
  },
  {
    q: "I saw a strange man ( ) into the dark alley last night.",
    sub: "【訳】昨夜、見知らぬ男が暗い路地に入っていくのを見かけました。",
    opt: ["walk", "walked", "to walk", "walks"],
    ans: 0,
    exp: "知覚動詞 see の後は〈人 ＋ 動詞の原形 または 〜ing〉を用います。"
  },
  {
    q: "We could hear someone ( ) the piano in the music room.",
    sub: "【訳】音楽室で誰かがピアノを弾いているのが聞こえました。",
    opt: ["play", "played", "to play", "plays"],
    ans: 0,
    exp: "知覚動詞 hear の後は〈目的語 ＋ 原形 または 〜ing〉を用います。"
  },
  {
    q: "The heavy storm prevented the ship from ( ) the harbor.",
    sub: "【訳】猛烈な嵐のために、その船は港を出発することができませんでした。",
    opt: ["leave", "left", "leaving", "to leave"],
    ans: 2,
    exp: "〈prevent ＋ 目的語 ＋ from ＋ 動名詞（〜ing）〉で「〜のために…ができない」を表します。"
  },
  {
    q: "This old song always reminds me ( ) my elementary school days.",
    sub: "【訳】この懐かしい歌はいつも私に小学校時代を思い出させます。",
    opt: ["of", "to", "for", "with"],
    ans: 0,
    exp: "〈remind ＋ 人 ＋ of ＋ もの/思い出〉で「人に〜を思い出させる」を表します。"
  },
  {
    q: "The new bridge ( ) by the end of next year.",
    sub: "【訳】その新しい橋は来年の終わりまでに建設される予定です。",
    opt: ["will build", "will be built", "is built", "was built"],
    ans: 1,
    exp: "未来の受動態〈will be ＋ 過去分詞〉（〜される予定だ）の形になります。"
  },
  {
    q: "This ancient castle has been ( ) by millions of tourists since 2000.",
    sub: "【訳】この古代の城は2000年以来、何百万人もの観光客に訪れられています。",
    opt: ["visit", "visiting", "visited", "visits"],
    ans: 2,
    exp: "現在完了の受動態〈has been ＋ 過去分詞〉（〜され続けている）の形です。"
  },
  {
    q: "The ( ) you practice speaking, the more confident you will become.",
    sub: "【訳】話す練習をすればするほど、より自信が持てるようになりますよ。",
    opt: ["more", "most", "much", "many"],
    ans: 0,
    exp: "〈The ＋ 比較級 ..., the ＋ 比較級 〜〉で「…すればするほど、ますます〜になる」を表します。"
  },
  // --- 仮定法・倒置・強調・発展構文 (No.51 〜 No.65) ---
  {
    q: "If I ( ) your email address, I would have sent you the project file.",
    sub: "【訳】もしあなたのメールアドレスを知っていたら、企画書ファイルを送ったのに。",
    opt: ["know", "knew", "had known", "have known"],
    ans: 2,
    exp: "過去の事実に反する仮定を表す「仮定法過去完了」です。if節は〈had ＋ 過去分詞〉を用います。"
  },
  {
    q: "( ) water and air, no living creatures could survive on Earth.",
    sub: "【訳】水と空気がなければ、いかなる生物も地球上で生き残ることはできないでしょう。",
    opt: ["Without", "Except", "Unless", "Besides"],
    ans: 0,
    exp: "〈Without ＋ 名詞〉で「〜がなければ（仮定法）」を表します。"
  },
  {
    q: "She talks about Paris as if she ( ) there many times.",
    sub: "【訳】彼女はまるで何度もそこへ行ったことがあるかのようにパリについて話します。",
    opt: ["is", "were", "had been", "has been"],
    ans: 2,
    exp: "〈as if ＋ 仮定法過去完了〉で「まるで〜だったかのように（過去の事実と異なる様態）」を表します。"
  },
  {
    q: "It is high time you ( ) thinking seriously about your future career.",
    sub: "【訳】あなたは将来の進路について真剣に考え始めてもよい時間ですよ。",
    opt: ["start", "started", "starting", "to start"],
    ans: 1,
    exp: "〈It is high time ＋ 主語 ＋ 過去形〉で「当然〜する時間だ」を表す仮定法構文です。"
  },
  {
    q: "It was in the school library ( ) I found this valuable historic book.",
    sub: "【訳】私がこの貴重な歴史書を見つけたのは、学校の図書館でのことでした。",
    opt: ["which", "where", "that", "what"],
    ans: 2,
    exp: "強調構文〈It was ... that 〜〉で、副詞句 in the school library を強調しています。"
  },
  {
    q: "Little ( ) I imagine that we would meet again in New York.",
    sub: "【訳】ニューヨークで私たちが再会しようとは夢にも思っていませんでした。",
    opt: ["did", "do", "had", "was"],
    ans: 0,
    exp: "否定の副詞 Little が文頭に出ることで、疑問文の語順〈did ＋ 主語 ＋ 動詞の原形〉になる倒置構文です。"
  },
  {
    q: "Never ( ) I heard such a touching and beautiful musical performance.",
    sub: "【訳】これほど感動的で美しい演奏は今まで一度も聴いたことがありません。",
    opt: ["have", "did", "was", "had"],
    ans: 0,
    exp: "否定語 Never が文頭に出ることで、〈have ＋ 主語 ＋ 過去分詞〉の語順になる倒置です。"
  },
  {
    q: "The news ( ) our school choir won the gold medal surprised everyone.",
    sub: "【訳】私たちの学校の合唱部が金賞を受賞したという知らせは全員を驚かせました。",
    opt: ["which", "what", "that", "whose"],
    ans: 2,
    exp: "名詞 The news と同格の関係を結び「〜という知らせ」を表す接続詞 that です。"
  },
  {
    q: "Could you please tell me ( ) the nearest subway station is located?",
    sub: "【訳】最寄りの地下鉄の駅がどこにあるか教えていただけますか？",
    opt: ["where", "which", "what", "how"],
    ans: 0,
    exp: "間接疑問文では、疑問詞（where）の後は平叙文の語順〈主語 ＋ 動詞〉になります。"
  },
  {
    q: "What do you ( ) we should do to reduce plastic waste in our daily life?",
    sub: "【訳】日常生活のプラスチックごみを減らすために私たちは何をすべきだと思いますか？",
    opt: ["think", "know", "wonder", "suppose"],
    ans: 0,
    exp: "思考を表す動詞 think を用いた連鎖疑問文〈疑問詞 ＋ do you think ＋ 主語 ＋ 動詞〉です。"
  },
  {
    q: "My brother is two years ( ) to me, but he is in the same grade.",
    sub: "【訳】私の兄は私より2歳年上ですが、同じ学年です。",
    opt: ["older", "senior", "elder", "superior"],
    ans: 1,
    exp: "ラテン語由来の比較表現で、than ではなく前置詞 to を用いて〈senior to 〜〉（〜より年上）と表します。"
  },
  {
    q: "I prefer reading novels at home ( ) watching movies at the cinema.",
    sub: "【訳】私は映画館で映画を見るよりも、家で小説を読む方を好みます。",
    opt: ["than", "to", "from", "for"],
    ans: 1,
    exp: "〈prefer A to B〉で「BよりもAを好む」を表します（比較対象に to を用います）。"
  },
  {
    q: "She had ( ) more than five dollars left in her purse.",
    sub: "【訳】彼女の財布にはわずか5ドルしか残っていませんでした。",
    opt: ["no", "not", "any", "much"],
    ans: 0,
    exp: "〈no more than ＋ 数詞〉で「わずか〜しか（only）」を表します。"
  },
  {
    q: "He donated ( ) less than one million yen to the local animal shelter.",
    sub: "【訳】彼は地元の動物保護施設になんと100万円もの大金を寄付しました。",
    opt: ["no", "not", "any", "much"],
    ans: 0,
    exp: "〈no less than ＋ 数詞〉で「〜もの多くの（as much as）」を表します。"
  },
  {
    q: "Please send your application form to the office as soon as ( ).",
    sub: "【訳】できるだけ早く応募用紙を事務局へ送付してください。",
    opt: ["possible", "probable", "capable", "available"],
    ans: 0,
    exp: "〈as soon as possible〉で「できるだけ早く」を表す定番熟語です。"
  },

  // --- 準2級 必須動詞語法・熟語 (No.66 〜 No.80) ---
  {
    q: "The school provides all students ( ) free digital textbooks.",
    sub: "【訳】その学校はすべての生徒に無料のデジタル教科書を支給しています。",
    opt: ["with", "for", "to", "at"],
    ans: 0,
    exp: "〈provide A with B〉で「A（人・組織）にB（物）を供給・提供する」を表します。"
  },
  {
    q: "Heavy snow prevented the airplane ( ) taking off on time.",
    sub: "【訳】大雪のために、その飛行機は定刻通りに離陸することができませんでした。",
    opt: ["to", "from", "for", "with"],
    ans: 1,
    exp: "〈prevent A from 〜ing〉で「Aが〜するのを妨げる／〜のせいでAが…できない」を表します。"
  },
  {
    q: "Modern smartphones enable us ( ) access information from anywhere.",
    sub: "【訳】現代のスマートフォンは、私たちがどこからでも情報にアクセスすることを可能にします。",
    opt: ["to", "for", "in", "with"],
    ans: 0,
    exp: "〈enable A to ＋ 動詞の原形〉で「Aが〜することを可能にする」を表します。"
  },
  {
    q: "All the teachers congratulated Lisa ( ) passing the difficult exam.",
    sub: "【訳】先生方全員が、難関試験に合格したことでリサを祝福しました。",
    opt: ["on", "for", "with", "at"],
    ans: 0,
    exp: "〈congratulate A on B〉で「A（人）をB（事柄）のことで祝う」を表します。"
  },
  {
    q: "The masked robber robbed the bank ( ) a large amount of cash.",
    sub: "【訳】覆面をした強盗は銀行から多額の現金を奪い去りました。",
    opt: ["of", "from", "with", "off"],
    ans: 0,
    exp: "〈rob A of B〉で「A（人・場所）からB（金品）を奪う」を表します。"
  },
  {
    q: "This traditional melody always reminds me ( ) my hometown in the countryside.",
    sub: "【訳】この伝統的な旋律はいつも私に田舎の故郷を思い出させます。",
    opt: ["of", "about", "to", "for"],
    ans: 0,
    exp: "〈remind A of B〉で「AにBを思い出させる」を表します。"
  },
  {
    q: "Many international critics regard this animation film ( ) a masterpiece.",
    sub: "【訳】多くの国際的な批評家たちが、このアニメ映画を傑作とみなしています。",
    opt: ["as", "for", "to", "with"],
    ans: 0,
    exp: "〈regard A as B〉で「AをBとみなす・評価する」を表します。"
  },
  {
    q: "Whether we can achieve our goal depends ( ) our daily efforts.",
    sub: "【訳】私たちが目標を達成できるかどうかは、毎日の努力にかかっています。",
    opt: ["on", "in", "at", "to"],
    ans: 0,
    exp: "〈depend on 〜〉で「〜に依存する／〜次第である」を表します。"
  },
  {
    q: "Careless driving often results ( ) serious traffic accidents.",
    sub: "【訳】不注意な運転はしばしば重大な交通事故という結果をもたらします。",
    opt: ["in", "from", "at", "to"],
    ans: 0,
    exp: "〈result in 〜〉で「（結果として）〜をもたらす・〜に終わる」を表します。"
  },
  {
    q: "Consistent daily practice will eventually lead ( ) great success in the contest.",
    sub: "【訳】毎日の地道な練習は、最終的にコンテストでの大きな成功へとつながるでしょう。",
    opt: ["to", "in", "for", "at"],
    ans: 0,
    exp: "〈lead to 〜〉で「〜へとつながる・〜を引き起こす」を表します。"
  },
  {
    q: "The solar system consists ( ) the Sun and the planets orbiting around it.",
    sub: "【訳】太陽系は太陽とその周りを回る惑星で構成されています。",
    opt: ["of", "in", "from", "with"],
    ans: 0,
    exp: "〈consist of 〜〉で「〜から成り立っている・構成されている」を表します。"
  },
  {
    q: "Many elderly people in the community suffer ( ) chronic joint pain.",
    sub: "【訳】その地域の多くの高齢者が慢性的な関節痛に苦しんでいます。",
    opt: ["from", "with", "of", "by"],
    ans: 0,
    exp: "〈suffer from 〜〉で「〜（病気・苦痛など）で苦しむ」を表します。"
  },
  {
    q: "He sincerely apologized to the teacher ( ) being late for the rehearsal.",
    sub: "【訳】彼はリハーサルに遅刻したことについて先生に心から謝罪しました。",
    opt: ["for", "to", "with", "about"],
    ans: 0,
    exp: "〈apologize to 人 for 理由〉で「人に〜の理由で謝る」を表します。"
  },
  {
    q: "We should not take our safe and comfortable life for ( ).",
    sub: "【訳】私たちは安全で快適な生活を当然のことと思ってはなりません。",
    opt: ["granted", "sure", "certain", "true"],
    ans: 0,
    exp: "〈take 〜 for granted〉で「〜を当たり前のことと思う」を表す超頻出構文です。"
  },
  {
    q: "She has made remarkable ( ) in her spoken English this semester.",
    sub: "【訳】彼女は今学期、英語のスピーキング力において目覚ましい進歩を遂げました。",
    opt: ["progress", "process", "program", "promise"],
    ans: 0,
    exp: "〈make progress〉で「進歩する・上達する」を表します。"
  },

  // --- 実戦・日常会話表現 (No.81 〜 No.100) ---
  {
    q: "A: Could we have a table by the window, please?\nB: ( ), right this way.",
    sub: "【訳】A: 窓側の席をお願いできますか？\nB: かしこまりました、こちらへどうぞ。",
    opt: ["Certainly", "Never mind", "Not at all", "Excuse me"],
    ans: 0,
    exp: "店員の丁寧な承諾「かしこまりました」は Certainly. が適切です。"
  },
  {
    q: "A: I'd like to return this sweater because the size is too small.\nB: Sure. Do you have your ( )?",
    sub: "【訳】A: サイズが小さすぎるのでこのセーターを返品したいのですが。\nB: かしこまりました。レシートはお持ちですか？",
    opt: ["receipt", "recipe", "ticket", "passport"],
    ans: 0,
    exp: "返品の際に確認する「購入レシート・領収書」は receipt です。"
  },
  {
    q: "A: May I take a message for Mr. Davis?\nB: Yes, please ask him to ( ) me back.",
    sub: "【訳】A: デイビス先生に伝言を承りましょうか？\nB: はい、折り返し電話をくださるようお伝えください。",
    opt: ["call", "tell", "speak", "talk"],
    ans: 0,
    exp: "電話の折り返しを頼む表現は〈call 人 back〉を用います。"
  },
  {
    q: "A: Would you like to join our study group this evening?\nB: ( ), but I have another appointment.",
    sub: "【訳】A: 今晩、私たちの勉強会に参加しませんか？\nB: ぜひ参加したいのですが、あいにく別の約束があるんです。",
    opt: ["I'd love to", "I don't care", "Not really", "Of course not"],
    ans: 0,
    exp: "誘いを丁寧に断る際の前置き「喜んでそうしたいのですが」は I'd love to, but ... です。"
  },
  {
    q: "A: Do you need any help with those heavy luggage bags?\nB: ( ). That's very kind of you.",
    sub: "【訳】A: その重い荷物をお手伝いしましょうか？\nB: はい、お願いします。ご親切にありがとうございます。",
    opt: ["Yes, please", "No, thanks", "Never mind", "You're welcome"],
    ans: 0,
    exp: "親切な申し出を快く受ける返答は Yes, please. です。"
  },
  {
    q: "A: What's your ( ) on the new school smartphone rule?\nB: I think it's fair and reasonable.",
    sub: "【訳】A: 新しい学校のスマホ規則についてどう思いますか？\nB: 公平で理にかなっていると思います。",
    opt: ["opinion", "problem", "reason", "schedule"],
    ans: 0,
    exp: "「〜についての意見」を尋ねる表現は What's your opinion on ...? です。"
  },
  {
    q: "A: We should start preparing for the midterm exam right now.\nB: I couldn't ( ) more.",
    sub: "【訳】A: 今すぐ中間試験の準備を始めるべきだよ。\nB: まったく同感です（大賛成です）。",
    opt: ["agree", "disagree", "think", "believe"],
    ans: 0,
    exp: "〈I couldn't agree more.〉で「これ以上ないほど同意する＝大賛成です」を表します。"
  },
  {
    q: "A: How are you feeling after taking the medicine?\nB: ( ) better, thank you for asking.",
    sub: "【訳】A: 薬を飲んだ後、気分はどうですか？\nB: ずっと良くなりました、気遣ってくれてありがとう。",
    opt: ["Much", "Very", "More", "Many"],
    ans: 0,
    exp: "比較級 better を強調する副詞は Much です（Much better＝ずっと良い）。"
  },
  {
    q: "A: Excuse me, how can I get to the public library from here?\nB: Go straight for two blocks and it's ( ) your left.",
    sub: "【訳】A: すみません、ここから市立図書館へはどう行けばいいですか？\nB: 2ブロックまっすぐ行くと、左手にありますよ。",
    opt: ["on", "at", "in", "to"],
    ans: 0,
    exp: "道案内で「あなたの左手に」は on your left と表します。"
  },
  {
    q: "A: How about visiting the botanical garden this Saturday?\nB: That ( ) like a wonderful idea!",
    sub: "【訳】A: 今週の土曜日に植物園に行ってみるのはどう？\nB: それはとても素敵なアイデアですね！",
    opt: ["sounds", "looks", "tastes", "smells"],
    ans: 0,
    exp: "提案に対して「〜そうに聞こえる・いいね」と賛成する定番表現は That sounds like ... です。"
  },
  {
    q: "A: I am terribly sorry for keeping you waiting for so long.\nB: Don't ( ) about it. I just arrived a few minutes ago.",
    sub: "【訳】A: 長い間お待たせして本当に申し訳ありませんでした。\nB: 気にしないでください。私も数分前に着いたばかりですから。",
    opt: ["worry", "mind", "care", "bother"],
    ans: 0,
    exp: "謝罪に対して「気にしないで・大丈夫ですよ」と返す表現は Don't worry about it. です。"
  },
  {
    q: "A: You gave a fantastic presentation in class today!\nB: Thank you, I'm really ( ) you liked it.",
    sub: "【訳】A: 今日の授業でのプレゼンテーション、素晴らしかったよ！\nB: ありがとう、気に入ってもらえて本当に嬉しいです。",
    opt: ["glad", "proud", "sorry", "nervous"],
    ans: 0,
    exp: "褒められた返答として「〜で嬉しい」を表す I'm glad (that) ... が適切です。"
  },
  {
    q: "A: Make sure to lock the front door before leaving the classroom.\nB: Don't worry, I won't ( ).",
    sub: "【訳】A: 教室を出る前に必ず正面玄関の鍵を閉めてね。\nB: 心配しないで、忘れないよ。",
    opt: ["forget", "remember", "leave", "miss"],
    ans: 0,
    exp: "「忘れません」と約束する返答は I won't forget. です。"
  },
  {
    q: "A: How many pieces of luggage are you checking in today?\nB: ( ) this suitcase, please.",
    sub: "【訳】A: 本日お預けになる手荷物はおいくつですか？\nB: このスーツケース1個だけです。",
    opt: ["Just", "Even", "Almost", "Quite"],
    ans: 0,
    exp: "「〜だけです」と限定して答える副詞は Just です。"
  },
  {
    q: "A: I'm having trouble focusing on my studies lately.\nB: ( ) don't you turn off your smartphone notifications?",
    sub: "【訳】A: 最近勉強に集中できなくて困っているんだ。\nB: スマホの通知をオフにしてみたらどう？",
    opt: ["Why", "How", "What", "When"],
    ans: 0,
    exp: "〈Why don't you ＋ 動詞の原形?〉で「〜してみてはどうですか（提案・助言）」を表します。"
  },
  {
    q: "A: I have a reservation under the name of Yamada for two nights.\nB: Welcome, let me ( ) your booking in our system.",
    sub: "【訳】A: ヤマダという名前で2泊の予約をしているのですが。\nB: いらっしゃいませ、システムの予約を確認いたしますね。",
    opt: ["check", "find", "take", "call"],
    ans: 0,
    exp: "予約状況を「照合・確認する」は check を用います。"
  },
  {
    q: "A: Here is a small souvenir from my trip to Canada.\nB: Thank you so much! You ( ) have!",
    sub: "【訳】A: カナダ旅行のささやかなお土産です、どうぞ。\nB: どうもありがとうございます！ そんな気を使わなくてもよかったのに！",
    opt: ["shouldn't", "mustn't", "can't", "won't"],
    ans: 0,
    exp: "贈り物を受け取った際の決まり文句〈You shouldn't have!〉（ご丁寧に恐れ入ります）です。"
  },
  {
    q: "A: Do you mind if I open the window for fresh air?\nB: ( ), go right ahead.",
    sub: "【訳】A: 換気のために窓を開けても構いませんか？\nB: ええ、どうぞ開けてください（全く構いませんよ）。",
    opt: ["Not at all", "Yes, please", "I mind", "Of course"],
    ans: 0,
    exp: "〈Do you mind if 〜?〉（〜しても嫌ですか？）に対する快諾の返答は Not at all.（全く嫌ではありません＝どうぞ）です。"
  },
  {
    q: "A: Which dessert would you like, chocolate cake or fruit tart?\nB: ( ) one looks delicious, so it's hard to choose.",
    sub: "【訳】A: デザートはチョコレートケーキとフルーツタルト、どちらにしますか？\nB: どちらもおいしそうなので選ぶのが難しいです。",
    opt: ["Either", "Neither", "Both", "Every"],
    ans: 0,
    exp: "単数名詞（one）を受けて「どちらの〜も」を表す Either が正解です。"
  },
  {
    q: "A: Wish me luck on my English speech contest tomorrow!\nB: ( ) a leg! You'll do fantastic!",
    sub: "【訳】A: 明日の英語スピーチコンテスト、応援していてね！\nB: 頑張ってね（成功を祈っているよ）！ あなたならきっとうまくいくよ！",
    opt: ["Break", "Take", "Make", "Hold"],
    ans: 0,
    exp: "舞台やコンテストの本番前に「幸運を祈る・頑張って！」と声をかける決まり文句は〈Break a leg!〉です。"
  }
];
// ==================== 6. 実戦リスニング データベース (No.1 〜 No.30) ====================
const RAW_LISTENING_DATA = [
  // --- 対話リスニング (No.1 〜 No.15) ---
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["At 3:30.", "At 4:00.", "At 4:30.", "At 5:00."],
    ans: 2,
    explain: "【会話】\nGirl: Shall we meet at four o'clock to work on our science project?\nBoy: I have a choir rehearsal until four. Could we make it four thirty instead?\nGirl: That works for me.\n\n【質問】What time will they meet today?\n（彼らは今日何時に会いますか？）\n\n【正解の訳】\n3. 4時30分に。\n\n【解説】男子の提案した four thirty（4時30分）で合意しています。",
    dialogue: [
      { speaker: 'female', text: "Shall we meet at four o'clock to work on our science project?" },
      { speaker: 'male', text: "I have a choir rehearsal until four. Could we make it four thirty instead?" },
      { speaker: 'female', text: "That works for me." },
      { speaker: 'narrator', text: "Question. What time will they meet today?" }
    ],
    aud_complete: "What time will they meet today? At 4:30."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["To the library.", "To the art museum.", "To the science museum.", "To the shopping mall."],
    ans: 1,
    explain: "【会話】\nBoy: Are you going anywhere special this weekend, Yuna?\nGirl: Yes, my sister and I are going to visit the modern art museum downtown.\n\n【質問】Where is Yuna going this weekend?\n（ユウナは今週末どこへ行きますか？）\n\n【正解の訳】\n2. 美術館へ。\n\n【解説】visit the modern art museum（現代美術館を訪れる）と答えています。",
    dialogue: [
      { speaker: 'male', text: "Are you going anywhere special this weekend, Yuna?" },
      { speaker: 'female', text: "Yes, my sister and I are going to visit the modern art museum downtown." },
      { speaker: 'narrator', text: "Question. Where is Yuna going this weekend?" }
    ],
    aud_complete: "Where is Yuna going this weekend? To the art museum."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["She lost her notebook.", "She missed the rapid train.", "Her alarm clock was broken.", "There was heavy traffic."],
    ans: 1,
    explain: "【会話】\nBoy: You're running late, Sarah. What happened?\nGirl: I just missed the rapid train, so I had to wait twenty minutes for the local one.\n\n【質問】Why was Sarah late?\n（サラはなぜ遅刻したのですか？）\n\n【正解の訳】\n2. 快速電車に乗り遅れたから。\n\n【解説】missed the rapid train（快速電車に乗り遅れた）ことが理由です。",
    dialogue: [
      { speaker: 'male', text: "You're running late, Sarah. What happened?" },
      { speaker: 'female', text: "I just missed the rapid train, so I had to wait twenty minutes for the local one." },
      { speaker: 'narrator', text: "Question. Why was Sarah late?" }
    ],
    aud_complete: "Why was Sarah late? She missed the rapid train."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["A red sweater.", "A blue backpack.", "A warm scarf.", "A pair of white sneakers."],
    ans: 1,
    explain: "【会話】\nWoman: May I help you find something?\nGirl: Yes, please. I'm looking for a sturdy blue backpack for high school.\nWoman: Right this way, please.\n\n【質問】What is the girl looking for?\n（女の子は何を探していますか？）\n\n【正解の訳】\n2. 青いリュックサック。\n\n【解説】looking for a sturdy blue backpack と話しています。",
    dialogue: [
      { speaker: 'female', text: "May I help you find something?" },
      { speaker: 'female', text: "Yes, please. I'm looking for a sturdy blue backpack for high school." },
      { speaker: 'female', text: "Right this way, please." },
      { speaker: 'narrator', text: "Question. What is the girl looking for?" }
    ],
    aud_complete: "What is the girl looking for? A blue backpack."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["An English teacher.", "A flight attendant.", "A graphic designer.", "A veterinarian."],
    ans: 2,
    explain: "【会話】\nBoy: What kind of career do you want to pursue in the future, Maya?\nGirl: I love drawing and using computers, so I want to become a graphic designer.\nBoy: That suits you perfectly!\n\n【質問】What does Maya want to be in the future?\n（マヤは将来何になりたいですか？）\n\n【正解の訳】\n3. グラフィックデザイナー。\n\n【解説】become a graphic designer と述べています。",
    dialogue: [
      { speaker: 'male', text: "What kind of career do you want to pursue in the future, Maya?" },
      { speaker: 'female', text: "I love drawing and using computers, so I want to become a graphic designer." },
      { speaker: 'male', text: "That suits you perfectly!" },
      { speaker: 'narrator', text: "Question. What does Maya want to be in the future?" }
    ],
    aud_complete: "What does Maya want to be in the future? A graphic designer."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["By bus.", "By subway.", "By bicycle.", "On foot."],
    ans: 1,
    explain: "【会話】\nWoman: Excuse me, what's the fastest way to get to the botanical garden?\nMan: Taking subway line 2 is the quickest because there are no traffic delays.\n\n【質問】How does the man suggest going to the botanical garden?\n（男性は植物園へどうやって行くことを勧めていますか？）\n\n【正解の訳】\n2. 地下鉄で。\n\n【解説】Taking subway line 2 を勧めています。",
    dialogue: [
      { speaker: 'female', text: "Excuse me, what's the fastest way to get to the botanical garden?" },
      { speaker: 'male', text: "Taking subway line 2 is the quickest because there are no traffic delays." },
      { speaker: 'narrator', text: "Question. How does the man suggest going to the botanical garden?" }
    ],
    aud_complete: "How does the man suggest going to the botanical garden? By subway."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["History.", "Biology.", "World geography.", "Chemistry."],
    ans: 3,
    explain: "【会話】\nGirl: Did you understand yesterday's chemistry assignment, Ren?\nBoy: Actually, question four was very complicated for me.\nGirl: I can explain the chemical formula after school.\n\n【質問】Which subject's homework is difficult for the boy?\n（男の子にとってどの科目の宿題が難しいですか？）\n\n【正解の訳】\n4. 化学。\n\n【解説】chemistry assignment（化学の課題）について話しています。",
    dialogue: [
      { speaker: 'female', text: "Did you understand yesterday's chemistry assignment, Ren?" },
      { speaker: 'male', text: "Actually, question four was very complicated for me." },
      { speaker: 'female', text: "I can explain the chemical formula after school." },
      { speaker: 'narrator', text: "Question. Which subject's homework is difficult for the boy?" }
    ],
    aud_complete: "Which subject's homework is difficult for the boy? Chemistry."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["On the kitchen counter.", "Under the desk.", "In the school locker.", "In her sister's room."],
    ans: 0,
    explain: "【会話】\nGirl: Dad, have you seen my student ID card anywhere?\nMan: Yes, you left it on the kitchen counter next to the fruit basket.\nGirl: Thanks a lot!\n\n【質問】Where is the girl's student ID card?\n（女の子の学生証はどこにありますか？）\n\n【正解の訳】\n1. キッチンの調理台の上。\n\n【解説】on the kitchen counter（台所のカウンターの上）にあります。",
    dialogue: [
      { speaker: 'female', text: "Dad, have you seen my student ID card anywhere?" },
      { speaker: 'male', text: "Yes, you left it on the kitchen counter next to the fruit basket." },
      { speaker: 'female', text: "Thanks a lot!" },
      { speaker: 'narrator', text: "Question. Where is the girl's student ID card?" }
    ],
    aud_complete: "Where is the girl's student ID card? On the kitchen counter."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Bake cookies at home.", "Go shopping downtown.", "Watch a movie at the theater.", "Study at the public library."],
    ans: 0,
    explain: "【会話】\nBoy: It's pouring rain outside. We can't play tennis in the park.\nGirl: Then, how about baking chocolate cookies at my house instead?\nBoy: Sounds delicious!\n\n【質問】What will they do this afternoon?\n（彼らは今日の午後何をしますか？）\n\n【正解の訳】\n1. 家でクッキーを焼くこと。\n\n【解説】baking chocolate cookies at my house を提案し決定しています。",
    dialogue: [
      { speaker: 'male', text: "It's pouring rain outside. We can't play tennis in the park." },
      { speaker: 'female', text: "Then, how about baking chocolate cookies at my house instead?" },
      { speaker: 'male', text: "Sounds delicious!" },
      { speaker: 'narrator', text: "Question. What will they do this afternoon?" }
    ],
    aud_complete: "What will they do this afternoon? Bake cookies at home."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Her older brother.", "Her chemistry teacher.", "Her classmate.", "Her mother."],
    ans: 0,
    explain: "【会話】\nBoy: Your presentation slides look amazing, Lisa! Who helped you design them?\nGirl: My older brother. He is studying digital arts at university.\n\n【質問】Who helped Lisa with her presentation?\n（誰がリサのプレゼンを手伝いましたか？）\n\n【正解の訳】\n1. 彼女の兄。\n\n【解説】My older brother が手伝ってくれたと述べています。",
    dialogue: [
      { speaker: 'male', text: "Your presentation slides look amazing, Lisa! Who helped you design them?" },
      { speaker: 'female', text: "My older brother. He is studying digital arts at university." },
      { speaker: 'narrator', text: "Question. Who helped Lisa with her presentation?" }
    ],
    aud_complete: "Who helped Lisa with her presentation? Her older brother."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Hot lemon tea.", "Iced green tea.", "Hot chocolate.", "Orange juice."],
    ans: 0,
    explain: "【会話】\nWoman: Welcome to Cafe Stella. What can I get for you today?\nGirl: Could I have a cup of hot lemon tea with honey, please?\nWoman: Certainly. Anything to eat?\nGirl: No, just the tea, thanks.\n\n【質問】What did the girl order?\n（女の子は何を注文しましたか？）\n\n【正解の訳】\n1. ホットレモンティー。\n\n【解説】hot lemon tea を注文しています。",
    dialogue: [
      { speaker: 'female', text: "Welcome to Cafe Stella. What can I get for you today?" },
      { speaker: 'female', text: "Could I have a cup of hot lemon tea with honey, please?" },
      { speaker: 'female', text: "Certainly. Anything to eat?" },
      { speaker: 'female', text: "No, just the tea, thanks." },
      { speaker: 'narrator', text: "Question. What did the girl order?" }
    ],
    aud_complete: "What did the girl order? Hot lemon tea."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Once a week.", "Twice a week.", "Three times a week.", "Every day."],
    ans: 1,
    explain: "【会話】\nBoy: How often do you practice badminton, Aoi?\nGirl: I have club practice every Tuesday and Friday after school.\n\n【質問】How often does Aoi practice badminton?\n（アオイはどのくらいの頻度でバドミントンを練習しますか？）\n\n【正解の訳】\n2. 週に2回。\n\n【解説】火曜日と金曜日なので Twice a week（週2回）です。",
    dialogue: [
      { speaker: 'male', text: "How often do you practice badminton, Aoi?" },
      { speaker: 'female', text: "I have club practice every Tuesday and Friday after school." },
      { speaker: 'narrator', text: "Question. How often does Aoi practice badminton?" }
    ],
    aud_complete: "How often does Aoi practice badminton? Twice a week."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["To Australia.", "To Canada.", "To the United Kingdom.", "To Singapore."],
    ans: 1,
    explain: "【会話】\nGirl: Where are you traveling during the summer vacation, Ken?\nBoy: I'm participating in a two-week homestay program in Vancouver, Canada.\nGirl: That sounds like an unforgettable experience!\n\n【質問】Where is Ken traveling for his summer program?\n（ケンは夏期プログラムでどこへ旅行しますか？）\n\n【正解の訳】\n2. カナダへ。\n\n【解説】Vancouver, Canada と答えています。",
    dialogue: [
      { speaker: 'female', text: "Where are you traveling during the summer vacation, Ken?" },
      { speaker: 'male', text: "I'm participating in a two-week homestay program in Vancouver, Canada." },
      { speaker: 'female', text: "That sounds like an unforgettable experience!" },
      { speaker: 'narrator', text: "Question. Where is Ken traveling for his summer program?" }
    ],
    aud_complete: "Where is Ken traveling for his summer program? To Canada."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Japanese ramen.", "Italian pasta.", "Chinese fried rice.", "Mexican tacos."],
    ans: 1,
    explain: "【会話】\nGirl: What should we cook for tonight's dinner party?\nBoy: How about handmade Italian pasta with fresh tomatoes?\nGirl: Great idea! Let's buy the ingredients.\n\n【質問】What will they cook for dinner tonight?\n（彼らは今夜の夕食に何を料理しますか？）\n\n【正解の訳】\n2. イタリアンパスタ。\n\n【解説】Italian pasta を作ることで合意しています。",
    dialogue: [
      { speaker: 'female', text: "What should we cook for tonight's dinner party?" },
      { speaker: 'male', text: "How about handmade Italian pasta with fresh tomatoes?" },
      { speaker: 'female', text: "Great idea! Let's buy the ingredients." },
      { speaker: 'narrator', text: "Question. What will they cook for dinner tonight?" }
    ],
    aud_complete: "What will they cook for dinner tonight? Italian pasta."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Badminton club.", "Brass band club.", "Art club.", "Astronomy club."],
    ans: 3,
    explain: "【会話】\nBoy: Which club did you decide to join, Nanami?\nGirl: I joined the astronomy club because I love observing constellations through the telescope.\nBoy: That sounds wonderful!\n\n【質問】Which club did Nanami join?\n（ナナミはどの部活動に入部しましたか？）\n\n【正解の訳】\n4. 天文部。\n\n【解説】astronomy club（天文部）に入部しました。",
    dialogue: [
      { speaker: 'male', text: "Which club did you decide to join, Nanami?" },
      { speaker: 'female', text: "I joined the astronomy club because I love observing constellations through the telescope." },
      { speaker: 'male', text: "That sounds wonderful!" },
      { speaker: 'narrator', text: "Question. Which club did Nanami join?" }
    ],
    aud_complete: "Which club did Nanami join? Astronomy club."
  },

  // --- 短文・アナウンス・説明リスニング (No.16 〜 No.30) ---
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["To clean coastal beaches.", "To protect endangered sea turtles.", "To build new hotels.", "To promote sea tourism."],
    ans: 1,
    explain: "【英文】\nThe local environmental group started a conservation project to protect endangered sea turtles and their nesting beaches from plastic pollution.\n\n【質問】What is the main purpose of the project?\n（そのプロジェクトの主な目的は何ですか？）\n\n【正解の訳】\n2. 絶滅危惧種のウミガメを保護すること。\n\n【解説】protect endangered sea turtles と述べています。",
    dialogue: [
      { speaker: 'female', text: "The local environmental group started a conservation project to protect endangered sea turtles and their nesting beaches from plastic pollution." },
      { speaker: 'narrator', text: "Question. What is the main purpose of the project?" }
    ],
    aud_complete: "What is the main purpose of the project? To protect endangered sea turtles."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["At 5:00 p.m.", "At 5:30 p.m.", "At 6:00 p.m.", "At 6:30 p.m."],
    ans: 1,
    explain: "【英文】\nAttention museum visitors. The city science museum will close at five thirty this evening. Please return your audio tour devices to the information desk.\n\n【質問】What time will the museum close today?\n（博物館は本日何時に閉館しますか？）\n\n【正解の訳】\n2. 午後5時30分に。\n\n【解説】close at five thirty と案内されています。",
    dialogue: [
      { speaker: 'female', text: "Attention museum visitors. The city science museum will close at five thirty this evening. Please return your audio tour devices to the information desk." },
      { speaker: 'narrator', text: "Question. What time will the museum close today?" }
    ],
    aud_complete: "What time will the museum close today? At 5:30 p.m."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Five dollars.", "Eight dollars.", "Twelve dollars.", "Fifteen dollars."],
    ans: 2,
    explain: "【英文】\nAdmission tickets to the botanical exhibition are five dollars for children and twelve dollars for high school students and adults.\n\n【質問】How much is the ticket for high school students?\n（高校生の入場チケットはいくらですか？）\n\n【正解の訳】\n3. 12ドル。\n\n【解説】twelve dollars for high school students と述べています。",
    dialogue: [
      { speaker: 'male', text: "Admission tickets to the botanical exhibition are five dollars for children and twelve dollars for high school students and adults." },
      { speaker: 'narrator', text: "Question. How much is the ticket for high school students?" }
    ],
    aud_complete: "How much is the ticket for high school students? Twelve dollars."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Visited an ancient temple.", "Read historical books in the library.", "Went swimming in the ocean.", "Watched a soccer match."],
    ans: 1,
    explain: "【英文】\nLast Saturday was stormy all afternoon, so Yuto stayed in the municipal library and read three books about medieval European history.\n\n【質問】What did Yuto do last Saturday afternoon?\n（ユウトはこの前の土曜日の午後何をしましたか？）\n\n【正解の訳】\n2. 図書館で歴史の本を読んだ。\n\n【解説】read three books about medieval European history in the library が行動内容です。",
    dialogue: [
      { speaker: 'male', text: "Last Saturday was stormy all afternoon, so Yuto stayed in the municipal library and read three books about medieval European history." },
      { speaker: 'narrator', text: "Question. What did Yuto do last Saturday afternoon?" }
    ],
    aud_complete: "What did Yuto do last Saturday afternoon? Read historical books in the library."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Sunny.", "Cloudy.", "Rainy.", "Snowy."],
    ans: 2,
    explain: "【英文】\nIt was clear and sunny on Friday morning, but heavy rain started to fall suddenly around two o'clock in the afternoon.\n\n【質問】How was the weather on Friday afternoon?\n（金曜日の午後の天気はどうでしたか？）\n\n【正解の訳】\n3. 雨。\n\n【解説】heavy rain started to fall（大雨が降り始めた）ので Rainy です。",
    dialogue: [
      { speaker: 'female', text: "It was clear and sunny on Friday morning, but heavy rain started to fall suddenly around two o'clock in the afternoon." },
      { speaker: 'narrator', text: "Question. How was the weather on Friday afternoon?" }
    ],
    aud_complete: "How was the weather on Friday afternoon? Rainy."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["A digital camera.", "A pair of headphones.", "A leather backpack.", "An electronic dictionary."],
    ans: 3,
    explain: "【英文】\nYesterday was Emily's fifteenth birthday. Her grandmother gave her a high-tech electronic dictionary for her English studies.\n\n【質問】What did Emily receive from her grandmother?\n（エミリーは祖母から何をもらいましたか？）\n\n【正解の訳】\n4. 電子辞書。\n\n【解説】gave her a high-tech electronic dictionary と述べています。",
    dialogue: [
      { speaker: 'female', text: "Yesterday was Emily's fifteenth birthday. Her grandmother gave her a high-tech electronic dictionary for her English studies." },
      { speaker: 'narrator', text: "Question. What did Emily receive from her grandmother?" }
    ],
    aud_complete: "What did Emily receive from her grandmother? An electronic dictionary."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["In Kyoto.", "In Hokkaido.", "In Okinawa.", "In Tokyo."],
    ans: 1,
    explain: "【英文】\nDuring the winter holiday, Karen's family visited Hokkaido. They enjoyed skiing down the snowy mountains and eating hot soup.\n\n【質問】Where did Karen's family spend their winter holiday?\n（カレンの家族は冬休みをどこで過ごしましたか？）\n\n【正解の訳】\n2. 北海道で。\n\n【解説】visited Hokkaido と述べています。",
    dialogue: [
      { speaker: 'male', text: "During the winter holiday, Karen's family visited Hokkaido. They enjoyed skiing down the snowy mountains and eating hot soup." },
      { speaker: 'narrator', text: "Question. Where did Karen's family spend their winter holiday?" }
    ],
    aud_complete: "Where did Karen's family spend their winter holiday? In Hokkaido."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Practices the violin.", "Practices the flute.", "Draws digital illustrations.", "Studies French."],
    ans: 0,
    explain: "【英文】\nSakura is determined to become a classical musician. She practices the violin for two hours every evening after finishing her homework.\n\n【質問】What does Sakura do every evening?\n（サクラは毎晩何をしていますか？）\n\n【正解の訳】\n1. バイオリンを練習する。\n\n【解説】practices the violin と述べています。",
    dialogue: [
      { speaker: 'female', text: "Sakura is determined to become a classical musician. She practices the violin for two hours every evening after finishing her homework." },
      { speaker: 'narrator', text: "Question. What does Sakura do every evening?" }
    ],
    aud_complete: "What does Sakura do every evening? Practices the violin."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Every day.", "Once a week.", "Twice a month.", "Three times a year."],
    ans: 1,
    explain: "【英文】\nHaruto is passionate about volunteering. He visits the local community center every Saturday morning to teach chess to children.\n\n【質問】How often does Haruto volunteer at the community center?\n（ハルトはどのくらいの頻度で公民館でボランティアをしていますか？）\n\n【正解の訳】\n2. 週に1回。\n\n【解説】every Saturday morning（毎週土曜の朝）なので Once a week（週1回）です。",
    dialogue: [
      { speaker: 'male', text: "Haruto is passionate about volunteering. He visits the local community center every Saturday morning to teach chess to children." },
      { speaker: 'narrator', text: "Question. How often does Haruto volunteer at the community center?" }
    ],
    aud_complete: "How often does Haruto volunteer at the community center? Once a week."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Baked a chocolate cake.", "Bought an acoustic guitar.", "Cooked Italian pasta.", "Organized a surprise party."],
    ans: 0,
    explain: "【英文】\nYesterday was my best friend's fourteenth birthday. My sister and I baked a delicious strawberry and chocolate cake to surprise her.\n\n【質問】What did the speaker do for her best friend?\n（話し手は親友のために何をしましたか？）\n\n【正解の訳】\n1. チョコレートケーキを焼いた。\n\n【解説】baked a delicious strawberry and chocolate cake が行動内容です。",
    dialogue: [
      { speaker: 'female', text: "Yesterday was my best friend's fourteenth birthday. My sister and I baked a delicious strawberry and chocolate cake to surprise her." },
      { speaker: 'narrator', text: "Question. What did the speaker do for her best friend?" }
    ],
    aud_complete: "What did the speaker do for her best friend? Baked a chocolate cake."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["By chartered bus.", "By bullet train.", "By airplane.", "By ferry."],
    ans: 0,
    explain: "【英文】\nOur high school class went on a field trip to the historical village yesterday. All forty students traveled together by chartered bus.\n\n【質問】How did the class travel to the historical village?\n（クラスのみんなはどうやって歴史村へ移動しましたか？）\n\n【正解の訳】\n1. 貸切バスで。\n\n【解説】by chartered bus（貸切バスで）と述べています。",
    dialogue: [
      { speaker: 'female', text: "Our high school class went on a field trip to the historical village yesterday. All forty students traveled together by chartered bus." },
      { speaker: 'narrator', text: "Question. How did the class travel to the historical village?" }
    ],
    aud_complete: "How did the class travel to the historical village? By chartered bus."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Two white cats.", "A golden retriever.", "Three parrots.", "Two rabbits."],
    ans: 1,
    explain: "【英文】\nMiyu loves domestic animals. She recently adopted a friendly golden retriever and walks him in the park every morning.\n\n【質問】What pet does Miyu have?\n（ミユはどんなペットを飼っていますか？）\n\n【正解の訳】\n2. ゴールデンレトリバー（犬）。\n\n【解説】adopted a friendly golden retriever（犬）を飼っています。",
    dialogue: [
      { speaker: 'female', text: "Miyu loves domestic animals. She recently adopted a friendly golden retriever and walks him in the park every morning." },
      { speaker: 'narrator', text: "Question. What pet does Miyu have?" }
    ],
    aud_complete: "What pet does Miyu have? A golden retriever."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["A warm wool coat.", "A pair of winter boots.", "A knitted scarf.", "A leather jacket."],
    ans: 0,
    explain: "【英文】\nAs the temperature dropped sharply, Jessica went to the department store on Sunday and purchased a warm wool coat for the winter.\n\n【質問】What did Jessica purchase on Sunday?\n（ジェシカは日曜日に何を購入しましたか？）\n\n【正解の訳】\n1. 暖かいウールのコート。\n\n【解説】purchased a warm wool coat と述べています。",
    dialogue: [
      { speaker: 'male', text: "As the temperature dropped sharply, Jessica went to the department store on Sunday and purchased a warm wool coat for the winter." },
      { speaker: 'narrator', text: "Question. What did Jessica purchase on Sunday?" }
    ],
    aud_complete: "What did Jessica purchase on Sunday? A warm wool coat."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["To a theme park.", "To an aquarium.", "To a planetarium.", "To a ski resort."],
    ans: 2,
    explain: "【英文】\nNext Sunday is my younger brother's birthday. My father promised to drive the whole family to the city planetarium to watch the star show.\n\n【質問】Where will the family go next Sunday?\n（家族は次の日曜日どこへ行きますか？）\n\n【正解の訳】\n3. プラネタリウムへ。\n\n【解説】drive the whole family to the city planetarium と述べています。",
    dialogue: [
      { speaker: 'female', text: "Next Sunday is my younger brother's birthday. My father promised to drive the whole family to the city planetarium to watch the star show." },
      { speaker: 'narrator', text: "Question. Where will the family go next Sunday?" }
    ],
    aud_complete: "Where will the family go next Sunday? To a planetarium."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["At 7:45 a.m.", "At 8:00 a.m.", "At 8:20 a.m.", "At 8:40 a.m."],
    ans: 2,
    explain: "【英文】\nRiko usually leaves her apartment at eight o'clock and arrives at the school gate at eight twenty every morning.\n\n【質問】What time does Riko arrive at school?\n（リコは何時に学校に到着しますか？）\n\n【正解の訳】\n3. 午前8時20分に。\n\n【解説】arrives at the school gate at eight twenty と述べています。",
    dialogue: [
      { speaker: 'female', text: "Riko usually leaves her apartment at eight o'clock and arrives at the school gate at eight twenty every morning." },
      { speaker: 'narrator', text: "Question. What time does Riko arrive at school?" }
    ],
    aud_complete: "What time does Riko arrive at school? At 8:20 a.m."
  },
  // --- 対話リスニング Part 2 (No.31 〜 No.45) ---
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["In the science lab.", "In the art room.", "In the cafeteria.", "In her locker."],
    ans: 1,
    exp: "【会話】\nGirl: I can't find my color pencil set anywhere.\nBoy: Didn't you leave it on the desk in the art room during fifth period?\nGirl: Oh, that's right! I'll go check right now.\n\n【質問】Where did the girl leave her pencil set?\n（女の子はどこに色鉛筆セットを置き忘れましたか？）\n\n【正解の訳】\n2. 美術室に。\n\n【解説】art room（美術室）に置き忘れたことを思い出しています。",
    explain: "【会話】\nGirl: I can't find my color pencil set anywhere.\nBoy: Didn't you leave it on the desk in the art room during fifth period?\nGirl: Oh, that's right! I'll go check right now.\n\n【質問】Where did the girl leave her pencil set?\n（女の子はどこに色鉛筆セットを置き忘れましたか？）\n\n【正解の訳】\n2. 美術室に。\n\n【解説】art room（美術室）に置き忘れたことを思い出しています。",
    dialogue: [
      { speaker: 'female', text: "I can't find my color pencil set anywhere." },
      { speaker: 'male', text: "Didn't you leave it on the desk in the art room during fifth period?" },
      { speaker: 'female', text: "Oh, that's right! I'll go check right now." },
      { speaker: 'narrator', text: "Question. Where did the girl leave her pencil set?" }
    ],
    aud_complete: "Where did the girl leave her pencil set? In the art room."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Plant trees in the park.", "Volunteer at an animal shelter.", "Visit her grandparents.", "Study for the exam."],
    ans: 1,
    exp: "【会話】\nBoy: Do you have any plans for this Saturday, Hana?\nGirl: I'm going to volunteer at the local animal shelter to help feed the rescued dogs.\nBoy: That's very kind of you.\n\n【質問】What will Hana do this Saturday?\n（ハナは今週の土曜日に何をしますか？）\n\n【正解の訳】\n2. 動物保護施設でボランティアをする。\n\n【解説】volunteer at the local animal shelter と述べています。",
    explain: "【会話】\nBoy: Do you have any plans for this Saturday, Hana?\nGirl: I'm going to volunteer at the local animal shelter to help feed the rescued dogs.\nBoy: That's very kind of you.\n\n【質問】What will Hana do this Saturday?\n（ハナは今週の土曜日に何をしますか？）\n\n【正解の訳】\n2. 動物保護施設でボランティアをする。\n\n【解説】volunteer at the local animal shelter と述べています。",
    dialogue: [
      { speaker: 'male', text: "Do you have any plans for this Saturday, Hana?" },
      { speaker: 'female', text: "I'm going to volunteer at the local animal shelter to help feed the rescued dogs." },
      { speaker: 'male', text: "That's very kind of you." },
      { speaker: 'narrator', text: "Question. What will Hana do this Saturday?" }
    ],
    aud_complete: "What will Hana do this Saturday? Volunteer at an animal shelter."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Strawberry shortcake.", "Fresh apple pie.", "Chocolate muffins.", "Blueberry cheesecake."],
    ans: 1,
    exp: "【会話】\nBoy: What did you bake in cooking class today?\nGirl: We baked a fresh apple pie with cinnamon. It was delicious!\nBoy: I wish I could taste it.\n\n【質問】What did the girl bake in class?\n（女の子は授業で何を焼きましたか？）\n\n【正解の訳】\n2. 焼きたてのアップルパイ。\n\n【解説】baked a fresh apple pie と答えています。",
    explain: "【会話】\nBoy: What did you bake in cooking class today?\nGirl: We baked a fresh apple pie with cinnamon. It was delicious!\nBoy: I wish I could taste it.\n\n【質問】What did the girl bake in class?\n（女の子は授業で何を焼きましたか？）\n\n【正解の訳】\n2. 焼きたてのアップルパイ。\n\n【解説】baked a fresh apple pie と答えています。",
    dialogue: [
      { speaker: 'male', text: "What did you bake in cooking class today?" },
      { speaker: 'female', text: "We baked a fresh apple pie with cinnamon. It was delicious!" },
      { speaker: 'male', text: "I wish I could taste it." },
      { speaker: 'narrator', text: "Question. What did the girl bake in class?" }
    ],
    aud_complete: "What did the girl bake in class? Fresh apple pie."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Next Monday.", "Next Tuesday.", "Next Thursday.", "Next Friday."],
    ans: 1,
    exp: "【会話】\nWoman: Is the novel about space travel currently available in the library?\nMan: It is checked out right now, but it will be returned next Tuesday.\nWoman: Thank you, I'll come back then.\n\n【質問】When will the novel be available in the library?\n（その小説はいつ図書館で利用可能になりますか？）\n\n【正解の訳】\n2. 来週の火曜日に。\n\n【解説】returned next Tuesday（来週火曜日に返却される）と案内されています。",
    explain: "【会話】\nWoman: Is the novel about space travel currently available in the library?\nMan: It is checked out right now, but it will be returned next Tuesday.\nWoman: Thank you, I'll come back then.\n\n【質問】When will the novel be available in the library?\n（その小説はいつ図書館で利用可能になりますか？）\n\n【正解の訳】\n2. 来週の火曜日に。\n\n【解説】returned next Tuesday（来週火曜日に返却される）と案内されています。",
    dialogue: [
      { speaker: 'female', text: "Is the novel about space travel currently available in the library?" },
      { speaker: 'male', text: "It is checked out right now, but it will be returned next Tuesday." },
      { speaker: 'female', text: "Thank you, I'll come back then." },
      { speaker: 'narrator', text: "Question. When will the novel be available in the library?" }
    ],
    aud_complete: "When will the novel be available in the library? Next Tuesday."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Preparing food stands.", "Designing event posters.", "Organizing the stage.", "Cleaning the hall."],
    ans: 1,
    exp: "【会話】\nBoy: What is your role for the school festival committee, Emi?\nGirl: I'm in charge of designing digital posters to promote our musical concert.\nBoy: Your drawings are always wonderful!\n\n【質問】What is Emi's role for the school festival?\n（エミの学園祭での役割は何ですか？）\n\n【正解の訳】\n2. イベントのポスターをデザインすること。\n\n【解説】in charge of designing digital posters と答えています。",
    explain: "【会話】\nBoy: What is your role for the school festival committee, Emi?\nGirl: I'm in charge of designing digital posters to promote our musical concert.\nBoy: Your drawings are always wonderful!\n\n【質問】What is Emi's role for the school festival?\n（エミの学園祭での役割は何ですか？）\n\n【正解の訳】\n2. イベントのポスターをデザインすること。\n\n【解説】in charge of designing digital posters と答えています。",
    dialogue: [
      { speaker: 'male', text: "What is your role for the school festival committee, Emi?" },
      { speaker: 'female', text: "I'm in charge of designing digital posters to promote our musical concert." },
      { speaker: 'male', text: "Your drawings are always wonderful!" },
      { speaker: 'narrator', text: "Question. What is Emi's role for the school festival?" }
    ],
    aud_complete: "What is Emi's role for the school festival? Designing event posters."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["A silk scarf.", "A silver necklace.", "A leather purse.", "A pearl bracelet."],
    ans: 0,
    exp: "【会話】\nBoy: Did you find a Mother's Day gift for your mom, Meg?\nGirl: Yes, I bought a lovely pink silk scarf with floral patterns.\nBoy: I'm sure she will love it.\n\n【質問】What gift did Meg buy for her mother?\n（メグは母親のためにどんなプレゼントを買いましたか？）\n\n【正解の訳】\n1. シルクのスカーフ。\n\n【解説】bought a lovely pink silk scarf と答えています。",
    explain: "【会話】\nBoy: Did you find a Mother's Day gift for your mom, Meg?\nGirl: Yes, I bought a lovely pink silk scarf with floral patterns.\nBoy: I'm sure she will love it.\n\n【質問】What gift did Meg buy for her mother?\n（メグは母親のためにどんなプレゼントを買いましたか？）\n\n【正解の訳】\n1. シルクのスカーフ。\n\n【解説】bought a lovely pink silk scarf と答えています。",
    dialogue: [
      { speaker: 'male', text: "Did you find a Mother's Day gift for your mom, Meg?" },
      { speaker: 'female', text: "Yes, I bought a lovely pink silk scarf with floral patterns." },
      { speaker: 'male', text: "I'm sure she will love it." },
      { speaker: 'narrator', text: "Question. What gift did Meg buy for her mother?" }
    ],
    aud_complete: "What gift did Meg buy for her mother? A silk scarf."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["In the schoolyard.", "In the gymnasium.", "In the cafeteria.", "In classroom 3B."],
    ans: 1,
    exp: "【会話】\nGirl: It's raining heavily outside. Where is tennis club practice today?\nBoy: The outdoor courts are wet, so we will meet in the gymnasium for fitness training.\n\n【質問】Where will the tennis club practice today?\n（テニス部は今日どこで練習しますか？）\n\n【正解の訳】\n2. 体育館で。\n\n【解説】meet in the gymnasium と述べています。",
    explain: "【会話】\nGirl: It's raining heavily outside. Where is tennis club practice today?\nBoy: The outdoor courts are wet, so we will meet in the gymnasium for fitness training.\n\n【質問】Where will the tennis club practice today?\n（テニス部は今日どこで練習しますか？）\n\n【正解の訳】\n2. 体育館で。\n\n【解説】meet in the gymnasium と述べています。",
    dialogue: [
      { speaker: 'female', text: "It's raining heavily outside. Where is tennis club practice today?" },
      { speaker: 'male', text: "The outdoor courts are wet, so we will meet in the gymnasium for fitness training." },
      { speaker: 'narrator', text: "Question. Where will the tennis club practice today?" }
    ],
    aud_complete: "Where will the tennis club practice today? In the gymnasium."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["By highway bus.", "By rapid express train.", "By taxi.", "By bicycle."],
    ans: 1,
    exp: "【会話】\nGirl: How did you travel to the regional science contest, Leo?\nBoy: The highway bus was crowded, so my teacher and I took the rapid express train.\n\n【質問】How did Leo travel to the contest?\n（レオはどうやってコンテストへ移動しましたか？）\n\n【正解の訳】\n2. 快速急行電車で。\n\n【解説】took the rapid express train と答えています。",
    explain: "【会話】\nGirl: How did you travel to the regional science contest, Leo?\nBoy: The highway bus was crowded, so my teacher and I took the rapid express train.\n\n【質問】How did Leo travel to the contest?\n（レオはどうやってコンテストへ移動しましたか？）\n\n【正解の訳】\n2. 快速急行電車で。\n\n【解説】took the rapid express train と答えています。",
    dialogue: [
      { speaker: 'female', text: "How did you travel to the regional science contest, Leo?" },
      { speaker: 'male', text: "The highway bus was crowded, so my teacher and I took the rapid express train." },
      { speaker: 'narrator', text: "Question. How did Leo travel to the contest?" }
    ],
    aud_complete: "How did Leo travel to the contest? By rapid express train."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["At 5:30.", "At 6:00.", "At 6:30.", "At 7:00."],
    ans: 1,
    exp: "【会話】\nGirl: The orchestral concert begins at six thirty. What time should we meet at the hall entrance?\nBoy: Let's meet at six o'clock so we can find our seats early.\nGirl: Sounds good.\n\n【質問】What time will they meet at the hall entrance?\n（彼らはホールの入り口で何時に会いますか？）\n\n【正解の訳】\n2. 6時ちょうどに。\n\n【解説】meet at six o'clock で合意しています。",
    explain: "【会話】\nGirl: The orchestral concert begins at six thirty. What time should we meet at the hall entrance?\nBoy: Let's meet at six o'clock so we can find our seats early.\nGirl: Sounds good.\n\n【質問】What time will they meet at the hall entrance?\n（彼らはホールの入り口で何時に会いますか？）\n\n【正解の訳】\n2. 6時ちょうどに。\n\n【解説】meet at six o'clock で合意しています。",
    dialogue: [
      { speaker: 'female', text: "The orchestral concert begins at six thirty. What time should we meet at the hall entrance?" },
      { speaker: 'male', text: "Let's meet at six o'clock so we can find our seats early." },
      { speaker: 'female', text: "Sounds good." },
      { speaker: 'narrator', text: "Question. What time will they meet at the hall entrance?" }
    ],
    aud_complete: "What time will they meet at the hall entrance? At 6:00."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["For one week.", "For two weeks.", "For one month.", "For three months."],
    ans: 1,
    exp: "【会話】\nGirl: Our school is welcoming an exchange student from Sydney next Monday.\nBoy: That's exciting! How long will she stay with us?\nGirl: She will stay for two weeks and attend our English classes.\n\n【質問】How long will the exchange student stay?\n（交換留学生はどのくらいの期間滞在しますか？）\n\n【正解の訳】\n2. 2週間。\n\n【解説】stay for two weeks と述べています。",
    explain: "【会話】\nGirl: Our school is welcoming an exchange student from Sydney next Monday.\nBoy: That's exciting! How long will she stay with us?\nGirl: She will stay for two weeks and attend our English classes.\n\n【質問】How long will the exchange student stay?\n（交換留学生はどのくらいの期間滞在しますか？）\n\n【正解の訳】\n2. 2週間。\n\n【解説】stay for two weeks と述べています。",
    dialogue: [
      { speaker: 'female', text: "Our school is welcoming an exchange student from Sydney next Monday." },
      { speaker: 'male', text: "That's exciting! How long will she stay with us?" },
      { speaker: 'female', text: "She will stay for two weeks and attend our English classes." },
      { speaker: 'narrator', text: "Question. How long will the exchange student stay?" }
    ],
    aud_complete: "How long will the exchange student stay? For two weeks."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Hot black coffee.", "Iced cafe latte with soy milk.", "Green tea latte.", "Iced lemon water."],
    ans: 1,
    exp: "【会話】\nWoman: Good afternoon. What would you like to drink today?\nGirl: Could I have a medium iced cafe latte made with soy milk, please?\nWoman: Sure thing. For here or to go?\nGirl: For here, please.\n\n【質問】What beverage did the girl order?\n（女の子は何の飲み物を注文しましたか？）\n\n【正解の訳】\n2. 豆乳のアイスカフェラテ。\n\n【解説】iced cafe latte made with soy milk を注文しています。",
    explain: "【会話】\nWoman: Good afternoon. What would you like to drink today?\nGirl: Could I have a medium iced cafe latte made with soy milk, please?\nWoman: Sure thing. For here or to go?\nGirl: For here, please.\n\n【質問】What beverage did the girl order?\n（女の子は何の飲み物を注文しましたか？）\n\n【正解の訳】\n2. 豆乳のアイスカフェラテ。\n\n【解説】iced cafe latte made with soy milk を注文しています。",
    dialogue: [
      { speaker: 'female', text: "Good afternoon. What would you like to drink today?" },
      { speaker: 'female', text: "Could I have a medium iced cafe latte made with soy milk, please?" },
      { speaker: 'female', text: "Sure thing. For here or to go?" },
      { speaker: 'female', text: "For here, please." },
      { speaker: 'narrator', text: "Question. What beverage did the girl order?" }
    ],
    aud_complete: "What beverage did the girl order? Iced cafe latte with soy milk."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["World history.", "Spanish architecture.", "Modern literature.", "Environmental biology."],
    ans: 1,
    exp: "【会話】\nBoy: Yuka, could you look over my slides for tomorrow's presentation?\nGirl: Sure. What topic are you presenting on?\nBoy: I'm discussing traditional Spanish architecture in Barcelona.\n\n【質問】What topic is the boy presenting on?\n（男の子は何のテーマについてプレゼンしますか？）\n\n【正解の訳】\n2. スペインの建築。\n\n【解説】Spanish architecture について発表します。",
    explain: "【会話】\nBoy: Yuka, could you look over my slides for tomorrow's presentation?\nGirl: Sure. What topic are you presenting on?\nBoy: I'm discussing traditional Spanish architecture in Barcelona.\n\n【質問】What topic is the boy presenting on?\n（男の子は何のテーマについてプレゼンしますか？）\n\n【正解の訳】\n2. スペインの建築。\n\n【解説】Spanish architecture について発表します。",
    dialogue: [
      { speaker: 'male', text: "Yuka, could you look over my slides for tomorrow's presentation?" },
      { speaker: 'female', text: "Sure. What topic are you presenting on?" },
      { speaker: 'male', text: "I'm discussing traditional Spanish architecture in Barcelona." },
      { speaker: 'narrator', text: "Question. What topic is the boy presenting on?" }
    ],
    aud_complete: "What topic is the boy presenting on? Spanish architecture."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["On Friday.", "On Saturday.", "On Sunday.", "Next weekend."],
    ans: 2,
    exp: "【会話】\nGirl: The weather forecast predicts heavy showers on Saturday. Should we reschedule our picnic?\nBoy: Yes, Sunday is expected to be sunny and warm, so let's go on Sunday instead.\n\n【質問】When will they have their picnic?\n（彼らはいつピクニックをしますか？）\n\n【正解の訳】\n3. 日曜日に。\n\n【解説】Sunday is expected to be sunny... so let's go on Sunday と合意しています。",
    explain: "【会話】\nGirl: The weather forecast predicts heavy showers on Saturday. Should we reschedule our picnic?\nBoy: Yes, Sunday is expected to be sunny and warm, so let's go on Sunday instead.\n\n【質問】When will they have their picnic?\n（彼らはいつピクニックをしますか？）\n\n【正解の訳】\n3. 日曜日に。\n\n【解説】Sunday is expected to be sunny... so let's go on Sunday と合意しています。",
    dialogue: [
      { speaker: 'female', text: "The weather forecast predicts heavy showers on Saturday. Should we reschedule our picnic?" },
      { speaker: 'male', text: "Yes, Sunday is expected to be sunny and warm, so let's go on Sunday instead." },
      { speaker: 'narrator', text: "Question. When will they have their picnic?" }
    ],
    aud_complete: "When will they have their picnic? On Sunday."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["First prize.", "Second prize.", "Third prize.", "Special jury award."],
    ans: 1,
    exp: "【会話】\nBoy: Congratulations on the city photography competition, Saki!\nGirl: Thank you! My picture of the autumn sunset received second prize among 200 entries.\n\n【質問】Which award did Saki receive in the photo contest?\n（サキは写真コンテストでどの賞を受賞しましたか？）\n\n【正解の訳】\n2. 準優勝（第2位）。\n\n【解説】received second prize と述べています。",
    explain: "【会話】\nBoy: Congratulations on the city photography competition, Saki!\nGirl: Thank you! My picture of the autumn sunset received second prize among 200 entries.\n\n【質問】Which award did Saki receive in the photo contest?\n（サキは写真コンテストでどの賞を受賞しましたか？）\n\n【正解の訳】\n2. 準優勝（第2位）。\n\n【解説】received second prize と述べています。",
    dialogue: [
      { speaker: 'male', text: "Congratulations on the city photography competition, Saki!" },
      { speaker: 'female', text: "Thank you! My picture of the autumn sunset received second prize among 200 entries." },
      { speaker: 'narrator', text: "Question. Which award did Saki receive in the photo contest?" }
    ],
    aud_complete: "Which award did Saki receive in the photo contest? Second prize."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Wednesday at 3:30.", "Thursday at 4:15.", "Friday at 4:30.", "Saturday at 10:00."],
    ans: 1,
    exp: "【会話】\nMan: Dental Clinic Green. How may I help you?\nGirl: Hello, I'd like to book a routine dental checkup this week.\nMan: We have an opening on Thursday at four fifteen in the afternoon.\nGirl: That time works great.\n\n【質問】When is the girl's dental appointment?\n（女の子の歯科検診の予約はいつですか？）\n\n【正解の訳】\n2. 木曜日の午後4時15分に。\n\n【解説】Thursday at four fifteen と約束しています。",
    explain: "【会話】\nMan: Dental Clinic Green. How may I help you?\nGirl: Hello, I'd like to book a routine dental checkup this week.\nMan: We have an opening on Thursday at four fifteen in the afternoon.\nGirl: That time works great.\n\n【質問】When is the girl's dental appointment?\n（女の子の歯科検診の予約はいつですか？）\n\n【正解の訳】\n2. 木曜日の午後4時15分に。\n\n【解説】Thursday at four fifteen と約束しています。",
    dialogue: [
      { speaker: 'male', text: "Dental Clinic Green. How may I help you?" },
      { speaker: 'female', text: "Hello, I'd like to book a routine dental checkup this week." },
      { speaker: 'male', text: "We have an opening on Thursday at four fifteen in the afternoon." },
      { speaker: 'female', text: "That time works great." },
      { speaker: 'narrator', text: "Question. When is the girl's dental appointment?" }
    ],
    aud_complete: "When is the girl's dental appointment? Thursday at 4:15."
  },

  // --- 短文・アナウンス・説明リスニング Part 2 (No.46 〜 No.60) ---
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Cleaned the community pond.", "Planted fifty cherry trees.", "Built wooden benches.", "Painted park fences."],
    ans: 1,
    exp: "【英文】\nLast Saturday, fifty local students participated in a community green project. Together with town volunteers, they planted fifty young cherry trees in the riverside park.\n\n【質問】What did the volunteers do last Saturday?\n（ボランティアたちはこの前の土曜日に何をしましたか？）\n\n【正解の訳】\n2. 50本の桜の木を植えた。\n\n【解説】planted fifty young cherry trees が活動内容です。",
    explain: "【英文】\nLast Saturday, fifty local students participated in a community green project. Together with town volunteers, they planted fifty young cherry trees in the riverside park.\n\n【質問】What did the volunteers do last Saturday?\n（ボランティアたちはこの前の土曜日に何をしましたか？）\n\n【正解の訳】\n2. 50本の桜の木を植えた。\n\n【解説】planted fifty young cherry trees が活動内容です。",
    dialogue: [
      { speaker: 'female', text: "Last Saturday, fifty local students participated in a community green project. Together with town volunteers, they planted fifty young cherry trees in the riverside park." },
      { speaker: 'narrator', text: "Question. What did the volunteers do last Saturday?" }
    ],
    aud_complete: "What did the volunteers do last Saturday? Planted fifty cherry trees."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["At 1:00 p.m.", "At 1:30 p.m.", "At 2:00 p.m.", "At 2:30 p.m."],
    ans: 1,
    exp: "【英文】\nAttention students and staff. The school cafeteria usually serves lunch until two o'clock. However, today it will close thirty minutes early at one thirty for a safety inspection.\n\n【質問】What time will the school cafeteria close today?\n（学食は本日何時に閉まりますか？）\n\n【正解の訳】\n2. 午後1時30分に。\n\n【解説】close thirty minutes early at one thirty と案内されています。",
    explain: "【英文】\nAttention students and staff. The school cafeteria usually serves lunch until two o'clock. However, today it will close thirty minutes early at one thirty for a safety inspection.\n\n【質問】What time will the school cafeteria close today?\n（学食は本日何時に閉まりますか？）\n\n【正解の訳】\n2. 午後1時30分に。\n\n【解説】close thirty minutes early at one thirty と案内されています。",
    dialogue: [
      { speaker: 'male', text: "Attention students and staff. The school cafeteria usually serves lunch until two o'clock. However, today it will close thirty minutes early at one thirty for a safety inspection." },
      { speaker: 'narrator', text: "Question. What time will the school cafeteria close today?" }
    ],
    aud_complete: "What time will the school cafeteria close today? At 1:30 p.m."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["On International Museum Day.", "Every Sunday morning.", "On public holidays.", "During winter vacation."],
    ans: 0,
    exp: "【英文】\nTo encourage youth education, the city historical museum announced that admission will be completely free for all middle and high school students on International Museum Day.\n\n【質問】When can students enter the museum for free?\n（生徒たちはいつ無料で博物館に入館できますか？）\n\n【正解の訳】\n1. 国際博物館の日に。\n\n【解説】on International Museum Day に無料になります。",
    explain: "【英文】\nTo encourage youth education, the city historical museum announced that admission will be completely free for all middle and high school students on International Museum Day.\n\n【質問】When can students enter the museum for free?\n（生徒たちはいつ無料で博物館に入館できますか？）\n\n【正解の訳】\n1. 国際博物館の日に。\n\n【解説】on International Museum Day に無料になります。",
    dialogue: [
      { speaker: 'female', text: "To encourage youth education, the city historical museum announced that admission will be completely free for all middle and high school students on International Museum Day." },
      { speaker: 'narrator', text: "Question. When can students enter the museum for free?" }
    ],
    aud_complete: "When can students enter the museum for free? On International Museum Day."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Sea otters.", "Polar bears.", "Humpback whales.", "Snow leopards."],
    ans: 0,
    exp: "【英文】\nResearchers on the northern island established a new wildlife protection zone along the rocky coast to preserve the natural habitat of wild sea otters.\n\n【質問】Which animal is the protection zone designed for?\n（その保護区域はどの動物のために設けられましたか？）\n\n【正解の訳】\n1. ラッコ（Sea otters）。\n\n【解説】habitat of wild sea otters を保護するためです。",
    explain: "【英文】\nResearchers on the northern island established a new wildlife protection zone along the rocky coast to preserve the natural habitat of wild sea otters.\n\n【質問】Which animal is the protection zone designed for?\n（その保護区域はどの動物のために設けられましたか？）\n\n【正解の訳】\n1. ラッコ（Sea otters）。\n\n【解説】habitat of wild sea otters を保護するためです。",
    dialogue: [
      { speaker: 'male', text: "Researchers on the northern island established a new wildlife protection zone along the rocky coast to preserve the natural habitat of wild sea otters." },
      { speaker: 'narrator', text: "Question. Which animal is the protection zone designed for?" }
    ],
    aud_complete: "Which animal is the protection zone designed for? Sea otters."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Japanese calligraphy.", "Traditional tea ceremony.", "Flower arrangement.", "Kendo martial arts."],
    ans: 1,
    exp: "【英文】\nDuring her summer trip to Kyoto, Karen stayed at a traditional inn and attended workshops every afternoon to learn the etiquette of the Japanese tea ceremony.\n\n【質問】What traditional culture did Karen study in Kyoto?\n（カレンは京都で何の伝統文化を学びましたか？）\n\n【正解の訳】\n2. 茶道（Traditional tea ceremony）。\n\n【解説】Japanese tea ceremony を学びました。",
    explain: "【英文】\nDuring her summer trip to Kyoto, Karen stayed at a traditional inn and attended workshops every afternoon to learn the etiquette of the Japanese tea ceremony.\n\n【質問】What traditional culture did Karen study in Kyoto?\n（カレンは京都で何の伝統文化を学びましたか？）\n\n【正解の訳】\n2. 茶道（Traditional tea ceremony）。\n\n【解説】Japanese tea ceremony を学びました。",
    dialogue: [
      { speaker: 'female', text: "During her summer trip to Kyoto, Karen stayed at a traditional inn and attended workshops every afternoon to learn the etiquette of the Japanese tea ceremony." },
      { speaker: 'narrator', text: "Question. What traditional culture did Karen study in Kyoto?" }
    ],
    aud_complete: "What traditional culture did Karen study in Kyoto? Traditional tea ceremony."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["A solar-powered water filter.", "An earthquake alarm system.", "A wind energy generator.", "A robotic garden helper."],
    ans: 0,
    exp: "【英文】\nAt the national high school science fair, a student team won first prize for developing a compact, solar-powered water filtration device designed for emergency use.\n\n【質問】What invention won first prize at the science fair?\n（科学フェアで何の発明が一等賞を受賞しましたか？）\n\n【正解の訳】\n1. 太陽光発電の浄水フィルター装置。\n\n【解説】solar-powered water filtration device が受賞しました。",
    explain: "【英文】\nAt the national high school science fair, a student team won first prize for developing a compact, solar-powered water filtration device designed for emergency use.\n\n【質問】What invention won first prize at the science fair?\n（科学フェアで何の発明が一等賞を受賞しましたか？）\n\n【正解の訳】\n1. 太陽光発電の浄水フィルター装置。\n\n【解説】solar-powered water filtration device が受賞しました。",
    dialogue: [
      { speaker: 'male', text: "At the national high school science fair, a student team won first prize for developing a compact, solar-powered water filtration device designed for emergency use." },
      { speaker: 'narrator', text: "Question. What invention won first prize at the science fair?" }
    ],
    aud_complete: "What invention won first prize at the science fair? A solar-powered water filter."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Track 1.", "Track 2.", "Track 3.", "Track 4."],
    ans: 2,
    exp: "【英文】\nMay I have your attention, train passengers. The rapid express departing for Central Airport at ten thirty has changed platforms due to maintenance work. Please proceed to Track 3.\n\n【質問】Which track will the airport train depart from?\n（空港行きの電車はどの番線から出発しますか？）\n\n【正解の訳】\n3. 3番線。\n\n【解説】proceed to Track 3 とアナウンスされています。",
    explain: "【英文】\nMay I have your attention, train passengers. The rapid express departing for Central Airport at ten thirty has changed platforms due to maintenance work. Please proceed to Track 3.\n\n【質問】Which track will the airport train depart from?\n（空港行きの電車はどの番線から出発しますか？）\n\n【正解の訳】\n3. 3番線。\n\n【解説】proceed to Track 3 とアナウンスされています。",
    dialogue: [
      { speaker: 'female', text: "May I have your attention, train passengers. The rapid express departing for Central Airport at ten thirty has changed platforms due to maintenance work. Please proceed to Track 3." },
      { speaker: 'narrator', text: "Question. Which track will the airport train depart from?" }
    ],
    aud_complete: "Which track will the airport train depart from? Track 3."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Five books.", "Eight books.", "Ten books.", "Twelve books."],
    ans: 2,
    exp: "【英文】\nDuring the autumn reading challenge at West High School, students who successfully read ten English books within four weeks received a special commemorative bookmark.\n\n【質問】How many books did students need to read for the prize?\n（生徒たちは記念品をもらうために何冊本を読む必要がありましたか？）\n\n【正解の訳】\n3. 10冊。\n\n【解説】read ten English books と述べています。",
    explain: "【英文】\nDuring the autumn reading challenge at West High School, students who successfully read ten English books within four weeks received a special commemorative bookmark.\n\n【質問】How many books did students need to read for the prize?\n（生徒たちは記念品をもらうために何冊本を読む必要がありましたか？）\n\n【正解の訳】\n3. 10冊。\n\n【解説】read ten English books と述べています。",
    dialogue: [
      { speaker: 'female', text: "During the autumn reading challenge at West High School, students who successfully read ten English books within four weeks received a special commemorative bookmark." },
      { speaker: 'narrator', text: "Question. How many books did students need to read for the prize?" }
    ],
    aud_complete: "How many books did students need to read for the prize? Ten books."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Three kilometers.", "Five kilometers.", "Eight kilometers.", "Ten kilometers."],
    ans: 1,
    exp: "【英文】\nTo prepare for next month's city half-marathon, Kenji wakes up at six o'clock every morning and runs five kilometers around the lake near his house.\n\n【質問】How far does Kenji run every morning?\n（ケンジは毎朝どのくらいの距離を走りますか？）\n\n【正解の訳】\n2. 5キロメートル。\n\n【解説】runs five kilometers と述べています。",
    explain: "【英文】\nTo prepare for next month's city half-marathon, Kenji wakes up at six o'clock every morning and runs five kilometers around the lake near his house.\n\n【質問】How far does Kenji run every morning?\n（ケンジは毎朝どのくらいの距離を走りますか？）\n\n【正解の訳】\n2. 5キロメートル。\n\n【解説】runs five kilometers と述べています。",
    dialogue: [
      { speaker: 'male', text: "To prepare for next month's city half-marathon, Kenji wakes up at six o'clock every morning and runs five kilometers around the lake near his house." },
      { speaker: 'narrator', text: "Question. How far does Kenji run every morning?" }
    ],
    aud_complete: "How far does Kenji run every morning? Five kilometers."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Sunny with light wind.", "Cloudy all day.", "Rainy in the afternoon.", "Snow showers in the evening."],
    ans: 3,
    exp: "【英文】\nHere is your evening weather update. While tomorrow morning will stay mild and cloudy, cold mountain air will bring sudden snow showers starting around seven in the evening.\n\n【質問】What weather is expected tomorrow evening?\n（明日の夕方・夜はどんな天気が予想されますか？）\n\n【正解の訳】\n4. 突然のにわか雪。\n\n【解説】snow showers starting around seven in the evening と予報されています。",
    explain: "【英文】\nHere is your evening weather update. While tomorrow morning will stay mild and cloudy, cold mountain air will bring sudden snow showers starting around seven in the evening.\n\n【質問】What weather is expected tomorrow evening?\n（明日の夕方・夜はどんな天気が予想されますか？）\n\n【正解の訳】\n4. 突然のにわか雪。\n\n【解説】snow showers starting around seven in the evening と予報されています。",
    dialogue: [
      { speaker: 'female', text: "Here is your evening weather update. While tomorrow morning will stay mild and cloudy, cold mountain air will bring sudden snow showers starting around seven in the evening." },
      { speaker: 'narrator', text: "Question. What weather is expected tomorrow evening?" }
    ],
    aud_complete: "What weather is expected tomorrow evening? Snow showers in the evening."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["300 yen.", "500 yen.", "800 yen.", "1,000 yen."],
    ans: 1,
    exp: "【英文】\nWelcome to the modern art gallery. Special exhibition admission is 500 yen for teenagers and students, while standard adult tickets are 1,000 yen.\n\n【質問】How much is the admission fee for students?\n（学生の入場料はいくらですか？）\n\n【正解の訳】\n2. 500円。\n\n【解説】500 yen for teenagers and students と案内されています。",
    explain: "【英文】\nWelcome to the modern art gallery. Special exhibition admission is 500 yen for teenagers and students, while standard adult tickets are 1,000 yen.\n\n【質問】How much is the admission fee for students?\n（学生の入場料はいくらですか？）\n\n【正解の訳】\n2. 500円。\n\n【解説】500 yen for teenagers and students と案内されています。",
    dialogue: [
      { speaker: 'male', text: "Welcome to the modern art gallery. Special exhibition admission is 500 yen for teenagers and students, while standard adult tickets are 1,000 yen." },
      { speaker: 'narrator', text: "Question. How much is the admission fee for students?" }
    ],
    aud_complete: "How much is the admission fee for students? 500 yen."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["In Australia.", "In the United Kingdom.", "In New Zealand.", "In Canada."],
    ans: 2,
    exp: "【英文】\nDuring spring break, Maya participated in a high school homestay program in New Zealand. She stayed with a local farming family and learned how to shear wool from sheep.\n\n【質問】Where did Maya do her homestay program?\n（マヤはどこでホームステイプログラムを体験しましたか？）\n\n【正解の訳】\n3. ニュージーランドで。\n\n【解説】homestay program in New Zealand と述べています。",
    explain: "【英文】\nDuring spring break, Maya participated in a high school homestay program in New Zealand. She stayed with a local farming family and learned how to shear wool from sheep.\n\n【質問】Where did Maya do her homestay program?\n（マヤはどこでホームステイプログラムを体験しましたか？）\n\n【正解の訳】\n3. ニュージーランドで。\n\n【解説】homestay program in New Zealand と述べています。",
    dialogue: [
      { speaker: 'female', text: "During spring break, Maya participated in a high school homestay program in New Zealand. She stayed with a local farming family and learned how to shear wool from sheep." },
      { speaker: 'narrator', text: "Question. Where did Maya do her homestay program?" }
    ],
    aud_complete: "Where did Maya do her homestay program? In New Zealand."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["100 muffins.", "150 muffins.", "200 muffins.", "250 muffins."],
    ans: 2,
    exp: "【英文】\nAt the annual school charity fair, the baking club made fresh blueberry and banana muffins. They completely sold out all 200 muffins within two hours to support animal rescue.\n\n【質問】How many muffins did the baking club sell?\n（お菓子作り部はマフィンを何個完売させましたか？）\n\n【正解の訳】\n3. 200個。\n\n【解説】sold out all 200 muffins と述べています。",
    explain: "【英文】\nAt the annual school charity fair, the baking club made fresh blueberry and banana muffins. They completely sold out all 200 muffins within two hours to support animal rescue.\n\n【質問】How many muffins did the baking club sell?\n（お菓子作り部はマフィンを何個完売させましたか？）\n\n【正解の訳】\n3. 200個。\n\n【解説】sold out all 200 muffins と述べています。",
    dialogue: [
      { speaker: 'male', text: "At the annual school charity fair, the baking club made fresh blueberry and banana muffins. They completely sold out all 200 muffins within two hours to support animal rescue." },
      { speaker: 'narrator', text: "Question. How many muffins did the baking club sell?" }
    ],
    aud_complete: "How many muffins did the baking club sell? 200 muffins."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["At 4:30 p.m.", "At 5:00 p.m.", "At 5:30 p.m.", "At 6:00 p.m."],
    ans: 1,
    exp: "【英文】\nAttention library visitors. The main reading room will close at five o'clock today for regular maintenance. Please return all borrowed electronic equipment to the front counter by five.\n\n【質問】What time must visitors return electronic equipment?\n（来館者は何時までに電子機器を返却しなければなりませんか？）\n\n【正解の訳】\n2. 午後5時までに。\n\n【解説】return all borrowed electronic equipment... by five と案内されています。",
    explain: "【英文】\nAttention library visitors. The main reading room will close at five o'clock today for regular maintenance. Please return all borrowed electronic equipment to the front counter by five.\n\n【質問】What time must visitors return electronic equipment?\n（来館者は何時までに電子機器を返却しなければなりませんか？）\n\n【正解の訳】\n2. 午後5時までに。\n\n【解説】return all borrowed electronic equipment... by five と案内されています。",
    dialogue: [
      { speaker: 'female', text: "Attention library visitors. The main reading room will close at five o'clock today for regular maintenance. Please return all borrowed electronic equipment to the front counter by five." },
      { speaker: 'narrator', text: "Question. What time must visitors return electronic equipment?" }
    ],
    aud_complete: "What time must visitors return electronic equipment? At 5:00 p.m."
  },
  {
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["On Friday evening.", "On Saturday night.", "On Sunday night.", "Next Friday."],
    ans: 1,
    exp: "【英文】\nDue to thick clouds expected on Friday, the high school astronomy club's monthly stargazing observation event has been moved to Saturday night when skies will be clear.\n\n【質問】When will the stargazing event take place?\n（天体観測イベントはいつ開催されますか？）\n\n【正解の訳】\n2. 土曜日の夜に。\n\n【解説】moved to Saturday night と案内されています。",
    explain: "【英文】\nDue to thick clouds expected on Friday, the high school astronomy club's monthly stargazing observation event has been moved to Saturday night when skies will be clear.\n\n【質問】When will the stargazing event take place?\n（天体観測イベントはいつ開催されますか？）\n\n【正解の訳】\n2. 土曜日の夜に。\n\n【解説】moved to Saturday night と案内されています。",
    dialogue: [
      { speaker: 'male', text: "Due to thick clouds expected on Friday, the high school astronomy club's monthly stargazing observation event has been moved to Saturday night when skies will be clear." },
      { speaker: 'narrator', text: "Question. When will the stargazing event take place?" }
    ],
    aud_complete: "When will the stargazing event take place? On Saturday night."
  }
];
// ==================== 7. ボス戦用 本番過去問模試 データベース (No.1 〜 No.45) ====================
const ACTUAL_PAST_EXAM_DATA = [
  // ---------- 第1弾 (No.1 〜 No.25) ----------
  {
    id: "past_1",
    type: "grammar",
    q: "Although she was exhausted after the long journey, she managed ( ) to the hotel safely.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["get", "to get", "getting", "got"],
    ans: 1,
    explain: "【解説】〈manage to ＋ 動詞の原形〉で「どうにか〜し遂げる・なんとか〜する」を表します。正解は to get です。\n\n【訳】長旅の後で極度に疲れていましたが、彼女はどうにか無事にホテルに到着しました。",
    audio_question: "Although she was exhausted after the long journey, she managed ... to the hotel safely.",
    audio_complete: "Although she was exhausted after the long journey, she managed to get to the hotel safely."
  },
  {
    id: "past_2",
    type: "grammar",
    q: "The principal insisted that all students ( ) present at the morning ceremony.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["be", "is", "were", "are"],
    ans: 0,
    explain: "【解説】要求・主張・提案を表す動詞（insist, suggest, demand など）に続く that 節内では、動詞は原形（be）を用います（仮定法現在）。\n\n【訳】校長先生は、全校生徒が朝の式典に出席するよう強く求めました。",
    audio_question: "The principal insisted that all students ... present at the morning ceremony.",
    audio_complete: "The principal insisted that all students be present at the morning ceremony."
  },
  {
    id: "past_3",
    type: "grammar",
    q: "It was ( ) a thrilling fantasy novel that I couldn't stop reading it until morning.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["so", "such", "too", "very"],
    ans: 1,
    explain: "【解説】〈such ＋ a ＋ 形容詞 ＋ 名詞 ＋ that 節〉で「非常に…な〜なので」を表します。名詞句（a thrilling fantasy novel）があるため such が正解です。\n\n【訳】それはとてもワクワクするファンタジー小説だったので、私は朝まで読むのをやめられませんでした。",
    audio_question: "It was ... a thrilling fantasy novel that I couldn't stop reading it until morning.",
    audio_complete: "It was such a thrilling fantasy novel that I couldn't stop reading it until morning."
  },
  {
    id: "past_4",
    type: "grammar",
    q: "By the time we reached the theater, the musical had already ( ).",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["start", "starts", "started", "starting"],
    ans: 2,
    explain: "【解説】過去のある時点（reached）よりも前に完了していたことを表す過去完了形〈had ＋ 過去分詞〉です。正解は started です。\n\n【訳】私たちが劇場に到着したときには、ミュージカルはすでに始まっていました。",
    audio_question: "By the time we reached the theater, the musical had already ...",
    audio_complete: "By the time we reached the theater, the musical had already started."
  },
  {
    id: "past_5",
    type: "grammar",
    q: "A: Excuse me, could you tell me how to get to the modern art museum?\nB: Go straight for two blocks, and it will be ( ) your right.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["in", "at", "on", "to"],
    ans: 2,
    explain: "【解説】道案内で「あなたの右手にあります」と言うときは前置詞 on を用いて on your right と表します。\n\n【訳】A: すみません、現代美術館へはどう行けばいいか教えていただけますか？\nB: 2ブロックまっすぐ行くと、右手にありますよ。",
    audio_question: "Excuse me, could you tell me how to get to the modern art museum?",
    audio_complete: "Go straight for two blocks, and it will be on your right."
  },
  {
    id: "past_6",
    type: "grammar",
    q: "The city council is making every ( ) to protect the coastal environment from plastic pollution.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["effort", "effect", "event", "error"],
    ans: 0,
    explain: "【解説】「あらゆる努力をする」は熟語 make every effort to 〜 で表します。正解は effort です。\n\n【訳】市議会は、プラスチック汚染から沿岸環境を守るためにあらゆる努力を重ねています。",
    audio_question: "The city council is making every ... to protect the coastal environment from plastic pollution.",
    audio_complete: "The city council is making every effort to protect the coastal environment from plastic pollution."
  },
  {
    id: "past_7",
    type: "grammar",
    q: "Due to the sudden dense fog, our flight was ( ) for more than three hours.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["delay", "delayed", "delaying", "delays"],
    ans: 1,
    explain: "【解説】「（飛行機や電車が）遅れる・遅延させられる（受動態）」は〈be delayed〉で表します。正解は delayed です。\n\n【訳】突然の濃霧のため、私たちの飛行機は3時間以上遅延しました。",
    audio_question: "Due to the sudden dense fog, our flight was ... for more than three hours.",
    audio_complete: "Due to the sudden dense fog, our flight was delayed for more than three hours."
  },
  {
    id: "past_8",
    type: "grammar",
    q: "She sincerely apologized to her teacher ( ) submitting her homework assignment late.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["to", "for", "with", "about"],
    ans: 1,
    explain: "【解説】〈apologize to 人 for 理由〉で「人に〜の理由で謝罪する」を表します。正解は for です。\n\n【訳】彼女は宿題の提出が遅れたことについて、先生に心から謝罪しました。",
    audio_question: "She sincerely apologized to her teacher ... submitting her homework assignment late.",
    audio_complete: "She sincerely apologized to her teacher for submitting her homework assignment late."
  },
  {
    id: "past_9",
    type: "grammar",
    q: "The international company is looking for young people who are capable ( ) working in a team.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["of", "to", "for", "with"],
    ans: 0,
    explain: "【解説】「〜する能力がある・〜できる」は熟語 be capable of 〜 で表します。\n\n【訳】その国際的な企業は、チームで働く能力のある若者を求めています。",
    audio_question: "The international company is looking for young people who are capable ... working in a team.",
    audio_complete: "The international company is looking for young people who are capable of working in a team."
  },
  {
    id: "past_10",
    type: "grammar",
    q: "If I ( ) your phone number, I would have called you yesterday afternoon.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["know", "knew", "had known", "have known"],
    ans: 2,
    explain: "【解説】過去の事実に反する仮定を表す「仮定法過去完了」です。if節内は〈had ＋ 過去分詞〉（had known）にします。\n\n【訳】もしあなたの電話番号を知っていたら、昨日の午後に電話をかけたのに。",
    audio_question: "If I ... your phone number, I would have called you yesterday afternoon.",
    audio_complete: "If I had known your phone number, I would have called you yesterday afternoon."
  },
  {
    id: "past_11",
    type: "grammar",
    q: "The young woman ( ) lives next door is an internationally acclaimed violinist.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["who", "which", "whose", "whom"],
    ans: 0,
    explain: "【解説】先行詞が「人（The young woman）」で、関係詞節の主語となるため主格の who が正解です。\n\n【訳】隣に住んでいる若い女性は、国際的に評価されているバイオリニストです。",
    audio_question: "The young woman ... lives next door is an internationally acclaimed violinist.",
    audio_complete: "The young woman who lives next door is an internationally acclaimed violinist."
  },
  {
    id: "past_12",
    type: "grammar",
    q: "You ( ) better take an umbrella with you, as it is likely to rain this evening.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["had", "would", "should", "did"],
    ans: 0,
    explain: "【解説】〈had better ＋ 動詞の原形〉で「〜したほうがよい（強い忠告）」を表します。\n\n【訳】今晩雨が降りそうなので、傘を持って行ったほうがいいですよ。",
    audio_question: "You ... better take an umbrella with you, as it is likely to rain this evening.",
    audio_complete: "You had better take an umbrella with you, as it is likely to rain this evening."
  },
  {
    id: "past_13",
    type: "grammar",
    q: "All the students are looking forward to ( ) the botanical gardens next week.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["visit", "visited", "visiting", "to visit"],
    ans: 2,
    explain: "【解説】熟語 look forward to 〜 の to は前置詞なので、後ろには動名詞 visiting が続きます。\n\n【訳】生徒たちはみんな、来週植物園を訪れることを楽しみに待っています。",
    audio_question: "All the students are looking forward to ... the botanical gardens next week.",
    audio_complete: "All the students are looking forward to visiting the botanical gardens next week."
  },
  {
    id: "past_14",
    type: "grammar",
    q: "The ( ) you practice speaking in English, the more confident you will become.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["more", "most", "much", "many"],
    ans: 0,
    explain: "【解説】〈The ＋ 比較級 ..., the ＋ 比較級 〜〉で「…すればするほど、ますます〜になる」を表します。\n\n【訳】英語で話す練習をすればするほど、より自信が持てるようになりますよ。",
    audio_question: "The ... you practice speaking in English, the more confident you will become.",
    audio_complete: "The more you practice speaking in English, the more confident you will become."
  },
  {
    id: "past_15",
    type: "grammar",
    q: "A: Would you like another slice of delicious apple pie?\nB: No, thank you. ( ).",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["I'm hungry", "I'm full", "I'm late", "I'm busy"],
    ans: 1,
    explain: "【解説】食べ物の勧めを丁寧に断る理由として「お腹がいっぱいです」を表す I'm full. が適切です。\n\n【訳】A: おいしいアップルパイをもう1切れ召し上がりますか？\nB: いいえ、結構です。お腹がいっぱいです。",
    audio_question: "Would you like another slice of delicious apple pie?",
    audio_complete: "No, thank you. I'm full."
  },
  {
    id: "past_16",
    type: "grammar",
    q: "He was ( ) exhausted to concentrate on his chemistry studies last night.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["so", "too", "very", "much"],
    ans: 1,
    explain: "【解説】〈too ＋ 形容詞 ＋ to ＋ 動詞の原形〉で「あまりに〜すぎて…できない」を表します。正解は too です。\n\n【訳】彼は昨夜、あまりに疲れ果てていたため化学の勉強に集中できませんでした。",
    audio_question: "He was ... exhausted to concentrate on his chemistry studies last night.",
    audio_complete: "He was too exhausted to concentrate on his chemistry studies last night."
  },
  {
    id: "past_17",
    type: "grammar",
    q: "The stormy weather prevented the passenger ferry ( ) departing from the port.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["to", "from", "for", "with"],
    ans: 1,
    explain: "【解説】〈prevent A from 〜ing〉で「Aが〜するのを妨げる／〜のためにAが…できない」を表します。\n\n【訳】嵐のような悪天候のために、旅客フェリーは港から出港することができませんでした。",
    audio_question: "The stormy weather prevented the passenger ferry ... departing from the port.",
    audio_complete: "The stormy weather prevented the passenger ferry from departing from the port."
  },
  {
    id: "past_18",
    type: "grammar",
    q: "She has lived in Tokyo ( ) she graduated from university four years ago.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["since", "for", "during", "while"],
    ans: 0,
    explain: "【解説】「〜して以来ずっと（起点の過去）」を表す接続詞 since が現在完了形と共に用いられます。\n\n【訳】彼女は4年前に大学を卒業して以来、ずっと東京に住んでいます。",
    audio_question: "She has lived in Tokyo ... she graduated from university four years ago.",
    audio_complete: "She has lived in Tokyo since she graduated from university four years ago."
  },
  {
    id: "past_19",
    type: "grammar",
    q: "A: What's the matter with you, Lisa?\nB: I have a severe ( ) and a fever.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["headache", "passport", "schedule", "station"],
    ans: 0,
    explain: "【解説】「どうしたのですか？」という体調の尋ねに対して症状を答えるため、headache（頭痛）が適切です。\n\n【訳】A: どうしたの、リサ？\nB: ひどい頭痛と熱があるの。",
    audio_question: "What's the matter with you, Lisa?",
    audio_complete: "I have a severe headache and a fever."
  },
  {
    id: "past_20",
    type: "grammar",
    q: "( ) from the top of the hill, the ancient castle looked magnificent.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["See", "Seeing", "Seen", "Saw"],
    ans: 2,
    explain: "【解説】城が「見られる」という受動の意味を表す分詞構文のため、過去分詞 Seen が正解です。\n\n【訳】丘の頂上から見ると、その古代の城は壮大に見えました。",
    audio_question: "... from the top of the hill, the ancient castle looked magnificent.",
    audio_complete: "Seen from the top of the hill, the ancient castle looked magnificent."
  },
  {
    id: "past_21",
    type: "grammar",
    q: "Please remind me ( ) buy some fresh ingredients on the way home.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["buy", "buying", "to buy", "bought"],
    ans: 2,
    explain: "【解説】〈remind ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜することを思い出させる・忘れず〜するよう言う」を表します。\n\n【訳】帰り道に新鮮な食材を買うのを忘れずに私に思い出させてね。",
    audio_question: "Please remind me ... buy some fresh ingredients on the way home.",
    audio_complete: "Please remind me to buy some fresh ingredients on the way home."
  },
  {
    id: "past_22",
    type: "grammar",
    q: "This magnificent cathedral was ( ) by skilled architects in the fourteenth century.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["build", "builds", "built", "building"],
    ans: 2,
    explain: "【解説】受動態〈was ＋ 過去分詞〉（〜によって建てられた）の形です。build の過去分詞は built です。\n\n【訳】この壮大な大聖堂は、14世紀に熟練した建築家たちによって建てられました。",
    audio_question: "This magnificent cathedral was ... by skilled architects in the fourteenth century.",
    audio_complete: "This magnificent cathedral was built by skilled architects in the fourteenth century."
  },
  {
    id: "past_23",
    type: "grammar",
    q: "I prefer studying in the quiet library ( ) studying in my noisy bedroom.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["than", "to", "from", "for"],
    ans: 1,
    exp: "【解説】〈prefer A to B〉で「BよりもAを好む」を表します（比較対象に to を用います）。",
    explain: "【解説】〈prefer A to B〉で「BよりもAを好む」を表します（比較対象に to を用います）。\n\n【訳】私は騒がしい自分の部屋で勉強するよりも、静かな図書館で勉強する方を好みます。",
    audio_question: "I prefer studying in the quiet library ... studying in my noisy bedroom.",
    audio_complete: "I prefer studying in the quiet library to studying in my noisy bedroom."
  },
  {
    id: "past_24",
    type: "grammar",
    q: "A: May I speak to Professor Clark, please?\nB: ( ), please. I'll connect your call.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["Hold on", "Hurry up", "Look out", "Take off"],
    ans: 0,
    explain: "【解説】電話で「（切らずに）少々お待ちください」と伝える定番表現は Hold on, please. です。\n\n【訳】A: クラーク教授とお話しできますでしょうか？\nB: 少々お待ちください。お電話をおつなぎいたします。",
    audio_question: "May I speak to Professor Clark, please?",
    audio_complete: "Hold on, please. I'll connect your call."
  },
  {
    id: "past_25",
    type: "grammar",
    q: "( ) the severe weather conditions, the rescue team successfully reached the mountain climbers.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["Despite", "Although", "Because", "Unless"],
    ans: 0,
    explain: "【解説】後ろに名詞句（the severe weather conditions）が続いているため、前置詞の Despite（〜にもかかわらず）が正解です。\n\n【訳】厳しい気象条件にもかかわらず、救助隊は無事に登山者たちのもとに到達しました。",
    audio_question: "... the severe weather conditions, the rescue team successfully reached the mountain climbers.",
    audio_complete: "Despite the severe weather conditions, the rescue team successfully reached the mountain climbers."
  },

  // ---------- 第2弾 (No.26 〜 No.45) ----------
  {
    id: "past_26",
    type: "grammar",
    q: "The speaker spoke slowly and clearly ( ) that everyone in the auditorium could understand.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["so", "such", "in", "as"],
    ans: 0,
    explain: "【解説】〈so that ＋ 主語 ＋ could ＋ 原形〉で「〜できるように（目的）」を表します。\n\n【訳】講堂にいる全員が理解できるように、講演者はゆっくりとはっきりと話しました。",
    audio_question: "The speaker spoke slowly and clearly ... that everyone in the auditorium could understand.",
    audio_complete: "The speaker spoke slowly and clearly so that everyone in the auditorium could understand."
  },
  {
    id: "past_27",
    type: "grammar",
    q: "It is no use ( ) over spilled milk; we should focus on our next project.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["cry", "cried", "crying", "to cry"],
    ans: 2,
    explain: "【解説】〈It is no use ＋ 動名詞（〜ing）〉で「〜しても無駄である（覆水盆に返らず）」を表します。\n\n【訳】済んでしまったことを悔やんでも無駄です。次の企画に集中しましょう。",
    audio_question: "It is no use ... over spilled milk; we should focus on our next project.",
    audio_complete: "It is no use crying over spilled milk; we should focus on our next project."
  },
  {
    id: "past_28",
    type: "grammar",
    q: "A: Have you finished writing your English term paper?\nB: No, not ( ). I still need to write the conclusion.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["already", "yet", "still", "just"],
    ans: 1,
    explain: "【解説】否定の返答で「まだ〜ない」を表すときは not yet を用います。\n\n【訳】A: 英語のレポートはもう書き終わった？\nB: ううん、まだだよ。まだ結論を書く必要があるんだ。",
    audio_question: "Have you finished writing your English term paper?",
    audio_complete: "No, not yet. I still need to write the conclusion."
  },
  {
    id: "past_29",
    type: "grammar",
    q: "The young scientist was awarded the prize for her outstanding ( ) in medical research.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["achievement", "accident", "appointment", "attitude"],
    ans: 0,
    explain: "【解説】文脈に合致する「業績・功績・達成」を表す名詞は achievement です。\n\n【訳】その若き科学者は、医学研究における傑出した功績に対して賞を授与されました。",
    audio_question: "The young scientist was awarded the prize for her outstanding ... in medical research.",
    audio_complete: "The young scientist was awarded the prize for her outstanding achievement in medical research."
  },
  {
    id: "past_30",
    type: "grammar",
    q: "We promised to take ( ) of our neighbor's golden retriever while they were away on vacation.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["care", "look", "time", "part"],
    ans: 0,
    explain: "【解説】「〜の世話をする」は熟語 take care of 〜 で表します。\n\n【訳】私たちは隣人が休暇で留守の間、彼らのゴールデンレトリバーの世話をすることを約束しました。",
    audio_question: "We promised to take ... of our neighbor's golden retriever while they were away on vacation.",
    audio_complete: "We promised to take care of our neighbor's golden retriever while they were away on vacation."
  },
  {
    id: "past_31",
    type: "grammar",
    q: "She sat quietly on the garden bench with her eyes ( ) in deep thought.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["close", "closed", "closing", "to close"],
    ans: 1,
    explain: "【解説】〈with ＋ 名詞（eyes）＋ 過去分詞（closed）〉で「目を閉じた状態で（付帯状況）」を表します。\n\n【訳】彼女は深く物思いに沈みながら、目を閉じたまま庭のベンチに静かに座っていました。",
    audio_question: "She sat quietly on the garden bench with her eyes ... in deep thought.",
    audio_complete: "She sat quietly on the garden bench with her eyes closed in deep thought."
  },
  {
    id: "past_32",
    type: "grammar",
    q: "( ) it was raining heavily, the students continued their soccer practice enthusiastically.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["Although", "Because", "Unless", "Since"],
    ans: 0,
    explain: "【解説】「激しい雨が降っていたけれども」という逆接の接続詞 Although が文意に合致します。\n\n【訳】激しい雨が降っていたにもかかわらず、生徒たちは熱心にサッカーの練習を続けました。",
    audio_question: "... it was raining heavily, the students continued their soccer practice enthusiastically.",
    audio_complete: "Although it was raining heavily, the students continued their soccer practice enthusiastically."
  },
  {
    id: "past_33",
    type: "grammar",
    q: "A: How long does it take from here to the central airport on foot?\nB: It takes about fifteen ( ).",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["kilometers", "dollars", "minutes", "hours"],
    ans: 2,
    explain: "【解説】所要時間（How long）に対する返答として「約15分」を表す minutes が適切です。\n\n【訳】A: ここから中央空港まで徒歩でどのくらい時間がかかりますか？\nB: 約15分かかります。",
    audio_question: "How long does it take from here to the central airport on foot?",
    audio_complete: "It takes about fifteen minutes."
  },
  {
    id: "past_34",
    type: "grammar",
    q: "The English teacher made all the students ( ) their presentation scripts carefully.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["rewrite", "rewrote", "rewriting", "to rewrite"],
    ans: 0,
    explain: "【解説】使役動詞 make の後は〈人 ＋ 動詞の原形〉で「人に〜させる」を表します。正解は rewrite です。\n\n【訳】英語の先生は、生徒全員にプレゼンテーションの原稿を入念に書き直させました。",
    audio_question: "The English teacher made all the students ... their presentation scripts carefully.",
    audio_complete: "The English teacher made all the students rewrite their presentation scripts carefully."
  },
  {
    id: "past_35",
    type: "grammar",
    q: "Neither Emily ( ) her sister was able to attend the award ceremony yesterday.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["or", "nor", "and", "but"],
    ans: 1,
    explain: "【解説】〈Neither A nor B〉で「AもBも〜ない（両者否定）」を表します。\n\n【訳】エミリーも彼女の妹も、昨日の授賞式に出席することができませんでした。",
    audio_question: "Neither Emily ... her sister was able to attend the award ceremony yesterday.",
    audio_complete: "Neither Emily nor her sister was able to attend the award ceremony yesterday."
  },
  {
    id: "past_36",
    type: "grammar",
    q: "I wish I ( ) speak French fluently like my foreign language teacher.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["can", "could", "will", "may"],
    ans: 1,
    explain: "【解説】〈I wish ＋ 仮定法過去〉で「〜できたらいいのに（現在の実現困難な願望）」を表します。can の過去形 could が正解です。\n\n【訳】外国語の先生のようにフランス語が流暢に話せたらいいのに。",
    audio_question: "I wish I ... speak French fluently like my foreign language teacher.",
    audio_complete: "I wish I could speak French fluently like my foreign language teacher."
  },
  {
    id: "past_37",
    type: "grammar",
    q: "The flight attendant politely asked the passengers ( ) their mobile devices.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["turn off", "turned off", "to turn off", "turning off"],
    ans: 2,
    explain: "【解説】〈ask ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜するよう頼む」を表します。正解は to turn off です。\n\n【訳】客室乗務員は乗客に携帯端末の電源を切るよう丁重にお願いしました。",
    audio_question: "The flight attendant politely asked the passengers ... their mobile devices.",
    audio_complete: "The flight attendant politely asked the passengers to turn off their mobile devices."
  },
  {
    id: "past_38",
    type: "grammar",
    q: "This traditional melody always reminds me ( ) the cherry blossoms in my hometown.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["of", "to", "for", "with"],
    ans: 0,
    explain: "【解説】〈remind A of B〉で「AにBを思い出させる」を表します。正解は of です。\n\n【訳】この伝統的な旋律は、いつも私に故郷の桜を思い出させます。",
    audio_question: "This traditional melody always reminds me ... the cherry blossoms in my hometown.",
    audio_complete: "This traditional melody always reminds me of the cherry blossoms in my hometown."
  },
  {
    id: "past_39",
    type: "grammar",
    q: "You will not improve your communication skills ( ) you actively practice speaking.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["if", "unless", "since", "while"],
    ans: 1,
    explain: "【解説】〈unless 〜〉で「〜しない限りは（条件の否定）」を表します。\n\n【訳】積極的に話す練習をしない限り、コミュニケーション能力は向上しないでしょう。",
    audio_question: "You will not improve your communication skills ... you actively practice speaking.",
    audio_complete: "You will not improve your communication skills unless you actively practice speaking."
  },
  {
    id: "past_40",
    type: "grammar",
    q: "A: Thank you very much for inviting me to your graduation concert.\nB: ( ). I'm glad you could make it.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["You're welcome", "I'm sorry", "Never mind", "Me, too"],
    ans: 0,
    explain: "【解説】お礼に対する丁寧な返答は You're welcome.（どういたしまして）が適切です。\n\n【訳】A: 卒業記念コンサートにご招待いただき、本当にありがとうございました。\nB: どういたしまして。お越しいただけて嬉しいです。",
    audio_question: "Thank you very much for inviting me to your graduation concert.",
    audio_complete: "You're welcome. I'm glad you could make it."
  },
  {
    id: "past_41",
    type: "grammar",
    q: "The city council decided to ( ) up a new community center in the residential area.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["set", "make", "put", "take"],
    ans: 0,
    explain: "【解説】「（施設・組織などを）設立する・設置する」は熟語 set up 〜 で表します。\n\n【訳】市議会は住宅地に新しいコミュニティセンターを設立することを決定しました。",
    audio_question: "The city council decided to ... up a new community center in the residential area.",
    audio_complete: "The city council decided to set up a new community center in the residential area."
  },
  {
    id: "past_42",
    type: "grammar",
    q: "She is looking for an apartment ( ) is within walking distance of the subway station.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["which", "who", "whose", "where"],
    ans: 0,
    explain: "【解説】先行詞が「物・場所（an apartment）」で関係詞節の主語となるため、関係代名詞 which が正解です。\n\n【訳】彼女は地下鉄の駅から徒歩圏内にあるアパートを探しています。",
    audio_question: "She is looking for an apartment ... is within walking distance of the subway station.",
    audio_complete: "She is looking for an apartment which is within walking distance of the subway station."
  },
  {
    id: "past_43",
    type: "grammar",
    q: "It is essential for high school students ( ) sufficient sleep every night.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["get", "got", "to get", "getting"],
    ans: 2,
    explain: "【解説】〈It is ＋ 形容詞 ＋ for 人 ＋ to ＋ 動詞の原形〉で「人が〜することは不可欠だ」を表します。正解は to get です。\n\n【訳】高校生が毎晩十分な睡眠をとることは極めて重要です。",
    audio_question: "It is essential for high school students ... sufficient sleep every night.",
    audio_complete: "It is essential for high school students to get sufficient sleep every night."
  },
  {
    id: "past_44",
    type: "grammar",
    q: "I cannot help ( ) excited whenever I visit the magical amusement park.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["feel", "felt", "feeling", "to feel"],
    ans: 2,
    explain: "【解説】〈cannot help ＋ 動名詞（〜ing）〉で「〜せずにはいられない」を表します。正解は feeling です。\n\n【訳】その魔法のテーマパークを訪れるときはいつも、ワクワクせずにはいられません。",
    audio_question: "I cannot help ... excited whenever I visit the magical amusement park.",
    audio_complete: "I cannot help feeling excited whenever I visit the magical amusement park."
  },
  {
    id: "past_45",
    type: "grammar",
    q: "A: Do you mind if I sit next to you on the train?\nB: ( ), go right ahead.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["Not at all", "Yes, please", "I mind", "Of course"],
    ans: 0,
    explain: "【解説】〈Do you mind if 〜?〉（〜しても構いませんか？）に対する快諾の返答は Not at all.（まったく構いませんよ＝どうぞ）です。\n\n【訳】A: 電車でお隣に座っても構いませんか？\nB: ええ、どうぞお座りください（まったく構いませんよ）。",
    audio_question: "Do you mind if I sit next to you on the train?",
    audio_complete: "Not at all, go right ahead."
  },
  // ---------- 第3弾 (No.46 〜 No.70) ----------
  {
    id: "past_46",
    type: "grammar",
    q: "Many international art critics ( ) this animated film as one of the greatest masterpieces of the decade.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["regard", "remind", "provide", "prevent"],
    ans: 0,
    explain: "【解説】〈regard A as B〉で「AをBとみなす・評価する」を表します。正解は regard です。\n\n【訳】多くの国際的な美術批評家たちが、このアニメーション映画をこの10年間で最も素晴らしい傑作の1つとみなしています。",
    audio_question: "Many international art critics ... this animated film as one of the greatest masterpieces of the decade.",
    audio_complete: "Many international art critics regard this animated film as one of the greatest masterpieces of the decade."
  },
  {
    id: "past_47",
    type: "grammar",
    q: "All the younger students in the music club look ( ) to their senior leader for guidance.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["up", "down", "after", "forward"],
    ans: 0,
    explain: "【解説】〈look up to 〜〉で「〜を尊敬する・見上げる」を表します。正解は up です。\n\n【訳】音楽部の後輩たちはみんな、指導を仰ぐために部長の先輩を尊敬の眼差しで見つめています。",
    audio_question: "All the younger students in the music club look ... to their senior leader for guidance.",
    audio_complete: "All the younger students in the music club look up to their senior leader for guidance."
  },
  {
    id: "past_48",
    type: "grammar",
    q: "You should take full ( ) of the school library's online database while preparing your research paper.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["advantage", "progress", "care", "part"],
    ans: 0,
    explain: "【解説】〈take advantage of 〜〉で「〜を（有効に）利用する・活用する」を表します。\n\n【訳】研究レポートを準備する間は、学校図書館のオンラインデータベースを大いに活用すべきです。",
    audio_question: "You should take full ... of the school library's online database while preparing your research paper.",
    audio_complete: "You should take full advantage of the school library's online database while preparing your research paper."
  },
  {
    id: "past_49",
    type: "grammar",
    q: "In ( ) of the heavy snow and freezing temperatures, the winter festival attracted thousands of tourists.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["spite", "order", "terms", "case"],
    ans: 0,
    explain: "【解説】〈in spite of 〜〉で「〜にもかかわらず」を表します（despite と同義）。\n\n【訳】大雪と氷点下の気温にもかかわらず、その冬祭りは何千人もの観光客を魅了しました。",
    audio_question: "In ... of the heavy snow and freezing temperatures, the winter festival attracted thousands of tourists.",
    audio_complete: "In spite of the heavy snow and freezing temperatures, the winter festival attracted thousands of tourists."
  },
  {
    id: "past_50",
    type: "grammar",
    q: "Even a small daily effort can ( ) a huge difference in your academic achievement over time.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["make", "take", "do", "have"],
    ans: 0,
    explain: "【解説】〈make a difference〉で「違いを生み出す・影響を与える」を表します。\n\n【訳】日々のささやかな努力であっても、長い時間をかければ学業の成果に大きな違いをもたらすことができます。",
    audio_question: "Even a small daily effort can ... a huge difference in your academic achievement over time.",
    audio_complete: "Even a small daily effort can make a huge difference in your academic achievement over time."
  },
  {
    id: "past_51",
    type: "grammar",
    q: "You may borrow my digital camera as ( ) as you promise to handle it carefully.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["long", "far", "soon", "well"],
    ans: 0,
    explain: "【解説】〈as long as 〜〉で「〜である限り・〜という条件で」を表します。\n\n【訳】慎重に扱うと約束してくれる限り、私のデジタルカメラを貸してあげてもいいですよ。",
    audio_question: "You may borrow my digital camera as ... as you promise to handle it carefully.",
    audio_complete: "You may borrow my digital camera as long as you promise to handle it carefully."
  },
  {
    id: "past_52",
    type: "grammar",
    q: "Visitors can choose ( ) to explore the botanical greenhouse or join the guided garden tour.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["either", "neither", "both", "not"],
    ans: 0,
    explain: "【解説】〈either A or B〉で「AかBのどちらか一方」を表します。\n\n【訳】来館者は植物園の温室を散策するか、ガイド付き庭園ツアーに参加するかのどちらかを選ぶことができます。",
    audio_question: "Visitors can choose ... to explore the botanical greenhouse or join the guided garden tour.",
    audio_complete: "Visitors can choose either to explore the botanical greenhouse or join the guided garden tour."
  },
  {
    id: "past_53",
    type: "grammar",
    q: "She set two alarm clocks on her desk ( ) that she would not oversleep on the morning of the exam.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["so", "such", "in", "as"],
    ans: 0,
    explain: "【解説】〈so that ＋ 主語 ＋ would not ＋ 原形〉で「〜しないように（目的の否定）」を表します。\n\n【訳】彼女は試験の日の朝に寝坊しないように、机の上に目覚まし時計を2つセットしました。",
    audio_question: "She set two alarm clocks on her desk ... that she would not oversleep on the morning of the exam.",
    audio_complete: "She set two alarm clocks on her desk so that she would not oversleep on the morning of the exam."
  },
  {
    id: "past_54",
    type: "grammar",
    q: "Because all trains were suspended due to the storm, we had no choice ( ) to stay at a nearby hotel.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["but", "and", "or", "so"],
    ans: 0,
    explain: "【解説】〈have no choice but to ＋ 動詞の原形〉で「〜するよりほかに選択肢がない・〜せざるを得ない」を表します。\n\n【訳】嵐のためすべての電車が運行見合わせとなったため、私たちは近くのホテルに宿泊せざるを得ませんでした。",
    audio_question: "Because all trains were suspended due to the storm, we had no choice ... to stay at a nearby hotel.",
    audio_complete: "Because all trains were suspended due to the storm, we had no choice but to stay at a nearby hotel."
  },
  {
    id: "past_55",
    type: "grammar",
    q: "All tournament participants are ( ) to arrive at the gymnasium by eight thirty tomorrow morning.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["supposed", "suggested", "supported", "surprised"],
    ans: 0,
    explain: "【解説】〈be supposed to ＋ 動詞の原形〉で「〜することになっている・〜する予定である（規則・予定）」を表します。\n\n【訳】大会の全参加者は、明日の朝8時30分までに体育館に到着することになっています。",
    audio_question: "All tournament participants are ... to arrive at the gymnasium by eight thirty tomorrow morning.",
    audio_complete: "All tournament participants are supposed to arrive at the gymnasium by eight thirty tomorrow morning."
  },
  {
    id: "past_56",
    type: "grammar",
    q: "We were just ( ) to leave the classroom when the homeroom teacher walked in with the handouts.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["about", "around", "almost", "after"],
    ans: 0,
    explain: "【解説】〈be about to ＋ 動詞の原形〉で「まさに〜しようとしているところだ」を表します。\n\n【訳】私たちがまさに教室を出ようとしていたその時、担任の先生がプリントを持って入ってきました。",
    audio_question: "We were just ... to leave the classroom when the homeroom teacher walked in with the handouts.",
    audio_complete: "We were just about to leave the classroom when the homeroom teacher walked in with the handouts."
  },
  {
    id: "past_57",
    type: "grammar",
    q: "The high school science club decided to ( ) out an environmental survey along the local river.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["carry", "bring", "take", "hold"],
    ans: 0,
    explain: "【解説】「（調査・実験・計画などを）実行する・行う」は熟語 carry out 〜 で表します。\n\n【訳】高校の科学部は、地元の川沿いで環境調査を実施することを決定しました。",
    audio_question: "The high school science club decided to ... out an environmental survey along the local river.",
    audio_complete: "The high school science club decided to carry out an environmental survey along the local river."
  },
  {
    id: "past_58",
    type: "grammar",
    q: "More than three hundred enthusiastic volunteers took ( ) in the annual beach cleaning campaign.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["part", "place", "care", "time"],
    ans: 0,
    explain: "【解説】「〜に参加する」は熟語 take part in 〜 で表します。\n\n【訳】300人以上の熱心なボランティアが、毎年恒例の海岸清掃キャンペーンに参加しました。",
    audio_question: "More than three hundred enthusiastic volunteers took ... in the annual beach cleaning campaign.",
    audio_complete: "More than three hundred enthusiastic volunteers took part in the annual beach cleaning campaign."
  },
  {
    id: "past_59",
    type: "grammar",
    q: "After thinking for several hours, she finally came ( ) with an innovative idea for the school logo.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["up", "down", "out", "along"],
    ans: 0,
    explain: "【解説】「（アイデアや解決策などを）思いつく・提案する」は熟語 come up with 〜 で表します。\n\n【訳】何時間も考え抜いた末、彼女はついに学校のロゴマークに関する画期的なアイデアを思いつきました。",
    audio_question: "After thinking for several hours, she finally came ... with an innovative idea for the school logo.",
    audio_complete: "After thinking for several hours, she finally came up with an innovative idea for the school logo."
  },
  {
    id: "past_60",
    type: "grammar",
    q: "It is important for foreign exchange students to get ( ) with their host families from the very beginning.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["along", "away", "over", "across"],
    ans: 0,
    explain: "【解説】「〜と仲良くやっていく・良好な関係を築く」は熟語 get along with 〜 で表します。\n\n【訳】留学生にとって、最初からホストファミリーと仲良くやっていくことはとても大切です。",
    audio_question: "It is important for foreign exchange students to get ... with their host families from the very beginning.",
    audio_complete: "It is important for foreign exchange students to get along with their host families from the very beginning."
  },
  {
    id: "past_61",
    type: "grammar",
    q: "The printer stopped working in the middle of the task because it ran ( ) of paper.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["out", "off", "away", "over"],
    ans: 0,
    explain: "【解説】「〜を使い果たす・切らす」は熟語 run out of 〜 で表します。\n\n【訳】用紙を使い切ってしまったため、プリンターは作業の途中で止まってしまいました。",
    audio_question: "The printer stopped working in the middle of the task because it ran ... of paper.",
    audio_complete: "The printer stopped working in the middle of the task because it ran out of paper."
  },
  {
    id: "past_62",
    type: "grammar",
    q: "The outdoor concert was canceled ( ) to a severe thunderstorm approaching the city.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["due", "because", "since", "as"],
    ans: 0,
    explain: "【解説】後ろに名詞句が続き「〜のために・〜が原因で」を表す群前置詞は due to です。\n\n【訳】街に接近中の激しい雷雨のため、野外コンサートは中止となりました。",
    audio_question: "The outdoor concert was canceled ... to a severe thunderstorm approaching the city.",
    audio_complete: "The outdoor concert was canceled due to a severe thunderstorm approaching the city."
  },
  {
    id: "past_63",
    type: "grammar",
    q: "She decided to travel by express train ( ) of taking an airplane to enjoy the scenic view.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["instead", "because", "spite", "terms"],
    ans: 0,
    explain: "【解説】「〜の代わりに」は熟語 instead of 〜 で表します。\n\n【訳】彼女は美しい景色を楽しむため、飛行機に乗る代わりに急行列車で旅することに決めました。",
    audio_question: "She decided to travel by express train ... of taking an airplane to enjoy the scenic view.",
    audio_complete: "She decided to travel by express train instead of taking an airplane to enjoy the scenic view."
  },
  {
    id: "past_64",
    type: "grammar",
    q: "In ( ) to English, she can communicate fluently in Spanish and German.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["addition", "case", "terms", "order"],
    ans: 0,
    explain: "【解説】「〜に加えて・〜のほかにも」は熟語 in addition to 〜 で表します。\n\n【訳】英語に加えて、彼女はスペイン語とドイツ語でも流暢に意思疎通ができます。",
    audio_question: "In ... to English, she can communicate fluently in Spanish and German.",
    audio_complete: "In addition to English, she can communicate fluently in Spanish and German."
  },
  {
    id: "past_65",
    type: "grammar",
    q: "I found this antique wooden jewelry box by ( ) while cleaning my grandmother's attic.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["accident", "purpose", "mistake", "force"],
    ans: 0,
    explain: "【解説】「偶然に・たまたま」は熟語 by accident（または by chance）で表します。\n\n【訳】祖母の屋根裏部屋を掃除しているときに、偶然このアンティークの木製宝石箱を見つけました。",
    audio_question: "I found this antique wooden jewelry box by ... while cleaning my grandmother's attic.",
    audio_complete: "I found this antique wooden jewelry box by accident while cleaning my grandmother's attic."
  },
  {
    id: "past_66",
    type: "grammar",
    q: "If I ( ) in your position, I would accept the study abroad scholarship without hesitation.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["am", "were", "will be", "have been"],
    ans: 1,
    explain: "【解説】現在の事実に反する仮定を表す「仮定法過去」です。be動詞は主語に関わらず原則 were を用います。\n\n【訳】もし私があなたの立場なら、ためらうことなくその留学奨学金を受けることでしょう。",
    audio_question: "If I ... in your position, I would accept the study abroad scholarship without hesitation.",
    audio_complete: "If I were in your position, I would accept the study abroad scholarship without hesitation."
  },
  {
    id: "past_67",
    type: "grammar",
    q: "If she ( ) followed the doctor's medical advice, she would have recovered much faster.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["has", "had", "would have", "having"],
    ans: 1,
    explain: "【解説】過去の事実に反する仮定を表す「仮定法過去完了」です。if節内は〈had ＋ 過去分詞〉にします。\n\n【訳】もし彼女が医師の助言に従っていたら、ずっと早く回復していただろうに。",
    audio_question: "If she ... followed the doctor's medical advice, she would have recovered much faster.",
    audio_complete: "If she had followed the doctor's medical advice, she would have recovered much faster."
  },
  {
    id: "past_68",
    type: "grammar",
    q: "This strict safety regulation must ( ) observed by all laboratory researchers.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["be", "is", "being", "been"],
    ans: 0,
    explain: "【解説】助動詞 must に続く受動態〈must be ＋ 過去分詞〉（〜されなければならない）の形です。正解は be です。\n\n【訳】この厳格な安全規定は、すべての研究室の研究員によって遵守されなければなりません。",
    audio_question: "This strict safety regulation must ... observed by all laboratory researchers.",
    audio_complete: "This strict safety regulation must be observed by all laboratory researchers."
  },
  {
    id: "past_69",
    type: "grammar",
    q: "She went to the hair salon yesterday to have her hair ( ) for the graduation ceremony.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["cut", "cutting", "to cut", "cuts"],
    ans: 0,
    explain: "【解説】使役表現〈have ＋ 目的語（hair）＋ 過去分詞（cut）〉で「髪を切ってもらう」を表します（cut の過去分詞は cut）。\n\n【訳】彼女は卒業式に向けて髪を切ってもらうため、昨日美容室へ行きました。",
    audio_question: "She went to the hair salon yesterday to have her hair ... for the graduation ceremony.",
    audio_complete: "She went to the hair salon yesterday to have her hair cut for the graduation ceremony."
  },
  {
    id: "past_70",
    type: "grammar",
    q: "We stood on the hill and watched a flock of white birds ( ) across the blue sky.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["fly", "flew", "to fly", "flown"],
    ans: 0,
    explain: "【解説】知覚動詞 watch の後は〈目的語 ＋ 動詞の原形 または 〜ing〉を用います。正解は fly です。\n\n【訳】私たちは丘の上に立ち、白い鳥の群れが青空を横切って飛んでいくのを眺めました。",
    audio_question: "We stood on the hill and watched a flock of white birds ... across the blue sky.",
    audio_complete: "We stood on the hill and watched a flock of white birds fly across the blue sky."
  },

  // ---------- 第4弾 (No.71 〜 No.90) ----------
  {
    id: "past_71",
    type: "grammar",
    q: "The talented artist ( ) paintings are displayed in the modern gallery is only sixteen years old.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["whose", "who", "which", "whom"],
    ans: 0,
    explain: "【解説】「その画家の絵画（whose paintings）」という所有の関係を表すため、所有格の関係代名詞 whose が正解です。\n\n【訳】現代ギャラリーに絵が展示されているその才能あふれる画家は、まだわずか16歳です。",
    audio_question: "The talented artist ... paintings are displayed in the modern gallery is only sixteen years old.",
    audio_complete: "The talented artist whose paintings are displayed in the modern gallery is only sixteen years old."
  },
  {
    id: "past_72",
    type: "grammar",
    q: "This historical town is the famous place ( ) the legendary fairytale was written.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["where", "which", "when", "why"],
    ans: 0,
    explain: "【解説】先行詞が場所（the famous place）で、後ろに完全な文が続いているため、関係副詞 where が正解です。\n\n【訳】この歴史ある町は、その伝説的な童話が執筆された有名な場所です。",
    audio_question: "This historical town is the famous place ... the legendary fairytale was written.",
    audio_complete: "This historical town is the famous place where the legendary fairytale was written."
  },
  {
    id: "past_73",
    type: "grammar",
    q: "Could you please tell me what time the botanical garden ( ) on weekends?",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["opens", "does open", "opened", "opening"],
    ans: 0,
    explain: "【解説】間接疑問文では、疑問詞（what time）の後は平叙文の語順〈主語 ＋ 動詞（opens）〉になります。\n\n【訳】週末に植物園が何時に開園するか教えていただけますか？",
    audio_question: "Could you please tell me what time the botanical garden ... on weekends?",
    audio_complete: "Could you please tell me what time the botanical garden opens on weekends?"
  },
  {
    id: "past_74",
    type: "grammar",
    q: "( ) at the central terminal, she immediately sent a text message to her host family.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["Arriving", "Arrived", "Arrive", "Having been arrived"],
    ans: 0,
    explain: "【解説】「ターミナルに到着したとき」という時を表す分詞構文です。主語（she）が能動的に到着するため現在分詞 Arriving が正解です。\n\n【訳】中央ターミナルに到着するとすぐに、彼女はホストファミリーにテキストメッセージを送りました。",
    audio_question: "... at the central terminal, she immediately sent a text message to her host family.",
    audio_complete: "Arriving at the central terminal, she immediately sent a text message to her host family."
  },
  {
    id: "past_75",
    type: "grammar",
    q: "Generally ( ), private high schools in the city offer various extracurricular programs.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["speaking", "spoken", "speak", "to speak"],
    ans: 0,
    explain: "【解説】〈Generally speaking〉で「一般的に言えば」を表す独立分詞構文の決まり文句です。\n\n【訳】一般的に言えば、市内の私立高校は多様な課外活動プログラムを提供しています。",
    audio_question: "Generally ..., private high schools in the city offer various extracurricular programs.",
    audio_complete: "Generally speaking, private high schools in the city offer various extracurricular programs."
  },
  {
    id: "past_76",
    type: "grammar",
    q: "A: Are you ready to order, or do you need a few more minutes?\nB: Yes, I'd ( ) a chicken sandwich and an iced green tea, please.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["like", "prefer", "want", "order"],
    ans: 0,
    explain: "【解説】レストランで注文する際の定番表現〈I'd like ＋ 注文の品, please.〉です。\n\n【訳】A: ご注文はお決まりですか、それとももう少しお時間が必要ですか？\nB: はい、チキンサンドイッチとアイスグリーンティーをお願いします。",
    audio_question: "Are you ready to order, or do you need a few more minutes?",
    audio_complete: "Yes, I'd like a chicken sandwich and an iced green tea, please."
  },
  {
    id: "past_77",
    type: "grammar",
    q: "A: It's raining cats and dogs outside. Could you give me a ( ) to the station?\nB: Sure, hop in!",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["ride", "drive", "lift", "car"],
    ans: 0,
    explain: "【解説】「車に乗せていく・送る」は熟語 give 人 a ride で表します。\n\n【訳】A: 外は大雨ですね。駅まで車に乗せて行っていただけますか？\nB: もちろん、乗って！",
    audio_question: "It's raining cats and dogs outside. Could you give me a ride to the station?",
    audio_complete: "Sure, hop in!"
  },
  {
    id: "past_78",
    type: "grammar",
    q: "A: How did your college admission interview go yesterday?\nB: Much ( ) than I expected! The interviewers were very friendly.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["better", "good", "best", "well"],
    ans: 0,
    explain: "【解説】than があり「予想していたよりずっと良かった」と比較するため、better が正解です。\n\n【訳】A: 昨日の大学の推薦入試面接はどうだった？\nB: 予想していたよりずっと良かったよ！面接官の方々がとても親切だったんだ。",
    audio_question: "How did your college admission interview go yesterday?",
    audio_complete: "Much better than I expected! The interviewers were very friendly."
  },
  {
    id: "past_79",
    type: "grammar",
    q: "A: I'm afraid I have some bad news regarding our flight schedule.\nB: Oh no, what ( )?",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["happened", "occurred", "took place", "went on"],
    ans: 0,
    explain: "【解説】悪い知らせを告げられたときに「何があったの？（どうしたの？）」と尋ねる定番の表現は What happened? です。\n\n【訳】A: 残念ながら、フライトのスケジュールに関して悪い知らせがあります。\nB: ええっ、何があったのですか？",
    audio_question: "I'm afraid I have some bad news regarding our flight schedule.",
    audio_complete: "Oh no, what happened?"
  },
  {
    id: "past_80",
    type: "grammar",
    q: "A: Would you mind lending me your electronic dictionary for fifth period?\nB: ( ), here you go.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["Not at all", "Yes, please", "I mind", "Of course"],
    ans: 0,
    explain: "【解説】〈Would you mind 〜ing?〉（〜しても嫌ですか？）に対する快諾の返答は Not at all.（まったく構いませんよ＝どうぞ）です。\n\n【訳】A: 5時間目に電子辞書を貸してもらっても構わない？\nB: ええ、全然いいよ、はいどうぞ。",
    audio_question: "Would you mind lending me your electronic dictionary for fifth period?",
    audio_complete: "Not at all, here you go."
  },
  {
    id: "past_81",
    type: "grammar",
    q: "Through hard work and persistent practice, the choir was able to ( ) remarkable success.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["achieve", "admire", "afford", "approach"],
    ans: 0,
    explain: "【解説】「（成功や目標を）達成する・成し遂げる」を表す動詞は achieve です。\n\n【訳】懸命な努力と粘り強い練習を通じて、その合唱団は目覚ましい成功を収めることができました。",
    audio_question: "Through hard work and persistent practice, the choir was able to ... remarkable success.",
    audio_complete: "Through hard work and persistent practice, the choir was able to achieve remarkable success."
  },
  {
    id: "past_82",
    type: "grammar",
    q: "Protecting the natural ( ) is considered one of the most critical challenges of our century.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["environment", "equipment", "entertainment", "employment"],
    ans: 0,
    explain: "【解説】「自然環境」を表す名詞は natural environment です。\n\n【訳】自然環境を保護することは、今世紀における最も極めて重要な課題の1つとみなされています。",
    audio_question: "Protecting the natural ... is considered one of the most critical challenges of our century.",
    audio_complete: "Protecting the natural environment is considered one of the most critical challenges of our century."
  },
  {
    id: "past_83",
    type: "grammar",
    q: "Studying abroad provides high school students with a golden ( ) to experience diverse cultures.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["opportunity", "obstacle", "occupation", "operation"],
    ans: 0,
    explain: "【解説】「絶好の機会・好機」は a golden opportunity と表します。\n\n【訳】留学は高校生に、多様な文化を体験するための絶好の機会を提供します。",
    audio_question: "Studying abroad provides high school students with a golden ... to experience diverse cultures.",
    audio_complete: "Studying abroad provides high school students with a golden opportunity to experience diverse cultures."
  },
  {
    id: "past_84",
    type: "grammar",
    q: "Online shopping has become extremely ( ) for busy families in modern society.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["convenient", "competitive", "conscious", "cautious"],
    ans: 0,
    explain: "【解説】「便利な・都合のよい」を表す形容詞は convenient です。\n\n【訳】オンラインショッピングは、現代社会の多忙な家庭にとって極めて便利なものとなっています。",
    audio_question: "Online shopping has become extremely ... for busy families in modern society.",
    audio_complete: "Online shopping has become extremely convenient for busy families in modern society."
  },
  {
    id: "past_85",
    type: "grammar",
    q: "The local government established stricter laws to prevent air and water ( ).",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["pollution", "population", "proportion", "publication"],
    ans: 0,
    explain: "【解説】「大気汚染および水質汚染」は air and water pollution と表します。\n\n【訳】地方自治体は大気汚染や水質汚染を防ぐために、より厳格な法律を制定しました。",
    audio_question: "The local government established stricter laws to prevent air and water ...",
    audio_complete: "The local government established stricter laws to prevent air and water pollution."
  },
  {
    id: "past_86",
    type: "grammar",
    q: "Wearing a ( ) kimono during the New Year holiday is a cherished custom in Japan.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["traditional", "temporary", "terrible", "thrilling"],
    ans: 0,
    explain: "【解説】「伝統的な・昔ながらの」を表す形容詞は traditional です。\n\n【訳】お正月の休日に伝統的な着物を着ることは、日本で大切にされている習慣です。",
    audio_question: "Wearing a ... kimono during the New Year holiday is a cherished custom in Japan.",
    audio_complete: "Wearing a traditional kimono during the New Year holiday is a cherished custom in Japan."
  },
  {
    id: "past_87",
    type: "grammar",
    q: "We truly ( ) all your generous support and encouragement during the difficult preparation period.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["appreciate", "apologize", "announce", "arrange"],
    ans: 0,
    explain: "【解説】「（親切や支援などに）心から感謝する」を表す動詞は appreciate です。\n\n【訳】困難な準備期間中における、皆様の寛大なご支援と励ましに心より感謝申し上げます。",
    audio_question: "We truly ... all your generous support and encouragement during the difficult preparation period.",
    audio_complete: "We truly appreciate all your generous support and encouragement during the difficult preparation period."
  },
  {
    id: "past_88",
    type: "grammar",
    q: "The fans were deeply ( ) when the championship match was postponed due to torrential rain.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["disappointed", "delighted", "demanding", "distinct"],
    ans: 0,
    explain: "【解説】人が「失望した・がっかりした」状態を表す形容詞は disappointed です。\n\n【訳】豪雨のために決勝戦が延期されたとき、ファンたちは深く落胆しました。",
    audio_question: "The fans were deeply ... when the championship match was postponed due to torrential rain.",
    audio_complete: "The fans were deeply disappointed when the championship match was postponed due to torrential rain."
  },
  {
    id: "past_89",
    type: "grammar",
    q: "Regular physical exercise and balanced nutrition are ( ) for maintaining good health.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["essential", "emotional", "excessive", "exotic"],
    ans: 0,
    explain: "【解説】「極めて重要な・不可欠な」を表す形容詞は essential です。\n\n【訳】定期的な運動とバランスの取れた栄養摂取は、健康を維持するために不可欠です。",
    audio_question: "Regular physical exercise and balanced nutrition are ... for maintaining good health.",
    audio_complete: "Regular physical exercise and balanced nutrition are essential for maintaining good health."
  },
  {
    id: "past_90",
    type: "grammar",
    q: "Every citizen has a civic ( ) to participate actively in community development.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["responsibility", "reaction", "recession", "recovery"],
    ans: 0,
    explain: "【解説】「市民としての責任・責務」は civic responsibility と表します。\n\n【訳】すべての市民には、地域社会の発展に積極的に参加する市民としての責任があります。",
    audio_question: "Every citizen has a civic ... to participate actively in community development.",
    audio_complete: "Every citizen has a civic responsibility to participate actively in community development."
  },
  // ---------- 第5弾 (No.91 〜 No.110) ----------
  {
    id: "past_91",
    type: "grammar",
    q: "The homeroom teacher managed to get all the students ( ) their classroom before leaving for home.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["clean", "cleaned", "to clean", "cleaning"],
    ans: 2,
    explain: "【解説】使役動詞 get は〈get ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜させる・してもらう」を表します（make や have と異なり to不定詞を用います）。\n\n【訳】担任の先生は、下校前に生徒全員になんとか教室を掃除させることができました。",
    audio_question: "The homeroom teacher managed to get all the students ... their classroom before leaving for home.",
    audio_complete: "The homeroom teacher managed to get all the students to clean their classroom before leaving for home."
  },
  {
    id: "past_92",
    type: "grammar",
    q: "Daily recycling of plastic bottles significantly contributes ( ) reducing environmental waste.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["to", "for", "with", "in"],
    ans: 0,
    explain: "【解説】「〜に貢献する・〜の一因となる」は熟語 contribute to 〜 で表します（to は前置詞なので後ろに動名詞 reducing が続きます）。\n\n【訳】ペットボトルの日常的なリサイクルは、環境ごみの削減に大きく貢献します。",
    audio_question: "Daily recycling of plastic bottles significantly contributes ... reducing environmental waste.",
    audio_complete: "Daily recycling of plastic bottles significantly contributes to reducing environmental waste."
  },
  {
    id: "past_93",
    type: "grammar",
    q: "The scientific lecture was ( ) fascinating that everyone in the auditorium listened in complete silence.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["so", "such", "too", "very"],
    ans: 0,
    explain: "【解説】〈so ＋ 形容詞（fascinating）＋ that 節〉で「とても〜なので…だ」を表します。\n\n【訳】その科学の講義はあまりに魅力的だったので、講堂にいた全員が完全な静寂の中で耳を傾けました。",
    audio_question: "The scientific lecture was ... fascinating that everyone in the auditorium listened in complete silence.",
    audio_complete: "The scientific lecture was so fascinating that everyone in the auditorium listened in complete silence."
  },
  {
    id: "past_94",
    type: "grammar",
    q: "All students are required to pay strict ( ) to the chemistry teacher's safety instructions.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["attention", "appointment", "attitude", "appearance"],
    ans: 0,
    explain: "【解説】「〜に注意を払う」は熟語 pay attention to 〜 で表します。正解は attention です。\n\n【訳】すべての生徒は、化学の先生の安全に関する指示に厳重な注意を払うことが求められています。",
    audio_question: "All students are required to pay strict ... to the chemistry teacher's safety instructions.",
    audio_complete: "All students are required to pay strict attention to the chemistry teacher's safety instructions."
  },
  {
    id: "past_95",
    type: "grammar",
    q: "A: May I help you find anything in our department store today?\nB: No, thank you. I'm ( ) looking around.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["just", "even", "almost", "quite"],
    ans: 0,
    explain: "【解説】店員の呼びかけに対し「見ているだけです」と断る定番の副詞は just です（I'm just looking around）。\n\n【訳】A: 本日何かお探しのお手伝いをいたしましょうか？\nB: いいえ、結構です。見ているだけですから。",
    audio_question: "May I help you find anything in our department store today?",
    audio_complete: "No, thank you. I'm just looking around."
  },
  {
    id: "past_96",
    type: "grammar",
    q: "If I ( ) studied more diligently last weekend, I would have passed the difficult qualification exam.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["had", "have", "would have", "having"],
    ans: 0,
    explain: "【解説】過去の事実に反する仮定を表す「仮定法過去完了」です。if節内は〈had ＋ 過去分詞〉にします。\n\n【訳】もし先週末にもっと熱心に勉強していたら、その難しい資格試験に合格していただろうに。",
    audio_question: "If I ... studied more diligently last weekend, I would have passed the difficult qualification exam.",
    audio_complete: "If I had studied more diligently last weekend, I would have passed the difficult qualification exam."
  },
  {
    id: "past_97",
    type: "grammar",
    q: "The latest edition of the electronic encyclopedia is now ( ) online for all registered students.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["available", "attractive", "automatic", "artificial"],
    ans: 0,
    explain: "【解説】「（物が）利用できる・手に入る」を表す形容詞は available です。\n\n【訳】電子百科事典の最新版が、登録済みの全生徒向けにオンラインで利用可能になりました。",
    audio_question: "The latest edition of the electronic encyclopedia is now ... online for all registered students.",
    audio_complete: "The latest edition of the electronic encyclopedia is now available online for all registered students."
  },
  {
    id: "past_98",
    type: "grammar",
    q: "The broken air conditioning system in the library has already ( ) by the maintenance crew.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["repaired", "been repaired", "repairing", "being repaired"],
    ans: 1,
    explain: "【解説】現在完了の受動態〈has been ＋ 過去分詞〉（すでに〜修理された）の形です。正解は been repaired です。\n\n【訳】図書館の壊れていたエアコン設備は、整備員によってすでに修理されました。",
    audio_question: "The broken air conditioning system in the library has already ... by the maintenance crew.",
    audio_complete: "The broken air conditioning system in the library has already been repaired by the maintenance crew."
  },
  {
    id: "past_99",
    type: "grammar",
    q: "My sister is truly looking forward to ( ) her high school graduation ceremony next Friday.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["attend", "attended", "attending", "to attend"],
    ans: 2,
    explain: "【解説】熟語 look forward to 〜 の to は前置詞なので、後ろには動名詞 attending が続きます。\n\n【訳】私の姉は来週の金曜日に高校の卒業式に出席することを心から楽しみにしています。",
    audio_question: "My sister is truly looking forward to ... her high school graduation ceremony next Friday.",
    audio_complete: "My sister is truly looking forward to attending her high school graduation ceremony next Friday."
  },
  {
    id: "past_100",
    type: "grammar",
    q: "A: Would you like to attend the astronomical observation event tonight?\nB: ( ), but I have to finish my history project.",
    sub: "⚔️ 準2級過去問 (会話文応答)",
    options: ["I'd love to", "I don't care", "Not really", "Of course not"],
    ans: 0,
    explain: "【解説】誘いを丁寧に断る際の前置き「ぜひ行きたいのですが」は I'd love to, but ... です。\n\n【訳】A: 今夜、天体観測イベントに参加しませんか？\nB: ぜひ行きたいのですが、歴史の課題を終わらせなければならないんです。",
    audio_question: "Would you like to attend the astronomical observation event tonight?",
    audio_complete: "I'd love to, but I have to finish my history project."
  },
  {
    id: "past_101",
    type: "grammar",
    q: "Please notify the principal's office as soon as ( ) if your contact address changes.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["possible", "probable", "capable", "available"],
    ans: 0,
    explain: "【解説】〈as soon as possible〉で「できるだけ早く」を表します。\n\n【訳】連絡先住所が変更になった場合は、できるだけ早く職員室へお知らせください。",
    audio_question: "Please notify the principal's office as soon as ... if your contact address changes.",
    audio_complete: "Please notify the principal's office as soon as possible if your contact address changes."
  },
  {
    id: "past_102",
    type: "grammar",
    q: "Many wild animal species around the globe currently suffer ( ) severe habitat loss.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["from", "with", "of", "by"],
    ans: 0,
    explain: "【解説】〈suffer from 〜〉で「〜（苦難・病気など）に苦しむ」を表します。\n\n【訳】世界中の多くの野生動物種が、現在深刻な生息地の喪失に苦しんでいます。",
    audio_question: "Many wild animal species around the globe currently suffer ... severe habitat loss.",
    audio_complete: "Many wild animal species around the globe currently suffer from severe habitat loss."
  },
  {
    id: "past_103",
    type: "grammar",
    q: "She joined the international volunteer group in ( ) to help children in developing nations.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["order", "case", "fact", "terms"],
    ans: 0,
    explain: "【解説】〈in order to ＋ 動詞の原形〉で「〜するために（目的）」を表します。\n\n【訳】彼女は開発途上国の子どもたちを助けるために、国際ボランティア団体に参加しました。",
    audio_question: "She joined the international volunteer group in ... to help children in developing nations.",
    audio_complete: "She joined the international volunteer group in order to help children in developing nations."
  },
  {
    id: "past_104",
    type: "grammar",
    q: "The music teacher was extremely proud ( ) his choir winning the national championship.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["of", "to", "for", "with"],
    ans: 0,
    explain: "【解説】〈be proud of 〜〉で「〜を誇りに思う」を表します。\n\n【訳】音楽の先生は、合唱部が全国大会で優勝したことをこの上なく誇りに思っていました。",
    audio_question: "The music teacher was extremely proud ... his choir winning the national championship.",
    audio_complete: "The music teacher was extremely proud of his choir winning the national championship."
  },
  {
    id: "past_105",
    type: "grammar",
    q: "More than five hundred high school runners took ( ) in the regional marathon.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["part", "place", "care", "time"],
    ans: 0,
    explain: "【解説】「〜に参加する」は熟語 take part in 〜 で表します。\n\n【訳】500人以上の高校生ランナーが、その地域マラソン大会に参加しました。",
    audio_question: "More than five hundred high school runners took ... in the regional marathon.",
    audio_complete: "More than five hundred high school runners took part in the regional marathon."
  },
  {
    id: "past_106",
    type: "grammar",
    q: "Foreign exchange students should become ( ) with the local customs of their host country.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["familiar", "famous", "favorable", "fortunate"],
    ans: 0,
    explain: "【解説】〈be [become] familiar with 〜〉で「〜によく慣れ親しむ・詳しく知る」を表します。\n\n【訳】留学生は滞在国の地域の慣習によく親しむべきです。",
    audio_question: "Foreign exchange students should become ... with the local customs of their host country.",
    audio_complete: "Foreign exchange students should become familiar with the local customs of their host country."
  },
  {
    id: "past_107",
    type: "grammar",
    q: "The art instructor encouraged Karen ( ) submit her landscape painting to the national contest.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["to", "for", "with", "at"],
    ans: 0,
    explain: "【解説】〈encourage ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜するよう励ます・勧める」を表します。\n\n【訳】美術の指導員は、カレンに風景画を全国コンクールに出品するよう励ましました。",
    audio_question: "The art instructor encouraged Karen ... submit her landscape painting to the national contest.",
    audio_complete: "The art instructor encouraged Karen to submit her landscape painting to the national contest."
  },
  {
    id: "past_108",
    type: "grammar",
    q: "This traditional folk melody always reminds me ( ) my peaceful childhood in Hokkaido.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["of", "about", "to", "for"],
    ans: 0,
    explain: "【解説】〈remind A of B〉で「AにBを思い出させる」を表します。正解は of です。\n\n【訳】この伝統的な民謡の旋律は、いつも私に北海道での平和な幼少時代を思い出させます。",
    audio_question: "This traditional folk melody always reminds me ... my peaceful childhood in Hokkaido.",
    audio_complete: "This traditional folk melody always reminds me of my peaceful childhood in Hokkaido."
  },
  {
    id: "past_109",
    type: "grammar",
    q: "The stormy weather conditions prevented our research group ( ) climbing the active volcano.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["from", "to", "for", "with"],
    ans: 0,
    explain: "【解説】〈prevent A from 〜ing〉で「Aが〜するのを妨げる／〜のためにAが…できない」を表します。\n\n【訳】嵐のような悪天候のために、私たちの研究グループはその活火山に登ることができませんでした。",
    audio_question: "The stormy weather conditions prevented our research group ... climbing the active volcano.",
    audio_complete: "The stormy weather conditions prevented our research group from climbing the active volcano."
  },
  {
    id: "past_110",
    type: "grammar",
    q: "Whether our school charity project succeeds depends ( ) everyone's active cooperation.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["on", "in", "at", "to"],
    ans: 0,
    explain: "【解説】〈depend on 〜〉で「〜に依存する／〜次第である」を表します。\n\n【訳】学校のチャリティー企画が成功するかどうかは、全員の積極的な協力にかかっています。",
    audio_question: "Whether our school charity project succeeds depends ... everyone's active cooperation.",
    audio_complete: "Whether our school charity project succeeds depends on everyone's active cooperation."
  },

  // ---------- 第6弾 (No.111 〜 No.130・完全完結) ----------
  {
    id: "past_111",
    type: "grammar",
    q: "All choir members are ( ) to gather in the music hall thirty minutes before the performance.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["supposed", "suggested", "supported", "surprised"],
    ans: 0,
    explain: "【解説】〈be supposed to ＋ 動詞の原形〉で「〜することになっている（規則・予定）」を表します。\n\n【訳】合唱団の全メンバーは、本番の30分前に音楽ホールに集合することになっています。",
    audio_question: "All choir members are ... to gather in the music hall thirty minutes before the performance.",
    audio_complete: "All choir members are supposed to gather in the music hall thirty minutes before the performance."
  },
  {
    id: "past_112",
    type: "grammar",
    q: "My grandmother ( ) to bake delicious blueberry pies every Sunday morning when I was little.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["used", "is used", "was using", "uses"],
    ans: 0,
    explain: "【解説】〈used to ＋ 動詞の原形〉で「かつては〜したものだった（過去の習慣）」を表します。\n\n【訳】私が小さかった頃、祖母は毎週日曜日の朝においしいブルーベリーパイを焼いてくれたものでした。",
    audio_question: "My grandmother ... to bake delicious blueberry pies every Sunday morning when I was little.",
    audio_complete: "My grandmother used to bake delicious blueberry pies every Sunday morning when I was little."
  },
  {
    id: "past_113",
    type: "grammar",
    q: "You ( ) better review your English notes thoroughly before entering the exam room.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["had", "would", "should", "did"],
    ans: 0,
    explain: "【解説】〈had better ＋ 動詞の原形〉で「〜したほうがよい（強い忠告）」を表します。\n\n【訳】試験室に入る前に、英語のノートを徹底的に復習しておいたほうがいいですよ。",
    audio_question: "You ... better review your English notes thoroughly before entering the exam room.",
    audio_complete: "You had better review your English notes thoroughly before entering the exam room."
  },
  {
    id: "past_114",
    type: "grammar",
    q: "Neither Kevin ( ) his brother was able to attend the award ceremony yesterday.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["nor", "or", "and", "but"],
    ans: 0,
    explain: "【解説】〈Neither A nor B〉で「AもBも〜ない（両者否定）」を表します。\n\n【訳】ケビンも彼の弟も、昨日の授賞式に出席することができませんでした。",
    audio_question: "Neither Kevin ... his brother was able to attend the award ceremony yesterday.",
    audio_complete: "Neither Kevin nor his brother was able to attend the award ceremony yesterday."
  },
  {
    id: "past_115",
    type: "grammar",
    q: "This modern digital library provides ( ) only digital books but also audio study materials.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["not", "no", "never", "none"],
    ans: 0,
    explain: "【解説】〈not only A but also B〉で「AだけでなくBも」を表します。\n\n【訳】この現代的なデジタル図書館は、電子書籍だけでなく音声学習教材も提供しています。",
    audio_question: "This modern digital library provides ... only digital books but also audio study materials.",
    audio_complete: "This modern digital library provides not only digital books but also audio study materials."
  },
  {
    id: "past_116",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["At 3:15.", "At 3:45.", "At 4:00.", "At 4:30."],
    ans: 1,
    explain: "【会話】\nGirl: What time does the science presentation rehearsal finish today?\nBoy: It was scheduled for four o'clock, but we will end fifteen minutes early at three forty-five.\nGirl: That's great, let's head to the library together then.\n\n【質問】What time will the rehearsal finish today?\n（リハーサルは本日何時に終わりますか？）\n\n【正解の訳】\n2. 3時45分に。\n\n【解説】fifteen minutes early at three forty-five と述べています。",
    dialogue: [
      { speaker: 'female', text: "What time does the science presentation rehearsal finish today?" },
      { speaker: 'male', text: "It was scheduled for four o'clock, but we will end fifteen minutes early at three forty-five." },
      { speaker: 'female', text: "That's great, let's head to the library together then." },
      { speaker: 'narrator', text: "Question. What time will the rehearsal finish today?" }
    ],
    aud_complete: "What time will the rehearsal finish today? At 3:45."
  },
  {
    id: "past_117",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["An acoustic guitar.", "A digital keyboard.", "A silver flute.", "A violin."],
    ans: 1,
    explain: "【会話】\nBoy: Did you choose an instrument for the music class ensemble, Nanami?\nGirl: Yes, I decided to play the digital keyboard because I've practiced piano for five years.\nBoy: You'll do fantastic!\n\n【質問】Which musical instrument did Nanami choose?\n（ナナミはどの楽器を選びましたか？）\n\n【正解の訳】\n2. 電子キーボード。\n\n【解説】play the digital keyboard と答えています。",
    dialogue: [
      { speaker: 'male', text: "Did you choose an instrument for the music class ensemble, Nanami?" },
      { speaker: 'female', text: "Yes, I decided to play the digital keyboard because I've practiced piano for five years." },
      { speaker: 'male', text: "You'll do fantastic!" },
      { speaker: 'narrator', text: "Question. Which musical instrument did Nanami choose?" }
    ],
    aud_complete: "Which musical instrument did Nanami choose? A digital keyboard."
  },
  {
    id: "past_118",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["In her pencil case.", "On the library study desk.", "In her science lab locker.", "In her school backpack."],
    ans: 1,
    explain: "【会話】\nGirl: Dad, I can't find my USB memory stick containing my speech slides.\nMan: Didn't you leave it on the library study desk next to your dictionary?\nGirl: Oh, you're right! I'll go get it immediately.\n\n【質問】Where is the girl's USB memory stick?\n（女の子のUSBメモリーはどこにありますか？）\n\n【正解の訳】\n2. 図書館の学習机の上。\n\n【解説】on the library study desk に置き忘れていました。",
    dialogue: [
      { speaker: 'female', text: "Dad, I can't find my USB memory stick containing my speech slides." },
      { speaker: 'male', text: "Didn't you leave it on the library study desk next to your dictionary?" },
      { speaker: 'female', text: "Oh, you're right! I'll go get it immediately." },
      { speaker: 'narrator', text: "Question. Where is the girl's USB memory stick?" }
    ],
    aud_complete: "Where is the girl's USB memory stick? On the library study desk."
  },
  {
    id: "past_119",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Her chemistry teacher.", "Her older brother.", "Her homestay host sister.", "Her classmate."],
    ans: 2,
    explain: "【会話】\nBoy: Your English pronunciation in the debate was so natural, Karen! Who coached you?\nGirl: My homestay host sister from Melbourne. We practiced every night online.\nBoy: That explains why you sounded so fluent!\n\n【質問】Who helped Karen practice her pronunciation?\n（誰がカレンの発音の練習を手伝いましたか？）\n\n【正解の訳】\n3. メルボルンのホストシスター。\n\n【解説】My homestay host sister from Melbourne が手伝ってくれました。",
    dialogue: [
      { speaker: 'male', text: "Your English pronunciation in the debate was so natural, Karen! Who coached you?" },
      { speaker: 'female', text: "My homestay host sister from Melbourne. We practiced every night online." },
      { speaker: 'male', text: "That explains why you sounded so fluent!" },
      { speaker: 'narrator', text: "Question. Who helped Karen practice her pronunciation?" }
    ],
    aud_complete: "Who helped Karen practice her pronunciation? Her homestay host sister."
  },
  {
    id: "past_120",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Visit an art gallery.", "Bake fresh apple tarts.", "Watch a movie at home.", "Study at a coffee shop."],
    ans: 2,
    explain: "【会話】\nBoy: The weather report says severe thunderstorms will continue all afternoon.\nGirl: In that case, let's watch the new fantasy animation film at my apartment.\nBoy: Sounds like a cozy plan!\n\n【質問】What will they do this afternoon?\n（彼らは今日の午後何をしますか？）\n\n【正解の訳】\n3. 家で映画を見ること。\n\n【解説】watch the new fantasy animation film at my apartment で合意しています。",
    dialogue: [
      { speaker: 'male', text: "The weather report says severe thunderstorms will continue all afternoon." },
      { speaker: 'female', text: "In that case, let's watch the new fantasy animation film at my apartment." },
      { speaker: 'male', text: "Sounds like a cozy plan!" },
      { speaker: 'narrator', text: "Question. What will they do this afternoon?" }
    ],
    aud_complete: "What will they do this afternoon? Watch a movie at home."
  },
  {
    id: "past_121",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["By chartered bus.", "By bullet train.", "By express subway.", "By ferry."],
    ans: 1,
    explain: "【会話】\nGirl: How did your class travel to the science research center in Kyoto, Kenta?\nBoy: The highway was under construction, so we all rode the bullet train.\n\n【質問】How did the students travel to Kyoto?\n（生徒たちは京都へどうやって移動しましたか？）\n\n【正解の訳】\n2. 新幹線（bullet train）で。\n\n【解説】rode the bullet train（新幹線に乗った）と答えています。",
    dialogue: [
      { speaker: 'female', text: "How did your class travel to the science research center in Kyoto, Kenta?" },
      { speaker: 'male', text: "The highway was under construction, so we all rode the bullet train." },
      { speaker: 'narrator', text: "Question. How did the students travel to Kyoto?" }
    ],
    aud_complete: "How did the students travel to Kyoto? By bullet train."
  },
  {
    id: "past_122",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (対話)",
    opt: ["Hot chocolate with cinnamon.", "Iced peach herbal tea.", "Hot green tea latte.", "Fresh orange juice."],
    ans: 1,
    explain: "【会話】\nWoman: Good afternoon. What would you like to order today?\nGirl: May I have a tall iced peach herbal tea without sugar, please?\nWoman: Certainly. That will be four dollars.\n\n【質問】What drink did the girl order?\n（女の子は何の飲み物を注文しましたか？）\n\n【正解の訳】\n2. アイスピーチハーブティー。\n\n【解説】iced peach herbal tea を注文しています。",
    dialogue: [
      { speaker: 'female', text: "Good afternoon. What would you like to order today?" },
      { speaker: 'female', text: "May I have a tall iced peach herbal tea without sugar, please?" },
      { speaker: 'female', text: "Certainly. That will be four dollars." },
      { speaker: 'narrator', text: "Question. What drink did the girl order?" }
    ],
    aud_complete: "What drink did the girl order? Iced peach herbal tea."
  },
  {
    id: "past_123",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Baked sixty strawberry cupcakes.", "Planted eighty tulip bulbs.", "Repaired classroom desks.", "Cleaned the school library."],
    ans: 0,
    explain: "【英文】\nYesterday was the annual school charity festival. The baking club members baked sixty fresh strawberry cupcakes and donated all sales to the local animal shelter.\n\n【質問】What did the baking club do yesterday?\n（お菓子作り部は昨日何をしましたか？）\n\n【正解の訳】\n1. 60個のイチゴカップケーキを焼いた。\n\n【解説】baked sixty fresh strawberry cupcakes が活動内容です。",
    dialogue: [
      { speaker: 'female', text: "Yesterday was the annual school charity festival. The baking club members baked sixty fresh strawberry cupcakes and donated all sales to the local animal shelter." },
      { speaker: 'narrator', text: "Question. What did the baking club do yesterday?" }
    ],
    aud_complete: "What did the baking club do yesterday? Baked sixty strawberry cupcakes."
  },
  {
    id: "past_124",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["In London.", "In Vancouver.", "In Sydney.", "In Auckland."],
    ans: 1,
    explain: "【英文】\nDuring her high school spring break, Yuna stayed in Vancouver, Canada. She attended language workshops in the morning and explored coastal nature parks in the afternoon.\n\n【質問】Where did Yuna stay during her spring break?\n（ユウナは春休みの間どこに滞在しましたか？）\n\n【正解の訳】\n2. バンクーバー（カナダ）で。\n\n【解説】stayed in Vancouver, Canada と述べています。",
    dialogue: [
      { speaker: 'male', text: "During her high school spring break, Yuna stayed in Vancouver, Canada. She attended language workshops in the morning and explored coastal nature parks in the afternoon." },
      { speaker: 'narrator', text: "Question. Where did Yuna stay during her spring break?" }
    ],
    aud_complete: "Where did Yuna stay during her spring break? In Vancouver."
  },
  {
    id: "past_125",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 実戦リスニング (短文読解)",
    opt: ["Draws digital manga.", "Practices the flute.", "Studies German.", "Practices ballet."],
    ans: 1,
    explain: "【英文】\nMio aspires to become a professional orchestral flutist. She practices the flute for two hours every evening after finishing her school homework.\n\n【質問】What does Mio practice every evening?\n（ミオは毎晩何を練習していますか？）\n\n【正解の訳】\n2. フルートを練習する。\n\n【解説】practices the flute と述べています。",
    dialogue: [
      { speaker: 'female', text: "Mio aspires to become a professional orchestral flutist. She practices the flute for two hours every evening after finishing her school homework." },
      { speaker: 'narrator', text: "Question. What does Mio practice every evening?" }
    ],
    aud_complete: "What does Mio practice every evening? Practices the flute."
  },
  {
    id: "past_126",
    type: "grammar",
    q: "You should take full ( ) of the digital learning app to master your daily vocabulary.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["advantage", "progress", "care", "part"],
    ans: 0,
    explain: "【解説】〈take advantage of 〜〉で「〜を（有効に）利用する・活用する」を表します。\n\n【訳】毎日の語彙をマスターするために、デジタル学習アプリを大いに活用すべきです。",
    audio_question: "You should take full ... of the digital learning app to master your daily vocabulary.",
    audio_complete: "You should take full advantage of the digital learning app to master your daily vocabulary."
  },
  {
    id: "past_127",
    type: "grammar",
    q: "The student council came ( ) with an inspiring idea to organize a charity concert.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["up", "down", "out", "along"],
    ans: 0,
    explain: "【解説】「（素晴らしい案などを）思いつく・提案する」は熟語 come up with 〜 で表します。\n\n【訳】生徒会はチャリティーコンサートを開催するという素晴らしいアイデアを思いつきました。",
    audio_question: "The student council came ... with an inspiring idea to organize a charity concert.",
    audio_complete: "The student council came up with an inspiring idea to organize a charity concert."
  },
  {
    id: "past_128",
    type: "grammar",
    q: "The high school biology club decided to ( ) out a field study in the nearby botanical garden.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["carry", "bring", "take", "hold"],
    ans: 0,
    explain: "【解説】「（野外調査や計画などを）実行する・行う」は熟語 carry out 〜 で表します。\n\n【訳】高校の生物部は、近くの植物園で野外調査を実施することに決めました。",
    audio_question: "The high school biology club decided to ... out a field study in the nearby botanical garden.",
    audio_complete: "The high school biology club decided to carry out a field study in the nearby botanical garden."
  },
  {
    id: "past_129",
    type: "grammar",
    q: "The chemistry experiment was paused because the students ran ( ) of test solution.",
    sub: "⚔️ 準2級過去問 (短文空所補充)",
    options: ["out", "off", "away", "over"],
    ans: 0,
    explain: "【解説】「〜を使い果たす・切らす」は熟語 run out of 〜 で表します。\n\n【訳】生徒たちが実験溶液を使い切ってしまったため、化学の実験は一時中断されました。",
    audio_question: "The chemistry experiment was paused because the students ran ... of test solution.",
    audio_complete: "The chemistry experiment was paused because the students ran out of test solution."
  },
  {
    id: "past_130",
    type: "grammar",
    q: "The mysterious ancient inscription ( ) out to be a message of friendship written centuries ago.",
    sub: "⚔️ 準2級過去問 (短文空所補充・最終試練)",
    options: ["turned", "took", "looked", "pointed"],
    ans: 0,
    explain: "【解説】「〜であることが判明する・分かる」は熟語 turn out to be 〜 で表します。過去形 turned が正解です。\n\n【訳】その謎めいた古代の碑文は、何世紀も昔に書かれた友情のメッセージであることが判明しました。",
    audio_question: "The mysterious ancient inscription ... out to be a message of friendship written centuries ago.",
    audio_complete: "The mysterious ancient inscription turned out to be a message of friendship written centuries ago."
  }
];
