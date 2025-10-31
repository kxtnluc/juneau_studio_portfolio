<script>
    // @ts-nocheck
    export let data;
    import hearth_pic from "$lib/hearth_snapshot.png";
    import js_pic from "$lib/juneaustudio_snapshot.png";
    import brand_pic from "$lib/brand.png";
    import empire_pic from "$lib/jelly-fin-project.png";
    import details from "$lib/details.json";
    import Button from "../../../components/Button.svelte";
    import MiscIcons from "../../../components/icons/MiscIcons.svelte";

    const p = details[0].resume.projects.find(
        (p) => p.title.toLowerCase() == data.projectName,
    );

    let picToUse = hearth_pic;

    if (data.projectName == "hearth") {
        picToUse = hearth_pic;
    } else if (data.projectName == "portfolio website") {
        picToUse = js_pic;
    } else if (data.projectName == "empire nas") {
        picToUse = empire_pic;
    } else {
        picToUse = brand_pic;
    }

    // Dynamic Image Getter
    async function getImage(path) {
        try {
            const modules = import.meta.glob("$lib/**/*.{png,jpg,jpeg,webp}", {
                eager: true,
            });
            // Convert path like "$lib/image.png" to actual module path
            const modulePath = path.replace("$lib", "/src/lib");

            for (const [key, module] of Object.entries(modules)) {
                if (key.includes(modulePath.split("/").pop())) {
                    return module.default;
                }
            }
        } catch (e) {
            console.error("Image not found:", path);
            return null;
        }
    }
</script>

