<script>
    // @ts-nocheck

    export let data;
    import hearth_pic from "$lib/hearth_snapshot.png";
    import js_pic from "$lib/juneaustudio_snapshot.png";
    import brand_pic from "$lib/brand.png";
    import details from "$lib/details.json";
    import Button from "../../../components/Button.svelte";
    import MiscIcons from "../../../components/icons/MiscIcons.svelte";

    const p = details[0].resume.projects.find(
        (p) => p.title.toLowerCase() == data.projectName,
    );

    let picToUse = hearth_pic

    if(data.projectName == "hearth")
    {
        picToUse = hearth_pic
    }
    else if (data.projectName == "portfolio website")
    {
        picToUse = js_pic
    }
    else{
        picToUse = brand_pic
    }

</script>

<main>
    <section class="project-section-1">
        <div class="left">
            <div class="title header-title">
                {p?.title.toUpperCase()}
            </div>
            <div class="subtitle header-tertiary">
                <div>
                    {p?.platform}
                </div>
                <div class="status">
                    {p?.status.toUpperCase()}
                </div>
            </div>
            <div class="body">
                {p?.about_long}
            </div>
            <div class="footer">
                <!-- <Button icon="playbtn" icon_placement="after">See a Demo</Button>
                <Button icon="github" icon_placement="after">Repository</Button> -->
            </div>
        </div>
        <div class="right header-primary">
            <div class="img-container">
                <img class="img" src={picToUse} alt="img_01" />
            </div>
        </div>
    </section>
    <section class="project-section-2">
        <div class="left">
            <div class="s2-header">
                <div class="h-icon">
                    <MiscIcons type="codefile" size="l" />
                </div>
                <div class="h-text header-primary">Changelog</div>
            </div>
            <div class="s2-body">
                {#if p && p.changelog && p.changelog.beta_versions}
                    {#each [...p.changelog.beta_versions].sort((a, b) => new Date(b.release_date) - new Date(a.release_date)) as log}
                        <div class="s2-b-header indent">
                            <div class="log-version header-title">
                                {log.version}
                            </div>
                            <div class="log-title header-primary">
                                {log.title}
                            </div>
                        </div>
                        <ul class="s2-b-ul indent-l">
                            {#each log.log as l}
                                <li class="li header-tertiary">
                                    - {l}
                                </li>
                            {/each}
                        </ul>
                    {/each}
                {/if}
            </div>
            <div class="s2-footer"></div>
        </div>
        <div class="right"></div>
    </section>
</main>

<style>
    @media (min-width: 480px) {
        .project-section-1 {
            display: flex;
            justify-content: space-between;
            margin-right: 10%;
            margin-left: 10%;
            margin-top: 2vw;
            background-color: var(--color-contrast);
            border-radius: 100px;
            border: solid 9px var(--color-yellow);
            color: var(--color-primary);
            padding-top: 2vw;
            padding-bottom: 3vw;
            padding-left: 2vw;
            padding-right: 2vw;
            .left {
                .subtitle {
                    display: flex;
                    color: var(--color-orange);
                    .status {
                        background-color: var(--color-wood);
                        color: var(--color-contrast-lighter);
                        padding-left: 0.5vw;
                        padding-right: 0.5vw;
                        border-radius: 1vw;
                        margin-left: 1vw;
                        font-size: 0.5vw;
                        align-self: center;
                    }
                }
                .body {
                    margin-right: 2.5vw;
                    font-size: 1vw;
                }
                .footer {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 1vw;
                    margin-right: 3vw;
                }
            }
            .right {
                .img-container {
                    width: 50vw;
                    border-radius: 15px;
                    border: 0.6vw solid var(--color-wood);
                    background-color: var(--color-wood);

                    .img {
                        border-radius: 0.75vw;
                    }
                }
            }
        }

        .project-section-2 {
            margin-bottom: 2vw;
            .left {
                .s2-header {
                    display: flex;
                    margin-left: 10%;
                    margin-top: 3vw;

                    .h-text {
                        margin-left: 1vw;
                    }
                }
                .s2-body {
                    .s2-b-header {
                        display: flex;
                        .log-title,
                        .log-version {
                            margin-right: 1vw;
                            align-self: flex-end;
                            color: var(--color-yellow);
                        }
                    }
                    .s2-b-ul {
                        .li {
                            font-style: italic;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 480px) {
        .project-section-1 {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            margin-right: 1%;
            margin-left: 1%;
            margin-top: 2vw;
            background-color: var(--color-contrast);
            border-radius: 1vw;
            border: solid 2vw var(--color-yellow);
            color: var(--color-primary);
            padding-top: 2vw;
            padding-bottom: 3vw;
            padding-left: 2vw;
            padding-right: 2vw;
            .left {
                .title {
                    font-size: 12vw;
                }
                .subtitle {
                    display: flex;
                    color: var(--color-orange);
                    .status {
                        background-color: var(--color-wood);
                        color: var(--color-contrast-lighter);
                        padding-left: 0.5vw;
                        padding-right: 0.5vw;
                        border-radius: 1vw;
                        margin-left: 1vw;
                        font-size: 3vw;
                        align-self: center;
                        text-align: center;
                    }
                }
                .body {
                    margin-right: 2.5vw;
                    font-size: 3vw;
                }
                .footer {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 2vw;
                }
            }
            .right {
                align-self: center;
                margin-top: 1rem;
                .img-container {
                    width: 100%;
                    border-radius: 1vw;
                    border: 0.6vw solid var(--color-wood);
                    background-color: var(--color-wood);

                    .img {
                        border-radius: 0.75vw;
                    }
                }
            }
        }

        .project-section-2 {
            margin-bottom: 2vw;
            .left {
                .s2-header {
                    display: flex;
                    margin-left: 2%;
                    margin-top: 3vw;

                    .h-text {
                        font-size: 8vw;
                        align-self: center;
                        margin-top: 1.5vw;
                        margin-left: 1vw;
                    }
                }
                .s2-body {
                    .s2-b-header {
                        display: flex;
                        .log-title,
                        .log-version {
                            font-size: 7vw;
                            margin-right: 1vw;
                            align-self: flex-end;
                            color: var(--color-yellow);
                        }
                    }
                    .s2-b-ul {
                        .li {
                            font-size: 4vw;
                            font-style: italic;
                        }
                    }
                }
            }
        }
    }
</style>
