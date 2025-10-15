<script>
    import resume from "$lib/resume.pdf"; // Adjust path to your PDF file
</script>

<main>
    <section class="section-1">
        <h2 class="s1-h">Resume</h2>
        <div class="resume-container">

            <div class="resume-actions">
                <a href={resume} download="Luc_Juneau_Resume.pdf" class="download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V16M12 16L16 12M12 16L8 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 16V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Download Resume
                </a>
                <a href={resume} target="_blank" rel="noopener noreferrer" class="open-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Open in New Tab
                </a>
            </div>
            <!-- Option 1: Embed with iframe (Simple & Reliable) -->
            <iframe 
                src={resume} 
                title="Resume PDF"
                class="pdf-viewer"
            ></iframe>

            <!-- Option 2: Object tag (Alternative) -->
            <!-- <object 
                data={resume} 
                type="application/pdf" 
                class="pdf-viewer"
            >
                <p>Your browser doesn't support PDF viewing. 
                   <a href={resume} download="Resume.pdf">Download the PDF</a> instead.
                </p>
            </object> -->

            <!-- Download Button -->
            <div class="resume-actions">
                <a href={resume} download="Luc_Juneau_Resume.pdf" class="download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V16M12 16L16 12M12 16L8 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 16V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Download Resume
                </a>
                <a href={resume} target="_blank" rel="noopener noreferrer" class="open-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Open in New Tab
                </a>
            </div>
        </div>
    </section>
</main>

<style>
    .section-1 {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .s1-h {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .resume-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background-color: var(--color-contrast, #fff);
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .pdf-viewer {
        width: 100%;
        height: 80vh;
        min-height: 600px;
        border: none;
        border-radius: 0.5rem;
        background-color: #f5f5f5;
    }

    .resume-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .download-btn,
    .open-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .download-btn {
        background-color: var(--color-orange, #ff6b35);
        color: white;
    }

    .download-btn:hover {
        background-color: var(--color-orange-dark, #e55a2b);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
    }

    .open-btn {
        background-color: var(--color-primary, #1a1a2e);
        color: white;
    }

    .open-btn:hover {
        background-color: var(--color-primary-darker, #0f0f1e);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        .pdf-viewer {
            height: 70vh;
            min-height: 500px;
        }

        .resume-actions {
            flex-direction: column;
        }

        .download-btn,
        .open-btn {
            width: 100%;
            justify-content: center;
        }
    }

    @media (max-width: 350px) {
        .section-1 {
            padding: 1rem;
        }

        .s1-h {
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }

        .resume-container {
            padding: 0.75rem;
            gap: 1rem;
        }

        .pdf-viewer {
            height: 60vh;
            min-height: 400px;
            border-radius: 0.25rem;
        }

        .download-btn,
        .open-btn {
            padding: 0.65rem 1rem;
            font-size: 0.9rem;
            gap: 0.4rem;
        }

        .download-btn svg,
        .open-btn svg {
            width: 18px;
            height: 18px;
        }
    }
</style>