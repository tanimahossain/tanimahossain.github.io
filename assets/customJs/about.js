const filePath = "/assets/texts/about.txt";
function readTextFile(filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((text) => {
      const spanElement = document.getElementById("about-txt"); // Use ID selector
      spanElement.textContent = text;
      console.log(text);
    })
    .catch((error) => {
      console.error("There was a problem fetching the file:", error);
    });
}

// Call the function to read the file
readTextFile(filePath);
