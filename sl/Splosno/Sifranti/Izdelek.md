# Izdelek

Izdelki predstavljajo končne proizvode, ki jih podjetje bodisi proizvaja bodisi kupuje. Gre za materialno blago, ki ni namenjeno neposredni prodaji končnim kupcem, je pa lahko vključeno v proizvodnjo drugih izdelkov ali pa se uporablja znotraj notranjih procesov podjetja. Izdelki so ključni element poslovanja, saj določajo ponudbo podjetja kot del [sredstev](Sredstvo.md), so osnova za prihodke in imajo pomembno vlogo pri nabavi, skladiščenju in logistiki. Vsak izdelek je povezan z določenimi lastnostmi, kot so rok trajanja, davčna stopnja in merska enota, kar omogoča natančno in standardizirano upravljanje.

Predstavlja šifrant končnih izdelkov, ki pripadajo [materialom](../Materiali.md).

> [!TIP]  
> Prerekviziti za upravljanje tega šifranta so:  
>  
> - [Merske enote](MerskaEnota.md)  
> - [Davčne stopnje](DavcnaStopnja.md)  
>  
> Poskrbite za omenjene prerekvizite, preden začnete z upravljanjem tega šifranta.

## Shema

Šifrant izdelkov ima naslednjo shemo:

|Polje|Opis
|---|---
|**Šifra**| Enolična identifikacijska oznaka izdelka znotraj seznama materialov. Na primer **2625001** ali **MIZ-ČLS**. Šifra mora biti unikatna znotraj celotnega seznama [materialov](../Materiali.md).
|**Naziv**|Naziv izdelka, ki se prikazuje v seznamih in dokumentih. Na primer **Miza – Hrast**.|
|**Generiranje serijske številke**|Način [dodeljevanja](../../Skladisce/SerijskeStevilke/GeneriranjeSerijskeStevilke.md) serijske številke.|
|**Rok trajanja**|Število dni trajanja, uporabno pri pokvarljivem blagu. Na primer **30** ali **365**.|
|**EAN**|[EAN](https://en.wikipedia.org/wiki/International_Article_Number) koda za optično branje. Na primer **3831234567890**.|
|**Osnovna merska enota**|[Merska enota](MerskaEnota.md), v kateri izražamo količine. Na primer **kos** ali **m**.|
|**Davek**|Privzeta [davčna stopnja](DavcnaStopnja.md) pri poslovnih dokumentih. Na primer **22 %** ali **9,5 %**.|
|**Število decimalnih mest**|Privzeto število decimalnih mest za prikaz vrednosti oziroma količin. Na primer **2** ali **3**.|
|**Opis**|Kratek opis, namenjen pojasnilu rabe ali specifikacij. Na primer **Masivni hrast, oljen**.|
|**Oznake**|Oznake za kategorizacijo in filtriranje. Na primer **pohištvo**, **premium**.|
|**Info povezava**|URL do zunanjega opisa artikla ali storitve. Na primer **https://primer.domena/opis**.|
|**URL do slike izdelka**|Javni URL do fotografije artikla. Na primer **https://primer.domena/slike/izdelek.jpg**.|
|**Zunanji ključ**|Identifikator v zunanjem sistemu za povezovanje zapisov. Na primer **SAP-4711**.|
|**Aktivno**|Določa, ali je izdelek na voljo za uporabo v novih dokumentih. Neaktivnih ne moremo dodajati v novih dokumentih, ostanejo pa vidni v zgodovini.|

## Upravljanje

Upravljanje s šifrantom izdelkov je dostopno preko [navigacije](../../Common/UI/Sitemap.md) in sicer **Sredstva/Materiali/Izdelki**. 

Ob odprtju se prikaže uporabniški vmesnik s seznamom obstoječih zapisov. Vmesnik je razdeljen na levi del s filtri in desni del s seznamom. 

![Seznam](../Assets/IzdelekSeznam.png "Seznam")

V vsakem zapisu se levo od naziva nahaja barvni indikator stanja, modra barva označuje aktiven zapis, siva pa neaktiven. Na desni zgoraj je na voljo iskalno polje.

### Filtri

Levi del uporabniškega vmesnika omogoča filtriranje izdelkov. Na voljo so naslednji filtri:

|Filter|Opis
|--|--
|**Oznake**|Filtrira seznam izdelkov po oznakah. V polje lahko dodate več oznak, v seznamu se prikažejo izdelki, ki imajo vsaj eno ustrezno oznako.|

## Akcije

Klik na [akcijski gumb](../../Splosno/UporabniskiVmesnik/AkcijskiGumb.md) prikaže naslednje akcije:

- [Uvoz](#uvoz)
- [Kopiraj obstoječi](#kopiraj-obstoječi)
- [Nov](#nov)

### Uvoz

[Uvoz](UvozMaterialov.md) izdelkov omogoča masovno vnašanje oziroma posodabljanje seznama izdelkov. Pripravite datoteko v `CSV` obliki, jo prenesete v sistem, ki nato samodejno bodisi ustvari bodisi posodobi seznam izdelkov. 

### Kopiraj obstoječi

Ta akcija je zelo podobna akciji **Nov**, s to razliko, da se na uporabniškem vmesniku na vrhu prikaže [spustni seznam](../../Splosno/UporabniskiVmesnik/SpustniSeznam.md) **Osnovni produkt**, ki vsebuje obstoječe izdelke. 

![Kopiraj](../Assets/IzdelekKopiraj.png "Kopiraj")

Z izbiro željenega izdelka uporabniški vmesnik samodejno izpolni polja z vrednostmi izbranega izdelka. Po izbiri je postopek za dodajanje izdelka enak, kot v primeru dodajanja novega. Gre pravzaprav za bližnjico ustvarjanja novega izdelka.

### Nov

S klikom na akcijo **Nov** uporabniški vmesnik preide v način urejanja in sicer se prikaže vnosna maska za dodajanje novega izdelka.

![Dodajanje](../Assets/IzdelekNov.png "Dodajanje")

S klikom na gumb **Dodaj** se ustvari nov izdelek in uporabniški vmesnik preide v privzet način, ki prikazuje seznam obstoječih izdelkov. S klikom na gumb **Prekliči** pa uporabniški vmesnik preide v privzet način, brez da bi vnešene podatke shranil, torej ne ustvari novega izdelka, ampak postopek prekine brez shranjevanja.

## Urejanje

Za urejanje posameznega izdelka v seznamu izdelkov kliknemo na njegov **Naziv**. Uporabniški vmesnik preide v način urejanja izdelka, ki je pravzaprav identičen tistemu za vnos, le da so v tem primeru podatki že izpolnjeni. 

![Urejanje](../Assets/IzdelekUrejanje.png "Urejanje")

Uporabnik spremeni željena polja in s klikom na **Shrani** shrani spremembe, uporabniški vmesnik pa preide v privzet način, ki prikazuje seznam obstoječih skladišč s posodobljeno vrednostjo. S klikom na gumb **Prekliči** pa uporabniški vmesnik preide v privzet način, brez da bi vnešene podatke shranil, torej ne ustvari posodobi skladišča, ampak postopek prekine brez shranjevanja.

## Brisanje

Izdelek je mogoče tudi izbrisati, vendar samo pod pogojem, da nima odvisnih zapisov, na primer ne obstaja noben [prevzem](../../Skladisce/Dokumenti/Prevzem.md), ki ima postavko izdelka.

Za brisanje izdelka moramo najprej v način [urejanja](#urejanje). V načinu urejanja je viden gumb **Izbriši**. Klik na gumb **Izbriši** prikaže potrditveno sporočilo **Ali ste prepričani, da želite izbrisati zapis?**. S potrditvijo okna se izdelek permanentno izbriše, uporabniški vmesnik preide v privzet način, pri čemer izbrisanega izdelka ni več na seznamu.

V kolikor uporabnik ne potrdi sporočila, uporabniški vmesnik ostane v načinu urejanja.

## Pakiranje

V načinu urejanja se uporabniku ponudi nova možnost in sicer lahko dodaja [pakiranja](../../Skladisce/Pakiranje/README.md). Vsak izdelek lahko ima več pakiranj. Na primer, izdelek se lahko dobavi v embalaži po 5 kosov ali pa v embalaži po 10 kosov, kar pomeni, da gre za dobavo enakega izdelka, le z različnim pakiranjem.

S klikom na **Dodaj pakiranje** se odpre [vnosna maska](../UporabniskiVmesnik/VnosnaMaska.md) za dodajanje pakiranja. Ta maska je identična maski pri [upravljanju](../../Skladisce/Pakiranje/README.md) s pakiranji in deluje na enak način.