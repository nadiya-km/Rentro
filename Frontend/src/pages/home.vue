
<template>
  <div class="home">

    <!-- HERO SECTION -->
    <div class="hero-container">
      <img src="../assets/images/bg.png" class="hero-bg" />

      <h1 class="heroText">
        UNLOCK YOUR<br />
        ADVENTURE, DRIVE<br />
        YOUR DREAMS
      </h1>
    </div>

    <!-- HOW IT WORKS -->
    <section class="how-it-works mt-5 mb-5 container text-center">
      <h3>HOW IT WORKS</h3>

      <div class="row mt-5">
        <div class="col-md-4 mb-4">
          <img src="../assets/images/Location7.png" class="icon-img" />
          <p class="mt-2">Choose your location and <br> find your best car.</p>
        </div>

        <div class="col-md-4 mb-4">
          <img src="../assets/images/PickupDate.png" class="icon-img" />
          <p class="mt-2">Select your pick-up date and time <br>to rent your car.</p>
        </div>

        <div class="col-md-4 mb-4">
          <img src="../assets/images/BookyouCar.png" class="icon-img" />
          <p class="mt-2">Book your car and <br> we'll deliver it to you.</p>
        </div>
      </div>
    </section>

    <!-- WHY RENTRO -->
    <section class="why container text-center">
      <h2>
        Why <span class="highlight">RENTRO</span> is Your Perfect Road Trip Partner
      </h2>

      <div class="row mt-5">
        <div class="col-md-6 mb-4">
          <div class="why-box blue">
            <h4>No Hidden Fees</h4>
            <p>Transparent pricing. No unexpected charges.</p>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="why-box white">
            <h4>100% Guaranteed</h4>
            <p>Full insurance coverage for peace of mind.</p>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="why-box white">
            <h4>Unwavering Service</h4>
            <p>Seamless rental service at your fingertips.</p>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="why-box white">
            <h4>Convenience is Ours</h4>
            <p>Book your car in minutes with user-friendly UI.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="container footer-container row">

        <div class="col-md-3 col-12 mb-4">
          <div class="footer-logo">Rentro</div>
          <p>Research has influenced my life. Most of what I know is through it.</p>
        </div>

        <div class="col-md-3 col-6 mb-4">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/cars">Cars</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div class="col-md-3 col-6 mb-4">
          <h4>Locations</h4>
          <p>Mumbai</p>
          <p>Bangalore</p>
          <p>Chennai</p>
          <p>Delhi</p>
        </div>

        <div class="col-md-3 col-12 mb-4">
          <h4>Follow Us</h4>
          <div class="icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>

      </div>

      <p class="copy">© 2024 Rentro. All Rights Reserved.</p>
    </footer>
  </div>
</template>






<style scoped>
.home {
  background: #0b0b0b;
  color: white;
  font-family: "Poppins", sans-serif;
}

/* HERO */
.hero-container {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroText {
  position: absolute;
  z-index: 3;
  top: 20%;
  left: 20px;
  font-size: 3rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .heroText {
    font-size: 2rem;
    top: 15%;
  }
}

@media (max-width: 480px) {
  .heroText {
    font-size: 1.6rem;
    top: 10%;
  }
}

/* HOW IT WORKS */
.icon-img {
  width: 60px;
}

.steps p {
  color: #ccc;
}

/* WHY RENTRO */
.highlight {
  color: #4eaaff;
}

.why-box {
  padding: 25px;
  border-radius: 12px;
}

.blue {
  background: #007bff;
}

.white {
  background: #ffffff0d;
}

/* FOOTER */
footer {
  background: #0f1624;
  padding: 60px 0 20px;
}

.footer-logo {
  font-size: 24px;
  font-weight: bold;
}

footer a {
  color: #ccc;
  text-decoration: none;
  margin-bottom: 6px;
  display: block;
}

.icons i {
  margin-right: 15px;
  font-size: 22px;
}

.copy {
  text-align: center;
  margin-top: 25px;
  color: #888;
}

</style>
