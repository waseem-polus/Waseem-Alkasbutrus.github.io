class SkillCard extends HTMLElement {
    static observedAttributes = ["name", "img"];

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });

        this.ASSETS = "./assets";
        this.BASE_PATH = "./src/components/skill";
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            ${this.getHead()}
            ${this.getHTML()}
        `;
    }

    getHead() {
        return `
        <link rel="stylesheet" href="${this.BASE_PATH}/skill.css">
        <link rel="stylesheet" href="${this.BASE_PATH}/skill-mobile.css">
        <link rel="stylesheet" href="./src/reset.css">
        `;
    }

    getHTML() {
        return `
        <div class="skill-card">
          <img class="skill-card-image" src="${this.ASSETS}/${this.getAttribute("img")}" />
          <div class="skill-card-name-holder">
            <p class="skill-card-name">${this.getAttribute("name")}</p>
          </div>
        </div>
        `;
    }
}

customElements.define("wasm-skill", SkillCard);
