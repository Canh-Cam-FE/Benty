import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Scrollbar, Thumbs } from "swiper/modules";
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
	swiperCooperation();
	swiperCooperation4();
	swiperCooperation7();
	swiperProductDetail();
	swiperProductRelated();
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

		loop: true,
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
	const slides = document.querySelectorAll(".about-5-slide .swiper-slide");
	const contents = document.querySelectorAll(".about-5 .content");
	let currentIndex = 0;

	const swiper = new Swiper(".about-5-slide .swiper", {
		slidesPerView: 3,
		spaceBetween: 12,
		modules: [Autoplay, Navigation],
		navigation: {
			nextEl: ".about-5-slide .btn-next",
			prevEl: ".about-5-slide .btn-prev",
		},
		breakpoints: {
			768: { slidesPerView: "auto", spaceBetween: 16 },
			1200: { slidesPerView: "auto", spaceBetween: 0 },
		},
	});

	function activateSlide(index) {
		if (index < 0 || index >= slides.length) return;

		console.log("Activate slide", index);

		currentIndex = index;

		// Remove active from all steps
		slides.forEach((slide) => {
			$(slide).find(".step").removeClass("active");
		});

		// Add active to selected
		$(slides[index]).find(".step").addClass("active");

		// Fade content
		const id = slides[index].getAttribute("data-id");
		$(contents)
			.filter(".active")
			.fadeOut(300, function () {
				$(this).removeClass("active");
				$(contents).each(function () {
					if ($(this).data("id") == id) {
						$(this).fadeIn(200).addClass("active");
					}
				});
			});
	}

	// Khởi tạo: active bước đầu tiên
	activateSlide(0);

	// Click từng step
	slides.forEach((slide, index) => {
		slide.addEventListener("click", () => {
			activateSlide(index);
		});
	});

	// Bắt sự kiện nút next
	const nextBtn = document.querySelector(".about-5-slide .btn-next");
	if (nextBtn) {
		nextBtn.addEventListener("click", () => {
			if (currentIndex < slides.length - 1) {
				activateSlide(currentIndex + 1);
			}
		});
	}

	// Bắt sự kiện nút prev (nếu có)
	const prevBtn = document.querySelector(".about-5-slide .btn-prev");
	if (prevBtn) {
		prevBtn.addEventListener("click", () => {
			if (currentIndex > 0) {
				activateSlide(currentIndex - 1);
			}
		});
	}
}

// function swiperCooperation() {
// 	const swiper = new Swiper(".cooperation-4 .swiper", {
// 		slidesPerView: 1,
// 		spaceBetween: 16,
// 		modules: [Autoplay, Navigation],
// 		loop: false, // để index chính xác
// 		speed: 1200,
// 		navigation: {
// 			nextEl: ".cooperation-4 .btn-next",
// 			prevEl: ".cooperation-4 .btn-prev",
// 		},
// 		on: {
// 			slideChange: function () {
// 				updateStepAndImage(swiper.realIndex);
// 			},
// 		},
// 	});

// 	const steps = document.querySelectorAll(".cooperation-4-step .step");
// 	const images = document.querySelectorAll(".col-left .image");

// 	function updateStepAndImage(index) {
// 		// Update active number
// 		steps.forEach((step, i) => {
// 			const number = step.querySelector(".number");
// 			if (i === index) {
// 				number.classList.add("active");
// 			} else {
// 				number.classList.remove("active");
// 			}
// 		});

// 		// Show corresponding image
// 		images.forEach((img, i) => {
// 			img.style.display = i === index ? "block" : "none";
// 		});
// 	}

// 	// Handle click on steps
// 	steps.forEach((step, index) => {
// 		step.addEventListener("click", function () {
// 			const id = parseInt(step.getAttribute("data-id")) || index + 1;
// 			swiper.slideTo(id - 1);
// 		});
// 	});

// 	// Init state
// 	updateStepAndImage(0);
// }

