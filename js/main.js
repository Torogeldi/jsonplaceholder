var page = '_page=1', limit = '_limit=5';
	var pages = 100/20;
	var src = `https://jsonplaceholder.typicode.com/`;

function getPosts(){
	fetch(`${src}posts?${page}&${limit}`)
	.then((res) => { return res.json() })
	.then((data) => {
		let result = `<h3> Посты </h3>`;
		data.forEach((posts) =>{
			result += 
			`<ul class="list-group">
			  <li class="list-group-item active">Id: ${posts.id}</li>
			  <li class="list-group-item">Загаловок: ${posts.title}</li>
			  <li class="list-group-item">Текст: ${posts.body}</li>
			</ul>
			`;
			document.getElementById('posts').innerHTML = result;
			
		})
	})
	.then(() => {
		let step = '';
		let page = 0;

			for (var i = 1; i <= 10; i++) {
				page++;
					step += 
					`<li><a onmouseover="pagination()" val="https://jsonplaceholder.typicode.com/posts?_page=${page}&${limit}">${i}</a></li>`;
				
			}
			document.getElementById('pagination').innerHTML = step;

		})
}

function getUsers(){
	fetch(`https://jsonplaceholder.typicode.com/users`)
	.then((res) => { return res.json() })
	.then((data) => {
		let result = `<h3> Пользователи </h3>`;
		data.forEach((users) =>{

	result += `<ul class="list-group">
				<li class="list-group-item active">${users.id}</li>
				<li onmouseover="User()" val="https://jsonplaceholder.typicode.com/users?name=${users.name}" class="name list-group-item">${users.name}</li>
			  </ul>`;

			document.getElementById('users').innerHTML = result;
			
		})
	})
}


function pagination(){

var button = document.querySelectorAll('a');
for(var i=0; i<button.length; i++){
  button[i].addEventListener('click', function(e){
    var href = e.target.getAttribute('val');
  

	fetch(href)
	.then((res) => { return res.json() })
	.then((data) => {
		let res = '<h3> Посты </h3>';
		data.forEach((user) =>{
			res += 
			`<ul class="list-group">
			  <li class="list-group-item active">Id: ${user.id} </li>
			  <li class="list-group-item">Загаловок: ${user.title}</li>
			  <li class="list-group-item">Текст: ${user.body}</li>
			</ul>
			`;
			
			document.getElementById('posts').innerHTML = res;
			
		})
	})
	})
}
}

	var key = "mykey";

function getUser(){
		fetch(window.localStorage[key])
	.then((res) => { return res.json() })
	.then((data) => {
		let res = `<h3> Сведения о пользователе</h3>`;
		data.forEach((user) =>{

			res +=
			`
			<table border="1" cellspacing="0">
			<tr>
			<th width="30%">ID</th> <td><input size="40%" id="id" value="${user.id}"></td>
			</tr>
			<tr>
			<th>Имя</th> <td><input size="40%" id="name" value="${user.name}"></td>
			</tr>
			<tr>
			<th>Логин</th> <td><input size="40%" id="username" value="${user.username}"></td>
			</tr>
			<tr>
			<th>Email</th> <td><input size="40%" id="email" value="${user.email}"></td>
			</tr>
			<tr>
			<th>Адрес</th> <td><input size="40%" id="address" value="${user.address.street}"></td>
			</tr>
			<tr>
			<th>Квартира</th> <td><input size="40%" id="suite" value="${user.address.suite}"></td>
			</tr>
			<tr>
			<th>Город</th> <td><input size="40%" id="city" value="${user.address.city}"></td>
			</tr>
			<tr>
			<th>zipcode</th> <td><input size="40%" id="zipcode" value="${user.address.zipcode}"></td>
			</tr>
			<tr>
			<th>geo.lat</th> <td><input size="40%" id="lat" value="${user.address.geo.lat}"></td>
			</tr>
			<tr>
			<th>geo.lng</th> <td><input size="40%" id="lng" value="${user.address.geo.lng}"></td>
			</tr>
			<tr>
			<th>Телефон</th> <td><input size="40%" id="phone" value="${user.phone}"></td>
			</tr>
			<tr>
			<th>Телефон</th> <td><input size="40%" id="website" value="${user.website}"></td>
			</tr>
			<tr>
			<th>Компания</th> <td><input size="40%" id="company_name" value="${user.company.name}"></td>
			</tr>
			<tr>
			<th>catchPhrase</th> <td><input size="40%" id="catchPhrase" value="${user.company.catchPhrase}"></td>
			</tr>
			<tr>
			<th>bs</th> <td><input size="40%" id="bs" value="${user.company.bs}"></td>
			</tr>
			</table>
			<button class="btn btn-danger" type="button" onclick="deleteUser()">Удалить</button>
			<button class="btn btn-primary" type="button" onclick="updateUser()">Изменить</button>
			`;

			document.getElementById('author').innerHTML = res;
			
		})
	})
}

