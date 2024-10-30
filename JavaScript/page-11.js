$(document).ready(function() {
    // Show all messages
    $("#showAllMessages").click(function() {
        $("#messageList .message-item").show(); // Show all messages
    });

    // Show only unread messages
    $("#showUnreadMessages").click(function() {
        $("#messageList .message-item").hide(); // Hide all messages
        $("#messageList .message-item.unread").show(); // Show only unread messages
    });
});


function toggleFiles() {
    const filesGrid = document.getElementById("filesGrid");
    const filesIcon = document.getElementById("filesIcon");

    if (filesGrid.style.display === "none" || filesGrid.style.display === "") {
        filesGrid.style.display = "grid"; // Show the files grid
        filesIcon.classList.remove("bi-chevron-down"); // Change icon to down
        filesIcon.classList.add("bi-chevron-up"); // Change icon to up
    } else {
        filesGrid.style.display = "none"; // Hide the files grid
        filesIcon.classList.remove("bi-chevron-up"); // Change icon to up
        filesIcon.classList.add("bi-chevron-down"); // Change icon to down
    }
}


// Emoji Javascript


    new Vue({
        el: '#emoji-picker',
        methods: {
            addEmoji(emoji) {
                const input = document.querySelector('input[placeholder="Type your message here..."]'); // Select the input field
                input.value += emoji.native; // Append the selected emoji to the input field
            }
        }
    });

    // Toggle the emoji picker
    document.getElementById('emoji-button').addEventListener('click', function() {
        const emojiPicker = document.querySelector('emoji-picker');
        emojiPicker.style.display = emojiPicker.style.display === 'none' || emojiPicker.style.display === '' ? 'block' : 'none';
    });

