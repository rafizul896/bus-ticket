const seats = document.querySelectorAll(".kbd");
let avilableSeat = parseInt(document.getElementById('avilableSeat').innerText);
let yourSeat = parseInt(document.getElementById('yourSeat').innerText);
let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let array = [];
for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (array.includes(seat) !== true) {
            array.push(seat);
            const offerDis = document.getElementById('offerDis').innerText;
            const copuponInput = document.getElementById('copupon').value;
            if (array.length <= 4) {
                if ((array.length === 4) && (offerDis === copuponInput)){
                    const discount = 550 * 0.15;
                    console.log(true)
                }
                else if ((array.length === 4) && (offerDis === copuponInput)){
                    const discount = 550 * 0.2;
                    console.log(true);
                }
                seat.classList.add('bg-[#1DD100]');
                avilableSeat = avilableSeat - 1;
                const currentAvilableSeat = document.getElementById('avilableSeat');
                currentAvilableSeat.innerText = avilableSeat;
                yourSeat++;
                const currentYourSeat = document.getElementById('yourSeat');
                currentYourSeat.innerText = yourSeat;

                const addSeats = seat.innerText;
                const addCard = document.getElementById('addSeat');
                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                const p3 = document.createElement('p');
                p3.id = 'price'
                p1.innerText = addSeats;
                p2.innerText = 'Economoy';
                p3.innerText = 550;
                const p3Price = parseInt(p3.innerText)
                totalPrice = totalPrice + p3Price;

                const currntTotalPrice = document.getElementById('totalPrice');
                currntTotalPrice.innerText = totalPrice
                addCard.appendChild(p1);
                addCard.appendChild(p2);
                addCard.appendChild(p3);
            }
            else {
                alert('Kom kore kin')
            }
        }
    })
}

// console.log(array)