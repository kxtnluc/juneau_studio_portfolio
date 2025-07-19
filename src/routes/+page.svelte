<!-- color: https://lospec.com/palette-list/autumn-decay -->

<script lang="ts">
    import data from "$lib/details.json";
    import picture from "$lib/tommy.png";
    import Button from "../components/Button.svelte";
    import ClipboardIcons from "../components/icons/MiscIcons.svelte";
    import CodeLanguageIcons from "../components/icons/CodeLanguageIcons.svelte";
    import JavaScriptIcon from "../components/icons/CodeLanguageIcons.svelte";
    import MiscIcons from "../components/icons/MiscIcons.svelte";

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
                <div class="h-buttons">
                    <Button onClick={() => console.log("go to projects")}>
                        Projects
                    </Button>
                    <Button onClick={() => console.log("go to hire me")}>
                        Hire Me
                    </Button>
                </div>
            </div>
            <div class="h-footer">
                <div class="h-footer-icons">
                    <div class="h-f-i-icon h-f-i-phone">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g><g id="SVGRepo_iconCarrier">
                                <path
                                    d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z"
                                    fill="#ffffff"
                                ></path>
                            </g></svg
                        >
                    </div>
                    <div class="h-f-i-icon h-f-i-email">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
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
                            </g></svg
                        >
                    </div>
                    <div class="h-f-i-icon h-f-i-linkedin">
                        <a
                            href="https://www.linkedin.com/in/kxtnluc/"
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
                                <div class="p-text header-secondary" style={p.starProject ? "color: var(--color-yellow)" : ""}>
                                    <a href="/projects/hearth">{p.title}</a>
                                </div>
                                <div class="p-icon" style={p.starProject ? "color: var(--color-yellow)" : ""}>
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
    <div class="h-section-five">
        <div class="s5-body">
            <div class="s5-b-text">
                Thanks for checking out this site :D
            </div>
        </div>
    </div>
</main>
<!------------------------------------------------------------------------ CSS ------------------------------------------------------------------------->
<style>
    .h-section-one, .h-section-two, .h-section-three, .h-section-four{
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 5rem;
    }

    .h-section-one {
        /* border: 5px solid black; */
        display: flex;
        justify-content: space-around;
        background-color: var(--color-contrast);
        margin-top: 2vw;
        padding-top: 1vw;
        border-radius: 100px;

        .h-text {
            color: var(--color-primary);
            /* background-color: red; */
            align-self: center;
            width: 45%;

            .h-header {
                .h-hello {
                    margin-bottom: -1vw;
                }
                .h-title {
                    .h-second-word {
                        color: var(--color-orange);
                    }
                }
            }

            .h-body {
                .h-about {
                    font-style: italic;
                }

                .h-buttons {
                    margin-top: 1vw;
                    display: flex;
                    justify-content: space-between;
                    width: 14vw;
                }
            }

            .h-footer {
                .h-footer-icons {
                    display: flex;
                    margin-top: 1vw;
                    justify-content: right;

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

                    .h-f-i-phone {
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
            width: 40%;
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
                            cursor: pointer;
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
                        cursor: pointer;
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
                    margin-right: 1vw;
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

    .h-section-five{
        background-color: var(--color-primary-darker);
        .s5-body{
            display: flex;
            justify-content: center;
            height: 30rem;
            .s5-b-text{
                align-self: center;
            }
        }
    }
</style>
