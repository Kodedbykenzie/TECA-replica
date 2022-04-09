const affordcalculatorBody = document.getElementById(
    "afford-calculator-body"
);
const mobile_nav = document.getElementById(
    "mobile-nav"
);
const nav_icon = document.getElementById(
    "nav-icon"
);
const repaymentCalculatorBody = document.getElementById(
    "repayment-calculator-body"
);
repaymentCalculatorBody.classList.add("change");

function repaymentClick(x) {
    repaymentCalculatorBody.classList.add("change");
    affordcalculatorBody.classList.remove("change");
}

function toggleNav(elem) {
    nav_icon.classList.toggle("change");
    mobile_nav.classList.toggle("visibility");
}

function affordClick(x) {
    repaymentCalculatorBody.classList.remove("change");
    affordcalculatorBody.classList.add("change");
}

function compress(x) {
    const parent = document.getElementById(x["parent"]);
    parent.removeAttribute("type");
    console.log(parent.children[0].children[1].classList.add("invisibility"));
    console.log(
        parent.children[0].children[2].classList.remove("invisibility")
    );
    console.log(parent.children[1].classList.add("invisibility"));
}

function expand(x) {
    const parent = document.getElementById(x["parent"]);
    parent.setAttribute("type", "active");
    console.log(
        parent.children[0].children[1].classList.remove("invisibility")
    );
    console.log(parent.children[0].children[2].classList.add("invisibility"));
    console.log(parent.children[1].classList.remove("invisibility"));
}