var $navMenu_burger = document.getElementById('navMenu-burger');
$navMenu_burger.addEventListener('click', (
				function(){
								var burger_status = $navMenu_burger.innerText;
								var $navbar = document.getElementById("navbar");
								$navbar.classList.toggle("active");
							 if(burger_status == "menu"){
							 					$navMenu_burger.innerText = "close";
							 }else {
							 					$navMenu_burger.innerText = "menu";
							 }
				}
));
