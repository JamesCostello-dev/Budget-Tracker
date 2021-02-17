## pwa-budget-tracker

---

# AS AN avid traveler

# I WANT to be able to track my withdrawals and deposits with or without a data/internet connection

# SO THAT my account balance is accurate when I am traveling

# GIVEN a budget tracker without an internet connection

# WHEN the user inputs an expense or deposit

# THEN they will receive a notification that they have added an expense or deposit

# WHEN the user reestablishes an internet connection

# THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

---

# use IndexedDB to add offline functionality. Review Module 18: NoSQL, Lesson 4: Add Offline Persistence with IndexedDB as a refresher on how to add this to your application.

# add a service worker to your application. Review Module 19: Progressive Web Applications (PWA), Lesson 4: Using Service Workers as a refresher on how to add this to your application.

# Chrome DevTools makes it possible to test service workers on localhost in development. Simply click the Application tab, then select Service Workers from the menu on the left.

---

# add your idb.js file to the public/js/ directory of your application.

# add your service worker to the root of the public/ directory of your application.

---

# The ability to enter deposits offline.

# The ability to enter expenses offline.

# Offline entries should be added to the tracker when the application is brought back online.

---

# add a web manifest to your application with the app’s metadata

# manifest.json file and add the following properties(create manually and add to the root o public/ 'Review module 19 (PWA) lesson 5')

'name'
'short name'
'icon'
'theme_color'
'background_color'
'start_url'
'display'

---

# deploy to heroku and mongo atlas(module 18 lesson 5)
