export const display = (render) => {
  const markup = ` 
  <div class="specialProduct--titleBox">
  <h2 class="specialProduct--title">${render.title}</h2>
  </div>
  <div class="container-fluid center-container">
    <div class="container-specialProduct ">
        <div class="row">
            <div class="col-lg-4 col-md-12">
                <img class="specialProduct--image" src="${render.img}"></img>
            </div>  

            <div class="col-lg-8 col-md-12">
                <div class="specialProduct--details">
                    <p class="specialProduct--paragraph">${render.info}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="subtitle-0">
        <h4 class="speacialProduct--subtitle">Ürün çeşitleri</h4>
  </div>
  <div class="container">
        <ul class="specialProduct--list"></ul>
  </div>`;

  localStorage.setItem("mark", markup);

    render.type.forEach((element) => {
      const markup = ` 
      <li class="specialProduct--item specialProduct--item-0">${element}</li>
      `;
      document
        .querySelector(".specialProduct--list")
        .insertAdjacentHTML("beforeend", markup);
    });
};
