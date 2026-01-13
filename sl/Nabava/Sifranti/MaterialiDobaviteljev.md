# Materiali dobaviteljev

**Materiali dobaviteljev** predstavljajo seznam materialov, ki jih posamezni dobavitelji ponujajo vaši organizaciji. Vsak zapis povezuje obstoječ material iz področja **[Materiali](../../Sredstva/Domena/Materiali.md)** z določenim dobaviteljem ter vključuje dodatne informacije, kot so dobaviteljeva interna šifra materiala, cena in dobavni rok.

Ta šifrant zagotavlja, da procesi nabave pravilno prepoznajo, **kateri materiali so na voljo pri posameznem dobavitelju** in **pod kakšnimi pogoji**.

Za dostop do **Materialov dobaviteljev** pojdite na **Nabava / Šifranti / Materiali dobaviteljev** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Dobavitelj** | Dobavitelj, ki ponuja material. Mora obstajati v **[Poslovnem imeniku](../../Skupno/Sifranti/PoslovniImenik.md)** (obvezno). |
| [**Tip materiala**](../../Sredstva/Domena/Materiali.md) | Tip materiala ([**Surovina**](../../Sredstva/Sifranti/Surovine.md), [**Polizdelek**](../../Sredstva/Sifranti/Polizdelki.md), [**Izdelek**](../../Sredstva/Sifranti/Izdelki.md), [**Repro material**](../../Sredstva/Sifranti/ReproMateriali.md)). Mora ustrezati obstoječi vrsti materiala (obvezno). |
| [**Material**](../../Sredstva/Domena/Materiali.md) | Material, ki ga dobavitelj ponuja. Mora že obstajati v področju **Materiali** (obvezno). |
| **Dobaviteljeva šifra** | Interna oznaka materiala pri dobavitelju. |
| **Cena** | Neto cena, po kateri dobavitelj dobavlja material. |
| **Dobavni dostave (dni)** | Dobavni čas, izražen v številu dni. |

## Upravljanje

### Seznam materialov dobaviteljev

Uporabniški vmesnik prikazuje seznam vseh materialov dobaviteljev z naslednjimi podatki:

- Dobavitelj  
- Material (koda in ime)  
- Cena  

Na voljo je iskalno polje v zgornjem desnem kotu.

![Seznam materialov dobaviteljev](../Images/SupplierMaterialsList.png "Seznam materialov dobaviteljev")

### Filtri

Leva stranska vrstica vsebuje naslednje filtre:

- **Dobavitelj**  
- **Tip materiala**  
- **Entiteta**

Filtri omogočajo zoženje rezultatov glede na dobavitelja in kategorijo materiala.

### Meni

**Meni** v zgornjem desnem kotu ponuja eno dejanje:

- **Izvoz** – izvoz prikazanega seznama materialov dobaviteljev v CSV datoteko za analizo ali arhiviranje.

## Dejanja

Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md) za prikaz razpoložljivih dejanj:

- **Novo**  
- **Uvoz**

### Novo

Ustvari nov zapis materiala dobavitelja.  
Vnosni obrazec vključuje naslednja polja:

- Dobavitelj  
- Tip materiala  
- Material  
- Dobaviteljeva šifra  
- Cena  
- Dobavni dostave

![Nov material dobavitelja](../Images/SupplierMaterialsNew.png "Nov material dobavitelja")

Po vnosu zahtevanih podatkov kliknite **Dodaj**, da shranite zapis, ali **Prekliči**, da se vrnete na seznam.

### Uvoz

Funkcionalnost **Uvoz** omogoča množično ustvarjanje ali posodabljanje materialov dobaviteljev z uporabo preglednice.

Ta zaslon deluje podobno kot stran **[Uvoz materialov](../../Sredstva/Sifranti/UvozMaterialov.md)** in vključuje:

- izbiro vrste datoteke (CSV ali XLSX),  
- prenos vzorčne datoteke,  
- območje za povleci-in-spusti nalaganje,  
- predogled preteklih uvozov.

![Uvoz materialov dobaviteljev](../Images/SupplierMaterialsImport.png "Uvoz materialov dobaviteljev")

#### Struktura preglednice

Datoteka za uvoz materialov dobaviteljev mora vsebovati naslednje stolpce:

```
SupplierName,MaterialCode,Price,SupplierCode,DeliveryDate
```

Primer vrstice:

```
Rivermark Woodwork,CODE003,20,SupplierMaterial001,0
```

## Urejanje

Za urejanje obstoječega zapisa kliknite njegovo vrstico v seznamu. Sistem odpre pogled za urejanje, kjer lahko spremenite vsa polja.

Ko končate z urejanjem, kliknite **Shrani**. Če sprememb ne želite shraniti, kliknite **Prekliči**.

## Brisanje

Na zaslonu za urejanje kliknite **Izbriši**, da odprete potrditveno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se zapis materiala dobavitelja trajno odstrani.

> [!NOTE]
> Zapis materiala dobavitelja je mogoče izbrisati samo, če nanj ne kažejo drugi zapisi.

---
