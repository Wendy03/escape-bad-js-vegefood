const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data = [];
let showData = [];
let category = '';

axios.get(url).then(function (res) {
  data = res.data.filter((a) => a.作物名稱);
  renderData(data);
});

function filterCategory(e) {
  if (e.target.nodeName == 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => {
      return i.種類代碼 == category;
    });
    renderData(showData);
  } else {
    return;
  }
}

function renderData(data) {
  let str = '';
  data.forEach((i, index) => {
    const content = `<tr>
      <td>${i.作物名稱}</td>
      <td>${i.市場名稱}</td>
      <td>${i.上價}</td>
      <td>${i.中價}</td>
      <td>${i.下價}</td>
      <td>${i.平均價}</td>
      <td>${i.交易量}</td>
    </tr>
    `;
    str += content;
  });
  table.innerHTML = str;
}

filter.addEventListener('click', filterCategory);
