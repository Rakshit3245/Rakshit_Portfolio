document.getElementById('downloadCvBtn').addEventListener('click', function(event) {
    // Prevent the default action of the link
    event.preventDefault();
    
    // Get the href attribute value of the link
    var cvUrl = this.getAttribute('href');
    
    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = cvUrl;
    
    // Set the download attribute to force download and specify the file name
    link.setAttribute('download', 'Rakshit_Parmar_Resume.pdf');
    
    // Append the anchor to the body
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  });