<template>
<div>

    <carousel>
        <slide>
            <v-img src="../assets/images/group-of-company-img.jpeg" />
        </slide>
        <slide>
             <v-img src="../assets/images/identity-11.png" />
        </slide>
    </carousel>


<section class="bg-light ">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 pt-5">
                                    <div class="text-center">
                                        <h2 class="mb-5">Services</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mb-5 aos-init aos-animate" data-aos="fade-up">
                                    <a class="card text-center text-decoration-none h-100 lift" href="#!">
                                        <div class="card-body py-5">
                                            <h5>CITIZEN</h5>
                                            <p class="card-text small">Our product is full of customized and extendable components.</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <a class="card text-center text-decoration-none h-100 lift" href="#!"><div class="card-body py-5">
                                            <h5>NON-CITIZEN</h5>
                                            <p class="card-text small">Powerful utility classes makes it easy to customize your product.</p>
                                        </div></a>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <a class="card text-center text-decoration-none h-100 lift" href="#!"><div class="card-body py-5">
                                            <h5>BUSINESS</h5>
                                            <p class="card-text small">Our flex based layouts offer a beautifully reponsive approach.</p>
                                        </div></a>
                                </div>
                            </div>
                        </div>
                    </section>

<footer class="footer-bs">
    <div class="row container">
        <div class="col-md-4 footer-brand animated fadeInLeft">
            <h4 class="text-theme">Office Address</h4>
            <p>61, Adetokunbo Ademola Crescent, Wuse 2, Abuja, FCT. Nigeria.</p>
            <h4 class="text-theme">Phone</h4>
            <a href="tel: +2348073990518">+ 234 (807) 399 0518</a>
            <h4 class="text-theme">Email</h4>
            <a href="mailto:servicedesk@galaxybackbone.com.ng?subject=feedback" >servicedesk@galaxybackbone.com.ng</a>

        </div>
        <div class="col-md-4 footer-nav animated fadeInUp">
            <div class="row">
                <div class="col-md-6">
                    <ul class="list">
                        <li><a href="listing.html">MDA Listing</a></li>
                        <li><a href="#">About US</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list">
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</footer>
<div class="below-footer">
    <a href="#">Privacy Policy |</a>
    <a href="#">Terms of Use |</a>
    <a href="#">Online Security |</a>
    <a href="#">About Us |</a>
    <a href="#">Contact Us</a>
    <p>2021 Interra Networks, Inc. All rights reserved.</p>
</div>

</div>
</template>


<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
    components: {
        Carousel,
        Slide
    }
    };
</script>
