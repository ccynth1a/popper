import { L as ensure_array_like, M as attr, N as stringify, G as escape_html, n as pop, p as push } from './index-L7U50A5y.js';

function Componenetnavigatorbar($$payload, $$props) {
  push();
  let activepage = 0;
  let activetab = [
    { label: "Popper", id: 0 },
    { label: "Leaderboard", id: 1 },
    { label: "Settings", id: 2 }
  ];
  const each_array = ensure_array_like(activetab);
  $$payload.out += `<main class="theme-default popper-main-style"><div class="componentloader"><div class="nav"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tab = each_array[$$index];
    $$payload.out += `<button${attr("class", `navbutton ${stringify(activepage == tab.id ? "active" : "")} `)}>${escape_html(tab.label)}</button>`;
  }
  $$payload.out += `<!--]--></div> <div class="container">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="username-entry"><input type="text" id="username-entry-field"></div>`;
  }
  $$payload.out += `<!--]--></div></div></main>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<main>`;
  Componenetnavigatorbar($$payload);
  $$payload.out += `<!----></main>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-qxPQ3Gvi.js.map
