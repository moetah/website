const $bg = document.querySelectorAll('.bg')[0]


let pos = ( $bg.clientHeight - window.innerHeight )

function onBgLoad() {
  Velocity($bg,{
    blur: [0, 4]
    // scale: [1, 2]
  },{
    duration: pos*10,
    queue: false
  })
  Velocity($bg,{
    translateY: [-1*pos, pos/-2],
    scale: [1, 1.1],
    opacity: [1, 0]
  },{
    duration: pos*20,
    easing: 'easeOutSine'
  })
}

$bg.style.cssText = `transform: translatey(-${ (pos) }px)`
