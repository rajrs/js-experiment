var users=[
{
	name:'Elon Musk',
	gender:'M',
	hobby:'Marketing,business,sports',
	avatar:'images/img1.jpg'
},
{
	name:'Ratan tata',
	gender:'M',
	hobby:'branding,business',
	avatar:'images/img2.jpg'
},
{
	name:'shima',
	gender:'F',
	hobby:'Marketing',
	avatar:'images/default.png'
}
];
window.addEventListener('load', function() {

	var results=document.getElementById('result');
	
	function search () {
		var hobbyfd=document.getElementById('hobby');
		var hobby= hobbyfd.value;
		console.log(hobby)
		var genderfd=document.getElementById('gender')
		var genindex=genderfd .selectedIndex;
		var gender=genderfd.options[genindex].value;		 
		 var resulthtml='';
		for (var i = 0 ; i < users.length; i++) {
			
			if(gender=='A'|| gender== users[i].gender){
				if(hobby==''|| hobby==users[i].hobby){
					resulthtml=  '<div class="person-row">\
			<img src="' + users[i].avatar+'" width="50" height="50">\
			<div class="person-info">\
				<div>'+ users[i].name+'</div>\
				<div> '+ users[i].hobby +'</div>\
			</div>\
			<button>Add as friend</button>\
		</div>'		

				}
			}
			
		}

		results.innerHTML=resulthtml;
}
	var searchBtn= document.getElementById('searchbtn');
	searchBtn.addEventListener('click',search);
}); 