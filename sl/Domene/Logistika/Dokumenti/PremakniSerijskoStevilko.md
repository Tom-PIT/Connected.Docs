<!-- app_route: /warehouse/documents/inter-move --> 
<!-- app_label: Premakni serijsko številko --> 
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Dokumenti/PremakniSerijskoStevilko.md --> 
<!-- canonical_source_title: Premakni serijsko številko -->

# Premakni serijsko številko

Funkcija **Premakni serijsko številko** omogoča hiter premik posamezne zalogovne enote (določene s serijsko številko) iz ene skladiščne lokacije na drugo. Namenjena je hitrim in pogostim premikom v skladišču — na primer pri reorganizaciji regalov, pripravi blaga za komisioniranje ali popravljanju napačno shranjenih postavk.

Za razliko od celotnega dokumenta  
[**Med-skladiščni promet**](MedSkladiscniPromet.md) se **Premakni serijsko številko** osredotoča izključno na premik **ene serijsko vodene enote** znotraj skladiščne strukture.

Za boljši pregled trenutnega stanja in zgodovine premikov lahko odprete:
- [**Pogled zaloge po materialu**](../Pregledi/Zaloga.md#pogled-zaloge-po-materialu)
- [**Pogled zaloge po serijski številki**](../Pregledi/Zaloga.md#pogled-zaloge-po-serijski-stevilki)

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Premakni serijsko številko](https://www.youtube.com/watch?v=dy1u6sKmdMg)**.

Za dostop do **Premika serijske številke** pojdite na **Logistika / Dokumenti / Premakni serijsko številko** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Premakniti serijske številke

### Korak 1 — Skeniraj ali vnesi serijsko številko

Vnesite ali skenirajte **serijsko številko**, **EAN** ali vpišite **ime materiala**.

- Če obstaja **samo ena ujemajoča se postavka** → sistem samodejno nadaljuje.
- Če obstaja **več ujemanj** → prikaže se zaslon za izbiro.

**Primer (več ujemanj):**

![Korak 1 – več ujemanj](../Images/MoveSerialStep1.png)

Kliknite **Naslednji** za nadaljevanje.

### Korak 2 — Izberi končno lokacijo

Vnesite ciljno lokacijo z vnosom njenega **imena**, **šifre** ali dela besedila.

Če obstaja več ujemajočih se lokacij, morate izbrati pravilno:

![Korak 2 – izbira lokacije](../Images/MoveSerialStep2.png)

Kliknite **Naslednji** za nadaljevanje.

### Korak 3 — Potrdi premik

Na zadnjem zaslonu so prikazani naslednji podatki:

- **Material**, ki se premika  
- **Izvorna lokacija**  
- **Končna lokacija**  
- **Količina** — skupno število kosov na izvorni lokaciji  
- **Razpoložljiv** — količina, ki je trenutno na voljo za premik (urejanje dovoljeno)  
- **Datum do**

![Korak 3 – potrditev premika](../Images/MoveSerialStep3.png)

Po potrebi prilagodite vrednost **Razpoložljiv** in kliknite **Konec**.

Po zaključku:

- premik se takoj zabeleži,  
- vrnete se na **Korak 1**, kjer lahko nadaljujete s skeniranjem novih postavk,  
- zaključen premik je viden v **Med-skladiščni promet → Potrjeni**.

![Zabeležen premik](../Images/MoveSerialInterWarehouseRecord.png)
