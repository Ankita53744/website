const nurses = [
    { name: "Mr. Robert Gray", location: "Kalyan", image: "team1.jpg" },
    { name: "Ankita", location: "Thane", image: "team2.jpg" },
    { name: "Himanshu", location: "Navi Mumbai", image: "team3.jpg" },
    { name: "Apurva", location: "Kalyan", image: "team4.jpg" },
    { name: "Kuldeep", location: "Navi Mumbai", image: "team5.jpg" },
    { name: "Mr. Robert Gray", location: "Pune", image: "team6.jpg" }
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
        filteredNurses = nurses; // Show all nurses
    } else {
        filteredNurses = nurses.filter(nurse => nurse.location === location);
    }
    displayNurses(filteredNurses);
}

// Search functionality
document.getElementById('search').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredNurses = nurses.filter(nurse => 
        nurse.location.toLowerCase().includes(searchInput)
    );
    displayNurses(filteredNurses);
});
