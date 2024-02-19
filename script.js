// build functionality to change button color when i click inside #seats, it will change the child button color where i clicked and if i click again then it will remove the color from the button. dont select more than any 4 buttons out of 8 buttons, if i select more than 4 buttons then it will show an alert message that you can't select more than 4 buttons. if i click on the button again then it will remove the color from the button and also remove the button from the selected array.

document.getElementById('seats').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        //add class to button
        e.target.classList.toggle('bg-custom');
        e.target.classList.toggle('text-white');
        e.target.classList.toggle('hover:bg-custom');
        // console.log(e.target);
        // console.log(e.target.classList.contains('bg-custom'));
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
            selected = selected.filter(seat => seat !== e.target);
        }
    }
});


// document.getElementById('seats').addEventListener('click', function (e) {
//     if (e.target.tagName === 'BUTTON') {
//         //add class to button
//         e.target.classList.toggle('bg-custom');
//         e.target.classList.toggle('text-white');
//         e.target.classList.toggle('hover:bg-custom');
        
//     }
// });
