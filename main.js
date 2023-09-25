import './style.css'

document.addEventListener("DOMContentLoaded", init);

function init() 
{
    const szamit = document.getElementById("szamit");
    szamit.addEventListener("click", teruletkeruletszamit);
}
function teruletkeruletszamit() {
    const a = parseFloat(document.getElementById("aoldal").value);
    const b = parseFloat(document.getElementById("boldal").value);
    const c = parseFloat(document.getElementById("coldal").value);
    const eredmeny = document.getElementById("eredmeny")
    if (a + b <= c || a + c <= b || b + c <= a) {
        eredmeny.textContent = "Hibás adatok! A háromszög nem szerkezthető";
    }
    else {
        const haromszog = {
            a: a,
            b: b,
            c: c,
            kerulet: function () {
                return this.a + this.b + this.c;
            },
            terulet: function () {
                const s = this.kerulet() / 2;
                return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
            },
            KeruletTeruleteszoveg: function () 
            {
                return `kerulet: ${this.kerulet()}-Terület ${this.terulet()}`;
            }
        };
        console.log(haromszog);
        eredmeny.textContent=haromszog.KeruletTeruleteszoveg();
    }
}