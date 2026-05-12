<!-- app_route: /accounting/documents/received-invoices -->
<!-- app_label: Prejeti računi -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Racunovodstvo/Dokumenti/PrejetiRacuniUstvarjanje.md -->
<!-- canonical_source_title: Kako ustvariti prejeti račun -->

# Kako ustvariti prejeti račun

[Prejeti računi](PrejetiRacuni.md) se ustvarijo za evidentiranje dohodnih računov dobaviteljev. Povežejo se lahko z enim ali več [nabavnimi nalogi](../../Nabava/Dokumenti/NabavniNalogi.md), kar sistemu omogoča, da predlaga knjiženja na podlagi prejetega blaga ali storitev in z njimi povezanih stroškov.

### Ustvariti prejeti račun

1. Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega prejetega računa.
2. V **Povezavah dokumentov** povežite enega ali več nabavnih nalogov.
3. Preglejte ali vnesite podatke glave dokumenta, vključno z **Zneskom**.
4. Izberite ustrezen **Konto** in po potrebi **Predlogo**.

![Glava novega prejetega računa](../Images/ReceivedInvoicesNewTop.png)

### Ustvari predlagane knjižbe

V razdelku **Predlagane knjižbe** sistem predlaga knjižbe na podlagi povezanih nabavnih nalogov.

1. Preglejte predlagane postavke.
2. Uredite polja **Strošek** in **Količina** na seznamu po potrebi.

   ![Received Invoices Details Expense](../Images/ReceivedInvoicesDetailsExpense.png "Uredi postavke")

3. Izberite ustrezne vrstice.
4. Kliknite **Ustvari knjižbe** za ustvarjanje postavk.

   ![Predlagane knjižbe](../Images/ReceivedInvoicesNewSuggestedPostings.png "Predlagane knjižbe")

#### Priponke

Vsak dokument vsebuje razdelek **Priponke**.

Naložite lahko poljubne datoteke (dobavnice, transportne dokumente, fotografije ali podporno dokumentacijo).  
Vse priponke so shranjene skupaj z dokumentom in so vedno dostopne.

### Urejanje postavk

Kliknite katerokoli modro polje v razdelku **Postavke**, da ga uredite.  
Po spremembah kliknite **Shrani**.

![Urejanje postavke](../Images/ReceivedInvoicesDetails.png)

### Objavi prejeti račun

Ko so vsi zneski usklajeni in obvezni podatki izpolnjeni, je spodnji del dokumenta videti takole:

![Spodnji del dokumenta](../Images/ReceivedInvoicesNewBottom.png)

- Kliknite **Objavi** za potrditev dokumenta.
- Račun se knjiži v glavno knjigo.
- Samodejno se ustvari povezana **temeljnica** v **[Dvostavnem knjigovodstvu](DvostavnoKnjigovodstvo.md)**.

> [!NOTE]
> Če obstaja razlika med zneskom v glavi in vsoto postavk, dokument prikaže **Preostali znesek** in je označen.
>
> ![Preostali znesek](../Images/ReceivedInvoicesNewRemainingAmount.png)
