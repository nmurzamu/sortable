let favorites = JSON.parse(localStorage.getItem('ninja_fav')) || [];
let experience = parseInt(localStorage.getItem('ninja_exp')) || 0;
let compareList = [];
let category = 'Все';

function init() {
    updateRank();
    applyFilters();
}

function toggleTheme() {
    document.body.classList.toggle('scroll-mode');
}

function updateRank() {
    const bar = document.getElementById('rank-bar');
    const name = document.getElementById('user-rank-name');
    const count = document.getElementById('exp-count');
    count.innerText = experience;
    let percent = (experience / 100) * 100;
    bar.style.width = Math.min(percent, 100) + '%';
    if(experience > 80) name.innerText = "ЛЕГЕНДА";
    else if(experience > 50) name.innerText = "ЭКСПЕРТ";
    else if(experience > 20) name.innerText = "ИССЛЕДОВАТЕЛЬ";
    else name.innerText = "НОВИЧОК";
}

function setCategory(cat) {
    category = cat;
    document.querySelectorAll('.filter-grid .btn').forEach(b => {
        b.classList.toggle('active', b.innerText === cat || (cat === 'Fav' && b.innerText.includes('ЛЮБИМЫЕ')));
    });
    applyFilters();
}

function applyFilters() {
    const query = document.getElementById('main-search').value.toLowerCase();
    const filtered = DATABASE.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(query) || s.origin.toLowerCase().includes(query);
        let matchesCat = true;
        if(category === 'Наруто') matchesCat = s.universe === 'Наруто';
        if(category === 'Титаны') matchesCat = s.universe === 'Атака Титанов';
        if(category === 'Гуль') matchesCat = s.universe === 'Токийский Гуль';
        if(category === 'Тетрадь') matchesCat = s.universe === 'Тетрадь Смерти';
        if(category === 'Fav') matchesCat = favorites.includes(s.id);
        return matchesSearch && matchesCat;
    });
    renderTable(filtered);
}

function renderTable(data) {
    const tbody = document.getElementById('table-body');
    document.getElementById('total-count').innerText = data.length;
    tbody.innerHTML = data.map((s, idx) => `
        <tr class="row-shinobi" onclick="openDetails(${s.id})">
            <td><span style="color:${favorites.includes(s.id)?'gold':'#555'}" onclick="toggleFav(event, ${s.id})">★</span></td>
            <td>
                <div style="display:flex; align-items:center;">
                    <img src="${s.img}" style="width:40px; height:40px; border-radius:50%; margin-right:10px; object-fit:cover; border:1px solid var(--accent);">
                    <b>${s.name}</b>
                </div>
            </td>
            <td>${s.elements.map(e => `<span class="badge-element">${e}</span>`).join('')}</td>
            <td><span class="btn" style="font-size:0.6rem; padding:2px 5px; pointer-events:none;">${s.rank}</span></td>
            <td>${s.origin}</td>
            <td><button class="btn" onclick="toggleCompare(event, ${s.id})">${compareList.includes(s.id) ? '✅' : '⚖️'}</button></td>
        </tr>
    `).join('');
}

function toggleFav(e, id) {
    e.stopPropagation();
    if(favorites.includes(id)) favorites = favorites.filter(f => f !== id);
    else favorites.push(id);
    localStorage.setItem('ninja_fav', JSON.stringify(favorites));
    applyFilters();
}

function openDetails(id) {
    const s = DATABASE.find(x => x.id === id);
    experience++;
    localStorage.setItem('ninja_exp', experience);
    updateRank();

    document.getElementById('m-img').src = s.img;
    document.getElementById('m-name').innerText = s.name;
    document.getElementById('m-village').innerText = `${s.universe} | ${s.origin} | ${s.rank}`;
    document.getElementById('m-elements').innerHTML = s.elements.map(e => `<span class="badge-element">${e}</span>`).join('');
    document.getElementById('m-stats-bars').innerHTML = Object.entries(s.stats).map(([k,v]) => `
        <div style="margin-top:10px;">
            <div style="display:flex; justify-content:space-between; font-size:0.7rem;"><span>${k}</span><span>${v}%</span></div>
            <div class="rank-progress"><div class="rank-fill" style="width:${v}%; background:var(--accent); box-shadow: 0 0 10px var(--accent);"></div></div>
        </div>
    `).join('');
    document.getElementById('m-jutsus').innerHTML = s.jutsus.map(j => `<span class="jutsu-tag">${j}</span>`).join('');
    document.getElementById('modal-char').style.display = 'flex';
}

function toggleCompare(e, id) {
    e.stopPropagation();
    if(compareList.includes(id)) compareList = compareList.filter(c => c !== id);
    else if(compareList.length < 2) compareList.push(id);
    
    document.getElementById('compare-trigger').style.display = compareList.length > 0 ? 'block' : 'none';
    document.getElementById('comp-n').innerText = compareList.length;
    applyFilters();
}

function runComparison() {
    const c1 = DATABASE.find(x => x.id === compareList[0]);
    const c2 = DATABASE.find(x => x.id === compareList[1]);
    document.getElementById('compare-grid').innerHTML = [c1, c2].map(c => `
        <div style="text-align:center; flex:1;">
            <img src="${c.img}" style="width:150px; height:150px; border-radius:50%; object-fit:cover; border:3px solid var(--accent);">
            <h3>${c.name}</h3>
            ${Object.entries(c.stats).map(([k,v]) => `<p style="font-size:0.8rem;">${k}: ${v}</p>`).join('')}
        </div>
    `).join('<h1 style="color:var(--accent);">VS</h1>');
    document.getElementById('modal-compare').style.display = 'flex';
}

// Функции для добавления новых героев
function openAddModal() { document.getElementById('modal-add').style.display = 'flex'; }
function closeAddModal() { document.getElementById('modal-add').style.display = 'none'; }

function addNewHero() {
    const name = document.getElementById('add-name').value;
    const universe = document.getElementById('add-universe').value;
    const origin = document.getElementById('add-origin').value;
    const rank = document.getElementById('add-rank').value;
    const img = document.getElementById('add-img').value || 'https://via.placeholder.com/150';
    const jutsus = document.getElementById('add-jutsus').value.split(',');
    const s1 = document.getElementById('add-s1').value || 50;
    const s2 = document.getElementById('add-s2').value || 50;
    const s3 = document.getElementById('add-s3').value || 50;

    if(!name) return alert("Введите имя!");

    const newHero = {
        id: Date.now(),
        universe, name, origin, rank, img,
        elements: ["🆕"],
        jutsus,
        stats: { "Атака": s1, "Защита": s2, "Скорость": s3 }
    };

    customHeroes.push(newHero);
    localStorage.setItem('custom_heroes', JSON.stringify(customHeroes));
    DATABASE.push(newHero);
    
    applyFilters();
    closeAddModal();
    alert("Герой успешно добавлен в базу!");
}

function closeModal() { document.getElementById('modal-char').style.display = 'none'; }
function closeCompare() { document.getElementById('modal-compare').style.display = 'none'; compareList = []; applyFilters(); }

document.getElementById('main-search').oninput = applyFilters;
window.onclick = e => { if(e.target.className === 'modal') { closeModal(); closeCompare(); closeAddModal(); }};

init();