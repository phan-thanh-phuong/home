export const NAVBAR_LEFT = [
  {
    id: 0,
    active: false,
    open: false,
    link: '',
    text: 'Học tập',
    linkClass: 'dropdown-toggle collapsed',
    ulClass: 'collapse list-unstyled',
    children: [
      {
        id: 0,
        link: '/learning/japan/vocabulary',
        text: 'Từ vựng tiếng Nhật',
        active: false,
      },
      {
        id: 1,
        link: '/learning/japan/kanji',
        text: 'Kanji tiếng Nhật',
        active: false,
      },
      {
        id: 2,
        link: '/learning/japan/exam',
        text: 'Đề thi thử JLPT N5',
        active: false,
      },
    ],
  },
];
