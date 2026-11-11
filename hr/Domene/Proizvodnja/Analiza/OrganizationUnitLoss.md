<!-- app_route: /production/analytics/organization-unit-loss -->
<!-- app_label: Organization unit loss -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/Proizvodnja/Analiza/OrganizationUnitLoss.md -->
<!-- canonical_source_title: Organization unit loss -->

# Organization unit loss

Stranica **Organization unit loss** pruža pregled svih evidentiranih proizvodnih gubitaka grupiranih po organizacijskim jedinicama. Nadzornicima i planerima omogućuje brz uvid u to koliko je neispravnih ili neupotrebljivih komada proizvedeno u pojedinoj organizacijskoj jedinici i iz kojih proizvodnih naloga gubici potječu.

Za pristup ovoj stranici otvorite **Proizvodnja / Analiza / Organization unit loss** u [navigaciji](../../../Zajednicko/UI/Navigacija.md).

![Organization unit loss](../Images/OrganizationUnitLossViewHR.png "Organization unit loss")

## Filtri

Za sužavanje rezultata koristite filtre na lijevoj strani:

- **Date** – odaberite datum ili raspon datuma za koji se prikazuju gubici.
- **Tag** – filtriranje gubitaka prema oznaci klasifikacije gubitka (pogledajte [Oznake klasifikacije gubitka (škarta)](../Upravljanje/OznakeKlasifikacijeGubitka.md)).

## Pregled gubitaka

Glavna tablica prikazuje gubitke grupirane po **organizacijskoj jedinici**.

Za svaku organizacijsku jedinicu prikazuje se:

- **Quantity** – ukupan broj evidentiranih neispravnih komada

Proširivanjem organizacijske jedinice prikazuju se povezani **proizvodni nalozi**, zajedno s podacima:

- **materijal** – materijal na koji se gubitak odnosi
- **proizvodni nalog** – izravna poveznica na nalog
- **Quantity** – broj neispravnih komada evidentiranih na tom nalogu

Gubici se mogu proširiti ili sažeti radi lakšeg pregleda.

## Napomene o korištenju

- Ovdje se prikazuju samo gubici evidentirani putem modula [*Izvedba*](../Dokumenti/Izvedba.md).
- Oznake koristite za analizu ponavljajućih vrsta nedostataka i poboljšanje kontrole kvalitete.
- Ovaj pogled pomaže prepoznati koji proizvodni nalozi ili radna područja najviše pridonose ukupnim gubicima.
