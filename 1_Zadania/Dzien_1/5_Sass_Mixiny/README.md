# Sass

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### 1. Prosty mixin  (~ 5min - 10min)

Znajdź w pliku `index.html` element `section` o klasie `test-mixin`. Ostyluj elementy wewnątrz zgodnie z opisem ich klas (obramowanie, lewa strona, )
Nastepnie stwórz prosty mixin, który doda do  odpowiedniego elementu pseudoklasy `:before` i `:after`. Niech mixin ma nazwę **clearfix**.

### 2. Mixin  i `@content` (~ 5min - 10min)

Znajdź w pliku `index.html` element `form` o klasie `my-form`.

Stwórz mixin, za pomocą którego będzie można ustawić `placeholder` dla elementów `input` oraz `textarea` w każdej przeglądarce.
Wykorzystaj atrybut `@content`, aby móc przekazać do mixina color tekstu.

Pamiętaj, że w przypadku elementu textarea dodanie odstępu pomiędzy tagiem otwierającym a zamykającym (spacja, enter) powodują, że placeholder nie działa.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1. Mixin border  (~ 5min - 10min)
Stwórz mixin, który na podstawie przekazanego do niego parametru - `$color` - ustawi obramowanie w nastepujący sposób:
* górna kreska  - `1px solid $color`
* prawa kreska - `1px solid lighten($color, 20%)`
* lewa kreska - `2px dashed darken($color, 20%)`
* dolna kreska - `0`
dodatkowo ustawi również border-radius na 5px.
Dodaj mixin dla elementu `header` (plik `index.html`)

### Zadanie 2. Mixin arrow  (~ 5min - 10min)
Stwórz mixin, który na podstawie przekazanego do niego parametru - `$direction` - stworzy strzałkę, zwróconą we wskazanym przez zmienną `$direction` kierunku, np. wywołanie arrow(top), stworzy strzałke skierowaną do góry.
Strzałkę zrób za pomocą CSS, jeśli nie wiesz jak spróbuj znaleźć w Google.
