class ProjectCard extends HTMLElement {
    static observedAttributes = ["name", "desc", "url", "img", "tech"];

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });

        this.ASSETS = "./assets";
        this.BASE_PATH = "./src/components/project";
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            ${this.getHead()}
            ${this.getHTML()}
        `;

        this.loadProjectImg();
    }

    getHead() {
        return `
        <link rel="stylesheet" href="${this.BASE_PATH}/project.css">
        <link rel="stylesheet" href="${this.BASE_PATH}/project-mobile.css">
        <link rel="stylesheet" href="./src/reset.css">
        `;
    }

    getHTML() {
        return `
        <a class="project-link-container" target="_blank" href="${this.getAttribute("url") ?? ""}">
          <div class="project-card">
            <div class="project-card-black-area">
              <div>
                <div class="project-card-top-line">
                  <h4 class="project-card-name">${this.getAttribute("name") ?? "missing name"}</h4>
                  <ul class="project-card-chip-list">
                    ${this.getTechArray()
                        .map(
                            (tech) => `
                        <li class="project-card-chip">
                          <span class="project-card-chip-cirle"></span>
                          ${tech.trim()}
                        </li>
                      `,
                        )
                        .join("")}
                  </ul>
                </div>
                <p class="prject-card-description">
                  ${this.getAttribute("desc") ?? "missing description"}
                </p>
              </div>
            </div>
          </div>
        </a>
        `;
    }

    loadProjectImg() {
        const imgPath = `${this.ASSETS}/project-images/${this.getAttribute("img") ?? ""}`;
        const projectCard = this.shadow.querySelector(".project-card");

        projectCard.style.backgroundImage = `url("${imgPath}")`;
    }

    getTechArray() {
        const techStr = this.getAttribute("tech") ?? "";
        return techStr.split(",");
    }
}

customElements.define("wasm-project", ProjectCard);
