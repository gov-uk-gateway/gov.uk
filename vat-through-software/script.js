const returnTabHeader2025 = document.getElementById('tab_past-payments-2025');
const returnTabHeader2024 = document.getElementById('tab_past-payments-2024');
const returnTabHeader2023 = document.getElementById('tab_past-payments-2023');

const selectTabSelector = 'govuk-tabs__list-item--selected';
const hiddenTabSelector = 'govuk-tabs__panel--hidden';

function handleTab(visibleYear, unvisibleYears) {
  document.getElementById(`tab_past-payments-${visibleYear}`).parentElement.classList.add(selectTabSelector);
  document.getElementById(`past-payments-${visibleYear}`).classList.remove(hiddenTabSelector);

  unvisibleYears.forEach(unvisibleYear => {
    document.getElementById(`tab_past-payments-${unvisibleYear}`).parentElement.classList.remove(selectTabSelector);
    document.getElementById(`past-payments-${unvisibleYear}`).classList.add(hiddenTabSelector);
  })
}

returnTabHeader2024.addEventListener('click', (e) => {
  handleTab('2024', ['2023', '2025'])
})

returnTabHeader2023.addEventListener('click', (e) => {
  handleTab('2023', ['2024', '2025'])
})

returnTabHeader2025.addEventListener('click', (e) => {
  handleTab('2025', ['2023', '2024'])
})
