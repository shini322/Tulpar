document.addEventListener('DOMContentLoaded', () => {

//Burger-menu
    const burgerBtn = document.querySelector('.burger'),
          headerMenu = document.querySelector('.menu');
    burgerBtn.addEventListener('click', (e) => {
        const btn = e.target.closest('.burger');
        btn.classList.toggle('opened');
        headerMenu.classList.toggle('opened');
    });
});

//Modal

function closeModal(modalBlock) {
    const modal = document.querySelector(modalBlock);  
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = '';
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
            e.preventDefault();
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


//Slider manufacturers

function manufaturersSlider(){
    const parent = document.querySelector('.manufacturers');
          itemSlider = parent.querySelectorAll('.manufacturers__item');
    
        function getSlider(){
            let swiper = null;
        if(window.innerWidth < 768){  
            itemSlider.forEach(slider => {
                const container = slider.querySelector('.swiper-container');
                const pagination = slider.querySelector('.manufacturers__slider-pagination')
                swiper = new Swiper(container,{
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

                    viewBtns.forEach(btn => {
                        btn.addEventListener('click', () => {
                    
                        });
                    });
                    
                    view.addEventListener('click', (e) => {
                        const target = e.target;
                        const viewBtn = target.closest('.manufacturers__view-item');
                        if(viewBtn){
                            viewBtns.forEach(btn => {
                                btn.classList.remove('active');
                            });
                            viewBtn.classList.add('active');
                        }
                        if(viewBtn.classList.contains('manufacturers__view-item--grid')){
                            getSlider();
                            manufacturersItems.forEach(item => {
                                item.classList.remove('row');
                                manufacturersWrapper.classList.remove('row');
                            })
                        }
                        if(viewBtn.classList.contains('manufacturers__view-item--row')){
                            sliderDestroy(swiper);
                            manufacturersItems.forEach(item => {
                                item.classList.add('row');
                                manufacturersWrapper.classList.add('row');
                            })
                        }
                    });
            })    
        } else {
            if(swiper){
                sliderDestroy(swiper);
            }
        }

    }
    function sliderDestroy (slider){
        slider.destroy();
    }
    getSlider();

    window.addEventListener('resize', () => {
        getSlider();
    });

    
}

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
    },
});


