<script lang="ts">
    import Button from "../../components/Button.svelte";
    import data from "$lib/details.json";
    import MiscIcons from "../../components/icons/MiscIcons.svelte";

    const author = data[0].author;

    let email = "";
    let subject = "";
    let message = "";
    let status = "";
    let topic = "Topic";

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
    <h1 class="main-header">Contact Me</h1>
    <section class="contact-section-1">
        <div class="s1-body-2">
            <a href="{author.work_links[0].url}" target="_blank">
                <div id="box-1" class="item">
                    <MiscIcons type="linkedin" size="l" />
                </div>
            </a>
            <a href="{author.work_links[1].url}" target="_blank">
                <div id="box-2" class="item">
                    <MiscIcons type="github" size="l" />
                </div>
            </a>
        </div>
        <div class="s1-body">
            <h2 class="s1-b-header">Email Me</h2>
            <form class="s1-b-form" on:submit|preventDefault={submitForm}>
                <div class="input-label">Subject</div>
                <div class="f-li">
                    <input
                        class="subject"
                        bind:value={subject}
                        type="text"
                        required
                    />
                </div>
                <div class="f-li-2">
                    <div class="subject-container">
                        <div class="input-label">Email</div>
                        <input
                            class="email"
                            bind:value={email}
                            type="email"
                            required
                        />
                    </div>
                    <div class="topic-container">
                        <div class="input-label">Topic</div>
                        <select class="topic" bind:value={topic}>
                            {#each author.topics as t}
                                <option>
                                    {t}
                                </option>
                            {/each}
                        </select>
                    </div>
                </div>
                <div class="f-li">
                    <div class="input-label">Message</div>
                    <textarea
                        class="message"
                        bind:value={message}
                        required
                    ></textarea>
                </div>
                <div class="f-li btn">
                    <Button Type="submit" size='l'>Send</Button>
                </div>
            </form>
        </div>
    </section>
    <p class="status">{status}</p>
</div>

<style>
    .main-header {
        display: flex;
        justify-content: left;
        padding-top: min(1em, 4%);
        padding-left: min(1em, 4%);
    }

    .contact-section-1 {
        /* background-color: gray; */

        margin-left: min(3em, 2%);
        margin-right: min(3em, 2%);

        padding: min(1em, 4%);

        @media (min-width: 1010px) {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            /* background-color: blue; */
        }

        @media (max-width: 1010px) {
            display: flex;
            flex-flow: column-reverse nowrap;

            .s1-body-2{
                margin-top: 1em;
            }
        }
    }

    .s1-body {
        background-color: var(--color-contrast);
        color: var(--color-primary);
        border-radius: 1vw;

        padding: min(1em, 4%);

        @media (min-width: 1010px) {
            width: 75%;
        }

        .subject,
        .email {
            width: 100%;
        }
    }

    .s1-body-2 {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 0.5em;

        @media(min-width: 1010px) {
            margin-right: 0.5em;
        }
        /* background-color: black; */

        .item {
            padding: 2em;
            @media(max-width: 1010px) {
                padding: 1em;
            }
            color: white;
            text-align: center;
            border-radius: 8px;
            font-size: 2em;
        }

        @property --border-color {
            syntax: '<color>';
            inherits: false;
            initial-value: rgba(10, 102, 194);
        }

        #box-1 {

            background: 
        /* semi-transparent gradient on top */
                linear-gradient(
                    320deg,
                    rgba(10, 102, 194, 1),
                    rgba(0, 191, 255, 0.6)
                ),
                /* your image underneath */ url("$lib/linkedin-overlay.png");

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
            color: white;
            transition: 300ms;
            position: relative;
        }

        #box-2 {
            /* Stack gradient first, image second */
            background: linear-gradient(
                    320deg,
                    rgba(51, 51, 51, 1),
                    rgba(68, 68, 68, 0.6)
                ),
                url("$lib/github-overlay.png");

            background-size: cover; /* Make image fill the box */
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Avoid repeating */
            border-radius: 8px;
            transition: 300ms;
            color: white;
            position: relative;
        }
        #box-2,
        #box-1:hover {
            cursor: pointer;
        }

        #box-1::after,
        #box-1::before {
            content: "";
            position: absolute;
            width: calc(100% + 5px);
            height: calc(100% + 5px);
            background-image: conic-gradient(
                var(--border-color),
                rgba(0, 191, 255),
                var(--border-color)
            );
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            z-index: -1;
            border-radius: 8px;
            transition: 300ms;
        }

        #box-1::before {
            filter: blur(20px);
            opacity: 0.5;
        }

        #box-2::after,
        #box-2::before {
            content: "";
            position: absolute;
            width: calc(100% + 5px);
            height: calc(100% + 5px);
            background-image: conic-gradient(
                rgba(51, 51, 51),
                rgba(68, 68, 68),
                rgba(51, 51, 51)
            );
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            z-index: -1;
            border-radius: 8px;
            transition: 300ms;
        }

        #box-2::before {
            filter: blur(20px);
            opacity: 0.5;
        }

        #box-1:hover::after,
        #box-2:hover::after {
            background-image: conic-gradient(
                rgba(255, 255, 255),
                rgba(255, 255, 255),
                rgba(255, 255, 255)
            );
        }

        @media (min-width: 1010px) {
            width: 25%;
        }
    }

    .btn{
        display: flex;
        justify-content: end;
        @media (max-width: 1010px) {
            margin-top: 1em;
            justify-content: center;
        }
        /* background-color: aliceblue; */
    }

    .message{
        width: 100%;
        border: solid 1px var(--color-primary);
        border-radius: 1vw;
        min-height: 85px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        accent-color: var(--color-yellow);
        caret-color: var(--color-yellow);
    }

    .topic-container{
    }

    .topic{
        border: 1px solid var(--color-primary);
        min-height: 30px;
        border-radius: 0.25vw;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        caret-color: var(--color-yellow);
        accent-color: var(--color-yellow);

        @media (max-width: 480px) {
            font-size: 15px;
            width: 100%;
            margin-top: 0.5em;
        }
    }
</style>
