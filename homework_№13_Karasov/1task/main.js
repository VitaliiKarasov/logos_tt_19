const color = document.querySelector(".text");
const image = document.querySelector(".image");
let img = ["url(https://images.unsplash.com/photo-1549288460-3b01e08ef32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
  "url(https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
  "url(https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80)",
  "url(https://images.unsplash.com/photo-1470479111431-ad67d645dd70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
  "url(https://images.unsplash.com/photo-1481535216703-e3717520962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80)",
  "url(https://images.unsplash.com/flagged/photo-1554575316-982243132121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
  "url(https://images.unsplash.com/photo-1543086989-a468e324ea42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
  "url(https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
  "url(https://images.unsplash.com/photo-1518124861108-f9e05a7109a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",];
let bkgColor = ["red", "yellow", "purple", "green", "brown", "maroon", "grey", "orange", "darkblue",];
function bgColor() {
  let colors = document.createElement("div");
  colors.classList.add("box");
  for (let i = 0; i < 9; i++) {
    let backgroundColors = bkgColor
    let secondContainer = document.createElement("div");
    secondContainer.style.backgroundColor = backgroundColors[i];
    secondContainer.classList.add("box1");
    secondContainer.onclick = function () {
      document.body.style.backgroundColor = backgroundColors[i];
      if (image.onclick) {
        document.body.style.backgroundImage = "none";
      }
    };
    colors.appendChild(secondContainer);
  }
  document.body.appendChild(colors);
}

function bgImage() {
  let colors = document.createElement("div");
  colors.classList.add("box");
  for (let i = 0; i < 9; i++) {
    let backgroundImages = img

    let secondContainer = document.createElement("div");
    secondContainer.style.backgroundImage = backgroundImages[i];
    secondContainer.classList.add("box1");
    secondContainer.style.backgroundSize = "cover";
    secondContainer.onclick = function () {
      document.body.style.backgroundImage = backgroundImages[i];
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";

    };
    colors.appendChild(secondContainer);
  }
  document.body.appendChild(colors);
}

color.onclick = bgColor;
image.onclick = bgImage;
