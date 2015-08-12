function lightbox () {
	var lightbox = document.getElementById("lightbox");
	var lightboxContent = document.getElementById("lightbox-content");
	var lightboxModal = document.getElementById("lightbox-modal");

	var lt = document.getElementsByClassName("lightbox-trigger");
	for (var i = 0; i < lt.length; i++) {
		lt[i].addEventListener("click", function (e) {
			e.preventDefault();
			
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					lightboxContent.innerHTML=xmlhttp.responseText;
					createPages();
				}
			}
			xmlhttp.open("GET",this.href,true);
			xmlhttp.send();

			lightbox.className = "lightbox-active"			
			lightboxModal.className = "lightbox-active"
		});
	}

	lightboxModal.addEventListener("click", function (e) {
			lightbox.src = "";
			lightbox.className = "lightbox-hidden"			
			lightboxModal.className = "lightbox-hidden"
	})

}

function createPages () {
	var lightbox = document.getElementById("lightbox");
	var width = lightbox.clientWidth, height = lightbox.clientHeight;

	var pages = document.getElementsByClassName("pages")[0];

	var columns = Math.ceil(pages.clientHeight / height);
	var columnWidth = width * columns;
	pages.style.webkitColumns = columnWidth + "px " + columns;
	pages.style.height = height - 40 + "px";

	document.getElementById("lightbox-next").addEventListener("click", function (e) {
		pages.scrollLeft +=  width - 20;
	});

	document.getElementById("lightbox-prev").addEventListener("click", function (e) {
		pages.scrollLeft -= width - 20;
	});
}


function spiderWeb () {
	var nodes = document.getElementsByClassName('node');

	for (var i = 0; i < nodes.length; i++) {
	    nodes[i].addEventListener("click", mapNodes);
	}
	nodes[0].click();

	function mapNodes () {
	    var selected = this;
	    var p = 324;
	    for (var j = 0; j < nodes.length; j++) {
	        if (nodes[j] != selected) {
	            nodes[j].className = "node";
	            //nodes[j].style.transform = "translateX(200px) translateY(200px) rotate("+p+"deg) translate(300px) rotate(-"+p+"deg) translateY(0px) translateX(0px)";
	            //p = (p + (180 / 5)) % 360;//(180 / (nodes.length - 1)) % 360;
	        } else {
	            selected.className = 'node selected';
	            selected.style.transform = "";
	        }
	    }
	}
}