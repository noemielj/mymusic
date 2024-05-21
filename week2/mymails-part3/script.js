const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;
document.querySelector('#msg-container').innerHTML += newMessage;
const messagesCountOfAfter = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCountOfAfter; 

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

let deleteButtons = document.querySelectorAll('.delete')
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click',
    function () {
      this.parentNode.remove();
      const messagesCountOfAfter = document.querySelectorAll('p').length;
      document.querySelector('#count').textContent = messagesCountOfAfter; 
    }
  );
}

/* button add */
let addBtn = document.querySelector('#btn-add')
let messageBox= document.querySelector('#msg-container')

addBtn.addEventListener('click',
 function (){
  let message = document.querySelector('#add-message')
 const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6> John Doe </h6>
      <p>${message.value}</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;
    messageBox.innerHTML += newMessage
    document.querySelector('#add-message').value = '';


    const messageAdd = document.querySelectorAll('p').length; 
    document.querySelector('#count').textContent = messageAdd;
/* Delete Button */
        let deleteButtons = document.querySelectorAll('.delete')
        for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click',
        function () {
          this.parentNode.remove();
          const messagesCount = document.querySelectorAll('p').length;
          document.querySelector('#count').textContent = messagesCount; 
          }
        );
       }
     }
   )
  ;

 /* Search */
  let searchButton = document.querySelector('#btn-search')

  searchButton.addEventListener('click', function () {
  let searchField = document.querySelector('#search-message')
  let textToCompare = ''
  let messagesNames = document.querySelectorAll('h6')

  textToCompare = searchField.value;
  textToCompare = textToCompare.toLowerCase();
  console.log(textToCompare);

  for (let i =0; i <messagesNames.length; i++) {
    if (messagesNames[i].textContent.toLowerCase().includes(textToCompare) === false) {
      const textToShow = messagesNames[i].parentNode.parentNode
      textToShow.style.display = 'none'
    } else {
      const textToHide = messagesNames[i].parentNode.parentNode
      textToHide.style.display = 'flex'
    }
  }
  searchField.value = '';
})