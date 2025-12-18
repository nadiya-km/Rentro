<template>
  <section class="about-wrapper">
    <!-- HERO -->
    <div class="about-hero">
      <h1>About <span>RENTRO</span></h1>
      <p>Your trusted partner for smart, reliable & stylish car rentals</p>
    </div>

    <!-- CONTENT -->
    <div class="about-content">
      <div class="about-text">
        <h2>Who We Are</h2>
        <p>
          <strong>RENTRO</strong> is a modern car rental platform designed to make
          renting a car effortless, transparent, and enjoyable. Whether you
          need a ride for a day, a weekend getaway, or a long trip — RENTRO has
          you covered.
        </p>
        <p>
          We combine technology with trust to deliver a smooth booking
          experience, well-maintained vehicles, and clear pricing with no hidden
          surprises.
        </p>
      </div>

      <div class="about-card">
        <h3>Why Choose RENTRO?</h3>
        <ul>
          <li>Wide range of quality cars</li>
          <li>Transparent & affordable pricing</li>
          <li>Easy online booking</li>
          <li>Secure & reliable service</li>
          <li>Customer-first support</li>
        </ul>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="features">
      <div class="feature-box">
        <h4>🚗 Smart Fleet</h4>
        <p>Hand-picked vehicles that meet quality and safety standards.</p>
      </div>
      <div class="feature-box">
        <h4>⚡ Fast Booking</h4>
        <p>Book your car in minutes with our seamless platform.</p>
      </div>
      <div class="feature-box">
        <h4>🔒 Secure</h4>
        <p>Your data and payments are protected with modern security.</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="about-cta">
      <h2>Ready to Ride with RENTRO?</h2>
      <router-link to="/cars" class="cta-btn">Explore Cars</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
/* THEME COLORS */
:root {
  --green-dark: #0f3d2e;
  --green-main: #0d5c46;
  --green-light: #16a085;
  --glass: rgba(255, 255, 255, 0.08);
}

.about-wrapper {
  min-height: 100vh;
  background: radial-gradient(circle at top, #0d5c46, #062b21);
  color: #eafaf5;
  padding-bottom: 60px;
}

/* HERO */
.about-hero {
  text-align: center;
  padding: 100px 20px 60px;
}

.about-hero h1 {
  font-size: 3rem;
  font-weight: 700;
}

.about-hero span {
  color: var(--green-light);
}

.about-hero p {
  margin-top: 10px;
  font-size: 1.1rem;
  opacity: 0.85;
}

/* CONTENT */
.about-content {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
}

.about-text h2 {
  margin-bottom: 15px;
  color: var(--green-light);
}

.about-text p {
  line-height: 1.7;
  margin-bottom: 15px;
}

.about-card {
  background: var(--glass);
  backdrop-filter: blur(14px);
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.about-card h3 {
  margin-bottom: 15px;
}

.about-card ul {
  list-style: none;
  padding: 0;
}

.about-card li {
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* FEATURES */
.features {
  max-width: 1100px;
  margin: 60px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-box {
  background: var(--glass);
  backdrop-filter: blur(12px);
  padding: 25px;
  border-radius: 16px;
  text-align: center;
}

.feature-box h4 {
  margin-bottom: 10px;
  color: var(--green-light);
}

/* CTA */
.about-cta {
  margin-top: 80px;
  text-align: center;
}

.about-cta h2 {
  margin-bottom: 20px;
}

.cta-btn {
  padding: 12px 30px;
  border-radius: 30px;
  background: linear-gradient(135deg, #16a085, #0d5c46);
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.cta-btn:hover {
  opacity: 0.9;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .about-hero h1 {
    font-size: 2.3rem;
  }
}
</style>