<template>
	<div class="page">
		<!-- Hero -->
		<section class="about-hero container my-5 text-center">
			<h1 class="hero-title">
				About
				<span class="highlight">RENTRO</span>
			</h1>
			<p class="hero-subtitle">Premium self-drive car rentals reimagined for the modern traveler</p>
		</section>

		<!-- Story -->
		<section class="story-section container mb-5">
			<div class="row align-items-center">
				<div class="col-lg-6 mb-4">
					<img src="../assets/images/pic2.jpeg" class="story-image" />
				</div>
				<div class="col-lg-6">
					<h2 class="section-title">Our Story</h2>
					<p class="about-text large">
						Founded in 2023, RENTRO was born from frustration with outdated car rental experiences.
						We set out to create a platform that combines premium vehicles, transparent pricing, and
						seamless digital booking - all backed by 24/7 roadside assistance.
					</p>
					<div class="stats-grid">
						<div class="stat-item">
							<h3>50+</h3>
							<p>Cities Served</p>
						</div>
						<div class="stat-item">
							<h3>10K+</h3>
							<p>Happy Drivers</p>
						</div>
						<div class="stat-item">
							<h3>500+</h3>
							<p>Premium Cars</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Mission -->
		<section class="mission-section container mb-5">
			<div class="glass-card text-center p-5">
				<h2 class="section-title mb-4">Our Mission</h2>
				<p class="about-text large">
					Make premium self-drive rentals accessible, transparent, and delightful across India.
				</p>
				<div class="row mt-5">
					<div class="col-md-4 mb-4">
						<div class="icon-circle large me-3 mx-auto mb-3">
							<i class="fa-solid fa-car"></i>
						</div>
						<h5>Premium Fleet</h5>
						<p>Curated, well-maintained vehicles</p>
					</div>
					<div class="col-md-4 mb-4">
						<div class="icon-circle large accent me-3 mx-auto mb-3">
							<i class="fa-solid fa-shield-check"></i>
						</div>
						<h5>Full Insurance</h5>
						<p>Zero deposit, comprehensive coverage</p>
					</div>
					<div class="col-md-4 mb-4">
						<div class="icon-circle large me-3 mx-auto mb-3">
							<i class="fa-solid fa-headset"></i>
						</div>
						<h5>24/7 Support</h5>
						<p>Roadside assistance anytime</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Team -->
		<section class="team-section container text-center">
			<h2 class="section-title mb-5">Meet Our Team</h2>
			<div class="row">
				<!-- src="https://media.licdn.com/dms/image/v2/C5603AQELgisVvmCAvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1596261422263?e=1767830400&v=beta&t=T-5rWWtnsVpuWWzZbMsXdqhIj0dVz6btS2P5-y4EyaE" -->
				<div class="col-md-4 mb-4">
					<div class="team-card">
						<img
							src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
							class="team-avatar"
						/>
						<h5>Aquibe V</h5>
						<p class="team-role">Founder & CEO</p>
					</div>
				</div>
				<div class="col-md-4 mb-4">
					<div class="team-card">
						<img
							src="https://media.licdn.com/dms/image/v2/D5603AQG6osup7bkk0Q/profile-displayphoto-shrink_400_400/B56ZSR_iC4GoAg-/0/1737616140918?e=1767830400&v=beta&t=vjjFkZ3XfF235IjTIaDveXb_OLu5kTJIq2SfH_92_UU"
							class="team-avatar"
						/>
						<h5>Ranfees</h5>
						<p class="team-role">Tech Lead</p>
					</div>
				</div>
				<div class="col-md-4 mb-4">
					<div class="team-card">
						<img
							src="https://media.istockphoto.com/id/2198863601/vector/fill-avatar-user-profile-person-icon-in-black-color-gender-neutral-silhouette-profile.jpg?s=612x612&w=0&k=20&c=bUM7-mREhpuKHcRDMRQNUmQrqFHChzPDuBtlUJRft3o="
							class="team-avatar"
						/>
						<h5>Nadiya</h5>
						<p class="team-role">Tech Lead</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
/*  page background */
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
</style>
