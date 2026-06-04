<!-- app_route: /warehouse/views/issue-details -->
<!-- app_label: Postavke izdaj -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Pregledi/PostavkeIzdaj.md -->
<!-- canonical_source_title: Postavke izdaj -->

# Postavke izdaj

Pogled **Postavke izdaj** nudi analitiÄni pregled vseh **materialov in konÄnih izdelkov, izdanih iz zaloge** v izbranem Äasovnem obdobju. Namesto osredotoÄanja na posamezne dokumente izdaj ta pogled zdruÅ¾uje **izdane postavke** ter jasno prikazuje, **kateri [dokumenti izdaj](../Dokumenti/Izdajnice.md)** so bili uporabljeni in **iz katerih skladiÅ¡Änih lokacij** so bile postavke izdane.

Za dostop do tega pogleda pojdite na **Logistika / Pregledi / Postavke izdaj** v [navigaciji](../../../Skupno/UI/Navigacija.md).

![IssueDetailsList](../Images/IssueDetailsListV2.png)

## Seznam postavk izdaj

Seznam prikazuje **vse izdane materiale in izdelke**, zdruÅ¾ene po postavki. Vsaka vrstica prikazuje **skupno izdano koliÄino** za posamezno postavko v izbranem Äasovnem obdobju.

Vrstico postavke lahko razÅ¡irite in si ogledate **posamezne dokumente izdaj**, ki sestavljajo skupno koliÄino.

### Hierarhija

Seznam je strukturiran na naslednji naÄin:

- **Postavka** â€“ material ali konÄni izdelek in skupna izdana koliÄina  
  - **Dokument izdaje** â€“ posamezen zapis izdaje  
    - **Izvor** â€“ skladiÅ¡Äe in lokacija, iz katere je bila postavka izdana  
    - **KoliÄina** â€“ koliÄina, izdana v tem dokumentu  

Ko je dokument izdaje razÅ¡irjen, so prikazani naslednji podatki:

- **Å tevilka dokumenta** â€“ klikljiva, odpre [dokument izdaje](../Dokumenti/Izdajnice.md)  
- **Datum in Äas dokumenta**  
- **Izvor** â€“ skladiÅ¡Äe in lokacija (klikljivo)  
- **Izdana koliÄina**

## Navigacija po Izvoru

Stolpec **Izvor** prikazuje:

- **SkladiÅ¡Äe**
- **ToÄno skladiÅ¡Äno lokacijo**

Klik na Izvor odpre zaslon **[Pogled zaloge po lokacijah](PogledZalogePoLokacijah.md)**, filtriran na lokacijo, iz katere je bila postavka izdana. To omogoÄa pregled razpoloÅ¾ljive zaloge in drugih materialov, shranjenih na tej lokaciji.

## Filtri

Leva stranska vrstica vsebuje naslednji filter:

- **Datumi dokumentov** â€“ omeji prikaz na dokumente izdaj znotraj izbranega Äasovnega obdobja
- **Stranka** â€“ omeji prikaz na dokumente izdaj za izbrano stranko

## Iskanje

Uporabite **iskalno polje** v zgornjem desnem kotu za hitro filtriranje rezultatov. Iskanje deluje po:

- kodah postavk  
- imenih postavk  
- Å¡tevilkah dokumentov  
- kodah skladiÅ¡Ä in lokacij  

To omogoÄa hitro iskanje izdaj, povezanih z doloÄenim materialom, izdelkom, dokumentom ali skladiÅ¡Äno lokacijo.

![IssueDetailsListSearch](../Images/IssueDetailsListSearch.png)

## Namen

Pogled **Postavke izdaj** je uporaben za:

- analizo materialov in izdelkov, izdanih kupcem ali internim procesom  
- sledenje, katere postavke so bile izdane in od kod  
- revizijo izdanih koliÄin po postavkah  
- preiskovanje izhodnih premikov zaloge  

Ta pogled je **zgolj analitiÄen**. Ne omogoÄa ustvarjanja, urejanja ali brisanja dokumentov.

> [!NOTE]
> - KoliÄine so prikazane v osnovni merski enoti postavke (npr. kos, meter).  
> - Ta pogled se osredotoÄa na **izdaje zaloge** (npr. prodajne dobave, interne izdaje).  
> - Poraba materialov, povezana s proizvodnjo, je prikazana v **[Postavkah porabe](PostavkePorabe.md)**, ne tukaj.
