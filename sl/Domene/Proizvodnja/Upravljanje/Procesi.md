<!-- app_route: /management/processes -->
<!-- app_label: Procesi -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Proizvodnja/Upravljanje/Procesi.md -->
<!-- canonical_source_title: Procesi -->

# Procesi

Procesi doloÄajo strukturirane korake, ki se uporabljajo v **Proizvodnji** in **VzdrÅ¾evanju** za pretvorbo vhodov v izhode (konÄne izdelke, polizdelke ali servisirana stanja opreme). Predstavljajo temelj operativnih potekov dela in se uporabljajo v **dokumentih** za izraÄun materialov, virov, obremenitev in korakov izvedbe:
- **[Proizvodni nalogi](../Dokumenti/ProizvodniNalogi.md)** za proizvodne poteke dela
- **[VzdrÅ¾evalni nalogi](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md)** za vzdrÅ¾evalne poteke dela

Ta pogled omogoÄa ustvarjanje in upravljanje procesov, njihovih verzij ter operativne strukture.

Proces lahko vsebuje eno ali veÄ **verzij**, na primer razliÄne verzije za razliÄne velikosti izdelkov ali vzdrÅ¾evalne variante. Vsaka verzija vsebuje zaporedje **[operacij](Operacije.md)**, ki doloÄajo vhode, vire (ÄloveÅ¡ke in stvarne), izhode in zahteve kakovosti.

Za dostop do tega pogleda pojdite na **Proizvodnja / Upravljanje / Procesi** v [navigaciji](../../../Skupno/UI/Navigacija.md). Procesi so skupni in jih je mogoÄe oznaÄiti za uporabo v Proizvodnji ali VzdrÅ¾evanju.

