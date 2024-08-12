let up = 0;
let down = 0;

function updateTotal() {
    let total = up - down;
    document.getElementById('text1').textContent = up;
    document.getElementById('text2').textContent = down;
    document.getElementById('totalText').textContent = total;
}

document.getElementById('blueArrow').onclick = function() {
    up++;
    updateTotal();
};

document.getElementById('redArrow').onclick = function() {
    down++;
    updateTotal();
};
