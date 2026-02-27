const listAwal = [
    // Image 1
    {nama:"ACPULSIF 5MG @50", isi:50, harga:217500},
    {nama:"AMINEFRON TAB(BOX/100)", isi:100, harga:710000},
    {nama:"ANVOMER B6 @60", isi:60, harga:171000},
    {nama:"ASCAVIN SOFTGEL CAPSULE 4MG(BOX/30)", isi:30, harga:243000},
    {nama:"ATEVIR 0.5MG BLISTER(BOX/30)", isi:30, harga:945000},
    {nama:"AZOMAX DRY SYRUP", isi:1, harga:115000},
    {nama:"AZOMAX KAPLET(BOX/10)", isi:10, harga:330000},
    {nama:"BRICLOT TABLET 90 MG (BOX/30)", isi:30, harga:375000},
    {nama:"BUDESMA SUSPENSI BUDESONIDE 0.25MG/ML (BOX/20AMP)", isi:20, harga:350000},
    {nama:"BUDESMA SUSPENSI BUDESONIDE 0.5MG/ML (BOX/20AMP)", isi:20, harga:430000},
    {nama:"CANDERIN 16MG(BOX/30'S)", isi:30, harga:288000},
    {nama:"CANDERIN 8MG(BOX/30'S)", isi:30, harga:228000},
    {nama:"CANDERIN DUO (BOX/30)", isi:30, harga:330000},
    {nama:"CELOCID TAB 500MG (BOX/10)", isi:10, harga:230000},
    {nama:"COLERGIS SYR 60ML", isi:1, harga:50500},
    {nama:"COLERGIS TABLET @100", isi:100, harga:325000},
    {nama:"DAFOXA (BOX/30TAB)", isi:30, harga:317010},
    {nama:"DECULIN TAB 15MG(BOX/30)", isi:30, harga:198000},
    {nama:"DECULIN TAB 30MG(BOX/30)", isi:30, harga:288000},
    {nama:"DESLOTINE TABLET 5MG STRIP(BOX/30)", isi:30, harga:255000},
    {nama:"DEXAFLOX 400MG @30", isi:30, harga:813000},
    {nama:"DEXYCLAV 500MG @30", isi:30, harga:420000},
    {nama:"DEXYCLAV DS (BARU)", isi:1, harga:61500},
    {nama:"DEXYCLAV F.DS (BARU)", isi:1, harga:93500},
    {nama:"DISOLF", isi:30, harga:270000},
    {nama:"ECLID TABLET 100 MG", isi:30, harga:137500},
    {nama:"ECLID TABLET 50 MG", isi:30, harga:87500},
    {nama:"FERITRIN FC @30TAB", isi:30, harga:82500},
    {nama:"FESTARIC TABLET 40 MG (BOX/30)", isi:30, harga:157500},
    {nama:"FESTARIC TABLET 80 MG (BOX/30)", isi:30, harga:330000},
    {nama:"FLADYSTIN OVULA /10", isi:10, harga:170000},
    {nama:"FLAMICORT TABLET 4MG(BOX/50)", isi:50, harga:192500},
    {nama:"FLEXOR-DS KAPLET(BOX/60)", isi:60, harga:378000},
    {nama:"FOLAMIL CAP @ 100", isi:100, harga:200000},
    {nama:"FOLAMIL GENIO SOFT CAP(BTL/30'S)", isi:30, harga:135000},
    {nama:"FOLAMIL GOLD SOFT CAP(BTL/30'S)", isi:30, harga:150000},
    {nama:"FOLILAC SOFT CAPSUL (BTL/30)", isi:30, harga:150000},
    {nama:"FORCE D 1000 IU (BOX/60)", isi:60, harga:130000},
    {nama:"FORCE D 5000 IU (BOX/60)", isi:60, harga:190000},
    {nama:"FORMICAL-B (BOX/30)", isi:30, harga:156000},
    {nama:"FOSTIMON 150 IU (BOX/1)", isi:1, harga:735000},
    {nama:"FOSTIMON 75 IU (BOX/1)", isi:1, harga:425000},
    // Image 2
    {nama:"GASTROFER INJ 40MG", isi:1, harga:130000},
    {nama:"GLUVAS M (BOX/30)", isi:30, harga:135000},
    {nama:"GLUVAS TAB 1MG STRIP (BOX/50)", isi:50, harga:125000},
    {nama:"GLUVAS TAB 2MG STRIP (BOX/50)", isi:50, harga:225000},
    {nama:"GLUVAS TAB 4MG STRIP (BOX/50)", isi:50, harga:337500},
    {nama:"GRANON TABLET(BOX/10)", isi:10, harga:151500},
    {nama:"HYSTOLAN TAB STR 20MG @50", isi:50, harga:275000},
    {nama:"LACIDOFIL CAP (BOX/BTL @60)", isi:60, harga:420000},
    {nama:"LACIDOFIL SACHET (BOX/30SAC)", isi:30, harga:300000},
    {nama:"LAKTAFIT TABLET SALUT SELAPUT(BOX/60)", isi:60, harga:198000},
    {nama:"LAZ 30MG @20", isi:20, harga:300000},
    {nama:"LEPSIO SYRUP 100ML", isi:1, harga:88000},
    {nama:"LEPTICA CAPSULE 75MG(BOX/30)", isi:30, harga:277500},
    {nama:"LEVOSIF SYRUP 30MG/5ML", isi:1, harga:70000},
    {nama:"LONIDE FILM COATED TABLET 40MG (BOX/30)", isi:30, harga:210000},
    {nama:"LYCOXY", isi:30, harga:168000},
    {nama:"MERIOFERT 150 IU (BOX/1)", isi:1, harga:880000},
    {nama:"MERIOFERT 75 IU (BOX/1)", isi:1, harga:440000},
    {nama:"MERTIGO SR TABLET(BOX/100)", isi:100, harga:700000},
    {nama:"MERTIGO TAB 6MG @100", isi:100, harga:395000},
    {nama:"MOBAFER KAPSUL 500MCG (BOX/100)", isi:100, harga:280000},
    {nama:"MODEXA NASAL SPRAY (BOX/1)", isi:1, harga:200000},
    {nama:"MODEXA NASAL SPRAY 140 (BOX/1)", isi:1, harga:300000},
    {nama:"MONARIN FC TABLET 10MG(BOX/30)", isi:30, harga:240000},
    {nama:"MOPRIN TAB 500MG(BOX/10)", isi:10, harga:86000},
    {nama:"NASALIN 100ML", isi:1, harga:115000},
    {nama:"NEVODIO TABLET 5MG (BOX/30)", isi:30, harga:183000},
    {nama:"NORELUT 5MG @50", isi:50, harga:252500},
    {nama:"ORINOX FILM COATED TABLET 120MG(BOX/30)", isi:30, harga:375000},
    {nama:"ORINOX FILM COATED TABLET 60MG(BOX/30)", isi:30, harga:238500},
    {nama:"ORINOX FILM COATED TABLET 90MG(BOX/30)", isi:30, harga:295500},
    {nama:"OSSORAL FILM COATED CAPLET 800 MG BX 50 (BOX/50)", isi:50, harga:240000},
    {nama:"OSSORAL FILM COATED TABLET 200 MG BX 50 (BOX/50BLS)", isi:50, harga:82500},
    {nama:"PAMORELIN LYOPHILIZED POWDER FOR INJECTION 3.75 MG + KIT (BOX/1VL)", isi:1, harga:1415000},
    {nama:"PREGNOLIN 5MG @50", isi:50, harga:250000},
    {nama:"PROLUTEX 25 MG (BOX/7vL)", isi:7, harga:1307950},
    {nama:"PROTEROL SYRUP 25 MCG/5 ML 60ML", isi:1, harga:45450},
    {nama:"PROVULA 50MG @30", isi:30, harga:540000},
    // Image 3
    {nama:"RESPITIDE 25/125 (BOX/1)", isi:1, harga:145000},
    {nama:"RESPITIDE INHALATION AEROSOL 25/250MCG", isi:1, harga:215000},
    {nama:"RESPIVENT SOLUTION FOR INHALATION (BOX/10)", isi:10, harga:140000},
    {nama:"RHINOFED SYRUP 60ML", isi:1, harga:40400},
    {nama:"RHINOFED TAB 30 MG (BOX/50Tablet)", isi:50, harga:122500},
    {nama:"RHINOFED TABLET(BOX/50)", isi:50, harga:122500},
    {nama:"RHINOS JUNIOR SYRUP 60ML", isi:1, harga:56000},
    {nama:"RHINOS NEO DROP 10ML", isi:1, harga:62000},
    {nama:"RHINOS SR @50", isi:50, harga:340000},
    {nama:"RITEZ DROP 10ML(BOX/1BTL)", isi:1, harga:70000},
    {nama:"RITEZ SYRUP 60ML", isi:1, harga:60000},
    {nama:"SIRAN EFFERVESCENT 600MG (TUBE/10)", isi:10, harga:126000},
    {nama:"SISTENOL CAPLET @60", isi:60, harga:153000},
    {nama:"SKYCELLFLU QUADRIVALENT NH (BOX/1)", isi:1, harga:190000},
    {nama:"STARCEF 200MG(BOX/10'S)", isi:10, harga:360000},
    {nama:"STARCEF CAP 100MG @30", isi:30, harga:630000},
    {nama:"STARCEF DS 100MG/5ML X 30ML", isi:1, harga:95000},
    {nama:"STATOR 10 MG TAB(BOX/30)", isi:30, harga:486000},
    {nama:"STATOR 20 MG TAB(BOX/30)", isi:30, harga:516000},
    {nama:"STATOR 40MG (BOX/30)", isi:30, harga:546000},
    {nama:"SUPRASMA HFA INHALER(BOX/1CANISTER)", isi:1, harga:88000},
    {nama:"SUPRASMA SOLUTION FOR INHALATION (BOX/10Amp)", isi:10, harga:80000},
    {nama:"TENSIVASK 10 MG TABLET 5 X 10", isi:50, harga:530000},
    {nama:"TENSIVASK 5MG @50", isi:50, harga:295000},
    {nama:"TROLIP 100MG @30", isi:30, harga:145500},
    {nama:"TROLIP SUPRA (BOX/3STRIP)", isi:30, harga:420000},
    {nama:"TROLIP 300MG @30", isi:30, harga:420000},
    {nama:"URDEX CAP 250MG(BOX/30)", isi:30, harga:277500},
    {nama:"VACLO TABLET (BOX/30'S)", isi:30, harga:495000},
    {nama:"VECTRINE 300 MG", isi:20, harga:128000},
    {nama:"VECTRINE DRY SYRUP", isi:1, harga:65000},
    {nama:"VILDI TAB 50MG (BOX/30)", isi:30, harga:144000},
    {nama:"VOLEQUIN 500MG @10", isi:10, harga:350000},
    {nama:"VOMETA DROPS 5MG/ML X 10ML", isi:1, harga:60000},
    {nama:"VOMETA FT 10MG (BOX/50)", isi:50, harga:250000},
    {nama:"VOMETA SYR 1MG/ML X 60ML", isi:1, harga:60000}
];

