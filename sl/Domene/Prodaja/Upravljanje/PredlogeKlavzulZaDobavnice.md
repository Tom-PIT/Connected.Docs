<!-- app_route: /management/sales/delivery-note-clause-templates -->
<!-- app_label: Predloge klavzul za dobavnice -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Prodaja/Upravljanje/PredlogeKlavzulZaDobavnice.md -->
<!-- canonical_source_title: Predloge klavzul za dobavnice -->

# Predloge klavzul za dobavnice

Šifrant **Predloge klavzul za dobavnice** omogoča definiranje naborov klavzul (predlog), ki se izpišejo na dobavnicah za posamezna podjetja. Predloga vsebuje eno ali več klavzul – kot so pravna obvestila, izjave o omejitvi odgovornosti ali potrditve dobave – ki se na dobavnici izpišejo na vrhu ali dnu dokumenta v določenem zaporedju.

Za dostop do te strani pojdite na **Prodaja / Šifranti / Predloge klavzul za dobavnice** v [navigaciji](../../../Skupno/UI/Navigacija.md).

> [!NOTE]  
> **Predpogoji**  
> Pred ustvarjanjem predlog klavzul zagotovite, da je izpolnjeno naslednje:  
> • Partnersko podjetje obstaja v šifrantu [**Poslovni imenik**](../../../Skupno/Upravljanje/PoslovniImenik.md).  
> • Besedilo klavzule obstaja v šifrantu [**Vnaprej določena besedila**](../../../Skupno/Upravljanje/VnaprejDolocenaBesedila.md) (entiteta: *Dobavnica*).

## Shema

### Polja predloge  
| Polje | Opis |
|------|------|
| **Podjetje** | Podjetje, za katerega velja predloga klavzul. Izbira iz šifranta [Poslovni imenik](../../../Skupno/Upravljanje/PoslovniImenik.md). (obvezno) |

### Polja klavzul (znotraj predloge)  
| Polje | Opis |
|------|------|
| **Lokacija** | Mesto izpisa klavzule na dobavnici (zgoraj ali spodaj). |
| **Vrstni red** | Zaporedje prikaza klavzule (npr. 1, 2, 3 …). |
| **Klavzula** | Vnaprej določeno besedilo iz šifranta [Vnaprej določena besedila](../../../Skupno/Upravljanje/VnaprejDolocenaBesedila.md) (entiteta = *Dobavnica*). |

## Upravljanje

### Seznam

Seznam prikazuje vse obstoječe predloge klavzul, združene po podjetjih:

![Seznam predlog klavzul za dobavnice](../Images/ClauseTemplatesDeliveryNotes.png "Seznam predlog klavzul za dobavnice")

S klikom na **Klavzule** odprete seznam klavzul za izbrano predlogo. Za iskanje po imenu podjetja lahko uporabite polje **Iskanje**.

## Dejanja

### Ustvariti novo predlogo dobavnice

Kliknite akcijski gumb, da ustvarite novo predlogo. Zahtevano je le eno polje:

![Dodaj predlogo](../Images/ClauseTemplatesDeliveryNotesNew.png "Dodajanje predloge")

Po dodajanju predloge morate klikniti **Klavzule**, da odprete urejevalnik klavzul.

![Gumb Klavzule](../Images/ClauseTemplatesDeliveryNotesClausesButton.png "Gumb Klavzule")

### Dodati klavzul v predlogo

V urejevalniku klavzul z akcijskim gumbom dodajte novo klavzulo. Izberite:
- **Lokacija** – mesto izpisa klavzule na dobavnici  
- **Zaporedna številka** – vrstni red prikaza  
- **Klavzula** – vnaprej določeno besedilo  

![Dodaj klavzulo](../Images/ClauseTemplatesDeliveryNotesClausesNew.png "Dodajanje klavzule")

#### Seznam klavzul

Vse klavzule, dodeljene predlogi, so prikazane v pravilnem zaporedju:

![Seznam klavzul](../Images/ClauseTemplatesDeliveryNotesClausesList.png "Seznam klavzul")

Zaporedje lahko spremenite z urejanjem vrednosti **Zaporedna številka**.

### Urediti predlogo dobavnice in klavzule

S klikom na **ime podjetja** odprete predlogo. S klikom na posamezno klavzulo lahko uredite njeno lokacijo, zaporedje ali pripadajoče besedilo.

### Izbrisati predlogo dobavnice

Kliknite predlogo, ki jo želite izbrisati, nato kliknite **Izbriši**, da se odpre potrditveno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Ob potrditvi se zapis trajno izbriše, v nasprotnem primeru ostane nespremenjen.

> [!NOTE]  
> Predlogo klavzul ali posamezno klavzulo je mogoče izbrisati le, če ni zahtevana v odvisnih poslovnih procesih.

---
