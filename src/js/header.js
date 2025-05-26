import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").outerHeight();
		let scrollTop = $(window).scrollTop();
		let windowWidth = $(window).width();

		if (windowWidth <= 1024) {
			// Dưới mobile: luôn xóa class active
			$("header").removeClass("active");
			return;
		}

		if ($("body").hasClass("home")) {
			// Scroll lớn hơn 400px mới active
			if (scrollTop > 600) {
				$("header").addClass("active");
			} else {
				$("header").removeClass("active");
			}
		} else {
			$("header").removeClass("active");
		}
	},

	mobile: function () {
		$(".header-bar").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("isOpenMenu");

			// Đổi icon
			const $icon = $(this).find("i");
			$icon.toggleClass("fa-bars fa-xmark");
		});

		$(
			".nav-links .sub-menu, .nav-links .sub-menu-children, .nav-links .sub-menu-children-dropdown"
		).hide();

		$('.nav-links li[class*="menu-item-has-children"] > a').on("click", function (e) {
			e.preventDefault();

			$(this)
				.toggleClass("dropdown-active")
				.next()
				.slideToggle()
				.parent()
				.siblings()
				.find("a")
				.removeClass("dropdown-active")
				.next()
				.slideUp();
		});
	},
	initVariable: function () {
		const $header = document.querySelector("header");
		if (!$header) return;

		// Hàm cập nhật chiều cao header
		function updateHeaderHeight() {
			const height = $header.offsetHeight;
			document.documentElement.style.setProperty("--header-height", `${height}px`);
		}

		// Cập nhật ban đầu
		updateHeaderHeight();

		// Theo dõi mọi thay đổi chiều cao của header
		const ro = new ResizeObserver(updateHeaderHeight);
		ro.observe($header);

		// Phòng trường hợp ảnh hoặc font chưa load xong
		window.addEventListener("load", () => {
			setTimeout(updateHeaderHeight, 100);
		});
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
		header.initVariable();
	},
};
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
