# Izdani računi

**Izdani računi** so finančni dokumenti, poslani strankam za plačilo potrjenih prodaj. Povzemajo dobavljeno blago ali storitve, davke, roke plačila in izbrane načine plačila. Na strani **Izdani računi** lahko evidentirate tudi delna ali celotna plačila neposredno na posameznem računu.

Za dostop do te strani pojdite na **Prodaja / Dokumenti / Izdani računi** v [**navigaciji**](../../Skupno/UI/Navigacija.md).

## Vloga izdanih računov v prodajnem procesu

Izdani računi se običajno ustvarijo na koncu prodajnega procesa:

1. Stranka sprejme **[Ponudbo](Ponudbe.md)**.  
2. Ustvari in izvede se **[Naročilo stranke](NarocilaStrank.md)**.  
3. Blago se odpremi z uporabo **[Dobavnic](Dobavnice.md)** in povezanih izdaj.  
4. Na koncu se ustvari **Izdani račun** (pogosto iz dobavnice ali naročila stranke) in se pošlje stranki v plačilo.

Račune je mogoče ustvariti tudi ročno kot samostojne dokumente, kadar je to potrebno.

## Shema

| Polje | Opis |
|------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Enolični identifikator računa (sistemsko generiran). |
| **Številka naročila kupca** | Neobvezna referenca na naročilo stranke. |
| **Stranka** | Prejemnik računa, izbran iz šifranta [**Poslovni imenik**](../../Skupno/Upravljanje/PoslovniImenik.md) (obvezno). |
| **Datum dokumenta** | Datum izdaje računa. |
| **Datum opravljene storitve** | Datum, ko je bilo blago ali storitev dobavljena. |
| **Datum zapadlosti** | Rok plačila, prikazan stranki (obvezno). |
| **Tip reference** | Vrsta plačilnega sklica (npr. strukturiran sklic, model) (obvezno). |
| **Sklic** | Sklicna številka za plačilne dokumente, glede na izbrano vrsto sklica. |
| [**Bančni računi organizacije**](../Upravljanje/BancniRacuniOrganizacije.md) | Račun za prejem plačila, izbran iz šifranta bančnih računov organizacije (obvezno). |
| [**Stroškovno mesto**](../../Skupno/Upravljanje/StroskovnaMesta.md) | Neobvezna razporeditev prihodka na stroškovno mesto. |
| **Koda namena** | Neobvezna koda namena računa (če je konfigurirana). |
| **Rabat** | Skupni rabat, uporabljen na celoten znesek računa. |
| **[Pogoj dobave](../../Skupno/Upravljanje/PogojiDobave.md)** | Dogovorjeni pogoji dobave s stranko. |
| **[Vrsta transporta](../../Skupno/Upravljanje/VrstaTransporta.md)** | Dogovorjeni način transporta s stranko. |
| **Vsebina zgoraj** | Uvodno besedilo iz [**Vnaprej določenih besedil**](../../Skupno/Upravljanje/VnaprejDolocenaBesedila.md). |
| **Dostava** | Podatki o podjetju in naslovu dobave. |
| **Vsebina spodaj** | Zaključna ali pravna besedila iz [**Vnaprej določenih besedil**](../../Skupno/Upravljanje/VnaprejDolocenaBesedila.md). |
| **Način plačila** | Izbrani način plačila iz šifranta [**Način plačila**](../Upravljanje/NacinPlacila.md). |

### Polja postavk

| Polje | Opis |
|------|------|
| [**Sredstvo**](../../Sredstva/Materiali/Izdelki.md) | Zaračunan izdelek ali storitev iz področja Sredstva. |
| **Količina** | Količina zaračunanega sredstva. |
| **Cena brez DDV** | Neto cena na enoto, običajno povzeta iz cenikov ali povezanega dokumenta. |
| **Popust (%)** | Neobvezen popust na ravni postavke. |
| **Vrednost** | Izračunane vrednosti postavke (neto, davek in bruto). |

## Upravljanje

### Statusi dokumenta

