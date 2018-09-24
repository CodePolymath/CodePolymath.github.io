var app = app || {};
app.imgFading = $('.imgFading');
app.imageTimer = 8000; // time between fading images in top-level gallery
app.parallax = document.getElementById('divParallax');
app.parallaxWrap = document.getElementById('divParallaxWrap');
app.scrollY = 0;
app.throttle = 0; // event throttling timer
app.gutter = 0;
app.marginRight = 0;
app.viewHeight = 0; // height of current visible window
app.currentNote = 0;
app.windowWidth = 0;
app.documentHeight = $(document).height(); // height of entire document
app.confettiCount = 90; // number of confetti to generate
app.confettiSpacing = 600; // random vert distance boundry for confetti
app.noteWrap = document.getElementById('divNoteSlider');
app.overlay = document.getElementById('divOverlay');
app.queue = []; // queue object will track lazyloading of images for gallery
app.queue[0] = {complete: false, set: []};
app.queue[1] = {complete: false, set: []};
app.queue[0].set[0] = {indexCurrent: -1, complete: false, imgArray: []};
app.queue[0].set[1] = {indexCurrent: -1, complete: false, imgArray: []};
app.queue[0].set[2] = {indexCurrent: -1, complete: false, imgArray: []};
app.queue[1].set[0] = {indexCurrent: -1, complete: false, imgArray: []};
app.queue[1].set[1] = {indexCurrent: -1, complete: false, imgArray: []};
app.queue[1].set[2] = {indexCurrent: -1, complete: false, imgArray: []};
app.queue[0].setCurrent = -1;
app.queue[1].setCurrent = -1;
app.imgCurrent = 0;
app.setCurrent = 0;
app.set = [];
app.lazyLoadComplete = false;
app.lazyLoadLimit = 6; // download first 18 images (6 * 3 sets) until user interacts with gallery
app.imgFull = document.getElementById('imgGalleryFull');
app.imgArray = [[],[],[]];
app.imgNext = document.getElementById('divGalleryNext').childNodes[1] || document.getElementById('divGalleryNext').childNodes[0];
app.imgPrev = document.getElementById('divGalleryPrev').childNodes[1] || document.getElementById('divGalleryPrev').childNodes[0];
app.galleryOpen = false;
app.sectionArray = [];
app.navArray = $('nav .smoothScroll');

// console fix for IE7-8-9
if (typeof console === 'undefined'){
    window.console = {log:function(){return false;}};
}

