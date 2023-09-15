function convertToCelsius() {
    // Get the Celsius input value
    var celsiusInput = document.getElementById("celsius").value;

    // Check if a valid number is entered
    if (isNaN(celsiusInput)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert to Fahrenheit
    var fahrenheit = (celsiusInput * 9/5) + 32;

    // Display the result in the Fahrenheit input field
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function convertToFahrenheit() {
    // Get the Fahrenheit input value
    var fahrenheitInput = document.getElementById("fahrenheit").value;

    // Check if a valid number is entered
    if (isNaN(fahrenheitInput)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert to Celsius
    var celsius = (fahrenheitInput - 32) * 5/9;

    // Display the result in the Celsius input field
    document.getElementById("celsius").value = celsius.toFixed(2);
}
