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
			`<ul class="list-group">
			<li class="list-group-item active">ID: ${user.id}</li>
			<li class="list-group-item">Имя: ${user.name}</li>
			<li class="list-group-item">Логин: ${user.username}</li>
			<li class="list-group-item">Email: ${user.email}</li>
			<li class="list-group-item">Адрес: ${user.address.street}</li>
			<li class="list-group-item">Квартира: ${user.address.suite}</li>
			<li class="list-group-item">Город: ${user.address.city}</li>
			<li class="list-group-item">zipcode: ${user.address.zipcode}</li>
			<li class="list-group-item">Geo lat: ${user.address.geo.lat}</li>
			<li class="list-group-item">Geo lng: ${user.address.geo.lng}</li>
			<li class="list-group-item">Телефон: ${user.phone}</li>
			<li class="list-group-item">Сайт: ${user.website}</li>
			<li class="list-group-item">Компания: ${user.company.name}</li>
			<li class="list-group-item">catchPhrase: ${user.company.catchPhrase}</li>
			<li class="list-group-item">bs: ${user.company.bs}</li>
			</ul>`;

			document.getElementById('author').innerHTML = res;
			
		})
	})
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