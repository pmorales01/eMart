const nav = ReactDOM.createRoot(document.getElementById("main-nav"));
nav.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(Nav, null))
);
function Nav() {
  return /* @__PURE__ */ React.createElement("nav", { className: "navbar navbar-expand-lg bg-primary p-3", "data-bs-theme": "dark" }, /* @__PURE__ */ React.createElement("div", { className: "container-fluid" }, /* @__PURE__ */ React.createElement("a", { className: "navbar-brand", href: "#" }, "Navbar"), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "navbar-toggler",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarTogglerDemo02",
      "aria-controls": "navbarTogglerDemo02",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    },
    /* @__PURE__ */ React.createElement("span", { className: "navbar-toggler-icon" })
  ), /* @__PURE__ */ React.createElement("div", { className: "collapse navbar-collapse", id: "navbarTogglerDemo02" }, /* @__PURE__ */ React.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" }, /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { className: "nav-link active", "aria-current": "page", href: "#" }, "Home")), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { className: "nav-link", href: "#" }, "Link")), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { className: "nav-link disabled" }, "Disabled"))), /* @__PURE__ */ React.createElement("form", { className: "d-flex w-75", role: "search" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "form-control me-2 w-75",
      type: "search",
      placeholder: "Search",
      "aria-label": "Search"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-outline-dark bg-warning p-3",
      type: "submit",
      style: {
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E")`,
        backgroundPosition: "center",
        backgroundSize: "60%",
        backgroundRepeat: "no-repeat"
      }
    }
  )))));
}
