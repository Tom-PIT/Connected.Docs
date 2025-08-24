# Valuta

Valuta je uradno plačilno sredstvo, ki se uporablja v določeni državi ali skupini držav. Vsaka valuta ima svoje ime, oznako in simbol, s katerimi jo enolično prepoznamo v mednarodnem finančnem in poslovnem okolju. V poslovnih procesih jo uporabljamo za izražanje cen, zneskov in vrednosti transakcij, kar omogoča enotno in pravilno obravnavo vseh poslovnih dogodkov.

Šifrant valut se uporablja v sistemu za enotno obravnavo različnih valut, ki se uporabljajo pri poslovanju. Vsaka valuta določa način prikaza cen in zneskov v dokumentih, kot so naročila, računi in poročila. Na ta način zagotovimo, da se posamezna valuta vedno obravnava enako, ne glede na vsebino.

## Shema

Šifrant valut vsebuje naslednja polja:

|Polje|Opis
|---|---
|**Ime**| Polno ime valute, na primer Euro ali Ameriški dolar.
|**Šifra**| Trimestna mednarodna oznaka valute, na primer EUR ali USD.
|**Simbol**| Oznaka, ki predstavlja valuto, na primer € ali $.
|**Pozicija simbola**| Določa, ali se simbol prikazuje pred ali za zneskom.
|**LCID**| Identifikator jezika in regije, uporabljen za lokalizacijo prikaza valute.

## Upravljanje

Do šifranta valut dostopate preko [navigacije](../../Common/UI/Sitemap.md) in sicer preko **Prodaja / Upravljanje / Valute**.

## Seznam valut

Privzeto se prikaže uporabniški vmesnik s seznamom že vnešenih oziroma obstoječih valut. V kolikor seznam ne vsebuje nobene valute, je seznam prazen.

![Prazen seznam](../Assets/ValutaPrazenSeznam.png "Prazen seznam")

V vsakem zapisu se levo od imena nahaja barvna oznaka, ki ponazarja status valute. Modra barva pomeni, da je valuta aktivna, siva barva pa pomeni, da je neaktivna.

![Seznam valut](../Assets/ValutaSeznam.png "Seznam valut")

## Dodajanje

S klikom na akcijski gumb se neposredno izvede akcija **Nov** in uporabniški vmesnik preide v način urejanja. Odpre se vnosna maska za dodajanje nove valute.

![Dodajanje](../Assets/ValutaNov.png "Dodajanje")

- Kliknite **Dodaj**, da ustvarite novo valuto. Uporabniški vmesnik nato preide v privzeti način, ki prikazuje seznam obstoječih valut.  

![Seznam](../Assets/ValutaSeznam.png "Seznam")

- Kliknite **Prekliči**, da postopek prekinete brez shranjevanja. Nova valuta se v tem primeru ne ustvari.

## Urejanje

Za urejanje valute v seznamu kliknite na njeno **Ime**. Uporabniški vmesnik preide v način urejanja, ki je enak načinu vnosa, le da so polja že izpolnjena.

![Urejanje](../Assets/ValutaUrejanje.png "Urejanje")

- Spremenite želena polja in kliknite **Shrani**, da shranite spremembe. Seznam se posodobi in prikaže posodobljeno vrednost.  
- Kliknite **Prekliči**, da postopek prekinete brez shranjevanja. Spremembe se v tem primeru ne upoštevajo.

## Brisanje

Valuto lahko izbrišete le, če ni povezana z nobenim izdelkom, dokumentom ali računom. Za brisanje valute najprej preidite v način [urejanja](#urejanje). V načinu urejanja kliknite **Izbriši**. Odpre se potrditveno sporočilo:  
*Ali ste prepričani, da želite izbrisati zapis?*

- Če potrdite, se valuta trajno izbriše in izgine s seznama.  
- Če prekličete, uporabniški vmesnik ostane v načinu urejanja in valuta ostane nespremenjena.
