<!-- app_route: /sitemap/quality -->
<!-- app_label: Kvaliteta -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Kvaliteta/ -->
<!-- canonical_source_title: Kvaliteta -->

# Kvaliteta

Domena **Kvaliteta** zagotavlja osredotočen delovni prostor za vizualizacijo in upravljanje operativnih **kontrolnih listov**, ki se uporabljajo v proizvodnji in vzdrževanju. Združuje način definiranja kontrolnih listov (prek predlog), njihovo izvajanje s strani operaterjev ter pregled skladnosti in sledljivosti.

To domeno uporabite za:
- spremljanje aktivnih izvajanj kontrolnih listov v proizvodnji ali vzdrževanju
- pregled in analizo zaključenih kontrolnih listov za zagotavljanje skladnosti in stalne izboljšave
- dostop do in vzdrževanje definicij kontrolnih listov, ki se uporabljajo v vsakodnevnem delovanju

Za dostop do domene **Kvaliteta** se pomaknite na **Kvaliteta** v [navigaciji](../../Skupno/UI/Navigacija.md).

![Zemljevid domene Kvaliteta](Images/QualityDomainSitemapSL.png)

> [!NOTE]
> Razpoložljive domene so odvisne od konfiguracije in poslovnega modela posameznega podjetja.

## Kaj vključuje domena Kvaliteta?

![Pregled domene Kvaliteta](Images/QualityDomainOverviewSL.png "Pregled domene Kvaliteta")

Domena je strukturirana v dve funkcionalni področji:

- **Upravljanje** – konfiguracija in vzdrževanje definicij kontrolnih listov, ki se uporabljajo v proizvodnji in vzdrževanju.
  - [**Kontrolne liste**](../Kvaliteta/Upravljanje/KontrolneListe.md) — upravljanje predlog kontrolnih listov (struktura, koraki, kriteriji in mejne vrednosti). Gre za isti šifrant, ki je na voljo v domenah[**Proizvodnja**](../Proizvodnja/README.md) in [**Vzdrževanje**](../Vzdrzevanje/README.md) in se tam tudi centralno vzdržuje.
  - [**Merske enote**](../../Skupno/Upravljanje/MerskeEnote.md) — upravljanje merskih enot, ki se uporabljajo v kriterijih kontrolnih listov (npr. temperatura v °C, tlak v bar). Ta šifrant je del skupnih nastavitev in je dostopen tudi v drugih domenah.

> [!NOTE]
> Urejanje predlog kontrolnih listov se izvaja v proizvodnem šifrantu: [Kontrolni listi](../Kvaliteta/Upravljanje/KontrolneListe.md). Domena **Kvaliteta** se osredotoča na spremljanje aktivnih in zaključenih izvajanj.

> [!TIP]
> Oglejte si [**Kako ustvariti kontrolni list**](Upravljanje/KontrolniListUstvarjanje.md) za vodnik po korakih za ustvarjanje teh dokumentov.

- **Pogledi** – upravljanje in analiza izvajanj kontrolnih listov v realnem času ter zgodovinskih podatkov.
  - [**Aktivne kontrolne liste**](Pregledi/AktivneKontrolneListe.md) — pregled vseh kontrolnih listov, ki so trenutno v teku ali čakajo na zaključek. Tipični stolpci vključujejo ime kontrolnega lista, proces/sredstvo, odgovorno osebo, čas začetka, rok in status. Pogosta dejanja: odpiranje zapisa, nadaljevanje izvajanja ali označitev kot zaključenega (glede na dovoljenja).
  - [**Zaključene kontrolne liste**](Pregledi/ZakljuceneKontrolneListe.md) — pregled zaključenih kontrolnih listov z rezultati, časovnimi žigi, odgovornimi uporabniki in morebitnimi zabeleženimi neskladnostmi. Podpira filtriranje (časovna obdobja, procesi, organizacijske enote, rezultati) in izvoz za potrebe revizij.

![Pogledi domene Kvaliteta](Images/QualityDomainViewsSL.png "Pogledi domene Kvaliteta")