$(document).ready(function(){
    app.set[0] = {length: app.weddingCount};
    app.set[1] = {length: app.specialCount};
    app.set[2] = {length: app.treatCount};

    for (var i = 0; i < 3; i++){
        for (var j = 0; j < app.set[i].length; j++){
            app.queue[j % 2].set[i].imgArray.push(j + 1); // split images into even and odd queues
        }
    }

    /* setMargins() determines how much space is available on the right and left for confetti */
    function setMargins(){
        var windowWidth = document.documentElement.clientWidth;
        if (app.windowWidth === windowWidth){
            return false; // don't place confetti if margins didn't change
        } else {
            app.windowWidth = windowWidth;
        }
        app.viewHeight = window.innerHeight || $(window).height();
        if (app.parallaxWrap.style.height !== app.documentHeight){
            app.parallaxWrap.style.height = app.documentHeight + 'px';
        }
        app.parallaxWrap.style.width = windowWidth + 'px';
        var contentWidth = parseInt($('#divSection1').css('width'),10);
        app.gutter = Math.round((windowWidth - contentWidth)/2);
        app.gutter = app.gutter < 70 ? 70 : app.gutter; // TODO: needs better plan for smaller screens
        app.marginRight = windowWidth - (app.gutter + 70);
        return true;
    }
    /* placeConfetti() generates app.confettiCount number of confetti and randomly places them in the margins */
    function placeConfetti(){
        var docFragment = document.createDocumentFragment(); // only append to the DOM once!
        var divNew;
        var j = 0;
        for (var i = 0; i < app.confettiCount; i++){
            divNew = document.createElement('div');

            var booRandom = Math.round(Math.random());
            var xPos;
            var xOffset = 0;
            var yOffset = 0;
            if (booRandom){
                xPos = app.marginRight;
            } else {
                xPos = 0;
            }
            xOffset = Math.round(Math.random() * app.gutter) + xPos;
            yOffset = Math.round(Math.random() * app.confettiSpacing);
            divNew.style.left = xOffset.toString() + 'px';
            divNew.style.top = yOffset.toString() + 'px';

            var intRotate = 0; // randomly rotate each confetti 180 degrees in either direction
            //if (Modernizr.csstransforms){
            intRotate = Math.round(Math.random() * 180);
            divNew.style.webkitTransform  = 'rotate(' + (booRandom ? '-' : '') + intRotate.toString() + 'deg)';
            divNew.style.MozTransform = 'rotate(' + (booRandom ? '-' : '') + intRotate.toString() + 'deg)';
            divNew.style.msTransform = 'rotate(' + (booRandom ? '-' : '') + intRotate.toString() + 'deg)';
            divNew.style.OTransform = 'rotate(' + (booRandom ? '-' : '') + intRotate.toString() + 'deg)';
            divNew.style.transform = 'rotate(' + (booRandom ? '-' : '') + intRotate.toString() + 'deg)';
            //}

            var intSprite = Math.round(Math.random() * 5); // randomly assign a sprite class to each confetti
            divNew.className = 'divConfetti sprite' + intSprite.toString();

            intSprite = Math.ceil(Math.random() * 4);
            divNew.className = divNew.className + ' spin' + intSprite.toString();
            docFragment.appendChild(divNew);
        }

        //app.parallax.innerHTML = null;
        // clear out parallax childnodes faster with removeChild()
        j = app.parallax.childNodes[1];
        while (j = app.parallax.childNodes[1]){
            app.parallax.removeChild(j);
        }
        app.parallax.appendChild(docFragment);
    }

    /* nextNote() slides the current note for the img in the top-level gallery left on each change */
    function nextNote(mode){
        app.currentNote += 1;
        if (mode === 1) { // use jQuery animate() if css transitions not supported
            var leftPos = app.currentNote * -308;
            $(app.noteWrap).animate({left: leftPos + 'px'},500,'easeInOutSine', function(){
            if (app.currentNote > 5){
                app.currentNote = 0;
                app.noteWrap.style.left = '0px';
            }
        });
        } else { // use css transitions if supported
            switch (app.currentNote){
                case 5:
                    app.noteWrap.className = 'pos5';
                break;
                default:
                    app.noteWrap.className = 'pos' + app.currentNote.toString();
            }
        }
    }

    /* lazyLoad() queues up all content images for loading after the initial page load has completed, decreasing load time */
    function lazyLoad(queue, initialLoad){
        if (app.lazyLoadComplete === true){
            //console.log('exiting');
            return;
        }
        var indexLimit = app.lazyLoadLimit;
        var i = 0;
        if (!initialLoad){
            indexLimit = -1;
        }
        if (app.queue[0].complete && app.queue[1].complete){
            app.lazyLoadComplete = true;
            //console.log('lazy load complete exiting');
            return;
        }

        var url = 'images/';
        var imgNew = new Image();

        app.queue[queue].setCurrent = app.queue[queue].setCurrent === 2 ? 0 : app.queue[queue].setCurrent + 1;

        if (initialLoad && app.queue[queue].set[app.queue[queue].setCurrent].imgArray[app.queue[queue].set[app.queue[queue].setCurrent].indexCurrent + 1] >= indexLimit){
            //console.log('pausing');
            return;
        }

        app.queue[queue].set[app.queue[queue].setCurrent].indexCurrent += 1;

        while (app.queue[queue].set[app.queue[queue].setCurrent].indexCurrent >= app.queue[queue].set[app.queue[queue].setCurrent].imgArray.length){
            i += 1;
            app.queue[queue].set[app.queue[queue].setCurrent].complete = true;
            app.queue[queue].setCurrent = app.queue[queue].setCurrent === 2 ? 0 : app.queue[queue].setCurrent + 1;
            app.queue[queue].set[app.queue[queue].setCurrent].indexCurrent += 1;
            if (i > 5){
                app.queue[queue].complete = true;
                return;
            }
        }

        imgNew.index = app.queue[queue].set[app.queue[queue].setCurrent].imgArray[app.queue[queue].set[app.queue[queue].setCurrent].indexCurrent];

        //console.log('curr queue: ' + queue + ':'+ imgNew.index + ':' +  app.queue[queue].setCurrent);
        imgNew.set = app.queue[queue].setCurrent; // store set in img object
        imgNew.queue = queue; // store queue in img object
        switch (imgNew.set){
        case 0:
            url = url + 'weddingcakes/wedding-cake-' + (imgNew.index < 10 ? '0' + imgNew.index.toString() : imgNew.index.toString()) + '.jpg';
            break;
        case 1:
            url = url + 'special/special-' + (imgNew.index < 10 ? '0' + imgNew.index.toString() : imgNew.index.toString()) + '.jpg';
            break;
        case 2:
            url = url + 'treats/treat-' + (imgNew.index < 10 ? '0' + imgNew.index.toString() : imgNew.index.toString()) + '.jpg';
            break;
        default:
        }

        imgNew.onload = function(){
            //console.log('just loaded: queue: ' + this.queue + ' imgIndex: ' + this.index + ' set: ' + this.set);
            lazyLoad(this.queue, initialLoad);
            //app.imgArray[this.set].push(this);
            app.imgArray[this.set][this.index - 1] = this; // keep the images in order
        };

        imgNew.src = url;
    }

    /* showImage() shows the next or previous image in the image gallery */
    function showImage(){
        app.imgCurrent = app.imgCurrent >= app.imgArray[app.setCurrent].length ? 0 : app.imgCurrent;
        app.imgCurrent = app.imgCurrent < 0 ? app.imgArray[app.setCurrent].length - 1 : app.imgCurrent;
        if (app.galleryOpen === false){
            app.galleryOpen = true;
            setGallerySize();
            app.imgFull.src = app.imgArray[app.setCurrent][app.imgCurrent].src;
        } else {
            if (Modernizr.csstransitions){
                fadeImgOut();
            } else  {
                $(app.imgFull).animate({opacity:0},300, function(){
                    setGallerySize();
                });
            }
        }
    }

    /* fadeImgIn() uses either css transitions or jQuery animate() to fade next / prev gallery image in */
    function fadeImgIn(){
    console.log('fade in');
        app.imgFull.src = app.imgArray[app.setCurrent][app.imgCurrent].src;
        app.imgFull.state = 1;
        if (Modernizr.csstransitions){
            app.imgFull.removeAttribute('class');
            app.imgNext.removeAttribute('class');
            app.imgPrev.removeAttribute('class');
        } else {
            $(app.imgFull).animate({opacity:1});
        }
    }

    /* fadeImgOut() uses either css transitions to fade current gallery image out */
    function fadeImgOut(){
        if (!Modernizr.touch) {
            app.imgNext.className = 'displayNone';
            app.imgPrev.className = 'displayNone';
        }
        app.imgFull.className = 'fadeOutFast';
        app.imgFull.state = 0;
    }

    /* setGallerySize() resizes the img gallery wrapper div to hold the current image correctly */
    function setGallerySize(){
        var currWidth = app.imgArray[app.setCurrent][app.imgCurrent].width + 6;
        var currHeight = app.imgArray[app.setCurrent][app.imgCurrent].height + 6;
        if (currHeight > (app.viewHeight - 40)){
            currWidth = Math.round(currWidth * (app.viewHeight - 40) / currHeight);
            currHeight = (app.viewHeight - 40);
        }
        if (currWidth <= app.windowWidth) {
            app.imgFull.parentNode.style.height = currHeight + 'px';
            app.imgFull.parentNode.style.width = currWidth + 'px';
            app.imgPrev.style.top = Math.round(currHeight/2) + 'px';
            app.imgNext.style.top = Math.round(currHeight/2) + 'px';
        } else {
            app.imgFull.parentNode.style.height = 'auto';
            app.imgFull.parentNode.style.width = (app.windowWidth - 30).toString() + 'px';
        }
        app.imgFull.parentNode.style.top = Math.round((app.viewHeight - currHeight)/2) + 'px';


        setTimeout(function(){ // while animating mutltiple props with css transition, use a setTimeout to create one complete callback
            fadeImgIn();
        },350);
    }

    /* closeGallery() closes the gallery */
    function closeGallery(){
        app.overlay.removeAttribute('class');
        app.galleryOpen = false;
    }

    /* css transition callbacks for top-level gallery fading in / out, gallery note sliding left and main gallery image fading out */
    if (Modernizr.csstransitions){
        $('#divFading').on('transitionend oTransitionEnd webkitTransitionEnd','img',function(e){
            $(e.target).removeClass('fadeOut').addClass('displayNone');
            nextNote(0);
        });
        $('#divNote').on('transitionend oTransitionEnd webkitTransitionEnd','div',function(e){
            if (app.currentNote === 0){
                e.target.className('pos0');
            } else if (app.currentNote === 5){
                e.target.className = 'pos0 transitionNone';
                app.currentNote = 0;
            }
        });

        $(app.imgFull).on('transitionend oTransitionEnd webkitTransitionEnd',function(e){
            console.log('img transition end');
            if (e.target.state === 0){
                setGallerySize();
            }
        });
    }

    /* handles click events for main image gallery */
    $('.divGalleryWrap').on('click','.divGalleryImage, .divGalleryNote',function(e){
        if (app.lazyLoadComplete === false){ // complete lazyLoading process
            lazyLoad(0,false);
            lazyLoad(1,false);
        }
        var target = e.target;
        if (target.className === 'divGalleryNote'){
            target = target.nextElementSibling;
        }
        var type = target.id.replace(/div/gi,'').toLowerCase();
        switch (type){
            case 'wedding':
                app.setCurrent = 0;
                break;
            case 'special':
                app.setCurrent = 1;
                break;
            case 'treats':
                app.setCurrent = 2;
                break;
            default:
        }
        app.overlay.className = 'displayBlock';
        app.imgCurrent = 0;
        showImage();
    });
    /* click close, next, prev and fullsize image events for main image gallery */
    $('#divGalleryFull').on('click','#divGalleryClose',function(){
        closeGallery();
    })
    .on('click','#divGalleryPop',function(e){
        window.open(e.target.nextElementSibling.src,'_blank');
    })
    .on('click','#divGalleryPrev',function(){
        app.imgCurrent -= 1;
        showImage();
    })
    .on('click','#divGalleryNext',function(){
        app.imgCurrent += 1;
        showImage();
    });
    /* window events, scroll for parallax effect; resize to recale and place confetti as needed; keyup to close gallery on ESC key */
    $(window).on('scroll',function(){
        var i = 0;
        var windowScrollPos = window.pageYOffset || $(window).scrollTop();
        if (windowScrollPos === 0){ // don't do anything the first time
            return;
        }
        var currTop = parseInt(app.parallax.style.top,10);
        var yDiff = windowScrollPos - app.scrollY;
        app.scrollY = windowScrollPos;
        currTop -= Math.round(yDiff / 2);
        app.parallax.style.top = currTop + 'px';
        if (windowScrollPos < 350){
            app.navArray.filter('.current').removeClass('current');
            return;
        }
        if (yDiff > 0){
            for (i = 0; i < app.sectionArray.length; i++){
                if (app.sectionArray[i].offset + (app.viewHeight / 2) > windowScrollPos){ // if current .divSection is 50% onscreen, highlight the related nav a
                    app.navArray.filter('.current').removeClass('current');
                    app.navArray.eq(i).addClass('current');
                    return;
                }
            }
        } else {
            for (i = app.sectionArray.length - 1; i > -1; i--){
                if (app.sectionArray[i].offset - app.sectionArray[i].height < windowScrollPos){ // if current .divSection is on the page, highlight the related nav a
                    app.navArray.filter('.current').removeClass('current');
                    app.navArray.eq(i).addClass('current');
                    return;
                }
            }
        }
    })
    .on('resize', function(){
        if (app.throttle > 0){
            clearTimeout(app.throttle);
        }
        app.throttle = setTimeout(function(){
            if (setMargins()){
                placeConfetti();
            }
        },200);
    })
    .on('keyup', function(e){
        e = e || window.event;
        var keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode === 27){
            closeGallery();
        }
    });

    if (setMargins()){
        placeConfetti();
    }
    /* interval event for fading images in top-level gallery */
    var fadeTimer = setInterval(function(){
        var j = 0, i = 0;
        for (i = 0, l = app.imgFading.length; i < l; i++){
            if (app.imgFading[i].className.search('displayNone') === -1) {
            switch (true) {
                case i === app.imgFading.length - 1:
                    j = 0;
                break;
                default:
                    j = i + 1;
                }
            $(app.imgFading[j]).removeClass('displayNone');
            if (Modernizr.csstransitions){
                $(app.imgFading[i]).addClass('fadeOut');
            } else {
                $(app.imgFading[i]).addClass('fadeOutIE').fadeOut(1000,'easeInOutSine',function(){
                    $('.fadeOutIE').removeClass('fadeOutIE').addClass('displayNone').removeAttr('style');
                    nextNote(1);
                });
            }
            break;

            }
        }
    },app.imageTimer);

    $('.divSection').each(function(){
        var $this = $(this);
        app.sectionArray.push({element: this, offset: $this.offset().top, height: $this.height()});
    });

    /* lazyLoad gallery images twice, using two http transport channels */
    lazyLoad(0, true);
    lazyLoad(1, true);

});
