function volume_sphere() {
  // Get the form element
  const form = document.getElementById('MyForm');

  // Get the input element for the radius
  const radiusInput = form.elements['Radius'];

  // Get the input element for the volume
  const volumeInput = form.elements['volume'];

  // Get the value of the radius as a float
  const radius = parseFloat(radiusInput.value);

  // Check if the entered radius is a valid number
  if (!isNaN(radius) && radius >= 0) {
    // Calculate the volume of the sphere using the formula (4/3) * π * r^3
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the volume input field with two decimal places
    volumeInput.value = volume.toFixed(2);
  } else {
    // If the entered value is not a valid positive number, display an error message
    volumeInput.value = "Invalid input";
  }

  // Prevent the form from actually submitting
  return false;
}

// Attach the volume_sphere function to the form's onsubmit event
window.onload = function () {
  const form = document.getElementById('MyForm');
  form.onsubmit = volume_sphere;
};
