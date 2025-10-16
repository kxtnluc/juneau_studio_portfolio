<script lang="ts">
    import data from "$lib/details.json";
    import Button from "../components/Button.svelte";
    import MiscIcons from "../components/icons/MiscIcons.svelte";
    import CodeLanguageIcons from "../components/icons/CodeLanguageIcons.svelte";
    import { goto } from "$app/navigation";

    const author = data[0].author;
    const resume = data[0].resume;
</script>

<main class="h-main">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-text">
            <div class="hero-header">
                <h1 class="hero-name">
                    <span class="name-highlight">{author.full_name}</span>
                </h1>
                <div class="hero-title">
                    <span class="title-first">
                        {author.first_word.toUpperCase()}
                    </span>
                    <span class="title-second">
                        {author.second_word.toUpperCase()}
                    </span>
                </div>
            </div>

            <p class="hero-about">{author.about}</p>

            <div class="hero-footer">
                <div class="hero-buttons">
                    <a href="/#work-and-projects">
                        <Button size="l">Projects</Button>
                    </a>
                    <a href="/contact-me">
                        <Button size="l">Contact</Button>
                    </a>
                </div>

                <div class="hero-socials">
                    <a
                        href="/contact-me"
                        aria-label="Email"
                        class="social-icon"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                        </svg>
                    </a>
                    <a
                        href={author.work_links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        class="social-icon"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/kxtnluc"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        class="social-icon"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608.803.056 1.225.828 1.225.828.893 1.534 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="hero-collage">
            <div class="collage-item item-1"><a href="/resume" >Digital Resume</a></div>
            <div class="collage-item item-2"><a href="/skills">Skills</a></div>
            <div class="collage-item item-3"><a href="/projects">Projects</a></div>
            <div class="collage-item item-4"><a href="/">About</a></div>
            <div class="collage-item item-5"><a href="/contact-me">Contact Me</a></div>
        </div>
    </section>

    <!-- Work & Projects Section -->
    <section class="work-projects-section" id="work-and-projects">
        <div class="section-headers">
            <div class="work-header">
                <div class="header-icon">
                    <MiscIcons type="work" size="l" />
                </div>
                <h2>Work Experience</h2>
            </div>
            <div class="projects-header">
                <h2>Projects</h2>
                <div class="header-icon">
                    <MiscIcons type="cpu" size="l" />
                </div>
            </div>
        </div>

        <div class="work-projects-grid">
            <!-- Work Experience -->
            <div class="work-column">
                {#each resume.work_experience as work}
                    <article class="work-item">
                        <div class="item-header">
                            <div class="head-pp">
                                <div class="item-icon">
                                    <MiscIcons type={work.icon} size="l" />
                                </div>
                                <h3>{work.role_title}</h3>
                            </div>
                            <div class="header-secondary">
                                <span class="company">{work.company}</span>
                                <span class="date-range"
                                    >{work.from} - {work.to}</span
                                >
                            </div>
                        </div>
                        <p class="item-description">{work.about}</p>
                        <div class="item-skills">
                            {#each resume.primary_skills.filter( (ps) => work.skills.includes(ps.shorthand), ) as skill}
                                <div class="skill-badge">
                                    <CodeLanguageIcons
                                        size="s"
                                        language={skill.shorthand}
                                    />
                                </div>
                            {/each}
                        </div>
                    </article>
                {/each}
            </div>

            <!-- Projects -->
            <div class="projects-column">
                {#each resume.projects as project}
                    <article class="project-item">
                        <div class="item-header">
                            <div class="head-pp">
                                <div
                                    class="item-icon"
                                    class:star={project.starProject}
                                >
                                    <MiscIcons type={project.icon} size="l" />
                                </div>
                                <h3 class:star={project.starProject}>
                                    <a
                                        href="/projects/{project.title.toLowerCase()}"
                                        >{project.title}</a
                                    >
                                </h3>
                            </div>
                            <div class="header-secondary">
                                <span class="date-range"
                                    >{project.from} - {project.to}</span
                                >
                                <span class="platform">{project.platform}</span>
                            </div>
                        </div>
                        <p class="item-description">{project.about}</p>
                        <div class="item-skills">
                            {#each resume.primary_skills.filter( (ps) => project.skills.includes(ps.shorthand), ) as skill}
                                <div class="skill-badge">
                                    <CodeLanguageIcons
                                        size="s"
                                        language={skill.shorthand}
                                    />
                                </div>
                            {/each}
                        </div>
                    </article>
                {/each}
            </div>
        </div>
    </section>
    <!-- Education Section -->

    <section class="education-section">
        <div class="section-header">
            <div class="header-icon">
                <MiscIcons type="school" size="l" />
            </div>
            <h2>Education</h2>
        </div>
        <div class="education-content">
            <h3 class="school-name">{resume.education.school_name}</h3>
            <p class="education-about">{resume.education.about_short}</p>
            <div class="foundations-grid">
                {#each resume.education.foundations as foundation, index}
                    <div class="foundation-item" class:even={index % 2 === 0}>
                        <div class="foundation-icon">
                            <MiscIcons type={foundation.image_name} size="l" />
                        </div>
                        <span class="foundation-text"
                            >{foundation.description}</span
                        >
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>

<style>
    /* Base Styles */
    .h-main {
        max-width: 1750px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    section {
        margin-bottom: 5rem;
    }

    .section-header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
        font-size: var(--head-pp, 2rem);
        font-weight: 700;
    }

    .header-icon {
        display: flex;
        align-items: center;
    }

    /* Hero Section */
    .hero-section {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        background-color: var(--color-contrast, #fff);
        border-radius: 2rem;
        padding: 2rem;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }

    .hero-text {
        color: var(--color-primary, #1a1a2e);
    }

    .hero-header {
        margin-bottom: 1.5rem;
    }

    .hero-name {
        font-size: clamp(1.5rem, 4vw, 2rem);
        margin-bottom: 0.5rem;
    }

    .name-highlight {
        color: var(--color-orange, #ff6b35);
    }

    .hero-title {
        font-size: clamp(2.5rem, 8vw, 4rem);
        font-weight: 900;
        line-height: 1;
    }

    .title-first {
        display: block;
    }

    .title-second {
        display: block;
        color: var(--color-orange, #ff6b35);
    }

    .hero-about {
        font-style: italic;
        font-size: clamp(1rem, 2vw, 1.25rem);
        margin: 1.5rem 0;
        line-height: 1.6;
    }

    .hero-footer {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .hero-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .hero-socials {
        display: flex;
        gap: 1rem;
    }

    .social-icon {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary, #1a1a2e);
        color: var(--color-contrast, #fff);
        border-radius: 50%;
        padding: 0.75rem;
        transition: opacity 0.3s;
    }

    .social-icon:hover {
        opacity: 0.8;
    }

    .social-icon svg {
        width: 100%;
        height: 100%;
    }

    /* Hero Collage */
    .hero-collage {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 1rem;
        grid-template-areas:
            "item-1 item-1"
            "item-2 item-3"
            "item-4 item-5";
        min-height: 300px;

        @media (max-width: 384px) {
            display: none;
            
        }
    }

    .collage-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        color: var(--color-contrast, #fff);
        background-color: var(--color-wood, #8b5a3c);
        text-align: center;
        border-radius: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
        transition:
            transform 0.3s,
            opacity 0.3s;
    }

    .collage-item:hover {
        transform: scale(1.02);
        opacity: 0.9;
    }

    .item-1 {
        grid-area: item-1;
        background: linear-gradient(
                320deg,
                rgba(51, 51, 51, 1),
                rgba(68, 68, 68, 0.6)
            ),
            url("$lib/resume-page.png");
    }
    .item-2 {
        grid-area: item-2;

        background: linear-gradient(
                320deg,
                rgba(51, 51, 51, 1),
                rgba(68, 68, 68, 0.6)
            ),
            url("$lib/skills-page.png");

    }
    .item-3 {
        grid-area: item-3;

        background: linear-gradient(
                320deg,
                rgba(51, 51, 51, 1),
                rgba(68, 68, 68, 0.6)
            ),
            url("$lib/github-overlay.png");
    }
    .item-4 {
        grid-area: item-4;
    }
    .item-5 {
        grid-area: item-5;

        background: linear-gradient(
                320deg,
                rgba(51, 51, 51, 1),
                rgba(68, 68, 68, 0.6)
            ),
            url("$lib/contact-me-page.png");
    }

    .item-1,
    .item-2,
    .item-3,
    .item-4,
    .item-5 {
        background-size: cover; /* Make image fill the box */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Avoid repeating */
        border-radius: 8px;
        transition: 300ms;
        color: white;
        position: relative;
        cursor: pointer;
    }

    /* Education Section */
    .education-content {
        background-color: var(--color-contrast, #fff);
        color: var(--color-primary, #1a1a2e);
        border-radius: 2rem;
        padding: 2rem;
        border: 5px solid var(--color-primary-darker, #0f0f1e);
    }

    .school-name {
        font-size: var(--header-secondary, 1.75rem);
        margin-bottom: 1rem;
    }

    .education-about {
        display: inline-block;
        background-color: var(--color-contrast-lighter, #f5f5f5);
        padding: 0.75rem 1.5rem;
        border-radius: 1.5rem;
        font-style: italic;
        margin-bottom: 2rem;
    }

    .foundations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .foundation-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.5rem;
        background-color: var(--color-orange, #ff6b35);
        color: var(--color-contrast, #fff);
        border-radius: 2rem;
        font-weight: 600;
        transition: opacity 0.3s;
    }

    .foundation-item:hover {
        opacity: 0.85;
    }

    .foundation-item.even {
        border-top-left-radius: 3rem;
        border-bottom-left-radius: 3rem;
    }

    .foundation-item:not(.even) {
        flex-direction: row-reverse;
        text-align: right;
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
    }

    /* Work & Projects Section */
    .section-headers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        font-size: var(--header-primary, 2rem);
        font-weight: 700;
    }

    .work-header,
    .projects-header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .work-projects-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .work-item,
    .project-item {
        margin-bottom: 3rem;
        position: relative;
    }

    .item-header {
        margin-bottom: 1rem;
    }

    .item-header::before {
        content: "";
        position: absolute;
        left: 0;
        top: -1rem;
        width: 30%;
        height: 8px;
        background-color: var(--color-primary-darker, #0f0f1e);
        border-radius: 1rem;
    }

    .project-item .item-header::before {
        left: auto;
        right: 0;
    }

    .head-pp {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--color-orange, #ff6b35);
        margin-bottom: 0.5rem;
    }

    .head-pp-right {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 1rem;
        color: var(--color-orange, #ff6b35);
        margin-bottom: 0.5rem;
        flex-direction: row-reverse;
    }

    .head-pp h3 {
        font-size: var(--header-secondary, 1.5rem);
        margin: 0;
    }

    .head-pp h3.star,
    .item-icon.star {
        color: var(--color-yellow, #ffd700);
    }

    .head-pp a {
        color: inherit;
        text-decoration: none;
        transition: background-color 0.3s;
        padding: 0.25rem 0.75rem;
        border-radius: 0.5rem;
    }

    .head-pp a:hover {
        background-color: var(--color-contrast, #fff);
    }

    .header-secondary {
        display: flex;
        gap: 1rem;
        font-size: 0.95rem;
        flex-wrap: wrap;
    }

    .company,
    .platform {
        font-size: var(--header-tertiary, 1.25rem);
        font-weight: 600;
    }

    .date-range {
        font-style: italic;
        opacity: 0.8;
    }

    .item-description {
        line-height: 1.6;
        margin: 1rem 0;
    }

    .work-column .item-description {
        margin-right: 25%;
    }

    .projects-column .item-description {
        margin-left: 25%;
        text-align: right;
    }

    .item-skills {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    .projects-column .item-skills {
        justify-content: flex-end;
    }

    .projects-column .head-pp {
        flex-direction: row-reverse;
    }

    .projects-column .header-secondary {
        flex-direction: row-reverse;
    }

    /* Tablet Styles */
    @media (min-width: 768px) {
        .h-main {
            padding: 0 2rem;
        }

        .hero-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .foundations-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .hero-collage {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
                "item-1 item-1 item-2"
                "item-1 item-1 item-3"
                "item-4 item-5 item-5";
            min-height: 400px;
        }
    }

    /* Desktop Styles */
    @media (min-width: 1024px) {
        .hero-section {
            grid-template-columns: 1fr 1fr;
            padding: 2rem;
        }

        .work-projects-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
    }

    /* Mobile Adjustments */
    @media (max-width: 767px) {
        .item-header::before {
            width: 50%;
        }

        .work-column .item-description,
        .projects-column .item-description {
            margin: 1rem 0;
            text-align: left;
        }

        .projects-column .item-skills {
            justify-content: flex-start;
        }

        .projects-column .head-pp {
            flex-direction: row;
        }

        .projects-column .header-secondary {
            flex-direction: row;
        }

        .section-headers {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }

        .foundations-grid {
            grid-template-columns: 1fr;
        }

        .foundation-item {
            border-radius: 2rem !important;
        }
    }

    .collage-item a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 2; /* Above the background overlays */
}
</style>
