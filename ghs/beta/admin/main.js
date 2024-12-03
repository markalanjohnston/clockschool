let data;

// Fetch the JSON data from a file (replace with the actual URL of your file)
fetch('../schedule.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    displayData();
  });

// Add an event listener for the add button
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  // Add a new item to the data object
  data.schedule.push({
    startTime: 0,
    endTime: 0,
    msg: ''
  });

  // Update the table with the new data
  displayData();
});

// Add an event listener for the remove button
const removeButton = document.getElementById('remove-button');
removeButton.addEventListener('click', () => {
  // Remove the last item from the data object
  data.schedule.pop();

  // Update the table with the new data
  displayData();
});

// Add an event listener for the save button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', () => {
  // Update the data object with the new values from the input fields
const inputs = document.querySelectorAll('#schedule-table input');
for (let i = 0; i < inputs.length; i+=3) {
  data.schedule[i/3].startTime = inputs[i].value;
  data.schedule[i/3].endTime = inputs[i + 1].value;
  data.schedule[i/3].msg = inputs[i + 2].value;
}


  // Send the updated data to the server to be saved to the JSON file
  fetch('save.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(jsonData => {
      console.log('Data saved successfully');
      })
      .catch(error => {
      console.error('Error saving data:', error);
      });
      });
      
      // Add an event listener for the reset button
      const resetButton = document.getElementById('reset-button');
      resetButton.addEventListener('click', () => {
      // Reload the data from the JSON file
      fetch('../schedule.json')
      .then(response => response.json())
      .then(jsonData => {
      data = jsonData;
      displayData();
      });
      });
      
      // Function to display the data in the table
      function displayData() {
      // Get the table element
      const table = document.getElementById('schedule-table');
      table.innerHTML = '';
      
      // Create the table header
      const headerRow = document.createElement('tr');
      const startTimeHeader = document.createElement('th');
      startTimeHeader.innerHTML = 'Start Time';
      headerRow.appendChild(startTimeHeader);
      const endTimeHeader = document.createElement('th');
      endTimeHeader.innerHTML = 'End Time';
      headerRow.appendChild(endTimeHeader);
      const msgHeader = document.createElement('th');
      msgHeader.innerHTML = 'Message';
      headerRow.appendChild(msgHeader);
      table.appendChild(headerRow);
      
      // Create the table rows for each item in the schedule
      for (const item of data.schedule) {
      const row = document.createElement('tr');
      const startTimeCell = document.createElement('td');
      const startTimeInput = document.createElement('input');
      startTimeInput.type = 'text';
      startTimeInput.value = item.startTime;
      startTimeCell.appendChild(startTimeInput);
      row.appendChild(startTimeCell);
      const endTimeCell = document.createElement('td');
      const endTimeInput = document.createElement('input');
      endTimeInput.type = 'text';
      endTimeInput.value = item.endTime;
      endTimeCell.appendChild(endTimeInput);
      row.appendChild(endTimeCell);
      const msgCell = document.createElement('td');
      const msgInput = document.createElement('input');
      msgInput.type = 'text';
      msgInput.value = item.msg;
      msgCell.appendChild(msgInput);
      row.appendChild(msgCell);
      table.appendChild(row);
      }
      }