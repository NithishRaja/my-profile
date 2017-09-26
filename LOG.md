# LOG

* **started at 1537 on 11-09-2017**
* start writing **notFound** component at 1539
* finish **notFound** component at 1546
* waiting for `npm install` inside client to finish
* `npm install` finished at 1609
* run `npm start` to test **notFound** component at 1612
* throws syntax error at 1613
* error resolved at 1614
* **notFound** component works as expected at 1615
* add link to go back to home at 1616
* link works as expected at 1617
* start writing **home** component at 1618
* link **home** component to `/` path at 1620
* decide on contents for **home** components later
* start writing navbar at 1623
* finish **navbar** component at 1631
* test navbar component at 1631
* throws syntax error at 1632
* remove comments from JSX at 1632
* **navbar** works as expected at 1634
* removing unwanted JSX at 1635
* finish editing **navbar** component at 1645
* start moving navbar routes into separate file at 1647
* finish moving navbar routes into separate file at 1652
* **ended at 1652 on 11-09-2017**

* **started at 1853 on 12-09-2017**
* start adding links to **navbar** component at 1853
* finished adding links to **navbar** component at 1901
* decided to move the links in **navbar** component to separate file at 1902
* removed JSX for links from **navbar** component at 1903
* decided to add links back for temporary use at 1904
* test new code at 1907
* since different router is used for head and root, root doesn't change if link is clicked inside head
* moved head routes inside root at 1914
* works as expected at 1914
* must decide on content for pages before writing component
* **ended at 1922 on 12-09-2017**

* **started at 1446 on 13-09-2017**
* start adding profile card to **home** component at 1450
* moved links JSX inside **home** component at 1510
* finished adding intro/bio at 1513
* start adding page cover at 1513
* finished adding page cover at 1517
* works as expected at 1518
* start moving links JSX into separate component at 1518
* finished moving links JSX into separate component at 1521
* start writing separate routes for **links** component at 1522
* finished writing separate routes for **links** component at 1524
* works as expected at 1524
* start moving page-cover into separate component at 1525
* finished moving page-cover into separate component at 1529
* start writing separate routes for **pagecover** component at 1530
* finished writing separate routes for **pagecover** component at 1532
* works as expected at 1532
* moved bio JSX into separate component at 1536, works as expected
* **ended at 1539 on 13-09-2017**

* **started at 0842 on 14-09-2017**
* created **gallery** component at 0846
* add featuredImage and album covers at 0855
* separated featuredImage and album covers into separate components at 0859
* start making gallery components scalable at 0900
* finished making gallery component scalable at 0911
* **ended at 0912 on 14-09-2017**

* **started at 1140 on 14-09-2017**
* start making **blog** component at 1140
* finished making **blog** component at 1141
* start making **preview** component at 1147
* finished **preview** component at 1200
* start **article** component at 1201
* removed article component at 1218
* **ended at 1218 on 14-09-2017**

* **started at 1651 on 16-09-2017**
* start implement `redux` for **home** component at 1652
* wrote container for **home** component at 1657
* added reducer to carry bio info at 1702
* start writing container for **gallery** component at 1705
* **ended at 1707 on 16-09-2017**

* **started at 1754 on 16-09-2017**
* finished container at 1756
* added reducer for featuredImage and albumCover at 1802
* app works as expected at 1802
* start writing container for **blog** component at 1803
* finished container at 1807
* made reducer for managing blogContent at 1811
* app works as expected at 1811
* finished **contact** component at 1843
* start **about** component at 1844
* finished **about** component at 1859
* app works as expected at 1859
* **ended at 1859 on 16-09-2017**

* **started at 2122 on 17-09-2017**
* start to use `redux` to refactor **about** and **contact** components at 2123
* finished refactoring **contact** component using `redux` at 2151
* finished refactoring **about** component using `redux` at 2207
* **ended at 2207 on 17-09-2017**

* **started at 1507 on 18-09-2017**
* removed link to about and contact pages from **navbar** component at 1510
* start to write actions for buttons at 1511
* added a click listener to buttons in **links** component at 1516
* button listener works only for home link
* wrote separate button listeners for all links at 1529
* works as expected at 1530
* start writing reducer to track current page at 1531
* finished writing reducer at 1545
* wrote container for **navbar** component at 1550
* finished action listeners for buttons in **navbar** component at 1554
* app works as expected at 1555
* **ended at 1555 on 18-09-2017**

