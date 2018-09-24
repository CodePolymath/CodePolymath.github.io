<!DOCTYPE html>
<html lang="en">
    <head>
    <title>NicoleBakesCakes - Professional pastries, cakes and treats for all occasions!</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="Southern California special occasions | professional wedding cakes, birthday cakes, cupcakes, cake pops and other treats.">
    <meta name="keywords" content="weddings, wedding, birthday, cake, cupcakes, pastries, cake pops, fondant, bridal showers, baby showers, rice krispy treats, mini cupcakes">
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,200,300|Sacramento' rel='stylesheet' type='text/css'>
    <link type="text/css" rel="stylesheet" href="css/mainA.css">
    <!--[if IE 8]>
        <link type="text/css" rel="stylesheet" href="css/main-ie8.css">
    <![endif]-->
    <link rel="shortcut icon" href="favicon.ico" />
    <!-- including jQuery from Google's CDN, Modernizr in head -->
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/modernizr.custom.82472.js"></script>
    </head>
    <body>
<!-- Confetti section with parallax scrolling movement -->
    <div id="divParallaxWrap">
        <div id="divParallax" style="top:80px;">
        </div>
    </div>
<!-- Overlay section semi transparent lightbox gray -->
    <div id="divOverlay">
        <div id="divGalleryFull">
            <div id="divGalleryClose" title="Close"></div>
            <div id="divGalleryPrev" class="fadeOutFast">
                <div title="Previous picture"></div>
            </div>
            <div id="divGalleryNext" class="fadeOutFast">
                <div title="Next picture"></div>
            </div>
            <div id="divGalleryPop" class="fadeOutFast" title="View fullsize image"></div>
<!-- Full size Gallery img -->
            <img id="imgGalleryFull" src="images/diagStripesLg.png">
        </div>
    </div>
<!-- Background color pink middle section -->
    <div id="divBgColor">
    <!--[if IE 8]>
        <div id="divIEshadowRight"></div>
        <div id="divIEshadowLeft"></div>
        <![endif]-->
    </div>
<!-- Backgroung pink diagonal pattern -->
    <div id="divBgPattern"></div>
