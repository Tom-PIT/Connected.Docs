<!-- app_route: /warehouse/documents/containers --> 
<!-- app_label: Vsebniki --> 
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Logistika/Dokumenti/Vsebniki/ --> 
<!-- canonical_source_title: Vsebniki -->

# Vsebniki

**Vsebnik** združuje eno ali več postavk pod eno serijsko šifro (pogosto **SSCC – Serial Shipping Container Code**). To omogoča pakiranje, premikanje in skeniranje celotnega sklopa hkrati, brez potrebe po odpiranju vsebnika. Postavke, ki so dodane v vsebnik, so **rezervirane za ta vsebnik** in jih ni mogoče uporabiti v drugih transakcijah, dokler vsebnik ni razpuščen ali dokler posamezne postavke niso odstranjene.

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Vsebniki](https://www.youtube.com/watch?v=2V9K1jTsyQI)**.

Za dostop do **Vsebnikov** pojdite na **Logistika / Dokumenti / Vsebniki** v [navigaciji](../../../Skupno/UI/Navigacija.md).

## Shema

<details open markdown="1">
<summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran enolični identifikator vsebnika SSCC (v obliki: CTR-LLLL-NNNNNNNN). |
| [**Skladišče**](../Upravljanje/Skladisca.md) | Skladišče, v katerem se vsebnik nahaja. |
| **Datum dokumenta** | Datum, ko je bil dokument vsebnika ustvarjen. |
| [**Lokacija**](../Upravljanje/Lokacije.md) | Skladiščna lokacija (npr. regal / polica). |

</details>

<details markdown="1">
<summary><strong>Postavke</strong></summary>

| Polje | Opis |
|------|------|
| [**Material**](../../Sredstva/Materiali/README.md) | Zapakirana postavka (izdelek, polizdelek, surovina ali repro material). |
| **Serijska številka** | Serijska ali lot številka zapakirane postavke. |
| **Datum do** | Datum poteka, če se sledi roku uporabe. |
| **Skladiščna lokacija** | Lokacija postavke po vrstici (če je relevantno). |
| **Količina** | Količina zapakirane postavke. |

</details>

## Seznam dokumentov vsebnikov

![Seznam vsebnikov](../Images/ContainersListSL.png "Seznam vsebnikov")

Stran **Vsebniki** prikazuje vse dokumente vsebnikov. Na voljo so filtri:
- **Datumi dokumentov**
- **Pogled** (Odprti, Zapakirano)
- **Skladišče**
- **Avtor**

## Dejanja

### Ustvariti vsebnik

Vsebniki se ustvarjajo ročno na tej strani.

1. Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega dokumenta vsebnika.
2. Določite **Skladišče** in **Lokacijo**.

   ![Ustvari vsebnik](../Images/ContainersNewCreateSL.png "Ustvari vsebnik")

3. Ustvari se **osnutek** vsebnika. Po potrebi uredite **Datum dokumenta**.

   ![Nov vsebnik](../Images/ContainersNewSL.png "Nov vsebnik")

4. V polje **Postavke** vnesite ali skenirajte **serijsko številko**, **EAN** ali **ime materiala**. Sistem prikaže vse ujemajoče se materiale in serijske številke. Če je več ujemanj, izberite pravilno postavko.

   ![Podrobnosti vsebnika](../Images/ContainersNewDetailsSL.png "Podrobnosti vsebnika")

   Za informacije o delu s postavkami dokumenta glejte [**Postavke dokumenta**](../../../Skupno/Koncepti/PostavkeDokumenta.md).

5. **Izberite pravilno količino** in kliknite **Shrani**, da shranite postavko. Po potrebi postopek ponovite.

   ![Shranjene postavke vsebnika](../Images/ContainersNewDetailsSavedSL.png "Shranjene postavke vsebnika")

6. Ko ste pripravljeni, kliknite **Zapakiraj**, da rezervirate vsebino in omogočite nadaljnje logistične operacije.

Zapakiran vsebnik je pripravljen za uporabo, stanje pa se spremeni v **Zapakirano**. V meniju lahko natisnete ali izvozite nalepke z **SSCC šifro vsebnika**.

> [!NOTE]
> Postavke v **zapakiranem** vsebniku so rezervirane in jih ni mogoče prosto posamezno obdelovati (izdaja / prevzem / premik). Sistem pa omogoča uporabo [**delne količine**](#delna-uporaba-količine) neposredno iz vsebnika brez razpakiranja.

### Uporaba vsebnikov

- **Komisioniranje / izdaja:** skenirajte šifro vsebnika v **[Izdajnicah](Izdajnice.md)**, da:
  - dodate celotno vsebino naenkrat
  - izberete in uporabite **delno količino**
- **Prevzem / uskladiščenje:** skenirajte v **[Prevzemih](Prevzemi.md)** za vnos celotnega sklopa v zalogo
- **Premiki:** uporabite **[Med-skladiščni promet](MedSkladiscniPromet.md)** ali **[Premakni serijsko številko](PremakniSerijskoStevilko.md)** in skenirajte vsebnik za skupni premik
- **Pregled zaloge:** uporabite **[Zaloga](../Pregledi/Zaloga.md)** ali **[Pogled zaloge po lokacijah](../Pregledi/PogledZalogePoLokacijah.md)** za preverjanje prisotnosti in lokacije vsebnika

## Pregled vsebnika

- Glava prikazuje šifro vsebnika, skladišče, datum in lokacijo
- Postavke prikazujejo zapakirane materiale, serijske številke, lokacije in količine
- **Povezave dokumentov** (če obstajajo) prikazujejo povezane logistične transakcije

![Dokument vsebnika](../Images/ContainersDocumentSL.png "Dokument vsebnika")

> [!TIP]
> - Kliknite **Lokacijo**, da odprete **[Pogled zaloge po lokacijah](../Pregledi/PogledZalogePoLokacijah.md)**, filtriran na izbrano lokacijo.  
> - Kliknite serijsko številko materiala, da odprete **[Pogled zaloge po serijski številki](../Pregledi/Zaloga.md#pogled-zaloge-po-serijski-stevilki)**.

## Delna uporaba količine

Iz **zapakiranega vsebnika** je mogoče uporabiti **delno količino** brez razpakiranja.

- Vsebnik ostane zapakiran  
- Preostala količina ostane v vsebniku  
- Odšteje se samo uporabljena količina  

Sistem beleži vsebnik, količino, dokument, datum in uporabnika.

Podprto v **[Izdajnicah](Izdajnice.md)**, **[Premikih](MedSkladiscniPromet.md)** in [**porabi v proizvodnji**](Porabe.md).

## Izbrisati vsebnike

- Osnutke vsebnikov je mogoče prosto izbrisati v urejanju. Po potrditvi se dokument odstrani iz sistema, ne da bi to vplivalo na zalogo.
- Zapakiranih vsebnikov **ni mogoče izbrisati**; za sprostitev vsebine uporabite **Razpusti**

## Meni

Meni omogoča dodatna dejanja, ki so na voljo na tej strani.

Na voljo so naslednja dejanja:

- **Tiskanje** — natisne nalepko vsebnika (SSCC)
- **Izvoz** — izvozi nalepko vsebnika (SSCC) v PDF

Za podrobnosti o dejanjih menija glejte [**Dejanja menija**](../../../Skupno/Koncepti/MeniDejanja.md).
