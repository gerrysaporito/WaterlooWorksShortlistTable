var save = document.querySelectorAll(".save"),
    maybe = document.querySelectorAll(".maybe"),
    remove = document.querySelectorAll(".remove"),
    undo = document.querySelectorAll(".undo"),
    count = document.querySelector("#count"),
    good = document.querySelector("#good"),
    ok = document.querySelector("#ok"),
    bad = document.querySelector("#bad"),
    goodJobs = 0,
    okJobs = 0,
    badJobs = 0,
    totalJobs = save.length;

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
    //increase good job count
    goodJobs++;
    //update counters
    updateCounters();
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
    //increase ok job count
    okJobs++;
    //update counters
    updateCounters();
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
    //increase bad job count
    badJobs++;
    //update counters
    updateCounters();
  });

  undo[i].addEventListener("click", function(){
    let row = undo[i].parentElement.parentElement;
    //balance job count
    switch(row.style.color){
      case "green":
        goodJobs--;
        break;
      case "gainsboro":
        okJobs--;
        break;
      case "rgba(0, 0, 0, 0)":
        badJobs--;
    }
    //turn text-color black and remove bold
    row.style.color = "black";
    row.style.fontWeight = "normal";
    //Show remove and save button button
    save[i].style.display = "";
    maybe[i].style.display = "";
    remove[i].style.display = "";
    //hide undo
    undo[i].classList.add("undo");
    //update counters
    updateCounters();
  })
}

updateCounters();

function updateCounters() {
  count.innerHTML = totalJobs - badJobs;
  good.innerHTML = goodJobs;
  ok.innerHTML = okJobs;
  bad.innerHTML = badJobs;
}
