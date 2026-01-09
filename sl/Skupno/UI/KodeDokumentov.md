# Kode dokumentov

Vsak dokument v sistemu prejme samodejno ustvarjeno **kodo dokumenta**.  
Ta koda enolično identificira dokument in sledi enotni strukturi v vseh modulih.

Kode dokumentov se uporabljajo za:

- sledenje in referenciranje dokumentov  
- navigacijo znotraj sistema  
- povezovanje dokumentov (Ponudbe → Prodajni nalogi → Dobavnice → Izdani računi)  
- zunanjo komunikacijo (PDF-ji, e-pošta, izvozi)

## Struktura kode dokumenta

Vse kode dokumentov sledijo enaki obliki:

**PREDPONA-LETO-ZAPOREDJE**

Kjer:

- `PREDPONA` – 2–3 črke, ki označujejo vrsto dokumenta  
- `LETO` – leto nastanka dokumenta  
- `ZAPOREDJE` – zaporedna številka z vodilnimi ničlami  

![Primer kode ponudbe](../Images/DocumentCodeOffer.png "Primer kode ponudbe")

Primeri:

- `OFF-2025-00000012`
- `SOR-2025-00002311`

## Primeri predpon po vrsti dokumenta

### Prodajni dokumenti
- `OFF` – Ponudbe  
- `SOR` – Prodajni nalogi  
- `DNO` – Dobavnice  
- `INV` – Izdani računi  

### Nabavni dokumenti
- `INQ` – Povpraševanja  
- `SOR` – Nabavni nalogi  
- `REC` – Prevzemi (delni ali celotni)  

### Finančni / skladiščni dokumenti  
(če je na voljo)
- `PAY` – Plačila  
- `STK` – Premiki zalog  
- `CMP` – Zaključene proizvodne ali montažne serije  

## Kako se kode ustvarijo

- Kode so **samodejno dodeljene** ob ustvarjanju dokumenta.  
- Zaporedje se povečuje neodvisno za vsako vrsto dokumenta.  
- Kode **ni mogoče urejati** po ustvarjanju.  
- Dokumenti, ustvarjeni iz drugih dokumentov (npr. Ponudba → Prodajni nalog), vedno prejmejo **novo kodo**.

## Kje je koda prikazana

![Primer kode prodajnega naloga](../Images/DocumentCodeSalesOrders.png "Primer kode prodajnega naloga")

Kode so prikazane tudi v:

- seznamskih pogledih  
- povezanih dokumentih  
- PDF-jih  
- e-poštnih izvozih  
- integracijah  

## Zakaj je struktura kode pomembna

Enotna struktura zagotavlja:

- čisto razvrščanje v seznamih  
- predvidljivo iskanje in filtriranje  
- enostavno referenciranje v računovodstvu, logistiki in operativnih procesih  
- berljivo obliko za uporabnike (leto + zaporedje)

---
