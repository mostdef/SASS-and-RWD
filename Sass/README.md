#Sass

##Zakładamy, że masz już zainstalowane Ruby oraz Sass.

1. **Tworzenie projektu**

	* Stwórz w WebStorm nowy projekt o dowolnej nazwie z plikiem index.html. 
	* Dodaj w nim nagłówek z tekstem, np. nagłówek „Hello, Sassy!” i otwórz go w przeglądarce.
	* Następnie, utwórz katalog o nazwie css, a w nim plik style.scss. Włącz File Watcher jeśli prosi o to Webstrom (Jeśli nie musisz go włączyć sam w ustawieniach). W pliku określ kolor dla nagłówka oraz kolor tła całej strony. Najlepiej tak, aby nagłówek był czytelny. 
	* W pliku index.html wczytaj **wygenerowany arkusz styli z odpowiednim rozszerzeniem.** Odśwież stronę w przeglądarce, by zobaczyć, czy zmiany zostały skompilowane.
	* Zmień teraz kolor nagłówka w pliku Sass i sprawdź jeszcze raz.

2. **Sprawdź mapowanie kodu źródłowego**

	Za pomocą narzędzi deweloperskich dostępnych w Twojej przeglądarce sprawdź nazwę pliku źródłowego oraz wiersz, w którym została zdefiniowana wartość koloru nagłówka.
 
3. **Nadpisywanie zmian**

	Bezpośrednio w wygenerowanym pliku CSS zmień kolor nagłówka i wprowadź dodatkową właściwość, np. margines. Sprawdź zmiany w przeglądarce. Przejdź do pliku SCSS i wprowadź dowolną zmianę inną od tej wprowadzonej w pliku CSS, np. padding. Zapisz plik i sprawdź rezultat w wynikowym pliku CSS i przeglądarce. Co się zmieniło? 

4. **Komentarze**

	Dodaj dwa rodzaje komentarzy ("//"" oraz "/*  */") do pliku scss i sprawdź, które są kompilowane do css, a które nie.

5. **Użyj zmiennej do określenia koloru**

	Dodaj w pliku index.html listę przynajmniej trzech możliwości Sass. Kolor tekstu listy powinien być taki sam jak nagłówka. Użyj do tego jednej zmiennej.

6. **Selektor rodzica &**

	Ustaw na elementach listy z poprzedniego zadania, pseudo-klasę hover i ustaw w niej kolor tekstu na czerwony. Dla pierwszego elementu listy ustaw kolor pomarańczowy.

7. **Selektor rodzica & - jeszcze raz ** :smile:

	Utwórz toolbar z nawigacją, tak by jej elementy wyświetlały się obok siebie i były wyrównane do lewej. Po najechaniu kursorem powinien zmienić się ich kolor lub tło. Toolbar powinien powinien mieć klasę .nav-toolbar, a odnośniki klasę .nav-item. Spraw też aby ostatni element był wyrównany do prawej.

8. **Zastąp prefiksy przeglądarek używając mixin**

	Dodaj do elementów listy zaokrąglone obramowanie używając „vendor prefixes” (-webkit, -moz). Napisz i wykorzystaj do tego mixin z argumentem, którym będzie wielkość zaokrąglenia. Pamiętaj o odpowiednim zagnieżdżeniu elementów. 
	Sprawdź czy border-radius potrzebuje jeszcze prefixów [Can I use - border-radius](http://caniuse.com/#search=border-radius)

9. **Zorganizuj pliki Sass-owe według schematu poniżej**: (jeśli nie potrzebujesz, któregoś z plików bądź katalogów nie twórz go):

	Przeglądarka powinna wysłać tylko jedno zapytanie do serwera dotyczące plików CSS.


10. **Logika i interpolacja**

	Za pomocą pętli określ kolor obramowania dla 10 kontenerów. Niech kolor będzie pomarańczowy dla parzystych kontenerów, a niebieski dla nieparzystych.

	Przykład:
	
	```<div class="block_1"><div>```

	```<div class="block_2"><div>```

	```<div class="block_3"><div>```

	```<div class="block_4"><div>```

