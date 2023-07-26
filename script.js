const HataMsgElement = document.getElementById('HataMsg')
const agirlikDegeriElement = document.querySelector('.agirlikDegeri')
const gezegenIDElement = document.querySelector('#gezegenID')
const gezegenFotoElement = document.querySelector('#gezegenFoto')
const inputElement = document.getElementById('inputID')

handleOptionChange = (e) => {
    let gezegenAdi = e.value !== 'Seciniz' ? e.value : 'Dunya';
    gezegenFotoElement.src = `./img/planets/${gezegenAdi}.png`
}


hesaplaOnClick = () => {
    HataMsgElement.innerText = ''
    const inputValue = inputElement.value

    if (inputValue >= 0) {
        if (gezegenDropdown.value == 'Seciniz') {
            HataMsgElement.innerText = 'Lütfen bir gezegen seçiniz'
        } else {
            console.log('inputValue:', inputValue, "gezegen değeri:", gezegenDropdown.value)
            gezegenIDElement.innerText = gezegenDropdown.options[gezegenDropdown.selectedIndex].text
            switch (gezegenDropdown.value) {
                case 'Merkur':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.378 * 100) / 100
                    break;
                case 'Venus':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.907 * 100) / 100
                    break;
                case 'Dunya':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 1 * 100) / 100
                    break;
                case 'Mars':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.377 * 100) / 100
                    break;
                case 'Jupiter':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 2.36 * 100) / 100
                    break;
                case 'Saturn':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.916 * 100) / 100
                    break;
                case 'Uranus':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.889 * 100) / 100
                    break;
                case 'Neptun':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 1.12 * 100) / 100
                    break;
                case 'Pluton':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.071 * 100) / 100
                    break;
                case 'Ay':
                    agirlikDegeriElement.textContent = Math.round(inputValue * 0.166 * 100) / 100
                    break;

                default:
                    agirlikDegeriElement.textContent = 'Bilinmeyen bir hata oluştu'
                    break;
            }
        }
    } else {
        HataMsgElement.innerText = 'Lütfen geçerli bir değer giriniz'
    }

}


window.addEventListener('keydown', (e)=> {
    e.key == 'Enter' ? hesaplaOnClick() : ''
})




// degerGecerliMi = (deger) => {
//     if (/[^0-9.]/.test(deger)) {
//         console.log('regex ten false döndü')
//         return false
//     } if (deger == 0 )  {
//         console.log('değer 0 dan false döndü')
//         return false
//     }
//     else {
//         console.log('true döndü')
//         return true
//     }
// }
