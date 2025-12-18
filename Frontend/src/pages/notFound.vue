<template>
	<div class="page">
		<!-- Hero 404 -->
		<section class="notfound-hero container text-center my-5">
			<div class="error-code">404</div>
			<h1 class="hero-title mb-3">Page Not Found</h1>
			<p class="hero-subtitle mb-4">The page you're looking for doesn't exist or has been moved.</p>
			<RouterLink to="/" class="btn btn-primary main-btn rounded-pill px-5 py-3">
				<i class="fa-solid fa-home me-2"></i>
				Back to Home
			</RouterLink>
		</section>

		<!-- Funny Car Illustration -->
		<section class="notfound-illustration container mb-5">
			<div class="row align-items-center"></div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
};
</script>

<style scoped>
.page {
	min-height: 100vh;
	margin: 0;
	padding-top: 120px;
	width: 100%;
	background: radial-gradient(ellipse 60% 30% at 20% 5%, rgba(69, 61, 51, 0.4) 0%, transparent 50%),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(54, 48, 37, 0.218) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
	font-family: 'Poppins', sans-serif;
}

.error-code {
	font-size: 8rem;
	font-weight: 800;
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	margin-bottom: 20px;
	letter-spacing: -4px;
}

.hero-title {
	font-size: 3rem;
	font-weight: 700;
	color: #fdf4e6;
	margin-bottom: 16px;
}

.hero-subtitle {
	font-size: 1.2rem;
	color: #f0ddc5;
	max-width: 600px;
	margin: 0 auto 32px;
}

/* ILLUSTRATION SECTION */
.lost-car-img {
	width: 100%;
	border-radius: 32px;
	box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
	filter: drop-shadow(0 20px 40px rgba(255, 120, 70, 0.2));
}

.icon-circle.small {
	width: 48px;
	height: 48px;
	background: #9e6752;
	color: #fdf4e6;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

.icon-circle.small.accent {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
}

.section-title {
	font-size: 2rem;
	font-weight: 700;
	color: #fdf4e6;
}

.about-text.large {
	font-size: 1.1rem;
	color: #f0ddc5;
	line-height: 1.7;
}

.glass-card {
	background: rgba(10, 12, 20, 0.95);
	backdrop-filter: blur(24px);
	border-radius: 32px;
	border: 1px solid rgba(254, 215, 165, 0.3);
	box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
}

/* BUTTONS */
.main-btn {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	color: #fff;
	font-weight: 700;
	font-size: 16px;
	box-shadow: 0 15px 40px rgba(255, 120, 70, 0.4);
	transition: all 0.3s ease;
}

.main-btn:hover {
	transform: translateY(-3px);
	box-shadow: 0 25px 50px rgba(255, 120, 70, 0.6);
}

.secondary-btn {
	border: 1px solid #fed7a5;
	color: #fed7a5;
	background: rgba(10, 12, 20, 0.8);
	backdrop-filter: blur(16px);
	font-weight: 600;
}

.secondary-btn:hover {
	background: rgba(254, 215, 165, 0.2);
	color: #fff;
}

/* RESPONSIVE */
@media (max-width: 768px) {
	.error-code {
		font-size: 5rem;
	}

	.hero-title {
		font-size: 2.2rem;
	}

	.notfound-hero {
		padding: 80px 0;
	}
}
</style>
