# DesiAtlas🌐(JS-CRUD-pagination-Search)

### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation

```
npm install --engine-strict
```

## Start only the Backend server

```
npm run server
```

## Start only Frontend server

```
npm run start
```

## Start both BE & FE in a single command

```
npm run watch
```

# Important files

```
├── index.html
├── scripts
│   └── index.js
└── styles
    └── style.css
```

## Maximum Marks - 22

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics

```
✅ able to submit the app - 1 mark ( minimum score )

### fetching the initial data
---------------------------------------
✅ Shows the correct initial data - 3 marks

### Add, delete, and update a state
-----------------------------------------
✅ Able to add new state - 2 marks
✅ Check by adding a new state the pagination button should increase - 1 mark
✅ Able to delete state - 2 marks
✅ Able to edit all fields of the state - 2 marks
✅ Able to edit the GDP ranking - 1 mark

### Sorting and filtering
----------------------------
✅ Low-to-high Sorts as expected - 1 mark
✅ high-to-low Sorts as expected - 1 mark
✅ Filters as expected - 1 mark

### pagination functionality
------------------------------
✅ Low-to-high Sorts as expected with pagination - 1 mark
✅ high-to-low Sorts as expected with pagination - 1 mark
✅ Filters as expected with pagination - 1 mark
✅ Check for pagination functionality - 2 mark

### search functionality
---------------------------
✅ Able to search by stateName - 1 mark
✅ Able to search by the language - 1 mark

```

### You haven't been taught Cypress to run the test cases locally; you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given IDs or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

