//Variables
var save = document.querySelectorAll(".save"),
    maybe = document.querySelectorAll(".maybe"),
    remove = document.querySelectorAll(".remove"),
    undo = document.querySelectorAll(".undo"),
    cover = document.querySelectorAll(".cover"),
    count = document.querySelector("#count"),
    good = document.querySelector("#good"),
    ok = document.querySelector("#ok"),
    bad = document.querySelector("#bad"),
    unselected = document.querySelector("#unselected"),
    goodJobs = 0,
    okJobs = 0,
    badJobs = 0,
    totalJobs = save.length,
    unselectedJobs = totalJobs;

for(let i = 0; i < save.length; i++) {
  //====================SAVE BUTTONS===========================
  save[i].addEventListener("click", function(){
    let row = save[i].parentElement.parentElement;
    //turn text-color green
    row.style.color = "green";
    //hide save, maybe, and remove button button
    save[i].style.display = "none";
    maybe[i].style.display = "";
    remove[i].style.display = "";
    //show undo
    undo[i].classList.remove("hidden");
    //increase good job count
    goodJobs++;
    unselectedJobs--;
    //update counters
    updateCounters();
  });

  //===================MAYBE BUTTONS=========================
  maybe[i].addEventListener("click", function(){
    let row = maybe[i].parentElement.parentElement;
    //turn text-color green
    row.style.color = "gainsboro";
    //hide save, maybe, and remove button button
    save[i].style.display = "";
    maybe[i].style.display = "none";
    remove[i].style.display = "";
    //show undo
    undo[i].classList.remove("hidden");
    //increase ok job count
    okJobs++;
    unselectedJobs--;
    //update counters
    updateCounters();
  });

  //=======================REMOVE BUTTONS=======================
  remove[i].addEventListener("click", function(){
    let row = remove[i].parentElement.parentElement;
    //turn text-color white
    row.style.color = "rgba(0, 0, 0, 0)";
    //hide save, maybe, and remove button button
    save[i].style.display = "";
    maybe[i].style.display = "";
    remove[i].style.display = "none";
    //show undo
    undo[i].classList.remove("hidden");
    //increase bad job count
    badJobs++;
    unselectedJobs--;
    //update counters
    updateCounters();
  });

  //=======================UNDO BUTTONS========================
  undo[i].addEventListener("click", function(){
    let row = undo[i].parentElement.parentElement;
    //balance job count
    switch(row.style.color){
      case "green":
        goodJobs--;
        unselectedJobs++;
        break;
      case "gainsboro":
        okJobs--;
        unselectedJobs++;
        break;
      case "rgba(0, 0, 0, 0)":
        badJobs--;
        unselectedJobs++;
        break;
    }
    //turn text-color black and remove bold
    row.style.color = "black";
    row.style.fontWeight = "normal";
    //Show remove and save button button
    save[i].style.display = "";
    maybe[i].style.display = "";
    remove[i].style.display = "";
    //hide undo
    undo[i].classList.add("hidden");
    //update counters
    updateCounters();
  });

  //================COVER LETTER BUTTONS=================
  cover[i].addEventListener("click", function() {
    let checked = cover[i].parentElement.parentElement.querySelector(".check");

    if(checked.classList.contains("hidden")){
      checked.classList.remove("hidden");
      cover[i].style.backgroundColor = "RGB(190, 190, 190)";
    } else {
      checked.classList.add("hidden");
      cover[i].style.backgroundColor = "#e4e4e4";
    }
  });
}

updateCounters();

function updateCounters() {
  count.innerHTML = totalJobs - badJobs;
  good.innerHTML = goodJobs;
  ok.innerHTML = okJobs;
  bad.innerHTML = badJobs;
  unselected.innerHTML = unselectedJobs;
}
