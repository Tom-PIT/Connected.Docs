# Država

Država je osnovna politična in geografska enota, ki se uporablja v poslovnih procesih za označevanje lokacij, naslovov strank in dobaviteljev ter za povezovanje z davčnimi in carinskimi pravili. 

Šifrant držav omogoča enotno obravnavo držav v vseh digitalnih vsebinah sistema.

## Shema

Šifrant držav vsebuje naslednja polja:

|Polje|Opis
|---|---
|**Ime**| Ime države, na primer Slovenija ali Nemčija.
|**LCID**| Identifikator jezika in regije, uporabljen za lokalizacijo države.
|**ISO šifra**| Mednarodna dvočrkovna oznaka države po standardu ISO.
|**Aktiven**| Označuje, ali je država trenutno v uporabi. Neaktivnih držav ne moremo uporabiti v novih dokumentih, ostanejo pa vidne v zgodovini.

## Upravljanje

Do šifranta držav dostopate preko [navigacije](../../Common/UI/Sitemap.md) in sicer preko **Prodaja / Upravljanje / Države**.

## Seznam držav

Privzeto se prikaže uporabniški vmesnik s seznamom že vnešenih oziroma obstoječih držav. V kolikor seznam ne vsebuje nobene države, je seznam prazen.

Vsak zapis ima na levi strani barvno oznako, ki ponazarja status: modra pomeni, da je država aktivna, siva pa, da je neaktivna. Pod nazivom države je prikazana značka **Poštne številke**, ki omogoča [urejanje poštnih številk](#urejanje-poštnih-številk) za posamezno državo.

![Seznam držav](../Assets/DrzavaSeznam.png "Seznam držav")

## Akcije

Klik na [akcijski gumb](../../Splosno/UporabniskiVmesnik/AkcijskiGumb.md) prikaže naslednje akcije:

- Nov  
- Uvoz  

### Nov

S klikom na akcijo **Nov** uporabniški vmesnik preide v način urejanja in prikaže vnosno masko za dodajanje nove države.

![Dodajanje](../Assets/DrzavaNov.png "Dodajanje")

- Kliknite **Dodaj**, da ustvarite novo državo. Zapis se nato prikaže v seznamu.  
- Kliknite **Prekliči**, da postopek prekinete brez shranjevanja.

### Uvoz

[Uvoz](UvozDrzav.md) omogoča masovno vnašanje oziroma posodabljanje seznama držav. Uporabnik pripravi datoteko v CSV obliki in jo prenese v sistem. Ta samodejno ustvari nove ali posodobi obstoječe zapise.

## Urejanje

Za urejanje države v seznamu kliknite na njen **Naziv**. Uporabniški vmesnik preide v način urejanja, ki je enak načinu vnosa, le da so polja že izpolnjena.

![Urejanje](../Assets/DrzavaUrejanje.png "Urejanje")

- Spremenite želena polja in kliknite **Shrani**, da shranite spremembe.  
- Kliknite **Prekliči**, da postopek prekinete brez shranjevanja.

### Urejanje poštnih številk

Pod nazivom države je prikazana značka **Poštne številke**. 

![Po[tne [tevilke]]](../Assets/DrzavaPostneStevilke.png "Poštne številke")

S klikom na značko uporabniški vmesnik preide v pogled za upravljanje [poštnih številk](PostnaStevilka.md), vezanih na izbrano državo.

## Brisanje

Državo lahko izbrišete le, če se ne pojavlja v nobenem odvisnem zapisu. Za brisanje države najprej preidite v način [urejanja](#urejanje). V načinu urejanja kliknite **Izbriši**. Odpre se potrditveno sporočilo:  **Ali ste prepričani, da želite izbrisati zapis?**

- Če potrdite, se država trajno izbriše in izgine s seznama.  
- Če prekličete, uporabniški vmesnik ostane v načinu urejanja in država ostane nespremenjena.
