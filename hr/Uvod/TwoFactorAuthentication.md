<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Uvod/TwoFactorAuthentication.md -->
<!-- canonical_source_title: Dvofaktorska autentifikacija -->

# Dvofaktorska autentifikacija

Dvofaktorska autentifikacija (2FA) pruža dodatnu razinu sigurnosti pri prijavi na platformu.

Kada je omogućena, sustav korisniku šalje privremeni kod za autentifikaciju na adresu e-pošte. Korisnik mora unijeti taj kod da bi dovršio prijavu.

> [!IMPORTANT]
> Dvofaktorska autentifikacija radi samo ako:
> - je funkcionalnost omogućena na platformi
> - korisnik ima ispravnu adresu e-pošte postavljenu u **Sustav / [Korisnici](../Domene/Sustav/Upravljanje/Users.md)**

## Konfiguracija

Vrijeme valjanosti koda za autentifikaciju može se podesiti u:

**Sustav / Postavke / Identity / Email 2FA**

Postavka određuje koliko dugo (u sekundama) kod za autentifikaciju ostaje valjan prije isteka.

## Postupak prijave

1. Unesite korisničko ime i lozinku.
2. Sustav na vašu adresu e-pošte šalje kod za autentifikaciju.
3. Otvorite e-poruku i kopirajte primljeni kod.
4. Zalijepite kod na ekran za autentifikaciju.
5. Nakon uspješne provjere dobivate pristup platformi.
