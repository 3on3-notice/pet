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
      subsCan: "이 등급에 붙을 수 있는 서브 능력 {n}종 · 초기 수치", prev: "이전", next: "다음", close: "닫기", none: "없음", photo: "사진 준비 중", issues: "확인된 이슈",
      gradeInfo: {
        P: { sub: "3칸 (Lv.3 · 6 · 9 해금)", up: "Lv.12 · 15", how: "<b>골드 펫 조합</b>에 성공(25%)하면 얻을 수 있습니다." },
        G: { sub: "2칸 (Lv.3 · 6 해금)", up: "Lv.9", how: "<b>입양</b> 시 5% 확률(골드 15종 중 하나)로 나오거나, <b>실버 펫 조합</b>에 성공(40%)하면 얻을 수 있습니다." },
        S: { sub: "1칸 (Lv.3 해금)", up: "–", how: "<b>입양</b> 시 25% 확률(실버 4종 중 하나)로 나오거나, <b>브론즈 펫 조합</b>에 성공(60%)하면 얻을 수 있습니다." },
        B: { sub: "없음", up: "–", how: "<b>입양</b> 시 70% 확률(브론즈 6종 중 하나)로 나옵니다." } } },
    chapters: [
      { id: "overview", nav: "변경 펫 개요", title: "무엇이 바뀌었나요?", q: "",
        blocks: [
          { type: "text", text: "펫이 캐릭터 메뉴로 옮겨져 캐릭터와 함께 키우기 쉬워졌습니다. 장착한 펫의 능력은 발동 조건 없이 적용되고, 레벨을 올릴수록 고유 능력이 강해지며, 서브 능력으로 나만의 펫을 만들 수 있습니다." },
          { type: "compare", label: "기존과 달라진 점", head: ["항목", "기존", "변경"],
            rows: [
              ["펫 메뉴", "매니지먼트 › 펫", "캐릭터 › 캐릭터 선택 › 펫 (능력 카드 · 프리스타일과 같은 곳)", "up"],
              ["내 펫 확인", "보유 펫 전체 목록부터 표시", "펫 라인업에서 이 캐릭터의 펫과 능력 · 레벨을 바로 확인", "up"],
              ["새 펫 얻기", "상점의 켄넬 (실버 · 골드 · 플래티넘)", "펫 입양 (코인 · 포인트 · 골드 펫 뽑기 티켓), 상위 등급은 펫 조합으로"],
              ["키우는 방법", "친밀도 · 등급 · 특성으로 나뉜 성장", "다른 펫을 먹이로 주는 훈련으로 레벨업, 같은 등급끼리 조합해 상위 등급에 도전", "up"],
              ["능력 적용", "경기 중 발동 조건이 맞을 때만 잠깐 적용", "발동 조건 없이 장착한 동안 계속 적용", "up"],
              ["능력 구성", "등급을 올려도 발동 횟수만 늘어남", "레벨마다 오르는 고유 능력 1개 + 등급별 서브 능력 최대 3칸", "up"],
              ["펫 아이템", "등급 업 · 효과 변경 · 외형 변경 · 이름 변경", "새 성장 방식(레벨업 · 조합)으로 바뀌어 사용 종료, 남은 아이템은 인벤토리에서 판매 가능"],
              ["가지고 있던 펫", "–", "종류 · 외형 · 등급 유지, 해당 등급 최대 레벨로 지급 (고유 능력 1개)"],
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
            ["펫 하우스", "PET HOUSE", "가진 펫 전체를 보고, 장착 · 훈련(레벨업) · 잠금 · 이별하기를 합니다.", "system"],
            ["펫 조합", "PET COMBINATION", "같은 등급 펫을 합쳐 상위 등급에 도전합니다.", "system"] ] } ] },

      { id: "system", nav: "펫 시스템 설명", title: "펫 시스템은 어떻게 되어 있나요?", q: "등급 · 고유 능력 · 서브 능력을 먼저 알고, 펫 메뉴 네 화면에서 할 수 있는 것을 확인하세요.",
        blocks: [
          { type: "facts", items: [
            ["등급", "브론즈 · 실버 · 골드 · 플래티넘 4단계. 등급이 높을수록 만렙과 서브 능력 칸이 늘어납니다."],
            ["고유 능력", "펫마다 정해진 능력 1개. 레벨이 오를 때마다 수치가 함께 오릅니다."],
            ["서브 능력", "펫을 얻을 때 등급별 칸 수만큼 정해지고, 해금 레벨에 도달하면 공개되어 적용됩니다. 한 펫에 같은 서브 능력이 두 번 붙지 않습니다."],
            ["서브 강화", "골드는 Lv.9, 플래티넘은 Lv.12 · 15에 열린 서브 능력 중 1개가 무작위로 강화됩니다. 플래티넘은 같은 서브 능력이 두 번 강화될 수 있습니다."] ] },
          { type: "table", label: "등급별 한눈에 보기", photo: "subs",
            head: ["등급", "만렙", "서브 능력", "서브 해금", "서브 강화"],
            rows: [["브론즈", "Lv.3", "0칸", "–", "–"], ["실버", "Lv.6", "1칸", "Lv.3", "–"], ["골드", "Lv.12", "2칸", "Lv.3 · 6", "Lv.9"], ["플래티넘", "Lv.15", "3칸", "Lv.3 · 6 · 9", "Lv.12 · 15"]] },
          { type: "facts", label: "펫 라인업 — 이 캐릭터의 펫", photo: "lineup", marks: [[75.9, 25.0], null, [75.2, 81.2], [19.8, 89.6], null], items: [
            ["화면 구성", "장착한 펫의 이름 · 등급 · 레벨 · 경험치와 고유 능력 · 서브 능력 수치를 봅니다. 아직 열리지 않은 서브 능력 칸에는 해금 레벨이 표시됩니다."],
            ["펫 선택하기", "장착한 펫이 없으면 펫 선택하기로 펫 하우스에 가서 고르면 바로 장착됩니다. 가진 펫이 없으면 펫 입양 버튼이 나옵니다."],
            ["훈련", "장착한 펫을 이 화면에서 바로 훈련(레벨업)할 수 있습니다."],
            ["펫 해제", "장착한 펫을 빼는 펫 해제에는 포인트가 필요합니다."],
            ["다른 캐릭터의 펫", "다른 캐릭터가 장착 중인 펫은 장착할 수 없습니다."] ] },
          { type: "bars", label: "펫 입양 — 새 펫 얻기", photo: "adopt",
            text: "코인(1회 2,000 · 10회 20,000), 포인트(10회 10 포인트), 골드 펫 뽑기 티켓(1회 1장 · 10회 10장)으로 입양할 수 있습니다. 방법과 관계없이 등급 확률은 같고, 같은 등급의 펫은 모두 같은 확률로 나옵니다. 결과는 바로 표시되며, 아래 버튼으로 확률 페이지를 볼 수 있습니다.",
            items: [["브론즈", 70, "6종"], ["실버", 25, "4종"], ["골드", 5, "15종"], ["플래티넘", 0, "펫 조합으로 획득"]] },
          { type: "facts", label: "펫 하우스 — 가진 펫 관리", photo: "house", marks: [[22.3, 27.8], null, [86.0, 83.4], [77.1, 83.4]], items: [
            ["목록", "가진 펫 전체가 보입니다. 장착 중인 펫에는 장착한 캐릭터 얼굴이 표시되고, 필터로 등급별로 볼 수 있습니다."],
            ["장착 · 해제", "고른 펫을 지금 캐릭터에 장착하거나 해제합니다. 다른 캐릭터가 장착 중인 펫은 훈련만 할 수 있습니다."],
            ["훈련", "고른 펫의 훈련(레벨업) 화면으로 갑니다. 장착하지 않은 펫도 미리 키울 수 있습니다."],
            ["잠금", "잠금한 펫은 먹이 · 조합 재료로 쓰이지 않습니다. 잠금해도 장착은 할 수 있습니다."] ] },
          { type: "facts", label: "이별하기 · 하우스 확장", photo: "dismiss", marks: [[29.1, 43.4], null], items: [
            ["이별하기", "잠금 · 장착하지 않은 펫을 보내고 등급에 따라 코인을 받습니다. 보낸 펫은 다시 쓸 수 없습니다. 모두 선택으로 여러 마리를 한 번에 보낼 수 있습니다."],
            ["하우스 확장", "포인트로 펫 하우스 칸을 늘립니다. 다음 확장의 칸 수와 비용은 확장 버튼에 표시됩니다."] ] },
          { type: "facts", label: "훈련 — 다른 펫을 먹이로 레벨업", photo: "pet_detail", marks: [null, [64.7, 21.5], [83.1, 42.7], [70.9, 66.9], [33.1, 88.9], [18.0, 89.4], [42.0, 29.9]], items: [
            ["먹이 비용", "먹이 1마리당 100 코인"],
            ["먹이 경험치", "브론즈 10 · 실버 20 · 골드 50 · 플래티넘 200"],
            ["키운 펫을 먹이로", "기본 경험치에 그 펫에 투자된 경험치의 3%가 더해집니다."],
            ["자동 선택", "목표 레벨을 고르면 닿을 만큼 재료가 자동으로 선택됩니다(낮은 등급 · 낮은 레벨부터). 하나씩 뺄 수도 있습니다."],
            ["등장 서브 능력", "이 등급에 붙을 수 있는 서브 능력 목록과 초기 수치를 볼 수 있습니다. 초기 수치는 슬롯 해금 시 적용되며, 강화하면 수치가 상승합니다."],
            ["먹일 수 없는 펫", "장착 중인 펫과 잠금한 펫. 잠금은 이 화면에서 바로 풀 수 있습니다."],
            ["만렙 초과분", "최대 레벨을 넘는 경험치는 적용되지 않습니다."] ] },
          { type: "table", label: "펫 조합 — 같은 등급끼리 합쳐 한 단계 위로", photo: "combination",
            head: ["재료 등급", "상위 등급 확률", "코인 조합", "포인트 조합"],
            rows: [["브론즈", "60%", "5마리 + 2,500 코인", "2마리 + 2 포인트"], ["실버", "40%", "5마리 + 4,000 코인", "2마리 + 4 포인트"], ["골드", "25%", "5마리 + 10,000 코인", "2마리 + 10 포인트"], ["플래티넘", "–", "5마리 + 10,000 코인", "2마리 + 10 포인트"]],
            note: "재료로 쓴 펫은 모두 사라지고 새 펫 1마리가 Lv.1로 나옵니다. 성공하면 한 등급 위, 실패하면 같은 등급의 펫이 무작위로 나옵니다. 플래티넘끼리 조합하면 항상 플래티넘이 나오고 종류만 무작위로 정해집니다." },
          { type: "facts", label: "펫 조합 화면 사용법", photo: "combination_point", marks: [[84.9, 67.2], [66.8, 52.7], [20.9, 28.8], [25.5, 89.7]], items: [
            ["조합 방식 전환", "조합 방식 버튼으로 코인 조합(5마리)과 포인트 조합(2마리)을 바꿉니다. 필요한 마리 수와 비용이 바뀌며, 상위 등급 확률은 같습니다."],
            ["출현 확률", "재료를 다 채우면 결과로 나올 수 있는 등급과 확률이 표시됩니다."],
            ["넣을 수 있는 펫", "같은 등급끼리만 넣을 수 있습니다. 장착 중인 펫은 목록에 나오지 않고, 잠금한 펫은 넣을 수 없습니다."],
            ["일괄 조합", "등급을 골라 한 번에 조합하며, 낮은 등급부터 진행됩니다. 레벨이 낮은 펫부터 쓰고, 묶음(코인 5마리 · 포인트 2마리)을 채우지 못한 펫은 남습니다. 한 번에 최대 200마리까지 사용할 수 있습니다(코인 조합 최대 40회 · 포인트 조합 최대 100회)."] ] } ] },

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

      { id: "events", nav: "한정 이벤트", title: "지금 어떤 이벤트가 진행 중인가요?", q: "10/28 업데이트와 함께 진행 중인 한정 이벤트를 모았습니다. 기간과 보상을 확인하고 참여해보세요!",
        blocks: [
          {"type": "event", "key": "shopping_spree", "label": "쇼핑 스프리! 이벤트", "img": "img/events/shopping_spree_kr.jpg", "period": "10월 28일 - 11월 4일 16:59 KST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "이벤트 기간 동안 두근두근 플래티넘 펫 박스·펫 입양·펫 조합에 700P 이상 소비하면, 플래티넘 확정 펫 켄넬을 획득하실 수 있습니다!<br>지금 바로 참여해보세요!", "table": {"head": ["소비 포인트", "보상"], "rows": [["700P 이상", "플래티넘 확정 펫 켄넬 x1"]]}, "note": "보상은 11/4 점검 중 지급됩니다. 플래티넘 확정 펫 켄넬에서는 플래티넘 펫 26종 중 1종이 각 3.85% 확률로 나옵니다."},
          {"type": "event", "key": "cumulative_payment", "label": "누적 결제 이벤트", "img": null, "period": "10월 28일 - 11월 4일 16:59 KST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "누적 결제 점수에 따라 마이픽 의상 티켓과 초월 아이템 페이백!<br>필요 점수를 달성하고 단계별 보상을 획득해보세요!", "table": {"head": ["필요 점수", "보상"], "rows": [["50", "마이픽 의상 티켓 x5"], ["100", "마이픽 의상 티켓 x10"], ["300", "초월 노트 x5 · 마이픽 의상 티켓 x15"], ["500", "초월 노트 x10 · 마이픽 의상 티켓 x20"], ["700", "초월 교본 x1 · 마이픽 의상 티켓 x50"]]}},
          {"type": "event", "key": "pet_box", "label": "두근두근 플래티넘 펫 박스", "img": "img/events/pet_box_kr.jpg", "period": "10월 28일 - 11월 11일 16:59 KST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-11T07:59:00Z", "text": "26종의 플래티넘 펫 중 하나를 확정으로 획득하실 수 있습니다!<br>파격적인 가격으로 나만의 플래티넘 펫을 만나보세요!<br>누적 구매 보상도 놓치지 마세요!", "table": {"head": ["구매 개수", "보상", "수량"], "rows": [["2", "골드 펫 뽑기 티켓", "10"], ["4", "골드 펫 뽑기 티켓", "40"], ["6", "플래티넘 확정 펫 켄넬", "1"], ["8", "플래티넘 확정 펫 켄넬", "1"], ["10", "플래티넘 확정 펫 켄넬", "1"], ["12", "인기 플래티넘 펫 선택 상자", "1"]]}, "items": ["화이트 로봇청소기 10%", "캔디 피냐타 10%", "캐로봇 10%", "수비 코치 모노클 10%", "슈팅 코치 모노클 10%"], "note": "확률형 아이템입니다. 위 5종은 각 10%, 그 밖의 플래티넘 펫 21종은 각 2.38% 확률로 나옵니다. 누적 구매 보상의 플래티넘 확정 펫 켄넬에서는 26종 중 1종이 각 3.85% 확률로 나옵니다."} ] },

      { id: "faq", nav: "자주 묻는 질문", title: "자주 묻는 질문", q: "문의가 많은 내용을 모았습니다.",
        blocks: [
          { type: "faq", items: [
            ["기존에 갖고 있던 펫은 없어지나요? 능력은 그대로인가요?", "없어지지 않습니다. 기존 펫은 <b>등급과 외형이 그대로 유지</b>되고, 해당 등급의 <b>최대 레벨</b>이 됩니다. 자세한 내용은 '기존 펫 처리'에서 확인해 주세요. 다만 업데이트 이후 모든 펫의 장착이 해제되어 있으니, 캐릭터 › 캐릭터 선택 › 펫 › 펫 라인업에서 다시 장착해 주세요."],
            ["서브 능력은 어떻게 정해지나요? 레벨을 올리면 오르나요?", "서브 능력은 <b>펫을 얻는 순간 칸 수만큼 정해지고</b>, 해금 레벨에 도달하면 공개되어 적용됩니다. 칸 수는 실버 1칸 · 골드 2칸 · 플래티넘 3칸이며 브론즈는 없습니다. 해금은 실버 Lv.3, 골드 Lv.3 · 6, 플래티넘 Lv.3 · 6 · 9입니다. <b>골드 Lv.9 · 플래티넘 Lv.12 · 15</b>에서는 열린 서브 능력 중 1개가 무작위로 강화됩니다(플래티넘은 같은 능력이 두 번 강화될 수도 있습니다). 한 펫에 같은 서브 능력은 두 번 붙지 않습니다."],
            ["고유 능력은 펫마다 정해져 있나요? 펫 레벨은 어떻게 올리나요?", "네, 고유 능력은 <b>펫마다 정해진 1개</b>이며 레벨이 오를 때마다 함께 오릅니다. 펫별 Lv.1 · 만렙 수치는 펫 도감에서 확인하실 수 있습니다. 레벨은 <b>다른 펫을 먹이로 주어</b> 올립니다. 먹이 1마리당 100 코인이 들고, 먹이 등급에 따라 경험치 10(브론즈) · 20(실버) · 50(골드) · 200(플래티넘)을 얻습니다. 만렙은 브론즈 Lv.3 · 실버 Lv.6 · 골드 Lv.12 · 플래티넘 Lv.15이며, 장착 중이거나 잠금한 펫은 먹이로 쓸 수 없습니다."],
            ["이번 펫 개편으로 무엇이 바뀌었나요?", "<b>메뉴 위치</b>: 매니지먼트 › 펫 → 캐릭터 › 캐릭터 선택 › 펫<br><b>장착</b>: 업데이트 이후 모든 펫의 장착이 해제되었습니다.<br><b>펫 구성</b>: 브론즈 · 실버 · 골드 · 플래티넘 4등급, 펫마다 고유 능력 1개와 등급별 서브 능력 0~3칸<br><b>얻기 · 키우기</b>: 입양으로 얻고, 다른 펫을 먹이로 주어 레벨을 올리고, 같은 등급끼리 조합해 상위 등급에 도전합니다.<br><b>기존 아이템</b>: 펫 등급 업 아이템 · 펫 효과 변경 티켓 · 펫 외형 변경 티켓 · 펫 이름 변경 티켓은 더 이상 사용할 수 없습니다."],
            ["업데이트 후 펫이 안 보여요. 어디서 장착하나요?", "업데이트 이후 <b>모든 펫의 장착이 해제</b>되어 있습니다. 펫 메뉴가 매니지먼트에서 <b>캐릭터 › 캐릭터 선택 › 펫</b>으로 옮겨졌으니, 캐릭터를 고른 뒤 펫 라인업에서 펫 선택하기를 눌러 다시 장착해 주세요. 펫 조합이나 레벨업(먹이)에 재료로 쓴 펫은 사라지니, 아끼는 펫은 잠금해 두세요. 확인 후에도 보이지 않는 펫이 있으면 문의해 주세요."],
            ["새 펫에는 3점 슛 성공률 능력이 없나요?", "개편 후 얻는 펫(51종)의 고유 능력에는 3점 슛 성공률이 없습니다. 3점 슛과 관련된 고유 능력은 <b>레드 사이버 드론</b>(3점 페이드 어웨이 성공률, Lv.1 0.6% → Lv.15 8%)과 <b>브라운 도베르만</b>(3점 페이드 어웨이 수비 저항)입니다. 서브 능력으로는 <b>3점 슛 성공률(2%)</b>을 비롯한 3점 슛 관련 능력 6종이 실버 · 골드 · 플래티넘에서 나올 수 있으며, 강화되면 수치가 더 오릅니다."],
            ["플래티넘 펫은 어떻게 얻나요?", "플래티넘 펫은 <b>펫 조합</b>으로 얻습니다. <b>골드 펫끼리 조합</b>하면 <b>25%</b> 확률로 플래티넘 펫을 얻고, 실패하면 무작위 골드 펫이 나옵니다. 골드 조합은 코인 조합 5마리 + 10,000 코인, 포인트 조합 2마리 + 10 포인트입니다. 재료로 쓴 펫은 모두 사라지고 새 펫 1마리가 Lv.1로 나오며, 장착 중이거나 잠금한 펫은 재료로 쓰이지 않습니다."],
            ["기존 펫 아이템(펫 효과 변경 티켓 등)은 어떻게 되나요?", "<b>펫 등급 업 아이템 · 펫 효과 변경 티켓 · 펫 외형 변경 티켓 · 펫 이름 변경 티켓</b>은 10/28 정기 점검 시작(15:00 KST) 이후 사용하실 수 없습니다. 남은 아이템은 인벤토리에서 판매하실 수 있습니다."],
            ["골드 펫 뽑기 티켓을 쓰면 무엇이 나오나요? 새 펫은 어떻게 얻나요?", "펫 입양에서 코인(1회 2,000 · 10회 20,000), 포인트(10회 10 포인트), 골드 펫 뽑기 티켓(1회 1장 · 10회 10장)으로 입양할 수 있습니다. <b>어떤 방법이든 확률은 같습니다</b>: 브론즈 70% · 실버 25% · 골드 5%이며, 플래티넘 펫은 펫 조합으로 얻습니다. 골드 펫은 실버 펫끼리 조합해 40% 확률로도 얻을 수 있습니다."] ] } ] }
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
      subsCan: "Sub Abilities this grade can get ({n}) · Initial Value", prev: "Previous", next: "Next", close: "Close", none: "None", photo: "Image coming soon", issues: "Known Issues",
      gradeInfo: {
        P: { sub: "3 slots (unlocked at Lv.3 · 6 · 9)", up: "Lv.12 · 15", how: "You can get one by succeeding at a <b>Gold pet Combination</b> (25%)." },
        G: { sub: "2 slots (unlocked at Lv.3 · 6)", up: "Lv.9", how: "Appears through <b>Adoption</b> at a 5% rate (1 of 15 Gold pets), or by succeeding at a <b>Silver pet Combination</b> (40%)." },
        S: { sub: "1 slot (unlocked at Lv.3)", up: "–", how: "Appears through <b>Adoption</b> at a 25% rate (1 of 4 Silver pets), or by succeeding at a <b>Bronze pet Combination</b> (60%)." },
        B: { sub: "None", up: "–", how: "Appears through <b>Adoption</b> at a 70% rate (1 of 6 Bronze pets)." } } },
    chapters: [
      { id: "overview", nav: "Overview of Changes", title: "What has changed?", q: "",
        blocks: [
          { type: "text", text: "Pets now live in the Characters menu, so you can raise them right alongside your characters. Equipped pets' abilities apply with no activation conditions, the Unique Ability grows stronger with every level, and Sub Abilities let you build your own pet." },
          { type: "compare", label: "What's Different", head: ["Item", "Before", "After"],
            rows: [
              ["Pet Menu", "Management › Pet", "Characters › Select Character › Pet (alongside Ability Card and Freestyle)", "up"],
              ["Checking Your Pet", "The full pet list was shown first", "See this character's pet, its abilities and level right away in Pet Lineup", "up"],
              ["Getting New Pets", "Kennels in the Shop (Silver · Gold · Platinum)", "Adopt Pet (Coins · Points · Gold Pet Adoption Tickets); higher grades through Pet Combination"],
              ["Raising Pets", "Split into Friendship, Prestige and Skill", "Level up through Training by feeding other pets, and combine pets of the same grade for a chance at a higher grade", "up"],
              ["Ability Effects", "Applied briefly only when activation conditions were met in a match", "Applied the whole time the pet is equipped, with no activation conditions", "up"],
              ["Abilities", "Raising Prestige only increased the number of activations", "1 Unique Ability that rises every level + up to 3 Sub Ability slots by grade", "up"],
              ["Pet Items", "Prestige Up · Skill Change · Appearance Change · Rename", "No longer used with the new growth system (level up · combination); remaining items can be sold from your inventory"],
              ["Pets You Owned", "–", "Same type, look and grade; given at the max level of their grade (1 Unique Ability)"],
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
            ["Pet House", "PET HOUSE", "View all your pets and equip, train (level up), lock or dismiss them.", "system"],
            ["Pet Combination", "PET COMBINATION", "Combine pets of the same grade for a chance at a higher grade.", "system"] ] } ] },

      { id: "system", nav: "Pet System", title: "How does the Pet System work?", q: "Start with grades, Unique Abilities and Sub Abilities, then see what you can do on each of the four Pet menu screens.",
        blocks: [
          { type: "facts", items: [
            ["Grade", "4 grades: Bronze · Silver · Gold · Platinum. Higher grades have a higher max level and more Sub Ability slots."],
            ["Unique Ability", "Each pet has 1 unique ability, and its value increases with every level."],
            ["Sub Ability", "Decided when you obtain a pet, one per slot of its grade, and revealed and applied when each slot is unlocked. The same sub ability never appears twice on one pet."],
            ["Sub Ability Upgrade", "At Gold Lv.9 and Platinum Lv.12 · 15, one unlocked sub ability selected at random is enhanced. On Platinum pets, the same sub ability can be enhanced twice."] ] },
          { type: "table", label: "Grades at a Glance", photo: "subs",
            head: ["Grade", "Max Level", "Sub Ability Slots", "Slot Unlock Level", "Sub Ability Upgrade Level"],
            rows: [["Bronze", "Lv.3", "0", "–", "–"], ["Silver", "Lv.6", "1", "Lv.3", "–"], ["Gold", "Lv.12", "2", "Lv.3 · 6", "Lv.9"], ["Platinum", "Lv.15", "3", "Lv.3 · 6 · 9", "Lv.12 · 15"]] },
          { type: "facts", label: "Pet Lineup — This Character's Pet", photo: "lineup", marks: [[75.9, 25.0], null, [75.2, 81.2], [19.8, 89.6], null], items: [
            ["Screen", "See your equipped pet's name, grade, level, EXP, and its unique and sub ability values. Slots not yet unlocked show the level at which they open."],
            ["Select Pet", "If no pet is equipped, use Select Pet to choose one in the Pet House and it is equipped right away. If you have no pets, an Adopt Pet button appears."],
            ["Training", "Train (level up) your equipped pet right from this screen."],
            ["Unequip Pet", "Unequipping a pet requires Points."],
            ["Other Characters' Pets", "Pets equipped by another character can't be equipped."] ] },
          { type: "bars", label: "Adopt Pet — Get New Pets", photo: "adopt",
            text: "You can adopt pets with Coins (1 adoption 2,000 · 10 adoptions 20,000), Points (10 adoptions 10 Points) or Gold Pet Adoption Tickets (1 Ticket per adoption · 10 Tickets for 10 adoptions). The rates are the same for every adoption method, and all pets within the same grade have an equal chance. Results are shown right away, and the button at the bottom opens the probability page.",
            items: [["Bronze", 70, "6 types"], ["Silver", 25, "4 types"], ["Gold", 5, "15 types"], ["Platinum", 0, "Obtained through Pet Combination"]] },
          { type: "facts", label: "Pet House — Manage Your Pets", photo: "house", marks: [[22.3, 27.8], null, [86.0, 83.4], [77.1, 83.4]], items: [
            ["List", "Shows all your pets. Equipped pets show the face of the character using them, and you can filter by grade."],
            ["Equip · Unequip", "Equip the selected pet to the current character or unequip it. Pets equipped by another character can only be trained."],
            ["Training", "Opens the Training (level up) screen for the selected pet. You can raise pets in advance even if they are not equipped."],
            ["Lock", "Locked pets are not used as feed or combination materials. Locked pets can still be equipped."] ] },
          { type: "facts", label: "Dismiss Pet · Pet House Expansion", photo: "dismiss", marks: [[29.1, 43.4], null], items: [
            ["Dismiss Pet", "Send away pets that are not locked or equipped and receive Coins based on their grade. Once a pet is dismissed, it cannot be used again. Use Select All to dismiss several pets at once."],
            ["Pet House Expansion", "Use Points to add slots to your Pet House. The number of slots and the cost of the next expansion are shown on the expansion button."] ] },
          { type: "facts", label: "Training — Level Up by Feeding Other Pets", photo: "pet_detail", marks: [null, [64.7, 21.5], [83.1, 42.7], [70.9, 66.9], [33.1, 88.9], [18.0, 89.4], [42.0, 29.9]], items: [
            ["Feed Cost", "100 Coins per pet used as feed"],
            ["EXP as Feed", "Bronze 10 · Silver 20 · Gold 50 · Platinum 200"],
            ["Raised Pets as Feed", "3% of the EXP invested in that pet is added to its base EXP."],
            ["Auto Select", "Choose a target level and enough materials to reach it are selected automatically (lowest grade and level first). You can still remove them one by one."],
            ["Available Sub Abilities", "See the list of sub abilities that can appear on pets of this grade and their initial values. The initial value is applied when the slot is unlocked, and increases when the sub ability is upgraded."],
            ["Can't Be Used as Feed", "Equipped pets and locked pets. You can unlock pets right on this screen."],
            ["Over Max Level", "EXP exceeding the max level is not carried over."] ] },
          { type: "table", label: "Pet Combination — Combine the same grade to move up", photo: "combination",
            head: ["Material Grade", "Upgrade Rate", "Coin Combination", "Point Combination"],
            rows: [["Bronze", "60%", "5 pets + 2,500 Coins", "2 pets + 2 Points"], ["Silver", "40%", "5 pets + 4,000 Coins", "2 pets + 4 Points"], ["Gold", "25%", "5 pets + 10,000 Coins", "2 pets + 10 Points"], ["Platinum", "–", "5 pets + 10,000 Coins", "2 pets + 10 Points"]],
            note: "All material pets are used up, and 1 new pet is obtained at Lv.1. On success you get a pet one grade higher; otherwise you get a random pet of the same grade. Combining Platinum pets always gives a Platinum pet of a random type." },
          { type: "facts", label: "Using the Pet Combination Screen", photo: "combination_point", marks: [[84.9, 67.2], [66.8, 52.7], [20.9, 28.8], [25.5, 89.7]], items: [
            ["Combination Type", "Use the Combination Type button to switch between Coin Combination (5 pets) and Point Combination (2 pets). The number of pets and the cost change, while the upgrade rate stays the same."],
            ["Appearance Rate", "Once all slots are filled, the possible result grades and their rates are shown."],
            ["Pets You Can Use", "Only pets of the same grade can be combined. Equipped pets don't appear in the list, and locked pets can't be added."],
            ["Combine All", "Choose grades to combine all at once, starting from the lowest grade. Lower-level pets are used first, and pets that can't fill a set (5 for Coins · 2 for Points) are kept. Up to 200 material pets can be used at once (40 Coin Combinations or 100 Point Combinations)."] ] } ] },

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
              { g: "Platinum", rows: [["Rabbit Alien UFO", "Fei's Nine-tailed Fox Hair"], ["Candy Pinata", "Nine-tailed Fox Outfit"], ["White Cleaner Bot", "Nine-tailed Fox Tail"]] },
              { g: "Gold", rows: [["Gold Pet Adoption Ticket", "10000 Coins"], ["Pet Skill Change Ticket", "Selectable Ability Card Silver Box Ticket x5"]] } ] } ] },

      { id: "events", nav: "Limited Events", title: "What events are on now?", q: "Limited-time events running with the Oct. 28th update. Check the period and rewards, and join before they end!",
        blocks: [
          {"type": "event", "key": "shopping_spree", "label": "Shopping Spree! Event", "img": "img/events/shopping_spree_en.jpg", "period": "Oct. 28th - Nov. 3rd 23:59 PST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "Spend 700P or more on the Platinum Pet Surprise Box, Pet Adoption or Pet Combination during the event period and earn a Guaranteed Platinum Pet Kennel!<br>Join now and don't miss out!", "table": {"head": ["Points Spent", "Reward"], "rows": [["700P or more", "Guaranteed Platinum Pet Kennel x1"]]}, "note": "Rewards will be given during the Nov. 4th maintenance. The Guaranteed Platinum Pet Kennel gives 1 of 26 Platinum Pets, each with a 3.85% chance."},
          {"type": "event", "key": "cumulative_payment", "label": "Cumulative Payment Event", "img": null, "period": "Oct. 28th - Nov. 3rd 23:59 PST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "Get My Pick Costume Ticket and Intensive Item as payback bonus!<br>Reach each required score and earn the rewards!", "table": {"head": ["Required Score", "Rewards"], "rows": [["50", "My Pick Outfit Ticket x5"], ["100", "My Pick Outfit Ticket x10"], ["300", "Intensive Note x5 · My Pick Outfit Ticket x15"], ["500", "Intensive Note x10 · My Pick Outfit Ticket x20"], ["700", "Intensive Manual x1 · My Pick Outfit Ticket x50"]]}},
          {"type": "event", "key": "pet_box", "label": "Platinum Pet Surprise Box", "img": "img/events/pet_box_en.jpg", "period": "Oct. 28th - Nov. 10th 23:59 PST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-11T07:59:00Z", "text": "Get 1 of 26 Platinum Pets guaranteed!<br>Meet your own Platinum Pet at an amazing price!<br>Don't miss out on the cumulative purchase rewards too!", "table": {"head": ["Purchases", "Reward", "Quantity"], "rows": [["2", "Gold Pet Adoption Ticket", "10"], ["4", "Gold Pet Adoption Ticket", "40"], ["6", "Guaranteed Platinum Pet Kennel", "1"], ["8", "Guaranteed Platinum Pet Kennel", "1"], ["10", "Guaranteed Platinum Pet Kennel", "1"], ["12", "Top Platinum Pet Selectable Box", "1"]]}, "items": ["White Cleaner Bot 10%", "Candy Pinata 10%", "CarroBot 10%", "Defense Monocle 10%", "Shooting Monocle 10%"], "note": "Includes probability-based items. The 5 Pets above have a 10% chance each, and the other 21 Platinum Pets have a 2.38% chance each. The Guaranteed Platinum Pet Kennel from the cumulative purchase rewards gives 1 of the 26 Platinum Pets, each with a 3.85% chance."} ] },

      { id: "faq", nav: "FAQ", title: "FAQ", q: "Answers to frequently asked questions.",
        blocks: [
          { type: "faq", items: [
            ["Will my existing pets disappear? Do they keep their abilities?", "No, they will not disappear. Your existing pets <b>keep their grade and appearance</b>, become the <b>max level</b> of their grade. See 'Existing Pets' for details. However, all pets were unequipped with this update, so please equip them again in [Characters] - [Select Character] - [Pet] - PET LINEUP."],
            ["How are Sub Abilities decided? Do they increase when my pet levels up?", "Sub Abilities are <b>decided the moment you obtain a pet</b>, one for each slot, and each one is revealed and applied when its slot unlocks. Silver pets have 1 slot, Gold pets 2 and Platinum pets 3 (Bronze pets have none). Slots unlock at Lv.3 for Silver, Lv.3 · 6 for Gold and Lv.3 · 6 · 9 for Platinum. At <b>Gold Lv.9 and Platinum Lv.12 · 15</b>, one unlocked Sub Ability is upgraded at random (on Platinum pets, the same one can be upgraded twice). The same Sub Ability never appears twice on one pet."],
            ["Is each pet's Unique Ability fixed? How do I level up my pets?", "Yes. Each pet has <b>1 fixed Unique Ability</b>, and its value increases with every level. You can check each pet's Lv.1 and max level values in the pet list on this page. To level up a pet, <b>use other pets as feed</b>. Each feed pet costs 100 Coins and gives 10 (Bronze), 20 (Silver), 50 (Gold) or 200 (Platinum) EXP. Max level is Lv.3 for Bronze, Lv.6 for Silver, Lv.12 for Gold and Lv.15 for Platinum. Equipped or locked pets cannot be used as feed."],
            ["What changed with the Pet System Renewal?", "<b>Menu</b>: [Management] - [Pet] → [Characters] - [Select Character] - [Pet]<br><b>Equipped pets</b>: All pets were unequipped with this update.<br><b>Pets</b>: 4 grades (Bronze, Silver, Gold, Platinum), 1 Unique Ability per pet, and 0–3 Sub Ability slots depending on grade<br><b>Get &amp; grow</b>: Get pets through Adoption, level them up by feeding them other pets, and combine pets of the same grade for a chance at a higher grade.<br><b>Old items</b>: Pet Prestige Up Item, Pet Skill Change Ticket, Pet Appearance Change Ticket and Rename Ticket can no longer be used."],
            ["I can't see my pets after the update. Where do I equip them?", "All pets were <b>unequipped</b> with this update. The Pet menu has moved from Management to <b>[Characters] - [Select Character] - [Pet]</b>. Select a character, then select a pet in PET LINEUP to equip it again. Pets used as material for Combination or as feed are used up, so please lock the pets you want to keep. If a pet is still missing after checking, please contact us."],
            ["Do new pets have a 3 Point Shot Success Rate ability?", "None of the 51 pets in the renewed system has 3 Point Shot Success Rate as its Unique Ability. The 3-point-related Unique Abilities are <b>Red Cyber Drone</b> (3 Point Fade Away Success Rate, 0.6% at Lv.1 → 8% at Lv.15) and <b>Brown Dobermann</b> (3 Point Fade Away Defense Resist). As Sub Abilities, 6 three-point abilities, including <b>3 Point Shot Success Rate (2%)</b>, can appear on Silver, Gold and Platinum pets, and their values increase when upgraded."],
            ["How do I get Platinum pets?", "Platinum pets are obtained through <b>Pet Combination</b>. <b>Combine Gold pets</b> for a <b>25%</b> chance to get a Platinum pet; otherwise, you get a random Gold pet. Gold Combination costs 5 pets + 10,000 Coins (Coin Combination) or 2 pets + 10 Points (Point Combination). All material pets are used up, and 1 new pet is obtained at Lv.1. Equipped or locked pets are not used as material."],
            ["What happens to my old pet items (Pet Skill Change Ticket, etc.)?", "<b>Pet Prestige Up Item, Pet Skill Change Ticket, Pet Appearance Change Ticket and Rename Ticket</b> can no longer be used since the 10/28 maintenance began (10/27 23:00 PDT). Any remaining items can be sold from your inventory."],
            ["What do I get from a Gold Pet Adoption Ticket? How do I get new pets?", "You can adopt pets in ADOPT PET with Coins (2,000 for 1 · 20,000 for 10), Points (10 Points for 10) or Gold Pet Adoption Tickets (1 ticket per adoption · 10 tickets for 10). <b>The rates are the same for every method</b>: Bronze 70%, Silver 25%, Gold 5%. Platinum pets are obtained through Pet Combination. You can also get a Gold pet by combining Silver pets (40% chance)."] ] } ] }
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
      subsCan: "この等級に付く可能性のあるサブ能力 {n}種・初期数値", prev: "前へ", next: "次へ", close: "閉じる", none: "なし", photo: "画像準備中", issues: "確認されている不具合",
      gradeInfo: {
        P: { sub: "3枠（Lv.3 · 6 · 9で解放）", up: "Lv.12 · 15", how: "<b>ゴールドペットの合成</b>に成功（25%）すると入手できます。" },
        G: { sub: "2枠（Lv.3 · 6で解放）", up: "Lv.9", how: "<b>養子縁組</b>で5%の確率（ゴールド15種のうち1体）で登場するほか、<b>シルバーペットの合成</b>に成功（40%）すると入手できます。" },
        S: { sub: "1枠（Lv.3で解放）", up: "–", how: "<b>養子縁組</b>で25%の確率（シルバー4種のうち1体）で登場するほか、<b>ブロンズペットの合成</b>に成功（60%）すると入手できます。" },
        B: { sub: "なし", up: "–", how: "<b>養子縁組</b>で70%の確率（ブロンズ6種のうち1体）で登場します。" } } },
    chapters: [
      { id: "overview", nav: "変更概要", title: "何が変わりましたか？", q: "",
        blocks: [
          { type: "text", text: "ペットがキャラクターメニューに移り、キャラクターと一緒に育てやすくなりました。装着したペットの能力は発動条件なしで適用され、レベルを上げるほど固有能力が強くなり、サブ能力で自分だけのペットを作れます。" },
          { type: "compare", label: "以前との違い", head: ["項目", "変更前", "変更後"],
            rows: [
              ["ペットメニュー", "マネジメント › ペット", "キャラクター › キャラクター選択 › ペット（能力カード・フリースタイルと同じ場所）", "up"],
              ["ペットの確認", "所持ペット全体の一覧から表示", "ペットラインアップでこのキャラクターのペットと能力・レベルをすぐ確認", "up"],
              ["新しいペットの入手", "ショップのケンネル（シルバー・ゴールド・プラチナ）", "ペット養子縁組（コイン・ポイント・ゴールドペット養子縁組チケット）、上位等級はペット合成で"],
              ["育て方", "親密度・ランク・効果に分かれた育成", "他のペットをエサにする訓練でレベルアップ、同じ等級同士の合成で上位等級に挑戦", "up"],
              ["能力の適用", "試合中、発動条件を満たした時だけ一時的に適用", "発動条件なしで、装着している間ずっと適用", "up"],
              ["能力の構成", "ランクを上げても発動回数が増えるだけ", "レベルごとに上昇する固有能力1つ ＋ 等級別のサブ能力最大3枠", "up"],
              ["ペットアイテム", "ランクアップ・効果変更・外見変更・名前変更", "新しい育成方式（レベルアップ・合成）に変わったため使用終了、残ったアイテムはインベントリで売却可能"],
              ["お持ちだったペット", "–", "種類・外見・等級はそのまま、その等級の最大レベルで付与（固有能力1つ）"],
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
            ["ペットハウス", "PET HOUSE", "お持ちのペットをすべて確認し、装着・訓練（レベルアップ）・ロック・お別れができます。", "system"],
            ["ペット合成", "PET COMBINATION", "同じ等級のペットを合成して、上位等級に挑戦します。", "system"] ] } ] },

      { id: "system", nav: "ペットシステム", title: "ペットシステムはどうなっていますか？", q: "等級・固有能力・サブ能力を確認したうえで、ペットメニューの4つの画面でできることをご覧ください。",
        blocks: [
          { type: "facts", items: [
            ["等級", "ブロンズ・シルバー・ゴールド・プラチナの4段階。等級が高いほど最大レベルとサブ能力の枠が増えます。"],
            ["固有能力", "ペットごとに決まった能力が1つあり、レベルが上がるたびに数値が上昇します。"],
            ["サブ能力", "ペットを入手した時点で等級別の枠の数だけ決まり、解放レベルに到達すると公開・適用されます。1体のペットに同じサブ能力が2つ付くことはありません。"],
            ["サブ能力強化", "ゴールドはLv.9、プラチナはLv.12・15で、解放済みのサブ能力から1つがランダムに強化されます。プラチナは同じサブ能力が2回強化されることもあります。"] ] },
          { type: "table", label: "等級別一覧", photo: "subs",
            head: ["等級", "最大レベル", "サブ能力の枠", "枠の解放レベル", "サブ能力強化レベル"],
            rows: [["ブロンズ", "Lv.3", "0", "–", "–"], ["シルバー", "Lv.6", "1", "Lv.3", "–"], ["ゴールド", "Lv.12", "2", "Lv.3 · 6", "Lv.9"], ["プラチナ", "Lv.15", "3", "Lv.3 · 6 · 9", "Lv.12 · 15"]] },
          { type: "facts", label: "ペットラインアップ — このキャラクターのペット", photo: "lineup", marks: [[75.9, 25.0], null, [75.2, 81.2], [19.8, 89.6], null], items: [
            ["画面", "装着中のペットの名前・等級・レベル・経験値と、固有能力・サブ能力の数値を確認できます。まだ解放されていないサブ能力の枠には解放レベルが表示されます。"],
            ["ペットを選択", "ペットを装着していない場合は、ペットを選択からペットハウスで選ぶとすぐに装着されます。ペットを持っていない場合は、ペット養子縁組ボタンが表示されます。"],
            ["訓練", "装着中のペットをこの画面からすぐに訓練（レベルアップ）できます。"],
            ["ペット解除", "装着中のペットを外すペット解除にはポイントが必要です。"],
            ["他のキャラクターのペット", "他のキャラクターが装着中のペットは装着できません。"] ] },
          { type: "bars", label: "ペット養子縁組 — 新しいペットを入手", photo: "adopt",
            text: "コイン（1回 2,000 · 10回 20,000）、ポイント（10回 10ポイント）、ゴールドペット養子縁組チケット（1回1枚 · 10回10枚）で養子縁組できます。方法に関係なく等級の確率は同じで、同じ等級のペットはすべて同じ確率で登場します。結果はすぐに表示され、下のボタンから確率ページを確認できます。",
            items: [["ブロンズ", 70, "6種"], ["シルバー", 25, "4種"], ["ゴールド", 5, "15種"], ["プラチナ", 0, "ペット合成で入手"]] },
          { type: "facts", label: "ペットハウス — 所持ペットの管理", photo: "house", marks: [[22.3, 27.8], null, [86.0, 83.4], [77.1, 83.4]], items: [
            ["一覧", "所持しているペットがすべて表示されます。装着中のペットには装着しているキャラクターの顔が表示され、フィルターで等級別に見ることができます。"],
            ["装着・解除", "選んだペットを今のキャラクターに装着、または解除します。他のキャラクターが装着中のペットは訓練のみできます。"],
            ["訓練", "選んだペットの訓練（レベルアップ）画面に進みます。装着していないペットも前もって育てられます。"],
            ["ロック", "ロックしたペットはエサ・合成の材料に使われません。ロック中でも装着はできます。"] ] },
          { type: "facts", label: "お別れ・ペットハウス拡張", photo: "dismiss", marks: [[29.1, 43.4], null], items: [
            ["お別れ", "ロック・装着していないペットとお別れし、等級に応じたコインを獲得します。お別れしたペットは再び使えません。すべて選択で複数のペットとまとめてお別れできます。"],
            ["ペットハウス拡張", "ポイントでペットハウスの枠を増やせます。次の拡張の枠数と費用は拡張ボタンに表示されます。"] ] },
          { type: "facts", label: "訓練 — 他のペットをエサにしてレベルアップ", photo: "pet_detail", marks: [null, [64.7, 21.5], [83.1, 42.7], [70.9, 66.9], [33.1, 88.9], [18.0, 89.4], [42.0, 29.9]], items: [
            ["エサの費用", "エサ1体につき100コイン"],
            ["エサ経験値", "ブロンズ 10 · シルバー 20 · ゴールド 50 · プラチナ 200"],
            ["育成したペットをエサに", "基本経験値に、そのペットに投入した経験値の3%が加算されます。"],
            ["自動選択", "目標レベルを選ぶと、届く分の材料が自動で選ばれます（低い等級・低いレベルから）。1体ずつ外すこともできます。"],
            ["登場サブ能力", "この等級に付く可能性のあるサブ能力の一覧と初期数値を確認できます。初期数値は枠の解放時に適用され、強化すると数値が上昇します。"],
            ["エサにできないペット", "装着中のペットとロック中のペット。ロックはこの画面ですぐに解除できます。"],
            ["最大レベル超過分", "最大レベルを超えた経験値は適用されません。"] ] },
          { type: "table", label: "ペット合成 — 同じ等級同士で1つ上の等級へ", photo: "combination",
            head: ["材料の等級", "上位等級の確率", "コイン合成", "ポイント合成"],
            rows: [["ブロンズ", "60%", "5体 + 2,500コイン", "2体 + 2ポイント"], ["シルバー", "40%", "5体 + 4,000コイン", "2体 + 4ポイント"], ["ゴールド", "25%", "5体 + 10,000コイン", "2体 + 10ポイント"], ["プラチナ", "–", "5体 + 10,000コイン", "2体 + 10ポイント"]],
            note: "材料にしたペットはすべて消え、新しいペット1体がLv.1で登場します。成功すると1つ上の等級、失敗すると同じ等級のペットがランダムに登場します。プラチナ同士を合成すると必ずプラチナが登場し、種類だけがランダムに決まります。" },
          { type: "facts", label: "ペット合成画面の使い方", photo: "combination_point", marks: [[84.9, 67.2], [66.8, 52.7], [20.9, 28.8], [25.5, 89.7]], items: [
            ["合成方式の切り替え", "合成方式ボタンで、コイン合成（5体）とポイント合成（2体）を切り替えます。必要な体数と費用が変わり、上位等級の確率は変わりません。"],
            ["出現確率", "材料をすべて入れると、結果として出る可能性のある等級と確率が表示されます。"],
            ["入れられるペット", "同じ等級同士のみ合成できます。装着中のペットは一覧に表示されず、ロック中のペットは入れられません。"],
            ["一括合成", "等級を選んでまとめて合成します。低い等級から順に進み、レベルの低いペットから使います。セット（コイン5体・ポイント2体）に満たないペットは残ります。一度に最大200体まで使用できます（コイン合成最大40回 · ポイント合成最大100回）。"] ] } ] },

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

      { id: "events", nav: "期間限定イベント", title: "今どんなイベントが開催中ですか？", q: "10/28アップデートとともに開催中の期間限定イベントをまとめました。期間と報酬を確認して、ぜひ参加してください！",
        blocks: [
          {"type": "event", "key": "shopping_spree", "label": "ショッピングスプリー！イベント", "img": "img/events/shopping_spree_jp.jpg", "period": "10月28日 - 11月4日 16:59 JST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "ドキドキプラチナペットボックス・ペット養子縁組・ペット合成で700P以上消費すると、プラチナ確定ペットケンネルをゲット！<br>今すぐ参加しよう！", "table": {"head": ["消費ポイント", "報酬"], "rows": [["700P以上", "プラチナ確定ペットケンネル x1"]]}, "note": "報酬は11/4のメンテナンス中に配布されます。プラチナ確定ペットケンネルからは、プラチナペット26種のうち1体がそれぞれ3.85%の確率で登場します。"},
          {"type": "event", "key": "cumulative_payment", "label": "累積課金イベント", "img": null, "period": "10月28日 - 11月4日 16:59 JST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "累積課金ポイントに応じて、マイピック衣装チケットと超越アイテムをペイバック！<br>必要ポイントを達成して、段階ごとの報酬をゲットしよう！", "table": {"head": ["必要ポイント", "報酬"], "rows": [["50", "マイピック衣装チケット x5"], ["100", "マイピック衣装チケット x10"], ["300", "超越ノート x5 · マイピック衣装チケット x15"], ["500", "超越ノート x10 · マイピック衣装チケット x20"], ["700", "超越教本 x1 · マイピック衣装チケット x50"]]}},
          {"type": "event", "key": "pet_box", "label": "ドキドキプラチナペットボックス", "img": "img/events/pet_box_jp.jpg", "period": "10月28日 - 11月11日 16:59 JST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-11T07:59:00Z", "text": "26種のプラチナペットから1体を確定でゲット！<br>破格の価格で自分だけのプラチナペットに出会おう！<br>累計購入報酬もお見逃しなく！", "table": {"head": ["購入数", "報酬", "数量"], "rows": [["2", "ゴールドペット養子縁組チケット", "10"], ["4", "ゴールドペット養子縁組チケット", "40"], ["6", "プラチナ確定ペットケンネル", "1"], ["8", "プラチナ確定ペットケンネル", "1"], ["10", "プラチナ確定ペットケンネル", "1"], ["12", "人気プラチナペット選択ボックス", "1"]]}, "items": ["ホワイトロボット掃除機 10%", "キャンディピニャータ 10%", "CarroBot 10%", "Defense Monocle 10%", "Shooting Monocle 10%"], "note": "確率型アイテムを含みます。上記5種はそれぞれ10%、その他のプラチナペット21種はそれぞれ2.38%の確率で登場します。累計購入報酬のプラチナ確定ペットケンネルからは、26種のうち1体がそれぞれ3.85%の確率で登場します。"} ] },

      { id: "faq", nav: "よくある質問", title: "よくある質問", q: "お問い合わせの多い内容をまとめました。",
        blocks: [
          { type: "faq", items: [
            ["今まで持っていたペットはなくなりますか？能力はそのままですか？", "なくなりません。既存のペットは<b>ランクと外見がそのまま維持</b>され、その等級の<b>最大レベル</b>になります。詳しくは「既存ペットの扱い」をご確認ください。ただし、アップデート後はすべてのペットの装着が解除されていますので、[キャラクター] - [キャラクター選択] - [ペット] - ペットラインアップで再度装着してください。"],
            ["サブ能力はどのように決まりますか？レベルを上げると上がりますか？", "サブ能力は<b>ペットを獲得した瞬間にスロット数だけ決まり</b>、解放レベルに達すると公開・適用されます。スロット数はシルバー1・ゴールド2・プラチナ3で、ブロンズにはありません。解放はシルバーLv.3、ゴールドLv.3・6、プラチナLv.3・6・9です。<b>ゴールドLv.9・プラチナLv.12・15</b>では、解放済みのサブ能力から1つがランダムに強化されます（プラチナは同じ能力が2回強化されることもあります）。1体のペットに同じサブ能力が2つ付くことはありません。"],
            ["固有能力はペットごとに決まっていますか？ペットのレベルはどう上げますか？", "はい、固有能力は<b>ペットごとに決まった1つ</b>で、レベルが上がるたびに一緒に上がります。ペットごとのLv.1・最大レベルの数値はペット図鑑でご確認いただけます。レベルは<b>他のペットをエサとして与えて</b>上げます。エサ1体につき100コインがかかり、エサのランクに応じて経験値10（ブロンズ）・20（シルバー）・50（ゴールド）・200（プラチナ）を獲得します。最大レベルはブロンズLv.3・シルバーLv.6・ゴールドLv.12・プラチナLv.15で、装着中またはロック中のペットはエサにできません。"],
            ["今回のペットシステム改編で何が変わりましたか？", "<b>メニューの位置</b>：[マネジメント] - [ペット] → [キャラクター] - [キャラクター選択] - [ペット]<br><b>装着</b>：アップデート後、すべてのペットの装着が解除されました。<br><b>ペットの構成</b>：ブロンズ・シルバー・ゴールド・プラチナの4ランク、ペットごとに固有能力1つと、ランクに応じたサブ能力0～3スロット<br><b>入手・育成</b>：養子縁組で入手し、他のペットをエサにしてレベルを上げ、同じランク同士の合成で上位ランクに挑戦します。<br><b>既存アイテム</b>：ペットランクアップアイテム・ペット効果変更チケット・ペットの外見変更チケット・ペットの名前変更チケットは使用できなくなりました。"],
            ["アップデート後、ペットが見当たりません。どこで装着しますか？", "アップデート後、<b>すべてのペットの装着が解除</b>されています。ペットメニューがマネジメントから<b>[キャラクター] - [キャラクター選択] - [ペット]</b>に移動しましたので、キャラクターを選んだ後、ペットラインアップでペットを選択して再度装着してください。合成やレベルアップ（エサ）の素材にしたペットはなくなりますので、大切なペットはロックしておいてください。確認しても見当たらないペットがある場合はお問い合わせください。"],
            ["新しいペットには3点シュートの成功率の能力はありませんか？", "改編後に入手するペット（51種）の固有能力に3点シュートの成功率はありません。3点シュート関連の固有能力は<b>レッドサイバードローン</b>（3点フェードアウェーの成功率、Lv.1 0.6% → Lv.15 8%）と<b>ブラウンドーベルマン</b>（3点フェードアウェーの守備抵抗）です。サブ能力では<b>3点シュートの成功率上昇（2%）</b>をはじめとする3点シュート関連の能力6種がシルバー・ゴールド・プラチナで出る可能性があり、強化されると数値がさらに上がります。"],
            ["プラチナペットはどうやって入手しますか？", "プラチナペットは<b>ペット合成</b>で入手します。<b>ゴールドペット同士を合成</b>すると<b>25%</b>の確率でプラチナペットを獲得でき、失敗するとランダムなゴールドペットになります。ゴールドの合成はコイン合成が5体＋10,000コイン、ポイント合成が2体＋10ポイントです。素材にしたペットはすべてなくなり、新しいペット1体がLv.1で出ます。装着中またはロック中のペットは素材に使われません。"],
            ["既存のペットアイテム（ペット効果変更チケットなど）はどうなりますか？", "<b>ペットランクアップアイテム・ペット効果変更チケット・ペットの外見変更チケット・ペットの名前変更チケット</b>は、10/28の定期メンテナンス開始（15:00 KST）以降ご使用いただけません。残ったアイテムはインベントリで売却できます。"],
            ["ゴールドペット養子縁組チケットを使うと何が出ますか？新しいペットはどうやって入手しますか？", "ペットの養子縁組では、コイン（1回2,000・10回20,000）、ポイント（10回10ポイント）、ゴールドペット養子縁組チケット（1回1枚・10回10枚）で養子縁組できます。<b>どの方法でも確率は同じです</b>：ブロンズ70%・シルバー25%・ゴールド5%で、プラチナペットはペット合成で入手します。ゴールドペットはシルバーペット同士の合成（40%）でも入手できます。"] ] } ] }
    ]
  }
};
