<template>
	<div class="page">
		<!-- ================= HERO ================= -->
		<section class="hero-section container my-4">
			<div class="hero-box">
				<div class="hero-overlay"></div>

				<div class="hero-content text-center">
					<p class="hero-kicker">Premium self-drive car rentals</p>
					<h1>
						UNLOCK YOUR
						<br />
						ADVENTURE WITH RENTRO
					</h1>
					<p class="hero-subtitle">
						Discover, compare and book fully insured rental cars in just a few clicks.
					</p>

					<RouterLink to="/cars" class="btn btn-primary main-btn rounded-pill px-4 mt-3">
						<i class="fa-solid fa-car-side me-2"></i>
						View Available Cars
					</RouterLink>
				</div>
			</div>
		</section>

		<!-- ================= HOW IT WORKS ================= -->
		<section class="how-it-works container text-center">
			<h3 class="section-title">HOW RENTRO WORKS</h3>
			<p class="section-subtitle">
				A streamlined booking flow designed for fast, transparent and secure rentals.
			</p>

			<div class="row mt-5">
				<div class="col-md-4 mb-4">
					<img src="@/assets/images/Location7.png" class="icon-img" />
					<h6 class="step-title">Choose Location</h6>
					<p>Select your city and browse cars available nearby for your dates.</p>
				</div>

				<div class="col-md-4 mb-4">
					<img src="@/assets/images/PickupDate.png" class="icon-img" />
					<h6 class="step-title">Pick Date & Time</h6>
					<p>Set flexible pickup and return slots that match your travel plan.</p>
				</div>

				<div class="col-md-4 mb-4">
					<img src="@/assets/images/BookyouCar.png" class="icon-img" />
					<h6 class="step-title">Confirm & Drive</h6>
					<p>Complete KYC, pay securely online and drive off with a verified car.</p>
				</div>
			</div>
		</section>

		<!-- ================= ABOUT ================= -->
		<section class="about-section container my-5">
			<div class="about-box">
				<div class="row align-items-center">
					<div class="col-lg-6 mb-4 mb-lg-0 position-relative">
						<div class="image-stack">
							<img src="../assets/images/img1.jpeg" class="img-large" />
							<img
								src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
								class="img-small"
							/>
						</div>
					</div>

					<div class="col-lg-6">
						<small class="text-accent fw-semibold">* About RENTRO</small>

						<h2 class="fw-bold mt-2">
							A smarter way
							<br />
							to rent a car.
						</h2>

						<p class="about-text mt-3">
							RENTRO offers a curated fleet of well-maintained vehicles, simple pricing and
							responsive support so that every trip feels safe, predictable and enjoyable.
						</p>

						<div class="d-flex align-items-start mt-4">
							<div class="icon-circle me-3">
								<i class="fa-solid fa-calendar-check"></i>
							</div>
							<div>
								<h6 class="fw-semibold">Fast, digital booking</h6>
								<p class="about-text mb-0">
									Real-time availability, instant confirmation and secure online payments.
								</p>
							</div>
						</div>

						<div class="d-flex align-items-start mt-3">
							<div class="icon-circle light me-3">
								<i class="fa-solid fa-location-dot"></i>
							</div>
							<div>
								<h6 class="fw-semibold">Flexible pickup options</h6>
								<p class="about-text mb-0">
									Pick up from a nearby hub or choose doorstep delivery where available.
								</p>
							</div>
						</div>

						<router-link
							to="/contact"
							class="btn btn-outline-light secondary-btn rounded-pill mt-4 px-4 fa-solid fa-headset me-2"
						>
							Talk to Support
						</router-link>
					</div>
				</div>
			</div>
		</section>

		<!-- ================= WHY ================= -->
		<section class="why container text-center">
			<h2>
				Why
				<span class="highlight">RENTRO</span>
				for your next trip?
			</h2>

			<p class="section-subtitle">
				Built for weekend drives, business travel and everything in between.
			</p>

			<div class="row mt-5">
				<div class="col-md-6 mb-4">
					<div class="why-box blue">
						<h4>Transparent Pricing</h4>
						<p>No hidden charges, clear fuel and kilometre policies on every car.</p>
					</div>
				</div>

				<div class="col-md-6 mb-4">
					<div class="why-box glass">
						<h4>Verified Fleet</h4>
						<p>Regularly serviced cars with full documentation and active insurance.</p>
					</div>
				</div>

				<div class="col-md-6 mb-4">
					<div class="why-box glass">
						<h4>24/7 Assistance</h4>
						<p>Roadside help and customer support whenever you need it.</p>
					</div>
				</div>

				<div class="col-md-6 mb-4">
					<div class="why-box glass">
						<h4>Frictionless Experience</h4>
						<p>Digital KYC, quick handover and smooth returns at the end of your trip.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- ================= FOOTER ================= -->
		<footer class="footer-section">
			<div class="container">
				<div class="row gy-4">
					<div class="col-lg-3">
						<h4>
							<span class="text-accent">RENTRO</span>
							RIDES
						</h4>
						<p class="footer-text">
							Your trusted companion for safe, reliable and modern self-drive car rentals.
						</p>
					</div>

					<div class="col-lg-3">
						<h6>Legal</h6>
						<ul>
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
							<li>Cookie Policy</li>
						</ul>
					</div>

					<div class="col-lg-3">
						<h6>Company</h6>
						<ul>
							<li>About RENTRO</li>
							<li>Fleet & Pricing</li>
							<li>Help Center</li>
						</ul>
					</div>

					<div class="col-lg-3">
						<h6>Stay Updated</h6>
						<div class="subscribe-box">
							<input type="email" placeholder="Enter your email" />
							<button>
								<i class="fa-solid fa-paper-plane"></i>
							</button>
						</div>
						<small class="footer-text d-block mt-2">
							Be the first to know about new cities, offers and features.
						</small>
					</div>
				</div>

				<hr />

				<div class="d-flex justify-content-between flex-wrap">
					<p class="mb-0 footer-text">© 2026 RENTRO. All rights reserved.</p>

					<div class="logo">
						<RouterLink class="navbar-brand d-flex align-items-center" to="/">
							<img src="@/assets/images/logo2.png" alt="Logo" height="40" />
						</RouterLink>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
