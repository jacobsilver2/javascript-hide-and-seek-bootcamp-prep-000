function nestedTarget() {
    var nested = document
        .querySelector('div#nested div div div div.target')
        
    return nested;
}

function increaseRankBy(n) {
    const lis = document
        .getElementById('app')
        .querySelectorAll('ul.ranked-list li');
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
        var num = lis[i].innerHTML
        num = parseInt(num) + n;
        lis[i].innerHTML = num;
    }
    return lis;
}

function getFirstSelector(selector) {
  var element = document.querySelector(selector);
return element;
}

function deepestChild() {
        let grandNode = document.querySelectorAll('#grand-node div')
            var lastElement = grandNode[grandNode.length - 1];

    return lastElement;    
}