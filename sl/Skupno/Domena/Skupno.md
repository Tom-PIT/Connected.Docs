# Skupno

Modul **Skupno** ni domena, temveč nabor **skupnih šifrantov in osnov uporabniškega vmesnika**, ki se uporabljajo v celotni platformi. Ti elementi definirajo globalne strukture, kot so države, valute, davčne stopnje, merske enote in poslovni partnerji. Vsaka funkcionalna domena — [Prodaja](../../Prodaja/Domena/Prodaja.md), [Nabava](../../Nabava/Domena/Nabava.md), [Logistika](../../Logistika/Domena/Logistika.md), [Proizvodnja](../../Proizvodnja/Domena/Proizvodnja.md) — se za pravilno delovanje zanaša na modul Skupno.

Zaradi tega mora biti modul **Skupno** konfiguriran **pred** uporabo katerekoli druge domene v platformi.

Primer šifrantov modula Skupno v domeni **Prodaja**:

![Primeri šifrantov Skupno](../Images/CommonCodeListsExamples.png "Primeri šifrantov Skupno")

> [!IMPORTANT]  
> Šifranti modula Skupno morajo biti **prvi korak konfiguracije** pri vzpostavitvi platforme.  
>
> Brez teh vrednosti domene [Prodaja](../../Prodaja/Domena/Prodaja.md), [Nabava](../../Nabava/Domena/Nabava.md), [Logistika](../../Logistika/Domena/Logistika.md) in [Sistemske nastavitve](../../Sistem/Nastavitve/Konfiguracija.md) ne morejo pravilno delovati.

## Kaj vključuje modul Skupno?

Modul Skupno vsebuje več kategorij skupnih šifrantov, ki se uporabljajo v celotnem sistemu:

- **Geografija in organizacijska struktura**  
- **Finančne in davčne nastavitve**  
- **Meritve in merske enote**  
- **Partnerji in poslovni zapisi**  
- **Besedilne predloge in vedenje uporabniškega vmesnika**

Ti šifranti predstavljajo osnovne gradnike, na katerih temeljijo druge domene.

### Geografija in organizacija

Te nastavitve določajo geografski in organizacijski kontekst podjetja in njegovih dokumentov.

- **[Države](../Šifranti/Države.md)** – določajo dovoljene države za naslove, dokumente, pravno oblikovanje in lokalizacijo.  
- **[Poslovni imenik](../Šifranti/PoslovniImenik.md)** – osrednja baza podjetij, dobaviteljev in drugih pravnih subjektov.

> [!IMPORTANT]  
> Države morajo biti konfigurirane pred nastavitvijo države organizacije v **Sistem → Konfiguracija → Organizacija** ali v **Nastavitvah skupnih tipov**.

### Finančne in valutne nastavitve

Te nastavitve vplivajo na vse denarne in finančne procese v domenah.

- **[Valute](../Šifranti/Valute.md)** – definirajo valute, ki so na voljo organizaciji.  
- **[Davčne stopnje](../Šifranti/DavčneStopnje.md)** – definicije DDV ali drugih davkov, uporabljenih v prodaji in nabavi.  
- **[Načini plačila](../../Prodaja/Šifranti/NačiniPlačila.md)** – plačilne metode, uporabljene v prodaji in financah.

> [!IMPORTANT]  
> Valute morajo biti ustvarjene tukaj **pred** izbiro v:  
> - Sistem → [Konfiguracija](../../Sistem/Nastavitve/Konfiguracija.md) → Nastavitve skupnih tipov  
> - dokumentih v domenah [Prodaja](../../Prodaja/Domena/Prodaja.md) in [Nabava](../../Nabava/Domena/Nabava.md)

### Merjenje in merske enote

Uporabljajo se v sredstvih, materialih, prodajnih dokumentih, nabavnih naročilih, logistiki in proizvodnji.

- **[Merske enote](../Šifranti/MerskeEnote.md)** – osnovne merske enote (kos, kg, m, …).

Pravilna konfiguracija zagotavlja doslednost količin, cen in zalog.

## Partnerji in poslovni zapisi

Zapisi o partnerjih so skupni vsem komercialnim procesom.

- **[Poslovni imenik](../Šifranti/PoslovniImenik.md)** – skupni imenik kupcev, dobaviteljev in poslovnih subjektov.  
- **[Banke](../Šifranti/Banke.md)** – definicije bank, uporabljene pri plačilnih navodilih.  
- **[Bančni računi organizacije](../../Prodaja/Šifranti/BančniRačuniOrganizacije.md)** – interni bančni računi podjetja za izdajanje računov.

Ti zapisi zagotavljajo enotno identifikacijo poslovnih partnerjev v vseh domenah.

## Besedila in predloge

Te nastavitve omogočajo enotno oblikovanje in vedenje dokumentov.

- **[Vnaprej določena besedila](../Šifranti/VnaprejDoločenaBesedila.md)** – ponovno uporabljiva besedila za ponudbe, račune, dobavnice in nabavne dokumente.

## Zakaj morajo biti šifranti Skupno konfigurirani najprej

Skoraj vsi procesi v platformi so odvisni od nastavitev Skupno:

| Področje | Odvisnost |
|--------|----------|
| **Sistem → Konfiguracija** | Zahteva [Države](../Šifranti/Države.md) in [Valute](../Šifranti/Valute.md) pred nastavitvijo organizacije |
| **Prodaja** | Zahteva [Valute](../Šifranti/Valute.md), [Davčne stopnje](../Šifranti/DavčneStopnje.md), [Merske enote](../Šifranti/MerskeEnote.md), [Načini plačila](../../Prodaja/Šifranti/NačiniPlačila.md) |
| **Nabava** | Zahteva [Poslovni imenik](../Šifranti/PoslovniImenik.md), [Države](../Šifranti/Države.md), [Valute](../Šifranti/Valute.md) |
| **Logistika** | Zahteva [Merske enote](../Šifranti/MerskeEnote.md), [Države](../Šifranti/Države.md), [Poslovni imenik](../Šifranti/PoslovniImenik.md) |
| **Proizvodnja** | Uporablja [Merske enote](../Šifranti/MerskeEnote.md) in [Poslovni imenik](../Šifranti/PoslovniImenik.md) |

Če modul Skupno ni pravilno konfiguriran, se lahko pojavijo:

- manjkajoče vrednosti v spustnih seznamih  
- nezmožnost ustvarjanja prodajnih ali nabavnih dokumentov  
- napačni davčni izračuni  
- nepravilno oblikovanje računov in dobavnic  
- napake v sistemski konfiguraciji  

> [!POZOR]  
> **Ne nadaljujte z uporabo domen [Prodaja](../../Prodaja/Domena/Prodaja.md), [Nabava](../../Nabava/Domena/Nabava.md), [Logistika](../../Logistika/Domena/Logistika.md) ali [Sistemske nastavitve](../../Sistem/Nastavitve/Konfiguracija.md), dokler niso ustvarjeni vsi zahtevani šifranti modula Skupno.**

---