<!-- Begin main content -->
    <header>
        <a href="#divSection1" class="smoothScroll">
        <h1 class="fontface">Nicole</h1>
        <h2>BAKES CAKES</h2>
        </a>
        <a id="lnkYelp" href="http://www.yelp.com/biz/nicole-bakes-cakes-long-beach" target="_blank" alt="Nicole Bakes Cakes on Yelp">Find us on
        </a>
        <nav>
            <ul>
                <li><a href="#divSection2" class="smoothScroll">About the Chef</a></li>
                <li><a href="#divSection3" class="smoothScroll">Gallery</a></li>
                <li><a href="#divSection4" class="smoothScroll">Ordering</a></li>
                <li><a href="#divSection5" class="smoothScroll">Mommy + Me</a></li>
                <li><a href="#divSection6" class="smoothScroll">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div class="divDefault" id="divSection1">

        <div id="divLogo">
            <h1 class="fontface">Nicole</h1>
            <img src="images/bgFrameLg-ie.png" alt="Nicole Bakes Cakes - professional pastries, cakes and treats for Southern California">
        </div>

        <div id="divFading">
            <div id="divNote">
                    <div id="divNoteSlider">
                        <div>Fondant decorated Sugar Cookies for your baby shower</div>
                        <div>Cake Pops: hand-held frosted cake treats...</div>
                        <div>Red Velvet mini cupcake with butter-<br/>cream frosting</div>
                        <div>What girl wouldn't say &quot;YES!&quot; to a Whoopie Pie proposal?</div>
                        <div>Mini Cupcake Madness: Chocolate, Blackberry &amp; Red Velvet</div>
                        <div>Fondant decorated Sugar Cookies for your baby shower</div>
                    </div>
            </div>
            <img class="imgFading" src="images/treats/treat-11.jpg" alt="Fondant decorated Sugar Cookies">
            <img class="imgFading displayNone" src="images/treats/treat-06.jpg" alt="Chocolate dipped, sprinkle covered cake pops">
            <img class="imgFading displayNone" src="images/treats/treat-07.jpg" alt="Red velvet mini-cupcake with buttercream frosting">
            <img class="imgFading displayNone" src="images/treats/treat-08.jpg" alt="Whoopie Pie, black and white, big fat oreo, black moon">
            <img class="imgFading displayNone" src="images/treats/treat-10.jpg" alt="Mini cupcakes: chocolate, blackberry and red velvet">
        </div>
        <div class="divBusinessDesc" style="display: none;" itemscope itemtype="http://schema.org/LocalBusiness"> <!-- Placing microdata here for SEO, local search -->
            <a class="indent" itemprop="url" href="www.nicolebakescakes.com"><span itemprop="name">NicoleBakesCakes</span>
            </a>
            <div class="divDesc" itemprop="description">
                <strong>
                Professional wedding cakes, bridal shower &amp; baby shower cupcakes, birthday cakes, cake pops, mini cupcakes, mini cheesecakes, fruit tortes and any special occasion pastries you can imagine.
                </strong>
            </div>
            <div class="divServing">
                <h2 class="h3noMargin fontface">Proudly Serving:</h2>
                <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <span itemprop="addressLocality">Los Angeles</span>
                    <span style="margin:0 0 0 -3px">,</span>
                    <span itemprop="addressLocality">Long Beach</span>
                    <span>and</span>
                    <span itemprop="addressLocality">Irvine</span>
                    <span itemprop="addressRegion">CA</span>
                    <span itemprop="addressCountry" class="clear">United States of America</span><br/>
                </div>
            </div>
        </div>
    </div>
    <div class="divSection" id="divSection2">
        <h2 class="fontface">Welcome to Nicole Bakes Cakes!</h2>
        <div class="divText">
            <p><?php include("text/about-1.txt"); ?>
            </p>
            <p class="pFlex">
                <img src="images/pink-buttercream-cake.jpg" class="left" width="200" height="259" alt="Pink buttercream frosted cake">
            </p>
            <span class="spnFlex"><?php include("text/about-2.txt"); ?></span>
            <p>
            <?php include("text/about-3.txt"); ?>
            </p>
            <p class="pHostess">
                <span>Chef Nicole's work was recently featured on a popular event planning blog,</span>
                <a href="http://blog.hwtm.com/2014/02/monsters-university-1st-birthday-extravaganza/" target="_blank">&quot;Hostess with the Mostest.&quot;</a>
                <span>The featured event was a Monsters University themed kids birthday party extravaganza, with Nicole's work serving as the centerpiece, as well as providing unique and fun finger sweets and treats for both kids and adults. Click below to check it out:<span>
            </p>
            <div class="divHostess">
                <a href="https://www.hwtm.com/2014/02/monsters-university-1st-birthday-extravaganza/" target="_blank">
                    <img src="images/badges/HWTM_Featured_C_300x120.jpg">
                </a>
            </div>
        </div>
    </div>
    <div class="divSection" id="divSection3">
        <h2 class="fontface">Ideas Gallery</h2>
        <div class="divGalleryWrap">
        <div class="divGallery">
            <div class="divGalleryLogo">
            Weddings
            </div>
            <div class="divGalleryFrame">
            <div class="divGalleryNote">
                Click for More Pics
            </div>
            <div id="divWedding" class="divGalleryImage">
            <!--[if IE 8]>
                <img src="images/weddingcakes/wedding-cake-01.jpg" alt="Image of wedding cake">
            <![endif]-->
            </div>
            </div>
        </div>
        <div class="divGallery">
            <div class="divGalleryLogo" style="font-size:1.7em;">
            Special Occassion
            </div>
            <div class="divGalleryFrame">
            <div class="divGalleryNote">
                Click for More Pics
            </div>
            <div id="divSpecial" class="divGalleryImage">
            <!--[if IE 8]>
                <img src="images/special/special-06.jpg" alt="Image of birthday cake">
            <![endif]-->
            </div>
            </div>
        </div>
        <div class="divGallery">
            <div class="divGalleryLogo">
            Mini Treats
            </div>
            <div class="divGalleryFrame">
            <div class="divGalleryNote">
                Click for More Pics
            </div>
            <div id="divTreats" class="divGalleryImage">
            <!--[if IE 8]>
                <img src="images/treats/treat-03.jpg" alt="Image of cupcake">
            <![endif]-->
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="divSection" id="divSection4">
        <h2 class="fontface">Ordering Details</h2>
        <div class="divText">
        <h3>Cake Serving Chart:</h3>
        <table class="tblServing">
            <thead>
            <tr>
                <th></th>
                <th style="width:25%;">Cakes</th>
                <th style="width:25%;">Cupcakes</th>
                <th style="width:30%;">Cake Pops</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Buttercream</td>
                <td><?php include("text/cake-buttercream-price.txt"); ?> per slice*</td>
                <td><?php include("text/cupcake-buttercream-price.txt"); ?> each</td>
                <td rowspan="2"><?php include("text/cake-pop-price.txt"); ?> each</td>
            </tr>
            <tr>
                <td>Fondant</td>
                <td><?php include("text/cake-fondant-price.txt"); ?> per slice*</td>
                <td><?php include("text/cupcake-fondant-price.txt"); ?> each</td>
                <td></td>
            </tr>
            <tr>
                <td>Notes</td>
                <td class="tdSmall">*Pricing may vary depending on the details of your cake</td>
                <td class="tdSmall" style="padding-left:20px;">Mini Cupcakes:<br/><?php include("text/mini-cupcake-price.txt"); ?> each</td>
                <td class="tdSmall">Cake Pops are dipped in white, dark or colorful chocolate</td>
            </tr>
            </tbody>
        </table>
        <p class="pCentered">Also Available:&nbsp;&nbsp;&nbsp;Brownies, Cookies, Mini Cheesecakes and Rice Krispy Treats. (<a href="#divSection6" class="smoothScroll">Contact Nicole</a> for details and pricing).</p>
        <h3>Flavors:</h3>
        <div style="width:100%;overflow: hidden;">
            <div class="divTextInner small">
                <div class="divTextHeading">Cake</div>
                <ul>
                    <li>Vanilla</li>
                    <li>Chocolate</li>
                    <li>Marble</li>
                    <li>Banana</li>
                    <li>Apple</li>
                </ul>
                <ul>
                    <li>Pumpkin</li>
                    <li>Spice</li>
                    <li>Lemon</li>
                    <li>Red Velvet</li>
                </ul>
            </div>
            <div class="divTextInner medium">
                <div class="divTextHeading">Icings</div>
                <ul>
                    <li>Buttercream</li>
                    <li>Cream Cheese</li>
                    <li>Chocolate Ganache</li>
                </ul>
                <ul>
                    <li>Rolled Fondant</li>
                    <li>Toasted Marshmallow Meringue</li>
                </ul>
            </div>
            <div class="divTextInner large">
                <div class="divTextHeading">Fillings</div>
                <ul class="ulWide">
                    <li>Buttercream <div style="font-size: .9em;padding-left: 10px;line-height:1.2em;">(Vanilla, Chocolate, Raspberry, Strawberry, Mocha and Hazelnut)</div></li>
                    <li>Cream Cheese Icing</li>
                    <li>Dulce De Leche</li>
                    <li>Lemon Curd</li>
                </ul>
                <ul>
                    <li>Lime Curd</li>
                    <li>Passionfruit Curd</li>
                    <li>Fresh Berries</li>
                    <li>Chocolate Ganache</li>
                    <li>Pastry Cream</li>
                    <li>Oreo</li>
                </ul>
            </div>
        </div>
        <h3>Cake Stand Rental:</h3>
        <p class="pCentered">Rent an amazing cake stand to display your sweet treats on! Full-day rental is $10-15 depending on the stand.
        </p>
        </div>
    </div>
    <div class="divSection" id="divSection5">
        <h2 class="fontface">Mommy + Me Baking Classes</h2>
        <div class="divText">
        <p>
            <img src="images/special/special-03.jpg" class="right" style="zoom: .475;" alt="Mommy and me baking classes">
            <?php include("text/mommy-and-me.txt"); ?>
           </p>
        </div>
    </div>
    <div class="divSection last" id="divSection6">
        <h2 class="fontface">Contact Chef Nicole</h2>
        <div class="divText">
        <p>
            <img src="images/ChefNicole.jpg" class="right" style="zoom: .275;" alt="Mommy and me baking classes">
            <div style="float:left; width: 50%;">
                <?php include("text/contact.txt"); ?>
            </div>
            <div style="float:left; width: 50%; margin-top: 40px;">
                Feel free to <a href="<?php include("text/email.txt"); ?>">email Nicole</a> to discuss your unique needs!
            </div>
        </p>
        <p>
            
        </p>
        </div>
    </div>
    <footer>
        <span>&copy; 2015 NicoleBakesCakes.com</span><span class="spnFlex">|</span><span>Site Design by <a href="http://creativesparkdesign.net/" target="_blank">Creative Spark</a></span><span class="spnFlex">|</span><span>Experience Developed by <a href="https://www.linkedin.com/pub/chris-novak/9a/a2/56b" target="_blank">Chris Novak</a><span>
    </footer>
    <!-- jQuery backup copy on local server in case Google CDN is down -->
    <script type="text/javascript">
        if (typeof window.$ === 'undefined' || typeof window.$ !== 'function'){
        document.write('<script type="text\/javascript" src="scripts/jquery-1.9.0.js"><\/script>');
        document.write('<script type="text\/javascript" src="scripts/jquery-ui-1.10.0.js"><\/script>');
        }
    </script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script>
    <script type="text/javascript" src="scripts/main.js"></script>
    <!-- smoothscroll library for page scrolling on # links -->
    <!--[if gte IE 9]><script type="text/javascript" src="scripts/smoothscroll.js"></script><![endif]-->
    <!-- use php to write three JavaScript variables with number of images in each folder type -->
    <script type="text/javascript">
    <?php
        $directory = "images/weddingcakes/";
        if (glob($directory . "*.jpg") != false){
        $filecount = count(glob($directory . "*.jpg"));
        echo "app.weddingCount = " . $filecount . ";\n";
        }
        $directory = "images/special/";
        if (glob($directory . "*.jpg") != false){
        $filecount = count(glob($directory . "*.jpg"));
        echo "app.specialCount = " . $filecount . ";\n";
        }
        $directory = "images/treats/";
        if (glob($directory . "*.jpg") != false){
        $filecount = count(glob($directory . "*.jpg"));
        echo "app.treatCount = " . $filecount . ";\n";
        }
    ?>
    var qs = (function(a) {
    if (a == '') return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));
    if (typeof qs['notrack'] === 'undefined'){
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-44784341-1']);
        _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    }
    </script>
    </body>
</html>
