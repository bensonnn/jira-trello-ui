const config = {
  scrollX: true,
  deceleration: 0.001
}

applyScroll()
let urlCache = window.location.href

setInterval(function() {
  if (window.location.href !== urlCache) {
    urlCache = window.location.href
    applyScroll()
  }
}, 100)

function checkForSwimlane() {
  return document.getElementsByClassName('ghx-swimlane').length &&
    document.getElementById('ghx-pool')
}


function applyScroll() {
  let interval = setInterval(function() {
    if (checkForSwimlane()) {
      clearTimeout(interval)
      iscroll()
    }
  }, 100)
}

function iscroll() {
  new IScroll('#ghx-pool', config);
  new IScroll('.ghx-swimlane.ghx-first', config);
}
