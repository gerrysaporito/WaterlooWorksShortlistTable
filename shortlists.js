//======================Variables============================
var save = document.querySelectorAll(".save"),
    maybe = document.querySelectorAll(".maybe"),
    remove = document.querySelectorAll(".remove"),
    undo = document.querySelectorAll(".undo"),
    cover = document.querySelectorAll(".cover"),
    rows = document.querySelectorAll("tr"),
    count = document.querySelector("#count"),
    good = document.querySelector("#good"),
    ok = document.querySelector("#ok"),
    bad = document.querySelector("#bad"),
    reset = document.querySelector("#reset");
    unselected = document.querySelector("#unselected"),
    coverLetter = document.querySelector("#coverLetters")
    goodJobs = 0,
    okJobs = 0,
    badJobs = 0,
    coverLetters = 0,
    totalJobs = save.length,
    unselectedJobs = totalJobs;
//=============================================================

for(let i = 0; i < save.length; i++) {
  let checked = rows[i+1].querySelector(".check");

  //====================SAVE BUTTONS===========================
  save[i].addEventListener("click", function(){
    //turn text-color green
    rows[i+1].style.color = "green";
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

  //=====================MAYBE BUTTONS=========================
  maybe[i].addEventListener("click", function(){
    //turn text-color green
    rows[i+1].style.color = "gainsboro";
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

  //=======================REMOVE BUTTONS======================
  remove[i].addEventListener("click", function(){
    //turn text-color white
    rows[i+1].style.color = "rgba(0, 0, 0, 0)";
    //hide checkmark, save, maybe, remove, and cover letter button
    if(!checked.classList.contains("hidden")){
      checked.classList.add("hidden");
      cover[i].style.backgroundColor = "#e4e4e4";
      coverLetters--;
    }
    save[i].style.display = "";
    maybe[i].style.display = "";
    remove[i].style.display = "none";
    cover[i].style.display = "none";
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
    //balance job count
    switch(rows[i+1].style.color){
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
    if(!checked.classList.contains("hidden")) {
      coverLetters--;
    }
    //turn text-color black and remove bold
    rows[i+1].style.color = "black";
    //Show checkmark, save, maybe, and remove button
    save[i].style.display = "";
    maybe[i].style.display = "";
    remove[i].style.display = "";
    cover[i].style.display = "";
    //hide undo
    undo[i].classList.add("hidden");
    //update counters
    updateCounters();
  });

  //================COVER LETTER BUTTONS=======================
  cover[i].addEventListener("click", function() {
    let checked = cover[i].parentElement.parentElement.querySelector(".check");

    if(checked.classList.contains("hidden")){
      checked.classList.remove("hidden");
      cover[i].style.backgroundColor = "RGB(190, 190, 190)";
      coverLetters++;
    } else {
      checked.classList.add("hidden");
      cover[i].style.backgroundColor = "#e4e4e4";
      coverLetters--;
    }
    updateCounters();
  });
}

//======================RESET BUTTON===========================
reset.addEventListener("click", function() {
  for(let i = 1; i < rows.length; i++) {
    let checked = rows[i].querySelector(".check");
    rows[i].style.color = "black";
    btns = rows[i].querySelectorAll("button");
    for(let j = 0; j < btns.length; j++) {
      btns[j].style.display = "";
      btns[3].classList.add("hidden");
    }
    checked.classList.add("hidden");
    cover[i-1].style.backgroundColor = "#e4e4e4";
    //reset stats table
    totalJobs = save.length;
    goodJobs = 0;
    okJobs = 0;
    badJobs = 0;
    coverLetters = 0;
    unselectedJobs = totalJobs;
    updateCounters();
  }
});

updateCounters();

function updateCounters() {
  count.innerHTML = totalJobs - badJobs;
  good.innerHTML = goodJobs;
  ok.innerHTML = okJobs;
  bad.innerHTML = badJobs;
  unselected.innerHTML = unselectedJobs;
  coverLetter.innerHTML = coverLetters;
}
