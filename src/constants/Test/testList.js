const testList = [
  {
    q: ["세안 후에 아무것도 바르지 않으면 당신의 피부는 어떻습니까?"],
    a: [
      { text: "매우 건조하다", count: 4, type: "DorO" },
      { text: "건조하다", count: 3, type: "DorO" },
      { text: "그냥 그렇다", count: 2, type: "DorO" },
      { text: "윤기가 있다", count: 1, type: "DorO" },
    ],
  },
  {
    q: ["얼굴에 모공이 있습니까?"],
    a: [
      { text: "전혀 없다", count: 4, type: "DorO" },
      { text: "거의 없다", count: 3, type: "DorO" },
      { text: "때때로 있다", count: 2, type: "DorO" },
      { text: "항상 있다", count: 1, type: "DorO" },
    ],
  },
  {
    q: ["자신의 피부는 다음 중에서 어떤 상태에 가깝나요?"],
    a: [
      { text: "건성", count: 4, type: "DorO" },
      { text: "정상", count: 3, type: "DorO" },
      { text: "복합", count: 2, type: "DorO" },
      { text: "지성", count: 1, type: "DorO" },
    ],
  },
  {
    q: [
      "과거에 여드름, 주사피부염, 아토피 피부염에 대한 진단을 받을 적이 있습니까?",
    ],
    a: [
      { text: "없다", count: 4, type: "RorS" },
      {
        text: "친구와 지인이 나에게 이런 증상이 있다고 얘기한다",
        count: 3,
        type: "RorS",
      },
      { text: "진단을 받았다", count: 2, type: "RorS" },
      { text: "심각한 경우에 해당한다", count: 1, type: "RorS" },
    ],
  },
  {
    q: ["아무 화장품이든지 몸이나 얼굴에 아무런 문제없이 사용할 수 있습니까?"],
    a: [
      { text: "문제 없이 사용할 수 있다", count: 4, type: "RorS" },
      {
        text: "대부분 가능하며, 아무런 문제가 없다",
        count: 3,
        type: "RorS",
      },
      {
        text: "피부가 가렵고 붉게 변한다(예 : 뾰루지, 발진, 가려움증, 따끔거림)",
        count: 2,
        type: "RorS",
      },
      { text: "많은 문제가 있었다", count: 1, type: "RorS" },
    ],
  },
  {
    q: ["사진을 찍으면 얼굴이 붉게 보입니까?"],
    a: [
      { text: "전혀 아니다", count: 4, type: "RorS" },
      {
        text: "때때로 그렇다",
        count: 3,
        type: "RorS",
      },
      {
        text: "자주 그렇다",
        count: 2,
        type: "RorS",
      },
      { text: "항상 그렇다", count: 1, type: "RorS" },
    ],
  },
  {
    q: ["과거에 얼굴 기미나 주근깨, 잡치로 진단받은 적이 있습니까?"],
    a: [
      { text: "없다", count: 4, type: "PorN" },
      {
        text: "있었지만, 지금은 없다",
        count: 3,
        type: "PorN",
      },
      {
        text: "있다",
        count: 2,
        type: "PorN",
      },
      { text: "있으며, 심각한 경우다", count: 1, type: "PorN" },
    ],
  },
  {
    q: ["피부가 햇빛(자외선)에 노출되었을 때 피부는 어떻게 변했습니까?"],
    a: [
      {
        text: "붉어지기만 하고 검게 되는 색의 변화가 전혀 없다",
        count: 4,
        type: "PorN",
      },
      {
        text: "그 순간만 살짝 타고 금방 원래 피부색으로 돌아았다",
        count: 3,
        type: "PorN",
      },
      {
        text: "타고 난 이후 1~2주 지속되다가 정상으로 돌아왔다",
        count: 2,
        type: "PorN",
      },
      { text: "타고 난 이후 몇 개월 정도 지속됐다", count: 1, type: "PorN" },
    ],
  },
  {
    q: ["여드름 혹은 상처가 난 피부에 색소침착이 잘 생기는 편입니까?"],
    a: [
      { text: "전혀 생기지 않는다", count: 4, type: "PorN" },
      {
        text: "때때로 생긴다",
        count: 3,
        type: "PorN",
      },
      {
        text: "자주 생긴다",
        count: 2,
        type: "PorN",
      },
      { text: "항상 생긴다", count: 1, type: "PorN" },
    ],
  },
  {
    q: ["얼굴에 주름이 있습니까?"],
    a: [
      {
        text: "웃거나 찡그리거나 눈썹을 치켜 올릴 경우에도 없다",
        count: 4,
        type: "TorW",
      },
      {
        text: "웃거나 찡그리거나 눈썹을 치켜 올릴 때에 있다",
        count: 3,
        type: "TorW",
      },
      {
        text: "얼굴을 움직이거나 움직임이 없는 안정된 상태에서도 약간 있다",
        count: 2,
        type: "TorW",
      },
      {
        text: "웃거나 찡그리거나, 혹은 눈썹을 치켜 올리지 않아도 주름이 있다",
        count: 1,
        type: "TorW",
      },
    ],
  },
  {
    q: ["일상생활 중에서 햇빛에 노출 되는 시간은 하루에 얼마나 됩니까?"],
    a: [
      {
        text: "별로 없다(흐리거나 구름이 많은 장소에서 주로 살아왔다)",
        count: 4,
        type: "TorW",
      },
      {
        text: "약간 있다(때때로 덜 화창한 기후에서 살았지만, 규칙적으로 일광이 존재하는 장소에서 살아왔다)",
        count: 3,
        type: "TorW",
      },
      {
        text: "보통이다(꽤 많은 양의 일광이 존재하는 장소에서 살아왔다)",
        count: 2,
        type: "TorW",
      },
      {
        text: "많다(열대, 남부, 혹은 매우 화창한 장소에서 살아왔다)",
        count: 1,
        type: "TorW",
      },
    ],
  },
  {
    q: ["자외선 차단제를 하루에 얼마나 사용하나요?"],
    a: [
      {
        text: "전혀 사용하지 않는다",
        count: 4,
        type: "TorW",
      },
      {
        text: "어쩌다가 한 번 씩, 놀러갈 때 정도만 쓴다",
        count: 3,
        type: "TorW",
      },
      {
        text: "1주일에 1~2회는 쓴다",
        count: 2,
        type: "TorW",
      },
      {
        text: "매일 사용한다",
        count: 1,
        type: "TorW",
      },
    ],
  },
];

export default testList;