> [!TIP]
> Za celovit prikaz si oglejte video vodiÄ **[Processes and versions](https://www.youtube.com/watch?v=4svpFCm7rkk)**.

## Shema

### Polja procesa

| Polje | Opis |
|------|------|
| [**Koda**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generirana koda procesa (samo za branje). |
| **Naziv** | Naziv procesa (obvezno). |
| **Opis** | Kratek opis namena procesa. |
| **Oznake** | Oznake za zdruÅ¾evanje ali kategorizacijo procesa (npr. **Proizvodnja**, **VzdrÅ¾evanje**). |

### Polja verzije

| Polje | Opis |
|------|------|
| [**Koda**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generirana koda verzije (samo za branje). |
| **Naziv** | Naziv verzije (obvezno). |
| **Opis** | Dodatne podrobnosti o verziji (neobvezno). |

## Seznam procesov

Seznam procesov prikazuje vse konfigurirane procese. Vsaka vrstica vkljuÄuje kodo procesa, naziv, opis in oznake. Za iskanje po nazivu ali kodi uporabite polje **Iskanje**.

![Seznam procesov](../Images/ProcessesList1.png "Seznam procesov")

Levi stranski panel omogoÄa filtriranje po:

- **Pogledu**: Aktiven / Neaktiven  
- **Oznakah procesa** (npr. Proizvodnja, VzdrÅ¾evanje)  
- **Tipu vhoda**  
- **Vhodu**  
- **Tipu izhoda**  
- **Izhodih**

## Ustvariti nov proces

1. Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Nov** ali **Kopiraj obstojeÄega**.
2. Izpolnite naslednja polja:
   - **Naziv** â€“ obvezno  
   - **Opis** â€“ neobvezno  
   - **Oznake** â€“ neobvezno, vendar **obvezne** za povezavo procesa z doloÄenim podroÄjem. Na primer:
     - Dodajte oznako **Proizvodnja**, da bo proces na voljo pri ustvarjanju novega [**proizvodnega naloga**](../Dokumenti/ProizvodniNalogi.md).
     - Dodajte oznako **VzdrÅ¾evanje**, da bo proces na voljo pri ustvarjanju novega [**vzdrÅ¾evalnega naloga**](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md).

   ![Nov proces](../Images/ProcessesNew1.png "Nov proces")

3. Kliknite **Dodaj**, da ustvarite nov proces.

> [!IMPORTANT]
> Oznake doloÄajo, kje je proces mogoÄe uporabiti. ÄŒe ne dodate ustrezne oznake (npr. **Proizvodnja** ali **VzdrÅ¾evanje**), proces ne bo na voljo pri ustvarjanju dokumentov na tem podroÄju (npr. [**proizvodnega naloga**](../Dokumenti/ProizvodniNalogi.md) ali [**vzdrÅ¾evalnega naloga**](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md)).

## Urediti proces

Za urejanje obstojeÄega procesa:

1. Izberite proces s seznama.
2. Po potrebi posodobite **Naziv**, **Opis** ali **Oznake**.
3. Kliknite **Shrani**, da uveljavite spremembe.

## Verzije

Vsak proces lahko vsebuje veÄ **verzij**, kar omogoÄa postopno izboljÅ¡evanje potekov dela ob hkratnem ohranjanju starejÅ¡ih verzij.

![Gumb Verzije](../Images/ProcessesVersionsButton.png "Gumb Verzije")

Na pogledu verzij lahko:

- Dodate novo verzijo  
- Urejate ali onemogoÄite verzijo  
- Zaklenete verzijo  
- Odprete verzijo za delo z njenimi operacijami in konfiguracijo  

![Seznam verzij](../Images/ProcessesVersionsListSL.png "Seznam verzij")

Verzija vkljuÄuje:

- Osnovne informacije o verziji  
- Seznam **operacij**  
- Kontrole za omogoÄanje/onemogoÄanje  
- MoÅ¾nost **zaklepa** verzije za prepreÄitev nadaljnjih sprememb  

### Predkalkulacija (izraÄun stroÅ¡ka verzije)

Na zaslonu **Verzije** lahko ocenite **stroÅ¡ek proizvodnje na kos** za izbrano verzijo procesa.

![Versions cost column](../Images/ProcessesVersionsCalculateButtonSL.png "Versions cost column")

Vsaka verzija vsebuje stolpec **StroÅ¡ek**, ki prikazuje:

- **IzraÄunaj** â€“ izraÄuna ocenjeni stroÅ¡ek proizvodnje za izbrano verzijo.
- **Vrednost stroÅ¡ka** â€“ zadnji izraÄunan stroÅ¡ek na kos.

Ko kliknete **IzraÄunaj**, sistem izraÄuna ocenjeni stroÅ¡ek proizvodnje enega izdelka za izbrano verzijo procesa. Pri izraÄunu se upoÅ¡tevajo:

- **Cene materialov** â€“ doloÄene v cenikih [**Material dobaviteljev**](../../Nabava/Upravljanje/MaterialiDobaviteljev.md)
- **ÄŒloveÅ¡ko delo** (delovni vloÅ¾ek) â€“ doloÄeno v Å¡ifrantu [**Postavke virov**](../../Viri/Upravljanje/PostavkeVirov.md)
- **NeÄloveÅ¡ki viri** (stroji, delovne postaje) â€“ prav tako doloÄeni v [**Postavke virov**](../../Viri/Upravljanje/PostavkeVirov.md)
- **Dodatni stroÅ¡ki**, povezani z verzijo â€“ doloÄeni v Å¡ifrantu [**StroÅ¡ki**](../../Nabava/Upravljanje/Stroski.md)

ÄŒe se verzija spremeni (na primer operacije, materiali ali viri), je treba stroÅ¡ek ponovno izraÄunati.

S klikom na **vrednost stroÅ¡ka** se odpre stran **[Analiza stroÅ¡ka verzije](../Analiza/AnalizaStroskaVerzije.md)**, kjer je prikazana celotna struktura stroÅ¡kov.

### Operacije znotraj verzije

Verzija vsebuje zaporedje **[operacij](Operacije.md)**, pri Äemer vsaka predstavlja posamezen korak procesa. Operacije lahko vkljuÄujejo na primer rezanje, barvanje, sestavljanje, pakiranje (proizvodnja) ali pregled, mazanje, kalibracijo (vzdrÅ¾evanje).

Za dostop do seznama operacij verzije kliknite gumb **[Operacije](Operacije.md)**:

![Gumb Operacije](../Images/ProcessesVersionsOperationsButton1.png "Gumb Operacije")

Vsaka operacija vkljuÄuje:

- **[Vhodi](Vhodi.md)** â€“ materiali ali elementi, ki se porabijo v operaciji  
- **[ÄŒloveÅ¡ki viri](CloveskiViri.md)** â€“ delavci ali delovna mesta  
- **[Stvarni viri](StvarniViri.md)** â€“ stroji ali oprema  
- **[Izhodi](Izhodi.md)** â€“ materiali ali elementi, ki nastanejo v operaciji  
- **[Kvaliteta](KvalitetaKontrolneListe.md)** â€“ dodeljene kontrolne liste in zahteve kakovosti  

![Podrobnosti operacij](../Images/ProcessesOperationsListDetail.png)

## Kvaliteta v verziji procesa

Gumb **[Kvaliteta](KvalitetaKontrolneListe.md)** odpre konfiguracijsko stran za izbrano verzijo procesa ali operacijo. Ta stran omogoÄa dodelitev ene ali veÄ **[kontrolnih list](KontrolneListe.md)**, ki doloÄajo korake kontrole kakovosti med izvedbo.

![Gumb Kvaliteta verzije procesa](../Images/ProcessesVersionsQualityButton.png "Gumb Kvaliteta verzije procesa")

## Izbrisati proces

Proces je mogoÄe izbrisati samo, Äe **ni uporabljen v dokumentih** (npr. proizvodnih ali vzdrÅ¾evalnih nalogih) in **nanj niso vezani drugi procesi**.

Za brisanje procesa ga izberite na seznamu in kliknite **IzbriÅ¡i**.

Po potrditvi bo proces trajno odstranjen s seznama procesov. ÄŒe je proces v uporabi, se prikaÅ¾e sporoÄilo o napaki.