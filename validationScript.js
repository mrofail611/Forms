    // JavaScript code for form validation
	
    // Regular expression pattern for alphanumeric input

  // Retrieve the input field element
 
  let inputField = document.getElementById('inputField');
  let form = document.getElementById('myForm');

  // add an event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the form from submittung by default
    event.preventDefault();

    let inputValue = inputField.value ;
    let alphanumericRegex = /^[a-zA-Z0-9]+$/;
    // Check if the input value marches the patern
    if (alphanumericRegex.test(inputValue)) {
      //Valid input: display confirmation and submit the form
      alert('Valid input: form submitted.');
      form.submit();
    }  else {
      alert('Input must be alphanumeric.');
    }
  })
  
  
  

  




       
      