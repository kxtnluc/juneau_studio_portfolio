<!-- color: https://lospec.com/palette-list/autumn-decay -->

<script lang="ts">
    import data from "$lib/details.json";
    import picture from "$lib/tommy.png";
    import Button from "../components/Button.svelte";
    import ClipboardIcons from "../components/icons/MiscIcons.svelte";
    import CodeLanguageIcons from "../components/icons/CodeLanguageIcons.svelte";
    import JavaScriptIcon from "../components/icons/CodeLanguageIcons.svelte";
    import MiscIcons from "../components/icons/MiscIcons.svelte";
    import { goto } from '$app/navigation';

    const author = data[0].author;
    const resume = data[0].resume;
</script>

<main class="h-main">
    <div class="h-section-one">
        <div class="h-text">
            <div class="h-header">
                <div class="h-hello header-secondary">
                    <span style="color: var(--color-orange);"
                        >{author.full_name}</span
                    >
                </div>
                <div class="h-title header-title">
                    <span class="h-first-word">
                        {author.first_word.toUpperCase()}
                    </span>
                    <span class="h-second-word">
                        {author.second_word.toUpperCase()}
                    </span>
                </div>
            </div>
            <div class="h-body">
                <div class="h-about">
                    {author.about}
                </div>
            </div>
            <div class="h-footer">
                <div class="h-buttons">
                    <a href="/#work-and-projects">
                        <Button
                            size="l"
                        >
                            Projects
                        </Button>
                    </a>
                    <a href="contact-me">
                        <Button
                            size="l"
                            onClick={() => goto('/contact-me')}
                        >
                            Contact
                        </Button>
                    </a>
                </div>
                <div class="h-icons">
                    <div class="h-f-i-icon h-f-i-email">
                        <a href="contact-me" aria-label="contact-me">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                ><g id="SVGRepo_bgCarrier" stroke-width="0"
                                ></g><g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g><g id="SVGRepo_iconCarrier">
                                    <g id="style=linear">
                                        <g id="email">
                                            <path
                                                id="vector"
                                                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                                stroke="#ffffff"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                            <path
                                                id="vector_2"
                                                d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                                                stroke="#ffffff"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="h-f-i-icon h-f-i-linkedin">
                        <a
                            href={author.work_links[0].url}
                            aria-label="linkedin"
                        >
                            <svg
                                class="icon-linkedin"
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="#ffffff"
                                ><g id="SVGRepo_bgCarrier" stroke-width="0"
                                ></g><g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g><g id="SVGRepo_iconCarrier">
                                    <title>linkedin [#161]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g
                                        id="Page-1"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-180.000000, -7479.000000)"
                                            fill="#ffffff"
                                        >
                                            <g
                                                id="icons"
                                                transform="translate(56.000000, 160.000000)"
                                            >
                                                <path
                                                    d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                                                    id="linkedin-[#161]"
                                                >
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g></svg
                            >
                        </a>
                    </div>
                    <div class="h-f-i-icon h-f-i-github">
                        <a
                            href="https://github.com/kxtnluc"
                            aria-label="github"
                        >
                            <svg
                                class="icon-github"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                ><g id="SVGRepo_bgCarrier" stroke-width="0"
                                ></g><g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g><g id="SVGRepo_iconCarrier">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z"
                                        fill="#ffffff"
                                    ></path>
                                </g></svg
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-picture">
            <div class="h-image-container">
                <img alt="tommy" src={picture} />
            </div>
        </div>
    </div>
    <div class="h-section-three">
        <div class="s3-header">
            <div class="s3-education header-primary">
                <div class="s3-e-icon">
                    <MiscIcons size="l" type="school" />
                </div>
                <div class="s3-e-text">Education</div>
            </div>
        </div>
        <div class="s3-body">
            <div class="s3-b-header header-secondary">
                {resume.education.school_name}
            </div>
            <div class="s3-b-body">
                <div class="b-body-about">
                    {resume.education.about_short}
                </div>
                <div class="b-body-points">
                    {#each resume.education.foundations as f}
                        {#if resume.education.foundations.indexOf(f) % 2 === 0}
                            <div class="b-p-point p-even">
                                <div class="p-icon p-i-even">
                                    <MiscIcons type={f.image_name} size="l" />
                                </div>
                                <div class="p-text">
                                    {f.description}
                                </div>
                            </div>
                        {:else}
                            <div class="b-p-point p-odd">
                                <div class="p-text">
                                    {f.description}
                                </div>
                                <div class="p-icon p-i-odd">
                                    <MiscIcons type={f.image_name} size="l" />
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class="s3-b-footer"></div>
        </div>
    </div>
    <div class="h-section-four" id="work-and-projects">
        <div class="s4-header header-primary">
            <div class="s4-h-left">
                <div class="s4-h-icon">
                    <MiscIcons type="work" size="l" />
                </div>
                <div class="s4-h-text">Work Experience</div>
            </div>
            <div class="s4-h-right">
                <div class="s4-h-text">Projects</div>
                <div class="s4-h-icon">
                    <MiscIcons type="cpu" size="l" />
                </div>
            </div>
        </div>
        <div class="s4-body">
            <div class="s4-body-section-1">
                {#each resume.work_experience as w}
                    <div class="s4-body-main">
                        <div class="s4-b-header">
                            <div class="s4-b-h-primary">
                                <div class="p-icon">
                                    <MiscIcons type={w.icon} size="l" />
                                </div>
                                <div class="p-text header-secondary">
                                    {w.role_title}
                                </div>
                            </div>
                            <div class="s4-b-h-secondary">
                                <div class="s-company header-tertiary">
                                    {w.company}
                                </div>
                                <div class="s-date-range">
                                    {w.from} - {w.to}
                                </div>
                            </div>
                        </div>
                        <div class="s4-b-body">
                            <div class="s4-b-b-text">
                                {w.about}
                            </div>
                        </div>
                        <div class="s4-b-footer">
                            {#each resume.primary_skills.filter( (ps) => w.skills.includes(ps.shorthand), ) as s}
                                <div class="f-icon">
                                    <CodeLanguageIcons
                                        size="s"
                                        language={s.shorthand}
                                    />
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            <div class="s4-body-section-2">
                {#each resume.projects as p}
                    <div class="s4-body-main">
                        <div class="s4-b2-header">
                            <div class="s4-b2-h-primary">
                                <div
                                    class="p-text header-secondary"
                                    style={p.starProject
                                        ? "color: var(--color-yellow)"
                                        : ""}
                                >
                                    <a
                                        class="p-link"
                                        href="/projects/{p.title.toLocaleLowerCase()}"
                                        >{p.title}</a
                                    >
                                </div>
                                <div
                                    class="p-icon"
                                    style={p.starProject
                                        ? "color: var(--color-yellow)"
                                        : ""}
                                >
                                    <MiscIcons type={p.icon} size="l" />
                                </div>
                            </div>
                            <div class="s4-b2-h-secondary">
                                <div class="s-date-range">
                                    {p.from} - {p.to}
                                </div>
                                <div class="s-company header-tertiary">
                                    {p.platform}
                                </div>
                            </div>
                        </div>
                        <div class="s4-b2-body">
                            <div class="s4-b2-b-text">
                                {p.about}
                            </div>
                        </div>
                        <div class="s4-b2-footer">
                            {#each resume.primary_skills.filter( (ps) => p.skills.includes(ps.shorthand), ) as s}
                                <div class="f-icon">
                                    <CodeLanguageIcons
                                        size="s"
                                        language={s.shorthand}
                                    />
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="s4-footer"></div>
    </div>
    <div class="h-section-two">
        <div class="s2-text">
            <div class="s2-header">
                <div class="s2-skills header-primary">
                    <div class="s2-s-icon">
                        <MiscIcons type="code" size="l" />
                    </div>
                    <div class="s2-s-text">Languages & Frameworks</div>
                </div>
            </div>
            <div class="s2-body">
                <div class="s2-carousel-wrapper">
                    <div class="s2-carousel-track">
                        {#each resume.primary_skills as s}
                            <div class="s2-ul">
                                <div class="ic-icon-container">
                                    <CodeLanguageIcons
                                        language={s.shorthand}
                                        size="l"
                                    />
                                </div>
                                <div class="s2-li-name">
                                    <span class="li-name">{s.name}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="2-footer"></div>
        </div>
    </div>
</main>

<!------------------------------------------------------------------------ CSS ------------------------------------------------------------------------->
<style>
    @media (max-width: 480px) {
        /* Styles for mobile phones */
        /* Styles for desktop */
        .h-section-one,
        .h-section-two,
        .h-section-three,
        .h-section-four {
            margin-left: 3%;
            margin-right: 3%;
            margin-bottom: 3rem;
        }

        .h-section-one {
            /* border: 5px solid black; */
            display: flex;
            justify-content: left;
            background-color: var(--color-contrast);
            /* background-color: red; */
            margin-top: 5vw;

            border-radius: 3vw;

            .h-text {
                padding-top: 2em;
                padding-bottom: 2em;
                color: var(--color-primary);
                /* background-color: red; */
                align-self: center;
                width: 100%;
                font-size: 4vw;
                padding-left: 4vw;
                padding-right: 4vw;

                .h-header {
                    .h-hello {
                        font-size: 7vw;
                    }
                    .h-title {
                        line-height: 1;
                        font-size: 12vw;
                        .h-second-word {
                            color: var(--color-orange);
                        }
                    }
                }

                .h-body {
                    .h-about {
                        margin-top: 1vw;
                        font-style: italic;
                    }
                }

                .h-footer {
                    display: flex;
                    margin-top: 4vw;
                    justify-content: center;
                    /* border: 4px solid rgb(0, 153, 255); */
                    .h-buttons {
                        display: none;
                    }

                    .h-icons {
                        align-self: center;
                        display: flex;
                        .h-f-i-linkedin {
                            margin-right: 10vw;
                            margin-left: 10vw;
                            width: 3.5rem;
                            background-color: var(--color-primary);
                            border-radius: 100px;
                            padding: 15px;
                        }

                        .h-f-i-github {
                            margin-left: 0.65vw;
                            margin-right: 0.65vw;
                            width: 3.5rem;
                            background-color: var(--color-primary);
                            border-radius: 100px;
                            padding: 10px;
                        }

                        .h-f-i-email {
                            margin-left: 0.65vw;
                            margin-right: 0.65vw;
                            width: 3.5rem;
                            background-color: var(--color-primary);
                            border-radius: 100px;
                            padding: 10px;
                        }

                        .h-f-i-icon {
                            transition: 300ms;
                        }
                        .h-f-i-icon:hover {
                            opacity: 85%;
                            cursor: pointer;
                        }
                    }
                }
            }

            .h-picture {
                /* background-color: blue; */
                display: none;
            }
        }

        .h-section-two {
            /* border: 5px solid var(--color-contrast); */
            /* background-color: var(--color-contrast); */
            /* color: var(--color-primary); */
            /* border-radius: 25px; */
            margin-top: 1vw;

            .s2-text {
                .s2-header {
                    .s2-skills {
                        font-size: 8vw;
                        margin-top: 2vw;
                        margin-left: 2vw;
                        display: flex;
                        /* background-color: red; */
                        .s2-s-icon {
                            margin-right: 5vw;
                            align-self: center;
                        }
                    }
                }

                .s2-body {
                    .s2-carousel-wrapper {
                        background-color: var(--color-primary-darker);
                        border-radius: 25px;
                        border: 4px solid rgba(0, 0, 0, 0.322);

                        display: flex;
                        justify-content: center;
                        .s2-carousel-track {
                            /* border: 1px solid red; */
                            display: flex;
                            justify-content: space-between;
                            flex-flow: row wrap;
                            width: 90vw;

                            .ic-icon-container {
                                margin-left: 1.5vw;
                                margin-right: 1.5vw;
                                margin-top: 0.5vw;
                                margin-bottom: 0.5vw;
                                padding-left: 1.5vw;
                                padding-right: 1.5vw;
                                padding-top: 0.5vw;
                                padding-bottom: 0.5vw;
                                transition: 350ms;
                            }

                            .s2-li-name {
                                text-align: center;
                                font-style: italic;
                                transition: 300ms;
                            }

                            .s2-ul {
                                transition: 300ms;
                                margin-bottom: 1.25vw;
                            }

                            .s2-ul:hover {
                                opacity: 65%;
                            }
                        }
                    }
                }
            }
        }

        .h-section-three {
            /* border: 5px solid black; */
            /* background-color: var(--color-contrast); */
            /* color: var(--color-primary); */
            /* border-radius: 25px; */
            margin-top: 1vw;

            .s3-header {
                margin-left: 5vw;
                margin-bottom: 3vw;

                .s3-education {
                    display: flex;
                    /* background-color: rebeccapurple; */
                    .s3-e-icon {
                        margin-right: 5vw;
                        align-self: center;
                    }

                    .s3-e-text {
                        font-size: 10vw;
                        align-self: center;
                    }
                }
            }

            .s3-body {
                border: 5px solid var(--color-primary-darker);
                padding-top: 1vw;
                padding-left: 1vw;
                padding-right: 1vw;
                padding-bottom: 1vw;

                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;
                background-color: var(--color-contrast);
                color: var(--color-primary);

                border-radius: 30px;

                .s3-b-header {
                    font-size: 6vw;
                    margin-left: 1vw;
                    margin-top: 2vw;
                }

                .s3-b-body {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    padding-bottom: 2vw;

                    .b-body-about {
                        font-style: italic;
                        background-color: var(--color-contrast-lighter);
                        border-radius: 25px;
                        padding: 0.5vw 1.5vw 0.5vw 1.5vw;
                        font-size: var(--header-tertiary);
                        width: fit-content;
                        font-size: 3vw;
                    }

                    .b-body-points {
                        font-weight: 700;
                        display: flex;
                        flex-flow: row wrap;
                        align-self: center;
                        width: 58vw;

                        .b-p-point {
                            display: none;
                            /* this needs to be changed later */
                            font-size: 3vw;
                            padding-top: 1vw;
                            padding-bottom: 1vw;
                            margin-right: 3vw;
                            margin-left: 3vw;
                            margin-top: 1vw;
                            margin-bottom: 1vw;
                            height: 5vw;
                            width: 23vw;
                            background-color: var(--color-orange);
                            color: var(--color-contrast);
                            /* display: flex; */
                            justify-content: space-between;
                            transition: 300ms;
                        }

                        .b-p-point:hover {
                            opacity: 85%;
                        }

                        .p-even {
                            align-items: center;
                            border-bottom-left-radius: 100px;
                            border-top-left-radius: 100px;
                            border-bottom-right-radius: 25px;
                            border-top-right-radius: 25px;
                        }

                        .p-odd {
                            align-items: center;
                            text-align: right;
                            border-bottom-left-radius: 25px;
                            border-top-left-radius: 25px;
                            border-bottom-right-radius: 100px;
                            border-top-right-radius: 100px;
                        }

                        .p-icon {
                            align-self: center;
                            display: none;
                        }

                        .p-i-even {
                            margin-left: 2vw;
                            margin-right: 2vw;
                        }

                        .p-i-odd {
                            margin-left: 2vw;
                            margin-right: 2vw;
                        }
                    }
                }
            }
        }

        .h-section-four {
            margin-top: 2vw;
            /* background-color: black; */

            .s4-header {
                margin-left: 2vw;
                margin-right: 2vw;
                display: flex;
                font-size: 5vw;
                justify-content: space-between;
                padding-bottom: 5vw;
                .s4-h-left {
                    /* background-color: blue; */
                    display: flex;
                    .s4-h-icon {
                        margin-right: 2rem;
                        align-self: center;
                    }
                }
                .s4-h-right {
                    /* background-color: red; */
                    text-align: right;
                    display: flex;
                    .s4-h-text {
                        align-self: center;
                    }
                    .s4-h-icon {
                        margin-left: 2rem;
                        align-self: center;
                    }
                }
            }

            .s4-body {
                display: flex;
                justify-content: space-between;

                .s4-body-main {
                    margin-bottom: 3vw;
                }

                .s4-body-section-1 {
                    width: 50%;
                }

                .s4-body-section-2 {
                    text-align: right;
                    width: 50%;
                }

                .p-text {
                    font-size: 5vw;
                }

                .s4-b-header {
                    position: relative;
                    margin-top: 2vw;
                    .s4-b-h-primary {
                        color: var(--color-orange);
                        display: flex;
                        .p-text {
                            align-self: center;
                            margin-left: 1vw;
                        }
                        .p-icon {
                            align-self: center;
                            margin-right: 3vw;
                        }
                    }

                    .s4-b-h-secondary {
                        display: flex;
                        margin-top: 1.5vw;

                        .s-company {
                            font-size: 4vw;
                        }
                        .s-date-range {
                            align-self: center;
                            margin-left: 1vw;
                            font-size: 3vw;
                            font-style: italic;
                        }
                    }
                }

                .s4-b-header::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: -20px;
                    border-radius: 20px;
                    width: 30vw;
                    height: 5px;
                    margin-top: 2vw;
                    background-color: var(--color-primary-darker);
                }

                .s4-b-b-text {
                    margin-right: 25%;
                    font-size: 2.5vw;
                }

                .s4-b-footer {
                    margin-top: 1.5vw;
                    display: flex;

                    .f-icon {
                        display: none;
                        /* This should change */
                        margin-right: 1vw;
                        margin-bottom: 2.5vw;
                    }
                }
            }
        }

        .s4-body-section-2 {
            .s4-b2-header {
                color: var(--color-contrast);
                position: relative;
                margin-top: 2vw;
                .s4-b2-h-primary {
                    color: var(--color-orange);
                    display: flex;
                    justify-content: right;
                    .p-text {
                        align-self: center;
                        margin-right: 1vw;
                    }
                    .p-icon {
                        align-self: center;
                        margin-left: 3vw;
                    }
                }

                .s4-b2-h-secondary {
                    display: flex;
                    justify-content: right;
                    margin-top: 1.5vw;

                    .s-date-range {
                        font-size: 2.5vw;
                        align-self: center;
                        margin-right: 1vw;
                        font-style: italic;
                        display: none;
                    }

                    .s-company {
                        font-size: 3vw;
                    }
                }
            }

            .s4-b2-header::after {
                content: "";
                position: absolute;
                right: 0;
                top: -20px;
                border-radius: 20px;
                width: 30vw;
                height: 5px;
                margin-top: 2vw;
                background-color: var(--color-primary-darker);
            }

            .s4-b2-b-text {
                margin-left: 25%;
                font-size: 2.5vw;
            }

            .s4-b2-footer {
                margin-top: 1.5vw;
                display: flex;
                justify-content: right;
                .f-icon {
                    display: none;
                    /* this should change */
                    margin-right: 1vw;
                    margin-bottom: 0.5vw;
                }
            }
        }
    }

    @media (min-width: 480px) {
        /* Styles for desktop */
        .h-section-one,
        .h-section-two,
        .h-section-three,
        .h-section-four {
            margin-left: 5%;
            margin-right: 5%;
            margin-bottom: 5rem;
        }

        .h-section-one {
            /* border: 5px solid black; */
            display: flex;
            justify-content: space-around;
            background-color: var(--color-contrast);
            /* background-color: red; */
            margin-top: 2vw;

            border-radius: 3vw;

            .h-text {
                padding-top: 2em;
                padding-bottom: 2em;
                color: var(--color-primary);
                /* background-color: red; */
                align-self: center;
                width: 45%;

                .h-header {
                    .h-hello {
                    }
                    .h-title {
                        line-height: 1;
                        .h-second-word {
                            color: var(--color-orange);
                        }
                    }
                }

                .h-body {
                    .h-about {
                        margin-top: 1vw;
                        font-style: italic;
                    }
                }

                .h-footer {
                    display: flex;
                    margin-top: 1vw;
                    justify-content: space-between;
                    /* border: 4px solid rgb(0, 153, 255); */
                    .h-buttons {
                        display: flex;
                        justify-content: space-between;
                        width: 20rem;
                        /* border: 2px solid blue; */
                        align-self: center;
                    }

                    .h-icons {
                        align-self: center;
                        display: flex;
                        .h-f-i-linkedin {
                            margin-right: 0.65vw;
                            margin-left: 0.65vw;
                            width: 3.5rem;
                            background-color: var(--color-primary);
                            border-radius: 100px;
                            padding: 15px;
                        }
                        .h-f-i-github {
                            margin-left: 0.65vw;
                            margin-right: 0.65vw;
                            width: 3.5rem;
                            background-color: var(--color-primary);
                            border-radius: 100px;
                            padding: 10px;
                        }

                        .h-f-i-email {
                            margin-left: 0.65vw;
                            margin-right: 0.65vw;
                            width: 3.5rem;
                            background-color: var(--color-primary);
                            border-radius: 100px;
                            padding: 10px;
                        }

                        .h-f-i-icon {
                            transition: 300ms;
                        }
                        .h-f-i-icon:hover {
                            opacity: 85%;
                            cursor: pointer;
                        }
                    }
                }
            }

            .h-picture {
                /* background-color: blue; */
                align-self: center;
                width: 43%;
            }
        }

        .h-section-two {
            /* border: 5px solid var(--color-contrast); */
            /* background-color: var(--color-contrast); */
            /* color: var(--color-primary); */
            /* border-radius: 25px; */
            margin-top: 1vw;

            .s2-text {
                .s2-header {
                    .s2-skills {
                        margin-top: 2vw;
                        margin-left: 2vw;
                        display: flex;
                        /* background-color: red; */
                        .s2-s-icon {
                            margin-right: 1.5vw;
                            align-self: center;
                        }
                    }
                }

                .s2-body {
                    .s2-carousel-wrapper {
                        background-color: var(--color-primary-darker);
                        border-radius: 25px;
                        border: 4px solid rgba(0, 0, 0, 0.322);

                        display: flex;
                        justify-content: center;
                        .s2-carousel-track {
                            /* border: 1px solid red; */
                            display: flex;
                            justify-content: space-between;
                            flex-flow: row wrap;
                            width: 75vw;

                            .ic-icon-container {
                                margin-left: 1.5vw;
                                margin-right: 1.5vw;
                                margin-top: 0.5vw;
                                margin-bottom: 0.5vw;
                                padding-left: 1.5vw;
                                padding-right: 1.5vw;
                                padding-top: 0.5vw;
                                padding-bottom: 0.5vw;
                                transition: 350ms;
                            }

                            .s2-li-name {
                                text-align: center;
                                font-style: italic;
                                transition: 300ms;
                            }

                            .s2-ul {
                                transition: 300ms;
                                margin-bottom: 1.25vw;
                            }

                            .s2-ul:hover {
                                opacity: 65%;
                            }
                        }
                    }
                }
            }
        }

        .h-section-three {
            /* border: 5px solid black; */
            /* background-color: var(--color-contrast); */
            /* color: var(--color-primary); */
            /* border-radius: 25px; */
            margin-top: 1vw;

            .s3-header {
                margin-left: 2vw;

                .s3-education {
                    display: flex;
                    /* background-color: rebeccapurple; */
                    .s3-e-icon {
                        margin-right: 1.5vw;
                        align-self: center;
                    }

                    .s3-e-text {
                        align-self: center;
                    }
                }
            }

            .s3-body {
                border: 5px solid var(--color-primary-darker);
                padding-top: 1vw;
                padding-left: 1vw;
                padding-right: 1vw;
                padding-bottom: 1vw;

                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;
                background-color: var(--color-contrast);
                color: var(--color-primary);

                border-radius: 30px;

                .s3-b-body {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;

                    .b-body-about {
                        font-style: italic;
                        background-color: var(--color-contrast-lighter);
                        border-radius: 25px;
                        padding: 0.5vw 1.5vw 0.5vw 1.5vw;
                        font-size: var(--header-tertiary);
                        width: fit-content;
                    }

                    .b-body-points {
                        font-weight: 700;
                        display: flex;
                        flex-flow: row wrap;
                        align-self: center;
                        width: 58vw;

                        .b-p-point {
                            font-size: 0.8vw;
                            padding-top: 1vw;
                            padding-bottom: 1vw;
                            margin-right: 3vw;
                            margin-left: 3vw;
                            margin-top: 1vw;
                            margin-bottom: 1vw;
                            height: 5vw;
                            width: 23vw;
                            background-color: var(--color-orange);
                            color: var(--color-contrast);
                            display: flex;
                            justify-content: space-between;
                            transition: 300ms;
                        }

                        .b-p-point:hover {
                            opacity: 85%;
                        }

                        .p-even {
                            align-items: center;
                            border-bottom-left-radius: 100px;
                            border-top-left-radius: 100px;
                            border-bottom-right-radius: 25px;
                            border-top-right-radius: 25px;
                        }

                        .p-odd {
                            align-items: center;
                            text-align: right;
                            border-bottom-left-radius: 25px;
                            border-top-left-radius: 25px;
                            border-bottom-right-radius: 100px;
                            border-top-right-radius: 100px;
                        }

                        .p-icon {
                            align-self: center;
                        }

                        .p-i-even {
                            margin-left: 2vw;
                            margin-right: 2vw;
                        }

                        .p-i-odd {
                            margin-left: 2vw;
                            margin-right: 2vw;
                        }
                    }
                }
            }
        }

        .h-section-four {
            margin-top: 2vw;
            /* background-color: black; */

            .s4-header {
                margin-left: 2vw;
                margin-right: 2vw;
                display: flex;
                justify-content: space-between;

                .s4-h-left {
                    /* background-color: blue; */
                    display: flex;
                    .s4-h-icon {
                        margin-right: 2rem;
                        align-self: center;
                    }
                }
                .s4-h-right {
                    /* background-color: red; */
                    text-align: right;
                    display: flex;
                    .s4-h-icon {
                        margin-left: 2rem;
                        align-self: center;
                    }
                }
            }

            .s4-body {
                display: flex;
                justify-content: space-between;

                .s4-body-main {
                    margin-bottom: 3vw;
                }

                .s4-body-section-1 {
                    width: 50%;
                }

                .s4-body-section-2 {
                    text-align: right;
                    width: 50%;
                }

                .s4-b-header {
                    position: relative;
                    margin-top: 2vw;
                    .s4-b-h-primary {
                        color: var(--color-orange);
                        display: flex;
                        .p-text {
                            align-self: center;
                            margin-left: 1vw;
                        }
                    }

                    .s4-b-h-secondary {
                        display: flex;
                        margin-top: 0.5vw;

                        .s-date-range {
                            align-self: center;
                            margin-left: 1vw;

                            font-style: italic;
                        }
                    }
                }

                .s4-b-header::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: -20px;
                    border-radius: 20px;
                    width: 30vw;
                    height: 8px;
                    background-color: var(--color-primary-darker);
                }

                .s4-b-b-text {
                    margin-right: 25%;
                }

                .s4-b-footer {
                    margin-top: 1.5vw;
                    display: flex;

                    .f-icon {
                        margin-right: 1vw;
                        margin-bottom: 0.5vw;
                    }
                }
            }
        }

        .s4-body-section-2 {
            .s4-b2-header {
                color: var(--color-contrast);
                position: relative;
                margin-top: 2vw;
                .s4-b2-h-primary {
                    color: var(--color-orange);
                    display: flex;
                    justify-content: right;
                    .p-text {
                        align-self: center;
                        padding-right: 1vw;
                        padding-left: 1vw;
                        border-radius: 20px;
                        transition: 300ms;
                    }
                    .p-text:hover{
                        background-color: var(--color-contrast);
                    }
                }

                .s4-b2-h-secondary {
                    display: flex;
                    justify-content: right;
                    margin-top: 0.5vw;

                    .s-date-range {
                        align-self: center;
                        margin-right: 1vw;
                        font-style: italic;
                    }
                }
            }

            .s4-b2-header::after {
                content: "";
                position: absolute;
                right: 0;
                top: -20px;
                border-radius: 20px;
                width: 30vw;
                height: 8px;
                background-color: var(--color-primary-darker);
            }

            .s4-b2-b-text {
                margin-left: 25%;
            }

            .s4-b2-footer {
                margin-top: 1.5vw;
                display: flex;
                justify-content: right;
                .f-icon {
                    margin-right: 1vw;
                    margin-bottom: 0.5vw;
                }
            }
        }
    }
</style>
