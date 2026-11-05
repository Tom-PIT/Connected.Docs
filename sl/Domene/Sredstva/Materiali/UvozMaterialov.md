<!-- app_route: /management/materials/import -->
<!-- app_label: Uvoz materialov -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Sredstva/Materiali/UvozMaterialov/ -->
<!-- canonical_source_title: Uvoz materialov -->

# Uvoz materialov

Ta dokument opisuje, kako v sistem hkrati uvoziti več materialov z uporabo preglednice.  
Uvoz omogoča hitro množično ustvarjanje ali posodabljanje zapisov materialov.

Uvoz podpira naslednje vrste materialov:

- **[Izdelki](Izdelki.md)**  
- **[Polizdelki](Polizdelki.md)**  
- **[Repro materiali](ReproMateriali.md)**  
- **[Surovine](Surovine.md)**  

Zaslon omogoča tudi prenos **primerne datoteke**, ki prikazuje zahtevano strukturo preglednice.  
Pred dejanskim uvozom lahko izvedete **Testni uvoz**, ki preveri podatke in poroča o napakah, ne da bi uveljavil spremembe.

> [!NOTE]  
> **Predpogoji**  
> Pred uvozom materialov preverite naslednje šifrante:  
> - **[Merske enote](../../../Skupno/Upravljanje/MerskeEnote.md)**  
> - **[Davčne stopnje](../../../Skupno/Upravljanje/DavcneStopnje.md)**  
> Če manjkajoča merska enota ali davčna stopnja še ne obstaja, bo ustvarjena samodejno med uvozom.  
> Predhodni pregled teh šifrantov pomaga zagotoviti pravilna poimenovanja in preslikave.

