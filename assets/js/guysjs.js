$(document).ready(function() {




	$(".menu-item").click(function() { // jQuery Function Number 1 

		var btnName = $(this).text(); // jQuery Function Number 2
		var btnActive = $(this).hasClass("active"); // jQuery Function Number 3

		var condition = !btnActive;

		
		if (condition) {
			$(this).addClass("active"); // jQuery Function Number 4
			$(this).removeClass("inactive"); // jQuery Function Number 5

			console.log("btnName", btnName);
			$('.' + btnName).hide(); // jQuery Function Number 6

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");

			$('.' + btnName).show(); // jQuery Function Number 7
		} 

	})

	/*let jhwidth = $("#jh").width();
	let jhheight = $("#jh").height();
	let jhpos = $("jh").position();
	console.log(jhwidth);
	console.log(jhheight);

	$(".object").append("<div id = 'jhblock'> </div>");
	$("#jhblock").css({"opacity": "0.5",
						"border": "2px solid black",
						"background": "black",
						"z-index": "1000",
						"position": "relative",
						"justify-content":"right",
						"width": jhwidth,
						"height": jhheight / 4,
						/* bottom stuff wil probs need to be individualized 
						"bottom": "81px",
						"left": "30px"
						}); */

	/*for (i = 0; i < 12; i++) {
		let picwidth = $("." + i).width() - 4;
		let picheight = $("." + i).height();

		let iid = i + "block";
		
		/* is this the correct way to do id quote nesting? 

		$(".object" + i).append("<div class = 'background' id ='"+iid+"'> </div>"); 
		$("#" + i + "block").css({"opacity": "0.5",
						"border": "2px solid black",
						"background": "black",
						"z-index": "1000",
						"position": "relative",
						"justify-content":"right",
						"width": picwidth,
						"height": picheight,
						});
	} 

	// h e l P

	$("#2block").css({"bottom": "500px"
					  }); */



/*
		console.log("btnName", btnName);

			if (btnName == "2D") {
				console.log("btnName", btnNames);
				$('.' + "kpop").addClass("inactive");
				$('.' + "league").addClass("inactive");

				$('.' + "kpop").removeClass("active");
				$('.' + "league").removeClass("active");



				$('.' + "kpop").hide();
				$('.' + "league").hide();
			} else if (btnName == "league") {
				$('.' + "2D").hide();
				$('.' + "kpop").hide();
			} else {
				$('.' + "2D").hide();
				$('.' + "league").hide();
			}
		} 
		



 */
 




	$(".pic").click(function() { // jQuery Function Number 8
		var clickedName = $(this).attr("id"); // jQuery Function Number 9
		console.log(clickedName);
		var opacity = $("#" + clickedName).css("opacity"); // jQuery Function Number 10
		console.log(opacity);
		$("#" + clickedName).css("opacity", ".7");


	})

	/*$(".pic").mouseenter(function() {
		$(this).css("opacity", "0.5");
		let theclass = $(this).attr("class");
		let num = theclass.slice(0, 1);
		console.log(num);
		let cap = "#" + num + "c";
		$(cap).css("opacity", "1");



	})

	$("pic").mouseleave(function() {
		$(this).css("opacity", "1");
	}) */





})












