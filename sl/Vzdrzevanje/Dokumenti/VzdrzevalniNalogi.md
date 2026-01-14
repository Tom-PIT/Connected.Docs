# Vzdrževalni nalogi

Vzdrževalni nalogi določajo delo, ki je potrebno za izvajanje **planiranega ali kurativnega vzdrževanja** opreme, na podlagi izbranega **vzdrževalnega procesa** in njegove verzije.  
Prehajajo skozi življenjski cikel **V obdelavi → Aktiven → Zaprt** ter vključujejo operacije, vire, vhode in kontrolne sezname kakovosti, kot so definirani v izbranem procesu.

> [!NOTE]
> **Predpogoji**
>
> Pred ustvarjanjem vzdrževalnega naloga se prepričajte, da so nastavljeni:
> - Vsaj en [**vzdrževalni proces**](../../Proizvodnja/Sifranti/Procesi.md) z aktivno verzijo
> - Definicije opreme
> - Dodeljene [**organizacijske enote**](../../Proizvodnja/Sifranti//OrganizacijskeEnote.md)
> - Po potrebi dodatne nastavitve, kot so [**viri**](../../Proizvodnja/Sifranti//Viri.md),
>   [**kontrolni seznami**](../..//Proizvodnja/Sifranti/KontrolniListi.md) in
>   [**merske enote**](../../Skupno/Sifranti/MerskeEnote.md), odvisno od poteka vzdrževanja

Za dostop do vzdrževalnih nalogov pojdite na **Vzdrževanje / Vzdrževalni nalogi** v
[navigaciji](../../Skupno/UI/Navigacija.md).

## Seznam vzdrževalnih nalogov

Stran **Vzdrževalni nalogi** prikazuje vse vzdrževalne naloge, združene po statusu.  
Za zoženje seznama uporabite filtre na levi strani.

![Maintenance Orders List](../Images/MaintenanceOrdersList.png "Seznam vzdrževalnih nalogov")

### Pregled statusov

Na vrhu strani so prikazane kartice s povzetkom števila nalogov:

- **Moji** – Nalogi, dodeljeni trenutnemu uporabniku
- **Nedodeljeni** – Nalogi brez dodeljenega vira
- **Vsi** – Skupno število vzdrževalnih nalogov

Klik na kartico ustrezno posodobi seznam.

### Vizualni indikatorji v seznamu

Vzdrževalni nalogi lahko vsebujejo vizualne indikatorje za hiter pregled stanja:

- **Rdeča pika** – Kurativni vzdrževalni nalog
- **Oznaka zamude** – Označuje, da je nalog v zamudi
- **Puščice prioritete**
  - Rdeča puščica navzgor – Visoka prioriteta
  - Brez puščice – Normalna prioriteta
  - Modra puščica navzdol – Nizka prioriteta

![Maintenance Orders List Item](../Images/MaintenanceOrdersListItem.png "Indikatorji v seznamu vzdrževalnih nalogov")

### Razpoložljivi filtri

- **Planiran začetek** – Filtriranje nalogov po razponu planiranega začetka
- **Pogled** – Filtriranje po statusu življenjskega cikla:
  - **V obdelavi** — Ustvarjen in pripravljen za aktivacijo
  - **Aktiven** — Trenutno v izvajanju
  - **Zaprt** — Zaključen vzdrževalni nalog
- **Tip naloga**
  - **Preventiva** — Planirano preventivno vzdrževanje
  - **Kurativa** — Korektivno vzdrževanje
- **Prioriteta**
- **Organizacijska enota**
- **Kategorije virov**

Iskalno polje omogoča filtriranje po kodi vzdrževalnega naloga ali nazivu opreme.

## Ustvarjanje vzdrževalnega naloga

Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md), da ustvarite nov vzdrževalni nalog.

Čarovnik za ustvarjanje je sestavljen iz **treh korakov**, podobno kot pri proizvodnih nalogih.

### Korak 1 — Izberi tip naloga in entiteto

Izberite:
- **Tip naloga**
- **Entiteta** – Oprema, ki bo vzdrževana

> [!NOTE]
> Pri ročnem ustvarjanju vzdrževalnega naloga je tip naloga vedno **Preventiva**.
>
> **Kurativni** vzdrževalni nalogi se ustvarijo iz **prijavljenih okvar**.

Nato iz seznama izberite konkretno opremo.

![Maintenance Orders Step 1](../Images/MaintenanceOrdersNewStep1.png "Ustvari vzdrževalni nalog – korak 1")

### Korak 2 — Izberi proces

Izberite **vzdrževalni [proces](../../Proizvodnja/Sifranti/Procesi.md)** in
**verzijo procesa**, ki določa vzdrževalne operacije.

![Maintenance Orders Step 2](../Images/MaintenanceOrdersNewStep2.png "Ustvari vzdrževalni nalog – korak 2")

> [!NOTE]
> Če v tem koraku ni razpoložljivih procesov, preverite:
> - Ali ima proces dodeljeno oznako **Vzdrževanje**
> - Ali so v operacijah procesa definirani **nečloveški viri**
> - Ali ima proces vsaj eno **aktivno verzijo**

### Korak 3 — Ustvari urnik

Določite, kako in kdaj se bo vzdrževalni nalog izvajal.

#### Tip urnika

Na voljo sta dva načina razporejanja:

- **Čas** — Razporeditev vzdrževanja za določen datum ali ponavljajoči interval

  ![Maintenance Orders Step 3 Time](../Images/MaintenanceOrdersNewStep3.png "Ustvari vzdrževalni nalog – časovni urnik")

- **Števec** — Razporeditev vzdrževanja glede na uporabo ali števce

  ![Maintenance Orders Step 3 Count](../Images/MaintenanceOrdersNewStep3Count.png "Ustvari vzdrževalni nalog – urnik po števcu")

> [!NOTE]
> Urniki na podlagi uporabe temeljijo na števcih virov in opreme
> (npr. kosi, metri, grami, ure).
> Za nastavitev glejte **[Delovne ure virov in števci](ResourceWor)**

Če je izbran **vzorec ponavljajoče izvedbe** (npr. *Mesečno*, *Vsakih X dni* ali *Letno*),
se samodejno ustvari **vzdrževalni urnik**, ki bo generiral vzdrževalne naloge
v skladu z določenim vzorcem.

![Maintenance Orders Schedule](../Images/MaintenanceOrdersNewStep3Schedule.png "Konfiguracija urnika vzdrževalnega naloga")

Kliknite **Zaključi**, da ustvarite vzdrževalni nalog v stanju **V obdelavi**.

## V obdelavi vzdrževalni nalogi

Novo ustvarjen vzdrževalni nalog se začne v stanju **V obdelavi**.

V tem stanju je nalog mogoče:
- pregledati
- urejati (oprema, prioriteta, planirani datumi, proces in verzija)
- izbrisati
- pripraviti za izvedbo

Iz tega stanja lahko:
- pregledate operacije
- pregledate zahtevane vire
- dodate priloge ali opombe

Ko je nalog pripravljen za izvedbo, kliknite **Aktiviraj**.

![Pending Maintenance Order](../Images/MaintenanceOrdersNewDraft.png "Vzdrževalni nalog v obdelavi")

### Brisanje vzdrževalnih nalogov

Izbrisati je mogoče samo vzdrževalne naloge v stanju **V obdelavi**.
Ko je nalog aktiviran, izbris ni več mogoč.

## Aktivni vzdrževalni nalogi

Po aktivaciji vzdrževalni nalog preide v stanje **Aktiven**.

![Active Maintenance Order](../Images/MaintenanceOrdersNewActive.png "Aktiven vzdrževalni nalog")

Nalog prikazuje:
- opremo in prioriteto
- planiran začetek in konec
- proces in verzijo
- vse operacije, določene z izbranim procesom

### Izvajanje operacij

Operacije se izvajajo v skladu z definicijo procesa.

Na voljo sta dva načina izvajanja:

- **Hitro zaključevanje** – Kliknite **Zaključi** neposredno na vzdrževalnem nalogu
- **Podrobno izvajanje (priporočeno)** – Kliknite operacijo, da odprete zaslon izvajanja

   ![Maintenance Order Operations](../Images/MaintenanceOrdersOperation.png "Seznam operacij vzdrževalnega naloga")

Klik na operacijo odpre **zaslon izvajanja operacije**, kjer lahko izvajalec:
- pregleda navodila
- evidentira vhode in nečloveške vire
- izvede kontrolne sezname in preverjanja kakovosti
- beleži delo (začetek/konec, trajanje)
- vnese podatke o izvedbi

![Maintenance Order Operation](../Images/MaintenanceOrdersOperationScreen.png "Izvajanje operacije vzdrževalnega naloga")

Ko je operacija zaključena, kliknite **Zaključi** v zgornjem levem kotu zaslona operacije.

Zaključene operacije so označene z **zelenim indikatorjem**, kar omogoča jasen vizualni pregled.

## Zaprti vzdrževalni nalogi

Ko so vse operacije zaključene, vzdrževalni nalog preide v stanje **Zaprt**.

Zaprti vzdrževalni nalogi:
- so samo za branje
- vsebujejo celotno zgodovino izvedbe
- služijo kot evidenca vzdrževanja za opremo

V seznamu so vidni pod pogledom **Zaprt**.

---