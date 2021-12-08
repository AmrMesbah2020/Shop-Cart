// function selecter(this_id, other_id) {
//     var e = document.getElementById(this_id);
//     var d = document.getElementById(other_id);
//     e.classList.add("active");
//     d.classList.remove("active");

// }

//************************************************************ */
var sendBtn = document.getElementById('sent');
var msgInput = document.getElementById('comment');


sendBtn.addEventListener('click', recive);

function recive() {
    console.log(msgInput.value)
    console.log(msgInput.textContent)

    if (msgInput.value === "") {
        alert("Please Enter the message");
    } else {
        alert("Your Message is sent Succefully");
    }

}
//******************************************************************* */