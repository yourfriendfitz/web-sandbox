const cardButton = document.getElementById("addPerson");
const personsDiv = document.getElementById("personsContainer")

cardButton.addEventListener("click", () => {
  const person = faker.helpers.createCard();
  const avatar = faker.image.avatar();
  const cardDiv = `
    <div class="card">
    <img src="${avatar}" class="avatar">
    <h3>Name: ${person.name}</h3>
    <h4>Company: ${person.company.name} - ${person.company.catchPhrase}</h4>
    <h5>${person.email} - ${person.phone}</h5>
    <ol>
    <li>${person.address.city}</li>
    <li>${person.address.state}</li>
    <li>${person.address.streetA}</li>
    <li>${person.address.streetB}</li>
    <li>${person.address.streetC}</li>
    <li>${person.address.streetD}</li>
    <li>${person.address.zipcode}</li>
    </ol>
    <p>Blog Post: ${person.posts[0].paragraph}</p>
    </div>
    `;
    personsDiv.insertAdjacentHTML("afterbegin", cardDiv)
});
