let avilableSeat = parseInt(document.getElementById('avilableSeat').innerText);
let yourSeat = parseInt(document.getElementById('yourSeat').innerText);
let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let submit = document.getElementById('submit');
let array = [];
let discount = 0;

const seats = document.querySelectorAll(".kbd");

for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (array.includes(seat) !== true) {
            array.push(seat);
            if ((array.length <= 4)) {
                const number = document.getElementById('number');
                number.addEventListener('change', function () {
                    if (number.value.length > 2) {
                        submit.classList.remove('btn-disabled');
                    }
                })
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
                currntTotalPrice.innerText = totalPrice;
                addCard.appendChild(p1);
                addCard.appendChild(p2);
                addCard.appendChild(p3);

                const grandTotal = document.getElementById('grandTotal');
                grandTotal.innerText = totalPrice;


                if (array.length === 4) {
                    const disBtnN = document.getElementById('disBtn');
                    disBtnN.classList.remove('btn-disabled');

                    // stap => Calculetion part

                    const offerDis = document.getElementById('offerDis').innerText;
                    const coupleDis = document.getElementById('coupleDis').innerText;

                    const disBtn = document.getElementById('disBtn');
                    disBtn.addEventListener('click', function () {
                        const input = document.getElementById('coupon').value;
                        const inputPart = document.getElementById('inputPart');
                        let grandTotal = document.getElementById('grandTotal');
                        let grandTotalCal;

                        if ((array.length === 4) && (offerDis === input)) {
                            discount = totalPrice * 0.15;
                            inputPart.classList.add('hidden')
                            const discountContainer = document.getElementById('discountPrice');
                            const text = document.createElement('h3');
                            const price = document.createElement('h3');
                            text.innerText = 'Discount Price'
                            price.innerText = discount;

                            discountContainer.appendChild(text);
                            discountContainer.appendChild(price);

                            grandTotalCal = totalPrice - discount;
                            grandTotal.innerText = grandTotalCal;
                        }
                        else if ((array.length === 4) && (coupleDis === input)) {
                            discount = totalPrice * 0.2;
                            inputPart.classList.add('hidden')
                            const discountContainer = document.getElementById('discountPrice');
                            const text = document.createElement('h3');
                            const price = document.createElement('h3');
                            text.innerText = 'Discount Price'
                            price.innerText = discount;

                            discountContainer.appendChild(text);
                            discountContainer.appendChild(price);
                            grandTotalCal = totalPrice - discount;
                            grandTotal.innerText = grandTotalCal;
                        }
                        else {
                            document.getElementById('coupon').value = "";
                            alert('Invalitd Code');
                            // location.reload();
                        }
                    })
                }
            }
            else {
                alert('You have selected the highest numbered seat');
                location.reload();
            }
        }
    })
}

const main = document.getElementsByClassName('mainPart')
const success = document.getElementById('hidden');

submit.addEventListener('click', function () {
    for (const item of main) {
        item.classList.add('hidden');
    }
    success.classList.remove('hidden');
})

const Continue = document.getElementById('continue');
Continue.addEventListener('click', function () {
    success.classList.add('hidden')
    for(const item of main){
        item.classList.remove('hidden');
    }
    location.reload()
})

