var a = document.getElementById("myRange");
var bodyColor = document.getElementById("bodyColor");
var c = document.getElementById("edad");
var output;
var net = new brain.NeuralNetwork();



net.train([
    //niños
    {
        input: {
            edad:0.06
        },
        output: {
            r: 1,
            g:0,
            b:0.2
        }
    },
    {
        input: {
            edad:0.02
        },
        output: {
            r: 0.1,
            g:0,
            b:1
        }
    },
    {
        input: {
            edad:0.1
        },
        output: {
            r: 0.2,
            g:0.1,
            b:1
        }
    },
    {
        input: {
            edad:0.04
        },
        output: {
            r: 0.1,
            g:1,
            b:0.2
        }
    },
    {
        input: {
            edad:0.05
        },
        output: {
            r: 0.1,
            g:1,
            b:0.2
        }
    },
    {
        input: {
            edad:0.03
        },
        output: {
            r: 0.1,
            g:0.2,
            b:1
        }
    },
    {
        input: {
            edad:0.7
        },
        output: {
            r: 1,
            g:0.1,
            b:0.15
        }
    },
    {
        input: {
            edad:0.09
        },
        output: {
            r: 0,
            g:1,
            b:0
        }
    },
    //adolescentes
    {
        input: {
            edad:0.12
        },
        output: {
            r: 0.1,
            g:0.4,
            b:0.2
        }
    },
    {
        input: {
            edad:0.16
        },
        output: {
            r: 0.1,
            g:0.2,
            b:0.6
        }
    },
    {
        input: {
            edad:0.18
        },
        output: {
            r: 0.5,
            g:0.2,
            b:0
        }
    },
    //adultos
    {
        input: {
            edad:0.25
        },
        output: {
            r: 0.76,
            g:0.42,
            b:0.38
        }
    },
    {
        input: {
            edad:0.99
        },
        output: {
            r: 0.32,
            g:0.42,
            b:0.76
        }
    },
    {
        input: {
            edad:0.55
        },
        output: {
            r: 0.50,
            g:0.72,
            b:0.38
        }
    },
    {
        input: {
            edad:0.37
        },
        output: {
            r: 0.39,
            g:0.8,
            b:0.38
        }
    },
    {
        input: {
            edad:0.67
        },
        output: {
            r: 0.4,
            g:0.48,
            b:0.7
        }
    },
    {
        input: {
            edad:0.81
        },
        output: {
            r: 0,
            g:0,
            b:0
        }
    }
]);

a.oninput = function() {
    c.innerHTML=a.value;
    output = net.run({
        edad:a.value/100
    }); 
    
    var r = Math.trunc(output.r*255).toString(16).slice(0,2)
    var g = Math.trunc(output.g*255).toString(16).slice(0,2)
    var b = Math.trunc(output.b*255).toString(16).slice(0,2)
    if(r.length<2){
        r="0"+r
    }
    if(g.length<2){
        g="0"+g
    }
    if(b.length<2){
        b="0"+b
    }
    console.log(r+"ñ"+g+"ñ"+b)
    bodyColor.style.backgroundColor="#"+r+g+b;
}