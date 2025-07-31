<script>
    export let data;
    import pic_01 from "$lib/hearth_snapshot.png";
    import details from "$lib/details.json";

    const p = details[0].resume.projects.find((p => p.title.toLowerCase() == data.projectName))
</script>

<main>
    <section class="project-section-1">
        <div class="s1-header">
            <div class="s1-h-text">
                <div class="title header-primary">
                    {p?.title}
                </div>
                <div class="subtitle header-secondary">
                    {p?.platform}
                </div>
            </div>
            <div class="s1-h-img">
                <img class="img" src="{pic_01}" alt="hert"/>
            </div>
        </div>
        <div class="s1-body">

        </div>
        <div class="s1-footer">

        </div>
    </section>
</main>
