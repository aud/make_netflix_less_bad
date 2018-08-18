import * as $ from 'jquery'

document.onkeydown = (evt) => {
  switch (evt.keyCode) {
    case 39:
      $('.button-nfplayerFastForward').click()
      break
    case 37:
      $('.button-nfplayerBackTen').click()
      break
  }

  const playerPreview = $('.trickplay-visible')

  if (playerPreview.length > 0) {
    playerPreview[0].style = 'display: none'
  }
}
