function montarMiniaturas() {
  let IdCarrossel = document.getElementById("divCarrossel");

  for(i = 1; i < 11; i++){

    let div = document.createElement("div");
    div.className = "item";

    let img = document.createElement("img");
    img.className = "box-filme";
    img.src = "img/mini" + i + ".jpg";

    div.appendChild(img);
    IdCarrossel.appendChild(div);
  }

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
}