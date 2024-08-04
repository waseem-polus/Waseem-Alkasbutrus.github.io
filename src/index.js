const SKILLS = [
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "React JS", icon: "React" },
    { name: "React Native", icon: "React" },
    { name: "C#", icon: "CS" },
    { name: "PHP" },
    { name: "MySQL" },
    { name: "Unity" },
    { name: "C" },
    { name: "Java" },
    { name: "Linux" },
];

const PROJECTS = [
    {
        github: "waseem-polus/GMTK-Game-Jam-2022",
        img: "RollAbility",
        techStack: ["Unity", "C#"],
        name: "RollAbility",
        description:
            "Entry for GMTK Game Jam 2022. Single-player, 2D plaformer",
    },
    {
        github: "waseem-polus/CloudCast",
        img: "CloudCast",
        techStack: ["React Native", "JS", "Expo"],
        name: "CloudCast",
        description: "Real-time global weather app",
    },
    {
        github: "mavs-octagon/Temple",
        img: "Octapoints",
        techStack: ["React Native", "JS", "C"],
        name: "Octapoints",
        description: "NFC attendance-based point-awarding system",
    },
    {
        github: "waseem-polus/Nexus_Light",
        img: "NexusLight",
        techStack: ["Unity", "C#"],
        name: "Nexus Light",
        description: "Single-player, 2D speedrunning platformer",
    },
    {
        github: "waseem-polus/WebPoker",
        img: "MavPoker",
        techStack: ["Java", "JS", "HTML", "CSS"],
        name: "MavPoker",
        description: "Web based multiplayer 5-card draw poker game",
    },
];

const skillSection = document.querySelector("#skill-section");
const projectSection = document.querySelector("#project-section");

SKILLS.forEach(
    (skill) =>
        (skillSection.innerHTML += `
            <wasm-skill
                name="${skill.name}"
                img="${skill.icon ? skill.icon : skill.name}.svg"
            ></wasm-skill>
        `),
);

PROJECTS.forEach(
    (project) =>
        (projectSection.innerHTML += `
            <wasm-project
                name="${project.name}"
                desc="${project.description}"
                tech="${project.techStack.join(",")}"
                url="https://github.com/${project.github}"
                img="${project.img}.png"
            ></wasm-project>
        `),
);
