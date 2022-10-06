import React from 'react';
import "./Faq.css";

function Faq(props) {
  return (
  <section class="faq__section section--padding">
    <div class="container">
      <div class="faq__section--inner">
        <div class="face__step one">
          <h2 class="face__step--title h3 mb-30">Frequently Asked Question</h2>
          <div class="row">
            <div class="col-lg-12 accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion__container">
  
                <div class="accordion__items" id="flush-headingOne">
                  <h2 class="accordion__items--title" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-controls="flush-collapseOne">
                    <button class="faq__accordion--btn accordion__items--button" aria-expanded="false">
                    How do i get started?
                    </button>
                  </h2>
                  <div class=".accordion__items--body accordion-collapse collapse" id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <p class="accordion__items--body__desc">Start your No-stress journey with 3 easy steps. Create an account, Fund your wallet, Start making payments</p>
                  </div>
                </div>
                <div class="accordion__items" id="flush-headingTwo">
                  <h2 class="accordion__items--title" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-controls="flush-collapseTwo">
                    <button class="faq__accordion--btn accordion__items--button" aria-expanded="false">
                    Is Your Platform For Fast and Easy?
                    </button>
                  </h2>
                  <div class=".accordion__items--body accordion-collapse collapse" id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <p class="accordion__items--body__desc">Perform your online transactions swiftly without extra cost.</p>
                  </div>
                </div>
                <div class="accordion__items" id="flush-headingThree">
                  <h2 class="accordion__items--title" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-controls="flush-collapseThree">
                    <button class="faq__accordion--btn accordion__items--button" aria-expanded="false">
                    How do i fund my wallet?
                    </button>
                  </h2>
                  <div class=".accordion__items--body accordion-collapse collapse" id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <p class="accordion__items--body__desc">You can fund your wallet using any of the three payment means. Bank Transfer, Using your ATM card.</p>
                  </div>
                </div>
                <div class="accordion__items" id="flush-headingFour">
                  <h2 class="accordion__items--title" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-controls="flush-collapseFour">
                    <button class="faq__accordion--btn accordion__items--button" aria-expanded="false">
                    Can i retail your services?
                    </button>
                  </h2>
                  <div class=".accordion__items--body accordion-collapse collapse" id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <p class="accordion__items--body__desc">Our Products can be retailed, as they are affordable. You can retail our Products to others and make profit.</p>
                  </div>
                </div>
                <div class="accordion__items" id="flush-headingFive">
                  <h2 class="accordion__items--title" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-controls="flush-collapseFive">
                    <button class="faq__accordion--btn accordion__items--button" aria-expanded="false">
                    What's your working period?
                    </button>
                  </h2>
                  <div class=".accordion__items--body accordion-collapse collapse" id="flush-collapseFive" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <p class="accordion__items--body__desc">We offer 24/7 service with exception to 6:00pm to 6:00pm on Saturdays.</p>
                  </div>
                </div>
                <div class="accordion__items" id="flush-headingSix">
                  <h2 class="accordion__items--title" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-controls="flush-collapseSix">
                    <button class="faq__accordion--btn accordion__items--button" aria-expanded="false">
                    Is your products compatible?
                    </button>
                  </h2>
                  <div class=".accordion__items--body accordion-collapse collapse" id="flush-collapseSix" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                    <p class="accordion__items--body__desc">Yes, it is compatible with all devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Faq;