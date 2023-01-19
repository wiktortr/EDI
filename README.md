# EDI Final Group Project

## Jak będzie wyglądać nasza strona:

- Main page:
  - Navbar (dla sprawnej nawigacji po stronie)
  - Tytuł projektu, nasze imiona i nazwiska (dodamy łącze do zakładki "About Us")
  - Opis projektu
  - Tabelka z danymi (rozwijana)
  - Charty i ich opis
  - Stopka

- Natomiast w "About Us" zawrzemy:
  - Navbar
  - Zdjęcia i krótkie przedstawienie członków zespołu (ich funkcje i linki do ich kont na Github)
  - Stopka

## Jak odpalić kod lokalnie

```bash
npm i -g http-server  # instalacja serwera
http-server . -c-1    # odpalenie serwera
```

## Zasady kodowania

Każdy tworzy dla siebie brancha o nazwie `task-[numer zadania]` tam sobie działamy po czym tworzymy PR, żebym Dev-Lead mógł sprawdzić co idzie do `main` brancha.

## Tech Stack:

[Dev Note] Wszystkie biblioteki ściągamy przez cdn’a

- [JQuery](https://jquery.com) – bezpośrednio w dom'ie
- [Chart.Js](https://www.chartjs.org) – ta biblioteka jest przydatna w kontekście tworzenia chartów
- [Bootstrap](https://getbootstrap.com) – dla lepszego wyglądu strony

## Tasks

**Task-1**: Stworzyć API w mockaroo.com\
AC: API powinien zwracać 100 wierszy w formacie JSON. Po wykonaniu zadania powinien pojawić się plik `api_info.txt`, w tym pliku musi się znajdować link do danego API. 

**Task-2**: Stworzyć navbar\
AC: navbar powinien posiadać odnośniki do wszystkich sekcji wraz z odnośnikiem do podstrony `about_us.html`. Kod powinien znajdować się w plikach `index.html` i `about_us.html`.

**Task-3**: Stworzyć sekcje opisu projektu\
AC: na stronie powinien znajdować się opis projektu w pliku `index.html, możemy dodać jakieś zdjęcie, które będzie korespondować z tematyką projektu

**Task-4:** Stworzyć tabelkę z danymi z API\
AC: Po załadowaniu strony powinien pójść strzał do API przez ajaxa, po otrzymaniu danych powinny one zostać wyświetlone w formie tabelki. Warto nadmiar wierszy "zwinąć" i stworzyć przycisk, który pozwoli zainteresowanej osobie to rozwinąć. Kod trzeba umieścić w `index.html` i `main.js`.

**Task-5**: Stworzyć charty\
AC: Po załadowaniu strony powinny się pojawić dwa charty (liniowy, słupkowy) z danymi. Tworzymy też ich opisy. Kod trzeba umieścić w `index.html` i `main.js`.

**Task-6**: Stworzyć stopkę\
(task dla zwiększenia atrakcyjności i profesjonalnego wyglądu strony)
AC: podstawowa stopka Kod trzeba umieścić w `index.html` i `about_us.html`.

**Task-7**: Stworzyć podstronę about us\
(task dla zwiększenia atrakcyjności i profesjonalnego wyglądu strony)
AC: na tej stronnie powinna się znajdować informacja o autorach taka jak: zdjęcie, imię nazwisko, krótkie opisy, link do githuba. Kod trzeba umieścić w `about_us.html`.

**Task-8**: Wprowadzić dynamiczne generowanie wykresów\
AC: Po załadowaniu strony dymyślnie generowane są wykresy na bazie pierwszego zbioru danych. Po kliknięciu przycisku należy wygenerować wykres na bazie danych odpowiadających danemu przyciskowi.

