// hover animation on links 
document.querySelectorAll('.link').forEach(function(elem) {
  console.dir(elem)
  elem.addEventListener('mouseover', function(e) {
    console.dir(e)
    elem.parentNode.parentNode.classList.add('hover')
  }, true)
  elem.addEventListener('mouseleave', function() {
    elem.parentNode.parentNode.classList.remove('hover')
  }, true)
})

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function(){
    document.querySelector('.bg.hide').classList.remove('hide')
  }, 10)
  setTimeout(function(){
    document.querySelector('.site-title.hide').classList.remove('hide')
  }, 100)
  var siteNav = document.querySelectorAll('.site-nav .item')
  var socialNav = document.querySelectorAll('.social-nav .item')
  var siteNavCount = 0
  var socialNavCount = 0
  setTimeout(function() {
    var siteNavInterval = setInterval(function(){
      console.log(siteNavCount, siteNav.length)
      siteNav[siteNavCount].classList.remove('hide')
      siteNavCount++
      if (siteNavCount === siteNav.length) clearTimeout(siteNavInterval)
    }, 100)
  }, 200)
  setTimeout(function() {
    var socialNavInterval = setInterval(function(){
      socialNav[socialNavCount].classList.remove('hide')
      socialNavCount++
      if (socialNavCount === socialNav.length) clearTimeout(socialNavInterval)
    }, 100)
  }, 200)
  
  var inte = setInterval(function() {
    document.querySelector('.logo-wrap').classList.toggle('hm')
  }, 1000)
});