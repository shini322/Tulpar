document.addEventListener('DOMContentLoaded', () => {

    new WOW().init();

//Burger-menu
    const burgerBtn = document.querySelector('.burger'),
          headerMenu = document.querySelector('.menu');
    burgerBtn.addEventListener('click', (e) => {
        const btn = e.target.closest('.burger');
        btn.classList.toggle('opened');
        headerMenu.classList.toggle('opened');
    });


//Modal

function closeModal(modalBlock) {
    const modal = document.querySelector(modalBlock);  
    const iframe = modal.querySelector('iframe') ? modal.querySelector('iframe') : null;
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = '';
    if(iframe){
        iframe.src = '';
    }
}

function openModal(modalBlock) {
    const modal = document.querySelector(modalBlock);   
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '17px';
}

function modal(openTrigger, modalBlock) {
    const modalTrigger = document.querySelectorAll(openTrigger),
        modal = document.querySelector(modalBlock);
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(!btn.classList.contains('economy-mode__toggle')){
                e.preventDefault();
            }
            openModal(modalBlock)
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.dataset.close == '') {
            closeModal(modalBlock);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalBlock);
        }
    });   
}

modal('[data-low-price]', '.modal-features--low-price');
modal('[data-low-price-delivery]', '.modal-features--low-price-delivery');
modal('[data-short-delivery-times]', '.modal-features--short-delivery-times');
modal('[data-uninterrupted-delivery]', '.modal-features--uninterrupted-delivery');
modal('[data-warranty]', '.modal-features--warranty');
modal('[data-managers]', '.modal-features--managers');
modal('[data-high-quality]', '.modal-features--high-quality');
modal('[data-order-form]', '.modal-order');
modal('[data-economy-mode]', '.modal-ecomomy-mode');
modal('[data-present]', '.modal-present');


//Slider manufacturers

function manufaturersSlider(){
    const parent = document.querySelector('.manufacturers');
          itemSlider = parent.querySelectorAll('.manufacturers__item');
    
        function getSlider(){
            if(window.innerWidth < 768){  
                itemSlider.forEach(slider => {
                const container = slider.querySelector('.swiper-container');
                const pagination = slider.querySelector('.manufacturers__slider-pagination')
                let swiper = new Swiper(container,{
                    spaceBetween: 15,                   
                    pagination: {
                        el: pagination,
                        type: 'bullets',
                    },
                });              

                // manufacturers view toggle 

                const viewGrid = slider.querySelector('.manufacturers__view-icon--grid'),
                    viewRow = slider.querySelector('.manufacturers__view-item--row'),
                    viewBtns = slider.querySelectorAll('.manufacturers__view-item'),
                    view = slider.querySelector('.manufacturers__view'),
                    manufacturersItems = slider.querySelectorAll('.manufacturer-item'),
                    manufacturersWrapper = slider.querySelector('.manufacturers__wrapper');

                    if(viewGrid.classList.contains('active')){
                        swiper = new Swiper(container,{
                            spaceBetween: 15,                   
                            pagination: {
                                el: pagination,
                                type: 'bullets',
                            },
                        }); 
                        manufacturersItems.forEach(item => {
                            item.classList.remove('row');
                            manufacturersWrapper.classList.remove('row');
                        })
                    } else {
                        swiper.destroy();
                        manufacturersItems.forEach(item => {
                            item.classList.add('row');
                            manufacturersWrapper.classList.add('row');
                        })
                    }
                    
                    view.addEventListener('click', (e) => {
                        const target = e.target;
                        const viewBtn = target.closest('.manufacturers__view-item');
                        if(viewBtn){
                            viewBtns.forEach(btn => {
                                btn.classList.remove('active');
                            });
                            viewBtn.classList.add('active');
                            if(viewBtn.classList.contains('manufacturers__view-item--grid')){
                                swiper = new Swiper(container,{
                                    spaceBetween: 15,                   
                                    pagination: {
                                        el: pagination,
                                        type: 'bullets',
                                    },
                                }); 
                                manufacturersItems.forEach(item => {
                                    item.classList.remove('row');
                                    manufacturersWrapper.classList.remove('row');
                                })
                            }
                            if(viewBtn.classList.contains('manufacturers__view-item--row')){
                                swiper.destroy();
                                manufacturersItems.forEach(item => {
                                    item.classList.add('row');
                                    manufacturersWrapper.classList.add('row');
                                })
                            }
                        }
                        
                    });
            })    
        }

    }

    getSlider();    
}

window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
        manufaturersSlider();
    }
});

manufaturersSlider();

//Slider order-stages

