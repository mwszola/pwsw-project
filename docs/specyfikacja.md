# Specyfikacja

## Opis aplikacji

Tworzona przez nas aplikacja polega na ułatwieniu zarządzania łączami Internetowymi (zw. linkami). Często zdarza się, że linki które posiadamy do zasobów w Internecie są bardzo długie, przez co ciężko dzieli się nimi z bliskimi. Rozwiązaniem jest aplikacja URL Shortener, która oferueje tworzenie zwięzłych linków, które możemy w łatwy sposób kopiować i rozpowszechniać.

## Zakres funkckonalności realizowanych przez aplikację

### Architektura

Architektura aplikacji to aplikacja Webowa która dzieli się na warstwę strony przeglądarki (Front-End) oraz część serwerową (Back-End).

### Front-End

W części Front-End znajduję się m.in. intuicyjny interfejs użytkownika w skład którego wchodzi formularz.
Użytkownik wprowadza adres URL i po wysłaniu formularza otrzymuje "skrócony" link prowadzący do wskazanego zasobu.

### Back-End

Część serwerowa odpowiada za bezpośrednią komunikację z bazą danych, gdzie przechowywane są dane, oraz logikę biznesową niezbędna do spełnienia założeń systemu.

### Funkcjonalności

#### Założenia

Zakładamy, że użytkownik nie musi posiadać konta w systemie żeby móc realizować podstawową funkcjonalność systemu polegająca na tworzeniu linków, natomiast utworzone w ten sposób łącze jest tymczasowe - po pewnych czasie wygasa i trzeba utworzyć nowe. Pondato, utworzony link generowany jest automatycznie.

W aplikacji mamy możliwość utworzenia konta użytkownika, które pozwala zarządzać tworzonymi łączami, tj. umożliwia tworzenie, usuwanie oraz edycję linków. Dzięki temu nie trzeba zapamiętywać skrócnych linków, ponieważ tworzone łącza przypisywane są do konta, do których użytkownik ma wgląd poprzez panel w aplikacji. Dodatkową, korzyścią posiadania konta jest możliwość tworzenia łącz niestandardowych, przy których użytkownik ma kontrolę nad częścią adresu URL identyfikującą dany zasób.

#### Struktura tworzonych łączy

Utworzone łącze składa się z domeny oraz unikalnego identyfikatora wskazującego zasób.

Tworzone przez użytkowników linki nie mogą ze sobą kolidować, tzn. nowo utworzony link, nie może nadpisywać utworzonego wcześniej przez innego użytkownika linku prowadzącego do innego zasobu.

#### Logowanie i rejestracja

Użytkownik ma możliwość utworzenia konta i logowania do aplikacji.

#### Widok i zarządzanie tworzonymi łączami

Po zalogowaniu do aplikacji, użytkownik ma podgląd na utworzone przez siebie łącza.

Użytkownik może dodawać nowe, usuwać oraz aktualizować łącza.

#### Tworzenie niestandardowych łączy

Wymaganiem do tworzenia niestandardowych łączy jest posiadanie konta użytkownika. Tworzone linki muszą być unikalne w obrębie systemu.

#### Walidacja danych

W przypadku obu warstw aplikacji występuję walidacja danych, która polega na weryfikacji zgodności wprowadzanych adresów URL ze wzorcem - wprowadzony adres musi być poprawny.

Walidacja danych dotyczy również rejestracji i logowania - wprowadzane dane muszą być poprawne.
