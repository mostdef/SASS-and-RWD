#Sass

1. **Tworzenie projektu**

	* Dodaj w pliku index.html nagłówek ```h1``` z tekstem, np.  „Hello, Sassy!” i otwórz go w przeglądarce.
	* Następnie, utwórz katalog o nazwie scss, a w nim plik style.scss.  W pliku określ kolor dla nagłówka oraz kolor tła całej strony. Najlepiej tak, aby nagłówek był czytelny.
	* W pliku index.html wczytaj **wygenerowany arkusz styli z odpowiednim rozszerzeniem.**
	* Skompiluj plik sass w znany Ci sposób (np. za pomocą gulpa), sprawdź czy wygenerował się odpowiedni katalog z plikiem css.
	* Odśwież stronę w przeglądarce.
	* Zmień teraz kolor nagłówka w pliku Sass i sprawdź jeszcze raz.

2. **Nadpisywanie zmian**

	Bezpośrednio w wygenerowanym pliku CSS zmień kolor nagłówka i wprowadź dodatkową właściwość, np. margines. Sprawdź zmiany w przeglądarce. Przejdź do pliku SCSS i wprowadź dowolną zmianę inną od tej wprowadzonej w pliku CSS, np. padding. Zapisz plik i sprawdź rezultat w wynikowym pliku CSS i przeglądarce. Co się zmieniło?

3. **Formatowanie styli wyjściowych**

	Przetestuj różne opcje formatowania styli wyjściowych. Który Ci najbardziej odpowiada?

4. **Mapy kodu źródłowego**

	Wygeneruj sourcemaps dla Twojego pliku sass i przetestuj jej działanie w przeglądarce.

5. **Komentarze**

	Dodaj oba rodzaje komentarzy do pliku SCSS i sprawdź, które są kompilowane do CSS, a które nie.

6. **Zmienne**

	* Zdefiniuj dwie zmienne, które będą przechowywały główne kolory strony.
	* W pliku index.html jest zdefiniowana lista ```ul``` o klasie ```menu```. Zmień kolor jej tekstu na jeden z kolorów głównych, które zdefiniowałeś. Ten sam kolor ustaw dla nagłówka.
	* Dodaj kolejną zmienną, w której zdefiniujesz padding górny i dolny. Ustaw padding dla elementów section.

7. **Zagnieżdżanie**

	* Ostyluj elementy listy o klasie ```menu``` w taki sposób, aby były obok siebie, oraz ustaw im padding lewy na 10px. Całej liście ustaw tło. Wybierz kolor ze zmiennych, które zdefiniowałeś.
	* Ustaw border dla elementu ```header```. Skorzystaj z kolorów, które zdefiniowałeś.
	* Ostyluj element ```main-width```. Szerokość strony ustaw na 1000px i wstaw do zmiennej.

	Pamiętaj o rozsądnym zagieżdżaniu.

8. **Selektor rodzica &**

	Stwórz w jednej z sekcji listę z linkami do 3 ulubionych stron. Spraw, aby:
	* po najechaniu na linki zmieniał się ich kolor na czerwony,
	* dla pierwszego elementu listy, ustaw kolor pomarańczowy,
	* dla ostatniego elementu listy, ustaw kolor zielony.

9. **Selektor rodzica & - jeszcze raz** :smile:

	Listę z nawigacją, która znajduje się w stopce ostyluj, tak aby jej elementy wyświetlały się obok siebie i były wyrównane do lewej.
	Po najechaniu kursorem na element listy, powinien zmienić się jej kolor lub tło. Spraw też, aby ostatni element był wyrównany do prawej.

10. **Zorganizuj pliki Sass-owe według schematu prezentacji**: (jeśli nie potrzebujesz, któregoś z plików bądź katalogów nie twórz go):

	Przeglądarka powinna wysłać tylko jedno zapytanie do serwera dotyczące plików CSS.

11. **Zastąp prefiksy przeglądarek używając mixin**

	Dodaj do elementów listy zaokrąglone obramowanie używając „vendor prefixes” (-webkit, -moz). Napisz i wykorzystaj do tego mixin z argumentem, którym będzie wielkość zaokrąglenia. Pamiętaj o odpowiednim zagnieżdżeniu elementów.
	Sprawdź czy border-radius potrzebuje jeszcze prefixów [Can I use - border-radius](http://caniuse.com/#search=border-radius)

12. **Dziedziczenie**

	W prezentacji rozmawialiśmy o problemach związanych z extend.
	* Pamiętasz problem z niezamierzonymi stylami, gdzie każda klasa .error była podkreślana i zmieniała kolor przy najeżdżaniu kursorem? Spróbuj naprawić ten problem.
	* Pamiętasz problem z niezamierzonymi i zbędnymi selektorami? Spróbuj naprawić ten problem.

13. **Placeholder**

	Stwórz w jednej z sekcji 3 boksy, które reprezentują: sukces, error i info.

	![Placeholder](images/placeholder.jpg)

	Ostyluj je za pomocą Sass. Spróbuj wykorzystać w tym zadaniu placeholder, aby nie generować dodatkowej reguły w CSS. Niech Twój kod HTML wygląda w następujący sposób:

	```<div class="success"> succes </div>```

	```<div class="error"> error </div>```

	```<div class="info"> info </div>```


14. **Interpolacja i pętle**

	Wstaw na stronie kilka nagłówków, np. od ```<h1>``` do ```<h4>```. Zapisz za pomocą zmiennej wysokość linii i podstawowy rozmiar tekstu, a następnie zastosuj dla całego dokumentu.

	Ostyluj nagłówki w taki sposób, aby na podstawie zdefiniowanego rozmiaru tekstu zmieniała się ich wielkość. Wykorzystaj pętle i interpolację.
	Użyj funkcji do obliczania rozmiaru nagłówka z mnożnikiem 1,3 pamiętaj o ich hierarchii (h1 powinien być największy).

	Ustaw kolory nagłówków tak, by każdy kolejny był jaśniejszy od poprzedniego o 15%.


15. **Interpolacja i logika**

Za pomocą pętli określ kolor obramowania dla 10 kontenerów. Niech kolor będzie pomarańczowy dla parzystych kontenerów, a niebieski dla nieparzystych.

Przykład:

		```<div class="block_1"><div>```

		```<div class="block_2"><div>```

		```<div class="block_3"><div>```

		```<div class="block_4"><div>```

16. **Mapy**

	Stwórz mapę z 5 wybranymi kolorami. Wykorzystaj ją, aby ustawić kolor tła dla zadania z okienkami (success, error, info).
