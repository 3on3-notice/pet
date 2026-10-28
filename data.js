window.NOTICE = {
  updated: "2026-10-28",
  kr: {
    site: "펫 가이드", ribbon: "2026/10/28 업데이트", title: "펫 시스템 개편",
    lead: "새로워진 펫, 어디서 찾고 어떻게 키우는지 한 곳에서 확인하세요.",
    ended: "종료", foot: "앞으로도 이용자분들께서 불편을 겪지 않도록 최선을 다하겠습니다. 감사합니다.",
    st: { checking: "확인 중", planned: "수정 예정", fixed: "수정 완료" }, dl: { found: "확인일", fixed: "수정일" },
    issuesLabel: "확인된 이슈", issuesEmpty: "현재 확인된 이슈가 없습니다.",
    issues: [
      { status: "planned", date: "10/28", title: "커리어 모드 펫 이미지 미노출",
        text: "게임 - 커리어 모드 - 펫 라인업에서 장착한 펫의 이미지가 보이지 않습니다. 펫 기능과 효과는 정상 적용되며, 장착한 펫은 펫 라인업 화면 오른쪽 텍스트로 확인하실 수 있습니다. 차주 점검 시 수정될 예정입니다." } ],
    ui: {
      search: "펫 이름·능력 검색", all: "전체", unit: "종",
      grade: { P: "플래티넘", G: "골드", S: "실버", B: "브론즈" },
      unique: "고유 능력", maxLv: "만렙", sub: "서브 능력", subUp: "서브 강화", feedExp: "먹이 경험치", how: "얻는 방법",
      subsCan: "이 등급에 붙을 수 있는 서브 능력", prev: "이전", next: "다음", close: "닫기", none: "없음", photo: "사진 준비 중", issues: "확인된 이슈",
      gradeInfo: {
        P: { sub: "3칸 (Lv.3 · 6 · 9 해금)", up: "Lv.12 · 15", how: "입양으로는 나오지 않으며, <b>골드 펫 조합</b>에 성공(25%)하면 얻을 수 있습니다." },
        G: { sub: "2칸 (Lv.3 · 6 해금)", up: "Lv.9", how: "<b>입양</b> 시 5% 확률(골드 15종 중 하나)로 나오거나, <b>실버 펫 조합</b>에 성공(40%)하면 얻을 수 있습니다." },
        S: { sub: "1칸 (Lv.3 해금)", up: "–", how: "<b>입양</b> 시 25% 확률(실버 4종 중 하나)로 나오거나, <b>브론즈 펫 조합</b>에 성공(60%)하면 얻을 수 있습니다." },
        B: { sub: "없음", up: "–", how: "<b>입양</b> 시 70% 확률(브론즈 6종 중 하나)로 나옵니다." } } },
    chapters: [
      { id: "overview", nav: "변경 펫 개요", title: "무엇이 바뀌었나요?", q: "10/28 업데이트 전과 후의 펫 시스템을 한눈에 비교합니다.",
        blocks: [
          { type: "text", text: "펫 시스템이 새롭게 개편되었습니다. 조합으로 플래티넘 펫을 획득하고, 서브 능력으로 나만의 펫을 키워보세요!" },
          { type: "compare", label: "기존과 달라진 점", head: ["항목", "기존", "변경"],
            rows: [
              ["메뉴 위치", "매니지먼트 › 펫", "캐릭터 › 캐릭터 선택 › 펫"],
              ["새 펫 얻기", "상점의 실버 · 골드 · 플래티넘 켄넬 (판매 종료)", "펫 입양 (코인 · 포인트 · 골드 펫 뽑기 티켓), 플래티넘은 펫 조합으로"],
              ["키우는 방법", "–", "다른 펫을 먹이로 주어 레벨업, 같은 등급끼리 조합해 상위 등급에 도전"],
              ["능력 구성", "–", "고유 능력 1개 + 등급별 서브 능력 0~3칸"],
              ["펫 아이템", "등급 업 · 효과 변경 · 외형 변경 · 이름 변경", "사용 종료 (인벤토리에서 판매 가능)"],
              ["가지고 있던 펫", "–", "종류 · 외형 · 등급은 그대로, 해당 등급 최대 레벨 · 고유 능력 1개 (서브 능력 없음)"],
              ["장착", "장착해 둔 펫", "업데이트 후 모두 해제 — 다시 장착 필요"] ] } ] },

      { id: "where", nav: "펫 위치", title: "펫은 어디에 있나요?", q: "펫 메뉴가 매니지먼트에서 캐릭터 화면으로 옮겨졌습니다.",
        blocks: [
          { type: "steps", items: [
            ["캐릭터", "로비 메뉴에서 캐릭터를 누릅니다.", "lobby"],
            ["펫", "캐릭터를 고른 뒤, 왼쪽 메뉴 맨 아래 펫을 누릅니다.", "character"],
            ["펫 라인업", "펫 선택하기를 눌러 펫을 장착합니다.", "lineup"] ],
            before: "기존 위치: 매니지먼트 › 펫" },
          { type: "alert", text: "<b>업데이트 이후 모든 펫의 장착이 해제되어 있습니다.</b> 펫 라인업에서 펫을 다시 장착해 주세요." },
          { type: "menu", label: "펫 메뉴 구성", items: [
            ["펫 라인업", "PET LINEUP", "캐릭터별로 펫을 장착합니다."],
            ["펫 입양", "ADOPT PET", "코인·포인트·티켓으로 새 펫을 얻습니다.", "system"],
            ["펫 하우스", "PET HOUSE", "가진 펫 전체를 보고, 장착 · 훈련(레벨업) · 잠금을 합니다.", "system"],
            ["펫 조합", "PET COMBINATION", "같은 등급 펫을 합쳐 상위 등급에 도전합니다.", "system"] ] } ] },

      { id: "system", nav: "펫 시스템 설명", title: "펫 시스템은 어떻게 되어 있나요?", q: "등급 · 고유 능력 · 서브 능력을 알고, 입양으로 얻어 먹이로 키우고 조합으로 등급을 올립니다.",
        blocks: [
          { type: "facts", items: [
            ["등급", "브론즈 · 실버 · 골드 · 플래티넘 4단계. 등급이 높을수록 만렙과 서브 능력 칸이 늘어납니다."],
            ["고유 능력", "펫마다 정해진 능력 1개. 레벨이 오를 때마다 함께 오릅니다."],
            ["서브 능력", "펫을 얻는 순간 칸 수만큼 정해지고, 해금 레벨에 도달하면 공개되어 적용됩니다."] ] },
          { type: "table", label: "등급별 한눈에 보기",
            head: ["등급", "만렙", "서브 능력", "서브 해금", "서브 강화"],
            rows: [["브론즈", "Lv.3", "0칸", "–", "–"], ["실버", "Lv.6", "1칸", "Lv.3", "–"], ["골드", "Lv.12", "2칸", "Lv.3 · 6", "Lv.9"], ["플래티넘", "Lv.15", "3칸", "Lv.3 · 6 · 9", "Lv.12 · 15"]],
            note: "서브 강화는 열린 서브 능력 중 1개가 무작위로 강화됩니다. 플래티넘은 같은 능력이 두 번 강화될 수도 있습니다." },
          { type: "bars", label: "입양 — 새 펫 얻기", photo: "adopt",
            text: "코인(1회 2,000 · 10회 20,000), 포인트(10회 10P), 골드 펫 뽑기 티켓(1회 1장 · 10회 10장)으로 입양할 수 있습니다. 방법과 관계없이 확률은 같습니다.",
            items: [["브론즈", 70, "6종"], ["실버", 25, "4종"], ["골드", 5, "15종"], ["플래티넘", 0, "입양 불가 · 조합으로만"]] },
          { type: "facts", label: "레벨업(훈련) — 다른 펫을 먹이로", photo: "house", items: [
            ["먹이 비용", "먹이 1마리당 100 코인"], ["먹이 경험치", "브론즈 10 · 실버 20 · 골드 50 · 플래티넘 200"],
            ["먹일 수 없는 펫", "장착 중이거나 잠금한 펫"], ["만렙 초과분", "만렙 후 남은 경험치는 사라집니다."],
            ["키운 펫을 먹이로", "기본 경험치에 그 펫에 투자된 경험치의 3%가 더해집니다."] ] },
          { type: "table", label: "조합 — 같은 등급끼리 합쳐 한 단계 위로", photo: "combination",
            head: ["재료 등급", "상위 등급 확률", "코인 조합", "포인트 조합"],
            rows: [["브론즈", "60%", "5마리 + 2,500 코인", "2마리 + 2P"], ["실버", "40%", "5마리 + 4,000 코인", "2마리 + 4P"], ["골드", "25%", "5마리 + 10,000 코인", "2마리 + 10P"], ["플래티넘", "–", "5마리 + 10,000 코인", "2마리 + 10P"]],
            note: "재료로 쓴 펫은 모두 사라지고 새 펫 1마리가 Lv.1로 나옵니다. 플래티넘끼리 조합하면 종류만 무작위로 바뀝니다. 일괄 조합은 레벨이 낮은 펫부터 재료로 쓰며, 한 번에 최대 200마리(코인 40회 · 포인트 100회)까지 조합합니다." },
          { type: "alert", text: "<b>아끼는 펫은 잠금해 두세요.</b> 잠금한 펫은 먹이·조합 재료에서 빠집니다." },
          { type: "facts", label: "펫 하우스 관리 — 잠금 · 방출 · 확장", photo: "dismiss", items: [
            ["잠금", "잠금한 펫은 먹이 · 조합 재료에서 빠집니다."], ["방출", "방출한 펫은 다시 쓸 수 없으며, 펫 등급에 따라 코인을 받습니다."], ["하우스 확장", "포인트를 사용해 펫 하우스 칸을 늘릴 수 있습니다."] ] } ] },

      { id: "dex", nav: "펫 정보", title: "어떤 펫이 있나요?", q: "펫을 누르면 고유 능력과 얻는 방법을 볼 수 있습니다.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "기존 펫 처리", title: "기존에 쓰던 펫과 아이템은 어떻게 되나요?", q: "개편 전에 가지고 있던 펫 · 아이템 · 보상이 어떻게 바뀌었는지 안내합니다.",
        blocks: [
          { type: "facts", label: "가지고 있던 펫", items: [
            ["종류 · 외형 · 등급", "그대로 유지됩니다."],
            ["레벨", "해당 등급의 최대 레벨이 됩니다."],
            ["능력", "고유 능력 1개만 가지며, 서브 능력은 없습니다."],
            ["우편함 · 패키지 속 기존 펫", "받을 때 위와 같은 방식으로 바뀌어 지급됩니다."] ] },
          { type: "deadline", label: "기존 펫 아이템 사용 기한", fold: true,
            v: "~ 10/28 15:00 KST", deadline: "2026-10-28T06:00:00Z", text: "개편 이후에는 아래 아이템을 사용하실 수 없습니다. 개편 이후 남은 아이템은 인벤토리에서 판매하실 수 있습니다.",
            items: ["펫 등급 업 아이템", "펫 효과 변경 티켓", "펫 외형 변경 티켓", "펫 이름 변경 티켓"] },
          { type: "swap", label: "베스트 셀러 팬 박스 구성품 변경",
            text: "펫 시스템 개편에 따라 베스트 셀러 팬 박스의 기존 펫 보상이 아래와 같이 변경되었습니다. 이미 이벤트를 진행 중인 분들께도 동일하게 적용되며, 획득 확률은 변경되지 않습니다.",
            groups: [
              { g: "플래티넘", rows: [["토끼 우주인 UFO", "페이 구미호 헤어"], ["캔디 피냐타", "구미호 의상"], ["화이트 로봇청소기", "구미호 꼬리"]] },
              { g: "골드", rows: [["골드 펫 뽑기 티켓", "10000 코인"], ["펫 효과 변경 티켓", "선택형 능력 카드 실버 박스 티켓 x5"]] } ] } ] },

      { id: "faq", nav: "자주 묻는 질문", title: "자주 묻는 질문", q: "문의가 많은 내용을 모았습니다.",
        blocks: [
          { type: "faq", items: [
            ["업데이트 후 펫이 사라졌어요.", "사라진 것이 아니라 장착이 해제된 상태입니다. 캐릭터 › 캐릭터 선택 › 펫 › 펫 라인업에서 다시 장착해 주세요."],
            ["플래티넘 펫은 어떻게 얻나요?", "입양으로는 나오지 않고, 골드 펫을 조합해 상위 등급에 성공하면 얻을 수 있습니다."] ] } ] }
    ]
  },

  en: {
    site: "Pet Guide", ribbon: "Oct 28, 2026 Update", title: "Pet System Renewal",
    lead: "Where to find your pets and how to raise them, all in one place.",
    ended: "Ended", foot: "Thank you.",
    st: { checking: "Investigating", planned: "Fix Scheduled", fixed: "Fixed" }, dl: { found: "Reported", fixed: "Fixed on" },
    issuesLabel: "Known Issues", issuesEmpty: "There are no known issues at this time.",
    issues: [
      { status: "planned", date: "10/28", title: "Pet Image Display Issue in Career Mode",
        text: "We have found an issue where the image of your equipped pet is not displayed in Game > Career Mode > Pet Lineup. Pets can be used in Career Mode, and their effects are applied normally. You can check which pet you have equipped in the text on the right side of the Pet Lineup screen. This issue will be fixed during next week's maintenance." } ],
    ui: {
      search: "Search by pet name or ability", all: "All", unit: " types",
      grade: { P: "Platinum", G: "Gold", S: "Silver", B: "Bronze" },
      unique: "Unique Ability", maxLv: "Max Level", sub: "Sub Ability", subUp: "Sub Ability Upgrade", feedExp: "EXP as Feed", how: "How to Get",
      subsCan: "Sub Abilities this grade can get", prev: "Previous", next: "Next", close: "Close", none: "None", photo: "Image coming soon", issues: "Known Issues",
      gradeInfo: {
        P: { sub: "3 slots (unlocked at Lv.3 · 6 · 9)", up: "Lv.12 · 15", how: "Not available through Adoption. You can get one by succeeding at a <b>Gold pet Combination</b> (25%)." },
        G: { sub: "2 slots (unlocked at Lv.3 · 6)", up: "Lv.9", how: "Appears through <b>Adoption</b> at a 5% rate (1 of 15 Gold pets), or by succeeding at a <b>Silver pet Combination</b> (40%)." },
        S: { sub: "1 slot (unlocked at Lv.3)", up: "–", how: "Appears through <b>Adoption</b> at a 25% rate (1 of 4 Silver pets), or by succeeding at a <b>Bronze pet Combination</b> (60%)." },
        B: { sub: "None", up: "–", how: "Appears through <b>Adoption</b> at a 70% rate (1 of 6 Bronze pets)." } } },
    chapters: [
      { id: "overview", nav: "Overview of Changes", title: "What has changed?", q: "Compare the Pet System before and after the 10/28 update at a glance.",
        blocks: [
          { type: "text", text: "The Pet System Renewal is here! Combine pets to get Platinum Pets and grow them with Sub Abilities!" },
          { type: "compare", label: "What's Different", head: ["Item", "Before", "After"],
            rows: [
              ["Menu Location", "Management › Pet", "Characters › Select Character › Pet"],
              ["Getting New Pets", "Silver · Gold · Platinum Kennels in the Shop (no longer sold)", "Adopt Pet (Coins · Points · Gold Pet Adoption Tickets); Platinum pets through Pet Combination"],
              ["Raising Pets", "–", "Feed other pets to level up, and combine pets of the same grade for a chance at a higher grade"],
              ["Abilities", "–", "1 Unique Ability + 0–3 Sub Ability slots by grade"],
              ["Pet Items", "Prestige Up · Skill Change · Appearance Change · Rename", "No longer usable (can be sold from your inventory)"],
              ["Pets You Owned", "–", "Same type, look and grade; set to the max level of their grade with 1 Unique Ability (no Sub Abilities)"],
              ["Equipping", "Equipped pets", "All unequipped after the update — please equip them again"] ] } ] },

      { id: "where", nav: "Where to Find Pets", title: "Where are my pets?", q: "With the Pet System Renewal, the Pet menu has moved.",
        blocks: [
          { type: "steps", items: [
            ["Characters", "Select Characters from the lobby menu.", "lobby"],
            ["Pet", "Select a character, then select Pet at the bottom of the left menu.", "character"],
            ["Pet Lineup", "Choose a pet to equip.", "lineup"] ],
            before: "Before: Management › Pet" },
          { type: "alert", text: "<b>All pets have been unequipped with this update.</b> Please equip your pets again in the new menu." },
          { type: "menu", label: "Pet Menu", items: [
            ["Pet Lineup", "PET LINEUP", "Equip a pet for each character."],
            ["Adopt Pet", "ADOPT PET", "Get new pets with Coins, Points or Tickets.", "system"],
            ["Pet House", "PET HOUSE", "View all your pets and equip, train (level up) or lock them.", "system"],
            ["Pet Combination", "PET COMBINATION", "Combine pets of the same grade for a chance at a higher grade.", "system"] ] } ] },

      { id: "system", nav: "Pet System", title: "How does the Pet System work?", q: "Learn about grades, Unique Abilities and Sub Abilities, then adopt, feed and combine to get and raise pets.",
        blocks: [
          { type: "facts", items: [
            ["Grade", "4 grades: Bronze · Silver · Gold · Platinum. Higher grades have a higher max level and more Sub Ability slots."],
            ["Unique Ability", "Each pet has 1 unique ability, and its value increases with every level."],
            ["Sub Ability", "Sub abilities are decided when you obtain a pet, and each one is revealed and applied when its slot is unlocked."] ] },
          { type: "table", label: "Grades at a Glance",
            head: ["Grade", "Max Level", "Sub Ability Slots", "Slot Unlock Level", "Sub Ability Upgrade Level"],
            rows: [["Bronze", "Lv.3", "0", "–", "–"], ["Silver", "Lv.6", "1", "Lv.3", "–"], ["Gold", "Lv.12", "2", "Lv.3 · 6", "Lv.9"], ["Platinum", "Lv.15", "3", "Lv.3 · 6 · 9", "Lv.12 · 15"]],
            note: "Each upgrade enhances one unlocked sub ability selected at random. On Platinum pets, the same sub ability can be enhanced twice." },
          { type: "bars", label: "Adoption — Get New Pets", photo: "adopt",
            text: "You can adopt pets with Coins (1 adoption 2,000 · 10 adoptions 20,000), Points (10 adoptions 10 Points) or Gold Pet Adoption Tickets (1 Ticket per adoption · 10 Tickets for 10 adoptions). The rates are the same for every adoption method.",
            items: [["Bronze", 70, "6 types"], ["Silver", 25, "4 types"], ["Gold", 5, "15 types"], ["Platinum", 0, "Not available through Adoption · Combination only"]] },
          { type: "facts", label: "Level Up (Training) — Feed Other Pets", photo: "house", items: [
            ["Feed Cost", "100 Coins per pet used as feed"], ["EXP as Feed", "Bronze 10 · Silver 20 · Gold 50 · Platinum 200"],
            ["Can't Be Used as Feed", "Equipped or locked pets"], ["Over Max Level", "EXP exceeding the max level is not carried over."],
            ["Raised Pets as Feed", "3% of the EXP invested in that pet is added to its base EXP."] ] },
          { type: "table", label: "Combination — Combine the same grade to move up", photo: "combination",
            head: ["Material Grade", "Upgrade Rate", "Coin Combination", "Point Combination"],
            rows: [["Bronze", "60%", "5 pets + 2,500 Coins", "2 pets + 2 Points"], ["Silver", "40%", "5 pets + 4,000 Coins", "2 pets + 4 Points"], ["Gold", "25%", "5 pets + 10,000 Coins", "2 pets + 10 Points"], ["Platinum", "–", "5 pets + 10,000 Coins", "2 pets + 10 Points"]],
            note: "All material pets are used up, and 1 new pet is obtained at Lv.1. Combining Platinum pets always gives a Platinum pet of a random type. Bulk Combination uses lower-level pets first, with up to 200 pets at once (40 Coin Combinations · 100 Point Combinations)." },
          { type: "alert", text: "<b>Lock the pets you want to keep.</b> Locked pets are excluded from feed and combination materials." },
          { type: "facts", label: "Managing the Pet House — Lock · Dismiss · Expand", photo: "dismiss", items: [
            ["Lock", "Locked pets are excluded from feeding and combination materials."], ["Dismiss", "Once a pet is dismissed, it cannot be used again, but you will receive Coins based on the pet's rarity."], ["Expand", "You can expand the Pet House with Points."] ] } ] },

      { id: "dex", nav: "Pet Info", title: "What pets are there?", q: "Select a pet to see its unique ability and how to get it.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "Existing Pets", title: "What happened to my existing pets and items?", q: "How the pets, items and rewards you had before the renewal have changed.",
        blocks: [
          { type: "facts", label: "Pets You Owned", items: [
            ["Type · Look · Grade", "Kept as they were."],
            ["Level", "Set to the max level of their grade."],
            ["Abilities", "1 unique ability only, with no sub abilities."],
            ["Old Pets in Mail · Packages", "Converted the same way when you claim them."] ] },
          { type: "deadline", label: "Previous Pet Items — Deadline", fold: true,
            v: "~ 10/27 23:00 PDT", deadline: "2026-10-28T06:00:00Z", text: "After the renewal, current pet-related items can no longer be used. Any remaining items can be sold from your inventory after the renewal.",
            items: ["Pet Prestige Up Item", "Pet Skill Change Ticket", "Pet Appearance Change Ticket", "Rename Ticket"] },
          { type: "swap", label: "Best Seller Fan Box Item Change",
            text: "With the Pet System Renewal, the pet rewards in the Best Seller Fan Box have been changed as follows. This change also applies to players who are already participating in the event, and the draw rates remain the same.",
            groups: [
              { g: "Platinum", rows: [["Rabbit Alien UFO", "Fei's Nine-tailed Fox Hair"], ["Candy Pinata", "Nine-tailed Fox Outfit"], ["White Robot Cleaner", "Nine-tailed Fox Tail"]] },
              { g: "Gold", rows: [["Gold Pet Adoption Ticket", "10000 Coins"], ["Pet Skill Change Ticket", "Selectable Ability Card Silver Box Ticket x5"]] } ] } ] },

      { id: "faq", nav: "FAQ", title: "FAQ", q: "Answers to frequently asked questions.",
        blocks: [
          { type: "faq", items: [
            ["My pets disappeared after the update.", "They haven't disappeared; they have been unequipped. Please equip them again in Characters › Select Character › Pet › Pet Lineup."],
            ["How do I get Platinum pets?", "Platinum pets can't be obtained through Adoption. You can get one by succeeding at a Gold pet Combination."] ] } ] }
    ]
  },

  jp: {
    site: "ペットガイド", ribbon: "2026/10/28 アップデート", title: "ペットシステム改編",
    lead: "新しくなったペットの場所と育て方を、ひとつのページでご確認いただけます。",
    ended: "終了", foot: "ありがとうございます。",
    st: { checking: "確認中", planned: "修正予定", fixed: "修正済み" }, dl: { found: "確認日", fixed: "修正日" },
    issuesLabel: "確認されている不具合", issuesEmpty: "現在確認されている不具合はありません。",
    issues: [
      { status: "planned", date: "10/28", title: "キャリアモードのペット画像非表示",
        text: "ゲーム - キャリアモード - ペットラインアップにて、装着中のペットの画像が表示されない現象が確認されました。キャリアモードでのペット機能はご利用いただけ、ペットの効果も正常に適用されます。装着中のペットは、ペットラインアップ画面右側のテキストでご確認いただけます。本現象は次回の定期メンテナンスにて修正される予定です。" } ],
    ui: {
      search: "ペット名・能力で検索", all: "すべて", unit: "種",
      grade: { P: "プラチナ", G: "ゴールド", S: "シルバー", B: "ブロンズ" },
      unique: "固有能力", maxLv: "最大レベル", sub: "サブ能力", subUp: "サブ能力強化", feedExp: "エサ経験値", how: "入手方法",
      subsCan: "この等級に付く可能性のあるサブ能力", prev: "前へ", next: "次へ", close: "閉じる", none: "なし", photo: "画像準備中", issues: "確認されている不具合",
      gradeInfo: {
        P: { sub: "3枠（Lv.3 · 6 · 9で解放）", up: "Lv.12 · 15", how: "養子縁組では登場せず、<b>ゴールドペットの合成</b>に成功（25%）すると入手できます。" },
        G: { sub: "2枠（Lv.3 · 6で解放）", up: "Lv.9", how: "<b>養子縁組</b>で5%の確率（ゴールド15種のうち1体）で登場するほか、<b>シルバーペットの合成</b>に成功（40%）すると入手できます。" },
        S: { sub: "1枠（Lv.3で解放）", up: "–", how: "<b>養子縁組</b>で25%の確率（シルバー4種のうち1体）で登場するほか、<b>ブロンズペットの合成</b>に成功（60%）すると入手できます。" },
        B: { sub: "なし", up: "–", how: "<b>養子縁組</b>で70%の確率（ブロンズ6種のうち1体）で登場します。" } } },
    chapters: [
      { id: "overview", nav: "変更概要", title: "何が変わりましたか？", q: "10/28アップデート前後のペットシステムをひと目で比較できます。",
        blocks: [
          { type: "text", text: "ペットシステムが新しく生まれ変わりました！合成でプラチナペットを手に入れ、サブ能力で自分だけのペットを育てよう！" },
          { type: "compare", label: "以前との違い", head: ["項目", "変更前", "変更後"],
            rows: [
              ["メニューの場所", "マネジメント › ペット", "キャラクター › キャラクター選択 › ペット"],
              ["新しいペットの入手", "ショップのシルバー・ゴールド・プラチナケンネル（販売終了）", "ペット養子縁組（コイン・ポイント・ゴールドペット養子縁組チケット）、プラチナはペット合成で"],
              ["育て方", "–", "他のペットをエサにしてレベルアップ、同じ等級同士の合成で上位等級に挑戦"],
              ["能力の構成", "–", "固有能力1つ ＋ 等級別のサブ能力0～3枠"],
              ["ペットアイテム", "ランクアップ・効果変更・外見変更・名前変更", "使用終了（インベントリで売却可能）"],
              ["お持ちだったペット", "–", "種類・外見・等級はそのまま、その等級の最大レベル・固有能力1つ（サブ能力なし）"],
              ["装着", "装着していたペット", "アップデート後にすべて解除 — 再度装着が必要"] ] } ] },

      { id: "where", nav: "ペットの場所", title: "ペットはどこにありますか？", q: "ペットシステムの改編に伴い、ペットメニューの位置が変更されました。",
        blocks: [
          { type: "steps", items: [
            ["キャラクター", "ロビーメニューでキャラクターを選択します。", "lobby"],
            ["ペット", "キャラクターを選んだ後、左メニューの一番下にあるペットを選択します。", "character"],
            ["ペットラインアップ", "装着するペットを選びます。", "lineup"] ],
            before: "変更前：マネジメント › ペット" },
          { type: "alert", text: "<b>アップデート後、すべてのペットの装着が解除されています。</b>新しいメニューからペットを再度装着してください。" },
          { type: "menu", label: "ペットメニュー", items: [
            ["ペットラインアップ", "PET LINEUP", "キャラクターごとにペットを装着します。"],
            ["ペット養子縁組", "ADOPT PET", "コイン・ポイント・チケットで新しいペットを入手します。", "system"],
            ["ペットハウス", "PET HOUSE", "お持ちのペットをすべて確認し、装着・訓練（レベルアップ）・ロックができます。", "system"],
            ["ペット合成", "PET COMBINATION", "同じ等級のペットを合成して、上位等級に挑戦します。", "system"] ] } ] },

      { id: "system", nav: "ペットシステム", title: "ペットシステムはどうなっていますか？", q: "等級・固有能力・サブ能力を知り、養子縁組で入手、エサで育成、合成で等級を上げます。",
        blocks: [
          { type: "facts", items: [
            ["等級", "ブロンズ・シルバー・ゴールド・プラチナの4段階。等級が高いほど最大レベルとサブ能力の枠が増えます。"],
            ["固有能力", "ペットごとに決まった能力が1つあり、レベルが上がるたびに数値が上昇します。"],
            ["サブ能力", "ペットを入手した時点で枠の数だけ決まり、各枠が解放されると公開・適用されます。"] ] },
          { type: "table", label: "等級別一覧",
            head: ["等級", "最大レベル", "サブ能力の枠", "枠の解放レベル", "サブ能力強化レベル"],
            rows: [["ブロンズ", "Lv.3", "0", "–", "–"], ["シルバー", "Lv.6", "1", "Lv.3", "–"], ["ゴールド", "Lv.12", "2", "Lv.3 · 6", "Lv.9"], ["プラチナ", "Lv.15", "3", "Lv.3 · 6 · 9", "Lv.12 · 15"]],
            note: "強化では、解放済みのサブ能力から1つがランダムに強化されます。プラチナペットは同じサブ能力が2回強化されることもあります。" },
          { type: "bars", label: "養子縁組 — 新しいペットを入手", photo: "adopt",
            text: "コイン（1回 2,000 · 10回 20,000）、ポイント（10回 10ポイント）、ゴールドペット養子縁組チケット（1回1枚 · 10回10枚）で養子縁組できます。方法に関係なく確率は同じです。",
            items: [["ブロンズ", 70, "6種"], ["シルバー", 25, "4種"], ["ゴールド", 5, "15種"], ["プラチナ", 0, "養子縁組不可 · 合成のみ"]] },
          { type: "facts", label: "レベルアップ（訓練） — 他のペットをエサに", photo: "house", items: [
            ["エサの費用", "エサ1体につき100コイン"], ["エサ経験値", "ブロンズ 10 · シルバー 20 · ゴールド 50 · プラチナ 200"],
            ["エサにできないペット", "装着中またはロック中のペット"], ["最大レベル超過分", "最大レベルを超えた経験値は適用されません。"],
            ["育成したペットをエサに", "基本経験値に、そのペットに投入した経験値の3%が加算されます。"] ] },
          { type: "table", label: "合成 — 同じ等級同士で1つ上の等級へ", photo: "combination",
            head: ["材料の等級", "上位等級の確率", "コイン合成", "ポイント合成"],
            rows: [["ブロンズ", "60%", "5体 + 2,500コイン", "2体 + 2ポイント"], ["シルバー", "40%", "5体 + 4,000コイン", "2体 + 4ポイント"], ["ゴールド", "25%", "5体 + 10,000コイン", "2体 + 10ポイント"], ["プラチナ", "–", "5体 + 10,000コイン", "2体 + 10ポイント"]],
            note: "材料にしたペットはすべて消え、新しいペット1体がLv.1で登場します。プラチナ同士を合成すると、常にプラチナで種類だけがランダムに決まります。一括合成はレベルの低いペットから材料に使い、一度に最大200体（コイン40回 · ポイント100回）まで合成します。" },
          { type: "alert", text: "<b>大切なペットはロックしておきましょう。</b>ロックしたペットはエサ・合成の材料から除外されます。" },
          { type: "facts", label: "ペットハウスの管理 — ロック · 放出 · 拡張", photo: "dismiss", items: [
            ["ロック", "ロックしたペットはエサ・合成の素材から除外されます。"], ["放出", "放出したペットは再び使用できませんが、ペットの等級に応じてコインを獲得できます。"], ["拡張", "ポイントを使ってペットハウスの枠を増やせます。"] ] } ] },

      { id: "dex", nav: "ペット情報", title: "どんなペットがいますか？", q: "ペットを選ぶと、固有能力と入手方法を確認できます。",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "既存ペットの扱い", title: "以前のペットとアイテムはどうなりましたか？", q: "改編前にお持ちだったペット・アイテム・報酬の扱いをご案内します。",
        blocks: [
          { type: "facts", label: "お持ちだったペット", items: [
            ["種類・外見・等級", "そのまま維持されます。"],
            ["レベル", "その等級の最大レベルになります。"],
            ["能力", "固有能力1つのみで、サブ能力はありません。"],
            ["メールボックス・パッケージ内の以前のペット", "受け取り時に同じ方法で変換されて付与されます。"] ] },
          { type: "deadline", label: "既存ペットアイテムの使用期限", fold: true,
            v: "～ 10/28 15:00 KST", deadline: "2026-10-28T06:00:00Z", text: "改編後は既存のペット関連アイテムをご使用いただけなくなります。改編後に残ったアイテムは、インベントリで売却することができます。",
            items: ["ペットランクアップアイテム", "ペット効果変更チケット", "ペットの外見変更チケット", "ペットの名前変更チケット"] },
          { type: "swap", label: "ベストセラー ファンボックスの構成品変更",
            text: "ペットシステムの改編に伴い、ベストセラー ファンボックスのペット報酬が下記のとおり変更されました。すでにイベントを進行中の方にも同様に適用され、獲得確率に変更はありません。",
            groups: [
              { g: "プラチナ", rows: [["ウサギの宇宙飛行士UFO", "ペイ九尾の狐ヘア"], ["キャンディピニャータ", "九尾の狐衣装"], ["ホワイトロボット掃除機", "九尾の狐のしっぽ"]] },
              { g: "ゴールド", rows: [["ゴールドペット養子縁組チケット", "10000コイン"], ["ペット効果変更チケット", "選択式能力カードシルバーボックスチケット x5"]] } ] } ] },

      { id: "faq", nav: "よくある質問", title: "よくある質問", q: "お問い合わせの多い内容をまとめました。",
        blocks: [
          { type: "faq", items: [
            ["アップデート後にペットが消えました。", "消えたのではなく、装着が解除された状態です。キャラクター › キャラクター選択 › ペット › ペットラインアップで再度装着してください。"],
            ["プラチナペットはどうやって入手しますか？", "養子縁組では登場せず、ゴールドペットの合成で上位等級に成功すると入手できます。"] ] } ] }
    ]
  }
};
