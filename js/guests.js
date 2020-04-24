let guestsHTML = new String();
let j = 0;

guestsHTML = `<div class="container">
                <div class="row mb-5">
                    <div class="col-md-12 text-center">
                        <h2 class="font-weight-bold text-black">Featured Guests</h2>
                    </div>
                </div>
            <div class="nonloop-block-13 owl-carousel">`;

while (guestsList[j]) {
  guestsHTML += `<div class="text-center p-3 p-md-5 bg-white">
                        <div class="mb-4">
                            <img
                            src="${guestsList[j].img}"
                            alt="Image"
                            class="w-50 mx-auto img-fluid rounded-circle"
                            />
                        </div>
                        <div class="">
                            <h3 class="font-weight-light h5">${guestsList[j].guestName}</h3>
                            <p>
                            ${guestsList[j].about}
                            </p>
                        </div>
                        </div>`;

  j++;
}
guestsHTML += `</div>`;

document.getElementById("featuredGuests").innerHTML = guestsHTML;
