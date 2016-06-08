#RWD

1. **Ustaw viewport**

	Ustaw viewport dla Twojej strony tak aby zawsze był taki jak szerokość urządzenia, a domyślne powiększenie miało wartość 1. Napisz w komenatrzu swoje spostrzeżenia.
	Zmień wartość atrybutu content - width na 500, a nastepnie na 100 i napisz w komentarzu swoje spostrzeżenia
	co się zmieniło itp.

2. **Media Query**

	Ustaw media queries tak, aby:
	* na ekranach mniejszych niż 400px kolor tła był zielony,
	* na ekranach mniejszych niż 800px (ale większych niż 400px) kolor tła był fioletowy,
	* na ekranach większych niż 800px kolor tła był pomarańczowy.

3. **Zmień układ elementów**

	Stwórz dwa boxy w HTML. W Sass ustaw je obok siebie oraz ustaw im szerokość i wysokość na 400px oraz kolor i margines lewy na 10px.
	Za pomocą media queries spraw, aby na ekranach mniejszych niż 640px elementy "spadły" pod siebie i aby ich
	szerokość była ustawiona na 100%.

4. **Strona w układzie grid**

	Przygotuj prostą stronę w oparciu o układ kolumnowy odwzorowując poniższy obraz. Przygotują stronę tak, aby szerokość elementów można było określić poprzez nadanie im klasy określającej liczbę kolumn. Sam zaprojektuj grid.

		![grid](images/grid.jpg)

	Teraz, za pomocą media queries zmień swój grid, tak aby na ekranie smartfona główne elementy układu strony wyświetlały się jeden pod drugim, a nie obok siebie. Zrób to w taki sposób, aby gdy urządzenie jest w orientacji poziomej, kolumny nadal były wyświetlane obok siebie.

5. Ustaw wielkość czionki dla swojego projektu (dla nagłówków, paragrafów itp). Zapisz wielkości do
	zmiennych w Sass. Zapisz również do zmiennych breakpoints dla telefonu i tabletu. Następnie napisz mixin,
	który w zależności od urządzenia powiększy czcionkę o 2px. Użyj podejścia mobile first.

6. **Flexbox**

	Za pomocą flexboxa,
	* ustaw 4 dowolne elementy (stwórz je w pliku index.html) obok siebie. Następnie wyrównaj je do prawej strony,
	* ustaw elementy listy o klasie ```lista``` na środku strony.

7. **Flexbox -layout**

	Używając flexbox przygotuj układ strony "The Holy Grail".

8.  **Flexbox - elementy**

	Używająć flexboxa ustaw 6 kółek w następujący sposób:

	![Flexbox](images/flex1.jpg)

	Ustaw kółka w taki sposób, aby przy mniejszej szerokości ekranu, automatycznie spadały pod siebie.
	Przykład wyżej pokazuje, że jedno kólko się nie mieści w vieporcie i dlatego spada w dół.
	Stwórz mixin dla prefixów flexboxa.

6. **Warunkowe wykonanie skryptu**

	Utwórz na Twojej stronie sekcję nawigacyjną z odnośnikami. Spraw, by nie była domyślnie wyświetlana na ekranie smartfona, a w momencie kiedy jest ukryta widoczny był element z treścią „Menu”, który jeśli zostanie kliknięty pokazuje i ukrywa nawigację. Uważaj na sytuację kiedy menu na mniejszycm ekranie będzie widoczne i użytkownik rozszerzy przeglądarkę. Powinno zniknąć przy odpowiedniej szerokości i powinna pokazać się lista z menu.
	Pamiętaj, aby skrypt był wykonywany tylko jeśli użytkownik odwiedza stronę na smartfonie.

7. **Wstawianie obrazów**

	Wstaw na swoją stronę dwa obrazy. Pierwszy z nich wstaw używając tagu ```<img>```, a drugi w CSS jako tło elementu ```<div>```. Zrób to w taki sposób, aby na ekranie komputera stacjonarnego obrazy wyświetlały się obok siebie i każdy z nich miał 50% szerokości ekranu, a na ekranie tabletu jeden pod drugim mając 100% szerokości ekranu.
	Wykorzystaj zdobytą wiedzę i ustaw style tak, aby oba obraz skalowały się przy zmniejszaniu okna przeglądarki.
