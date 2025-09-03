# Davčna stopnja

Davčne stopnje določajo višino davka, ki se obračuna na finančnih transakcijah. Gre za ključen element v poslovanju, saj vplivajo na oblikovanje cen, finančno poročanje in skladnost s predpisi. Različne države in področja določajo različne vrste davčnih stopenj, kot so standardne, znižane ali posebne davčne stopnje. Z ustreznim vodenjem davčnih stopenj zagotovimo pravilne obračune in preglednost poslovanja.

Šifrant davčnih stopenj omogoča evidentiranje in upravljanje vseh davčnih stopenj, ki jih uporabljate v digitalnih vsebinah sistema.

## Shema

Šifrant davčnih stopenj ima naslednjo shemo:

| Polje | Opis |
|-------|------|
| **Naziv** | Opisna oznaka davčne stopnje. Na primer **Standardna davčna stopnja 22%** ali **Znižana davčna stopnja 9,5%**. |
| **Davčna stopnja** | Numerična vrednost davčne stopnje, izražena v odstotkih. Na primer **22** ali **9,5**. |
| **Aktiven** | Označuje, ali je davčna stopnja trenutno v uporabi. Neaktivnih davčnih stopenj ne moremo uporabiti v novih dokumentih, ostanejo pa vidne v zgodovini.|

## Upravljanje

Upravljanje s šifrantom davčnih stopenj je dostopno preko [navigacije](../../Common/UI/Sitemap.md), in sicer preko **Prodaja/Upravljanje/Davčne stopnje**.  

V uporabniškem vmesniku se prikaže seznam obstoječih davčnih stopenj. V vsakem zapisu se levo od naziva nahaja barvna oznaka statusa, pri čemer modra barva pomeni, da je zapis aktiven, siva pa, da je neaktiven.

![Seznam](../Assets/DavcnaStopnjaSeznam.png "Seznam")

## Dodajanje

S klikom na [akcijski gumb](../../Splosno/UporabniskiVmesnik/AkcijskiGumb.md) uporabniški vmesnik preide v način dodajanja nove davčne stopnje. Odpre se vnosna maska, kjer izpolnite ustrezna polja.  

![Dodajanje](../Assets/DavcnaStopnjaNov.png "Dodajanje")

S klikom na gumb **Dodaj** se nova davčna stopnja shrani in prikaže v seznamu.S klikom na gumb **Prekliči** se vrnete na seznam brez shranjevanja vnešenih podatkov.

## Urejanje

Za urejanje obstoječe davčne stopnje v seznamu kliknete na njen **Naziv**. Odpre se vnosna maska, kjer lahko spremenite polja.  

![Urejanje](../Assets/DavcnaStopnjaUrejanje.png "Urejanje")

Spremembe shranite s klikom na gumb **Shrani**. S klikom na gumb **Prekliči** se vrnete na seznam brez shranjevanja sprememb.

## Brisanje

Davčno stopnjo lahko izbrišete le, če se ne pojavlja v nobenem odvisnem zapisu.  
Za brisanje davčne stopnje najprej preidete v način [urejanja](#urejanje). V načinu urejanja kliknete **Izbriši**. Odpre se potrditveno okno: **Ali ste prepričani, da želite izbrisati zapis?**

- V kolikor potrditveno okno potrdite, se davčna stopnja trajno izbriše in izgine s seznama.  
- V kolikor potrditveno okno prekličete, uporabniški vmesnik ostane v načinu urejanja in davčna stopnja ostane v sistemu.
