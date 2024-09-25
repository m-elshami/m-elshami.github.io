function searchFunction() {
    var input, filter, content, tr, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    content = document.getElementsByTagName('*');

    for (i = 0; i < content.length; i++) {
        var tagName = content[i].tagName.toUpperCase();
        if (tagName !== 'thead' && tagName !== 'H3' && tagName !== 'H3') {
            txtValue = content[i].textContent || content[i].innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                content[i].style.display = '';
            } else {
                content[i].style.display = 'none';
            }
        }
    }
}
function filterFunction() {
    var input, filter, content, tr, i;
    input = document.getElementById('filterBox');
    filter = input.value.toUpperCase();
    content = document.getElementsByTagName('tr');

    for (i = 0; i < content.length; i++) {
        tr = content[i];
        if (tr.innerText.toUpperCase().indexOf(filter) > -1) {
            content[i].style.display = '';
        } else {
            content[i].style.display = 'none';
        }
    }
}
	// عند النقر على الصفحة
	document.onclick = function() {
	  openFullscreen();
	};
	
	function openFullscreen() {
	  if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	  } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
		document.documentElement.mozRequestFullScreen();
	  } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		document.documentElement.webkitRequestFullscreen();
	  } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
		document.documentElement.msRequestFullscreen();
	  }
	}