

document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  localStorage.setItem("item", value);
  if (value) {
    addRemindersTodo(value);
    document.getElementById('item').value = '';
  }
});


  function addRemindersTodo(text){
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    add.classList.add('remove');

    var complete = document.createElement('button');
    add.classList.add('complete');

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
  }