Izdani računi uporabljajo plačilno osnovane statuse:

- **Osnutki** – Račun še ni objavljen; vsa polja so prosto uredljiva.

- **Obdelan** – Račun je objavljen in postane uradni finančni dokument. Po potrditvi je mogoče spreminjati le omejena polja, dokumenta pa ni mogoče izbrisati.

  - **Neplačani** – Račun je izdan, vendar plačila še niso evidentirana.  
  - **Delno plačani** – Evidentirano je eno ali več plačil, vendar ostaja odprt znesek.  
  - **Plačani** – Račun je v celoti poravnan.  
  - **Stornirano** – Ustvarjen je bil storno dokument za popravek ali preklic računa.

Ti statusi določajo razpoložljiva dejanja (evidentiranje plačil, storniranje, izvoz ipd.) in način prikaza v seznamih.

### Seznam

Seznam prikazuje vse račune, ki ustrezajo izbranim filtrom in časovnim obdobjem.

![Seznam izdanih računov](../Images/IssuedInvoicesListPartiallyPaid.png "Seznam izdanih računov")

**Kazalniki**

Na vrhu seznama so prikazani ključni kazalniki:

- **Zapadli neplačani** (interaktivno) – Število in vrednost zapadlih neplačanih računov; klik prikaže samo te račune.  
- **Skupni znesek** – Skupni bruto znesek računov v trenutnem pogledu.

Kazalniki se posodabljajo glede na izbrane filtre:
- **Datumi dokumentov**
- **Datum opravljene storitve**
- **Datum zapadlosti**
- **Pogled**  
  - **Osnutki**  
  - **Obdelan**  
  - **Neplačani**  
  - **Delno plačani**  
  - **Plačani**  
  - **Vsi**
- **Stanje storniranja**
- **Stranka**
- **Način plačila**

Za hitro iskanje uporabite polje **Iskanje**.

## Dejanja

### Ustvarjanje novega izdanega računa

Izdane račune je mogoče ustvariti na dva načina:

- Neposredno na zaslonu **Izdani računi** z uporabo [**akcijskega gumba**](../../Skupno/UI/AkcijskiGumb.md).  
- Iz drugih prodajnih dokumentov prek **Povezani dokumenti → + Izdani račun**, na primer iz:
  - potrjenega [**Naročila stranke**](NarocilaStrank.md)  
  - [**Dobavnice**](Dobavnice.md)

  V teh primerih se večina polj samodejno izpolni.

  ![Povezani dokumenti naročila stranke](../Images/SalesOrderCommittedLinkedDocuments.png "Povezani dokumenti potrjenega naročila stranke")

Po začetku novega računa sledite korakom:

1. Uporabite **akcijski gumb** ali razdelek **Povezani dokumenti**, da ustvarite osnutek.  
2. Izpolnite ključna polja:
   - **Stranka**  
   - **Datum dokumenta**  
   - **Datum opravljene storitve**  
   - **Datum zapadlosti**  
   - **Tip reference / Sklic**  
   - **Bančni račun organizacije**  
   - **Način plačila**

   ![Nov račun – zgornji del](../Images/IssuedInvoicesNewTop.png "Nov račun – zgornji del")

3. Dodajte postavke v razdelku **Postavke**.  
4. Prilagodite količine, cene, popuste ali davčne stopnje in kliknite **Shrani**.

   ![Urejanje postavke računa](../Images/IssuedInvoicesNewDetailsEdit.png)

5. Dodajte poljubno število postavk.

   ![Shranjena postavka računa](../Images/IssuedInvoicesNewBottom.png "Shranjena postavka računa")

6. (Neobvezno) Dodajte:
   - **Vsebina zgoraj / Vsebina spodaj**  
   - **Alternativna valuta** (glej spodaj)
   - **Podatke o dostavi**  
   - **Priloge**  

7. Kliknite **Objavi**, da potrdite račun.

> [!NOTE]
> Po objavi izdanega računa ni več mogoče urejati ali izbrisati. Za popravke uporabite dejanje **Storniraj dokument**.

