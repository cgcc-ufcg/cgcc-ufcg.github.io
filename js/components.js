import { update_page } from './page.js'; 

class CGCC_Filter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                #page_filter {
                    width: 30em;
                }
            </style>
            Filtre a página: <input id="page_filter" placeholder="digite parte do que busca aqui"></input>
        `;
        this.$input = this.querySelector("input");
        this.$input.addEventListener("keyup", () => {
            let pattern = this.$input.value;
            update_page(pattern);
        });
        this.$input.focus();
    }
}

customElements.define("cgcc-filter", CGCC_Filter);
