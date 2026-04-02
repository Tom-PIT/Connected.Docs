<!-- app_route: /time-logs/management -->
<!-- app_label: Dnevnik prisotnosti – Upravljaj -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Viri/Pregledi/DnevnikPrisotnostiUpravljaj.md -->
<!-- canonical_source_title: Dnevnik prisotnosti – Upravljaj -->

# Dnevnik prisotnosti – Upravljaj

Pogled **Dnevnik prisotnosti – Upravljaj** je namenjen **sprotnemu beleženju prisotnosti in dnevnemu evidentiranju časa**.  
Zaposlenim omogoča beleženje začetka in konca dela, odmorov, službenih poti, zasebnega časa ter hiter dostop do odsotnosti in potnih nalogov.

Za dostop do pogleda **Dnevnik prisotnosti – Upravljaj** pojdite na **Viri / Dnevnik prisotnosti / Upravljaj** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

![Dnevnik prisotnosti – upravljaj](../Images/TimeLogsManageSL.png "Dnevnik prisotnosti – upravljaj")

## Namen pogleda

Ta pogled je primarno namenjen **dnevnim prijavam in odjavam** ter sprotnemu spremljanju delovnega časa.

Tipični primeri uporabe vključujejo:

- beleženje začetka in konca delovnega dne,
- evidentiranje odmora (npr. malica),
- beleženje službenih poti in zasebnega časa,
- hiter pregled današnje prisotnosti,
- hiter dostop do dejanj, povezanih z odsotnostmi (dopust, bolniška odsotnost) in potnimi nalogi.

## Tipičen potek na lokaciji (čitalec kartic)

V številnih okoljih se ta pogled uporablja skupaj s **fizičnim čitalcem kartic** (na primer ob vhodu v objekt).

Tipičen potek je naslednji:

1. Zaposleni **prisloni kartico** ob prihodu na delo.  
2. Sistem zabeleži **začetek delovnega dne**.  
3. Ob ponovnem pristopu kartice se prikažejo **gumbi za beleženje časa**.  
4. Zaposleni izbere dejanje (na primer **Malica**).  
5. Po koncu malice ponovno prisloni kartico, kar zaključi malico in nadaljuje **Delo**.  
6. Ob koncu dneva zaposleni prisloni kartico in izbere **Odjava**, s čimer zaključi delovni dan.

V tem primeru zaposleni **ne uporablja neposredno uporabniškega vmesnika**, vendar so vsa dejanja vidna tudi v pogledu **Dnevnik prisotnosti – Upravljaj**.

## Oddaljena ali računalniška uporaba

V drugih okoljih (na primer **delo na daljavo** ali pisarniško delo) se ista dejanja izvajajo neposredno prek računalnika.

V tem primeru zaposleni:

- odpre pogled **Dnevnik prisotnosti – Upravljaj**,
- uporabi razpoložljive gumbe za:
  - začetek dela,
  - beleženje malice ali zasebnega časa,
  - zaključek delovnega dne.

S tem je zagotovljena enaka logika beleženja prisotnosti ne glede na lokacijo dela.

> [!NOTE]
> Dejanja beleženja časa morda niso na voljo vsem uporabnikom prek računalnika.  
> V mnogih okoljih se prisotnost primarno beleži prek **fizičnega čitalca kartic**.  
>  
> V nekaterih primerih (na primer delo na daljavo) so ista dejanja na voljo tudi neposredno v aplikaciji.

## Podatki v glavi zaslona

Na vrhu zaslona so prikazane naslednje informacije:

- **Ime zaposlenega**
- **Trenutno stanje** (na primer *Aktivno – Delo*)
- **Trenutni datum**
- **Čas prve prijave**
- **Čas zadnje odjave**
- **Današnji skupni čas**
- **Skupni čas za izbrano obdobje**

Ta razdelek omogoča hiter pregled prisotnosti in poteka delovnega dne.

## Akcije beleženja časa

Gumb **Prijava** se uporablja za začetek delovnega časa.

![Time Logs Manage Log In](../Images/TimeLogsManageLogIn.png)

Po kliku se začne beleženje **delovnega časa**, hkrati pa postanejo na voljo dodatne akcije:

- **Odjava** – Zaključi trenutno delovno sejo
- **Malica** – Zabeleži čas za malico ali odmor
- **Službena pot** – Zabeleži čas službene poti
- **Privat** – Zabeleži zasebni čas med delovnim dnevom

![Time Logs Manage Other Actions](../Images/TimeLogsManageLogButtonsSL.png)

Izbira akcije takoj posodobi status uporabnika in zabeleži ustrezen časovni vnos.

> [!NOTE]
> Gumb **Prijava** ni na voljo vsem uporabnikom. V nekaterih delovnih okoljih je **nadomeščen s prijavo preko kartice** z uporabo fizičnega čitalca kartic (na primer na vhodu).  
> V okoljih, kjer uporabniki beležijo čas neposredno na računalniku (na primer delo na daljavo ali pisarniško delo), je ta gumb lahko na voljo tudi v aplikaciji.

### Kako deluje

- S klikom na **Prijava** se začne beleženje **delovnega časa**
- Na voljo postanejo dodatni gumbi (npr. **Malica**, **Službena pot**, **Privat**)
- Izbira ene izmed teh akcij:
  - **Ustavi trenutno beleženje delovnega časa**
  - Začne beleženje izbrane aktivnosti (npr. **Malica**)
- Ponovni klik na **Prijava**:
  - Zaključi trenutno aktivnost (npr. malico)
  - Nadaljuje beleženje **delovnega časa**

> [!NOTE]
> Razpoložljive akcije se lahko razlikujejo glede na nastavitve in pravila organizacije.

#### Primer

1. Uporabnik klikne **Prijava** → začne se beleženje delovnega časa.  
2. Uporabnik klikne **Malica** → beleženje delovnega časa se ustavi in začne se beleženje malice.
3. Po malici uporabnik ponovno klikne **Prijava** → malica se zaključi in beleženje delovnega časa se nadaljuje.
4. Ko uporabnik zaključi dan, pritisne **Odjava**, kar ustavi delovni čas in zaključi dan.

## Dejanja za dopust in odsotnosti

Iz tega pogleda imajo uporabniki tudi neposreden dostop do dejanj, povezanih z odsotnostmi in potovanji.

Klik na dejanje, povezano z odsotnostjo (na primer **Dopust** ali **Bolniška odsotnost**), odpre pogovorno okno za vnos odsotnosti.

![Pogovorno okno za dopust](../Images/TimeLogsManageLeaveSL.png "Dodaj dopust")

V tem pogovornem oknu lahko uporabnik:

- izbere datuma **Od** in **Do**,
- doda neobvezen **Komentar**,
- izbere **Tip odsotnosti** (pri bolniški odsotnosti),
- potrdi vnos.

Zabeležene odsotnosti se samodejno prikažejo v dnevniku prisotnosti in povzetkih.

Klik na **Potni nalogi** odpre dokumente za urejanje službenih poti:

- **[Potni nalogi](../Dokumenti/PotniNalogi.md)**

Klik na **Pregled** odpre podroben pregled časovnih vnosov za izbrano obdobje:

- **[Dnevnik prisotnosti – Pregled](DnevnikPrisotnostiPregled.md)**

Ta dejanja omogočajo upravljanje prisotnosti, odsotnosti in potovanj neposredno iz konteksta beleženja časa.