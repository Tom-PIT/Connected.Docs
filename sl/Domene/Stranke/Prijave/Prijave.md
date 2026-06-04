<!-- app_route: /customer-support -->
<!-- app_label: Prijave -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Stranke/Prijave/Prijave.md -->
<!-- canonical_source_title: Prijave -->

# Prijave

Zaslon **Prijave** je osrednji delovni prostor domene Stranke.  
Uporablja se za ustvarjanje, spremljanje, posodabljanje in reÅ¡evanje podpornih prijav, ki jih oddajo stranke, partnerji ali interni uporabniki.

Prijave so organizirane po **PodroÄjih** (na primer VzdrÅ¾evanje, Prodajna podpora, TehniÄna podpora) in se skozi svoj Å¾ivljenjski cikel premikajo med razliÄnimi stanji.

Za dostop do tega zaslona pojdite na **Stranke / Prijave** v [navigaciji](../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|-----|------|
| **Zadeva** | Kratek naslov, ki opisuje teÅ¾avo |
| **Opis** | Podroben opis prijave |
| **[PodroÄje](../Upravljanje/Podrocja.md)** | PodroÄje, kateremu prijava pripada |
| **Kanal** | Izvor prijave (**Splet**, **Telefon**, **E-poÅ¡ta**) |
| **Avtor** | Uporabnik, ki je ustvaril prijavo |
| **Dodeljeno** | Uporabnik, odgovoren za reÅ¡evanje prijave |
| **Oznake** | Klasifikacijske oznake |
| **Prioriteta** | Prioriteta prijave (**Nizka**, **Normalna**, **Visoka**) |
| **Ocena** | Ocenjen napor |
| **Ustvarjeno** | ÄŒas ustvarjanja prijave |
| **Aktivirano** | ÄŒas, ko prijava postane aktivna |
| **ReÅ¡eno** | ÄŒas reÅ¡itve prijave |
| **Priponke** | Datoteke, priloÅ¾ene prijavi |

## Seznam prijav

Seznam prikazuje prijave v stanjih **Novo** in **Aktivno**. Na vrhu seznama so prikazane povzetne kartice:

- **Moje prijave**
- **Nedodeljene prijave**
- **Prijave z visoko prioriteto**

![Seznam prijav](../Images/TicketsList.png)

Vsaka prijava je prikazana kot vrstica, ki jo je mogoÄe razÅ¡iriti za hitra dejanja. Na voljo so naslednja dejanja:

- **Aktiviraj**
- **ReÅ¡i**
- **IzbriÅ¡i**
- **Spremeni prioriteto**
- **Dodeli uporabnika**

![Podrobnosti seznama prijav](../Images/TicketsListDetail.png "Podrobnosti seznama prijav")

### Filtri

Prijave je mogoÄe filtrirati z uporabo levega panela:

- **PodroÄje**
- **Pogled**
  - Novo
  - Aktivno
- **Oznake**
  - Brez oznake
- **Zadnja aktivnost**
- **Pred dnevi**

## Stanja prijav

Prijave se premikajo skozi naslednja glavna stanja:

- **Novo** â€“ prijava je ustvarjena, vendar Å¡e ni aktivirana
- **Aktivno** â€“ prijava je v obravnavi
- **ReÅ¡eno** â€“ prijava je zakljuÄena in premaknjena v **[ReÅ¡ene prijave](ResenePrijave.md)**

## Ustvariti nove prijave

Za ustvarjanje nove prijave kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) v spodnjem desnem kotu.

### Korak 1: Izbira podroÄja

Prvi korak je izbira **PodroÄja**, kateremu bo prijava pripadala. Za potrditev kliknite akcijski gumb.

![Izbira podroÄja](../Images/TicketsNewStep1.png)

### Korak 2: Podrobnosti prijave

V drugem koraku se vnesejo ali uredijo podrobnosti prijave.

![Ustvari prijavo â€“ podrobnosti](../Images/TicketsNewStep2.png)

Klik na [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) omogoÄa:

- objavo kot **Novo**
- objavo kot **Aktivno**
- objavo kot **Novo** ali **Aktivno** in hkratno **ustvarjanje nove prijave**

![Gumb za objavo prijav](../Images/TicketsPublishTicketsButton.png "Gumb za objavo prijav")

## Delo s prijavami

### Odpirati prijave

Klik na naslov prijave odpre celoten pogled prijave.

![Podrobnosti prijave](../Images/TicketActiveView.png)

Pogled prijave prikazuje:

- podatke o prijavi,
- Äasovne oznake stanj,
- priloge,
- avtorja, oznake, dodelitev in prioriteto.

### Komentarji in pogovor

Prijave podpirajo sprotno komunikacijo prek komentarjev.

![Razdelek za komentarje](../Images/TicketCommentSection.png)

Pri dodajanju komentarja:

- je mogoÄe komentar usmeriti k doloÄenemu uporabniku,
- komentar je lahko oznaÄen kot **Zasebno**,
- mogoÄe je priloÅ¾iti datoteke.

Za shranjevanje komentarja je potrebno prijavo posodobiti tako, da se:

- shrani kot **Novo** ali **Aktivno**, ali
- spremeni njeno stanje (na primer v **ReÅ¡eno**).

### Revizijska sled

Revizijska sled beleÅ¾i vse spremembe, opravljene na prijavi, v obliki Äasovnice. Do nje dostopate prek zavihka **Revizijska sled** v pogledu prijave, pod razdelkom **Komentar**.

### Dejanja v meniju

Dodatna dejanja so na voljo v meniju prijave, ki se nahaja v zgornjem desnem delu pogleda prijave.

![Meni prijave](../Images/TicketsMenuSL.png)

RazpoloÅ¾ljive moÅ¾nosti vkljuÄujejo:

- **Odjavi s prijave**
- **NaroÄniki**
- **Deli**
- **Delo**

> [!NOTE]
Nastavitve obvestil na ravni podroÄja upravljate v [**Nastavitve obvestil**](../Upravljanje/NastavitveObvestil.md).

## ReÅ¡evati prijave

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md), da odprete meni in izberete moÅ¾nost reÅ¡itve:

- **Brez napak** â€“ teÅ¾ave ni
- **Ni v uporabi** â€“ prijava ni veÄ relevantna
- **Podvojeno** â€“ prijava je kopija druge prijave
- **Po zasnovi** â€“ teÅ¾ava je namerna in priÄakovana
- **ReÅ¡eno** â€“ teÅ¾ava je odpravljena

![Gumb za premik prijav](../Images/TicketsMoveTicketsButtonSL.png)

Ko je prijava reÅ¡ena:

- se njeno stanje nastavi na **ReÅ¡eno**,
- odstrani se iz aktivnega seznama,
- prikaÅ¾e se v zaslonu **[ReÅ¡ene prijave](ResenePrijave.md)**.