# Izvedba – Hitri uporabniški vodnik

Ta vodnik prikazuje **osnovne korake** za izvajanje proizvodnje na zaslonu **Izvedba**.

> [!NOTE]
>
> Za več informacij in podrobnosti si oglejte celotno dokumentacijo **[Izvedba](Izvedba.md)**.

## 1. Izberite proizvodni nalog

Ko odprete **Izvedbo**, izberite proizvodni nalog in operacijo, na kateri boste delali.  
Če nič ni izbrano, vas bo zaslon pozval k izbiri **proizvodnega naloga**.

![Prazna stran izvedbe](../Images/ExecutionPageEmpty.png "Izberite proizvodni nalog")

## 2. Zaženite operacijo

Delo lahko začnete na dva načina:

### Možnost A — pritisnite Začni
Pritisnite **Začni**, da se začne merjenje časa in delo na operaciji.

![Zgornji kontrolniki izvedbe](../Images/ExecutionTop.png "Gumbi Začni / Premor / Ustavi")

### Možnost B — pritisnite Proizvedi
S pritiskom na **Proizvedi** se operacija **samodejno zažene**, tudi če ne spremenite količine.

## 3. Proizvajajte kose

1. Vnesite število proizvedenih kosov (npr. **1**).  
2. Pritisnite **Proizvedi**.  
3. Sistem posodobi:  
   - proizvedeno količino  
   - preostalo količino  

![Korak izvedbe 1](../Images/ExecutionStep1.png)

Postopek ponovite vsakič, ko dokončate nove kose.

> **OPOMBA**  
> Po potrebi preverite **Navodila**:  
> - tapnite **Navodila**, da si ogledate korake sestave, slike ali opombe, specifične za operacijo.

## 4. Izpolnite kontrolne sezname kakovosti (če je potrebno)

[Kontrolne liste in nadzor kakovosti](Izvedba.md#kontrolne-liste-in-kakovost) so enostavni zaporedni pregledi, ki pomagajo zagotavljati varno delo in pravilno kakovost izdelkov. Kontrolna lista se lahko prikaže ob začetku, med delom ali pred zaključkom – odvisno od nastavitve operacije.

1. Sledite korakom, prikazanim na zaslonu.  

   ![Kontrolna lista kakovosti](../Images/ExecutionStep1Checklist.png "Kontrolna lista kakovosti")

2. Dokončajte vse korake in pritisnite **Zaključi**.  
3. Če morate kontrolno listo ponoviti:
   1. Odprite akcijski meni z [**akcijskim gumbom**](../../../Skupno/UI/AkcijskiGumb.md).
   2. Vstopite v razdelek **[Kakovost](Kvaliteta.md)**.
   3. Pri želeni kontrolni listi pritisnite **Ponovi**.

> [!NOTE]
> Operacije ni mogoče ustaviti, če obvezna kontrolna lista ni dokončana.

## 5. Zabeležite slabe kose (če je potrebno)

1. Odprite akcijski meni z [**akcijskim gumbom**](../../../Skupno/UI/AkcijskiGumb.md).
2. Vstopite v razdelek **[Slabi kosi](Izvedba.md#slabi-kosi)**.  
3. Vnesite količino slabih kosov.  
4. Izberite razlog za izmet.  
5. Potrdite z rumenim gumbom **Izmet**.

## 6. Zabeležite porabo materiala

To uporabite, kadar se med operacijo porablja material:

1. Odprite akcijski meni z [**akcijskim gumbom**](../../../Skupno/UI/AkcijskiGumb.md).
2. Vstopite v razdelek **[Poraba](Izvedba.md#poraba)**.  
3. Skenirajte, vnesite ali izberite material.  
4. Vnesite porabljeno količino.  
5. Potrdite.

## 7. Zabeležite zastoje (če je potrebno)

1. Odprite akcijski meni z [**akcijskim gumbom**](../../../Skupno/UI/AkcijskiGumb.md).
2. Vstopite v razdelek **[Zastoj](Izvedba.md#zastoj)**.
3. Zaženite in ustavite merjenje zastoja.  
4. Izberite razlog zastoja.  
5. Po potrebi prilagodite čase.  
6. Shranite.

To uporabite za vsako prekinitev, npr. čakanje na material ali okvaro stroja.

## 8. Zabeležite delo (delovni čas)

1. Odprite akcijski meni z [**akcijskim gumbom**](../../../Skupno/UI/AkcijskiGumb.md).
2. Po potrebi vstopite v razdelek **[Delo](Izvedba.md#delo)**.

![Vnos dela](../Images/ExecutionEffortPage.png "Vnos dela")

### Samodejno:
Pritisnite **Začni** → delajte → pritisnite **Ustavi**.

### Ročno:
Odprite **Delo** in vnesite:  
- datum  
- začetek/konec ali trajanje  
- opis (neobvezno)  

Shranite vnos. Seznam zabeleženega dela je prikazan spodaj.

## 9. Zaključite operacijo

Ko je proizvodnja zaključena:

1. Preverite proizvedeno količino.  
2. Zabeležite morebitne slabe kose, zastoje, porabo materiala ali kontrolne liste.  
3. Pritisnite **Ustavi**, da zaključite operacijo.

![Kontrolniki zaključka izvedbe](../Images/ExecutionTopStop.png "Ustavitev operacije")

---