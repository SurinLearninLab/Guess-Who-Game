console.log('Guess Who?')

function toggleEliminated(img) {
    img.classList.toggle("eliminated");
 }
//  classList.toggle toggles the class 'eliminate' on the 'img' element

// let allNames = document.querySelectorAll('span')
// for (let i = 0; i < allNames.length; i++) {
//     console.log(allNames[i].innerHTML)
// }

// let allImages = document.querySelectorAll('src')
// for (let i = 0; i < allImages.length; i++) {
//     console.log(allImages[i].innerHTML)
// }


cards = [
    {
        name:'Sakura',
        image: 'gw-images\images\characters_01.jpg'
    },
    {
        name: 'Kaede',
        image: 'gw-images\images\characters_02.jpg.'
    },
    {
        name: 'Aya',
        image: 'gw-images\images\characters_03.jpg'
    },
    {
        name: 'Yuuki',
        image: 'gw-images\images\characters_04.jpg'
    },
    {
        name: 'Mikoto',
        image: 'gw-images\images\characters_05.jpg'
    },
    {
        name: 'Ren',
        image: 'gw-images\images\characters_06.jpg'
    },
    {
        name: 'Ryo',
        image: 'gw-images\images\characters_07.jpg'
    },
    {
        name: 'Yori',
        image: 'gw-images\images\characters_08.jpg'
    },
    {
        name: 'Hana',
        image: 'gw-images\images\characters_09.jpg'
    },
    {
        name: 'Tatsuya',
        image: 'gw-images\images\characters_10.jpg'
    },
    {
        name: 'Taro',
        image: 'gw-images\images\characters_11.jpg'
    },
    {
        name: 'Mai',
        image: 'gw-images\images\characters_12.jpg'
    },
    {
        name: 'Emiko',
        image: 'gw-images\images\characters_13.jpg'
    },
    {
        name: 'Ayumi',
        image: 'gw-images\images\characters_14.jpg'
    },
    {
        name: 'Hotaru',
        image: 'gw-images\images\characters_15.jpg'
    },
    {
        name: 'Haru',
        image: 'gw-images\images\characters_16.jpg'
    },
    {
        name: 'Kazuya',
        image: 'gw-images\images\characters_17.jpg'
    },
    {
        name: 'Akira',
        image: 'gw-images\images\characters_18.jpg'
    },
    {
        name: 'Saki',
        image: 'gw-images\images\characters_19.jpg'
    },
    {
        name: 'Kazuo',
        image: 'gw-images\images\characters_20.jpg'
    }
]

// function selectRandomCard() {
//     let randomIndex = Math.floor(Math.random() * 20)
//     let randomCard = cards[randomIndex]
//     let mysteryImg = document.querySelector('.mystery')
//     let imagePath = 'images/charachters_01.jpg' 
//     mysteryImg.src = imagePath 
//     let mysteryName = document.querySelector('.mystery-card span')
//     mysteryName.textContent = randomCard.name
// }
// selectRandomCard()

// function selectRandomCard() {
//     let randomIndex = Math.floor(Math.random() * 20)
//     let randomCard = cards[randomIndex]
//     let mysteryImg = document.querySelector('img.mystery')
//     let imagePath
//     if (randomIndex < 10) {
//         let imagePath = 'images/characters_0' + (randomIndex + 1) + '.jpg'
//     }
//     else {
//         let imagePath = 'images/characters_' + (randomIndex + 1) + '.jpg'
//     }
//     mysteryImg.src = imagePath
//     let mysteryName = document.querySelector('.mystery-card span');
//     mysteryName.textContent = randomCard.name
//   }
  
//   selectRandomCard()
  

function selectRandomCard() {
    let randomIndex = Math.floor(Math.random() * 20)
    let randomCard = cards[randomIndex]
    let mysteryImg = document.querySelector('img.mystery')
    let imagePath
    if (randomIndex < 10) {
      imagePath = 'gw-images/images/characters_0' + (randomIndex + 1) + '.jpg'
    }
    else {
      imagePath = 'gw-images/images/characters_' + (randomIndex + 1) + '.jpg'
    }
    mysteryImg.src = imagePath
    let mysteryName = document.querySelector('.mystery-card span')
    mysteryName.textContent = randomCard.name
  }
  
  selectRandomCard()
  