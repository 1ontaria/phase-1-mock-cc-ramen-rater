// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.
// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.
// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.

// append imgs to ramen menu div
// fetch data from server to get ramen objects
// for each image in ramen objects, append to ramen-div

const ramenDiv = document.getElementById("ramen-menu");
const detailDiv = document.getElementById("ramen-detail");

console.log(detailDiv);
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      const img = document.createElement("img");
      img.src = element.image;

      img.addEventListener("click", () => {
        {
          const h2 = document.querySelector("h2");
          h2.innerText = "";
          h2.innerText = element.name;

          const ramenImg = document.getElementsByClassName("detail-image");
          ramenImg[0].src = "";
          ramenImg[0].src = element.image;

          const h3 = document.getElementsByClassName("restaurant");
          h3[0].innerText = "";
          h3[0].innerText = element.restaurant;

          const span = document.getElementById("rating-display");
          span.innerText = "";
          span.innerText = element.rating;

          const p = document.getElementById("comment-display");
          p.innerText = "";
          p.innerText = element.comment;
        }
      });
      ramenDiv.append(img);
    })
  );
const ramenForm = document.getElementById("new-ramen");
ramenForm.addEventListener("submit", newRamen);
console.log(ramenForm);

function newRamen(e) {
  e.preventDefault();
  const p = document.createElement("p");

  const nameForm = document.getElementById("new-name");
  nameForm.textContent = nameForm.value;
  const nameValue = nameForm.value;

  const restaurantForm = document.getElementById("new-restaurant");
  restaurantForm.textContent = restaurantForm.value;
  const restaurantValue = restaurantForm.value;

  const imageForm = document.getElementById("new-image");
  imageForm.src = imageForm.value;
  const imageValue = imageForm.src;

  p.append(`${nameValue}, ${restaurantValue}, ${imageValue}`);
  ramenDiv.append(p);
}

// add click event listener to each image to see info
// create a callback function for event listener and append info to ramen detail div
// on click, append ifno to ramen detail div
//

// select create button
// add event listener
// add new ramen to ramen menu div
// fetch request
