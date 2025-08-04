<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<main class="nav-main">
	<section class="navbar">
		<div class="n-left">
			<div class="l-name"><a href="/">Luc Juneau</a></div>
		</div>
		<div class="n-right">
			<ul class="n-ul">
				<!-- <li class="n-li"><a href="about">About</a></li> -->
				<li class="n-li"><a href="/#work-and-projects">Projects</a></li>
				<li class="n-li"><a href="/contact-me">Contact Me</a></li>
				<li class="n-li-icon">
					<a
						href="https://linkedin/in/kxtnluc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="linkedin"
					>
						<svg
							class="icon-linkedin"
							viewBox="0 0 20 20"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							fill="#ffffff"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier">
								<title>linkedin [#161]</title>
								<desc>Created with Sketch.</desc> <defs> </defs>
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
				</li>
				<li class="n-li-icon">
					<a
						href="https://linkedin/in/kxtnluc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="github"
					>
						<svg
							class="icon-github"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
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
				</li>
			</ul>
		</div>
	</section>
</main>

{@render children()}

<!-- <div class="footer">
	<div class="f-body">
		<div class="f-b-text">Thanks for checking out this site :D</div>
	</div>
</div> -->

<style>
	@media (max-width: 480px) {
		.navbar {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			height: 5rem;
			background-color: var(--color-primary);

			.n-left {
				align-self: center;
				margin-left: 2rem;
				.l-name {
					width: 110px;
					/* background-color: red; */
					font-weight: 700;
					font-size: 18px;
				}
			}

			.n-right {
				align-self: center;
				.n-ul {
					letter-spacing: 2px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: center;

					.n-li {
						font-size: 18px;
						margin-right: 2vw;
						align-self: center;
						transition: opacity 300ms ease;
						position: relative;
						/* background-color: red; */
						width: 120px;
					}

					.n-li:hover {
						opacity: 85%;
						cursor: pointer;
					}

					.n-li:hover::after {
						width: 100%;
					}
				}
			}
		}

		.n-li-icon {
			display: none;
			margin-left: 1rem;
			margin-right: 1rem;
			transition: 250ms;
		}

		.n-li-icon:hover {
			opacity: 85%;
			cursor: pointer;
		}

		.icon-linkedin {
			width: 30px;
			height: 30px;
			display: inline-block; /* ensures it doesn't collapse */
		}

		.icon-github {
			width: 35px;
			height: 35px;
			display: inline-block; /* ensures it doesn't collapse */
		}

		.footer {
			background-color: var(--color-primary-darker);

			.f-body {
				display: flex;
				justify-content: center;
				height: 40rem;
				.f-b-text {
					align-self: center;
				}
			}
		}
	}

	@media (min-width: 480px) {
		.navbar {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			height: 5rem;
			margin-left: 20%;
			margin-right: 20%;
			background-color: var(--color-primary);
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;

			.n-left {
				align-self: center;
				margin-left: 3rem;
				.l-name {
					font-weight: 700;
					font-size: 32px;
				}
			}

			.n-right {
				align-self: center;
				margin-right: 1.5rem;
				margin-right: 1.5rem;
				.n-ul {
					letter-spacing: 3px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;

					.n-li {
						margin-left: 3rem;
						margin-right: 3rem;
						font-size: 24px;
						transition: opacity 300ms ease;
						position: relative;
					}

					.n-li::after {
						content: "";
						position: absolute;
						left: 0;
						bottom: -4px;
						width: 0;
						height: 3px;
						background-image: linear-gradient(
							to right,
							var(--color-orange),
							var(--color-contrast-lighter)
						);
						transition: width 250ms ease-out;
					}

					.n-li:hover {
						/* opacity: 85%; */
						cursor: pointer;
					}

					.n-li:hover::after {
						width: 100%;
					}
				}
			}
		}

		.n-li-icon {
			margin-left: 1rem;
			margin-right: 1rem;
			transition: 250ms;
		}

		.n-li-icon:hover {
			opacity: 85%;
			cursor: pointer;
		}

		.icon-linkedin {
			width: 30px;
			height: 30px;
			display: inline-block; /* ensures it doesn't collapse */
		}

		.icon-github {
			width: 35px;
			height: 35px;
			display: inline-block; /* ensures it doesn't collapse */
		}

		.footer {
			background-color: var(--color-primary-darker);

			.f-body {
				display: flex;
				justify-content: center;
				height: 40rem;
				.f-b-text {
					align-self: center;
				}
			}
		}
	}
</style>