* **started at 1737 on 18-09-2017**
* made TODO.md file at 1759
* start making **article** component at 1801
* wrote boilerplate for **article** component at 1805
* **article** component works as expected at 1805
* cannot pass article info as props to **article** component
* can save selected article in state and let **article** component access it
* this way sending AJAX request is avoided
* component is rendered faster
* but all article info must be obtained at beginning which makes startup slow
* can save selected article id in state and let **article** component send AJAX request to fetch info
* this way app startup is faster
* data usage is optimized
* component must have alert to notify user that data is being received
* component must have alert to notify user there was an error with AJAX request
* choosing to implement second option
* added action listener to Read Article button at 1820
* **ended at 1823 on 18-09-2017**

* **started at 1848 on 19-09-2017**
* finished updateSelectedArticle action at 1851
* started selectedArticleReducer at 1903
* finished selectedArticleReducer at 1913
* bug fixes need for selectedArticleReducer
* **ended at 1913 on 19-09-2017**

* **started at 1717 on 20-09-2017**
* made separate container for **article** component at 1720
* **article** component is separated from **blog** component to pass selectedArticle as prop
* wrote boilerplate JSX for **article** component at 1737
* **article** component works as expected
* start adding Link in **gallery** component to point to album at 1741
* moved Link from **gallery** component to **albumCover** component at 1754
* start writing **album** component at 1759
* wrote selectedAlbumReducer and updateSelectedAlbum at 1814
* finished **album** component at 1822
* app works as expected
* refactored **album** component at 1837
* app works as expected
* **ended at 1838 on 20-09-2017**

* **started at 1924 on 21-09-2017**
* use `rxjs` for async data retrieval
* start writing boilerplate for updateCurrentPageEpic at 1929
* decided to remove updateCurrentPageEpic at 1934
* let currentPageReducer be synchronous
* start writing boilerplate for updateSelectedAlbumEpic at 1935
* updateSelectedAlbumEpic completed at 1942
* start writing boilerplate for updateSelectedArticleEpic at 1943
* console error thrown `Cannot read property 'topic' of null`
* selectedArticleReducer doesn't get updated
* error resolved at 2004
* error caused due to not including epic inside combineEpics
* **ended at 2006 on 21-09-2017**

* **started at 0911 on 22-09-2017**
* refactored **links** component to highlight active tab at 1913
* **ended at 0923 on 22-09-2017**

* **started at 1343 on 23-09-2017**
* add async calls to `rxjs` epics
* created new folder api inside public at 1346
* added `rxjs` functionality to gallery component at 1413
* get featuredImage via redux-observable
* epic created for featuredImage at 1420
* worte JSX for fetching featuredImage and fetching albumCovers at 1430
* refactored **gallery** component at 1438
* wrote JSX for fetching blogContent at 1443
* refactored **blog** component at 1454
* refactored **contact** component at 1505
* refactored **about** component at 1514
* refactored **home** component at 1523
* **ended at 1528 on 23-09-2017**

* **started at 1328 on 24-09-2017**
* used rxjs to fetch aboutInfo via ajax request at 1328
* used rxjs to fetch albumCover via ajax request at 1330
* used rxjs to fetch bio via ajax request at 1333
* used rxjs to fetch blogContent via ajax request at 1336
* used rxjs to fetch contactInfo via ajax request at 1339
* used rxjs to fetch featuredImage via ajax request at 1341
* used rxjs to fetch selectedAlbum via ajax request at 1343
* console error thrown `Cannot read property 'title' of null` at 1343
* resloved error at 1430
* used rxjs to fetch selectedAlbum via ajax request at 1448
* app works as expected
* **ended at 1450 on 24-09-2017**

* **started at 1424 on 25-09-2017**
* start writing routes for api at 1424
* finished writing routes for api at 1436
* starting to move functionality from routes into middleware at 1437
* finished moving functionality from routes into middleware at 1444
* moved middleware concerning api into a separate file at 1446
* api routes no longer work at 1446
* fixed error at 1450
* server works as expected
* started to refactor api middleware at 1453
* moving api middleware into separate folder and moving each middleware into separate file
* finished moving middleware at 1459
* made the frontend render for "/" route at 1507
* made react app get json from server instead of static files at 1511
* **ended at 1512 on 25-09-2017**

* **started at 1836 on 26-09-2017**
* made database directory at 1837
* installed `redis`, `connect-redis`,  `express-session` at 1839
* added connection to redis database for session storage at 1845
* **ended at 1847 on 26-09-2017**
