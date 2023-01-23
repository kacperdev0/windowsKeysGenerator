const output = document.getElementById("output");
const howMany = document.getElementById("howmany");

const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const generate = () => {
    for (let i = 0; i < howMany.value; i++) {
        let final = "";
        for (let i = 0; i < 5; i++) {
            for (let i = 0; i < 5; i++) {
                final += chars[Math.floor(Math.random() * (chars.length - 1))];
            }
            final += "-";
        }
        output.innerHTML += final.slice(0, -1) + "<br><br>";
    }
}
