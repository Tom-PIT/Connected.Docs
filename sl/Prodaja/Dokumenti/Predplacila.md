# Predplačila

**Predplačilo** je prodajni dokument, ki se uporablja, kadar stranka poravna dogovorjeni znesek **vnaprej**, še preden je blago ali storitev dobavljena. Evidentira prejeta sredstva, ki se lahko kasneje v celoti ali delno uporabijo pri izstavitvi [**izdanega računa**](IzdaniRacuni.md).  
Predplačila je mogoče ustvariti ročno ali neposredno iz potrjenega [**Predračuna**](Predracuni.md), s čimer so povezana s prodajnim procesom.

Za dostop do tega dokumenta pojdite na **Prodaja / Dokumenti / Predplačila** v [**navigaciji**](../../Skupno/UI/Navigacija.md).

## Vloga predplačil v prodajnem procesu

Predplačila se uporabljajo, kadar stranka plača del ali celoten znesek vnaprej. V prodajni proces se vključujejo na naslednji način:

1. Ustvarite **[Ponudbo](Ponudbe.md)** in jo pretvorite v **[Predračun](Predracuni.md)**.  
2. Predračun potrdite, s čimer postane primeren za predplačila.  
3. Ustvarite **Predplačilo** – ročno ali prek *Povezani dokumenti → + Predplačilo* na predračunu.  
4. Evidentirate prejeti znesek in objavite predplačilo (preide v stanje **Potrjeno**).  
5. Ob izdaji končnega **[Izdani račun](IzdaniRacuni.md)** predplačilo v celoti ali delno zmanjša znesek za plačilo.  
6. Če je treba predplačilo preklicati ali vrniti, izvedete **[storno](../../Logistika/Dokumenti/Storno.md)**.

Predplačila sledijo prejetim sredstvom in **ne vplivajo na zalogo**.

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran identifikator predplačila. |
| **Številka naročila kupca** | Neobvezna referenca na naročilo stranke. |
| **Stranka** | Stranka, ki izvede predplačilo, izbrana iz šifranta [**Poslovni imenik**](../../Skupno/Upravljanje/PoslovniImenik.md) (obvezno). |
| **Datum dokumenta** | Datum izdaje dokumenta predplačila. |
| **Datum opravljene storitve** | Predviden datum dobave, povezan s prodajo. |
| **Datum zapadlosti** | Rok za prejem predplačila (obvezno). |
| **Tip reference** | Vrsta plačilnega sklica (obvezno). |
| **Sklic** | Sklicna številka glede na izbrano vrsto sklica. |
| [**Bančni račun organizacije**](../Upravljanje/BancniRacuniOrganizacije.md) | Bančni račun za prejem predplačila (obvezno). |
| [**Stroškovno mesto**](../../Skupno/Upravljanje/StroskovnaMesta.md) | Neobvezna razporeditev na stroškovno mesto. |
| **Koda namena** | Neobvezen opis namena plačila. |
| **Rabat** | Skupni rabat, uporabljen na znesek predplačila. |
| **Vsebina zgoraj** | Uvodno besedilo iz [**Vnaprej določenih besedil**](../../Skupno/Upravljanje/VnaprejDolocenaBesedila.md). |
| **Vsebina spodaj** | Zaključna ali pravna besedila iz [**Vnaprej določenih besedil**](../../Skupno/Upravljanje/VnaprejDolocenaBesedila.md). |
| **Način plačila** | Izbrani način plačila iz šifranta [**Način plačila**](../Upravljanje/NacinPlacila.md). |

</details>

<details>
  <summary><strong>Transport, alternativna valuta in dostava</strong></summary>

| Polje | Opis |
|--------|-------------|
| **[Pogoj dobave](../../Skupno/Upravljanje/PogojiDobave.md)** | Dobavni pogoji, dogovorjeni s stranko. |
| **[Vrsta transporta](../../Skupno/Upravljanje/VrstaTransporta.md)** | Način transporta, dogovorjen s stranko. |
| [**Alternativna valuta**](../../Skupno/Upravljanje/Valute.md) | Alternativna valuta glede na privzeto valuto, uporabljeno v dokumentu. |
| [**Tečaj**](../Upravljanje/MenjalniTecaji.md) | Tečaj alternativne valute glede na privzeto valuto. |
| **Dobava – Podjetje / Naslov** | Dobavni podatki stranke, povzeti iz [Poslovnega imenika](../../Skupno/Upravljanje/PoslovniImenik.md). |
</details>

<details>
  <summary><strong>Postavke</strong></summary>

| Polje | Opis |
|------|------|
| [**Sredstvo**](../../Sredstva/Materiali/Izdelki.md) | Izdelek ali storitev, na katero se predplačilo nanaša. |
| **Količina** | Količina sredstva. |
| **Cena brez DDV** | Cena na enoto brez DDV. |
| **Popust (%)** | Neobvezen popust na ravni postavke. |
| **Vrednost** | Izračunane vrednosti (neto, davek, bruto) postavke. |

