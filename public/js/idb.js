let db;

const request = indexedDB.open('budget', 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore('new_budget', { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    saveRecord()
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(['new_budget'], 'readwrite');
  const budgetObjectStore = transaction.objectStore('new_budget');
  budgetObjectStore.add(record);
};

function uploadBudget() {
  const trasnaction = db.trasnaction(['new_budget'], 'readwrite');
  const budgetObjectStore = trasnaction.budgetObjectStore('new_budget');
  const getAll = budgetObjectStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.results.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.results),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(serverResponse => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          const trasnaction = db.trasnaction(['new_budget'], 'readwrite');
          const budgetObjectStore = trasnaction.objectStore('new_budget');
          budgetObjectStore.clear();
          alert('Budget data has been submitted!');
        })
        .catch(err => {
          console.log(err)
        });
    }
  };
}

window.addEventListener('online', uploadBudget);