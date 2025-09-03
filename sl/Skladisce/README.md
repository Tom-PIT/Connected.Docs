# Skladišče

Sistem skladiščnega poslovanja omogoča upravljanje, nadzor in analizo nad materialnih stanjem zalog.

[Zaloga](Zaloga/README.md) je blago, ki se nahaja na natančno določeni [skladiščni lokaciji](Sifranti/SkladiscneLokacije.md). Blago je na vsaki lokaciji enoznačno identificirano.

Blago v procesu skladiščnega poslovanja v sistem vstopi, se lahko premika in na koncu potencialno izstopi. Prehode imenujemo življenjski cikel. Življenjski cikel v celoti nadzorujejo [dokumenti](Dokumenti/README.md).

Skladiščni dokumenti so torej ključne entitete, ki manipulira z blagom.

## Organizacija

Skladiščno poslovanje je organizirano po [skladiščih](Sifranti/Skladisce.md) in znotraj vsakega skladišča po [skladiščnih lokacijah](Sifranti/SkladiscneLokacije.md). Poslovno okolje lahko ima poljubno mnogo skladišč in znotraj vsakega skladišča lahko obstaja poljubno mnogo [skladiščnih lokacij](Sifranti/SkladiscneLokacije.md).

## Zaloga

[Zaloga](Zaloga/README.md) predstavlja materialno vrednost blaga. Vsako blago se nahaja na eni ali več skladiščnih lokacij. Blago je označeno s [serijsko številko](SerijskeStevilke/README.md), ki ločuje različne prevzeme med seboj s ciljem zagotavljanja [materialne sledljivosti](../Koncepti/MaterialnaSledljivost.md). Blago je lahko različnih vrst:

- [izdelki](../Splosno/Sifranti/Izdelki.md)
- [polizdelki](../Splosno/Sifranti/Polizdelki.md)
- [surovine](../Splosno/Sifranti/Surovine.md)
- [repro material](../Splosno/Sifranti/ReproMaterial.md)

## Dokumenti

Skladiščno poslovanje podpira množico [dokumentov](Dokumenti/README.md), ki vplivajo na [zalogo](Zaloga/README.md). Vsak dokument igra pomembno vlogo pri stanju zalog. Nekateri dokumenti zalogo povečujejo, drugi zmanjšujejo, tretji počnejo oboje. Dokumenti so sestavljeni iz glave in postavk. Glava dokumenta določa atribute, kot so dobavitelj, datum dokumenta ali skladišče, medtem ko se postavke ukvarjajo z blagom, predvsem vrsto in količino.