function swiperCooperation() {
	const $stepSwiperEl = document.querySelector(".cooperation-4-slide .swiper");
	const $mainSwiperEl = document.querySelector(".cooperation-4-wrap .swiper");
	const steps = document.querySelectorAll(".cooperation-4-slide .step");
	const images = document.querySelectorAll(".cooperation-4 .col-left .image");
	const progressBar = document.querySelector(".progress-line .progress-inner");

	// Đảm bảo tất cả các phần tử cần thiết đều tồn tại
	if (
		!$stepSwiperEl ||
		!$mainSwiperEl ||
		steps.length === 0 ||
		images.length === 0 ||
		!progressBar
	) {
		return;
	}

	const stepSwiper = new Swiper($stepSwiperEl, {
		slidesPerView: 2,
		spaceBetween: 16,
		modules: [Autoplay, Navigation],
		speed: 1500,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 80,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 140,
			},
		},
	});

	const mainSwiper = new Swiper($mainSwiperEl, {
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Autoplay, Navigation],
		speed: 1200,
		rewind: true,
		navigation: {
			nextEl: ".cooperation-4-wrap .btn-next",
			prevEl: ".cooperation-4-wrap .btn-prev",
		},
		on: {
			slideChange: function () {
				updateStepAndImage(mainSwiper.realIndex);
				stepSwiper.slideTo(mainSwiper.realIndex);
			},
		},
	});

	function updateStepAndImage(index) {
		const minPercent = 6;
		const stepCount = steps.length - 1;
		const increment = (100 - minPercent) / stepCount;
		const percent = minPercent + index * increment;
		progressBar.style.width = `${percent}%`;

		steps.forEach((step, i) => {
			const number = step.querySelector(".number");
			if (number) number.classList.toggle("active", i === index);
		});

		images.forEach((img, i) => {
			img.style.display = i === index ? "block" : "none";
		});
	}

	steps.forEach((step, index) => {
		step.addEventListener("click", () => {
			mainSwiper.slideTo(index);
			stepSwiper.slideTo(index);
		});
	});

	updateStepAndImage(0);
}

function swiperCooperation7() {
	const swiper = new Swiper(".cooperation-7 .swiper", {
		slidesPerView: 2,
		spaceBetween: 16,
		modules: [Autoplay, Navigation], // Đảm bảo đã import EffectFade

		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,

		navigation: {
			nextEl: ".cooperation-7 .btn-next",
			prevEl: ".cooperation-7 .btn-prev",
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

function swiperCooperation4() {
	const swiper = new Swiper(".cooperation-4-slide .swiper", {
		slidesPerView: 2,
		spaceBetween: 16,
		modules: [Autoplay, Navigation],
		speed: 1500,
		rewind: true,
		navigation: {
			nextEl: ".cooperation-4-slide .btn-next",
			prevEl: ".cooperation-4-slide .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 80,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 140,
			},
		},
	});
}

function swiperProductDetail() {
	const colLeft = document.querySelector(".product-detail .col-left");
	if (!colLeft) return;

	const thumbWrapper = colLeft.querySelector(".product-slide-thumbs .swiper");
	const mainWrapper = colLeft.querySelector(".product-slide-main .swiper");
	const prevBtn = colLeft.querySelector(".btn-prev");
	const nextBtn = colLeft.querySelector(".btn-next");

	// ⚠️ Quan trọng: phải kiểm tra tồn tại
	if (!thumbWrapper || !mainWrapper) {
		console.warn("Không tìm thấy swiper element.");
		return;
	}

	const swiperThumb = new Swiper(thumbWrapper, {
		modules: [Autoplay],
		spaceBetween: 12,
		slidesPerView: 3.5,
		freeMode: true,
		observer: true,
		observeParents: true,
		watchSlidesProgress: true,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				direction: "horizontal",
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
				direction: "vertical",
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 29,
				direction: "vertical",
			},
		},
	});

	const swiperDetail = new Swiper(mainWrapper, {
		spaceBetween: 10,
		slidesPerView: 1,
		loop: true,
		observer: true,
		observeParents: true,
		modules: [Autoplay, Navigation, Thumbs],
		thumbs: {
			swiper: swiperThumb,
		},
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		},
	});

	window.productDetailSwiper = {
		element: colLeft,
		swiperThumb,
		swiperDetail,
	};
}

function swiperProductRelated() {
	const swiperPartner = new Swiper(".product-detail-2 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 2,
		spaceBetween: 12,
		speed: 1500, // càng lớn càng chậm
		loop: true,

		autoplay: {
			delay: 4500, // chạy liên tục
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".product-detail-2 .btn-next",
			prevEl: ".product-detail-2 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}
