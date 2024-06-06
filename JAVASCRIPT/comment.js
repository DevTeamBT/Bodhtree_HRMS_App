document.getElementById('addCommentButton').addEventListener('click', function() {
    const commentsTable = document.getElementById('commentsTable').getElementsByTagName('tbody')[0];

    // Create a new row
    const newRow = commentsTable.insertRow();

    // S No cell
    const cell1 = newRow.insertCell(0);
    cell1.textContent = commentsTable.rows.length;  // New row index

    // Comment input cell
    const cell2 = newRow.insertCell(1);
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.className = 'form-control';
    inputBox.placeholder = 'Enter your comment';
    cell2.appendChild(inputBox);

    // Commented by cell
    const cell3 = newRow.insertCell(2);
    const commentedBy = document.createElement('input');
    commentedBy.type = 'text';
    commentedBy.className = 'form-control';
    commentedBy.placeholder = 'Enter your name';
    cell3.appendChild(commentedBy);

    // Comment description cell
    const cell4 = newRow.insertCell(3);
    const commentDescription = document.createElement('input');
    commentDescription.type = 'text';
    commentDescription.className = 'form-control';
    commentDescription.placeholder = 'Enter comment description';
    cell4.appendChild(commentDescription);

    // Updated on cell
    const cell5 = newRow.insertCell(4);
    const date = new Date().toLocaleDateString();
    cell5.textContent = date;

    // Save and Cancel buttons cell
    const cell6 = newRow.insertCell(5);
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-success btn-sm mr-2';
    saveButton.textContent = 'Save';
    saveButton.style.marginRight = "3px"
    const cancelButton = document.createElement('button');
    cancelButton.className = 'btn btn-secondary btn-sm';
    cancelButton.textContent = 'Cancel';

    cell6.appendChild(saveButton);
    cell6.appendChild(cancelButton);

    // Cancel button functionality
    cancelButton.addEventListener('click', function() {
      newRow.remove();
    });

    // Save button functionality
    saveButton.addEventListener('click', function() {
      if (inputBox.value.trim() && commentedBy.value.trim() && commentDescription.value.trim()) {
        cell2.textContent = inputBox.value;
        cell3.textContent = commentedBy.value;
        cell4.textContent = commentDescription.value;

        // Remove save and cancel buttons
        cell6.innerHTML = `
          <a class="btn btn-info btn-sm" href="#"><i class="fas fa-pencil-alt"></i> Edit</a>
          <a class="btn btn-danger btn-sm" href="#"><i class="fas fa-pencil-alt"></i> Delete</a>
        `;
      } else {
        alert('Please fill in all fields before saving.');
      }
    });
  });