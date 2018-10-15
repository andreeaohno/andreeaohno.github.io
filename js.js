$(document).ready(function(){
    $('#calculeaza').on('click',function () {
        $a = $('#a').val();
        $b = $('#b').val();
        $c = $('#c').val();
        $delta = null;

        if($a == 0) {
            $('#type').html('Ecuatie de gradul 1');
        }
            $delta = $b*$b -4*$a*$c;

            if($delta < 0)
            {
                $('#type').html('Ecuatie nu are solutii reale');
            }
            else{
                if($delta === 0) {
                    $x1=null;
                    $x2=null;
                    $x1 = -($b/2*$a);
                    $x2=$x1;
                    $('#x1').html($x1);
                    $('#x2').html($x2);
                } else {
                    $x1 = (-$b+(sqrt($delta)))/2*$a;
                    $x2 = (-$b-(sqrt($delta)))/2*$a;
                    $('#x1').html($x1);
                    $('#x2').html($x2);
                }
            }
    });
});
