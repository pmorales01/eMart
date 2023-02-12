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
        backgroundImage: 'url("../assets/svgs/magnifying-glass.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "60%"
      }
    }
  )))));
}
