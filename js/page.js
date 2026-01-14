(() => {
	const MESSAGE_BIENVENUE = "Bienvenue sur la fan page de DanMachi !";
	const LINK_TO_PAGE = {
		page1: "bdd/s1.html",
		page2: "bdd/s2.html",
		page3: "bdd/s4.html",
		page4: "bdd/s3.html",
		pro: "bdd/produit.html",
		game: "bdd/game.html",
	};

	const getElement = (id) => document.getElementById(id);
	const getPageIframe = () => document.querySelector("#page > iframe");
	const setPageIframe = (page) => {
		const iframe = getPageIframe();
		if (!iframe) {
			console.warn("Iframe not found for page content.");
			return;
		}
		iframe.src = page;
	};
	const linkPage = (id, page) => {
		const elt = getElement(id);
		if (!elt) {
			console.warn(`Link element not found: ${id}`);
			return;
		}
		elt.addEventListener("click", (event) => {
			if (elt.tagName === "A") {
				event.preventDefault();
			}
			setPageIframe(page);
		});
	};
	const enableMobileMenuToggle = () => {
		const topItems = document.querySelectorAll("nav > ul > li");
		topItems.forEach((item) => {
			const submenu = item.querySelector("ul");
			const trigger = item.querySelector("a");
			if (!submenu || !trigger) {
				return;
			}

			trigger.addEventListener("click", (event) => {
				if (!window.matchMedia("(max-width: 900px)").matches) {
					return;
				}
				event.preventDefault();
				topItems.forEach((other) => {
					if (other !== item) {
						other.classList.remove("is-open");
					}
				});
				item.classList.toggle("is-open");
			});
		});
	};

	document.addEventListener("DOMContentLoaded", () => {
		alert(MESSAGE_BIENVENUE);

		Object.entries(LINK_TO_PAGE).forEach(([id, page]) => {
			linkPage(id, page);
		});

		enableMobileMenuToggle();

		const endLink = getElement("end");
		if (!endLink) {
			console.warn("End link not found: end");
			return;
		}
		endLink.addEventListener("click", (event) => {
			if (endLink.tagName === "A") {
				event.preventDefault();
			}
			location.href = "bdd/end.html";
		});
	});
})();
