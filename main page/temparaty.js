const nurses = [
    { name: "Rajesh Sharma", location: "Kalyan", image: "rajesh.jpeg" },
    { name: "Sunita Verma", location: "Thane", image: "sunita.jpeg" },
    { name: "Vikram Joshi", location: "Navi Mumbai", image: "vikram.jpeg" },
    { name: "Riya Singh", location: "Kalyan", image: "riya.jpeg" },
    { name: "Lakshmi Rao", location: "Navi Mumbai", image: "lakshmi.jpeg" },
    { name: "Anil Patel", location: "Pune", image: "anil.jpeg" },
];


// Function to display nurses based on the filter
function displayNurses(filteredNurses) {
    const nurseList = document.getElementById('nurse-list');
    nurseList.innerHTML = ''; // Clear existing nurses

    filteredNurses.forEach(nurse => {
        const nurseCard = `
            <div class="doctor-innerbox">
                <div class="doctor-icons">
                    <i class="fa-solid fa-heart" aria-hidden="true"></i>
                    <i class="fa-solid fa-share" aria-hidden="true"></i>
                    <i class="fa-solid fa-eye" aria-hidden="true"></i>
                </div>
                <div class="teamimg">
                    <img src="${nurse.image}" alt="${nurse.name}">
                </div>
                <div class="doc-innernames">
                    <h2>${nurse.name}</h2>
                    <p>Location: ${nurse.location}</p>
                </div>
            </div>
        `;
        nurseList.innerHTML += nurseCard;
    });
}

// Initial display of all nurses
displayNurses(nurses);

// Function to filter nurses based on search or button click
function filterNurses(location) {
    let filteredNurses;
    if (location === 'all') {
        filteredNurses = nurses;
    } else {
        filteredNurses = nurses.filter(nurse => nurse.location === location);
    }
    displayNurses(filteredNurses);
}


document.getElementById('search').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredNurses = nurses.filter(nurse => 
        nurse.location.toLowerCase().includes(searchInput)
    );
    displayNurses(filteredNurses);
});