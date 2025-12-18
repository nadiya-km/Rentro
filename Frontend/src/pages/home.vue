<template>
  <div class="page">


    <!-- ---------- hero ---------- -->
    <section class="hero-section container my-4">
      <div class="hero-box">
        <div class="hero-overlay"></div>

        <div class="hero-content text-center">
          <h1>
            UNLOCK YOUR <br />
            ADVENTURE
          </h1>

          <RouterLink to="/cars" class="btn btn-danger rounded-pill px-4 mt-3">
            View Cars
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ------------ HOW IT WORKS --------------->
    <section class="how-it-works container text-center">
      <h3 class="section-title">HOW IT WORKS</h3>

      <div class="row mt-5">
        <div class="col-md-4 mb-4">
          <img src="@/assets/images/Location7.png" class="icon-img" />
          <p>Choose your location and find your best car.</p>
        </div>

        <div class="col-md-4 mb-4">
          <img src="@/assets/images/PickupDate.png" class="icon-img" />
          <p>Select pickup date and time.</p>
        </div>

        <div class="col-md-4 mb-4">
          <img src="@/assets/images/BookyouCar.png" class="icon-img" />
          <p>Book instantly & drive away.</p>
        </div>
      </div>
    </section>

    <!--- ABOUT -->
    <section class="about-section container my-5">
      <div class="about-box">
        <div class="row align-items-center">

          <div class="col-lg-6 mb-4 mb-lg-0 position-relative">
            <div class="image-stack">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" class="img-large" />
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" class="img-small" />
            </div>
          </div>

          <div class="col-lg-6">
            <small class="text-danger fw-semibold">* About Us</small>

            <h2 class="fw-bold mt-2">
              Your trusted partner in<br />
              reliable car rental
            </h2>

            <p class="text-muted mt-3">
              We provide premium car rental services with transparent pricing and
              a seamless booking experience.
            </p>

            <div class="d-flex align-items-start mt-4">
              <div class="icon-circle me-3">
                <i class="fa-solid fa-calendar-check"></i>
              </div>
              <div>
                <h6 class="fw-semibold">Easy Booking Process</h6>
                <p class="text-muted mb-0">
                  Optimized booking for fast and safe service.
                </p>
              </div>
            </div>

            <div class="d-flex align-items-start mt-3">
              <div class="icon-circle light me-3">
                <i class="fa-solid fa-car"></i>
              </div>
              <div>
                <h6 class="fw-semibold">Convenient Pick-Up & Return</h6>
                <p class="text-muted mb-0">
                  Flexible pickup & return at your convenience.
                </p>
              </div>
            </div>

            <button class="btn btn-danger rounded-pill mt-4 px-4">
              Contact Us <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- --------------->
    <section class="why container text-center">
      <h2>
        Why <span class="highlight">RENTRO</span> is Your Perfect Road Trip Partner
      </h2>

      <div class="row mt-5">
        <div class="col-md-6 mb-4">
          <div class="why-box blue">
            <h4>No Hidden Fees</h4>
            <p>Transparent pricing, always.</p>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="why-box glass">
            <h4>100% Guaranteed</h4>
            <p>Insurance & verified cars.</p>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="why-box glass">
            <h4>Unwavering Service</h4>
            <p>24/7 roadside assistance.</p>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="why-box glass">
            <h4>Fast Booking</h4>
            <p>Book in under 60 seconds.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="footer-section">
      <div class="container">
        <div class="row gy-4">

          <div class="col-lg-3">
            <h4><span class="text-danger">RENT</span>RO</h4>
            <p class="text-muted">
              Experience the ease and convenience of renting a car with Novaride.
            </p>
          </div>

          <div class="col-lg-3">
            <h6>Legal Policy</h6>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div class="col-lg-3">
            <h6>Quick Links</h6>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
            </ul>
          </div>

          

        </div>

        <hr />

        <div class="d-flex justify-content-between flex-wrap">
          <p class="mb-0">© 2026 Novaride. All rights reserved.</p>

          <div class="socials">
            <i class="fab fa-youtube"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-x-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
<style scoped>
* {
  font-family: "Poppins", sans-serif;
}



.page {
  padding-top: 100px;
    
   background: linear-gradient(
  180deg,
  #C8C6D0 5%,
  #232727 35%,
  #232727 55%,
  #C8C6D0 75%,
  #0D1D25 100%
);
}

/* HERO */
.hero-box {
  height: 380px;
  border-radius: 40px;
  background: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70") center/cover;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.hero-content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
}

.hero-content span {
  color: #ff4d30;
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
  border: 8px solid white;
}

.icon-circle {
  width: 45px;
  height: 45px;
  background: #ff4d30;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle.light {
  background: #ffe5df;
  color: #ff4d30;
}

/* ABOUT ROUNDED CONTAINER */
.about-box {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-radius: 40px;
  padding: 80px 40px;

  /* Glass border */
  border: 1px solid rgba(255, 255, 255, 0.25);

  /* Neumorphism shadows */
  box-shadow:
    12px 12px 30px rgba(0, 0, 0, 0.35),
    -12px -12px 30px rgba(255, 255, 255, 0.08);
}


/* FOOTER */
.footer-section {
  background: #000;
  color: white;
  padding: 60px 0;
  border-radius: 40px 40px 0 0;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  color: #aaa;
  margin-bottom: 8px;
}

.subscribe-box {
  display: flex;
  background: #222;
  border-radius: 30px;
  padding: 6px;
}

.subscribe-box input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  padding-left: 15px;
}

.subscribe-box button {
  background: #ff4d30;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
}

.why {
  padding: 80px 0;
}

.highlight {
  color: #ff3c00;
}

.why-box {
  padding: 30px;
  border-radius: 18px;
  height: 100%;
  transition: 0.3s ease;
}

.why-box h4 {
  font-weight: 600;
}

.why-box p {
  margin-top: 10px;
  color: #eee;
}

.blue {
  background: linear-gradient(135deg, #292431, #68605a);
  color: white;
}

.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.why-box:hover {
  transform: translateY(-6px);
}

.socials i {
  border: 1px solid white;
  border-radius: 50%;
  padding: 8px;
  margin-left: 8px;
}

.how-it-works {
  padding: 80px 0;
}

.section-title {
  font-weight: 700;
  letter-spacing: 1px;
}

.icon-img {
  width: 60px;
  margin-bottom: 15px;
}

.how-it-works p {
  color: #666;
  max-width: 260px;
  margin: auto;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .img-large,
  .img-small {
    width: 80%;
    position: static;
    margin-bottom: 20px;
  }
}
</style>