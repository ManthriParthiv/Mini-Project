document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('location');
    const suggestionsContainer = document.getElementById('suggestions');

    // List of popular tourist places in India
    const touristPlaces = [
        "Taj Mahal, Agra",
        "Red Fort, Delhi",
        "Qutub Minar, Delhi",
        "Gateway of India, Mumbai",
        "Hawa Mahal, Jaipur",
        "Amer Fort, Jaipur",
        "Mysore Palace, Mysore",
        "Charminar, Hyderabad",
        "Meenakshi Temple, Madurai",
        "India Gate, Delhi",
        "Lotus Temple, Delhi",
        "Jaisalmer Fort, Jaisalmer",
        "Backwaters, Kerala",
        "Dal Lake, Srinagar",
        "Ranthambore National Park, Rajasthan",
        "Golden Temple, Amritsar",
        "Ellora Caves, Maharashtra",
        "Ajanta Caves, Maharashtra",
        "Sundarbans, West Bengal",
        "Leh-Ladakh, Jammu & Kashmir"
    ];

    // Function to display suggestions
    function showSuggestions(value) {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions

        if (value.length === 0) {
            return; // Don't show suggestions if the input is empty
        }

        const filteredPlaces = touristPlaces.filter(place =>
            place.toLowerCase().includes(value.toLowerCase())
        );

        filteredPlaces.forEach(place => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.classList.add('autocomplete-suggestion');
            suggestionDiv.textContent = place;

            // Handle click event on suggestion
            suggestionDiv.addEventListener('click', function () {
                locationInput.value = place; // Set input value to the clicked suggestion
                suggestionsContainer.innerHTML = ''; // Clear suggestions after selection
            });

            suggestionsContainer.appendChild(suggestionDiv);
        });
    }

    // Event listener for user input
    locationInput.addEventListener('input', function () {
        showSuggestions(this.value);
    });

    // Hide suggestions if clicking outside
    document.addEventListener('click', function (e) {
        if (!suggestionsContainer.contains(e.target) && e.target !== locationInput) {
            suggestionsContainer.innerHTML = ''; // Clear suggestions
        }
    });
});