<main class="project-main">
    <section class="project-hero">
        <div class="hero-content">
            <h1 class="project-title">
                {p?.title.toUpperCase()}
            </h1>
            <div class="project-meta">
                <span class="platform">{p?.platform}</span>
                <span class="status">{p?.status.toUpperCase()}</span>
            </div>
            <p class="project-description">
                {p?.about_long}
            </p>
            <div class="project-actions">
                <!-- <Button icon="playbtn" icon_placement="after">See a Demo</Button> --->
                 {#if p.link != ""}
                    <Button
                        icon="github"
                        icon_placement="after"
                        size="l"
                        onClick={() => window.open(p?.link, "_blank")}
                        >Repository</Button
                    >
                 {/if}
            </div>
        </div>
        <div class="hero-image">
            <div class="image-container">
                <img
                    src={picToUse}
                    alt="{p?.title} Screenshot"
                    class="screenshot"
                />
            </div>
        </div>
    </section>

    <section class="changelog-section">
        <div class="section-header">
            <div class="header-icon">
                <MiscIcons type="codefile" size="l" />
            </div>
            <h2 class="header-text">Changelog</h2>
        </div>
        <div class="changelog-content">
            {#if p && p.changelog && p.changelog.beta_versions}
                {#each [...p.changelog.beta_versions].sort((a, b) => new Date(b.release_date) - new Date(a.release_date)) as log}
                    <article class="changelog-entry">
                        <div>
                            <div class="entry-header">
                                <span class="version">{log.version}</span>
                                <h3 class="entry-title">{log.title}</h3>
                            </div>
                            <ul class="entry-list">
                                {#each log.log as item}
                                    <li class="list-item">{item}</li>
                                {/each}
                            </ul>
                        </div>
                        {#await getImage(log.imgPath) then imgSrc}
                            {#if imgSrc}
                                <div class="entry-img-container">
                                    <div class="entry-img-container">
                                        <img
                                            src={imgSrc}
                                            alt="{p?.title} - {log.title}"
                                            class="screenshot"
                                        />
                                    </div>
                                </div>
                            {/if}
                        {/await}
                    </article>
                {/each}
            {/if}
        </div>
    </section>
</main>

<style>
    .project-main {
        max-width: 1600px;
        margin: 0 auto;
    }

    /* Hero Section */
    .project-hero {
        display: grid;
        grid-template-columns: 1fr;
        background-color: var(--color-contrast, #fff);
        border-radius: 2rem;
        border: 6px solid var(--color-yellow, #ffd700);
        color: var(--color-primary, #1a1a2e);
    }

    .hero-content {
        display: flex;
        flex-direction: column;
    }

    .project-title {
        font-size: clamp(2rem, 6vw, 4rem);
        font-weight: 900;
        line-height: 1.1;
        margin: 0;
    }

    .project-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .platform {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        color: var(--color-orange, #ff6b35);
        font-weight: 600;
    }

    .status {
        background-color: var(--color-wood, #8b5a3c);
        color: var(--color-contrast-lighter, #f5f5f5);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: clamp(0.75rem, 2vw, 1rem);
        font-weight: 600;
        white-space: nowrap;
    }

    .project-description {
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.6;
        margin: 0;
    }

    .project-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    /* Hero Image */
    .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-container {
        width: 100%;
        max-width: 600px;
        border-radius: 1rem;
        border: 6px solid var(--color-wood, #8b5a3c);
        background-color: var(--color-wood, #8b5a3c);
        overflow: hidden;
    }

    .screenshot {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 0.5rem;
    }

    /* Changelog Section */
    .changelog-section {
        margin: 3rem 0;
    }

    .section-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .header-icon {
        display: flex;
        align-items: center;
    }

    .header-text {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
        font-weight: 700;
        margin: 0;
    }

    .changelog-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .changelog-entry {
        padding-left: 1rem;
        border-left: 4px solid var(--color-yellow, #ffd700);
        display: flex;
        justify-content: space-between;
    }

    .entry-img-container {
        max-width: 30rem;
        border: solid 5px var(--color-primary-darker);
        border-radius: 8px;

        @media (max-width: 900px) {
            max-width: 20rem;
        }

        @media (max-width: 650px) {
            display: none;
        }
    }

    .entry-header {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }

    .version {
        font-size: clamp(1.5rem, 3.5vw, 2.5rem);
        font-weight: 900;
        color: var(--color-yellow, #ffd700);
    }

    .entry-title {
        font-size: clamp(1.25rem, 3vw, 2rem);
        font-weight: 700;
        color: var(--color-yellow, #ffd700);
        margin: 0;
    }

    .entry-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .list-item {
        font-size: clamp(0.95rem, 2vw, 1.1rem);
        font-style: italic;
        padding-left: 1.5rem;
        position: relative;
    }

    .list-item::before {
        content: "—";
        position: absolute;
        left: 0;
        color: var(--color-orange, #ff6b35);
    }

    /* Tablet */
    @media (min-width: 768px) {
        .project-main {
            padding: 2rem;
        }

        .project-hero {
            padding: 3rem;
            margin: 3rem 0;
        }

        .changelog-entry {
            padding-left: 2rem;
        }
    }

    /* Desktop */
    @media (min-width: 1024px) {
        .project-hero {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            border-radius: 2rem;
        }

        .hero-content {
            padding-right: 2rem;
        }

        .image-container {
            max-width: none;
        }
    }

    /* Silly button */
    @media (max-width: 1024px) {
        .project-actions {
            margin-bottom: 1rem;
            display: flex;
            justify-content: center;
        }
    }

    /* Large Desktop */
    @media (min-width: 1400px) {
        .project-hero {
            padding: 2.5rem;
        }
    }

    /* Small Mobile */
    @media (max-width: 480px) {
        .project-main {
            padding: 0.75rem;
        }

        .project-hero {
            padding: 1.5rem;
            border-width: 4px;
            border-radius: 1.5rem;
            gap: 1.5rem;
        }

        .hero-content {
            gap: 1rem;
        }

        .image-container {
            border-width: 4px;
        }

        .section-header {
            gap: 0.75rem;
        }

        .changelog-entry {
            padding-left: 0.75rem;
            border-left-width: 3px;
        }

        .entry-header {
            gap: 0.75rem;
        }
    }

    /* Extra Small Mobile */
    @media (max-width: 350px) {
        .project-hero {
            padding: 1rem;
            border-width: 3px;
        }

        .status {
            padding: 0.4rem 0.75rem;
        }

        .changelog-entry {
            padding-left: 0.5rem;
        }
    }
</style>
