function add(id, num) {
    let ele = document.getElementById(id)
    let score = parseInt(ele.innerHTML) + parseInt(num)
    if (id == "weap") {
        if (79 < score) {
            ele.innerHTML = 0
        }
        else {
            ele.innerHTML = score
        }
    }
    else {
        if (89 < score) {
            ele.innerHTML = 0
        }
        else {
            ele.innerHTML = score
        }
    }
}

function reset(id) {
    document.getElementById(id).innerHTML = 0
}
