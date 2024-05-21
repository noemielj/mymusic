document.querySelector('#msg-container').innerHTML += `
 <div class="row new-row">
   <img class="avatar" src="images/avatar-2.jpg" />
   <div class="text-container">
     <h6>Noemie Louis Joseph</h6>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
     unde vel magni possimus libero, alias suscipit nobis officia
     accusantium. Laborum ipsam accusamus iusto deserunt mollitia.
     Repudiandae alias sequi nobis ipsum.</p>
   </div>
   <span class="delete">&#x2716;</span>
 </div>
`;
const messageCount = document.querySelectorAll("p").length;
document.querySelector("#count").textContent = messageCount;

const date = Date()
document.querySelector("#date").textContent = date;