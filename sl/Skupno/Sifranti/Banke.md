# Banke

Šifrant **Banke** vsebuje finančne institucije, ki se lahko uporabljajo v dokumentih, kot so izdani računi, plačila in organizacijski bančni računi. Vsak zapis banke vsebuje ime, kodo BIC in državo, kar sistemu omogoča povezovanje z različnimi [poslovnimi partnerji](../../Skupno/Sifranti/PoslovniImenik.md) in njihovimi transakcijami ter pravilno sklicevanje na bančne podatke kjerkoli so potrebni.

Za dostop do šifranta Banke se pomaknite na **Prodaja / Upravljanje / Banke** v [navigaciji](../../Skupno/UI/Navigacija.md).

> [!NOTE]  
> **Predpogoji**  
> Pred upravljanjem zapisov bank zagotovite, da je šifrant [**Države**](../../Skupno/Sifranti/Drzave.md) pravilno konfiguriran.

## Shema

| Polje | Opis |
|------|------|
| **Ime** | Polno ime banke (obvezno). |
| **BIC** | Koda BIC (Bank Identifier Code), ki se uporablja za mednarodne transakcije (obvezno). |
| [**Država**](../../Skupno/Sifranti/Drzave.md) | Država, v kateri je banka registrirana (obvezno). |
| **Aktivna** | Označuje, ali je banka na voljo za uporabo v dokumentih (privzeto izbrano). |

## Upravljanje

Na tem zaslonu lahko pregledujete, dodajate in urejate banke, ki se uporabljajo v celotnem sistemu.

### Seznam bank

Seznam prikazuje vse evidentirane banke, vključno z njihovim **imenom**, **kodo BIC** in [**državo**](../../Skupno/Sifranti/Drzave.md).

![Seznam bank](../Images/Banks.png "Seznam bank")

Vsak zapis vključuje indikator stanja levo od imena:
- **Modra** označuje, da je banka aktivna
- **Siva** označuje, da je banka neaktivna

Za hitro filtriranje bank po kodi ali imenu lahko uporabite **iskalno vrstico**.

## Dejanja

Kliknite [akcijski gumb](../../Skupno/UI/AkcijskiGumb.md) za dodajanje nove banke.

### Dodaj novo banko

Izpolnite obvezna polja:
- **Ime**
- **BIC**
- **Država**

![Banke – nova](../Images/BanksNew.png "Dodaj novo banko")

## Brisanje

Kliknite **Izbriši** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se zapis trajno odstrani; sicer sistem ohrani obstoječe stanje.

> [!NOTE]
> Zapis banke je mogoče izbrisati le, če ni uporabljen v drugih sistemskih entitetah.

---
