<template>
	<div class="page">
		<!-- Hero -->
		<section class="contact-hero container my-5 text-center">
			<h1 class="hero-title">Get In Touch</h1>
			<p class="hero-subtitle">Ready to hit the road? We're here to help</p>
		</section>

		<!-- Contact Cards -->
		<section class="contact-cards container mb-5">
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="contact-card blue text-center p-5">
						<i class="fa-solid fa-phone-volume fa-2x mb-3"></i>
						<h4>Call Us</h4>
						<p class="contact-text">24/7 Roadside Assistance</p>
						<a href="tel:+919876543210" class="btn btn-outline-light rounded-pill px-4">
							+91 98765 43210
						</a>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-card glass text-center p-5">
						<i class="fa-solid fa-envelope fa-2x mb-3"></i>
						<h4>Email Us</h4>
						<p class="contact-text">Response within 2 hours</p>
						<a href="mailto:hello@rentro.in" class="btn btn-outline-light rounded-pill px-4">
							hello@rentro.in
						</a>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-card accent text-center p-5">
						<i class="fa-solid fa-whatsapp fa-2x mb-3"></i>
						<h4>WhatsApp</h4>
						<p class="contact-text">Instant Support</p>
						<a href="https://wa.me/919876543210" class="btn btn-outline-light rounded-pill px-4">
							Chat Now
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Form -->
		<!-- CONTACT FORM SECTION -->
		<section class="contact-form-section container mb-5">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="glass-card p-5">
						<h2 class="text-center mb-5 section-title">Send us a Message</h2>
						<form>
							<div class="row">
								<div class="col-md-6 mb-4">
									<input type="text" class="form-control" placeholder="Your Name" />
								</div>
								<div class="col-md-6 mb-4">
									<input type="email" class="form-control" placeholder="Your Email" />
								</div>
							</div>
							<div class="mb-4">
								<input type="text" class="form-control" placeholder="Subject" />
							</div>
							<div class="mb-4">
								<textarea class="form-control" rows="5" placeholder="Your Message"></textarea>
							</div>
							<button type="submit" class="btn btn-primary w-100 main-btn">Send Message</button>
						</form>
					</div>
				</div>
			</div>
		</section>

		<!-- Office Locations -->
		<section class="locations-section container pb-5">
			<h2 class="text-center mb-5 section-title">Our Offices</h2>
			<div class="row g-4">
				<div class="col-md-6">
					<div class="location-card">
						<h5>Mumbai HQ</h5>
						<p>
							Unit 501, The Capital, Bandra Kurla Complex
							<br />
							Bandra East, Mumbai 400051
						</p>
						<a href="#" class="view-map">View on Map →</a>
					</div>
				</div>
				<div class="col-md-6">
					<div class="location-card">
						<h5>Bengaluru</h5>
						<p>
							3rd Floor, Koramangala Block 80

							<br />
							Bengaluru 560038
						</p>
						<a href="#" class="view-map">View on Map →</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<style scoped>
/* page background */
.page {
	min-height: 100vh;
	margin: 0;
	padding-top: 120px;
	width: 100%;
	background: radial-gradient(ellipse 60% 30% at 20% 5%, rgba(85, 78, 66, 0.4) 0%, transparent 70%),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(22, 19, 15, 0.3) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
	font-family: 'Poppins', sans-serif;
	font-family: 'Poppins', sans-serif;
}

.about-hero,
.contact-hero {
	padding: 100px 0;
}
.hero-title {
	font-size: 3.5rem;
	font-weight: 700;
	color: #fdf4e6;
	margin-bottom: 20px;
}
.story-image {
	width: 100%;
	border-radius: 30px;
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}
.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	gap: 30px;
	margin-top: 40px;
}
.stat-item h3 {
	font-size: 2.5rem;
	color: #ff9960;
	font-weight: 700;
	margin: 0;
}
.icon-circle.large {
	width: 80px;
	height: 80px;
	font-size: 1.5rem;
}
.icon-circle.accent {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
}
.team-card {
	background: rgba(10, 12, 20, 0.9);
	backdrop-filter: blur(12px);
	border-radius: 20px;
	padding: 40px 20px;
	border: 1px solid rgba(254, 215, 165, 0.3);
	transition: all 0.3s ease;
}
.team-avatar {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin: 0 auto 20px;
	object-fit: cover;
	border: 4px solid rgba(254, 215, 165, 0.3);
}
.team-role {
	color: #f0ddc5;
	font-size: 0.9rem;
}
.contact-card {
	border-radius: 25px;
	backdrop-filter: blur(16px);
	border: 1px solid rgba(254, 215, 165, 0.3);
	transition: all 0.3s ease;
	height: 100%;
}
.contact-card.blue {
	background: linear-gradient(135deg, #2d4354, #20212b);
}
.contact-card.accent {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	color: #fff;
}
.contact-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 30px 60px rgba(255, 120, 70, 0.3);
}
.contact-text {
	color: #f0ddc5;
	font-size: 1.1rem;
}
.location-card {
	background: rgba(37, 40, 56, 0.8);
	padding: 30px;
	border-radius: 20px;
	border-left: 4px solid #ff9960;
	transition: all 0.3s ease;
}
.location-card:hover {
	background: rgba(37, 40, 56, 1);
	transform: translateX(10px);
}
.view-map {
	color: #ff9960;
	font-weight: 500;
	text-decoration: none;
}
.glass-card {
	background: rgba(10, 12, 20, 0.95);
	backdrop-filter: blur(20px);
	border-radius: 30px;
	border: 1px solid rgba(254, 215, 165, 0.3);
}
.about-text.large {
	font-size: 1.1rem;
	line-height: 1.7;
}
/* msg */
.form-control {
	background: rgba(37, 40, 56, 0.8);
	border: 1px solid rgba(254, 215, 165, 0.2);
	color: #fdf4e6;
	border-radius: 16px;
	padding: 14px 18px;
	font-size: 15px;
	transition: all 0.3s ease;
	width: 100%;
	resize: vertical; /* for textarea */
}

.form-control::placeholder {
	color: #d9cfc0;
}

.form-control:focus {
	background: rgba(37, 40, 56, 1);
	border-color: #ff9960;
	box-shadow: 0 0 0 3px rgba(255, 153, 96, 0.2);
	outline: none;
}

/* SEND BUTTON */
.main-btn {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	color: #fff;
	font-weight: 600;
	border-radius: 20px;
	padding: 16px;
	font-size: 16px;
	box-shadow: 0 10px 30px rgba(255, 120, 70, 0.4);
	transition: all 0.3s ease;
}

.main-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 15px 40px rgba(255, 120, 70, 0.6);
}
</style>
