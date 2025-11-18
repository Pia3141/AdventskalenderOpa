const calendar = document.getElementById('calendar');
const modal = document.getElementById('imageModal');
const field = document.getElementById('modal-body');
const title = document.getElementById('title');

const myModal = new bootstrap.Modal(modal);

const list = 
    [
        {day: '1', text:'Großwallstadt',link:''},
        {day: '2', text:'Brunnen',link:''},
        {day: '3', text:'Fährhäuschen',link:''},
        {day: '4', text:'Wendelinuskapelle',link:''},
        {day: '5', text:'Heimatmuseum',link:''},
        {day: '6', text:'',link:''},
        {id: '7', text:'Kirche',link:''},
        {id: '8', text:'',link:''},
        {id: '9', text:'',link:''},
        {id: '10', text:'Turm',link:''},
        {id: '11', text:'',link:''},
        {id: '12', text:'',link:''},
        {id: '13', text:'',link:''},
        {id: '14', text:'Mutter-Kapelle',link:''},
        {id: '15', text:'',link:''},
        {id: '16', text:'',link:''},
        {id: '17', text:'',link:''},
        {id: '18', text:'',link:''},
        {id: '19', text:'',link:''},
        {id: '20', text:'',link:''},
        {id: '21', text:'Lourdes-Grotte',link:''},
        {id: '22', text:'',link:''},
        {id: '23', text:'',link:''},
        {id: '24', text:'Manfreds Krippe',link:''},
    ]

document.addEventListener("click", () => {
    document.getElementById("music").muted = false;
});


for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}

let doors = Array.from(document.getElementsByClassName('door'));

let show = (e) =>{
    let id = e.target.id;
    let today = new Date();
    let open = new Date(year = 2025, month=11-1, day = id)

    if (open <= today){
        title.innerText = `${list[id-1]['text']}`;
        field.innerHTML= `<img src='${list[id-1]['link']}'>`;
        myModal.show();

        let btn =  document.getElementById('save-btn');
        btn.addEventListener('click', ()=> {
                const link = document.createElement('a');

                link.href = `${list[id-1]['link']}`;
                link.download = 'img.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
        })
    }
}

doors.forEach((d)=>{
    d.addEventListener('click', show);
})

