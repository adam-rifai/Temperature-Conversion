const numberBox = document.getElementById("numberBox");
const radio_1 = document.getElementById("radio1");
const radio_2 = document.getElementById("radio2");
const result = document.getElementById("result");
let temp;


// Add event listener to the form to handle form submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    convert(); // Call the convert function
});

function convert() {
    if (radio_1.checked) {
        result.textContent = `${((Number(numberBox.value) * 9/5) + 32).toFixed(1)}°F`;
    } else if (radio_2.checked) {
        result.textContent = `${((Number(numberBox.value) - 32) * 5/9).toFixed(1)}°C`;
    } else {
        result.textContent = "Select a Unit";
    }
}