const orderSlider = new Swiper('.order-stage__container', {
    spaceBetween: 40,
    slidesPerView: 4,
    navigation: {
        nextEl: '.order-stage__btn-nav--next',
        prevEl: '.order-stage__btn-nav--prev',
      },
    breakpoints:{
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
});


// Swiper material slider

if(window.innerWidth < 1024){
    const materialSlider = new Swiper('.material__container', {
        spaceBetween: 10,
        pagination:{
            el: '.material__slider-pagination',
            type: 'bullets',
        }
    });
}

//SLider gas-blocks

const gasBlocksSlider = new Swiper('.gas-blocks__container', {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    pagination:{
        el: '.gas-blocks__slider-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.gas-blocks__btn-nav--next',
        prevEl: '.gas-blocks__btn-nav--prev',
    },
    breakpoints:{
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
    },
});

//SLider gas-blocks

const reviewSlider = new Swiper('.reviews__container', {
    spaceBetween: 50,
    navigation: {
        nextEl: '.reviews__btn-nav--next',
        prevEl: '.reviews__btn-nav--prev',
    },
});


//Slider social

if(window.innerWidth < 1024){
    const socialSlider = new Swiper('.social__container', {
        spaceBetween: 10,
        slidesPerView: 2,
        breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 3,
            },
            720: {
                slidesPerView: 2
            }
        },
    });
}


//Modal material

const materialModal = document.querySelector('.modal-material'),
      materialModalSubtitle = materialModal.querySelector('.modal-material__subtitle'),
      materialItem = document.querySelectorAll('.material-item');

materialItem.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target.closest('.material-item');
        const name = target.querySelector('.material-item__name').textContent;
        materialModalSubtitle.textContent = name;
    });
});

modal('[data-material]', '.modal-material');


//Map

const bottomBlocks = document.querySelector('.bottom-blocks'),
      maIframe = bottomBlocks.querySelector('.map__iframe');
if(window.innerWidth < 1024){
    maIframe.style.pointerEvents = 'none';
    bottomBlocks.addEventListener('click', (e) => {
        maIframe.style.pointerEvents = 'auto';
    });
}

//Review video

const reviewVideoLink = document.querySelectorAll('[data-video]'),
      modalReviewVideoIframe = document.querySelector('.modal-review-video iframe');
      reviewVideoLink.forEach(review => {
    review.addEventListener('click', (e) => {
        const link = e.target.closest('.reviews__video-block');
        modalReviewVideoIframe.src = link.href;
    
    });
});

modal('[data-video]', '.modal-review-video');


// Graph animation

const graphScale = document.querySelectorAll('.graph__scale');

graphScale.forEach(item => {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > item.offsetTop - 200 ) {
            item.classList.add('animate-graph-scale');
        }
    });
});


// Company list selection

const companyItem = document.querySelectorAll('.company-list__item'),
      productManufacturer = document.querySelector('.product-item__manufacturer-item'),
      productTitleManufacturer = document.querySelector('.product-item__title--manufacturer');
companyItem.forEach(item => {
    item.addEventListener('click', (e) => {
        const company = e.currentTarget;
        companyItem.forEach(item => item.classList.remove('active'));
        company.classList.add('active');
        productManufacturer.textContent = company.dataset.company;
        productTitleManufacturer.textContent = company.dataset.company;
    });
});


// Offer download

const offerDownloadLink = document.querySelector('.offer__download'),
      offerInput = document.querySelector('.offer__input'),
      offerForm = document.querySelector('.offer__form');
offerDownloadLink.addEventListener('click', (e) => {
    e.preventDefault();
    if(offerInput.value){
        offerForm.submit();
    }
});

//Present

const present = document.querySelector('.map__present');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 200) {
            present.classList.add('fixed');
        }
    });

//Product item form

function productItemUpdate(){
    const settingChoose = document.querySelectorAll('.product-settings__container'),
          markChoose = document.querySelectorAll('.product-settings__radio-btns--mark'),
          productTitleType = document.querySelector('.product-item__title--type'),          
          productTitleMark = document.querySelector('.product-item__title--mark'),
          productSettingsMark = document.querySelector('.product-item__specifications-td--mark');
    settingChoose.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            const setting = target.closest('.product-settings__label');
            const type = target.closest('.product-settings__container--type');
            const mark = target.closest('.product-settings__container--mark');
            if(setting){
                if(type){
                    productTitleType.textContent = setting.textContent;
                } else{
                    productTitleMark.textContent = setting.textContent;
                    productSettingsMark.textContent = setting.textContent;
                } 
            }
        });
    });
}

productItemUpdate();

$(".graph__dial").knob();

});
