var save = document.querySelectorAll(".save"),
    maybe = document.querySelectorAll(".maybe"),
    remove = document.querySelectorAll(".remove"),
    undo = document.querySelectorAll(".undo");


for(let i = 0; i < save.length; i++) {
  save[i].addEventListener("click", function(){
    let row = save[i].parentElement.parentElement;
    //turn text-color green
    row.style.color = "green";
    row.style.fontWeight = "bold";
    //hide save, maybe, and remove button button
    save[i].style.display = "none";
    maybe[i].style.display = "none";
    remove[i].style.display = "none";
    //show undo
    undo[i].classList.remove("undo");
  });

  maybe[i].addEventListener("click", function(){
    let row = maybe[i].parentElement.parentElement;
    //turn text-color green
    row.style.color = "gainsboro";
    //hide save, maybe, and remove button button
    save[i].style.display = "none";
    maybe[i].style.display = "none";
    remove[i].style.display = "none";
    //show undo
    undo[i].classList.remove("undo");
  });

  remove[i].addEventListener("click", function(){
    let row = remove[i].parentElement.parentElement;
    //turn text-color white
    row.style.color = "rgba(0, 0, 0, 0)";
    //hide save, maybe, and remove button button
    save[i].style.display = "none";
    maybe[i].style.display = "none";
    remove[i].style.display = "none";
    //show undo
    undo[i].classList.remove("undo");
  });

  undo[i].addEventListener("click", function(){
    let row = undo[i].parentElement.parentElement;
    //turn text-color black and remove bold
    row.style.color = "black";
    row.style.fontWeight = "normal";
    //Show remove and save button button
    save[i].style.display = "";
    maybe[i].style.display = "";
    remove[i].style.display = "";
    //hide undo
    console.log(undo[i]);
    undo[i].classList.add("undo");
  })
}
