<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Uvod/DvofaktorskaAvtentikacija.md -->
<!-- canonical_source_title: Dvofaktorska avtentikacija -->

# Dvofaktorska avtentikacija

Dvofaktorska avtentikacija (2FA) zagotavlja dodatno raven varnosti pri prijavi v platformo.

Ko je omogočena, sistem uporabniku pošlje začasno avtentikacijsko kodo na njegov e-poštni naslov. Uporabnik mora vnesti to kodo za dokončanje prijave.

> [!IMPORTANT]
> Dvofaktorska avtentikacija deluje samo, če:
> - je funkcionalnost omogočena na platformi
> - ima uporabnik nastavljen veljaven e-poštni naslov v **Sistem / [Uporabniki](../Domene/Sistem/Upravljanje/Uporabniki.md)**

## Konfiguracija

Obdobje veljavnosti avtentikacijske kode je mogoče nastaviti v:

**Sistem / Konfiguracija / Identity / Email 2FA**

Nastavitev določa, kako dolgo (v sekundah) ostane avtentikacijska koda veljavna, preden poteče.

## Postopek avtentikacije

1. Vnesite uporabniško ime in geslo.
2. Sistem pošlje avtentikacijsko kodo na vaš e-poštni naslov.
3. Odprite e-pošto in kopirajte prejeto kodo.
4. Prilepite kodo v zaslon za avtentikacijo.
5. Po uspešni potrditvi je dostop do platforme omogočen.
