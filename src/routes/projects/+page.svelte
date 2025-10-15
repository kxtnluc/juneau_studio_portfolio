<script>
    import data from "$lib/details.json";
    import CodeLanguageIcons from "../../components/icons/CodeLanguageIcons.svelte";
    import MiscIcons from "../../components/icons/MiscIcons.svelte";

    const projects = data[0].resume.projects;
</script>

<main class="projects-main">
    <section class="hero-section">
        <h1 class="page-title">
            <span class="title-icon">
                <MiscIcons type="cpu" size="l" />
            </span>
            My Projects
        </h1>
        <p class="page-subtitle">
            A collection of applications I've built to solve real-world problems
        </p>
    </section>

    <section class="projects-grid">
        {#each projects as project}
            <article class="project-card">
                <a href="/projects/{project.title.toLowerCase()}" class="card-link">
                    <div class="card-header">
                        <div class="project-icon" class:star={project.starProject}>
                            <MiscIcons type={project.icon} size="l" />
                        </div>
                        <div class="project-status" class:active={project.status === 'In Development'}>
                            {project.status}
                        </div>
                    </div>

                    <div class="card-body">
                        <h2 class="project-title" class:star={project.starProject}>
                            {project.title}
                            {#if project.starProject}
                                <span class="star-badge">★</span>
                            {/if}
                        </h2>
                        <p class="project-platform">{project.platform}</p>
                        <p class="project-description">{project.about}</p>
                    </div>

                    <div class="card-footer">
                        <div class="tech-stack">
                            {#each project.skills.slice(0, 6) as skill}
                                <div class="tech-icon">
                                    <CodeLanguageIcons language={skill} size="s" />
                                </div>
                            {/each}
                            {#if project.skills.length > 6}
                                <div class="tech-more">+{project.skills.length - 6}</div>
                            {/if}
                        </div>
                        <div class="view-project">
                            View Details →
                        </div>
                    </div>
                </a>
            </article>
        {/each}
    </section>
</main>

<style>
    .projects-main {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2rem;
    }

    /* Hero Section */
    .hero-section {
        text-align: center;
        margin-bottom: 4rem;
        padding: 2rem 1rem;
    }

    .page-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin-bottom: 1rem;
        font-weight: 800;
    }

    .title-icon {
        display: flex;
        align-items: center;
        color: var(--color-orange, #ff6b35);
    }

    .page-subtitle {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        font-style: italic;
        opacity: 0.8;
        max-width: 600px;
        margin: 0 auto;
    }

    /* Projects Grid */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    /* Project Card */
    .project-card {
        background-color: var(--color-contrast, #fff);
        color: var(--color-primary, #1a1a2e);
        border-radius: 1.5rem;
        overflow: hidden;
        border: 3px solid var(--color-primary-darker, #0f0f1e);
    }

    .card-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-decoration: none;
        color: inherit;
        padding: 2rem;
        cursor: pointer;
    }

    /* Card Header */
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
    }

    .project-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 5rem;
        background-color: var(--color-primary, #1a1a2e);
        color: var(--color-contrast, #fff);
        border-radius: 1rem;
        padding: 1rem;
    }

    .project-icon.star {
        background-color: var(--color-yellow, #ffd700);
        color: var(--color-primary, #1a1a2e);
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    }

    .project-icon :global(svg) {
        width: 100%;
        height: 100%;
    }

    .project-status {
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: 600;
        background-color: var(--color-primary-darker, #0f0f1e);
        color: var(--color-contrast, #fff);
    }

    .project-status.active {
        background-color: var(--color-orange, #ff6b35);
    }

    /* Card Body */
    .card-body {
        flex: 1;
        margin-bottom: 1.5rem;
    }

    .project-title {
        font-size: clamp(1.5rem, 3vw, 2rem);
        margin-bottom: 0.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .project-title.star {
        color: var(--color-orange, #ff6b35);
    }

    .star-badge {
        font-size: 1.5rem;
        color: var(--color-yellow, #ffd700);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    .project-platform {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-orange, #ff6b35);
        margin-bottom: 1rem;
    }

    .project-description {
        line-height: 1.6;
        margin-bottom: 1rem;
        opacity: 0.9;
    }

    .project-timeline {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        font-style: italic;
        opacity: 0.7;
    }

    /* Card Footer */
    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding-top: 1.5rem;
        border-top: 2px solid var(--color-primary-darker, #0f0f1e);
        flex-wrap: wrap;
    }

    .tech-stack {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        align-items: center;
    }

    .tech-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
    }

    .tech-icon :global(svg) {
        width: 100%;
        height: 100%;
    }

    .tech-more {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-orange, #ff6b35);
        padding: 0.25rem 0.5rem;
        background-color: var(--color-primary-darker, #0f0f1e);
        border-radius: 0.5rem;
        color: var(--color-contrast, #fff);
    }

    .view-project {
        font-weight: 600;
        color: var(--color-orange, #ff6b35);
        font-size: 1rem;
        white-space: nowrap;
        flex-shrink: 0;
        width: 100%;
        text-align: right;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .projects-main {
            padding: 1rem;
        }

        .hero-section {
            margin-bottom: 2rem;
            padding: 1rem;
        }

        .page-title {
            gap: 0.5rem;
        }

        .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .card-link {
            padding: 1.5rem;
        }

        .title-icon {
            display: none;
        }

        .card-header {
            margin-bottom: 1rem;
        }

        .project-icon {
            width: 4rem;
            height: 4rem;
            padding: 0.75rem;
        }

        .project-status {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
        }

        .card-body {
            margin-bottom: 1rem;
        }

        .project-title {
            font-size: 1.5rem;
        }

        .star-badge {
            font-size: 1.25rem;
        }

        .project-platform {
            font-size: 0.875rem;
        }

        .project-description {
            font-size: 0.95rem;
        }

        .project-timeline {
            font-size: 0.85rem;
        }

        .card-footer {
            padding-top: 1rem;
        }

        .tech-icon {
            width: 2rem;
            height: 2rem;
        }

        .view-project {
            font-size: 0.95rem;
        }
    }

    @media (max-width: 480px) {
        .projects-main {
            padding: 0.75rem;
        }

        .hero-section {
            margin-bottom: 1.5rem;
            padding: 0.5rem;
        }

        .page-title {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
        }

        .page-subtitle {
            font-size: 0.95rem;
        }

        .projects-grid {
            gap: 1.25rem;
        }

        .card-link {
            padding: 1.25rem;
        }

        .project-icon {
            width: 3.5rem;
            height: 3.5rem;
            padding: 0.65rem;
        }

        .project-status {
            padding: 0.35rem 0.65rem;
            font-size: 0.75rem;
        }

        .project-title {
            font-size: 1.35rem;
        }

        .tech-icon {
            width: 1.75rem;
            height: 1.75rem;
        }

        .tech-more {
            font-size: 0.8rem;
            padding: 0.2rem 0.4rem;
        }
    }

    @media (max-width: 350px) {
        .projects-main {
            padding: 0.5rem;
        }

        .page-title {
            font-size: 1.5rem;
        }

        .page-subtitle {
            font-size: 0.875rem;
        }

        .card-link {
            padding: 1rem;
        }

        .card-header {
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .project-icon {
            width: 3rem;
            height: 3rem;
            padding: 0.5rem;
        }

        .card-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }

        .tech-stack {
            width: 100%;
        }

        .view-project {
            width: 100%;
            text-align: left;
        }
    }
</style>