<style scoped>
* {
	font-family: 'Poppins', sans-serif;
}

.page {
	min-height: 100vh;
	margin: 0; /* ZERO margins */
	padding-top: 120px; /* Navbar + breathing room */
	width: 100%;
	position: relative;
	background: radial-gradient(
			ellipse 60% 30% at 20% 5%,
			rgba(254, 215, 165, 0.4) 0%,
			transparent 50%
		),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(175, 159, 139, 0.3) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
}

/* HERO */
.hero-box {
	height: 380px;
	border-radius: 40px;
	background: url('https://images.unsplash.com/photo-1503376780353-7e6692767b70') center/cover;
	position: relative;
	overflow: hidden;
}

.hero-overlay {
	position: absolute;
	inset: 0;
	background: rgba(10, 12, 20, 0.75); /* Reduced from 0.9 to 0.75 */
}

.hero-content {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	color: #fdf4e6;
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.hero-kicker {
	font-size: 0.85rem;
	letter-spacing: 2px;
	text-transform: uppercase;
	opacity: 0.95;
	color: #f5e1c9;
}

.hero-content h1 {
	font-size: 2.6rem;
	font-weight: 700;
	color: #fdf4e6;
}

.hero-subtitle {
	max-width: 520px;
	margin: 12px auto 0;
	font-size: 0.98rem;
	color: #f0ddc5;
}

/* primary gradient button */
.main-btn {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	color: #fff;
	box-shadow: 0 8px 18px rgba(255, 120, 70, 0.4);
	font-weight: 600;
}

.main-btn:hover {
	background: linear-gradient(135deg, #ff4d30, #ff9960);
	transform: translateY(-1px);
	box-shadow: 0 12px 25px rgba(255, 120, 70, 0.6);
}

/* secondary outline button */
.secondary-btn {
	border: 1px solid #fed7a5;
	color: #fed7a5;
	background: rgba(10, 12, 20, 0.8);
	backdrop-filter: blur(12px);
}

.secondary-btn:hover {
	background: rgba(254, 215, 165, 0.15);
}

/* ABOUT */
.image-stack {
	position: relative;
}

.img-large {
	width: 70%;
	border-radius: 50%;
}

.img-small {
	width: 55%;
	position: absolute;
	bottom: -20px;
	right: 0;
	border-radius: 50%;
	border: 8px solid #ffffff;
}

.icon-circle {
	width: 35px;
	height: 35px;
	background: #9e6752;
	color: #fdf4e6;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
}

.icon-circle.light {
	background: #fed7a5;
	color: #9e6752;
}

/* ABOUT container - stronger contrast */
.about-box {
	background: rgba(10, 12, 20, 0.95);
	backdrop-filter: blur(16px);
	border-radius: 40px;
	padding: 80px 40px;
	border: 1px solid rgba(254, 215, 165, 0.3);
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65);
}

.text-accent {
	color: #ffb98a;
}

.about-text {
	color: #f0ddc5;
}

/* HOW IT WORKS */
.how-it-works {
	padding: 80px 0;
}

.section-title {
	font-weight: 700;
	letter-spacing: 1px;
	color: #fdf4e6;
}

.section-subtitle {
	margin-top: 8px;
	color: #f0ddc5;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}

.icon-img {
	width: 60px;
	margin-bottom: 15px;
	filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
}

.step-title {
	font-weight: 600;
	color: #fdf4e6;
	margin-bottom: 6px;
}

.how-it-works p {
	color: #f0ddc5;
	max-width: 260px;
	margin: auto;
}

/* WHY */
.why {
	padding: 80px 0;
}

.highlight {
	color: #ffb98a;
}

.why-box {
	padding: 30px;
	border-radius: 18px;
	height: 100%;
	transition: 0.3s ease;
}

.why-box h4 {
	font-weight: 600;
	color: #fdf4e6;
}

.why-box p {
	margin-top: 10px;
	color: #f0ddc5;
}

/* why box styles - stronger contrast */
.blue {
	background: linear-gradient(135deg, #2d4354, #20212b);
	border: 1px solid rgba(254, 215, 165, 0.25);
}

.glass {
	background: rgba(10, 12, 20, 0.9);
	backdrop-filter: blur(12px);
	border: 1px solid rgba(254, 215, 165, 0.3);
}

.why-box:hover {
	transform: translateY(-6px);
	box-shadow: 0 20px 40px rgba(255, 120, 70, 0.3);
}

/* FOOTER - stronger contrast */
.footer-section {
	background: rgba(10, 12, 20, 0.95);
	color: #fdf4e6;
	padding: 60px 0;
	border-radius: 40px 40px 0 0;
	border-top: 1px solid rgba(254, 215, 165, 0.2);
}

.footer-section h4,
.footer-section h6 {
	color: #fdf4e6;
}

.footer-section ul {
	list-style: none;
	padding: 0;
}

.footer-section ul li {
	color: #d9cfc0;
	margin-bottom: 8px;
}

.footer-text {
	color: #d9cfc0;
}

.subscribe-box {
	display: flex;
	background: rgba(37, 40, 56, 0.8);
	border-radius: 30px;
	padding: 6px;
	border: 1px solid rgba(254, 215, 165, 0.2);
}

.subscribe-box input {
	flex: 1;
	background: transparent;
	border: none;
	color: #fdf4e6;
	padding-left: 15px;
	font-size: 0.9rem;
}

.subscribe-box input::placeholder {
	color: #d9cfc0;
}

.subscribe-box button {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	color: #fff;
}

/* SOCIAL ICONS */
.socials i {
	border: 1px solid #fed7a5;
	border-radius: 50%;
	padding: 8px;
	margin-left: 8px;
	color: #fed7a5;
	transition: 0.3s ease;
}

.socials i:hover {
	background: rgba(254, 215, 165, 0.2);
}

/* RESPONSIVE */
@media (max-width: 768px) {
	.hero-content h1 {
		font-size: 2rem;
	}

	.hero-subtitle {
		font-size: 0.9rem;
	}

	.img-large,
	.img-small {
		width: 80%;
		position: static;
		margin-bottom: 20px;
	}

	.about-box {
		padding: 40px 20px;
	}
}
</style>
