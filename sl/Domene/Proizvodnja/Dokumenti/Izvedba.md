<!-- app_route: /production-orders/execution -->
<!-- app_label: Izvedba -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Proizvodnja/Dokumenti/Izvedba.md -->
<!-- canonical_source_title: Izvedba -->

# Izvedba

Modul **Izvedba** uporabljajo proizvodni delavci za izvajanje in beleženje dela na dodeljenih proizvodnih nalogih. Omogoča sprotno spremljanje napredka, proizvedenih količin, [zastojev](Zastoj.md), [slabih kosov](SlabiKosi.md), [kvalitete](Kvaliteta.md) in drugih aktivnosti.

Večina proizvodnih delavcev je ob prijavi samodejno preusmerjena na pogled Izvedba.

![Potek izvajanja proizvodnje](../Images/ProductionExecutionFlowSL.svg "Potek izvajanja proizvodnje")

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Izvedba](https://www.youtube.com/watch?v=qf0Ftar4hAg&list=PLH4LYaWds6h8kspUco0t_MaFPNbL0zj1D&index=28)**.

Za ročni dostop pojdite na **Proizvodnja / Izvedba** v [navigaciji](../../../Skupno/UI/Navigacija.md).

> [!NOTE]
> - Ob odprtju zaslon običajno samodejno prikaže dodeljene proizvodne naloge. Če se ne prikaže nobena, kliknite **Izberi proizvodne naloge**.
>   
>   ![Izbira proizvodnih nalogov](../Images/ExecutionPageEmptySL.png "Izberi proizvodni nalog")
> - Če je seznam proizvodnih nalogov prazen, za izbrano enoto ni razpoložljivih nalogov (še niso ustvarjeni ali nimajo aktivnih operacij). Naloge ustvarite v **[Proizvodni nalogi](ProizvodniNalogi.md)** in preverite, da je operacija dodeljena izbrani enoti.
> - Če je seznam organizacijskih enot prazen, šifrant še ni definiran. Enote definirajte v **[Organizacijske enote](../../../Skupno/Upravljanje/PoslovneEnote.md)**.

## Pregled uporabniškega vmesnika izvedbe

Glavni zaslon izvedbe prikazuje ključne informacije za trenutni proizvodni nalog in operacijo.

![Pregled izvedbe](../Images/ExecutionViewExplanationSL.png "Pregled izvedbe")

| Št. | Opis |
|----|------|
| **1** | Prijavljeni uporabnik in **organizacijska enota**. <br>• Klik na sliko uporabnika → odjava <br>• Klik na organizacijsko enoto → sprememba (glej [Organizacijske enote](../../../Skupno/Upravljanje/PoslovneEnote.md)) |
| **2** | Gumbi za upravljanje operacije: <br>• **Začni** – začne operacijo <br>• **Premor** – začasno ustavi delo <br>• **Ustavi** – zaključi operacijo |
| **3** | Bližnjice: <br>• **Rumeni koš** – beleženje slabih kosov <br>• **Oranžni trikotnik** – odprti zastoji ali težave |
| **4** | Trenutni proizvodni nalog |
| **5** | Trenutna operacija |
| **6** | Podatki o seriji |
| **7** | Trenutni izhod operacije in tisk etiket |
| **8** | Napredek proizvodnje (proizvedeno / planirano) |
| **9** | Trenutno zabeleženi slabi kosi |
| **10** | Preostala količina za dokončanje (ureljiva) |
| **11** | Gumb **Proizvedi** — zabeleži proizvedeno količino |
| **12** | Gumb za aktivnosti, ki vodi na izbor aktivnosti |

### Upravljanje operacije

![Upravljanje operacije](../Images/ExecutionTop.png "Upravljanje operacije")

## Proces izvedbe

### Začeti proizvodnjo

Operacijo lahko začnete na dva načina:

#### **1. Klik na Začni**

Kliknite **Začni**, da pričnete operacijo.

#### **2. Klik na Proizvedi (samodejni začetek)**

Če kliknete **Proizvedi**, sistem:

- samodejno začne operacijo  
- zabeleži količino prikazano nad gumbom  
- posodobi preostalo količino  
- če je privzeta količina enaka planirani in je ne spremenite, sistem zabeleži **vse preostale kose kot proizvedene**
  
  ![Proizvodnja zaključena](../Images/ExecutionProductionFinishedSL.png "Napredek proizvodnje")

### Začasno ustaviti proizvodnjo

Kliknite **Premor**, da začasno ustavite operacijo. To **ne zaključi** proizvodnje — le prekine jo do nadaljevanja.

![Premor](../Images/ExecutionTopPause.png "Gumb Premor")

### Kontrolne liste in kakovost

**[Kontrolne liste](../../Kvaliteta/Upravljanje/KontrolneListe.md)** zagotavljajo varnost in kakovost izdelkov. Če je za operacijo zahtevan kontrolni seznam, se samodejno prikaže ob pravem času (na začetku, med izvajanjem ali pred zaključkom).

![Kontrolni seznam kakovosti](../Images/ExecutionStep1ChecklistSL.png "Kontrolni seznam kakovosti")

Delavci potrdijo vsak korak v skladu z definicijo kontrolnega seznama.

> [!NOTE]
> Če poskušate ustaviti operacijo, ko je obvezen kontrolni seznam neizpolnjen, vas bo sistem najprej pozval k njegovi izpolnitvi.

## Akcijski meni in aktivnosti

Plavajoči [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) v spodnjem desnem kotu odpre meni za izbor aktivnosti.

![Meni aktivnosti](../Images/ExecutionActionButton.png "Meni aktivnosti")

Na voljo so naslednje možnosti:

- **Proizvodnja** – glavni zaslon izvedbe  
- **[Poraba](Poraba.md)** – beleženje porabe vhodov
- **[Slabi kosi](SlabiKosi.md)** – beleženje slabih ali neuporabnih kosov  
- **[Zastoj](Zastoj.md)** – beleženje prekinitev proizvodnje  
- **[Kvaliteta](Kvaliteta.md)** – pregled in izpolnjevanje kontrol kakovosti  
- **[Delo](Delo.md)** – beleženje delovnega časa  
- **[Navodila](Navodila.md)** – ogled navodil za operacijo  

![Proizvodnja kosov](../Images/ExecutionProductionScreenSL.png "Proizvodnja kosov")

Vsaka možnost je podrobneje opisana spodaj.

### Proizvodnja (glavni zaslon)

Možnost **Proizvodnja** vas vrne na glavni zaslon izvedbe, kjer beležite proizvedene kose.

### Poraba

Beleženje porabe vhodov za trenutno operacijo. Glejte **[Poraba](Poraba.md)** za podroben vodič.

### Slabi kosi

Beleženje slabih ali neuporabnih kosov. Glejte **[Slabi kosi](SlabiKosi.md)**.

### Zastoj

Beleženje prekinitev proizvodnje. Glejte **[Zastoj](Zastoj.md)**.

### Kvaliteta

Pregled in ponavljanje kontrol kakovosti. Glejte **[Kvaliteta](Kvaliteta.md)**.

### Delo

Beleženje delovnega časa. Glejte **[Delo](Delo.md)** za samodejne in ročne vnose.

### Navodila

Ogled navodil, povezanih s trenutno operacijo. Glejte **[Navodila](Navodila.md)**.

## Zaključiti izvedbo

Kliknite **Ustavi**, da zaključite trenutno operacijo.

![Ustavi](../Images/ExecutionTopStop.png "Gumb Ustavi")

Pred zaključkom operacije preverite, da:

* So proizvedene vse zahtevane količine
* So zabeleženi vsi slabi kosi in zastoji
* So zaključene vse kontrole kakovosti

Ko je operacija zaključena, preide v stanje **Zaključeno**.

Če operacijo ustavite pred doseženo planirano količino, se operacija zaključi z delno proizvodnjo.

Ko so zaključene vse operacije proizvodnega naloga, se proizvodni nalog premakne v stanje **Zaključen**.

### Evidentiranje dela s kartico

Nekatere izvedbene postaje lahko vključujejo **modul za prijavo s kartico**, ki delavcem omogoča prijavo ali odjavo na trenutno operacijo s skeniranjem identifikacijske kartice.

Ob skeniranju kartice:

* Če delavec še ni prijavljen na operacijo, sistem zažene nov zapis dela.
* Če ima delavec na operaciji že aktiven zapis dela, sistem zapis dela zaključi.

> [!IMPORTANT]
>Skeniranje kartice vpliva samo na evidentiranje delovnega časa. Pri tem sistem ne:
>
> * Zažene ali ustavi operacije
> * Spremeni statusa operacije
> * Začasno ustavi operacije
> * Zaključi operacije

Operacija se še vedno upravlja z običajnimi gumbi **Začni**, **Premor** in **Ustavi**.

### Običajen način uporabe

Vodja izmene zažene operacijo in se prijavi v izvedbeni zaslon.

Ko delavci pridejo na delovno mesto, skenirajo svoje kartice in s tem začnejo evidentirati delo na trenutni operaciji. Ko zaključijo delo ali zapustijo delovno mesto, kartico ponovno skenirajo in sistem ustavi evidentiranje njihovega časa.

Več delavcev lahko neodvisno evidentira delo na isti operaciji hkrati.


