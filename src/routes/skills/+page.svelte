<script>
    // Number of grid items, easily expandable
    import data from "$lib/details.json";
    import CodeLanguageIcons from "../../components/icons/CodeLanguageIcons.svelte";
    import MiscIcons from "../../components/icons/MiscIcons.svelte";
    const skills = data[0].resume.primary_skills;
</script>

<main class="skill-main">
    <section class="section-1">
        <h2 class="s1-h">
            <span class="h-icon"><MiscIcons type="box" size="l" /></span> Frameworks
        </h2>
        <div class="frameworks">
            <div class="framework-item">
                <CodeLanguageIcons language="net" size="l" />
            </div>
            <div class="framework-item">
                <CodeLanguageIcons language="react" size="l" />
            </div>
            <div class="framework-item">
                <CodeLanguageIcons language="blazor" size="l" />
            </div>
            <div class="framework-item">
                <CodeLanguageIcons language="svelte" size="l" />
            </div>
            <div class="framework-item">
                <CodeLanguageIcons language="efc" size="l" />
            </div>
        </div>
    </section>
    <section class="section-2">
        <div class="section-2-headers">
            <h2 class="s2-h">
                <span class="h-icon"><MiscIcons type="code" size="l" /></span> Frontend
            </h2>
            <h2 class="s2-h h-right">
                Backend <span class="h-icon-right"
                    ><MiscIcons type="database" size="l" />
                </span>
            </h2>
        </div>
        <div class="languages">
            <div class="front-end">
                <div class="frontend-item" style="grid-area: ts;">
                    <CodeLanguageIcons language="ts" size="l" />
                </div>
                <div class="frontend-item" style="grid-area: js;">
                    <CodeLanguageIcons language="js" size="l" />
                </div>
                <div class="frontend-item" style="grid-area: html;">
                    <CodeLanguageIcons language="html" size="l" />
                </div>
                <div class="frontend-item" style="grid-area: css;">
                    <CodeLanguageIcons language="css" size="l" />
                </div>
                <div class="frontend-item" style="grid-area: csharp;">
                    <CodeLanguageIcons language="csharp" size="l" />
                </div>
            </div>
            <div class="back-end">
                <div class="backend-item" style="grid-area: csharp;">
                    <CodeLanguageIcons language="csharp" size="l" />
                </div>
                <div class="backend-item" style="grid-area: aspnet;">
                    <CodeLanguageIcons language="aspnet" size="l" />
                </div>
                <div class="backend-item" style="grid-area: sql;">
                    <CodeLanguageIcons language="sql" size="l" />
                </div>
                <div class="backend-item" style="grid-area: postgresql;">
                    <CodeLanguageIcons language="postgresql" size="l" />
                </div>
                <div class="backend-item" style="grid-area: sqlite;">
                    <CodeLanguageIcons language="sqlite" size="l" />
                </div>
            </div>
        </div>
    </section>
    <section class="section-3">
        <h2 class="s2-h">
            <span class="h-icon"><MiscIcons type="api" size="l" /></span> External
            APIs
        </h2>
        <div class="apis">
            <a href="https://stripe.com" target="_blank">
                <div class="api-item" style="grid-area: stripe;">
                    <CodeLanguageIcons language="stripe" size="l" />
                </div>
            </a>
            <a href="https://plaid.com" target="_blank">
                <div class="api-item" style="grid-area: plaid;">
                    <CodeLanguageIcons language="plaid" size="l" />
                </div>
            </a>
            <a href="https://books.google.com/" target="_blank">
                <div class="api-item" style="grid-area: plaid;">
                    Google Books
                </div>
            </a>
        </div>
    </section>
</main>

<style>
    .s1-h,
    .s2-h {
        margin-top: 2rem;
        margin-bottom: 1rem;
        margin-left: 4%;
        margin-right: 4%;
        display: flex;
        align-items: center;

        @media (max-width: 600px) {
            justify-content: center;
        }

        .h-icon {
            @media (max-width: 600px) {
                display: none;
            }
            margin-right: 0.5em;
        }
    }

    .frameworks {
        background-color: var(--color-primary-darker);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 3em;
        padding: clamp(1rem, 5vw, 2rem) 0;
    }

    .section-2-headers {
        display: flex;
        justify-content: space-between;

        .h-icon-right {
            @media (max-width: 600px) {
                display: none;
            }
            margin-left: 0.5em;
        }

        .h-right {
            @media (max-width: 600px) {
                display: none;
            }
        }
    }

    .languages {
        display: flex;
        justify-content: space-between;
        @media (max-width: 1300px) {
            flex-direction: column;
            align-items: center;
        }

        margin-bottom: 1rem;
    }

    .front-end,
    .back-end {
        padding: 0.5em;
        background-color: var(--color-primary-darker);
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        margin-left: 8%;
        margin-right: 8%;
        width: 33%;
        height: 35rem;
        @media (max-width: 1300px) {
            width: 80%;
            margin-top: 2rem;
            height: auto;
        }
    }

    .front-end {
        grid-template-areas:
            "js js html"
            "js js css"
            "ts ts csharp";

        @media (max-width: 380px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                "js"
                "ts"
                "css"
                "html"
                "csharp";
        }
    }

    .frontend-item {
        background-color: var(--color-primary);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .back-end {
        grid-template-areas:
            "aspnet csharp csharp"
            "sql csharp csharp"
            "sqlite postgresql postgresql";

        @media (max-width: 380px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                "csharp"
                "aspnet"
                "sql"
                "sqlite"
                "postgresql";
        }
    }

    .backend-item {
        background-color: var(--color-primary);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .apis {
        background-color: var(--color-primary-darker);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 3em;
        padding: clamp(1rem, 5vw, 2rem) 0;
    }

    /* Hover Effects */
    /* Option 2: Scale & Brighten */
    .frontend-item,
    .backend-item {
        /* ... your existing styles ... */
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background-color 0.3s ease;
    }

    .frontend-item:hover,
    .backend-item:hover {
        transform: translateY(-5px) rotate(2deg);
        box-shadow: 0 12px 24px var(--color-wood);
        background-color: var(--color-primary-darker);

    }
</style>