### Urejanje izdanega računa

Kliknite kateri koli izdan račun na seznamu, da ga odprete. Osnutke je mogoče prosto urejati. Dokument je razdeljen na več razširljivih razdelkov.

Dokler je račun v statusu **Osnutek**, lahko urejate vse razdelke:

- Glavna polja (datumi, sklici, stranka, bančni račun itd.)
- Alternativna valuta
- Transport
- Podatki o dostavi
- **Postavke** – dodajanje, odstranjevanje ali spreminjanje postavk
- **Načini plačila** – določanje načina plačila
- **Vsebina zgoraj** in **Vsebina spodaj** – izbor vnaprej določenih besedil

![Postavke in plačila](../Images/IssuedInvoicesNewBottom.png "Postavke in plačila")

#### Priloge

Na vrhu vsakega dokumenta je razdelek **Priloge**.

Naložite lahko datoteke, kot so dobavnice, transportni dokumenti, fotografije ali druga dokazila. Vse priloge se shranijo skupaj z dokumentom.

#### Povezani dokumenti

Razdelek **Povezani dokumenti** omogoča ustvarjanje in pregled povezanih dokumentov.

![Povezani dokumenti delno plačanega računa](../Images/IssuedInvoicePartiallyPaidLinkedDocuments.png "Povezani dokumenti delno plačanega računa")

> [!NOTE]
> Razpoložljiva dejanja v razdelku **Povezani dokumenti** so odvisna od tipa in statusa dokumenta.

Primer za osnutek:

![Povezani dokumenti osnutka računa](../Images/IssuedInvoiceDraftLinkedDocuments.png "Povezani dokumenti osnutka računa")

Razpoložljiva dejanja lahko vključujejo:

- **Izdani račun** – kopira trenutni dokument v nov izdani račun
- [**+ Dobropis**](Dobropisi.md) – ustvari dobropis
- [**+ Bremepis**](Bremepisi.md) – ustvari bremepis
- [**Dobavnica**](Dobavnice.md) – povezava z obstoječo dobavnico
- [**Predplačila**](Predplacila.md) – povezava z obstoječimi predplačili

#### Alternativna valuta

Razdelek Alternativna valuta omogoča izražanje cen v dokumentu v valuti, ki je različna od privzete sistemske valute. To se običajno uporablja pri mednarodni prodaji. Tečaji se povzemajo iz šifranta [Devizni tečaji](../Upravljanje/MenjalniTecaji.md).

![Alternativna valuta](../Images/SalesAlternativeCurrency.png "Alternativna valuta")

Ko je izbrana alternativna valuta, se cene v dokumentu samodejno preračunajo z uporabo navedenega deviznega tečaja.

#### Transport

Razdelek Transport določa, kako se blago dostavi stranki in pod kakšnimi dobavnimi pogoji.

![Transport](../Images/SalesTransportSection.png "Transport")

Tukaj vneseni podatki se uporabljajo pri usklajevanju logistike, komunikaciji s stranko in na izpisih dokumentov.

## Evidentiranje plačil

Po objavi računa kliknite **Plačilo**, da evidentirate prejeto plačilo.

![Evidentiranje plačila](../Images/IssuedInvoicesPayment.png "Evidentiranje plačila")

Sistem samodejno posodobi status računa glede na zabeležena plačila.

## Meni

Meni v zgornjem desnem kotu omogoča:

![Meni izdanih računov](../Images/IssuedInvoicesMenu.png "Meni izdanih računov")

- tiskanje  
- izvoz  
- pošiljanje po e-pošti  
- **storniranje dokumenta**  
- vrnitev v osnutek (če je dovoljeno)

## Brisanje

Izbris je mogoč samo za dokumente v stanju **Osnutek** in le, če **ne vsebujejo postavk**.

> [!NOTE]
> Objavljenih računov ni mogoče izbrisati. Uporabite **Storniraj dokument** ali **Vrni v osnutek**, če je na voljo.

---
