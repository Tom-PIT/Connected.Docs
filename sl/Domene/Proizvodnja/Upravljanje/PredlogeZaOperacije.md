<!-- app_route: /management/processes/protocol-operation-templates -->
<!-- app_label: Predloge za operacije -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Proizvodnja/Upravljanje/PredlogeZaOperacije.md -->
<!-- canonical_source_title: Predloge za operacije -->

# Predloge za operacije

Predloge za operacije definirajo **ponovno uporabne predloge operacij**, ki jih lahko hitro vstavite v procese. Omogočajo standardizacijo poimenovanja, opisov, vpliva časa, oznak in drugih lastnosti operacij v sistemu za **Proizvodnjo** in **Vzdrževanje** (npr. montažni korak, pregled, čiščenje).

Za dostop do dokumentov **Predloge za operacije** pojdite na **Proizvodnja / Upravljanje / Predloge za operacije** v [navigaciji](../../../Skupno/UI/Navigacija.md).

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Operation templates](https://www.youtube.com/watch?v=Cm8RYdO0f6E)**.

## Shema

| Polje | Opis |
|------|------|
| **Šifra** | Enolična identifikacijska oznaka predloge. |
| **Naziv** | Naziv predloge, ki je prikazan pri izbiri predloge operacije. |
| **Organizacijska enota** | Organizacijska enota, za katero je predloga namenjena (npr. proizvodna linija ali vzdrževalna ekipa). Glejte **[Organizacijske enote](OrganizacijskeEnote.md)**. |
| **Opis** | Opis operacije in namen uporabe predloge. |
| **Vpliv časa** | Določa, ali je čas operacije **vključen** ali **izključen** iz skupnega trajanja procesa. |
| **Članek** | Neobvezen članek z navodili ali dokumentacijo, vezano na predlogo. Glejte **[Bazo znanja](../../Znanje/BazaZnanja/BazaZnanja.md)**. |
| **Oznake** | Oznake za klasifikacijo in lažje iskanje predlog (npr. Proizvodnja, Vzdrževanje, Varnost). |

## Seznamski prikaz

Stran prikazuje vse obstoječe predloge za operacije, skupaj z:

- **Šifro in nazivom**
- **Organizacijsko enoto**
- **Opisom**
- **Oznakami**

![Seznam predlog za operacije](../Images/ProtocolOperationInstanceTemplateListSL.png)

Klik na posamezno vrstico odpre predlogo za urejanje.

## Ustvariti novo predlogo za operacijo

1. Kliknite akcijski gumb in izberite **Dodaj predlogo za operacijo**.

2. Izpolnite naslednja polja:
   - **Šifra**
   - **Naziv**
   - **Organizacijska enota**
   - **Opis**
   - **Vpliv časa**
   - **Članek** (neobvezno)
   - **Oznake**

![Nova predloga za operacijo](../Images/ProtocolOperationInstanceTemplateNewSL.png "Nova predloga za operacijo")

3. Kliknite **Dodaj**, da shranite predlogo.

## Urediti predlogo za operacijo

1. Kliknite obstoječo predlogo v seznamu.
2. Po potrebi posodobite:
   - Naziv
   - Organizacijsko enoto
   - Opis
   - Vpliv časa
   - Članek
   - Oznake
3. Kliknite **Shrani**, da uveljavite spremembe.

## Uporaba predlog pri ustvarjanju operacij

Predloge za operacije lahko uporabite neposredno pri dodajanju novih operacij v različico procesa.

Postopek:

1. Odprite želeno **proces in verzijo**
2. Pojdite na **Operacije**
3. Kliknite akcijski gumb → **Iz predloge**
4. Izberite predlogo v spustnem seznamu **Predloga operacije**

![Izbira predloge operacije](../Images/ProtocolOperationInstanceTemplateNewOperationSL.png)

Sistem samodejno izpolni vnaprej definirana polja, ki jih lahko po potrebi še prilagodite.

## Izbrisati predlogo za operacijo

Kliknite vrstico predloge, da odprete stran za urejanje, nato izberite **Izbriši**.

Po potrditvi bo predloga trajno odstranjena iz sistema. Brisanje predloge ne vpliva na obstoječe operacije, ki so bile ustvarjene na njeni podlagi.