function updateUser(){

	var id = document.getElementById('id').value;
	var name = document.getElementById('name').value;
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var suite = document.getElementById('suite').value;
	var city = document.getElementById('city').value;
	var zipcode = document.getElementById('zipcode').value;
	var lat = document.getElementById('lat').value;
	var lng = document.getElementById('lng').value;
	var phone = document.getElementById('phone').value;
	var website = document.getElementById('website').value;
	var company_name = document.getElementById('company_name').value;
	var catchPhrase = document.getElementById('catchPhrase').value;
	var bs = document.getElementById('bs').value;

	fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
     method: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      id: id,
      name: name,
      username: username,
      email: email,
      address: address,
      suite: suite,
      city: city,
      zipcode: zipcode,
      lat: lat,
      lng: lng,
      phone: phone,
      website: website,
      company_name: company_name,
      catchPhrase: catchPhrase,
      bs: bs
    })
  })
  .then(response => response.json())
  .then(json => alert("Данные пользователя успешно изменены!"))
  .catch((err)=>console.log(err))
}

function deleteUser(){

	var id = document.getElementById('id').value;

	fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
     method: 'DELETE'
  })
  .then(response => response.json())
  .then(json => alert("Пользователь успешно удален!"))
  .catch((err)=>console.log(err))
}

	
function User(){
	var button = document.querySelectorAll('li.name');
for(var i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(e){
    var a = e.target.getAttribute('val');

    window.localStorage[key] = a;
    
    location="user.html";
})
}
}

function searchPosts(){

	let searchValue = document.getElementById('searchValue').value;

	fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchValue}`)
	.then((res) => { return res.json() })
	.then((data) => {
		let result = '<h3> Результат поиска: </h3>';
		data.forEach((posts) =>{
			result += 
			`<ul class="list-group">
			  <li class="list-group-item active">id: ${posts.id}</li>
			  <li class="list-group-item">Загаловок: ${posts.title}</li>
			  <li class="list-group-item">Текст: ${posts.body}</li>
			</ul>
			`;
			document.getElementById('posts').innerHTML = result;
		});
	})
}

function searchUsers(){

	let searchValue = document.getElementById('searchValue').value;

	fetch(`https://jsonplaceholder.typicode.com/users?q=${searchValue}`)
	.then((res) => { return res.json() })
	.then((data) => {
		let result = '<h3> Результат поиска: </h3>';
		data.forEach((users) =>{
			result += 
			`<ul class="list-group">
			  <li class="list-group-item active">ID: ${users.id}</li>
			  <li val="https://jsonplaceholder.typicode.com/users?name=${users.name}" onmouseover="User()" class="list-group-item name">Имя: ${users.name}</li>
			  <li class="list-group-item">Логин: ${users.username}</li>
			  <li class="list-group-item">Email: ${users.email}</li>
			</ul>
			`;
			document.getElementById('users').innerHTML = result;
		});
	})
}