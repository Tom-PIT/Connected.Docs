<!-- app_route: /management/warehouse/configuration -->
<!-- app_label: Konfiguracija logistike -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Upravljanje/KonfiguracijaLogistike.md -->
<!-- canonical_source_title: Konfiguracija logistike -->

# Konfiguracija logistike

Konfiguracija **Logistike** omogoča nastavitev vedenja zaloge, oblik zapisa serijskih številk in številčenja dokumentov. Vse spremembe se **samodejno shranijo**.

Za dostop do te strani pojdite na **Logistika / Upravljanje / Konfiguracija** v [navigaciji](../../../Skupno/UI/Navigacija.md).

![Konfiguracija logistike](../Images/LogisticsConfiguration.png)

## Nastavitve zaloge

| Polje | Opis |
|------|------|
| **Model številčenja** | Pravilo za porabo zaloge: <br> • **FIFO:** najprej se porabi najstarejša zaloga <br> • **LIFO:** najprej se porabi najnovejša zaloga <br> • **Uporabno do:** najprej se porabi zaloga z najzgodnejšim rokom uporabe |
| **Format serijske številke** | Oblika zapisa, ki se uporabi, ko sistem samodejno generira serijske številke. Na primer **{0:D10}** ustvari 10-mestno številko z vodilnimi ničlami: **0000000001**, **0000000002**, itd. |

![Izbira načina jemanja](../Images/LogisticsConfigurationItemsTakeDropdown.png)

> [!TIP]
> Uporabite dosleden format serijskih številk za lažje skeniranje in sledenje.

## Nastavitve številčenja dokumentov

Izberite model številčenja in format za logistične dokumente (Prevzemi, Izdaje, Medskladiščni prenosi itd.).

| Polje | Opis |
|------|------|
| **Način številčenja dokumenta** | • **Povečevanje vsako leto:** zaporedje se vsako leto ponastavi <br> • **Povečevanje:** globalno zaporedje, ki se nikoli ne ponastavi |
| **Oblika zapisa šifre dokumenta** | Vzorec, ki določa strukturo šifre dokumenta (npr. PREDPONA-LETO-ŠTEVILKA). |
