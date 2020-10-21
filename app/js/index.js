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

