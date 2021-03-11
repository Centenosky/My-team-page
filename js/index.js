const $team = document.getElementById('team');

const $person1Container = document.getElementById('person-1');
const $person2Container = document.getElementById('person-2');
const $person3Container = document.getElementById('person-3');
const $person4Container = document.getElementById('person-4');
const $person5Container = document.getElementById('person-5');
const $person6Container = document.getElementById('person-6');

function personTemplate(person) {
  return (
    `
    <figure class="person-image">
        <img src="${person.image}" alt="">
    </figure>
    <h2 class="person-name">${person.name}</h2>
    <div class="person-job">${person.job}</div>
    `
  )
}

const person1 = {
  name: 'Bill Mahoney',
  job: 'Product owner',
  image: 'images/photo1.png',
}

const person2 = {
  name: 'Saba Cabrera',
  job: 'Art director',
  image: 'images/photo2.png',
}

const person3 = {
  name: 'Shae Le',
  job: 'Tech Lead',
  image: 'images/photo3.png',
}

const person4 = {
  name: 'Skylah Lu',
  job: 'UX Designer',
  image: 'images/photo4.png',
}

const person5 = {
  name: 'Griff Richards',
  job: 'Developer',
  image: 'images/photo5.png',
}

const person6 = {
  name: 'Stan John',
  job: 'Developer',
  image: 'images/photo6.png',
}

const firstPerson = personTemplate(person1);
const secondPerson = personTemplate(person2);
const thirdPerson = personTemplate(person3);
const fourthPerson = personTemplate(person4);
const fifthPerson = personTemplate(person5);
const sixthPerson = personTemplate(person6);

$person1Container.innerHTML = firstPerson;
$person2Container.innerHTML = secondPerson;
$person3Container.innerHTML = thirdPerson;
$person4Container.innerHTML = fourthPerson;
$person5Container.innerHTML = fifthPerson;
$person6Container.innerHTML = sixthPerson;