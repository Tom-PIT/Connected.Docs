<!-- app_route: /management/ledger/configuration -->
<!-- app_label: Konfiguracija -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/Racunovodstvo/Upravljanje/GlavnaKnjiga/Konfiguracija.md -->
<!-- canonical_source_title: Konfiguracija -->

# Konfiguracija

Konfigurirajte postavke **glavne knjige** koje utječu na numeriranje dokumenata. Promjene se spremaju automatski.

Ovoj stranici pristupate odabirom **Računovodstvo / Glavna knjiga / Upravljanje / Konfiguracija** u [navigaciji](../../../../Zajednicko/UI/Navigacija.md).

![Konfiguracija glavne knjige](../../Images/GlavnaKnjigaKonfiguracijaHR.png "Konfiguracija glavne knjige")

## Postavke numeriranja dokumenata

Postavke su odvojene za **Temeljnice** i **Bankovni izvodi**. Za svaku vrstu dokumenta odaberite model numeriranja i oblik zapisa oznake.

| Polje | Opis |
|------|-------------|
| **Način numeriranja dokumenta** | • **Povećanje svake godine:** numeriranje počinje ispočetka na početku svake godine. <br> • **Povećanje:** jedan neprekidni niz bez godišnjeg resetiranja. |
| **Oblik zapisa oznake dokumenta** | Predložak koji određuje strukturu oznake dokumenta. |

Na primjer, oblik zapisa **JRL-{0:yyyy}-{1:D8}** daje oznake poput JRL-2026-00000108 za temeljnice.

> [!NOTE]
> Model numeriranja i oblik zapisa primjenjuju se odmah nakon promjena. Postojeći dokumenti se ne numeriraju iznova.
