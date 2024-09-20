function filterResults() {
    const location = document.getElementById('location-select').value;
    
    if (location) {
      document.getElementById('results').innerHTML = `Showing results for ${location}`;
      // Implement the actual filtering logic here
    } else {
      document.getElementById('results').innerHTML = "Please select a location.";
    }
  }
  