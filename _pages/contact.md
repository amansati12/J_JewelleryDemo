---
title: "Contact Jewellery Store"
description: "Contact Aurelia Jewels for gold jewellery, diamond jewellery, bridal jewellery, custom jewellery, jewellery offers, showroom visits and WhatsApp inquiries."
image: "/assets/images/showroom.jpg"
---

<section class="page-hero compact-hero" style="background-image: linear-gradient(90deg, rgba(9,7,4,.88), rgba(9,7,4,.32)), url('{{ "/assets/images/showroom.jpg" | relative_url }}');">
  <div class="container">
    <p class="eyebrow reveal">Contact us</p>
    <h1 class="reveal">Visit the showroom or start your jewellery inquiry online.</h1>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 reveal">
        <form class="contact-form">
          <div class="row g-3">
            <div class="col-md-6"><label for="name">Name</label><input id="name" type="text" required></div>
            <div class="col-md-6"><label for="phone">Phone</label><input id="phone" type="tel" required></div>
            <div class="col-md-6"><label for="email">Email</label><input id="email" type="email"></div>
            <div class="col-md-6"><label for="interest">Interested in</label><select id="interest"><option>Bridal jewellery</option><option>Gold jewellery</option><option>Diamond jewellery</option><option>Custom jewellery</option><option>Jewellery offers</option></select></div>
            <div class="col-12"><label for="message">Message</label><textarea id="message" rows="5" placeholder="Tell us about the occasion, budget or design you have in mind."></textarea></div>
            <div class="col-12"><button class="btn btn-gold" type="submit">Send Inquiry</button></div>
          </div>
        </form>
      </div>
      <div class="col-lg-6 reveal">
        <div class="contact-panel">
          <h2>Showroom details</h2>
          <p>{{ site.business.address }}</p>
          <p><strong>Phone:</strong> <a href="tel:{{ site.business.phone | remove: ' ' }}">{{ site.business.phone }}</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/{{ site.business.whatsapp }}">Chat with us</a></p>
          <p><strong>Email:</strong> <a href="mailto:{{ site.business.email }}">{{ site.business.email }}</a></p>
          <div class="map-placeholder">
            <span>Google Maps Placeholder</span>
            <p>Embed your Google Maps iframe here after replacing the showroom address.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
