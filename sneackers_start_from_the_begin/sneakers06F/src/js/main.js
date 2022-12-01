let shoesList = document.querySelector('.main__assort-mainContent')
let filterSelectorPrice = document.querySelector('.main__assort-select-price')
let filterSelectorCategory = document.querySelector('.main__assort-select-category')
let filterSelectorGender = document.querySelector('.main__assort-select-gender')
let filterSelectorBrands = document.querySelector('.main__assort-select-brands')
let filterSearch = document.querySelector('.main__assort-form-input')
let basketBtn = document.querySelector('.header__links-basket');
let basketContent = document.querySelector('.basket');
let btnSignUp = document.querySelector('.btnSignUp')

//total
let totalBasket = document.querySelectorAll('.total')
let percentBasket = document.querySelector('.percent')

let basket__inner = document.querySelector('.basket__content');
let basketList = document.querySelector('.basket__cards')
//basket
let basketData = []

if(localStorage.getItem('basket') != null){
    basketData = JSON.parse(localStorage.getItem('basket'))
}


let url = 'http://localhost:8080/shoes?'
let filterPrice = ''
let filterCategory = ''
let filterGender = ''
let filterBrands = ''
let filterSearchValue = ''

const setLocalStorage = () => { 
    localStorage.setItem('basket', JSON.stringify(basketData))
}

