const root = document.getElementById("root");

const url = "https://ghibliapi.vercel.app/films";

async function getData() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  const data = await response.json();
  console.log(data);
  console.log(data[0]);

  data.map((film) => {
    const ghiblidiv = document.createElement("div");
    ghiblidiv.classList = "ghibli";
    const ghibliImage = document.createElement("img");
    ghibliImage.src = film.image;
    ghibliImage.classList = "ghibli-image";

    const ghibliDescription = document.createElement("p");
    ghibliDescription.textContent = film.description;

    ghiblidiv.appendChild(ghibliImage);
    ghiblidiv.appendChild(ghibliDescription);
    root.appendChild(ghiblidiv);
  });

  //   root.textContent = JSON.stringify(data);
}

getData();