- <h5 style=" color: red">Ensure that Pagination, Sorting, Filtering, and Searching are performed exclusively through the JSON server to prevent potential test case failures.</h5>
- [JSON Server documentation](https://github.com/typicode/json-server)
- <h5 style="color: red">Restrict the JSON response to just 5 items using pagination (_page={pagenumber}&_limit=5)</h5>
- <h5 style="color: red">Pagination functionality should be compatible with sorting and filtering.</h5>

## Problem statements

Your task is to build **_`DesiAtlas`_** app where different states are available, and you have to perform all `CRUD` operations here, able to create, update, Read, and Delete states and also implement search functionality.

- Employ the fetch method for making API requests.
- Regardless of whether you are implementing sorting, filtering, or searching, ensure that each fetch request limits the data to 5 items per page <span style="color: red">(Hint: \_page=<pagenumber>&\_limit=5)</span>.

### <h1 style="color:#215dc8">index page</h1>

<h4 style="color:#215dc8">
Problem 1. List of states on page load [3]
</h4>

On page `load`, a list of all `states` should be shown in the `div#data-list-wrapper`.

Expected markup (States card list):

<!-- ![landingpage markup]() -->
<figure>
<img src="https://i.imgur.com/GmePah4.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>landingpage markup</b></figcaption>
</figure>

- The `div.card` is a card appended to the div with `div.card-list`.
- In the above markup you can see only 5 cards are present on the first page and each page limit is 5.

Expected markup (example, single card div inside card-list div):

<!-- ![stateMarkUp]() -->

<figure>
<img src="https://i.imgur.com/uMTz7ZZ.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single states card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **card** with `div.card` and `data-id={id of div}` having child div as
  1. The `div.card-img` in this image of the states is present.
  2. The `div.card-body` in this
     - h5 tag with `h5.card-stateName` **with name of state**.
     - p tag with `p.card-capital` with the _capital_ of the state
     - p tag with `p.card-population` with the _population_ of the state
     - p tag with `p.card-region` with the _region_ of a state
     - p tag with `p.card-language` with the _language_ of the state
     - p tag with `p.card-GDPRanking` with the _GDP_ ranking of a state
     - p tag with `p.card-tourismPlaces` with the _tourism Places_ of a state
     - anchor tag with `a.card-link` with _`Edit`_ text
       1. class= card-link
       2. href=#
       3. data-id= id of the state
     - button with `button.card-button` with _`Delete`_ text
       1. class= card-button
       2. data-id= id of the state

| Sr. | tag    | class                                                 | text/src                      |
| --- | ------ | ----------------------------------------------------- | ----------------------------- |
| 1.  | div    | <span style="color:#215dc8">card-img</span>           | add `img` tag inside this div |
| 1.  | img    | -                                                     | image of the state            |
| 2.  | h5     | <span style="color:#215dc8">card-stateName</span>     | the `stateName` of the state  |
| 3.  | p      | <span style="color:#215dc8">card-capital</span>       | `capital` of state            |
| 4.  | p      | <span style="color:#215dc8">card-population</span>    | `population` of state         |
| 5.  | p      | <span style="color:#215dc8">card-region</span>        | `region` of state             |
| 6.  | p      | <span style="color:#215dc8">card-language</span>      | `language` of state           |
| 7.  | p      | <span style="color:#215dc8">card-GDPRanking</span>    | `GDPRanking` of state         |
| 8.  | p      | <span style="color:#215dc8">card-tourismPlaces</span> | `tourismPlaces` of state      |
| 9.  | a      | <span style="color:#215dc8">card-link</span>          | `Edit` text                   |
|     |        | data-id= id of the state                              |                               |
| 10. | button | <span style="color:#215dc8">card-button</span>        | `Delete` text                 |
|     |        | data-id= id of the state                              |                               |

- <span style="color:red">Don't add any additional string or text only show values of the keys</span>
- Here, _`data-id`_ is used to catch the `id` of the states. You can use a dataset.id refer to [working with dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

Expected UI (example card):

<!-- ![stateUI]() -->
<figure>
<img src="https://i.imgur.com/cQrHOCY.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single states card UI</b></figcaption>
</figure>

Data mapping:

<!-- ![dataMarkUp]() -->
<figure>
<img src="https://i.imgur.com/a7zXsig.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>dataMarkUp
</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/states`
- The states should be shown on page `load`

<h4 style="color:#215dc8">
Problem 2. Pagination [2]
</h4>

<figure>
<img src="https://i.imgur.com/M5SKreb.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Pagination</b></figcaption>
</figure>

- The buttons for pagination should be appended inside the `div` with `id=pagination-wrapper"` which is already mentioned in the boilerplate
- add \_limit = 5 i.e. on each page `5` states should be there
- At the start, 7 buttons must be there (we have a total of 34 objects in the db.json file, and using \_limit=5, we need to create 7 buttons)
- pagination should be dynamic as the pagination button should increase when we _add_ a new state. `(i.e from 7 to 8)`
- **Hint** :
  1. `?_page={pagenumber}&_limit=5`
  2. use `res.headers.get("X-Total-Count")` to get the count of the total number of data in db.json and calculate the page based on it

```js
fetch("your_api_endpoint")
  .then((response) => {
    const totalCount = response.headers.get("X-Total-Count");
    // Process the total count or continue with other operations
    return response.json();
  })
  .then((data) => {
    // Handle the data returned from the API
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch
    console.error("Error:", error);
  });
```

- Note:- name the class names and data-testid as mentioned in the image provided above(markup)

<h4 style="color:#215dc8">
Problem 3. Ability to add new States [2]
</h4>

<!-- ![add states ] -->
<figure>
<img src="https://i.imgur.com/gyj7aU2.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Add new states
</b></figcaption>
</figure>

- use the below data to add a new state

```
        {
          stateName: "Tripura",
          population: 3990322,
          GDPRanking: "33",
          image: "https://source.unsplash.com/500x300?Tripura",
          language: "Bengali, Kokborok",
          capital: "Agartala",
          region: "North East India",
          tourismPlaces: ["Ujjayanta Palace", "Neermahal", "Unakoti"],  // (Hint:- use .split(",") separate value by `,` and get array)
        }
```

- input fields and a `button#add-state` with the text `Add States` are already created in the template.
- on click of the `Add States` button make a 'POST' request at `${baseServerURL}/states`
- _make a 'GET' request after the post to get updated data at `${baseServerURL}/states`_
- **` the page must not reload the list must update`** otherwise you will lose the marks.

<!-- ![added states UI]() -->

<figure>
<img src="https://i.imgur.com/8718d95.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>new states UI
</b></figcaption>
</figure>

<h4 style="color:#215dc8">
Problem 4. Ability to delete a State [2]
</h4>

- In each state, the card adds a button `Delete` with `button.card-button` On clicking this button particular states must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at `${baseServerURL}/states/{stateId}`
- _make a 'GET' request after deleting to get updated data at `${baseServerURL}/states`_
- **` the page must not reload the list must update`** otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 5. Ability to update all the fields of state [2]
</h4>

- Able to populate the following input on edit link click.( _Hint_ - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)
- Add an event listener with `click` to anchor tag with class `.card-link` use preventDefault.
- The page should not reload on the click of the Edit link `.card-link`.

1. To update all fields

- `#update-state-id` should be populated with the `id` of the state
- `#update-state-Name` should be populated with the `stateName` of the state
- `#update-state-image` should be populated with the `image` link of the state
- `#update-state-capital` should be populated with the `capital` of the state
- `#update-state-population` should be populated with the `population` of the state
- `#update-state-language` should be populated with the `language` of the state
- `#update-state-GDPRanking` should be populated with the `GDPRanking` of the state
- `#update-state-region` should be populated with the `region` of the state
- `#update-state-tourismPlaces` should be populated with the `tourismPlaces` of the state

<figure>
<img src="https://i.imgur.com/ADk10UC.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Update all fields</b></figcaption>
</figure>

- make a 'PATCH' request at `${baseServerURL}/states/${stateId}` to update _stateName, population, GDPRanking, image, language, region, and tourismPlaces_
- _make a 'GET' request after the patch to get updated data at `${baseServerURL}/states`_
- **` the page must not reload the list must update`** otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 6. Ability to update only the GDPRanking [1]
</h4>

- Able to populate the following input on edit link click.( _Hint_ - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)

- `#update-GDP-state-id` should be populated with the `id` of the state
- `#update-GDP-state-GDPRanking` should be populated with the `GDPRanking` of the state

- Once the edit inputs are populated, if the user clicks the `#update-GDP-stateBtn` button.
- the GDPRanking of that particular state should update based on the value entered in the `#update-GDP-state-GDPRanking`.
- The GDPRanking of the state in the list should update without any page _reloads_.

- **` the page must not reload the list must update`** otherwise you will lose the marks.

- make a 'PATCH' request at `${baseServerURL}/states/${stateId}`

- _make a 'GET' request after the patch to get updated data at `${baseServerURL}/states`_

<h4 style="color:#215dc8">
Problem 7. Sorting States Based on GDPRanking
</h4>

- Sorting for `Low to High` UI:
  <!-- ![sort Low to high] -->
  <figure>
  <img src="https://i.imgur.com/7ahyMjx.png"  style=" border-radius: 5px;" width="100%"/>
  <figcaption align = "center"><b>sort Low to high</b></figcaption>
  </figure>

With the click of the button `#sort-low-to-high`, the state list should be sorted in ascending order based on their _GDPRanking_.

With the click of the button `#sort-high-to-low`, the state list should be sorted in descending order based on their _GDPRanking_.

<h4 style="color:#215dc8">
Problem 8. Filtering States based on the region [1]
</h4>
 You have to create three types of filters as

1.  **_North East India_**
2.  **_West India_**
3.  **_North India_**

- Filtering for `West India` UI:
<!-- ![West India] -->

<figure>
<img src="https://i.imgur.com/IbDyHDK.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Filter for region "West India"</b></figcaption>
</figure>

When the button `#filter-North-East-India` is clicked, the state list is expected to be filtered. It should only show the states whose `region` is **_`North East India`_**.

When the button `#filter-West-India` is clicked, the state list is expected to be filtered. It should only show the states whose `region` is **_`West India`_**.

When the button `#filter-North-India` is clicked, the state list is expected to be filtered. It should only show the states whose `region` is **_`North India`_**.

<h4 style="color:#215dc8">
Problem 9. Search by stateName/language
</h4>

- To implement search functionality on top there is a select tag with _options_ to search by stateName

1. **_`stateName`_**
<!-- ![search by stateName] -->

<figure>
<img src="https://i.imgur.com/UiT65P0.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Search by stateName and `Bihar` as search query</b></figcaption>
</figure>

2.  **_`language`_**

A select tag (`select#search-by-select`) with the following options is already created

1. stateName
2. language

- <span style=" color: green">**Ensure efficient navigation through search results by seamlessly integrating pagination.**</span>

Every time you have to select either option, next to it there is an input box (`input#search-by-input`) You have to enter the stateName/language if it is included in the stateName/language respectively show the state only after clicking a search button(`button#search-by-button`)
**Hint:** **_`?${stateName/language}_like=${stateName of state/language of state}`_**)

**_Note_**:- Get the updated data from API after the POST, PATCH, or DELETE request is done.

<figure>
<img src="https://i.imgur.com/ZhPGs4s.png"  style=" border-radius: 5px;" width="60%"/>
<figcaption align = "center"><b>Problem is tetsed on CP</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
