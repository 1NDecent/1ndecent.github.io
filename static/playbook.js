const Holder = {
	counter: 0
};
function initialChecked() {
	if (localStorage.getItem("initial"))
		document.querySelector("#initial").classList.add("d-none");
}
[...document.querySelectorAll("i")].map(e => { // Process icons.
	e.style.fontStyle = "normal";
	e.classList.add("badge", "text-bg-light");
});
[...document.querySelectorAll(".folder")].map(e => { // Process collapsibles.
	const c = e.parentNode.querySelector("ul");
	c.id = `c${Holder.counter}`;
	c.className = "collapse";
	e.innerHTML = "Expand";
	e.title = "Click to expand/collapse";
	e.classList.replace("text-bg-light", "text-bg-primary");
	e.dataset.bsToggle = "collapse";
	e.setAttribute("href", `#${c.id}`);
	e.setAttribute("role", "button");
	e.setAttribute("aria-controls", c.id);
	e.addEventListener("click", v => {
		const e = v.target;
		e.innerHTML = (e.getAttribute("aria-expanded") === "true") ? "Collapse" : "Expand";
	});
	Holder.counter++;
});
document.addEventListener("DOMContentLoaded", v => {
	[...document.querySelectorAll(".card")].map(e => { // Restyle sections.
		e.classList.add("mt-3", "shadow");
	});
	[...document.querySelectorAll("ul")].map(e => { // Restyle list.
		e.style = "list-style-type: none;";
		e.classList.add("ps-3");
	});
	[...document.querySelectorAll("a")].map(e => { // Restyle hyperlinks and tooltips.
		const l = e.title.length ? "text-primary" : "text-success";
		e.classList.add(l, "link-underline", "link-underline-opacity-0", "link-underline-opacity-50-hover");
		if (!e.title.length)
			return;
		e.dataset.bsHtml = true;
		e.dataset.bsPlacement = "bottom";
		new bootstrap.Tooltip(e);
	});
	document.querySelector("#initial input").addEventListener("click", (v) => {
		localStorage.setItem("initial", v.target.checked);
		initialChecked();
	});
	initialChecked();
});
