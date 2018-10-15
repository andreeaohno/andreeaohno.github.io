document.getElementById("resolve").on("click",function () {
    var a = document.getElementById("a").val();
    var b = document.getElementById("b").val();
    var c = document.getElementById("c").val();
    var delta = null;
    var x1 = null;
    var x2 = null;

    if (a === 0) {
        document.getElementById('type').HTML('Ecuatie de gradul 1');
    }
    delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById('type').HTML('Ecuatie nu are solutii reale');
    }
    else {
        if (delta === 0) {
            x1 = -(b / 2 * a);
            x2 = x1;
            document.getElementById('x1').html(x1);
            document.getElementById('x2').HTML(x2);
        } else {
            x1 = (-b + (Math.sqrt(delta))) / (2 * a);
            x2 = (-b - (Math.sqrt(delta))) / (2 * a);
            document.getElementById('x1').HTML(x1);
            document.getElementById('x2').HTML(x2);
        }
    }
});




