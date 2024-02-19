let avilableSeat = parseInt(document.getElementById('avilableSeat').innerText);
let yourSeat = parseInt(document.getElementById('yourSeat').innerText);
let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let array = [];
let discount = 0;
// const number = document.getElementById('number').value;

const seats = document.querySelectorAll(".kbd");

for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (array.includes(seat) !== true) {
            array.push(seat);
            if (array.length <= 4) {
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
                        const number = document.getElementById('number').value;



                        if ((array.length === 4) && (offerDis === input)) {
                            discount = 550 * 0.15;
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
                            discount = 550 * 0.2;
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
                            alert('Invalitd Code')
                        }
                    })
                }
            }
            else {
                alert('Kom kore kin');
            }
        }
    })
}

// const submit = document.getElementById('submit');
// submit.addEventListener('click', function () {
//     if (array.length > 0) {
//         // number.classList.remove('btn-disabled');
//         console.log('okk')
//     }
// })

// const numbers = document.getElementById('number');
// let hello;
// numbers.addEventListener('keyup', function(event){
//     hello.push(event.value)
// })