let masterProduk = JSON.parse(localStorage.getItem("masterProduk")) || listAwal;
let listOrder = [];

function formatRupiah(x) { return Number(x).toLocaleString("id-ID"); }
function parseAngka(s) { return Number(s.toString().replace(/[^0-9]/g, "")); }

function pindahHalaman(id) {
    document.getElementById('pagePO').classList.add('hidden');
    document.getElementById('pageProduk').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

[inputHna, newHarga].forEach(inp => {
    inp.addEventListener('input', function() {
        let v = parseAngka(this.value);
        this.value = v > 0 ? formatRupiah(v) : "";
    });
});

inputProduk.addEventListener("input", function() {
    let key = this.value.toLowerCase();
    suggestionBox.innerHTML = "";
    if(!key) { suggestionBox.classList.add('hidden'); return; }
    let filtered = masterProduk.filter(p => p.nama.toLowerCase().includes(key));
    if(filtered.length > 0) {
        suggestionBox.classList.remove('hidden');
        filtered.forEach(p => {
            let div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerHTML = `<strong>${p.nama}</strong><br><small>HNA: Rp ${formatRupiah(p.harga)} (Isi: ${p.isi})</small>`;
            div.onclick = function() {
                inputProduk.value = p.nama;
                inputHna.value = formatRupiah(p.harga);
                suggestionBox.classList.add('hidden');
            };
            suggestionBox.appendChild(div);
        });
    } else { suggestionBox.classList.add('hidden'); }
});

function simpanProdukMaster() {
    let nama = newNama.value.toUpperCase();
    let harga = parseAngka(newHarga.value);
    let isi = Number(newIsi.value) || 1;
    if(!nama || harga <= 0) return alert("Data tidak lengkap!");
    masterProduk.push({nama, harga, isi});
    localStorage.setItem("masterProduk", JSON.stringify(masterProduk));
    newNama.value = ""; newHarga.value = ""; newIsi.value = 1;
    alert("Produk berhasil disimpan!");
    pindahHalaman('pagePO');
}

function tambahOrder() {
    let nama = inputProduk.value;
    let harga = parseAngka(inputHna.value);
    let qty = Number(inputQty.value);
    let diskon = Number(inputDiskon.value);
    let pakaiPPN = checkPpn.checked;
    if(!nama || harga <= 0) return alert("Pilih produk!");
    let sub = harga * qty;
    sub -= sub * (diskon/100);
    if(pakaiPPN) sub *= 1.11;
    listOrder.push({nama, harga, qty, diskon, sub, pakaiPPN});
    render();
    inputProduk.value = ""; inputHna.value = ""; inputQty.value = 1; inputDiskon.value = 0;
    checkPpn.checked = false;
}

function hapusItem(i) { listOrder.splice(i, 1); render(); }

function render() {
    let h = ""; let gt = 0;
    listOrder.forEach((d, i) => {
        gt += d.sub;
        h += `<div class="order-card">
            <div style="display:flex; justify-content:space-between;">
                <div class="order-title">${d.nama}</div>
                <button class="btnHapus" onclick="hapusItem(${i})">Hapus</button>
            </div>
            <div style="font-size:13px; color:#666;">
                HNA: Rp ${formatRupiah(d.harga)} | Qty: ${d.qty} | Disc: ${d.diskon}% ${d.pakaiPPN ? '+ PPN' : ''}
            </div>
            <div class="order-total">Subtotal: Rp ${formatRupiah(Math.round(d.sub))}</div>
        </div>`;
    });
    orderList.innerHTML = h || '<p style="text-align:center; color:#999;">Belum ada order.</p>';
    displayGrandTotal.innerText = formatRupiah(Math.round(gt));
}
