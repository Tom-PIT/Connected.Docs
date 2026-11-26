<!-- app_route: /production-orders/execution -->
<!-- app_label: Izvedba -->
<!-- app_navigation_hint: V Izvedbi, kliknite akcijski gumb in izberite Poraba. -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Proizvodnja/Dokumenti/Poraba/ -->
<!-- canonical_source_title: Poraba -->

# Poraba

Aktivnost **Poraba** beleži porabo vhodnih materialov med izvajanjem operacije. Uporablja se, ko iz zaloge vzamete materiale za izdelavo izdelkov (npr. vijake, lepilo, barvo, napeljavo ali določen serijski/serijski sklop). S tem se zagotavlja natančno stanje zalog in popolna sledljivost vhodov (materiali, serije, loti).

Zaslon **Poraba** odprete iz glavne strani [**Izvedba**](Izvedba.md) preko izbire aktivnosti (klik na [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izbira **Poraba**).

## Zabeležiti porabo materiala

![Seznam porabe materiala](../Images/ExecutionConsumptionPageSL.png "Beleženje porabe materiala")

1. Odprite stran **Poraba** iz [**menija aktivnosti izvedbe**](Izvedba.md#akcijski-meni-in-aktivnosti).  
2. Preglejte seznam materialov za porabo (s prikazom stanja zaloge).  
3. Izberite material s seznama ali poiščite/skenirajte po nazivu, šifri, serijski številki, EAN kodi ali številki vsebnika.  
   - Če se številka vsebnika ujema, se odpre okno [**Vsebnik**](#poraba-iz-vsebnika).  
   - Če material, serijska številka ali EAN ustreza samo enemu zadetku, se ta odpre.  
   - Če ustreza več zadetkom, so ti prikazani za izbiro.  
4. Na zaslonu **Dodaj porabo** vnesite količino za porabo.  

   ![Podrobnosti porabe materiala](../Images/ExecutionConsumptionDetailScreenSL.png "Zaslon podrobnosti porabe")

5. Kliknite **Dodaj**, da shranite porabo.  
6. Po potrebi ponovite postopek za druge materiale.

Porabljena količina je povezana z operacijo in se v realnem času odrazi v stanju zaloge.

### Poraba iz vsebnika

Ko izberete vsebnik, se odpre okno **Vsebnik** z eno vrstico za vsako serijsko številko v vsebniku.

![Vsebnik](../Images/PorabaVsebnikSL.png "Okno Vsebnik")

Stolpci so:

- **Material**: material v vsebniku.
- **Serijska številka**: serijska številka te vrstice.
- **Količina v vsebniku**: količina te serijske številke v vsebniku.
- **Poraba**: doslej porabljena količina v primerjavi z količino, potrebno za operacijo.
- **Vnos**: količina, ki jo porabite zdaj. Polje je predizpolnjeno s celotno količino vrstice.

Če želite porabiti celoten vsebnik, pustite vrednosti v polju **Vnos** nespremenjene in kliknite **Shrani**. Če želite porabiti le del vsebnika, pred shranjevanjem spremenite vrednost **Vnos** za eno ali več vrstic.

### Validacije

Sistem preverja:

- razpoložljivost zaloge (zadostna količina),
- pravilno skladišče in lokacijo,
- lastništvo in status serije/lota.

Če katera koli validacija ni uspešna, sistem prikaže napako in poraba ni zabeležena.