<script lang="ts">
	import "../app.css";
	let { children } = $props();

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:window on:resize={closeMenu} />

<header class="nav-main">
	<nav class="navbar">
		<div class="n-left">
			<a href="/" class="logo-link">Luc Juneau</a>
		</div>

		<!-- Desktop Navigation -->
		<div class="n-right">
			<ul class="n-ul">
				<li class="n-li">
					<a href="/">About</a>
				</li>
				<li class="n-li">
					<a href="/skills">Skills</a>
				</li>
				<li class="n-li">
					<a href="/projects">Projects</a>
				</li>
				<li class="n-li">
					<a href="/resume">Digital Resume</a>
				</li>
				<li class="n-li">
					<a href="/contact-me" class="contact-btn">Contact Me</a>
				</li>
			</ul>
		</div>

		<!-- Hamburger Menu Button -->
		<button
			class="hamburger"
			onclick={toggleMenu}
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
		>
			<span class="bar" hidden={menuOpen}></span>
			<span class="bar" hidden={menuOpen}></span>
			<span class="bar" hidden={menuOpen}></span>
		</button>
	</nav>

	<!-- Mobile Sidebar -->
	<div class="sidebar {menuOpen ? 'open' : ''}">
		<button class="close-btn" onclick={closeMenu} aria-label="Close menu">
			×
		</button>
		<ul class="sidebar-ul">
			<li>
				<a href="/" onclick={closeMenu}>About</a>
			</li>
			<li>
				<a href="/skills" onclick={closeMenu}>Skills</a>
			</li>
			<li>
				<a href="/projects" onclick={closeMenu}>Projects</a>
			</li>
			<li>
				<a href="/" onclick={closeMenu}>Digital Resume</a>
			</li>
			<li>
				<a href="/contact-me" onclick={closeMenu}>Contact Me</a>
			</li>
			<li class="social-links">
				<a
					href="https://linkedin.com/in/kxtnluc"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							fill="currentColor"
						/>
					</svg>
				</a>
				<a
					href="https://github.com/kxtnluc"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608.803.056 1.225.828 1.225.828.893 1.534 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>

	<!-- Overlay -->
	{#if menuOpen}
		<div class="overlay" onclick={closeMenu}></div>
	{/if}
</header>

{@render children()}

<style>
	/* Main Navigation */
	.nav-main {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: var(--color-primary, #1a1a2e);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
		height: 4rem;
	}

	/* Logo */
	.logo-link {
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		color: var(--color-contrast, #ffffff);
		transition: opacity 0.2s;
	}

	.logo-link:hover {
		opacity: 0.8;
	}

	/* Desktop Navigation */
	.n-right {
		display: flex;
	}

	.n-ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;
		align-items: center;
	}

	.n-li a {
		text-decoration: none;
		color: var(--color-contrast, #ffffff);
		font-weight: 500;
		transition: opacity 0.2s;
		padding: 0.5rem 0;
	}

	.n-li a:hover {
		opacity: 0.7;
	}

	.contact-btn {
		background-color: transparent;
		border: 2px solid var(--color-contrast, #ffffff);
		padding: 0.5rem 1.5rem !important;
		border-radius: 6px;
		transition: all 0.3s;
	}

	.contact-btn:hover {
		background-color: var(--color-contrast, #ffffff);
		color: var(--color-primary, #1a1a2e);
		opacity: 1 !important;
	}

	/* Hamburger Button */
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 28px;
		height: 22px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 110;
	}

	.hamburger .bar {
		height: 3px;
		width: 100%;
		background-color: var(--color-contrast, #ffffff);
		border-radius: 2px;
		transition: all 0.3s;
	}

	/* Sidebar */
	.sidebar {
		position: fixed;
		top: 0;
		right: -100%;
		height: 100vh;
		width: 280px;
		background-color: var(--color-primary, #1a1a2e);
		box-shadow: -4px 0 12px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		padding: 5rem 2rem 2rem;
		transition: right 0.3s ease;
		z-index: 105;
		overflow-y: auto;
	}

	.sidebar.open {
		right: 0;
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1.5rem;
		background: none;
		border: none;
		font-size: 2.5rem;
		color: var(--color-contrast, #ffffff);
		cursor: pointer;
		line-height: 1;
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sidebar-ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.sidebar-ul li a {
		text-decoration: none;
		color: var(--color-contrast, #ffffff);
		font-size: 1.25rem;
		font-weight: 500;
		display: block;
		padding: 0.5rem 0;
		transition: opacity 0.2s;
	}

	.sidebar-ul li a:hover {
		opacity: 0.7;
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
		margin-top: 1rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	.social-links a {
		color: var(--color-contrast, #ffffff);
		transition: opacity 0.2s;
		padding: 0.5rem !important;
	}

	.social-links a:hover {
		opacity: 0.7;
	}

	/* Overlay */
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
		animation: fadeIn 0.3s;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Mobile Responsive */
	@media (max-width: 808px) {
		.navbar {
			padding: 1rem;
		}

		.hamburger {
			display: flex;
		}

		.n-right {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.sidebar {
			width: 85vw;
			max-width: 280px;
		}
	}
</style>
