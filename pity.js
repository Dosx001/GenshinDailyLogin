window.onload = function() {
    for (let id of ['char', 'weap', 'stan']) {
        if (localStorage.getItem(id) == null) {
            localStorage.setItem(id, 0)
        }
        else {
            document.getElementById(id).innerHTML = localStorage.getItem(id)
        }
    }
}

function add(id, num) {
    let ele = document.getElementById(id)
    let score = parseInt(ele.innerHTML) + parseInt(num)
    ele.innerHTML = id == "weap" ? (79 < score ? 0:score):(89 < score ? 0:score)
    localStorage.setItem(id, ele.innerHTML)
}

function reset(id) {
    document.getElementById(id).innerHTML = 0
    localStorage.setItem(id, 0)
}
