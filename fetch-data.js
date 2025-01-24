// Define the asynchronous function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4a: Fetch data using the API URL
        const response = await fetch(apiUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Step 4b: Convert the response to JSON
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append a user list
        const userList = document.createElement('ul'); // Create <ul> element
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li> element
            listItem.textContent = user.name; // Set text content to user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        // Append the <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle errors
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
        console.error(error); // Log the error to the console
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
