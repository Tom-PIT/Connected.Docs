<!-- app_route: /production-orders/execution -->
<!-- app_label: Izvedba -->
<!-- app_navigation_hint: V Izvedbi, kliknite akcijski gumb in izberite Kvaliteta. -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Proizvodnja/Dokumenti/Kvaliteta.md -->
<!-- canonical_source_title: Kvaliteta -->

# Kvaliteta

Aktivnost **Kvaliteta** prikazuje in beleži kontrolne liste kakovosti, povezane s trenutno operacijo. Kontrolne liste pomagajo zagotavljati varno delo in ustrezno kakovost izdelkov z vodenjem skozi zaporedne kontrolne korake.

Med izvedbo se zahtevane kontrolne liste samodejno prikažejo ob ustreznem trenutku (na začetku, med delom ali pred zaključkom). Stran **Kvaliteta** omogoča pregled posamezne kontrolne liste in njeno ponovno izvajanje po potrebi. Primer si lahko ogledate v razdelku [Izvedba — kontrolne liste in nadzor kakovosti](Izvedba.md#kontrolne-liste-in-nadzor-kakovosti).

**Kvaliteto** odprete na zaslonu [**Izvedba**](Izvedba.md) prek menija aktivnosti (tapnite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Kvaliteta**).

## Kontrolne liste kakovosti

![Kontrolna lista kakovosti](../Images/ExecutionQualityScreen.png)

Pri vsaki kontrolni listi je prikazana barva stanja:

- Zelena — vsi koraki so zaključeni in potrjeni
- Rdeča — nekaj manjka ali ni potrjeno

> [!NOTE]
> Če posamezne točke kontrolne liste ni mogoče zaključiti (npr. zaradi manjkajočega materiala), izvedite razpoložljive korake, nato uporabite **Ponovi**, ko je pogoj izpolnjen.

## Ponoviti kontrolno listo

1. Odprite stran **Kvaliteta** iz [**menija aktivnosti izvedbe**](Izvedba.md#meni-aktivnosti-in-dejavnosti).
2. Preglejte prikazano kontrolno listo za operacijo (če jih je več).
3. Kliknite **Ponovi**, da ponovno izvedete kontrolno listo.
4. Sledite korakom na zaslonu in potrdite vsako kontrolno točko.
5. Ko so vsi koraki zaključeni, kliknite **Konec**.

Shranjeni rezultati so povezani s proizvodnim nalogom in operacijo ter so vidni v pregledu izvedbe.

## Urediti kontrolno listo

- Kontrolno listo lahko ponovno odprete in po potrebi prilagodite vnose, kjer to dovoljuje proces.
- Za ponovno izvajanje kontrolne liste uporabite **Ponovi**.

## Glej tudi

- [Kontrolne liste kakovosti](../Upravljanje/KvalitetaKontrolneListe.md) — dodeljevanje kontrolnih list procesnim verzijam ali operacijam
- [Kontrolne liste](../Upravljanje/KontrolneListe.md) — ustvarjanje in upravljanje predlog kontrolnih list
- [Kontrolne točke](../Upravljanje/KontrolneTocke.md) — definicija posameznih korakov kontrolne liste