const getShoes = () => {
    shoesList.innerHTML = ''
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice + '&' : ''}${filterCategory.length ? 'category=' + filterCategory + '&' : ''}${filterGender.length ? 'gender=' + filterGender + '&' : '' }${filterBrands.length ? 'brand=' + filterBrands + '&' : ''}${filterSearchValue.length ? 'title_like=' + filterSearchValue + '&' : ''}`)
    .then((resolve) => resolve.json())
    .then((resolve) => {
        resolve.forEach((item) => {
            shoesList.innerHTML += 
            `
            <div style="height: 370px; width: 200px; class="main__assort-mainContent-shoes">
            <div style="background-color: rgb(245,245,240);" class="main__assort-mainContent-favorites">
            <span class="main__assort-mainContent-favorites-logo"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.149 2.35598L13.1484 2.35544C12.8095 2.02581 12.4097 1.76359 11.9705 1.58328L11.9696 1.58291C11.5139 1.39507 11.0249 1.29886 10.5311 1.29999L10.5295 1.29999C9.83464 1.29999 9.15837 1.48873 8.57168 1.84385L8.57166 1.84386C8.4313 1.92882 8.29851 2.02179 8.17303 2.12277L7.73415 2.47599L7.29527 2.12277C7.16979 2.02179 7.037 1.92882 6.89663 1.84386L6.89661 1.84385C6.30993 1.48873 5.63366 1.29999 4.93883 1.29999C4.43728 1.29999 3.95462 1.39501 3.49871 1.58292L3.49796 1.58323C3.05699 1.76437 2.6606 2.02431 2.31966 2.35565L2.3187 2.35658L2.3187 2.35657C1.98111 2.6834 1.71174 3.07247 1.52557 3.50161L13.149 2.35598ZM13.149 2.35598C13.4865 2.68351 13.7561 3.0729 13.943 3.50221C14.1365 3.9487 14.2347 4.42035 14.2333 4.90641V4.90841C14.2333 5.36255 14.1399 5.85119 13.9418 6.36514L13.9412 6.36674M13.149 2.35598L13.9412 6.36674M4.37988 10.1131L4.37995 10.1132C5.12906 10.7996 5.87729 11.3822 6.44748 11.7988C6.73204 12.0066 6.97087 12.1721 7.14149 12.2873C7.22678 12.345 7.29482 12.3899 7.34278 12.4212C7.3857 12.4492 7.4091 12.464 7.41442 12.4673C7.41538 12.4679 7.41575 12.4682 7.41555 12.468L7.42662 12.4748L7.42655 12.4749L7.73332 12.6701L8.04008 12.4749L8.04022 12.4748C8.09141 12.4423 9.58223 11.4902 11.0868 10.1131H4.37988ZM4.37988 10.1131C3.47528 9.28445 2.76336 8.48184 2.25505 7.72992M4.37988 10.1131L2.25505 7.72992M13.9412 6.36674C13.7771 6.7954 13.5328 7.25421 13.2114 7.73026M13.9412 6.36674L13.2114 7.73026M2.25505 7.72992C1.93467 7.25534 1.69124 6.79603 1.52486 6.36515L2.25505 7.72992ZM13.2114 7.73026C12.7031 8.48203 11.9913 9.28446 11.087 10.1129L13.2114 7.73026ZM1.23333 4.90841C1.23333 4.4208 1.33184 3.9483 1.52554 3.50166L1.52472 6.36479C1.32672 5.85096 1.23333 5.36244 1.23333 4.90841Z" stroke="#ECECEC" />
            </svg>
            </span>
            </div>
            
            <img  style="width: 150px; height: 145px" src="${item.images}" alt="product image" class="main__assort-mainContent-product">
            
            <h4 style="max-height: 14px" class="main__assort-mainContent-product-desc">${item.title}</h4>
            <h4 style="border-top: 1px solid black; margin-top: 19px;" class="main__assort-mainContent-product-desc">${item.brend}</h4>
            <p style="margin: 10px 0;" class="main__assort-mainContent-product-gender">${item.gender === 'men' ? 'мужской' : 'женский'}</p>
            <p style="margin: 10px 0;" class="main__assort-mainContent-product-gender">${item.category}</p>
            <div class="main__assort-mainContent-product-pricesDesc">
            <div class="main__assort-mainContent-product-pricesDesc-text">
            <p class="main__assort-mainContent-product-pricesDesc-price">Цена:</p>
            <p style="border-bottom:1px solid black" class="main__assort-mainContent-product-pricesDesc-cost">${item.price}₽</p>
            </div>
            ${
                !basketData.filter((el) => el.id === item.id).length ? `
                <div data-id="${item.id}" class="main__assort-mainContent-product-pricesDesc-addBask addCart">
                <span class="main__assort-mainContent-product-pricesDesc-addBask-logo">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/></svg></span>
                </div>
                `:`
                <div data-id="${item.id}" class="main__assort-mainContent-product-pricesDesc-addBask-active removeCart">
                <span class="main__assort-mainContent-product-pricesDesc-addBask-logo-active">
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_60_204)">
                <path d="M9.6567 0.620692C9.83936 0.436333 10.0876 0.331772 10.3471 0.329861C10.6066 0.327949 10.8563 0.428842 11.0416 0.61049C11.227 0.792138 11.3329 1.03977 11.3362 1.29927C11.3395 1.55877 11.24 1.80903 11.0594 1.99536L5.83271 8.52936C5.74292 8.62603 5.63456 8.70362 5.51412 8.75749C5.39368 8.81136 5.26362 8.84041 5.1317 8.8429C4.99979 8.84539 4.86872 8.82127 4.74633 8.77198C4.62394 8.72269 4.51274 8.64924 4.41937 8.55602L0.954039 5.09202C0.76989 4.90779 0.666472 4.65794 0.666534 4.39746C0.666597 4.13697 0.770135 3.88717 0.954372 3.70302C1.13861 3.51888 1.38845 3.41546 1.64894 3.41552C1.90943 3.41558 2.15922 3.51912 2.34337 3.70336L5.08404 6.44469L9.6307 0.651358C9.63897 0.640817 9.64787 0.630798 9.65737 0.621358L9.6567 0.620692Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_60_204" x="0.666534" y="0.329834" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_204"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_204" result="shape"/>
                </filter>
                </defs>
                </svg>
                </span>
                </div>`//first one is a plus_icon & the second is done_icon
            }
            
            </div>
            </div>
            `
        })
        let addCartBtns = document.querySelectorAll('.addCart')
        let removeCartBtns = document.querySelectorAll('.removeCart')
        
        Array.from(removeCartBtns).forEach((item) => {
    item.addEventListener('click', () => {
        basketData = basketData.filter((el) => el.id !== +item.dataset.id)
        if(item.classList.contains('removeCartInBasket') && !basketData.length){
            basketContent.classList.remove('show')
            emptyBasket()
        }
        setLocalStorage()
        getShoes()   
    })
})
Array.from(addCartBtns).forEach((item) => {
    item.addEventListener('click', () => {
        if(!basketData.length){
            location.reload()
        }
        basketData = [...basketData, resolve.find((el) => el.id === +item.dataset.id)]
        setLocalStorage()
        getShoes()
    })
})
})
.catch((err) => console.log((err)))
getBasket()
}
        const getBasket = () => {
            emptyBasket()
            basketList.innerHTML = ''
            basketData.forEach((item) => {
                basketList.innerHTML += `
                <div class="basket__card">
                <img src="${item.images}" alt="${item.title}" class="basket__card-img">
                <h3 class="basket__card__name">${item.title}</h3>
                <span class="basket__card__sum">${item.price} руб.</span>
                <p style="font-family: sans-serif;" data-id="${item.id}" alt="" class="basket__card__X removeCart removeCartInBasket">X</p>
                </div>
                `
            })
            Array.from(totalBasket).forEach((item) => {
                item.textContent = basketData.reduce((acc, rec) => {
                    return acc + +rec.price
                }, 0)
            })
            
            percentBasket.textContent = basketData.reduce((acc, rec) => {
                return acc + +rec.price
            }, 0) / 100 * 5
        }
        getBasket()
        
        function emptyBasket(){
            if(!basketData.length){
                basket__inner.innerHTML = 
                `
                <div>
                <h2 style="padding-top: 10px;" class="basket__title">Корзина</h2>
                </div>
                <div class="basket__bottom">
                <img class="emptyBasket-img" src="./src/images/image 8.png" alt="">
                <div class="basket__text">
                <h4 style="font-size: 16px;" class="basket__titlecheat">Корзина пустая</h4>
                </div>
                <div class="emptyBasket__text">
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                </div>
                <button onclick="location.reload()" style="cursor: pointer" class="emptyBasket__btn"> <-- Вернуться назад</button>
                </div>
                `
            }
        }
        
        const debounce = (fn, delay) => {
            let timeout;
            return(...args)=> {
                clearTimeout(timeout);
                let fnCall = () => {
                    fn(...args);
                };
                timeout = setTimeout(fnCall,delay);
            }
        }
        
        filterSelectorPrice.addEventListener('change', (e) => {
            filterPrice = e.target.value
            getShoes()
})

filterSelectorCategory.addEventListener('change', (e) => {
    filterCategory = e.target.value
    
    getShoes()
})

filterSelectorGender.addEventListener('change', (e) => {
    filterGender = e.target.value
    getShoes()
})
filterSelectorBrands.addEventListener('change', (e) => {
    filterBrands = e.target.value
    getShoes()
})
filterSearch.addEventListener('keyup', (e) => {
    filterSearchValue = e.target.value
    debounce(getShoes(), 2000);
    debounce(console.log('123'), 2000);
})

basketBtn.addEventListener('click', (e) =>
basketContent.classList.add('show')
);

basketContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('show')) {
        basketContent.classList.remove('show');
    }
});
let deltdsplnonilint = document.querySelector('.deltdsplnonilint')
let selects = document.querySelector('.selects') 
let skbdbpmdd = document.querySelector('.skbdbpmdd')
deltdsplnonilint.addEventListener('click', ()=>{
    selects.classList.remove('None')
    
})
skbdbpmdd.addEventListener('click',()=>{
    selects.classList.add('None')
})
getShoes()