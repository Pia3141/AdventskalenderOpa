const calendar = document.getElementById('calendar');
const modal = document.getElementById('imageModal');
const field = document.getElementById('modal-body');
const title = document.getElementById('title');

const myModal = new bootstrap.Modal(modal);

const list = 
    [
        {day: '1', text:'Großwallstadt',link:''},
        {day: '2', text:'Feuerwehrhaus',link:'files/Feuerwehrhaus.jpg'},
        {day: '3', text:'TV Großwallstadt Vereinsheim',link:'files/TVG.jpg'},
        {day: '4', text:'Wendelinuskapelle',link:''},
        {day: '5', text:'Turnhalle',link:''},
        {day: '6', text:'Rathaus',link:''},
        {id: '7', text:'Kirche',link:''},
        {id: '8', text:'Mainwiese',link:''},
        {id: '9', text:'Volkshalle',link:''},
        {id: '10', text:'Turm',link:''},
        {id: '11', text:'Alte Schule',link:''},
        {id: '12', text:'Weichbild',link:'files/Weichbild.jpg'},
        {id: '13', text:'Ortskern',link:''},
        {id: '14', text:'Mutterkapelle',link:''},
        {id: '15', text:'Pfarrheim',link:''},
        {id: '16', text:'Kreuz am Kehlpfad',link:'files/Kreuz.jpg'},
        {id: '17', text:'Blaue Brücke',link:''},
        {id: '18', text:'Weinberg',link:''},
        {id: '19', text:'Ölbergkapelle',link:''},
        {id: '20', text:'Schleuse',link:'files/Schleuse.jpg'},
        {id: '21', text:'Lourdes-Grotte',link:''},
        {id: '22', text:'Blick auf den Main',link:''},
        {id: '23', text:'Heimatmuseum',link:''},
        {id: '24', text:'Fröhliche Weihnachten',link:''},
    ]

for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}

let doors = Array.from(document.getElementsByClassName('door'));

let show = (e) =>{
    let id = e.target.id;
    let today = new Date();
    let open = new Date(year = 2025, month=11-1, day = 1) // !!!ÄNDERN

    if (open <= today){
        title.innerText = `${list[id-1]['text']}`;
        field.innerHTML= `<img src='${list[id-1]['link']}'>`;
        myModal.show();

        let btn =  document.getElementById('save-btn');
        btn.addEventListener('click', ()=> {
                const link = document.createElement('a');

                link.href = `${list[id-1]['link']}`;
                link.download = `${list[id-1]['text']}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
        })
    }
}

doors.forEach((d)=>{
    d.addEventListener('click', show);
})

