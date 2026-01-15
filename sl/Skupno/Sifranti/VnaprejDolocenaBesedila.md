# Prednastavljena besedila

Šifrant **Prednastavljena besedila** vsebuje vnaprej pripravljene besedilne predloge, ki jih je mogoče vstavljati v različne komercialne dokumente — kot so dobavnice, izdani računi, ponudbe ali dobavni nalogi. Ta besedila omogočajo hitro in dosledno dodajanje pogosto uporabljenih navodil, opomb ali besedil, specifičnih za kupca.

Ta stran je na voljo v domenah **Prodaja** in **Nabava**. Za dostop pojdite na **Upravljanje / Stroškovna mesta** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Entiteta** | Vrsta dokumenta, na katero se prednastavljeno besedilo nanaša (obvezno): <br>• [**Dobavnica**](../../Prodaja/Dokumenti/Dobavnice.md) <br>• [**Izdani račun**](../../Prodaja/Dokumenti/IzdaniRacuni.md) <br>• [**Ponudba**](../../Prodaja/Dokumenti/Ponudbe.md) <br>• [**Nabavni nalog**](../../Nabava/Dokumenti/NabavniNalogi.md) |
| **Koda** | Kratek identifikator za sklicevanje na prednastavljeno besedilo (obvezno). |
| **Besedilo** | Celotna vsebina besedila, ki se vstavi v izbrano vrsto dokumenta (obvezno). |
| **Omogočeno** | Označuje, ali je prednastavljeno besedilo aktivno in na voljo za uporabo. |

## Upravljanje

### Seznamski pogled

Seznam prikazuje vsa prednastavljena besedila skupaj z **entiteto**, **šifro** in **besedilom**. Seznam lahko filtrirate po stanju **Omogočeno / Onemogočeno** ali po **entiteti**.

![Prednastavljena besedila](../Images/PredefinedTexts.png "Seznam prednastavljenih besedil")

Vsak zapis vključuje indikator stanja levo od imena:
- **Modra** označuje, da je besedilo aktivno
- **Siva** označuje, da je besedilo neaktivno

Na voljo je **iskalno polje** za hitro iskanje po kodi ali vsebini besedila.

### Dodaj novo prednastavljeno besedilo

Kliknite **akcijski gumb**, da ustvarite novo prednastavljeno besedilo.

![Dodaj prednastavljeno besedilo](../Images/PredefinedTextsNew.png "Dodaj prednastavljeno besedilo")

Izberite **entiteto**, vnesite **šifro** in napišite celotno **besedilo**. Po potrebi lahko zapis omogočite ali onemogočite.

Možnosti entitet:

![Entitete prednastavljenih besedil](../Images/PredefinedTextsEntityFilter.png "Možnosti entitet")

### Urejanje

Kliknite katerikoli zapis na seznamu, da odprete zaslon za urejanje.  
Tam lahko spremenite entiteto, šifro ali besedilo.

### Brisanje

Kliknite **Izbriši**, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se zapis trajno odstrani; sicer sistem ohrani obstoječe stanje.

> [!NOTE]  
> Prednastavljeno besedilo je mogoče izbrisati le, če ni uporabljeno v odvisnih dokumentih.

---
