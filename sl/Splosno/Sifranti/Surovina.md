# Surovina

Surovine predstavljajo osnovne naravne materiale, ki se uporabljajo v proizvodnji polizdelkov in izdelkov. Gre za osnovne vire, kot so les, kovina, plastika, steklo ali druga naravna in umetna surovina, ki jih podjetje pridobi iz okolja oziroma dobaviteljev. Imajo ključno vlogo v nabavi in proizvodnji, saj so začetna osnova za ustvarjanje dodane vrednosti.

Predstavlja šifrant surovin, ki pripadajo [materialom](../Materiali.md).

> [!TIP]  
> Prerekviziti za upravljanje tega šifranta so:  
>  
> - [Merske enote](MerskaEnota.md)  
> - [Davčne stopnje](DavcnaStopnja.md)  
>  
> Poskrbite za omenjene prerekvizite, preden začnete z upravljanjem tega šifranta.

## Shema

Šifrant surovin ima naslednjo shemo:

|Polje|Opis
|---|---
|**Šifra**| Enolična identifikacijska oznaka surovine znotraj seznama materialov. Na primer **SRV-001** ali **SRV-1200**.|
|**Naziv**|Naziv surovine, ki se prikazuje v seznamih in dokumentih. Na primer **Hrastov les** ali **Jeklo**.|
|**Generiranje serijske številke**|Način [dodeljevanja](../../Skladisce/SerijskeStevilke/GeneriranjeSerijskeStevilke.md) serijske številke.|
|**Rok trajanja**|Število dni trajanja, uporabno pri hitro pokvarljivih surovinah. Na primer **7** ali **90**.|
|**EAN**|[EAN](https://en.wikipedia.org/wiki/International_Article_Number) koda za optično branje. Na primer **3831234567890**.|
|**Osnovna merska enota**|[Merska enota](MerskaEnota.md), v kateri izražamo količine. Na primer **kg** ali **m3**.|
|**Davek**|Privzeta [davčna stopnja](DavcnaStopnja.md). Na primer **22 %** ali **9,5 %**.|
|**Število decimalnih mest**|Privzeto število decimalnih mest. Na primer **0** ali **3**.|
|**Opis**|Kratek opis, namenjen pojasnilu rabe ali specifikacij. Na primer **Naravni hrastov les za obdelavo**.|
|**Oznake**|Oznake za kategorizacijo in filtriranje. Na primer **les**, **kovina**, **naravni materiali**.|
|**Info povezava**|URL do zunanjega opisa surovine. Na primer **https://primer.domena/hrast**.|
|**URL do slike surovine**|Javni URL do fotografije surovine. Na primer **https://primer.domena/slike/hrast.jpg**.|
|**Zunanji ključ**|Identifikator v zunanjem sistemu. Na primer **SAP-3400**.|
|**Aktivno**|Določa, ali je surovina na voljo za uporabo v novih dokumentih. Neaktivnih ne moremo dodajati v novih dokumentih, ostanejo pa vidni v zgodovini.|

## Upravljanje

Upravljanje s šifrantom surovin je dostopno preko [navigacije](../../Common/UI/Sitemap.md) in sicer **Sredstva/Materiali/Surovine**.  

Uporabniški vmesnik privzeto prikazuje seznam obstoječih zapisov.  

![Seznam](../Assets/SurovinaSeznam.png "Seznam")

V vsakem zapisu se levo od naziva nahaja barvni indikator stanja.  

### Filtri

Levi del uporabniškega vmesnika omogoča filtriranje surovin.  

|Filter|Opis
|--|--
|**Oznake**|Filtrira seznam surovin po oznakah.|

## Akcije

Na voljo so naslednje akcije:

- [Uvoz](#uvoz)
- [Kopiraj obstoječi](#kopiraj-obstoječi)
- [Nov](#nov)

### Uvoz

Omogoča uvoz seznama surovin.  

### Kopiraj obstoječi

Omogoča podvajanje obstoječega zapisa.  

![Kopiraj](../Assets/SurovinaKopiraj.png "Kopiraj")

### Nov

S klikom na akcijo **Nov** odprete vnosno masko za dodajanje nove surovine.  

![Dodajanje](../Assets/SurovinaNov.png "Dodajanje")

## Urejanje

Klik na **Naziv** odpre vnosno masko za urejanje obstoječe surovine.  

![Urejanje](../Assets/SurovinaUrejanje.png "Urejanje")

## Brisanje

Surovino lahko izbrišete le, če se ne pojavlja v nobenem odvisnem zapisu.  
