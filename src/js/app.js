/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
let films = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const { body } = document;
const table = document.createElement('table');

function renderHTML() {
  table.innerHTML = `<tr>
  <th>id</th>
  <th>title</th>
  <th>year</th>
  <th>imdb</th>
  </tr>`;

  if (property === 'id' && index % 2) {
    table.innerHTML = `<tr>
    <th>id\u{1F396}</th>
    <th>title</th>
    <th>year</th>
    <th>imdb</th>
    </tr>`;
  }

  for (let i = 0; i < films.length; i += 1) {
    table.innerHTML += `<tr>
    <td>${films[i].id}</td>
    <td>${films[i].title}</td>
    <td>(${films[i].year})</td>
    <td>${films[i].imdb.toPrecision(3)}</td>
  </tr>`;
  }

  body.appendChild(table);
}

renderHTML();

let property;
export function compareIncrease(a, b) {
  if (a[property] > b[property]) {
    return 1;
  }
  if (a[property] < b[property]) {
    return -1;
  }
  return 0;
}

export function compareDecrease(a, b) {
  if (a[property] > b[property]) {
    return -1;
  }
  if (a[property] < b[property]) {
    return 1;
  }
  return 0;
}

const sortRules = [
  { property: 'id' },
  { property: 'id' },
  { property: 'title' },
  { property: 'title' },
  { property: 'year' },
  { property: 'year' },
  { property: 'imdb' },
  { property: 'imdb' },
];

let index = 0;
const sorter = setInterval(() => {
  if (index === sortRules.length) {
    index = 0;
  }
  property = sortRules[index].property;
  if (index % 2) {
    films = films.sort(compareIncrease);
  } else {
    films = films.sort(compareDecrease);
  }
  renderHTML();
  index += 1;
}, 2000);
