const calendar = document.getElementById('calendar');
const modal = document.getElementById('imageModal');
const field = document.getElementById('modal-body');
const title = document.getElementById('title');
const myModal = new bootstrap.Modal(modal);
let save = null;
const list = 
    [
        {day: '1', text:'Großwallstadt',link:'files/nord.jpg'},
        {day: '2', text:'Feuerwehrhaus',link:'files/Feuerwehrhaus.jpg'},
        {day: '3', text:'TV Großwallstadt Vereinsheim',link:'files/TVG.jpg'},
        {day: '4', text:'Neues Wasserwerk',link:'files/Wasserwerk.jpg'},
        {day: '5', text:'Turnhalle',link:'files/Turnhalle.jpg'},
        {day: '6', text:'Rathaus',link:'files/Rathaus.jpg'},
        {id: '7', text:'Kirche',link:'files/Kirche.jpg'},
        {id: '8', text:'Wald',link:'files/Wald.jpg'}, //Platzhalter für Schule
        {id: '9', text:'Volkshalle',link:'files/Volkshalle.jpg'},
        {id: '10', text:'Turm',link:'files/Turm.jpg'},
        {id: '11', text:'Blick auf den Main',link:'files/main.jpg'},
        {id: '12', text:'Ölbergkapelle',link:'files/Ölbergkapelle.jpg'},
        {id: '13', text:'Ortskern',link:'files/Ortskern.jpg'},
        {id: '14', text:'Mutterkapelle',link:'files/Mutterkapelle.jpg'},
        {id: '15', text:'Pfarrheim',link:'files/Pfarrheim.jpg'},
        {id: '16', text:'Kreuz am Kehlpfad',link:'files/Kreuz.jpg'},
        {id: '17', text:'Huch! Wer hat sich denn da in den Kalender geschlichen?',link:'files/Biene.png'},
        {id: '18', text:'Großwallstadt und Kleinwallstadt',link:'files/sued.jpg'},
        {id: '19', text:'Ölbergkapelle',link:'files/Ölbergkapelle_innen.jpg'},
        {id: '20', text:'Schleuse',link:'files/Schleuse.jpg'},
        {id: '21', text:'Heimatmuseum',link:'files/Heimatmuseum.jpg'},
        {id: '22', text:'Brunnen hinterm Turm',link:'files/Brunnen.jpg'},
        {id: '23', text:'Kirche',link:'files/Kirche_innen.jpg'},
        {id: '24', text:'Fröhliche Weihnachten',link:'files/Weihnachtsbaum.jpg'},
    ]

for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}


let doors = Array.from(document.getElementsByClassName('door'));
   

let show = (e) =>{
    let id = Number(e.target.id);
    let today = new Date();
    let open = new Date(2025, 11, id); // !!!ÄNDERN

    if (open <= today){
        title.innerText = list[id-1]['text']
        field.innerHTML= `<img src='${list[id-1]['link']}'>`;
        myModal.show();

       let btn = document.getElementById('save-btn');
        if (save) {
            btn.removeEventListener('click', save);
        }
        save = () => {
            const link = document.createElement('a');
            link.href = list[id-1].link;
            link.download = list[id-1].text;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        btn.addEventListener('click', save);
    }
}

doors.forEach((d)=>{
    d.addEventListener('click', show);
})

