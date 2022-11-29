## README

# Shopping List App

![wireframe](./assets/wireframe.png)

## HTML

See wireframe

## ORDER OF OPERATION

-   link supabase
-   sign up, login, logout auth
-   insert data into table
-   display data
-   interact with data

## SUPABASE

URL: https://uqwstvnsesaenalrdjyp.supabase.co

KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxd3N0dm5zZXNhZW5hbHJkanlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjYsImV4cCI6MTk4MzY4NDAyNn0.bZ660DcBSXEiAg5PHlsCACk9kEfmD8_HYAnhjOB69Vo

Table Name: list

columns: id, itemName, checked, userID

## List Page Events

checkAuth()

-   redirect to login

await logOut()

fetchList()

-   on load
-   on submit
-   on complete
-   on delete

displayList() (on load, on submit, on complete, on delete)

-   on load
-   on submit
-   on complete
-   on delete

renderItems()

-   on load
-   on submit

createItem()

-   on submit

checkItem(id)

-   on click

deleteAll()

-   on delete

## Auth Page Events

signInForm

```
if (user) {

location.replace('/');

}
```

signUpForm

```
if (user) {

location.replace('/');

}
```

## Auth related fetch-utils

getUser()

```
return client.auth.session() && client.auth.session().user;
```

checkAuth()

```
    const user = getUser();

    if (!user) location.replace('../');
```

redirectIfLogginIn()

signUpUser()

signInUser()

logOut()

checkError({data, error})

```
return error ? console.error(error) : data;
```
