# EDI Final Group Project

## Jak ma wyglądać projekt:

- Main page:
  - Navbar
  - Opis projektu
  - Tabelka z danymi
  - Charty
  - Stopka
- About us:
  - Navbar
  - Jakieś foty z podpisem i rolą
  - Stopka

## Zasady kodowania

Każdy tworzy dla siebie brancha o nazwie `task-[numer zadania]` tam sobie działamy po czym tworzymy PR, żebym Dev-Lead mógł sprawdzić co idzie do `main` brancha.

## Tech Stack:

[Dev Note] Wszystkie libki ciągniemy przez cdn’a

- [JQuery](https://jquery.com) – nie będziemy bezpośrednio orać po dom’ie
- [Chart.Js](https://www.chartjs.org) – musimy mieć jakieś charty więc no… ten libek jest dosyć prosty w obsłudze
- [Bootstrap](https://getbootstrap.com) – coś musi nam pomóc w tym żeby to nie wyglądało jak gówno

## Tasks

**Task-1**: Stworzyć API w mockaroo.com\
AC: API powinien zwracać 100 wierszy w formacie JSON. po wykonaniu zadania powinien pojawić się plik `api_info.txt`, w tym pliku musi się znajdować link do danego API.

**Task-2**: Stworzyć navbar\
AC: navbar powinien posiadać odnośniki do wszystkich sekcji w raz z odnośnikiem do podstrony `about_us.html`. Kod powinien znajdować się w plikach `index.html` i `about_us.html`.

**Task-3**: Stworzyć sekcje opisu projektu\
AC: na stronie powinien znajdować się opis projektu w pliku `index.html`

**Task-4:** Stworzyć tabelkę z danymi z API\
AC: Po załadowaniu strony powinien pójść strzał do API przez ajaxa, po otrzymaniu danych powinny one zostać wyświetlone w formie tabelki. Kod trzeba umieścić w `index.html` i `main.js`.

**Task-5**: Stworzyć charty\
AC: Po załadowaniu strony powinny się pojawić dwa charty liniowy, słupkowy z losowymi danymi. Kod trzeba umieścić w `index.html` i `main.js`.

**Task-6**: Stworzyć stopkę\
AC: nw co ma być w niej XD. Kod trzeba umieścić w `index.html` i `about_us.html`.

**Task-7**: Stworzyć podstronę about us\
AC: na tej stronnie powinna się znajdować informacja o autorach taka jak: fora z tindera, imię nazwisko, link do githuba. Kod trzeba umieścić w `about_us.html`.
