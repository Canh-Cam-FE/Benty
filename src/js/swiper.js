import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Scrollbar } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swiperHomeBannerMobile();
	swiperHome4();
	swiperHome5();
	swiperHome6();
	swiperHome7();
	swiperAbout4();
	swiperAbout5();
}
function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
	});
}

function swiperHomeBannerMobile() {
	const swiperHomeBannerMobile = new Swiper(".swiper-home-banner-mobile", {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		speed: 1200,
		loop: true,

		autoplay: {
			delay: 4500,
		},
		navigation: {
			nextEl: ".home-1-mobile .btn-next",
			prevEl: ".home-1-mobile .btn-prev",
		},
	});
}

function swiperHome4() {
	const swiper = new Swiper(".home-4 .swiper", {
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Autoplay, Navigation, Scrollbar], // Đảm bảo đã import EffectFade

		grabCursor: true,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true,
		},
		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,
		navigation: {
			nextEl: ".news-detail-2 .btn-next",
			prevEl: ".news-detail-2 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
}

function swiperHome5() {
	const swiper = new Swiper(".home-5 .swiper", {
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Autoplay, Scrollbar], // Đảm bảo đã import EffectFade

		grabCursor: true,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true,
		},
		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},

			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}

function swiperHome6() {
	const swiper = new Swiper(".home-6 .swiper", {
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Autoplay, Scrollbar], // Đảm bảo đã import EffectFade

		grabCursor: true,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true,
		},
		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},

			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}

function swiperHome7() {
	const swiper = new Swiper(".home-7 .swiper", {
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Autoplay, Navigation], // Đảm bảo đã import EffectFade

		grabCursor: true,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true,
		},
		navigation: {
			nextEl: ".home-7 .btn-next",
			prevEl: ".home-7 .btn-prev",
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		speed: 1500,

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
}

function swiperAbout4() {
	const swiper = new Swiper(".about-4 .swiper", {
		modules: [Autoplay],
		loop: true,
		slidesPerView: "auto",
		centeredSlides: true,
		grabCursor: true,
		spaceBetween: 16,
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		on: {
			slideChangeTransitionEnd: function () {
				// Kích hoạt reflow để CSS áp dụng lại hiệu ứng
				const activeSlide = document.querySelector(".swiper-slide-active");
				if (activeSlide) {
					activeSlide.style.animation = "none";
					void activeSlide.offsetWidth; // Trigger reflow
					activeSlide.style.animation = null;
				}
			},
		},
	});
}

function swiperAbout5() {
	const swiper = new Swiper(".about-5 .swiper", {
		slidesPerView: 3,
		spaceBetween: 12,
		modules: [Autoplay, Navigation],
		navigation: {
			nextEl: ".about-5 .btn-next",
			prevEl: ".about-5 .btn-prev",
		},
		breakpoints: {
			768: { slidesPerView: "auto", spaceBetween: 16 },

			1200: { slidesPerView: "auto", spaceBetween: 0 },
		},
		on: {
			init: function () {
				const slides = document.querySelectorAll(".about-5 .swiper-slide");

				slides.forEach((slide) => {
					slide.addEventListener("click", () => {
						const id = slide.getAttribute("data-id");

						// Active step class
						slides.forEach((s) => $(s).find(".step").removeClass("active"));
						$(slide).find(".step").addClass("active");

						// Fade content
						const contents = $(".about-5 .content");
						contents.filter(".active").fadeOut(300, function () {
							$(this).removeClass("active");

							contents.each(function () {
								if ($(this).data("id") == id) {
									$(this).fadeIn(200).addClass("active");
								}
							});
						});

						// Slide to correct index
						const realIndex = parseInt(slide.getAttribute("data-swiper-slide-index"));
						swiper.slideToLoop(realIndex);
					});
				});
			},
		},
	});
}
