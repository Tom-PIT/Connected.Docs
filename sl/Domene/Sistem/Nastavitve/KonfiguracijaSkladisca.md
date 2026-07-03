<!-- app_route: /management/configuration -->
<!-- app_label: Sistemske nastavitve -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Sistem/Nastavitve/KonfiguracijaSkladisca/ -->
<!-- canonical_source_title: Konfiguracija skladišča -->

# Konfiguracija skladišča

Nastavitve konfiguracije skladišča omogočajo prilagoditev načina, kako sistem obravnava različne skladiščne operacije, kot so upravljanje zalog in GS1 nastavitve. Do teh nastavitev lahko dostopate in jih urejate v meniju **Warehouse** v stranski vrstici.

![Warehouse Settings Nav](../Images/WarehouseSettingsNavV2.png "Warehouse Settings Navigation")

## GS1 settings

**GS1 parser** nastavitev določa, kako sistem interpretira GS1 črtne kode pri skeniranju artiklov v procesih, kot sta prejem ali proizvodnja.

### GS1 parser separator character

![Warehouse Settings G S1 Parser](../Images/WarehouseSettingsGS1Parser.png "Warehouse Settings GS1 Parser")

Določa ločilni znak, ki se uporablja za razmejevanje GS1 podatkovnih elementov (Application Identifiers) znotraj skenirane črtne kode. Ta znak se uporablja za zaznavanje konca polj spremenljive dolžine (npr. serijska/lot številka).

> [!IMPORTANT]
> Vrednost mora biti vnesena v Unicode (šestnajstiški) obliki (npr. **0x001D**).

Za vnos GS1 identifikacijskih podatkov pojdite na **Warehouse / Settings / GS1 settings** v stranskem meniju (glej spodaj).

## Settings

Warehouse settings omogočajo konfiguracijo ključnih parametrov aplikacije, vključno s povezavo na bazo podatkov, GS1 identifikacijo, vedenjem zalog in skladiščnimi pravili.

![Warehouse Settings Settings](../Images/WarehouseSettings.png "Warehouse Settings")

### Email list

V tem razdelku določite nastavitve povezane z e-pošto (npr. prejemniki obvestil ali sistemskih sporočil).

### GS1 Settings

Nastavi GS1 identifikacijo, ki se uporablja za generiranje in razčlenjevanje črtnih kod.

- **GS1 Identity** – GS1 predpona podjetja, dodeljena s strani GS1 organizacije.
Ta vrednost se uporablja pri generiranju GS1 skladnih kod, kot so:
	- GTIN (šifre izdelkov)
	- SSCC (logistične enote)

### Inventory

- **Show theoretical column** – Če je omogočeno, se v statusu osnutka dokumenta prikaže stolpec teoretične količine.

### Warehouse location settings

- **Disallow warehouse location from a different warehouse on inter move documents** – Prepreči izbiro lokacij, ki pripadajo drugemu skladišču pri kreiranju [inter-warehouse](../../Logistika/Dokumenti/MedSkladiscniPromet.md) premikov.