</details>

## Upravljanje

Predplačila imajo lahko status **Osnutek** ali **Potrjeno**.

### Seznam

![Seznam predplačil](../Images/PrepaymentsList.png "Seznam predplačil")

Seznam predplačil je mogoče filtrirati po:
- **Datumih dokumentov**
- **Pogledu** (Osnutek / Potrjeno)
- **Stranki**

Vsaka vrstica prikazuje:
- Stranko  
- Šifro dokumenta  
- Datum dokumenta  
- Znesek predplačila  

Osnutke je mogoče urejati, potrjena predplačila pa so dokončna, razen če so stornirana.

## Dejanja

### Ustvarjanje novega predplačila

1. Uporabite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega osnutka predplačila.

   ![Novo predplačilo](../Images/PrepaymentsNewTop.png "Novo predplačilo")

2. Izpolnite obvezna polja: **Stranka**, **Datum zapadlosti**, **Tip reference**, **Sklic** in **Bančni račun organizacije**.

3. V razdelku **Postavke** dodajte postavke z vnosom ali skeniranjem **serijske številke**, **EAN** ali **naziva sredstva/materiala**.

4. Shranite dodane postavke.

5. Izberite **Način plačila**.

   ![Predplačilo – spodnji del](../Images/PrepaymentsNewBottom.png "Predplačilo – spodnji del")

6. Ko je predplačilo pripravljeno, kliknite **Objavi**.  
   Dokument preide v stanje **Potrjeno** in omogoči nadaljnja dejanja.

> [!NOTE]
> - S klikom na **Objavi** se dokument potrdi in premakne iz **Osnutka** v **Potrjeno**.  
> - Osnutek predplačila je mogoče ustvariti tudi iz potrjenega **[Predračuna](Predracuni.md)** prek dejanja **+ Predplačilo**.
>
> ![Povezava predračun → predplačilo](../Images/PrepaymentsProformaLink.png "Povezava predračun → predplačilo")

### Urejanje predplačila

Osnutek predplačila je mogoče urejati do objave.

Urejate lahko:
- Glavna polja (stranka, datumi, sklici, bančni račun)
- Alternativna valuta
- Transport
- Podatki o dobavi
- Postavke
- Načine plačila
- Besedila (zgoraj/spodaj)

#### Priponke

V razdelku **Priponke** lahko naložite dodatno dokumentacijo.

#### Povezani dokumenti

Razdelek **Povezani dokumenti** omogoča ustvarjanje nadaljnjih dokumentov in prikazuje obstoječe povezave. 

![Povezani dokumenti predplačila](../Images/PrepaymentsLinkedDocuments.png "Povezani dokumenti predplačila")

> [!NOTE]
> - Razpoložljiva dejanja so odvisna od tipa in statusa dokumenta.  
> - Predplačila je mogoče v celoti ali delno uporabiti ob izdaji računa.

Razpoložljiva dejanja vključujejo:
- **[+ Izdani račun](IzdaniRacuni.md)** – ustvari končni račun z upoštevanjem predplačila.  
- **Predplačilo** – kopira vsebino v novo predplačilo.

#### Alternativna valuta

Razdelek Alternativna valuta omogoča izražanje cen v dokumentu v valuti, ki je različna od privzete sistemske valute. To se običajno uporablja pri mednarodni prodaji. Tečaji se povzemajo iz šifranta [Devizni tečaji](../Upravljanje/MenjalniTecaji.md).

![Alternativna valuta](../Images/SalesAlternativeCurrency.png "Alternativna valuta")

Ko je izbrana alternativna valuta, se cene v dokumentu samodejno preračunajo z uporabo navedenega deviznega tečaja.

### Dobava

Razdelek **Dobava** določa naslov dobave. Privzeto se izpolni iz podatkov stranke, vendar ga je mogoče prilagoditi.

Ti podatki vplivajo na izpis dokumenta in nadaljnje logistične dokumente, ne spreminjajo pa osnovnih podatkov.

## Meni

Meni dokumenta omogoča:
- **Tiskanje**
- **Izvoz**
- **Pošiljanje po e-pošti**
- **Storniraj dokument**
- **Vrni v osnutek** (če je dovoljeno)

![Meni predplačila](../Images/PrepaymentsMenu.png "Meni predplačila")

Storniranje razveljavi finančni učinek potrjenega predplačila. Za več informacij glejte **[Storno](../../Logistika/Dokumenti/Storno.md)**.

## Brisanje

Predplačilo je mogoče izbrisati **samo v stanju Osnutek** in le, če **ne vsebuje postavk**.

Če osnutek vsebuje postavke:
1. Odprite postavko.  
2. Kliknite **Izbriši**.  
3. Postopek ponovite za vse postavke.

Ko dokument ne vsebuje več postavk, ga lahko izbrišete.

Potrjenih predplačil **ni mogoče** izbrisati, lahko pa jih **stornirate**.

---
