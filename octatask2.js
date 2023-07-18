var items = [];

function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].pr > arr[j + 1].pr) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function add() {
  var priorityInput = document.getElementById('p').value;
  var detailInput = document.getElementById('detail').value;

  if (priorityInput.trim() !== '' && detailInput.trim() !== '') {
    var newItem = {
      pr: parseFloat(priorityInput), // Convert priority to a numeric value
      det: detailInput,
    };
    items.push(newItem);

    // Clear input fields after adding the task
    document.getElementById('p').value = '';
    document.getElementById('detail').value = '';

    // Remove existing task list elements before updating the list
    var taskList = document.getElementById('task-list');
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    bblSort(items);

    for (let i = 0; i < items.length; i++) {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');

      const taskDetail = document.createElement('span');
      taskDetail.textContent = items[i].det;

      const taskPriority = document.createElement('span');
      taskPriority.textContent = `Priority: ${items[i].pr}`;

      const closeButton = document.createElement('span');
      closeButton.textContent = 'X';
      closeButton.classList.add('close');

      taskItem.appendChild(taskDetail);
      taskItem.appendChild(taskPriority);
      taskItem.appendChild(closeButton);

      taskList.appendChild(taskItem);
    }

    var close = document.getElementsByClassName('close');
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';

        // Remove the item from the items array when the task is closed
        var index = Array.from(taskList.children).indexOf(div);
        items.splice(index, 1);
      };
    }
  }
}
