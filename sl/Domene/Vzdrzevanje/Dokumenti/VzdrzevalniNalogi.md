<!-- app_route: /maintenance-orders/list -->
<!-- app_label: VzdrÅ¾evalni nalogi -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md -->
<!-- canonical_source_title: VzdrÅ¾evalni nalogi -->

# VzdrÅ¾evalni nalogi

VzdrÅ¾evalni nalogi doloÄajo delo, ki je potrebno za izvajanje **planiranega ali kurativnega vzdrÅ¾evanja** opreme, na podlagi izbranega **vzdrÅ¾evalnega procesa** in njegove verzije.  
Prehajajo skozi Å¾ivljenjski cikel **V obdelavi â†’ Aktiven â†’ Zaprt** ter vkljuÄujejo operacije, vire, vhode in kontrolne sezname kakovosti, kot so definirani v izbranem procesu.

> [!NOTE]
> **Predpogoji**
>
> Pred ustvarjanjem vzdrÅ¾evalnega naloga se prepriÄajte, da so nastavljeni:
> - Vsaj en [**vzdrÅ¾evalni proces**](../../Proizvodnja/Upravljanje/Procesi.md) z aktivno verzijo
> - Definicije opreme
> - Dodeljene [**organizacijske enote**](../../Proizvodnja/Upravljanje//OrganizacijskeEnote.md)
> - Po potrebi dodatne nastavitve, kot so [**viri**](../../Proizvodnja/Upravljanje//Viri.md),
>   [**kontrolni listi**](../..//Proizvodnja/Upravljanje/KontrolneListe.md) in
>   [**merske enote**](../../../Skupno/Upravljanje/MerskeEnote.md), odvisno od poteka vzdrÅ¾evanja

Za dostop do vzdrÅ¾evalnih nalogov pojdite na **VzdrÅ¾evanje / VzdrÅ¾evalni nalogi** v
[navigaciji](../../../Skupno/UI/Navigacija.md).

## Seznam vzdrÅ¾evalnih nalogov

Stran **VzdrÅ¾evalni nalogi** prikazuje vse vzdrÅ¾evalne naloge, zdruÅ¾ene po statusu.  
Za zoÅ¾enje seznama uporabite filtre na levi strani.

![Maintenance Orders List](../Images/MaintenanceOrdersList.png "Seznam vzdrÅ¾evalnih nalogov")

### Pregled statusov

Na vrhu strani so prikazane kartice s povzetkom Å¡tevila nalogov:

- **Moji** â€“ Nalogi, dodeljeni trenutnemu uporabniku
- **Nedodeljeni** â€“ Nalogi brez dodeljenega vira
- **Vsi** â€“ Skupno Å¡tevilo vzdrÅ¾evalnih nalogov

Klik na kartico ustrezno posodobi seznam.

### Vizualni indikatorji v seznamu

VzdrÅ¾evalni nalogi lahko vsebujejo vizualne indikatorje za hiter pregled stanja:

- **RdeÄa pika** â€“ Kurativni vzdrÅ¾evalni nalog
- **Oznaka zamude** â€“ OznaÄuje, da je nalog v zamudi
- **PuÅ¡Äice prioritete**
  - RdeÄa puÅ¡Äica navzgor â€“ Visoka prioriteta
  - Brez puÅ¡Äice â€“ Normalna prioriteta
  - Modra puÅ¡Äica navzdol â€“ Nizka prioriteta

![Maintenance Orders List Item](../Images/MaintenanceOrdersListItem.png "Indikatorji v seznamu vzdrÅ¾evalnih nalogov")

### RazpoloÅ¾ljivi filtri

- **Planiran zaÄetek** â€“ Filtriranje nalogov po razponu planiranega zaÄetka
- **Pogled** â€“ Filtriranje po statusu Å¾ivljenjskega cikla:
  - **V obdelavi** â€” Ustvarjen in pripravljen za aktivacijo
  - **Aktiven** â€” Trenutno v izvajanju
  - **Zaprt** â€” ZakljuÄen vzdrÅ¾evalni nalog
- **Tip naloga**
  - **Preventiva** â€” Planirano preventivno vzdrÅ¾evanje
  - **Kurativa** â€” Korektivno vzdrÅ¾evanje
- **Prioriteta**
- **Organizacijska enota**
- **Kategorije virov**

Iskalno polje omogoÄa filtriranje po kodi vzdrÅ¾evalnega naloga ali nazivu opreme.

## Ustvarjanje vzdrÅ¾evalnega naloga

Za ustvarjanje vzdrÅ¾evalnega naloga uporabite [vodeni Äarovnik](VrdrzevalniNalogiUstvarjanje.md).

## V obdelavi vzdrÅ¾evalni nalogi

Novo ustvarjen vzdrÅ¾evalni nalog se zaÄne v stanju **V obdelavi**.

V tem stanju je nalog mogoÄe:
- pregledati
- urejati (oprema, prioriteta, planirani datumi, proces in verzija)
- izbrisati
- pripraviti za izvedbo

Iz tega stanja lahko:
- pregledate operacije
- pregledate zahtevane vire
- dodate priloge ali opombe

Ko je nalog pripravljen za izvedbo, kliknite **Aktiviraj**.

![Pending Maintenance Order](../Images/MaintenanceOrdersNewDraft.png "VzdrÅ¾evalni nalog v obdelavi")

### Brisanje vzdrÅ¾evalnih nalogov

Izbrisati je mogoÄe samo vzdrÅ¾evalne naloge v stanju **V obdelavi**.
Ko je nalog aktiviran, izbris ni veÄ mogoÄ.

## Aktivni vzdrÅ¾evalni nalogi

Po aktivaciji vzdrÅ¾evalni nalog preide v stanje **Aktiven**.

![Active Maintenance Order](../Images/MaintenanceOrdersNewActive.png "Aktiven vzdrÅ¾evalni nalog")

Nalog prikazuje:
- opremo in prioriteto
- planiran zaÄetek in konec
- proces in verzijo
- vse operacije, doloÄene z izbranim procesom

### Izvajanje operacij

Operacije se izvajajo v skladu z definicijo procesa.

Na voljo sta dva naÄina izvajanja:

- **Hitro zakljuÄevanje** â€“ Kliknite **ZakljuÄi** neposredno na vzdrÅ¾evalnem nalogu
- **Podrobno izvajanje (priporoÄeno)** â€“ Kliknite operacijo, da odprete zaslon izvajanja

   ![Maintenance Order Operations](../Images/MaintenanceOrdersOperation.png "Seznam operacij vzdrÅ¾evalnega naloga")

Klik na operacijo odpre **zaslon izvajanja operacije**, kjer lahko izvajalec:
- pregleda [navodila](../../Znanje/BazaZnanja/BazaZnanja.md)
- evidentira [vhode](../../Proizvodnja/Upravljanje/Vhodi.md) in [neÄloveÅ¡ke vire](../../Proizvodnja/Upravljanje/StvarniViri.md)
- izvede [kontrolne sezname](../../Proizvodnja/Upravljanje/KontrolneListe.md) kakovosti
- beleÅ¾i delo (zaÄetek/konec, trajanje)
- vnese podatke o izvedbi

![Maintenance Order Operation](../Images/MaintenanceOrdersOperationScreen.png "Izvajanje operacije vzdrÅ¾evalnega naloga")

Ko je operacija zakljuÄena, kliknite **ZakljuÄi** v zgornjem levem kotu zaslona operacije.

ZakljuÄene operacije so oznaÄene z **zelenim indikatorjem**, kar omogoÄa jasen vizualni pregled.

## Zaprti vzdrÅ¾evalni nalogi

Ko so vse operacije zakljuÄene, vzdrÅ¾evalni nalog preide v stanje **Zaprt**.

Zaprti vzdrÅ¾evalni nalogi:
- so samo za branje
- vsebujejo celotno zgodovino izvedbe
- sluÅ¾ijo kot evidenca vzdrÅ¾evanja za opremo

V seznamu so vidni pod pogledom **Zaprt**.