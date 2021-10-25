const team = [
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  },
  {
    name: 'Luke Sky Walker',
    role: 'Jedi',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
  }
]
renderTeamElements(team)

/**
 * Render a single member dom element
 * @param {object} member the member object
 * @returns string
 */
function renderTeamMember(member) {
  return `
  <div class="col-3 g-3">
      <div class="card">
        <img src="${member.image}" class="img-fluid"
          alt="${member.name}">
        <div class="p-2">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
      </div>
  </div>`
}


function renderTeamElements(teamArray) {
  // Ciclare nell'array di oggetti
  for (let index = 0; index < teamArray.length; index++) {
    const member = teamArray[index];
    //const element = renderTeamMember(member)
    // Ad ogni iterazione seleziona nome, role, image
    /*   console.log('name:', member.name);
      console.log('role:', member.role);
      console.log('image:', member.image);
      console.log('********************'); */

    document.querySelector('.row').insertAdjacentHTML('beforeend', renderTeamMember(member))

  }
}





// Add a new team member

document.getElementById('add').addEventListener('click', function () {
  /*     
    const membeName = document.getElementById('name').value
    const role = document.getElementById('role').value
    const image = document.getElementById('image').value 
    */

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const image = document.getElementById('image').value;

  const member = {
    name,
    role,
    image
  }

  console.log(member);
  document.querySelector('.row').insertAdjacentHTML('beforeend', renderTeamMember(member))

  /* team.push({name: '', role:'', image: ''}) */

})



