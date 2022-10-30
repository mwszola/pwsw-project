# pwsw-project

Projekt z przedmiotu Programowanie w środowisku Windows.

## Założenia

- Celem projektu jest utworzenie aplikacji w środowisku programowania obiektowego,
- Aplikacja musi być napisana w pełni obiektowo z wykorzystaniem funkcjonalności oferownych przez język,
- W skład projektu wchodzi: 
  1. Specyfikacja wymagań.
  2. Projekt systemu.
  3. Działająca aplikacja.
  
 
### Wybór tematu

Propozycja tematu: URL Shortener


## Specyfikacja

### Opis aplikacji

Tworzona przez nas aplikacja polega na ułatwieniu zarządzania łączami Internetowymi (zw. linkami). Często zdarza się, że linki które posiadamy do zasobów w Internecie są bardzo długie, przez co ciężko dzieli się nimi z bliskimi. Rozwiązaniem jest aplikacja URL Shortener, która polega na tworzeniu zwięzłych linków, które możemy w łatwy sposób kopiować i rozpowszechniać.

### Zakres funkckonalności realizowanych przez aplikację

#### Wstęp

Architektura aplikacji to aplikacja Webowa która dzieli się na warstwę strony przeglądarki (Front-End) oraz część serwerową (Back-End).

#### Front-End

W części Front-End znajduję się intuicyjny interfejs użytkownika w skład którego wchodzi formularz. 
Użytkownik wprowadza adres URL i po wysłaniu formularza otrzymuje "skrócony" link prowadzący do tego samego zasobu. 

#### Back-End

Część serowa odpowiada za bezpośrednią komunikację z bazą danych, gdzie przechowywane są dane oraz logikę biznesową  niezbędna do spełnienia założeń systemu.

#### Funkcjonalności 

Zakładamy, że użytkownik nie musi posiadać konta w systemie żeby móć realizować podstawową funkcjonalność systemu polegająca na tworzeniu linków, natomiast utworzone w ten sposób łącze jest tymczasowe - po pewnych czasie wygasa i trzeba utworzyć nowe. Pondato, utworzony link generowany jest automatycznie.

W aplikacji mamy możliwość utworzenia konta użytkownika, które pozwala zarządzać tworzonymi łączami, tj. umożliwia tworzenie i usuwanie linków. Dzięki temu nie trzeba zapamiętywać skrócnych linków, ponieważ tworzone łącza przypisane są do konta, do których użytkownik ma wgląd poprzez panel aplikacji. Dodatkową, korzyścią z posiadania konta jest możliwość tworzenia łącz niestandardowych, przy których użytkownik ma kontrolę nad częścią adresu URL identyfikującego dany zasób.


W obu warstwach aplikacji występuję walidacja danych, która polega na weryfiakcji zgodności wprowadzanego adresu URL ze wzorcem - wprowadzony adres musi być poprawny.

Utworzone łącze składa się z domeny oraz unikalnego identyfikatora wskazującego zasób.

Tworzone przez użytkowników linki nie mogą ze sobą kolidować, tzn. nowo utworzony przez użytkownika link, nie może nadpisywać utworzonego wcześniej przez innego użytkownika linku prowadzącego do innego zasobu.
