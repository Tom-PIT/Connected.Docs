<!-- app_route: /production/analytics/loss-summary -->
<!-- app_label: Sažetak gubitka (škarta) -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/Proizvodnja/Analiza/SazetakGubitka.md -->
<!-- canonical_source_title: Sažetak gubitka (škarta) -->

# Sažetak gubitka (škarta)

Stranica **Sažetak gubitka (škarta)** pruža pregled neispravnih ili neupotrebljivih komada evidentiranih tijekom proizvodnje u odabranom razdoblju. Pomaže prepoznati najčešće vrste gubitaka i procijeniti njihov utjecaj na kvalitetu proizvodnje.

Za pristup ovoj stranici otvorite **Proizvodnja / Analiza / Sažetak gubitka (škarta)** u [navigaciji](../../../Zajednicko/UI/Navigacija.md).

![Sažetak gubitka (škarta)](../Images/LossSummaryViewHR.png "Sažetak gubitka (škarta)")

> [!TIP]
> Za potpuni prikaz analitike proizvodnje pogledajte video vodič **[Loss summary](https://www.youtube.com/watch?v=BnboA1WuUu0)**.

## Filtri

### Od / Do

Odaberite datumski raspon za koji se analiziraju zapisi o gubicima.

### Organizacijske jedinice

Filtriranje gubitaka prema određenim organizacijskim jedinicama.

### Fizički resursi

Filtriranje gubitaka prema strojevima ili drugim fizičkim resursima.

## Zbirne vrijednosti

Na vrhu stranice prikazuju se dva ključna pokazatelja:

### Total

Ukupan broj neispravnih ili neupotrebljivih komada evidentiranih u odabranom razdoblju.

### Prosječno

Prosječan broj neispravnih komada po operaciji ili po evidentiranom događaju (prema izračunu sustava).

## Grafikon raspodjele gubitaka

Ispod zbirnih vrijednosti stranica prikazuje:

- stupac koji predstavlja **broj gubitaka** po klasifikaciji gubitka
- krivulju **Cumulative percentage** (kumulativni postotak), koja pomaže uočiti vrste gubitaka s najvećim udjelom u ukupnim nedostacima

Grafikon pomaže prepoznati glavne izvore problema s kvalitetom i podržava Pareto analizu.

## Detalji gubitaka

Ispod grafikona detaljan popis prikazuje svaku klasifikaciju gubitka s brojem neispravnih komada evidentiranih u toj kategoriji.

Kategorije mogu uključivati bilo koje klasifikacije definirane u šifrarniku [**Oznake klasifikacije gubitka (škarta)**](../Upravljanje/OznakeKlasifikacijeGubitka.md).

Odabir retka može prikazati dodatne informacije, ovisno o konfiguraciji sustava.
