# Sass & RWD - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
BARDZO WAŻNE - Wasze zadania są sprawdzane przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne, strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcje i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane w zadaniu.


### Dzień 3 - RWD część 2
> Zadania z tego dnia wykonuj w pliku main.scss oraz index.html. Wygeneruj odpowiedni plik .css do folderu css
Dołącz plik .gitignore (uwzględniając w nim node_modules)

#### Zadanie 1. Flexbox &ndash; layout
W pliku `index.html` znajdziesz sekcję o nazwie `hoily-grail`.
Za pomocą flexboxa stwórz szablon strony na podstawie layoutu niżej:

![grid](images/hoily.jpg)

#### Zadanie 2. Flexbox. Właściwość flex-shrink
> Należy wykonać w innej przeglądarce niż Chrome

W pliku `index.html` znajdziesz sekcję o nazwie `flex-container`.

* dodaj do jej klasy właściwość display: flex oraz ustaw tło. Niech kierunek flexa będzie poziomy.
* następnie dodaj wewnątrz kontenera kilka zdjęć obok siebie o łącznej szerokości, co najmniej 500px, ale nie większej niż 1024px – niech wymiary zdjęć będą takie same.
* ustaw zdjęcia tak, by były wyśrodkowane względem wysokości kontenera
* dodaj odpowiednie właściwości kontenerowi i zdjęciom, tak aby przy zmniejszaniu rozmiaru okna przeglądarki, zdjęcia się nie kurczyły, tylko przewijały
* niezbędne będzie wykorzystanie właściwości `overflow`

![Flexbox](images/flex-shrink.jpg)

#### Zadanie 3. Flexbox. Właściwość flex-grow i flex-shrink
> Włącz widok responsywny przeglądarki i ustaw okno na szerokość mobilną

W pliku `index.html` znajdziesz sekcję o nazwie `flex-container-column`.

* dodaj do jej klasy właściwość display: flex o orientacji pionowej oraz ustaw height: 100vh
* dodaj do kontenera trzy sekcje: header, main oraz footer. Niech każda z nich posiada kolorowe tło.
* określ dowolną wysokość dla headera i footera
* w sekcji main wrzuć kilka paragrafów
* przy pomocy właściwości flex-boxa ustaw header i footer tak, aby zawsze były widoczne w oknie przeglądarki – były przyklejone odpowiednio do góry i dołu okna
* dodaj odpowiednie właściwości aby przy zmniejszaniu wysokości okna przeglądarki, tekst w środkowej sekcji był przewijalny
* niezbędne będzie wykorzystanie właściwości `overflow`

![Flexbox](images/flex-grow-shrink.jpg)


### Dzień 4 Sass/RWD

#### Zadanie 1. Bootstrap

Jako początkujący frontend developer musisz się przyzwyczajać do ciągłej nauki, do ciągłego doskonalenia własnych umiejętności. Technologie i języki się zmieniają. Ważne, aby zdawać sobie z tego sprawę i nadążać za zmianami.
W nazwiązaniu do wstępu zajrzyj na stronę http://getbootstrap.com/examples/grid/
Przetestuj ją, jak skalują się kolumny?
Następnie wejdź na stronę http://getbootstrap.com/ , ściągnij odpowiednie pliki :) i dołącz do projektu.
Kiedy już dodasz bootstrapa do projektu, spróbuj:
* stworzyć kilka kolumn korzystając z jego dowolnych klas
* stworzyć kilka nagłówków np. `h1`, `h2`, `h3`, `h4` itd.
* stworzyć kilka przycisków i dodać im dowolne klasy z bootstrapa
* stworzyć przykładowy layout http://getbootstrap.com/getting-started/#template

#### Zadanie 2. Powtórz materiał :)
