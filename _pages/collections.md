---
title: "Jewellery Collections"
description: "Browse gold jewellery, diamond jewellery, bridal jewellery, silver jewellery, rings, bangles, necklaces, earrings and custom jewellery collections."
image: "/assets/images/gold-necklace.jpg"
---

<section class="page-hero compact-hero" style="background-image: linear-gradient(90deg, rgba(9,7,4,.86), rgba(9,7,4,.35)), url('{{ "/assets/images/gold-necklace.jpg" | relative_url }}');">
  <div class="container">
    <p class="eyebrow reveal">Collections</p>
    <h1 class="reveal">Gold, diamond, bridal and custom jewellery for every chapter.</h1>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="row g-4">
      {% assign cards = "Gold Necklaces|assets/images/gold-necklace.jpg|Layered harams, chokers and lightweight necklaces for daily, festive and wedding jewellery styling.;Diamond Rings|assets/images/diamond-ring.jpg|Solitaire rings, cocktail rings and engagement designs with certified diamond clarity.;Bangles|assets/images/bangles.jpg|Classic gold bangles, temple bangles, diamond kadas and stackable modern cuffs.;Earrings|assets/images/earrings.jpg|Studs, jhumkas, chandbalis and diamond earrings designed for graceful movement.;Silver Jewellery|assets/images/silver-jewellery.jpg|Elegant silver jewellery for gifting, festive rituals and everyday styling.;Custom Jewellery|assets/images/custom-jewellery.jpg|Personalized jewellery created through consultation, sketches and careful material selection." | split: ";" %}
      {% for card in cards %}
        {% assign data = card | split: "|" %}
        <div class="col-md-6 col-lg-4 reveal">
          <article class="lux-card product-card">
            <img src="{{ data[1] | relative_url }}" alt="{{ data[0] }} at Aurelia Jewels">
            <div class="card-body">
              <h2>{{ data[0] }}</h2>
              <p>{{ data[2] }}</p>
              <a href="{{ '/contact/' | relative_url }}">Inquire Now</a>
            </div>
          </article>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
