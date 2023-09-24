const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
	element.addEventListener('click', () => {
		let command = element.dataset['element'];
		
		if (command == 'createLink' || command == 'insertImage'){
			let url = prompt('Enter link/url/image address', 'http://')
			document.execCommand(command, false, url)
		} else{
			document.execCommand(command, false, null);
		}
	});
});

document.getElementById('save').addEventListener('click', save);


if(localStorage.webNotes!==null)
{
    document.getElementById('text').innerHTML = localStorage.webNotes;
}else{

}
function save(){
    var contents = document.getElementById('text').innerHTML;
	localStorage.webNotes = contents;
	//alert("WebNotes: Saved.")
}