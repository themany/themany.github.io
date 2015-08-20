function lightbox () {
	var lightbox = document.getElementById("lightbox");
	var lightboxContent = document.getElementById("lightbox-content");
	var lightboxModal = document.getElementById("lightbox-modal");

	var lt = document.getElementsByClassName("lightbox-trigger");
	for (var i = 0; i < lt.length; i++) {
		lt[i].addEventListener("click", function (e) {
			e.preventDefault();
			lightbox.className = "lightbox-hidden";

			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					lightboxContent.innerHTML=xmlhttp.responseText;
					createPages();
				}
				lightbox.className = "lightbox-active"			
			}
			xmlhttp.open("GET",this.href,true);
			xmlhttp.send();
			//lightboxModal.className = "lightbox-active"
		});
	}

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			lightboxContent.innerHTML=xmlhttp.responseText;
			createPages();
		}
	}
	xmlhttp.open("GET",lt[0].href,true);
	xmlhttp.send();

	lightbox.className = "lightbox-active"

	/*lightboxModal.addEventListener("click", function (e) {
			lightbox.src = "";
			lightbox.className = "lightbox-hidden"			
			//lightboxModal.className = "lightbox-hidden"
	})*/

}

function createPages () {
	var lightbox = document.getElementById("lightbox");
	var width = 600, height = lightbox.clientHeight;

	var pages = document.getElementsByClassName("pages")[0];

	var columns = Math.ceil(pages.clientHeight / height);
	var columnWidth = width * columns;
	pages.style.webkitColumns = columnWidth + "px " + columns;
	pages.style.height = height - 40 + "px";

	document.getElementById("lightbox-next").addEventListener("click", function (e) {
		pages.scrollLeft +=  width - 2;
	});

	document.getElementById("lightbox-prev").addEventListener("click", function (e) {
		pages.scrollLeft -= width - 2;
	});
}


function spiderWeb () {
	var nodes = document.getElementsByClassName('node');

	for (var i = 0; i < nodes.length; i++) {
	    nodes[i].addEventListener("click", doSelected);
	}
	nodes[0].click();

	function doSelected () {
		var selected = this;
	    for (var j = 0; j < nodes.length; j++) {
	        if (nodes[j] != selected) {
	            nodes[j].className = "node";
	        } else {
	            selected.className = 'node selected';
	        }
	    }
	}

/*
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
	}*/
}

function coverToggle () {
	var cover = document.getElementsByClassName("front")[0];

	cover.addEventListener("click", function (e) {
		cover.parentNode.parentNode.className += " flip-toggle";
		document.getElementsByClassName("flip-container")[0].style.overflow = "auto";
	});
}