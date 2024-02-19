let selected = [];

document.getElementById('seats').addEventListener('click', function (e) {

    if (e.target.tagName === 'BUTTON') {

        e.target.classList.toggle('bg-custom');
        e.target.classList.toggle('text-white');
        e.target.classList.toggle('hover:bg-custom');

        document.getElementById('phoneNo').addEventListener('input', function () {
            let phoneNoDigit = document.getElementById('phoneNo').value;
            checkConditions(phoneNoDigit, selected.length);
        });

        document.getElementById('seats').addEventListener('click', function (e) {
            // your seat selection code here
            let phoneNoDigit = document.getElementById('phoneNo').value;
            checkConditions(phoneNoDigit, selected.length);
        });

        function checkConditions(phoneNoDigit, selectedSeats) {
            if (phoneNoDigit.length > 0 && selectedSeats > 0) {
                document.getElementById('toEnableAfter1DigitAndSelection').removeAttribute('disabled');
            }
            else {
                document.getElementById('toEnableAfter1DigitAndSelection').setAttribute('disabled', true);
            }
        }

        if (e.target.classList.contains('bg-custom')) {
            if (selected.length >= 4) {
                alert('You can not select more than 4 seats');
                e.target.classList.remove('bg-custom');
                e.target.classList.remove('text-white');
                e.target.classList.remove('hover:bg-custom');
            } else {
                selected.push(e.target);
            }
        } else {
            selected = selected.filter(function (seat) {
                return seat !== e.target;
            });
        }


        let seatInfoTable = document.getElementById('seatInfoTable');
        if (selected.length === 1) {
            document.getElementById('decreaseCount').textContent = '7';
            document.getElementById('seatCount').textContent = '1';
            document.getElementById('discountedPriceHiddenArea').classList.add('hidden');
            seatInfoTable.innerHTML = `
                <tr>
                    <td>${selected[0].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
            `;
        } else if (selected.length === 2) {
            document.getElementById('seatCount').textContent = '2';
            document.getElementById('decreaseCount').textContent = '6';
            document.getElementById('discountedPriceHiddenArea').classList.add('hidden');
            seatInfoTable.innerHTML = `
                <tr>
                    <td>${selected[0].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
                <tr>
                    <td>${selected[1].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
            `;
        } else if (selected.length === 3) {
            document.getElementById('seatCount').textContent = '3';
            document.getElementById('decreaseCount').textContent = '5';
            document.getElementById('discountedPriceHiddenArea').classList.add('hidden');
            seatInfoTable.innerHTML = `
                <tr>
                    <td>${selected[0].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
                <tr>
                    <td>${selected[1].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
                <tr>
                    <td>${selected[2].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
            `;
        } else if (selected.length === 4) {
            document.getElementById('seatCount').textContent = '4';
            document.getElementById('decreaseCount').textContent = '4';

            seatInfoTable.innerHTML = `
                <tr>
                    <td>${selected[0].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
                <tr>
                    <td>${selected[1].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
                <tr>
                    <td>${selected[2].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
                <tr>
                    <td>${selected[3].textContent}</td>
                    <td>Business Class</td>
                    <td>550</td>
                </tr>
            `;
        } else {
            seatInfoTable.innerHTML = '';
        }



        if (selected.length === 0) {
            document.getElementById('seatInfoTable').innerHTML = `
                <tr>
                    <td id="toBeRemoved">Nothing selected!</td>
                </tr>
            `;
        }

        // toggle the disabled attribute of the input and button
        if (selected.length === 4) {
            document.getElementById('toEnableAfter4TicketInput').removeAttribute('disabled');
            document.getElementById('toEnableAfter4TicketButton').removeAttribute('disabled');
        } else {
            document.getElementById('toEnableAfter4TicketInput').setAttribute('disabled', true);
            document.getElementById('toEnableAfter4TicketButton').setAttribute('disabled', true);
        }

        // count total price from html named as #totalPrice and append the total price to that id, clicking on the button again then it will remove the price from the id.
        let totalPrice = 0;
        let grandTotalPrice = 0;
        let discountPrice = 0;
        selected.forEach(function (seat) {
            totalPrice += 550;
            grandTotalPrice = totalPrice;
        });
        document.getElementById('totalPrice').textContent = totalPrice;
        document.getElementById('grandTotalPrice').textContent = grandTotalPrice;

        document.getElementById('toEnableAfter4TicketButton').addEventListener('click', function () {

            let couponCode = document.getElementById('toEnableAfter4TicketInput').value;

            if (couponCode === 'NEW15' || couponCode === 'Couple 20') {

                if (couponCode === 'NEW15') {

                    grandTotalPrice = grandTotalPrice - (grandTotalPrice * 15 / 100);
                    discountPrice = grandTotalPrice * 15 / 100;
                    document.getElementById('discountedPrice').textContent = Math.floor(discountPrice);
                    document.getElementById('grandTotalPrice').textContent = Math.floor(grandTotalPrice);
                    document.getElementById('toEnableAfter4TicketButton').style.display = 'none';
                    document.getElementById('toEnableAfter4TicketInput').style.display = 'none';
                    document.getElementById('alertSuccess').classList.remove('hidden');
                    document.getElementById('discountedPriceHiddenArea').classList.remove('hidden');
                } else if (couponCode === 'Couple 20') {
                    grandTotalPrice = grandTotalPrice - (grandTotalPrice * 20 / 100);
                    discountPrice = grandTotalPrice * 20 / 100;
                    document.getElementById('discountedPrice').textContent = Math.floor(discountPrice);
                    document.getElementById('grandTotalPrice').textContent = Math.floor(grandTotalPrice);
                    document.getElementById('toEnableAfter4TicketButton').style.display = 'none';
                    document.getElementById('toEnableAfter4TicketInput').style.display = 'none';
                    document.getElementById('alertSuccess').classList.remove('hidden');
                    document.getElementById('discountedPriceHiddenArea').classList.remove('hidden');
                }
            }
            else {
                // remove hidden class from #alertDanger
                document.getElementById('alertDanger').classList.remove('hidden');
                document.getElementById('toEnableAfter4TicketInput').addEventListener('input', function () {
                    document.getElementById('alertDanger').classList.add('hidden');
                }
                );
            }
        }
        );

        if (selected.length === 0) {
            document.getElementById('decreaseCount').textContent = '8';
            document.getElementById('seatCount').textContent = '0';
            document.getElementById('totalPrice').textContent = '0';
            // document.getElementById('grandTotalPrice').textContent = '0';
            document.getElementById('discountedPrice').textContent = '0';
        }
    }

    if (document.getElementById('toEnableAfter4TicketInput').hasAttribute('disabled')) {
        document.getElementById('alertDanger').classList.add('hidden');
    }


});



// click Buy Tickets button it will smoothly scroll the page to the #destination id.
document.getElementById('scrollToDestination').addEventListener('click', function () {
    document.getElementById('destination').scrollIntoView({ behavior: 'smooth' });
});

// reload page when click on the #reloadPage button and scroll to the top of the page.
document.getElementById('reloadPage').addEventListener('click', function () {
    window.location.reload();
    window.scrollTo(0, 0);
});