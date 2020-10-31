//vamos a crear una funcion que se encargue del cifrado de cesar
//let
var cesar = cesar || function(txt, a, b, action){
    //funcion anonima :3
    //callback

        var replace = (function(){
            //mi abecedario
          var resultado = "El cifrado es : ";
          const abc = [ 'a'/*00*/, 'b'/*01*/, 'c'/*02*/, 'd'/*03*/, 'e'/*04*/,
                       'f'/*05*/, 'g'/*06*/, 'h'/*07*/, 'i'/*08*/, 'j'/*09*/,
                      'k'/*10*/, 'l'/*11*/, 'm'/*12*/, 'n'/*13*/, 'ñ'/*14*/,
                     'o'/*15*/, 'p'/*16*/, 'q'/*17*/, 'r'/*18*/, 's'/*19*/,
                    't'/*20*/, 'u'/*21*/, 'v'/*22*/, 'w'/*23*/, 'x'/*24*/,
                   'y'/*25*/, 'z'/*26*/                                       ];


            const l = abc.length;



/*                         aX+b mod 27

                     cesarPlusUltra (mejorado)
            Donde x refiere a la pocicion de la letra
            en el mensaje original y el resultado refiere
            a la nueva pocicion


                000000000000000000000000000000000
                000000000000000000000000000000000
                00000000000-----------00000000000
                0000000----00000000000----0000000
                00000--0000000000000000000--00000
                0000-0000000000000000----000-0000
                0000-000000000000000--000-00-0000
                0000-00000000000000000---000-0000
                0000-00000000000000000000000-0000
                00000--0000000000000000000--00000
                000000----00000101010----00000000
                0000000000------------00000000000
                000000000000000000000000000000000
                000000000000000000000000000000000


*/


          if (action) {

            for (var i = 0; i < txt.length; i++) {

              for (var circ = 0; circ < abc.length; circ++) {

                if( txt[i] == abc[circ]){


                  var necod = /*a*/circ+b;

                  var resto = necod % 27;

                  //var div = necod/27;
                  //div = Math.round(div);
                  //var resto = necod - (div*27);

                  console.log("new placement : " + necod);

                  resultado = resultado + abc[resto];

                  console.log(circ);

                  break;

                }

              }

            }

          }

          else {

            for (var i = 0; i < txt.length; i++) {

              for (var circ = 0; circ < abc.length; circ++) {
                if( txt[i] == abc[circ] ){

                    var reversF;

                    if((circ-b) == Math.abs(circ-b)){

                      reversF = (circ-b)/*/a*/;
                      reversF = reversF % 27;

                    }
                    else{

                      reversF = (27 + (circ - b));
                      console.log(reversF);

                    }


                    console.log(reversF);

                   resultado = resultado + abc[reversF];

                }

              }

            }

          }


          return resultado;

     })();
     return replace;
};

//realizar una funcion que se encargue de codificar y decodificar

function codificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar( document.getElementById("cadena").value, 3,parseInt( document.getElementById("despla").value), true);

}

function decodificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar(document.getElementById("cadena").value, 3,parseInt( document.getElementById("despla").value), false);

}
