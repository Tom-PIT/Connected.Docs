<!-- app_route: /management/warehouse/material-analysis -->
<!-- app_label: Analiza materialov -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Upravljanje/AnalizaMaterialov.md -->
<!-- canonical_source_title: Analiza materialov -->

# Analiza materialov

Opredelite **analize ali preizkuse**, ki se lahko izvajajo na materialih (npr. kemijske, vizualne, dimenzijske kontrole). Ti zapisi se ponovno uporabljajo povsod, kjer je potrebno izbrati analizo materiala.

> [!NOTE]
> Novi zapisi so privzeto omogočeni, zato jih je mogoče uporabiti takoj.

> [!TIP]
> Za celovit prikaz si oglejte video vodič  
> **[Analiza materialov](https://www.youtube.com/watch?v=AgCVA8labrw)**.

Za dostop do **Analize materialov** pojdite na  
**Logistika / Upravljanje / Analiza materialov** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|-------|------|
| **Tip** | Tip materiala (izdelek, polizdelek, surovina ali repro material) (obvezno). |
| **[Material](../../Sredstva/Domena/Materiali.md)** | Konkreten material, za katerega velja analiza (obvezno). |
| **Navodila** | Postopek in kriteriji sprejemljivosti za izvedbo analize (obvezno). |
| **Omogočeno** | Določa, ali je analiza na voljo za izbor. Privzeto označeno. |

## Seznamski pogled

Seznam prikazuje vse definirane analize skupaj z njihovim **Tipom**, **Materialom** in stanjem **Omogočeno**.  
Za filtriranje po tipu ali materialu uporabite iskalno polje.

![Seznam analiz materialov](../Images/MaterialAnalysisManagementList.png "Seznam analiz materialov")

Vsak zapis vsebuje indikator stanja na levi strani imena:
- **Modra** barva označuje, da je analiza aktivna
- **Siva** barva označuje, da je analiza neaktivna

## Dejanja

1. Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md) za dodajanje nove analize.

   ![Nova analiza materiala](../Images/MaterialAnalysisManagementNew.png "Nova analiza materiala")

2. Izpolnite obrazec:
   - **Tip** – izberite kategorijo analize.
   - **Material** – izberite ciljni material.
   - **Navodila** – opišite, kako se analiza izvede in ovrednoti.
   - **Omogočeno** – pustite označeno, da bo analiza takoj na voljo.

3. Kliknite **Dodaj** za shranjevanje ali **Prekliči** za vrnitev na seznam.

## Urejanje

Kliknite zapis v seznamu, da ga odprete v načinu urejanja.  
Posodobite polja in kliknite **Shrani** ali **Prekliči**, da zavržete spremembe.

## Brisanje

Kliknite **Izbriši** na zaslonu za urejanje, da odstranite analizo.