Za dostop do šifranta **Uvoz materialov** pojdite na  
**Sredstva / Materiali / Uvoz materialov** v [navigaciji](../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Ustvarjen** | Datum in čas nalaganja preglednice. |
| **Status** | Rezultat preverjanja ali uvoza, ki prikazuje število veljavnih vrstic in vrstic z napakami. |
| **Tip datoteke** | Oblika naložene datoteke: CSV ali XLSX. |
| **Dodane spremembe** | Označuje, ali so bile spremembe dejansko uvožene (označeno) ali je šlo le za testni uvoz (ni označeno). |

## Vrsta datoteke

Sistem sprejema uvoze v obliki **CSV** ali **XLSX**.  
Spustni meni se uporablja za izbiro oblike **primerne datoteke**, ki jo lahko prenesete.

Kliknite **Prenesi**, da pridobite primer uvozne datoteke v izbrani obliki. Primerna datoteka vsebuje vse zahtevane stolpce v pravilnem vrstnem redu.

![Uvoz materialov — začetni zaslon](../Images/ImportMaterialsSL.png "Uvoz materialov — začetni zaslon")

## Struktura preglednice

Uvozna datoteka mora v prvi vrstici imeti glavo s spodaj navedenimi nazivi stolpcev v tem vrstnem redu. Vsaka naslednja vrstica predstavlja en material, ki bo uvožen.

> [!IMPORTANT]
> - Ne spreminjajte vrstnega reda stolpcev in nazivov stolpcev v glavi. Kot referenco uporabite primerno datoteko.
> - Materiali morajo imeti enolične vrednosti v stolpcu **Code**, da se izognete konfliktom.
> - Prazna neobvezna polja bodo uvožena kot prazne vrednosti.
> - URL-ji (**ImageUrl**, **InfoUrl**) morajo biti veljavni ali prazni.
> - V primerni datoteki so vrednosti ločene s podpičjem (`;`), decimalna števila pa so zapisana z vejico (na primer `0,56`).

| Stolpec | Opis |
|--------|------|
| **Type** | Tip materiala, na primer **Proizvod**, **Poluproizvodi** ali **Materijal**. Vrednosti vnesite tako, kot so zapisane v primerni datoteki. |
| **Code** | Enolični identifikator materiala. Če material z isto šifro že obstaja, se zapis posodobi. |
| **Name** | Polno ime materiala. |
| **MeasureUnitAbbreviation** | Okrajšava merske enote za količine. Mora ustrezati obstoječi [merski enoti](../../../Skupno/Upravljanje/MerskeEnote.md). |
| **Tags** | Neobvezne oznake za razvrščanje. Več oznak ločite z vejicami. |
| **Description** | Neobvezno besedilo z opisom materiala. |
| **Ean** | Vrednost črtne kode materiala. |
| **DefaultExpirationInDays** | Število dni do poteka materiala. |
| **ImageUrl** | URL do slike materiala. |
| **InfoUrl** | URL do zunanje informacijske strani o materialu. |
| **Precision** | Število decimalnih mest za prikaz vrednosti. |
| **TaxRateName** | Ime davčne stopnje. Mora ustrezati obstoječi [davčni stopnji](../../../Skupno/Upravljanje/DavcneStopnje.md). |
| **TaxRateValue** | Odstotek davka, ki se uporabi za material. |
| **ExternalKey** | Identifikator v zunanjem sistemu. |
| **Tolerance** | Dovoljeno odstopanje količine materiala v odstotkih. Privzeta vrednost za nove materiale je 1. |

## Primer vrstice

Glava in prva vrstica primerne datoteke:

```
Type;Code;Name;MeasureUnitAbbreviation;Tags;Description;Ean;DefaultExpirationInDays;ImageUrl;InfoUrl;Precision;TaxRateName;TaxRateValue;ExternalKey;Tolerance
Proizvod;C0000001;Acme izdelek 1;Kg;ACME;Acme izdelek 1;C000EAN1;0;https://google.com;https://google.com;0;DDV;22;EXT01;0,56
```

## Urediti datoteke

Preglednico lahko pripravite ali uredite v pregledničnem urejevalniku:

![Urejanje v Excelu](../Images/ImportMaterialsExcel.png "Urejanje v Excelu")

## Uvoziti datoteke

1. Za začetek uvoza povlecite **CSV** ali **XLSX** datoteko v območje za nalaganje ali kliknite območje, da odprete pogovorno okno za izbiro datoteke.

2. Ko je datoteka naložena, se prikaže **Predogled podatkov**, ki prikazuje vse razčlenjene zapise. Na voljo so naslednja dejanja:

   - **Testni uvoz** — izvede preverjanje brez shranjevanja podatkov  
   - **Uvoz** — uvozi in shrani podatke ter uveljavi vse veljavne spremembe  

   ![Uvoz materialov — predogled podatkov](../Images/ImportMaterialsPreviewSL.png "Uvoz materialov — predogled podatkov")

   Priporočljivo je, da najprej izvedete **Testni uvoz**, da preverite strukturo podatkov in preprečite napake.  
   Pod območjem za nalaganje je prikazan seznam vseh predhodno naloženih datotek.

   Vrstice z napakami so v stolpcu **Status** označene **rdeče**, veljavne vrstice pa **zeleno**.

   ![Uvoz materialov — pregled napak](../Images/ImportMaterialsErrorSL.png "Uvoz materialov — pregled napak")

3. Za dokončanje dejanskega uvoza po uspešnem **Testnem uvozu** ponovno naložite preglednico in izberite možnost **Uvoz**.

Med uvozom:

- ustvarijo se novi materiali  
- obstoječi materiali (ujemanje po **Kodi**) se posodobijo  
- odvisnosti (oznake, merske enote, davčne stopnje) se samodejno povežejo  
- vrsta materiala se določi glede na stolpec **Tip**  

Po končanem uvozu se stanje v seznamu posodobi in prikaže, katere vrstice so bile uspešno obdelane.

## Seznam rezultatov

Kliknite katerikoli uvoz v stolpcu **Ustvarjen** na seznamu uvozov, da pregledate rezultate in morebitne napake.

![Poročilo uvoza materialov](../Images/ImportMaterialsReportSL.png "Poročilo uvoza materialov")

