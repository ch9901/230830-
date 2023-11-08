const url = "gallery.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const gallery = document.querySelector("#gallery");
    console.log(gallery);
    data.imges.forEach((img) => {
      const imgElement = document.createElement("img");
      imgElement.src = img.path;
      imgElement.alt = img.caption;
      const imgText = document.createElement("span");
      imgText.innerText = img.info;
      gallery.appendChild(imgElement);
      gallery.appendChild(imgText);

      // const imgText = document.createElement("span");
      // imgText.innerText = img.info;
      // imgElement.appendChild(imgText)
    });
  })
  .catch((err) => console.log(`err:${err}`));
