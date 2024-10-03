function displayNurses(data) {
    const resultsDiv = document.getElementById("nurseResults");
    resultsDiv.innerHTML = "";  // Clear previous results

    if (data.error) {
        resultsDiv.innerHTML = `<p>${data.error}</p>`;
        return;
    }

    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No nurses found for this location.</p>";
    } else {
        data.forEach(nurse => {
            const nurseDiv = document.createElement('div');
            nurseDiv.className = "nurse-card";
            nurseDiv.innerHTML = `
                <img src="${nurse.photo_url}" alt="Nurse Photo" />
                <h3>${nurse.name}</h3>
                <p class="specialty">Specialty: ${nurse.specialty}</p>
                <p>City: ${nurse.city}</p>
                <p>Contact: ${nurse.contact_info}</p>
            `;
            resultsDiv.appendChild(nurseDiv);
        });
    }
}
