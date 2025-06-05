import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	ToggleItem,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	buttonToTop();
	indicatorSlide();
	countUpInit();
	toggleCheckbox();
	ToggleItem();

	//Product list
	$(".product-item-heading").on("click", function () {
		if (window.innerWidth <= 1023) {
			$(this).next(".product-main").slideToggle();
			$(this).find(".icon i").toggleClass("fa-chevron-up fa-chevron-down");
		}
	});

	const cta = document.querySelector(".tool-fixed-cta");
	const toolBtn = cta.querySelector(".tool");
	const closeBtn = cta.querySelector(".tool-heart");

	toolBtn.addEventListener("click", function (e) {
		e.preventDefault();
		cta.classList.add("active");
	});

	closeBtn.addEventListener("click", function (e) {
		e.preventDefault();
		cta.classList.remove("active");
	});

	// const menuToggle = document.getElementById("menuToggle");
	// const mobileMenu = document.getElementById("mobileMenu");
	// const navLangMobile = document.querySelector(".nav-language-mobile");
	// const menuIcon = document.getElementById("menuIcon");

	// menuToggle.addEventListener("click", () => {
	// 	mobileMenu.classList.toggle("open");

	// 	// Toggle ngôn ngữ
	// 	if (mobileMenu.classList.contains("open")) {
	// 		navLangMobile.classList.add("opacity-100", "visible");
	// 		navLangMobile.classList.remove("opacity-0", "invisible");

	// 		// Đổi sang icon "X"
	// 		menuIcon.classList.remove("fa-bars");
	// 		menuIcon.classList.add("fa-xmark");
	// 	} else {
	// 		navLangMobile.classList.remove("opacity-100", "visible");
	// 		navLangMobile.classList.add("opacity-0", "invisible");

	// 		// Đổi lại icon bars
	// 		menuIcon.classList.remove("fa-xmark");
	// 		menuIcon.classList.add("fa-bars");
	// 	}
	// });

	const productItems = document.querySelectorAll(".product-item");

	productItems.forEach((product) => {
		const colorButtons = product.querySelectorAll(".color-btn");
		const productImg = product.querySelector(".product-img");

		if (colorButtons.length > 0 && productImg) {
			// Active màu đầu tiên khi load
			const firstBtn = colorButtons[0];
			const firstSrc = firstBtn.getAttribute("data-img");
			if (firstSrc) {
				productImg.src = firstSrc;
				firstBtn.classList.add("active");
			}
		}

		colorButtons.forEach((btn) => {
			btn.addEventListener("click", () => {
				const newSrc = btn.getAttribute("data-img");
				if (newSrc && productImg) {
					productImg.src = newSrc;

					// Xóa class active ở các nút cùng nhóm
					colorButtons.forEach((b) => b.classList.remove("active"));
					// Thêm class active cho nút được click
					btn.classList.add("active");
				}
			});
		});
	});
});

function startCountdown(durationInSeconds) {
	let remaining = durationInSeconds;

	const hourEl = document.querySelector(".countdown .hour");
	const minuteEl = document.querySelector(".countdown .minute");
	const secondEl = document.querySelector(".countdown .second");

	const timer = setInterval(() => {
		const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
		const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
		const seconds = String(remaining % 60).padStart(2, "0");

		hourEl.textContent = hours;
		minuteEl.textContent = minutes;
		secondEl.textContent = seconds;

		if (--remaining < 0) clearInterval(timer);
	}, 1000);
}

startCountdown(9059);

export function toggleCheckbox() {
	document.querySelectorAll(".product-checkbox").forEach((checkbox) => {
		// Đảm bảo checkbox không có class "checked" khi mới load
		checkbox.classList.remove("checked");

		// Thêm sự kiện click để toggle class "checked"
		checkbox.addEventListener("click", function () {
			this.classList.toggle("checked");
		});
	});
}

function initTechnologyTabs() {
	const tabItems = document.querySelectorAll(".popup-technology .item-tab");
	const contentTabs = document.querySelectorAll(".popup-technology .content-tab");

	// Mặc định hiển thị tab đầu tiên và active tab đầu tiên
	const firstContent = document.querySelector('.popup-technology .content-tab[data-id="1"]');
	const firstTab = document.querySelector('.popup-technology .item-tab[data-id="1"]');
	if (firstContent) firstContent.style.display = "block";
	if (firstTab) firstTab.classList.add("active");

	tabItems.forEach((item) => {
		item.addEventListener("click", () => {
			const id = item.getAttribute("data-id");

			// Bỏ class active khỏi tất cả tab
			tabItems.forEach((tab) => tab.classList.remove("active"));

			// Thêm class active vào tab được click
			item.classList.add("active");

			// Ẩn tất cả content-tab
			contentTabs.forEach((content) => {
				content.style.display = "none";
			});

			// Hiện content-tab tương ứng
			const activeContent = document.querySelector(
				`.popup-technology .content-tab[data-id="${id}"]`
			);
			if (activeContent) {
				activeContent.style.display = "block";
			}
		});
	});
}

export function indicatorSlide() {
	if ($(".indicator-swipe").length > 0) {
		var callback = function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
					setTimeout(function () {
						entry.target.classList.remove("active");
					}, 3000);
				}
			});
		};

		var observer = new IntersectionObserver(callback);
		var animationItems = document.querySelectorAll(".indicator-swipe");
		animationItems.forEach(function (item) {
			observer.observe(item);
		});
	}
}

setTimeout(() => {
	Fancybox.show([
		{
			src: "#popup-form-coupon",
			type: "inline",
			dragToClose: false,
			backdropClick: false,
		},
	]);
}, 3000);

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
		on: {
			done: () => {
				initTechnologyTabs(); // khởi động sau khi popup hiện ra
			},
		},
	});
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
