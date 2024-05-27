const $sidebar = document.querySelector('.catalog-sidebar');
if ($sidebar) {
	const $openBtns = document.querySelectorAll('.js-open-catalog-sidebar');
	$openBtns.forEach($btn => {
		$btn.addEventListener('click', () => {
			$sidebar.classList.add('catalog-sidebar--active');
		});
	});

	window.addEventListener("click", (e) => {
		if (e.target.classList.contains("js-open-catalog-sidebar") || e.target.closest('.js-open-catalog-sidebar')) {
			return;
		}

		const $activeSidebar = document.querySelector(".catalog-sidebar--active");
		const isInner = e.target.closest(".catalog-sidebar") && !e.target.classList.contains("catalog-sidebar");
		if (!$activeSidebar || isInner) {
			return;
		}

		$activeSidebar.classList.remove("catalog-sidebar--active");
	});

}