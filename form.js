document.getElementById("postForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const language = document.querySelector('input[name="language"]:checked')?.value || "None";
    const vehicles = Array.from(document.querySelectorAll('input[name="vehicle"]:checked')).map((vehicle) => vehicle.value);
    const carBrand = document.getElementById("carBrand").value;

    const formData = {
      firstName: fName,
      lastName: lName,
      language: language,
      vehicles: vehicles,
      carBrand: carBrand,
    };

    // console.log("Form Data:", formData);

    localStorage.setItem("userFormData", JSON.stringify(formData));

    fetch("http://localhost:3000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => console.log("Server Response:", data))
      .catch((error) => console.error("Error:", error));
  });
