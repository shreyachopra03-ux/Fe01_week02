console.log(window);
alert(1);

// ++++++++ Single element selectors ++++++++++
// console.log(document.getElementById('email'));
// console.log(document.querySelector('.msg'));
// const heading = document.querySelector('h1');
// console.log(heading);


// +++++++++ Multiple element selectors ++++++++++++++
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));  // don't use this -> not recommended

// const material = document.querySelectorAll('.item');
// material.forEach((item) => console.log(item));

//   +++++++ manipulating DOM +++++++++++
// agr txt change krna hai kisi particular jghaa kaa use text content property
// agr kahi pr html add krni hai jaise h1 heading ya any so vhaa .innerHTML likhdo and it'll change

// const ul  = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();

// +++++++++ ways of manipulating the text +++++++
// ul.firstElementChild.textContent = 'shreya';  
// ul.children[1].innerText = 'soumya';
// ul.children[2].innNerHTML = '<h1>shruti & deepali</h1>';

// ++++++++++++ Agr button ka bg color change krna hai toh ++++++++
// const btn = document.querySelector('.btn');
// btn.style.background = 'orange';

// +++++++++ Events ++++++++++++++++
 // e.preventDefault(); -> ye prevent krta hai form ya btn ko uska default action krne se & hence submit click krne pr dikhta hai submit hua hai vrna ek endless loop chalta rehta hai 
// click, mouseover, mouseout kuch bhi kr skte ho use

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     console.log(e.target.className);
// });

// const btn = document.querySelector('.btn');
// btn.addEventListener('click ', (e) => {
//     e.preventDefault(e);
//     console.log('mouseover is working');
// });

// const form = document.querySelector('#my-form');
// form.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'pink';

// });

// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// document.querySelector('#my-form').style.background = 'pink';

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

    // console.log(nameInput.value);

    // if(nameInput.value === '' || emailInput.value === '') {
    //     msg.classList.add('error');
    //     msg.innerHTML = 'please enter all fileds'
    //     msg.style.background = 'red';
        

    //     setTimeout(() => msg.remove(), 1500);
    // } 
    
    // else{
    //     msg.classList.add('error');
    //     msg.innerHTML = 'thanks, for filling up the form';
    //     msg.style.background = 'blue';

    //    setTimeout(() => msg.remove(), 1500);
    // }

//     else{
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(
//          `${nameInput.value} : ${emailInput.value}`));

//          userList.appendChild(li);

         // Clear fields -> ek user ki info fill hone ke baad name and email boxes clear ho jaayenge 
//          nameInput.value ='';
//          emailInput.value = '';
        
//     }

// }
