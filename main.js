// Add your JavaScript here for any interactivity and reactive buttons
document.addEventListener('DOMContentLoaded', () => {
    // Example of adding an event listener to a button
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
});