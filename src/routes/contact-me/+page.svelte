<script lang="ts">
    import Button from "../../components/Button.svelte";
    import data from "$lib/details.json";
    import MiscIcons from "../../components/icons/MiscIcons.svelte";

    const author = data[0].author;

    let email = "";
    let subject = "";
    let message = "";
    let status = "";
    let topic = "Choose a Topic";

    async function submitForm() {
        status = "Sending...";
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, subject, message, topic }),
        });     

        if (res.ok) {
            status = "Email sent!";
            email = subject = message = "";
        } else {
            status = "Failed to send message.";
        }
    }
</script>

<div>
    <div class="page-header header-primary">Contact Me</div>
    <section class="contact-section-1">
        <div class="s1-body-2">
            <div class="s1-b2-header header-secondary">Hot Links</div>
            <div class="s1-b2-body">
                <div class="header-tertiary link-header">Work Links</div>
                <ul class="links work-links">
                    {#each author.work_links as wl}
                        <li class="links-li">
                            <a
                                href={wl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon"
                            >
                                <MiscIcons
                                    size="ml"
                                    type={wl.name.toLowerCase()}
                                />
                            </a>
                            <a
                                href={wl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text"
                            >
                                {wl.name}
                            </a>
                        </li>
                    {/each}
                </ul>
                <div class="header-tertiary link-header">Social Links</div>
                <ul class="links social-links">
                    {#each author.social_links as sl}
                        <li class="links-li">
                            <a
                                href={sl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon"
                            >
                                <MiscIcons
                                    size="ml"
                                    type={sl.name.toLowerCase()}
                                />
                            </a>
                            <a
                                href={sl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text"
                            >
                                {sl.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="s1-body">
            <div class="s1-b-header header-secondary">Email Me</div>
            <form class="s1-b-form" on:submit|preventDefault={submitForm}>
                <div class="f-li">
                    <input
                        class="subject"
                        bind:value={subject}
                        type="text"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div class="f-li-2">
                    <div class="subject-container">
                        <input
                            class="email"
                            bind:value={email}
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div class="topic-container">
                        <select class="topic" bind:value={topic}>
                                <option>
                                    Choose a Topic
                                </option>
                            {#each author.topics as t}
                                <option>
                                    {t}
                                </option>
                            {/each}
                        </select>
                    </div>
                </div>
                <div class="f-li">
                    <textarea
                        class="message"
                        bind:value={message}
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <div class="f-li btn">
                    <Button Type="submit">Send</Button>
                </div>
            </form>
        </div>
    </section>
    <p class="status">{status}</p>
</div>

<style>
    .page-header {
        margin-top: 2%;
        margin-left: 20%;
    }

    .status{
        display: flex;
        justify-content: center;
        margin-left: 40%;
        margin-top: 1vw;
        font-size: 1.25vw;
        font-style: italic;
    }

    .contact-section-1 {
        background-color: var(--color-contrast);
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1vw;
        color: var(--color-primary);
        border-radius: 25px;
        display: flex;
        justify-content: space-between;

        .s1-body-2 {
            width: 50%;

            .s1-b2-header {
                margin-top: 1vw;
                margin-left: 10%;
            }

            .s1-b2-body {
                margin-left: 10%;

                .link-header {
                    margin-left: 2%;
                }
                .links {
                    margin-left: 7%;
                    font-size: 1vw;
                    .links-li {
                        display: flex;

                        margin-top: 1vw;
                        margin-bottom: 1vw;

                        transition: 250ms;
                        .icon,
                        .text {
                            align-self: center;
                        }

                        .text {
                            margin-left: 0.5vw;
                        }
                    }

                    .links-li:hover {
                        cursor: pointer;
                        opacity: 0.75;
                    }
                }
            }
        }

        .s1-body {
            width: 55%;

            .s1-b-header {
                display: flex;
                justify-content: right;
                margin-top: 1vw;
                margin-right: 10%;
            }
            .s1-b-form {
                display: flex;
                flex-flow: column nowrap;
                padding-bottom: 1vw;

                .f-li {
                    margin-top: 0.5vw;
                    margin-bottom: 0.5vw;
                    margin-left: 10%;
                    margin-right: 10%;
                }

                .message,
                .subject {
                    color: var(--color-primary);
                    border: 2px solid var(--color-primary);
                    border-radius: 10px;
                    padding-top: 0.5vw;
                    padding-bottom: 0.5vw;
                    padding-left: 0.5vw;
                    width: 100%;
                }

                .f-li-2 {
                    margin-top: 0.5vw;
                    margin-bottom: 0.5vw;
                    margin-left: 10%;
                    margin-right: 10%;
                    display: flex;
                    justify-content: space-between;
                    .email {
                        color: var(--color-primary);
                        border: 2px solid var(--color-primary);
                        border-radius: 10px;
                        padding-top: 0.5vw;
                        padding-bottom: 0.5vw;
                        padding-left: 0.5vw;
                        width: 95%;
                        height: 2.25vw;
                    }

                    .topic {
                        color: var(--color-primary);
                        border: 2px solid var(--color-primary);
                        border-radius: 10px;
                        padding-top: 0.5vw;
                        padding-bottom: 0.5vw;
                        padding-left: 0.5vw;
                        width: 100%;
                        height: 2.25vw;
                    }
                }

                .btn {
                    align-self: flex-end;
                }
            }
        }
    }
</style>
