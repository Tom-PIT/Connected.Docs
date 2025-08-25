# Banka

Banke so finančne ustanove, ki omogočajo hranjenje denarnih sredstev, izvajanje plačilnega prometa, odobravanje kreditov ter opravljanje drugih finančnih storitev, povezanih z gospodarstvom in prebivalstvom. V poslovnem svetu imajo banke ključno vlogo pri zagotavljanju likvidnosti in varnem izvajanju transakcij, tako znotraj posamezne države kot tudi na mednarodni ravni. Banke so tudi pomemben del regulatornega sistema, saj skrbijo za varno poslovanje in nadzor nad denarnimi tokovi.

Šifrant bank vsebuje seznam bank, ki jih uporabljate v digitalnih vsebinah sistema. Banke se povezujejo z različnimi [poslovnimi partnerji](PoslovniImenik.md) in njihovimi transakcijami, zato predstavljajo osnovo za izvajanje plačilnega prometa in evidentiranje finančnih poslovnih dogodkov. Šifrant je povezan s šifrantom [držav](Drzava.md), saj mora imeti vsaka banka določeno državo, v kateri posluje.

> [!TIP]
> Prerekviziti za upravljanje tega šifranta so:
>
> - [Države](Drzava.md)
>
> Poskrbite za omenjene prerekvizite, preden začnete z upravljanjem tega šifranta.

## Shema

Šifrant bank ima naslednjo shemo:

| Polje | Opis |
|-------|------|
| **Ime** | Naziv banke. Na primer **NLB d.d.** ali **SKB d.d.**. |
| **BIC** | Enolična identifikacijska koda banke (Business Identifier Code). Na primer **LJBASI2X**. |
| **Država** | [Država](Drzava.md), ki določa, v kateri državi posluje banka. Na primer **Slovenija**. |
| **Aktivna** | Označuje, ali je banka aktivna. |

## Upravljanje

Upravljanje s šifrantom bank je dostopno preko [navigacije](../../Common/UI/Sitemap.md) in sicer preko **Prodaja/Upravljanje/Banke**.

### Seznam

Na seznamu so prikazane vse že obstoječe banke. V kolikor še niste dodali nobene banke, je seznam prazen. Na desni strani uporabniškega vmesnika se nahaja iskalnik, ki omogoča hitro iskanje po seznamu.

V vsakem zapisu se levo od naziva nahaja status v obliki barve. Modra barva označuje, da je banka aktivna, siva pa, da je neaktivna.

![Seznam bank](../Assets/BankaSeznam.png "Seznam bank")

## Dodajanje

S klikom na [akcijski gumb](../../Splosno/UporabniskiVmesnik/AkcijskiGumb.md) uporabniški vmesnik preide v način dodajanja nove banke. Odpre se vnosna maska, kjer izpolnite ustrezna polja.

![Dodajanje banke](../Assets/BankaNov.png "Dodajanje banke")

S klikom na gumb **Dodaj** se nova banka shrani in prikaže v seznamu obstoječih bank.  
S klikom na gumb **Prekliči** se postopek prekine brez shranjevanja.

## Urejanje

Za urejanje posamezne banke kliknite na njen **Naziv**. Uporabniški vmesnik preide v način urejanja, kjer so polja že izpolnjena z obstoječimi podatki.

![Urejanje banke](../Assets/BankaUrejanje.png "Urejanje banke")

Spremenite želene vrednosti in s klikom na gumb **Shrani** potrdite spremembe.  
S klikom na gumb **Prekliči** se postopek prekine brez shranjevanja.

## Brisanje

Banko lahko izbrišete le, če se ne pojavlja v nobenem odvisnem zapisu. Za brisanje banke najprej preidite v način [urejanja](#urejanje). V načinu urejanja kliknite **Izbriši**. Odpre se potrditveno okno: **Ali ste prepričani, da želite izbrisati zapis?**

- V kolikor potrditveno okno potrdite, se banka trajno izbriše in izgine s seznama.  
- V kolikor potrditveno okno prekličete, uporabniški vmesnik ostane v načinu urejanja in banka ostaja v sistemu.
