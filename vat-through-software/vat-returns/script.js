const returnTabHeader2024 = document.getElementById('tab_submitted-return-tab-2024');
const returnTabHeader2023 = document.getElementById('tab_submitted-return-tab-2023');
const returnTabHeader2022 = document.getElementById('tab_submitted-return-tab-2022');

const selectTabSelector = 'govuk-tabs__list-item--selected';
const hiddenTabSelector = 'govuk-tabs__panel--hidden';

function handleTab(visibleYear, unvisibleYears) {
  document.getElementById(`tab_submitted-return-tab-${visibleYear}`).parentElement.classList.add(selectTabSelector);
  document.getElementById(`submitted-return-tab-${visibleYear}`).classList.remove(hiddenTabSelector);

  unvisibleYears.forEach(unvisibleYear => {
    document.getElementById(`tab_submitted-return-tab-${unvisibleYear}`).parentElement.classList.remove(selectTabSelector);
    document.getElementById(`submitted-return-tab-${unvisibleYear}`).classList.add(hiddenTabSelector);
  })
}

returnTabHeader2024.addEventListener('click', (e) => {
  handleTab('2024', ['2023', '2022'])
})

returnTabHeader2023.addEventListener('click', (e) => {
  handleTab('2023', ['2024', '2022'])
})

returnTabHeader2022.addEventListener('click', (e) => {
  handleTab('2022', ['2023', '2024'])
})
